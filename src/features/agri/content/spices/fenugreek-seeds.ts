import { spiceFaqs, spiceImg, spiceSpecs, spiceSpecsNote, spicesCategory } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "fenugreek-seeds";

export const fenugreekSeeds: AgriProduct = {
  slug,
  name: "Fenugreek Seeds",
  category: spicesCategory,
  // Golden ochre, deep olive green and warm cream — the colour of the seed.
  theme: { accent: "#93702B", deep: "#233D29", tint: "#FAF4E4", soft: "#E7D3A4" },
  hero: {
    eyebrow: "Premium Whole Spices",
    title: "Fenugreek Seeds",
    tagline: "Golden, bitter-sweet, aromatic.",
    body: "Whole golden fenugreek (methi) seeds for spice grinders, curry powder and pickle makers, importers and distributors, packed to buyer specifications.",
    highlights: ["Whole methi seeds", "Cleaned for export", "Bulk supply"],
    badge: "Whole Methi",
    card: { title: "Golden Seeds", text: "Cleaned and packed to order" },
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Fenugreek",
    heading: "The Bitter-Sweet Backbone of Curry",
    statement: "Bitter when raw, nutty and maple-sweet when roasted.",
    body: [
      "Fenugreek (Trigonella foenum-graecum), known in India as methi, is grown for its small, hard, angular seeds with a characteristic groove across one side.",
      "Used sparingly, its bitter-sweet, slightly maple-like note gives depth to curry powders, pickles, tempering and spice blends across South Asian, Middle Eastern and North African cooking.",
    ],
    highlights: [
      { label: "Botanical", value: "Trigonella foenum-graecum" },
      { label: "Local Name", value: "Methi" },
      { label: "Shape", value: "Small, angular, grooved" },
      { label: "Colour", value: "Golden yellow to amber" },
      { label: "Aroma", value: "Warm, maple-like when roasted" },
      { label: "Flavour", value: "Bitter, nutty" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "Small Seeds, Distinctive Character",
    items: [
      { title: "Appearance", text: "Hard, angular seeds with a deep furrow.", icon: "target" },
      { title: "Colour", text: "Golden yellow to light amber.", icon: "layers" },
      { title: "Aroma", text: "Mild raw; warm and sweet once roasted.", icon: "sprout" },
      { title: "Flavour", text: "Pleasantly bitter, with a nutty finish.", icon: "flask" },
      { title: "Cleaning", text: "Cleaned to remove dust, stones and chaff.", icon: "shield" },
      { title: "Versatility", text: "Whole for tempering; ground for blends.", icon: "globe" },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Where Methi Seeds Belong",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Tempering", text: "Fried briefly in oil until just golden.", items: ["Sambar", "Dals", "Vegetable curries"] },
      { title: "Pickles", text: "A classic note in Indian pickles.", items: ["Mango pickle", "Lime pickle", "Mixed pickles"] },
      { title: "Spice Blends", text: "Roasted and ground in many masalas.", items: ["Curry powder", "Panch phoron", "Sambar powder"] },
      { title: "Breads & Batters", text: "Used in small amounts for flavour.", items: ["Dosa batter", "Flatbreads", "Savoury snacks"] },
    ],
  },
  commercial: { eyebrow: "", heading: "", items: [] },
  process: {
    eyebrow: "Product Journey",
    heading: "From Pod to Packed Seed",
    steps: [
      { title: "Harvest", text: "Plants are cut once the pods mature and dry." },
      { title: "Drying", text: "Harvested plants are dried before threshing." },
      { title: "Threshing", text: "Seeds are separated from the pods." },
      { title: "Cleaning", text: "Seeds are cleaned of dust, chaff and stones." },
      { title: "Packing", text: "Packed to buyer requirements." },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Fenugreek Seed Specifications",
    rows: spiceSpecs(
      "Fenugreek Seeds",
      [
        { label: "Botanical Name", value: "Trigonella foenum-graecum" },
        { label: "Appearance", value: "Small, angular, grooved seeds" },
        { label: "Colour", value: "Golden yellow to amber" },
        { label: "Purity & Moisture", value: "To be confirmed", pending: true },
      ],
      {
        form: "Whole seeds; ground on request",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight",
        applications: "Tempering, pickles, curry powders, spice blends",
      },
      slug,
    ),
    note: spiceSpecsNote,
  },
  storage: {
    heading: "Keep It Dry",
    text: "Fenugreek seeds are hard and robust, but damp and warm stores dull their colour and invite pests.",
    points: ["Airtight or lined packaging", "Store cool and dry", "Raise bags off the floor", "Keep away from strong odours"],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Fenugreek Questions",
    items: spiceFaqs("Fenugreek seeds", [
      { question: "Are the seeds cleaned?", answer: "Seeds are cleaned before packing; the cleaning standard is agreed with each order." },
      { question: "Do you supply fenugreek powder?", answer: "This page covers whole seeds; ground fenugreek can be discussed with our team." },
      { question: "How are purity and moisture specified?", answer: "Purity, moisture and other quality parameters are confirmed with each quotation." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Golden Fenugreek",
    body: "Share the form, quantity, packaging and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // fenugreek-seeds-hero.webp — golden fenugreek seeds heaped in a wooden bowl with a few fresh methi leaves on a cream linen surface (16:10).
    hero: spiceImg(slug, "hero", "A heap of golden fenugreek seeds on a white surface", "fenugreek-seeds-hero.webp"),
    // fenugreek-seeds-applications.webp — fenugreek seeds tempering in hot oil beside a jar of mango pickle (4:3).
    detail: spiceImg(slug, "applications", "Homemade mango pickle in red chilli oil on a patterned plate", "fenugreek-seeds-applications.webp"),
  },
  sections: [
    { type: "hero", variant: "editorial" },
    { type: "intro", variant: "split", shape: "pill" },
    { type: "features", variant: "bento" },
    { type: "uses", variant: "tabs" },
    { type: "process" },
    { type: "specs", variant: "sheet" },
    { type: "storage" },
    { type: "faq", variant: "center" },
    { type: "related" },
    { type: "contact", variant: "centered" },
  ],
};
