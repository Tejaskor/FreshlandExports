import { powderImg, powderSpecsNote, powdersCategory } from "@/features/agri/content/powders/helpers";
import { spiceFaqs, spiceSpecs } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "dry-ginger-powder";

export const dryGingerPowder: AgriProduct = {
  slug,
  name: "Dry Ginger Powder",
  category: powdersCategory,
  // Pale sandy beige and deep moss — a soft, warm cream hero.
  theme: { accent: "#9C7A3C", deep: "#203A27", tint: "#FAF5EA", soft: "#E8D7B2" },
  hero: {
    eyebrow: "Premium Spice Powders",
    title: "Dry Ginger Powder",
    tagline: "Warm, sharp, finely ground.",
    body: "Ground sonth from dried ginger rhizomes — a warm, pungent spice powder for blenders, bakeries, beverage makers and food importers.",
    highlights: ["Ground dried ginger", "Warm pungency", "Bulk supply"],
    badge: "Sonth",
    card: { title: "Dried, then milled", text: "Ginger rhizomes ground to a fine powder" },
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Dry Ginger Powder",
    heading: "Ginger's Heat, Ready to Blend",
    statement: "The warmth of ginger in a dry, measurable form.",
    body: [
      "Dry ginger powder, known in India as sonth, is made by drying ginger (Zingiber officinale) rhizomes and grinding them to a fine powder.",
      "Drying gives it a sharper, more concentrated warmth than fresh ginger, and its powdered form blends evenly into dry mixes, batters and drinks.",
    ],
    highlights: [
      { label: "Botanical", value: "Zingiber officinale" },
      { label: "Part", value: "Dried rhizome" },
      { label: "Colour", value: "Pale cream to light beige" },
      { label: "Aroma", value: "Warm, spicy, lemony" },
      { label: "Flavour", value: "Pungent, peppery heat" },
      { label: "Form", value: "Fine powder" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "Why Buyers Choose Sonth",
    items: [
      { title: "Concentrated Warmth", text: "Drying deepens ginger's pungency, so a little goes a long way.", icon: "flask" },
      { title: "Even Blending", text: "A fine powder that mixes evenly into dry blends and batters.", icon: "layers" },
      { title: "Light Colour", text: "Pale cream to beige, so it does not darken light-coloured products.", icon: "target" },
      { title: "Fresh Aroma", text: "A warm, slightly citrus scent that carries through baking and brewing.", icon: "sprout" },
      { title: "Easy to Dose", text: "Dry and measurable, with none of the handling of fresh rhizomes.", icon: "clipboard" },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Where Sonth Works",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Bakery", items: ["Gingerbread", "Ginger biscuits", "Spiced cakes"] },
      { title: "Beverages", items: ["Masala chai", "Ginger tea blends", "Instant drink mixes"] },
      { title: "Spice Blends", items: ["Garam masala", "Curry powders", "Pumpkin spice"] },
      { title: "Savoury Cooking", items: ["Curries and dals", "Marinades", "Chutneys and sauces"] },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "For Food Businesses",
    items: [
      { title: "Bakery & Confectionery", text: "Warm spice for biscuits, cakes and seasonal lines.", icon: "sprout" },
      { title: "Tea & Beverage Blenders", text: "A dry ginger note for chai, herbal and instant mixes.", icon: "globe" },
      { title: "Spice & Seasoning Makers", text: "A base ingredient for masalas and spice rubs.", icon: "flask" },
      { title: "Food Service", text: "A convenient pantry form for kitchens and caterers.", icon: "users" },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Dry Ginger Powder Specifications",
    rows: spiceSpecs(
      "Dry Ginger Powder (Sonth)",
      [
        { label: "Appearance", value: "Fine, free-flowing powder" },
        { label: "Colour", value: "Pale cream to light beige" },
        { label: "Aroma", value: "Warm, spicy, lemony" },
        { label: "Mesh Size", value: "As per buyer requirements" },
        { label: "Purity & Moisture", value: "To be confirmed", pending: true },
      ],
      {
        form: "Powder",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight",
        applications: "Bakery, beverages, spice blends, seasonings",
      },
      slug,
    ),
    note: powderSpecsNote,
  },
  storage: {
    heading: "Keep It Dry and Sealed",
    text: "Ginger powder absorbs moisture readily and its aroma fades with air and heat.",
    points: ["Airtight, lined packaging", "Store cool and dry", "Protect from light", "Reseal opened bags promptly"],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Dry Ginger Powder Questions",
    items: spiceFaqs("Dry ginger powder", [
      {
        question: "What is the difference between dry ginger powder and fresh ginger?",
        answer: "Dry ginger powder is made from dried rhizomes. It is warmer and more concentrated, keeps longer and is easier to dose in dry products.",
      },
      { question: "Can you supply a specific mesh size?", answer: "Mesh size is agreed with each enquiry, as per buyer requirements." },
      { question: "How are purity and moisture specified?", answer: "Purity and moisture are confirmed with each quotation." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Dry Ginger Powder",
    body: "Share the mesh, quantity, packaging and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // dry-ginger-powder-hero.webp — a wooden bowl of pale beige ginger powder beside dried ginger slices (16:10, rounded).
    hero: powderImg(slug, "hero", "A bowl of pale dry ginger powder beside dried ginger slices", "dry-ginger-powder-hero.webp"),
    // dry-ginger-powder-applications.webp — ginger powder with gingerbread biscuits and a cup of masala chai (4:3).
    detail: powderImg(
      slug,
      "applications",
      "Dry ginger powder with ginger biscuits and a cup of masala chai",
      "dry-ginger-powder-applications.webp",
    ),
  },
  sections: [
    { type: "hero", variant: "editorial" },
    { type: "intro", variant: "split", shape: "pill", reverse: true },
    { type: "features", variant: "alternating" },
    { type: "uses", variant: "tabs" },
    { type: "commercial", variant: "numbered" },
    { type: "specs", variant: "sheet" },
    { type: "storage" },
    { type: "faq", variant: "split" },
    { type: "related" },
    { type: "contact", variant: "centered" },
  ],
};
