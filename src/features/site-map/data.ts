import { featureFlags } from "@/config/features";
import { blogListHref, usedCategories } from "@/features/blog/data";
import { caseStudies, caseStudyHref } from "@/features/case-studies/data";
import { catalogue, catalogueCategoryHref, catalogueHref } from "@/features/products/catalogue";

/**
 * The human-readable site map (/site-map): every public page, grouped as the
 * header and footer group them. Products come from the central catalogue and
 * blog categories from the Blog, so new pages appear here without edits.
 */

export type SiteMapLink = { label: string; href: string; children?: readonly SiteMapLink[] };
export type SiteMapGroup = { title: string; links: readonly SiteMapLink[] };

export const siteMapGroups: readonly SiteMapGroup[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Our Farms", href: "/farms" },
      ...(featureFlags.signatureIngredients
        ? [{ label: "Our Signature Ingredients", href: "/signature-ingredients" }]
        : []),
      { label: "Knowledge Center", href: "/r-and-d" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Certificates", href: "/certificates" },
      { label: "Contact Us", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Image Credits", href: "/image-credits" },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Blog",
        href: "/blog",
        children: usedCategories.map((category) => ({ label: category, href: blogListHref({ category }) })),
      },
      {
        label: "Case Studies",
        href: "/case-studies",
        children: caseStudies.map((study) => ({ label: study.title, href: caseStudyHref(study.slug) })),
      },
      { label: "XML Sitemap", href: "/sitemap.xml" },
    ],
  },
];

/** The product range, one branch per catalogue category. */
export const siteMapProducts: SiteMapGroup = {
  title: "Our Products",
  links: catalogue.map((category) => ({
    label: category.heading,
    href: catalogueCategoryHref(category),
    children: category.products.map((product) => ({ label: product.name, href: catalogueHref(product.slug) })),
  })),
};
