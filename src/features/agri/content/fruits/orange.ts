import { img } from "@/features/agri/content/helpers";
import { fruitFaqs, fruitSpecs, fruitSpecsNote, fruitsCategory } from "@/features/agri/content/fruits/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "orange";

export const orange: AgriProduct = {
  slug,
  name: "Orange",
  category: fruitsCategory,
  // Citrus orange (used sparingly), pale peach, cream and forest green.
  theme: { accent: "#B8561A", deep: "#1F4A2E", tint: "#FFF4EA", soft: "#F8D2AE" },
  hero: {
    eyebrow: "Premium Fresh Fruits",
    title: "Fresh Oranges",
    tagline: "Bright, juicy citrus sunshine.",
    body: "Fresh oranges selected for colour, juiciness and size, supplied to importers, distributors, retailers and juice processors.",
    highlights: ["Juicy, fragrant fruit", "Selected by size", "Export packing"],
  },
  intro: {
    eyebrow: "About the Fruit",
    heading: "Citrus at Its Freshest",
    statement: "Sweet, tangy and bursting with juice.",
    body: [
      "Oranges are among the world's most popular citrus fruits, enjoyed fresh and as juice.",
      "Final details on the varieties, sizes and seasons we supply will be added here.",
    ],
    highlights: [
      { label: "Type", value: "Citrus fruit" },
      { label: "Colour", value: "Bright orange" },
      { label: "Taste", value: "Sweet and tangy" },
      { label: "Texture", value: "Juicy segments" },
      { label: "Aroma", value: "Fresh citrus" },
      { label: "Form", value: "Whole fruit" },
    ],
  },
  features: { eyebrow: "", heading: "", items: [] },
  uses: {
    eyebrow: "Uses & Applications",
    heading: "Ways to Enjoy Oranges",
    intro: "Temporary overview of how buyers use oranges.",
    groups: [
      { title: "Fresh Fruit", text: "Peeled and enjoyed fresh, or sold loose and packed at retail.", items: ["Retail packs", "Fruit markets", "Fruit bowls"] },
      { title: "Juices", text: "Freshly squeezed or processed into juice lines.", items: ["Fresh juice", "Juice blends", "Concentrates"] },
      { title: "Culinary", text: "Zest and segments that brighten sweet and savoury dishes.", items: ["Salads", "Marinades", "Desserts"] },
      { title: "Food Processing", text: "Used across preserved and flavoured products.", items: ["Marmalade", "Candied peel", "Flavourings"] },
    ],
  },
  specs: {
    eyebrow: "Quality & Specifications",
    heading: "Orange Specifications",
    rows: fruitSpecs(
      [
        { label: "Product", value: "Fresh Orange" },
        { label: "Appearance", value: "Round citrus fruit" },
        { label: "Colour", value: "Orange, varies by variety" },
        { label: "Variety", value: "To be confirmed", pending: true },
      ],
      "Cool conditions with good ventilation",
    ),
    note: fruitSpecsNote,
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Orange Questions",
    items: fruitFaqs("Orange", [
      { question: "Are the oranges suitable for juicing?", answer: "Yes — oranges are widely used for juice. Our team can advise on the most suitable varieties in season." },
    ]),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Bring Fresh Citrus to Your Market",
    body: "Tell us your size, quantity and destination, and our team will reply with availability and pricing.",
  },
  images: {
    // Orbit hero — whole oranges with a halved orange, round crop (1:1).
    hero: img(slug, "hero", "Whole and halved fresh oranges", "Whole and halved oranges"),
    // Tabs panel — orange segments and juice (4:3).
    detail: img(slug, "detail", "Fresh orange juice in a glass and jug with whole and cut oranges", "Orange segments and juice", "50% 60%"),
    extra: [
      // Orbit circle — a single orange slice (1:1).
      img(slug, "slice", "A whole orange with halves and wedges", "Orange slice"),
      // Orbit circle — oranges on the tree (1:1).
      img(slug, "tree", "Ripe oranges growing on the tree", "Oranges on the tree"),
    ],
  },
  sections: [
    { type: "hero", variant: "orbit" },
    { type: "intro", variant: "statement" },
    { type: "uses", variant: "tabs" },
    { type: "specs", variant: "tiles" },
    { type: "faq", variant: "split" },
    { type: "contact", variant: "centered" },
  ],
};
