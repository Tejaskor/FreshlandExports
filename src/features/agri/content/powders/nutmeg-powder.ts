import { powderImg, powderSpecsNote, powdersCategory } from "@/features/agri/content/powders/helpers";
import { spiceFaqs, spiceSpecs } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "nutmeg-powder";

export const nutmegPowder: AgriProduct = {
  slug,
  name: "Nutmeg Powder",
  category: powdersCategory,
  // Warm tan and russet over deep pine — the colour of a grated kernel.
  theme: { accent: "#9A6B43", deep: "#1C3B2C", tint: "#F9F2EA", soft: "#E8D2BC" },
  hero: {
    eyebrow: "Premium Spice Powders",
    title: "Nutmeg Powder",
    tagline: "Sweet warmth, finely ground.",
    body: "Ground nutmeg with a sweet, warm and woody aroma, for bakeries, dairy and dessert makers, spice blenders, beverage brands and importers.",
    highlights: ["Ground kernel", "Sweet, warm aroma", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Nutmeg Powder",
    heading: "A Little Goes a Long Way",
    statement: "Sweet, warm and woody in every pinch.",
    body: [
      "Nutmeg is the dried seed kernel of the evergreen Myristica fragrans tree. The same fruit gives mace, the red lacy covering around the seed.",
      "Ground to a powder, the kernel brings a sweet, warm and slightly woody aroma used in small amounts across bakery, desserts, dairy, beverages and savoury spice blends.",
    ],
    highlights: [
      { label: "Botanical", value: "Myristica fragrans" },
      { label: "Form", value: "Ground powder" },
      { label: "Colour", value: "Light to reddish brown" },
      { label: "Aroma", value: "Sweet, warm, woody" },
      { label: "Flavour", value: "Warm, slightly sweet" },
      { label: "Made From", value: "Dried seed kernel" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "Warmth in Every Grain",
    items: [
      { title: "Appearance", text: "Fine, slightly oily powder.", icon: "target" },
      { title: "Colour", text: "Light brown to reddish brown.", icon: "layers" },
      { title: "Aroma", text: "Sweet, warm and woody.", icon: "sprout" },
      { title: "Flavour", text: "Warm and gently sweet, used sparingly.", icon: "flask" },
      { title: "Grind", text: "Fineness agreed to buyer requirements.", icon: "shield" },
      { title: "Main Uses", text: "Bakery, desserts, dairy and spice blends.", icon: "globe" },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Sweet Kitchens and Savoury Ones",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Bakery", text: "A classic warm spice in baked goods.", items: ["Cakes", "Biscuits", "Spiced breads", "Pies"] },
      { title: "Desserts & Dairy", text: "Rounds out creamy, sweet dishes.", items: ["Custards", "Puddings", "Rice pudding", "Eggnog"] },
      { title: "Savoury Cooking", text: "A subtle note in rich, savoury dishes.", items: ["White sauces", "Meat dishes", "Garam masala", "Soups"] },
      { title: "Beverages", text: "Warmth in hot and spiced drinks.", items: ["Spiced milk", "Chai blends", "Mulled drinks"] },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "For Food Businesses",
    items: [
      { title: "Bakery & Confectionery", text: "Ground nutmeg for cakes, biscuits and spiced bakes.", icon: "award" },
      { title: "Dairy & Desserts", text: "Flavour for custards, puddings and dairy drinks.", icon: "flask" },
      { title: "Spice Blend Manufacturers", text: "A warm note in masalas and baking spice mixes.", icon: "layers" },
      { title: "Beverage Brands", text: "For spiced milk, tea and seasonal drink blends.", icon: "sprout" },
      { title: "Meat & Savoury Processing", text: "Seasoning for sausages, sauces and ready meals.", icon: "target" },
      { title: "Food Service & Retail", text: "Ground nutmeg for kitchens, distributors and retail packs.", icon: "globe" },
    ],
  },
  process: {
    eyebrow: "Product Journey",
    heading: "From Fruit to Powder",
    steps: [
      { title: "Harvest", text: "Ripe fruits are gathered as they split open." },
      { title: "Separation", text: "Mace is removed from the seed." },
      { title: "Drying", text: "Seeds are dried until the kernel loosens in its shell." },
      { title: "Shelling", text: "Shells are cracked and the kernels taken out." },
      { title: "Grinding", text: "Kernels are ground to the agreed fineness." },
      { title: "Packing", text: "Packed to buyer requirements." },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Nutmeg Powder Specifications",
    rows: spiceSpecs(
      "Nutmeg Powder",
      [
        { label: "Appearance", value: "Fine powder" },
        { label: "Colour", value: "Light to reddish brown" },
        { label: "Aroma", value: "Sweet, warm, woody" },
        { label: "Mesh / Fineness", value: "As per buyer requirements" },
        { label: "Purity & Moisture", value: "To be confirmed", pending: true },
      ],
      {
        form: "Ground powder",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight, away from light",
        applications: "Bakery, desserts, dairy, beverages, spice blends",
      },
      slug,
    ),
    note: powderSpecsNote,
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Nutmeg Powder Questions",
    items: spiceFaqs("Nutmeg powder", [
      { question: "What is nutmeg powder made from?", answer: "It is the dried seed kernel of Myristica fragrans, ground to a powder. Mace, from the same fruit, is a separate product." },
      { question: "Can the grind size be specified?", answer: "Yes — share the fineness your process needs and it will be confirmed with the quotation." },
      { question: "How should nutmeg powder be stored?", answer: "In airtight packaging in a cool, dry place away from light, as the ground spice loses aroma faster than whole nutmeg." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Aromatic Nutmeg Powder",
    body: "Tell us the fineness, quantity, packaging and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // nutmeg-powder-hero.webp — a wooden spoon heaped with reddish-brown ground nutmeg beside two whole nutmegs, one half-grated on a small grater, on a warm cream surface (4:5).
    hero: powderImg(slug, "hero", "A spoon of ground nutmeg beside whole nutmegs and a grater", "nutmeg-powder-hero.webp"),
    // nutmeg-powder-applications.webp — ground nutmeg dusted over a custard tart or a cup of spiced milk (4:3).
    detail: powderImg(slug, "applications", "Ground nutmeg dusted over a custard tart", "nutmeg-powder-applications.webp"),
    extra: [
      // nutmeg-powder-fruit.webp — an opened nutmeg fruit showing the brown seed wrapped in red mace (1:1).
      powderImg(slug, "fruit", "An opened nutmeg fruit with the seed wrapped in red mace", "nutmeg-powder-fruit.webp"),
      // nutmeg-powder-kernels.webp — shelled whole nutmeg kernels in a small bowl (1:1).
      powderImg(slug, "kernels", "Whole shelled nutmeg kernels in a small bowl", "nutmeg-powder-kernels.webp"),
    ],
  },
  sections: [
    { type: "hero", variant: "collage" },
    { type: "intro", variant: "statement" },
    { type: "process" },
    { type: "features", variant: "alternating" },
    { type: "uses", variant: "tabs" },
    { type: "commercial", variant: "bento" },
    { type: "specs", variant: "table" },
    { type: "faq", variant: "split" },
    { type: "related" },
    { type: "contact", variant: "card" },
  ],
};
