import { powderSpecsNote, powdersCategory } from "@/features/agri/content/powders/helpers";
import { spiceSpecs } from "@/features/agri/content/spices/helpers";
import type { AgriProduct, ImageSlotData } from "@/features/agri/types";

// Spec values, MOQ and FAQ answers state only what the product data supports;
// no grades, test results, certifications or shelf life are claimed.
const slug = "clove-powder";

/** A photograph from /images/products/Clove Powder/. */
const img = (file: string, alt: string, label: string, position?: string): ImageSlotData => ({
  file: `/images/products/Clove Powder/${file}`,
  alt,
  label,
  ...(position && { position }),
});

export const clovePowder: AgriProduct = {
  slug,
  name: "Clove Powder",
  category: powdersCategory,
  // Deep cocoa brown and near-black green — rich and dark, on a warm cream.
  theme: { accent: "#6B3A22", deep: "#14301F", tint: "#F7EFE8", soft: "#D9BBA6" },
  hero: {
    eyebrow: "Premium Spice Powders",
    title: "Clove Powder",
    tagline: "Bold aroma, finely ground.",
    body: "Finely ground clove powder for spice blends, bakery products, savoury seasonings and food manufacturing. Contact Freshland Exports for product specifications, bulk quantities and packaging options.",
    highlights: ["Ground whole cloves", "Intense aroma", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Clove Powder",
    heading: "Clove Powder for Commercial Applications",
    statement: "The intensity of whole cloves, ready to blend.",
    body: [
      "Clove powder is produced by grinding dried flower buds of the clove tree (Syzygium aromaticum). Its characteristic warm, pungent aroma makes it suitable for selected spice blends, bakery products and savoury formulations.",
    ],
    highlights: [
      { label: "Botanical", value: "Syzygium aromaticum" },
      { label: "Part", value: "Ground dried bud" },
      { label: "Colour", value: "Dark reddish brown" },
      { label: "Aroma", value: "Warm, sweet, intense" },
      { label: "Flavour", value: "Pungent, slightly numbing" },
      { label: "Form", value: "Fine powder" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "A Little Goes a Long Way",
    items: [
      { title: "Characteristic Aroma", text: "Warm, pungent clove fragrance characteristic of the spice.", icon: "sprout" },
      { title: "Ground Form", text: "Powdered format for use in ingredient blending and food formulations.", icon: "layers" },
      { title: "Natural Colour", text: "Colour should be assessed against the actual product sample.", icon: "target" },
      { title: "Distinctive Flavour", text: "Strong, warm spice notes suitable for selected food applications.", icon: "flask" },
      { title: "Multiple Applications", text: "Suitable for selected bakery, seasoning and spice-blend formulations.", icon: "check" },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Ground Cloves at Work",
    intro:
      "Clove powder adds a distinctive warm, pungent flavour to selected spice blends, bakery products, savoury preparations and spiced beverages. Suitability depends on the formulation and the buyer's requirements.",
    groups: [
      { title: "Spice Blends", items: ["Garam masala", "Chai masala", "Pumpkin spice", "Mixed-spice blends"] },
      { title: "Bakery", items: ["Spiced cakes", "Biscuits", "Gingerbread", "Selected confectionery"] },
      { title: "Meats & Sauces", items: ["Selected marinades", "Savoury sauces", "Seasoning blends", "Barbecue sauces"] },
      { title: "Beverages", items: ["Chai blends", "Mulled-drink mixes", "Selected spiced beverage formulations"] },
    ],
  },
  process: {
    eyebrow: "Product Journey",
    heading: "From Bud to Powder",
    steps: [
      { title: "Harvest", text: "Clove flower buds are harvested at the appropriate stage." },
      { title: "Drying", text: "Buds are dried to achieve suitable moisture conditions before further processing." },
      { title: "Cleaning", text: "Dried cloves are cleaned to remove foreign matter before grinding." },
      { title: "Grinding", text: "The dried cloves are ground to the agreed product specification." },
      { title: "Packing", text: "The powder is packed according to the agreed packaging requirements." },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Clove Powder Specifications",
    rows: spiceSpecs(
      "Clove Powder",
      [
        { label: "Appearance", value: "Fine powder" },
        { label: "Colour", value: "Dark reddish brown" },
        { label: "Aroma", value: "Warm, sweet, pungent" },
        { label: "Mesh Size", value: "As per buyer requirements" },
      ],
      {
        form: "Powder",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight",
        applications: "Spice blends, bakery, meats, sauces, beverages",
      },
      slug,
    ),
    note: powderSpecsNote,
  },
  moqBody:
    "The minimum order quantity depends on the product, packaging and order requirements. Contact our team to confirm the quantity and terms for your enquiry.",
  storage: {
    heading: "Storage and Handling",
    text: "Store clove powder in a clean, dry, tightly sealed container. Protect it from moisture, direct light and strong external odours. Follow the storage guidance provided with the supplied product.",
    points: ["Clean, dry, tightly sealed container", "Store cool and dry", "Protect from light", "Keep away from strong odours"],
  },
  faqs: {
    items: [
      {
        question: "How is clove powder different from whole cloves?",
        answer:
          "Clove powder is ground dried clove buds, while whole cloves retain their original form. The appropriate form depends on the intended application and processing requirements.",
      },
      {
        question: "Can you supply a specific mesh size?",
        answer:
          "Mesh-size requirements can be discussed during the enquiry. Availability and the agreed specification should be confirmed with our team.",
      },
      {
        question: "How is quality specified?",
        answer:
          "Product specifications can be discussed based on appearance, aroma, mesh size, packaging and the buyer's application. Confirm the applicable parameters with our team before ordering.",
      },
      {
        question: "Do you supply clove powder in bulk?",
        answer:
          "Contact Freshland Exports with your required quantity, packaging preferences and destination so our team can discuss the available supply options.",
      },
      {
        question: "What packaging options are available for bulk orders?",
        answer:
          "Packaging requirements can be discussed during the enquiry. Available formats and order-specific details should be confirmed with our team.",
      },
    ],
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Aromatic Clove Powder",
    body: "Share the mesh, quantity, packaging and destination you need, and our team will reply with availability and pricing.",
  },
  quoteIntro:
    "Tell us your required quantity, application, packaging needs and destination. Our team will get back to you with availability and pricing.",
  images: {
    hero: img(
      "clove-powder-hero.webp",
      "A wooden bowl of reddish-brown clove powder beside a scoop of whole cloves on hessian",
      "clove-powder-hero",
    ),
    detail: img(
      "clove-powder-product-overview.webp",
      "A wooden bowl of ground clove powder beside a pile of whole dried cloves and a wooden scoop",
      "clove-powder-product-overview",
    ),
    // 3:2 photograph in a 4:5 frame on desktop: keeps the bowl of powder in view.
    uses: img(
      "clove-powder-culinary-applications.webp",
      "Clove powder and whole cloves beside slices of spiced cake, cinnamon sticks, star anise and a cup of tea",
      "clove-powder-culinary-applications",
      "35% 50%",
    ),
  },
  sections: [
    { type: "hero", variant: "diagonal" },
    { type: "intro", variant: "overlap" },
    { type: "features", variant: "numbered" },
    { type: "uses", variant: "list" },
    { type: "process" },
    { type: "specs", variant: "tiles" },
    { type: "storage" },
    { type: "faq", variant: "center" },
    { type: "related" },
    { type: "contact", variant: "card" },
  ],
};
