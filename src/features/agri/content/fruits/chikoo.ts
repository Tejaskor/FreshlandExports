import { img } from "@/features/agri/content/helpers";
import { fruitFaqs, fruitSpecs, fruitSpecsNote, fruitsCategory } from "@/features/agri/content/fruits/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "chikoo";

export const chikoo: AgriProduct = {
  slug,
  name: "Chikoo",
  category: fruitsCategory,
  // Warm brown, beige, soft cream, sage and forest green — calm and earthy.
  theme: { accent: "#855A38", deep: "#3B2A1F", tint: "#F5EFE6", soft: "#DCCBB5" },
  hero: {
    eyebrow: "Premium Fresh Fruits",
    title: "Fresh Chikoo",
    tagline: "Malty sweetness, naturally.",
    body: "Fresh chikoo (sapodilla) selected for ripeness and condition, supplied to importers, distributors and food businesses.",
    highlights: ["Naturally sweet", "Carefully selected", "Export packing"],
  },
  intro: {
    eyebrow: "About the Fruit",
    heading: "A Quiet Tropical Treasure",
    statement: "Soft, grainy flesh with a caramel-like sweetness.",
    body: [
      "Chikoo, also known as sapodilla (Manilkara zapota), has a brown skin and soft, sweet flesh with a flavour often compared to caramel.",
      "Final details on the sizes and seasons we supply will be added here.",
    ],
    highlights: [
      { label: "Also known as", value: "Sapodilla" },
      { label: "Botanical name", value: "Manilkara zapota" },
      { label: "Skin", value: "Brown, slightly rough" },
      { label: "Flesh", value: "Soft, grainy, sweet" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "Gentle Qualities",
    items: [
      { title: "Appearance", text: "Round to oval fruit with a matte brown skin." },
      { title: "Taste", text: "Naturally sweet with a malty, caramel-like note." },
      { title: "Texture", text: "Soft, slightly grainy flesh when ripe." },
      { title: "Aroma", text: "A mild, sweet fragrance." },
      { title: "Uses", text: "Enjoyed fresh, in shakes and in desserts." },
    ],
  },
  uses: { eyebrow: "", heading: "", intro: "", groups: [] },
  specs: {
    eyebrow: "Quality & Specifications",
    heading: "Chikoo Specifications",
    rows: fruitSpecs(
      [
        { label: "Product", value: "Fresh Chikoo (Sapodilla)" },
        { label: "Appearance", value: "Round to oval, brown skin" },
        { label: "Flesh", value: "Soft, brown to tan" },
        { label: "Uses", value: "Fresh, shakes, desserts" },
      ],
      "Cool conditions suited to ripeness",
    ),
    note: fruitSpecsNote,
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Chikoo Questions",
    items: fruitFaqs("Chikoo", [
      { question: "What does chikoo taste like?", answer: "Ripe chikoo is naturally sweet with a malty, caramel-like flavour and soft, grainy flesh." },
    ]),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Fresh Chikoo",
    body: "Share your quantity and destination, and our team will reply with seasonal availability and pricing.",
  },
  images: {
    // Centred hero — whole and halved chikoo on an earthy surface (21:9).
    hero: img(slug, "hero", "Chikoo (sapodilla) fruits growing on a branch", "Whole and cut chikoo"),
    // Arch intro — a halved chikoo showing its flesh and seeds (4:5).
    detail: img(slug, "detail", "A halved chikoo showing its soft flesh beside a whole fruit", "Halved chikoo", "22% 50%"),
  },
  sections: [
    { type: "hero", variant: "centered" },
    { type: "intro", variant: "split", shape: "arch" },
    { type: "features", variant: "alternating" },
    { type: "specs", variant: "table" },
    { type: "faq", variant: "center" },
    { type: "contact", variant: "split" },
  ],
};
