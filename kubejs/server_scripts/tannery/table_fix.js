// Make the tanning table actually drop itself
LootJS.lootTables(event => {
    if (!event.hasLootTable("tannery:blocks/tanning_table")) {
        event.create("tannery:blocks/tanning_table", LootType.BLOCK)
            .createPool(pool => {
                pool.rolls(1)
                pool.addEntry(LootEntry.of("tannery:tanning_table").setCount([1, 1]))
            })
    }
});

// Make drying racks mineable with axe
ServerEvents.tags('block', event => {
    event.add('minecraft:mineable/axe', 'tannery:tanning_rack');
    event.add('minecraft:mineable/axe', 'tannery:tanning_barrel');
});
