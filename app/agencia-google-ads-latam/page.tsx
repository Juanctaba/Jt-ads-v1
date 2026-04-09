import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import FaqSection from "@/components/sections/FaqSection";
import FinalCTA from "@/components/sections/FinalCTA";
import DiagnosticoForm from "@/components/forms/DiagnosticoForm";

export const metadata: Metadata = {
  title: "Agencia de Google Ads en LATAM — JT Ads | Sesión de Diagnóstico Gratis",
  description:
    "Especialistas en Google Ads para empresas en México, Colombia, Chile, Argentina y USA. Tracking server-side, sin contratos largos. Primera sesión de diagnóstico sin costo.",
  alternates: { canonical: "https://ads.juantabares.co/agencia-google-ads-latam" },
  keywords: [
    "agencia google ads latam",
    "agencia google ads mexico",
    "agencia google ads colombia",
    "google ads para empresas",
  ],
};

const comparison = [
  {
    feature: "Tracking server-side activo",
    jt: { value: "Sí, desde el día 1", positive: true },
    traditional: { value: "Raro — depende del cliente pedirlo", positive: false },
  },
  {
    feature: "Account manager senior dedicado",
    jt: { value: "Siempre — no hay juniors asignados", positive: true },
    traditional: { value: "Varía — en muchos casos son juniors", positive: false },
  },
  {
    feature: "Experiencia en presupuestos $500k+/mes",
    jt: { value: "Sí — equipo con track record probado", positive: true },
    traditional: { value: "Depende del equipo asignado", positive: null },
  },
  {
    feature: "Reportes con CPL real (conectado a CRM)",
    jt: { value: "Sí, conectado a ventas", positive: true },
    traditional: { value: "A veces — depende de si lo mides", positive: null },
  },
  {
    feature: "Sin contratos de 12 meses",
    jt: { value: "Mes a mes", positive: true },
    traditional: { value: "6–12 meses típico", positive: false },
  },
  {
    feature: "Mínimo de presupuesto",
    jt: { value: "$5,000/mes", positive: true },
    traditional: { value: "Variable — muchas aceptan cualquier cosa", positive: null },
  },
];

const services = [
  {
    title: "Google Search — Captura de intención",
    body: "Anuncios de texto en búsquedas activas. Estructura por intención, negativos agresivos, copy alineado con el funnel de ventas. No compramos tráfico de volumen — compramos tráfico de intención.",
  },
  {
    title: "Performance Max — Con configuración avanzada",
    body: "PMax bien configurado no es 'poner el presupuesto y esperar'. Requiere señales de audiencia correctas, assets de calidad, exclusiones activas y revisión constante de dónde está gastando realmente.",
  },
  {
    title: "Google Display — Retargeting y prospecting",
    body: "Display bien segmentado para audiencias calificadas. Retargeting por etapa del funnel. Nada de banners de volumen sin segmentación.",
  },
  {
    title: "YouTube Ads — Awareness y consideración",
    body: "Video ads para mercados donde el ciclo de ventas es más largo. Formatos: skippable, bumper, Demand Gen. Con métricas de impacto real, no solo de vistas.",
  },
  {
    title: "Google Shopping — Para e-commerce en LATAM",
    body: "Feeds optimizados, estructura de campañas por margen y rotación de producto. No todas las SKUs merecen el mismo presupuesto.",
  },
];

const markets = [
  { flag: "🇲🇽", country: "México", detail: "Mayor mercado de búsqueda en LATAM. Google Ads en español e inglés para empresas con presencia binacional." },
  { flag: "🇨🇴", country: "Colombia", detail: "Mercado en crecimiento. Alta competencia en servicios B2B y educación." },
  { flag: "🇨🇱", country: "Chile", detail: "CPCs más altos, pero conversiones de mayor valor. Mercado maduro para performance." },
  { flag: "🇦🇷", country: "Argentina", detail: "Requiere estrategia específica por variabilidad económica. Manejamos campañas adaptadas." },
  { flag: "🇵🇪", country: "Perú", detail: "Mercado en expansión. Buenas oportunidades en costos vs. competencia." },
  { flag: "🇺🇸", country: "USA Hispanic", detail: "Audiencias en español dentro de Estados Unidos. Targeting por idioma, ubicación y comportamiento." },
];

const faqItems = [
  {
    q: "¿Trabajan solo con Google o también otras plataformas?",
    a: "Google es una de nuestras especialidades principales. También gestionamos Meta Ads y LinkedIn Ads. En la mayoría de los casos, el mix correcto depende de tu objetivo y presupuesto — te recomendamos la combinación que tenga sentido para tu negocio, no la que sume más comisión.",
  },
  {
    q: "¿Cuál es el presupuesto mínimo para trabajar con JT Ads?",
    a: "$5,000/mes en la plataforma. Por debajo de ese monto, el impacto que podemos generar no justifica nuestros honorarios ni tu inversión de tiempo. No tiene sentido para ninguna de las dos partes.",
  },
  {
    q: "¿Cómo sé que están gestionando bien mi cuenta?",
    a: "Desde el primer mes tienes acceso directo a la cuenta — ves todo lo que vemos nosotros. Los reportes mensuales incluyen el CPL real conectado con tu CRM, no el CPL de plataforma. Y puedes hablar directamente con tu account manager senior, sin pasar por un intermediario.",
  },
  {
    q: "¿Trabajan con cuentas que ya tienen historial o solo cuentas nuevas?",
    a: "Ambas. Con cuentas nuevas construimos la estructura correcta desde el inicio. Con cuentas con historial, el primer paso es siempre la sesión de diagnóstico para entender qué tiene sentido conservar y qué hay que reconstruir.",
  },
];

export default function AgenciaGoogleAdsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <SectionWrapper className="pt-20 pb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Agencia de Google Ads para empresas en LATAM
            </h1>
            <p className="text-xl leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              Performance marketing con tracking correcto, estrategia real y resultados medibles.
              Primera sesión de diagnóstico en vivo sin costo — revisamos tu cuenta juntos y te
              decimos exactamente qué está fallando antes de que contrates a nadie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/diagnostico-en-vivo" size="lg">
                Reservar Sesión de Diagnóstico — Sin Costo
              </CTAButton>
            </div>
            <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
              Sin llamada de ventas previa. Sesión disponible en 48 horas hábiles. Respuesta en menos de 4 horas.
            </p>
          </div>
        </SectionWrapper>

        {/* Comparison table */}
        <SectionWrapper className="py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
            Antes de contratar una agencia, compara lo que realmente importa.
          </h2>
          <p className="mb-10" style={{ color: "var(--text-secondary)" }}>
            La mayoría de las agencias venden bien. La diferencia está en lo que entregan después de firmar.
          </p>

          <div className="overflow-x-auto rounded-xl" style={{ border: "1px solid var(--bg-border)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--bg-border)" }}>
                  <th className="text-left px-6 py-4 font-medium" style={{ color: "var(--text-muted)" }}>
                    Criterio
                  </th>
                  <th className="text-left px-6 py-4 font-semibold" style={{ color: "var(--accent-light)" }}>
                    JT Ads
                  </th>
                  <th className="text-left px-6 py-4 font-medium" style={{ color: "var(--text-muted)" }}>
                    Agencia tradicional
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    style={{
                      background: i % 2 === 0 ? "var(--bg-base)" : "var(--bg-surface)",
                      borderBottom: "1px solid var(--bg-border)",
                    }}
                  >
                    <td className="px-6 py-4 font-medium" style={{ color: "var(--text-primary)" }}>
                      {row.feature}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className="flex items-center gap-2"
                        style={{ color: row.jt.positive ? "var(--green)" : "var(--text-secondary)" }}
                      >
                        {row.jt.positive && (
                          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                        {row.jt.value}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        style={{
                          color: row.traditional.positive === false
                            ? "var(--red)"
                            : row.traditional.positive === null
                            ? "var(--yellow)"
                            : "var(--green)",
                        }}
                      >
                        {row.traditional.positive === false && "✗ "}
                        {row.traditional.positive === null && "⚠ "}
                        {row.traditional.value}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionWrapper>

        {/* Tracking importance */}
        <SectionWrapper className="py-16" style={{ background: "var(--bg-surface)" }}>
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              El problema no suele ser tus anuncios. Suele ser lo que mides.
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Hemos diagnosticado cuentas donde el CPL reportado en Google Ads era $80. El CPL real
              — conectando con el CRM y contando solo leads que llegaron a ventas — era $320.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Eso no es un error de las campañas. Es un error de medición que lleva meses (a veces
              años) sin detectarse. Antes de optimizar, necesitas medir bien. La sesión de diagnóstico
              empieza siempre por ahí.
            </p>
          </div>
        </SectionWrapper>

        {/* Services */}
        <SectionWrapper>
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ color: "var(--text-primary)" }}>
            Qué gestionamos en Google Ads.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-xl p-6"
                style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
              >
                <h3 className="font-semibold mb-3" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Markets */}
        <SectionWrapper className="py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ color: "var(--text-primary)" }}>
            Trabajamos en los mercados donde el español importa.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {markets.map((m) => (
              <div
                key={m.country}
                className="rounded-xl p-5"
                style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{m.flag}</span>
                  <span className="font-semibold" style={{ color: "var(--text-primary)" }}>{m.country}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Form */}
        <SectionWrapper className="py-16" style={{ background: "var(--bg-surface)" }}>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "var(--text-primary)" }}>
              Primera sesión de diagnóstico. Sin compromiso.
            </h2>
            <p className="text-center mb-8" style={{ color: "var(--text-secondary)" }}>
              Sesión de 60 minutos en vivo. Revisamos tu cuenta juntos, sin costo.
            </p>
            <DiagnosticoForm />
          </div>
        </SectionWrapper>

        {/* FAQ */}
        <SectionWrapper className="py-16">
          <div className="max-w-2xl">
            <FaqSection items={faqItems} title="Preguntas frecuentes sobre Google Ads" />
          </div>
        </SectionWrapper>

        {/* Final CTA */}
        <SectionWrapper className="pb-24">
          <FinalCTA
            headline="Si estás evaluando agencias de Google Ads, empieza por ver qué tan bien está configurada tu cuenta actual."
            subtext="La sesión es gratis. Las conclusiones son tuyas. La decisión de contratarnos es completamente tuya."
          />
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
