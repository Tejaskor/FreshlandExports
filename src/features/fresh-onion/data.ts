import type { IconName } from "@/components/ui/icon";
import type { MoringaImage } from "@/features/moringa/images";
import { freshOnionImages } from "@/features/fresh-onion/images";

/**
 * Content for the Fresh Onion page, as supplied. Size, packaging, origin,
 * supply and shelf life stay qualified ("as per buyer requirements",
 * "subject to confirmation"); the MOQ is the confirmed 500 kg.
 */

export const freshOnionHero = {
  eyebrow: "Agricultural Export Products",
  subheading: "Bulk Fresh Onions for Importers, Distributors and Food Businesses.",
  body: "Freshland Exports supplies fresh onions selected for firmness, dry outer skins and a consistent appearance, in bulk quantities for wholesale, retail and food-processing buyers. Size, packaging and quantities are agreed with each order.",
  highlights: ["Bulk Export Supply", "Selected for Quality", "MOQ 500 kg"],
} as const;

export const freshOnionAbout = {
  eyebrow: "Product Overview",
  heading: ["Fresh, Selected and", "Ready for Bulk Supply"],
  body: [
    "Fresh onions are one of the most traded vegetables in the world, and buyers need them to arrive firm, dry and in sound condition. Our focus is on freshness and careful selection: bulbs are checked for firmness, intact skins and freedom from visible damage before they are packed.",
    "We supply fresh onions in bulk to importers, distributors, wholesalers and food businesses, with size, packaging and quantity agreed for each order so every shipment matches what your market expects.",
  ],
  highlights: [
    { label: "Product", value: "Fresh Onion" },
    { label: "Product Type", value: "Fresh Vegetable" },
    { label: "Appearance", value: "Round to oval bulbs" },
    { label: "Colour", value: "Red, pink, or white, depending on variety" },
    { label: "Flavour", value: "Mild to pungent" },
    { label: "Texture", value: "Firm and crisp" },
    { label: "Applications", value: "Cooking, food processing, and wholesale distribution" },
  ],
} as const;

export const freshOnionFeatures: readonly { title: string; text: string; icon: IconName }[] = [
  {
    title: "Freshness & Quality",
    text: "Bulbs are selected for firmness, dry outer skins and freedom from visible damage, so they arrive in sound condition for your customers.",
    icon: "sprout",
  },
  {
    title: "Variety & Grading",
    text: "Red, pink or white onions, depending on availability, sorted to the size you specify.",
    icon: "target",
  },
  {
    title: "Food Applications",
    text: "Suited to home cooking, fresh preparations, food processing and food-service kitchens.",
    icon: "layers",
  },
  {
    title: "Bulk Supply",
    text: "Bulk quantities from a 500 kg minimum order, with packaging and quantities agreed for each shipment.",
    icon: "globe",
  },
];

export const freshOnionUses: readonly { title: string; items: readonly string[]; image: MoringaImage }[] = [
  {
    title: "Culinary & Cooking",
    items: ["Curries and gravies", "Vegetable dishes", "Rice and pulao", "Soups and stews"],
    image: freshOnionImages.wholeOnions,
  },
  {
    title: "Fresh Salads",
    items: ["Fresh salads", "Sandwiches", "Burgers", "Onion toppings"],
    image: freshOnionImages.salad,
  },
  {
    title: "Food Processing",
    items: ["Sauces and dips", "Pickles", "Frozen food products", "Ready-to-eat meals"],
    image: freshOnionImages.sliced,
  },
  {
    title: "Food Service",
    items: ["Restaurants", "Catering", "Hotel kitchens", "Marinades and grills"],
    image: freshOnionImages.cooked,
  },
];

export const freshOnionSpecs: readonly { label: string; value: string }[] = [
  { label: "Product Name", value: "Fresh Onion" },
  { label: "Product Type", value: "Fresh Vegetable" },
  { label: "Appearance", value: "Round to oval bulbs" },
  { label: "Colour", value: "Red, pink, or white, depending on variety" },
  { label: "Flavour", value: "Characteristic onion flavour" },
  { label: "Texture", value: "Firm and crisp" },
  { label: "Size", value: "As per buyer requirements" },
  { label: "Packaging", value: "As per buyer requirements" },
  { label: "Origin", value: "India, subject to confirmation" },
  { label: "Supply", value: "Bulk supply, subject to availability" },
  { label: "Shelf Life", value: "Depends on variety and storage conditions" },
  { label: "Storage", value: "Cool, dry, and well-ventilated conditions" },
];

export const freshOnionSpecsNote =
  "Final specifications, varieties, and packaging options should be confirmed based on actual product availability.";

export const freshOnionStorage = {
  heading: "Storage & Handling",
  body: "Fresh onions keep best when they stay dry and have air moving around them. These practices help protect quality from packing to delivery.",
  tips: [
    "Store in a cool, dry and well-ventilated area.",
    "Keep away from moisture, which encourages sprouting and mould.",
    "Protect from direct sunlight and heat.",
    "Use breathable bags, not sealed plastic.",
    "Stack bags with space for airflow and avoid crushing the lower layers.",
    "Handle gently when loading and unloading to prevent bruising.",
    "Inspect stock regularly and remove soft or damaged bulbs.",
  ],
} as const;

/** MOQ confirmed by Freshland Exports for fresh onions: 500 kg. */
export const freshOnionMoq = {
  label: "Minimum Order Quantity",
  quantity: "500",
  unit: "KG",
  body: "Bulk supply available for wholesale, food-service, processing and export buyers.",
  highlight: "MOQ: 500 KG",
} as const;

export type FreshOnionFaq = { question: string; answer: string };

/** Fresh onion FAQs — answers stay within the confirmed specifications. */
export const freshOnionFaqs: readonly FreshOnionFaq[] = [
  {
    question: "Which types of fresh onions do you supply?",
    answer:
      "We supply red, pink and white onions, depending on the season and availability. Tell us which type your market prefers and we will confirm what is available for your order.",
  },
  {
    question: "What is the minimum order quantity?",
    answer: "The minimum order quantity for fresh onions is 500 kg.",
  },
  {
    question: "Can you supply onions in a specific size?",
    answer:
      "Yes. Bulb size is supplied as per buyer requirements and confirmed with each order, so please share the size range you need.",
  },
  {
    question: "How are fresh onions packed for export?",
    answer:
      "Packaging is supplied as per buyer requirements. We agree the bag type and weight with you before dispatch, using breathable packaging that lets air move around the onions.",
  },
  {
    question: "How should fresh onions be stored after delivery?",
    answer:
      "Keep them in a cool, dry and well-ventilated place, away from moisture and direct sunlight, and handle the bags gently to avoid bruising.",
  },
  {
    question: "What is the shelf life of fresh onions?",
    answer:
      "Shelf life depends on the variety and on storage conditions. Cool, dry and well-ventilated storage helps onions stay firm for longer.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use the enquiry form on this page to share the onion type, quantity, size, packaging and destination. Our team will reply with availability and pricing.",
  },
];

