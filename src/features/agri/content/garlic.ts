import { freshSpecs, img, specsNote } from "@/features/agri/content/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy. Facts are taken from
// the existing Garlic catalogue entry (graded bulbs, forms, packing).
const slug = "garlic";

export const garlic: AgriProduct = {
  slug,
  name: "Garlic",
  // Soft ivory, warm white and muted green — minimal and airy.
  theme: { accent: "#6B7A55", deep: "#2F4A36", tint: "#FBF8F0", soft: "#E6E1CE" },
  hero: {
    eyebrow: "Fresh Agricultural Products",
    title: "Fresh Garlic",
    tagline: "Aromatic bulbs, carefully graded for export.",
    body: "Fresh garlic cleaned and graded by bulb size, supplied for fresh markets, food service and food processing worldwide.",
    highlights: ["Graded by bulb size", "Whole bulbs or peeled cloves", "Bulk supply available"],
  },
  intro: {
    eyebrow: "About Our Garlic",
    heading: "Strong Aroma, Clean Bulbs",
    statement: "A kitchen essential with a distinctive, pungent flavour.",
    body: [
      "Garlic (Allium sativum) is valued in cuisines around the world for its strong aroma and savoury depth.",
      "Our garlic is cleaned and graded by bulb diameter to suit each buyer's market, and can be supplied as whole bulbs or, on request, as peeled cloves.",
    ],
    highlights: [
      { label: "Product", value: "Fresh garlic" },
      { label: "Botanical name", value: "Allium sativum" },
      { label: "Forms", value: "Whole bulbs, peeled cloves on request" },
      { label: "Grading", value: "By bulb diameter" },
    ],
  },
  features: {
    eyebrow: "Why Garlic",
    heading: "Simple, Versatile, Essential",
    items: [
      { title: "Pungent Flavour", text: "Brings a characteristic savoury depth to a wide range of dishes." },
      { title: "Graded Bulbs", text: "Sorted by size so each shipment is consistent for its market." },
      { title: "Flexible Forms", text: "Whole bulbs, with peeled cloves and dehydrated forms on request." },
      { title: "Fresh Markets", text: "Suited to retail and wholesale produce supply." },
      { title: "Food Processing", text: "Used in pastes, sauces, pickles and seasonings." },
      { title: "Food Service", text: "A staple of restaurant and catering kitchens." },
    ],
  },
  uses: {
    eyebrow: "Applications",
    heading: "From Kitchen to Factory",
    intro: "Temporary overview of how buyers typically use fresh garlic.",
    groups: [
      { title: "Home Cooking", items: ["Curries and stir-fries", "Soups and stews", "Roasted vegetables"] },
      { title: "Food Service", items: ["Restaurant kitchens", "Catering", "Marinades"] },
      { title: "Food Processing", items: ["Garlic paste", "Sauces and dips", "Pickles"] },
      { title: "Seasonings", items: ["Spice blends", "Seasoning mixes", "Flavoured oils"] },
    ],
  },
  specs: {
    eyebrow: "Product Details",
    heading: "Garlic Specifications",
    rows: freshSpecs(
      [
        { label: "Product Name", value: "Fresh Garlic" },
        { label: "Product Type", value: "Fresh vegetable (bulb)" },
        { label: "Colour", value: "White to off-white, varies by variety" },
        { label: "Forms", value: "Whole bulbs; peeled cloves on request" },
      ],
      [{ label: "Packing Options", value: "Mesh bags, cartons, custom packing on request" }],
    ),
    note: specsNote,
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Fresh Garlic with Freshland",
    body: "Tell us your market, bulb size and quantity, and our team will share availability and a quotation.",
  },
  images: {
    // Wide pill hero — fresh garlic bulbs and cloves on an ivory surface (21:9).
    hero: img(slug, "hero", "Fresh garlic bulbs and cloves on an ivory surface", "Fresh garlic bulbs"),
    // Close-up — a single bulb with separated cloves (1:1).
    detail: img(slug, "detail", "Close-up of a garlic bulb with separated cloves", "Garlic cloves close-up"),
    // Existing 300 px catalogue photograph, used only in a small circle.
    thumb: "/images/products/garlic.webp",
  },
  sections: [
    { type: "hero", variant: "centered" },
    { type: "intro", variant: "split", shape: "circle" },
    { type: "features", variant: "numbered" },
    { type: "uses", variant: "columns" },
    { type: "specs", variant: "tiles" },
    { type: "contact", variant: "centered" },
  ],
};
