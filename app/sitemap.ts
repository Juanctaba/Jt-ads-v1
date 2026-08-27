import type { MetadataRoute } from "next";

// Real last-modified date per route, in YYYY-MM-DD.
//
// These are deliberately hardcoded rather than derived from `new Date()`.
// Using the build timestamp made all 21 URLs claim they had just changed on
// every single fetch, which is exactly the pattern Google treats as an
// unreliable lastmod and stops trusting. Update the date here when a page's
// content actually changes — a redeploy on its own is not a change.
const routes: Array<[path: string, lastModified: string, priority: number]> = [
  ["", "2026-08-26", 1],
  ["/soluciones", "2026-08-27", 0.9],
  ["/agencia-google-ads-latam", "2026-05-13", 0.9],
  ["/diagnostico-en-vivo", "2026-04-20", 0.9],
  ["/agencia-meta-ads-latam", "2026-04-20", 0.8],
  ["/agencia-linkedin-ads-latam", "2026-04-20", 0.8],
  ["/agencia-google-ads-mexico", "2026-04-20", 0.8],
  ["/agencia-google-ads-colombia", "2026-04-20", 0.8],
  ["/agencia-google-ads-chile", "2026-04-20", 0.8],
  ["/agencia-google-ads-argentina", "2026-04-20", 0.8],
  ["/agencia-google-ads-usa", "2026-04-20", 0.8],
  ["/casos-de-exito", "2026-04-20", 0.7],
  ["/blog", "2026-05-18", 0.7],
  ["/blog/recursos", "2026-05-18", 0.6],
  ["/contacto", "2026-04-20", 0.6],
  ["/blog/hiper-automatizacion-campanas-mas-alla-performance-max", "2026-05-13", 0.7],
  ["/blog/cuanto-cobra-agencia-google-ads-latam", "2026-04-20", 0.7],
  ["/blog/tracking-server-side-cpl-plataforma", "2026-04-20", 0.7],
  ["/blog/como-reducir-cpl-google-ads-latam", "2026-04-20", 0.7],
  ["/blog/performance-max-como-funciona-latam", "2026-04-20", 0.7],
  ["/blog/google-ads-saas-b2b-latam", "2026-04-20", 0.7],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jtads.com";
  return routes.map(([path, lastModified, priority]) => ({
    url: `${base}${path}`,
    lastModified,
    priority,
  }));
}
