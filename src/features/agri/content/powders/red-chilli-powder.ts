import { powderImg, powderSpecsNote, powdersCategory } from "@/features/agri/content/powders/helpers";
import { spiceFaqs, spiceSpecs } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy. Heat and colour
// depend on the chilli variety and are confirmed with each order.
const slug = "red-chilli-powder";

export const redChilliPowder: AgriProduct = {
  slug,
  name: "Red Chilli Powder",
  category: powdersCategory,
  // Muted brick red on a deep forest ground, with a warm blush tint.
  theme: { accent: "#9C3B22", deep: "#1A3627", tint: "#FBF2EC", soft: "#EBC8B6" },
  hero: {
    eyebrow: "Premium Spice Powders",
    title: "Red Chilli Powder",
    tagline: "Colour and heat, ground fine.",
    body: "Ground red chilli powder with heat and colour matched by variety, supplied in bulk for spice blenders, sauce makers and food manufacturers.",
    highlights: ["Ground from dried chillies", "Heat & colour by variety", "Bulk supply"],
    badge: "Variety matched to order",
    card: { title: "Heat & Colour", text: "Confirmed with each enquiry" },
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Red Chilli Powder",
    heading: "The Red Behind Every Curry",
    statement: "Vivid colour, warming heat, ready to blend.",
    body: [
      "Red chilli powder is made by grinding dried red chillies (Capsicum annuum) into a fine, free-flowing powder that brings both colour and pungency to food.",
      "Chilli varieties differ widely, from mild, deeply coloured types to sharp, fiery ones, so the variety is chosen to suit how the buyer will use the powder.",
    ],
    highlights: [
      { label: "Botanical", value: "Capsicum annuum" },
      { label: "Form", value: "Ground powder" },
      { label: "Colour", value: "Bright to deep red" },
      { label: "Heat", value: "Varies by variety" },
      { label: "Aroma", value: "Pungent, warm" },
      { label: "Texture", value: "Fine, free-flowing" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "What Buyers Look For",
    items: [
      { title: "Colour", text: "Bright to deep red, set by the chilli variety and how the pods are dried.", icon: "layers" },
      { title: "Heat", text: "From mild to hot — chosen per order to suit the finished product.", icon: "target" },
      { title: "Aroma", text: "Pungent and warm, with a light smoky note.", icon: "sprout" },
      { title: "Texture", text: "Finely ground for even mixing; grind agreed with the buyer.", icon: "flask" },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Where Chilli Powder Works",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Curries & Gravies", text: "For colour and heat in everyday cooking.", items: ["Curries", "Gravies", "Dals"] },
      { title: "Marinades & Rubs", text: "Mixed into pastes for grilled and roasted dishes.", items: ["Tandoori marinades", "Meat rubs", "Grills"] },
      { title: "Spice Blends", text: "A base ingredient in many masalas and seasonings.", items: ["Curry powder", "Sambar masala", "Seasoning mixes"] },
      { title: "Sauces & Snacks", text: "Heat and colour for condiments and savoury snacks.", items: ["Chilli sauces", "Chutneys", "Snack dusting"] },
    ],
  },
  process: {
    eyebrow: "Product Journey",
    heading: "From Pod to Powder",
    steps: [
      { title: "Selection", text: "Dried chillies are chosen by variety for heat and colour." },
      { title: "Cleaning", text: "Pods are cleaned of dust and foreign matter." },
      { title: "Grinding", text: "Ground to the fineness the buyer requires." },
      { title: "Sieving", text: "Sifted for an even, free-flowing powder." },
      { title: "Packing", text: "Packed to buyer requirements." },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Red Chilli Powder Specifications",
    rows: spiceSpecs(
      "Red Chilli Powder",
      [
        { label: "Appearance", value: "Fine, free-flowing powder" },
        { label: "Colour", value: "Red, varies by variety" },
        { label: "Aroma", value: "Pungent, warm" },
        { label: "Heat & Colour Value", value: "To be confirmed", pending: true },
        { label: "Moisture & Mesh Size", value: "To be confirmed", pending: true },
      ],
      {
        form: "Ground powder",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight, away from light",
        applications: "Spice blends, sauces, seasonings, snacks",
      },
      slug,
    ),
    note: powderSpecsNote,
  },
  storage: {
    heading: "Keeping the Colour Bright",
    text: "Chilli powder fades and loses pungency with light, heat and moisture, and can cake if it picks up damp.",
    points: ["Keep in sealed, lined packaging", "Store cool and dry", "Protect from direct light", "Reseal opened bags promptly"],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Red Chilli Powder Questions",
    items: spiceFaqs("Red chilli powder", [
      { question: "How hot is your chilli powder?", answer: "Heat depends on the chilli variety used, so it is agreed with each order. Tell us the heat level your product needs and we will advise." },
      { question: "Can you supply powder for colour rather than heat?", answer: "Yes — milder, deeply coloured varieties can be selected for buyers who want colour first. Colour value is confirmed with each quotation." },
      { question: "Can the grind be adjusted?", answer: "Fineness can be discussed with our team and is confirmed with each enquiry." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Red Chilli Powder",
    body: "Tell us the heat level, colour, quantity and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // red-chilli-powder-hero.webp — a heap of vivid red chilli powder in a wide bowl with a few whole dried chillies beside it, on a pale blush surface (16:10).
    hero: powderImg(slug, "hero", "A bowl of red chilli powder beside whole dried chillies", "red-chilli-powder-hero.webp"),
    // red-chilli-powder-applications.webp — chilli powder being stirred into a curry, with a tandoori marinade and a bowl of chilli sauce nearby (4:3).
    detail: powderImg(slug, "applications", "Red chilli powder added to a curry and a marinade", "red-chilli-powder-applications.webp"),
  },
  sections: [
    { type: "hero", variant: "editorial" },
    { type: "intro", variant: "split", shape: "pill" },
    { type: "features", variant: "alternating" },
    { type: "uses", variant: "tabs" },
    { type: "process" },
    { type: "specs", variant: "tiles" },
    { type: "storage" },
    { type: "faq", variant: "split" },
    { type: "related" },
    { type: "contact", variant: "centered" },
  ],
};
