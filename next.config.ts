import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages 배포를 위한 설정
  output: "export",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: "out",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
