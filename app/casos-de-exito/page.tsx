import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Casos de Éxito — JT Ads Performance Marketing",
  description:
    "Resultados reales de empresas en LATAM y USA que corrigieron su tracking y estructura de campañas. CPL real vs. reportado. Sin métricas infladas.",
  alternates: { canonical: "https://jtads.com/casos-de-exito" },
};

const cases = [
  {
    id: "01",
    industry: "SaaS B2B",
    geo: "México",
    platform: "Google Ads · Search",
    tag: "Tracking",
    challenge:
      "La cuenta generaba 90+ leads/mes pero menos del 10% llegaba a una demo calificada. El equipo de ventas reportaba leads de mala calidad; la agencia anterior reportaba un CPL de $45.",
    action:
      "Auditamos las conversiones y encontramos que se contaban rellenos de formularios de landing pages de contenido (blog) como conversiones de ventas. Reconfiguramos el tracking para contar solo solicitudes de demo del sitio principal. Reestructuramos las campañas por intención e implementamos exclusiones de keywords informacionales.",
    results: [
      { metric: "CPL real (demo calificada)", before: "$380", after: "$94", tag: "−75%" },
      { metric: "Tasa demo → propuesta", before: "11%", after: "38%", tag: "+245%" },
      { metric: "Ad spend mensual", before: "$8,000", after: "$8,000", tag: "Sin cambio" },
    ],
  },
  {
    id: "02",
    industry: "Servicios Financieros",
    geo: "Colombia",
    platform: "Google Ads · Search + Performance Max",
    tag: "Calidad de Leads",
    challenge:
      "8 meses con Performance Max como campaña principal. Volumen alto pero tasa de cierre menor al 3%. Sin exclusiones de audiencia, el targeting incluía tráfico fuera del perfil comprador.",
    action:
      "Desactivamos PMax temporalmente y auditamos los segmentos reales de compradores de los últimos 12 meses. Reconstruimos Search con match types restrictivos y relanzamos PMax con señales de audiencia basadas en clientes reales y Enhanced Conversions conectado al CRM.",
    results: [
      { metric: "Leads/mes", before: "210", after: "87", tag: "−59%" },
      { metric: "Tasa lead → cliente", before: "2.8%", after: "11.4%", tag: "+307%" },
      { metric: "Costo por cliente adquirido", before: "$1,240", after: "$490", tag: "−60%" },
    ],
  },
  {
    id: "03",
    industry: "E-commerce",
    geo: "Chile",
    platform: "Google Ads · Shopping + Search",
    tag: "ROAS Real",
    challenge:
      "ROAS reportado: 4.2x. ROAS real (excluyendo devoluciones y pedidos cancelados): 1.8x. El feed no tenía segmentación por margen y las campañas pujaban igual por todos los SKUs.",
    action:
      "Segmentamos el feed por margen alto, medio y bajo. Asignamos targets de ROAS diferenciados por categoría. Implementamos reglas de exclusión para SKUs sin stock. Conectamos datos de devoluciones con el feed de conversiones.",
    results: [
      { metric: "ROAS real (post-devoluciones)", before: "1.8x", after: "3.4x", tag: "+89%" },
      { metric: "Productos rentables (% del spend)", before: "41%", after: "78%", tag: "+90%" },
      { metric: "Margen bruto por pedido", before: "$18", after: "$31", tag: "+72%" },
    ],
  },
  {
    id: "04",
    industry: "Educación Online",
    geo: "Argentina",
    platform: "Meta Ads",
    tag: "Pixel / CAPI",
    challenge:
      "Campañas con muchos leads a bajo costo pero tasa de inscripción inferior al 2%. El pixel disparaba el evento 'Lead' en la vista de la landing, no en el submit real del formulario.",
    action:
      "Corregimos el pixel para disparar solo en confirmación real. Implementamos Conversions API server-side para recuperar eventos perdidos por bloqueadores. Creamos lookalikes basados en compradores reales y segmentamos creativos por etapa del funnel.",
    results: [
      { metric: "Costo por lead real (submit)", before: "$3.20", after: "$11.40", tag: "Número honesto" },
      { metric: "Tasa lead → inscripción", before: "1.9%", after: "8.7%", tag: "+358%" },
      { metric: "Costo por inscripción", before: "$168", after: "$131", tag: "−22%" },
    ],
  },
  {
    id: "05",
    industry: "Tecnología B2B",
    geo: "México + USA",
    platform: "LinkedIn Ads + Google Ads",
    tag: "ABM",
    challenge:
      "$18,000/mes distribuidos entre LinkedIn y Google sin criterio claro. LinkedIn generaba pocas conversiones; Google generaba volumen pero con perfil de empresa equivocado.",
    action:
      "Mapeamos el funnel real: LinkedIn para ABM (awareness en cuentas target por industria y tamaño), Google Search para captura de demanda activa ya educada. Alineamos audiencias con el ICP real del equipo de ventas.",
    results: [
      { metric: "Oportunidades calificadas/mes", before: "4", after: "11", tag: "+175%" },
      { metric: "Ciclo de ventas promedio", before: "94 días", after: "61 días", tag: "−35%" },
      { metric: "Pipeline generado (90 días)", before: "$210k", after: "$580k", tag: "+176%" },
    ],
  },
  {
    id: "06",
    industry: "Real Estate",
    geo: "Colombia",
    platform: "Meta Ads + Google Ads",
    tag: "Tracking End-to-End",
    challenge:
      "14 meses activos con tres agencias distintas. La conversión medida era 'click en WhatsApp' — sin tracking del ciclo completo: contacto real, visita, oferta.",
    action:
      "Implementamos tracking end-to-end: click → WhatsApp → contacto real (CRM) → visita → oferta. Redefinimos la conversión principal como 'visita a proyecto agendada'. Eliminamos campañas que generaban clicks sin visitas documentadas.",
    results: [
      { metric: "Costo por visita agendada", before: "Sin dato", after: "$74", tag: "Medible por primera vez" },
      { metric: "Visitas/mes a proyectos", before: "~12 estimadas", after: "31 documentadas", tag: "+158%" },
      { metric: "Budget desperdiciado (est.)", before: "60% del spend", after: "< 20%", tag: "−67%" },
    ],
  },
  {
    id: "07",
    industry: "Servicios Profesionales B2B",
    geo: "Chile",
    platform: "Google Ads · Search",
    tag: "Cuenta Nueva",
    challenge:
      "La empresa nunca había hecho paid media. Querían empezar bien desde el inicio: estructura correcta, tracking correcto, sin derrochar en el proceso de aprendizaje.",
    action:
      "Construimos la cuenta desde cero con Enhanced Conversions desde el día 1. Definimos el perfil de búsqueda exacto junto al equipo de ventas. Comenzamos con presupuesto conservador, match types restrictivos y criterios de expansión atados a calidad de lead real.",
    results: [
      { metric: "CPL primer mes", before: "—", after: "$68", tag: "Línea base sana" },
      { metric: "Tasa lead → reunión calificada", before: "—", after: "34%", tag: "Desde el inicio" },
      { metric: "Budget quemado sin resultados", before: "Habitual en mes 1", after: "$0", tag: "Estructura desde día 1" },
    ],
  },
];

const benchmarks = [
  {
    stat: "60%",
    color: "#0066ff",
    title: "Error de Configuración",
    desc: "De las cuentas analizadas tienen duplicidad de eventos en el Píxel o API de Conversiones.",
  },
  {
    stat: "42%",
    color: "#a33200",
    title: "Fuga de Atribución",
    desc: "Ventas que ocurren en el CRM pero no se reportan en Google/Meta por falta de tracking server-side.",
  },
  {
    stat: "15%",
    color: "#9bb4fe",
    title: "Inversión Perdida",
    desc: "Presupuesto asignado a términos irrelevantes o audiencias de baja calidad técnica.",
  },
];

const phases = [
  {
    phase: "Fase 01",
    title: "Auditoría de Higiene de Datos",
    desc: "Limpiamos el ruido. Verificamos que cada evento disparado sea único y represente una acción de valor real.",
  },
  {
    phase: "Fase 02",
    title: "Setup de Atribución Server-Side",
    desc: "Instalamos el GTM Server para capturar datos que los navegadores modernos (Safari/iOS) bloquean por defecto.",
  },
  {
    phase: "Fase 03",
    title: "Feedback Loop con CRM",
    desc: "Conectamos tu flujo de ventas con las plataformas para que el algoritmo aprenda qué leads sí cierran.",
  },
  {
    phase: "Fase 04",
    title: "Escalado Basado en P&L",
    desc: "Solo aumentamos la inversión cuando los números de tu cuenta bancaria (no de la plataforma) lo justifican.",
  },
];

/* ─── Hero illustration: CPL comparison card ─── */
function HeroIllustration() {
  return (
    <div className="relative">
      {/* Outer card */}
      <div className="bg-[#e5e2e1] rounded-2xl p-5 shadow-xl">
        <div className="bg-white rounded-xl overflow-hidden" style={{ boxShadow: "0 1px 3px rgba(28,27,27,0.06)" }}>
          {/* Header */}
          <div className="px-5 pt-5 pb-3 border-b border-[#f0edec]">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-0.5">Diagnóstico de Tracking</p>
            <p className="text-xs font-semibold text-[#1c1b1b]">SaaS B2B · Google Ads</p>
          </div>
          {/* CPL comparison */}
          <div className="grid grid-cols-2 gap-0 divide-x divide-[#f0edec]">
            <div className="p-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#727687] mb-1">CPL Plataforma</p>
              <p className="text-3xl font-black text-[#1c1b1b] line-through opacity-40">$45</p>
              <p className="text-[10px] text-[#a33200] font-bold mt-1">⚠ Evento incorrecto</p>
            </div>
            <div className="p-5 bg-[#0066ff]/5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#0050cb] mb-1">CPL Real</p>
              <p className="text-3xl font-black text-[#0066ff]">$94</p>
              <p className="text-[10px] text-green-600 font-bold mt-1">✓ Demo calificada</p>
            </div>
          </div>
          {/* Funnel flow */}
          <div className="px-5 py-4 bg-[#fcf9f8]">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#727687] mb-3">Flujo de medición corregido</p>
            <div className="flex items-center gap-1.5">
              {[
                { label: "Click", color: "#e5e2e1", text: "#727687" },
                { label: "Lead", color: "#dae1ff", text: "#294487" },
                { label: "Demo", color: "#0066ff", text: "#fff" },
                { label: "Venta", color: "#0050cb", text: "#fff" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-1.5">
                  {i > 0 && <svg className="w-2.5 h-2.5 text-[#c2c6d8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>}
                  <span
                    className="px-2 py-1 rounded text-[10px] font-bold"
                    style={{ background: step.color, color: step.text }}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Result bar */}
          <div className="px-5 py-4">
            <div className="flex justify-between items-center mb-1.5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#727687]">Tasa demo → propuesta</p>
              <p className="text-xs font-black text-green-600">+245%</p>
            </div>
            <div className="h-1.5 bg-[#e5e2e1] rounded-full overflow-hidden">
              <div className="h-full bg-[#0066ff] rounded-full" style={{ width: "78%" }} />
            </div>
            <div className="flex justify-between text-[10px] text-[#727687] mt-1">
              <span>Antes: 11%</span><span>Ahora: 38%</span>
            </div>
          </div>
        </div>
      </div>
      {/* Floating badge */}
      <div className="absolute -top-3 -right-3 bg-[#0066ff] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg">
        Caso Real
      </div>
    </div>
  );
}

export default function CasosDeExitoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-0 bg-[#fcf9f8] text-[#1c1b1b] antialiased" style={{ fontFamily: "Inter, sans-serif" }}>

        {/* ── HERO ── */}
        <section className="relative py-24 md:py-32 px-4 sm:px-8 bg-[#fcf9f8] overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            {/* Left — 7 cols */}
            <div className="md:col-span-7">
              <span className="inline-block px-3 py-1 bg-[#9bb4fe] text-[#294487] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                Métricas de Negocio Reales
              </span>
              <h1
                className="text-5xl md:text-7xl font-extrabold text-[#1c1b1b] tracking-tight leading-none mb-8"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Resultados que se miden en{" "}
                <span style={{ color: "#0066ff" }}>ventas</span>, no en clics.
              </h1>
              <p className="text-xl text-[#424656] max-w-2xl leading-relaxed mb-10">
                La mayoría de las agencias optimizan para el algoritmo de Facebook o Google. Nosotros
                conectamos tus campañas directamente con los datos de tu CRM para optimizar el retorno
                de inversión real.
              </p>
              <Link
                href="/diagnostico-en-vivo"
                className="inline-flex items-center gap-2 bg-[#0066ff] text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all"
              >
                Sesión de Diagnóstico gratuito
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </Link>
            </div>
            {/* Right — 5 cols: Custom illustration */}
            <div className="md:col-span-5">
              <HeroIllustration />
            </div>
          </div>
        </section>

        {/* ── CONTEXT ── */}
        <section className="py-24 px-4 sm:px-8 bg-[#f6f3f2]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2
                  className="text-4xl font-bold mb-6 tracking-tight text-[#1c1b1b]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  La verdad técnica tras el ROAS de plataforma.
                </h2>
                <p className="text-lg text-[#424656] mb-8 leading-relaxed">
                  Un clic no siempre es un lead, y un lead no siempre es una venta. Las plataformas
                  publicitarias sufren de "visión de túnel": reclaman crédito por cada interacción,
                  ignorando la duplicidad y las conversiones offline.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: "Server-Side Tracking",
                      desc: "Eliminamos la dependencia de cookies de terceros para una precisión del 100%.",
                      icon: (
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      ),
                    },
                    {
                      title: "Integración CRM Nativa",
                      desc: "Retroalimentamos al algoritmo con datos de ventas reales, no solo intención.",
                      icon: (
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                      ),
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-lg bg-[#0066ff] flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-[#1c1b1b]">{item.title}</h4>
                        <p className="text-sm text-[#424656]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <span className="text-4xl font-bold block mb-2" style={{ color: "#a33200" }}>40%</span>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#424656]">Error de Atribución Típico</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm mt-8">
                  <span className="text-4xl font-bold block mb-2" style={{ color: "#0066ff" }}>2.4x</span>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#424656]">Mejora en Eficiencia Media</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <span className="text-4xl font-bold block mb-2" style={{ color: "#0066ff" }}>7</span>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#424656]">Casos Documentados</span>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm mt-8">
                  <span className="text-4xl font-bold block mb-2" style={{ color: "#0050cb" }}>5</span>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#424656]">Mercados LATAM + USA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <section className="py-24 px-4 sm:px-8 bg-[#fcf9f8]">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="border-l-4 border-[#0066ff] pl-8 py-2 mb-16">
              <h2
                className="text-3xl font-bold mb-2 text-[#1c1b1b]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                7 casos documentados con números reales.
              </h2>
              <p className="text-[#424656]">
                Todos conectados al CRM. Ninguno mide solo clics o impresiones.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {cases.map((c) => (
                <div
                  key={c.id}
                  className="bg-white rounded-xl overflow-hidden"
                  style={{ boxShadow: "0 1px 3px rgba(28,27,27,0.06), 0 0 0 1px rgba(194,198,216,0.15)" }}
                >
                  {/* Card header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 px-8 py-5 bg-[#f6f3f2]">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-black text-[#0066ff]/15 leading-none select-none" style={{ fontFamily: "Manrope, sans-serif" }}>
                        {c.id}
                      </span>
                      <div>
                        <p className="font-bold text-[#1c1b1b]">{c.industry} — {c.geo}</p>
                        <p className="text-xs text-[#727687]">{c.platform}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-[#9bb4fe] text-[#294487] rounded-full text-xs font-bold uppercase tracking-wider">
                      {c.tag}
                    </span>
                  </div>

                  {/* Card body */}
                  <div className="px-8 py-7 grid md:grid-cols-2 gap-8">
                    {/* Left */}
                    <div className="flex flex-col gap-5">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-2">Situación</p>
                        <p className="text-sm leading-relaxed text-[#424656]">{c.challenge}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-2">Qué hicimos</p>
                        <p className="text-sm leading-relaxed text-[#424656]">{c.action}</p>
                      </div>
                    </div>

                    {/* Right: results */}
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-4">Resultados</p>
                      <div className="flex flex-col gap-3">
                        {c.results.map((r) => (
                          <div
                            key={r.metric}
                            className="grid grid-cols-2 gap-3"
                          >
                            <div className="p-4 bg-[#f6f3f2] rounded-lg">
                              <span className="block text-[10px] uppercase font-bold text-[#727687] mb-1">Antes</span>
                              <span className="text-sm font-bold text-[#1c1b1b] line-through opacity-50">{r.before}</span>
                            </div>
                            <div className="p-4 bg-[#0066ff]/5 rounded-lg">
                              <span className="block text-[10px] uppercase font-bold text-[#0050cb] mb-1">Después</span>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-sm font-bold text-[#0066ff]">{r.after}</span>
                                <span className="text-[10px] font-black text-[#0050cb] bg-[#dae1ff] px-2 py-0.5 rounded-full">{r.tag}</span>
                              </div>
                            </div>
                            <div className="col-span-2 -mt-1">
                              <p className="text-[10px] text-[#727687]">{r.metric}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Transparency note */}
            <div className="mt-12 p-8 bg-[#f6f3f2] rounded-xl border-l-4 border-[#0066ff]">
              <p className="text-xs font-bold uppercase tracking-widest text-[#0050cb] mb-2">Nota de transparencia</p>
              <p className="text-[#424656] leading-relaxed">
                Preferimos mostrar 7 casos bien documentados que 30 testimonios genéricos. Los resultados
                reales toman tiempo. Seguimos documentando.
              </p>
            </div>
          </div>
        </section>

        {/* ── INDUSTRY BENCHMARKS ── */}
        <section className="py-24 px-4 sm:px-8 bg-[#1c1b1b] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-4xl font-extrabold mb-4"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                El estado actual del Performance Marketing
              </h2>
              <p className="text-[#dcd9d9] max-w-2xl mx-auto">
                Datos de más de 100 auditorías técnicas realizadas en el último año.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benchmarks.map((b) => (
                <div key={b.stat} className="p-8 border-l-2 bg-white/5 rounded-r-xl" style={{ borderColor: b.color }}>
                  <div className="text-6xl font-black mb-4 tracking-tighter" style={{ color: b.color, fontFamily: "Manrope, sans-serif" }}>
                    {b.stat}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{b.title}</h4>
                  <p className="text-sm text-[#dcd9d9] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-24 px-4 sm:px-8 bg-[#fcf9f8]">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-4xl font-extrabold mb-16 text-center text-[#1c1b1b]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Lo que hace diferente un diagnóstico de JT Ads
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {phases.map((p) => (
                <div key={p.phase} className="p-10 bg-[#f6f3f2] rounded-xl border-t-4 border-[#0066ff]">
                  <span className="text-xs font-bold tracking-[0.3em] text-[#0050cb] mb-6 block uppercase">
                    {p.phase}
                  </span>
                  <h4 className="text-xl font-bold mb-4 text-[#1c1b1b]" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {p.title}
                  </h4>
                  <p className="text-sm text-[#424656] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-24 px-4 sm:px-8">
          <div className="max-w-4xl mx-auto rounded-3xl p-12 md:p-20 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0050cb 0%, #0066ff 100%)" }}>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              ¿Hablamos de tus ventas,<br />no de tus clics?
            </h2>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
              Diagnóstico técnico de 60 minutos donde analizaremos tu estructura de tracking y
              buscaremos fugas de rentabilidad.
            </p>
            <Link
              href="/diagnostico-en-vivo"
              className="inline-block bg-white text-[#0066ff] px-10 py-5 rounded-lg font-bold text-xl hover:bg-[#dcd9d9] transition-all mb-4"
            >
              Sesión de Diagnóstico gratuito
            </Link>
            <p className="text-white/60 text-sm font-medium mt-4">
              Sin tarjetas de crédito. Sin contratos. Solo datos.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
