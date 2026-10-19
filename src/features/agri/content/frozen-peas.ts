import { freshFaqs, img, specsNote } from "@/features/agri/content/helpers";
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
      { label: "Supply", value: "Subject to availability" },
    ],
    note: specsNote,
  },
  faqs: {
    items: freshFaqs("frozen peas", slug, [
      {
        question: "How are the frozen peas prepared?",
        answer: "Peas are harvested at the right maturity, shelled and sorted, washed, and frozen to preserve their colour and texture, then packed and held in frozen storage.",
      },
      {
        question: "How are frozen peas stored and shipped?",
        answer: "They are kept frozen, as per the product specification, and shipped frozen in reefer containers.",
      },
      {
        question: "Are frozen peas available outside the fresh season?",
        answer: "Yes, frozen peas are available beyond the fresh season, subject to stock. Share your timing and our team will confirm availability.",
      },
    ]),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Frozen Peas for Your Market",
    body: "Tell us your grade, pack size and quantity, and our team will reply with availability and a quotation.",
  },
  images: {
    // Collage hero — frozen peas spilling from a scoop (3:5 tall).
    hero: {
      file: "/images/products/Agricultural Products/Frozen Peas/frozen-peas-processing-hero.webp",
      alt: "Frozen green peas spilling from a steel scoop onto a processing table in a food plant",
      label: "Frozen peas processing",
    },
    // Overview — peas in a bowl, round crop (1:1).
    detail: {
      file: "/images/products/Agricultural Products/Frozen Peas/fresh-green-peas-bulk-supply.webp",
      alt: "Frozen green peas in a wooden bowl on hessian, with loose peas around it",
      label: "Bowl of green peas",
    },
    // Specifications — loose frozen peas (16:10).
    specs: {
      file: "/images/products/Agricultural Products/Frozen Peas/frozen-peas-product-specifications.webp",
      alt: "A heap of loose, frost-covered frozen green peas on a dark steel surface",
      label: "Frozen peas specifications",
    },
    extra: [
      // Collage tile — fresh pea pods (5:4).
      {
        file: "/images/products/Agricultural Products/Frozen Peas/fresh-green-pea-pods-close-up.webp",
        alt: "Fresh green pea pods, one split open to show the peas inside",
        label: "Pea pods",
      },
      // Collage tile — a scoop of frozen peas (5:4). No new photograph was supplied for this slot.
      img(slug, "scoop", "Close-up of plump shelled green peas", "Scoop of frozen peas"),
    ],
  },
  sections: [
    { type: "hero", variant: "collage" },
    { type: "intro", variant: "split", shape: "circle", reverse: true },
    { type: "process" },
    { type: "features", variant: "band" },
    { type: "specs", variant: "table" },
    { type: "faq", variant: "center" },
    { type: "contact", variant: "centered" },
  ],
};
