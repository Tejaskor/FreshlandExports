import type { MetadataRoute } from "next";

import { siteConfig, staticRoutes } from "@/config/site";
import { exportProductHref, exportProducts } from "@/features/products/export-catalogue";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [...staticRoutes, ...exportProducts.map((product) => exportProductHref(product.slug))];

  return routes.map((route) => ({
    url: absoluteUrl(route, siteConfig.url),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
