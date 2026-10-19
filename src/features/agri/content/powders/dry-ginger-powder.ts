import { powderSpecsNote, powdersCategory } from "@/features/agri/content/powders/helpers";
import { spiceSpecs } from "@/features/agri/content/spices/helpers";
import type { AgriProduct, ImageSlotData } from "@/features/agri/types";
import { findMoq } from "@/features/products/moq";

// Spec rows, MOQ and FAQ answers state only what the product data supports;
// moisture, shelf life and origin are left out until confirmed.
const slug = "dry-ginger-powder";
const moq = findMoq(slug);

/** A photograph from /images/products/Dry Ginger Powder/. */
const img = (file: string, alt: string, label: string, position?: string): ImageSlotData => ({
  file: `/images/products/Dry Ginger Powder/${file}`,
  alt,
  label,
  ...(position && { position }),
});

export const dryGingerPowder: AgriProduct = {
  slug,
  name: "Dry Ginger Powder",
  category: powdersCategory,
  // Pale sandy beige and deep moss — a soft, warm cream hero.
  theme: { accent: "#9C7A3C", deep: "#203A27", tint: "#FAF5EA", soft: "#E8D7B2" },
  hero: {
    eyebrow: "Premium Spice Powders",
    title: "Dry Ginger Powder",
    tagline: "Warm, aromatic ginger for food manufacturing.",
    body: "Explore dry ginger powder for food processing, bakery products, beverage blends and spice formulations. Contact Freshland Exports for product specifications, bulk quantities and packaging options.",
    highlights: ["Ground dried ginger", "Warm pungency", "Bulk supply"],
    badge: "Sonth",
    card: { title: "Dried, then milled", text: "Ginger rhizomes ground to a fine powder" },
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Dry Ginger Powder",
    heading: "Dry Ginger Powder for Bulk Buyers",
    statement: "The warmth of ginger in a dry, measurable form.",
    body: [
      "Dry ginger powder is a ground spice used in food preparation and commercial formulations. Its warm aroma and characteristic ginger flavour make it suitable for a range of food and beverage applications.",
      "Known in India as sonth, it is made by drying ginger (Zingiber officinale) rhizomes and grinding them to a fine powder.",
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
    heading: "Why Choose Our Dry Ginger Powder?",
    items: [
      {
        title: "Product Characteristics",
        text: "Review the product's documented appearance, aroma and texture before sourcing.",
        icon: "sprout",
      },
      {
        title: "Food Industry Applications",
        text: "Explore potential uses in bakery products, beverage mixes, spice blends and food formulations.",
        icon: "layers",
      },
      {
        title: "Bulk Order Enquiries",
        text: "Discuss your required quantities and sourcing requirements with our team.",
        icon: "users",
      },
      {
        title: "Specification Information",
        text: "Request available product specifications to help assess suitability for your application.",
        icon: "clipboard",
      },
      { title: "Packaging Options", text: "Contact our team to discuss available bulk packaging options.", icon: "package" },
    ],
  },
  uses: {
    eyebrow: "Food Industry Applications",
    heading: "Applications of Dry Ginger Powder",
    intro: "Select a category to see where dry ginger powder is typically used.",
    groups: [
      {
        title: "Bakery and Confectionery",
        text: "Dry ginger powder can be used in selected bakery products, biscuits, cakes and spiced confectionery.",
        items: ["Ginger biscuits", "Gingerbread", "Spiced cakes", "Spiced confectionery"],
        image: img(
          "dry-ginger-powder-bakery-applications.webp",
          "Ginger cookies arranged on a cooling rack beside milk",
          "bakery-and-confectionery",
        ),
      },
      {
        title: "Spice Blends and Seasonings",
        text: "Ground ginger adds a characteristic warm flavour to spice blends and seasoning formulations.",
        items: ["Garam masala", "Curry powders", "Seasoning mixes", "Spice rubs"],
        image: img(
          "dry-ginger-powder-spice-blends.webp",
          "Ground ginger powder surrounded by assorted whole spices",
          "spice-blends-and-seasonings",
        ),
      },
      {
        title: "Beverage Mixes",
        text: "Dry ginger powder may be used in selected beverage blends and powdered drink formulations.",
        items: ["Masala chai blends", "Ginger tea blends", "Instant drink mixes"],
        image: img(
          "dry-ginger-powder-beverage-mixes.webp",
          "A glass of ginger beverage beside fresh ginger roots",
          "beverage-mixes",
        ),
      },
      {
        title: "Food Processing",
        text: "Explore its potential use in suitable prepared-food and commercial food formulations.",
        items: ["Curries and ready meals", "Sauces and chutneys", "Marinades"],
        image: img(
          "dry-ginger-powder-food-processing.webp",
          "Ginger powder moving along a food processing line",
          "food-processing",
        ),
      },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "Bulk Dry Ginger Powder for Food Businesses",
    intro:
      "Whether you manufacture bakery products, prepare spice blends or produce beverage mixes, share your application and quantity requirements with our team to discuss suitable supply options.",
    items: [
      {
        title: "Food Manufacturers",
        text: "Discuss product requirements, intended applications and quantities for your manufacturing process.",
        icon: "flask",
      },
      {
        title: "Spice and Seasoning Businesses",
        text: "Enquire about product specifications and suitability for your spice or seasoning formulations.",
        icon: "layers",
      },
      {
        title: "Bakery and Beverage Producers",
        text: "Share your intended application and sourcing requirements to discuss potential supply options.",
        icon: "sprout",
      },
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
  moqBody: "Planning a bulk order? Contact our team to discuss your required quantity, packaging options and supply requirements.",
  storage: {
    heading: "Storage and Handling",
    text: "Store dry ginger powder in a clean, dry, tightly sealed container. Protect it from moisture, direct sunlight and strong odours. Follow the storage and shelf-life guidance provided in the product documentation.",
    points: [
      "Clean, dry, tightly sealed container",
      "Protect from moisture",
      "Keep out of direct sunlight",
      "Store away from strong odours",
    ],
  },
  faqs: {
    items: [
      {
        question: "What is dry ginger powder used for?",
        answer:
          "It is used in bakery products such as biscuits, gingerbread and spiced cakes, in spice blends and seasonings, in tea and powdered beverage blends, and in prepared foods such as sauces, marinades and ready meals. Check suitability for your recipe against the product specifications.",
      },
      {
        question: "What is the minimum order quantity?",
        answer: moq
          ? `Our minimum order quantity for dry ginger powder is ${moq}. Share your required quantity, packaging and destination, and our team will confirm availability.`
          : "Share your required quantity, packaging and destination, and our team will confirm availability and the order quantities we can supply.",
      },
      {
        question: "What packaging options are available?",
        answer:
          "Packaging is agreed with each enquiry, as per buyer requirements. Tell us your preferred pack type and size, and our team will confirm the available options with your quotation.",
      },
      {
        question: "Can I request product specifications?",
        answer:
          "Yes. Use the enquiry form on this page to request the available specifications. Grades, mesh size, moisture and other quality parameters are confirmed with each enquiry.",
      },
      {
        question: "How should dry ginger powder be stored?",
        answer:
          "Keep it in a clean, dry, tightly sealed container, protected from moisture, direct sunlight and strong odours, and reseal opened packs promptly. Follow the storage and shelf-life guidance provided in the product documentation.",
      },
      {
        question: "How can I enquire about bulk orders?",
        answer:
          "Fill in the enquiry form at the foot of this page with your required quantity, application, packaging and destination market, or reach our team through the Contact page. We will reply with availability and pricing.",
      },
    ],
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Dry Ginger Powder",
    body: "Share the mesh, quantity, packaging and destination you need, and our team will reply with availability and pricing.",
  },
  quoteIntro:
    "Tell us your required quantity, application and destination market. Our team can help you enquire about available specifications, packaging and bulk supply.",
  images: {
    // dry-ginger-powder-hero.webp — a wooden bowl of pale beige ginger powder beside dried ginger slices (16:10, rounded).
    hero: img("dry-ginger-powder-hero.webp", "Dry ginger roots and ground ginger powder in a bowl", "dry-ginger-powder-hero"),
    // A wide (2.2:1) photograph in the tall pill: the crop centres on the bowl
    // of powder, with the dried roots at its left edge.
    detail: img(
      "dry-ginger-powder-overview.webp",
      "Ground dry ginger powder beside dried ginger roots",
      "dry-ginger-powder-overview",
      "62% 50%",
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
