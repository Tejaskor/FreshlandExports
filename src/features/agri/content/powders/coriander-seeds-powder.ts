import { powderImg, powderSpecsNote, powdersCategory } from "@/features/agri/content/powders/helpers";
import { spiceFaqs, spiceSpecs } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "coriander-seeds-powder";

export const corianderSeedsPowder: AgriProduct = {
  slug,
  name: "Coriander Seeds Powder",
  category: powdersCategory,
  // Soft khaki and sage on a dark moss ground, with a pale straw tint.
  theme: { accent: "#7A7234", deep: "#24361F", tint: "#F7F5EA", soft: "#E0DABA" },
  hero: {
    eyebrow: "Premium Spice Powders",
    title: "Coriander Seeds Powder",
    tagline: "Mild, citrusy, endlessly versatile.",
    body: "Ground coriander seed powder with a mild, citrusy warmth, supplied in bulk for masala makers, curry powder blenders, importers and food processors.",
    highlights: ["Ground coriander seed", "Mild, citrusy aroma", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Coriander Powder",
    heading: "The Quiet Base of Every Blend",
    statement: "Gentle, warm and lightly citrusy.",
    body: [
      "Coriander seeds powder, often called dhania powder, is ground from the dried seeds of Coriandrum sativum. It has a mild, sweetish aroma with a hint of citrus.",
      "It is one of the most widely used ground spices in Indian and global cooking, adding body and balance to curry powders, masalas and seasonings without overpowering them.",
    ],
    highlights: [
      { label: "Botanical", value: "Coriandrum sativum" },
      { label: "Form", value: "Ground powder" },
      { label: "Colour", value: "Light greenish brown to tan" },
      { label: "Aroma", value: "Mild, citrusy" },
      { label: "Flavour", value: "Warm, slightly sweet" },
      { label: "Also known as", value: "Dhania powder" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "Balance in a Powder",
    items: [
      { title: "Aroma", text: "Mild and fresh, with a citrus note that fades if the powder is left open.", icon: "sprout" },
      { title: "Colour", text: "Light greenish brown to tan, depending on the seed.", icon: "layers" },
      { title: "Texture", text: "Ground to the fineness the buyer requires.", icon: "target" },
      { title: "Blending", text: "A bulk base that carries stronger spices in a blend.", icon: "flask" },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Coriander in the Kitchen",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Curries & Gravies", text: "Adds body and thickens sauces.", items: ["Curries", "Gravies", "Dals"] },
      { title: "Spice Blends", text: "A major share of many classic blends.", items: ["Curry powder", "Garam masala", "Sambar masala"] },
      { title: "Meat & Vegetables", text: "In rubs, marinades and dry spice coatings.", items: ["Kebabs", "Roast vegetables", "Marinades"] },
      { title: "Baking & Pickles", text: "A warm note in breads, cakes and pickles.", items: ["Spiced breads", "Pickles", "Chutneys"] },
    ],
  },
  process: {
    eyebrow: "Product Journey",
    heading: "From Seed to Powder",
    steps: [
      { title: "Selection", text: "Dried coriander seeds are chosen for colour and aroma." },
      { title: "Cleaning", text: "Seeds are cleaned of dust, stems and foreign matter." },
      { title: "Grinding", text: "Ground to the fineness the buyer requires." },
      { title: "Packing", text: "Packed promptly to protect the aroma." },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "Made for Blenders and Processors",
    items: [
      { title: "Masala & Curry Powder Makers", text: "A base ingredient that gives blends body and balance." },
      { title: "Food Processors", text: "For ready meals, sauces, soups and frozen foods." },
      { title: "Snack & Seasoning Producers", text: "In savoury seasonings and snack coatings." },
      { title: "Importers & Repackers", text: "Bulk ground coriander for retail packing and distribution." },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Coriander Seeds Powder Specifications",
    rows: spiceSpecs(
      "Coriander Seeds Powder",
      [
        { label: "Appearance", value: "Fine ground powder" },
        { label: "Colour", value: "Light greenish brown to tan" },
        { label: "Aroma", value: "Mild, citrusy" },
        { label: "Purity & Moisture", value: "To be confirmed", pending: true },
      ],
      {
        form: "Ground powder",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight",
        applications: "Masalas, curry powders, seasonings, food processing",
      },
      slug,
    ),
    note: powderSpecsNote,
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Coriander Powder Questions",
    items: spiceFaqs("Coriander seeds powder", [
      { question: "Is this the same as dhania powder?", answer: "Yes — dhania powder is the common Indian name for ground coriander seed." },
      { question: "How fine is the powder?", answer: "Fineness is agreed with the buyer and confirmed with each enquiry." },
      { question: "Do you also supply whole coriander seeds?", answer: "Yes — whole coriander seeds are available; see our Coriander Seeds page or ask our team." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Ground Coriander",
    body: "Share the fineness, quantity, packaging and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // coriander-seeds-powder-hero.webp — a bowl of light tan coriander powder with whole coriander seeds scattered around it, on a pale straw linen (4:5).
    hero: powderImg(slug, "hero", "Ground coriander in an orange bowl with a spoon of whole coriander seeds on a yellow cloth", "coriander-seeds-powder-hero.webp", "50% 60%"),
    // coriander-seeds-powder-applications.webp — coriander powder being spooned into a curry with other ground spices nearby (16:10).
    detail: powderImg(slug, "applications", "A bowl of chana masala served with flatbread and samosas", "coriander-seeds-powder-applications.webp", "50% 35%"),
    extra: [
      // coriander-seeds-powder-blend.webp — coriander powder in a spice tin among other ground masala spices (1:1).
      powderImg(slug, "blend", "Coriander powder in a steel masala tin beside other spice containers", "coriander-seeds-powder-blend.webp", "50% 65%"),
    ],
  },
  sections: [
    { type: "hero", variant: "duo" },
    { type: "intro", variant: "overlap" },
    { type: "features", variant: "numbered" },
    { type: "uses", variant: "list" },
    { type: "process" },
    { type: "commercial", variant: "alternating" },
    { type: "specs", variant: "sheet" },
    { type: "faq", variant: "split" },
    { type: "related" },
    { type: "contact", variant: "card" },
  ],
};
