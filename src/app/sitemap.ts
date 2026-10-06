import type { MetadataRoute } from "next";

import { siteConfig, staticRoutes } from "@/config/site";
import { findLandingProduct } from "@/features/agri/content";
import { blogPosts } from "@/features/blog/data";
import { exportProductHref, exportProducts } from "@/features/products/export-catalogue";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Agricultural landing pages with temporary copy stay out until final.
  const routes = [
    ...staticRoutes,
    ...exportProducts
      .filter((product) => !findLandingProduct(product.slug))
      .map((product) => exportProductHref(product.slug)),
    ...blogPosts.map((post) => post.href),
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route, siteConfig.url),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
