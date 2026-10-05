import { spiceFaqs, spiceImg, spiceSpecs, spiceSpecsNote, spicesCategory } from "@/features/agri/content/spices/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "cinnamon";

export const cinnamon: AgriProduct = {
  slug,
  name: "Cinnamon",
  category: spicesCategory,
  // Warm cinnamon brown with the existing greens and cream — layered.
  theme: { accent: "#8E4C24", deep: "#1F4A2E", tint: "#F8F0E7", soft: "#E6C9AD" },
  hero: {
    eyebrow: "Premium Whole Spices",
    title: "Cinnamon",
    tagline: "Sweet warmth, rolled by nature.",
    body: "Cinnamon quills and bark with a sweet, woody aroma, for spice processors, bakeries, beverage makers and distributors.",
    highlights: ["Quills and bark", "Sweet, woody aroma", "Bulk supply"],
    secondary: "enquire",
  },
  intro: {
    eyebrow: "Introducing Cinnamon",
    heading: "The Bark of Warmth",
    statement: "Sweet, woody and comforting.",
    body: [
      "Cinnamon is the dried inner bark of trees in the Cinnamomum genus, curled into quills as it dries.",
      "Its sweet, woody warmth features in baking, desserts, savoury dishes and hot drinks. Final species and grade details will be added here.",
    ],
    highlights: [
      { label: "Botanical", value: "Cinnamomum spp." },
      { label: "Form", value: "Quills, bark" },
      { label: "Colour", value: "Light to reddish brown" },
      { label: "Aroma", value: "Sweet, woody" },
    ],
  },
  features: { eyebrow: "", heading: "", items: [] },
  uses: {
    eyebrow: "Culinary Applications",
    heading: "From Oven to Cup",
    intro: "Temporary overview — replace with final culinary applications.",
    groups: [
      { title: "Baking", text: "The classic spice of sweet bakes.", items: ["Cinnamon rolls", "Cakes", "Cookies"], image: spiceImg(slug, "applications", "Cinnamon rolls with cinnamon sticks", "cinnamon-applications.webp") },
      { title: "Beverages", text: "Warming drinks and infusions.", items: ["Chai", "Mulled drinks", "Coffee"], image: spiceImg(slug, "use-drinks", "Hot drink with a cinnamon stick", "cinnamon-use-drinks.webp") },
      { title: "Savoury Dishes", text: "Depth for rice and slow cooking.", items: ["Biryani", "Tagines", "Curries"], image: spiceImg(slug, "use-savoury", "Biryani with whole cinnamon", "cinnamon-use-savoury.webp") },
      { title: "Desserts", text: "A warm finish for sweets.", items: ["Rice pudding", "Apple desserts", "Custards"], image: spiceImg(slug, "use-desserts", "Apple dessert dusted with cinnamon", "cinnamon-use-desserts.webp") },
    ],
  },
  commercial: {
    eyebrow: "Commercial Applications",
    heading: "For Food Businesses",
    items: [
      { title: "Bakeries & Confectionery", text: "Quills for grinding and flavouring baked goods." },
      { title: "Beverage Makers", text: "Whole quills and cuts for tea and drink blends." },
      { title: "Spice Grinders & Blenders", text: "Bark for powders and spice mixes." },
      { title: "Distributors & Retail", text: "Quills for wholesale and retail packs." },
    ],
  },
  process: {
    eyebrow: "Product Journey",
    heading: "From Bark to Quill",
    steps: [
      { title: "Harvest", text: "Shoots are cut from the tree." },
      { title: "Peeling", text: "The inner bark is carefully stripped." },
      { title: "Drying", text: "The bark curls into quills as it dries." },
      { title: "Grading & Packing", text: "Sorted and packed to order." },
    ],
  },
  specs: {
    eyebrow: "Product Specifications",
    heading: "Cinnamon Specifications",
    rows: spiceSpecs(
      "Cinnamon",
      [
        { label: "Species", value: "To be confirmed", pending: true },
        { label: "Appearance", value: "Rolled quills and bark pieces" },
        { label: "Colour", value: "Light to reddish brown" },
        { label: "Aroma", value: "Sweet, woody" },
      ],
      {
        form: "Quills, bark",
        packaging: "As per buyer requirements",
        storage: "Cool, dry, airtight",
        applications: "Baking, beverages, blends",
      },
      slug,
    ),
    note: spiceSpecsNote,
  },
  faqs: {
    eyebrow: "FAQ",
    heading: "Cinnamon Questions",
    items: spiceFaqs("Cinnamon", [
      { question: "Which type of cinnamon do you supply?", answer: "The species and grade will be confirmed here; our team can advise with each enquiry." },
      { question: "Do you supply cinnamon powder?", answer: "This page covers quills and bark; other forms can be discussed with our team." },
      { question: "How should cinnamon be stored?", answer: "In airtight packaging in a cool, dry place, away from light." },
    ], slug),
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Source Warm Cinnamon",
    body: "Share the form, quantity and destination you need, and our team will reply with availability and pricing.",
  },
  images: {
    // cinnamon-hero.webp — a tall bundle of cinnamon quills tied with string (3:5).
    hero: spiceImg(slug, "hero", "A bundle of cinnamon quills tied with string", "cinnamon-hero.webp"),
    // cinnamon-detail.webp — cinnamon bark close-up (16:10).
    detail: spiceImg(slug, "detail", "Close-up of curled cinnamon bark", "cinnamon-detail.webp"),
    extra: [
      // cinnamon-ground.webp — ground cinnamon in a round bowl (1:1).
      spiceImg(slug, "ground", "Ground cinnamon in a round bowl", "cinnamon-ground.webp"),
      // cinnamon-star-anise.webp — cinnamon with star anise (1:1).
      spiceImg(slug, "star-anise", "Cinnamon sticks with star anise", "cinnamon-star-anise.webp"),
    ],
  },
  sections: [
    { type: "hero", variant: "collage" },
    { type: "intro", variant: "overlap" },
    { type: "uses", variant: "gallery" },
    { type: "commercial", variant: "alternating" },
    { type: "process" },
    { type: "specs", variant: "tiles" },
    { type: "faq", variant: "center" },
    { type: "contact", variant: "split" },
  ],
};
