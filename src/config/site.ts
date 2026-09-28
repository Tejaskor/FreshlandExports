/**
 * Single source of truth for brand, navigation and contact data.
 * Imported by layout, SEO helpers, sitemap and robots.
 */

export const siteConfig = {
  name: "Freshland Exports",
  shortName: "Freshland",
  wordmarkAccent: "Exports",
  tagline: "Pure botanicals. Proven science.",
  description:
    "High-quality botanical ingredients for the food, nutraceutical, cosmetic and wellness industries — cultivated, extracted and analytically validated in India.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://freshland-exports.example.com",
  locale: "en_IN",
  lang: "en",
  themeColor: "#14452f",
  keywords: [
    "botanical ingredients",
    "organic herbal extracts",
    "nutraceutical ingredients supplier",
    "herbal powders",
    "plant enzymes",
    "probiotics manufacturer",
  ],
  contact: {
    email: "enquiry@freshland-exports.example.com",
    phone: "+91 20 4000 1200",
    address: {
      street: "Botanical Estate Road",
      locality: "Pune",
      region: "Maharashtra",
      country: "India",
    },
  },
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
    { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
  ],
} as const;

export type NavItem = {
  label: string;
  href: string;
  /** Renders a caret and, on desktop, signals a future mega-menu. */
  hasMenu?: boolean;
  /** Short line used in the expanded mobile menu. */
  hint?: string;
};

export const primaryNav: readonly NavItem[] = [
  {
    label: "Products",
    href: "/products",
    hasMenu: true,
    hint: "Extracts, powders, enzymes and cultures",
  },
  { label: "About Us", href: "/about", hint: "Who we are and how we began" },
  { label: "Our Farms", href: "/farms", hint: "Soil, seed and the growers behind it" },
  {
    label: "Our Signature Ingredients",
    href: "/signature-ingredients",
    hint: "Science-backed botanicals for global industries",
  },
  { label: "R&D Lab", href: "/r-and-d", hint: "Extraction, assay and validation" },
  {
    label: "Certificates",
    href: "/certificates",
    hint: "Certifications and registrations we hold",
  },
] as const;

export const footerNav: readonly { title: string; items: readonly NavItem[] }[] = [
  {
    title: "Quick Links",
    items: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "R&D Lab", href: "/r-and-d" },
      { label: "Our Farms", href: "/farms" },
      { label: "Our Signature Ingredients", href: "/signature-ingredients" },
      { label: "Journal", href: "/journal" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Our Products",
    items: [
      { label: "Botanical Extracts", href: "/categories/botanical-extracts" },
      { label: "Herbal Powders", href: "/categories/herbal-powders" },
      { label: "Enzymes", href: "/categories/enzymes" },
      { label: "Probiotics", href: "/categories/probiotics" },
      // No route of their own yet — point at the catalogue rather than a 404.
      { label: "Branded Ingredients", href: "/products" },
      { label: "Custom Solutions", href: "/products" },
    ],
  },
] as const;

export const legalNav: readonly NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Sitemap", href: "/sitemap.xml" },
] as const;

/** Routes emitted into sitemap.xml. Extend as real pages land. */
export const staticRoutes: readonly string[] = [
  "/",
  "/products",
  "/signature-ingredients",
  "/about",
  "/farms",
  "/r-and-d",
  "/categories",
  "/resources",
  "/certificates",
  "/contact",
] as const;
