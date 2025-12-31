import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nilummudaliarachchi-portfoli',
  assetPrefix: '/nilummudaliarachchi-portfoli',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/nilummudaliarachchi-portfoli',
  },
};

export default nextConfig;
