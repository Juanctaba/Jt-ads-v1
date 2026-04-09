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

const stats = [
  {
    stat: "40–60%",
    label: "de cuentas de Google Ads tienen conversiones mal configuradas",
    detail:
      "El CPL reportado puede ser hasta 3x menor al CPL real cuando se conecta con el CRM.",
  },
  {
    stat: "25–40%",
    label: "de reducción en desperdicio con server-side tracking",
    detail:
      "Las empresas que implementan tracking correcto antes de escalar reducen el desperdicio en audiencias que no convierten.",
  },
  {
    stat: "70%",
    label: "de presupuestos LATAM mal alineados con el objetivo real",
    detail:
      "Concentrados en awareness cuando el objetivo declarado es generación de leads. Resultado: más clics, mismo pipeline.",
  },
];

const differentiators = [
  {
    title: "No trabajamos con promedios de industria",
    body: "Cada cuenta tiene su propia historia, su propio tracking, su propia estructura. Un benchmark de industria puede orientar, pero el diagnóstico real viene de revisar tu cuenta específica — en vivo, juntos.",
  },
  {
    title: "El diagnóstico no es una presentación",
    body: "Es una sesión de 60 minutos donde revisamos tu cuenta en pantalla compartida. Los hallazgos son concretos, priorizados por impacto, con el contexto suficiente para entender por qué importa cada uno.",
  },
  {
    title: "Mostramos el problema Y la causa",
    body: 'No solo "tu CPL es alto". Sino "tu CPL es alto porque el 60% de tu presupuesto está en una campaña de Smart Shopping que compite con tus campañas de Search y estás pagando por las mismas palabras dos veces".',
  },
  {
    title: "Las conclusiones son tuyas aunque no contrates",
    body: "Sin condiciones. Porque confiamos en que, si el diagnóstico es bueno, la conversación siguiente tiene sentido.",
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
              generan clientes reales. Todos los números conectados al CRM, no a la plataforma de ads.
            </p>
          </div>
        </SectionWrapper>

        {/* Context note */}
        <SectionWrapper className="py-12">
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
              llega a tu equipo de ventas y cierra.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              En todos los diagnósticos, el primer trabajo es conectar esos dos números. En algunos
              casos, la diferencia es del 200–300%. No porque las campañas estuvieran mal diseñadas,
              sino porque nadie había medido bien desde el inicio. Eso es lo que cambia primero. Los
              resultados vienen después.
            </p>
          </div>
        </SectionWrapper>

        {/* Cases placeholder */}
        <SectionWrapper className="py-16">
          <div
            className="rounded-2xl p-8 md:p-12 text-center"
            style={{ border: "1px solid var(--bg-border)" }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "var(--bg-surface)" }}
            >
              <svg className="w-8 h-8" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              Estamos documentando los primeros casos.
            </h2>
            <p className="leading-relaxed mb-2 max-w-lg mx-auto" style={{ color: "var(--text-secondary)" }}>
              JT Ads está en fase de lanzamiento. Los primeros clientes están en proceso de onboarding
              y los primeros diagnósticos están siendo implementados.
            </p>
            <p className="text-sm max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
              En lugar de inventar casos o usar testimonios genéricos, preferimos ser directos: los
              resultados reales toman tiempo en documentarse bien.
            </p>
          </div>
        </SectionWrapper>

        {/* Industry stats */}
        <SectionWrapper className="py-16" style={{ background: "var(--bg-surface)" }}>
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

        {/* Differentiators */}
        <SectionWrapper>
          <h2 className="text-2xl md:text-3xl font-bold mb-10" style={{ color: "var(--text-primary)" }}>
            Lo que hace diferente un diagnóstico de JT Ads.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="rounded-xl p-6"
                style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
              >
                <h3 className="font-semibold mb-3" style={{ color: "var(--text-primary)" }}>{d.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{d.body}</p>
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
