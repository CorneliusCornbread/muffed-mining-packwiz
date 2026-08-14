ServerEvents.tags("item", event => {
  event.removeAll("c:ingots/steel")

  event.add("c:ingots/steel", "tfmg:steel_ingot")

  console.log("Removed all steel ingots from steel tag except TFMG")
})
