import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import CredibilityBar from "@/components/sections/CredibilityBar";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "JT Ads — Paid Media para Empresas en LATAM",
  description:
    "Diagnóstico en vivo de tu cuenta de Google Ads, Meta y LinkedIn. Equipo senior con experiencia gestionando $500k+/mes. Sin contratos largos.",
  alternates: { canonical: "https://ads.juantabares.co" },
  openGraph: {
    title: "JT Ads — Paid Media para Empresas en LATAM",
    description: "Diagnóstico en vivo de tu cuenta de ads. Equipo senior, $500k+/mes gestionados.",
    images: ["/og-image.png"],
  },
};

const problems = [
  {
    color: "red" as const,
    title: "Tracking mal configurado",
    body: "Están midiendo conversiones que no son ventas reales. El dashboard dice que va bien. El equipo de ventas dice que los leads son pésimos. Alguien está mintiendo — y casi siempre es el píxel.",
  },
  {
    color: "red" as const,
    title: "Estructura desalineada con el funnel",
    body: "Las campañas están armadas para el reporte de la agencia, no para tu proceso de ventas. Capturan clics, no clientes.",
  },
  {
    color: "red" as const,
    title: "Agencia que optimiza para renovar contrato",
    body: 'Los reportes se ven bien. El CPL "baja". Pero las ventas no suben. Hay una desconexión entre lo que se reporta y lo que realmente pasa en tu pipeline.',
  },
];

const valueProp = [
  {
    title: "Equipo senior desde el día 1",
    body: "Asignamos un account manager senior dedicado. Nuestro equipo ha gestionado presupuestos de más de $500,000 USD/mes en Google Ads, Meta y LinkedIn — no aprendemos con tu cuenta.",
  },
  {
    title: "Tracking honesto desde el día 1",
    body: "Implementamos server-side tracking antes de gastar un peso más. Mides lo que realmente pasa: leads que llegan a ventas, oportunidades reales, cierres. No conversiones de plataforma infladas.",
  },
  {
    title: "Sin contratos de 12 meses",
    body: "Confiamos en los resultados para retener clientes. Si en los primeros 90 días no ves mejoras concretas y medibles, no tiene sentido que sigamos. Esa confianza va en las dos direcciones.",
  },
];

const steps = [
  {
    n: "01",
    title: "Reservas la sesión",
    time: "2 minutos",
    body: "Completas un formulario breve con tu plataforma, presupuesto actual y el principal problema que estás viendo. Te contactamos en menos de 4 horas hábiles.",
  },
  {
    n: "02",
    title: "Sesión de diagnóstico en vivo",
    time: "60 minutos",
    body: "Revisamos tu cuenta juntos en pantalla compartida. 20+ puntos: tracking, estructura, audiencias, creativos y pujas. El diagnóstico ocurre en tiempo real — no hay reporte previo.",
  },
  {
    n: "03",
    title: "Te llevás las conclusiones",
    time: "Al cerrar la sesión",
    body: "Los hallazgos y prioridades son tuyos. Claridad sobre qué cambiar, en qué orden, y por qué cada punto impacta tu negocio.",
  },
  {
    n: "04",
    title: "Decides si seguimos juntos",
    time: "Sin presión",
    body: "Si quieres implementar los cambios con nosotros, conversamos. Si prefieres ejecutarlo internamente, perfecto. La sesión no tiene costo ni crea ninguna obligación.",
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <SectionWrapper className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-8"
              style={{
                background: "rgba(37,99,235,0.1)",
                border: "1px solid rgba(37,99,235,0.2)",
                color: "var(--accent-light)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{ background: "var(--green)" }}
              />
              Sesiones disponibles esta semana
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Paid media para equipos de marketing{" "}
              <span style={{ color: "var(--accent-light)" }}>que ya saben lo que hacen.</span>
            </h1>

            <p className="text-xl leading-relaxed mb-10 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Diagnóstico en vivo de tu cuenta actual. Te decimos exactamente qué cambiar para bajar
              tu CPL y mejorar la calidad de tus leads. Sin rodeos, sin reportes bonitos que esconden
              la verdad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/diagnostico-en-vivo" size="lg">
                Reservar Sesión de Diagnóstico — Sin Costo
              </CTAButton>
              <CTAButton href="#como-funciona" variant="secondary" size="lg">
                Ver cómo funciona ↓
              </CTAButton>
            </div>
          </div>
        </SectionWrapper>

        {/* Credibility bar */}
        <CredibilityBar />

        {/* Problem section */}
        <SectionWrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
              Si invierten en ads pero los números no cuadran,
              <br className="hidden md:inline" />
              {" "}el problema casi siempre es uno de estos tres:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div
                key={p.title}
                className="rounded-xl p-6"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--bg-border)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-5"
                  style={{ background: "rgba(239,68,68,0.1)", color: "var(--red)" }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-3" style={{ color: "var(--text-primary)" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Value Prop */}
        <SectionWrapper className="py-20" style={{ background: "var(--bg-surface)" }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
              Así trabajamos diferente.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {valueProp.map((v) => (
              <div key={v.title} className="flex flex-col gap-4">
                <div className="w-8 h-0.5" style={{ background: "var(--accent)" }} />
                <h3 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{v.body}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* How it works */}
        <SectionWrapper id="como-funciona">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
              El proceso es simple. La ejecución es lo que cambia.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-xl p-6 flex gap-5"
                style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
              >
                <span className="text-3xl font-bold flex-shrink-0 font-mono" style={{ color: "var(--bg-border)" }}>
                  {s.n}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold" style={{ color: "var(--text-primary)" }}>{s.title}</h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ color: "var(--text-muted)", background: "var(--bg-border)" }}
                    >
                      {s.time}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* ICP */}
        <SectionWrapper className="py-16">
          <div
            className="rounded-2xl p-8 md:p-12"
            style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>
              JT Ads trabaja con un perfil específico.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                "Empresas de 50 a 500 empleados con equipo de marketing interno",
                "Ad spend mensual entre $5,000 y $50,000 USD en plataformas",
                "Equipos con Director de Marketing, CMO o VP de Growth",
                "Mercados: LATAM Tier 1 (México, Colombia, Chile, Argentina) + USA Hispanic",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--green)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item}</span>
                </div>
              ))}
            </div>

            <p
              className="text-sm italic pt-6"
              style={{ color: "var(--text-muted)", borderTop: "1px solid var(--bg-border)" }}
            >
              "Si no cumples exactamente este perfil, cuéntanos igual. Si podemos ayudarte, lo hacemos.
              Si no, te orientamos hacia donde sí tiene sentido — sin costo."
            </p>
          </div>
        </SectionWrapper>

        {/* Social proof placeholder */}
        <SectionWrapper className="py-12">
          <div
            className="rounded-xl p-8 text-center max-w-2xl mx-auto"
            style={{ border: "1px solid var(--bg-border)" }}
          >
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              "Estamos documentando los primeros resultados con clientes. Mientras tanto, el proceso
              es el producto: transparencia total desde el primer diagnóstico en vivo."
            </p>
          </div>
        </SectionWrapper>

        {/* Final CTA */}
        <SectionWrapper className="pb-24">
          <FinalCTA
            headline="La primera sesión es gratis. Sin compromiso."
            subtext="Te contactamos en menos de 4 horas hábiles. Si tu perfil encaja, agendamos la sesión. Si no encaja, te lo decimos con honestidad."
          />
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
