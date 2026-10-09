import { img } from "@/features/agri/content/helpers";
import { fruitFaqs, fruitSpecs, fruitSpecsNote, fruitsCategory } from "@/features/agri/content/fruits/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "grapes";

export const grapes: AgriProduct = {
  slug,
  name: "Grapes",
  category: fruitsCategory,
  // Deep grape purple, muted lavender, cream and forest green — luxurious.
  theme: { accent: "#6B3F7A", deep: "#2E1A35", tint: "#F4F0F6", soft: "#D9CCE2" },
  hero: {
    eyebrow: "Premium Fresh Fruits",
    title: "Fresh Grapes",
    tagline: "Crisp clusters, elegantly sweet.",
    body: "Fresh table grapes selected for bunch shape, berry size and colour, supplied to importers, distributors and retailers.",
    highlights: ["Selected bunches", "Seedless options", "Cold-chain shipping"],
  },
  intro: {
    eyebrow: "About the Fruit",
    heading: "Clusters of Sweetness",
    statement: "Crisp, juicy and ready to enjoy.",
    body: [
      "Table grapes are enjoyed fresh for their crisp bite and refreshing sweetness.",
      "Final details on the varieties, colours and berry sizes we supply will be added here.",
    ],
    highlights: [
      { label: "Type", value: "Table grapes" },
      { label: "Colour", value: "Green, red or black" },
      { label: "Taste", value: "Sweet, refreshing" },
      { label: "Texture", value: "Crisp, juicy" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "Selected Bunch by Bunch",
    items: [
      { title: "Appearance", text: "Well-formed bunches with even berries.", icon: "award" },
      { title: "Colour", text: "Green, red and black varieties, subject to season.", icon: "target" },
      { title: "Taste", text: "Sweet, with a refreshing balance.", icon: "sprout" },
      { title: "Texture", text: "Crisp skin and juicy flesh.", icon: "layers" },
      { title: "Seedless Options", text: "Seedless varieties on request, subject to availability.", icon: "check" },
      { title: "Cold Chain", text: "Kept cool from packing to shipment.", icon: "shield" },
    ],
  },
  uses: {
    eyebrow: "Uses & Applications",
    heading: "Where Grapes Go",
    intro: "Temporary overview of typical grape uses.",
    groups: [
      { title: "Fresh Retail", items: ["Supermarkets", "Fruit markets", "Snack packs"] },
      { title: "Food Service", items: ["Fruit platters", "Hotels", "Catering"] },
      { title: "Desserts", items: ["Fruit salads", "Tarts", "Garnishes"] },
      { title: "Processing", items: ["Juices", "Raisins", "Jams"] },
    ],
  },
  specs: {
    eyebrow: "Quality & Specifications",
    heading: "Grape Specifications",
    rows: fruitSpecs(
      [
        { label: "Product", value: "Fresh Table Grapes" },
        { label: "Colour", value: "Green, red or black, by variety" },
        { label: "Seed", value: "Seedless options, to be confirmed", pending: true },
        { label: "Form", value: "Whole bunches" },
      ],
      "Cold storage with humidity control",
    ),
    note: fruitSpecsNote,
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Grape Questions",
    items: fruitFaqs("Grapes", [
      { question: "Do you supply seedless grapes?", answer: "Seedless varieties may be available depending on the season. Our team confirms options with each enquiry." },
    ]),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Bring Premium Grapes to Your Market",
    body: "Share your preferred colour, variety and quantity, and we will reply with seasonal availability and pricing.",
  },
  images: {
    // Duo hero — large bunch of dark grapes on a deep purple ground (4:5).
    hero: img(slug, "hero", "A large bunch of dark grapes on the vine", "Bunch of grapes"),
    // Overlap intro — grapes on the vine in a vineyard (16:10).
    detail: img(slug, "detail", "Bunches of white grapes growing on the vine in a vineyard", "Grapes on the vine"),
    extra: [
      // Duo overlap — close-up of green grapes (1:1).
      img(slug, "green", "Green table grapes piled in market baskets", "Green grapes close-up"),
    ],
  },
  sections: [
    { type: "hero", variant: "duo" },
    { type: "intro", variant: "overlap" },
    { type: "features", variant: "band" },
    { type: "uses", variant: "columns" },
    { type: "specs", variant: "sheet" },
    { type: "faq", variant: "split" },
    { type: "contact", variant: "card" },
  ],
};
