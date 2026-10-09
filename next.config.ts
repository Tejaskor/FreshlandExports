import type { NextConfig } from "next";

import { featureFlags } from "./src/config/features";

const nextConfig: NextConfig = {
  images: {
    // 75 stays the default; 90 is reserved for hero photography, where the
    // sources are already compressed WebP and a second 75% pass visibly softens them.
    qualities: [75, 90],
  },
  async redirects() {
    // Retitled articles: their slugs follow the title. Each earlier address
    // (/blog/<old>, /resources/<old>) goes straight to the final page.
    const retitled: readonly [string, string][] = [
      ["red-chilli-powder-buying-guide-heat-colour-and-grind", "/blog/red-chilli-powder-buying-guide-colour-heat-and-grind"],
      [
        "storing-red-chilli-powder-to-keep-its-colour-bright",
        "/blog/storage-and-handling-considerations-for-bulk-chilli-powder",
      ],
      ["red-chilli-powder-in-sauces-snacks-and-seasoning-blends", "/products/red-chilli-powder"],
    ];
    // The Blog lives at /blog and /blog/<slug>. Its earlier addresses under
    // Resources (/resources, /resources/<slug>) redirect in one hop; query
    // strings carry over.
    const blog = [
      ...retitled.flatMap(([slug, destination]) =>
        ["/blog", "/resources"].map((prefix) => ({ source: `${prefix}/${slug}`, destination, permanent: true })),
      ),
      { source: "/resources", destination: "/blog", permanent: true },
      { source: "/resources/:slug", destination: "/blog/:slug", permanent: true },
    ];
    // The Quality page was replaced by Our Signature Ingredients; keep old
    // links and bookmarks working.
    if (featureFlags.signatureIngredients) {
      return [...blog, { source: "/quality", destination: "/signature-ingredients", permanent: true }];
    }
    // Signature Ingredients is temporarily hidden: send its URLs (and the old
    // /quality link) to the product catalogue. Temporary redirects, so
    // browsers don't cache them once the page is restored.
    return [
      ...blog,
      { source: "/quality", destination: "/products", permanent: false },
      { source: "/signature-ingredients", destination: "/products", permanent: false },
      { source: "/signature-ingredients/:slug", destination: "/products", permanent: false },
    ];
  },
};

export default nextConfig;
