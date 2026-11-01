// Draft-only geometry check. No server, browser or project build.
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const THREE = require('three');
const root = path.resolve(__dirname, '../../..');
const diagnostics = [];
function compile(relative, imports) {
  const source = fs.readFileSync(path.join(root, relative), 'utf8').replaceAll('import.meta.env.BASE_URL', "'/'");
  const out = ts.transpileModule(source, { fileName: relative, reportDiagnostics: true, compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
  diagnostics.push(...out.diagnostics);
  const module = { exports: {} };
  new Function('require', 'module', 'exports', out.outputText)(name => imports[name] ?? require(name), module, module.exports);
  return module.exports;
}
const collision = compile('src/game/collision.ts', {});
const fakeThree = { ...THREE, TextureLoader: class { load(url) {
  if (!fs.existsSync(path.join(root, 'public', url))) throw Error('Missing texture: ' + url);
  return new THREE.Texture();
} } };
const kitchen = compile('src/game/kitchen.ts', { three: fakeThree, './collision': collision,
  'three/addons/loaders/GLTFLoader.js': { GLTFLoader: class { load(url) {
    if (!fs.existsSync(path.join(root, 'public', url))) throw Error('Missing model: ' + url);
  } } }
}).buildKitchen(new Set(), new Set());
if (diagnostics.length) throw Error(ts.formatDiagnosticsWithColorAndContext(diagnostics, { getCanonicalFileName: x => x, getCurrentDirectory: () => root, getNewLine: () => '\n' }));
const routes = [
  [[-5.2, 1.6], [-3.4, 1.6]],
  [[-3.4, 1.6], [-3.4, -0.8]],
  [[-3.4, -0.8], [3.2, -0.8]],
  [[3.2, -0.8], [3.2, 0]],
  [[3.2, 0], [8, 0]],
  [[8, 0], [8, 1.9]],
  [[8, 1.9], [10.6, 1.9]],
];
let samples = 0;
for (const [a, b] of routes) for (let i = 0; i <= 200; i++) {
  const p = { x: a[0] + (b[0] - a[0]) * i / 200, z: a[1] + (b[1] - a[1]) * i / 200 };
  if (!collision.isCircleFree(p, 0.1, kitchen.obstacles, kitchen.bounds)) throw Error('Blocked route: ' + JSON.stringify(p));
  samples++;
}
for (const [x, z] of [[5.1,.1],[6.1,-1.5],[8,-.5],[8.9,1.9]])
  if (!collision.isCircleFree({x,z}, .15, kitchen.obstacles, kitchen.bounds)) throw Error('Blocked loot: '+x+','+z);
console.log('DRAFT PASS: syntax diagnostics=0; '+samples+' route samples radius=.1; 4 loot locations radius=.15; asset paths exist.');
console.log('Bounds', kitchen.bounds, 'lair', kitchen.lair, 'obstacles', kitchen.obstacles.length, 'camera blockers', kitchen.cameraBlockers.length);
console.log('NOT CHECKED: rendering, actual GLB loading, camera motion, human navigation, game integration.');
