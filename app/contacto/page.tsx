import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — JT Ads | Paid Media para Empresas en LATAM",
  description:
    "¿Tienes dudas sobre tu estrategia de ads? Escríbenos. Respondemos en menos de 4 horas hábiles. Sin llamadas de ventas, sin procesos complicados.",
  alternates: { canonical: "https://ads.juantabares.co/contacto" },
};

const expectations = [
  {
    title: "Respondemos todos los mensajes.",
    body: "No hay un asistente automático ni un proceso de filtro complicado. Si escribes, alguien real lee y responde en menos de 4 horas hábiles.",
  },
  {
    title: "Si tu perfil no es el adecuado, te lo decimos.",
    body: "JT Ads trabaja con un perfil específico de empresa. Si no encajas, te lo comunicamos directamente y, si podemos, te orientamos hacia una opción que sí tenga sentido para tu situación.",
  },
  {
    title: "No hay llamada de ventas previa a la sesión.",
    body: "Si reservas la sesión de diagnóstico, el primer contacto es la propia sesión — no una presentación de servicios. La llamada para revisar tu cuenta es la primera conversación real.",
  },
];

const icpTable = [
  { criterio: "Estructura", detalle: "Equipo de marketing interno" },
  { criterio: "Ad spend mensual", detalle: "$5,000 – $50,000 USD" },
  { criterio: "Estructura interna", detalle: "Director de Marketing, CMO o VP Growth" },
  { criterio: "Mercados", detalle: "LATAM Tier 1 + USA" },
  { criterio: "Plataformas", detalle: "Google Ads, Meta Ads, LinkedIn Ads" },
];

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <SectionWrapper className="pt-20 pb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6" style={{ color: "var(--text-primary)" }}>
              Hablemos de tus ads.
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Respondemos en menos de 4 horas hábiles. Si tu perfil no encaja con lo que hacemos, te
              lo decimos con honestidad — y te orientamos hacia donde sí tiene sentido.
            </p>
          </div>
        </SectionWrapper>

        {/* Two options */}
        <SectionWrapper className="py-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-8" style={{ color: "var(--text-muted)" }}>
            Hay dos formas de empezar. Elige la que tenga más sentido para ti ahora.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Option A — Diagnóstico (prominent) */}
            <div
              className="rounded-2xl p-8"
              style={{
                background: "var(--accent-faint)",
                border: "2px solid rgba(0,102,255,0.25)",
              }}
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-5"
                style={{ background: "var(--accent-faint)", color: "var(--accent)" }}
              >
                ★ Recomendado
              </div>

              <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                Quiero una sesión de diagnóstico en vivo.
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                Revisamos tu cuenta de Google Ads, Meta o LinkedIn juntos en pantalla compartida.
                60 minutos. Diagnóstico de 20+ puntos en tiempo real. Sin costo, sin compromiso.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Tienes una cuenta activa con al menos $2,000/mes en ads",
                  "Quieres entender qué está fallando antes de tomar decisiones",
                  "Estás evaluando si cambiar de agencia o contratar una nueva",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--green)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{item}</span>
                  </div>
                ))}
              </div>

              <CTAButton href="/diagnostico-en-vivo" size="lg" className="w-full justify-center">
                Ir a la sesión de diagnóstico →
              </CTAButton>

              <p className="mt-3 text-xs text-center" style={{ color: "var(--text-muted)" }}>
                Sesión disponible en las próximas 48 horas hábiles
              </p>
            </div>

            {/* Option B — Simple contact */}
            <div
              className="rounded-2xl p-8"
              style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
            >
              <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                Solo quiero consultar algo puntual.
              </h2>
              <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                ¿Tienes una pregunta específica sobre tracking, estructura de campañas, plataformas
                o cualquier cosa relacionada con paid media? Escríbenos. No hay formulario largo.
              </p>
              <ContactForm />
            </div>
          </div>
        </SectionWrapper>

        {/* Direct contact */}
        <SectionWrapper className="py-12" style={{ background: "var(--bg-surface)" }}>
          <h2 className="text-2xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>
            Si prefieres el contacto directo:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div
              className="rounded-xl p-6"
              style={{ border: "1px solid var(--bg-border)", background: "var(--bg-base)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Email</p>
              <a
                href="mailto:hola@juantabares.co"
                className="font-medium hover:underline"
                style={{ color: "var(--accent)" }}
              >
                hola@juantabares.co
              </a>
              <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
                Respondemos en menos de 4 horas hábiles
              </p>
            </div>

            <div
              className="rounded-xl p-6"
              style={{ border: "1px solid var(--bg-border)", background: "var(--bg-base)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/juan-tabares-b1272b58/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
                style={{ color: "var(--accent)" }}
              >
                linkedin.com/in/juan-tabares
              </a>
              <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
                También puedes escribir un DM directo
              </p>
            </div>

            <div
              className="rounded-xl p-6"
              style={{ border: "1px solid var(--bg-border)", background: "var(--bg-base)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>Ubicación</p>
              <p className="font-medium" style={{ color: "var(--text-primary)" }}>LATAM + USA</p>
              <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
                Trabajo remoto — México, Colombia, Chile, Argentina y Estados Unidos
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Expectations */}
        <SectionWrapper className="py-16">
          <h2 className="text-2xl font-bold mb-10" style={{ color: "var(--text-primary)" }}>
            Lo que puedes esperar cuando escribes.
          </h2>

          <div className="flex flex-col gap-6 max-w-2xl">
            {expectations.map((e) => (
              <div key={e.title} className="flex gap-5">
                <div
                  className="w-2 flex-shrink-0 rounded-full mt-1"
                  style={{ background: "var(--accent)", minHeight: "1.5rem" }}
                />
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>{e.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{e.body}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* ICP table */}
        <SectionWrapper className="py-16">
          <div
            className="rounded-2xl p-8 md:p-10"
            style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
          >
            <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
              Perfil de empresa con el que trabajamos:
            </h2>

            <div className="overflow-x-auto rounded-xl mb-8" style={{ border: "1px solid var(--bg-border)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "var(--bg-base)", borderBottom: "1px solid var(--bg-border)" }}>
                    <th className="text-left px-5 py-3 font-medium" style={{ color: "var(--text-muted)" }}>Criterio</th>
                    <th className="text-left px-5 py-3 font-medium" style={{ color: "var(--text-muted)" }}>Detalle</th>
                  </tr>
                </thead>
                <tbody>
                  {icpTable.map((row, i) => (
                    <tr
                      key={row.criterio}
                      style={{
                        borderBottom: i < icpTable.length - 1 ? "1px solid var(--bg-border)" : "none",
                      }}
                    >
                      <td className="px-5 py-3 font-medium" style={{ color: "var(--text-primary)" }}>{row.criterio}</td>
                      <td className="px-5 py-3" style={{ color: "var(--text-secondary)" }}>{row.detalle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <blockquote
              className="text-sm leading-relaxed italic"
              style={{ color: "var(--text-muted)", borderLeft: "2px solid var(--accent)", paddingLeft: "1rem" }}
            >
              "Si no cumples exactamente estos criterios, escríbenos igual. Hay situaciones en las que
              tiene sentido trabajar fuera del perfil estándar. Prefiero que me cuentes tu caso y yo
              te digo si puedo ayudarte — a que no escribas y pierdas la oportunidad de saberlo."
              <br />
              <strong style={{ color: "var(--text-secondary)", fontStyle: "normal" }}>— Juan Tabares</strong>
            </blockquote>
          </div>
        </SectionWrapper>

        {/* Secondary CTA */}
        <SectionWrapper className="pb-24">
          <div
            className="rounded-2xl p-8 md:p-12 text-center"
            style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)" }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              ¿Estás listo para el diagnóstico completo?
            </h2>
            <CTAButton href="/diagnostico-en-vivo" size="lg">
              Reservar Sesión de Diagnóstico — Sin Costo →
            </CTAButton>
            <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
              20+ puntos de análisis. 60 minutos en vivo. Sin compromiso.
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
