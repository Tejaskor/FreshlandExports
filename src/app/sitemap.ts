import type { MetadataRoute } from "next";

import { siteConfig, staticRoutes } from "@/config/site";
import { findLandingProduct } from "@/features/agri/content";
import { blogPosts } from "@/features/blog/data";
import { caseStudies, caseStudyHref } from "@/features/case-studies/data";
import { exportProductHref, exportProducts } from "@/features/products/export-catalogue";
import { absoluteUrl } from "@/lib/utils";

/**
 * /sitemap.xml — indexable pages only. Product landing pages with temporary
 * copy are noindex, so they stay out until final. Articles carry their own
 * publication (or revision) date; other pages have no recorded update date,
 * so they omit lastModified rather than claim every build as a change.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (route: string, lastModified?: string): MetadataRoute.Sitemap[number] => ({
    url: absoluteUrl(route, siteConfig.url),
    ...(lastModified ? { lastModified } : {}),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  });

  return [
    ...staticRoutes.map((route) => entry(route)),
    ...exportProducts
      .filter((product) => !findLandingProduct(product.slug))
      .map((product) => entry(exportProductHref(product.slug))),
    ...caseStudies.map((study) => entry(caseStudyHref(study.slug))),
    ...blogPosts.map((post) => entry(post.href, post.updated ?? post.published)),
  ];
}
