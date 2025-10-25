import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  serverExternalPackages: ['@opennextjs/cloudflare'],
  images: {
    // Use Cloudflare Images custom loader
    loader: "custom",
    loaderFile: "./image-loader.ts",
    // Enable modern image formats for better compression
    formats: ['image/webp', 'image/avif'],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for different use cases
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Allow external domains if needed
    domains: [],
    // Enable placeholder generation
    dangerouslyAllowSVG: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
