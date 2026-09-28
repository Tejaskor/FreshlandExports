import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 75 stays the default; 90 is reserved for hero photography, where the
    // sources are already compressed WebP and a second 75% pass visibly softens them.
    qualities: [75, 90],
  },
  // The Quality page was replaced by Our Signature Ingredients; keep old
  // links and bookmarks working.
  async redirects() {
    return [{ source: "/quality", destination: "/signature-ingredients", permanent: true }];
  },
};

export default nextConfig;
