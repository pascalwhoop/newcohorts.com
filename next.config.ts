import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  serverExternalPackages: ['@opennextjs/cloudflare'],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
