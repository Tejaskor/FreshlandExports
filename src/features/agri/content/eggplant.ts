import { freshSpecs, img, specsNote } from "@/features/agri/content/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "eggplant";

export const eggplant: AgriProduct = {
  slug,
  name: "Eggplant",
  // Deep aubergine, muted purple, forest green and cream — premium.
  theme: { accent: "#7B4A74", deep: "#3A2138", tint: "#F5EEF3", soft: "#DCC9D7" },
  hero: {
    eyebrow: "Fresh Agricultural Products",
    title: "Fresh Eggplant",
    tagline: "Glossy, deep and full of character.",
    body: "Fresh eggplant selected for its glossy skin, firmness and shape, supplied to fresh markets, food processors and food-service buyers.",
    highlights: ["Glossy, firm fruit", "Carefully selected", "Bulk supply available"],
  },
  intro: {
    eyebrow: "About Eggplant",
    heading: "An Elegant Kitchen Staple",
    statement: "Silky when cooked, versatile in every cuisine.",
    body: [
      "Eggplant, also known as brinjal or aubergine, is enjoyed roasted, grilled, fried and stewed in cuisines around the world.",
      "Final variety, shape and sizing details will be added here once confirmed.",
    ],
    highlights: [
      { label: "Product", value: "Fresh eggplant" },
      { label: "Also known as", value: "Brinjal, aubergine" },
      { label: "Skin", value: "Glossy" },
      { label: "Colour", value: "Deep purple, varies" },
    ],
  },
  features: {
    eyebrow: "Product Features",
    heading: "Selected for Quality",
    items: [
      { title: "Glossy Skin", text: "A deep, glossy finish that signals freshness on the shelf.", icon: "award" },
      { title: "Firm Flesh", text: "Firm fruit that roasts and grills well.", icon: "shield" },
      { title: "Many Varieties", text: "Different shapes and colours, depending on availability.", icon: "target" },
      { title: "Culinary Versatility", text: "From dips to curries to grills.", icon: "layers" },
      { title: "Food Service", text: "A favourite in restaurant kitchens.", icon: "users" },
    ],
  },
  uses: {
    eyebrow: "Applications",
    heading: "Popular Eggplant Dishes",
    intro: "Temporary overview of typical eggplant uses.",
    groups: [
      { title: "Roasted & Grilled", items: ["Grilled slices", "Roasted halves", "Smoky dips"] },
      { title: "Curries", items: ["Baingan bharta", "Stuffed brinjal", "Curries"] },
      { title: "Mediterranean", items: ["Moussaka", "Ratatouille", "Baba ganoush"] },
      { title: "Food Processing", items: ["Grilled and frozen", "Ready meals", "Pickles"] },
    ],
  },
  specs: {
    eyebrow: "Product Details",
    heading: "Eggplant Specifications",
    rows: freshSpecs(
      [
        { label: "Product Name", value: "Fresh Eggplant" },
        { label: "Product Type", value: "Fresh vegetable" },
        { label: "Appearance", value: "Glossy, firm fruit" },
        { label: "Colour", value: "Deep purple, varies by variety" },
      ],
      [{ label: "Storage", value: "Cool conditions; avoid chilling injury" }],
    ),
    note: specsNote,
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Bring Premium Eggplant to Your Market",
    body: "Share your variety, size and quantity, and our team will reply with availability and pricing.",
  },
  images: {
    // Stage hero — glossy aubergines on a deep aubergine ground (4:5).
    hero: img(slug, "hero", "Glossy round purple eggplants packed in a green crate", "Fresh eggplants"),
    // Arch intro — a single eggplant with its green calyx (4:5).
    detail: img(slug, "detail", "Single glossy dark purple eggplant with its green calyx, growing on the plant", "Single eggplant", "62% 50%"),
  },
  sections: [
    { type: "hero", variant: "stage", reverse: true },
    { type: "intro", variant: "split", shape: "arch" },
    { type: "features", variant: "bento" },
    { type: "uses", variant: "columns" },
    { type: "specs", variant: "table" },
    { type: "contact", variant: "band" },
  ],
};
