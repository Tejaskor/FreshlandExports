import type { Faq } from "@/features/moringa/data";

/**
 * Content for the Turmeric Powder page, from the supplied product copy.
 * Health statements keep their "potential / researched" framing and the
 * supplied disclaimers. No curcumin level, certification, or packaging
 * detail is stated that was not supplied.
 */

export const turmericHero = {
  subtitle: "Premium Turmeric Powder for Global Markets",
  title: "Turmeric Powder",
  tagline: "Nature's Golden Spice, Delivered Worldwide",
  body: "Experience the rich colour, distinctive aroma, and earthy flavour of premium turmeric powder from Freshland Exports. Carefully processed to preserve its natural characteristics, it is suitable for culinary applications, food manufacturing, and international markets.",
  facts: [
    { label: "Botanical name", value: "Curcuma longa" },
    { label: "Colour", value: "Golden-yellow" },
    { label: "Texture", value: "Fine powder" },
  ],
} as const;

export const turmericIntro = {
  eyebrow: "Introducing Turmeric Powder",
  heading: ["The Golden Essence", "of Nature"],
  body: [
    "Turmeric (Curcuma longa) is a widely used spice known for its vibrant golden-yellow colour, earthy aroma, and distinctive flavour. Sourced from the underground rhizomes of the turmeric plant, it is carefully dried and ground into a fine powder.",
    "An essential ingredient in traditional Indian cuisine, turmeric is now used in food products and culinary traditions worldwide.",
    "At Freshland Exports, we focus on supplying turmeric powder suitable for diverse culinary and commercial applications.",
  ],
  highlights: [
    { label: "Botanical Name", value: "Curcuma longa" },
    { label: "Appearance", value: "Golden-yellow to deep orange-yellow" },
    { label: "Texture", value: "Fine powder" },
    { label: "Flavour", value: "Warm, earthy, and slightly bitter" },
    { label: "Main Active Compound", value: "Curcumin" },
    { label: "Applications", value: "Food, beverages, and food processing" },
  ],
} as const;

export const turmericNutrition = {
  heading: "Naturally Rich in Beneficial Plant Compounds",
  intro:
    "Turmeric powder contains naturally occurring compounds, including curcuminoids and essential oils. It also provides small amounts of several nutrients.",
  items: [
    { title: "Curcumin", text: "A naturally occurring plant compound responsible for much of turmeric's golden colour, widely studied for its antioxidant and anti-inflammatory properties." },
    { title: "Dietary Fibre", text: "Contributes to normal digestive function and forms part of a balanced diet." },
    { title: "Iron", text: "An essential mineral that supports haemoglobin production and oxygen transport throughout the body." },
    { title: "Manganese", text: "Helps support normal metabolism and enzyme function." },
    { title: "Potassium", text: "Plays an important role in normal muscle and nerve function." },
    { title: "Vitamin B6", text: "Contributes to normal energy metabolism and several other bodily functions." },
  ],
  note: "The nutritional composition of turmeric varies depending on its variety, growing conditions, and processing.",
} as const;

export const turmericBenefits = {
  heading: "Supporting Everyday Wellness Through Natural Ingredients",
  intro:
    "Turmeric has a long history of culinary and traditional use. Its naturally occurring compounds, particularly curcumin, have attracted scientific interest.",
  items: [
    { title: "Antioxidant Properties", text: "Turmeric contains compounds with antioxidant properties, studied for their ability to neutralise free radicals and help protect cells against oxidative stress." },
    { title: "Inflammatory Response", text: "Curcumin has been studied for its potential effects on inflammatory processes in the body. Research into its possible role in general wellness is ongoing." },
    { title: "Digestive Health", text: "Turmeric has traditionally been used in foods and preparations intended to support digestion. Its effects on digestive health are still being investigated." },
    { title: "Joint Health", text: "Some studies of concentrated curcumin supplements suggest potential benefits for people with osteoarthritis symptoms. More research is needed on ordinary turmeric powder." },
    { title: "Nutritional Wellness", text: "Adds flavour and naturally occurring plant compounds to everyday meals as part of a varied and balanced diet." },
  ],
  note: "These are potential or researched benefits, not guaranteed medical outcomes. Culinary turmeric powder is not a substitute for medical treatment.",
} as const;

export const turmericPopular = {
  heading: "A Timeless Spice with Global Appeal",
  items: [
    { title: "Natural Golden Colour", text: "Its yellow-orange colour makes it popular across culinary preparations and food products." },
    { title: "Distinctive Earthy Flavour", text: "A warm, earthy taste that enhances traditional recipes and modern creations." },
    { title: "Versatile Applications", text: "From household kitchens to large-scale food manufacturing." },
    { title: "Traditional Heritage", text: "Centuries of use in Indian cooking and traditional practices." },
    { title: "International Demand", text: "Used in cuisines across Asia, the Middle East, Europe, and beyond." },
  ],
} as const;

export type UseGroup = { title: string; text: string; items: readonly string[] };

export const turmericUses: readonly UseGroup[] = [
  {
    title: "Everyday Cooking",
    text: "A staple of Indian cuisine, adding golden colour and earthy flavour to everyday meals.",
    items: ["Curries and gravies", "Vegetable preparations", "Lentils and dals", "Rice and biryani", "Soups and stews", "Marinades"],
  },
  {
    title: "Healthy Beverages",
    text: "Added to a variety of hot and cold beverages.",
    items: ["Golden milk", "Turmeric tea", "Herbal infusions", "Ginger and turmeric drinks", "Smoothies"],
  },
  {
    title: "Baking and Snacks",
    text: "Provides colour and flavour in selected baked products and savoury snacks.",
    items: ["Savoury biscuits", "Crackers", "Bread", "Seasoned snacks", "Spiced baked goods"],
  },
  {
    title: "Food Processing",
    text: "An important ingredient in commercial food production.",
    items: ["Spice blends", "Seasoning mixes", "Sauces and dressings", "Instant noodles", "Ready-to-eat meals", "Snack coatings"],
  },
];

export const turmericIndustries = {
  items: [
    { title: "Food and Beverage", text: "Curries, sauces, soups, spice blends, beverages, and seasoning products." },
    { title: "Food Processing", text: "Processed foods, instant meals, snacks, and ready-to-eat products." },
    { title: "Nutraceutical", text: "Products containing turmeric or concentrated curcumin." },
    { title: "Cosmetics", text: "Selected skincare formulations and traditional beauty preparations." },
    { title: "Herbal Products", text: "Traditional herbal preparations and wellness products." },
  ],
  note: "Applications depend on the intended product, applicable regulations, and ingredient specifications.",
} as const;

export const turmericStorage = {
  heading: "Preserving Colour, Aroma, and Flavour",
  tips: [
    "Store in a cool, dry place.",
    "Keep in an airtight container.",
    "Protect from direct sunlight.",
    "Avoid exposure to moisture.",
    "Use clean, dry utensils.",
    "Keep away from strong-smelling substances.",
  ],
  bulkNote: "For bulk and commercial applications, follow the storage recommendations provided with the product.",
} as const;

export const turmericWhyChoose = {
  heading: "Your Partner for Quality Agricultural Exports",
  body: "We aim to supply turmeric powder that meets the needs of international buyers and food manufacturers — a versatile spice ingredient with a distinctive colour, aroma, and flavour.",
  // Add verified certifications, quality standards, curcumin specifications
  // and packaging details here once they are available — none are stated
  // on the page until then.
  highlights: [
    "Carefully processed turmeric powder",
    "Distinctive golden-yellow colour",
    "Characteristic earthy aroma",
    "Suitable for culinary and food-processing applications",
    "Bulk supply options",
    "Packaging options for international buyers",
    "Export-oriented product specifications",
  ],
} as const;

/**
 * Specification panel: every value is taken from the supplied copy. Figures
 * that were not supplied are shown as pending, never estimated.
 */
export const turmericSpecs: readonly { label: string; value: string; pending?: boolean }[] = [
  { label: "Product Name", value: "Turmeric Powder" },
  { label: "Botanical Name", value: "Curcuma longa" },
  { label: "Plant Part", value: "Rhizome (underground stem)" },
  { label: "Appearance", value: "Golden-yellow to deep orange-yellow" },
  { label: "Texture", value: "Fine powder" },
  { label: "Flavour", value: "Warm, earthy, and slightly bitter" },
  { label: "Main Active Compound", value: "Curcumin" },
  { label: "Applications", value: "Food, beverages, and food processing" },
  { label: "Supply", value: "Bulk supply options" },
  { label: "Packaging", value: "Options for international buyers" },
  { label: "Curcumin Content", value: "To be confirmed", pending: true },
];

export const turmericFaqs: readonly Faq[] = [
  { question: "What is turmeric powder made from?", answer: "Turmeric powder is made from the dried underground stems, known as rhizomes, of the Curcuma longa plant. These are processed and ground into a fine powder." },
  { question: "What are the main benefits of turmeric powder?", answer: "Turmeric contains curcumin and other compounds with antioxidant properties. Researchers are studying its potential anti-inflammatory effects and possible benefits for joint health." },
  { question: "Can turmeric powder be consumed daily?", answer: "Turmeric is commonly used in everyday cooking. Culinary quantities are generally considered safe for most people. However, concentrated supplements may carry additional risks." },
  { question: "How can turmeric powder be used?", answer: "Turmeric powder can be used in curries, rice, soups, lentils, sauces, marinades, spice blends, and beverages such as golden milk." },
  { question: "Does turmeric powder contain curcumin?", answer: "Yes. Turmeric naturally contains curcumin and other related compounds called curcuminoids. The concentration varies depending on the turmeric variety and processing." },
  { question: "Is turmeric powder suitable for food manufacturing?", answer: "Yes. Turmeric powder is used in a variety of food products, including spice blends, sauces, snacks, instant meals, and seasoning mixes." },
  { question: "How should turmeric powder be stored?", answer: "Store turmeric powder in an airtight container in a cool, dry place, away from sunlight and moisture." },
  { question: "What is the difference between turmeric powder and curcumin?", answer: "Turmeric powder is a whole spice containing various natural compounds, including curcumin. Curcumin is one specific compound that can be extracted and concentrated from turmeric." },
];

