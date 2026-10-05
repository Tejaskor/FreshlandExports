import type { AgriProduct } from "@/features/agri/types";

// Variety, size, grade, packaging, origin and supply stay qualified until confirmed.
const slug = "green-chili";
const dir = "/images/products/Agricultural Products/Green Chili";

export const greenChili: AgriProduct = {
  slug,
  name: "Green Chilli",
  // Deep green and fresh leaf green, with the brand rust as a restrained accent.
  theme: { accent: "#2E6F3A", deep: "#123D22", tint: "#F2F6EF", soft: "#CFE3C4" },
  hero: {
    eyebrow: "Fresh Agricultural Products",
    title: "Green Chilli",
    tagline: "Fresh Heat, Vibrant Colour, Carefully Selected.",
    body: "Fresh green chillies selected for colour, firmness and appearance, supplied for wholesale, food-service and food-processing requirements.",
    highlights: ["Fresh & Firm", "Selected for Colour & Quality", "Bulk Supply Available"],
    compact: true,
  },
  intro: {
    eyebrow: "Product Overview",
    heading: "Fresh Green Chilli, Selected for Supply",
    statement: "Fresh green chillies selected for their colour, firmness, appearance and overall condition.",
    body: [
      "Suitable for wholesale, food-service and commercial applications, with selection based on buyer requirements and availability.",
    ],
    highlights: [
      { label: "Product", value: "Fresh Green Chilli" },
      { label: "Type", value: "Fresh Vegetable" },
      { label: "Appearance", value: "Slender, glossy green pods" },
      { label: "Colour", value: "Bright to deep green, depending on variety" },
      { label: "Form", value: "Whole fresh pods" },
      { label: "Flavour", value: "Fresh, pungent heat" },
      { label: "Use", value: "Cooking and food processing" },
      { label: "Origin", value: "India, subject to confirmation" },
    ],
  },
  features: { eyebrow: "Features", heading: "Green Chilli Features", items: [] },
  uses: {
    eyebrow: "Applications",
    heading: "Where Green Chillies Go",
    intro: "How wholesale, food-service and processing buyers use fresh green chillies.",
    groups: [
      { title: "Everyday Cooking", items: ["Curries", "Stir-fries", "Chutneys"] },
      { title: "Pickles & Sauces", items: ["Pickled chilli", "Chilli sauces", "Relishes"] },
      { title: "Food Processing", items: ["Sauces", "Chutneys", "Prepared foods"] },
      { title: "Food Service", items: ["Restaurants", "Catering", "Commercial kitchens"] },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Green Chilli Specifications",
    rows: [
      { label: "Product Name", value: "Fresh Green Chilli" },
      { label: "Product Type", value: "Fresh Vegetable" },
      { label: "Appearance", value: "Slender, glossy green pods" },
      { label: "Colour", value: "Bright to deep green, depending on variety" },
      { label: "Form", value: "Whole fresh pods" },
      { label: "Size / Grade", value: "As per buyer requirements" },
      { label: "Packaging", value: "As per buyer requirements" },
      { label: "Origin", value: "India, subject to confirmation" },
      { label: "Supply", value: "Subject to seasonal availability" },
      { label: "Storage", value: "Cool, dry and well-ventilated conditions" },
      { label: "Shelf Life", value: "Subject to product grade, storage and handling conditions" },
      { label: "Heat Level", value: "Varies by variety" },
    ],
    note: "Final specifications, variety, grading and packaging can be confirmed according to buyer requirements and destination-market needs.",
  },
  quality: {
    heading: "Careful Handling from Selection to Dispatch",
    text: "Quality is maintained through careful selection, sorting and preparation according to buyer and shipment requirements.",
    points: [
      "Selected for colour and firmness",
      "Damaged or unsuitable pods removed during sorting",
      "Packed according to buyer requirements",
      "Handled carefully during preparation and dispatch",
      "Specifications confirmed before order",
    ],
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Bring Fresh Green Chilli to Your Market",
    body: "Share your required quantity, quality specifications and destination, and our team will respond with availability and a quotation.",
  },
  images: {
    // Diagonal hero (4:3, 5:6 on desktop).
    hero: {
      file: `${dir}/green-chilli-hero.webp`,
      alt: "A heap of fresh green chillies with leaves on a wooden table beside the field",
      label: "Fresh green chillies",
    },
    // Applications tabs.
    detail: {
      file: `${dir}/green-chilli-applications.webp`,
      alt: "Fresh green chillies, some sliced, beside a pan of potatoes cooked with green chilli",
      label: "Green chillies in cooking",
    },
  },
  sections: [
    { type: "hero", variant: "diagonal" },
    { type: "intro", variant: "statement" },
    { type: "uses", variant: "tabs" },
    { type: "specs", variant: "tiles" },
    { type: "quality" },
    { type: "contact", variant: "split" },
  ],
};
