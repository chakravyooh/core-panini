import type { NextConfig } from "next";

const basePath = "/core-panini";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath + "/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    staticGenerationRetryCount: 1,
  },
};

export default nextConfig;
