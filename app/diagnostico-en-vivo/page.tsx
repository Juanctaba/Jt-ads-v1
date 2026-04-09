import type { Metadata } from "next";
import NavbarMinimal from "@/components/layout/NavbarMinimal";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/ui/SectionWrapper";
import DiagnosticoForm from "@/components/forms/DiagnosticoForm";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Sesión de Diagnóstico en Vivo — JT Ads",
  description:
    "Revisamos tu cuenta de Google Ads, Meta o LinkedIn contigo en tiempo real. 60 minutos de diagnóstico con un equipo senior. Sin costo, sin compromiso.",
  alternates: { canonical: "https://ads.juantabares.co/diagnostico-en-vivo" },
};

const checkpoints = [
  {
    area: "Tracking y Medición",
    items: [
      "Configuración de Google Tag Manager — disparos duplicados o faltantes",
      "Conversiones reales vs. conversiones de plataforma — ¿coincide con tu CRM?",
      "Server-side tracking — pérdida de data por bloqueadores o iOS 17+",
      "Modelo de atribución vs. ciclo de ventas real",
      "GA4 configurado y conectado con parámetros correctos",
    ],
  },
  {
    area: "Estructura de Campañas",
    items: [
      "Segmentación por etapa del funnel (prospecting / consideración / conversión)",
      "Distribución de presupuesto vs. objetivo de negocio",
      "Overlap de audiencias — campañas que compiten entre sí",
      "Estructura de Ad Groups / Ad Sets para aprendizaje del algoritmo",
      "Negativos y exclusiones activas",
    ],
  },
  {
    area: "Creativos y Mensajes",
    items: [
      "Message match ad → landing — ¿el visitante ve lo que el anuncio prometió?",
      "CTR por formato y plataforma",
      "Fatiga creativa — frecuencia por segmento",
      "Variedad de formatos (video, imagen, carrusel, texto)",
    ],
  },
  {
    area: "Pujas y Automatización",
    items: [
      "Estrategia de puja vs. objetivo de negocio",
      "Volumen suficiente para Smart Bidding (30–50 conv/mes mínimo)",
      "Targets de ROAS / CPA realistas para tu mercado y margen",
    ],
  },
  {
    area: "Resultados y Tendencias",
    items: [
      "CPL real vs. CPL reportado — ¿cuánto cuesta realmente un lead calificado?",
      "Calidad de leads — ¿qué % llega a propuesta o cierre?",
      "Tendencia de performance mes a mes",
    ],
  },
];

const faqItems = [
  {
    q: "¿Es realmente gratis? ¿Qué hay detrás?",
    a: "Sí, es completamente gratis. Revisamos tu cuenta contigo en una sesión en vivo y sin costo. El modelo es directo: si el diagnóstico tiene sentido y quieres que implementemos los cambios juntos, conversamos sobre cómo trabajar. Si prefieres ejecutarlo internamente, las conclusiones son tuyas. No hay truco.",
  },
  {
    q: "¿Necesitan acceso a mi cuenta antes de la sesión?",
    a: "No necesariamente. La revisión ocurre en tiempo real durante la sesión. Compartimos pantalla y revisamos juntos. Si prefieres darnos acceso de solo lectura antes de la llamada para prepararnos mejor, es bienvenido — pero no es un requisito.",
  },
  {
    q: "¿En cuánto tiempo me contactan para agendar?",
    a: "En menos de 4 horas hábiles desde que recibes tu solicitud. Confirmamos disponibilidad y agendamos la sesión para las próximas 48 horas hábiles.",
  },
  {
    q: "¿Trabajan con cualquier industria o tamaño de empresa?",
    a: "Trabajamos con empresas de 50 a 500 empleados con un ad spend mínimo de $5,000/mes. Por debajo de ese presupuesto, el impacto que podemos generar no justifica nuestros honorarios ni tu inversión de tiempo. Si no cumples ese perfil, te lo decimos con claridad y te orientamos hacia donde sí tiene sentido.",
  },
];

export default function DiagnosticoPage() {
  return (
    <>
      <NavbarMinimal />
      <main className="flex-1">
        {/* Hero + Form above fold */}
        <SectionWrapper className="pt-16 pb-0" as="div">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[var(--accent-faint)] border border-[var(--accent)]/20 rounded-full px-4 py-1.5 text-sm text-[var(--accent)] font-medium mb-6">
                Sin costo · Sin compromiso
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-6">
                Revisamos tu cuenta juntos.{" "}
                <span className="text-[var(--accent)]">En tiempo real.</span>
              </h1>
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
                Una sesión de diagnóstico en vivo de 60 minutos. Compartimos pantalla, analizamos tu cuenta
                y te decimos exactamente qué está fallando — y por qué.
              </p>

              <div className="flex flex-col gap-4 mb-10">
                {[
                  "20+ puntos de revisión: tracking, estructura, audiencias, creativos y pujas",
                  "No hay reporte previo — el diagnóstico ocurre durante la sesión",
                  "Equipo senior con experiencia gestionando $500k+/mes",
                  "Sesión disponible en las próximas 48 horas hábiles",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[var(--green)] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* Bio teaser */}
              <div className="flex items-center gap-4 p-4 bg-[var(--bg-surface)] border border-[var(--bg-border)] rounded-xl">
                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 flex items-center justify-center flex-shrink-0 text-[var(--accent-light)] font-bold text-lg">
                  JT
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-primary)]">Juan Tabares</p>
                  <p className="text-xs text-[var(--text-muted)]">
                    Paid media specialist · $500k+/mes gestionados · Google Ads, Meta, LinkedIn
                  </p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div id="diagnostico-form" className="lg:sticky lg:top-24">
              <DiagnosticoForm />
            </div>
          </div>
        </SectionWrapper>

        {/* What we review */}
        <SectionWrapper>
          <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
            Una revisión real. No un checklist genérico.
          </h2>
          <p className="text-[var(--text-secondary)] mb-10 max-w-2xl leading-relaxed">
            En 60 minutos analizamos más de 20 puntos críticos agrupados en cinco áreas. Compartimos
            pantalla y revisamos tu cuenta — no hablamos en abstracto.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {checkpoints.map((group) => (
              <div
                key={group.area}
                className="bg-[var(--bg-surface)] border border-[var(--bg-border)] rounded-xl p-6"
              >
                <h3 className="font-semibold mb-4 text-xs uppercase tracking-wider text-[var(--accent)]">
                  {group.area}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg
                        className="w-4 h-4 text-[var(--green)] mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* About Juan */}
        <SectionWrapper className="py-16">
          <div className="bg-[var(--bg-surface)] border border-[var(--bg-border)] rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
                Quién revisa tu cuenta
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-6">
                Juan Tabares
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Especialista en paid media con experiencia gestionando cuentas de $5,000 a $500,000/mes en
                Google Ads, Meta Ads y LinkedIn Ads. Ha trabajado con empresas de SaaS, servicios B2B y
                e-commerce en México, Colombia, Chile y Estados Unidos.
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                JT Ads nació de una premisa simple: el cliente merece ver los números reales, no los que
                hacen bonito el reporte. La sesión de diagnóstico en vivo es la forma más directa de
                demostrarlo.
              </p>
              <a
                href="https://www.linkedin.com/in/juan-tabares-b1272b58/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
              >
                Ver perfil en LinkedIn →
              </a>
            </div>
          </div>
        </SectionWrapper>

        {/* FAQ */}
        <SectionWrapper className="py-16">
          <div className="max-w-2xl">
            <FaqSection items={faqItems} title="Preguntas frecuentes" />
          </div>
        </SectionWrapper>

        {/* Repeat CTA */}
        <SectionWrapper className="pb-24">
          <div className="bg-[var(--accent)]/5 border border-[var(--accent)]/20 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
              ¿Ya revisaste qué analizamos?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
              Reserva tu sesión. Te contactamos en menos de 4 horas hábiles.
            </p>
            <a
              href="#diagnostico-form"
              className="inline-flex items-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold px-8 py-4 rounded-[8px] transition-colors text-base cursor-pointer"
            >
              Reservar mi Sesión de Diagnóstico ↑
            </a>
            <p className="mt-4 text-xs text-[var(--text-muted)]">
              Sin tarjeta de crédito. Sin contrato. Sin presentación de ventas.
            </p>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
