import { powdersCategory } from "@/features/agri/content/powders/helpers";
import type { AgriProduct, ImageSlotData } from "@/features/agri/types";

// B2B copy for bulk buyers. Heat, colour value, particle size, moisture,
// origin and documentation are not yet verified for this product, so they are
// left out of the specifications rather than shown as figures. The MOQ comes
// from features/products/moq (Red Chilli Powder is ordered under spices).
const slug = "red-chilli-powder";

/** Photography in public/images/products/Powder Product/Red Chilli Powder/. */
function img(file: string, alt: string, label: string): ImageSlotData {
  return { file: `/images/products/Powder Product/Red Chilli Powder/${file}`, alt, label };
}

export const redChilliPowder: AgriProduct = {
  slug,
  name: "Red Chilli Powder",
  category: powdersCategory,
  // Muted brick red on a deep forest ground, with a warm blush tint.
  theme: { accent: "#9C3B22", deep: "#1A3627", tint: "#FBF2EC", soft: "#EBC8B6" },
  hero: {
    eyebrow: "Powder Products",
    title: "Red Chilli Powder",
    tagline: "Colour, Heat and Flavour for Food Manufacturing",
    body: "Finely ground red chilli for spice blends, seasonings, sauces and savoury food applications. Enquire about available grades, heat levels, product specifications and bulk supply.",
    highlights: ["Ground from dried red chillies", "Colour and heat by requirement", "Bulk supply enquiries"],
    badge: "Bulk enquiries welcome",
    card: { title: "Heat & Colour", text: "Confirmed with each enquiry" },
    secondary: "specs",
  },
  intro: {
    eyebrow: "Product Overview",
    heading: "Red Chilli Powder for Commercial Food Applications",
    statement: "Colour, chilli flavour and pungency in one ingredient.",
    body: [
      "Red chilli powder is made by grinding dried red chilli peppers. In food formulations it can contribute red colour, a characteristic chilli flavour and pungency that ranges from mild to hot, depending on the chillies used.",
      "It is used in spice blends, seasonings, sauces, marinades and a wide range of savoury foods. Colour, heat and grind are discussed with each buyer so the powder suits the intended application.",
    ],
    highlights: [
      { label: "Botanical", value: "Capsicum annuum" },
      { label: "Form", value: "Ground powder" },
      { label: "Colour", value: "Red, varies by variety" },
      { label: "Heat", value: "Varies by variety" },
      { label: "Flavour", value: "Characteristic chilli" },
      { label: "Uses", value: "Blends, sauces, seasonings" },
    ],
  },
  features: {
    eyebrow: "Key Features",
    heading: "What Buyers Specify",
    items: [
      { title: "Colour Profile", text: "The shade of red depends on the chilli variety and drying. Share the colour your product needs." },
      { title: "Heat-Level Requirements", text: "Pungency ranges from mild to hot. Tell us the heat level your formulation calls for." },
      { title: "Form and Particle Size", text: "Supplied as a ground powder. Fineness is discussed against how the powder will be used." },
      { title: "Characteristic Flavour", text: "Brings the familiar warm, pungent taste of red chilli to savoury products." },
      { title: "Application Flexibility", text: "Works in dry blends, wet sauces and pastes, coatings and cooked dishes." },
      { title: "Buyer-Specific Specifications", text: "Requirements are reviewed with each enquiry, and what can be supplied is confirmed before order." },
    ],
  },
  uses: {
    eyebrow: "Applications",
    heading: "Where Red Chilli Powder Is Used",
    intro: "Common commercial uses for red chilli powder across food manufacturing and processing.",
    groups: [
      {
        title: "Spice Blends and Curry Powders",
        text: "A base ingredient for colour and heat in dry spice mixes.",
        items: ["Curry powders", "Masala blends", "Chilli spice mixes"],
      },
      {
        title: "Seasonings and Snack Coatings",
        text: "Dusted or tumbled onto snacks as part of a seasoning.",
        items: ["Chip seasonings", "Extruded snack coatings", "Namkeen and nuts"],
      },
      {
        title: "Sauces and Chilli Pastes",
        text: "Adds red colour and pungency to wet formulations.",
        items: ["Chilli sauces", "Chilli pastes", "Cooking sauces"],
      },
      {
        title: "Marinades and Condiments",
        text: "Mixed into marinades, rubs and table condiments.",
        items: ["Marinades", "Dry rubs", "Chutneys and dips"],
      },
      {
        title: "Ready Meals and Convenience Foods",
        text: "Used in prepared dishes that need consistent heat and colour.",
        items: ["Ready meals", "Instant mixes", "Frozen meals"],
      },
      {
        title: "Food Manufacturing",
        text: "An ingredient for processors working to their own recipes.",
        items: ["Meat and savoury products", "Soups and gravies", "Private-label packing"],
      },
    ],
  },
  commercial: {
    eyebrow: "Prospective Buyers",
    heading: "Who Can Benefit from Red Chilli Powder?",
    items: [
      { title: "Spice and Masala Manufacturers", text: "For curry powders, masalas and blended spice ranges." },
      { title: "Seasoning Companies", text: "For savoury seasonings and flavour blends." },
      { title: "Snack and Savoury Food Producers", text: "For coatings, dustings and spiced savoury products." },
      { title: "Sauce and Condiment Manufacturers", text: "For chilli sauces, pastes, marinades and dips." },
      { title: "Importers and Distributors", text: "For supplying food businesses in their own markets." },
      { title: "Bulk Ingredient Wholesalers", text: "For resale to processors, food service and repackers." },
    ],
  },
  process: {
    eyebrow: "Product Journey",
    heading: "From Pod to Powder",
    note: "A general outline of how red chilli powder is made. Process details are confirmed with each enquiry.",
    image: img(
      "red-chilli-processing-selection.webp",
      "Gloved hands sorting dried red chillies on a stainless steel table",
      "Dried red chillies being sorted",
    ),
    steps: [
      { title: "Selection", text: "Dried red chillies are chosen to suit the colour and heat required." },
      { title: "Cleaning", text: "The chillies are cleaned to remove dust and foreign matter." },
      { title: "Preparation", text: "The cleaned chillies are prepared for grinding." },
      { title: "Grinding", text: "The chillies are ground into powder." },
      { title: "Packing", text: "The powder is packed in sealed packaging." },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Red Chilli Powder Specifications",
    rows: [
      { label: "Product Name", value: "Red Chilli Powder" },
      { label: "Product Type", value: "Ground spice powder" },
      { label: "Botanical Name", value: "Capsicum annuum" },
      { label: "Form", value: "Ground powder" },
      { label: "Colour", value: "Red" },
      { label: "Aroma & Flavour", value: "Characteristic chilli aroma and pungent flavour" },
      { label: "Applications", value: "Spice blends, seasonings, sauces and savoury foods" },
      { label: "Packaging", value: "Suitable packaging for commercial supply" },
    ],
    note: "Key product details for buyers sourcing red chilli powder for commercial food applications.",
    enquiry: false,
  },
  moqBody: "Bulk order quantities range from 100 KG to 500 KG, depending on product requirements and the agreed order.",
  storage: {
    heading: "Storage & Handling",
    text: "Keep red chilli powder in suitable sealed packaging, in a clean, dry environment.",
    points: [
      "Keep packaging sealed when not in use",
      "Store in a clean, dry area",
      "Protect from excessive heat and moisture",
      "Keep away from direct sunlight",
      "Protect from contamination",
      "Reseal opened packs promptly",
    ],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Red Chilli Powder Questions",
    items: [
      {
        question: "What is red chilli powder made from?",
        answer: "It is made by grinding dried red chilli peppers into a powder.",
      },
      {
        question: "What are the main uses of red chilli powder?",
        answer: "It is used in spice blends and curry powders, seasonings and snack coatings, sauces and chilli pastes, marinades, condiments, ready meals and other savoury foods.",
      },
      {
        question: "Can I specify the required colour and heat level?",
        answer: "Yes, share the colour and heat level your application needs. Colour and heat depend on the chillies used, so what can be supplied is confirmed with each enquiry.",
      },
      {
        question: "What particle size or mesh is available?",
        answer: "Particle size has not yet been confirmed for this product. Tell us the fineness you need and our team will advise.",
      },
      {
        question: "Is red chilli powder available for bulk orders?",
        answer: "Yes. Bulk order quantities range from 100 KG to 500 KG, depending on product requirements and the agreed order. Share your required quantity and destination market, and our team will confirm availability.",
      },
      {
        question: "What packaging options are available?",
        answer: "Packaging is discussed with each enquiry. Let us know your preferred pack type and size.",
      },
      {
        question: "Can I request product specifications or test reports?",
        answer: "You can request them with your enquiry. Our team will let you know which specifications and documents are available for your order.",
      },
      {
        question: "How can I request a quotation?",
        answer: "Use the Request a Quote form on this page. Include your application, required colour and heat profile, quantity and destination market.",
      },
    ],
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Red Chilli Powder",
    body: "Tell us the heat level, colour, quantity and destination you need, and our team will reply with availability and pricing.",
  },
  quote: {
    body: "Share your target application, required colour and heat profile, quantity and destination market. Our team can follow up to discuss available specifications and bulk-supply requirements.",
  },
  images: {
    hero: img(
      "red-chilli-powder-hero.webp",
      "A bowl of red chilli powder surrounded by whole dried red chillies and chilli flakes",
      "Red chilli powder",
    ),
    detail: img(
      "red-chilli-powder-overview.webp",
      "Red chilli powder heaped in a wooden bowl beside dried red chillies",
      "Red chilli powder overview",
    ),
    uses: img(
      "red-chilli-powder-applications.webp",
      "Red chilli powder in a bowl among a chilli curry, a vegetable curry and dried red chillies",
      "Red chilli powder applications",
    ),
  },
  sections: [
    { type: "hero", variant: "editorial" },
    { type: "intro", variant: "split", shape: "pill" },
    { type: "features", variant: "alternating" },
    { type: "uses", variant: "tabs" },
    { type: "commercial", variant: "numbered" },
    { type: "process" },
    { type: "specs", variant: "tiles" },
    { type: "storage" },
    { type: "faq", variant: "split" },
    { type: "related" },
    { type: "contact", variant: "split" },
  ],
};
