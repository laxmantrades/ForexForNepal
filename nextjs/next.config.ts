import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['https://lh3.googleusercontent.com', ], // Add all trusted image domains
  },
};

export default nextConfig;
