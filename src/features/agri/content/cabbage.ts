import { freshSpecs, img, specsNote } from "@/features/agri/content/helpers";
import type { AgriProduct } from "@/features/agri/types";

// TEMPORARY content — replace with final product copy.
const slug = "cabbage";

export const cabbage: AgriProduct = {
  slug,
  name: "Cabbage",
  // Fresh sage, leafy green and cream — layered and botanical.
  theme: { accent: "#4A8F4F", deep: "#1E4A2E", tint: "#EEF4E8", soft: "#CFE0C5" },
  hero: {
    eyebrow: "Fresh Agricultural Products",
    title: "Fresh Cabbage",
    tagline: "Crisp, tightly layered heads.",
    body: "Firm, fresh cabbage heads selected for weight and freshness, supplied to wholesale markets, food processors and food-service buyers.",
    highlights: ["Firm, compact heads", "Carefully selected", "Bulk supply available"],
  },
  intro: {
    eyebrow: "About Our Cabbage",
    heading: "Layer upon Layer of Freshness",
    statement: "Crisp leaves, mild flavour, endless uses.",
    body: [
      "Cabbage is a leafy vegetable with tightly packed layers, enjoyed raw in salads and slaws or cooked in soups, stir-fries and stews.",
      "Final variety, head weight and packing information will be added here once confirmed.",
    ],
    highlights: [
      { label: "Product", value: "Fresh cabbage" },
      { label: "Type", value: "Leafy vegetable" },
      { label: "Heads", value: "Firm and compact" },
      { label: "Colour", value: "Green, varies by variety" },
    ],
  },
  features: {
    eyebrow: "Product Features",
    heading: "Fresh from the First Leaf",
    items: [
      { title: "Crisp Texture", text: "Tightly packed leaves that stay crisp in salads and slaws.", icon: "layers" },
      { title: "Mild Flavour", text: "A gentle flavour that suits many cuisines.", icon: "sprout" },
      { title: "Good Keeping", text: "Firm heads that travel well when stored correctly.", icon: "shield" },
      { title: "Versatile", text: "Used raw, cooked, fermented and processed.", icon: "target" },
      { title: "Processing Ready", text: "Suited to shredding, cutting and pickling lines.", icon: "flask" },
      { title: "Global Staple", text: "A familiar vegetable in markets worldwide.", icon: "globe" },
    ],
  },
  uses: {
    eyebrow: "Applications",
    heading: "Ways Buyers Use Cabbage",
    intro: "Temporary overview — to be replaced with final applications.",
    groups: [
      { title: "Fresh Salads", text: "Shredded raw for crunch.", items: ["Salads", "Coleslaw", "Wraps"], image: img(slug, "use-salad", "Fresh shredded cabbage salad", "Cabbage salad") },
      { title: "Cooked Dishes", text: "Soft and sweet when cooked.", items: ["Stir-fries", "Soups", "Stews"], image: img(slug, "use-cooked", "Stir-fried cabbage in a pan", "Cooked cabbage") },
      { title: "Fermented", text: "The base of classic ferments.", items: ["Sauerkraut", "Kimchi", "Pickles"], image: img(slug, "use-fermented", "Jars of fermented cabbage", "Fermented cabbage") },
      { title: "Food Processing", text: "For cut and ready-to-eat lines.", items: ["Shredded packs", "Ready meals", "Frozen mixes"], image: img(slug, "use-processing", "Shredded cabbage in a processing line", "Processed cabbage") },
    ],
  },
  specs: {
    eyebrow: "Product Details",
    heading: "Cabbage Specifications",
    rows: freshSpecs(
      [
        { label: "Product Name", value: "Fresh Cabbage" },
        { label: "Product Type", value: "Fresh leafy vegetable" },
        { label: "Appearance", value: "Round, firm, compact heads" },
        { label: "Colour", value: "Green, varies by variety" },
      ],
      [{ label: "Storage", value: "Cool, humid, well-ventilated conditions" }],
    ),
    note: specsNote,
  },
  cta: {
    eyebrow: "Export Enquiry",
    heading: "Supply Fresh Cabbage to Your Market",
    body: "Share your head size, quantity and destination, and our team will reply with availability and pricing.",
  },
  images: {
    // Split hero — fresh green cabbage heads, one halved (5:4).
    hero: img(slug, "hero", "Fresh green cabbage heads, one cut in half", "Fresh cabbage heads"),
    // Overlap intro — close-up of layered cabbage leaves (16:10).
    detail: img(slug, "detail", "Close-up of layered cabbage leaves", "Cabbage leaf layers"),
  },
  sections: [
    { type: "hero", variant: "split" },
    { type: "intro", variant: "overlap" },
    { type: "features", variant: "band" },
    { type: "uses", variant: "gallery" },
    { type: "specs", variant: "table" },
    { type: "contact", variant: "band" },
  ],
};
