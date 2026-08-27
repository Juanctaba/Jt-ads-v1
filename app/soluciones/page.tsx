import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "Automatización, IA y CRM para Empresas en LATAM | JT Ads Soluciones",
  description:
    "Implementamos HubSpot, GoHighLevel y agentes conversacionales con IA para automatizar tu marketing y operaciones. Plataforma agnóstica — trabajamos con lo que ya tienes o te ayudamos a elegir.",
  alternates: {
    canonical: "https://jtads.com/soluciones",
    languages: { es: "https://jtads.com/soluciones" },
  },
  openGraph: {
    title: "Automatización, IA y CRM para Empresas en LATAM | JT Ads",
    description:
      "Automatizamos marketing y operaciones con flujos, agentes conversacionales y CRM conectado. HubSpot, GoHighLevel, Omnix y cualquier stack.",
    images: ["/og-image.png"],
    url: "https://jtads.com/soluciones",
  },
};

const capabilities = [
  {
    title: "Automatización de marketing y operaciones",
    body: "Diseñamos y construimos los flujos que eliminan trabajo manual de tu equipo: nurturing por comportamiento, asignación automática de leads, movimiento de pipeline, notificaciones y handoffs entre marketing y ventas.",
    deliverables: [
      "Mapeo del proceso actual y detección de fricciones",
      "Flujos automáticos multicanal (email, SMS, WhatsApp)",
      "Lead scoring y routing según reglas de negocio",
      "Sincronización bidireccional entre herramientas",
    ],
  },
  {
    title: "Agentes conversacionales con IA (texto y voz)",
    body: "Implementamos agentes que atienden, califican y escalan leads en tiempo real — con el tono y el conocimiento específico de tu negocio. No son chatbots de árbol de decisión: entienden contexto y resuelven.",
    deliverables: [
      "Agentes de texto en WhatsApp, web, Instagram y email",
      "Agentes de voz para atención y calificación telefónica",
      "Entrenamiento con tu base de conocimiento real",
      "Escalamiento inteligente a humano en el momento correcto",
    ],
  },
  {
    title: "Arquitecturas multiagente",
    body: "Cuando un solo agente no alcanza, diseñamos sistemas donde varios agentes especializados colaboran: uno califica, otro agenda, otro hace seguimiento, otro reporta. Cada uno con su rol y sus límites bien definidos.",
    deliverables: [
      "Diseño de la arquitectura y responsabilidades por agente",
      "Orquestación y traspaso de contexto entre agentes",
      "Guardrails y validaciones para evitar errores costosos",
      "Monitoreo y mejora continua con datos reales",
    ],
  },
  {
    title: "Integración de stack completo",
    body: "Conectamos CRM, plataformas de ads, herramientas de ventas, facturación y datos en un solo ecosistema. Sin exportaciones manuales, sin silos, sin información que se pierde entre sistemas.",
    deliverables: [
      "Integraciones vía API, webhooks o middleware",
      "Server-side tracking conectado al CRM",
      "Conversiones offline devueltas a Google y Meta",
      "Reporting unificado de punta a punta",
    ],
  },
];

const faqs = [
  {
    q: "¿Trabajan solo con HubSpot y GoHighLevel?",
    a: "No. Trabajamos con la plataforma que tenga tu negocio o con la que mejor se ajuste a tu operación. HubSpot, GoHighLevel, Omnix, Make, Zapier, n8n, Salesforce — lo que sea. Nuestro valor está en saber diseñar la automatización y los flujos, no en vender una herramienta específica. Las plataformas cambian; el criterio para implementarlas bien es lo que perdura.",
  },
  {
    q: "Ya tenemos un CRM implementado. ¿Sirve trabajar con ustedes?",
    a: "Sí, y suele ser el mejor escenario. La mayoría de empresas usan menos del 30% de la capacidad de su CRM. Auditamos tu implementación actual, identificamos qué está mal configurado o subutilizado, y construimos los flujos y agentes encima de lo que ya tienes. No hay que migrar ni empezar de cero.",
  },
  {
    q: "¿Qué son exactamente los agentes conversacionales con IA?",
    a: "Son sistemas que atienden conversaciones reales con tus leads y clientes en texto o voz — respondiendo preguntas, calificando según tus criterios, agendando reuniones y escalando a un humano cuando corresponde. A diferencia de un chatbot tradicional, entienden contexto, manejan conversaciones no lineales y se entrenan con el conocimiento específico de tu negocio.",
  },
  {
    q: "¿Cuánto tarda una implementación?",
    a: "Depende del alcance. Una automatización puntual sobre un stack existente puede estar operativa en 2 a 4 semanas. Una implementación completa de CRM con flujos, agentes IA e integraciones toma entre 6 y 12 semanas. En la primera sesión te damos un estimado concreto según tu caso, no un rango genérico.",
  },
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jtads.com" },
    { "@type": "ListItem", position: 2, name: "Soluciones", item: "https://jtads.com/soluciones" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatización, IA y CRM para empresas",
  provider: { "@type": "Organization", name: "JT Ads", url: "https://jtads.com" },
  areaServed: ["México", "Colombia", "Chile", "Argentina", "Perú", "USA"],
  description:
    "Implementación de automatización de marketing, agentes conversacionales con IA y CRM para empresas en LATAM. Plataforma agnóstica: HubSpot, GoHighLevel, Omnix y cualquier stack.",
  url: "https://jtads.com/soluciones",
  inLanguage: "es",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "es",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SolucionesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="bg-[#0a0a0a] pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[var(--accent)]/20 text-[#9bb4fe] text-xs font-semibold tracking-widest uppercase">
              Automatización & IA
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Automatización e IA para que tu marketing y operaciones{" "}
              <span className="text-[#9bb4fe]">trabajen solos.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Implementamos los sistemas que hacen escalable tu operación: flujos automáticos,
              agentes conversacionales con IA y CRM conectado a todos tus canales. Trabajamos con la
              plataforma que ya tienes — o te ayudamos a elegir la correcta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/diagnostico-en-vivo" size="lg">
                Agendar diagnóstico — Gratis
              </CTAButton>
              <CTAButton href="#capacidades" variant="secondary" size="lg">
                Ver qué implementamos ↓
              </CTAButton>
            </div>
          </div>
        </section>

        {/* ── Posicionamiento ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-6">
              No implementamos plataformas. Implementamos resultados.
            </h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
              Cualquiera puede instalar un CRM. Lo difícil es diseñar el proceso que hay detrás:
              qué se automatiza, qué se queda con el equipo, cómo califica un lead, cuándo escala,
              qué datos se sincronizan y hacia dónde.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              Ese criterio es lo que traemos. Las plataformas van y vienen — el conocimiento de
              automatización, flujos e IA aplicada al negocio es lo que hace la diferencia entre
              una herramienta que nadie usa y una operación que escala sola.
            </p>
          </div>
        </section>

        {/* ── Capacidades ── */}
        <section id="capacidades" className="py-20 px-6 bg-[#fcf9f8]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">
                Qué implementamos
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight">
                Cuatro capacidades. Un solo objetivo:<br className="hidden md:inline" /> que tu operación no dependa de trabajo manual.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{cap.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-6">{cap.body}</p>
                  <div className="pt-5 border-t border-gray-100 space-y-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#727687]">
                      Qué entregamos
                    </p>
                    {cap.deliverables.map((d) => (
                      <div key={d} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Plataforma agnóstico ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4">
                ¿Ya tienes una plataforma? ¿O partes de cero?
              </h2>
              <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                Ambos escenarios funcionan. Lo que cambia es por dónde empezamos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-[#fcf9f8] rounded-2xl p-8 border border-gray-100">
                <div className="w-8 h-0.5 bg-[var(--accent)] mb-5" />
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                  Ya tienes stack implementado
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-5">
                  La mayoría de empresas usan menos del 30% de lo que pagaron. Auditamos tu
                  configuración actual, corregimos lo que está mal armado y construimos los flujos
                  y agentes encima. Sin migración, sin empezar de cero.
                </p>
                <ul className="space-y-3">
                  {[
                    "Auditoría técnica de la implementación actual",
                    "Corrección de flujos rotos o mal configurados",
                    "Capa de automatización e IA sobre lo existente",
                    "Capacitación al equipo para que lo use de verdad",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#fcf9f8] rounded-2xl p-8 border border-gray-100">
                <div className="w-8 h-0.5 bg-[var(--accent)] mb-5" />
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                  Necesitas elegir una plataforma
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-5">
                  Te ayudamos a decidir según tu operación actual y tu proyección a 12–24 meses.
                  Sin sesgos comerciales: recomendamos lo que tu negocio necesita, no lo que es más
                  cómodo de implementar.
                </p>
                <ul className="space-y-3">
                  {[
                    "Evaluación de necesidades reales vs. proyección",
                    "Comparativo honesto de opciones con costos totales",
                    "Implementación completa desde cero",
                    "Onboarding del equipo y documentación de procesos",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Plataformas */}
            <div className="bg-[#0a0a0a] rounded-2xl p-8 md:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9bb4fe] mb-5">
                Plataformas con las que trabajamos
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["HubSpot", "GoHighLevel", "Omnix", "Salesforce", "Make", "Zapier", "n8n", "ActiveCampaign"].map((p) => (
                  <span
                    key={p}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300"
                  >
                    {p}
                  </span>
                ))}
              </div>
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-white font-semibold mb-1">
                    Omnix: nuestra plataforma propia de CRM con IA
                  </p>
                  <p className="text-sm text-gray-400 max-w-lg leading-relaxed">
                    CRM, automatización, WhatsApp API, agentes con IA y bandeja unificada en un solo
                    lugar. Más de 2.400 negocios activos en LATAM. Ideal si buscas arrancar rápido
                    sin armar un stack de cinco herramientas.
                  </p>
                </div>
                <a
                  href="https://omnixapp.one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#9bb4fe] hover:underline whitespace-nowrap"
                >
                  Conocer Omnix →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Para quién ── */}
        <section className="py-20 px-6 bg-[#fcf9f8]">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">
                Esto tiene sentido si tu empresa:
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Tiene un volumen de leads que el equipo ya no alcanza a atender manualmente",
                  "Pierde oportunidades por tiempos de respuesta lentos",
                  "Usa varias herramientas que no hablan entre sí",
                  "Tiene procesos de venta claros pero ejecutados a mano",
                  "Quiere escalar sin duplicar el tamaño del equipo",
                  "Ya invierte en paid media pero el proceso posterior es débil",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-10 text-center">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group bg-[#fcf9f8] rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                    <span className="font-semibold text-[var(--text-primary)]">{f.q}</span>
                    <svg
                      className="w-5 h-5 text-[var(--accent)] shrink-0 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-5 text-sm leading-relaxed text-[var(--text-secondary)]">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Lee también ── */}
        <section className="py-16 px-6 bg-[#fcf9f8] border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-6">
              También te puede interesar
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/agencia-google-ads-latam", label: "Agencia de Google Ads en LATAM" },
                { href: "/agencia-meta-ads-latam", label: "Agencia de Meta Ads en LATAM" },
                {
                  href: "/blog/hiper-automatizacion-campanas-mas-alla-performance-max",
                  label: "Más allá de Performance Max: la próxima frontera de la autonomía",
                },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="bg-white rounded-xl p-5 border border-gray-100 hover:border-[var(--accent)]/30 hover:shadow-sm transition-all"
                >
                  <p className="text-sm font-semibold text-[var(--text-primary)] leading-snug">
                    {l.label} →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="relative overflow-hidden py-24 px-6 bg-[#0a0a0a]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--accent)]/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">
                Hablemos de tu operación actual.
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                En la primera sesión revisamos tu proceso, tu stack y dónde se está perdiendo
                tiempo o dinero. Te decimos qué automatizar primero — con o sin nosotros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/diagnostico-en-vivo" size="lg" className="flex-1 justify-center">
                  Agendar diagnóstico gratuito
                </CTAButton>
                <CTAButton href="/contacto" variant="secondary" size="lg">
                  Tengo preguntas
                </CTAButton>
              </div>
              <p className="mt-5 text-sm text-[var(--text-muted)] text-center">
                Respuesta en &lt;4 horas hábiles · Sin contratos · Sin presión
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
