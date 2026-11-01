import json, math, shutil, struct
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
DEST = Path(__file__).resolve().parent
SRC = ROOT / 'tools/JamAssets/NewInterior/Architecture/kenney_building-kit'
NAMES = ['door-rotate-square-a', 'wall-doorway-square', 'wall-window-square-detailed', 'border', 'floor']

def mul(a, b):
    return [[sum(a[i][k] * b[k][j] for k in range(4)) for j in range(4)] for i in range(4)]

def matrix(node):
    if 'matrix' in node:
        m = node['matrix']
        return [[m[c*4+r] for c in range(4)] for r in range(4)]
    x,y,z,w = node.get('rotation',[0,0,0,1]); sx,sy,sz = node.get('scale',[1,1,1]); tx,ty,tz = node.get('translation',[0,0,0])
    return [[(1-2*(y*y+z*z))*sx, 2*(x*y-z*w)*sy, 2*(x*z+y*w)*sz, tx], [2*(x*y+z*w)*sx, (1-2*(x*x+z*z))*sy, 2*(y*z-x*w)*sz, ty], [2*(x*z-y*w)*sx, 2*(y*z+x*w)*sy, (1-2*(x*x+y*y))*sz, tz], [0,0,0,1]]

def inspect(path):
    data=path.read_bytes(); magic,ver,length=struct.unpack_from('<4sII',data)
    assert magic==b'glTF' and ver==2 and length==len(data)
    n,typ=struct.unpack_from('<II',data,12); assert typ==0x4e4f534a
    doc=json.loads(data[20:20+n]); assert all('uri' not in b or b['uri'].startswith('data:') for b in doc.get('buffers',[])); print('image URIs:', [i.get('uri') for i in doc.get('images',[])])
    for image in doc.get('images', []):
        uri=image.get('uri', '')
        if uri and not uri.startswith('data:'):
            source=(path.parent / uri).resolve(); target=(DEST / uri).resolve()
            assert DEST.resolve() in target.parents and source.is_file()
            target.parent.mkdir(parents=True, exist_ok=True); shutil.copy2(source,target)
    lo=[math.inf]*3; hi=[-math.inf]*3; count=0
    def visit(idx, parent):
        nonlocal count
        node=doc['nodes'][idx]; m=mul(parent,matrix(node))
        if 'mesh' in node:
            for p in doc['meshes'][node['mesh']]['primitives']:
                a=doc['accessors'][p['attributes']['POSITION']]; mn=a['min']; mx=a['max']; count+=1
                for mask in range(8):
                    v=[mx[i] if mask & (1<<i) else mn[i] for i in range(3)]+[1]
                    xyz=[sum(m[r][c]*v[c] for c in range(4)) for r in range(3)]
                    for i in range(3): lo[i]=min(lo[i],xyz[i]); hi[i]=max(hi[i],xyz[i])
        for child in node.get('children',[]): visit(child,m)
    identity=[[int(i==j) for j in range(4)] for i in range(4)]
    for idx in doc['scenes'][doc.get('scene',0)]['nodes']: visit(idx,identity)
    assert count and all(math.isfinite(v) for v in lo+hi)
    return {'min':lo,'max':hi,'size':[hi[i]-lo[i] for i in range(3)], 'primitives':count, 'bytes':len(data)}

shutil.copy2(SRC/'License.txt',DEST/'Kenney-Building-Kit-License.txt')
for name in NAMES:
    src=SRC/'Models/GLB format'/f'{name}.glb'; dst=DEST/f'{name}.glb'
    result=inspect(src); shutil.copy2(src,dst); assert dst.read_bytes()==src.read_bytes(); print(name, json.dumps(result))
