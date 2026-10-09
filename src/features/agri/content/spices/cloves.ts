import { spiceFaqs, spiceImg, spiceSpecs, spiceSpecsNote, spicesCategory } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "cloves";

export const cloves: AgriProduct = {
  slug,
  name: "Cloves",
  category: spicesCategory,
  // Warm brown, deep green and cream — rich and warm.
  theme: { accent: "#7A4526", deep: "#173A28", tint: "#F6F0EA", soft: "#DCC4B0" },
  hero: {
    eyebrow: "Premium Whole Spices",
    title: "Cloves",
    tagline: "Intensely aromatic, warmly sweet.",
    body: "Whole dried cloves with a rich, warming aroma, for spice processors, food manufacturers, importers and distributors.",
    highlights: ["Whole dried buds", "Rich aroma", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Cloves",
    heading: "Tiny Buds, Powerful Aroma",
    statement: "Warm, sweet and intensely fragrant.",
    body: [
      "Cloves (Syzygium aromaticum) are the dried flower buds of an evergreen tree, with a distinctive nail-like shape.",
      "Their warm, sweet and pungent aroma features in spice blends, baking, meat dishes and hot drinks.",
    ],
    highlights: [
      { label: "Botanical", value: "Syzygium aromaticum" },
      { label: "Part", value: "Dried flower bud" },
      { label: "Colour", value: "Reddish to dark brown" },
      { label: "Aroma", value: "Warm, sweet" },
      { label: "Flavour", value: "Pungent, slightly numbing" },
      { label: "Form", value: "Whole" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "A Spice of Character",
    items: [
      { title: "Intense Aroma", text: "A warm, sweet and deeply spiced fragrance.", icon: "sprout" },
      { title: "Appearance", text: "Nail-shaped buds with a rounded head.", icon: "target" },
      { title: "Colour", text: "Reddish to dark brown.", icon: "layers" },
      { title: "Flavour", text: "Pungent with a lingering warmth.", icon: "flask" },
      { title: "Main Uses", text: "Blends, baking, meats and beverages.", icon: "globe" },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Warming Every Dish",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Spice Blends", items: ["Garam masala", "Five-spice", "Pickling spice"] },
      { title: "Rice & Meats", items: ["Biryani", "Glazed ham", "Curries"] },
      { title: "Baking", items: ["Spiced cakes", "Cookies", "Fruit pies"] },
      { title: "Beverages", items: ["Mulled drinks", "Chai", "Spiced cider"] },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "For Industry",
    items: [
      { title: "Blend Manufacturers", text: "An essential note in masalas and spice mixes.", icon: "flask" },
      { title: "Bakery & Confectionery", text: "Warm spice for seasonal products.", icon: "sprout" },
      { title: "Meat Processing", text: "Flavour for cured and processed meats.", icon: "layers" },
      { title: "Beverage Makers", text: "For spiced teas and seasonal drinks.", icon: "globe" },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Clove Specifications",
    rows: spiceSpecs(
      "Cloves",
      [
        { label: "Appearance", value: "Whole, nail-shaped buds" },
        { label: "Colour", value: "Reddish to dark brown" },
        { label: "Aroma", value: "Warm, sweet, pungent" },
        { label: "Grade", value: "To be confirmed", pending: true },
      ],
      {
        form: "Whole cloves",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight",
        applications: "Blends, baking, meats, beverages",
      },
      slug,
    ),
    note: spiceSpecsNote,
  },
  storage: {
    heading: "Preserving the Oils",
    text: "Cloves keep their aroma best when sealed and kept cool.",
    points: ["Airtight packaging", "Cool, dry storage", "Protect from light", "Keep away from moisture"],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Clove Questions",
    items: spiceFaqs("Cloves", [
      { question: "Do you supply ground cloves?", answer: "This page covers whole cloves; other forms can be discussed with our team." },
      { question: "How is quality specified?", answer: "Grade and quality parameters are confirmed with each quotation." },
      { question: "How should cloves be stored?", answer: "In airtight packaging in a cool, dry place, protected from light and moisture." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Aromatic Cloves",
    body: "Share the grade, quantity and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // cloves-hero.webp — whole cloves scattered across a wide warm surface (21:8, panoramic).
    hero: spiceImg(slug, "hero", "A dense spread of whole dried cloves filling the frame", "cloves-hero.webp"),
    // cloves-culinary-use.webp — cloves with cinnamon and star anise for mulled drinks (16:10).
    detail: spiceImg(slug, "culinary-use", "Mulled wine with orange slices, a cinnamon stick, star anise, cardamom and cloves floating in the pot", "cloves-culinary-use.webp"),
  },
  sections: [
    { type: "hero", variant: "panoramic" },
    { type: "intro", variant: "statement" },
    { type: "features", variant: "bento" },
    { type: "uses", variant: "columns" },
    { type: "commercial", variant: "band" },
    { type: "specs", variant: "table" },
    { type: "storage" },
    { type: "faq", variant: "split" },
    { type: "contact", variant: "band" },
  ],
};
