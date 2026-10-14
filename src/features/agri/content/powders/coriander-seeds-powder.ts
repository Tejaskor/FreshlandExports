import { powderSpecsNote, powdersCategory } from "@/features/agri/content/powders/helpers";
import { spiceFaqs, spiceSpecs } from "@/features/agri/content/spices/helpers";
import type { AgriProduct, ImageSlotData } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "coriander-seeds-powder";

/** Photography in public/images/products/Coriander Powder/. */
function img(file: string, alt: string, label: string, position?: string): ImageSlotData {
  return { file: `/images/products/Coriander Powder/${file}`, alt, label, ...(position && { position }) };
}

export const corianderSeedsPowder: AgriProduct = {
  slug,
  name: "Coriander Seeds Powder",
  category: powdersCategory,
  // Soft khaki and sage on a dark moss ground, with a pale straw tint.
  theme: { accent: "#7A7234", deep: "#24361F", tint: "#F7F5EA", soft: "#E0DABA" },
  hero: {
    eyebrow: "Premium Spice Powders",
    title: "Coriander Seeds Powder",
    titleLines: ["Coriander", "Seeds Powder"],
    compact: true,
    tagline: "Mild, citrusy, endlessly versatile.",
    body: "Ground coriander seed with a mild, citrusy flavour, for spice blends, curries, sauces and seasonings.",
    highlights: ["Ground coriander seed", "Mild, citrusy aroma", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Coriander Powder",
    heading: "The Quiet Base of Every Blend",
    statement: "Gentle, warm and lightly citrusy.",
    body: [
      "Coriander seeds powder, also called dhania powder, is ground from the dried seeds of Coriandrum sativum. Its mild, slightly sweet aroma carries a hint of citrus, adding body and balance to curry powders, masalas and seasonings without overpowering them.",
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
      { title: "Blending", text: "A bulk base that carries stronger spices in a blend.", icon: "flask" },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Coriander in the Kitchen",
    intro: "Ground coriander adds body and a gentle citrus note across savoury foods.",
    groups: [
      {
        title: "Spice Blends",
        text: "A major share of many classic blends.",
        items: ["Curry powder", "Garam masala", "Sambar masala"],
        image: img(
          "application-spice-blend.webp",
          "Bowls of ground coriander, turmeric, chilli powder and chilli flakes among coriander seeds and dried red chillies",
          "Spice blends",
          "72% 60%",
        ),
      },
      {
        title: "Curries & Sauces",
        text: "Adds body and thickens sauces.",
        items: ["Curries", "Gravies", "Sauces"],
        image: img("application-sauce.webp", "A bowl of green coriander and mint chutney garnished with fresh leaves", "Coriander sauce"),
      },
      { title: "Marinades", text: "In rubs, marinades and dry spice coatings.", items: ["Marinades", "Spice rubs", "Kebabs"] },
      {
        title: "Seasonings",
        text: "A mild base for savoury seasoning mixes.",
        items: ["Seasoning mixes", "Snack coatings", "Soup mixes"],
        image: img("application-seasoning.webp", "Baby potatoes tossed in a red spice seasoning with curry leaves and fresh coriander", "Spice-seasoned potatoes"),
      },
    ],
  },
  // Steps and order as supplied by Freshland Exports with their process photographs.
  process: {
    eyebrow: "Our Process",
    heading: "From Seed to Powder",
    note: "Cleaned, carefully processed, and finely ground to retain natural flavour and aroma.",
    steps: [
      { title: "Cleaning & Sorting", image: img("process-cleaning-sorting.webp", "A wooden bowl heaped with whole coriander seeds, more seeds and a hessian sack behind", "Cleaning and sorting") },
      { title: "Drying", image: img("process-drying.webp", "Coriander seeds moving along a stainless-steel conveyor", "Drying") },
      { title: "Grinding", image: img("process-grinding.webp", "Ground coriander falling from a stainless-steel mill into a steel container", "Grinding") },
      { title: "Sieving", image: img("process-sieving.webp", "Ground coriander passing through a stainless-steel mesh sieve", "Sieving") },
      { title: "Packing", image: img("process-packing.webp", "A kraft paper pouch beside a bowl of ground coriander, a scoop of seeds and a hessian sack", "Packing") },
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
    items: spiceFaqs("Coriander seeds powder", [
      { question: "What is coriander seeds powder used for?", answer: "Mainly in spice blends and curry powders, and in curries, sauces, marinades and seasonings." },
      { question: "Can fineness and packaging be specified?", answer: "Yes — both are agreed with each order and confirmed in the quotation." },
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
    // A 4:5 frame from a 2.46:1 photograph, kept on the bowl of powder.
    hero: img(
      "hero-coriander-powder.webp",
      "A wooden bowl heaped with ground coriander beside a scoop of coriander seeds and fresh coriander leaves",
      "Coriander seeds powder",
      "76% 55%",
    ),
    // Product overview (overlap intro).
    detail: img(
      "overview-coriander-powder.webp",
      "Ground coriander in a wooden bowl and a scoop of coriander seeds in front of fresh coriander leaves",
      "Coriander powder overview",
      "62% 55%",
    ),
    // Coriander in the Kitchen: the section's large photograph.
    uses: img("application-curry.webp", "A bowl of curry garnished with fresh coriander leaves", "Curry"),
    specs: img(
      "specifications-coriander-powder.webp",
      "A wooden bowl heaped with ground coriander among coriander seeds, with fresh coriander leaves behind",
      "Coriander powder specifications",
    ),
    moq: img("moq-coriander-powder.webp", "Two hessian sacks filled with coriander seeds on a wooden table, with seeds spilling around them", "Coriander in bulk"),
    extra: [
      // Hero's overlapping square: the whole seeds beside the main photograph's powder.
      img(
        "process-cleaning-sorting.webp",
        "A wooden bowl heaped with whole coriander seeds, more seeds and a hessian sack behind",
        "Whole coriander seeds",
        "56% 50%",
      ),
    ],
  },
  sections: [
    { type: "hero", variant: "duo" },
    { type: "intro", variant: "overlap" },
    { type: "features", variant: "numbered" },
    { type: "uses", variant: "list" },
    { type: "process", variant: "cards" },
    { type: "specs", variant: "sheet", photo: true },
    { type: "faq", variant: "split" },
    { type: "related" },
    { type: "contact", variant: "card" },
  ],
};
