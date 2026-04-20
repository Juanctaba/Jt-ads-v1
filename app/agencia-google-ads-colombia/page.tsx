import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuditoriaForm from "@/app/diagnostico-en-vivo/AuditoriaForm";

export const metadata: Metadata = {
  title: "Agencia de Google Ads en Colombia — JT Ads | Performance Marketing",
  description:
    "Especialistas en Google Ads para empresas en Colombia. Tracking server-side, sin contratos largos. Gestión senior con $500k+/mes de experiencia. Primera sesión sin costo.",
  alternates: {
    canonical: "https://jtads.com/agencia-google-ads-colombia",
    languages: { "es-CO": "https://jtads.com/agencia-google-ads-colombia" },
  },
  keywords: [
    "agencia google ads colombia",
    "google ads bogota",
    "google ads medellin",
    "agencia publicidad digital colombia",
    "performance marketing colombia",
  ],
  openGraph: {
    title: "Agencia de Google Ads en Colombia — JT Ads | Performance Marketing",
    description: "Especialistas en Google Ads para empresas en Colombia. Tracking server-side, sin contratos. Gestión senior. Primera sesión sin costo.",
    images: ["/og-image.png"],
    url: "https://jtads.com/agencia-google-ads-colombia",
  },
  twitter: { card: "summary_large_image" },
};

const comparison = [
  {
    feature: "Tracking server-side activo",
    jt: "✅ Sí, desde el día 1",
    jtPositive: true,
    traditional: "❌ Raro — depende del cliente",
    tradPositive: false,
  },
  {
    feature: "El equipo que vende ejecuta",
    jt: "✅ Siempre",
    jtPositive: true,
    traditional: "❌ Casi nunca — hay juniors sin experiencia",
    tradPositive: false,
  },
  {
    feature: "Reportes con CPL real (CRM)",
    jt: "✅ Sí, conectado a ventas reales",
    jtPositive: true,
    traditional: "⚠️ A veces — depende si tú lo mides",
    tradPositive: null,
  },
  {
    feature: "Sin contratos de largo plazo",
    jt: "✅ Mes a mes",
    jtPositive: true,
    traditional: "❌ 6–12 meses con renovación automática",
    tradPositive: false,
  },
  {
    feature: "Acceso directo al experto",
    jt: "✅ Juan gestiona la cuenta directamente",
    jtPositive: true,
    traditional: "❌ Account manager intermediario",
    tradPositive: false,
  },
  {
    feature: "Inversión mínima recomendada",
    jt: "$2,000 USD/mes en plataforma",
    jtPositive: true,
    traditional: "Variable — aceptan cualquier presupuesto",
    tradPositive: null,
  },
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
    title: "Google Search",
    body: "Captura de intención activa con estructura alineada al funnel. Negativos agresivos, copy relevante y segmentación por ciudad colombiana. Compramos tráfico de intención, no de volumen.",
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
    body: "Configuración avanzada con señales de audiencia correctas para el mercado colombiano, assets de calidad y revisión constante de exclusiones. No es solo poner presupuesto y esperar.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
    title: "Google Display",
    body: "Retargeting y prospecting segmentado por etapa del funnel para audiencias colombianas calificadas. Sin banners de volumen sin segmentación real.",
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
    title: "YouTube Ads",
    body: "Awareness y consideración para ciclos de venta largos en Colombia. Formatos: skippable, bumper, Demand Gen con métricas de impacto real conectadas a conversiones verificadas.",
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
    body: "Campañas visuales en YouTube, Gmail y Discover para audiencias colombianas de alta intención. Ideal para acortar ciclos de ventas B2B con creativos que interrumpen sin molestar.",
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
    body: "Promocionamos tu app en Búsqueda de Google, Play Store, YouTube y sitios asociados. Optimizamos por instalaciones, eventos in-app o valor del usuario según tu objetivo de negocio.",
  },
];

const cities = [
  {
    name: "Bogotá",
    note: "Hub corporativo, SaaS B2B y Fintech",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
  },
  {
    name: "Medellín",
    note: "Tech, e-commerce y startups de alto crecimiento",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M13 10V3L4 14h7v7l9-11h-7z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
  },
  {
    name: "Cali",
    note: "Retail, alimentos y manufactura",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
  },
  {
    name: "Barranquilla",
    note: "Logística, comercio y servicios",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
  },
  {
    name: "Cartagena",
    note: "Turismo, real estate y servicios premium",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
  },
  {
    name: "Bucaramanga",
    note: "Industrial y servicios profesionales",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
  },
];

const faqItems = [
  {
    q: "¿Cuál es la inversión mínima recomendada en Google Ads para Colombia?",
    a: "Trabajamos con empresas que invierten mínimo $2,000 USD/mes en la plataforma. En Colombia, este presupuesto permite suficiente volumen de datos para optimizar correctamente tanto en Bogotá como en otras ciudades principales.",
  },
  {
    q: "¿Trabajan con empresas en cualquier ciudad de Colombia?",
    a: "Sí. Trabajamos de forma remota con empresas en Bogotá, Medellín, Cali, Barranquilla y cualquier otra ciudad. La gestión es completamente digital — revisamos tu cuenta en pantalla compartida y nos comunicamos vía email y videollamada.",
  },
  {
    q: "¿Cuánto tiempo tarda en verse resultados con Google Ads en Colombia?",
    a: "Las primeras señales de optimización se observan entre las semanas 2 y 4. Para resultados estables y escalables, el proceso requiere entre 2 y 3 meses de datos. Google Ads bien estructurado es un canal de crecimiento sostenible, no de resultados inmediatos.",
  },
  {
    q: "¿Trabajan con sectores específicos en Colombia?",
    a: "Sí. Tenemos experiencia en SaaS B2B, Fintech, educación online, real estate y servicios profesionales. Si tu sector tiene dinámicas particulares de compra, el diagnóstico es precisamente el espacio para evaluar si Google Ads tiene sentido para tu modelo de negocio.",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jtads.com" },
    { "@type": "ListItem", position: 2, name: "Google Ads Colombia", item: "https://jtads.com/agencia-google-ads-colombia" },
  ],
};

export default function AgenciaGoogleAdsColombiaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main
        className="pt-0 antialiased"
        style={{ backgroundColor: "#fcf9f8", color: "#1c1b1b", fontFamily: "Inter, sans-serif" }}
      >

        {/* ── HERO ── */}
        <section className="relative py-20 lg:py-32 overflow-hidden" style={{ backgroundColor: "#fcf9f8" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">

              {/* Left: copy */}
              <div>
                {/* Badge pill */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
                  style={{ backgroundColor: "#9bb4fe", color: "#294487" }}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Google Ads Colombia · 2026
                </div>

                <h1
                  className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
                  style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
                >
                  Agencia de Google Ads en Colombia para empresas que miden resultados en ventas, no en clics.
                </h1>

                <p className="text-lg leading-relaxed mb-8" style={{ color: "#424656" }}>
                  Gestionamos campañas con tracking correcto, estructura alineada al funnel y reportes conectados a tu CRM — no al dashboard de Google.
                </p>

                {/* Stats row */}
                <div className="flex flex-wrap gap-8 mb-10">
                  {[
                    { value: "$1.5M+ USD", label: "Ad Spend en CO" },
                    { value: "40+", label: "Empresas Colombianas" },
                    { value: "< 4h", label: "Respuesta" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p
                        className="text-2xl font-extrabold"
                        style={{ fontFamily: "Manrope, sans-serif", color: "#0066ff" }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-sm" style={{ color: "#424656" }}>{stat.label}</p>
                    </div>
                  ))}
                </div>

                <a
                  href="/diagnostico-en-vivo"
                  className="inline-block font-bold text-white px-8 py-4 transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "#0066ff",
                    borderRadius: "4px",
                    fontSize: "1rem",
                  }}
                >
                  Solicitar diagnóstico sin costo
                </a>
              </div>

              {/* Right: dashboard mockup */}
              <div className="relative">
                <div
                  className="rounded-2xl p-5 shadow-xl"
                  style={{ backgroundColor: "#e5e2e1", boxShadow: "0 20px 60px rgba(28,27,27,0.12)" }}
                >
                  <div className="bg-white rounded-xl overflow-hidden">
                    {/* Browser bar */}
                    <div
                      className="h-9 flex items-center px-4 gap-1.5"
                      style={{ backgroundColor: "#f6f3f2" }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#f87171" }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#fbbf24" }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#4ade80" }} />
                      <div
                        className="ml-3 flex-1 h-5 rounded-sm flex items-center px-3"
                        style={{ backgroundColor: "#e5e2e1", maxWidth: "180px" }}
                      >
                        <span className="text-xs truncate" style={{ color: "#424656" }}>
                          ads.google.com/aw/campaigns
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Header */}
                      <p
                        className="text-xs font-bold uppercase tracking-widest mb-5"
                        style={{ color: "#424656" }}
                      >
                        Campañas Colombia · Dashboard
                      </p>

                      {/* Metric bricks */}
                      <div className="grid grid-cols-2 gap-3 mb-5">
                        <div
                          className="rounded-xl p-4"
                          style={{ backgroundColor: "#f6f3f2" }}
                        >
                          <p className="text-xs font-semibold mb-1" style={{ color: "#424656" }}>
                            CPL Meta Platform
                          </p>
                          <p
                            className="text-xl font-bold line-through"
                            style={{ color: "#a33200" }}
                          >
                            $180.000 COP
                          </p>
                        </div>
                        <div
                          className="rounded-xl p-4"
                          style={{ backgroundColor: "#eff4ff" }}
                        >
                          <p className="text-xs font-semibold mb-1" style={{ color: "#294487" }}>
                            CPL Real CRM
                          </p>
                          <p
                            className="text-xl font-bold"
                            style={{ color: "#0066ff" }}
                          >
                            $94.000 COP
                          </p>
                        </div>
                      </div>

                      {/* City pills */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {["Bogotá", "Medellín", "Cali"].map((city) => (
                          <span
                            key={city}
                            className="px-3 py-1 rounded-full text-xs font-bold"
                            style={{ backgroundColor: "#9bb4fe", color: "#294487" }}
                          >
                            {city}
                          </span>
                        ))}
                      </div>

                      {/* Progress bar */}
                      <div>
                        <div className="flex justify-between items-center mb-1.5">
                          <p className="text-xs font-semibold" style={{ color: "#424656" }}>
                            Reducción de costo por lead calificado
                          </p>
                          <p className="text-xs font-bold" style={{ color: "#0066ff" }}>+38%</p>
                        </div>
                        <div className="w-full h-2 rounded-full" style={{ backgroundColor: "#e5e2e1" }}>
                          <div
                            className="h-2 rounded-full"
                            style={{ width: "62%", backgroundColor: "#0066ff" }}
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
            <div className="grid md:grid-cols-3 gap-8">
              {[
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
                  text: "Las agencias en Colombia muestran métricas de plataforma que no se conectan con las ventas reales.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  ),
                  text: "Presupuesto invertido en audiencias que generan clics pero no clientes calificados.",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  ),
                  text: "Contratos de largo plazo con renovación automática y sin resultados verificables.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-7"
                  style={{
                    backgroundColor: "#fcf9f8",
                    boxShadow: "0 4px 24px rgba(28,27,27,0.06)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#9bb4fe", color: "#294487" }}
                  >
                    {item.icon}
                  </div>
                  <p className="text-base leading-relaxed font-medium" style={{ color: "#1c1b1b" }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="py-24" style={{ backgroundColor: "#ffffff" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                className="text-3xl lg:text-4xl font-bold mb-4"
                style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
              >
                Antes de contratar una agencia en Colombia, compara lo que realmente importa.
              </h2>
              <p style={{ color: "#424656" }}>
                La mayoría de las agencias venden bien. La diferencia está en lo que entregan después de firmar.
              </p>
            </div>
            <div
              className="overflow-hidden rounded-2xl"
              style={{ boxShadow: "0 4px 24px rgba(28,27,27,0.06)" }}
            >
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#f6f3f2" }}>
                    <th
                      className="p-6 text-xs font-bold uppercase tracking-wider"
                      style={{ color: "#424656" }}
                    >
                      Criterio
                    </th>
                    <th
                      className="p-6 text-xs font-bold uppercase tracking-wider"
                      style={{ color: "#294487", backgroundColor: "#eff4ff" }}
                    >
                      JT Ads
                    </th>
                    <th
                      className="p-6 text-xs font-bold uppercase tracking-wider"
                      style={{ color: "#424656" }}
                    >
                      Agencias Tradicionales en CO
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      style={{
                        borderTop: "1px solid rgba(28,27,27,0.06)",
                        backgroundColor: i % 2 === 0 ? "#ffffff" : "#fdfcfc",
                      }}
                    >
                      <td className="p-6 font-medium" style={{ color: "#1c1b1b" }}>
                        {row.feature}
                      </td>
                      <td className="p-6" style={{ backgroundColor: "rgba(239,244,255,0.4)" }}>
                        <span
                          className="font-semibold"
                          style={{ color: row.jtPositive ? "#0066ff" : "#1c1b1b" }}
                        >
                          {row.jt}
                        </span>
                      </td>
                      <td className="p-6" style={{ color: "#424656" }}>
                        {row.traditional}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── MARKETS IN COLOMBIA ── */}
        <section className="py-24" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                className="text-3xl lg:text-4xl font-bold"
                style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
              >
                Operamos en los principales mercados de Colombia
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="rounded-xl p-6 flex items-start gap-4 transition-all hover:shadow-md"
                  style={{
                    backgroundColor: "#fcf9f8",
                    boxShadow: "0 4px 16px rgba(28,27,27,0.06)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "#9bb4fe", color: "#294487" }}
                  >
                    {city.icon}
                  </div>
                  <div>
                    <h3
                      className="font-bold text-base mb-1"
                      style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
                    >
                      {city.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#424656" }}>
                      {city.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="py-24" style={{ backgroundColor: "#ffffff" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2
                className="text-3xl lg:text-4xl font-bold"
                style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
              >
                Qué gestionamos en Google Ads para empresas colombianas
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="p-8 rounded-xl transition-all hover:shadow-md"
                  style={{
                    backgroundColor: "#f6f3f2",
                    boxShadow: "0 2px 12px rgba(28,27,27,0.04)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
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
        <section className="py-24" id="diagnostico-form" style={{ backgroundColor: "#f6f3f2" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div
                className="inline-flex items-center gap-2 px-4 py-1 rounded-sm text-xs font-bold uppercase tracking-widest mb-4"
                style={{ backgroundColor: "#0050cb", color: "#ffffff" }}
              >
                Auditoría Gratuita
              </div>
              <h2
                className="text-3xl md:text-4xl font-black mb-3"
                style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
              >
                Solicita tu diagnóstico sin costo
              </h2>
              <p style={{ color: "#424656" }}>
                Te contactamos en menos de 4 horas hábiles para agendar la sesión.
              </p>
            </div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 24px rgba(28,27,27,0.06)",
              }}
            >
              <AuditoriaForm />
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24" style={{ backgroundColor: "#ffffff" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-bold text-center mb-12"
              style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
            >
              Preguntas frecuentes — Google Ads Colombia
            </h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl overflow-hidden"
                  style={{ backgroundColor: "#f6f3f2" }}
                >
                  <summary
                    className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-base list-none select-none"
                    style={{ color: "#1c1b1b" }}
                  >
                    <span>{item.q}</span>
                    <svg
                      className="w-5 h-5 flex-shrink-0 ml-4 transition-transform group-open:rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: "#0066ff" }}
                    >
                      <path
                        d="M12 4v16m8-8H4"
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
        <section className="py-20 text-center" style={{ backgroundColor: "#0066ff" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              ¿Cuánto estás perdiendo en campañas mal optimizadas?
            </h2>
            <p className="text-lg mb-10" style={{ color: "rgba(255,255,255,0.85)" }}>
              Una sola sesión de diagnóstico puede identificar entre el 20% y el 40% de presupuesto malgastado. Empieza sin costo.
            </p>
            <a
              href="/diagnostico-en-vivo"
              className="inline-block font-bold px-10 py-4 transition-all hover:opacity-90"
              style={{
                backgroundColor: "#ffffff",
                color: "#0066ff",
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
