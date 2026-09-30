import { spiceFaqs, spiceImg, spiceSpecs, spiceSpecsNote, spicesCategory } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "mustard-seeds";

export const mustardSeeds: AgriProduct = {
  slug,
  name: "Mustard Seeds",
  category: spicesCategory,
  // Muted golden and earthy tones with forest green — clean and modern.
  theme: { accent: "#86680F", deep: "#1F4A2E", tint: "#FAF5E3", soft: "#E9D796" },
  hero: {
    eyebrow: "Premium Whole Spices",
    title: "Mustard Seeds",
    tagline: "Tiny seeds, bold bite.",
    body: "Whole mustard seeds for spice processors, condiment manufacturers, importers and distributors.",
    highlights: ["Whole seeds", "Pungent when crushed", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Mustard",
    heading: "Small, Round and Full of Bite",
    statement: "Nutty when tempered, sharp when ground.",
    body: [
      "Mustard seeds are the small round seeds of mustard plants, found in yellow, brown and black types.",
      "Tempered whole in hot oil they turn nutty; crushed or ground they give the sharp heat of prepared mustard. Final type and grade details will be added here.",
    ],
    highlights: [
      { label: "Types", value: "Yellow, brown, black" },
      { label: "Shape", value: "Small, round" },
      { label: "Aroma", value: "Mild whole, pungent crushed" },
      { label: "Flavour", value: "Nutty to sharp" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "Mustard at a Glance",
    items: [
      { title: "Appearance", text: "Small, hard, round seeds." },
      { title: "Colour", text: "Yellow, brown or black, by type." },
      { title: "Aroma", text: "Mild whole, pungent once crushed." },
      { title: "Flavour", text: "Nutty when tempered, sharp when ground." },
      { title: "Texture", text: "Hard seeds that pop in hot oil." },
      { title: "Main Uses", text: "Tempering, pickles and condiments." },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "How Mustard Is Used",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Tempering", text: "Popped in hot oil to start many dishes.", items: ["Tadka", "Dals", "Sambar"] },
      { title: "Pickles", text: "A key flavour in pickles and relishes.", items: ["Mango pickle", "Mixed pickles", "Relishes"] },
      { title: "Condiments", text: "The base of prepared mustard.", items: ["Mustard sauces", "Dressings"] },
      { title: "Spice Blends", text: "For pickling and curry blends.", items: ["Pickling spice", "Curry blends"] },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "For Industry",
    items: [
      { title: "Condiment Manufacturers", text: "Seeds for prepared mustard and sauces.", icon: "flask" },
      { title: "Pickle Makers", text: "Whole and cracked seeds for pickles.", icon: "layers" },
      { title: "Spice Blenders", text: "An ingredient in pickling and curry blends.", icon: "sprout" },
      { title: "Distributors", text: "Whole seeds for wholesale spice markets.", icon: "globe" },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Mustard Seed Specifications",
    rows: spiceSpecs(
      "Mustard Seeds",
      [
        { label: "Type", value: "To be confirmed", pending: true },
        { label: "Appearance", value: "Small, round seeds" },
        { label: "Colour", value: "Yellow, brown or black, by type" },
        { label: "Aroma", value: "Pungent when crushed" },
      ],
      {
        form: "Whole seeds",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight",
        applications: "Tempering, pickles, condiments",
      },
    ),
    note: spiceSpecsNote,
  },
  storage: {
    heading: "Simple Storage",
    text: "Whole mustard seeds keep well when dry and sealed.",
    points: ["Cool, dry storage", "Airtight packaging", "Away from moisture", "Away from direct sunlight"],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Mustard Questions",
    items: spiceFaqs("Mustard seeds", [
      { question: "Which types of mustard seed do you supply?", answer: "Seed type (yellow, brown or black) will be confirmed here; our team can advise with each enquiry." },
      { question: "Are the seeds suitable for condiments?", answer: "Yes — mustard seeds are the base of prepared mustard and sauces." },
      { question: "Why do mustard seeds taste different when cooked?", answer: "Whole seeds tempered in hot oil turn mild and nutty; crushing releases their sharp, pungent heat." },
    ]),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Mustard Seeds",
    body: "Share the type, quantity and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // mustard-seeds-hero.webp — yellow and brown mustard seeds in a wide composition (21:9).
    hero: spiceImg(slug, "hero", "Yellow and brown mustard seeds side by side", "mustard-seeds-hero.webp"),
    // mustard-seeds-applications.webp — mustard seeds with a jar of prepared mustard (5:4, leaf).
    detail: spiceImg(slug, "applications", "Mustard seeds beside a jar of prepared mustard", "mustard-seeds-applications.webp"),
  },
  sections: [
    { type: "hero", variant: "centered" },
    { type: "intro", variant: "split", shape: "leaf" },
    { type: "features", variant: "numbered" },
    { type: "uses", variant: "tabs" },
    { type: "commercial", variant: "bento" },
    { type: "specs", variant: "sheet" },
    { type: "storage" },
    { type: "faq", variant: "split" },
    { type: "contact", variant: "card" },
  ],
};
