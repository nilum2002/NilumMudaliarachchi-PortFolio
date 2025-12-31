import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nilummudaliarachchiportfoli-portfoli',
  assetPrefix: '/nilummudaliarachchiportfoli-portfoli',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/NilumMudaliarachchi-PortFolio',
  },
};

export default nextConfig;
