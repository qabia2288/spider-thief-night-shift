# Подготовленные комнаты — UNVERIFIED integration handoff

Это отчёт по ресурсам, не runtime manifest. GLB скопированы побайтно из локальной библиотеки.
Размеры ниже вычислены по всем POSITION-вершинам активной сцены с применением иерархических matrix/TRS.
Единицы — метры по документации наборов; порядок — X ширина, Y высота, Z глубина (не README width/depth/height).
Оси glTF: +Y вверх. Авторские повороты внутри GLB сохранены. rotationY=0 сохраняет эти оси;
семантическое направление фасада/экрана без визуального просмотра НЕ подтверждено.
Применять только имеющийся loadApartmentModel: size до rotationY, position — нижний центр.
Предпочитать исходные пропорции: sizeXYZ умножить на один общий коэффициент, а не растягивать по разным осям.
WORLD_LAYOUT, уровни сидений/столешниц, обходы человека и скрытие старых proxy согласует ведущий.
Измеренные min/max относятся к авторскому origin; loader сам центрирует и опускает нижнюю границу.

## Лицензии

Nasha и reodesuxz разрешают личные/коммерческие игры и модификации. Это НЕ CC0.
Запрещено распространять модели как отдельный набор/библиотеку, перепродавать или использовать для обучения AI.
Здесь локальная подготовка для Spider Thief, не публикация библиотеки. Исходные лицензии сохранены без изменений.

## Объекты

### hallway
Набор: `nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway`. Лицензия: `hallway-LICENSE.txt`.

| Локальный GLB | Размер XYZ м | min XYZ м | max XYZ м | Треугольники | Ресурсы |
|---|---|---|---|---:|---|
| `hallway/Console_Table.glb` | 1.050000, 0.858000, 0.400450 | -0.525000, 0.000000, -0.171500 | 0.525000, 0.858000, 0.228950 | 5760 | 5 материалов; 0 embedded images; внешних URI нет |
| `hallway/Shoe_Bench.glb` | 1.470000, 0.593000, 0.545500 | -0.735000, 0.000000, -0.245000 | 0.735000, 0.593000, 0.300500 | 13492 | 9 материалов; 0 embedded images; внешних URI нет |
| `hallway/Shoe_Cabinet.glb` | 1.110000, 1.184000, 0.428980 | -0.555000, 0.000000, -0.186000 | 0.555000, 1.184000, 0.242980 | 14996 | 10 материалов; 0 embedded images; внешних URI нет |
| `hallway/Front_Door.glb` | 1.177000, 2.470000, 0.170000 | -0.588500, 0.000000, -0.060000 | 0.588500, 2.470000, 0.110000 | 7824 | 5 материалов; 0 embedded images; внешних URI нет |
| `hallway/Wall_Mirror.glb` | 0.710000, 1.040000, 0.113000 | -0.355000, -0.520000, -0.065000 | 0.355000, 0.520000, 0.048000 | 3956 | 3 материалов; 0 embedded images; внешних URI нет |
| `hallway/Hook_Rail.glb` | 1.520000, 0.202983, 0.226000 | -0.760000, -0.068983, -0.033000 | 0.760000, 0.134000, 0.193000 | 4448 | 2 материалов; 0 embedded images; внешних URI нет |
| `hallway/Doormat_Blank.glb` | 0.880000, 0.022100, 0.520000 | -0.440000, 0.000000, -0.260000 | 0.440000, 0.022100, 0.260000 | 1500 | 3 материалов; 0 embedded images; внешних URI нет |
| `hallway/Runner_Rug.glb` | 1.240000, 0.020300, 2.710073 | -0.620000, 0.000000, -1.355036 | 0.620000, 0.020300, 1.355036 | 2899 | 3 материалов; 0 embedded images; внешних URI нет |
| `hallway/Boots.glb` | 0.254000, 0.209000, 0.258000 | -0.127000, 0.000000, -0.141000 | 0.127000, 0.209000, 0.117000 | 10816 | 3 материалов; 0 embedded images; внешних URI нет |
| `hallway/Slippers.glb` | 0.221595, 0.070789, 0.290000 | -0.110798, 0.001011, -0.145000 | 0.110798, 0.071800, 0.145000 | 5000 | 3 материалов; 0 embedded images; внешних URI нет |
| `hallway/Sneakers.glb` | 0.263926, 0.114027, 0.303989 | -0.132035, 0.000010, -0.151945 | 0.131891, 0.114037, 0.152044 | 4999 | 5 материалов; 0 embedded images; внешних URI нет |
| `hallway/Coat.glb` | 0.570559, 0.736256, 0.082000 | -0.285279, 0.000000, -0.027000 | 0.285279, 0.736256, 0.055000 | 3148 | 4 материалов; 0 embedded images; внешних URI нет |
| `hallway/Key_Set.glb` | 0.083500, 0.005000, 0.106500 | -0.024500, 0.000500, -0.080500 | 0.059000, 0.005500, 0.026000 | 6656 | 2 материалов; 0 embedded images; внешних URI нет |
| `hallway/Key_Tray.glb` | 0.271400, 0.041000, 0.165600 | -0.135700, 0.000000, -0.082800 | 0.135700, 0.041000, 0.082800 | 768 | 1 материалов; 0 embedded images; внешних URI нет |
| `hallway/Mail_Stack.glb` | 0.168000, 0.017250, 0.101000 | -0.084000, 0.000250, -0.050500 | 0.084000, 0.017500, 0.050500 | 2332 | 4 материалов; 0 embedded images; внешних URI нет |
| `hallway/Wall_Sconce.glb` | 0.146000, 0.260000, 0.186000 | -0.073000, -0.057000, -0.013000 | 0.073000, 0.203000, 0.173000 | 2164 | 2 материалов; 0 embedded images; внешних URI нет |
| `hallway/Wall_Shelf.glb` | 0.910000, 0.184816, 0.250000 | -0.455000, -0.130816, -0.125000 | 0.455000, 0.054000, 0.125000 | 396 | 2 материалов; 0 embedded images; внешних URI нет |
| `hallway/Book_Stack.glb` | 0.216500, 0.089000, 0.155000 | -0.109500, -0.000000, -0.077500 | 0.107000, 0.089000, 0.077500 | 3612 | 5 материалов; 0 embedded images; внешних URI нет |
| `hallway/Plant.glb` | 0.526147, 0.758763, 0.493505 | -0.254685, -0.000000, -0.240432 | 0.271462, 0.758762, 0.253073 | 9456 | 4 материалов; 0 embedded images; внешних URI нет |
| `hallway/Storage_Basket.glb` | 0.298000, 0.188536, 0.229054 | -0.149000, 0.000000, -0.114527 | 0.149000, 0.188536, 0.114527 | 10680 | 4 материалов; 0 embedded images; внешних URI нет |
| `hallway/Umbrella_Stand.glb` | 0.306000, 0.486000, 0.306000 | -0.153000, 0.000000, -0.153000 | 0.153000, 0.486000, 0.153000 | 3064 | 2 материалов; 0 embedded images; внешних URI нет |

### living
Набор: `LowPolyModernLivingRoom_v1.0/LowPolyModernLivingRoom_v1.0`. Лицензия: `living-LICENSE.txt`.

| Локальный GLB | Размер XYZ м | min XYZ м | max XYZ м | Треугольники | Ресурсы |
|---|---|---|---|---:|---|
| `living/sofa_modern.glb` | 2.320000, 1.025000, 0.900000 | -1.160000, 0.000000, -0.450000 | 1.160000, 1.025000, 0.450000 | 120 | 4 материалов; 0 embedded images; внешних URI нет |
| `living/armchair.glb` | 0.990000, 0.975000, 0.855000 | -0.495000, 0.000000, -0.430000 | 0.495000, 0.975000, 0.425000 | 96 | 2 материалов; 0 embedded images; внешних URI нет |
| `living/coffee_table.glb` | 1.200000, 0.450000, 0.700000 | -0.600000, 0.000000, -0.350000 | 0.600000, 0.450000, 0.350000 | 104 | 3 материалов; 0 embedded images; внешних URI нет |
| `living/side_table.glb` | 0.500000, 0.520000, 0.500000 | -0.250000, 0.000000, -0.250000 | 0.250000, 0.520000, 0.250000 | 100 | 2 материалов; 0 embedded images; внешних URI нет |
| `living/tv_flat.glb` | 1.400000, 0.850000, 0.250000 | -0.700000, 0.000000, -0.125000 | 0.700000, 0.850000, 0.125000 | 48 | 3 материалов; 0 embedded images; внешних URI нет |
| `living/tv_stand.glb` | 1.800000, 0.550000, 0.465000 | -0.900000, 0.000000, -0.225000 | 0.900000, 0.550000, 0.240000 | 128 | 3 материалов; 0 embedded images; внешних URI нет |
| `living/bookshelf_tall.glb` | 0.940000, 2.190000, 0.300000 | -0.470000, 0.000000, -0.150000 | 0.470000, 2.190000, 0.150000 | 264 | 5 материалов; 0 embedded images; внешних URI нет |
| `living/floor_lamp.glb` | 0.418465, 1.750000, 0.440000 | -0.209232, 0.000000, -0.220000 | 0.209232, 1.750000, 0.220000 | 92 | 2 материалов; 0 embedded images; внешних URI нет |
| `living/rug_rect.glb` | 2.400000, 0.030000, 1.600000 | -1.200000, 0.000000, -0.800000 | 1.200000, 0.030000, 0.800000 | 36 | 3 материалов; 0 embedded images; внешних URI нет |
| `living/plant_pot_large.glb` | 0.730655, 1.364843, 0.651487 | -0.365338, 0.000000, -0.332346 | 0.365317, 1.364843, 0.319142 | 76 | 2 материалов; 0 embedded images; внешних URI нет |
| `living/plant_small.glb` | 0.302713, 0.480000, 0.256283 | -0.133271, 0.000000, -0.128555 | 0.169443, 0.480000, 0.127728 | 68 | 3 материалов; 0 embedded images; внешних URI нет |
| `living/wall_clock.glb` | 0.487464, 0.500000, 0.055000 | -0.243732, 0.000000, -0.020000 | 0.243732, 0.500000, 0.035000 | 76 | 2 материалов; 0 embedded images; внешних URI нет |
| `living/picture_frame.glb` | 0.900000, 0.650000, 0.090519 | -0.450000, 0.000000, -0.025000 | 0.450000, 0.650000, 0.065519 | 44 | 3 материалов; 0 embedded images; внешних URI нет |
| `living/curtains.glb` | 2.200000, 2.220000, 0.150000 | -1.100000, 0.000000, -0.110000 | 1.100000, 2.220000, 0.040000 | 48 | 3 материалов; 0 embedded images; внешних URI нет |
| `living/ottoman.glb` | 0.840000, 0.455000, 0.840000 | -0.420000, 0.000000, -0.420000 | 0.420000, 0.455000, 0.420000 | 168 | 2 материалов; 0 embedded images; внешних URI нет |

### furniture2
Набор: `LowPolyFurniturePackVol2_v1.0/LowPolyFurniturePackVol2_v1.0`. Лицензия: `furniture2-LICENSE.txt`.

| Локальный GLB | Размер XYZ м | min XYZ м | max XYZ м | Треугольники | Ресурсы |
|---|---|---|---|---:|---|
| `furniture2/coat_rack.glb` | 0.546651, 1.800000, 0.631218 | -0.196651, 0.000000, -0.315609 | 0.350000, 1.800000, 0.315609 | 136 | 3 материалов; 0 embedded images; внешних URI нет |
| `furniture2/shoe_rack.glb` | 0.830000, 0.555000, 0.300000 | -0.415000, 0.000000, -0.150000 | 0.415000, 0.555000, 0.150000 | 204 | 4 материалов; 0 embedded images; внешних URI нет |
| `furniture2/cube_shelf.glb` | 1.110000, 1.110000, 0.360000 | -0.555000, 0.000000, -0.180000 | 0.555000, 1.110000, 0.180000 | 144 | 5 материалов; 0 embedded images; внешних URI нет |
| `furniture2/wall_shelf.glb` | 0.900000, 0.416485, 0.220000 | -0.450000, 0.000000, -0.110000 | 0.450000, 0.416485, 0.110000 | 104 | 6 материалов; 0 embedded images; внешних URI нет |
| `furniture2/pendant_lamp.glb` | 0.500000, 1.210000, 0.500000 | -0.250000, 0.000000, -0.250000 | 0.250000, 1.210000, 0.250000 | 104 | 3 материалов; 0 embedded images; внешних URI нет |
| `furniture2/desk_lamp.glb` | 0.374731, 0.452176, 0.180000 | -0.090000, 0.000000, -0.090000 | 0.284731, 0.452176, 0.090000 | 100 | 3 материалов; 0 embedded images; внешних URI нет |
| `furniture2/round_rug.glb` | 1.800000, 0.016000, 1.800000 | -0.900000, 0.000000, -0.900000 | 0.900000, 0.016000, 0.900000 | 164 | 3 материалов; 0 embedded images; внешних URI нет |
| `furniture2/monstera_pot.glb` | 0.911865, 1.116753, 0.958550 | -0.452330, 0.000000, -0.476139 | 0.459535, 1.116753, 0.482411 | 264 | 3 материалов; 0 embedded images; внешних URI нет |
| `furniture2/blanket_chest.glb` | 1.040000, 0.560000, 0.545000 | -0.520000, 0.000000, -0.270000 | 0.520000, 0.560000, 0.275000 | 84 | 3 материалов; 0 embedded images; внешних URI нет |

## Точное происхождение и ориентация каждого файла

### `hallway/Console_Table.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Console_Table.glb`
SHA256: `1820133912d515b301528da5d3e472c1510eed1595811402c769c32dd2186a00`; 526820 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Console_Table"}]`

### `hallway/Shoe_Bench.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Shoe_Bench.glb`
SHA256: `319efe1c44a5ff4cfb6c989641d4c08bd27880db006c6b4103bbefd8f7867da0`; 890032 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Shoe_Bench"}]`

### `hallway/Shoe_Cabinet.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Shoe_Cabinet.glb`
SHA256: `20b112790d91b4881c4d71ed14ff9a888c99f4178a2ac69494b61c95264a3b8e`; 888796 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Shoe_Cabinet"}]`

### `hallway/Front_Door.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Front_Door.glb`
SHA256: `1c66eb55766de443716a3826aca66c7c68cd0439c21332576a302a0a30cabb2d`; 613820 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Front_Door"}]`

### `hallway/Wall_Mirror.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Wall_Mirror.glb`
SHA256: `913bc9b3852b0f79966089a98335b931e987505c0143e1a27693cc9ab724081c`; 212560 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Wall_Mirror"}]`

### `hallway/Hook_Rail.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Hook_Rail.glb`
SHA256: `261a9fa2e52945494fe76d1e6e1b7bfbfd6b998839fcdd813842804b89e474ed`; 263400 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Hook_Rail"}]`

### `hallway/Doormat_Blank.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Doormat_Blank.glb`
SHA256: `77b3605b84c9332027aea3121b51d50fccdfdf1c1616cfa2068b724841bf17e3`; 90556 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Doormat"}]`

### `hallway/Runner_Rug.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Runner_Rug.glb`
SHA256: `3f107cd43a87521bc588545527c9616deeb32122a7226edf148bcdbcb1c4a50c`; 199956 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Runner_Rug"}]`

### `hallway/Boots.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Boots.glb`
SHA256: `c1d32d8a210023e73aeca77af7b6c440c7bd1ff2c440d28520dfcc7f8d77b800`; 280304 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Boots"}]`

### `hallway/Slippers.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Slippers.glb`
SHA256: `16465c9f735b3de847429478cbafe2b1162c9970695e2f80c207a1a395851654`; 116760 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Slippers"}]`

### `hallway/Sneakers.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Sneakers.glb`
SHA256: `e04cf34da46bdb5a158541a567c000c433bbe71254c5d2e34bbf900e9309fd99`; 124804 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Sneakers"}]`

### `hallway/Coat.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Coat.glb`
SHA256: `4cc72f2a04144478265acbfe623e4dd45480aa834a1b47a69891d5f734df6119`; 238804 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Coat"}]`

### `hallway/Key_Set.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Key_Set.glb`
SHA256: `37cb781ead58185ae750857d3a605545dc199eaad5caf4feeeec6553bb6ce7fe`; 335888 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Key_Set"}]`

### `hallway/Key_Tray.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Key_Tray.glb`
SHA256: `fa1d9f432b237fe346e7cd4c201a8209b4ff5bfdbeacdaabc8e2837e7e8fdee9`; 25828 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Key_Tray"}]`

### `hallway/Mail_Stack.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Mail_Stack.glb`
SHA256: `5c8d49aa3467a2f0ac2bac61f93ead888137acdee018f493f3610cebdd9bc5ef`; 218352 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Mail_Stack"}]`

### `hallway/Wall_Sconce.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Wall_Sconce.glb`
SHA256: `bad06889436626869fc165e4a4d69ad3eac5336a128f3597d935c8da07496814`; 94144 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Wall_Sconce"}]`

### `hallway/Wall_Shelf.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Wall_Shelf.glb`
SHA256: `d466001f549aa382e904527529984f1eab72776feec1a69164b6c8bfdb715a8b`; 32280 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Wall_Shelf"}]`

### `hallway/Book_Stack.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Book_Stack.glb`
SHA256: `68c75319ffdcb6d0a1b3fb508cf5e142d9dc51cd5ff7994cd8f0b754f294c03b`; 325368 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Book_Stack"}]`

### `hallway/Plant.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Plant.glb`
SHA256: `8820ba162f98a35aaf8a3eedac8b9874ee1eb9ac406e97737fe47b18c1ec3e18`; 244060 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Plant"}]`

### `hallway/Storage_Basket.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Storage_Basket.glb`
SHA256: `d3f6d9bb7df29332922820085d3f6799fe3565a640d80fe9ae40b89867115ac6`; 276812 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Storage_Basket"}]`

### `hallway/Umbrella_Stand.glb`
Источник: `tools/JamAssets/NewInterior/nashas_cozy_3d_entryway_v1.0/Nashas_Cozy_3D_Entryway/Models/GLB/Umbrella_Stand.glb`
SHA256: `9966d7f4fe25890c9e0a7d353c724555e1ff54deb61efb9a88271c4148e2bac1`; 84624 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "Umbrella_Stand"}]`

### `living/sofa_modern.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyModernLivingRoom_v1.0/LowPolyModernLivingRoom_v1.0/GLB/sofa_modern.glb`
SHA256: `15d6f21fcc178bdff2a940a03ec737da27fdf1e29f146f5295f7c519ea04e4ba`; 11976 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "sofa_modern"}]`

### `living/armchair.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyModernLivingRoom_v1.0/LowPolyModernLivingRoom_v1.0/GLB/armchair.glb`
SHA256: `4192e4cf73eb5606faee50bc2b928268091acd4797c9e7c041d3d5815070a99e`; 8444 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "armchair"}]`

### `living/coffee_table.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyModernLivingRoom_v1.0/LowPolyModernLivingRoom_v1.0/GLB/coffee_table.glb`
SHA256: `950f3a61b6e921c72ac2ff5ad573d98e40f4d46b73409c61170ffa33ffffaf82`; 9568 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "coffee_table"}]`

### `living/side_table.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyModernLivingRoom_v1.0/LowPolyModernLivingRoom_v1.0/GLB/side_table.glb`
SHA256: `02568442b490383a086003eed24fcd1b5746c7ebc8b6823802dd8e4d8bfc5a31`; 8060 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "side_table"}]`

### `living/tv_flat.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyModernLivingRoom_v1.0/LowPolyModernLivingRoom_v1.0/GLB/tv_flat.glb`
SHA256: `94205c6787d329998fa42711ed4cc1f5a5f0b8b9d6df9d8f6bec187e04bbd1aa`; 6156 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "tv_flat"}]`

### `living/tv_stand.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyModernLivingRoom_v1.0/LowPolyModernLivingRoom_v1.0/GLB/tv_stand.glb`
SHA256: `b98ec0814bddcd5688a761675413fea441371e47a63950170bec756c89a5d4b3`; 11480 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "tv_stand"}]`

### `living/bookshelf_tall.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyModernLivingRoom_v1.0/LowPolyModernLivingRoom_v1.0/GLB/bookshelf_tall.glb`
SHA256: `d0394302ce4dce8e9aa0308defb6e543dae9cf5432eb5a8c18bb06377132728e`; 22952 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "bookshelf_tall"}]`

### `living/floor_lamp.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyModernLivingRoom_v1.0/LowPolyModernLivingRoom_v1.0/GLB/floor_lamp.glb`
SHA256: `86fad52102a8ea5155ab296ad25114bbc9f3d07f0632895463f49f088ab7c71d`; 7672 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "floor_lamp"}]`

### `living/rug_rect.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyModernLivingRoom_v1.0/LowPolyModernLivingRoom_v1.0/GLB/rug_rect.glb`
SHA256: `ad52f6112f9cb45e4b89004faf79b2ff33438d548900920876e13e7a325464dd`; 5148 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "rug_rect"}]`

### `living/plant_pot_large.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyModernLivingRoom_v1.0/LowPolyModernLivingRoom_v1.0/GLB/plant_pot_large.glb`
SHA256: `37272a38f78fec7984f53ab087a01af64ab6caaa67c9a98523b0346c554c7586`; 7924 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "plant_pot_large"}]`

### `living/plant_small.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyModernLivingRoom_v1.0/LowPolyModernLivingRoom_v1.0/GLB/plant_small.glb`
SHA256: `67d5fc9c1bdd927e731599776300ef2e6aad060ccb467735f8dcf556184c93ab`; 8852 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "plant_small"}]`

### `living/wall_clock.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyModernLivingRoom_v1.0/LowPolyModernLivingRoom_v1.0/GLB/wall_clock.glb`
SHA256: `d91b4566b5941c869bc3d45dd3bf6d2c9daf9bf611eba45f2c0d65ec8432619d`; 6812 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "wall_clock"}]`

### `living/picture_frame.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyModernLivingRoom_v1.0/LowPolyModernLivingRoom_v1.0/GLB/picture_frame.glb`
SHA256: `eae644b91f0093901941bb5d6e32aa32725412e30d7b2c01af0bebad7bec9aef`; 6588 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "picture_frame"}]`

### `living/curtains.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyModernLivingRoom_v1.0/LowPolyModernLivingRoom_v1.0/GLB/curtains.glb`
SHA256: `da1843ddb8cc1cb7d98a46114cd207818da3f531a3f9fb5d2e1d4484c5192417`; 6204 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "curtains"}]`

### `living/ottoman.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyModernLivingRoom_v1.0/LowPolyModernLivingRoom_v1.0/GLB/ottoman.glb`
SHA256: `f9b5d23ba42f57f0c7bd424d8aa3ed84c617a4d712be53c1649fc1ebdf9ef70e`; 12368 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "ottoman"}]`

### `furniture2/coat_rack.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyFurniturePackVol2_v1.0/LowPolyFurniturePackVol2_v1.0/GLB/coat_rack.glb`
SHA256: `3d169926e339d3e8ebe525fb70c52c4801e28e3fe514c474fcf2278e29aadd18`; 12332 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "coat_rack"}]`

### `furniture2/shoe_rack.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyFurniturePackVol2_v1.0/LowPolyFurniturePackVol2_v1.0/GLB/shoe_rack.glb`
SHA256: `715629deb7abd079e0d249d726510eff7228b58b5a0996a1fad157f5c42b9954`; 17368 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "shoe_rack"}]`

### `furniture2/cube_shelf.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyFurniturePackVol2_v1.0/LowPolyFurniturePackVol2_v1.0/GLB/cube_shelf.glb`
SHA256: `38ebfd02db232ec6578bab952062a42b4633dcf6cab1e5c4a142ef887ad76a87`; 14396 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "cube_shelf"}]`

### `furniture2/wall_shelf.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyFurniturePackVol2_v1.0/LowPolyFurniturePackVol2_v1.0/GLB/wall_shelf.glb`
SHA256: `5c41b955086cad1461d7c61dfbc192258f244c611820496bd44130801ccce577`; 13180 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "wall_shelf"}]`

### `furniture2/pendant_lamp.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyFurniturePackVol2_v1.0/LowPolyFurniturePackVol2_v1.0/GLB/pendant_lamp.glb`
SHA256: `c872cf8c2c0e354d497a15842bc30fab138b2a00fda4b6ef22080efb072bd754`; 10332 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "pendant_lamp"}]`

### `furniture2/desk_lamp.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyFurniturePackVol2_v1.0/LowPolyFurniturePackVol2_v1.0/GLB/desk_lamp.glb`
SHA256: `ddefae4de819d271fb2f7f90f9152694e8819c34d179f07407b27ae8387ba9e2`; 10368 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "desk_lamp"}]`

### `furniture2/round_rug.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyFurniturePackVol2_v1.0/LowPolyFurniturePackVol2_v1.0/GLB/round_rug.glb`
SHA256: `1ee713458a187a7c875172e5c557d0be0885c46765b696e852c80154e2aea442`; 11968 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "round_rug"}]`

### `furniture2/monstera_pot.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyFurniturePackVol2_v1.0/LowPolyFurniturePackVol2_v1.0/GLB/monstera_pot.glb`
SHA256: `ecf9e3209947eff410383c9a38916b35fcfda8e2a2354de051e9f50f35047c25`; 19904 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "monstera_pot"}]`

### `furniture2/blanket_chest.glb`
Источник: `tools/JamAssets/NewInterior/LowPolyFurniturePackVol2_v1.0/LowPolyFurniturePackVol2_v1.0/GLB/blanket_chest.glb`
SHA256: `3400d177b65fc177ce0feb90a068b99656af6c554ee73e57ae6c90855a8b01dc`; 8680 байт.
Ориентация: glTF +Y вверх, исходная иерархия сохранена; корневые TRS/matrix:
`[{"name": "blanket_chest"}]`

## Не подготовлено / ограничения

- `Room_Shell.glb` и `Godot_Demo/assets/cozy_entryway.glb`: намеренно исключены — готовая чужая планировка не согласована с WORLD_LAYOUT, может удвоить стены/двери/мебель.
- FBX/OBJ и общие Blender-сцены не конвертировались: готовых GLB достаточно; прямого Blender MCP в инструментах участника нет, обходов нет.
- KayKit Furniture Bits найден с двойной вложенностью и лицензией CC0; дополнительные конвертации glTF не выполнялись, этот набор не выдаётся за подготовленный здесь.
- Отдельные выключатели и розетки в выбранных трёх наборах не найдены по именам каталога; не подготовлены.
- Статические лампы/бра не создают игровые Light, а зеркало не создаёт динамические отражения. Это отдельная интеграция.
- Дверь Nasha содержит раму и створку, но автоматическая синхронизация её узлов с текущими закрытыми проходами не выполнена. Не ставить её поверх второй видимой двери.
- Не все доступные варианты мебели скопированы: выбор минимально покрывает коридор и гостиную, не создаёт дубли диванов/кресел.
- Текстуры отдельно не нужны: проверены все buffer/image URI выбранных GLB, внешних ресурсов нет.
- NOT RUN: Khronos Validator, Three.js parse/render, браузер, визуальная оценка/направление фасада, коллизии, уровни опор и игровые маршруты. Данный скрипт проверяет только двоичную структуру, ресурсы и фактические bounds.

Итого: 45 GLB, 6342700 байт. Исходники и игровые файлы не изменены.
