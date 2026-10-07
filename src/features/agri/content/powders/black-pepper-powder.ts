import { powderImg, powderSpecsNote, powdersCategory } from "@/features/agri/content/powders/helpers";
import { spiceFaqs, spiceSpecs } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "black-pepper-powder";

export const blackPepperPowder: AgriProduct = {
  slug,
  name: "Black Pepper Powder",
  category: powdersCategory,
  // Warm charcoal and stone grey on a near-black green ground.
  theme: { accent: "#4E4A42", deep: "#18221C", tint: "#F5F3EF", soft: "#D4CFC4" },
  hero: {
    eyebrow: "Premium Spice Powders",
    title: "Black Pepper Powder",
    tagline: "Sharp, warm, finely ground.",
    body: "Ground black pepper with a sharp, woody bite, supplied in bulk to seasoning makers, meat and snack processors, importers and food service buyers.",
    highlights: ["Ground peppercorns", "Grind as required", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Black Pepper Powder",
    heading: "Pepper, Ready to Use",
    statement: "Pungent heat and woody depth in every pinch.",
    body: [
      "Black pepper powder is ground from dried black peppercorns (Piper nigrum), the unripe berries of a flowering vine, giving a ready-to-use spice with a sharp, warming bite.",
      "Ground pepper saves processors a milling step and blends evenly into seasonings, sauces and prepared foods, from fine table grinds to coarser cracked textures.",
    ],
    highlights: [
      { label: "Botanical", value: "Piper nigrum" },
      { label: "Form", value: "Ground powder" },
      { label: "Colour", value: "Greyish brown to dark" },
      { label: "Flavour", value: "Pungent, woody" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "Ground for Consistency",
    items: [
      { title: "Aroma", text: "Sharp, woody and warm — best kept by sealed packing soon after grinding.", icon: "sprout" },
      { title: "Colour", text: "Greyish brown to dark, flecked with lighter particles.", icon: "layers" },
      { title: "Grind", text: "Fine or coarse, agreed with the buyer.", icon: "target" },
      { title: "Flavour", text: "Pungent heat with depth.", icon: "flask" },
      { title: "Main Uses", text: "Seasonings, meats, sauces and snacks.", icon: "globe" },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "A Pinch Everywhere",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Table & Kitchen", text: "Seasoning at the table and at the stove.", items: ["Table pepper", "Eggs", "Salads"] },
      { title: "Soups & Sauces", text: "Warmth for rich, creamy dishes.", items: ["Pepper sauce", "Soups", "Gravies"] },
      { title: "Marinades & Rubs", text: "Mixed with salt and herbs for meats and vegetables.", items: ["Steak rubs", "Marinades", "Roasts"] },
      { title: "Spice Blends", text: "A base note in many masalas.", items: ["Garam masala", "Rasam powder", "Curry blends"] },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "Pepper for Production",
    items: [
      { title: "Seasoning Manufacturers", text: "A core ingredient in savoury seasoning and rub blends." },
      { title: "Meat & Ready Meals", text: "Ground pepper for sausages, processed meats and prepared dishes." },
      { title: "Snacks & Sauces", text: "Heat and aroma for snack dustings, dressings and condiments." },
      { title: "Importers & Food Service", text: "Bulk ground pepper for repacking, distributors and kitchens." },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Black Pepper Powder Specifications",
    rows: spiceSpecs(
      "Black Pepper Powder",
      [
        { label: "Appearance", value: "Fine to coarse ground powder" },
        { label: "Colour", value: "Greyish brown to dark" },
        { label: "Aroma", value: "Sharp, woody" },
        { label: "Purity & Moisture", value: "To be confirmed", pending: true },
        { label: "Grind Size", value: "As per buyer requirements" },
      ],
      {
        form: "Ground powder, fine or coarse",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight",
        applications: "Seasonings, meat products, sauces, snacks",
      },
      slug,
    ),
    note: powderSpecsNote,
  },
  storage: {
    heading: "Holding On to Aroma",
    text: "Grinding exposes pepper's aromatic oils, so ground pepper loses its bite faster than whole peppercorns.",
    points: ["Keep in airtight, lined packaging", "Store cool and dry", "Protect from light and heat", "Keep away from strong odours"],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Black Pepper Powder Questions",
    items: spiceFaqs("Black pepper powder", [
      { question: "Can you supply a coarse grind?", answer: "Yes — fine and coarse grinds can be discussed, and the grind is confirmed with each enquiry." },
      { question: "How are quality parameters specified?", answer: "Purity, moisture and other parameters are confirmed with each quotation." },
      { question: "Do you also supply whole peppercorns?", answer: "Yes — whole black pepper is available; see our Black Pepper page or ask our team." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Ground Black Pepper",
    body: "Share the grind, quantity, packaging and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // black-pepper-powder-hero.webp — a mound of ground black pepper in a dark stone bowl, a few whole peppercorns scattered on charcoal slate (4:5).
    hero: powderImg(slug, "hero", "Ground black pepper in a dark stone bowl", "black-pepper-powder-hero.webp"),
    // black-pepper-powder-applications.webp — ground pepper being dusted over a creamy soup and a grilled dish (16:10).
    detail: powderImg(slug, "applications", "Ground black pepper over a soup and a grilled dish", "black-pepper-powder-applications.webp"),
    extra: [
      // black-pepper-powder-texture.webp — close-up of fine ground pepper beside a coarse cracked grind (1:1).
      powderImg(slug, "texture", "Fine and coarse ground black pepper side by side", "black-pepper-powder-texture.webp"),
      // black-pepper-powder-seasoning.webp — ground pepper mixed with salt and herbs as a rub (1:1).
      powderImg(slug, "seasoning", "Ground black pepper mixed into a seasoning rub", "black-pepper-powder-seasoning.webp"),
    ],
  },
  sections: [
    { type: "hero", variant: "collage" },
    { type: "intro", variant: "statement" },
    { type: "features", variant: "bento" },
    { type: "uses", variant: "gallery" },
    { type: "commercial", variant: "band" },
    { type: "specs", variant: "table" },
    { type: "storage" },
    { type: "faq", variant: "center" },
    { type: "related" },
    { type: "contact", variant: "split" },
  ],
};
