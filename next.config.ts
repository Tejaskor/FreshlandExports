import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 75 stays the default; 90 is reserved for hero photography, where the
    // sources are already compressed WebP and a second 75% pass visibly softens them.
    qualities: [75, 90],
  },
};

export default nextConfig;
