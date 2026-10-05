import type { IconName } from "@/components/ui/icon";
import type { MediaSlot } from "@/types/media";

// Re-exported so homepage sections keep a single import for their content.
export { categories } from "@/features/categories/data";
export { products } from "@/features/products/data";

/**
 * Homepage-only content. Catalogue data (products, categories) is owned by
 * its own feature and re-exported above, so the homepage composes it rather
 * than duplicating it.
 *
 * Figures below are illustrative placeholders for the brand, not audited data.
 */

export const hero = {
  eyebrow: "Plant-based ingredients",
  headline: { lead: "Nourishing", emphasisPrefix: "People.", emphasis: "Naturally." },
  body: "High-quality botanical ingredients for food, nutraceutical, cosmetic and wellness industries.",
  primaryCta: { label: "Explore Our Products", href: "/products" },
  secondaryCta: { label: "Our Story", href: "/about" },
  script: ["Rooted in soil.", "Trusted worldwide."],
  media: {
    image: "/images/home/hero/hero-facility.webp",
    alt: "The Freshland Exports botanical extraction facility at sunrise, framed by landscaped greenery and forested hills",
    art: "facility",
  } satisfies MediaSlot,
} as const;

/** Certification marks shown in the hero carousel, in display order. */
export const certifications: readonly {
  name: string;
  image: string;
  width: number;
  height: number;
}[] = [
  { name: "EU Organic", image: "/images/home/hero/EU Organic.png", width: 1536, height: 1024 },
  { name: "USDA Organic", image: "/images/home/hero/USDA Organic.png", width: 1284, height: 1225 },
  { name: "India Organic", image: "/images/home/hero/India Organic.png", width: 1278, height: 1230 },
  { name: "Spices Board India", image: "/images/home/hero/Spices Board India.png", width: 1254, height: 1254 },
  { name: "FSSAI", image: "/images/home/hero/FSSAI.png", width: 1774, height: 887 },
  { name: "FIEO", image: "/images/home/hero/FIEO.png", width: 1353, height: 1162 },
  { name: "APEDA", image: "/images/home/hero/APEDA.png", width: 1334, height: 1179 },
  { name: "FSSC 22000", image: "/images/home/hero/FSSC 22000.png", width: 2172, height: 724 },
  { name: "Halal India", image: "/images/home/hero/Halal India.png", width: 1254, height: 1254 },
  { name: "KBD", image: "/images/home/hero/KBD.png", width: 566, height: 541 },
  { name: "ZED Certification", image: "/images/home/hero/Zed Certification.png", width: 600, height: 497 },
  { name: "IEC Code", image: "/images/home/hero/ICE-Certificate.png", width: 971, height: 257 },
] as const;

export const stats: readonly { value: string; label: string }[] = [
  { value: "3+", label: "Years of Experience" },
  { value: "50+", label: "Global Clients" },
  { value: "10+", label: "Countries Served" },
  { value: "100+", label: "Premium Products" },
] as const;


export const story = {
  eyebrow: ["Global ingredients", "Natural possibilities"],
  heading: "Connecting Nature Across the World",
  body: "We import and export high-quality organic ingredients, bringing the best of nature to global markets. Trusted sourcing, reliable supply and sustainable partnerships for a healthier tomorrow.",
  cta: { label: "Explore Our Products", href: "/products" },
  features: [
    { icon: "sprout", label: "Sustainably Sourced" },
    { icon: "shield", label: "Quality Assured" },
    { icon: "globe", label: "Global Export Reach" },
  ] as readonly { icon: IconName; label: string }[],
  media: {
    image: "/images/home/story/across-the-world.webp",
    alt: "Bowls of green botanical powder and seeds among fresh leaves, with a container ship at port and a world map of trade routes behind",
    art: "jar",
  } satisfies MediaSlot,
} as const;


export const sustainability = {
  eyebrow: "Sustainable by nature",
  heading: "Caring for People and the Planet",
  body: "From responsible sourcing to eco-friendly processes, sustainability is at the heart of everything we do.",
  cta: { label: "Our Sustainability Efforts", href: "/sustainability" },
  points: [
    {
      icon: "handshake",
      title: "Ethical Sourcing",
      description: "Supporting farming communities",
    },
    {
      icon: "recycle",
      title: "Reduced Environmental Impact",
      description: "Cleaner, greener processes",
    },
    {
      icon: "seedling",
      title: "A Healthier Tomorrow",
      description: "For future generations",
    },
  ] as readonly { icon: IconName; title: string; description: string }[],
  media: {
    image: "/images/home/sustainability/sustainable-farmland.webp",
    alt: "Rows of organic crops on rolling farmland running toward mountains at sunrise",
    art: "field",
  } satisfies MediaSlot,
} as const;

export const contact = {
  eyebrow: "Let's connect",
  heading: "We're Here to Support Your Ingredient Needs",
  body: "Have a question or need a custom solution? Our team is ready to help.",
  cta: { label: "Contact Us", href: "/contact" },
  formTitle: "Send Us a Message",
} as const;
