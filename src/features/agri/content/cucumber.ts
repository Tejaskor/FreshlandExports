import { specsNote } from "@/features/agri/content/helpers";
import { moqFor } from "@/features/products/moq";
import type { AgriProduct } from "@/features/agri/types";

// Variety, size, grade, packaging, origin and supply stay qualified until confirmed.
const slug = "cucumber";
const dir = "/images/products/Agricultural Products/Cucumber";

export const cucumber: AgriProduct = {
  slug,
  name: "Cucumber",
  // Cucumber green, soft sage and cream — fresh, clean and elongated.
  theme: { accent: "#3F7D49", deep: "#1D4230", tint: "#EEF5EC", soft: "#CDE2C9" },
  hero: {
    eyebrow: "Fresh Agricultural Products",
    title: "Fresh Cucumber",
    tagline: "Cool, Crisp and Carefully Selected.",
    body: "Fresh whole cucumbers selected for firmness, colour and appearance, supplied for wholesale, food-service and bulk buyers.",
    highlights: ["Firm and fresh", "Selected to buyer requirements", "Bulk supply available"],
    badge: "Fresh • Firm • Export Ready",
    card: { title: "Fresh Agricultural Produce", text: "Selected for bulk supply" },
  },
  intro: {
    eyebrow: "Product Overview",
    heading: "Freshness You Can See and Feel",
    statement: "Fresh cucumbers selected for their firm texture, fresh green appearance and overall condition.",
    body: [
      "We supply fresh whole cucumbers with a firm, crisp texture and a fresh green appearance. They are suitable for wholesale, food-service and commercial applications, with size and selection based on buyer requirements.",
      "Cucumbers are available for wholesale and bulk supply.",
    ],
    highlights: [
      { label: "Product", value: "Fresh whole cucumbers" },
      { label: "Texture", value: "Firm and crisp" },
      { label: "Appearance", value: "Fresh green" },
      { label: "Selection", value: "As per buyer requirements" },
    ],
  },
  features: {
    eyebrow: "Key Product Qualities",
    heading: "Fresh Qualities That Matter",
    items: [
      { title: "Crisp Texture", text: "Firm, crunchy texture suited to fresh consumption." },
      { title: "Mild Taste", text: "A clean flavour that pairs well with a wide range of foods." },
      { title: "Uniform Selection", text: "Selected for consistent length, appearance and condition according to buyer requirements." },
      { title: "Retail Appeal", text: "Suitable for fresh-produce retail and wholesale markets." },
      { title: "Pickling", text: "Suitable for pickling and preservation applications." },
      { title: "Food Service", text: "Suitable for salads, garnishes and commercial food-service use." },
    ],
  },
  uses: {
    eyebrow: "Applications",
    heading: "Everyday Uses",
    intro: "How retail, food-service and processing buyers use fresh cucumbers.",
    groups: [
      { title: "Salads", items: ["Garden salads", "Raita", "Salsas"], image: { file: `${dir}/fresh-cucumber-salads.webp`, alt: "A bowl of salad with sliced cucumber, tomato, red onion and carrot", label: "Cucumber salad" } },
      { title: "Fresh Snacks", items: ["Sliced sticks", "Sandwiches", "Wraps"], image: { file: `${dir}/fresh-cucumber-snacks.webp`, alt: "Cucumber sticks and slices on a plate with a yoghurt dip", label: "Cucumber snacks" } },
      { title: "Pickling", items: ["Pickles", "Relishes", "Preserves"], image: { file: `${dir}/fresh-cucumber-pickling.webp`, alt: "A jar of pickled cucumbers beside sliced cucumbers, garlic and spices", label: "Pickled cucumbers" } },
      { title: "Beverages", items: ["Infused water", "Juices", "Smoothies"], image: { file: `${dir}/fresh-cucumber-beverages.webp`, alt: "Glasses of cucumber-infused water with mint", label: "Cucumber beverages" } },
    ],
  },
  process: {
    eyebrow: "Preparation & Supply",
    heading: "How We Prepare Cucumbers",
    image: { file: `${dir}/fresh-cucumber-sorting-packing.webp`, alt: "Fresh cucumbers sorted on a table beside a wooden crate", label: "Cucumber sorting and packing" },
    note: "Typical preparation steps may include harvesting, sorting, cleaning and packing according to buyer and shipment requirements.",
    steps: [
      { title: "Harvesting", text: "Picked at the appropriate size and firmness." },
      { title: "Sorting", text: "Sorted according to length, colour and condition." },
      { title: "Cleaning", text: "Gently cleaned and prepared for supply." },
      { title: "Packing", text: "Packed according to buyer and shipment requirements." },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Cucumber Specifications",
    rows: [
      { label: "Product Name", value: "Fresh Cucumber" },
      { label: "Product Type", value: "Fresh Vegetable" },
      { label: "Appearance", value: "Long, cylindrical, firm" },
      { label: "Colour", value: "Green, subject to variety" },
      { label: "Size / Grade", value: "As per buyer requirements" },
      { label: "Packaging", value: "As per buyer requirements" },
      { label: "Origin", value: "India, subject to confirmation" },
      { label: "Supply", value: "Subject to seasonal availability" },
      { label: "Storage", value: "Cool, dry and well-ventilated conditions; avoid chilling injury" },
    ],
    note: specsNote,
  },
  storage: {
    heading: "Storage & Handling",
    text: "Cucumbers stay firm and fresh when they are kept cool and handled with care.",
    points: [
      "Store under appropriate cool storage conditions",
      "Protect cucumbers from physical damage during handling",
      "Maintain suitable humidity and ventilation",
      "Avoid unsuitable temperatures that may cause chilling injury",
      "Handle carefully during loading, transportation and unloading",
      "Follow buyer-specific storage and transportation requirements",
    ],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Cucumber Questions",
    items: [
      { question: "What type of fresh cucumber do you supply?", answer: "Fresh whole cucumbers selected according to buyer requirements." },
      { question: "What sizes or grades are available?", answer: "Size and grade can be supplied according to buyer requirements and availability." },
      { question: "What is the minimum order quantity?", answer: `${moqFor(slug)}.` },
      { question: "How are cucumbers packed?", answer: "Packaging can be arranged according to buyer and shipment requirements." },
      {
        question: "How should fresh cucumbers be stored?",
        answer: "Store under appropriate cool conditions with suitable humidity and ventilation while avoiding chilling injury.",
      },
      {
        question: "Are cucumbers suitable for food-service applications?",
        answer: "Yes. Cucumbers can be used for salads, garnishes, snacks and other food-service preparations.",
      },
      {
        question: "Can buyers request specific requirements?",
        answer: "Yes. Buyers can communicate their quantity, quality, size and packaging requirements when requesting a quotation.",
      },
    ],
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Bring Fresh Cucumbers to Your Buyers",
    body: "Tell us your required quantity, size and quality requirements, and our team will help with availability and quotation.",
  },
  images: {
    hero: { file: `${dir}/fresh-cucumber-hero.webp`, alt: "Fresh green cucumbers, one sliced, on a wooden surface beside the vine", label: "Fresh cucumbers" },
    // Product Overview.
    detail: { file: `${dir}/fresh-cucumber-quality.webp`, alt: "Whole and sliced fresh green cucumbers", label: "Cucumber quality" },
    // Specifications, beside the table.
    specs: { file: `${dir}/fresh-cucumber-quality-inspection.webp`, alt: "Rows of fresh cucumbers laid out on a table for inspection", label: "Cucumber quality inspection" },
  },
  sections: [
    { type: "hero", variant: "editorial" },
    { type: "intro", variant: "overlap" },
    { type: "features", variant: "numbered" },
    { type: "uses", variant: "gallery" },
    { type: "process" },
    { type: "specs", variant: "table" },
    // MOQ renders automatically after the specifications.
    { type: "storage" },
    { type: "faq", variant: "split" },
    // The Blog section renders automatically just before the contact section.
    { type: "contact", variant: "card" },
  ],
};
