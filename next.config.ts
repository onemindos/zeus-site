import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cms.zeusdelacruz.com" },
    ],
  },
};

export default nextConfig;
