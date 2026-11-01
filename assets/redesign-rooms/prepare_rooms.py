"""Local asset preparation; stdlib only. Writes only beside this script.
Run: python public/assets/redesign-rooms/prepare_rooms.py
Does not invoke Blender, install dependencies, or modify game manifests.
"""
from pathlib import Path
import base64
import hashlib
import json
import math
import shutil
import struct

OUT = Path(__file__).resolve().parent
ROOT = OUT.parents[2]
SOURCE = ROOT / 'tools/JamAssets/NewInterior'
PACKS = [
    ('hallway', 'nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway', 'Models/GLB',
     'Console_Table Shoe_Bench Shoe_Cabinet Front_Door Wall_Mirror Hook_Rail Doormat_Blank Runner_Rug Boots Slippers Sneakers Coat Key_Set Key_Tray Mail_Stack Wall_Sconce Wall_Shelf Book_Stack Plant Storage_Basket Umbrella_Stand'.split()),
    ('living', 'LowPolyModernLivingRoom_v1.0/LowPolyModernLivingRoom_v1.0', 'GLB',
     'sofa_modern armchair coffee_table side_table tv_flat tv_stand bookshelf_tall floor_lamp rug_rect plant_pot_large plant_small wall_clock picture_frame curtains ottoman'.split()),
    ('furniture2', 'LowPolyFurniturePackVol2_v1.0/LowPolyFurniturePackVol2_v1.0', 'GLB',
     'coat_rack shoe_rack cube_shelf wall_shelf pendant_lamp desk_lamp round_rug monstera_pot blanket_chest'.split()),
]
IDENTITY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

def multiply(a, b):
    return [sum(a[k * 4 + r] * b[c * 4 + k] for k in range(4)) for c in range(4) for r in range(4)]

def matrix(node):
    if 'matrix' in node:
        return node['matrix']
    x, y, z, w = node.get('rotation', [0, 0, 0, 1])
    sx, sy, sz = node.get('scale', [1, 1, 1])
    tx, ty, tz = node.get('translation', [0, 0, 0])
    return [(1-2*(y*y+z*z))*sx, 2*(x*y+z*w)*sx, 2*(x*z-y*w)*sx, 0,
            2*(x*y-z*w)*sy, (1-2*(x*x+z*z))*sy, 2*(y*z+x*w)*sy, 0,
            2*(x*z+y*w)*sz, 2*(y*z-x*w)*sz, (1-2*(x*x+y*y))*sz, 0, tx, ty, tz, 1]

def inspect(path):
    raw = path.read_bytes()
    magic, version, length = struct.unpack_from('<4sII', raw)
    assert magic == b'glTF' and version == 2 and length == len(raw), path
    chunks = []
    offset = 12
    while offset < len(raw):
        size, kind = struct.unpack_from('<II', raw, offset)
        assert size % 4 == 0 and offset + 8 + size <= len(raw)
        chunks.append((kind, raw[offset+8:offset+8+size]))
        offset += 8 + size
    assert offset == len(raw) and chunks[0][0] == 0x4E4F534A
    doc = json.loads(chunks[0][1])
    bins = [data for kind, data in chunks if kind == 0x004E4942]
    assert doc['asset']['version'] == '2.0'
    assert not doc.get('extensionsRequired'), 'Requires decoder or unsupported extension'
    assert not doc.get('skins') and not doc.get('animations'), 'Static selection only'
    buffers = []
    for buffer in doc.get('buffers', []):
        uri = buffer.get('uri')
        assert uri is None or uri.startswith('data:'), 'External buffer'
        data = base64.b64decode(uri.split(',', 1)[1]) if uri else bins[0]
        assert len(data) >= buffer['byteLength']
        buffers.append(data)
    for view in doc.get('bufferViews', []):
        assert view.get('byteOffset', 0) + view['byteLength'] <= len(buffers[view['buffer']])
    for image in doc.get('images', []):
        assert 'bufferView' in image or image.get('uri', '').startswith('data:'), 'External image'
    minimum, maximum = [math.inf]*3, [-math.inf]*3
    triangles = 0
    mesh_nodes = []
    def visit(index, parent):
        nonlocal triangles
        node = doc['nodes'][index]
        transform = multiply(parent, matrix(node))
        if 'mesh' in node:
            mesh_nodes.append(node.get('name', str(index)))
            for primitive in doc['meshes'][node['mesh']]['primitives']:
                assert primitive.get('mode', 4) == 4
                assert not primitive.get('targets'), 'Morph target bounds not supported'
                accessor = doc['accessors'][primitive['attributes']['POSITION']]
                assert accessor['type'] == 'VEC3' and accessor['componentType'] == 5126
                assert 'sparse' not in accessor
                view = doc['bufferViews'][accessor['bufferView']]
                data = buffers[view['buffer']]
                start = view.get('byteOffset', 0) + accessor.get('byteOffset', 0)
                stride = view.get('byteStride', 12)
                for i in range(accessor['count']):
                    p = struct.unpack_from('<fff', data, start + i*stride)
                    point = [sum(transform[k*4+r]*p[k] for k in range(3)) + transform[12+r] for r in range(3)]
                    assert all(math.isfinite(v) for v in point)
                    for r in range(3):
                        minimum[r] = min(minimum[r], point[r])
                        maximum[r] = max(maximum[r], point[r])
                count = doc['accessors'][primitive['indices']]['count'] if 'indices' in primitive else accessor['count']
                assert count % 3 == 0
                triangles += count // 3
        for child in node.get('children', []):
            visit(child, transform)
    scene = doc['scenes'][doc.get('scene', 0)]
    for index in scene.get('nodes', []):
        visit(index, IDENTITY)
    size = [maximum[i]-minimum[i] for i in range(3)]
    assert all(math.isfinite(v) and v > 1e-9 for v in size), 'Degenerate loader bounds'
    return {'bytes': len(raw), 'sha256': hashlib.sha256(raw).hexdigest(),
            'minXYZ': minimum, 'maxXYZ': maximum, 'sizeXYZ': size, 'triangles': triangles,
            'images': len(doc.get('images', [])), 'materials': len(doc.get('materials', [])),
            'meshNodes': mesh_nodes,
            'rootTransforms': [{key: doc['nodes'][i][key] for key in ('name', 'matrix', 'translation', 'rotation', 'scale') if key in doc['nodes'][i]} for i in scene['nodes']]}

def triple(values):
    return ', '.join(f'{v:.6f}' for v in values)

def main():
    lines = ['# Подготовленные комнаты — UNVERIFIED integration handoff', '',
             'Это отчёт по ресурсам, не runtime manifest. GLB скопированы побайтно из локальной библиотеки.',
             'Размеры ниже вычислены по всем POSITION-вершинам активной сцены с применением иерархических matrix/TRS.',
             'Единицы — метры по документации наборов; порядок — X ширина, Y высота, Z глубина (не README width/depth/height).',
             'Оси glTF: +Y вверх. Авторские повороты внутри GLB сохранены. rotationY=0 сохраняет эти оси;',
             'семантическое направление фасада/экрана без визуального просмотра НЕ подтверждено.',
             'Применять только имеющийся loadApartmentModel: size до rotationY, position — нижний центр.',
             'Предпочитать исходные пропорции: sizeXYZ умножить на один общий коэффициент, а не растягивать по разным осям.',
             'WORLD_LAYOUT, уровни сидений/столешниц, обходы человека и скрытие старых proxy согласует ведущий.',
             'Измеренные min/max относятся к авторскому origin; loader сам центрирует и опускает нижнюю границу.', '',
             '## Лицензии', '',
             'Nasha и reodesuxz разрешают личные/коммерческие игры и модификации. Это НЕ CC0.',
             'Запрещено распространять модели как отдельный набор/библиотеку, перепродавать или использовать для обучения AI.',
             'Здесь локальная подготовка для Spider Thief, не публикация библиотеки. Исходные лицензии сохранены без изменений.', '',
             '## Объекты', '']
    total = 0
    records = []
    for group, folder, glb_folder, names in PACKS:
        pack = SOURCE / folder
        target = OUT / group
        target.mkdir(exist_ok=True)
        license_target = OUT / f'{group}-LICENSE.txt'
        shutil.copyfile(pack / 'LICENSE.txt', license_target)
        lines += [f'### {group}', f'Набор: `{folder}`. Лицензия: `{license_target.name}`.', '',
                  '| Локальный GLB | Размер XYZ м | min XYZ м | max XYZ м | Треугольники | Ресурсы |',
                  '|---|---|---|---|---:|---|']
        for name in names:
            source = pack / glb_folder / f'{name}.glb'
            info = inspect(source)
            destination = target / source.name
            shutil.copyfile(source, destination)
            assert inspect(destination) == info
            relative = destination.relative_to(OUT).as_posix()
            info.update(source=source.relative_to(ROOT).as_posix(), local=relative)
            records.append(info)
            resources = f"{info['materials']} материалов; {info['images']} embedded images; внешних URI нет"
            lines.append(f"| `{relative}` | {triple(info['sizeXYZ'])} | {triple(info['minXYZ'])} | {triple(info['maxXYZ'])} | {info['triangles']} | {resources} |")
            total += info['bytes']
        lines.append('')
    lines += ['## Точное происхождение и ориентация каждого файла', '']
    for info in records:
        lines += [f"### `{info['local']}`", f"Источник: `{info['source']}`", f"SHA256: `{info['sha256']}`; {info['bytes']} байт.",
                  'Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:',
                  '`' + json.dumps(info['rootTransforms'], ensure_ascii=False) + '`', '']
    lines += ['## Не подготовлено / ограничения', '',
              '- `Room_Shell.glb` и `Godot_Demo/assets/cozy_entryway.glb`: намеренно исключены — готовая чужая планировка не согласована с WORLD_LAYOUT, может удвоить стены/двери/мебель.',
              '- FBX/OBJ и общие Blender-сцены не конвертировались: готовых GLB достаточно; прямого Blender MCP в инструментах участника нет, обходов нет.',
              '- KayKit Furniture Bits найден с двойной вложенностью и лицензией CC0; дополнительные конвертации glTF не выполнялись, этот набор не выдаётся за подготовленный здесь.',
              '- Отдельные выключатели и розетки в выбранных трёх наборах не найдены по именам каталога; не подготовлены.',
              '- Статические лампы/бра не создают игровые Light, а зеркало не создаёт динамические отражения. Это отдельная интеграция.',
              '- Дверь Nasha содержит раму и створку, но автоматическая синхронизация её узлов с текущими закрытыми проходами не выполнена. Не ставить её поверх второй видимой двери.',
              '- Не все доступные варианты мебели скопированы: выбор минимально покрывает коридор и гостиную, не создаёт дубли диванов/кресел.',
              '- Текстуры отдельно не нужны: проверены все buffer/image URI выбранных GLB, внешних ресурсов нет.',
              '- NOT RUN: Khronos Validator, Three.js parse/render, браузер, визуальная оценка/направление фасада, коллизии, уровни опор и игровые маршруты. Данный скрипт проверяет только двоичную структуру, ресурсы и фактические bounds.', '',
              f'Итого: {len(records)} GLB, {total} байт. Исходники и игровые файлы не изменены.']
    (OUT / 'ASSET-HANDOFF.md').write_text('\n'.join(lines) + '\n', encoding='utf-8')
    print(f'Prepared {len(records)} GLB, {total} bytes; licenses=3; external resources=0; finite nondegenerate XYZ bounds=all; byte-identical copies=all')
    for info in records:
        print(f"{info['local']}: XYZ=({triple(info['sizeXYZ'])}), triangles={info['triangles']}, images={info['images']}")

if __name__ == '__main__':
    main()
