import { img } from "@/features/agri/content/helpers";
import { fruitFaqs, fruitSpecs, fruitSpecsNote, fruitsCategory } from "@/features/agri/content/fruits/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "banana";

export const banana: AgriProduct = {
  slug,
  name: "Banana",
  category: fruitsCategory,
  // Soft yellow, warm cream, sage and forest green — light and minimal.
  theme: { accent: "#76661A", deep: "#2E4A32", tint: "#FBF7E6", soft: "#EFE3A8" },
  hero: {
    eyebrow: "Premium Fresh Fruits",
    title: "Fresh Bananas",
    tagline: "Naturally sweet, naturally simple.",
    body: "Carefully selected bananas supplied green or at the ripeness your market needs, for importers, distributors and retailers.",
    highlights: ["Selected hands", "Ripeness to order", "Export packing"],
  },
  intro: {
    eyebrow: "About the Fruit",
    heading: "An Everyday Favourite",
    statement: "Soft, sweet and one of the world's most popular fruits.",
    body: [
      "Bananas are enjoyed fresh, blended and baked in kitchens around the world.",
      "Final details on the varieties, grades and ripening stages we supply will be added here.",
    ],
    highlights: [
      { label: "Type", value: "Tropical fruit" },
      { label: "Colour", value: "Green to yellow" },
      { label: "Taste", value: "Sweet, mild" },
      { label: "Texture", value: "Soft, creamy" },
      { label: "Form", value: "Fresh hands" },
      { label: "Use", value: "Fresh and processed" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "Simple Qualities, Carefully Kept",
    items: [
      { title: "Appearance", text: "Curved fruit in hands, selected for size and condition." },
      { title: "Colour", text: "Supplied green or at an agreed ripening stage." },
      { title: "Taste", text: "A mild, naturally sweet flavour." },
      { title: "Texture", text: "Soft and creamy when ripe." },
      { title: "Convenience", text: "An easy, ready-to-eat snack." },
      { title: "Versatility", text: "Used fresh, in smoothies, desserts and baking." },
    ],
  },
  uses: {
    eyebrow: "Uses & Applications",
    heading: "How Bananas Are Used",
    intro: "Temporary overview of typical banana uses.",
    groups: [
      { title: "Fresh Fruit", text: "Retail and wholesale supply.", items: ["Supermarkets", "Fruit markets"] },
      { title: "Beverages", text: "Blended into drinks.", items: ["Smoothies", "Shakes"] },
      { title: "Bakery & Desserts", text: "Naturally sweet baking.", items: ["Banana bread", "Desserts", "Ice cream"] },
      { title: "Food Processing", text: "For processed lines.", items: ["Purée", "Chips", "Baby food"] },
    ],
  },
  specs: {
    eyebrow: "Quality & Specifications",
    heading: "Banana Specifications",
    rows: fruitSpecs(
      [
        { label: "Product", value: "Fresh Banana" },
        { label: "Form", value: "Hands / clusters" },
        { label: "Colour", value: "Green to yellow, by ripening stage" },
        { label: "Variety", value: "To be confirmed", pending: true },
      ],
      "Controlled temperature; avoid chilling",
    ),
    note: fruitSpecsNote,
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Banana Questions",
    items: fruitFaqs("Banana", [
      { question: "Are bananas shipped green or ripe?", answer: "Ripening stage is agreed with each buyer to suit the market and transit time." },
    ]),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Fresh Bananas",
    body: "Share your variety, ripening stage and quantity, and our team will reply with availability and pricing.",
  },
  images: {
    // Panoramic hero — banana hands laid horizontally on warm cream (21:8).
    hero: img(slug, "hero", "Hands of fresh bananas laid on a warm cream surface", "Fresh banana hands"),
    // List image — an elongated banana bunch, portrait crop (4:5).
    detail: img(slug, "detail", "A bunch of bananas on the plant", "Banana bunch"),
  },
  sections: [
    { type: "hero", variant: "panoramic" },
    { type: "intro", variant: "statement" },
    { type: "features", variant: "numbered" },
    { type: "uses", variant: "list" },
    { type: "specs", variant: "tiles" },
    { type: "faq", variant: "center" },
    { type: "contact", variant: "split" },
  ],
};
