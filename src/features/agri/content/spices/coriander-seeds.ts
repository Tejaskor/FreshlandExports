import { spiceFaqs, spiceImg, spiceSpecs, spiceSpecsNote, spicesCategory } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy. Forms, cleaning and
// packaging follow the existing Coriander Seeds catalogue entry.
const slug = "coriander-seeds";

export const corianderSeeds: AgriProduct = {
  slug,
  name: "Coriander Seeds",
  category: spicesCategory,
  // Muted olive and sage — fresh, botanical and spacious.
  theme: { accent: "#6A6F2E", deep: "#2B3B22", tint: "#F5F4EA", soft: "#DADBB8" },
  hero: {
    eyebrow: "Premium Whole Spices",
    title: "Coriander Seeds",
    tagline: "Citrus-bright and gently warm.",
    body: "Machine-cleaned whole and split coriander seeds for spice processors, blend manufacturers, importers and distributors.",
    highlights: ["Whole & split seeds", "Machine-cleaned", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Coriander",
    heading: "A Gentle, Citrus-Warm Spice",
    statement: "Mild, fragrant and wonderfully versatile.",
    body: [
      "Coriander (Coriandrum sativum) seeds are round and ribbed, with a mild, lemony, slightly sweet aroma.",
      "Whole, split or ground, they are a foundation of curry blends, pickling spices and baking around the world.",
    ],
    highlights: [
      { label: "Botanical", value: "Coriandrum sativum" },
      { label: "Shape", value: "Round, ribbed" },
      { label: "Colour", value: "Straw to light brown" },
      { label: "Aroma", value: "Citrusy, sweet" },
    ],
  },
  features: { eyebrow: "", heading: "", items: [] },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Around the Kitchen",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Curry Blends", items: ["Curry powder", "Masalas"], image: spiceImg(slug, "culinary-use", "Coriander seeds with a spice blend", "coriander-seeds-culinary-use.webp") },
      { title: "Pickling", items: ["Pickling spice", "Brines"], image: spiceImg(slug, "use-pickling", "Pickles with coriander seeds", "coriander-seeds-use-pickling.webp") },
      { title: "Baking", items: ["Breads", "Biscuits"], image: spiceImg(slug, "use-baking", "Bread topped with coriander seeds", "coriander-seeds-use-baking.webp") },
      { title: "Rubs & Marinades", items: ["Spice rubs", "Marinades"], image: spiceImg(slug, "use-rubs", "Crushed coriander in a spice rub", "coriander-seeds-use-rubs.webp") },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "For Industry",
    items: [
      { title: "Blend Manufacturers", text: "A high-volume base for curry powders and seasonings.", icon: "flask" },
      { title: "Spice Grinders", text: "Whole seeds for grinding into coriander powder.", icon: "layers" },
      { title: "Food Processing", text: "Flavour for sauces, sausages and ready meals.", icon: "sprout" },
      { title: "Distributors", text: "Whole and split seeds for wholesale spice markets.", icon: "globe" },
      { title: "Bakeries", text: "Seeds for breads and savoury baked goods.", icon: "users" },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Coriander Seed Specifications",
    rows: spiceSpecs(
      "Coriander Seeds",
      [
        { label: "Appearance", value: "Round, ribbed seeds" },
        { label: "Colour", value: "Straw to light brown" },
        { label: "Aroma", value: "Citrusy, sweet" },
        { label: "Grade & Moisture", value: "To be confirmed", pending: true },
      ],
      {
        form: "Whole, split; ground on request",
        packaging: "PP or jute bags; lined paper bags; custom packing on request",
        storage: "Cool, dry, airtight",
        applications: "Blends, pickling, baking",
      },
    ),
    note: spiceSpecsNote,
  },
  storage: {
    heading: "Keep the Fragrance",
    text: "Coriander's citrus notes are best kept sealed and cool.",
    points: ["Airtight packaging", "Cool, dry storage", "Away from sunlight", "Away from strong odours"],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Coriander Questions",
    items: spiceFaqs("Coriander seeds", [
      { question: "Do you supply split coriander?", answer: "Yes — whole and split seeds are available, with ground coriander on request." },
      { question: "How are the seeds cleaned?", answer: "Seeds are machine-cleaned, with sortex cleaning available on request." },
      { question: "What does coriander seed taste like?", answer: "Mild, warm and citrusy, with a gentle sweetness — quite different from the fresh coriander leaf." },
    ]),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Fragrant Coriander",
    body: "Share the form, quantity and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // coriander-seeds-hero.webp — coriander seeds spilling from a bowl (5:6, diagonal crop).
    hero: spiceImg(slug, "hero", "Coriander seeds spilling from a bowl", "coriander-seeds-hero.webp"),
    detail: spiceImg(slug, "detail", "Close-up of round coriander seeds", "coriander-seeds-detail.webp"),
    // Existing 300 px catalogue photograph, used only in a small circle.
    thumb: "/images/products/coriander-seeds.webp",
  },
  sections: [
    { type: "hero", variant: "diagonal" },
    { type: "intro", variant: "split", shape: "circle", reverse: true },
    { type: "uses", variant: "gallery" },
    { type: "commercial", variant: "bento" },
    { type: "specs", variant: "tiles" },
    { type: "storage" },
    { type: "faq", variant: "split" },
    { type: "contact", variant: "centered" },
  ],
};
