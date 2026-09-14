import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // www and non-www both served 200, so Google indexed them as separate
      // URLs and split the signals. The canonical tag alone is only a hint —
      // this makes non-www the single directive-level destination.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.jtads.com" }],
        destination: "https://jtads.com/:path*",
        permanent: true,
      },
      // Duplicate of the hiper-automatizacion article: same H1 and body,
      // orphaned (unlinked, absent from sitemap). 301 consolidates signals.
      {
        source: "/blog/mas-alla-pmax-advantage-autonomia-campanas",
        destination: "/blog/hiper-automatizacion-campanas-mas-alla-performance-max",
        permanent: true,
      },
      // URLs heredadas del WordPress anterior: siguen en 404 y Ahrefs las rastrea.
      // Las reglas especificas de /en/... van antes del comodin, o este las
      // captura primero y /en/agenda-reunion terminaria en / y no en el diagnostico.
      { source: "/agenda-reunion", destination: "/diagnostico-en-vivo", permanent: true },
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/agenda-reunion", destination: "/diagnostico-en-vivo", permanent: true },
      { source: "/en/comments/feed", destination: "/blog", permanent: true },
      { source: "/en/:path*", destination: "/", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/sistema", destination: "/sistema.html" },
      { source: "/sistema/", destination: "/sistema.html" },
      { source: "/crm-agencia-ads", destination: "/crm-agencia-ads.html" },
      { source: "/crm-agencia-ads/", destination: "/crm-agencia-ads.html" },
    ];
  },
};

export default nextConfig;
