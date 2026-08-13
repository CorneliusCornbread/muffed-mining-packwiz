ServerEvents.tags('item', event => {
    // Add the vinery fruits to the fruits tag
    event.add('forge:fruits', 'vinery:cherry')
    event.add('forge:fruits', 'vinery:red_grape')
    event.add('forge:fruits', 'vinery:white_grape')
    event.add('forge:fruits', 'vinery:savanna_grapes_red')
    event.add('forge:fruits', 'vinery:savanna_grapes_white')
    event.add('forge:fruits', 'vinery:taiga_grapes_red')
    event.add('forge:fruits', 'vinery:taiga_grapes_white')
    event.add('forge:fruits', 'vinery:jungle_grapes_red')
    event.add('forge:fruits', 'vinery:jungle_grapes_white')

    // Add vinery grapes to the berries tag
    event.add('forge:berries', 'vinery:red_grape')
    event.add('forge:berries', 'vinery:white_grape')
    event.add('forge:berries', 'vinery:savanna_grapes_red')
    event.add('forge:berries', 'vinery:savanna_grapes_white')
    event.add('forge:berries', 'vinery:taiga_grapes_red')
    event.add('forge:berries', 'vinery:taiga_grapes_white')
    event.add('forge:berries', 'vinery:jungle_grapes_red')
    event.add('forge:berries', 'vinery:jungle_grapes_white')

    // Cherries are not berries
    event.remove('forge:berries', 'vinery:cherry')
})

console.info('Updated vinery tags successfully')
