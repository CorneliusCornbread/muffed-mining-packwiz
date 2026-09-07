ServerEvents.tags('item', event => {
    // Add all milk variants
    event.add('c:foods/milk', 'farmersdelight:milk_bottle')
    event.add('c:foods/milk', 'create_gravlax:milk_bottle')
    event.add('c:foods/milk', 'minecraft:milk_bucket')

    console.info('Updated milk food tags successfully')
})
