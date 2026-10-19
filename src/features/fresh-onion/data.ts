import type { IconName } from "@/components/ui/icon";
import type { ImageSlotData } from "@/features/products/types";
import { freshOnionImages } from "@/features/fresh-onion/images";
import { moqFor } from "@/features/products/moq";

/**
 * Content for the Fresh Onion page, as supplied. Size, packaging, supply and
 * shelf life stay qualified ("as per buyer requirements"); origin is left out
 * until confirmed. The MOQ is the agricultural products' MOQ.
 */

const moq = moqFor("onion");

export const freshOnionHero = {
  eyebrow: "Agricultural Export Products",
  subheading: "Bulk Fresh Onions for Importers, Distributors and Food Businesses",
  body: "Freshland Exports supplies selected fresh onions for wholesale, distribution, food-service and processing requirements, subject to availability and buyer specifications. Variety, size, packaging and quantity are agreed with each order.",
  highlights: ["Bulk Export Supply", "Selected for Quality", `MOQ ${moq}`],
} as const;

export const freshOnionAbout = {
  eyebrow: "Product Overview",
  heading: ["Fresh, Selected and", "Ready for Bulk Supply"],
  body: [
    "Fresh onions are a bulk agricultural product for importers, distributors, wholesalers, food-service businesses and food processors. Bulbs are selected against the buyer's requirements and checked for visible damage and condition before packing.",
    "Appearance, colour, size, grading, packaging and order quantity are agreed according to each buyer's requirements and the onions actually available at the time of the order.",
  ],
  highlights: [
    { label: "Product", value: "Fresh Onions" },
    { label: "Product Type", value: "Fresh vegetable" },
    { label: "Appearance", value: "Round to oval bulbs, depending on variety" },
    { label: "Colour", value: "Depends on variety" },
    { label: "Flavour", value: "Characteristic onion flavour" },
    { label: "Texture", value: "Firm and crisp, subject to condition and quality" },
    { label: "Applications", value: "Cooking, salads, food processing and food service" },
  ],
} as const;

/** Onion categories, each with its own photograph; availability is confirmed per enquiry. */
export const freshOnionVarieties = {
  eyebrow: "Our Varieties",
  heading: "Explore Our Fresh Onion Varieties",
  intro:
    "Explore the main onion colour categories and small-onion products relevant to buyers. Available varieties depend on sourcing, season, quantity and destination-market requirements.",
  items: [
    {
      title: "Red Onions",
      text: "Red onions range from light red to deep red or purple-red, depending on variety. They are commonly used in curries, gravies, cooking and salads.",
      image: freshOnionImages.red,
    },
    {
      title: "Pink Onions",
      text: "Pinkish-coloured onions for buyers seeking a particular colour and appearance. Specific varieties and availability must be confirmed with the supplier.",
      image: freshOnionImages.pink,
    },
    {
      title: "White Onions",
      text: "White onions have pale skins and white flesh and can be used in culinary and food-processing applications.",
      image: freshOnionImages.white,
    },
    {
      title: "Yellow/Brown Onions",
      text: "Yellow to brown-skinned onions for buyers seeking this colour category. Confirm sourcing and destination-market suitability before placing an order.",
      image: freshOnionImages.yellowBrown,
    },
    {
      title: "Sambar Onions / Shallots",
      text: "Small onions and shallots used in regional cooking, including South Indian dishes. Treat this as a distinct small-bulb category rather than a colour variant of standard bulb onions.",
      image: freshOnionImages.shallots,
    },
  ],
} as const;

export const freshOnionFeatures: readonly { title: string; text: string; icon: IconName }[] = [
  {
    title: "Freshness & Quality",
    text: "Selected according to agreed buyer requirements and checked for visible damage and condition before packing.",
    icon: "sprout",
  },
  {
    title: "Variety & Grading",
    text: "Colour, size and grading depend on actual availability and the buyer's specifications.",
    icon: "target",
  },
  {
    title: "Food Applications",
    text: "Suitable uses include cooking, salads, food processing and food-service applications.",
    icon: "layers",
  },
  {
    title: "Bulk Supply",
    text: "Orders are handled according to confirmed quantity, packaging and supply availability.",
    icon: "globe",
  },
];

export const freshOnionUses: readonly { title: string; text: string; items: readonly string[]; image: ImageSlotData }[] = [
  {
    title: "Culinary & Cooking",
    text: "A base ingredient in everyday cooking, from curries and gravies to rice dishes and stews.",
    items: ["Curries and gravies", "Vegetable dishes", "Rice and pulao", "Soups and stews"],
    image: freshOnionImages.wholeOnions,
  },
  {
    title: "Fresh Salads",
    text: "Sliced raw in salads and as a topping, where colour and crispness show.",
    items: ["Fresh salads", "Sandwiches", "Burgers", "Onion toppings"],
    image: freshOnionImages.salad,
  },
  {
    title: "Food Processing",
    text: "Fresh onions as a raw material for processors preparing sauces, pickles and prepared foods.",
    items: ["Sauces and dips", "Pickles", "Frozen food products", "Ready-to-eat meals"],
    image: freshOnionImages.sliced,
  },
  {
    title: "Food Service",
    text: "Bulk onions for restaurants, caterers and hotel kitchens that prepare them on site.",
    items: ["Restaurants", "Catering", "Hotel kitchens", "Marinades and grills"],
    image: freshOnionImages.cooked,
  },
];

export const freshOnionSpecs: readonly { label: string; value: string }[] = [
  { label: "Product Name", value: "Fresh Onions" },
  { label: "Product Type", value: "Fresh vegetable" },
  { label: "Varieties", value: "Red, pink, white, yellow/brown and small onions/shallots, subject to availability" },
  { label: "Appearance", value: "Round to oval bulbs, depending on variety" },
  { label: "Colour", value: "Depends on variety" },
  { label: "Flavour", value: "Characteristic onion flavour" },
  { label: "Texture", value: "Firm and crisp, subject to condition and quality" },
  { label: "Size", value: "As agreed with the buyer" },
  { label: "Packaging", value: "As agreed with the buyer, subject to available export options" },
  { label: "Supply", value: "Bulk supply, subject to availability" },
  { label: "Shelf Life", value: "Depends on variety, initial condition and storage conditions" },
  { label: "Storage", value: "Cool, dry and well-ventilated conditions appropriate to the product" },
];

export const freshOnionSpecsNote =
  "Final specifications, varieties, and packaging options should be confirmed based on actual product availability.";

export const freshOnionStorage = {
  heading: "Storage & Handling",
  body: "Fresh onions keep best when they stay dry and have air moving around them. These practices help protect quality from packing to delivery.",
  tips: [
    "Store in a cool, dry and well-ventilated area.",
    "Keep away from excess moisture and direct sunlight.",
    "Allow adequate airflow during storage.",
    "Avoid crushing bulbs during handling and stacking.",
    "Inspect stock regularly and remove damaged bulbs.",
    "Follow storage and transport requirements appropriate to the variety and shipment.",
  ],
} as const;

/** MOQ confirmed by Freshland Exports for agricultural products, fresh onions included. */
export const freshOnionMoq = {
  label: "Minimum Order Quantity",
  quantity: moq,
  body: "Bulk supply available for wholesale, food-service, processing and export buyers.",
  highlight: `MOQ: ${moq}`,
} as const;

export type FreshOnionFaq = { question: string; answer: string };

/** Fresh onion FAQs — answers stay within the confirmed specifications. */
export const freshOnionFaqs: readonly FreshOnionFaq[] = [
  {
    question: "Which onion varieties and colours can you supply?",
    answer:
      "Red, pink, white and yellow/brown onions, as well as small onions or shallots, can be discussed with our team. What we can supply depends on sourcing, season, quantity and your requirements, so tell us the type your market prefers and we will confirm current availability.",
  },
  {
    question: "What is the minimum order quantity?",
    answer: `The minimum order quantity for fresh onions is ${moq}.`,
  },
  {
    question: "Can you supply onions in a specific size?",
    answer:
      "Please state the size and grading you need in your enquiry. We confirm them against the onions available for your order.",
  },
  {
    question: "How are fresh onions packed for export?",
    answer:
      "Packaging depends on your specifications, the destination's requirements and the packing options available for the order. We agree the packaging with you before dispatch.",
  },
  {
    question: "How should fresh onions be stored, and how long do they last?",
    answer:
      "Keep them in a cool, dry and well-ventilated place, away from excess moisture and direct sunlight, with enough airflow and without crushing the bulbs. How long they last depends on the variety, their condition at packing and the conditions during storage and transit.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use the quote form on this page to share your preferred variety, quantity, destination and specifications. Our team will reply with availability and pricing.",
  },
];
