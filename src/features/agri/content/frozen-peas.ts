import { img, specsNote } from "@/features/agri/content/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "frozen-peas";

export const frozenPeas: AgriProduct = {
  slug,
  name: "Frozen Peas",
  // Pea green, pale mint and cream — cool, clean and rounded.
  theme: { accent: "#4F8A42", deep: "#1F4A34", tint: "#EDF6F1", soft: "#CFE7DA" },
  hero: {
    eyebrow: "Frozen Agricultural Products",
    title: "Frozen Peas",
    tagline: "Garden sweetness, kept frozen.",
    body: "Frozen green peas supplied for food processors, food service and distributors, packed and shipped frozen to buyer requirements.",
    highlights: ["Frozen format", "Free-flowing peas", "Cold-chain shipping"],
  },
  intro: {
    eyebrow: "About Frozen Peas",
    heading: "Picked, Shelled, Frozen",
    statement: "Convenient green peas, ready for the kitchen or the line.",
    body: [
      "Frozen peas offer the convenience of ready-to-cook green peas throughout the year.",
      "Details of processing, grading and packing formats will be added here once confirmed.",
    ],
    highlights: [
      { label: "Product", value: "Frozen green peas" },
      { label: "Format", value: "Frozen" },
      { label: "Colour", value: "Green" },
      { label: "Storage", value: "Kept frozen" },
    ],
  },
  features: {
    eyebrow: "Why Frozen Peas",
    heading: "The Convenience of Frozen",
    items: [
      { title: "Ready to Cook", text: "No shelling or preparation needed.", icon: "check" },
      { title: "Year-Round Supply", text: "Available beyond the fresh season, subject to stock.", icon: "globe" },
      { title: "Easy Portioning", text: "Use what you need and keep the rest frozen.", icon: "layers" },
      { title: "Processing Ready", text: "Suited to ready meals and frozen mixes.", icon: "flask" },
      { title: "Food Service", text: "Consistent, quick to prepare for busy kitchens.", icon: "users" },
      { title: "Cold-Chain Shipping", text: "Shipped frozen in reefer containers.", icon: "shield" },
    ],
  },
  uses: { eyebrow: "Applications", heading: "Uses", intro: "", groups: [] },
  process: {
    eyebrow: "From Field to Freezer",
    heading: "How Frozen Peas Are Prepared",
    steps: [
      { title: "Harvesting", text: "Peas are harvested at the right maturity." },
      { title: "Shelling & Sorting", text: "Pods are shelled and the peas sorted." },
      { title: "Washing", text: "Peas are cleaned before freezing." },
      { title: "Freezing", text: "Frozen to preserve colour and texture." },
      { title: "Packing & Storage", text: "Packed and held in frozen storage." },
    ],
  },
  specs: {
    eyebrow: "Product Details",
    heading: "Frozen Peas Specifications",
    rows: [
      { label: "Product Name", value: "Frozen Green Peas" },
      { label: "Product Type", value: "Frozen vegetable" },
      { label: "Appearance", value: "Whole, free-flowing peas" },
      { label: "Colour", value: "Green" },
      { label: "Grade", value: "As per buyer requirements" },
      { label: "Packaging", value: "As per buyer requirements" },
      { label: "Storage", value: "Frozen, as per product specification" },
      { label: "Shelf Life", value: "To be confirmed", pending: true },
      { label: "Origin", value: "India, subject to confirmation" },
      { label: "Supply", value: "Subject to availability" },
    ],
    note: specsNote,
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Frozen Peas for Your Market",
    body: "Tell us your grade, pack size and quantity, and our team will reply with availability and a quotation.",
  },
  images: {
    // Collage hero — frozen peas with a light frost (3:5 tall).
    hero: img(slug, "hero", "Frozen green peas with a light frost", "Frozen peas close-up"),
    // Detail — peas in a bowl, round crop (1:1).
    detail: img(slug, "detail", "A bowl of frozen green peas", "Bowl of frozen peas"),
    extra: [
      // Circle — fresh pea pods (1:1).
      img(slug, "pods", "Fresh green pea pods", "Pea pods"),
      // Rounded square — a scoop of frozen peas (1:1).
      img(slug, "scoop", "A scoop of frozen peas", "Scoop of frozen peas"),
    ],
  },
  sections: [
    { type: "hero", variant: "collage" },
    { type: "intro", variant: "split", shape: "circle", reverse: true },
    { type: "process" },
    { type: "features", variant: "band" },
    { type: "specs", variant: "table" },
    { type: "contact", variant: "centered" },
  ],
};
