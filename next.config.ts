import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/NilumMudaliarachchi-PortFolio',
  assetPrefix: '/NilumMudaliarachchi-PortFolio',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/NilumMudaliarachchi-PortFolio',
  },
};

export default nextConfig;
