import type { Faq } from "@/features/moringa/data";

/**
 * Content for the Onion Powder page (/products/onion-powder), written for
 * B2B buyers. It states what is known about the product and leaves grade,
 * particle size, moisture, packaging and shelf life to be confirmed with
 * each buyer — no nutritional, health or exact technical claims.
 */

export const onionHero = {
  label: "Onion Powder",
  title: "Onion Powder",
  tagline: ["Pure Flavour", "Natural Goodness", "Endless Possibilities."],
  body: "Finely milled onion powder made from carefully processed onions for seasoning, food manufacturing and commercial applications.",
} as const;

export const onionOverview = {
  eyebrow: "Product Overview",
  heading: ["The Natural Flavour of Fresh", "Onions, Made Convenient"],
  body: "Onion Powder offers the familiar flavour and aroma of onion in a convenient, consistent format. It is suitable for food manufacturers, seasoning companies, food-service businesses and commercial kitchens.",
  highlights: [
    "Consistent flavour and aroma",
    "Fine, easy-to-use powder",
    "Suitable for multiple food applications",
    "Bulk supply for commercial requirements",
  ],
} as const;

export const onionApplications: readonly { title: string; text: string }[] = [
  { title: "Seasonings & Spice Blends", text: "Ideal for seasoning mixes, savoury blends and dry formulations." },
  { title: "Sauces & Soups", text: "Suitable for sauces, soups, gravies and prepared foods." },
  { title: "Snacks & Ready Meals", text: "Adds onion flavour to snacks, instant foods and ready-to-eat products." },
  { title: "Food Processing", text: "Convenient ingredient for commercial and industrial food production." },
];

export const onionSpecs: readonly { label: string; value: string }[] = [
  { label: "Product Name", value: "Onion Powder" },
  { label: "Product Type", value: "Dehydrated Onion Powder" },
  { label: "Form", value: "Fine Powder" },
  { label: "Colour", value: "Cream to off-white" },
  { label: "Aroma", value: "Characteristic onion aroma" },
  { label: "Taste", value: "Characteristic onion flavour" },
  { label: "Application", value: "Food & Food Processing" },
  { label: "Packaging", value: "As per buyer requirement" },
  { label: "Origin", value: "India, subject to confirmation" },
  { label: "Supply", value: "Bulk / Commercial Supply" },
];

export const onionSpecsNote =
  "Final grade, particle size, moisture, packaging and other specifications can be confirmed according to buyer requirements.";

export const onionSteps: readonly { title: string; text: string }[] = [
  { title: "Selection", text: "Suitable onions are selected for processing." },
  { title: "Preparation", text: "Onions are cleaned and prepared for dehydration." },
  { title: "Dehydration", text: "Controlled processing removes moisture while preserving characteristic flavour." },
  { title: "Milling & Packing", text: "The dried onions are milled into powder and packed according to requirements." },
];

export const onionStorage = {
  body: "Store Onion Powder in a cool, dry and clean environment, protected from moisture, heat and direct sunlight. Keep the packaging properly sealed when not in use.",
  facts: [
    { label: "Packaging", value: "As per buyer requirement" },
    { label: "Shelf Life", value: "Subject to grade, packaging and storage conditions." },
  ],
} as const;

export const onionMoqBody = "Bulk supply available for wholesale, food-service and commercial requirements.";

export const onionFaqs: readonly Faq[] = [
  {
    question: "What is Onion Powder used for?",
    answer: "It is commonly used in seasonings, sauces, soups, snacks, ready meals and food-processing applications.",
  },
  {
    question: "Is Onion Powder suitable for food manufacturing?",
    answer: "Yes. It is supplied as a convenient ingredient for commercial food applications.",
  },
  { question: "Can packaging be customised?", answer: "Packaging can be discussed according to buyer requirements." },
  {
    question: "Do you supply Onion Powder in bulk?",
    answer: "Yes, bulk supply is available subject to product and order requirements.",
  },
  {
    question: "Can product specifications be customised?",
    answer: "Final specifications can be discussed according to the buyer's application and requirements.",
  },
];

/** A use-case tab (shared with the agricultural product pages' UseTabs). */
export type UseCategory = { id: string; title: string; text: string; items: readonly string[] };
