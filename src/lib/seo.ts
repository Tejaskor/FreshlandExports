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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
