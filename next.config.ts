import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cms.zeusdelacruz.com" },
      { protocol: "https", hostname: "onemindos.com" },
    ],
  },

  async redirects() {
    return [
      // onemindos.com root → /onemind (handled at CF/Droplet host level too,
      // but Next handles it when the same app serves both domains)
      {
        source: "/",
        has: [{ type: "host", value: "onemindos.com" }],
        destination: "https://zeusdelacruz.com/onemind",
        permanent: true,
      },
      // Carry any onemindos.com path to the equivalent /onemind/* path
      {
        source: "/:path*",
        has: [{ type: "host", value: "onemindos.com" }],
        destination: "https://zeusdelacruz.com/onemind/:path*",
        permanent: true,
      },
    ];
  },
};

export default withPayload(nextConfig);
