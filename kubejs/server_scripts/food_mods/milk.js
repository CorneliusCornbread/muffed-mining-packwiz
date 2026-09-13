ServerEvents.tags('item', event => {
    // Add all milk variants
    event.add('c:foods/milk', 'farmersdelight:milk_bottle')
    event.add('c:foods/milk', 'create_gravlax:milk_bottle')
    event.add('c:foods/milk', 'minecraft:milk_bucket')

    console.info('Updated milk food tags successfully')
})

ServerEvents.recipes(event => {
    event.remove({ output: 'create_gravlax:milk_bottle' });

    event.shapeless('4x farmersdelight:milk_bottle', [
        'minecraft:milk_bucket',
        '4x minecraft:glass_bottle'
    ]).id('kubejs:milk_bottle')

    console.info("Added milk bottle recipes successfully")
})
