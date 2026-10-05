import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

type PageMeta = {
  title: string;
  description?: string;
  /** Site-relative path, e.g. "/science". */
  path?: string;
  /** Set on pages that should stay out of the index. */
  noIndex?: boolean;
  /** Share image for Open Graph and Twitter, as a site-relative path. */
  image?: { url: string; alt: string };
};

/**
 * Per-page metadata built on top of the root defaults. Only the fields a page
 * actually overrides need to be passed.
 */
export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  noIndex = false,
  image,
}: PageMeta): Metadata {
  const url = absoluteUrl(path, siteConfig.url);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      ...(image ? { images: [{ url: image.url, alt: image.alt }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image.url] } : {}),
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}

/**
 * Organisation JSON-LD. Rendered once in the root layout so every page
 * carries the same verified entity data.
 */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.locality,
      addressRegion: siteConfig.contact.address.region,
      addressCountry: siteConfig.contact.address.country,
    },
    sameAs: siteConfig.social.map((item) => item.href),
  };
}

/** BreadcrumbList JSON-LD from a page's breadcrumb trail. */
export function breadcrumbJsonLd(crumbs: readonly { label: string; href?: string }[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      // The last crumb is the page itself.
      item: absoluteUrl(crumb.href ?? path, siteConfig.url),
    })),
  };
}

/** FAQPage JSON-LD; the questions must match those visible on the page. */
export function faqJsonLd(faqs: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/**
 * Product JSON-LD for an export product. Prices are quoted per order, so no
 * offer is published.
 */
export function productJsonLd({
  name,
  description,
  path,
  image,
  category,
}: {
  name: string;
  description: string;
  path: string;
  image: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: absoluteUrl(path, siteConfig.url),
    image: absoluteUrl(image, siteConfig.url),
    category,
    brand: { "@type": "Brand", name: siteConfig.name },
    manufacturer: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    countryOfOrigin: "India",
  };
}
