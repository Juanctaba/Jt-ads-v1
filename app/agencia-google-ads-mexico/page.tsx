import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuditoriaForm from "@/app/diagnostico-en-vivo/AuditoriaForm";

export const metadata: Metadata = {
  title: "Agencia de Google Ads en México — JT Ads | Performance Marketing",
  description:
    "Especialistas en Google Ads para empresas en México. Tracking server-side, sin contratos largos. Gestión senior con $500k+/mes de experiencia. Primera sesión sin costo.",
  alternates: { canonical: "https://jtads.com/agencia-google-ads-mexico" },
  keywords: [
    "agencia google ads mexico",
    "google ads cdmx",
    "google ads monterrey",
    "google ads guadalajara",
    "agencia google ads mexicana",
    "performance marketing mexico",
  ],
};

const comparisonRows = [
  {
    criterio: "Tracking",
    tradicional: "CPL de plataforma",
    jtads: "CPL real conectado a CRM",
    differentiate: true,
  },
  {
    criterio: "Reporte",
    tradicional: "Impresiones y clics",
    jtads: "Ventas y CAC por campaña",
    differentiate: true,
  },
  {
    criterio: "Contrato",
    tradicional: "6-12 meses",
    jtads: "Sin contratos largos",
    differentiate: true,
  },
  {
    criterio: "Account Manager",
    tradicional: "Junior rotativo",
    jtads: "Senior dedicado desde día 1",
    differentiate: true,
  },
  {
    criterio: "Experiencia en ad spend",
    tradicional: "Sin dato publicado",
    jtads: "$500k+/mes gestionados",
    differentiate: true,
  },
  {
    criterio: "Respuesta ante problemas",
    tradicional: "24-48h hábiles",
    jtads: "< 4 horas hábiles",
    differentiate: true,
  },
];

const cities = [
  { name: "Ciudad de México", note: "Hub tech, SaaS B2B y servicios enterprise" },
  { name: "Monterrey", note: "Industrial, manufactura y B2B de alto ticket" },
  { name: "Guadalajara", note: "Retail, e-commerce y startups tech" },
  { name: "Puebla", note: "Manufactura, retail y educación privada" },
  { name: "Tijuana", note: "Exportación, maquiladoras y servicios cross-border" },
  { name: "Mérida", note: "Real estate, turismo y servicios profesionales" },
];

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    title: "Search Ads",
    body: "Captura de intención activa con estructura por funnel, negativos agresivos y copy alineado a conversión. Compramos tráfico de intención real, no de volumen.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M13 10V3L4 14h7v7l9-11h-7z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    title: "Performance Max",
    body: "Configuración avanzada con señales de audiencia correctas, assets de calidad y revisión constante de exclusiones. No es solo poner presupuesto y esperar.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    title: "Display & YouTube",
    body: "Retargeting y prospecting por etapa del funnel. Awareness con YouTube para ciclos de venta largos. Sin banners de volumen sin segmentación real.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    title: "Shopping Ads",
    body: "Gestión de feeds, estructura de campañas inteligente y segmentación de productos por margen y volumen. Optimizamos para ROAS real, no de plataforma.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    title: "Demand Gen",
    body: "Campañas visuales en YouTube, Gmail y Discover para audiencias de alta intención. Ideal para acortar ciclos de venta con creativos que interrumpen sin molestar.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    title: "Campañas de Apps",
    body: "Promocionamos tu app en Búsqueda de Google, Play Store, YouTube y sitios asociados. Optimizamos por instalaciones, eventos in-app o valor del usuario.",
  },
];

const faqItems = [
  {
    q: "¿Cuál es el presupuesto mínimo para anunciar en Google Ads en México?",
    a: "Recomendamos un mínimo de $5,000 USD/mes en la plataforma para que los datos sean suficientes para optimizar. Por debajo de ese monto, las campañas no tienen el volumen necesario para que el aprendizaje de los algoritmos funcione correctamente.",
  },
  {
    q: "¿Trabajan con empresas en cualquier ciudad de México?",
    a: "Sí. Trabajamos de forma remota con empresas en CDMX, Monterrey, Guadalajara y cualquier otra ciudad. La gestión es 100% digital — revisamos tu cuenta en pantalla compartida y nos comunicamos vía email y videollamada.",
  },
  {
    q: "¿Cuánto tiempo tarda en verse resultados con Google Ads?",
    a: "Las primeras señales de optimización se ven entre semanas 2 y 4. Resultados estables con datos suficientes para escalar, entre el mes 2 y 3. Google Ads no es un canal de resultados inmediatos — es un canal de resultados sostenibles cuando está bien construido.",
  },
  {
    q: "¿Qué pasa si ya tengo una cuenta de Google Ads activa?",
    a: "Perfecto. El primer paso es siempre el diagnóstico de tu cuenta actual. En la sesión identificamos qué funciona, qué hay que corregir y qué hay que reconstruir. No empezamos de cero si no tiene sentido hacerlo.",
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

export default function AgenciaGoogleAdsMexicoPage() {
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
        <section
          className="relative py-20 lg:py-32 overflow-hidden"
          style={{ backgroundColor: "#fcf9f8" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left: copy */}
              <div>
                {/* Badge pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                  style={{ backgroundColor: "#9bb4fe", color: "#294487" }}
                >
                  Google Ads México · 2026
                </div>

                <h1
                  className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
                  style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
                >
                  Agencia de Google Ads en México para empresas que necesitan resultados medibles.
                </h1>

                <p className="text-lg leading-relaxed mb-8" style={{ color: "#424656" }}>
                  Gestionamos campañas con tracking correcto, estructura alineada al funnel y reportes
                  conectados a tu CRM — no al dashboard de Google.
                </p>

                {/* Stats row */}
                <div className="flex flex-wrap gap-6 mb-10">
                  {[
                    { value: "$2M+", label: "Ad Spend en MX" },
                    { value: "60+", label: "Empresas Mexicanas" },
                    { value: "< 4h", label: "Respuesta" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p
                        className="text-2xl font-extrabold"
                        style={{ fontFamily: "Manrope, sans-serif", color: "#0066ff" }}
                      >
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
                  style={{
                    backgroundColor: "#0066ff",
                    borderRadius: "4px",
                    fontFamily: "Manrope, sans-serif",
                  }}
                >
                  Solicitar diagnóstico sin costo
                </a>
              </div>

              {/* Right: illustration card */}
              <div className="relative">
                <div
                  className="rounded-2xl p-5 shadow-lg"
                  style={{ backgroundColor: "#e5e2e1" }}
                >
                  {/* Browser bar */}
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
                      {/* Dashboard header */}
                      <p
                        className="text-xs font-bold uppercase tracking-widest mb-5"
                        style={{ color: "#424656" }}
                      >
                        Campañas México · Dashboard
                      </p>

                      {/* Metric bricks */}
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        <div
                          className="rounded-xl p-4"
                          style={{ backgroundColor: "#f6f3f2" }}
                        >
                          <p className="text-xs font-medium mb-1" style={{ color: "#424656" }}>
                            CPL Meta Platform
                          </p>
                          <p
                            className="text-2xl font-extrabold line-through"
                            style={{ fontFamily: "Manrope, sans-serif", color: "#a33200" }}
                          >
                            $340 MXN
                          </p>
                          <p className="text-xs mt-1" style={{ color: "#424656" }}>
                            Reportado en plataforma
                          </p>
                        </div>
                        <div
                          className="rounded-xl p-4"
                          style={{ backgroundColor: "#f6f3f2" }}
                        >
                          <p className="text-xs font-medium mb-1" style={{ color: "#424656" }}>
                            CPL Real CRM
                          </p>
                          <p
                            className="text-2xl font-extrabold"
                            style={{ fontFamily: "Manrope, sans-serif", color: "#0066ff" }}
                          >
                            $178 MXN
                          </p>
                          <p className="text-xs mt-1" style={{ color: "#424656" }}>
                            Conectado a ventas
                          </p>
                        </div>
                      </div>

                      {/* City tags */}
                      <div className="flex gap-2 flex-wrap mb-5">
                        {["CDMX", "Monterrey", "Guadalajara"].map((city) => (
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
                            Reducción de desperdicio de presupuesto
                          </p>
                          <span
                            className="text-xs font-bold"
                            style={{ color: "#0066ff" }}
                          >
                            +41%
                          </span>
                        </div>
                        <div
                          className="w-full h-2 rounded-full overflow-hidden"
                          style={{ backgroundColor: "#e5e2e1" }}
                        >
                          <div
                            className="h-2 rounded-full transition-all"
                            style={{ width: "41%", backgroundColor: "#0066ff" }}
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

        {/* ── PAIN POINTS ── */}
        <section className="py-20" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  ),
                  text: "Las agencias en México reportan el CPL de plataforma, no el CPL real de ventas.",
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  ),
                  text: "Presupuesto invertido en audiencias que nunca convierten a clientes.",
                },
                {
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                    </svg>
                  ),
                  text: "Contratos de 6-12 meses sin garantía de resultados medibles.",
                },
              ].map((pain, i) => (
                <div
                  key={i}
                  className="rounded-xl p-8"
                  style={{
                    backgroundColor: "#fcf9f8",
                    boxShadow: "0 2px 12px rgba(28,27,27,0.06)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: "#9bb4fe", color: "#294487" }}
                  >
                    {pain.icon}
                  </div>
                  <p
                    className="text-lg font-semibold leading-snug"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
                  >
                    {pain.text}
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
                Antes de contratar una agencia en México, compara lo que realmente importa.
              </h2>
            </div>

            <div
              className="overflow-hidden rounded-2xl"
              style={{ boxShadow: "0 4px 24px rgba(28,27,27,0.06)" }}
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#f6f3f2" }}>
                    <th
                      className="p-5 text-sm font-bold uppercase tracking-wider"
                      style={{ color: "#424656" }}
                    >
                      Criterio
                    </th>
                    <th
                      className="p-5 text-sm font-bold uppercase tracking-wider"
                      style={{ color: "#424656" }}
                    >
                      Agencias Tradicionales en MX
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
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.criterio}
                      style={{
                        backgroundColor: i % 2 === 0 ? "#fff" : "#fcf9f8",
                      }}
                    >
                      <td
                        className="p-5 font-semibold text-sm"
                        style={{ color: "#1c1b1b" }}
                      >
                        {row.criterio}
                      </td>
                      <td className="p-5 text-sm" style={{ color: "#424656" }}>
                        {row.differentiate ? (
                          <span>❌ {row.tradicional}</span>
                        ) : (
                          row.tradicional
                        )}
                      </td>
                      <td
                        className="p-5 text-sm font-semibold"
                        style={{
                          color: "#1c1b1b",
                          backgroundColor: "rgba(0,102,255,0.04)",
                        }}
                      >
                        {row.differentiate ? (
                          <span>✅ {row.jtads}</span>
                        ) : (
                          row.jtads
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── MARKETS IN MEXICO ── */}
        <section className="py-24" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl lg:text-4xl font-extrabold text-center mb-14"
              style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
            >
              Operamos en los principales mercados de México
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="rounded-xl p-6 flex items-start gap-4"
                  style={{
                    backgroundColor: "#fcf9f8",
                    boxShadow: "0 2px 12px rgba(28,27,27,0.06)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#9bb4fe" }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="#294487"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                      <path
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-bold text-base mb-1"
                      style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
                    >
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
              Qué gestionamos en Google Ads para empresas mexicanas
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="p-8 rounded-xl transition-all"
                  style={{
                    backgroundColor: "#fcf9f8",
                    boxShadow: "0 2px 12px rgba(28,27,27,0.06)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: "#9bb4fe", color: "#294487" }}
                  >
                    {s.icon}
                  </div>
                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
                  >
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

        {/* ── FORM ── */}
        <section className="py-24" style={{ backgroundColor: "#f6f3f2" }} id="diagnostico-form">
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
                Solicita tu diagnóstico sin costo
              </h2>
              <p style={{ color: "#424656" }}>
                Te contactamos en menos de 4 horas hábiles para agendar la sesión.
              </p>
            </div>

            <div
              className="bg-white overflow-hidden"
              style={{
                borderRadius: "0.75rem",
                boxShadow: "0 4px 24px rgba(28,27,27,0.06)",
              }}
            >
              <AuditoriaForm />
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24" style={{ backgroundColor: "#fff" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-extrabold text-center mb-12"
              style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
            >
              Preguntas frecuentes — Google Ads México
            </h2>

            <div className="space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl overflow-hidden"
                  style={{ backgroundColor: "#fcf9f8" }}
                >
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
                      <path
                        d="M19 9l-7 7-7-7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
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
        <section
          className="py-20 text-center"
          style={{ backgroundColor: "#0066ff" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl lg:text-4xl font-extrabold mb-5 leading-tight text-white"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              ¿Tu agencia actual te reporta el CPL real de ventas?
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.85)" }}>
              Si la respuesta es no, ya encontraste el problema. Empieza con un diagnóstico sin costo.
            </p>
            <a
              href="/diagnostico-en-vivo"
              className="inline-block font-bold text-[#0066ff] px-10 py-4 bg-white hover:bg-[#f6f3f2] transition-colors"
              style={{
                borderRadius: "4px",
                fontFamily: "Manrope, sans-serif",
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
