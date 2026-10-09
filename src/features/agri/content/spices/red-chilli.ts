import { spiceFaqs, spiceImg, spiceSpecs, spiceSpecsNote, spicesCategory } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy. Forms and packaging
// follow the existing Red Chilli catalogue entry.
const slug = "red-chilli";

export const redChilli: AgriProduct = {
  slug,
  name: "Red Chilli",
  category: spicesCategory,
  // Deep green grounds with a restrained, muted red.
  theme: { accent: "#A3261F", deep: "#133B26", tint: "#FAF1EE", soft: "#E9C3BD" },
  hero: {
    eyebrow: "Premium Whole Spices",
    title: "Red Chilli",
    tagline: "Colour, heat and character.",
    body: "Dried red chillies selected by heat and colour, supplied whole with or without stems, for spice processors, importers and food manufacturers.",
    highlights: ["Whole, with or without stems", "Selected by heat & colour", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Red Chilli",
    heading: "Heat That Carries Flavour",
    statement: "From gentle warmth to fiery heat.",
    body: [
      "Dried red chilli (Capsicum annuum) brings colour, pungency and a smoky depth to cuisines around the world.",
      "Varieties differ widely in heat and colour, so each lot is matched to the buyer's use — from vivid colour for blends to strong heat for sauces.",
    ],
    highlights: [
      { label: "Botanical", value: "Capsicum annuum" },
      { label: "Colour", value: "Bright to deep red" },
      { label: "Heat", value: "Varies by variety" },
      { label: "Forms", value: "Whole, crushed, powder" },
    ],
  },
  features: { eyebrow: "", heading: "", items: [] },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Where Red Chilli Shines",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Curries & Gravies", text: "Whole or ground for heat and colour.", items: ["Curries", "Gravies", "Stews"] },
      { title: "Tempering", text: "Fried whole in oil to release flavour.", items: ["Tadka", "Dals", "Stir-fries"] },
      { title: "Sauces & Pastes", text: "The base of hot sauces and chilli pastes.", items: ["Hot sauces", "Chilli pastes", "Chutneys"] },
      { title: "Pickles", text: "Adds heat and a rich red colour.", items: ["Mixed pickles", "Chilli oil"] },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "Built for Industry",
    items: [
      { title: "Spice Processors", text: "Whole chillies for crushing and grinding into chilli powder and flakes." },
      { title: "Sauce Manufacturers", text: "Heat and colour for hot sauces, dips and condiments." },
      { title: "Snack Seasonings", text: "A key ingredient in savoury seasoning blends." },
      { title: "Restaurants & Distributors", text: "Whole chillies for kitchens and wholesale markets." },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Red Chilli Specifications",
    rows: spiceSpecs(
      "Dried Red Chilli",
      [
        { label: "Appearance", value: "Whole dried pods" },
        { label: "Colour", value: "Red, varies by variety" },
        { label: "Aroma", value: "Pungent, smoky" },
        { label: "Pungency & Colour Value", value: "To be confirmed", pending: true },
      ],
      {
        form: "Whole with stem, stemless; crushed and powder on request",
        packaging: "Compressed jute or PP bags; cartons; custom packing on request",
        storage: "Cool, dry, away from light",
        applications: "Spice blends, sauces, seasonings",
      },
      slug,
    ),
    note: spiceSpecsNote,
  },
  storage: {
    heading: "Keeping Chillies at Their Best",
    text: "Dried chillies keep their colour and aroma longest when protected from light and moisture.",
    points: ["Store cool and dry", "Protect from direct sunlight", "Keep bags sealed", "Keep away from strong odours"],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Red Chilli Questions",
    items: spiceFaqs("Red chilli", [
      { question: "Can you supply stemless chillies?", answer: "Yes — whole chillies are available with or without stems." },
      { question: "How is heat level specified?", answer: "Pungency and colour values vary by variety and are shared with each quotation." },
      { question: "Do you supply crushed or powdered chilli?", answer: "Crushed and powdered forms are available on request." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Bring Red Chilli Heat to Your Market",
    body: "Tell us the variety, heat level, form and quantity you need, and our team will reply with availability and pricing.",
  },
  images: {
    // red-chilli-hero.webp — a heap of whole dried red chillies on a deep green ground (4:5).
    hero: spiceImg(slug, "hero", "A bunch of glossy dried red chillies with green stalks on a sunlit wooden board", "red-chilli-hero.webp"),
    // red-chilli-applications.webp — dried chillies with chilli flakes and a chilli sauce (4:3).
    detail: spiceImg(slug, "applications", "Jars of chilli sauce and chilli flakes in oil in a woven basket on a restaurant table", "red-chilli-applications.webp"),
    // Existing 300 px catalogue photograph, used only in a small circle.
    thumb: "/images/products/red-chilli.webp",
  },
  sections: [
    { type: "hero", variant: "stage" },
    { type: "intro", variant: "split", shape: "circle" },
    { type: "uses", variant: "tabs" },
    { type: "commercial", variant: "alternating" },
    { type: "specs", variant: "sheet" },
    { type: "storage" },
    { type: "faq", variant: "center" },
    { type: "contact", variant: "card" },
  ],
};
