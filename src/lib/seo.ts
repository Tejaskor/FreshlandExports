import { existsSync } from "node:fs";
import { join } from "node:path";

import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

export type ShareImage = { url: string; alt: string; width?: number; height?: number };

/** A branded 1200 × 630 card from public/images/og (built by scripts/generate-og-images.mjs). */
export function ogCard(name: string, alt: string): ShareImage {
  return { url: `/images/og/${name}.jpg`, alt, width: 1200, height: 630 };
}

/** The site-wide fallback share image. */
export const defaultShareImage = ogCard(
  "freshland-exports",
  "Freshland Exports: agricultural products, botanical powders, fruits and spices from India",
);

/** Whether a site-relative image exists in public/ (absolute URLs are trusted). */
function onDisk(url: string) {
  return !url.startsWith("/") || existsSync(join(process.cwd(), "public", url));
}

/** The first candidate whose file exists, or undefined. */
export function existingImage(...candidates: readonly (ShareImage | null | undefined)[]): ShareImage | undefined {
  return candidates.find((candidate): candidate is ShareImage => Boolean(candidate?.url) && onDisk(candidate!.url));
}

type PageMeta = {
  title: string;
  description?: string;
  /** Site-relative path, e.g. "/science". */
  path?: string;
  /** Set on pages that should stay out of the index. */
  noIndex?: boolean;
  /**
   * Share image for Open Graph and Twitter, as a site-relative path (made
   * absolute through the root layout's metadataBase). Pages without one, or
   * whose file is missing, share the branded Freshland Exports card.
   */
  image?: ShareImage;
  /** Marks the page as an article in Open Graph, with its publication date. */
  article?: { publishedTime: string; section?: string };
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
  article,
}: PageMeta): Metadata {
  const url = absoluteUrl(path, siteConfig.url);
  const share = existingImage(image) ?? defaultShareImage;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...(article
        ? { type: "article", publishedTime: article.publishedTime, section: article.section }
        : { type: "website" }),
      url,
      title,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [{ url: share.url, alt: share.alt, ...(share.width && { width: share.width, height: share.height }) }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: share.url, alt: share.alt }],
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

export type FaqEntry = { question: string; answer: string };

/**
 * FAQPage JSON-LD; the questions must be those visible on the page. Entries
 * with an empty question or answer are left out, and null is returned when
 * none remain, so no empty FAQPage is ever published.
 */
export function faqJsonLd(faqs: readonly FaqEntry[]) {
  const complete = faqs.filter((faq) => faq.question.trim() && faq.answer.trim());
  if (complete.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: complete.map((faq) => ({
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

/**
 * BlogPosting JSON-LD for a Blog article. Articles carry no byline, so the
 * organisation is both author and publisher.
 */
export function blogPostingJsonLd({
  title,
  description,
  path,
  image,
  published,
  section,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  published: string;
  section: string;
}) {
  const organization = { "@type": "Organization", name: siteConfig.name, url: siteConfig.url };
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: absoluteUrl(path, siteConfig.url),
    mainEntityOfPage: absoluteUrl(path, siteConfig.url),
    image: absoluteUrl(image, siteConfig.url),
    datePublished: published,
    articleSection: section,
    author: organization,
    publisher: organization,
  };
}
