import { freshSpecs, img, specsNote } from "@/features/agri/content/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "beans";

export const beans: AgriProduct = {
  slug,
  name: "Beans",
  // Fresh green, sage and warm cream — light, with varied card shapes.
  theme: { accent: "#45894B", deep: "#1C4A2F", tint: "#F4F1E6", soft: "#D5E1C8" },
  hero: {
    eyebrow: "Fresh Agricultural Products",
    title: "Fresh Green Beans",
    tagline: "Crisp, tender and freshly picked.",
    body: "Fresh green beans selected for tenderness, colour and length, supplied to fresh markets, food processors and food-service buyers.",
    highlights: ["Tender, crisp pods", "Selected by length", "Bulk supply available"],
  },
  intro: {
    eyebrow: "About Our Beans",
    heading: "Snap-Fresh Green Beans",
    statement: "A crisp green vegetable for everyday cooking.",
    body: ["Green beans are enjoyed steamed, stir-fried and in salads around the world."],
    highlights: [
      { label: "Product", value: "Fresh green beans" },
      { label: "Type", value: "Fresh vegetable" },
    ],
  },
  features: {
    eyebrow: "Product Features",
    heading: "Fresh Qualities",
    items: [
      { title: "Crisp Snap", text: "Tender pods with a fresh, crisp bite." },
      { title: "Bright Colour", text: "Vivid green that holds when cooked." },
      { title: "Uniform Length", text: "Selected for consistent size." },
      { title: "Quick to Cook", text: "Ready in minutes — steamed, blanched or stir-fried." },
      { title: "Processing Ready", text: "Suited to cutting, freezing and canning lines." },
    ],
  },
  uses: {
    eyebrow: "Applications",
    heading: "How Beans Are Used",
    intro: "Temporary overview of typical green bean uses.",
    groups: [
      { title: "Everyday Cooking", text: "A quick, fresh side for daily meals.", items: ["Stir-fries", "Steamed sides", "Curries"] },
      { title: "Salads", text: "Blanched and tossed for crunch.", items: ["Green salads", "Grain bowls", "Niçoise salad"] },
      { title: "Food Service", text: "Reliable for busy kitchens.", items: ["Restaurants", "Catering", "Hotels"] },
      { title: "Food Processing", text: "For frozen and canned lines.", items: ["Cut and frozen", "Canned beans", "Ready meals"] },
    ],
  },
  specs: {
    eyebrow: "Product Details",
    heading: "Green Bean Specifications",
    rows: freshSpecs(
      [
        { label: "Product Name", value: "Fresh Green Beans" },
        { label: "Product Type", value: "Fresh vegetable (pod)" },
        { label: "Appearance", value: "Slender, straight pods" },
        { label: "Colour", value: "Green" },
      ],
      [{ label: "Storage", value: "Cool, humid conditions" }],
    ),
    note: specsNote,
  },
  quality: {
    heading: "Picked and Packed with Care",
    text: "Temporary quality notes — replace with confirmed handling details.",
    points: [
      "Selected for tenderness and colour",
      "Sorted by length",
      "Packed in ventilated packaging",
      "Specifications confirmed per order",
    ],
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Bring Fresh Beans to Your Market",
    body: "Share your length, quantity and destination, and our team will reply with availability and a quotation.",
  },
  images: {
    // Collage — a tall bundle of green beans (3:5).
    hero: img(slug, "hero", "Close-up of a heap of fresh green beans", "Fresh green beans"),
    // Tabs panel — beans being trimmed on a board (4:3).
    detail: img(slug, "detail", "Pile of freshly harvested green beans with their stem ends", "Trimmed green beans"),
    extra: [
      // Circle — beans in a bowl (1:1).
      img(slug, "bowl", "Fresh green beans piled in a rustic wooden crate", "Bowl of beans", "62% 50%"),
      // Rounded square — blanched beans (1:1).
      img(slug, "blanched", "Heap of fresh, bright green snap beans", "Blanched beans"),
    ],
  },
  sections: [
    { type: "hero", variant: "collage" },
    { type: "features", variant: "alternating" },
    { type: "uses", variant: "tabs" },
    { type: "specs", variant: "tiles" },
    { type: "quality" },
    { type: "contact", variant: "card" },
  ],
};
