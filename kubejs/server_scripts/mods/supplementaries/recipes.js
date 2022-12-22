ServerEvents.recipes((e) => {
  RecipeManager.remove(e, ["supplementaries:rope"]);
});

ServerEvents.tags("item", (e) => {
  e.get("forge:ropes").add(e, "minecraft:stone");
});
