import { specsNote } from "@/features/agri/content/helpers";
import { moqFor } from "@/features/products/moq";
import type { AgriProduct } from "@/features/agri/types";

// Variety, size, grade, packaging, origin and supply stay qualified until confirmed.
const slug = "cabbage";
const dir = "/images/products/Agricultural Products/Cabbage";

export const cabbage: AgriProduct = {
  slug,
  name: "Cabbage",
  // Fresh sage, leafy green and cream — layered and botanical.
  theme: { accent: "#4A8F4F", deep: "#1E4A2E", tint: "#EEF4E8", soft: "#CFE0C5" },
  hero: {
    eyebrow: "Fresh Agricultural Products",
    title: "Fresh Cabbage",
    tagline: "Crisp, Tightly Layered Heads.",
    body: "Fresh cabbage heads selected for freshness, firmness and appearance, supplied for wholesale, food-service and food-processing applications.",
    highlights: ["Firm, compact heads", "Carefully selected", "Bulk supply available"],
  },
  intro: {
    eyebrow: "Product Overview",
    heading: "Layer Upon Layer of Freshness",
    statement: "Firm, compact heads with tightly layered leaves.",
    body: [
      "We supply fresh whole cabbage heads with a firm, compact structure, tightly layered leaves and a fresh green appearance. Heads are checked for leaf condition before packing.",
      "Head size is supplied as per buyer requirements, and cabbage is available in bulk for wholesale, food-service and food-processing buyers.",
    ],
    highlights: [
      { label: "Product", value: "Fresh whole cabbage heads" },
      { label: "Type", value: "Fresh leafy vegetable" },
      { label: "Heads", value: "Firm and compact" },
      { label: "Size", value: "As per buyer requirements" },
    ],
  },
  features: {
    eyebrow: "Key Product Features",
    heading: "Fresh from the First Leaf",
    items: [
      { title: "Crisp Texture", text: "Firm, tightly layered leaves suited to fresh and cooked preparations.", icon: "layers" },
      { title: "Mild Flavour", text: "A versatile flavour suitable for a wide range of culinary applications.", icon: "sprout" },
      { title: "Good Keeping", text: "Fresh heads handled and stored according to recommended conditions.", icon: "shield" },
      { title: "Versatile", text: "Suitable for salads, cooking, processing and food-service applications.", icon: "target" },
      { title: "Processing Ready", text: "Suitable for washing, cutting and food-processing applications.", icon: "flask" },
      { title: "Global Staple", text: "A widely used vegetable for commercial food markets.", icon: "globe" },
    ],
  },
  uses: {
    eyebrow: "Applications",
    heading: "Ways Buyers Use Cabbage",
    intro: "How commercial buyers use fresh cabbage, from salad bars to processing lines.",
    groups: [
      { title: "Fresh Salads", text: "Shredded or sliced for fresh salads and slaws.", items: ["Salads", "Coleslaw", "Wraps"], image: { file: `${dir}/fresh-cabbage-salads.webp`, alt: "A bowl of shredded cabbage salad with carrot, cucumber and red onion", label: "Cabbage salad" } },
      { title: "Cooked Dishes", text: "Suitable for stir-fries, curries, soups and cooked vegetable dishes.", items: ["Stir-fries", "Soups", "Stews"], image: { file: `${dir}/fresh-cabbage-cooked-dishes.webp`, alt: "A spiced cabbage stir-fry in a pan", label: "Cooked cabbage" } },
      { title: "Fermented", text: "Used in traditional fermented cabbage preparations.", items: ["Sauerkraut", "Kimchi", "Pickles"], image: { file: `${dir}/fresh-cabbage-fermented.webp`, alt: "Shredded cabbage in a ceramic crock for fermenting", label: "Fermented cabbage" } },
      { title: "Food Processing", text: "Suitable for commercial cutting, preparation and processed food applications.", items: ["Shredded packs", "Ready meals", "Frozen mixes"], image: { file: `${dir}/fresh-cabbage-food-processing.webp`, alt: "Cabbage heads and shredded cabbage on steel tables in a processing kitchen", label: "Processed cabbage" } },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Cabbage Specifications",
    rows: [
      { label: "Product Name", value: "Fresh Cabbage" },
      { label: "Product Type", value: "Fresh Leafy Vegetable" },
      { label: "Appearance", value: "Round, firm, compact heads" },
      { label: "Colour", value: "Green, subject to variety" },
      { label: "Size / Grade", value: "As per buyer requirements" },
      { label: "Packaging", value: "As per buyer requirements" },
      { label: "Origin", value: "India, subject to confirmation" },
      { label: "Supply", value: "Subject to seasonal availability" },
      { label: "Storage", value: "Cool, humid and well-ventilated conditions, according to handling requirements" },
    ],
    note: specsNote,
  },
  storage: {
    heading: "Storage & Handling",
    text: "Cabbage stays crisp when it is kept cool and handled with care from packing to delivery.",
    points: [
      "Keep cabbage in appropriate cool storage conditions",
      "Maintain suitable humidity and ventilation",
      "Protect heads from unnecessary physical damage",
      "Avoid excessive heat and unsuitable storage conditions",
      "Handle carefully during loading, transportation and unloading",
      "Follow buyer-specific storage and handling requirements",
    ],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Cabbage Questions",
    items: [
      {
        question: "What type of fresh cabbage do you supply?",
        answer:
          "We supply fresh whole green cabbage heads with a firm, compact structure. The variety depends on availability and is confirmed with each enquiry.",
      },
      {
        question: "What cabbage sizes or grades are available?",
        answer:
          "Head size and grade are supplied as per buyer requirements. Share the size you need and we will confirm availability with your quotation.",
      },
      {
        question: "What is the minimum order quantity?",
        answer: `The minimum order quantity for fresh cabbage is ${moqFor(slug)}.`,
      },
      {
        question: "How is fresh cabbage packed for bulk supply?",
        answer: "Packaging is supplied as per buyer requirements and is confirmed with each quotation.",
      },
      {
        question: "How should fresh cabbage be stored?",
        answer:
          "Keep cabbage in cool storage with suitable humidity and ventilation, away from excessive heat, and handle heads carefully to avoid physical damage.",
      },
      {
        question: "Is cabbage suitable for food processing?",
        answer:
          "Yes. Fresh cabbage is suitable for washing, cutting and commercial food-processing applications such as shredded packs and ready meals.",
      },
      {
        question: "Can packaging be customised according to buyer requirements?",
        answer: "Yes. Packaging can be arranged according to buyer requirements and is confirmed with each quotation.",
      },
    ],
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Supply Fresh Cabbage to Your Market",
    body: "Share your required quantity, quality specifications and destination market, and our team will help with availability and quotation.",
  },
  images: {
    hero: { file: `${dir}/fresh-cabbage-hero.webp`, alt: "Two fresh green cabbage heads with loose outer leaves", label: "Fresh cabbage heads" },
    // Product Overview.
    detail: { file: `${dir}/fresh-cabbage-quality.webp`, alt: "Firm, compact green cabbage heads with fresh outer leaves", label: "Cabbage heads close-up" },
    // Specifications, beside the table.
    specs: { file: `${dir}/fresh-cabbage-quality-inspection.webp`, alt: "Fresh cabbage heads laid out on a table for quality inspection", label: "Cabbage quality inspection" },
  },
  sections: [
    { type: "hero", variant: "split" },
    { type: "intro", variant: "overlap" },
    { type: "features", variant: "band" },
    { type: "uses", variant: "gallery" },
    { type: "specs", variant: "table" },
    // MOQ renders automatically after the specifications.
    { type: "storage" },
    { type: "faq", variant: "split" },
    // The Blog section renders automatically just before the contact section.
    { type: "contact", variant: "band" },
  ],
};
