/**
 * Image slots for the Moringa Powder page.
 *
 * No photography has been generated yet. Each slot renders a styled
 * placeholder at its final proportions (see ImageSlot); dropping a file at
 * `public` + `file` swaps the placeholder for the photograph at build time,
 * with no code change.
 *
 * The comment above every slot is the exact image-generation prompt for it.
 */

export type MoringaImage = {
  /** Site-relative path the finished image should be saved to. */
  file: string;
  alt: string;
  /** Short caption printed on the placeholder so the slot is easy to find. */
  label: string;
};

const dir = "/images/products/moringa";

export const moringaImages = {
  // --- 1. Hero — right side, landscape 16:9 --------------------------------
  // Prompt: "Premium cinematic product photography of vibrant green moringa
  // powder in a ceramic bowl, surrounded by fresh moringa leaves, deep
  // forest-green background, natural lighting, luxury botanical aesthetic,
  // landscape 16:9."
  hero: {
    file: `${dir}/moringa-hero-powder-ceramic-bowl.webp`,
    alt: "Vibrant green moringa powder in a ceramic bowl surrounded by fresh moringa leaves",
    label: "Hero · Moringa powder in ceramic bowl",
  },

  // --- 2. About Moringa: introduction — right side, landscape 4:3 -----------
  // Prompt: "Realistic premium botanical photography of a lush Moringa
  // oleifera tree with fresh green leaves on an Indian farm, warm natural
  // sunlight, editorial style, landscape 4:3."
  tree: {
    file: `${dir}/moringa-intro-tree-indian-farm.webp`,
    alt: "A lush Moringa oleifera tree with fresh green leaves on an Indian farm",
    label: "Intro · Moringa tree on farm",
  },

  // --- 2. About Moringa: nutritional value — small circle, square 1:1 -------
  // Prompt: "Top-down premium food photography of green moringa powder in a
  // ceramic bowl surrounded by fresh moringa leaves, pale sage background,
  // soft natural lighting, square composition."
  nutrition: {
    file: `${dir}/moringa-nutrition-bowl-top-down.webp`,
    alt: "Top-down view of green moringa powder in a ceramic bowl surrounded by fresh leaves",
    label: "Nutrition · Top-down bowl",
  },

  // --- 3. Applications: recipes ---------------------------------------------
  // Ratios follow the recipe crops, so a few differ from the base
  // "landscape 4:3" template.
  // Prompt: "Premium commercial food photography of a green moringa smoothie
  // in a tall glass, natural ingredients, elegant styling, soft daylight,
  // warm cream background, realistic textures, no text or logo, square 1:1."
  smoothie: {
    file: `${dir}/moringa-use-green-smoothie.webp`,
    alt: "Green moringa smoothie in a tall glass",
    label: "Recipe · Green moringa smoothie",
  },
  // Prompt: "Premium commercial food photography of a moringa herbal drink in
  // a glass cup with lemon slices, natural ingredients, elegant styling, soft
  // daylight, warm cream background, realistic textures, no text or logo,
  // landscape 16:10."
  herbalDrink: {
    file: `${dir}/moringa-use-herbal-drink-lemon.webp`,
    alt: "Moringa herbal drink with slices of lemon",
    label: "Recipe · Herbal drink with lemon",
  },
  // Prompt: "Premium commercial food photography of a moringa breakfast bowl
  // with yoghurt, oats, sliced fruit and seeds, natural ingredients, elegant
  // styling, soft daylight, warm cream background, realistic textures, no
  // text or logo, landscape 16:9."
  breakfastBowl: {
    file: `${dir}/moringa-use-breakfast-bowl.webp`,
    alt: "Moringa breakfast bowl with yoghurt, oats, fruit and seeds",
    label: "Recipe · Moringa breakfast bowl",
  },
  // Prompt: "Premium commercial food photography of a stack of green moringa
  // pancakes with fresh berries, natural ingredients, elegant styling, soft
  // daylight, warm cream background, realistic textures, no text or logo,
  // panoramic 21:9."
  pancakes: {
    file: `${dir}/moringa-use-green-pancakes.webp`,
    alt: "Stack of green moringa pancakes with fresh berries",
    label: "Recipe · Green moringa pancakes",
  },

  // --- 3. Applications: commercial uses, irregular grid ---------------------
  // Prompt: "Premium commercial product photography of health food products
  // made with green moringa powder — granola, energy bars and cereal in
  // unbranded packaging — elegant minimal styling, soft natural light, cream
  // and forest-green palette, realistic textures, no text or logo, portrait 4:5."
  appHealthFoods: {
    file: `${dir}/moringa-application-health-food-products.webp`,
    alt: "Health food products made with moringa powder",
    label: "Application · Health food products",
  },
  // Prompt: "Premium commercial product photography of functional beverages
  // made with green moringa powder — unbranded bottles and cans with a glass
  // of green drink — elegant minimal styling, soft natural light, cream and
  // forest-green palette, realistic textures, no text or logo, landscape 16:9."
  appBeverages: {
    file: `${dir}/moringa-application-functional-beverages.webp`,
    alt: "Functional beverages made with moringa powder",
    label: "Application · Functional beverages",
  },
  // Prompt: "Premium commercial product photography of bakery products made
  // with green moringa powder — bread, cookies and muffins — elegant minimal
  // styling, soft natural light, cream and forest-green palette, realistic
  // textures, no text or logo, portrait 2:3."
  appBakery: {
    file: `${dir}/moringa-application-bakery-products.webp`,
    alt: "Bakery products made with moringa powder",
    label: "Application · Bakery products",
  },
  // Prompt: "Premium commercial product photography of nutritional snacks
  // made with green moringa powder — crackers, puffs and snack bites in
  // bowls — elegant minimal styling, soft natural light, cream and
  // forest-green palette, realistic textures, no text or logo, landscape 16:9."
  appSnacks: {
    file: `${dir}/moringa-application-nutritional-snacks.webp`,
    alt: "Nutritional snacks made with moringa powder",
    label: "Application · Nutritional snacks",
  },
  // Prompt: "Premium commercial product photography of herbal tea blends
  // containing green moringa powder and dried leaves in glass jars and
  // unbranded pouches, elegant minimal styling, soft natural light, cream and
  // forest-green palette, realistic textures, no text or logo, panoramic 21:9."
  appHerbalBlends: {
    file: `${dir}/moringa-application-herbal-blends.webp`,
    alt: "Herbal blends containing moringa powder and dried leaves",
    label: "Application · Herbal blends",
  },
  // Prompt: "Premium commercial product photography of food supplements made
  // with green moringa powder — capsules, tablets and powder in unbranded
  // containers — elegant minimal styling, soft natural light, cream and
  // forest-green palette, realistic textures, no text or logo, landscape 2:1."
  appSupplements: {
    file: `${dir}/moringa-application-food-supplements.webp`,
    alt: "Food supplement capsules and powder made with moringa",
    label: "Application · Food supplements",
  },

  // --- 4. Product Details: process — illustrative, square 1:1 (circular) ----
  // Label these as illustrative unless actual company photos are available.
  // Prompt: "Realistic agricultural photography of farm workers hand-harvesting
  // fresh moringa leaves from a Moringa oleifera tree in India, natural
  // daylight, documentary style, no text or logo, square 1:1."
  stepHarvesting: {
    file: `${dir}/moringa-process-1-harvesting.webp`,
    alt: "Illustrative: moringa leaves being harvested by hand",
    label: "Step 1 · Harvesting",
  },
  // Prompt: "Realistic food-processing photography of fresh moringa leaves
  // being washed and sorted in clean stainless-steel trays, hygienic
  // facility, natural light, documentary style, no text or logo, square 1:1."
  stepCleaning: {
    file: `${dir}/moringa-process-2-cleaning.webp`,
    alt: "Illustrative: moringa leaves being washed and sorted",
    label: "Step 2 · Cleaning",
  },
  // Prompt: "Realistic food-processing photography of moringa leaves spread
  // on drying racks in a clean, shaded drying room, soft natural light,
  // documentary style, no text or logo, square 1:1."
  stepDrying: {
    file: `${dir}/moringa-process-3-drying.webp`,
    alt: "Illustrative: moringa leaves drying on racks",
    label: "Step 3 · Drying",
  },
  // Prompt: "Realistic food-processing photography of dried moringa leaves
  // being milled into green powder in a stainless-steel grinder, hygienic
  // facility, documentary style, no text or logo, square 1:1."
  stepGrinding: {
    file: `${dir}/moringa-process-4-grinding.webp`,
    alt: "Illustrative: dried moringa leaves being milled into powder",
    label: "Step 4 · Grinding",
  },
  // Prompt: "Realistic food-processing photography of fine green moringa
  // powder passing through a stainless-steel sieve, close-up, hygienic
  // facility, documentary style, no text or logo, square 1:1."
  stepSieving: {
    file: `${dir}/moringa-process-5-sieving.webp`,
    alt: "Illustrative: moringa powder being sieved",
    label: "Step 5 · Sieving",
  },
  // Prompt: "Realistic food-processing photography of green moringa powder
  // being packed into unbranded food-grade bags in a clean packing area,
  // documentary style, no text or logo, square 1:1."
  stepPackaging: {
    file: `${dir}/moringa-process-6-packaging.webp`,
    alt: "Illustrative: moringa powder being packed into food-grade bags",
    label: "Step 6 · Packaging",
  },

  // --- 4. Product Details: packaging beside the data sheet, landscape 16:10 -
  // Prompt: "Premium unbranded food-grade packaging of green moringa powder
  // with a ceramic bowl and fresh leaves, elegant studio lighting, cream and
  // forest-green palette, landscape 16:10."
  packaging: {
    file: `${dir}/moringa-spec-packaging.webp`,
    alt: "Unbranded food-grade packaging of moringa powder beside a ceramic bowl and leaves",
    label: "Specs · Packaging",
  },

} satisfies Record<string, MoringaImage>;

export type MoringaImageKey = keyof typeof moringaImages;
