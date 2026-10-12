import { powderImg, powderSpecsNote, powdersCategory } from "@/features/agri/content/powders/helpers";
import { spiceFaqs, spiceSpecs } from "@/features/agri/content/spices/helpers";
import type { AgriProduct, ImageSlotData } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy. The blend recipe is
// agreed with each buyer, so no fixed composition is stated here.
const slug = "garam-masala";

/** Photography in public/images/products/Powder Product/Garam masala Powder/. */
function photo(file: string, alt: string, label: string, position?: string): ImageSlotData {
  return { file: `/images/products/Powder Product/Garam masala Powder/${file}`, alt, label, ...(position && { position }) };
}

export const garamMasala: AgriProduct = {
  slug,
  name: "Garam Masala",
  category: powdersCategory,
  // Deep cinnamon brown and toasted spice tones on a near-black green.
  theme: { accent: "#734128", deep: "#1B2B21", tint: "#F7F0E9", soft: "#DDC2AC" },
  hero: {
    eyebrow: "Premium Spice Blends",
    title: "Garam Masala",
    tagline: "Warm, layered, aromatic.",
    body: "A warm, aromatic blend of ground spices, prepared to each buyer's agreed recipe for blend brands, ready-meal makers, food service and importers.",
    highlights: ["Ground spice blend", "Recipe agreed per buyer", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Garam Masala",
    heading: "The Finishing Warmth of Indian Cooking",
    statement: "Many spices, one warm and fragrant blend.",
    body: [
      "Garam masala is a blend of ground spices at the heart of North Indian cooking, valued for its warm, rounded aroma rather than for heat.",
      "Typical blends draw on spices such as cumin, coriander, black pepper, cloves, cinnamon, green cardamom, bay leaf and nutmeg. Recipes vary by region and brand, so we prepare the blend to the composition agreed with each buyer.",
    ],
    highlights: [
      { label: "Type", value: "Ground spice blend" },
      { label: "Composition", value: "Agreed per buyer" },
      { label: "Colour", value: "Warm mid to dark brown" },
      { label: "Aroma", value: "Warm, sweet-spiced" },
      { label: "Flavour", value: "Rounded, aromatic" },
      { label: "Form", value: "Powder" },
    ],
  },
  features: {
    eyebrow: "Product Highlights",
    heading: "A Blend Made to Your Recipe",
    items: [
      { title: "Agreed Composition", text: "The spices and their proportions are agreed with each buyer.", icon: "clipboard" },
      { title: "Typical Spices", text: "Often cumin, coriander, pepper, cloves, cinnamon and cardamom.", icon: "layers" },
      { title: "Aroma", text: "Warm and sweet-spiced, rather than fiery.", icon: "sprout" },
      { title: "Colour", text: "Warm brown, varying with the recipe.", icon: "target" },
      { title: "Consistency", text: "Blended to the agreed recipe for each order.", icon: "shield" },
      { title: "Main Uses", text: "Curries, gravies, rice dishes and ready meals.", icon: "globe" },
    ],
  },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "Where Garam Masala Belongs",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      {
        title: "Curries & Gravies",
        text: "Added near the end of cooking for aroma.",
        items: ["Chicken curry", "Paneer dishes", "Dal makhani"],
        image: photo(
          "garam-masala-curry-applications.webp",
          "A brass kadai of mixed vegetable curry with cauliflower, peas, carrot and capsicum",
          "Curries and gravies",
        ),
      },
      {
        title: "Rice Dishes",
        text: "Warm depth for layered rice.",
        items: ["Biryani", "Pulao", "Spiced rice"],
        image: photo(
          "garam-masala-rice-biryani.webp",
          "A silver bowl of saffron biryani rice topped with fried onions and mint leaves",
          "Rice and biryani",
        ),
      },
      {
        title: "Meat & Marinades",
        text: "A base for rich, spiced marinades.",
        items: ["Kebabs", "Tikka", "Keema"],
        image: photo(
          "garam-masala-marinades.webp",
          "Chicken pieces coated in a red spiced yoghurt marinade, with lemon, garlic and ginger alongside",
          "Marinades",
        ),
      },
      { title: "Snacks & Vegetables", text: "Lifts everyday dishes and fillings.", items: ["Samosa fillings", "Chole", "Sabzi"] },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "For the Food Industry",
    items: [
      { title: "Spice Brands & Repackers", text: "Bulk garam masala blended to your recipe for retail packing.", icon: "layers" },
      { title: "Ready-Meal Manufacturers", text: "Consistent warm spice for curries, gravies and frozen meals.", icon: "flask" },
      { title: "Food Service", text: "One blend in place of many spices for busy kitchens.", icon: "users" },
      { title: "Snack & Seasoning Makers", text: "Aromatic seasoning for snacks and instant mixes.", icon: "sprout" },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Garam Masala Specifications",
    rows: spiceSpecs(
      "Garam Masala",
      [
        { label: "Composition", value: "As per buyer requirements" },
        { label: "Colour", value: "Warm brown, varies with recipe" },
        { label: "Aroma", value: "Warm, sweet-spiced" },
        { label: "Particle Size", value: "As per buyer requirements" },
      ],
      {
        form: "Ground blend",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight",
        applications: "Curries, rice dishes, marinades, ready meals",
      },
      slug,
    ),
    note: powderSpecsNote,
  },
  storage: {
    heading: "Keep the Aroma In",
    text: "A ground blend loses its aromatic oils faster than whole spices, so careful storage matters.",
    points: ["Airtight packaging", "Cool, dry storage", "Protect from light and heat", "Reseal after each use"],
  },
  faqs: {
    items: spiceFaqs("Garam masala", [
      { question: "What spices are in your garam masala?", answer: "The composition is agreed with each buyer. Typical blends include spices such as cumin, coriander, black pepper, cloves, cinnamon and cardamom." },
      { question: "Can you match our own recipe?", answer: "Yes — share your recipe or a reference sample, and our team will discuss how the blend can be prepared to it." },
      { question: "Is garam masala very hot?", answer: "It is warm and aromatic rather than fiery; the heat depends on the agreed recipe." },
      { question: "How are quality parameters specified?", answer: "Moisture and other quality parameters are confirmed with each quotation." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Garam Masala to Your Recipe",
    body: "Share your preferred composition, quantity, packaging and destination, and our team will reply with availability and pricing.",
  },
  images: {
    hero: photo(
      "garam-masala-hero.webp",
      "A wooden bowl of garam masala on a tray of whole cinnamon, cardamom, peppercorns, star anise, cumin, coriander and nutmeg",
      "Garam masala",
      "60% 50%",
    ),
    // Fallback for the "Snacks & Vegetables" applications photograph, unchanged.
    detail: powderImg(slug, "curry", "A pot of Kerala chicken curry with green chillies, a tomato and dried red chillies alongside", "garam-masala-curry.webp"),
    extra: [
      photo(
        "garam-masala-blend-composition.webp",
        "Small bowls of whole cinnamon, coriander seed, nutmeg, cumin, cloves and green cardamom on linen",
        "Blend composition",
      ),
    ],
  },
  /** Card images for this page's case studies only (the studies keep their own elsewhere). */
  caseStudyImages: {
    "supplying-a-curry-powder-blender": photo(
      "garam-masala-spice-blend-case-study.webp",
      "A brass bowl of ground spice blend among bay leaves, cardamom, star anise and dried red chillies",
      "Spice blending",
    ),
    "ground-spices-for-ready-meal-production": photo(
      "garam-masala-food-service-case-study.webp",
      "A brass bowl of garam masala with whole spices and a stone mortar in a kitchen",
      "Food service",
    ),
    "matching-a-house-garam-masala-recipe": photo(
      "garam-masala-custom-blend-case-study.webp",
      "Four bowls of ground spices, chilli, coriander, turmeric and a brown blend, with whole spices around them",
      "Custom blend",
    ),
  },
  sections: [
    { type: "hero", variant: "elongated" },
    { type: "intro", variant: "statement" },
    { type: "features", variant: "bento" },
    { type: "uses", variant: "gallery" },
    { type: "commercial", variant: "numbered" },
    { type: "specs", variant: "tiles" },
    { type: "storage" },
    { type: "faq", variant: "split" },
    { type: "related" },
    { type: "contact", variant: "band" },
  ],
};
