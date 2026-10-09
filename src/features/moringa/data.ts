import type { MoringaImageKey } from "@/features/moringa/images";
import { moqFor } from "@/features/products/moq";

/**
 * Content for the Moringa Powder page.
 *
 * Copy is kept factual: nutrients are described by the role they play in
 * general, not as outcomes of eating moringa, and grade-specific figures are
 * left to each quotation. Anything that reads like a health claim is paired
 * with the food-ingredient disclaimer.
 */

export const moringaHero = {
  eyebrow: "Powder Products",
  lines: ["Moringa", "Powder —", "Nature's Green", "Treasure"],
  body: "Discover nutrient-rich moringa powder, a versatile plant-based ingredient for everyday foods and beverages.",
  facts: [
    { label: "Botanical", value: "Moringa oleifera" },
    { label: "Part used", value: "Leaves" },
    { label: "Origin", value: "India" },
  ],
} as const;

export const moringaIntro = {
  eyebrow: "About Moringa",
  body: "Moringa oleifera is a tropical tree valued for its nutritious leaves. The leaves can be dried and ground into a fine green powder, making them easy to incorporate into meals and beverages.",
  tags: ["Dried leaves", "Finely milled", "Easy to blend"],
} as const;

export type Benefit = { title: string; text: string };

/**
 * The six nutrients in the "Nature's Nutritional Treasure" selector. Each
 * carries its own benefits for the panel beside it: a one-line summary and
 * three points, phrased as what the nutrient contributes to in general — not
 * claims for the powder as a treatment. Every entry has the same number of
 * points so the panel keeps one height whichever nutrient is selected.
 */
export type Nutrient = {
  symbol: string;
  name: string;
  role: string;
  summary: string;
  benefits: readonly [Benefit, Benefit, Benefit];
};

export const nutrients: readonly Nutrient[] = [
  {
    symbol: "A",
    name: "Vitamin A",
    role: "Vision and immune function",
    summary: "Moringa leaves naturally contain carotenoids, which the body converts to vitamin A.",
    benefits: [
      { title: "Supports normal vision", text: "Vitamin A contributes to the maintenance of normal vision." },
      { title: "Supports normal immune function", text: "Vitamin A contributes to the normal function of the immune system." },
      { title: "Supports normal skin", text: "Vitamin A contributes to the maintenance of normal skin." },
    ],
  },
  {
    symbol: "C",
    name: "Vitamin C",
    role: "Collagen production",
    summary: "Fresh moringa leaves contain vitamin C; the level in the powder depends on drying.",
    benefits: [
      { title: "Supports collagen formation", text: "Vitamin C contributes to normal collagen formation for normal skin." },
      { title: "Supports normal immune function", text: "Vitamin C contributes to the normal function of the immune system." },
      { title: "Helps iron absorption", text: "Vitamin C increases the absorption of iron from food." },
    ],
  },
  {
    symbol: "Ca",
    name: "Calcium",
    role: "Healthy bones and teeth",
    summary: "Moringa leaves are a plant source of calcium.",
    benefits: [
      { title: "Supports normal bones", text: "Calcium is needed for the maintenance of normal bones." },
      { title: "Supports normal teeth", text: "Calcium is needed for the maintenance of normal teeth." },
      { title: "Supports muscle function", text: "Calcium contributes to normal muscle function." },
    ],
  },
  {
    symbol: "Fe",
    name: "Iron",
    role: "Oxygen transport",
    summary: "Moringa leaves are a plant source of iron.",
    benefits: [
      { title: "Supports oxygen transport", text: "Iron contributes to normal oxygen transport in the body." },
      { title: "Supports energy metabolism", text: "Iron contributes to normal energy-yielding metabolism." },
      { title: "Supports normal immune function", text: "Iron contributes to the normal function of the immune system." },
    ],
  },
  {
    symbol: "Pr",
    name: "Plant Protein",
    role: "Growth and tissue repair",
    summary: "The dried leaves contain plant protein, a useful addition to plant-based recipes.",
    benefits: [
      { title: "Supports muscle", text: "Protein contributes to the maintenance of muscle mass." },
      { title: "Supports normal bones", text: "Protein contributes to the maintenance of normal bones." },
      { title: "Plant-based source", text: "Suits plant-based foods, beverages and blends." },
    ],
  },
  {
    symbol: "Fi",
    name: "Fibre",
    role: "Digestive health",
    summary: "Milling the whole dried leaf keeps its natural fibre in the powder.",
    benefits: [
      { title: "Contains dietary fibre", text: "Whole-leaf powder naturally carries the leaf's fibre." },
      { title: "Part of a balanced diet", text: "Dietary fibre is part of a varied, balanced diet." },
      { title: "Easy to add", text: "A small spoonful blends into drinks, bakes and bowls." },
    ],
  },
];

/** Shown under the selector: levels depend on the crop and processing. */
export const nutrientsNote =
  "Roles shown are what each nutrient does in the body in general. Levels vary by crop and processing and are confirmed on each lot's specification sheet.";

export const benefitsDisclaimer =
  "Moringa powder is a food ingredient, not a medicine. It is not intended to diagnose, treat, cure or prevent any disease and should not replace medical treatment or advice.";

/** Everyday ways to use the powder, listed with the recipes. */
export const uses: readonly { name: string }[] = [
  { name: "Smoothies" },
  { name: "Herbal Drinks" },
  { name: "Fresh Juices" },
  { name: "Soups" },
  { name: "Breakfast Bowls" },
  { name: "Baking" },
];

export const usageTip =
  "Start with approximately half a teaspoon in a recipe and adjust to taste.";

export type Recipe = {
  id: string;
  title: string;
  time: string;
  serves: string;
  image: MoringaImageKey;
  ingredients: readonly string[];
  method: readonly string[];
};

export const recipes: readonly Recipe[] = [
  {
    id: "green-smoothie",
    title: "Moringa Green Smoothie",
    time: "5 min",
    serves: "Serves 1",
    image: "smoothie",
    ingredients: [
      "½ tsp moringa powder",
      "1 ripe banana",
      "1 cup milk or plant milk",
      "Handful of spinach",
      "1 tsp honey (optional)",
    ],
    method: [
      "Add everything to a blender.",
      "Blend until smooth, adding a splash more milk to loosen.",
      "Taste, adjust the sweetness and serve straight away.",
    ],
  },
  {
    id: "herbal-drink",
    title: "Moringa Herbal Drink",
    time: "5 min",
    serves: "Serves 1",
    image: "herbalDrink",
    ingredients: ["½ tsp moringa powder", "1 cup warm water", "Squeeze of lemon", "1 tsp honey (optional)"],
    method: [
      "Whisk the powder into a little warm (not boiling) water to make a smooth paste.",
      "Top up with the rest of the water and stir well.",
      "Finish with lemon and honey to taste.",
    ],
  },
  {
    id: "pancakes",
    title: "Moringa Pancakes",
    time: "20 min",
    serves: "Makes 6",
    image: "pancakes",
    ingredients: [
      "1 cup flour",
      "1 tsp moringa powder",
      "1 tsp baking powder",
      "1 egg or flax egg",
      "¾ cup milk",
      "Pinch of salt",
    ],
    method: [
      "Whisk the flour, moringa powder, baking powder and salt together.",
      "Beat the egg and milk, then fold into the dry ingredients until just combined.",
      "Cook small ladlefuls on a medium pan for about two minutes a side.",
    ],
  },
  {
    id: "breakfast-bowl",
    title: "Moringa Breakfast Bowl",
    time: "5 min",
    serves: "Serves 1",
    image: "breakfastBowl",
    ingredients: [
      "½ cup yoghurt or soaked oats",
      "½ tsp moringa powder",
      "Sliced seasonal fruit",
      "Nuts and seeds",
      "Drizzle of honey",
    ],
    method: [
      "Stir the moringa powder evenly through the yoghurt or oats.",
      "Top with fruit, nuts and seeds.",
      "Finish with a drizzle of honey.",
    ],
  },
];

export type Application = { title: string; text: string; image: MoringaImageKey };

export const applications: readonly Application[] = [
  { title: "Health Food Products", text: "Granolas, bars and cereals.", image: "appHealthFoods" },
  { title: "Functional Beverages", text: "Ready-to-drink and powdered mixes.", image: "appBeverages" },
  { title: "Bakery Products", text: "Breads, cookies and baked snacks.", image: "appBakery" },
  { title: "Nutritional Snacks", text: "Crackers, puffs and bites.", image: "appSnacks" },
  { title: "Herbal Blends", text: "Tea and infusion blends.", image: "appHerbalBlends" },
  { title: "Food Supplements", text: "Capsules, tablets and powders.", image: "appSupplements" },
];

export type ProcessStep = { title: string; text: string; image: MoringaImageKey };

export const processSteps: readonly ProcessStep[] = [
  { title: "Harvesting", text: "Mature leaves are picked from moringa trees.", image: "stepHarvesting" },
  { title: "Cleaning", text: "Leaves are sorted and washed to remove soil and debris.", image: "stepCleaning" },
  { title: "Drying", text: "Leaves are dried under controlled conditions.", image: "stepDrying" },
  { title: "Grinding", text: "Dried leaves are milled into a fine green powder.", image: "stepGrinding" },
  { title: "Sieving", text: "The powder is sifted for a consistent texture.", image: "stepSieving" },
  { title: "Packaging", text: "Packed in food-grade packaging to buyer specifications.", image: "stepPackaging" },
];

/** Quality points, drawn from the export catalogue's trade terms. */
export const qualityPoints: readonly { title: string; text: string }[] = [
  {
    title: "Agreed specification",
    text: "Grade, mesh size and moisture are specified with each quotation.",
  },
  {
    title: "Documented lots",
    text: "Specification sheet and certificate of analysis on request.",
  },
  {
    title: "Food-grade packing",
    text: "Kraft bags with food-grade liners, drums, or private-label packing.",
  },
  { title: "Indian origin", text: "Grown and processed in India." },
];

export const moringaMoq = {
  label: "Minimum Order Quantity",
  heading: "Minimum Order:",
  quantity: moqFor("moringa-powder"),
  body: "Bulk supply available for wholesale, food-service, processing and export buyers.",
  highlight: `MOQ: ${moqFor("moringa-powder")}`,
} as const;

const toBeConfirmed = "To be confirmed";

export const specifications: readonly { label: string; value: string; pending?: boolean }[] = [
  { label: "Product Name", value: "Moringa Leaf Powder" },
  { label: "Botanical Name", value: "Moringa oleifera" },
  { label: "Form", value: "Fine Powder" },
  { label: "Colour", value: "Green" },
  { label: "Processing", value: "As per buyer requirements" },
  { label: "Packaging", value: "Customisable" },
  { label: "Origin", value: "India" },
  { label: "Grade", value: toBeConfirmed, pending: true },
  { label: "Mesh Size", value: toBeConfirmed, pending: true },
  { label: "Moisture Content", value: toBeConfirmed, pending: true },
  { label: "Shelf Life", value: toBeConfirmed, pending: true },
];

export type Faq = { question: string; answer: string };

export const faqs: readonly Faq[] = [
  {
    question: "What is moringa powder?",
    answer:
      "It is made from the leaves of the Moringa oleifera tree, dried and milled into a fine green powder that is used as a food ingredient.",
  },
  {
    question: "Can it be consumed daily?",
    answer:
      "Moringa leaves are eaten regularly as a vegetable in many regions, and the powder is commonly used in small amounts in everyday foods. If you are pregnant, nursing, taking medication or managing a health condition, check with a healthcare professional first.",
  },
  {
    question: "How can it be used?",
    answer:
      "Stir it into smoothies, juices, herbal drinks, soups, breakfast bowls or batters. Start with about half a teaspoon and adjust to taste.",
  },
  {
    question: "What does it taste like?",
    answer:
      "Earthy and grassy with a slightly bitter finish, similar to spinach or green tea. It pairs well with citrus, fruit and savoury dishes.",
  },
  {
    question: "Does it contain protein?",
    answer:
      "Yes. Moringa leaves contain plant protein alongside other nutrients. Exact values vary by lot and are shared on the specification sheet.",
  },
  {
    question: "Does it help with weight loss?",
    answer:
      "There is no reliable evidence that moringa powder causes weight loss on its own. It can be part of a balanced diet, but it is not a weight-loss product.",
  },
  {
    question: "Can it be used in the food industry?",
    answer:
      "Yes. It is used in beverages, bakery, snacks, herbal blends and supplements. We supply bulk quantities, with grade, mesh size and packaging agreed for each order.",
  },
];
