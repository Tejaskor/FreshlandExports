import { img } from "@/features/agri/content/helpers";
import { fruitFaqs, fruitSpecs, fruitSpecsNote, fruitsCategory } from "@/features/agri/content/fruits/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "pomegranate";

export const pomegranate: AgriProduct = {
  slug,
  name: "Pomegranate",
  category: fruitsCategory,
  // Deep red, burgundy, soft blush, cream and forest green — bold and dramatic.
  theme: { accent: "#9B2335", deep: "#4A1420", tint: "#FAF0EF", soft: "#E8C4C4" },
  hero: {
    eyebrow: "Premium Fresh Fruits",
    title: "Pomegranate",
    tagline: "Jewel-red arils, rich in character.",
    body: "Fresh pomegranates selected for colour, size and skin condition, supplied to importers, distributors and food businesses.",
    highlights: ["Deep red arils", "Selected by size", "Export packing"],
  },
  intro: {
    eyebrow: "About the Fruit",
    heading: "A Fruit Full of Jewels",
    statement: "Sweet-tart arils inside a leathery red skin.",
    body: [
      "Pomegranate (Punica granatum) is prized for its juicy, ruby-red arils and distinctive sweet-tart flavour.",
      "Final details on the varieties, aril colour and sizes we supply will be added here.",
    ],
    highlights: [
      { label: "Botanical name", value: "Punica granatum" },
      { label: "Skin", value: "Leathery, red" },
      { label: "Arils", value: "Juicy, deep red" },
      { label: "Taste", value: "Sweet-tart" },
    ],
  },
  features: { eyebrow: "", heading: "", items: [] },
  uses: {
    eyebrow: "Uses & Applications",
    heading: "From Fresh Arils to Juice",
    intro: "Temporary overview of typical pomegranate uses.",
    groups: [
      { title: "Fresh Fruit", items: ["Retail", "Fruit markets"], image: img(slug, "use-fresh", "Halved pomegranate showing its arils", "Halved pomegranate") },
      { title: "Arils & Salads", items: ["Salads", "Garnishes", "Bowls"], image: img(slug, "use-salad", "Salad topped with pomegranate arils", "Pomegranate salad") },
      { title: "Juices", items: ["Fresh juice", "Blends"], image: img(slug, "use-juice", "Glass of pomegranate juice", "Pomegranate juice") },
      { title: "Food Processing", items: ["Concentrates", "Syrups", "Desserts"], image: img(slug, "use-processing", "Pomegranate syrup and dessert", "Pomegranate products") },
    ],
  },
  specs: {
    eyebrow: "Quality & Specifications",
    heading: "Pomegranate Specifications",
    rows: fruitSpecs(
      [
        { label: "Product", value: "Fresh Pomegranate" },
        { label: "Appearance", value: "Round fruit with a crown" },
        { label: "Skin Colour", value: "Red, varies by variety" },
        { label: "Aril Colour", value: "Deep red, varies by variety" },
      ],
      "Cool, humid conditions",
    ),
    note: fruitSpecsNote,
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Pomegranate Questions",
    items: fruitFaqs("Pomegranate", [
      { question: "Which pomegranate varieties do you supply?", answer: "Varieties depend on the season and are confirmed with each enquiry." },
    ]),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Bring Pomegranates to Your Market",
    body: "Share your size, quantity and destination, and our team will reply with availability and pricing.",
  },
  images: {
    // Stage hero — whole and cut pomegranates on a burgundy ground (4:5).
    hero: img(slug, "hero", "Whole and cut pomegranates on a dark burgundy surface", "Whole and cut pomegranates"),
    // Circle intro — a cross-section full of arils (1:1).
    detail: img(slug, "detail", "Cross-section of a pomegranate full of red arils", "Pomegranate cross-section"),
  },
  sections: [
    { type: "hero", variant: "stage" },
    { type: "intro", variant: "split", shape: "circle" },
    { type: "uses", variant: "gallery" },
    { type: "specs", variant: "table" },
    { type: "faq", variant: "center" },
    { type: "contact", variant: "band" },
  ],
};
