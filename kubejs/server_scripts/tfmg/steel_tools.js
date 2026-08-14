ServerEvents.recipes(event => {
    event.remove({
        output: "tfmg:steel_sword"
    });

    event.remove({
        output: "tfmg:steel_pickaxe"
    });

    event.remove({
        output: "tfmg:steel_axe"
    });

    event.remove({
        output: "tfmg:steel_shovel"
    });

    event.remove({
        output: "tfmg:steel_hoe"
    });

    console.info("Removed TFMG steel tool recipes");
});