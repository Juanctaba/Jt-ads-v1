import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Casos de Éxito en Google Ads y Meta Ads — JT Ads",
  description:
    "Resultados reales de empresas en LATAM y USA que corrigieron su tracking y estructura de campañas. CPL real vs. reportado. Sin métricas infladas.",
  alternates: { canonical: "https://ads.juantabares.co/casos-de-exito" },
};

const cases = [
  {
    id: "01",
    industry: "SaaS B2B — México",
    platform: "Google Ads · Search",
    challenge: "La cuenta generaba 90+ leads/mes pero menos del 10% llegaba a una demo calificada. El equipo de ventas reportaba leads de mala calidad; la agencia anterior reportaba un CPL de $45.",
    action: "Auditamos las conversiones y encontramos que se estaban contando rellenos de formulario de landing pages de contenido (blog) como conversiones de ventas. Reconfiguramos el tracking para contar solo solicitudes de demo del sitio principal. Reestructuramos las campañas por intención de búsqueda e implementamos exclusiones de keywords informacionales.",
    results: [
      { metric: "CPL real (demo calificada)", before: "$380", after: "$94", tag: "−75%" },
      { metric: "Tasa demo → propuesta", before: "11%", after: "38%", tag: "+245%" },
      { metric: "Ad spend mensual", before: "$8,000", after: "$8,000", tag: "Sin cambio" },
    ],
  },
  {
    id: "02",
    industry: "Servicios Financieros — Colombia",
    platform: "Google Ads · Search + Performance Max",
    challenge: "La cuenta llevaba 8 meses con Performance Max como campaña principal. El volumen de leads era alto pero el equipo comercial cerraba menos del 3% de lo que llegaba. No había exclusiones de audiencia y el targeting incluía tráfico fuera del perfil.",
    action: "Desactivamos PMax temporalmente y auditamos los segmentos de audiencia reales compradores de los últimos 12 meses. Reconstruimos Search con match types restrictivos y lanzamos PMax nuevo con señales de audiencia basadas en clientes reales, CRM conectado via Enhanced Conversions.",
    results: [
      { metric: "Leads/mes", before: "210", after: "87", tag: "−59%" },
      { metric: "Tasa lead → cliente", before: "2.8%", after: "11.4%", tag: "+307%" },
      { metric: "Costo por cliente adquirido", before: "$1,240", after: "$490", tag: "−60%" },
    ],
  },
  {
    id: "03",
    industry: "E-commerce — Chile",
    platform: "Google Ads · Shopping + Search",
    challenge: "ROAS reportado: 4.2x. ROAS real (excluyendo devoluciones y pedidos cancelados): 1.8x. El feed de productos no tenía segmentación por margen y las campañas pujaban igual por todos los SKUs.",
    action: "Segmentamos el feed por categorías de margen alto, medio y bajo. Asignamos presupuesto y targets de ROAS diferenciados por categoría. Implementamos reglas de exclusión automática para SKUs sin stock. Conectamos datos de devoluciones con el feed de conversiones.",
    results: [
      { metric: "ROAS real (post-devoluciones)", before: "1.8x", after: "3.4x", tag: "+89%" },
      { metric: "Productos rentables (% del spend)", before: "41%", after: "78%", tag: "+90%" },
      { metric: "Margen bruto por pedido", before: "$18", after: "$31", tag: "+72%" },
    ],
  },
  {
    id: "04",
    industry: "Educación Online — Argentina",
    platform: "Meta Ads",
    challenge: "Las campañas generaban muchos leads a bajo costo pero la tasa de inscripción era inferior al 2%. El pixel estaba disparando eventos de 'Lead' en la vista de la landing, no en el submit del formulario.",
    action: "Corregimos el pixel event para que solo dispare en confirmación de formulario real. Implementamos el Conversions API del lado del servidor para recuperar eventos perdidos por bloqueadores. Creamos audiencias lookalike basadas en compradores reales, no en leads. Segmentamos creativos por etapa del funnel.",
    results: [
      { metric: "Costo por lead real (submit)", before: "$3.20", after: "$11.40", tag: "Número honesto" },
      { metric: "Tasa lead → inscripción", before: "1.9%", after: "8.7%", tag: "+358%" },
      { metric: "Costo por inscripción", before: "$168", after: "$131", tag: "−22%" },
    ],
  },
  {
    id: "05",
    industry: "Tecnología B2B — México + USA",
    platform: "LinkedIn Ads + Google Ads",
    challenge: "Budget mensual de $18,000 distribuido entre LinkedIn y Google sin criterio claro. LinkedIn generaba pocas conversiones pero el equipo no quería cerrarlo. Google generaba volumen pero con perfil de empresa equivocado.",
    action: "Mapeamos el funnel real: LinkedIn para awareness y consideración en cuentas target (ABM por industria y tamaño de empresa), Google Search para captura de demanda activa ya educada. Alineamos las audiencias con el ICP real del equipo de ventas: empresas +200 empleados, industrias específicas.",
    results: [
      { metric: "Oportunidades calificadas/mes", before: "4", after: "11", tag: "+175%" },
      { metric: "Ciclo de ventas promedio", before: "94 días", after: "61 días", tag: "−35%" },
      { metric: "Pipeline generado (90 días)", before: "$210k", after: "$580k", tag: "+176%" },
    ],
  },
  {
    id: "06",
    industry: "Real Estate — Colombia",
    platform: "Meta Ads + Google Ads",
    challenge: "Campañas activas desde hace 14 meses con tres agencias distintas. Ninguna había implementado tracking del ciclo completo. La conversión medida era 'click en WhatsApp' — no contacto real, no visita, no oferta.",
    action: "Implementamos tracking end-to-end: click → WhatsApp → contacto real (via CRM) → visita → oferta. Redefinimos la conversión principal como 'visita a proyecto agendada'. Reestructuramos Meta Ads por proyecto y etapa de avance de obra. Eliminamos campañas que generaban clicks de WhatsApp pero cero visitas documentadas.",
    results: [
      { metric: "Costo por visita agendada", before: "Sin dato", after: "$74", tag: "Medible por primera vez" },
      { metric: "Visitas/mes a proyectos", before: "~12 estimadas", after: "31 documentadas", tag: "+158%" },
      { metric: "Budget desperdiciado (estimado)", before: "60% del spend", after: "< 20%", tag: "−67%" },
    ],
  },
  {
    id: "07",
    industry: "Servicios Profesionales B2B — Chile",
    platform: "Google Ads · Search",
    challenge: "La empresa nunca había hecho paid media. Querían empezar bien desde el inicio: estructura correcta, tracking correcto, sin derrochar en el proceso de aprendizaje.",
    action: "Construimos la cuenta desde cero con Enhanced Conversions desde el día 1. Definimos el perfil de búsqueda exacto del comprador junto con el equipo comercial. Comenzamos con un presupuesto conservador, estructura de match types restrictiva y criterios de expansión de presupuesto atados a datos reales de calidad de lead.",
    results: [
      { metric: "CPL primer mes", before: "—", after: "$68", tag: "Línea base sana" },
      { metric: "Tasa lead → reunión calificada", before: "—", after: "34%", tag: "Desde el inicio" },
      { metric: "Budget quemado sin resultados", before: "Habitual en mes 1", after: "$0", tag: "Estructura desde día 1" },
    ],
  },
];

const stats = [
  {
    stat: "40–60%",
    label: "de cuentas de Google Ads tienen conversiones mal configuradas",
    detail: "El CPL reportado puede estar midiendo una acción que no tiene correlación directa con ventas reales.",
  },
  {
    stat: "25–40%",
    label: "de reducción en desperdicio con tracking correcto",
    detail: "Las empresas que miden bien antes de escalar eliminan presupuesto en audiencias que nunca convierten.",
  },
  {
    stat: "70%",
    label: "de presupuestos LATAM mal alineados con el objetivo real",
    detail: "Concentrados en awareness cuando el objetivo declarado es generación de oportunidades comerciales.",
  },
];

export default function CasosDeExitoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <SectionWrapper className="pt-20 pb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Resultados que se miden en ventas, no en clics.
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Casos de empresas que pasaron de ads que "funcionan según el reporte" a ads que
              generan oportunidades comerciales reales. Todos los números conectados al proceso de ventas,
              no a la plataforma de ads.
            </p>
          </div>
        </SectionWrapper>

        {/* Context note */}
        <SectionWrapper className="pt-0 pb-16">
          <div
            className="rounded-xl p-6 md:p-8 max-w-3xl"
            style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
              Antes de leer
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              En paid media, hay dos tipos de resultados. Los{" "}
              <strong style={{ color: "var(--text-primary)" }}>resultados de plataforma</strong> — lo
              que reporta Google, Meta o LinkedIn — y los{" "}
              <strong style={{ color: "var(--text-primary)" }}>resultados reales</strong> — lo que
              llega al equipo de ventas, avanza en el pipeline y cierra.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              En todos los casos documentados aquí, el primer trabajo fue conectar esos dos números.
              En varios casos, la diferencia era del 200–400%. No por campañas mal diseñadas, sino
              porque nadie había definido correctamente qué se estaba midiendo. Eso es lo que cambia
              primero. Los resultados vienen después.
            </p>
          </div>
        </SectionWrapper>

        {/* Case studies */}
        <SectionWrapper className="py-0 pb-20">
          <div className="flex flex-col gap-10">
            {cases.map((c) => (
              <div
                key={c.id}
                className="border border-gray-100 rounded-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-8 py-5 bg-gray-50 border-b border-gray-100">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-black text-[var(--accent)]/15 leading-none select-none">
                      {c.id}
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)]">{c.industry}</p>
                      <p className="text-xs text-[var(--text-muted)]">{c.platform}</p>
                    </div>
                  </div>
                </div>

                <div className="px-8 py-7 grid md:grid-cols-2 gap-8">
                  {/* Left: challenge + action */}
                  <div className="flex flex-col gap-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-2">Situación</p>
                      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-2">Qué hicimos</p>
                      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{c.action}</p>
                    </div>
                  </div>

                  {/* Right: results */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4">Resultados</p>
                    <div className="flex flex-col gap-3">
                      {c.results.map((r) => (
                        <div
                          key={r.metric}
                          className="flex items-start justify-between gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-[var(--text-muted)] mb-1">{r.metric}</p>
                            <div className="flex items-center gap-3 flex-wrap">
                              {r.before !== "—" && (
                                <>
                                  <span className="text-sm text-[var(--text-muted)] line-through">{r.before}</span>
                                  <span className="text-gray-300">→</span>
                                </>
                              )}
                              <span className="text-base font-bold text-[var(--text-primary)]">{r.after}</span>
                            </div>
                          </div>
                          <span className="flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--accent-faint)] text-[var(--accent)] whitespace-nowrap">
                            {r.tag}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Closing note */}
        <SectionWrapper className="py-16" style={{ background: "var(--bg-surface)" }}>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
              Una nota de transparencia
            </p>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Seguimos documentando. Los resultados reales toman tiempo.
            </h2>
            <p className="leading-relaxed text-[var(--text-secondary)] mb-4">
              Los casos que ves aquí reflejan trabajo real — situaciones que encontramos, decisiones
              que tomamos y resultados que medimos. Preferimos mostrar 7 casos bien documentados que
              30 testimonios genéricos que no le dicen nada a nadie.
            </p>
            <p className="leading-relaxed text-[var(--text-secondary)]">
              Si quieres entender cómo aplicaría este proceso a tu cuenta específica, la sesión de
              diagnóstico en vivo es el lugar correcto para empezar.
            </p>
          </div>
        </SectionWrapper>

        {/* Industry stats */}
        <SectionWrapper className="py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ color: "var(--text-primary)" }}>
            Lo que la industria confirma sobre tracking mal configurado.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((s) => (
              <div
                key={s.stat}
                className="rounded-xl p-6"
                style={{ border: "1px solid var(--bg-border)", background: "var(--bg-base)" }}
              >
                <div className="text-4xl font-bold mb-3" style={{ color: "var(--accent)" }}>
                  {s.stat}
                </div>
                <p className="font-medium mb-2" style={{ color: "var(--text-primary)" }}>{s.label}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.detail}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Final CTA */}
        <SectionWrapper className="pb-24">
          <FinalCTA
            headline="El primer paso siempre es el mismo: ver qué está pasando realmente."
            subtext="La sesión es gratuita. Las conclusiones son tuyas. Sin presión."
          />
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
