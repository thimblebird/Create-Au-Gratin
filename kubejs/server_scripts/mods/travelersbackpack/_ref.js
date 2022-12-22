// priority: 999

var mod_travelersbackpack = {
  customs: [
    {
      id: "bee",
      pattern: ["COC", "OBO", "COC"],
      keys: {
        C: { item: "minecraft:honeycomb" },
        O: { item: "minecraft:honey_bottle" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "blaze",
      pattern: ["RFR", "RBR", "PLP"],
      keys: {
        R: { tag: "forge:rods/blaze" },
        F: { item: "minecraft:fire_charge" },
        P: { item: "minecraft:blaze_powder" },
        L: { tag: "forge:buckets/lava" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "bookshelf",
      pattern: ["SSS", "SBS", "XXX"],
      keys: {
        S: { tag: "forge:bookshelves" },
        X: { tag: "forge:books" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "cactus",
      pattern: ["CGC", "CBC", "SSS"],
      keys: {
        C: { item: "minecraft:cactus" },
        G: { tag: "forge:dyes/green" },
        S: { tag: "forge:sand" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "cake",
      pattern: ["ECE", "WBW", "SMS"],
      keys: {
        E: { tag: "forge:eggs" },
        C: { tag: "vanillaaugratin:cakes/placeable" },
        W: { tag: "forge:crops/wheat" },
        S: { item: "minecraft:sugar" },
        M: { tag: "forge:buckets/milk" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "chicken",
      pattern: ["FGF", "FBF", "GEG"],
      keys: {
        F: { tag: "forge:feathers" },
        G: { tag: "forge:nuggets/gold" },
        E: { item: "minecraft:egg" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "coal",
      pattern: ["OCO", "CBC", "OCO"],
      keys: {
        O: { tag: "forge:storage_blocks/coal" },
        C: { tag: "minecraft:coals" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "cow",
      pattern: ["RLR", "RBR", "LML"],
      keys: {
        R: { tag: "forge:raw_beef" },
        L: { item: "minecraft:leather" },
        M: { tag: "forge:buckets/milk" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "creeper",
      pattern: ["GCG", "GBG", "TTT"],
      keys: {
        G: { tag: "forge:gunpowder" },
        C: { item: "minecraft:creeper_head" },
        T: { item: "minecraft:tnt" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "diamond",
      pattern: ["DDD", "DBD", "DOD"],
      keys: {
        D: { tag: "forge:gems/diamond" },
        O: { tag: "forge:storage_blocks/diamond" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "dragon",
      pattern: ["SDS", "OBO", "EOE"],
      keys: {
        S: { tag: "forge:end_stones" },
        D: { item: "minecraft:dragon_egg" },
        O: { tag: "forge:obsidian" },
        E: { tag: "forge:ender_pearls" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "emerald",
      pattern: ["EEE", "EBE", "EOE"],
      keys: {
        E: { tag: "forge:gems/emerald" },
        O: { tag: "forge:storage_blocks/emerald" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "end",
      pattern: ["ESE", "SBS", "ESE"],
      keys: {
        E: { item: "minecraft:ender_eye" },
        S: { tag: "forge:end_stones" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "enderman",
      pattern: ["WEW", "EBE", "WEW"],
      keys: {
        W: { item: "minecraft:black_wool" },
        E: { tag: "forge:ender_pearls" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "fox",
      pattern: ["WSW", "SBS", "WSW"],
      keys: {
        W: { item: "minecraft:orange_wool" },
        S: { tag: "minecraft:fox_food" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "ghast",
      pattern: ["TCT", "GBG", "TGT"],
      keys: {
        T: { item: "minecraft:ghast_tear" },
        C: { item: "minecraft:fire_charge" },
        G: { tag: "forge:gunpowder" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "gold",
      pattern: ["GGG", "GBG", "GOG"],
      keys: {
        G: { tag: "forge:ingots/gold" },
        O: { tag: "forge:storage_blocks/gold" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "hay",
      pattern: ["HHH", "HBH", "HHH"],
      keys: {
        H: { item: "minecraft:hay_block" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "horse",
      pattern: ["LSL", "HBH", "LHL"],
      keys: {
        L: { tag: "forge:leather" },
        S: { item: "minecraft:saddle" },
        H: { item: "minecraft:hay_block" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "iron",
      pattern: ["III", "IBI", "IOI"],
      keys: {
        I: { tag: "forge:ingots/iron" },
        O: { tag: "forge:storage_blocks/iron" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "lapis",
      pattern: ["OLO", "LBL", "OLO"],
      keys: {
        O: { tag: "forge:storage_blocks/lapis" },
        L: { tag: "forge:gems/lapis" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "magma_cube",
      pattern: ["MLM", "MBM", "MLM"],
      keys: {
        M: { item: "minecraft:magma_cream" },
        L: { tag: "forge:buckets/lava" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "melon",
      pattern: ["MOM", "MBM", "MSM"],
      keys: {
        M: { item: "minecraft:melon_slice" },
        O: { item: "minecraft:melon" },
        S: { tag: "forge:seeds/melon" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "nether",
      pattern: ["QWQ", "NBN", "SLS"],
      keys: {
        Q: { tag: "forge:gems/quartz" },
        W: { tag: "forge:crops/nether_wart" },
        N: { tag: "forge:netherrack" },
        S: { item: "minecraft:blackstone" },
        L: { tag: "forge:buckets/lava" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "netherite",
      pattern: ["SIS", "SBS", "SOS"],
      keys: {
        S: { item: "minecraft:netherite_scrap" },
        I: { tag: "forge:ingots/netherite" },
        O: { tag: "forge:storage_blocks/netherite" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "ocelot",
      pattern: ["WRW", "RBR", "WRW"],
      keys: {
        W: { item: "minecraft:yellow_wool" },
        R: { tag: "forge:raw_fishes" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "pig",
      pattern: ["PPP", "PBP", "PPP"],
      keys: {
        P: { tag: "forge:raw_pork" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "pumpkin",
      pattern: ["PCP", "PBP", "PSP"],
      keys: {
        P: { tag: "forge:pumpkins" },
        C: { item: "minecraft:carved_pumpkin" },
        S: { tag: "forge:seeds/pumpkin" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "quartz",
      pattern: ["OQO", "QBQ", "OQO"],
      keys: {
        O: { tag: "forge:storage_blocks/quartz" },
        Q: { tag: "forge:gems/quartz" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "redstone",
      pattern: ["TRT", "RBR", "OOO"],
      keys: {
        T: { item: "minecraft:redstone_torch" },
        R: { tag: "forge:dusts/redstone" },
        O: { tag: "forge:storage_blocks/redstone" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "sandstone",
      pattern: ["SSS", "SBS", "SSS"],
      keys: {
        S: { tag: "forge:sandstone" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "sheep",
      pattern: ["WMW", "MBM", "WMW"],
      keys: {
        W: { item: "minecraft:white_wool" },
        M: { tag: "forge:raw_mutton" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "skeleton",
      pattern: ["OSO", "WBW", "OAO"],
      keys: {
        O: { tag: "forge:bones" },
        S: { item: "minecraft:skeleton_skull" },
        W: { tag: "forge:bows" },
        A: { tag: "minecraft:arrows" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "snow",
      pattern: ["III", "SBS", "NSN"],
      keys: {
        I: { item: "minecraft:ice" },
        S: { item: "minecraft:snow_block" },
        N: { item: "minecraft:snowball" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "spider",
      pattern: ["ESE", "SBS", "ESE"],
      keys: {
        E: { item: "minecraft:spider_eye" },
        S: { tag: "forge:string" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "sponge",
      pattern: ["SSS", "SBS", "SSS"],
      keys: {
        S: { item: "minecraft:sponge" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "squid",
      pattern: ["WIW", "IBI", "WIW"],
      keys: {
        W: { item: "minecraft:blue_wool" },
        I: { item: "minecraft:ink_sac" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "wither",
      pattern: ["WWW", "SBS", "SNS"],
      keys: {
        W: { item: "minecraft:wither_skeleton_skull" },
        S: { item: "minecraft:soul_sand" },
        N: { tag: "forge:nether_stars" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
    {
      id: "wolf",
      pattern: ["WOW", "OBO", "WOW"],
      keys: {
        W: { item: "minecraft:white_wool" },
        O: { tag: "forge:bones" },
        B: { tag: "vanillaaugratin:backpacks/standard" },
      },
    },
  ],
};
