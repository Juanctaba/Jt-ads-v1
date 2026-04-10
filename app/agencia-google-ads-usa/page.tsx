import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuditoriaForm from "@/app/diagnostico-en-vivo/AuditoriaForm";

export const metadata: Metadata = {
  title: "Agencia de Google Ads para Empresas en USA — JT Ads | Performance Marketing",
  description:
    "Google Ads para empresas en USA con operaciones en LATAM. Tracking server-side, gestión senior con $500k+/mes de experiencia. Primera sesión de diagnóstico sin costo.",
  alternates: { canonical: "https://jtads.com/agencia-google-ads-usa" },
};

const comparisonRows = [
  {
    criterio: "Experiencia hispana",
    agencias: "Limitada",
    jt: "Nativa — operamos en LATAM y USA",
  },
  {
    criterio: "Tracking server-side",
    agencias: "Opcional / extra costo",
    jt: "Estándar en todo onboarding",
  },
  {
    criterio: "Cobertura geo",
    agencias: "Solo USA",
    jt: "USA + LATAM coordinado",
  },
  {
    criterio: "Reporte",
    agencias: "CPL de plataforma",
    jt: "CPL real conectado a CRM",
  },
  {
    criterio: "Contrato",
    agencias: "12 meses mínimo",
    jt: "Sin contratos largos",
  },
  {
    criterio: "Respuesta",
    agencias: "24–48h laborables",
    jt: "< 4 horas hábiles",
  },
];

const cities = [
  {
    name: "Miami",
    description: "Hub LATAM-USA, fintech y servicios profesionales",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "New York",
    description: "SaaS B2B, fintech y medios digitales",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "Los Angeles",
    description: "E-commerce, entretenimiento y mercado hispano",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "Houston",
    description: "Energía, manufactura y servicios B2B",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "Chicago",
    description: "Servicios financieros, salud y B2B",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "San Francisco",
    description: "SaaS, tech y startups de alto crecimiento",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const useCases = [
  {
    title: "Empresa USA con expansión a LATAM",
    description:
      "Quiere capturar demanda en México, Colombia o Chile desde una cuenta centralizada. Necesita estructura multi-geo, tracking unificado y reportes que permitan comparar CPL real por mercado.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Empresa con producto para el mercado hispano en USA",
    description:
      "Necesita expertise en segmentación y comportamiento del usuario latino. Conocemos los patrones de búsqueda, las variaciones lingüísticas y las dinámicas de compra del segmento hispano en Estados Unidos.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Scale-up con $50k+/mes en Google Ads",
    description:
      "Cuentas que ya invierten fuerte pero sospechan que el tracking subreporta conversiones reales. El CPL de plataforma no coincide con los cierres en el CRM. Implementamos server-side tagging, CAPI y conversiones offline para recuperar la señal real.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const faqItems = [
  {
    q: "¿Trabajan con empresas que solo operan en USA?",
    a: "Sí. Trabajamos con empresas 100% enfocadas en el mercado de USA, especialmente si tienen un componente de mercado hispano o si invierten $5,000+ USD/mes en Google Ads. Nuestra diferenciación es el nivel de tracking y la conexión real con ventas.",
  },
  {
    q: "¿El servicio se ofrece en inglés o en español?",
    a: "El servicio se puede gestionar en ambos idiomas. Las comunicaciones internas y reportes los adaptamos al idioma de tu equipo. La mayoría de nuestros clientes en USA trabajan en español como idioma principal de gestión.",
  },
  {
    q: "¿Cuál es el presupuesto mínimo para trabajar en USA?",
    a: "Para el mercado de USA recomendamos un mínimo de $8,000 USD/mes en la plataforma. El CPC en USA es significativamente más alto que en LATAM, por lo que se necesita mayor volumen para que los algoritmos optimicen correctamente.",
  },
  {
    q: "¿Pueden gestionar campañas que corren simultáneamente en USA y LATAM?",
    a: "Sí, es uno de nuestros casos de uso más comunes. Gestionamos cuentas multi-geo con tracking unificado, lo que permite comparar el CPL real por mercado y tomar decisiones de asignación de presupuesto basadas en datos de ventas reales, no de plataforma.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function AgenciaGoogleAdsUSAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main
        className="pt-0 antialiased"
        style={{ backgroundColor: "#fcf9f8", color: "#1c1b1b", fontFamily: "Inter, sans-serif" }}
      >

        {/* ── HERO ── */}
        <section className="py-20 lg:py-32" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* Left: copy */}
              <div>
                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-6"
                  style={{ backgroundColor: "#9bb4fe", color: "#294487" }}
                >
                  Google Ads USA · 2026
                </div>

                <h1
                  className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
                  style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
                >
                  Google Ads para empresas en USA que venden en mercados hispanos o tienen operaciones en LATAM.
                </h1>

                <p className="text-lg leading-relaxed mb-8" style={{ color: "#424656" }}>
                  Gestionamos campañas con tracking correcto, estructura alineada al funnel y reportes conectados a tu CRM. Experiencia en cuentas de $500k+/mes en mercados de alta competencia.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-10">
                  {[
                    { value: "$3M+", label: "Ad Spend en USA" },
                    { value: "50+", label: "Cuentas USA/LATAM" },
                    { value: "< 4h", label: "Respuesta" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col">
                      <span
                        className="text-2xl font-black"
                        style={{ fontFamily: "Manrope, sans-serif", color: "#0066ff" }}
                      >
                        {stat.value}
                      </span>
                      <span className="text-sm" style={{ color: "#424656" }}>{stat.label}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="/diagnostico-en-vivo"
                  className="inline-block font-bold text-white transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: "#0066ff",
                    padding: "14px 28px",
                    borderRadius: "4px",
                    fontSize: "1rem",
                  }}
                >
                  Solicitar diagnóstico sin costo
                </a>
              </div>

              {/* Right: dashboard mockup */}
              <div>
                <div
                  className="rounded-2xl p-4 shadow-xl"
                  style={{ backgroundColor: "#e5e2e1" }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                    {/* Browser bar */}
                    <div
                      className="h-8 flex items-center px-4 gap-1.5 border-b"
                      style={{ backgroundColor: "#f6f3f2", borderColor: "#e5e2e1" }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <span className="ml-3 text-xs" style={{ color: "#424656" }}>
                        ads.google.com · JT Ads Dashboard
                      </span>
                    </div>

                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-5">
                        <p
                          className="font-bold text-sm"
                          style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
                        >
                          Campañas USA · Dashboard
                        </p>
                        <span
                          className="text-xs font-semibold px-2 py-0.5 rounded"
                          style={{ backgroundColor: "#9bb4fe", color: "#294487" }}
                        >
                          Live
                        </span>
                      </div>

                      {/* CPL bricks */}
                      <div className="flex gap-4 mb-5">
                        <div
                          className="flex-1 rounded-xl p-4 text-center"
                          style={{ backgroundColor: "#f6f3f2" }}
                        >
                          <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#424656" }}>
                            CPL Plataforma
                          </p>
                          <p
                            className="text-2xl font-black line-through"
                            style={{ fontFamily: "Manrope, sans-serif", color: "#a33200" }}
                          >
                            $185 USD
                          </p>
                        </div>
                        <div
                          className="flex-1 rounded-xl p-4 text-center"
                          style={{ backgroundColor: "#e8efff" }}
                        >
                          <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "#294487" }}>
                            CPL Real
                          </p>
                          <p
                            className="text-2xl font-black"
                            style={{ fontFamily: "Manrope, sans-serif", color: "#0066ff" }}
                          >
                            $94 USD
                          </p>
                        </div>
                      </div>

                      {/* City pills */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {["Miami", "New York", "Los Angeles"].map((city) => (
                          <span
                            key={city}
                            className="text-xs font-semibold px-3 py-1 rounded-full"
                            style={{ backgroundColor: "#f6f3f2", color: "#424656" }}
                          >
                            {city}
                          </span>
                        ))}
                      </div>

                      {/* Progress bar */}
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs font-medium" style={{ color: "#424656" }}>
                            Reducción de CPL calificado
                          </span>
                          <span className="text-xs font-bold" style={{ color: "#0066ff" }}>
                            +49%
                          </span>
                        </div>
                        <div
                          className="h-2 w-full rounded-full overflow-hidden"
                          style={{ backgroundColor: "#e5e2e1" }}
                        >
                          <div
                            className="h-2 rounded-full"
                            style={{ width: "49%", backgroundColor: "#0066ff" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── VALUE PROP USA ── */}
        <section className="py-24" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ),
                  title: "Expertise en mercado hispano de USA",
                  body: "Conocemos el comportamiento de búsqueda y las dinámicas de compra del segmento latino en Estados Unidos. No es solo traducir anuncios — es entender la intención.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Gestión de cuentas multi-geo",
                  body: "Coordinamos campañas que corren simultáneamente en USA y LATAM con tracking unificado en un solo CRM. Un dashboard, datos reales por mercado.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Nivel de tracking enterprise",
                  body: "Server-side tagging, CAPI y conversiones offline para cuentas de alto volumen donde el CPL de plataforma puede estar hasta un 60% inflado respecto al CPL real.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl p-8 bg-white"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                    style={{ backgroundColor: "#e8efff", color: "#0066ff" }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#424656" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
              >
                Por qué empresas en USA eligen JT Ads sobre agencias locales
              </h2>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[#e5e2e1]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#f6f3f2" }}>
                    <th
                      className="p-5 text-xs font-bold uppercase tracking-widest"
                      style={{ color: "#424656" }}
                    >
                      Criterio
                    </th>
                    <th
                      className="p-5 text-xs font-bold uppercase tracking-widest"
                      style={{ color: "#424656" }}
                    >
                      Agencias Locales USA
                    </th>
                    <th
                      className="p-5 text-xs font-bold uppercase tracking-widest"
                      style={{ color: "#0066ff", backgroundColor: "#e8efff" }}
                    >
                      JT Ads
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.criterio}
                      style={{ borderTop: "1px solid #f6f3f2" }}
                    >
                      <td
                        className="p-5 font-medium text-sm"
                        style={{ color: "#1c1b1b" }}
                      >
                        {row.criterio}
                      </td>
                      <td
                        className="p-5 text-sm"
                        style={{ color: "#424656" }}
                      >
                        {row.agencias}
                      </td>
                      <td
                        className="p-5 text-sm font-semibold"
                        style={{ color: "#0050cb", backgroundColor: i % 2 === 0 ? "#f0f4ff" : "#e8efff" }}
                      >
                        {row.jt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── MARKETS / HUBS IN USA ── */}
        <section className="py-24" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                className="text-3xl lg:text-4xl font-bold"
                style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
              >
                Mercados principales donde operamos en USA
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="bg-white rounded-xl p-6 flex items-start gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#e8efff", color: "#0066ff" }}
                  >
                    {city.icon}
                  </div>
                  <div>
                    <h3
                      className="font-bold mb-1"
                      style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
                    >
                      {city.name}
                    </h3>
                    <p className="text-sm" style={{ color: "#424656" }}>
                      {city.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                className="text-3xl lg:text-4xl font-bold"
                style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
              >
                Tres perfiles de empresa en USA que trabajan con JT Ads
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              {useCases.map((uc) => (
                <div
                  key={uc.title}
                  className="rounded-xl p-8 flex items-start gap-6"
                  style={{ backgroundColor: "#f6f3f2" }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#e8efff", color: "#0066ff" }}
                  >
                    {uc.icon}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
                    >
                      {uc.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#424656" }}>
                      {uc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORM SECTION ── */}
        <section className="py-24" id="diagnostico-form" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#0050cb", color: "#ffffff" }}
              >
                Auditoría Gratuita
              </div>
              <h2
                className="text-3xl md:text-4xl font-black mb-3"
                style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
              >
                Solicita tu diagnóstico
              </h2>
              <p style={{ color: "#424656" }}>
                Te contactamos en menos de 4 horas hábiles para agendar la sesión.
              </p>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <AuditoriaForm />
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2
              className="text-3xl font-bold text-center mb-12"
              style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
            >
              Preguntas frecuentes — Google Ads USA
            </h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl overflow-hidden"
                  style={{ backgroundColor: "#f6f3f2" }}
                >
                  <summary
                    className="flex items-center justify-between cursor-pointer p-6 font-semibold list-none select-none"
                    style={{ color: "#1c1b1b", fontFamily: "Manrope, sans-serif" }}
                  >
                    <span>{item.q}</span>
                    <span className="ml-4 flex-shrink-0">
                      {/* Chevron down — rotates when open via group-open */}
                      <svg
                        className="w-5 h-5 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: "#0066ff" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed" style={{ color: "#424656" }}>
                      {item.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-24 text-center" style={{ backgroundColor: "#0066ff" }}>
          <div className="max-w-4xl mx-auto px-4">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-5 leading-tight text-white"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              ¿Tu CPL en USA refleja ventas reales o conversiones de plataforma?
            </h2>
            <p className="text-lg mb-10" style={{ color: "#bfd2ff" }}>
              En mercados de alto CPC como USA, la diferencia puede costar miles de dólares al mes. Una sesión de diagnóstico lo aclara en 60 minutos.
            </p>
            <a
              href="/diagnostico-en-vivo"
              className="inline-block font-bold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#ffffff",
                color: "#0066ff",
                padding: "14px 32px",
                borderRadius: "4px",
                fontSize: "1rem",
              }}
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
