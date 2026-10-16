import { powderImg, powderSpecsNote, powdersCategory } from "@/features/agri/content/powders/helpers";
import { spiceFaqs, spiceSpecs } from "@/features/agri/content/spices/helpers";
import type { AgriProduct, ImageSlotData } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "nutmeg-powder";

/** Photography in public/images/products/Nutmeg Powder/. */
function img(file: string, alt: string, label: string, position?: string): ImageSlotData {
  return { file: `/images/products/Nutmeg Powder/${file}`, alt, label, ...(position && { position }) };
}

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
    heading: "From Bakery Favourites to Savoury Applications",
    intro: "A warm, aromatic spice for bakery products, dairy-based desserts, beverages and selected savoury preparations.",
    groups: [
      {
        title: "Bakery",
        text: "A warm, aromatic spice used in sweet baked goods.",
        items: ["Cakes", "Biscuits", "Spiced Breads", "Pies"],
        image: img("nutmeg-applications-bakery.webp", "Nutmeg-spiced loaf cake and biscuits arranged on a wooden board.", "Nutmeg in bakery"),
      },
      {
        title: "Desserts & Dairy",
        text: "Adds a distinctive warm note to creamy and milk-based preparations.",
        items: ["Custards", "Rice Pudding", "Milk Desserts", "Dessert Sauces"],
        image: img("nutmeg-applications-desserts-dairy.webp", "Creamy rice pudding sprinkled with ground nutmeg in a ceramic bowl.", "Nutmeg in desserts and dairy"),
      },
      {
        title: "Savoury Cooking",
        text: "Used in selected savoury recipes and seasoning blends.",
        items: ["Cream Sauces", "Soups", "Vegetable Dishes", "Seasoning Blends"],
        image: img("nutmeg-applications-savoury.webp", "Creamy mushroom sauce seasoned with ground nutmeg and fresh herbs.", "Nutmeg in savoury cooking"),
      },
      {
        title: "Beverages",
        text: "Adds a warm spice note to selected hot and cold beverages.",
        items: ["Spiced Milk", "Chai Blends", "Flavoured Beverages", "Beverage Mixes"],
        image: img("nutmeg-applications-beverages.webp", "Warm milk-based drink topped with ground nutmeg in a ceramic mug.", "Nutmeg in beverages"),
      },
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
    // The collage's tall (3:5) main photograph, cropped from a landscape frame onto the bowl.
    hero: img(
      "nutmeg-powder-scoop.webp",
      "A wooden bowl heaped with reddish-brown ground nutmeg beside whole nutmegs, one cut in half, with green nutmeg leaves behind",
      "Nutmeg powder",
      "64% 50%",
    ),
    // nutmeg-powder-applications.webp — ground nutmeg dusted over a custard tart or a cup of spiced milk (4:3).
    detail: powderImg(slug, "applications", "A glass of eggnog dusted with grated nutmeg, seen from above on a wooden table", "nutmeg-powder-applications.webp", "50% 40%"),
    // Specifications table photograph.
    specs: img(
      "nutmeg-powder-specifications.webp",
      "Fine ground nutmeg powder in a white ceramic dish surrounded by whole nutmegs on a white surface",
      "Nutmeg powder specifications",
    ),
    extra: [
      // Top-right circle, kept on the opened fruit.
      img(
        "nutmeg-fruit-red-mace.webp",
        "A split nutmeg fruit on the tree showing the brown seed wrapped in red mace",
        "Nutmeg fruit and mace",
        "45% 55%",
      ),
      // Bottom-right square.
      img(
        "nutmeg-powder-whole-nutmeg.webp",
        "A heap of ground nutmeg and a wooden scoop of powder in front of whole and halved nutmegs",
        "Ground and whole nutmeg",
      ),
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
