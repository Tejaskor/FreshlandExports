import { powderImg, powderSpecsNote, powdersCategory } from "@/features/agri/content/powders/helpers";
import { spiceFaqs, spiceSpecs } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "white-pepper-powder";

export const whitePepperPowder: AgriProduct = {
  slug,
  name: "White Pepper Powder",
  category: powdersCategory,
  // Ivory, warm stone and deep slate green — pale and clean, like the powder.
  theme: { accent: "#8C7A5B", deep: "#22342B", tint: "#FAF7F0", soft: "#E4DCCB" },
  hero: {
    eyebrow: "Premium Spice Powders",
    title: "White Pepper Powder",
    tagline: "Pepper heat, without the specks.",
    body: "Pale, finely ground white pepper for sauce makers, seasoning blenders, food processors and importers who want heat with no dark specks.",
    highlights: ["Pale, fine powder", "Clean pepper heat", "Bulk supply"],
    badge: "Pale • Fine • Export Ready",
    card: { title: "Ground White Pepper", text: "For light-coloured foods" },
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing White Pepper Powder",
    heading: "The Pepper That Stays Out of Sight",
    statement: "All the warmth of pepper, none of the dark flecks.",
    body: [
      "White pepper comes from the same vine as black pepper (Piper nigrum), but the outer skin of the berry is removed before drying, leaving the pale inner seed.",
      "Ground to a fine powder, it gives a clean, sharp heat with an earthy, slightly musky note — the choice for white sauces, creamy soups, mashed potatoes and pale dressings where black specks would show.",
    ],
    highlights: [
      { label: "Botanical", value: "Piper nigrum" },
      { label: "Form", value: "Ground powder" },
      { label: "Colour", value: "Off-white to pale cream" },
      { label: "Aroma", value: "Earthy, slightly musky" },
      { label: "Flavour", value: "Sharp, clean heat" },
      { label: "Made From", value: "Skinned peppercorns" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "Heat in a Lighter Shade",
    items: [
      { title: "Appearance", text: "Fine, free-flowing powder.", icon: "target" },
      { title: "Colour", text: "Off-white to pale cream, with no dark flecks.", icon: "layers" },
      { title: "Aroma", text: "Earthy and slightly musky.", icon: "sprout" },
      { title: "Flavour", text: "Sharp pepper heat with less top-note than black.", icon: "flask" },
      { title: "Grind", text: "Fineness agreed to buyer requirements.", icon: "shield" },
      { title: "Main Uses", text: "Pale sauces, soups, dressings and blends.", icon: "globe" },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Where Black Specks Don't Belong",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Sauces & Dressings", text: "Seasons light-coloured sauces without marking them.", items: ["White sauces", "Cream sauces", "Mayonnaise", "Pale dressings"] },
      { title: "Soups & Mashes", text: "Gentle heat in creamy dishes.", items: ["Cream soups", "Chowders", "Mashed potatoes"] },
      { title: "Asian Cooking", text: "A familiar pepper note across many cuisines.", items: ["Stir-fries", "Hot and sour soup", "Marinades"] },
      { title: "Blends & Seasonings", text: "A base heat in seasoning mixes.", items: ["Seasoning blends", "Snack coatings", "Spice rubs"] },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "For Food Businesses",
    items: [
      { title: "Sauce & Dressing Makers", text: "Pepper heat that keeps pale products visually clean.", icon: "flask" },
      { title: "Seasoning Blenders", text: "A ground base for seasoning mixes and spice blends.", icon: "layers" },
      { title: "Meat, Fish & Ready Meals", text: "Seasoning for processed meats, fish products and prepared meals.", icon: "target" },
      { title: "Food Service & Retail", text: "Ground pepper for kitchens, distributors and retail packs.", icon: "globe" },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "White Pepper Powder Specifications",
    rows: spiceSpecs(
      "White Pepper Powder",
      [
        { label: "Appearance", value: "Fine, free-flowing powder" },
        { label: "Colour", value: "Off-white to pale cream" },
        { label: "Aroma", value: "Earthy, slightly musky" },
        { label: "Mesh / Fineness", value: "As per buyer requirements" },
        { label: "Purity & Moisture", value: "To be confirmed", pending: true },
      ],
      {
        form: "Ground powder",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight, away from light",
        applications: "Sauces, soups, dressings, seasoning blends",
      },
      slug,
    ),
    note: powderSpecsNote,
  },
  storage: {
    heading: "Keep It Pale and Pungent",
    text: "Ground white pepper loses aroma faster than whole berries, and light and damp can dull its colour.",
    points: ["Keep in airtight packaging", "Store cool and dry", "Protect from light", "Reseal opened bags promptly"],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "White Pepper Powder Questions",
    items: spiceFaqs("White pepper powder", [
      { question: "How is white pepper different from black pepper?", answer: "Both come from Piper nigrum. White pepper has the outer skin removed before drying, giving a paler colour and a cleaner, earthier heat." },
      { question: "Can the grind size be specified?", answer: "Yes — share the fineness your process needs and it will be confirmed with the quotation." },
      { question: "How are quality parameters specified?", answer: "Purity, moisture and other parameters are confirmed with each quotation." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source White Pepper Powder",
    body: "Share the fineness, quantity, packaging and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // white-pepper-powder-hero.webp — a heap of fine off-white pepper powder in a pale ceramic bowl, a few whole white peppercorns beside it, on a light linen surface (4:5).
    hero: powderImg(slug, "hero", "A bowl of fine white pepper powder with whole white peppercorns", "white-pepper-powder-hero.webp"),
    // white-pepper-powder-applications.webp — white pepper being dusted over a creamy white sauce or soup, no dark specks visible (4:3).
    detail: powderImg(slug, "applications", "White pepper powder dusted over a creamy soup", "white-pepper-powder-applications.webp"),
  },
  sections: [
    { type: "hero", variant: "editorial" },
    { type: "intro", variant: "split", shape: "pill" },
    { type: "features", variant: "bento" },
    { type: "uses", variant: "columns" },
    { type: "commercial", variant: "alternating" },
    { type: "specs", variant: "sheet" },
    { type: "storage" },
    { type: "faq", variant: "center" },
    { type: "related" },
    { type: "contact", variant: "centered" },
  ],
};
