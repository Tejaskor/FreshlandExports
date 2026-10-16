import { powderSpecsNote, powdersCategory } from "@/features/agri/content/powders/helpers";
import { spiceFaqs, spiceSpecs } from "@/features/agri/content/spices/helpers";
import type { AgriProduct, ImageSlotData } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "white-pepper-powder";

/** Photography in public/images/products/White Pepper powder/. */
function img(file: string, alt: string, label: string, position?: string): ImageSlotData {
  return { file: `/images/products/White Pepper powder/${file}`, alt, label, ...(position && { position }) };
}

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
    heading: "Where White Pepper Works Best",
    intro: "White pepper powder adds a warm, earthy heat to sauces, soups, seasonings and food preparations where a lighter appearance is preferred.",
    groups: [
      { title: "Sauces & Dressings", text: "Adds gentle pepper heat without prominent black specks.", items: ["White sauces", "Cream sauces", "Mayonnaise", "Salad dressings"] },
      { title: "Soups & Mashed Dishes", text: "Brings balanced warmth to smooth, creamy preparations.", items: ["Cream soups", "Chowders", "Mashed potatoes", "Cream-based gravies"] },
      { title: "Asian Cuisine", text: "A familiar peppery note in a variety of Asian dishes.", items: ["Stir-fries", "Hot and sour soup", "Noodle dishes", "Marinades"] },
      { title: "Blends & Seasonings", text: "A versatile ingredient for food manufacturing and seasoning blends.", items: ["Spice blends", "Snack seasonings", "Soup mixes", "Ready-to-cook seasonings"] },
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
    // A 16:10 frame from a 2:1 photograph, centred on the bowl.
    hero: img(
      "white-pepper-powder-hero.webp",
      "A mound of off-white ground white pepper in a speckled ceramic bowl on a wooden board, with whole white peppercorns scattered on linen",
      "White pepper powder",
    ),
    // The introduction's pill (3:5) from a 2:3 portrait, kept on the mound.
    detail: img(
      "white-pepper-powder-texture-close-up.webp",
      "Close-up of fine, pale cream white pepper powder heaped beside whole white peppercorns",
      "White pepper texture",
      "60% 50%",
    ),
    // Fills the last row of the highlights grid; kept on the powder's colour and grain.
    features: img(
      "white-pepper-powder-quality-appearance.webp",
      "A stoneware bowl of pale, fine white pepper powder on a rustic wooden table, with whole white peppercorns beside it",
      "White pepper appearance",
      "45% 40%",
    ),
    // Banner above the culinary application cards.
    uses: img(
      "white-pepper-powder-culinary-applications.webp",
      "A bowl of smooth cream soup seasoned with ground white pepper and a parsley leaf, with whole white peppercorns on the table",
      "White pepper in cream soup",
      "50% 45%",
    ),
    // Wide (3:1) banner above the MOQ panel.
    moq: img(
      "white-peppercorns-bulk-export-packaging.webp",
      "Open jute sacks of whole white peppercorns in a warehouse, with a metal scoop of peppercorns in front",
      "White pepper in bulk",
      "60% 55%",
    ),
  },
  caseStudyImages: {
    // Its default card photo is the catalogue shot; this one fits its topic
    // (white pepper in pale sauce production).
    "white-pepper-and-allium-powders-for-pale-sauces": img(
      "white-pepper-powder-food-processing.webp",
      "Ground white pepper being poured from a wooden scoop into a stainless-steel vessel in a food processing plant",
      "White pepper in food processing",
    ),
    // Its default card photo shows black pepper; this one shows whole white
    // peppercorns being cleaned and sieved for a processing line.
    "choosing-whole-or-ground-pepper": img(
      "white-peppercorns-cleaning-and-sieving.webp",
      "Whole white peppercorns falling through a stainless-steel sieve onto a wooden surface",
      "Cleaning and sieving white peppercorns",
    ),
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
