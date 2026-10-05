import { specsNote } from "@/features/agri/content/helpers";
import type { AgriProduct } from "@/features/agri/types";

// Facts come from the existing Garlic catalogue entry (forms, packing). Size,
// grade, packaging, origin and supply stay qualified. MOQ: features/products/moq.ts.
const slug = "garlic";
const dir = "/images/products/Agricultural Products/Garlic";

export const garlic: AgriProduct = {
  slug,
  name: "Garlic",
  // Soft ivory, warm white and muted green — minimal and airy.
  theme: { accent: "#6B7A55", deep: "#2F4A36", tint: "#FBF8F0", soft: "#E6E1CE" },
  hero: {
    eyebrow: "Fresh Agricultural Products",
    title: "Fresh Garlic",
    tagline: "Aromatic Bulbs, Carefully Selected for Export",
    body: "Fresh garlic bulbs selected for appearance, firmness and commercial requirements, supplied for wholesale, food-service and food-processing applications.",
    highlights: ["Whole bulbs or peeled cloves", "Selected for firmness", "Bulk supply available"],
  },
  intro: {
    eyebrow: "Product Overview",
    heading: "Strong Aroma, Clean Bulbs",
    statement: "Whole garlic bulbs with a strong natural aroma, supplied in bulk.",
    body: [
      "Fresh garlic (Allium sativum) is supplied as whole bulbs with a strong natural aroma, a clean appearance and firm cloves.",
      "Bulbs are selected and sized according to buyer requirements, with peeled cloves available on request, and supplied in bulk for wholesale, food-service and food-processing buyers.",
    ],
    highlights: [
      { label: "Product", value: "Fresh garlic" },
      { label: "Botanical name", value: "Allium sativum" },
      { label: "Forms", value: "Whole bulbs, peeled cloves on request" },
      { label: "Supply", value: "Bulk supply for commercial buyers" },
    ],
  },
  features: {
    eyebrow: "Key Product Features",
    heading: "Simple, Versatile, Essential",
    items: [
      { title: "Distinctive Aroma", text: "Naturally aromatic garlic suited to a wide range of culinary applications." },
      { title: "Bulb Quality", text: "Selected for appearance, firmness and buyer requirements." },
      { title: "Flexible Forms", text: "Whole bulbs with peeled cloves available on request." },
      { title: "Wholesale Supply", text: "Suitable for wholesale and commercial food markets." },
      { title: "Food Processing", text: "Used in sauces, pastes, seasonings and processed foods." },
      { title: "Food Service", text: "Suitable for restaurants, catering and commercial kitchens." },
    ],
  },
  uses: {
    eyebrow: "Applications",
    heading: "From Kitchen to Factory",
    intro: "How commercial buyers use fresh garlic, from kitchens to processing lines.",
    groups: [
      { title: "Home Cooking", items: ["Curries", "Stir-fries", "Sauces", "Everyday vegetable dishes"] },
      { title: "Food Service", items: ["Restaurant kitchens", "Catering", "Prepared meals"] },
      { title: "Food Processing", items: ["Garlic pastes", "Sauces", "Seasonings", "Processed foods"] },
      { title: "Seasonings", items: ["Spice blends", "Seasoning mixes", "Marinades", "Flavouring applications"] },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Garlic Specifications",
    rows: [
      { label: "Product Name", value: "Fresh Garlic" },
      { label: "Botanical Name", value: "Allium sativum" },
      { label: "Product Type", value: "Fresh Vegetable" },
      { label: "Form", value: "Whole bulbs; peeled cloves available on request" },
      { label: "Colour", value: "White to off-white, subject to variety" },
      { label: "Size / Grade", value: "As per buyer requirements" },
      { label: "Packaging", value: "As per buyer requirements" },
      { label: "Origin", value: "India, subject to confirmation" },
      { label: "Supply", value: "Subject to seasonal availability" },
      { label: "Harvest / Availability", value: "Subject to seasonal availability" },
    ],
    note: specsNote,
  },
  storage: {
    heading: "Storage & Handling",
    text: "Good storage keeps garlic bulbs firm and dry from packing to delivery.",
    points: [
      "Store garlic in a cool, dry environment",
      "Maintain good ventilation",
      "Protect from excess moisture",
      "Avoid unsuitable storage conditions",
      "Handle carefully during transportation",
      "Follow recommended storage conditions for the product and buyer requirements",
    ],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Garlic Questions",
    items: [
      {
        question: "What type of fresh garlic do you supply?",
        answer:
          "We supply fresh garlic (Allium sativum), white to off-white in colour depending on variety. Variety and availability are confirmed with each enquiry.",
      },
      {
        question: "Is garlic available as whole bulbs?",
        answer: "Yes. Fresh garlic is supplied as whole bulbs.",
      },
      {
        question: "Are peeled garlic cloves available?",
        answer: "Yes, peeled cloves are available on request. Please mention them in your enquiry.",
      },
      {
        question: "What bulb sizes or grades are available?",
        answer:
          "Bulb size and grade are supplied as per buyer requirements. Share the size you need and we will confirm availability with your quotation.",
      },
      {
        question: "What is the minimum order quantity?",
        answer:
          "The minimum order quantity for fresh garlic is 500 KG. Share your required quantity and we will confirm availability with your quotation.",
      },
      {
        question: "How is fresh garlic packed for export?",
        answer:
          "Packaging is supplied as per buyer requirements. Options include mesh bags, cartons and custom packing on request.",
      },
      {
        question: "How should fresh garlic be stored?",
        answer:
          "Store garlic in a cool, dry and well-ventilated environment, protect it from excess moisture and handle it carefully during transport.",
      },
      {
        question: "Can packaging be customised according to buyer requirements?",
        answer: "Yes. Packaging can be arranged according to buyer requirements and is confirmed with each quotation.",
      },
    ],
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Fresh Garlic with Freshland",
    body: "Tell us your market, bulb size and quantity requirements, and our team will help you with availability and a quotation.",
  },
  images: {
    // Wide pill hero (21:9).
    hero: {
      file: `${dir}/fresh-garlic-hero.webp`,
      alt: "Fresh white garlic bulbs and loose cloves on a stone surface with parsley",
      label: "Fresh garlic bulbs",
    },
    // Product Overview, in the circle frame.
    detail: {
      file: `${dir}/fresh-garlic-bulbs-quality.webp`,
      alt: "Firm white garlic bulbs, one opened to show its cloves",
      label: "Garlic bulbs close-up",
    },
  },
  sections: [
    { type: "hero", variant: "centered" },
    { type: "intro", variant: "split", shape: "circle" },
    { type: "features", variant: "numbered" },
    { type: "uses", variant: "columns" },
    { type: "specs", variant: "tiles" },
    { type: "storage" },
    { type: "faq", variant: "split" },
    // The Blog section renders automatically just before the contact section.
    { type: "contact", variant: "centered" },
  ],
};
