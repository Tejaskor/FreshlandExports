import { freshSpecs, img, specsNote } from "@/features/agri/content/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "green-chili";

export const greenChili: AgriProduct = {
  slug,
  name: "Green Chili",
  // Deep green and fresh leaf green, with the brand rust as a restrained accent.
  theme: { accent: "#2E6F3A", deep: "#123D22", tint: "#F2F6EF", soft: "#CFE3C4" },
  hero: {
    eyebrow: "Fresh Agricultural Products",
    title: "Green Chili",
    tagline: "Fresh heat, vibrant colour.",
    body: "Fresh green chilies selected for colour, firmness and pungency, supplied to fresh markets, food processors and food-service buyers.",
    highlights: ["Bright green pods", "Selected for firmness", "Bulk supply available"],
  },
  intro: {
    eyebrow: "About Green Chili",
    heading: "A Spark in Every Kitchen",
    statement: "Sharp, fresh heat that lifts everyday cooking.",
    body: [
      "Green chilies are harvested before they ripen, giving them a bright colour and a fresh, sharp heat.",
      "They are used in cuisines around the world — raw, cooked, pickled and processed. Final variety and pungency information will be added here.",
    ],
    highlights: [
      { label: "Product", value: "Fresh green chili" },
      { label: "Type", value: "Fresh vegetable" },
      { label: "Colour", value: "Bright green" },
      { label: "Shape", value: "Slender pods" },
      { label: "Heat", value: "Varies by variety" },
      { label: "Use", value: "Cooking and processing" },
    ],
  },
  features: { eyebrow: "Features", heading: "Green Chili Features", items: [] },
  uses: {
    eyebrow: "Applications",
    heading: "Where Green Chilies Go",
    intro: "Temporary overview of typical green chili uses.",
    groups: [
      { title: "Everyday Cooking", text: "Fresh heat for daily meals.", items: ["Curries", "Stir-fries", "Dals", "Chutneys"] },
      { title: "Pickles & Sauces", text: "A classic base for condiments.", items: ["Pickles", "Hot sauces", "Chili pastes"] },
      { title: "Food Processing", text: "For seasoning and ready-meal lines.", items: ["Ready meals", "Frozen mixes", "Seasonings"] },
      { title: "Food Service", text: "A staple garnish and ingredient.", items: ["Restaurants", "Catering", "Street food"] },
    ],
  },
  specs: {
    eyebrow: "Product Details",
    heading: "Green Chili Specifications",
    rows: freshSpecs(
      [
        { label: "Product Name", value: "Fresh Green Chili" },
        { label: "Product Type", value: "Fresh vegetable" },
        { label: "Appearance", value: "Slender, glossy pods" },
        { label: "Pungency", value: "To be confirmed", pending: true },
      ],
      [{ label: "Storage", value: "Cool, well-ventilated conditions" }],
    ),
    note: specsNote,
  },
  quality: {
    heading: "Handled with Care",
    text: "Temporary quality notes — replace with confirmed handling details.",
    points: [
      "Selected for colour and firmness",
      "Sorted to remove damaged pods",
      "Packed in ventilated packaging",
      "Specifications confirmed per order",
    ],
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Add Fresh Heat to Your Supply",
    body: "Share your variety, quantity and destination, and we will reply with availability and pricing.",
  },
  images: {
    // Diagonal hero — a heap of fresh green chilies (5:6).
    hero: img(slug, "hero", "A heap of fresh green chilies", "Fresh green chilies"),
    // Detail — green chilies with a few sliced open (4:3).
    detail: img(slug, "detail", "Green chilies, a few sliced open", "Sliced green chilies"),
  },
  sections: [
    { type: "hero", variant: "diagonal" },
    { type: "intro", variant: "statement" },
    { type: "uses", variant: "tabs" },
    { type: "specs", variant: "tiles" },
    { type: "quality" },
    { type: "contact", variant: "split" },
  ],
};
