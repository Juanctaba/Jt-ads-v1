import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "../_components/Breadcrumbs";
import { breadcrumb, faqPage, service, toJsonLd, type Crumb } from "@/lib/schema";

const PATH = "/soluciones/agentes-de-ia";
const URL = `https://jtads.com${PATH}`;

// Demo en vivo con el agente real de JT Ads (número confirmado por Juan).
const WA_DEMO =
  "https://wa.me/19547995423?text=" +
  encodeURIComponent("Hola, vengo de jtads.com y quiero probar el agente de IA.");

export const metadata: Metadata = {
  title: "Agentes de IA para Empresas: WhatsApp y Voz | JT Ads",
  description:
    "Implementamos agentes conversacionales con IA que atienden, califican y agendan 24/7 en WhatsApp, web y voz. Conectados a tu CRM. Diagnóstico gratuito.",
  alternates: { canonical: URL, languages: { es: URL } },
  openGraph: {
    title: "Agentes de IA para Empresas: WhatsApp y Voz | JT Ads",
    description:
      "Agentes de IA que califican y agendan en WhatsApp, web y voz, conectados a tu CRM. No un chatbot de menú: conversaciones reales con criterio de negocio.",
    images: ["/og-image.png"],
    url: URL,
  },
};

const crumbs: Crumb[] = [
  { name: "Inicio", path: "" },
  { name: "Soluciones", path: "/soluciones" },
  { name: "Agentes de IA", path: PATH },
];

const dolores = [
  "Los leads escriben a la hora que quieren, y a esa hora no siempre hay alguien para responder.",
  "El chatbot que instalaste responde con un menú de opciones y la gente lo abandona.",
  "Nadie califica al lead antes de que llegue a la agenda del comercial, y muchos no deberían estar ahí.",
];

const comparacion = [
  { criterio: "Entiende lenguaje natural", jt: "Sí", otros: "Solo opciones de menú o palabras clave" },
  { criterio: "Califica con criterios del negocio", jt: "Sí, con tus reglas reales", otros: "Recoge datos, no califica" },
  { criterio: "Agenda en un calendario real", jt: "Sí, consulta disponibilidad", otros: "Envía un enlace y el lead se pierde" },
  { criterio: "Escala a humano cuando corresponde", jt: "Sí, con reglas explícitas y contexto", otros: "Deriva sin contexto o no deriva" },
  { criterio: "Registra todo en el CRM", jt: "Conversación y resultado en la ficha", otros: "Rara vez, o solo el teléfono" },
  { criterio: "Funciona en voz, no solo texto", jt: "Sí, llamadas entrantes y salientes", otros: "No" },
  { criterio: "Se entrena con tus documentos y objeciones", jt: "Sí", otros: "Respuestas fijas escritas a mano" },
];

const implementamos = [
  {
    title: "Agente de WhatsApp",
    body: "Atención, calificación y agendamiento 24/7 en el canal donde tus clientes ya escriben. Es lo que la mayoría busca como chatbot de WhatsApp, pero con conversación real en lugar de un árbol de botones.",
  },
  {
    title: "Agente de voz",
    body: "Llamadas entrantes y salientes en español neutro o con el acento de tu mercado: confirma citas, retoma leads que no contestaron el mensaje y califica por teléfono.",
  },
  {
    title: "Agente web",
    body: "Widget en tu sitio conectado al mismo cerebro que el de WhatsApp. El lead puede empezar en la web y seguir por WhatsApp sin repetir lo que ya contó.",
  },
  {
    title: "Arquitecturas multiagente",
    body: "Cuando un solo agente no alcanza, varios agentes especializados se derivan trabajo entre sí: uno califica, otro agenda, otro hace seguimiento. Cada uno con su rol y sus límites.",
  },
  {
    title: "Base de conocimiento",
    body: "El agente se entrena con tus documentos, precios, políticas y las objeciones que tu equipo escucha todos los días, no con respuestas genéricas de un chatbot con IA cualquiera.",
  },
  {
    title: "Escalamiento a humano",
    body: "Reglas explícitas de cuándo el agente cede la conversación: un cliente molesto, una negociación de precio, una pregunta fuera de su alcance. Y lo cede con todo el contexto.",
  },
];

const pasos = [
  {
    n: "01",
    title: "Definimos qué debe resolver",
    body: "Qué preguntas atiende, con qué criterios califica, cuándo agenda y cuándo cede la conversación a una persona.",
  },
  {
    n: "02",
    title: "Lo entrenamos y lo conectamos",
    body: "Base de conocimiento con tu información real, conexión al CRM y al calendario, y pruebas con conversaciones reales antes de salir en vivo.",
  },
  {
    n: "03",
    title: "Lo ajustamos con datos",
    body: "Revisamos conversaciones, detectamos dónde se traba y mejoramos respuestas y reglas con lo que efectivamente pasa, no con suposiciones.",
  },
];

const cualificacion = [
  "Recibes más mensajes de los que tu equipo alcanza a responder a tiempo",
  "Una parte importante de tus leads escribe fuera del horario laboral",
  "Tu equipo comercial pierde tiempo con contactos que no califican",
  "Ya probaste un chatbot de menú y la gente lo abandona",
  "Atiendes por WhatsApp y no queda registro ordenado en el CRM",
  "Quieres atender 24/7 sin sumar turnos al equipo",
];

const faqs = [
  {
    q: "¿En qué se diferencia de un chatbot normal?",
    a: "Un chatbot de flujo sigue un árbol de opciones: si el cliente escribe algo que no está previsto, se traba. Un agente de IA entiende lenguaje natural, sostiene una conversación que no sigue un orden fijo, califica con los criterios de tu negocio y puede agendar o escalar a una persona según lo que pase en la conversación.",
  },
  {
    q: "¿El agente puede agendar directamente en el calendario del comercial?",
    a: "Sí. Se conecta al calendario, consulta la disponibilidad real y confirma la cita dentro de la misma conversación, sin enviar un enlace para que el lead agende por su cuenta.",
  },
  {
    q: "¿Qué pasa cuando el agente no sabe responder?",
    a: "Cede la conversación a una persona según reglas definidas de antemano, y la entrega con el contexto completo para que nadie tenga que volver a preguntar. También queda registrado para mejorar su base de conocimiento.",
  },
  {
    q: "¿Funciona con el número de WhatsApp que ya uso?",
    a: "Normalmente sí: el número se conecta a la API oficial de WhatsApp Business. Según cómo lo uses hoy puede requerir migrarlo desde la aplicación, así que lo revisamos en el diagnóstico antes de tocar nada.",
  },
  {
    q: "¿Cuánto cuesta mantenerlo al mes?",
    a: "Depende del volumen de conversaciones. El costo mensual combina los cargos de Meta por los mensajes de WhatsApp, la plataforma donde vive el agente y el uso del modelo de IA. En el diagnóstico te damos un estimado con tu volumen real, no un precio de catálogo.",
  },
  {
    q: "¿El cliente se da cuenta de que habla con una IA?",
    a: "Las conversaciones suenan naturales, pero recomendamos que el agente se presente como asistente virtual de la empresa. Hacer pasar una IA por una persona daña la confianza cuando el cliente lo descubre, y en varios mercados avisarlo es un requisito.",
  },
  {
    q: "¿Qué necesito tener listo para empezar?",
    a: "La información que tu equipo ya usa para responder: preguntas frecuentes, precios, políticas y las objeciones más comunes. También los criterios con los que decides si un lead califica y acceso al calendario y al CRM. Si algo no está documentado, lo levantamos juntos.",
  },
  {
    q: "¿Cómo se conecta con mi CRM?",
    a: "Cada conversación y su resultado quedan registrados en la ficha del contacto: qué preguntó, cómo calificó y si agendó. Así el comercial llega a la reunión sabiendo con quién habla, y el equipo puede medir qué canal trae los leads que sí compran.",
  },
];

const ctaPrimary =
  "inline-flex items-center justify-center gap-2 bg-[#0066ff] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#0050cb] transition-colors text-sm";
const ctaSecondaryDark =
  "inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm";

function Check() {
  return (
    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

function WhatsAppDemo({ className }: { className: string }) {
  return (
    <a href={WA_DEMO} target="_blank" rel="noopener" data-cta="wa-demo-agente" className={className}>
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      Habla con nuestro agente ahora
    </a>
  );
}

export default function AgentesDeIAPage() {
  const serviceSchema = service({
    name: "Agentes de IA para empresas",
    serviceType: "Agentes conversacionales con inteligencia artificial",
    description:
      "Implementación de agentes conversacionales con IA en WhatsApp, web y voz que atienden, califican y agendan, conectados al CRM de la empresa.",
    path: PATH,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumb(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqPage(faqs)) }} />
      <Navbar />
      <main className="flex-1">

        {/* ── 1. Hero ── */}
        <section className="bg-[#0a0a0a] pt-28 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={crumbs} tone="dark" />
            <div className="text-center mt-10">
              <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[var(--accent)]/20 text-[#9bb4fe] text-xs font-semibold tracking-widest uppercase">
                Automatización & IA
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Agentes de IA que califican y agendan,{" "}
                <span className="text-[#9bb4fe]">no que responden preguntas frecuentes.</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                Agentes conversacionales en WhatsApp, web y voz que atienden a cualquier hora, califican con los
                criterios de tu negocio y dejan la cita agendada y registrada en tu CRM.
              </p>
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-10">
                {["WhatsApp, web y voz", "Conectados a tu CRM", "Diagnóstico sin costo"].map((f) => (
                  <span key={f} className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-300">
                    {f}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/diagnostico-operacion" data-cta="diag-operacion-agentes-hero" className={ctaPrimary}>
                  Diagnóstico gratuito de tu operación
                </Link>
                <WhatsAppDemo className={ctaSecondaryDark} />
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Los tres dolores ── */}
        <section className="py-16 px-6 bg-[#fcf9f8] border-b border-gray-100">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {dolores.map((d) => (
              <p key={d} className="text-[var(--text-primary)] text-lg font-semibold leading-snug border-l-2 border-[var(--accent)] pl-5">
                {d}
              </p>
            ))}
          </div>
        </section>

        {/* ── 3. En resumen ── bloque autocontenido que citan buscadores e IA generativas */}
        <section className="py-14 px-6 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-4">En resumen</p>
            <p className="text-[var(--text-primary)] text-lg leading-relaxed">
              <strong>JT Ads implementa agentes conversacionales con inteligencia artificial para empresas en LATAM:</strong>{" "}
              agentes de texto en WhatsApp y web, y agentes de voz para llamadas entrantes y salientes. A diferencia
              de un chatbot de flujo, entienden lenguaje natural, califican al lead con los criterios reales del
              negocio, consultan disponibilidad y agendan en el calendario del comercial. Cada agente queda conectado
              al CRM, de modo que la conversación completa y el resultado de la calificación quedan registrados en la
              ficha del contacto.
            </p>
          </div>
        </section>

        {/* ── 4. Tabla comparativa ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4">
                Agente de IA o chatbot de flujo: la diferencia está en lo que pasa después del primer mensaje.
              </h2>
              <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                Los dos responden. Solo uno entiende, califica y deja la cita agendada.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full min-w-[560px] text-left border-collapse">
                <thead>
                  <tr className="bg-[#f6f3f2]">
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#424656]">Criterio</th>
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#294487] bg-[#eff4ff]">Agente de IA de JT Ads</th>
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#424656]">Chatbot de flujo tradicional</th>
                  </tr>
                </thead>
                <tbody>
                  {comparacion.map((row) => (
                    <tr key={row.criterio} className="border-t border-gray-100">
                      <th scope="row" className="p-5 font-medium text-[#1c1b1b] text-sm">{row.criterio}</th>
                      <td className="p-5 text-sm font-semibold text-[#0066ff] bg-[#eff4ff]/40">{row.jt}</td>
                      <td className="p-5 text-sm text-[#424656]">{row.otros}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 5. Qué implementamos ── */}
        <section id="implementamos" className="py-20 px-6 bg-[#fcf9f8]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">Qué implementamos</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4">
                Del chatbot de WhatsApp al agente que califica, agenda y registra.
              </h2>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                Es una de las piezas de nuestra{" "}
                <Link href="/soluciones" className="text-[var(--accent)] font-semibold hover:underline">
                  vertical de automatización e IA
                </Link>
                . El agente califica; la{" "}
                <Link href="/soluciones/automatizacion-de-procesos" className="text-[var(--accent)] font-semibold hover:underline">
                  automatización de procesos
                </Link>{" "}
                se encarga de lo que pasa después.{" "}
                <Link href="/soluciones/stack" className="text-[var(--accent)] font-semibold hover:underline">
                  El stack completo con el que trabajamos →
                </Link>
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {implementamos.map((item) => (
                <article key={item.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. Cómo funciona ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-12 text-center">
              Cómo funciona
            </h2>
            <ol className="grid md:grid-cols-3 gap-6 mb-12">
              {pasos.map((p) => (
                <li key={p.n} className="bg-[#fcf9f8] rounded-2xl p-7 border border-gray-100">
                  <span className="block text-sm font-bold text-[var(--accent)] mb-3">{p.n}</span>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{p.body}</p>
                </li>
              ))}
            </ol>
            <div className="bg-[#0a0a0a] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-white font-semibold text-lg mb-1">La mejor explicación es probarlo.</p>
                <p className="text-sm text-gray-400 max-w-lg leading-relaxed">
                  Escríbele al agente que usamos en JT Ads y fíjate cómo responde, qué pregunta y cómo te propone agendar.
                </p>
              </div>
              <WhatsAppDemo className={`${ctaPrimary} whitespace-nowrap`} />
            </div>
          </div>
        </section>

        {/* ── 7. Caso con métricas ──
            TODO(caso): métricas reales de un caso de agentes conversacionales (tiempo de primera respuesta,
            % de leads calificados automáticamente, citas agendadas fuera de horario). Bloque omitido a propósito
            hasta tener datos verificables. No inventar cifras. */}

        {/* ── 8. CTA intermedio ── */}
        <section className="py-16 px-6 bg-[#0a0a0a]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Qué conversaciones de tu operación podría resolver un agente?
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              En el diagnóstico revisamos cómo entran hoy tus leads, dónde se pierden y qué parte de la atención se
              puede delegar a un agente sin perder calidad.
            </p>
            <Link href="/diagnostico-operacion" data-cta="diag-operacion-agentes-medio" className={ctaPrimary}>
              Ver cómo funcionaría en tu caso
            </Link>
          </div>
        </section>

        {/* ── 9. Esto tiene sentido si… ── */}
        <section className="py-20 px-6 bg-[#fcf9f8]">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">
                Esto tiene sentido si tu empresa:
              </h2>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                {cualificacion.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check />
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── 10. FAQ ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-10 text-center">
              Preguntas frecuentes sobre agentes de IA
            </h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="group bg-[#fcf9f8] rounded-2xl border border-gray-100 overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                    <span className="font-semibold text-[var(--text-primary)]">{f.q}</span>
                    <svg
                      className="w-5 h-5 text-[var(--accent)] shrink-0 transition-transform group-open:rotate-180"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
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
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-6">También te puede interesar</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href: "/soluciones/automatizacion-de-procesos", label: "Automatización de procesos: lo que pasa después de que el agente califica" },
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
                  <p className="text-sm font-semibold text-[var(--text-primary)] leading-snug">{l.label} →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 11. CTA final ── */}
        <section className="relative overflow-hidden py-24 px-6 bg-[#0a0a0a]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--accent)]/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">
                Que ningún lead espere a que alguien vea el mensaje.
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                Te mostramos qué parte de tu atención puede resolver un agente de IA y cómo conectarlo a tu CRM, trabajes o no con nosotros.
              </p>
              <Link href="/diagnostico-operacion" data-cta="diag-operacion-agentes-final" className={`${ctaPrimary} w-full sm:w-auto`}>
                Diagnóstico gratuito de tu operación
              </Link>
              <p className="mt-5 text-sm text-[var(--text-muted)]">Respuesta en &lt;4 horas hábiles · Sin contratos · Sin presión</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
