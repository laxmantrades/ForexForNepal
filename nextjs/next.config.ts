import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Disable React Strict Mode in development
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ], // Add all trusted image domains
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
