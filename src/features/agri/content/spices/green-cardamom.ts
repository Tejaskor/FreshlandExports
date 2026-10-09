import { spiceFaqs, spiceImg, spiceSpecs, spiceSpecsNote, spicesCategory } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "green-cardamom";

export const greenCardamom: AgriProduct = {
  slug,
  name: "Green Cardamom",
  category: spicesCategory,
  // Soft green, sage and cream — rounded and elegant.
  theme: { accent: "#4E7A3E", deep: "#1E3F2A", tint: "#F1F6EE", soft: "#CFE2C6" },
  hero: {
    eyebrow: "Premium Whole Spices",
    title: "Green Cardamom",
    tagline: "The queen of spices.",
    body: "Whole green cardamom pods with a sweet, floral aroma, for importers, spice processors, food manufacturers and distributors.",
    highlights: ["Whole green pods", "Sweet, floral aroma", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Cardamom",
    heading: "A Fragrant Green Jewel",
    statement: "Sweet, floral and delicately warm.",
    body: [
      "Green cardamom (Elettaria cardamomum) pods hold small, aromatic black seeds with a sweet, floral and slightly minty fragrance.",
      "Prized in both sweet and savoury cooking, it is also central to spiced tea and coffee traditions.",
    ],
    highlights: [
      { label: "Botanical", value: "Elettaria cardamomum" },
      { label: "Form", value: "Whole pods" },
      { label: "Colour", value: "Green" },
      { label: "Aroma", value: "Sweet, floral" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "What Buyers Look For",
    items: [
      { title: "Appearance", text: "Plump, three-sided green pods." },
      { title: "Colour", text: "A fresh green shade, varying by grade." },
      { title: "Aroma", text: "Sweet, floral and slightly minty." },
      { title: "Flavour", text: "Warm and delicate, never harsh." },
      { title: "Main Uses", text: "Desserts, tea, rice dishes and blends." },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Sweet and Savoury",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Tea & Coffee", text: "Crushed into chai and Arabic coffee.", items: ["Masala chai", "Qahwa", "Spiced lattes"] },
      { title: "Desserts", text: "A classic flavour for sweets.", items: ["Kheer", "Cakes", "Pastries"] },
      { title: "Rice & Curries", text: "Whole pods add a fragrant note.", items: ["Biryani", "Pulao", "Korma"] },
      { title: "Spice Blends", text: "A fragrant top note.", items: ["Garam masala", "Baharat"] },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "For Food Businesses",
    items: [
      { title: "Beverage Makers", text: "Flavour for tea blends and coffee." },
      { title: "Confectionery & Bakery", text: "A signature note in sweets and baked goods." },
      { title: "Blend Manufacturers", text: "A premium component of spice mixes." },
      { title: "Distributors & Retail", text: "Whole pods for wholesale and retail packs." },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Green Cardamom Specifications",
    rows: spiceSpecs(
      "Green Cardamom",
      [
        { label: "Appearance", value: "Whole, three-sided pods" },
        { label: "Colour", value: "Green" },
        { label: "Aroma", value: "Sweet, floral" },
        { label: "Pod Size / Grade", value: "To be confirmed", pending: true },
      ],
      {
        form: "Whole pods",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight, away from light",
        applications: "Beverages, desserts, blends",
      },
      slug,
    ),
    note: spiceSpecsNote,
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Cardamom Questions",
    items: spiceFaqs("Green cardamom", [
      { question: "How is cardamom graded?", answer: "Pod size, colour and grade are confirmed with each quotation." },
      { question: "How should cardamom be stored?", answer: "Keep pods whole in airtight packaging, away from heat and light, to preserve the aroma." },
      { question: "Is green cardamom the same as black cardamom?", answer: "No — they are different spices. This page covers green cardamom." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Fragrant Green Cardamom",
    body: "Share the grade, quantity and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // green-cardamom-hero.webp — a round bowl of green cardamom pods (1:1, orbit circle).
    hero: spiceImg(slug, "hero", "Green cardamom pods in a worn brass bowl, seen from above", "green-cardamom-hero.webp"),
    // green-cardamom-applications.webp — cardamom with chai and sweets (4:5, arch).
    detail: spiceImg(slug, "applications", "A cup of masala chai with biscuits, cardamom pods, ginger, cinnamon and cloves on the saucer", "green-cardamom-applications.webp"),
    extra: [
      // green-cardamom-open-pod.webp — an opened pod showing seeds (1:1).
      spiceImg(slug, "open-pod", "Whole and split green cardamom pods with their dark seeds on a white plate", "green-cardamom-open-pod.webp"),
      // green-cardamom-plant.webp — cardamom plant leaves (1:1).
      spiceImg(slug, "plant", "Lush lance-shaped leaves of a cardamom plant", "green-cardamom-plant.webp"),
    ],
  },
  sections: [
    { type: "hero", variant: "orbit" },
    { type: "intro", variant: "split", shape: "arch" },
    { type: "features", variant: "alternating" },
    { type: "uses", variant: "list" },
    { type: "commercial", variant: "numbered" },
    { type: "specs", variant: "sheet" },
    { type: "faq", variant: "center" },
    { type: "contact", variant: "card" },
  ],
};
