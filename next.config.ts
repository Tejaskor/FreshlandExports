import type { NextConfig } from "next";

import { featureFlags } from "./src/config/features";

const nextConfig: NextConfig = {
  images: {
    // 75 stays the default; 90 is reserved for hero photography, where the
    // sources are already compressed WebP and a second 75% pass visibly softens them.
    qualities: [75, 90],
  },
  async redirects() {
    // The Blog moved under Resources (/resources, /resources/<slug>); keep
    // the earlier /blog links working.
    const blog = [
      { source: "/blog", destination: "/resources", permanent: true },
      { source: "/blog/:slug", destination: "/resources/:slug", permanent: true },
      // Red Chilli Powder articles retitled (their slugs follow the title).
      {
        source: "/resources/red-chilli-powder-buying-guide-heat-colour-and-grind",
        destination: "/resources/red-chilli-powder-buying-guide-colour-heat-and-grind",
        permanent: true,
      },
      {
        source: "/resources/storing-red-chilli-powder-to-keep-its-colour-bright",
        destination: "/resources/storage-and-handling-considerations-for-bulk-chilli-powder",
        permanent: true,
      },
      {
        source: "/resources/red-chilli-powder-in-sauces-snacks-and-seasoning-blends",
        destination: "/products/red-chilli-powder",
        permanent: true,
      },
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
