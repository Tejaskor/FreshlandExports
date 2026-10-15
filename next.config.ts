import type { NextConfig } from "next";

import { featureFlags } from "./src/config/features";

/**
 * Baseline security headers on every response. No CSP yet: the site's inline
 * JSON-LD and Next's own inline scripts would need nonces first. Vercel adds
 * HSTS itself.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

const nextConfig: NextConfig = {
  // Hide the on-screen "N" indicator in development; build and runtime errors still show.
  devIndicators: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
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
    if (featureFlags.signatureIngredients) return blog;
    // Signature Ingredients is temporarily hidden: send its URLs to the
    // product catalogue. Temporary redirects, so browsers don't cache them
    // once the page is restored.
    return [
      ...blog,
      { source: "/signature-ingredients", destination: "/products", permanent: false },
      { source: "/signature-ingredients/:slug", destination: "/products", permanent: false },
    ];
  },
};

export default nextConfig;
