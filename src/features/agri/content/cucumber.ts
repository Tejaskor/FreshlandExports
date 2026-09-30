import { freshSpecs, img, specsNote } from "@/features/agri/content/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "cucumber";

export const cucumber: AgriProduct = {
  slug,
  name: "Cucumber",
  // Cucumber green, soft sage and cream — fresh, clean and elongated.
  theme: { accent: "#3F7D49", deep: "#1D4230", tint: "#EEF5EC", soft: "#CDE2C9" },
  hero: {
    eyebrow: "Fresh Agricultural Products",
    title: "Fresh Cucumber",
    tagline: "Cool, crisp and naturally refreshing.",
    body: "Fresh cucumbers selected for firmness, colour and length, supplied to retail, wholesale and food-service buyers.",
    highlights: ["Firm and fresh", "Uniform selection", "Bulk supply available"],
  },
  intro: {
    eyebrow: "About Our Cucumbers",
    heading: "Refreshingly Simple",
    statement: "A crisp, hydrating vegetable for salads and more.",
    body: [
      "Cucumbers are prized for their crisp texture and mild, refreshing taste.",
      "Final variety and sizing details will be added here.",
    ],
    highlights: [
      { label: "Product", value: "Fresh cucumber" },
      { label: "Type", value: "Fresh vegetable" },
      { label: "Shape", value: "Long and cylindrical" },
      { label: "Colour", value: "Green" },
    ],
  },
  features: {
    eyebrow: "Why Choose Cucumbers",
    heading: "Fresh Qualities That Matter",
    items: [
      { title: "Crisp Bite", text: "A firm, crunchy texture enjoyed raw." },
      { title: "Mild Taste", text: "A clean flavour that pairs with almost anything." },
      { title: "Uniform Selection", text: "Selected for consistent length and colour." },
      { title: "Retail Appeal", text: "Attractive for fresh-produce shelves." },
      { title: "Pickling", text: "Suited to pickles and preserves." },
      { title: "Food Service", text: "A salad and garnish staple." },
    ],
  },
  uses: {
    eyebrow: "Applications",
    heading: "Everyday Uses",
    intro: "Temporary overview of typical cucumber uses.",
    groups: [
      { title: "Salads", items: ["Garden salads", "Raita", "Salsas"] },
      { title: "Fresh Snacks", items: ["Sliced sticks", "Sandwiches", "Wraps"] },
      { title: "Pickling", items: ["Pickles", "Relishes", "Preserves"] },
      { title: "Beverages", items: ["Infused water", "Juices", "Smoothies"] },
    ],
  },
  process: {
    eyebrow: "From Field to Shipment",
    heading: "How We Prepare Cucumbers",
    steps: [
      { title: "Harvesting", text: "Picked at the right size and firmness." },
      { title: "Sorting", text: "Sorted by length, colour and condition." },
      { title: "Cleaning", text: "Gently cleaned and dried." },
      { title: "Packing", text: "Packed to buyer requirements for transit." },
    ],
  },
  specs: {
    eyebrow: "Product Details",
    heading: "Cucumber Specifications",
    rows: freshSpecs(
      [
        { label: "Product Name", value: "Fresh Cucumber" },
        { label: "Product Type", value: "Fresh vegetable" },
        { label: "Appearance", value: "Long, cylindrical, firm" },
        { label: "Colour", value: "Green, varies by variety" },
      ],
      [{ label: "Storage", value: "Cool, humid conditions; avoid chilling injury" }],
    ),
    note: specsNote,
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Bring Fresh Cucumbers to Your Buyers",
    body: "Tell us your market, size and quantity, and we will reply with availability and a quotation.",
  },
  images: {
    // Elongated hero — a single long cucumber, portrait (9:19).
    hero: img(slug, "hero", "A long fresh cucumber on a pale sage background", "Whole cucumber"),
    // Detail — sliced cucumber rounds (16:10).
    detail: img(slug, "detail", "Fresh cucumber slices", "Sliced cucumber"),
    extra: [
      // Second tall image — cucumbers with leaves and flowers, portrait (9:19).
      img(slug, "hero-2", "Cucumbers on the vine with leaves", "Cucumbers on the vine"),
    ],
  },
  sections: [
    { type: "hero", variant: "elongated" },
    { type: "features", variant: "numbered" },
    { type: "uses", variant: "columns" },
    { type: "process" },
    { type: "specs", variant: "table" },
    { type: "contact", variant: "card" },
  ],
};
