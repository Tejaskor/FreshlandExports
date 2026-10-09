import { spiceFaqs, spiceImg, spiceSpecs, spiceSpecsNote, spicesCategory } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy. Forms and packaging
// follow the existing Turmeric catalogue entry. (Turmeric Powder is a
// separate product with its own page.)
const slug = "turmeric";

export const turmeric: AgriProduct = {
  slug,
  name: "Turmeric",
  category: spicesCategory,
  // Golden yellow and warm cream — a golden botanical page.
  theme: { accent: "#9A6512", deep: "#1F4A2E", tint: "#FBF4E1", soft: "#F0D48E" },
  hero: {
    eyebrow: "Premium Whole Spices",
    title: "Turmeric",
    tagline: "The golden root of Indian cooking.",
    body: "Dried turmeric fingers and bulbs, selected for colour and condition, for spice processors, importers and food manufacturers.",
    highlights: ["Dried fingers & bulbs", "Polished or unpolished", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Turmeric",
    heading: "A Root with a Golden Heart",
    statement: "Earthy, warm and unmistakably golden.",
    body: [
      "Turmeric (Curcuma longa) is the rhizome of a ginger-family plant, boiled, dried and traded as whole fingers and bulbs before being ground into powder.",
      "Its deep yellow-orange colour and warm, earthy aroma make it a cornerstone of spice blends worldwide.",
    ],
    highlights: [
      { label: "Botanical", value: "Curcuma longa" },
      { label: "Part", value: "Dried rhizome" },
      { label: "Colour", value: "Golden to deep orange" },
      { label: "Aroma", value: "Warm, earthy" },
      { label: "Flavour", value: "Mildly bitter, peppery" },
      { label: "Forms", value: "Fingers, bulbs" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "What Defines Good Turmeric",
    items: [
      { title: "Appearance", text: "Firm, dried fingers and rounded bulbs." },
      { title: "Colour", text: "A golden to deep orange interior, varying by variety." },
      { title: "Aroma", text: "Warm and earthy, with a gentle musky note." },
      { title: "Flavour", text: "Slightly bitter and peppery." },
      { title: "Finish", text: "Supplied polished or unpolished." },
      { title: "Main Uses", text: "Grinding, spice blends and food colouring." },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Golden Colour for Every Kitchen",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Curries & Dals", items: ["Curries", "Dals", "Gravies"], image: spiceImg(slug, "culinary-use", "Yellow coconut curry with chicken, potatoes and basil in a bowl", "turmeric-culinary-use.webp") },
      { title: "Rice Dishes", items: ["Pulao", "Biryani", "Yellow rice"], image: spiceImg(slug, "use-rice", "Turmeric-yellow nasi kuning rice topped with sambal and egg on a green plate", "turmeric-use-rice.webp") },
      { title: "Pickles", items: ["Mixed pickles", "Preserves"], image: spiceImg(slug, "use-pickles", "A jar of Assamese lemon pickle with a green chilli", "turmeric-use-pickles.webp") },
      { title: "Beverages", items: ["Golden milk", "Herbal drinks"], image: spiceImg(slug, "use-drinks", "A turmeric latte with a dusting of spice on a wooden table", "turmeric-use-drinks.webp") },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "For Processors and Manufacturers",
    items: [
      { title: "Spice Grinders", text: "Whole fingers for milling into turmeric powder.", icon: "layers" },
      { title: "Blend Manufacturers", text: "A base for curry powders and masalas.", icon: "flask" },
      { title: "Food Manufacturers", text: "Natural colour and flavour in processed foods.", icon: "sprout" },
      { title: "Distributors", text: "Whole turmeric for wholesale spice markets.", icon: "globe" },
    ],
  },
  process: {
    eyebrow: "Product Journey",
    heading: "From Rhizome to Spice",
    steps: [
      { title: "Harvest", text: "Rhizomes are lifted when mature." },
      { title: "Curing", text: "Traditionally boiled or steamed." },
      { title: "Drying", text: "Dried until hard." },
      { title: "Polishing", text: "Outer skin smoothed, if required." },
      { title: "Sorting & Packing", text: "Sorted and packed to order." },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Turmeric Specifications",
    rows: spiceSpecs(
      "Dried Turmeric",
      [
        { label: "Appearance", value: "Dried fingers and bulbs" },
        { label: "Colour", value: "Golden to deep orange, varies by variety" },
        { label: "Aroma", value: "Warm, earthy" },
        { label: "Flavour", value: "Mildly bitter, peppery" },
      ],
      {
        form: "Fingers, bulbs; polished or unpolished",
        packaging: "Jute or PP bags; custom packing on request",
        storage: "Cool, dry, away from light",
        applications: "Grinding, spice blends, food processing",
      },
      slug,
    ),
    note: spiceSpecsNote,
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Turmeric Questions",
    items: spiceFaqs("Turmeric", [
      { question: "What forms of turmeric do you supply?", answer: "Dried fingers and bulbs, polished or unpolished. Turmeric powder has its own product page." },
      { question: "Can you share curcumin content?", answer: "Quality parameters such as curcumin content are shared with each quotation." },
      { question: "How should whole turmeric be stored?", answer: "Keep it in a cool, dry place away from light and moisture." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Golden Turmeric",
    body: "Tell us the form, quantity and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // turmeric-hero.webp — dried turmeric fingers heaped on a warm surface (1:1, blob mask).
    hero: spiceImg(slug, "hero", "A heap of fresh turmeric rhizomes at a vegetable market", "turmeric-hero.webp"),
    // turmeric-detail.webp — fresh and dried rhizomes, one broken to show the colour (4:3).
    detail: spiceImg(slug, "detail", "Fresh turmeric rhizomes with two cut pieces showing the bright orange interior", "turmeric-detail.webp", "50% 45%"),
  },
  sections: [
    { type: "hero", variant: "blob" },
    { type: "intro", variant: "statement" },
    { type: "features", variant: "numbered" },
    { type: "uses", variant: "gallery" },
    { type: "commercial", variant: "band" },
    { type: "process" },
    { type: "specs", variant: "table" },
    { type: "faq", variant: "split" },
    { type: "contact", variant: "band" },
  ],
};
