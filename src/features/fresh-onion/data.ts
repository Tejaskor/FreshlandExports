import type { IconName } from "@/components/ui/icon";
import type { MoringaImage } from "@/features/moringa/images";
import { freshOnionImages } from "@/features/fresh-onion/images";

/**
 * Content for the Fresh Onion page, as supplied. Size, packaging, origin,
 * supply and shelf life stay qualified ("as per buyer requirements",
 * "subject to confirmation"); the MOQ is the confirmed 500 kg.
 */

export const freshOnionHero = {
  eyebrow: "Fresh Agricultural Products",
  subheading: "Naturally Fresh. Carefully Selected. Delivered Worldwide.",
  body: "Discover the natural flavour and versatility of premium fresh onions from Freshland Exports. Carefully selected for their appearance, flavour, and freshness, our onions are suitable for international markets, food distributors, and commercial buyers.",
  highlights: ["Fresh Agricultural Produce", "Carefully Selected", "Bulk Supply Available"],
} as const;

export const freshOnionAbout = {
  eyebrow: "The Essence of Freshness",
  heading: ["Naturally Grown.", "Carefully Selected."],
  body: [
    "Onions are one of the world's most widely used vegetables, valued for their distinctive flavour, aroma, and versatility. They are an essential ingredient in cuisines worldwide, from everyday home cooking to large-scale food production.",
    "At Freshland Exports, we aim to supply carefully selected fresh onions to meet the needs of international buyers, distributors, and food businesses.",
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
  { title: "Distinctive Flavour", text: "Adds a characteristic savoury flavour and aroma to a wide variety of dishes.", icon: "sprout" },
  { title: "Naturally Versatile", text: "Suitable for traditional recipes, modern cuisine, and commercial food preparation.", icon: "layers" },
  { title: "Multiple Varieties", text: "Available in different colours and varieties, depending on sourcing and availability.", icon: "target" },
  { title: "Culinary Essential", text: "Widely used in restaurants, catering businesses, and food manufacturing.", icon: "users" },
  { title: "Convenient Ingredient", text: "Suitable for fresh consumption, cooking, and selected food-processing applications.", icon: "check" },
  { title: "Global Demand", text: "An important vegetable in food markets and cuisines around the world.", icon: "globe" },
];

export const freshOnionUses: readonly { title: string; items: readonly string[]; image: MoringaImage }[] = [
  {
    title: "Everyday Cooking",
    items: ["Curries and gravies", "Vegetable dishes", "Rice and pulao", "Soups and stews"],
    image: freshOnionImages.wholeOnions,
  },
  {
    title: "Salads and Fresh Preparations",
    items: ["Fresh salads", "Sandwiches", "Burgers", "Onion toppings"],
    image: freshOnionImages.salad,
  },
  {
    title: "Food Processing",
    items: ["Sauces and dips", "Pickles", "Frozen food products", "Ready-to-eat meals"],
    image: freshOnionImages.sliced,
  },
  {
    title: "Restaurants and Catering",
    items: ["Restaurant meals", "Marinades", "Grilled dishes", "Catering preparations"],
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
  heading: "Keep the Freshness Intact",
  body: "Proper storage helps maintain the quality and freshness of fresh onions.",
  tips: [
    "Store in a cool, dry, well-ventilated area.",
    "Avoid excessive moisture.",
    "Protect onions from direct sunlight.",
    "Handle carefully to minimize bruising.",
    "Follow the recommended storage conditions for the selected variety.",
  ],
} as const;

/** MOQ confirmed by Freshland Exports for fresh onions: 500 kg. */
export const freshOnionMoq = {
  label: "Minimum Order Quantity",
  quantity: "500",
  unit: "kg",
  body: "Contact us to discuss your bulk order requirements and preferred quantity.",
  highlight: "MOQ: 500 kg",
} as const;

export const freshOnionCta = {
  eyebrow: "Global Agricultural Supply",
  heading: ["Bring the Freshness of", "Onions to Your Market"],
  body: [
    "Looking for a reliable fresh onion supplier for your business?",
    "Connect with Freshland Exports to discuss product availability, bulk quantities, packaging options, and export requirements.",
  ],
} as const;
