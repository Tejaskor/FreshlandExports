import { spiceFaqs, spiceImg, spiceSpecs, spiceSpecsNote, spicesCategory } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy. Psyllium is described
// as a raw material and food ingredient only: no health or medical claims.
const slug = "psyllium-seed";

export const psylliumSeed: AgriProduct = {
  slug,
  name: "Psyllium Seed",
  category: spicesCategory,
  // Muted rose-taupe, dark pine and pale oat — the seed and its pale husk.
  theme: { accent: "#86675A", deep: "#22382C", tint: "#F8F3EE", soft: "#DECCC2" },
  hero: {
    eyebrow: "Premium Whole Spices",
    title: "Psyllium Seed",
    tagline: "The raw material behind psyllium husk.",
    body: "Whole psyllium (isabgol) seed for husk processors, fibre ingredient makers, food manufacturers and importers, cleaned and packed to buyer requirements.",
    highlights: ["Whole isabgol seed", "For husk processing", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Psyllium",
    heading: "A Seed Valued for Its Husk",
    statement: "Small, glossy seeds wrapped in a pale, gel-forming husk.",
    body: [
      "Psyllium (Plantago ovata), known in India as isabgol, is grown for its small, boat-shaped seeds, each enclosed in a thin, translucent husk.",
      "Whole seed is traded mainly as the raw material for psyllium husk and husk powder, and also finds use in food, bakery and fibre ingredient applications.",
    ],
    highlights: [
      { label: "Botanical", value: "Plantago ovata" },
      { label: "Local Name", value: "Isabgol" },
      { label: "Shape", value: "Small, boat-shaped" },
      { label: "Colour", value: "Pinkish grey to brown" },
      { label: "Aroma", value: "Neutral" },
      { label: "Form", value: "Whole seed" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "What Buyers Look For",
    items: [
      { title: "Appearance", text: "Small, oval, boat-shaped seeds with a smooth surface.", icon: "target" },
      { title: "Husk", text: "A thin, pale husk that swells and turns gel-like in water.", icon: "layers" },
      { title: "Neutral Taste", text: "Mild and almost odourless, so it blends easily.", icon: "flask" },
      { title: "Cleaning", text: "Cleaned to remove dust, stones and plant matter.", icon: "shield" },
      { title: "Processing Feedstock", text: "Supplied whole for milling into husk and powder.", icon: "sprout" },
    ],
  },
  uses: {
    eyebrow: "Applications",
    heading: "Where Psyllium Seed Goes",
    intro: "Temporary overview — replace with final applications.",
    groups: [
      { title: "Husk Processing", text: "The main use of whole seed.", items: ["Psyllium husk", "Husk powder", "Graded husk"] },
      { title: "Bakery", text: "Valued for its binding, gel-forming husk.", items: ["Breads", "Gluten-free bakes", "Crackers"] },
      { title: "Food Products", text: "Used as a fibre ingredient.", items: ["Breakfast cereals", "Snack bars", "Drink mixes"] },
      { title: "Traditional Use", text: "Sold whole in some markets.", items: ["Retail packs", "Ethnic grocery"] },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "Who Buys Whole Psyllium",
    items: [
      { title: "Husk Processors", text: "Whole seed for dehusking, sifting and grading.", icon: "layers" },
      { title: "Fibre Ingredient Makers", text: "Raw material for husk and powder ingredients.", icon: "flask" },
      { title: "Bakery & Food Manufacturers", text: "For binding and fibre in finished foods.", icon: "sprout" },
      { title: "Importers & Distributors", text: "Bulk lots packed for onward trade.", icon: "globe" },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Psyllium Seed Specifications",
    rows: spiceSpecs(
      "Psyllium Seed",
      [
        { label: "Botanical Name", value: "Plantago ovata" },
        { label: "Appearance", value: "Small, boat-shaped whole seeds" },
        { label: "Colour", value: "Pinkish grey to brown" },
        { label: "Purity & Moisture", value: "To be confirmed", pending: true },
      ],
      {
        form: "Whole seed",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, protected from moisture",
        applications: "Husk processing, bakery, food and fibre ingredients",
      },
      slug,
    ),
    note: spiceSpecsNote,
  },
  storage: {
    heading: "Keep Moisture Out",
    text: "Psyllium's husk absorbs water readily, so dry handling matters from store to container.",
    points: ["Lined or moisture-resistant bags", "Cool, dry, ventilated store", "Stack off the floor on pallets", "Keep away from humidity"],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Psyllium Seed Questions",
    items: spiceFaqs("Psyllium seed", [
      { question: "Do you supply psyllium husk?", answer: "This page covers whole seed; husk and husk powder can be discussed with our team." },
      { question: "How are purity and moisture specified?", answer: "Purity, moisture and other quality parameters are confirmed with each quotation." },
      { question: "Can it be labelled with health claims?", answer: "Labelling and any claims depend on the rules of the destination market; buyers should confirm them with their local regulator." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Psyllium Seed",
    body: "Share the quantity, packaging and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // psyllium-seed-hero.webp — a heap of whole pinkish-grey psyllium seeds in a ceramic bowl on pale oat linen, tall crop (5:6).
    hero: spiceImg(slug, "hero", "Whole psyllium seeds in a ceramic bowl", "psyllium-seed-hero.webp"),
    // psyllium-seed-applications.webp — whole psyllium seed beside a bowl of pale husk and a loaf of seeded bread (4:3).
    detail: spiceImg(slug, "applications", "Whole psyllium seed beside psyllium husk and a loaf of bread", "psyllium-seed-applications.webp"),
  },
  sections: [
    { type: "hero", variant: "diagonal", reverse: true },
    { type: "intro", variant: "overlap" },
    { type: "features", variant: "numbered" },
    { type: "uses", variant: "list" },
    { type: "commercial", variant: "bento" },
    { type: "specs", variant: "table" },
    { type: "storage" },
    { type: "faq", variant: "split" },
    { type: "related" },
    { type: "contact", variant: "band" },
  ],
};
