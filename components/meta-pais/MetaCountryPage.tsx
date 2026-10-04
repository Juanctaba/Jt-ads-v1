import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuditoriaForm from "@/app/diagnostico-en-vivo/AuditoriaForm";
import { withLinks, type FaqItem } from "@/lib/faqLinks";

// Plantilla de las páginas de Meta Ads por país. Copia la estructura, los
// componentes y los estilos de /agencia-google-ads-mexico y -argentina (mismo
// orden de secciones y mismas clases). Diferencias deliberadas:
// - El mockup del hero no muestra cifras: usa el patrón cualitativo «Inflada»
//   (como /casos-de-exito) en lugar de un CPL inventado.
// - Las stats del hero y la tabla comparativa no llevan montos ni porcentajes.
// - El FAQ visible y el FAQPage JSON-LD salen del mismo array.

export type MetaCountryContent = {
  country: string; // "México"
  slug: string; // "mexico"
  badge: string;
  h1: string;
  intro: ReactNode;
  stats: { value: string; label: string }[];
  dashboardLabel: string;
  cityTags: string[];
  pains: string[];
  comparisonHeader: string;
  comparisonTitle: string;
  comparisonRows: { criterio: string; tradicional: string; jtads: string }[];
  citiesTitle: string;
  cities: { name: string; note: string }[];
  servicesTitle: string;
  services: { title: string; body: string }[];
  notes: { title: string; body: ReactNode }[];
  formTitle: string;
  formSubtitle: string;
  faqTitle: string;
  faqItems: FaqItem[];
  finalTitle: string;
  finalBody: string;
};

const ICONS = {
  chart: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  coin: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
};

const SERVICE_ICONS = [
  "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
  "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  "M13 10V3L4 14h7v7l9-11h-7z",
  "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  ICONS.chart,
];

export function metaFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function metaBreadcrumbSchema(name: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jtads.com" },
      { "@type": "ListItem", position: 2, name: "Agencia Meta Ads LATAM", item: "https://jtads.com/agencia-meta-ads-latam" },
      { "@type": "ListItem", position: 3, name, item: `https://jtads.com/agencia-meta-ads-${slug}` },
    ],
  };
}

export default function MetaCountryPage({ c }: { c: MetaCountryContent }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(metaFaqSchema(c.faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(metaBreadcrumbSchema(`Meta Ads ${c.country}`, c.slug)) }}
      />
      <Navbar />
      <main
        className="pt-0 antialiased"
        style={{ backgroundColor: "#fcf9f8", color: "#1c1b1b", fontFamily: "Inter, sans-serif" }}
      >

        {/* ── HERO ── */}
        <section className="relative py-20 lg:py-32 overflow-hidden" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left: copy */}
              <div>
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                  style={{ backgroundColor: "#9bb4fe", color: "#294487" }}
                >
                  {c.badge}
                </div>

                <h1
                  className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
                  style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
                >
                  {c.h1}
                </h1>

                <p className="text-lg leading-relaxed mb-8" style={{ color: "#424656" }}>
                  {c.intro}
                </p>

                {/* Stats row (sin cifras de inversión ni resultados) */}
                <div className="flex flex-wrap gap-6 mb-10">
                  {c.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-2xl font-extrabold" style={{ fontFamily: "Manrope, sans-serif", color: "#0066ff" }}>
                        {stat.value}
                      </p>
                      <p className="text-sm" style={{ color: "#424656" }}>
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="/diagnostico-en-vivo"
                  className="inline-block font-bold text-white px-8 py-4 transition-all hover:opacity-90"
                  style={{ backgroundColor: "#0066ff", borderRadius: "4px", fontFamily: "Manrope, sans-serif" }}
                >
                  Solicitar diagnóstico sin costo
                </a>
              </div>

              {/* Right: illustration card (cualitativa, sin cifras) */}
              <div className="relative">
                <div className="rounded-2xl p-5 shadow-lg" style={{ backgroundColor: "#e5e2e1" }}>
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ backgroundColor: "#fff", boxShadow: "0 2px 16px rgba(28,27,27,0.06)" }}
                  >
                    {/* Browser chrome */}
                    <div
                      className="h-8 flex items-center px-4 gap-1.5"
                      style={{ backgroundColor: "#f6f3f2", borderBottom: "1px solid #e5e2e1" }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <div
                        className="ml-4 text-xs flex-1 rounded px-2 py-0.5"
                        style={{ backgroundColor: "#e5e2e1", color: "#424656" }}
                      >
                        jtads.com/dashboard
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#424656" }}>
                        {c.dashboardLabel}
                      </p>

                      {/* Metric bricks */}
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        <div className="rounded-xl p-4" style={{ backgroundColor: "#f6f3f2" }}>
                          <p className="text-xs font-medium mb-1" style={{ color: "#424656" }}>
                            CPL Meta Platform
                          </p>
                          <p
                            className="text-2xl font-extrabold line-through"
                            style={{ fontFamily: "Manrope, sans-serif", color: "#a33200" }}
                          >
                            Inflada
                          </p>
                          <p className="text-xs mt-1" style={{ color: "#424656" }}>
                            Así suele venir la atribución de plataforma
                          </p>
                        </div>
                        <div className="rounded-xl p-4" style={{ backgroundColor: "#f6f3f2" }}>
                          <p className="text-xs font-medium mb-1" style={{ color: "#424656" }}>
                            CPL Real CRM
                          </p>
                          <p className="text-2xl font-extrabold" style={{ fontFamily: "Manrope, sans-serif", color: "#0066ff" }}>
                            Real
                          </p>
                          <p className="text-xs mt-1" style={{ color: "#424656" }}>
                            Conectado a ventas
                          </p>
                        </div>
                      </div>

                      {/* City tags */}
                      <div className="flex gap-2 flex-wrap mb-5">
                        {c.cityTags.map((city) => (
                          <span
                            key={city}
                            className="text-xs font-semibold px-3 py-1 rounded-full"
                            style={{ backgroundColor: "#9bb4fe", color: "#294487" }}
                          >
                            {city}
                          </span>
                        ))}
                      </div>

                      {/* Progress bar */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-xs font-medium" style={{ color: "#424656" }}>
                            Leads de Meta con su venta en el CRM
                          </p>
                          <span className="text-xs font-bold" style={{ color: "#0066ff" }}>
                            Trazable
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full overflow-hidden" style={{ backgroundColor: "#e5e2e1" }}>
                          <div className="h-2 rounded-full transition-all" style={{ width: "41%", backgroundColor: "#0066ff" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── PAIN POINTS ── */}
        <section className="py-20" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {c.pains.map((text, i) => (
                <div
                  key={i}
                  className="rounded-xl p-8"
                  style={{ backgroundColor: "#fcf9f8", boxShadow: "0 2px 12px rgba(28,27,27,0.06)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: "#9bb4fe", color: "#294487" }}
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d={[ICONS.chart, ICONS.coin, ICONS.clock][i % 3]} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold leading-snug" style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="py-24" style={{ backgroundColor: "#fff" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                className="text-3xl lg:text-4xl font-extrabold mb-4 leading-tight"
                style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
              >
                {c.comparisonTitle}
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl" style={{ boxShadow: "0 4px 24px rgba(28,27,27,0.06)" }}>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#f6f3f2" }}>
                    <th className="p-5 text-sm font-bold uppercase tracking-wider" style={{ color: "#424656" }}>
                      Criterio
                    </th>
                    <th className="p-5 text-sm font-bold uppercase tracking-wider" style={{ color: "#424656" }}>
                      {c.comparisonHeader}
                    </th>
                    <th
                      className="p-5 text-sm font-bold uppercase tracking-wider"
                      style={{ color: "#0066ff", backgroundColor: "rgba(0,102,255,0.04)" }}
                    >
                      JT Ads
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {c.comparisonRows.map((row, i) => (
                    <tr key={row.criterio} style={{ backgroundColor: i % 2 === 0 ? "#fff" : "#fcf9f8" }}>
                      <td className="p-5 font-semibold text-sm" style={{ color: "#1c1b1b" }}>
                        {row.criterio}
                      </td>
                      <td className="p-5 text-sm" style={{ color: "#424656" }}>
                        <span>❌ {row.tradicional}</span>
                      </td>
                      <td className="p-5 text-sm font-semibold" style={{ color: "#1c1b1b", backgroundColor: "rgba(0,102,255,0.04)" }}>
                        <span>✅ {row.jtads}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── MARKETS ── */}
        <section className="py-24" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl lg:text-4xl font-extrabold text-center mb-14"
              style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
            >
              {c.citiesTitle}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {c.cities.map((city) => (
                <div
                  key={city.name}
                  className="rounded-xl p-6 flex items-start gap-4"
                  style={{ backgroundColor: "#fcf9f8", boxShadow: "0 2px 12px rgba(28,27,27,0.06)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#9bb4fe" }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="#294487" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-base mb-1" style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}>
                      {city.name}
                    </p>
                    <p className="text-sm" style={{ color: "#424656" }}>
                      {city.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="py-24" style={{ backgroundColor: "#fff" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl lg:text-4xl font-extrabold text-center mb-14"
              style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
            >
              {c.servicesTitle}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.services.map((s, i) => (
                <div
                  key={s.title}
                  className="p-8 rounded-xl transition-all"
                  style={{ backgroundColor: "#fcf9f8", boxShadow: "0 2px 12px rgba(28,27,27,0.06)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: "#9bb4fe", color: "#294487" }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d={SERVICE_ICONS[i % SERVICE_ICONS.length]} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#424656" }}>
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NOTES: MONEDA, IMPUESTOS, ZONA HORARIA (mismo bloque que la nota de /agencia-google-ads-argentina) ── */}
        <section className="py-16" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            {c.notes.map((note) => (
              <div
                key={note.title}
                className="rounded-xl p-8 flex gap-5 items-start"
                style={{ backgroundColor: "#fcf9f8", boxShadow: "0 2px 12px rgba(28,27,27,0.06)" }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "#9bb4fe" }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="#294487" viewBox="0 0 24 24">
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold mb-2" style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}>
                    {note.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#424656" }}>
                    {note.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FORM ── */}
        <section className="py-24" style={{ backgroundColor: "#fff" }} id="diagnostico-form">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5"
                style={{ backgroundColor: "#0050cb", color: "#fff" }}
              >
                Auditoría Gratuita
              </div>
              <h2
                className="text-3xl md:text-4xl font-extrabold mb-3"
                style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
              >
                {c.formTitle}
              </h2>
              <p style={{ color: "#424656" }}>{c.formSubtitle}</p>
            </div>

            <div
              className="bg-white overflow-hidden"
              style={{ borderRadius: "0.75rem", boxShadow: "0 4px 24px rgba(28,27,27,0.06)" }}
            >
              <AuditoriaForm />
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-extrabold text-center mb-12"
              style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
            >
              {c.faqTitle}
            </h2>

            <div className="space-y-3">
              {c.faqItems.map((item) => (
                <details key={item.q} className="group rounded-xl overflow-hidden" style={{ backgroundColor: "#fcf9f8" }}>
                  <summary
                    className="flex items-center justify-between cursor-pointer p-6 font-semibold text-base select-none list-none"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
                  >
                    <span>{item.q}</span>
                    <svg
                      className="w-5 h-5 flex-shrink-0 ml-4 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="#424656"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed" style={{ color: "#424656" }}>
                      {withLinks(item.a, item.links)}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-20 text-center" style={{ backgroundColor: "#0066ff" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl lg:text-4xl font-extrabold mb-5 leading-tight text-white"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              {c.finalTitle}
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.85)" }}>
              {c.finalBody}
            </p>
            <a
              href="/diagnostico-en-vivo"
              className="inline-block font-bold text-[#0066ff] px-10 py-4 bg-white hover:bg-[#f6f3f2] transition-colors"
              style={{ borderRadius: "4px", fontFamily: "Manrope, sans-serif" }}
            >
              Reservar Sesión de Diagnóstico
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
