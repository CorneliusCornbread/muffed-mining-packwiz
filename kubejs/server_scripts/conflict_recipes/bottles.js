ServerEvents.recipes(event => {
    event.remove({
        output: "cluttered:small_glass_jars"
    });

    event.shaped(
        Item.of('cluttered:small_glass_jars', 2),
        [
            'B ',
            ' B',
        ],
        {
            B: 'minecraft:glass_bottle'
        }
    )

    event.shaped(
        Item.of('cluttered:small_glass_jars', 2),
        [
            ' B',
            'B ',
        ],
        {
            B: 'minecraft:glass_bottle'
        }
    )
});
