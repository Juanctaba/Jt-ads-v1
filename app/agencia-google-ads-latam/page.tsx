import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
    jt: "✅ Sí, desde el día 1",
    jtPositive: true,
    traditional: "❌ Raro — depende del cliente",
    tradPositive: false,
  },
  {
    feature: "El equipo que vende ejecuta",
    jt: "✅ Siempre",
    jtPositive: true,
    traditional: "❌ Casi nunca — hay juniors",
    tradPositive: false,
  },
  {
    feature: "Reportes con CPL real (CRM)",
    jt: "✅ Sí, conectado a ventas",
    jtPositive: true,
    traditional: "⚠️ A veces — depende si lo mides",
    tradPositive: null,
  },
  {
    feature: "Sin contratos de 12 meses",
    jt: "✅ Mes a mes",
    jtPositive: true,
    traditional: "❌ 6–12 meses típico",
    tradPositive: false,
  },
  {
    feature: "Acceso directo al experto",
    jt: "✅ Juan gestiona la cuenta",
    jtPositive: true,
    traditional: "❌ Account manager intermediario",
    tradPositive: false,
  },
  {
    feature: "Mínimo de presupuesto",
    jt: "$5,000/mes",
    jtPositive: true,
    traditional: "Variable — aceptan cualquier cosa",
    tradPositive: null,
  },
];

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    ),
    title: "Google Search",
    body: "Captura de intención activa. Estructura por intención, negativos agresivos y copy alineado con el funnel. Compramos tráfico de intención, no de volumen.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    ),
    title: "Performance Max",
    body: "Configuración avanzada con señales de audiencia correctas, assets de calidad y revisión constante de exclusiones. No es solo poner presupuesto y esperar.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    ),
    title: "Google Display",
    body: "Retargeting y prospecting segmentado para audiencias calificadas por etapa del funnel. Sin banners de volumen sin segmentación real.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    ),
    title: "YouTube Ads",
    body: "Awareness y consideración para ciclos de venta largos. Formatos: skippable, bumper, Demand Gen con métricas de impacto real.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    ),
    title: "Demand Gen",
    body: "Campañas visuales en YouTube, Gmail y Discover para audiencias de alta intención. Ideal para acortar ciclos de ventas largos con creativos que interrumpen sin molestar.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    ),
    title: "Campañas de Apps",
    body: "Promocionamos tu app en Búsqueda de Google, Play Store, YouTube y sitios asociados. Optimizamos por instalaciones, eventos in-app o valor del usuario según tu objetivo.",
  },
];

const faqItems = [
  {
    q: "¿Trabajan solo con Google o también otras plataformas?",
    a: "Google es una de nuestras especialidades principales. También gestionamos Meta Ads y LinkedIn Ads. En la mayoría de los casos, el mix correcto depende de tu objetivo y presupuesto — te recomendamos la combinación que tenga sentido para tu negocio.",
  },
  {
    q: "¿Cuál es el presupuesto mínimo para trabajar con JT Ads?",
    a: "Mínimo de $5,000/mes en la plataforma. Por debajo de ese monto, el impacto que podemos generar no justifica nuestros honorarios ni tu inversión de tiempo. No tiene sentido para ninguna de las dos partes.",
  },
  {
    q: "¿Cómo sé que están gestionando bien mi cuenta si no tengo acceso técnico?",
    a: "Desde el primer mes tienes acceso directo a la cuenta — ves todo lo que vemos nosotros. Los reportes mensuales incluyen el CPL real conectado con tu CRM, no el CPL de plataforma. Sin intermediarios.",
  },
  {
    q: "¿Trabajan con cuentas que ya tienen historial o solo cuentas nuevas?",
    a: "Ambas. Con cuentas nuevas construimos la estructura correcta desde el inicio. Con cuentas con historial, el primer paso es siempre el diagnóstico para entender qué tiene sentido conservar y qué hay que reconstruir.",
  },
];

export default function AgenciaGoogleAdsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-0 bg-white text-slate-900 antialiased">

        {/* ── HERO ── */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left: copy */}
              <div>
                <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                  Agencia de Google Ads para empresas en LATAM
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
                  Performance marketing con tracking correcto, estrategia real y resultados medibles.
                  Primera sesión de diagnóstico en vivo sin costo — revisamos tu cuenta juntos y te
                  decimos exactamente qué está fallando antes de que contrates a nadie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
                  <a
                    href="#diagnostico-form"
                    className="bg-[#0061FF] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-blue-200 transition-all"
                  >
                    Sesión de Diagnóstico gratuito
                  </a>
                  <a
                    href="https://www.google.com/partners/agency?id=1978608979"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-80 transition-opacity"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg"
                      alt="Google Partner"
                      style={{ height: "52px", width: "auto" }}
                    />
                  </a>
                </div>
                <div className="text-sm text-slate-500 space-y-1">
                  <p>• Sin llamada de ventas previa</p>
                  <p>• Respuesta en menos de 4 horas hábiles</p>
                </div>
              </div>

              {/* Right: dashboard mockup */}
              <div className="relative">
                <div className="bg-slate-100 rounded-2xl p-4 shadow-2xl border border-slate-200">
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
                    {/* Browser chrome */}
                    <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="p-6">
                      {/* CPL metric */}
                      <div className="flex justify-between items-end mb-6">
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                            Costo por Lead (CPL)
                          </p>
                          <p className="text-3xl font-bold text-slate-900">
                            $18.40{" "}
                            <span className="text-green-500 text-sm font-medium">↓ 34%</span>
                          </p>
                        </div>
                        {/* Sparkline — descending (CPL bajando) */}
                        <div className="w-24 h-12 bg-blue-50 rounded flex items-center justify-center">
                          <svg className="w-16 h-8 text-[#0061FF]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 40">
                            <path d="M0 5 Q 25 8 40 18 T 70 30 T 100 36" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                      {/* Lead quality bar */}
                      <div className="mb-5">
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                          <span>Calidad de Leads</span>
                          <span className="text-green-500 font-semibold">↑ +2.4</span>
                        </div>
                        <p className="text-xl font-bold text-slate-900 mb-2">8.7 / 10</p>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-2 bg-[#0061FF] rounded-full" style={{ width: "87%" }} />
                        </div>
                        <div className="flex justify-between text-xs text-slate-400 mt-1">
                          <span>Antes: 6.3</span><span>Ahora: 8.7</span>
                        </div>
                      </div>
                      {/* Stats row */}
                      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-100">
                        {[
                          { label: "ROAS", value: "4.8x" },
                          { label: "Conv. Rate", value: "12.3%" },
                          { label: "Ad Spend", value: "$22k" },
                        ].map((s) => (
                          <div key={s.label} className="text-center">
                            <p className="text-xs text-slate-400">{s.label}</p>
                            <p className="font-bold text-slate-900 text-sm">{s.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="border-y border-slate-100 py-8 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
              Trabajamos con empresas en:
            </p>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-12 items-center opacity-70">
              {[
                { flag: "🇲🇽", label: "México" },
                { flag: "🇨🇴", label: "Colombia" },
                { flag: "🇨🇱", label: "Chile" },
                { flag: "🇦🇷", label: "Argentina" },
                { flag: "🇵🇪", label: "Perú" },
                { flag: "🇺🇸", label: "USA" },
              ].map((m) => (
                <div key={m.label} className="flex items-center gap-2 font-semibold text-slate-600">
                  <span>{m.flag}</span> {m.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Antes de contratar una agencia, compara lo que realmente importa.
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                La mayoría de las agencias venden bien. La diferencia está en lo que entregan después de firmar.
              </p>
            </div>
            <div className="overflow-hidden border border-slate-200 rounded-2xl shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-6 text-sm font-bold text-slate-400 uppercase tracking-wider">
                      Característica
                    </th>
                    <th className="p-6 text-sm font-bold text-[#0061FF] uppercase tracking-wider bg-blue-50/50">
                      JT Ads
                    </th>
                    <th className="p-6 text-sm font-bold text-slate-400 uppercase tracking-wider">
                      Agencia tradicional
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparison.map((row) => (
                    <tr key={row.feature}>
                      <td className="p-6 font-medium text-slate-700">{row.feature}</td>
                      <td className="p-6 bg-blue-50/20">
                        <span className={row.jtPositive ? "text-green-600 font-bold" : "text-slate-700"}>
                          {row.jt}
                        </span>
                      </td>
                      <td className="p-6 text-slate-500">{row.traditional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── TRACKING IMPORTANCE ── */}
        <section className="py-24 bg-[#0F172A] text-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                El problema no suele ser tus anuncios. Suele ser lo que mides.
              </h2>
              <div className="space-y-6 text-lg text-slate-300">
                <p>
                  Hemos auditado cuentas donde el CPL reportado en Google Ads era $80. Al revisar el
                  tracking, el evento de "conversión" estaba disparando en la vista de la página de
                  agradecimiento — no en el submit real del formulario. Eso incluía rebotes, bots y
                  visitas directas a la URL. El CPL real, midiendo solo submits verificados, era $310.
                </p>
                <p>
                  Eso no es un error de las campañas. Es un error de medición que lleva meses
                  — a veces años — sin detectarse.
                </p>
                <p className="font-semibold text-white">
                  Antes de optimizar, necesitas medir bien. Antes de contratar una agencia, necesitas
                  saber qué miden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">
              Qué gestionamos en Google Ads
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s, i) =>
                s.quote ? (
                  <div
                    key={i}
                    className="p-8 bg-[#0061FF] text-white rounded-2xl flex flex-col justify-center"
                  >
                    <p className="italic mb-4 text-sm leading-relaxed">{s.body}</p>
                    <div className="h-px bg-white/20 w-full mb-4" />
                    <p className="font-bold">{s.author}</p>
                  </div>
                ) : (
                  <div
                    key={s.title}
                    className="p-8 border border-slate-100 rounded-2xl hover:border-blue-100 hover:bg-blue-50/30 transition-all"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-[#0061FF] mb-6">
                      {s.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{s.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{s.body}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ── FORM ── */}
        <section className="py-24 bg-slate-50 border-y border-slate-200" id="diagnostico-form">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
              <div className="p-8 lg:p-12">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
                    Primera sesión de diagnóstico. Sin compromiso.
                  </h2>
                  <p className="text-slate-500">
                    Sesión de 60 minutos en vivo. Te respondemos en menos de 48h hábiles.
                  </p>
                </div>
                <DiagnosticoForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
              Preguntas frecuentes
            </h2>
            <div className="space-y-6">
              {faqItems.map((item) => (
                <div key={item.q} className="border-b border-slate-100 pb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-20 bg-[#0061FF] text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Si estás evaluando agencias de Google Ads, empieza por ver qué tan bien está
              configurada tu cuenta actual.
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              La sesión es gratuita. El diagnóstico es tuyo. La decisión de contratarnos es
              completamente tuya.
            </p>
            <a
              href="#diagnostico-form"
              className="inline-block bg-white text-[#0061FF] px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors"
            >
              Sesión de Diagnóstico gratuito
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
