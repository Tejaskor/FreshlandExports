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

export const moringaImages = {
  // --- 1. Hero — right side, landscape 16:9 --------------------------------
  // Prompt: "Premium cinematic product photography of vibrant green moringa
  // powder in a ceramic bowl, surrounded by fresh moringa leaves, deep
  // forest-green background, natural lighting, luxury botanical aesthetic,
  // landscape 16:9."
  hero: {
    file: "/images/products/Moringa Powder/moringa-powder-hero.webp",
    alt: "Vibrant green moringa powder in a ceramic bowl surrounded by fresh moringa leaves",
    label: "Hero · Moringa powder in ceramic bowl",
  },

  // --- 2. About Moringa: introduction — right side, landscape 4:3 -----------
  // Prompt: "Realistic premium botanical photography of a lush Moringa
  // oleifera tree with fresh green leaves on an Indian farm, warm natural
  // sunlight, editorial style, landscape 4:3."
  tree: {
    file: "/images/products/Moringa Powder/moringa-farm-background.webp",
    alt: "Fresh moringa leaves drying on woven trays on an Indian farm in warm sunlight",
    label: "Intro · Moringa tree on farm",
  },

  // --- 2. About Moringa: nutritional value — product photograph ------------
  nutrition: {
    file: "/images/products/Moringa Powder/moringa-nutritional-value.webp",
    alt: "A speckled bowl of moringa powder beside a sprig of fresh moringa leaves",
    label: "Nutritional Value · Moringa powder in ceramic bowl",
  },


  // --- 3. Applications: recipes ---------------------------------------------
  // Ratios follow the recipe crops, so a few differ from the base
  // "landscape 4:3" template.
  smoothie: {
    file: "/images/products/Moringa Powder/moringa-green-smoothie.webp",
    alt: "Fresh green moringa smoothie being poured into a tall glass",
    label: "Recipe · Green moringa smoothie",
  },
  herbalDrink: {
    file: "/images/products/Moringa Powder/moringa-herbal-drink.webp",
    alt: "Warm moringa herbal drink in a ceramic mug with moringa powder and fresh leaves",
    label: "Recipe · Herbal drink with lemon",
  },
  breakfastBowl: {
    file: "/images/products/Moringa Powder/moringa-breakfast-bowl.webp",
    alt: "Moringa breakfast bowl with sliced bananas, berries, nuts, and chia seeds",
    label: "Recipe · Moringa breakfast bowl",
  },
  pancakes: {
    file: "/images/products/Moringa Powder/moringa-pancakes.webp",
    alt: "Stack of green moringa pancakes topped with cream and fresh berries",
    label: "Recipe · Green moringa pancakes",
  },

  // --- 3. Applications: commercial uses, irregular grid ---------------------
  appHealthFoods: {
    file: "/images/products/Moringa Powder/moringa-health-food-products.webp",
    alt: "Health food products made with moringa powder including smoothies and snack balls",
    label: "Application · Health food products",
  },
  appBeverages: {
    file: "/images/products/Moringa Powder/moringa-functional-beverages.webp",
    alt: "Functional beverages made with moringa powder and tropical fruits",
    label: "Application · Functional beverages",
  },
  appBakery: {
    file: "/images/products/Moringa Powder/moringa-healthy-bread.webp",
    alt: "Bakery bread and toast products made with moringa powder",
    label: "Application · Bakery products",
  },
  appSnacks: {
    file: "/images/products/Moringa Powder/moringa-nutritional-snacks.webp",
    alt: "Nutritional snacks made with moringa powder including crackers, puffs, and bites",
    label: "Application · Nutritional snacks",
  },
  // Own photographs, so no image repeats elsewhere on the page.
  appHerbalBlends: {
    file: "/images/products/Moringa Powder/moringa-tea.webp",
    alt: "A cup of moringa tea on a saucer beside fresh moringa leaves",
    label: "Application · Herbal blends",
  },
  appSupplements: {
    file: "/images/products/Moringa Powder/moringa-powder-health-benefits.webp",
    alt: "A wooden spoon of fine moringa leaf powder resting on fresh moringa leaves",
    label: "Application · Food supplements",
  },

  // --- 4. Product Details: process — illustrative, square 1:1 (circular) ----
  stepHarvesting: {
    file: "/images/products/Moringa Powder/moringa-leaf-harvesting.webp",
    alt: "Farmer hand-harvesting fresh green moringa leaves",
    label: "Step 1 · Harvesting",
  },
  stepCleaning: {
    file: "/images/products/Moringa Powder/moringa-leaf-cleaning.webp",
    alt: "Moringa leaves being washed and sorted in clean trays",
    label: "Step 2 · Cleaning",
  },
  stepDrying: {
    file: "/images/products/Moringa Powder/moringa-leaf-drying.webp",
    alt: "Moringa leaves drying on multi-tier racks in a controlled facility",
    label: "Step 3 · Drying",
  },
  stepGrinding: {
    file: "/images/products/Moringa Powder/moringa-powder-grinding.webp",
    alt: "Stainless steel milling grinder processing dried moringa leaves into powder",
    label: "Step 4 · Grinding",
  },
  stepSieving: {
    file: "/images/products/Moringa Powder/moringa-powder-sieving.webp",
    alt: "Fine green moringa powder being sifted through a stainless steel sieve",
    label: "Step 5 · Sieving",
  },
  stepPackaging: {
    file: "/images/products/Moringa Powder/moringa-powder-packagingn.webp",
    alt: "Hygienic packaging line filling food-grade moringa powder pouches",
    label: "Step 6 · Packaging",
  },

  // --- 4. Product Details: packaging beside the data sheet, landscape 16:10 -
  packaging: {
    file: "/images/products/Moringa Powder/moringa-powder-packaging.webp",
    alt: "Freshland Exports moringa powder pouch beside a bowl of moringa powder and fresh leaves",
    label: "Specs · Packaging",
  },
} satisfies Record<string, MoringaImage>;

export type MoringaImageKey = keyof typeof moringaImages;
