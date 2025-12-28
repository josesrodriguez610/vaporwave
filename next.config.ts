import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  /* config options here */ images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-dfw5-3.cdninstagram.com",
      },
    ],
  },
};

export default nextConfig;
