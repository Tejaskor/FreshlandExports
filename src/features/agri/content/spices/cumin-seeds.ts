import { spiceFaqs, spiceImg, spiceSpecs, spiceSpecsNote, spicesCategory } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy. Forms, cleaning and
// packaging follow the existing Cumin Seeds catalogue entry.
const slug = "cumin-seeds";

export const cuminSeeds: AgriProduct = {
  slug,
  name: "Cumin Seeds",
  category: spicesCategory,
  // Earthy brown and sage — warm cream hero, contrasting green section.
  theme: { accent: "#7A5634", deep: "#1F4630", tint: "#F7F1E7", soft: "#DCCAB0" },
  hero: {
    eyebrow: "Premium Whole Spices",
    title: "Cumin Seeds",
    tagline: "Warm, nutty, essential.",
    body: "Machine-cleaned whole cumin seeds for spice processors, blend manufacturers, importers and food businesses.",
    highlights: ["Whole seeds", "Machine-cleaned", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Cumin",
    heading: "The Warmth Behind Every Masala",
    statement: "Earthy, nutty and deeply aromatic.",
    body: [
      "Cumin (Cuminum cyminum) seeds are small, ridged and elongated, with a warm, earthy aroma that deepens when toasted.",
      "They are among the most used spices in Indian, Middle Eastern and Latin American cooking, whole and ground.",
    ],
    highlights: [
      { label: "Botanical", value: "Cuminum cyminum" },
      { label: "Shape", value: "Elongated, ridged" },
      { label: "Colour", value: "Greyish brown" },
      { label: "Aroma", value: "Warm, earthy" },
      { label: "Flavour", value: "Nutty, slightly bitter" },
      { label: "Forms", value: "Whole, ground" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "Small Seed, Big Aroma",
    items: [
      { title: "Appearance", text: "Slender, ridged seeds.", icon: "target" },
      { title: "Colour", text: "Greyish to light brown.", icon: "layers" },
      { title: "Aroma", text: "Warm and earthy, stronger when toasted.", icon: "sprout" },
      { title: "Flavour", text: "Nutty with a gentle bitterness.", icon: "flask" },
      { title: "Cleaning", text: "Machine-cleaned; sortex cleaning on request.", icon: "shield" },
      { title: "Main Uses", text: "Tempering, blends and seasonings.", icon: "globe" },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Everyday Cumin",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Tempering", items: ["Jeera tadka", "Dals", "Vegetables"] },
      { title: "Rice", items: ["Jeera rice", "Pulao", "Biryani"] },
      { title: "Spice Blends", items: ["Garam masala", "Curry powder", "Taco seasoning"] },
      { title: "Breads & Snacks", items: ["Flatbreads", "Crackers", "Snack mixes"] },
    ],
  },
  commercial: { eyebrow: "", heading: "", items: [] },
  process: {
    eyebrow: "Product Journey",
    heading: "From Field to Seed",
    steps: [
      { title: "Harvest", text: "Plants are cut when the seeds mature." },
      { title: "Drying", text: "Dried in the sun or under cover." },
      { title: "Threshing", text: "Seeds are separated from the plant." },
      { title: "Cleaning", text: "Machine-cleaned; sortex on request." },
      { title: "Packing", text: "Packed to buyer requirements." },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Cumin Seed Specifications",
    rows: spiceSpecs(
      "Cumin Seeds",
      [
        { label: "Appearance", value: "Elongated, ridged seeds" },
        { label: "Colour", value: "Greyish brown" },
        { label: "Aroma", value: "Warm, earthy" },
        { label: "Purity & Moisture", value: "To be confirmed", pending: true },
      ],
      {
        form: "Whole seeds; ground on request",
        packaging: "PP or jute bags; lined paper bags; custom packing on request",
        storage: "Cool, dry, airtight",
        applications: "Tempering, spice blends, seasonings",
      },
      slug,
    ),
    note: spiceSpecsNote,
  },
  storage: {
    heading: "Store for Aroma",
    text: "Cumin's aromatic oils fade with heat, light and air.",
    points: ["Keep in airtight packaging", "Store cool and dry", "Protect from light", "Use clean, dry scoops"],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Cumin Questions",
    items: spiceFaqs("Cumin seeds", [
      { question: "Are the seeds cleaned?", answer: "Seeds are machine-cleaned, with sortex cleaning available on request." },
      { question: "Do you supply ground cumin?", answer: "Ground cumin is available on request." },
      { question: "How is purity specified?", answer: "Purity and moisture are confirmed with each quotation." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Aromatic Cumin",
    body: "Share the form, quantity and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // cumin-seeds-hero.webp — a scoop of whole cumin seeds on a warm cream surface (5:4, leaf crop).
    hero: spiceImg(slug, "hero", "Whole cumin seeds in a worn brass bowl, seen from above", "cumin-seeds-hero.webp"),
    // cumin-seeds-applications.webp — cumin tempering in a pan (4:3).
    detail: spiceImg(slug, "applications", "Whole moong dal finished with a tadka of tempered spices and herbs on a square plate", "cumin-seeds-applications.webp"),
  },
  sections: [
    { type: "hero", variant: "split" },
    { type: "intro", variant: "statement" },
    { type: "process" },
    { type: "features", variant: "band" },
    { type: "uses", variant: "columns" },
    { type: "specs", variant: "table" },
    { type: "storage" },
    { type: "faq", variant: "center" },
    { type: "contact", variant: "split" },
  ],
};
