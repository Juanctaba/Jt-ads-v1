import type { Metadata } from "next";
import GhlInlineForm from "@/components/forms/GhlInlineForm";

// Formulario propio del embudo de operación (no el de ads, que pide datos de
// pauta). Servido desde el dominio white-label de Omnix. Si se retira, poner
// null: la sección cae a un CTA hacia /contacto.
const DIAG_OPERACION_FORM_ID: string | null = "azNkDnlHWDexRIOMjNnr";
const DIAG_OPERACION_FORM_NAME = "Formulario Diagnostico";
const DIAG_OPERACION_FORM_HOST = "api.omnixapp.one";

const URL = "https://jtads.com/diagnostico-operacion";

export const metadata: Metadata = {
  title: "Diagnóstico Gratuito de Automatización y CRM | JT Ads",
  description:
    "Mapeamos los procesos manuales de tu operación, dónde se pierde el lead entre canal y CRM y qué automatizar en las primeras cuatro semanas. Sin costo.",
  alternates: { canonical: URL },
  openGraph: {
    title: "Diagnóstico Gratuito de Automatización y CRM | JT Ads",
    description:
      "Mapeamos tus procesos manuales, dónde se pierde el lead entre canal y CRM y qué automatizar primero. Sin costo y sin llamada de ventas.",
    images: ["/og-image.png"],
    url: URL,
  },
  twitter: { card: "summary_large_image" },
};

const icon = (d: string) => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

const checklist = [
  {
    icon: icon("M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"),
    title: "Captación",
    items: ["Canales por los que entra el lead", "Formularios y mensajes sin registro", "Tiempo hasta el primer contacto"],
  },
  {
    icon: icon("M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375"),
    title: "CRM",
    items: ["Qué datos llegan y cuáles no", "Pipeline y etapas reales", "Duplicados y campos vacíos"],
  },
  {
    icon: icon("M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"),
    title: "Seguimiento",
    items: ["Quién llama y cuándo", "Leads que nadie retoma", "Nurturing manual o inexistente"],
  },
  {
    icon: icon("M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"),
    title: "Tareas operativas",
    items: ["Cotizaciones y propuestas", "Reportes que se arman a mano", "Asignación a vendedores"],
  },
  {
    icon: icon("M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"),
    title: "Integraciones",
    items: ["CRM ↔ plataformas de ads", "WhatsApp y bandeja de entrada", "Herramientas que no se hablan"],
  },
];

const faqItems = [
  {
    q: "¿Qué me llevo de la sesión?",
    a: "Un mapa de los procesos manuales de tu operación, los puntos donde el lead se pierde entre el canal y el CRM, y una lista priorizada de qué automatizar en las primeras cuatro semanas. Las conclusiones son tuyas, trabajes o no con nosotros.",
    open: true,
  },
  {
    q: "¿Necesito tener un CRM para pedir el diagnóstico?",
    a: "No. Si ya tienes uno, revisamos cómo lo está usando tu equipo. Si no tienes, el diagnóstico sirve justamente para definir qué necesitas antes de elegir plataforma: HubSpot, GoHighLevel u otra, según tu operación y tu proyección de crecimiento.",
  },
  {
    q: "¿Es una llamada de ventas disfrazada?",
    a: "No. La sesión se dedica a entender tu operación y a decirte qué automatizar primero. Si después quieres que lo implementemos, lo conversamos aparte; si prefieres hacerlo con tu equipo, el mapa te sirve igual.",
  },
  {
    q: "¿Cuánto tardan en contactarme?",
    a: "Respondemos en menos de 4 horas hábiles para agendar la sesión.",
  },
];

function OperacionIllustration() {
  const flow = [
    { label: "Formulario web → CRM", status: "ok", detail: "Sincronizado" },
    { label: "WhatsApp → CRM", status: "warn", detail: "Sin registro" },
    { label: "Instagram DM → CRM", status: "warn", detail: "Copia manual" },
    { label: "Asignación a vendedor", status: "scanning", detail: "Revisando…" },
    { label: "Seguimiento a 48 h", status: "scanning", detail: "Revisando…" },
  ];

  return (
    <div className="relative w-full">
      <div className="absolute -top-3 -right-3 z-10 px-3 py-1.5 bg-[#0050cb] text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-sm shadow-lg">
        Mapa de operación
      </div>
      <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#c2c6d8]/15">
        <div className="bg-[#e5e2e1] px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#dcd9d9]" />
            <div className="w-3 h-3 rounded-full bg-[#dcd9d9]" />
            <div className="w-3 h-3 rounded-full bg-[#dcd9d9]" />
          </div>
          <div className="flex-1 bg-white/60 rounded-md h-5 mx-2 flex items-center px-3">
            <span className="text-[9px] text-[#727687] font-mono">canal → CRM → seguimiento</span>
          </div>
        </div>
        <div className="p-5 bg-[#fcf9f8]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#0050cb] mb-0.5">
                Diagnóstico de operación
              </p>
              <p className="text-sm font-black text-[#1c1b1b]" style={{ fontFamily: "Manrope, sans-serif" }}>
                Dónde se cae el lead
              </p>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            {flow.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-white rounded-lg px-3 py-2.5 border border-[#c2c6d8]/10"
              >
                {item.status === "ok" && (
                  <svg className="w-4 h-4 text-[#10b981] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                )}
                {item.status === "warn" && (
                  <svg className="w-4 h-4 text-[#a33200] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                )}
                {item.status === "scanning" && (
                  <div className="w-4 h-4 rounded-full border-2 border-[#c2c6d8] border-t-[#0066ff] animate-spin flex-shrink-0" />
                )}
                <p className="flex-1 min-w-0 text-[10px] font-semibold text-[#1c1b1b] truncate">{item.label}</p>
                <span
                  className={`text-[9px] font-bold flex-shrink-0 ${
                    item.status === "ok" ? "text-[#10b981]" : item.status === "warn" ? "text-[#a33200]" : "text-[#727687]"
                  }`}
                >
                  {item.detail}
                </span>
              </div>
            ))}
          </div>
          <div className="bg-[#0050cb]/5 border border-[#0050cb]/15 rounded-lg px-4 py-3">
            <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#727687] mb-0.5">Resultado</p>
            <p className="text-xs font-bold text-[#1c1b1b]">Qué automatizar en las primeras 4 semanas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DiagnosticoOperacionPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jtads.com" },
      { "@type": "ListItem", position: 2, name: "Diagnóstico de operación", item: URL },
    ],
  };

  const jsonLd = (obj: object) => JSON.stringify(obj).replace(/</g, "\\u003c");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }} />

      {/* Header mínimo — solo logo, sin navegación */}
      <header className="bg-[#fcf9f8] border-b border-[#c2c6d8]/15 px-6 py-4 flex items-center justify-center">
        <a href="https://jtads.com" aria-label="JT Ads">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-blue.png" alt="JT Ads" className="h-7" />
        </a>
      </header>

      <main className="pt-0 bg-[#fcf9f8] text-[#1c1b1b] antialiased" style={{ fontFamily: "Inter, sans-serif" }}>

        {/* ── HERO ── */}
        <section id="hero" className="relative min-h-[680px] flex items-center py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f6f3f2] opacity-60 skew-x-12 translate-x-32" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 pt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9bb4fe] text-[#294487] rounded-full text-xs font-bold mb-8 uppercase tracking-wider">
                  Automatización & CRM
                </div>

                <h1
                  className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
                  style={{ fontFamily: "Manrope, sans-serif", color: "#1c1b1b" }}
                >
                  Diagnóstico gratuito de tu operación.{" "}
                  <span style={{ color: "#0066ff" }}>Te mostramos dónde se pierde el lead.</span>
                </h1>

                <p className="text-lg md:text-xl text-[#424656] max-w-2xl leading-relaxed mb-10">
                  Mapeamos los procesos manuales de tu operación, dónde se cae el lead entre el canal y el CRM,
                  y qué se puede automatizar en las primeras cuatro semanas. Sin costo y sin llamada de ventas.
                </p>

                <div className="flex flex-wrap gap-8 opacity-80 mb-10">
                  {[
                    { value: "$0", label: "Sin costo" },
                    { value: "<4h", label: "Tiempo de respuesta" },
                    { value: "4 sem.", label: "Horizonte del plan" },
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
                  data-cta="diag-operacion-landing-hero"
                  className="inline-flex items-center gap-3 bg-[#0066ff] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#0050cb] transition-colors text-sm uppercase tracking-wide"
                >
                  Solicitar diagnóstico gratuito
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>

              <div className="lg:col-span-5">
                <OperacionIllustration />
              </div>
            </div>
          </div>
        </section>

        {/* ── FORM SECTION ── */}
        <section id="solicitar" className="py-24 bg-[#f6f3f2]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0050cb] text-white rounded-sm text-[10px] font-bold uppercase tracking-[0.15em] mb-4">
                Diagnóstico gratuito
              </div>
              <h2
                className="text-3xl md:text-4xl font-black text-[#1c1b1b] mb-3"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Solicita el diagnóstico de tu operación
              </h2>
              <p className="text-[#424656]">
                Cuéntanos cómo entran hoy tus leads y qué herramientas usas. Te contactamos en menos de 4 horas
                hábiles para agendar la sesión.
              </p>
            </div>
            {DIAG_OPERACION_FORM_ID ? (
              <div className="bg-white rounded-2xl shadow-sm border border-[#c2c6d8]/10 p-2 overflow-hidden">
                <GhlInlineForm formId={DIAG_OPERACION_FORM_ID} formName={DIAG_OPERACION_FORM_NAME} host={DIAG_OPERACION_FORM_HOST} cookieConsent />
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-[#c2c6d8]/10 p-8 md:p-10 text-center">
                <p className="text-[#424656] leading-relaxed mb-8 max-w-xl mx-auto">
                  Escríbenos con el contexto de tu operación: por qué canales llegan los leads, qué CRM usas (si
                  usas alguno) y qué tareas se hacen hoy a mano. Con eso preparamos la sesión.
                </p>
                <a
                  href="/contacto"
                  data-cta="diag-operacion-landing-form"
                  className="inline-flex items-center gap-3 bg-[#0066ff] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#0050cb] transition-colors text-sm uppercase tracking-wide"
                >
                  Solicitar diagnóstico
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            )}
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
                Seguimos el recorrido del lead desde que escribe hasta que alguien lo atiende, y marcamos cada punto
                donde hoy depende de que una persona se acuerde de hacer algo.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {checklist.map((col) => (
                <div key={col.title} className="bg-[#f6f3f2] p-6 rounded-xl border border-[#c2c6d8]/10">
                  <div className="text-[#0066ff] mb-4">{col.icon}</div>
                  <h3 className="font-bold text-sm uppercase tracking-widest mb-4 text-[#1c1b1b]">{col.title}</h3>
                  <ul className="space-y-3">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-[#424656]">
                        <svg className="w-3.5 h-3.5 text-[#0050cb] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-xl flex-shrink-0 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/photos/juan-tabares.jpg"
                  alt="Juan Tabares, fundador de JT Ads"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-black mb-1 text-[#1c1b1b]" style={{ fontFamily: "Manrope, sans-serif" }}>
                  Juan Tabares
                </h2>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0050cb] mb-6 block">
                  Fundador de JT Ads
                </span>
                <p className="text-[#424656] leading-relaxed mb-8">
                  Con más de 7 años en performance marketing para marcas D2C y B2B en Latinoamérica, Juan conecta la
                  captación con lo que pasa después: el CRM, el seguimiento comercial y la automatización que evita que
                  un lead pagado se enfríe esperando respuesta.
                </p>
                <a
                  href="https://www.linkedin.com/in/juan-tabares-b1272b58/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1c1b1b] font-bold hover:text-[#0066ff] transition-colors group"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  Conectar en LinkedIn
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 bg-[#fcf9f8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black mb-12 text-center text-[#1c1b1b]" style={{ fontFamily: "Manrope, sans-serif" }}>
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group bg-[#f6f3f2] rounded-xl p-6 border border-[#c2c6d8]/10 cursor-pointer"
                  {...(item.open ? { open: true } : {})}
                >
                  <summary
                    className="flex justify-between items-center font-bold text-lg list-none text-[#1c1b1b]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    {item.q}
                    <svg
                      className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180 text-[#727687]"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-[#424656] text-sm leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a
                href="#solicitar"
                data-cta="diag-operacion-landing-final"
                className="inline-flex items-center gap-3 bg-[#0066ff] text-white px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-all active:scale-95 uppercase tracking-wide text-sm"
              >
                Solicitar diagnóstico gratuito
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer mínimo — los links van aquí, después del CTA, para no competir con la conversión.
          Las landings hijas de /soluciones se añaden aquí a medida que se publican. */}
      <footer className="bg-[#f6f3f2] border-t border-[#c2c6d8]/15 px-6 py-6 text-center">
        <p className="text-xs text-[#727687] mb-3">
          Qué automatizamos:{" "}
          <a href="/soluciones" className="underline hover:text-[#1c1b1b]">Automatización e IA</a>
          {" · "}
          <a href="/soluciones/automatizacion-de-procesos" className="underline hover:text-[#1c1b1b]">Automatización de procesos</a>
          {" · "}
          <a href="/soluciones/agentes-de-ia" className="underline hover:text-[#1c1b1b]">Agentes de IA</a>
          {" · "}
          <a href="/soluciones/gohighlevel" className="underline hover:text-[#1c1b1b]">GoHighLevel</a>
          {" · "}
          <a href="/soluciones/hubspot" className="underline hover:text-[#1c1b1b]">HubSpot</a>
        </p>
        <p className="text-xs text-[#727687]">© {new Date().getFullYear()} JT Ads. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
