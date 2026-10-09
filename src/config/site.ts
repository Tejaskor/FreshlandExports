/**
 * Single source of truth for brand, navigation and contact data.
 * Imported by layout, SEO helpers, sitemap and robots.
 */

import type { IconName } from "@/components/ui/icon";
import { featureFlags } from "@/config/features";
import { catalogue, catalogueCategoryHref } from "@/features/products/catalogue";

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
    // The footer, /contact page and form error messages all read these.
    // The email is confirmed. PLACEHOLDER: the phone and address below are
    // not Freshland Exports' real details yet; replace them with confirmed ones.
    email: "info@freshlandexports.com",
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

export type NavLink = { label: string; href: string; description?: string; icon?: IconName };

/** The featured card beside a dropdown's links. */
export type NavFeature = {
  label: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  /** An existing site photograph. */
  image: string;
  alt: string;
  /** CSS object-position for the crop, e.g. "50% 35%" (default centred). */
  imagePosition?: string;
};

export type NavItem = {
  label: string;
  href: string;
  /** Renders a caret and, on desktop, signals a future mega-menu. */
  hasMenu?: boolean;
  /**
   * A small dropdown of links. The item itself is then a menu button, not a
   * link; `href` only keys it and marks it active on those pages.
   */
  links?: readonly NavLink[];
  /** Featured card shown beside `links`. */
  featured?: NavFeature;
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
  { label: "Our Farms", href: "/farms", hint: "Soil, seed and the growers behind it" },
  // Temporarily hidden — see featureFlags.signatureIngredients.
  ...(featureFlags.signatureIngredients
    ? [
        {
          label: "Our Signature Ingredients",
          href: "/signature-ingredients",
          hint: "Science-backed botanicals for global industries",
        },
      ]
    : []),
  // Formerly "R&D Lab"; the /r-and-d URL is kept so existing links work.
  { label: "Knowledge Center", href: "/r-and-d", hint: "Extraction, assay and validation" },
  {
    label: "Resources",
    href: "/blog",
    hint: "Insights on products, sourcing and supply",
    links: [
      {
        label: "Blogs",
        href: "/blog",
        description: "Buyer guides on agricultural products, fruits and spices — sourcing, quality and handling.",
        icon: "clipboard",
      },
      {
        label: "Case Studies",
        href: "/case-studies",
        description: "Illustrative sourcing scenarios across powders, spices, fresh produce and fruits.",
        icon: "target",
      },
    ],
    featured: {
      label: "Blog",
      title: "Freshland Exports Blog",
      description:
        "Practical guidance on agricultural sourcing, quality checks, storage and handling, and food applications.",
      cta: "Explore Our Blog",
      href: "/blog",
      image: "/images/Resources/Blog/freshland-exports-blog-card.webp",
      alt: "Growers inspecting fresh herbs, chillies, vegetables and spices laid out in crates at the edge of a farm",
      // The growers' faces and hands sit above centre; keep them in frame.
      imagePosition: "50% 35%",
    },
  },
  { label: "About Us", href: "/about", hint: "Who we are and how we began" },
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
      { label: "Knowledge Center", href: "/r-and-d" },
      { label: "Our Farms", href: "/farms" },
      ...(featureFlags.signatureIngredients
        ? [{ label: "Our Signature Ingredients", href: "/signature-ingredients" }]
        : []),
      { label: "Blog", href: "/blog" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    // The catalogue's own categories, each linking to its section on /products.
    title: "Our Products",
    items: catalogue.map((category) => ({ label: category.heading, href: catalogueCategoryHref(category) })),
  },
] as const;

export const legalNav: readonly NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Image Credits", href: "/image-credits" },
  { label: "Sitemap", href: "/site-map" },
] as const;

/** Routes emitted into sitemap.xml. Extend as real pages land. */
export const staticRoutes: readonly string[] = [
  "/",
  "/products",
  ...(featureFlags.signatureIngredients ? ["/signature-ingredients"] : []),
  "/about",
  "/farms",
  "/r-and-d",
  "/blog",
  "/case-studies",
  "/certificates",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/image-credits",
  "/site-map",
] as const;
