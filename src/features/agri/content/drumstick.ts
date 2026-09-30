import { freshSpecs, img, specsNote } from "@/features/agri/content/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "drumstick";

export const drumstick: AgriProduct = {
  slug,
  name: "Drumstick",
  // Forest green, muted olive and cream — long, horizontal and spacious.
  theme: { accent: "#5E6B2E", deep: "#243A22", tint: "#F3F3E7", soft: "#D8D9BD" },
  hero: {
    eyebrow: "Fresh Agricultural Products",
    title: "Fresh Drumsticks",
    tagline: "Long, slender pods from the moringa tree.",
    body: "Fresh drumstick pods selected for length, tenderness and colour, supplied to fresh markets, food processors and food-service buyers.",
    highlights: ["Long, tender pods", "Selected by length", "Bulk supply available"],
  },
  intro: {
    eyebrow: "About Drumsticks",
    heading: "The Pods of the Moringa Tree",
    statement: "A traditional favourite, prized in South Asian cooking.",
    body: [
      "Drumsticks are the long, slender seed pods of the Moringa oleifera tree, cooked in curries, sambar and soups.",
      "Final details on pod length, variety and packing will be added here once confirmed.",
    ],
    highlights: [
      { label: "Product", value: "Fresh drumstick" },
      { label: "Botanical", value: "Moringa oleifera" },
      { label: "Part", value: "Seed pods" },
      { label: "Shape", value: "Long and slender" },
      { label: "Colour", value: "Green" },
      { label: "Use", value: "Cooking" },
    ],
  },
  features: { eyebrow: "Features", heading: "Drumstick Features", items: [] },
  uses: {
    eyebrow: "Applications",
    heading: "Where Drumsticks Shine",
    intro: "Temporary overview of typical drumstick uses.",
    groups: [
      { title: "Sambar & Dal", items: ["Sambar", "Dal", "Rasam"], image: img(slug, "use-sambar", "Sambar with drumstick pieces", "Drumstick sambar") },
      { title: "Curries", items: ["Drumstick curry", "Coconut curries"], image: img(slug, "use-curry", "Drumstick curry in a bowl", "Drumstick curry") },
      { title: "Soups", items: ["Clear soups", "Broths"], image: img(slug, "use-soup", "A bowl of drumstick soup", "Drumstick soup") },
      { title: "Food Processing", items: ["Cut and frozen", "Ready meals"], image: img(slug, "use-frozen", "Cut drumstick pieces ready for freezing", "Cut drumsticks") },
    ],
  },
  process: {
    eyebrow: "From Tree to Shipment",
    heading: "How Drumsticks Are Prepared",
    steps: [
      { title: "Harvesting", text: "Pods are picked while tender." },
      { title: "Sorting", text: "Sorted by length and condition." },
      { title: "Cleaning", text: "Cleaned and trimmed." },
      { title: "Bundling & Packing", text: "Bundled and packed to buyer requirements." },
    ],
  },
  specs: {
    eyebrow: "Product Details",
    heading: "Drumstick Specifications",
    rows: freshSpecs(
      [
        { label: "Product Name", value: "Fresh Drumstick" },
        { label: "Product Type", value: "Fresh vegetable (pod)" },
        { label: "Appearance", value: "Long, slender, ridged pods" },
        { label: "Colour", value: "Green" },
      ],
      [{ label: "Storage", value: "Cool, well-ventilated conditions" }],
    ),
    note: specsNote,
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Fresh Drumsticks",
    body: "Tell us your pod length, quantity and destination, and we will reply with availability and pricing.",
  },
  images: {
    // Panoramic hero — long drumstick pods laid horizontally (21:8).
    hero: img(slug, "hero", "Long green drumstick pods laid side by side", "Drumstick pods, panoramic"),
    // Detail — drumstick pods on the tree (16:10).
    detail: img(slug, "detail", "Drumstick pods hanging from a moringa tree", "Drumsticks on the tree"),
  },
  sections: [
    { type: "hero", variant: "panoramic" },
    { type: "intro", variant: "statement" },
    { type: "uses", variant: "gallery" },
    { type: "process" },
    { type: "specs", variant: "sheet" },
    { type: "contact", variant: "split" },
  ],
};
