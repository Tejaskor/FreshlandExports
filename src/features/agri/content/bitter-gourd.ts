import { freshSpecs, img, specsNote } from "@/features/agri/content/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "bitter-gourd";

export const bitterGourd: AgriProduct = {
  slug,
  name: "Bitter Gourd",
  // Deep botanical green, muted lime and cream — organic and textured.
  theme: { accent: "#607A26", deep: "#1F4630", tint: "#F1F4E6", soft: "#D6DFB8" },
  hero: {
    eyebrow: "Fresh Agricultural Products",
    title: "Bitter Gourd",
    tagline: "Distinctive taste, textured beauty.",
    body: "Fresh bitter gourd selected for firmness and colour, supplied to fresh markets, food processors and food-service buyers.",
    highlights: ["Firm, ridged gourds", "Selected by size", "Bulk supply available"],
  },
  intro: {
    eyebrow: "About Bitter Gourd",
    heading: "A Taste All Its Own",
    statement: "Bold, bitter and valued in many cuisines.",
    body: [
      "Bitter gourd (Momordica charantia), also called bitter melon, has a distinctive ridged skin and a characteristically bitter flavour.",
      "It is cooked in stir-fries, curries and stuffed dishes. Final variety and sizing details will be added here.",
    ],
    highlights: [
      { label: "Product", value: "Fresh bitter gourd" },
      { label: "Botanical name", value: "Momordica charantia" },
      { label: "Skin", value: "Ridged, textured" },
      { label: "Flavour", value: "Characteristically bitter" },
    ],
  },
  features: {
    eyebrow: "Product Features",
    heading: "Why Buyers Choose It",
    items: [
      { title: "Distinctive Flavour", text: "A bold bitterness valued in traditional cooking." },
      { title: "Firm Texture", text: "Holds its shape in stir-fries and stuffed dishes." },
      { title: "Selected by Size", text: "Sorted for consistent size in each shipment." },
      { title: "Fresh Colour", text: "Bright green gourds for fresh-market shelves." },
      { title: "Processing Ready", text: "Suited to slicing, drying and pickling." },
      { title: "Regional Demand", text: "A staple in many Asian cuisines." },
    ],
  },
  uses: {
    eyebrow: "Applications",
    heading: "How Bitter Gourd Is Used",
    intro: "Temporary overview of typical bitter gourd uses.",
    groups: [
      { title: "Stir-Fries", text: "Sliced thin and cooked quickly.", items: ["Stir-fries", "Sautés"] },
      { title: "Stuffed Dishes", text: "Hollowed and filled.", items: ["Stuffed karela", "Baked dishes"] },
      { title: "Curries", text: "Balanced with spices.", items: ["Curries", "Dry preparations"] },
      { title: "Processing", text: "For preserved products.", items: ["Chips", "Pickles", "Dried slices"] },
    ],
  },
  specs: {
    eyebrow: "Product Details",
    heading: "Bitter Gourd Specifications",
    rows: freshSpecs([
      { label: "Product Name", value: "Fresh Bitter Gourd" },
      { label: "Product Type", value: "Fresh vegetable" },
      { label: "Appearance", value: "Elongated, ridged gourds" },
      { label: "Colour", value: "Green, varies by variety" },
    ]),
    note: specsNote,
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Fresh Bitter Gourd",
    body: "Share your size, quantity and destination, and our team will reply with availability and a quotation.",
  },
  images: {
    // Split hero — bitter gourds showing their ridged texture (5:4).
    hero: img(slug, "hero", "Fresh bitter gourds with bumpy ridged green skin at a market in Hyderabad", "Fresh bitter gourds"),
    // Overlap intro — close-up of bitter gourd texture and a sliced cross-section (16:10).
    detail: img(slug, "detail", "Close-up of ridged, warty bitter gourds in a white bowl", "Bitter gourd texture"),
  },
  sections: [
    { type: "hero", variant: "split", reverse: true },
    { type: "intro", variant: "overlap" },
    { type: "features", variant: "numbered" },
    { type: "uses", variant: "list" },
    { type: "specs", variant: "tiles" },
    { type: "contact", variant: "band" },
  ],
};
