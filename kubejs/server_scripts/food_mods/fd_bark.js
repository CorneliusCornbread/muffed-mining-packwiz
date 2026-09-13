ServerEvents.recipes(event => {
    event.shaped(
        Item.of('tannery:tannic_powder', 1),
        [
            'BB',
            '  ',
        ],
        {
            B: 'farmersdelight:tree_bark'
        }
    )

    console.info("Added new tannic powder recipe successfully")
})
