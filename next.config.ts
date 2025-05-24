import type { NextConfig } from "next";

let basePath:string = ""
let assetPrefix:string = ""

if (process.env.NODE_ENV === 'production') {
  basePath = "/x-commerce-project-front"
  assetPrefix = "/x-commerce-project-front"
}

const nextConfig: NextConfig = {
  basePath: basePath,
  assetPrefix: assetPrefix,
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
