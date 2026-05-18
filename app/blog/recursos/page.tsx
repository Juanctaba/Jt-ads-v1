import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Recursos — Google Ads & Performance Marketing | JT Ads",
  description:
    "Biblioteca curada de recursos, plantillas y guías de Google Ads, tracking server-side y performance marketing para empresas en LATAM.",
  alternates: {
    canonical: "https://jtads.com/blog/recursos",
    languages: { es: "https://jtads.com/blog/recursos" },
  },
  openGraph: {
    title: "Recursos | JT Ads",
    description:
      "Plantillas y guías accionables sobre Google Ads, tracking y performance marketing.",
    images: ["/og-image.png"],
    url: "https://jtads.com/blog/recursos",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jtads.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jtads.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Recursos",
      item: "https://jtads.com/blog/recursos",
    },
  ],
};

export default function RecursosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1c1b1b] pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[#9bb4fe]/20 text-[#9bb4fe] text-xs font-semibold tracking-widest uppercase">
            Biblioteca · Recursos
          </span>
          <h1
            className="font-black text-white text-4xl md:text-5xl leading-tight mb-6"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Recursos de Performance Marketing
          </h1>
          <p className="text-[#a8aab8] text-lg max-w-2xl mx-auto leading-relaxed">
            Plantillas, guías y materiales accionables sobre Google Ads, tracking
            y performance marketing en LATAM.
          </p>
        </div>
      </section>

      {/* Soro embed */}
      <section className="bg-[#fcf9f8] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Plain <script defer> + div: ships in SSR HTML so Googlebot can
              fetch and index the Soro-published resources. The div uses
              dangerouslySetInnerHTML to mark its subtree as externally
              managed — preventing React 19 hydration from wiping Soro's
              injected DOM. */}
          <div
            id="soro-blog"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: "" }}
          />
          <script
            src="https://app.trysoro.com/api/embed/e8016fb6-24c7-4925-a78d-73af8f0cde17"
            defer
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
