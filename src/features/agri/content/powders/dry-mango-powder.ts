import { powderImg, powderSpecsNote, powdersCategory } from "@/features/agri/content/powders/helpers";
import { spiceFaqs, spiceSpecs } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "dry-mango-powder";

export const dryMangoPowder: AgriProduct = {
  slug,
  name: "Dry Mango Powder",
  category: powdersCategory,
  // Pale olive-gold and soft straw — the colour of amchur — on a deep green.
  theme: { accent: "#877637", deep: "#203F2B", tint: "#FAF7E8", soft: "#E5DCAE" },
  hero: {
    eyebrow: "Premium Spice Powders",
    title: "Dry Mango Powder",
    tagline: "Tangy, fruity, unmistakably amchur.",
    body: "Amchur ground from dried unripe green mango, bringing a sharp, fruity sourness to masalas, chaats, chutneys and processed foods worldwide.",
    highlights: ["Unripe green mango", "Tangy and sour", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Amchur",
    heading: "Sourness Without the Liquid",
    statement: "The bright tang of green mango, dried and ground.",
    body: [
      "Dry mango powder, known in India as amchur, is made from unripe green mangoes (Mangifera indica) that are peeled, sliced, dried and ground into a fine powder.",
      "It adds a sharp, fruity sourness to food without adding moisture, which makes it valuable wherever a dry souring agent is needed — from chaat masala and tandoori blends to snack seasonings and chutneys.",
    ],
    highlights: [
      { label: "Botanical", value: "Mangifera indica" },
      { label: "Made From", value: "Dried unripe mango slices" },
      { label: "Colour", value: "Pale beige to light brown" },
      { label: "Aroma", value: "Fruity, tangy" },
      { label: "Flavour", value: "Sour, slightly sweet" },
      { label: "Form", value: "Fine powder" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "A Dry Souring Agent",
    items: [
      { title: "Appearance", text: "A fine, dry powder.", icon: "target" },
      { title: "Colour", text: "Pale beige to light brown.", icon: "layers" },
      { title: "Flavour", text: "Sharp and sour with a fruity edge.", icon: "flask" },
      { title: "Main Uses", text: "Chaats, chutneys, blends and snack seasonings.", icon: "globe" },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Where Amchur Adds Its Tang",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Spice Blends", text: "A souring note in classic Indian masalas.", items: ["Chaat masala", "Tandoori masala", "Chana masala"] },
      { title: "Street Food & Snacks", text: "Tang without moisture for dry snacks.", items: ["Chaats", "Namkeen", "Fried snacks"] },
      { title: "Chutneys & Pickles", text: "Fruity sourness for condiments.", items: ["Chutneys", "Pickles", "Relishes"] },
      { title: "Curries & Marinades", text: "Brightens and balances rich dishes.", items: ["Vegetable curries", "Dals", "Meat marinades"] },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "For Food Manufacturers",
    items: [
      { title: "Spice Blend Manufacturers", text: "A key souring ingredient in chaat and tandoori masalas.", icon: "flask" },
      { title: "Snack Seasoning", text: "Tangy flavour for chips, namkeen and coated snacks.", icon: "sprout" },
      { title: "Sauces & Condiments", text: "For chutneys, pickles, dips and dressings.", icon: "layers" },
      { title: "Ready Meals & Food Service", text: "A dry acidulant for curries, marinades and instant mixes.", icon: "globe" },
    ],
  },
  process: {
    eyebrow: "Product Journey",
    heading: "From Green Mango to Amchur",
    steps: [
      { title: "Selection", text: "Unripe green mangoes are selected for sourness." },
      { title: "Peeling & Slicing", text: "Fruit is peeled and cut into thin slices." },
      { title: "Drying", text: "Slices are dried until brittle." },
      { title: "Grinding", text: "Dried slices are ground and sieved to powder." },
      { title: "Packing", text: "Packed to buyer requirements." },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Dry Mango Powder Specifications",
    rows: spiceSpecs(
      "Dry Mango Powder (Amchur)",
      [
        { label: "Appearance", value: "Fine powder" },
        { label: "Colour", value: "Pale beige to light brown" },
        { label: "Taste", value: "Sour, fruity" },
        { label: "Acidity & Moisture", value: "To be confirmed", pending: true },
      ],
      {
        form: "Powder",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight",
        applications: "Spice blends, chaats, chutneys, snack seasonings",
      },
      slug,
    ),
    note: powderSpecsNote,
  },
  storage: {
    heading: "Protect It from Moisture",
    text: "Amchur absorbs humidity easily and can clump or lose its tang if left exposed.",
    points: ["Airtight, moisture-proof packing", "Cool, dry storage", "Away from direct light", "Use dry scoops and reseal"],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Dry Mango Powder Questions",
    items: spiceFaqs("Dry mango powder", [
      { question: "What is amchur?", answer: "Amchur is the Indian name for dry mango powder, made by drying and grinding slices of unripe green mango." },
      { question: "What does it taste like?", answer: "Sharp and sour with a fruity, slightly sweet edge." },
      { question: "How are quality parameters specified?", answer: "Acidity, moisture and other parameters are confirmed with each quotation." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Tangy Amchur",
    body: "Share the quantity, packaging and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // dry-mango-powder-hero.webp — a mound of pale beige amchur powder beside dried green mango slices and a whole unripe mango, on a pale cream ground (1:1, blob crop).
    hero: powderImg(slug, "hero", "Dry mango powder beside dried mango slices and a green mango", "dry-mango-powder-hero.webp"),
    // dry-mango-powder-applications.webp — amchur dusted over a plate of chaat with chutneys alongside (4:3).
    detail: powderImg(slug, "applications", "A plate of bhel puri chaat topped with tomato, onion and coriander leaves", "dry-mango-powder-applications.webp"),
  },
  sections: [
    { type: "hero", variant: "blob" },
    { type: "intro", variant: "overlap" },
    { type: "process" },
    { type: "uses", variant: "list" },
    { type: "commercial", variant: "alternating" },
    { type: "specs", variant: "table" },
    { type: "storage" },
    { type: "faq", variant: "center" },
    { type: "related" },
    { type: "contact", variant: "card" },
  ],
};
