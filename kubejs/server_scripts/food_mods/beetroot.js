ServerEvents.recipes(event => {
    event.shapeless('4x minecraft:beetroot', [
        'minecraft:water_bucket',
        '4x create_gravlax:dirty_beetroot'
    ]).id('kubejs:wash_dirty_beetroot')
})
