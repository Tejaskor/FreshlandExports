import { powderImg, powderSpecsNote, powdersCategory } from "@/features/agri/content/powders/helpers";
import { spiceFaqs, spiceSpecs } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "clove-powder";

export const clovePowder: AgriProduct = {
  slug,
  name: "Clove Powder",
  category: powdersCategory,
  // Deep cocoa brown and near-black green — rich and dark, on a warm cream.
  theme: { accent: "#6B3A22", deep: "#14301F", tint: "#F7EFE8", soft: "#D9BBA6" },
  hero: {
    eyebrow: "Premium Spice Powders",
    title: "Clove Powder",
    tagline: "Bold aroma, finely ground.",
    body: "Ground whole cloves with a deep, warming aroma, supplied in bulk to spice blenders, bakeries, meat processors and food importers.",
    highlights: ["Ground whole cloves", "Intense aroma", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Clove Powder",
    heading: "All the Clove, None of the Picking Out",
    statement: "The intensity of whole cloves, ready to blend.",
    body: [
      "Clove powder is made by grinding the dried flower buds of the clove tree (Syzygium aromaticum) into a fine, dark brown powder.",
      "Ground cloves disperse evenly through blends, batters and marinades, so there are no whole buds to remove — and a small quantity carries a strong flavour.",
    ],
    highlights: [
      { label: "Botanical", value: "Syzygium aromaticum" },
      { label: "Part", value: "Ground dried bud" },
      { label: "Colour", value: "Dark reddish brown" },
      { label: "Aroma", value: "Warm, sweet, intense" },
      { label: "Flavour", value: "Pungent, slightly numbing" },
      { label: "Form", value: "Fine powder" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "A Little Goes a Long Way",
    items: [
      { title: "Intense Aroma", text: "A strong, sweet and warming fragrance.", icon: "sprout" },
      { title: "Even Dispersion", text: "Spreads evenly through dry mixes and batters.", icon: "layers" },
      { title: "Rich Colour", text: "Dark reddish brown, adding depth to blends.", icon: "target" },
      { title: "Bold Flavour", text: "Pungent, with a lingering warmth.", icon: "flask" },
      { title: "Ready to Use", text: "No grinding or removing whole buds.", icon: "check" },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Ground Cloves at Work",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Spice Blends", items: ["Garam masala", "Ras el hanout", "Pumpkin and mixed spice"] },
      { title: "Bakery", items: ["Spiced cakes", "Biscuits and cookies", "Fruit pies"] },
      { title: "Meats & Sauces", items: ["Marinades and rubs", "Sausages and cured meats", "Ketchups and barbecue sauces"] },
      { title: "Beverages", items: ["Chai blends", "Mulled drink mixes", "Spiced syrups"] },
    ],
  },
  process: {
    eyebrow: "Product Journey",
    heading: "From Bud to Powder",
    steps: [
      { title: "Harvest", text: "Unopened buds are picked from the clove tree." },
      { title: "Drying", text: "Buds are dried until dark and firm." },
      { title: "Cleaning", text: "Stems and foreign matter are removed." },
      { title: "Grinding", text: "Whole cloves are milled to a fine powder." },
      { title: "Packing", text: "Packed to buyer requirements." },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Clove Powder Specifications",
    rows: spiceSpecs(
      "Clove Powder",
      [
        { label: "Appearance", value: "Fine powder" },
        { label: "Colour", value: "Dark reddish brown" },
        { label: "Aroma", value: "Warm, sweet, pungent" },
        { label: "Mesh Size", value: "As per buyer requirements" },
        { label: "Purity & Moisture", value: "To be confirmed", pending: true },
      ],
      {
        form: "Powder",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight",
        applications: "Spice blends, bakery, meats, sauces, beverages",
      },
      slug,
    ),
    note: powderSpecsNote,
  },
  storage: {
    heading: "Hold On to the Oils",
    text: "Grinding exposes clove's aromatic oils, so the powder needs tighter sealing than whole buds.",
    points: ["Airtight, lined packaging", "Store cool and dry", "Protect from light", "Keep away from strong odours"],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Clove Powder Questions",
    items: spiceFaqs("Clove powder", [
      {
        question: "How is clove powder different from whole cloves?",
        answer: "It is made from whole cloves ground to a powder, so it blends evenly and needs no removal after cooking. Ground cloves need tighter packaging to hold their aroma.",
      },
      { question: "Can you supply a specific mesh size?", answer: "Mesh size is agreed with each enquiry, as per buyer requirements." },
      { question: "How is quality specified?", answer: "Purity, moisture and other quality parameters are confirmed with each quotation." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Aromatic Clove Powder",
    body: "Share the mesh, quantity, packaging and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // clove-powder-hero.webp — a mound of dark brown clove powder with a few whole cloves at its edge, on a warm cream surface (diagonal crop).
    hero: powderImg(slug, "hero", "A mound of dark clove powder with whole cloves beside it", "clove-powder-hero.webp"),
    // clove-powder-applications.webp — clove powder in a spoon beside spiced cake and a spice blend (4:3).
    detail: powderImg(
      slug,
      "applications",
      "A spoon of clove powder beside spiced cake and a bowl of mixed spice",
      "clove-powder-applications.webp",
    ),
  },
  sections: [
    { type: "hero", variant: "diagonal" },
    { type: "intro", variant: "overlap" },
    { type: "features", variant: "numbered" },
    { type: "uses", variant: "list" },
    { type: "process" },
    { type: "specs", variant: "tiles" },
    { type: "storage" },
    { type: "faq", variant: "center" },
    { type: "related" },
    { type: "contact", variant: "card" },
  ],
};
