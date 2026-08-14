RecipeViewerEvents.removeEntries("item", event => {
    event.remove("stellaris:raw_steel_ingot");
    event.remove("stellaris:steel_ingot");
    event.remove("stellaris:steel_nugget");

    event.remove("mekanism:ingot_steel");
    event.remove("mekanism:nugget_steel");

    console.log("Successfully removed duplicate steel ingot entries.");
})