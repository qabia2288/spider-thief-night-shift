# Character refinement, 2026-10-31

- `spider-refined.glb`: newly constructed mesh exported from the connected Blender 5.2.3 instance. Runtime uses separate articulated eight-leg geometry from `src/game/spider.ts`. Three.js Y-up orientation checked after export.
- `human-resident.glb`: derivative of the existing `human.glb`/Kenney Animated Characters Survivors model in `123.blend`. Original geometry/skin weights and 58-bone skeleton retained; new shirt, trousers, slippers and clean forearm/hand materials. Original face atlas retained. Original assets were not overwritten.
- Runtime locomotion is implemented in `src/game/human/locomotion.ts`; original exported Idle/Run animation clips remain in the GLB but are not played as locomotion clips.
- Blender work was placed in separate refinement collections; the original `.blend` file was not overwritten.
