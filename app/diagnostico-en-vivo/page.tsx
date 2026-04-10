import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuditoriaForm from "./AuditoriaForm";

export const metadata: Metadata = {
  title: "Diagnóstico Gratuito de Ads | JT Ads Performance",
  description:
    "Auditamos tu cuenta de Google Ads, Meta o LinkedIn sin costo. Analizamos +20 puntos críticos para encontrar oportunidades de crecimiento inmediato.",
  alternates: { canonical: "https://jtads.com/diagnostico-en-vivo" },
};

const checklist = [
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Tracking",
    items: ["Pixel & CAPI Setup", "Event Matching Rate", "UTM Consistency"],
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    title: "Estructura",
    items: ["Campaign Consolidation", "Naming Conventions", "Funnel Exclusions"],
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Creativos",
    items: ["Ad Fatigue Analysis", "Hook Rates (3s)", "Content/Format Mix"],
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Bidding",
    items: ["Bid Strategy Audit", "Budget Allocation", "Overlap Detection"],
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.251 2.251 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.251 2.251 0 012.012-1.244h3.86M12 3v8.25m0 0l-3-3m3 3l3-3" />
      </svg>
    ),
    title: "Resultados",
    items: ["ROAS vs MER Analysis", "CAC Targets Audit", "Scaling Potential"],
  },
];

const faqItems = [
  {
    q: "¿Por qué es gratuita la auditoría?",
    a: "Creemos en demostrar valor antes de pedir cualquier compromiso. Es nuestra forma de presentarnos y mostrarte cómo trabajamos en JT Ads Performance.",
    open: true,
  },
  {
    q: "¿Necesitan acceso total a mi cuenta?",
    a: "Solo requerimos acceso de 'Analista' o 'Solo Lectura'. Nunca te pediremos contraseñas ni permisos para editar tus campañas durante el proceso de auditoría.",
  },
  {
    q: "¿Cuánto tiempo tarda el análisis?",
    a: "Una vez recibida la solicitud, te contactamos en menos de 4 horas hábiles para agendar. La sesión en vivo toma 60 minutos.",
  },
  {
    q: "¿Qué pasa después de la auditoría?",
    a: "Tú decides. Las conclusiones son tuyas. Si quieres que implementemos los cambios, conversamos sobre cómo trabajar juntos. Si prefieres ejecutarlo internamente, las conclusiones son igual de válidas.",
  },
];

function DiagnosticoIllustration() {
  const auditItems = [
    { label: "Pixel & CAPI Setup", status: "ok", detail: "Verificado" },
    { label: "Event Matching Rate", status: "warn", detail: "67% — bajo umbral" },
    { label: "UTM Consistency", status: "ok", detail: "Verificado" },
    { label: "Budget Allocation", status: "scanning", detail: "Analizando…" },
    { label: "ROAS vs MER", status: "scanning", detail: "Analizando…" },
  ];

  return (
    <div className="relative w-full">
      {/* Floating badge */}
      <div className="absolute -top-3 -right-3 z-10 px-3 py-1.5 bg-[#0050cb] text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-sm shadow-lg">
        60 min · En Vivo
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#c2c6d8]/15">
        {/* Browser bar */}
        <div className="bg-[#e5e2e1] px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#dcd9d9]" />
            <div className="w-3 h-3 rounded-full bg-[#dcd9d9]" />
            <div className="w-3 h-3 rounded-full bg-[#dcd9d9]" />
          </div>
          <div className="flex-1 bg-white/60 rounded-md h-5 mx-2 flex items-center px-3">
            <span className="text-[9px] text-[#727687] font-mono">ads.google.com · acceso analista</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 bg-[#fcf9f8]">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#0050cb] mb-0.5">
                Sesión de Diagnóstico
              </p>
              <h3 className="text-sm font-black text-[#1c1b1b]" style={{ fontFamily: "Manrope, sans-serif" }}>
                Análisis en Curso
              </h3>
            </div>
            {/* Pulse indicator */}
            <div className="flex items-center gap-2 bg-[#f6f3f2] rounded-full px-3 py-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066ff] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066ff]" />
              </span>
              <span className="text-[9px] font-bold text-[#424656]">En vivo</span>
            </div>
          </div>

          {/* Audit items */}
          <div className="space-y-2 mb-4">
            {auditItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-white rounded-lg px-3 py-2.5 border border-[#c2c6d8]/10"
              >
                {/* Status icon */}
                {item.status === "ok" && (
                  <svg className="w-4 h-4 text-[#10b981] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                )}
                {item.status === "warn" && (
                  <svg className="w-4 h-4 text-[#a33200] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                )}
                {item.status === "scanning" && (
                  <div className="w-4 h-4 rounded-full border-2 border-[#c2c6d8] border-t-[#0066ff] animate-spin flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold text-[#1c1b1b] truncate">{item.label}</p>
                </div>
                <span
                  className={`text-[9px] font-bold flex-shrink-0 ${
                    item.status === "ok"
                      ? "text-[#10b981]"
                      : item.status === "warn"
                      ? "text-[#a33200]"
                      : "text-[#727687]"
                  }`}
                >
                  {item.detail}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom: issues found */}
          <div className="bg-[#0050cb]/5 border border-[#0050cb]/15 rounded-lg px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#727687] mb-0.5">
                Oportunidades detectadas
              </p>
              <p className="text-xl font-black text-[#0050cb]" style={{ fontFamily: "Manrope, sans-serif" }}>
                4 <span className="text-xs font-bold text-[#424656]">puntos críticos</span>
              </p>
            </div>
            <div className="text-right">
              <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#727687] mb-0.5">
                Ahorro potencial
              </p>
              <p className="text-xl font-black text-[#1c1b1b]" style={{ fontFamily: "Manrope, sans-serif" }}>
                ~34%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DiagnosticoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-0 bg-[#fcf9f8] text-[#1c1b1b] antialiased" style={{ fontFamily: "Inter, sans-serif" }}>

        {/* ── HERO ── */}
        <section id="hero" className="relative min-h-[680px] flex items-center py-16 md:py-24 overflow-hidden">
          {/* Skewed bg accent */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f6f3f2] opacity-60 skew-x-12 translate-x-32" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">

              {/* Left — 7 cols */}
              <div className="lg:col-span-7 pt-4">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9bb4fe] text-[#294487] rounded-full text-xs font-bold mb-8 uppercase tracking-wider">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                  Análisis de Rendimiento 2026
                </div>

                <h1
                  className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
                  style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
                >
                  Auditamos tu cuenta de ads sin costo.{" "}
                  <span style={{ color: "#0066ff" }}>Te decimos exactamente qué está fallando.</span>
                </h1>

                <p className="text-lg md:text-xl text-[#424656] max-w-2xl leading-relaxed mb-10">
                  No pierdas más presupuesto en campañas que no escalan. Analizamos +20 puntos críticos de tu
                  cuenta para encontrar oportunidades de crecimiento inmediato.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 opacity-80 mb-10">
                  {[
                    { value: "$5M+", label: "Inversión Auditada" },
                    { value: "200+", label: "Marcas Optimizadas" },
                    { value: "48h", label: "Tiempo de Respuesta" },
                  ].map((stat, i) => (
                    <div key={stat.label} className="flex items-center gap-6">
                      {i > 0 && <div className="w-px h-12 bg-[#c2c6d8] opacity-40" />}
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-[#1c1b1b]">{stat.value}</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#727687]">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#solicitar"
                  className="inline-flex items-center gap-3 bg-[#0066ff] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#0050cb] transition-colors text-sm uppercase tracking-wide"
                >
                  Solicitar diagnóstico gratuito
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>

              {/* Right — 5 cols: Illustration */}
              <div className="lg:col-span-5">
                <DiagnosticoIllustration />
              </div>

            </div>
          </div>
        </section>

        {/* ── FORM SECTION ── */}
        <section id="solicitar" className="py-24 bg-[#f6f3f2]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0050cb] text-white rounded-sm text-[10px] font-bold uppercase tracking-[0.15em] mb-4">
                Auditoría Gratuita
              </div>
              <h2
                className="text-3xl md:text-4xl font-black text-[#1c1b1b] mb-3"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Solicita tu diagnóstico
              </h2>
              <p className="text-[#424656]">
                Te contactamos en menos de 4 horas hábiles para agendar la sesión.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-[#c2c6d8]/10 p-2 overflow-hidden">
              <AuditoriaForm />
            </div>
          </div>
        </section>

        {/* ── CHECKLIST ── */}
        <section className="py-24 bg-[#fcf9f8]" id="que-revisamos">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2
                className="text-3xl md:text-4xl font-black mb-4 text-[#1c1b1b]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                ¿Qué revisamos?
              </h2>
              <p className="text-[#424656] max-w-xl">
                Un análisis exhaustivo de 20+ puntos técnicos divididos en los pilares que realmente mueven la aguja del ROAS.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {checklist.map((col) => (
                <div
                  key={col.title}
                  className="bg-[#f6f3f2] p-6 rounded-xl border border-[#c2c6d8]/10"
                >
                  <div className="text-[#0066ff] mb-4">{col.icon}</div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-4 text-[#1c1b1b]">
                    {col.title}
                  </h3>
                  <ul className="space-y-3">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-[#424656]">
                        <svg className="w-3.5 h-3.5 text-[#0050cb] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── JUAN TABARES BIO ── */}
        <section className="py-24 bg-[#f6f3f2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-8 md:p-12 border border-[#c2c6d8]/10 flex flex-col md:flex-row items-center gap-12 shadow-sm">
              {/* Photo */}
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-xl flex-shrink-0 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/photos/juan-tabares.jpg"
                  alt="Juan Tabares — Performance Marketing Lead"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Bio */}
              <div className="flex-1">
                <h2
                  className="text-3xl font-black mb-1 text-[#1c1b1b]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Juan Tabares
                </h2>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0050cb] mb-6 block">
                  Performance Marketing Lead
                </span>
                <p className="text-[#424656] leading-relaxed mb-8">
                  Con más de 7 años gestionando presupuestos millonarios para marcas D2C y B2B en
                  Latinoamérica, Juan ha desarrollado una metodología de auditoría basada en datos técnicos,
                  no en suposiciones. Su enfoque se centra en la eficiencia del capital y el escalamiento
                  sostenible.
                </p>
                <a
                  href="https://www.linkedin.com/in/juan-tabares-b1272b58/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1c1b1b] font-bold hover:text-[#0066ff] transition-colors group"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  Connect on LinkedIn
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 bg-[#fcf9f8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-3xl font-black mb-12 text-center text-[#1c1b1b]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group bg-[#f6f3f2] rounded-xl p-6 border border-[#c2c6d8]/10 cursor-pointer"
                  {...(item.open ? { open: true } : {})}
                >
                  <summary className="flex justify-between items-center font-bold text-lg list-none text-[#1c1b1b]" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {item.q}
                    <svg
                      className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180 text-[#727687]"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-[#424656] text-sm leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <a
                href="#solicitar"
                className="inline-flex items-center gap-3 bg-[#0066ff] text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all active:scale-95 uppercase tracking-wide text-sm"
              >
                Solicitar Diagnóstico Gratuito
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
