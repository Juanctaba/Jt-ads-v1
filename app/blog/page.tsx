import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blog — Google Ads & Performance Marketing | JT Ads",
  description:
    "Recursos prácticos sobre Google Ads, tracking server-side y performance marketing para empresas en LATAM. Sin teoría — solo lo que funciona en cuentas reales.",
  alternates: {
    canonical: "https://jtads.com/blog",
    languages: { "es": "https://jtads.com/blog" },
  },
  openGraph: {
    title: "Blog — Google Ads & Performance Marketing | JT Ads",
    description:
      "Recursos prácticos sobre Google Ads, tracking y performance marketing en LATAM.",
    images: ["/og-image.png"],
    url: "https://jtads.com/blog",
  },
};

const posts = [
  {
    slug: "7-senales-de-que-tu-pixel-infla-tus-conversiones",
    title:
      "7 señales de que tu píxel está inflando tus conversiones (y cómo comprobarlo)",
    excerpt:
      "Tu reporte dice 200 conversiones. Ventas dice 45. Siete banderas rojas de que el píxel está contando de más, y cómo comprobar cada una en menos de una hora.",
    category: "Tracking Técnico",
    date: "Agosto 2026",
    readTime: "7 min",
  },
  {
    slug: "cuanto-cobra-agencia-google-ads-latam",
    title:
      "¿Cuánto cobra una agencia de Google Ads en LATAM? Precios reales en 2026",
    excerpt:
      "Los modelos de precios varían más de lo que crees. Te explicamos qué cobran las agencias en México, Colombia y Chile, qué incluye cada modelo y cómo evitar pagar de más.",
    category: "Precios & Contratación",
    date: "Abril 2026",
    readTime: "8 min",
  },
  {
    slug: "tracking-server-side-cpl-plataforma",
    title:
      "Por qué el CPL de tu plataforma te está mintiendo (y cómo solucionarlo)",
    excerpt:
      "El dashboard de Google Ads muestra $45. Tu equipo de ventas dice que los leads no convierten. La diferencia no es un error — es cómo funciona el tracking por defecto.",
    category: "Tracking Técnico",
    date: "Abril 2026",
    readTime: "10 min",
  },
  {
    slug: "como-reducir-cpl-google-ads-latam",
    title: "Cómo reducir el CPL en Google Ads: 7 palancas reales para empresas en LATAM",
    excerpt: "El CPL alto tiene causas concretas. Te explicamos las 7 palancas que ajustamos en cada cuenta para bajar el costo por lead sin sacrificar volumen ni calidad.",
    category: "Optimización",
    date: "Abril 2026",
    readTime: "9 min",
  },
  {
    slug: "performance-max-como-funciona-latam",
    title: "Performance Max en LATAM: cómo funciona y cuándo realmente conviene usarlo",
    excerpt: "Performance Max no es para todos. Explicamos cómo funciona el algoritmo, qué señales necesita y en qué casos conviene — o no — en el mercado latinoamericano.",
    category: "Performance Max",
    date: "Abril 2026",
    readTime: "10 min",
  },
  {
    slug: "google-ads-saas-b2b-latam",
    title: "Google Ads para SaaS B2B en LATAM: guía completa 2026",
    excerpt: "Estructura de campañas, tracking conectado al CRM, benchmarks de CPL por etapa del funnel y los tres errores que destruyen el rendimiento en cuentas activas de SaaS B2B.",
    category: "SaaS & B2B",
    date: "Abril 2026",
    readTime: "11 min",
  },
  {
    slug: "hiper-automatizacion-campanas-mas-alla-performance-max",
    title: "Más allá de Performance Max y Advantage+: la próxima frontera de la autonomía en campañas",
    excerpt: "PMax y Advantage+ ya son el estándar. Analizamos qué viene después — AI Max, Advantage+ Shopping, LinkedIn Accelerate — y cuándo la automatización total se convierte en un riesgo real para tu estrategia.",
    category: "Automatización",
    date: "Abril 2026",
    readTime: "12 min",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jtads.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jtads.com/blog" },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1c1b1b] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[#9bb4fe]/20 text-[#9bb4fe] text-xs font-semibold tracking-widest uppercase">
            Google Ads · Tracking · LATAM
          </span>
          <h1
            className="font-black text-white text-4xl md:text-5xl leading-tight mb-6"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Recursos de Google Ads y Performance Marketing para LATAM
          </h1>
          <p className="text-[#a8aab8] text-lg max-w-2xl mx-auto leading-relaxed">
            Sin teoría de manual. Solo lo que encontramos auditando cuentas
            reales en México, Colombia y Chile — y cómo lo corregimos.
          </p>
        </div>
      </section>

      {/* Post Grid */}
      <section className="bg-[#fcf9f8] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl p-8 flex flex-col gap-5 shadow-sm border border-[#c2c6d8]/15 hover:shadow-md transition-shadow duration-200"
              >
                {/* Category pill */}
                <span className="self-start px-3 py-1 rounded-full bg-[#9bb4fe] text-[#294487] text-xs font-semibold uppercase tracking-wide">
                  {post.category}
                </span>

                {/* Title */}
                <h2
                  className="text-xl font-black text-[#1c1b1b] leading-snug"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-[#0066ff] transition-colors duration-150"
                  >
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p
                  className="text-[#424656] text-sm leading-relaxed flex-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {post.excerpt}
                </p>

                {/* Meta + CTA */}
                <div className="flex items-center justify-between pt-2 border-t border-[#f6f3f2]">
                  <span
                    className="text-[#727687] text-xs"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {post.date} · {post.readTime} de lectura
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#0066ff] text-sm font-semibold hover:underline"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Leer artículo →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
