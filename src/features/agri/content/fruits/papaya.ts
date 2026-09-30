import { img } from "@/features/agri/content/helpers";
import { fruitFaqs, fruitSpecs, fruitSpecsNote, fruitsCategory } from "@/features/agri/content/fruits/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "papaya";

export const papaya: AgriProduct = {
  slug,
  name: "Papaya",
  category: fruitsCategory,
  // Papaya orange, coral, soft peach, cream and forest green — lively and tropical.
  theme: { accent: "#B8472A", deep: "#1E4A2F", tint: "#FFF1EA", soft: "#F7C9B4" },
  hero: {
    eyebrow: "Premium Fresh Fruits",
    title: "Fresh Papaya",
    tagline: "Tropical colour, soft sweetness.",
    body: "Fresh papayas selected for ripeness, colour and size, supplied to importers, distributors, retailers and processors.",
    highlights: ["Vibrant flesh", "Selected by size", "Export packing"],
  },
  intro: {
    eyebrow: "About the Fruit",
    heading: "A Taste of the Tropics",
    statement: "Buttery flesh with a gentle, musky sweetness.",
    body: [
      "Papaya (Carica papaya) is a tropical fruit with soft, orange flesh and a mild, sweet flavour.",
      "Final details on the varieties, sizes and ripening stages we supply will be added here.",
    ],
    highlights: [
      { label: "Botanical name", value: "Carica papaya" },
      { label: "Flesh", value: "Orange to coral" },
      { label: "Taste", value: "Mild, sweet" },
      { label: "Texture", value: "Soft, buttery" },
    ],
  },
  features: { eyebrow: "", heading: "", items: [] },
  uses: {
    eyebrow: "Uses & Applications",
    heading: "From Breakfast to Processing",
    intro: "Temporary overview of how papaya is used.",
    groups: [
      { title: "Fresh Fruit", items: ["Retail", "Fruit platters", "Breakfast bowls"], image: img(slug, "use-fresh", "Papaya halves on a plate", "Fresh papaya halves") },
      { title: "Beverages", items: ["Smoothies", "Juices", "Shakes"], image: img(slug, "use-drinks", "Papaya smoothie in a glass", "Papaya smoothie") },
      { title: "Salads & Cooking", items: ["Fruit salads", "Green papaya salad", "Chutneys"], image: img(slug, "use-salad", "Papaya salad in a bowl", "Papaya salad") },
      { title: "Food Processing", items: ["Pulp", "Dried papaya", "Jams"], image: img(slug, "use-processing", "Diced papaya ready for processing", "Diced papaya") },
    ],
  },
  specs: {
    eyebrow: "Quality & Specifications",
    heading: "Papaya Specifications",
    rows: fruitSpecs(
      [
        { label: "Product", value: "Fresh Papaya" },
        { label: "Appearance", value: "Oval to pear-shaped" },
        { label: "Skin", value: "Green to yellow-orange when ripe" },
        { label: "Flesh", value: "Orange to coral" },
      ],
      "Cool conditions suited to ripeness; avoid chilling",
    ),
    note: fruitSpecsNote,
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Papaya Questions",
    items: fruitFaqs("Papaya", [
      { question: "At what ripeness is papaya shipped?", answer: "Ripening stage is agreed with each buyer to suit the market and transit time." },
    ]),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Bring Tropical Papaya to Your Market",
    body: "Share your size, ripeness and quantity, and our team will reply with availability and pricing.",
  },
  images: {
    // Diagonal hero — a halved papaya with seeds and leaves (5:6).
    hero: img(slug, "hero", "A halved papaya showing orange flesh and black seeds", "Halved papaya"),
    // Overlap intro — papayas growing on the tree (16:10).
    detail: img(slug, "detail", "Papayas growing on the tree", "Papayas on the tree"),
  },
  sections: [
    { type: "hero", variant: "diagonal" },
    { type: "intro", variant: "overlap" },
    { type: "uses", variant: "gallery" },
    { type: "specs", variant: "sheet" },
    { type: "faq", variant: "split" },
    { type: "contact", variant: "card" },
  ],
};
