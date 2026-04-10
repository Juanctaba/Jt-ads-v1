import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jtads.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/diagnostico-en-vivo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/agencia-google-ads-latam`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/casos-de-exito`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
