import { img } from "@/features/agri/content/helpers";
import type { AgriProduct, ImageSlotData } from "@/features/agri/types";
import { moqFor } from "@/features/products/moq";

/** A photograph from /images/products/Agricultural Products/Okra/. */
const photo = (file: string, alt: string, label: string): ImageSlotData => ({
  file: `/images/products/Agricultural Products/Okra/${file}`,
  alt,
  label,
});

// Size, grade, packaging and supply stay qualified until confirmed with each
// enquiry; no origin, shelf life, temperature or certification is stated.
const slug = "okra";

export const okra: AgriProduct = {
  slug,
  name: "Okra",
  // Deep green, soft green and warm cream — angled and geometric.
  theme: { accent: "#3F7A45", deep: "#183F28", tint: "#F6F2E8", soft: "#DCD5BF" },
  hero: {
    eyebrow: "Fresh Agricultural Products",
    title: "Fresh Okra",
    tagline: "Tender pods, carefully picked.",
    body: "Fresh okra sourced for its green colour, firm texture and suitable pod length, for food-service buyers, distributors and food processors.",
    highlights: ["Tender pods", "Selected by length", "Bulk supply available"],
  },
  intro: {
    eyebrow: "About Okra",
    heading: "Slender, Tender, Versatile",
    statement: "A favourite across many cuisines.",
    body: ["Okra is a slender green pod enjoyed in curries, stews and fried dishes."],
    highlights: [
      { label: "Product", value: "Fresh okra" },
      { label: "Type", value: "Fresh vegetable" },
    ],
  },
  features: {
    eyebrow: "Product Features",
    heading: "What Makes Good Okra",
    items: [
      { title: "Tender Pods", text: "Young pods selected according to buyer requirements." },
      { title: "Pod Length", text: "Length and size requirements agreed with the buyer." },
      { title: "Fresh Appearance", text: "Green colour and visible condition assessed during selection." },
      { title: "Culinary Uses", text: "Suitable for curries, stir-fries and other okra-based dishes." },
      { title: "Processing Applications", text: "Potential use in cutting, freezing and food preparation, subject to buyer specifications." },
    ],
  },
  uses: {
    eyebrow: "Applications",
    heading: "Popular Ways to Use Okra",
    intro: "Explore common culinary and food-processing applications for fresh okra, from traditional dishes to frozen vegetable products.",
    groups: [
      {
        title: "Curries & Stir-Fries",
        items: ["Bhindi masala", "Stir-fries", "Dry okra dishes"],
        image: photo("fresh-okra-curries-stir-fries.webp", "Indian okra curry cooked with tomatoes, onions and spices, garnished with fresh coriander", "Okra curry"),
      },
      {
        title: "Soups & Stews",
        items: ["Gumbo", "Vegetable stews", "Soups"],
        image: photo("fresh-okra-soups-stews.webp", "Okra and meat stew served with basmati rice in a ceramic plate", "Okra stew"),
      },
      {
        title: "Fried & Crispy",
        items: ["Crispy okra", "Fritters", "Snack preparations"],
        image: photo("fresh-okra-fried-crispy.webp", "Crispy spice-coated okra pieces served on a stainless steel platter", "Fried okra"),
      },
      {
        title: "Frozen & Processed",
        items: ["Cut okra", "Frozen vegetable products", "Prepared food applications"],
        image: photo(
          "fresh-okra-frozen-processed.webp",
          "Frost-covered sliced okra in a glass bowl beside fresh okra pods and a bag of frozen pieces",
          "Cut okra",
        ),
      },
    ],
  },
  specs: {
    eyebrow: "Product Details",
    heading: "Okra Specifications",
    rows: [
      { label: "Product Name", value: "Fresh Okra" },
      { label: "Product Type", value: "Fresh vegetable (okra pods)" },
      { label: "Appearance", value: "Green, ridged pods; condition and size subject to selection" },
      { label: "Colour", value: "Green" },
      { label: "Size / Grade", value: "As agreed with buyer requirements" },
      { label: "Packaging", value: "Confirmed according to buyer requirements" },
      { label: "Supply", value: "Subject to seasonal availability" },
      { label: "Storage", value: "Store under suitable temperature and humidity conditions for fresh okra" },
    ],
    note: "Final grades, sizing, packaging and supply details are confirmed with each enquiry.",
  },
  faqs: {
    items: [
      {
        question: "What kind of okra do you supply?",
        answer:
          "Fresh green okra pods, with size, length and selection requirements discussed according to buyer specifications and seasonal availability.",
      },
      {
        question: "What is okra used for?",
        answer: "Okra is commonly used in curries, stir-fries, soups, stews, fried dishes and food-processing applications.",
      },
      {
        question: "How should fresh okra be stored?",
        answer:
          "Handle okra gently and store it under suitable conditions for fresh produce. Avoid excessive moisture, rough handling and unsuitable temperatures.",
      },
      {
        question: "What is the minimum order quantity for fresh okra?",
        answer: `The minimum order quantity for fresh okra is ${moqFor(slug)}. Share your required quantity and destination, and we will confirm availability with your quotation.`,
      },
      {
        question: "How is fresh okra packed?",
        answer: "Packaging format and quantity are agreed according to buyer requirements, destination and availability.",
      },
    ],
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Bring Fresh Okra to Your Market",
    body: "Share your pod length, quantity and destination, and we will reply with availability and pricing.",
  },
  quoteName: "Fresh Okra",
  quoteIntro:
    "Share your required quantity, specifications and destination. Our team can review your enquiry and confirm availability, packaging options and pricing.",
  blogIntro:
    "Buyer guides to okra selection, careful handling, culinary applications and food-processing requirements.",
  images: {
    // Diagonal hero — fresh okra pods in a woven basket.
    hero: photo(
      "fresh-okra-product-features.webp",
      "Fresh green okra pods with natural ridges and water droplets arranged in a woven basket",
      "Fresh okra pods",
    ),
    // Detail — okra pods, one cut to show seeds (16:10).
    detail: img(slug, "detail", "Okra pods, one cut to show the seeds", "Cut okra"),
  },
  sections: [
    { type: "hero", variant: "diagonal", reverse: true },
    { type: "features", variant: "alternating" },
    { type: "uses", variant: "gallery" },
    { type: "specs", variant: "sheet" },
    { type: "faq", variant: "split" },
    { type: "contact", variant: "card" },
  ],
};
