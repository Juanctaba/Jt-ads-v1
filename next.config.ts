import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Duplicate of the hiper-automatizacion article: same H1 and body,
      // orphaned (unlinked, absent from sitemap). 301 consolidates signals.
      {
        source: "/blog/mas-alla-pmax-advantage-autonomia-campanas",
        destination: "/blog/hiper-automatizacion-campanas-mas-alla-performance-max",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
