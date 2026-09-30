import { spiceFaqs, spiceImg, spiceSpecs, spiceSpecsNote, spicesCategory } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "black-pepper";

export const blackPepper: AgriProduct = {
  slug,
  name: "Black Pepper",
  category: spicesCategory,
  // Charcoal, warm grey and forest green — dark and refined.
  theme: { accent: "#5B5F57", deep: "#1E2321", tint: "#F3F2EF", soft: "#D2D0C9" },
  hero: {
    eyebrow: "Premium Whole Spices",
    title: "Black Pepper",
    tagline: "The king of spices.",
    body: "Whole black peppercorns with a sharp, woody aroma, for spice processors, importers, food manufacturers and distributors.",
    highlights: ["Whole peppercorns", "Bold, pungent aroma", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Black Pepper",
    heading: "Small Berries, Big Character",
    statement: "Sharp, woody and endlessly useful.",
    body: [
      "Black pepper (Piper nigrum) is the dried unripe berry of a flowering vine, prized for its pungent heat and aromatic depth.",
      "It is among the most widely traded spices, used whole, cracked and ground in kitchens and food production worldwide.",
    ],
    highlights: [
      { label: "Botanical", value: "Piper nigrum" },
      { label: "Form", value: "Whole peppercorns" },
      { label: "Colour", value: "Dark brown to black" },
      { label: "Flavour", value: "Pungent, woody" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "A Refined Spice",
    items: [
      { title: "Appearance", text: "Round, wrinkled peppercorns.", icon: "target" },
      { title: "Colour", text: "Dark brown to black.", icon: "layers" },
      { title: "Aroma", text: "Sharp, woody and warm.", icon: "sprout" },
      { title: "Flavour", text: "Pungent heat with depth.", icon: "flask" },
      { title: "Texture", text: "Hard, dry berries for cracking and grinding.", icon: "shield" },
      { title: "Main Uses", text: "Seasoning, blends and food processing.", icon: "globe" },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "On Every Table",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Seasoning", text: "Freshly ground at the table and in the kitchen.", items: ["Table pepper", "Finishing", "Grills"] },
      { title: "Marinades & Rubs", text: "Cracked for texture and heat.", items: ["Steak rubs", "Marinades", "Crusts"] },
      { title: "Sauces & Soups", text: "Adds warmth to rich dishes.", items: ["Pepper sauce", "Soups", "Gravies"] },
      { title: "Spice Blends", text: "A base note in many masalas.", items: ["Garam masala", "Curry blends"] },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "For Food Businesses",
    items: [
      { title: "Spice Grinders", text: "Whole peppercorns for grinding and cracking." },
      { title: "Seasoning Manufacturers", text: "A core ingredient in seasoning blends." },
      { title: "Meat & Snack Processing", text: "Flavour for processed meats and snacks." },
      { title: "Food Service & Retail", text: "Whole pepper for kitchens and retail packs." },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Black Pepper Specifications",
    rows: spiceSpecs(
      "Black Pepper",
      [
        { label: "Appearance", value: "Round, wrinkled peppercorns" },
        { label: "Colour", value: "Dark brown to black" },
        { label: "Aroma", value: "Sharp, woody" },
        { label: "Grade / Density", value: "To be confirmed", pending: true },
      ],
      {
        form: "Whole peppercorns",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight",
        applications: "Seasoning, blends, food processing",
      },
    ),
    note: spiceSpecsNote,
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Black Pepper Questions",
    items: spiceFaqs("Black pepper", [
      { question: "Do you supply whole or ground pepper?", answer: "This page covers whole peppercorns; other forms can be discussed with our team." },
      { question: "How is grade specified?", answer: "Grade and quality parameters are confirmed with each quotation." },
      { question: "How should peppercorns be stored?", answer: "In airtight packaging in a cool, dry place, away from light." },
    ]),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Black Pepper",
    body: "Tell us the grade, quantity and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // black-pepper-hero.webp — peppercorns in a dark bowl on charcoal (4:5).
    hero: spiceImg(slug, "hero", "Black peppercorns in a dark bowl", "black-pepper-hero.webp"),
    // black-pepper-culinary-use.webp — cracked pepper over a grilled dish (16:10).
    detail: spiceImg(slug, "culinary-use", "Cracked black pepper over a grilled dish", "black-pepper-culinary-use.webp"),
    extra: [
      // black-pepper-vine.webp — green pepper berries on the vine (1:1).
      spiceImg(slug, "vine", "Pepper berries growing on the vine", "black-pepper-vine.webp"),
    ],
  },
  sections: [
    { type: "hero", variant: "duo" },
    { type: "intro", variant: "overlap" },
    { type: "features", variant: "band" },
    { type: "uses", variant: "list" },
    { type: "commercial", variant: "numbered" },
    { type: "specs", variant: "tiles" },
    { type: "faq", variant: "split" },
    { type: "contact", variant: "band" },
  ],
};
