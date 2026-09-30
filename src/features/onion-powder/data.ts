import type { Faq } from "@/features/moringa/data";

/**
 * Content for the Onion Powder page, from the supplied product copy.
 * Health statements keep their original qualifications, and figures that
 * depend on production (moisture, shelf life, packaging) are left to the
 * product specification rather than stated here.
 */

export const onionHero = {
  label: "Premium Dehydrated Ingredients",
  title: "Onion Powder",
  tagline: ["Pure Flavour.", "Natural Goodness.", "Endless Possibilities."],
  body: [
    "Experience the rich aroma and distinctive taste of onions in a convenient, versatile form. Freshland Exports Onion Powder brings the natural flavour of onions to kitchens and food industries worldwide.",
    "From everyday cooking to large-scale food manufacturing, our onion powder offers convenience, versatility, and consistent flavour.",
  ],
} as const;

export const onionAbout = {
  eyebrow: "The Essence of Onion",
  heading: ["The Natural Flavour of Fresh", "Onions, Made Convenient"],
  body: [
    "Onion powder is a versatile ingredient made from carefully selected onions that are dehydrated and finely ground. It captures the characteristic aroma and savoury flavour of onions in a convenient, easy-to-use form.",
    "With its fine texture and concentrated flavour, it is an essential ingredient for modern kitchens, restaurants, and food processing — adding onion flavour to sauces, soups, seasonings, and ready-to-eat meals without peeling or chopping.",
  ],
  highlights: [
    "Rich and distinctive onion flavour",
    "Fine and uniform powder texture",
    "Convenient and easy to use",
    "Suitable for various culinary applications",
    "Easy to store and transport",
  ],
} as const;

export const onionFeatures: readonly { title: string; text: string }[] = [
  { title: "Rich Onion Flavour", text: "Delivers the familiar savoury taste and aroma of onions, enhancing a wide variety of dishes." },
  { title: "Fine Powder Texture", text: "Easily blends with dry ingredients, sauces, seasonings, and other food preparations." },
  { title: "Convenient Preparation", text: "Eliminates the need for peeling, chopping, and preparing fresh onions." },
  { title: "Versatile Applications", text: "Suitable for home cooking, restaurants, catering, and commercial food production." },
  { title: "Easy Storage", text: "Its low moisture content allows convenient storage when kept in suitable packaging and conditions." },
  { title: "Multiple Culinary Uses", text: "Ideal for soups, sauces, marinades, snacks, spice blends, and ready-to-eat meals." },
];

export const onionHealth: readonly { title: string; text: string }[] = [
  { title: "Antioxidant Compounds", text: "Onions naturally contain antioxidants, including flavonoids such as quercetin, which help protect cells against oxidative stress." },
  { title: "A Source of Minerals", text: "Contains small amounts of minerals, including potassium and calcium, which contribute to normal body functions." },
  { title: "Naturally Occurring Plant Compounds", text: "Onions contain sulfur-containing compounds and other plant substances being studied for their potential health effects." },
  { title: "Supports Flavourful, Balanced Meals", text: "Adds flavour without requiring additional salt. Choosing unsalted onion powder can help people manage their salt intake." },
  { title: "Convenient Everyday Ingredient", text: "Its easy-to-use format makes it a practical way to add onion flavour to a variety of meals." },
];

export const onionHealthNote =
  "Onion powder is a food ingredient, not a medicine. It should not be considered a treatment or cure for any disease.";

/** Approximate values per 100 g, as supplied. */
export const onionNutrition: readonly { nutrient: string; value: string }[] = [
  { nutrient: "Energy", value: "340–350 kcal" },
  { nutrient: "Carbohydrates", value: "79 g" },
  { nutrient: "Dietary Fibre", value: "15 g" },
  { nutrient: "Protein", value: "10 g" },
  { nutrient: "Total Fat", value: "1 g" },
  { nutrient: "Potassium", value: "1,000 mg" },
  { nutrient: "Calcium", value: "380 mg" },
  { nutrient: "Iron", value: "3 mg" },
];

export const onionNutritionNote =
  "Values are approximate and may vary depending on the onion variety and processing method. Actual nutritional values should be confirmed through laboratory testing.";

export const onionComparison: readonly { feature: string; powder: string; fresh: string }[] = [
  { feature: "Preparation", powder: "Ready to use", fresh: "Requires peeling and chopping" },
  { feature: "Storage", powder: "Longer shelf life when properly stored", fresh: "Shorter shelf life" },
  { feature: "Moisture", powder: "Low moisture", fresh: "High moisture" },
  { feature: "Convenience", powder: "Easy to measure and mix", fresh: "Requires preparation" },
  { feature: "Transportation", powder: "Lightweight and compact", fresh: "Heavier due to water content" },
  { feature: "Flavour", powder: "Concentrated onion flavour", fresh: "Fresh onion flavour" },
  { feature: "Applications", powder: "Seasonings, sauces, snacks", fresh: "Cooking, salads, garnishes" },
];

export type UseCategory = { id: string; title: string; text: string; items: readonly string[] };

export const onionUses: readonly UseCategory[] = [
  {
    id: "everyday",
    title: "Everyday Cooking",
    text: "Enhance the flavour of everyday meals with the rich taste of onion powder.",
    items: ["Curries and gravies", "Vegetable dishes", "Soups and stews", "Rice and pulao", "Pasta and noodles", "Dal and lentil dishes"],
  },
  {
    id: "snacks",
    title: "Snacks & Seasonings",
    text: "Add a savoury onion flavour to your favourite snacks and seasoning blends.",
    items: ["Potato chips", "French fries", "Popcorn", "Namkeen", "Roasted nuts", "Savoury crackers"],
  },
  {
    id: "sauces",
    title: "Sauces & Dressings",
    text: "Create flavourful sauces, dips, and dressings with the convenience of onion powder.",
    items: ["Mayonnaise", "Barbecue sauces", "Tomato sauces", "Salad dressings", "Sandwich spreads", "Dips"],
  },
  {
    id: "marinades",
    title: "Marinades & Grilling",
    text: "Bring depth and savoury flavour to marinades and seasoning mixes.",
    items: ["Chicken marinades", "Meat rubs", "Burgers", "Kebabs", "Grilled vegetables", "Barbecue seasonings"],
  },
  {
    id: "ready",
    title: "Ready-to-Eat Foods",
    text: "A convenient ingredient for food manufacturers producing quick and easy meals.",
    items: ["Instant noodles", "Instant soups", "Ready-to-eat meals", "Frozen food products", "Convenience foods", "Instant seasoning mixes"],
  },
];

export const onionHowTo: readonly { title: string; text: string }[] = [
  { title: "Soups", text: "Add during cooking for a rich, savoury onion flavour." },
  { title: "Curries", text: "Mix into gravies with other spices to enhance their flavour." },
  { title: "French Fries", text: "Sprinkle over freshly cooked fries for an extra savoury taste." },
  { title: "Pasta", text: "Add to pasta sauces for extra flavour and aroma." },
  { title: "Marinades", text: "Combine with garlic, pepper, and other spices." },
  { title: "Salad Dressings", text: "Mix into mayonnaise or yoghurt-based dressings." },
  { title: "Sandwiches", text: "Add to sandwich spreads and fillings." },
  { title: "Popcorn", text: "Combine with salt and sprinkle over fresh popcorn." },
  { title: "Rice", text: "Add a small quantity while cooking for a subtle onion flavour." },
  { title: "Instant Noodles", text: "Combine with other seasonings to enhance the flavour." },
];

export const onionUsageTip =
  "Approximately one teaspoon of onion powder can replace one small onion in some recipes. Adjust the quantity according to taste.";

export const onionIndustries: readonly { title: string; text: string }[] = [
  { title: "Snack Manufacturing", text: "Seasoning blends for chips, crackers, popcorn, and other savoury snacks." },
  { title: "Food Processing", text: "Instant soups, noodles, sauces, and ready-to-eat meals." },
  { title: "Restaurant & Catering", text: "A convenient way to add onion flavour to gravies, marinades, and soups." },
  { title: "Spice & Seasoning Manufacturing", text: "A key ingredient in spice mixes, dry rubs, and flavouring blends." },
  { title: "Meat Processing", text: "Savoury flavour for burgers, sausages, meat seasonings, and marinades." },
  { title: "Sauce Manufacturing", text: "Dips, salad dressings, barbecue sauces, and other condiments." },
];

export const onionSteps: readonly { title: string; text: string }[] = [
  { title: "Selection", text: "Fresh, mature onions are carefully selected for suitable quality." },
  { title: "Cleaning", text: "Onions are thoroughly washed to remove dirt and impurities." },
  { title: "Peeling & Slicing", text: "The outer skin is removed and onions are sliced into uniform pieces." },
  { title: "Dehydration", text: "Slices are dried under controlled conditions to reduce moisture." },
  { title: "Grinding", text: "Dehydrated pieces are finely ground into a smooth powder." },
  { title: "Sieving & Packaging", text: "Sieved to the desired particle size and packed in moisture-resistant packaging." },
];

export const onionStorage = {
  tips: [
    "Store in a cool and dry place.",
    "Keep away from direct sunlight and excessive heat.",
    "Use airtight, moisture-resistant packaging.",
    "Avoid contact with water or moisture.",
    "Always use a clean, dry spoon when handling the product.",
  ],
  shelfLife:
    "Depends on the manufacturing process and packaging. Refer to the actual product specifications for the recommended shelf life.",
} as const;

export const onionSupply = {
  heading: "Bringing the Natural Flavour of Onions to Global Markets",
  body: "We supply onion powder for food manufacturers, seasoning companies, restaurants, and distributors, with attention to product quality, packaging, and export requirements.",
  highlights: [
    "Suitable for international food markets",
    "Convenient packaging and transportation",
    "Multiple food industry applications",
    "Product specifications available on request",
    "Bulk supply enquiries welcome",
  ],
} as const;

export const onionSpecs: readonly { label: string; value: string }[] = [
  { label: "Product Name", value: "Onion Powder" },
  { label: "Product Type", value: "Dehydrated Vegetable Powder" },
  { label: "Raw Material", value: "Fresh Onions" },
  { label: "Appearance", value: "Fine Powder" },
  { label: "Colour", value: "Cream to Light Beige (varies)" },
  { label: "Flavour", value: "Characteristic Onion Flavour" },
  { label: "Aroma", value: "Characteristic Onion Aroma" },
  { label: "Texture", value: "Fine and Powdery" },
  { label: "Moisture", value: "As per product specification" },
  { label: "Packaging", value: "As per buyer requirements" },
  { label: "Shelf Life", value: "As per validated product specification" },
  { label: "Storage", value: "Cool and Dry Place" },
  { label: "Applications", value: "Food Processing, Seasonings, Sauces, Snacks" },
];

export const onionSpecsNote =
  "Final product specifications should be based on actual production and quality-control records.";

export const onionFaqs: readonly Faq[] = [
  { question: "What is onion powder made from?", answer: "Onion powder is made from fresh onions that are cleaned, peeled, sliced, dehydrated, and ground into a fine powder." },
  { question: "Is onion powder the same as fresh onions?", answer: "Onion powder and fresh onions have similar characteristic flavours, but onion powder has less moisture and a more concentrated flavour." },
  { question: "How can onion powder be used in cooking?", answer: "It can be added to soups, curries, sauces, marinades, snacks, dressings, and seasoning blends." },
  { question: "Can onion powder replace fresh onions?", answer: "Yes. Onion powder can replace fresh onions in many recipes, particularly soups, sauces, gravies, and seasoning mixes. However, it does not provide the same texture as fresh onions." },
  { question: "Does onion powder have health benefits?", answer: "Onion powder contains naturally occurring antioxidants and small amounts of certain nutrients. However, it is usually consumed in small quantities and should not be considered a treatment for any medical condition." },
  { question: "How should onion powder be stored?", answer: "Store it in an airtight container in a cool, dry place, away from direct sunlight and moisture." },
  { question: "Is onion powder suitable for commercial food production?", answer: "Yes. It is commonly used in seasoning blends, instant soups, sauces, snacks, marinades, and ready-to-eat foods." },
  { question: "Can Freshland Exports supply onion powder in bulk?", answer: "Contact Freshland Exports to discuss available quantities, packaging options, product specifications, and export requirements." },
];

export const onionCta = {
  eyebrow: "Let's Build Something Flavourful",
  heading: ["Bring the Natural Flavour", "of Onion to Your Products"],
  body: [
    "Whether you are a food manufacturer, distributor, or bulk buyer, connect with Freshland Exports to discuss your requirements.",
    "Get in touch with our team about product specifications, packaging, and bulk supply enquiries.",
  ],
  signoff: "Freshland Exports — Bringing Nature's Flavours to the World.",
} as const;
