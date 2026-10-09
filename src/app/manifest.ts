import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

/**
 * /manifest.webmanifest, linked automatically by Next.js. A website, not an
 * installable app, so it opens in the browser. Icons are the existing app
 * icons; a 192 × 192 and a 512 × 512 PNG are still needed for full PWA
 * install support.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description:
      "Fresh agricultural produce, powder products, fresh fruits and whole spices from India, supplied in bulk for wholesale, food-service, processing and export buyers.",
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: siteConfig.themeColor,
    lang: siteConfig.lang,
    icons: [
      { src: "/icon.png", sizes: "256x256", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
