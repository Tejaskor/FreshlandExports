import { freshSpecs, img, specsNote } from "@/features/agri/content/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "elephant-yam";

export const elephantYam: AgriProduct = {
  slug,
  name: "Elephant Yam",
  // Earthy brown, muted purple and forest green — bold and grounded.
  theme: { accent: "#8A6A4A", deep: "#34262F", tint: "#F4EFE9", soft: "#C9B7A6" },
  hero: {
    eyebrow: "Fresh Agricultural Products",
    title: "Elephant Yam",
    tagline: "A hearty tuber with deep culinary roots.",
    body: "Large, firm corms selected for size and condition, supplied to distributors, food processors and food-service buyers.",
    highlights: ["Selected tubers", "Firm and well-cured", "Bulk supply available"],
  },
  intro: {
    eyebrow: "About Elephant Yam",
    heading: "Grounded in Tradition",
    statement: "Earthy, starchy and remarkably versatile in the kitchen.",
    body: [
      "Elephant yam (Amorphophallus paeoniifolius) is a large tuber with a rough brown skin and dense, pale flesh, used widely in South and Southeast Asian cooking.",
      "It is prized for its hearty texture in curries, fries and traditional preparations. Final variety and size details will be added here.",
    ],
    highlights: [
      { label: "Product", value: "Elephant yam" },
      { label: "Type", value: "Fresh tuber" },
      { label: "Skin", value: "Rough, brown" },
      { label: "Flesh", value: "Dense, cream to pink" },
      { label: "Texture", value: "Firm and starchy" },
      { label: "Use", value: "Cooking and processing" },
    ],
  },
  features: {
    eyebrow: "Product Features",
    heading: "Built for Hearty Cooking",
    items: [
      { title: "Substantial Size", text: "Large tubers that yield generous portions for kitchens and processors.", icon: "layers" },
      { title: "Firm Texture", text: "Holds its shape through frying, roasting and slow cooking.", icon: "shield" },
      { title: "Traditional Favourite", text: "A familiar ingredient across regional cuisines.", icon: "sprout" },
      { title: "Processing Ready", text: "Suited to cutting, frying and ready-meal preparation.", icon: "flask" },
      { title: "Export Packing", text: "Packed to suit the destination and transit time.", icon: "globe" },
    ],
  },
  uses: {
    eyebrow: "Applications",
    heading: "Where Elephant Yam Works Best",
    intro: "Temporary overview of typical uses for elephant yam.",
    groups: [
      { title: "Curries & Gravies", text: "Adds body to slow-cooked dishes.", items: ["Curries", "Stews", "Gravies"] },
      { title: "Fried & Roasted", text: "Crisp outside, tender inside.", items: ["Fries", "Roasts", "Cutlets"] },
      { title: "Traditional Dishes", text: "A staple of regional recipes.", items: ["Festive dishes", "Mixed vegetables"] },
      { title: "Food Processing", text: "For ready-to-cook and frozen lines.", items: ["Cut and frozen", "Ready meals", "Snacks"] },
    ],
  },
  specs: {
    eyebrow: "Product Details",
    heading: "Elephant Yam Specifications",
    rows: freshSpecs(
      [
        { label: "Product Name", value: "Elephant Yam" },
        { label: "Product Type", value: "Fresh tuber" },
        { label: "Appearance", value: "Large, rounded corms with rough brown skin" },
        { label: "Flesh", value: "Cream to pinkish, varies by variety" },
      ],
      [{ label: "Storage", value: "Cool, dry and well-ventilated" }],
    ),
    note: specsNote,
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Bring Elephant Yam to Your Market",
    body: "Share your required size, quantity and destination, and we will reply with availability and pricing.",
  },
  images: {
    // Stage hero — whole and halved elephant yam on a dark earthy ground (4:5).
    hero: img(slug, "hero", "Whole and halved elephant yam on a dark earthy surface", "Elephant yam, whole and cut"),
    // Detail — cut surface texture of elephant yam (4:5).
    detail: img(slug, "detail", "Cut elephant yam showing its dense flesh", "Elephant yam cut surface"),
  },
  sections: [
    { type: "hero", variant: "stage" },
    { type: "intro", variant: "statement" },
    { type: "features", variant: "bento" },
    { type: "uses", variant: "list" },
    { type: "specs", variant: "sheet" },
    { type: "contact", variant: "split" },
  ],
};
