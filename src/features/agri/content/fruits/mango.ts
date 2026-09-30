import { img } from "@/features/agri/content/helpers";
import { fruitFaqs, fruitSpecs, fruitSpecsNote, fruitsCategory } from "@/features/agri/content/fruits/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "mango";

export const mango: AgriProduct = {
  slug,
  name: "Mango",
  category: fruitsCategory,
  // Mango yellow, golden cream, forest green and the brand rust — tropical and warm.
  theme: { accent: "#A9651A", deep: "#1F4A2E", tint: "#FCF4E2", soft: "#F2D89B" },
  hero: {
    eyebrow: "Premium Fresh Fruits",
    title: "Fresh Mangoes",
    tagline: "The golden taste of the tropics.",
    body: "Hand-selected mangoes chosen for colour, aroma and ripeness, supplied to importers, distributors and food businesses worldwide.",
    highlights: ["Hand-selected fruit", "Seasonal varieties", "Export packing"],
  },
  intro: {
    eyebrow: "About the Fruit",
    heading: "The King of Fruits",
    statement: "Sweet, fragrant and loved around the world.",
    body: [
      "Mango (Mangifera indica) is a tropical stone fruit known for its sweet, aromatic flesh and rich golden colour.",
      "India grows many distinctive varieties. Final details on the varieties, seasons and grades we supply will be added here.",
    ],
    highlights: [
      { label: "Botanical name", value: "Mangifera indica" },
      { label: "Type", value: "Tropical stone fruit" },
      { label: "Flesh", value: "Golden, juicy" },
      { label: "Aroma", value: "Sweet and fragrant" },
    ],
  },
  varieties: {
    eyebrow: "Mango Varieties",
    heading: "A Variety for Every Market",
    intro: "Temporary list of popular Indian varieties — replace with the varieties you supply.",
    items: [
      { name: "Alphonso", text: "Rich, creamy flesh and a deep aroma. Temporary description." },
      { name: "Kesar", text: "Bright saffron flesh with a sweet flavour. Temporary description." },
      { name: "Banganapalli", text: "Large fruit with firm, fibreless flesh. Temporary description." },
      { name: "Totapuri", text: "Distinctive shape, widely used for pulp. Temporary description." },
    ],
    note: "Variety availability is seasonal and confirmed with each enquiry.",
  },
  features: { eyebrow: "", heading: "", items: [] },
  uses: {
    eyebrow: "Uses & Applications",
    heading: "From Fresh Slices to Pulp",
    intro: "Temporary overview of how buyers use mangoes.",
    groups: [
      { title: "Fresh Consumption", items: ["Retail fruit", "Fruit platters", "Desserts"], image: img(slug, "use-fresh", "Sliced fresh mango cubes", "Fresh mango slices") },
      { title: "Beverages", items: ["Juices", "Smoothies", "Lassi"], image: img(slug, "use-drinks", "Mango smoothie in a glass", "Mango beverages") },
      { title: "Food Processing", items: ["Pulp", "Purée", "Dried mango"], image: img(slug, "use-processing", "Mango pulp in a bowl", "Mango pulp") },
      { title: "Bakery & Desserts", items: ["Ice cream", "Cakes", "Jams"], image: img(slug, "use-desserts", "Mango dessert with fresh fruit", "Mango desserts") },
    ],
  },
  specs: {
    eyebrow: "Quality & Specifications",
    heading: "Mango Specifications",
    rows: fruitSpecs(
      [
        { label: "Product", value: "Fresh Mango" },
        { label: "Varieties", value: "Seasonal, to be confirmed", pending: true },
        { label: "Appearance", value: "Oval to round, smooth skin" },
        { label: "Colour", value: "Green to golden yellow, varies by variety" },
      ],
      "Cool conditions suited to the ripeness stage",
    ),
    note: fruitSpecsNote,
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Mango Questions",
    items: fruitFaqs("Mango", [
      { question: "Which mango varieties do you supply?", answer: "Varieties depend on the season. Our team confirms current availability with each enquiry." },
      { question: "When is mango season?", answer: "Indian mango season generally runs through the summer months; exact timing varies by variety and region." },
    ]),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Bring Fresh Mangoes to Your Market",
    body: "Tell us your preferred variety, quantity and destination, and we will reply with seasonal availability and pricing.",
  },
  images: {
    // Blob hero — a large ripe mango with leaves on a warm cream ground (1:1).
    hero: img(slug, "hero", "Ripe golden mangoes with fresh leaves", "Ripe mangoes"),
    // Existing site photograph (941×1672): green mangoes on the tree.
    detail: {
      file: "/images/farms/hero-green-mangoes.webp",
      alt: "Green mangoes hanging on a mango tree in sunlight",
      label: "Mangoes on the tree",
    },
  },
  sections: [
    { type: "hero", variant: "blob" },
    { type: "intro", variant: "split", shape: "arch", reverse: true },
    { type: "varieties" },
    { type: "uses", variant: "gallery" },
    { type: "specs", variant: "table" },
    { type: "faq", variant: "split" },
    { type: "contact", variant: "band" },
  ],
};
