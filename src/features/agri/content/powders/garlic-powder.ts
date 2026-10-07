import { powderImg, powderSpecsNote, powdersCategory } from "@/features/agri/content/powders/helpers";
import { spiceFaqs, spiceSpecs } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "garlic-powder";

export const garlicPowder: AgriProduct = {
  slug,
  name: "Garlic Powder",
  category: powdersCategory,
  // Warm off-white and papery beige — the colour of dried garlic — on a deep green.
  theme: { accent: "#857552", deep: "#22392B", tint: "#F9F6EF", soft: "#E3D9C3" },
  hero: {
    eyebrow: "Premium Spice Powders",
    title: "Garlic Powder",
    tagline: "Savoury depth, ready to blend.",
    body: "Dehydrated garlic milled to a free-flowing powder for seasoning makers, snack and sauce producers, food service buyers and importers.",
    highlights: ["Dehydrated garlic", "Fine powder", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Garlic Powder",
    heading: "Garlic Flavour Without the Peeling",
    statement: "All the savoury warmth of garlic, in a dry, easy-to-dose form.",
    body: [
      "Garlic powder is made from garlic (Allium sativum) cloves that are dehydrated and then milled into a fine, pale powder.",
      "It carries the familiar savoury, pungent character of garlic in a dry form that blends evenly into seasonings, coatings, sauces and ready meals, with none of the peeling, chopping or short shelf life of fresh bulbs.",
    ],
    highlights: [
      { label: "Botanical", value: "Allium sativum" },
      { label: "Made From", value: "Dehydrated garlic" },
      { label: "Colour", value: "Off-white to creamy beige" },
      { label: "Aroma", value: "Pungent, savoury" },
      { label: "Flavour", value: "Rich, mellow garlic" },
      { label: "Form", value: "Fine powder" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "Why Buyers Choose Garlic Powder",
    items: [
      { title: "Appearance", text: "A fine, dry powder that pours and blends evenly.", icon: "target" },
      { title: "Colour", text: "Off-white to creamy beige, depending on the garlic and drying.", icon: "layers" },
      { title: "Aroma & Flavour", text: "Pungent and savoury, rounding out once cooked or hydrated.", icon: "flask" },
      { title: "Easy to Dose", text: "Measured by weight for consistent flavour batch after batch.", icon: "clipboard" },
      { title: "Main Uses", text: "Seasonings, rubs, sauces, snacks and ready meals.", icon: "globe" },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "A Savoury Base for Many Kitchens",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Seasonings & Rubs", items: ["Spice rubs", "Seasoning salts", "Herb blends"] },
      { title: "Sauces & Dressings", items: ["Pasta sauces", "Dips", "Salad dressings"] },
      { title: "Snacks", items: ["Chips and crisps", "Namkeen", "Popcorn seasoning"] },
      { title: "Meals & Breads", items: ["Marinades", "Garlic bread", "Soups and gravies"] },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "Built for Food Production",
    items: [
      { title: "Seasoning Manufacturers", text: "A core savoury note in snack seasonings, blends and rubs.", icon: "flask" },
      { title: "Snack Producers", text: "Even garlic flavour in coatings for chips, nuts and extruded snacks.", icon: "sprout" },
      { title: "Sauce & Ready-Meal Makers", text: "Dry garlic flavour for sauces, soups, gravies and instant mixes.", icon: "layers" },
      { title: "Meat & Food Processing", text: "For marinades, processed meats and plant-based products.", icon: "target" },
      { title: "Food Service", text: "Consistent garlic flavour for busy kitchens, without peeling.", icon: "users" },
      { title: "Importers & Repackers", text: "Bulk powder for distribution and retail repacking.", icon: "globe" },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Garlic Powder Specifications",
    rows: spiceSpecs(
      "Garlic Powder",
      [
        { label: "Appearance", value: "Fine, free-flowing powder" },
        { label: "Colour", value: "Off-white to creamy beige" },
        { label: "Aroma", value: "Pungent, savoury garlic" },
        { label: "Particle Size", value: "As per buyer requirements" },
        { label: "Purity & Moisture", value: "To be confirmed", pending: true },
      ],
      {
        form: "Powder; other particle sizes on request",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight",
        applications: "Seasonings, sauces, snacks, ready meals",
      },
      slug,
    ),
    note: powderSpecsNote,
  },
  storage: {
    heading: "Keep It Dry and Free-Flowing",
    text: "Garlic powder readily takes up moisture from the air, which leads to caking and a loss of aroma.",
    points: ["Keep in airtight, moisture-proof packaging", "Store cool and dry", "Protect from light and heat", "Reseal opened bags promptly"],
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Garlic Powder Questions",
    items: spiceFaqs("Garlic powder", [
      { question: "How is garlic powder made?", answer: "Garlic cloves are dehydrated and then milled into a fine powder." },
      { question: "Can you supply a specific particle size?", answer: "Particle size is agreed with each enquiry to suit your application." },
      { question: "Why does garlic powder cake?", answer: "It absorbs moisture from the air, so it should be kept sealed in a cool, dry place." },
      { question: "How are quality parameters specified?", answer: "Purity, moisture and other parameters are confirmed with each quotation." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Garlic Powder in Bulk",
    body: "Share the particle size, quantity, packaging and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // garlic-powder-hero.webp — a wooden bowl of fine off-white garlic powder beside whole garlic bulbs and a few loose cloves on a pale cream surface, framed on a deep green stage (4:5).
    hero: powderImg(slug, "hero", "A bowl of fine garlic powder beside whole garlic bulbs", "garlic-powder-hero.webp"),
    // garlic-powder-applications.webp — garlic powder being sprinkled over a tray of seasoned snacks or a spice rub (4:3).
    detail: powderImg(slug, "applications", "Garlic powder sprinkled over seasoned snacks", "garlic-powder-applications.webp"),
    // garlic-powder-texture.webp — close-up of the powder's fine texture in a scoop (4:3).
    specs: powderImg(slug, "texture", "Close-up of fine garlic powder in a scoop", "garlic-powder-texture.webp"),
  },
  sections: [
    { type: "hero", variant: "stage" },
    { type: "intro", variant: "split", shape: "rounded", reverse: true },
    { type: "features", variant: "alternating" },
    { type: "uses", variant: "columns" },
    { type: "commercial", variant: "bento" },
    { type: "specs", variant: "sheet" },
    { type: "storage" },
    { type: "faq", variant: "split" },
    { type: "related" },
    { type: "contact", variant: "split" },
  ],
};
