import { specsNote } from "@/features/agri/content/helpers";
import { moqFor } from "@/features/products/moq";
import type { AgriProduct } from "@/features/agri/types";

// Size, grade, packaging, origin and supply stay qualified until confirmed.
const slug = "elephant-yam";
const dir = "/images/products/Agricultural Products/Elephant Yam";

export const elephantYam: AgriProduct = {
  slug,
  name: "Elephant Yam",
  // Earthy brown, muted purple and forest green — bold and grounded.
  theme: { accent: "#8A6A4A", deep: "#34262F", tint: "#F4EFE9", soft: "#C9B7A6" },
  hero: {
    eyebrow: "Fresh Agricultural Products",
    title: "Elephant Yam",
    tagline: "A Hearty Tuber, Carefully Selected for Bulk Supply",
    body: "Fresh elephant yam selected according to size, condition and buyer requirements, supplied for wholesale, food-service and food-processing applications.",
    highlights: ["Selected tubers", "Firm and well-cured", "Bulk supply available"],
  },
  intro: {
    eyebrow: "Product Overview",
    heading: "Grounded in Tradition",
    statement: "Fresh whole tubers with dense, firm and starchy flesh.",
    body: [
      "Elephant yam, also known as elephant foot yam (Amorphophallus paeoniifolius), is supplied as fresh whole tubers with a rough, natural brown skin and dense, firm, starchy flesh that is cream to pinkish depending on variety.",
      "It is a familiar ingredient in traditional regional cooking, and we supply it in bulk with size, quantity and packing arranged according to buyer requirements.",
    ],
    highlights: [
      { label: "Product", value: "Elephant yam" },
      { label: "Type", value: "Fresh whole tuber" },
      { label: "Skin", value: "Rough, natural brown" },
      { label: "Flesh", value: "Cream to pinkish, depending on variety" },
      { label: "Texture", value: "Dense, firm and starchy" },
      { label: "Supply", value: "Bulk, as per buyer requirements" },
    ],
  },
  features: {
    eyebrow: "Key Product Features",
    heading: "Built for Hearty Cooking",
    items: [
      { title: "Substantial Size", text: "Large tubers suitable for commercial kitchens and food-processing applications.", icon: "layers" },
      { title: "Firm Texture", text: "Dense, firm flesh suitable for cooking and processing.", icon: "shield" },
      { title: "Traditional Favourite", text: "Used in traditional regional culinary preparations.", icon: "sprout" },
      { title: "Processing Ready", text: "Suitable for cutting, preparation and food-processing applications.", icon: "flask" },
      { title: "Export Packing", text: "Packed according to buyer and shipment requirements.", icon: "globe" },
    ],
  },
  uses: {
    eyebrow: "Applications",
    heading: "Where Elephant Yam Works Best",
    intro: "How commercial buyers use elephant yam, from kitchens to processing lines.",
    groups: [
      { title: "Curry & Gravy", text: "Suitable for traditional curry and gravy preparations.", items: ["Curries", "Stews", "Gravies"] },
      { title: "Fried & Roasted", text: "Used in fried, roasted and other cooked preparations.", items: ["Fries", "Roasts", "Cutlets"] },
      { title: "Traditional Dishes", text: "A versatile ingredient in regional culinary recipes.", items: ["Festive dishes", "Mixed vegetables"] },
      { title: "Food Processing", text: "Suitable for commercial preparation and processing applications.", items: ["Cut and frozen", "Ready meals", "Snacks"] },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Elephant Yam Specifications",
    rows: [
      { label: "Product Name", value: "Elephant Yam" },
      { label: "Product Type", value: "Fresh Tuber" },
      { label: "Appearance", value: "Rough brown outer skin" },
      { label: "Form", value: "Whole fresh tuber" },
      { label: "Colour", value: "Cream to pinkish flesh, depending on variety" },
      { label: "Texture", value: "Dense, firm and starchy" },
      { label: "Size / Grade", value: "As per buyer requirements" },
      { label: "Packaging", value: "As per buyer requirements" },
      { label: "Origin", value: "India, subject to confirmation" },
      { label: "Supply", value: "Subject to seasonal availability" },
      { label: "Storage", value: "Cool, dry and well-ventilated" },
    ],
    note: specsNote,
  },
  storage: {
    heading: "Storage & Handling",
    text: "Careful storage and handling keep tubers firm and sound from packing to delivery.",
    points: [
      "Store in a cool, dry and well-ventilated environment",
      "Protect tubers from excess moisture",
      "Handle carefully to minimise physical damage",
      "Avoid unsuitable storage conditions during handling and transportation",
      "Follow buyer-specific storage and handling requirements",
    ],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Elephant Yam Questions",
    items: [
      {
        question: "What type of Elephant Yam do you supply?",
        answer:
          "We supply fresh elephant yam, also called elephant foot yam (Amorphophallus paeoniifolius), with rough brown skin and cream to pinkish flesh depending on variety. Variety and availability are confirmed with each enquiry.",
      },
      {
        question: "What form is Elephant Yam supplied in?",
        answer: "Elephant yam is supplied as whole fresh tubers.",
      },
      {
        question: "What sizes are available?",
        answer:
          "Size and grade are supplied as per buyer requirements. Share the size you need and we will confirm availability with your quotation.",
      },
      {
        question: "What is the minimum order quantity?",
        answer: `The minimum order quantity for elephant yam is ${moqFor(slug)}.`,
      },
      {
        question: "How is Elephant Yam packed?",
        answer: "Packaging is arranged as per buyer requirements and the needs of the shipment, and is confirmed with each quotation.",
      },
      {
        question: "How should Elephant Yam be stored?",
        answer:
          "Store tubers in a cool, dry and well-ventilated environment, protect them from excess moisture, and handle them carefully to avoid physical damage.",
      },
      {
        question: "Is Elephant Yam suitable for food processing?",
        answer:
          "Yes. Its dense, firm flesh is suitable for cutting, preparation and commercial food-processing applications such as ready meals and frozen lines.",
      },
    ],
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Bring Elephant Yam to Your Market",
    body: "Share your required quantity, quality specifications and destination market, and our team will help with availability and quotation.",
  },
  images: {
    // Stage hero (4:5).
    hero: {
      file: `${dir}/elephant-yam-hero.webp`,
      alt: "Whole elephant yam tubers with rough brown skin beside a halved tuber showing its pale flesh",
      label: "Elephant yam, whole and cut",
    },
    // Applications list image (4:3, 4:5 on desktop).
    detail: {
      file: `${dir}/elephant-yam-culinary-applications.webp`,
      alt: "Cubed elephant yam beside a bowl of elephant yam curry and a halved tuber",
      label: "Elephant yam in cooking",
    },
  },
  sections: [
    { type: "hero", variant: "stage" },
    { type: "intro", variant: "statement" },
    { type: "features", variant: "bento" },
    { type: "uses", variant: "list" },
    { type: "specs", variant: "sheet" },
    // MOQ renders automatically after the specifications.
    { type: "storage" },
    { type: "faq", variant: "split" },
    // The Blog section renders automatically just before the contact section.
    { type: "contact", variant: "split" },
  ],
};
