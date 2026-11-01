# Apartment upgrade — источники и лицензии

Все перечисленные GLB скопированы без изменения бинарного содержимого из локального Kenney Furniture Kit 2.0: `tools/JamAssets/Models/Props/furniture-kit/Models/GLTF format/`.

Автор: **Kenney** (https://kenney.nl). Страница набора: https://kenney.nl/assets/furniture-kit . Лицензия: **CC0 1.0**, https://creativecommons.org/publicdomain/zero/1.0/ . Исходная лицензия набора прочитана и приложена как `Kenney-License.txt`; она разрешает личное, образовательное и коммерческое использование. Имена изменены под контракт загрузчика; масштаб и поворот назначаются только в игровой сцене.

| Файл в проекте | Исходный файл |
|---|---|
| kitchen-cabinet.glb | kitchenCabinet.glb |
| table.glb | table.glb |
| chair.glb | chair.glb |
| fridge.glb | kitchenFridge.glb |
| stove.glb | kitchenStove.glb |
| sink.glb | kitchenSink.glb |
| sofa.glb | loungeSofa.glb |
| shelf.glb | bookcaseOpen.glb |
| nightstand.glb | cabinetBedDrawer.glb |
| door.glb | doorway.glb |
| lamp.glb | lampRoundFloor.glb |
| nest-detail.glb | cardboardBoxOpen.glb |

`nest-detail` — открытая картонная коробка для интерьера норы, не модель тоннеля. `door` — авторская doorway; её соответствие игровому проёму необходимо проверить визуально. Не заявляется, что модели адаптированы в Blender.

Инвентаризация и SHA-256: `artifacts/apartment-upgrade/integration/asset-inventory.json`. Проверка структуры GLB выполнена; фактическая видимость, материалы и совмещение опор в браузере — NOT RUN в worker-передаче.

jam-assets MCP и Blender MCP отсутствуют в наборе вызываемых инструментов этой рабочей роли. Ошибка соединения не выдумывается: вызов невозможен, поскольку инструменты не предоставлены. Прямой разрешённый доступ к указанной локальной библиотеке работает. Если потребуется Blender-адаптация, минимальное действие — предоставить ведущему вызываемые инструменты Blender MCP в активной сессии.
