import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/NilumMudaliarachchi-PortFolio',
  assetPrefix: 'https://nilum2002.github.io/NilumMudaliarachchi-PortFolio',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
