import { img } from "@/features/agri/content/helpers";
import { fruitFaqs, fruitSpecs, fruitSpecsNote, fruitsCategory } from "@/features/agri/content/fruits/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "guava";

export const guava: AgriProduct = {
  slug,
  name: "Guava",
  category: fruitsCategory,
  // Light green and soft pink with cream and forest green — fresh and playful.
  theme: { accent: "#B04A6E", deep: "#1F4A2E", tint: "#F2F7EC", soft: "#F3CFDA" },
  hero: {
    eyebrow: "Premium Fresh Fruits",
    title: "Fresh Guava",
    tagline: "Fragrant, fresh and full of flavour.",
    body: "Fresh guavas selected for aroma, firmness and size, supplied to importers, distributors, retailers and processors.",
    highlights: ["Fragrant fruit", "White and pink flesh", "Export packing"],
  },
  intro: {
    eyebrow: "About the Fruit",
    heading: "Green Outside, Pink Within",
    statement: "A fragrant tropical fruit with a sweet, refreshing bite.",
    body: [
      "Guava (Psidium guajava) is a fragrant tropical fruit with green skin and white or pink flesh.",
      "Final details on the varieties, flesh colours and sizes we supply will be added here.",
    ],
    highlights: [
      { label: "Botanical name", value: "Psidium guajava" },
      { label: "Skin", value: "Green to yellow-green" },
      { label: "Flesh", value: "White or pink" },
      { label: "Aroma", value: "Sweet, fragrant" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "What Makes Guava Special",
    items: [
      { title: "Fragrant Aroma", text: "A sweet, distinctive fragrance when ripe.", icon: "sprout" },
      { title: "Two Flesh Colours", text: "White and pink varieties, subject to season.", icon: "target" },
      { title: "Refreshing Taste", text: "Sweet with a light, refreshing tang.", icon: "check" },
      { title: "Firm Texture", text: "A pleasant bite with soft seeds.", icon: "layers" },
      { title: "Versatile Uses", text: "Fresh, in juices, jams and desserts.", icon: "award" },
    ],
  },
  uses: {
    eyebrow: "Uses & Applications",
    heading: "How Guava Is Used",
    intro: "Temporary overview of typical guava uses.",
    groups: [
      { title: "Fresh Fruit", text: "Enjoyed sliced, often with a sprinkle of salt and spice.", items: ["Retail", "Fruit markets"] },
      { title: "Juices & Nectars", text: "A popular base for tropical drinks.", items: ["Juices", "Nectars", "Smoothies"] },
      { title: "Jams & Desserts", text: "Naturally rich in pectin for setting.", items: ["Jams", "Jellies", "Guava cheese"] },
      { title: "Food Processing", text: "For pulp and flavoured products.", items: ["Pulp", "Concentrates", "Flavourings"] },
    ],
  },
  specs: {
    eyebrow: "Quality & Specifications",
    heading: "Guava Specifications",
    rows: fruitSpecs(
      [
        { label: "Product", value: "Fresh Guava" },
        { label: "Appearance", value: "Round to pear-shaped" },
        { label: "Skin", value: "Green to yellow-green" },
        { label: "Flesh", value: "White or pink, by variety" },
      ],
      "Cool conditions suited to ripeness",
    ),
    note: fruitSpecsNote,
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Guava Questions",
    items: fruitFaqs("Guava", [
      { question: "Do you supply pink guava?", answer: "White and pink varieties may be available depending on the season; our team confirms options with each enquiry." },
    ]),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Bring Fresh Guava to Your Market",
    body: "Share your preferred variety, size and quantity, and our team will reply with availability and pricing.",
  },
  images: {
    // Collage hero — whole and cut guavas showing pink flesh (3:5).
    hero: img(slug, "hero", "A cut pink guava among whole green guavas", "Whole and cut guavas"),
    // Leaf intro — guavas on a branch with leaves (5:4).
    detail: img(slug, "detail", "A guava growing on a branch with leaves", "Guavas on the branch"),
    extra: [
      // Circle — a guava slice with pink flesh (1:1).
      img(slug, "slice", "Halved pink guavas in a glass bowl", "Pink guava slice"),
      // Rounded square — white guava halves (1:1).
      img(slug, "white", "Slices of white guava on a plate", "White guava halves"),
    ],
  },
  sections: [
    { type: "hero", variant: "collage" },
    { type: "intro", variant: "split", shape: "leaf", reverse: true },
    { type: "features", variant: "bento" },
    { type: "uses", variant: "list" },
    { type: "specs", variant: "tiles" },
    { type: "faq", variant: "center" },
    { type: "contact", variant: "centered" },
  ],
};
