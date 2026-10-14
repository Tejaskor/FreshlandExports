import { powderSpecsNote, powdersCategory } from "@/features/agri/content/powders/helpers";
import { spiceFaqs, spiceSpecs } from "@/features/agri/content/spices/helpers";
import type { AgriProduct, ImageSlotData } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "black-pepper-powder";

/**
 * Photography in public/images/products/Black pepper powder/. Three files
 * end in "..webp" on disk; they are referenced exactly as named.
 */
function img(file: string, alt: string, label: string, position?: string): ImageSlotData {
  return { file: `/images/products/Black pepper powder/${file}`, alt, label, ...(position && { position }) };
}

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
    compact: true,
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
      {
        title: "Table & Kitchen",
        text: "Seasoning at the table and at the stove.",
        items: ["Table pepper", "Eggs", "Salads"],
        image: img("black-pepper-seasoning-pasta.webp", "A bowl of creamy pasta finished with grated cheese and ground black pepper", "Pepper on pasta"),
      },
      {
        title: "Soups & Sauces",
        text: "Warmth for rich, creamy dishes.",
        items: ["Pepper sauce", "Soups", "Gravies"],
        image: img("black-pepper-application-soup.webp", "A bowl of creamy soup dusted with ground black pepper and topped with parsley", "Pepper in soup"),
      },
      {
        title: "Marinades & Rubs",
        text: "Mixed with salt and herbs for meats and vegetables.",
        items: ["Steak rubs", "Marinades", "Roasts"],
        image: img("black-pepper-application-meat.webp", "A sliced, pepper-crusted roast beef on a board with roasted vegetables", "Pepper-crusted meat"),
      },
      {
        title: "Spice Blends",
        text: "A base note in many masalas.",
        items: ["Garam masala", "Rasam powder", "Curry blends"],
        image: img("black-pepper-ready-meals.webp", "Roasted broccoli, peppers and potatoes coated in a black pepper spice seasoning", "Pepper seasoning"),
      },
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
    // Hero banner (wide collage): 21:10 from a 2.46:1 photograph, kept on the bowl of ground pepper.
    hero: img(
      "black-pepper-hero.webp",
      "Ground black pepper heaped in a wooden bowl beside a scoop of whole peppercorns and pepper vine leaves",
      "Black pepper powder",
      "70% 50%",
    ),
    // The introduction's photograph: where the peppercorns come from.
    detail: img(
      "black-pepper-plantation.webp",
      "Long clusters of green and ripening red peppercorns hanging among the leaves of a black pepper vine",
      "Black pepper vine",
    ),
    // A 16:10 frame from a 3:1 photograph, kept on the pepper mound.
    specs: img(
      "black-pepper-specifications.webp",
      "A mound of ground black pepper beside a wooden scoop of whole peppercorns",
      "Black pepper specifications",
      "62% 50%",
    ),
    extra: [
      img(
        "black-pepper-whole-peppercorns..webp",
        "A wooden bowl of whole black peppercorns in front of green pepper leaves",
        "Whole peppercorns",
      ),
      img(
        "black-pepper-ground-closeup.webp",
        "Ground black pepper in a wooden scoop beside whole peppercorns",
        "Ground pepper close-up",
      ),
    ],
  },
  caseStudyImages: {
    "choosing-whole-or-ground-pepper": img(
      "case-study-black-pepper.webp",
      "A wooden bowl of whole black peppercorns on hessian, with more peppercorns scattered on the table",
      "Whole black pepper",
    ),
    // Its default card photo is the whole Black Pepper catalogue shot, which
    // the related products row already shows; this one fits its topic
    // (grind and microbiological requirements for meat products).
    "black-pepper-for-meat-and-savoury-seasoning": img(
      "black-pepper-quality-check.webp",
      "A gloved hand taking a sample of ground black pepper from a glass dish beside whole peppercorns",
      "Quality sampling",
    ),
  },
  sections: [
    { type: "hero", variant: "collage", wide: true },
    { type: "intro", variant: "split", shape: "leaf" },
    { type: "features", variant: "alternating" },
    { type: "uses", variant: "gallery" },
    { type: "commercial", variant: "band", columns: 4 },
    { type: "specs", variant: "table" },
    { type: "storage" },
    { type: "faq", variant: "center" },
    { type: "related" },
    { type: "contact", variant: "band" },
  ],
};
