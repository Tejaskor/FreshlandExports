import { spiceFaqs, spiceImg, spiceSpecs, spiceSpecsNote, spicesCategory } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "fennel-seeds";

export const fennelSeeds: AgriProduct = {
  slug,
  name: "Fennel Seeds",
  category: spicesCategory,
  // Pale green, sage and cream — light, spacious and botanical.
  theme: { accent: "#56794A", deep: "#24452F", tint: "#F4F7EF", soft: "#D8E5CC" },
  hero: {
    eyebrow: "Premium Whole Spices",
    title: "Fennel Seeds",
    tagline: "Sweet, fresh and anise-bright.",
    body: "Whole fennel seeds with a sweet, liquorice-like aroma, for spice processors, food manufacturers, importers and distributors.",
    highlights: ["Whole seeds", "Sweet, fresh aroma", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Fennel",
    heading: "A Sweet, Aromatic Seed",
    statement: "Fresh, sweet and gently anise-like.",
    body: [
      "Fennel (Foeniculum vulgare) seeds are slender, ridged and pale green, with a sweet aroma reminiscent of anise.",
      "They are used in spice blends, breads, sausages and teas, and enjoyed after meals as a traditional mouth freshener.",
    ],
    highlights: [
      { label: "Botanical", value: "Foeniculum vulgare" },
      { label: "Shape", value: "Slender, ridged" },
      { label: "Colour", value: "Pale green to greenish brown" },
      { label: "Aroma", value: "Sweet, anise-like" },
      { label: "Flavour", value: "Sweet, fresh" },
      { label: "Form", value: "Whole seeds" },
    ],
  },
  features: { eyebrow: "", heading: "", items: [] },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Where Fennel Fits",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Spice Blends", text: "A sweet note in many mixes.", items: ["Panch phoron", "Garam masala", "Five-spice"] },
      { title: "Breads & Baking", text: "Seeded breads and biscuits.", items: ["Breads", "Crackers", "Biscuits"] },
      { title: "Meats & Sausages", text: "A classic sausage seasoning.", items: ["Sausages", "Meatballs", "Rubs"] },
      { title: "Teas & After-Meal", text: "Refreshing and aromatic.", items: ["Fennel tea", "Mukhwas"] },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "For Food Businesses",
    items: [
      { title: "Blend Manufacturers", text: "A sweet component of spice mixes." },
      { title: "Meat Processors", text: "Seasoning for sausages and cured meats." },
      { title: "Bakeries", text: "Seeds for breads and baked goods." },
      { title: "Tea & Confectionery", text: "Seeds for herbal teas and mouth fresheners." },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Fennel Seed Specifications",
    rows: spiceSpecs(
      "Fennel Seeds",
      [
        { label: "Appearance", value: "Slender, ridged seeds" },
        { label: "Colour", value: "Pale green to greenish brown" },
        { label: "Aroma", value: "Sweet, anise-like" },
        { label: "Grade", value: "To be confirmed", pending: true },
      ],
      {
        form: "Whole seeds",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight, away from light",
        applications: "Blends, baking, meats, teas",
      },
    ),
    note: spiceSpecsNote,
  },
  storage: {
    heading: "Keep It Fresh",
    text: "Fennel's sweet aroma and green colour last longest away from light and air.",
    points: ["Airtight packaging", "Cool, dry storage", "Protect from light", "Away from strong odours"],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Fennel Questions",
    items: spiceFaqs("Fennel seeds", [
      { question: "What does fennel taste like?", answer: "Sweet and fresh, with an aroma similar to anise." },
      { question: "How is grade specified?", answer: "Grade and quality parameters are confirmed with each quotation." },
      { question: "Is fennel the same as anise?", answer: "No — they are different plants, though fennel has a similar sweet, anise-like aroma." },
    ]),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Fresh Fennel Seeds",
    body: "Share the grade, quantity and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // fennel-seeds-hero.webp — fennel seeds with a flowering fennel stem, tall crop (9:19).
    hero: spiceImg(slug, "hero", "Fennel seeds with a flowering fennel stem", "fennel-seeds-hero.webp"),
    // fennel-seeds-applications.webp — fennel seeds in a tea cup and spice blend (4:5).
    detail: spiceImg(slug, "applications", "Fennel seeds with a cup of fennel tea", "fennel-seeds-applications.webp"),
    extra: [
      // fennel-seeds-plant.webp — fennel plant fronds, tall crop (9:19).
      spiceImg(slug, "plant", "Feathery fennel plant fronds", "fennel-seeds-plant.webp"),
    ],
  },
  sections: [
    { type: "hero", variant: "elongated" },
    { type: "intro", variant: "statement" },
    { type: "uses", variant: "list" },
    { type: "commercial", variant: "numbered" },
    { type: "specs", variant: "table" },
    { type: "storage" },
    { type: "faq", variant: "center" },
    { type: "contact", variant: "centered" },
  ],
};
