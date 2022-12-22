/**
 * Adds stuff to Create that should've been there from the start.
 */
const listManualItemApplication = [
  {
    id: "stripped_wood_or_log_to_andesite_casing",
    target: "create:andesite_alloy",
    title: "Andesite Casings",
    stages: [
      {
        block: "minecraft:oak_log",
        hint: "Right-click any Wood or Log Block with an Axe to strip it",
        item: "wooden_axe",
      },
      {
        block: "minecraft:stripped_oak_log",
        hint: "Right-click any Stripped Wood or Log Block with Andesite Alloy to craft an Andesite Casing",
        target: true,
      },
      {
        block: "create:andesite_casing",
      },
    ],
  },
  {
    id: "stripped_wood_or_log_to_copper_casing",
    target: "minecraft:copper_ingot",
    title: "Copper Casings",
    stages: [
      {
        block: "minecraft:oak_log",
        hint: "Right-click any Wood or Log Block with an Axe to strip it",
        item: "wooden_axe",
      },
      {
        block: "minecraft:stripped_oak_log",
        hint: "Right-click the Stripped Wood or Log Block with a Copper Ingot to craft a Copper Casing",
        target: true,
      },
      {
        block: "create:copper_casing",
      },
    ],
  },
  {
    id: "stripped_wood_or_log_to_brass_casing",
    target: "create:brass_ingot",
    title: "Brass Casings",
    stages: [
      {
        block: "minecraft:oak_log",
        hint: "Right-click any Wood or Log Block with an Axe to strip it",
        item: "wooden_axe",
      },
      {
        block: "minecraft:stripped_oak_log",
        hint: "Right-click the Stripped Wood or Log Block with a Brass Ingot to craft a Brass Casing",
        target: true,
      },
      {
        block: "create:brass_casing",
      },
    ],
  },
  {
    id: "stripped_wood_or_log_to_train_casing",
    target: "create:sturdy_sheet",
    title: "Train Casings",
    stages: [
      {
        block: "create:brass_casing",
        hint: "Right-click a Brass Casing with Sturdy Sheet to craft a Train Casing",
        target: true,
      },
      {
        block: "create:railway_casing",
      },
    ],
  },
];

const listManualItemApplicationTargets = listManualItemApplication.map(
  (entry) => entry.target
);

Ponder.tags((event) => {
  event.createTag(
    "kubejs:create_accessibility",
    "create:brass_hand",
    "Manual Item Application",
    "Recipes you won't find in your recipe book",
    listManualItemApplicationTargets
  );
});

listManualItemApplication.forEach((entry) => {
  Ponder.registry((event) => {
    event
      .create(entry.target)
      .scene(entry.id, `Crafting ${entry.title}`, (scene) => {
        const posBlock = [2, 1, 2];
        const posBlockHint = [2, 3, 2];
        const posBlockHintText = [1, 3, 1];

        scene.showBasePlate();
        scene.world.showSection([0, 0, 0, 4, 0, 4], Facing.UP);
        scene.idle(15);

        // assemble stages
        entry.stages.forEach((stage, i) => {
          if (i === 0) {
            scene.world.setBlock(posBlock, stage.block, true);
            scene.world.showSection(posBlock, Facing.UP);
          } else {
            scene.world.replaceBlocks(posBlock, stage.block, true);
          }

          scene.idle(20);

          // show mouse control hint
          if (stage.hasOwnProperty("hint")) {
            scene
              .text(90, stage.hint, posBlockHintText)
              .colored(PonderPalette.WHITE)
              .placeNearTarget()
              .attachKeyFrame();
          }

          scene.idle(30);

          // show text hint/control description
          if (stage.target) {
            scene
              .showControls(100, posBlockHint, "down")
              .rightClick()
              .withItem(entry.target);
          }

          scene.idle(70);
        });
      });
  });
});
