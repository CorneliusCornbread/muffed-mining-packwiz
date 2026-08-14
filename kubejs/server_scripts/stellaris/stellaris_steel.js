ServerEvents.recipes(event => {
    event.remove({
        output: "stellaris:steel_ingot"
    });

    event.remove({
        output: "stellaris:steel_nugget"
    });

    event.remove({
        output: "stellaris:raw_steel_ingot"
    });

    console.info('Removed Stellaris steel recipes');
});

LootJS.lootTables(event => {
    event
        .modifyLootTables(/stellaris:.*/)
        .replaceItem("stellaris:steel_ingot", "tfmg:steel_ingot")

    console.info('Replaced Stellaris steel loot drops');
})
