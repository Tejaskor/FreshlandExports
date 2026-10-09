import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

/**
 * /robots.txt. Every page and asset stays crawlable: the site has no API or
 * admin routes, and pages kept out of search use a noindex meta tag instead,
 * which crawlers can only read if they may fetch the page.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml", siteConfig.url),
  };
}
