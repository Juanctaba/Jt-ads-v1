import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jtads.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/diagnostico-en-vivo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/agencia-google-ads-latam`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/agencia-google-ads-mexico`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/agencia-google-ads-colombia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/casos-de-exito`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/blog/cuanto-cobra-agencia-google-ads-latam`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/tracking-server-side-cpl-plataforma`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
