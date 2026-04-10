import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuditoriaForm from "@/app/diagnostico-en-vivo/AuditoriaForm";

export const metadata: Metadata = {
  title: "Agencia de Google Ads en Chile — JT Ads | Performance Marketing",
  description:
    "Especialistas en Google Ads para empresas en Chile. Tracking server-side, sin contratos largos. Gestión senior con $500k+/mes de experiencia. Primera sesión sin costo.",
  alternates: { canonical: "https://jtads.com/agencia-google-ads-chile" },
  keywords: [
    "agencia google ads chile",
    "google ads santiago",
    "agencia publicidad digital chile",
    "performance marketing chile",
    "google ads valparaiso",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuál es la inversión mínima recomendada en Google Ads para Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos con empresas que invierten mínimo $3,000 USD/mes en la plataforma. En Chile, este presupuesto permite generar el volumen de datos necesario para que los algoritmos de Google optimicen correctamente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajan con empresas fuera de Santiago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Trabajamos de forma remota con empresas en todo Chile. La gestión es 100% digital — revisamos tu cuenta en pantalla compartida y nos comunicamos vía email y videollamada sin restricciones geográficas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda en verse resultados con Google Ads en Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las primeras señales de mejora aparecen entre las semanas 2 y 4. Resultados estables y escalables se consolidan entre el mes 2 y 3. El mercado chileno tiene buena penetración digital, lo que favorece la eficiencia del canal.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajáis con empresas de sectores como minería o agroindustria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Aunque nuestra especialidad es SaaS B2B, Fintech y servicios profesionales, hemos gestionado cuentas en sectores industriales donde el ciclo de venta es largo y la calidad del lead es crítica. El diagnóstico nos permite evaluar la viabilidad.",
      },
    },
  ],
};

const comparison = [
  {
    feature: "Tracking",
    jt: "✅ Server-side activo desde el día 1",
    jtPositive: true,
    traditional: "❌ Pixel básico — datos incompletos",
    tradPositive: false,
  },
  {
    feature: "Reporte",
    jt: "✅ CPL real conectado a CRM y ventas",
    jtPositive: true,
    traditional: "❌ Dashboard de Google — CPL de plataforma",
    tradPositive: false,
  },
  {
    feature: "Contrato",
    jt: "✅ Mes a mes, sin cláusulas ocultas",
    jtPositive: true,
    traditional: "❌ 6–12 meses con renovación automática",
    tradPositive: false,
  },
  {
    feature: "Account Manager",
    jt: "✅ Acceso directo al experto senior",
    jtPositive: true,
    traditional: "❌ Junior sin experiencia real en medios",
    tradPositive: false,
  },
  {
    feature: "Experiencia en ad spend",
    jt: "✅ $500k+/mes gestionados",
    jtPositive: true,
    traditional: "⚠️ Variable — no verificable",
    tradPositive: null,
  },
  {
    feature: "Tiempo de respuesta",
    jt: "✅ Menos de 4 horas hábiles",
    jtPositive: true,
    traditional: "❌ 24–72 horas en promedio",
    tradPositive: false,
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
    title: "Search Ads",
    body: "Captura de intención activa con estructura alineada al funnel y negativos agresivos. Compramos tráfico de intención real en el mercado chileno, no volumen genérico.",
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
    body: "Configuración avanzada con señales de audiencia correctas, assets de calidad y revisión constante de exclusiones. No es solo presupuesto — es estructura y control.",
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
    title: "Display & YouTube",
    body: "Retargeting y prospecting segmentado por etapa de funnel para audiencias chilenas calificadas. Awareness que se conecta a métricas de conversión reales.",
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
    body: "Campañas de Shopping con feeds optimizados, estructura por margen y segmentación por intención de compra para el e-commerce chileno.",
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
    body: "Campañas visuales en YouTube, Gmail y Discover para audiencias chilenas de alta intención. Ideal para acortar ciclos B2B con creativos que interrumpen sin molestar.",
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
    body: "Promocionamos tu app en Búsqueda de Google, Play Store, YouTube y sitios asociados. Optimizamos por instalaciones, eventos in-app o valor de usuario según tu objetivo.",
  },
];

const cities = [
  {
    name: "Santiago",
    note: "Hub corporativo, tech y servicios financieros",
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
    name: "Valparaíso",
    note: "Educación, logística y servicios",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
  },
  {
    name: "Concepción",
    note: "Industrial, retail y servicios regionales",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
  },
  {
    name: "Antofagasta",
    note: "Minería, energía y servicios B2B",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
  },
  {
    name: "Temuco",
    note: "Agroindustria y servicios regionales",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </svg>
    ),
  },
  {
    name: "La Serena",
    note: "Turismo, real estate y comercio",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    ),
  },
];

const faqs = [
  {
    q: "¿Cuál es la inversión mínima recomendada en Google Ads para Chile?",
    a: "Trabajamos con empresas que invierten mínimo $3,000 USD/mes en la plataforma. En Chile, este presupuesto permite generar el volumen de datos necesario para que los algoritmos de Google optimicen correctamente.",
  },
  {
    q: "¿Trabajan con empresas fuera de Santiago?",
    a: "Sí. Trabajamos de forma remota con empresas en todo Chile. La gestión es 100% digital — revisamos tu cuenta en pantalla compartida y nos comunicamos vía email y videollamada sin restricciones geográficas.",
  },
  {
    q: "¿Cuánto tiempo tarda en verse resultados con Google Ads en Chile?",
    a: "Las primeras señales de mejora aparecen entre las semanas 2 y 4. Resultados estables y escalables se consolidan entre el mes 2 y 3. El mercado chileno tiene buena penetración digital, lo que favorece la eficiencia del canal.",
  },
  {
    q: "¿Trabajáis con empresas de sectores como minería o agroindustria?",
    a: "Sí. Aunque nuestra especialidad es SaaS B2B, Fintech y servicios profesionales, hemos gestionado cuentas en sectores industriales donde el ciclo de venta es largo y la calidad del lead es crítica. El diagnóstico nos permite evaluar la viabilidad.",
  },
];

export default function AgenciaGoogleAdsChilePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />

      {/* ── 1. HERO ────────────────────────────────────────────────── */}
      <section
        style={{ backgroundColor: "#fcf9f8" }}
        className="pt-24 pb-20 px-6"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-6"
              style={{ backgroundColor: "#9bb4fe", color: "#294487" }}>
              Google Ads Chile · 2026
            </div>

            <h1
              className="text-4xl lg:text-5xl font-bold leading-tight mb-5"
              style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
            >
              Agencia de Google Ads en Chile para empresas que optimizan cada
              peso invertido.
            </h1>

            <p className="text-lg mb-8" style={{ color: "#424656", fontFamily: "Inter, sans-serif" }}>
              Gestionamos campañas con tracking correcto, estructura alineada al
              funnel y reportes conectados a tu CRM — no al dashboard de Google.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { label: "$1.2M+ Ad Spend en CL" },
                { label: "30+ Empresas Chilenas" },
                { label: "< 4h Respuesta" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#0066ff" }}
                  />
                  <span className="text-sm font-semibold" style={{ color: "#1c1b1b" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/diagnostico-en-vivo"
              className="inline-block rounded text-sm font-semibold px-6 py-3 text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#0066ff", borderRadius: "4px" }}
            >
              Solicitar diagnóstico sin costo
            </a>
          </div>

          {/* Right — illustration card */}
          <div
            className="rounded-2xl p-6"
            style={{ backgroundColor: "#e5e2e1", boxShadow: "0 4px 24px rgba(28,27,27,0.06)" }}
          >
            {/* Browser bar */}
            <div className="flex items-center gap-1.5 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <div
                className="ml-3 flex-1 h-5 rounded text-xs flex items-center px-2"
                style={{ backgroundColor: "#fcf9f8", color: "#424656" }}
              >
                ads.google.com/aw/campaigns
              </div>
            </div>

            {/* Dashboard header */}
            <p className="text-xs font-semibold mb-4" style={{ color: "#424656" }}>
              Campañas Chile · Dashboard
            </p>

            {/* CPL bricks */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div
                className="rounded-xl p-4"
                style={{ backgroundColor: "#fcf9f8", boxShadow: "0 2px 8px rgba(28,27,27,0.06)" }}
              >
                <p className="text-xs mb-1" style={{ color: "#424656" }}>CPL Plataforma</p>
                <p
                  className="text-xl font-bold line-through"
                  style={{ color: "#a33200", fontFamily: "Manrope, sans-serif" }}
                >
                  $18.500 CLP
                </p>
              </div>
              <div
                className="rounded-xl p-4"
                style={{ backgroundColor: "#fcf9f8", boxShadow: "0 2px 8px rgba(28,27,27,0.06)" }}
              >
                <p className="text-xs mb-1" style={{ color: "#424656" }}>CPL Real</p>
                <p
                  className="text-xl font-bold"
                  style={{ color: "#0066ff", fontFamily: "Manrope, sans-serif" }}
                >
                  $9.800 CLP
                </p>
              </div>
            </div>

            {/* City pills */}
            <div className="flex flex-wrap gap-2 mb-5">
              {["Santiago", "Valparaíso", "Concepción"].map((city) => (
                <span
                  key={city}
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{ backgroundColor: "#9bb4fe", color: "#294487" }}
                >
                  {city}
                </span>
              ))}
            </div>

            {/* Progress bar */}
            <div>
              <div className="flex justify-between text-xs mb-1" style={{ color: "#424656" }}>
                <span>Reducción de costo por lead</span>
                <span className="font-semibold" style={{ color: "#0066ff" }}>+47%</span>
              </div>
              <div className="h-2 rounded-full" style={{ backgroundColor: "#d6d3d2" }}>
                <div
                  className="h-2 rounded-full"
                  style={{ width: "47%", backgroundColor: "#0066ff" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PAIN POINTS ────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#f6f3f2" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Las agencias en Chile reportan el CPL de plataforma, no el CPL real conectado a ventas.",
              "Presupuesto invertido en audiencias que generan tráfico pero no clientes con intención real.",
              "Contratos anuales con cláusulas de renovación automática y sin métricas de resultado verificables.",
            ].map((text) => (
              <div
                key={text}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: "#fcf9f8",
                  boxShadow: "0 2px 12px rgba(28,27,27,0.06)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#9bb4fe" }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="#294487" viewBox="0 0 24 24">
                    <path
                      d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#1c1b1b", fontFamily: "Inter, sans-serif" }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. COMPARISON TABLE ───────────────────────────────────── */}
      <section style={{ backgroundColor: "#ffffff" }} className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-3"
            style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
          >
            Antes de contratar una agencia en Chile, compara lo que realmente importa.
          </h2>
          <p className="text-center mb-12 text-sm" style={{ color: "#424656" }}>
            No todas las agencias de Google Ads ofrecen lo mismo — aunque digan que sí.
          </p>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 4px 24px rgba(28,27,27,0.06)" }}
          >
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#f6f3f2" }}>
                  <th className="text-left px-6 py-4 font-semibold" style={{ color: "#1c1b1b", width: "28%" }}>
                    Criterio
                  </th>
                  <th className="text-left px-6 py-4 font-semibold" style={{ color: "#424656", width: "36%" }}>
                    Agencias Tradicionales en CL
                  </th>
                  <th
                    className="text-left px-6 py-4 font-semibold"
                    style={{ color: "#0050cb", width: "36%", backgroundColor: "rgba(219,234,254,0.3)" }}
                  >
                    JT Ads
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{ borderTop: "1px solid #f0edec" }}
                  >
                    <td className="px-6 py-4 font-medium" style={{ color: "#1c1b1b" }}>
                      {row.feature}
                    </td>
                    <td className="px-6 py-4" style={{ color: "#424656" }}>
                      {row.traditional}
                    </td>
                    <td
                      className="px-6 py-4 font-medium"
                      style={{
                        color: "#0050cb",
                        backgroundColor: "rgba(219,234,254,0.2)",
                      }}
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

      {/* ── 4. MARKETS IN CHILE ───────────────────────────────────── */}
      <section style={{ backgroundColor: "#f6f3f2" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-3"
            style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
          >
            Operamos en los principales mercados de Chile
          </h2>
          <p className="text-center mb-12 text-sm" style={{ color: "#424656" }}>
            Gestión remota para empresas en todo el territorio nacional.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <div
                key={city.name}
                className="rounded-xl p-5 flex items-start gap-4"
                style={{
                  backgroundColor: "#fcf9f8",
                  boxShadow: "0 2px 12px rgba(28,27,27,0.06)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#9bb4fe", color: "#294487" }}
                >
                  {city.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm mb-0.5" style={{ color: "#1c1b1b", fontFamily: "Manrope, sans-serif" }}>
                    {city.name}
                  </p>
                  <p className="text-xs" style={{ color: "#424656" }}>
                    {city.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SERVICES ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#ffffff" }} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-3"
            style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
          >
            Qué gestionamos en Google Ads para empresas chilenas
          </h2>
          <p className="text-center mb-12 text-sm" style={{ color: "#424656" }}>
            Cada canal, calibrado para el mercado chileno y tu objetivo de negocio.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: "#fcf9f8",
                  boxShadow: "0 2px 12px rgba(28,27,27,0.06)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#9bb4fe", color: "#294487" }}
                >
                  {svc.icon}
                </div>
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ color: "#1c1b1b", fontFamily: "Manrope, sans-serif" }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#424656" }}>
                  {svc.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FORM SECTION ───────────────────────────────────────── */}
      <section
        id="diagnostico-form"
        style={{ backgroundColor: "#f6f3f2" }}
        className="py-20 px-6"
      >
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4"
            style={{ backgroundColor: "#9bb4fe", color: "#294487" }}
          >
            Auditoría Gratuita
          </div>
          <h2
            className="text-3xl font-bold mb-3"
            style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
          >
            Solicita tu diagnóstico
          </h2>
          <p className="text-sm" style={{ color: "#424656" }}>
            Te contactamos en menos de 4 horas hábiles para agendar la sesión.
          </p>
        </div>

        <div
          className="max-w-2xl mx-auto rounded-xl overflow-hidden"
          style={{
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 24px rgba(28,27,27,0.06)",
          }}
        >
          <AuditoriaForm />
        </div>
      </section>

      {/* ── 7. FAQ ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#ffffff" }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
          >
            Preguntas frecuentes — Google Ads Chile
          </h2>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl overflow-hidden"
                style={{
                  backgroundColor: "#f6f3f2",
                  boxShadow: "0 1px 6px rgba(28,27,27,0.06)",
                }}
              >
                <summary
                  className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none select-none"
                  style={{ color: "#1c1b1b" }}
                >
                  <span className="font-semibold text-sm" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {faq.q}
                  </span>
                  <svg
                    className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#0066ff" }}
                  >
                    <path
                      d="M19 9l-7 7-7-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: "#424656", fontFamily: "Inter, sans-serif" }}>
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FINAL CTA ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#0066ff" }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            ¿Tu agencia en Chile te reporta ventas o solo clics?
          </h2>
          <p className="text-white/80 mb-10 text-base max-w-xl mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            La diferencia entre ambas métricas puede costar hasta el 40% de tu
            presupuesto mensual. Descúbrelo en una sesión sin costo.
          </p>
          <a
            href="/diagnostico-en-vivo"
            className="inline-block font-semibold text-sm px-8 py-3 rounded transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#ffffff",
              color: "#0050cb",
              borderRadius: "4px",
            }}
          >
            Reservar Sesión de Diagnóstico
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
