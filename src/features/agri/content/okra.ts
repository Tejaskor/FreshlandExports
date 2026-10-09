import { freshSpecs, img, specsNote } from "@/features/agri/content/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "okra";

export const okra: AgriProduct = {
  slug,
  name: "Okra",
  // Deep green, soft green and warm cream — angled and geometric.
  theme: { accent: "#3F7A45", deep: "#183F28", tint: "#F6F2E8", soft: "#DCD5BF" },
  hero: {
    eyebrow: "Fresh Agricultural Products",
    title: "Fresh Okra",
    tagline: "Tender pods, carefully picked.",
    body: "Fresh okra selected for tenderness, colour and length, supplied to fresh markets, food processors and food-service buyers.",
    highlights: ["Tender pods", "Selected by length", "Bulk supply available"],
  },
  intro: {
    eyebrow: "About Okra",
    heading: "Slender, Tender, Versatile",
    statement: "A favourite across many cuisines.",
    body: ["Okra is a slender green pod enjoyed in curries, stews and fried dishes."],
    highlights: [
      { label: "Product", value: "Fresh okra" },
      { label: "Type", value: "Fresh vegetable" },
    ],
  },
  features: {
    eyebrow: "Product Features",
    heading: "What Makes Good Okra",
    items: [
      { title: "Tender Pods", text: "Picked young for a tender bite and fewer fibres." },
      { title: "Uniform Length", text: "Selected for consistent size across each shipment." },
      { title: "Bright Colour", text: "Fresh green colour that signals quality on the shelf." },
      { title: "Kitchen Staple", text: "Used in curries, stews, soups and fried dishes." },
      { title: "Processing Ready", text: "Suited to cutting, freezing and ready-meal lines." },
    ],
  },
  uses: {
    eyebrow: "Applications",
    heading: "Popular Ways to Use Okra",
    intro: "Temporary overview of typical okra uses.",
    groups: [
      { title: "Curries & Stir-Fries", items: ["Bhindi masala", "Stir-fries", "Dry sabzi"], image: img(slug, "use-curry", "Bhindi masala okra curry served with white rice on a dark marble table", "Okra curry") },
      { title: "Soups & Stews", items: ["Gumbo", "Stews", "Soups"], image: img(slug, "use-stew", "Bamia okra and meat stew in tomato sauce served with rice", "Okra stew") },
      { title: "Fried & Crispy", items: ["Crispy okra", "Fritters", "Snacks"], image: img(slug, "use-fried", "Plate of crispy spiced fried okra pieces on a steel plate", "Fried okra") },
      { title: "Frozen & Processed", items: ["Cut and frozen", "Ready meals", "Pickles"], image: img(slug, "use-frozen", "Glass bowl of frost-covered cut okra pieces", "Cut okra") },
    ],
  },
  specs: {
    eyebrow: "Product Details",
    heading: "Okra Specifications",
    rows: freshSpecs(
      [
        { label: "Product Name", value: "Fresh Okra" },
        { label: "Product Type", value: "Fresh vegetable (pod)" },
        { label: "Appearance", value: "Slender, ridged green pods" },
        { label: "Colour", value: "Green" },
      ],
      [{ label: "Storage", value: "Cool, well-ventilated conditions" }],
    ),
    note: specsNote,
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Bring Fresh Okra to Your Market",
    body: "Share your pod length, quantity and destination, and we will reply with availability and pricing.",
  },
  images: {
    // Diagonal hero — fresh okra pods arranged diagonally (5:6).
    hero: img(slug, "hero", "Two bundles of fresh okra pods tied with rubber bands, lying diagonally on a red surface", "Fresh okra pods"),
    // Detail — okra pods, one cut to show seeds (16:10).
    detail: img(slug, "detail", "Okra pods, one cut to show the seeds", "Cut okra"),
  },
  sections: [
    { type: "hero", variant: "diagonal", reverse: true },
    { type: "features", variant: "alternating" },
    { type: "uses", variant: "gallery" },
    { type: "specs", variant: "sheet" },
    { type: "contact", variant: "card" },
  ],
};
