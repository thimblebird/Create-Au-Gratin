ServerEvents.recipes((e) => {
  // BEDS
  RecipeManager.remove(e, ["#minecraft:beds"]);
  [
    "blue",
    "gray",
    "red",
    "green",
    "light_gray",
    "yellow",
    "brown",
    "cyan",
    "lime",
    "pink",
    "white",
    "orange",
    "magenta",
    "purple",
    "light_blue",
    "black",
  ].forEach((color) => {
    // crafting
    RecipeManager.add(
      e,
      "vanillaaugratin/minecraft:bed",
      `1x minecraft:${color}_bed`,
      [["WWW", "PPP"]],
      {
        W: { item: `minecraft:${color}_wool` },
        P: { tag: "minecraft:planks" },
      }
    );
    // re-dye
    RecipeManager.add(
      e,
      "vanillaaugratin/minecraft:bed/redye",
      `1x minecraft:${color}_bed`,
      [["#minecraft:beds", `#forge:dyes/${color}`]]
    );
  });

  // CAKE
  RecipeManager.remove(e, ["minecraft:cake"]);
  RecipeManager.add(
    e,
    "vanillaaugratin/minecraft:cake",
    "1x minecraft:cake",
    [
      ["MMM", "SES", "WWW"],
      [" M ", "SES", " D "],
      ["7x farmersdelight:cake_slice"],
    ],
    {
      D: { tag: "forge:dough/wheat" },
      E: { tag: "forge:eggs" },
      M: { tag: "forge:milk" },
      S: { item: "minecraft:sugar" },
      W: { tag: "forge:crops/wheat" },
    }
  );

  // STAIRS
  // [
  //   {
  //     output: "immersive_weathering:cracked_polished_blackstone_brick_stairs",
  //     material: "minecraft:cracked_polished_blackstone_bricks",
  //   },
  //   {
  //     output: "immersive_weathering:cracked_deepslate_brick_stairs",
  //     material: "minecraft:cracked_deepslate_bricks",
  //   },
  //   {
  //     output: "immersive_weathering:cracked_nether_brick_stairs",
  //     material: "minecraft:cracked_nether_bricks",
  //   },
  //   {
  //     output: "immersive_weathering:exposed_plate_iron_stairs",
  //     material: "immersive_weathering:exposed_plate_iron",
  //   },
  //   {
  //     output: "immersive_weathering:mossy_stone_stairs",
  //     material: "immersive_weathering:mossy_stone",
  //   },
  //   {
  //     output: "immersive_weathering:cracked_brick_stairs",
  //     material: "immersive_weathering:cracked_bricks",
  //   },
  //   {
  //     output: "immersive_weathering:cut_iron_stairs",
  //     material: "immersive_weathering:cut_iron",
  //   },
  //   {
  //     output: "immersive_weathering:plate_iron_stairs",
  //     material: "immersive_weathering:plate_iron",
  //   },
  //   {
  //     output: "immersive_weathering:weathered_cut_iron_stairs",
  //     material: "immersive_weathering:weathered_cut_iron",
  //   },
  //   {
  //     output: "immersive_weathering:mossy_brick_stairs",
  //     material: "immersive_weathering:mossy_bricks",
  //   },
  //   {
  //     output: "immersive_weathering:cracked_stone_brick_stairs",
  //     material: "immersive_weathering:cracked_stone_bricks",
  //   },
  //   {
  //     output: "immersive_weathering:cracked_prismarine_brick_stairs",
  //     material: "immersive_weathering:cracked_prismarine_bricks",
  //   },
  //   {
  //     output: "immersive_weathering:cracked_deepslate_tile_stairs",
  //     material: "immersive_weathering:cracked_deepslate_tiles",
  //   },
  //   {
  //     output: "immersive_weathering:exposed_cut_iron_stairs",
  //     material: "immersive_weathering:exposed_cut_iron",
  //   },
  //   {
  //     output: "immersive_weathering:snow_brick_stairs",
  //     material: "immersive_weathering:snow_bricks",
  //   },
  //   {
  //     output: "immersive_weathering:cracked_end_stone_brick_stairs",
  //     material: "immersive_weathering:cracked_end_stone_bricks",
  //   },
  //   {
  //     output: "immersive_weathering:weathered_plate_iron_stairs",
  //     material: "immersive_weathering:weathered_plate_iron",
  //   },
  //   {
  //     output: "immersive_weathering:rusted_cut_iron_stairs",
  //     material: "immersive_weathering:rusted_cut_iron",
  //   },
  //   {
  //     output: "immersive_weathering:rusted_plate_iron_stairs",
  //     material: "immersive_weathering:rusted_plate_iron",
  //   },
  //   {
  //     output: "create:exposed_copper_tile_stairs",
  //     material: "create:exposed_copper_tiles",
  //   },
  //   {
  //     output: "create:copper_shingle_stairs",
  //     material: "create:copper_shingles",
  //   },
  //   {
  //     output: "create:weathered_copper_shingle_stairs",
  //     material: "create:weathered_copper_shingles",
  //   },
  //   {
  //     output: "geode:smooth_end_stone_stairs",
  //     material: "geode:smooth_end_stone",
  //   },
  // ].forEach((stair) => RecipeManager.remove(e, [stair]));

  // const planks = [
  //   "minecraft:mangrove",
  //   "minecraft:acacia",
  //   "minecraft:spruce",
  //   "minecraft:jungle",
  //   "minecraft:warped",
  //   "minecraft:oak",
  //   "minecraft:dark_oak",
  //   "minecraft:birch",
  //   "minecraft:crimson",
  // ];
  // RecipeManager.fix(
  //   e,
  //   planks.map((id) => {
  //     const objMap = new Map();
  //     const element = id.split(":");
  //     const namespace = element[0];
  //     const elementId = element[1];
  //     objMap.set(`${namespace}:${elementId}_planks`, [
  //       `${namespace}:${elementId}_log`,
  //       `${namespace}:stripped_${elementId}_log`,
  //       `${namespace}:${elementId}_wood`,
  //       `${namespace}:stripped_${elementId}_wood`,
  //     ]);
  //     return objMap;
  //   })
  // );
});
