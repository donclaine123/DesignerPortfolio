import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  devIndicators: false,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? "/Portfolio" : "",
  },
  ...(isGithubActions
    ? {
        output: "export",
        basePath: "/Portfolio",
        assetPrefix: "/Portfolio/",
        images: {
          unoptimized: true,
        },
      }
    : {}),
};

export default nextConfig;
