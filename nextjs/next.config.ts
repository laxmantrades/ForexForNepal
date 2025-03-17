import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Disable React Strict Mode in development
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "res.cloudinary.com",
    ], // Add all trusted image domains
  },
};

export default nextConfig;
