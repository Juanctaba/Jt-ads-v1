import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Biblioteca de Recursos — Google Ads & Performance Marketing | JT Ads",
  description:
    "Biblioteca curada de recursos, plantillas y guías de Google Ads, tracking server-side y performance marketing para empresas en LATAM.",
  alternates: {
    canonical: "https://jtads.com/blog/biblioteca",
    languages: { es: "https://jtads.com/blog/biblioteca" },
  },
  openGraph: {
    title: "Biblioteca de Recursos | JT Ads",
    description:
      "Recursos prácticos sobre Google Ads, tracking y performance marketing.",
    images: ["/og-image.png"],
    url: "https://jtads.com/blog/biblioteca",
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
      name: "Biblioteca",
      item: "https://jtads.com/blog/biblioteca",
    },
  ],
};

export default function BibliotecaPage() {
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
            Biblioteca de Recursos
          </h1>
          <p className="text-[#a8aab8] text-lg max-w-2xl mx-auto leading-relaxed">
            Plantillas, guías y recursos accionables sobre Google Ads, tracking
            y performance marketing en LATAM.
          </p>
        </div>
      </section>

      {/* Soro embed */}
      <section className="bg-[#fcf9f8] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div id="soro-blog" />
          <Script
            src="https://app.trysoro.com/api/embed/16dc3cb9-65c1-4fb8-8d4e-bfb06a25ea80"
            strategy="afterInteractive"
            defer
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
