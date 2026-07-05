import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SVGR Config
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },

  // output for static files and github pages
  basePath: "/audio-comparison",
  output: "export",
};

export default nextConfig;
