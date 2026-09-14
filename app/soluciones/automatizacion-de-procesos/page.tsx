import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "../_components/Breadcrumbs";
import { breadcrumb, faqPage, service, toJsonLd, type Crumb } from "@/lib/schema";

const PATH = "/soluciones/automatizacion-de-procesos";
const URL = `https://jtads.com${PATH}`;

export const metadata: Metadata = {
  title: "Automatización de Procesos para Empresas en LATAM | JT Ads",
  description:
    "Automatizamos procesos manuales que frenan tu operación: nurturing, calificación y enrutamiento de leads y sincronización con tu CRM. Diagnóstico gratuito.",
  alternates: { canonical: URL, languages: { es: URL } },
  openGraph: {
    title: "Automatización de Procesos para Empresas en LATAM | JT Ads",
    description:
      "Nurturing, calificación y enrutamiento de leads, sincronización con tu CRM y tareas operativas sin trabajo manual. Sobre la plataforma que ya usas.",
    images: ["/og-image.png"],
    url: URL,
  },
};

const crumbs: Crumb[] = [
  { name: "Inicio", path: "" },
  { name: "Soluciones", path: "/soluciones" },
  { name: "Automatización de procesos", path: PATH },
];

const dolores = [
  "El equipo comercial dedica horas a tareas que un flujo haría en segundos.",
  "Los leads llegan por cuatro canales distintos y ninguno se sincroniza con el CRM.",
  "Nadie sabe cuántas oportunidades se pierden entre que entra el lead y alguien lo llama.",
];

const comparacion = [
  { criterio: "Diseño del proceso antes de automatizarlo", jt: "Sí, es el primer entregable", otros: "Automatizan el proceso tal como está" },
  { criterio: "Plataforma", jt: "Agnósticos: la que ya usas o la que tu operación necesita", otros: "Suelen trabajar con una sola herramienta" },
  { criterio: "Propiedad de los flujos", jt: "Documentados y en tu cuenta", otros: "La lógica queda en la cuenta del proveedor" },
  { criterio: "Cómo se mide el resultado", jt: "Impacto en el pipeline", otros: "Número de tareas automatizadas" },
  { criterio: "Licencias", jt: "Sin licencias atadas a nuestro servicio", otros: "Licencias revendidas como parte del contrato" },
  { criterio: "Quién implementa", jt: "El mismo equipo que diseña", otros: "Diseño y ejecución en manos distintas" },
];

const implementamos = [
  {
    title: "Flujos de nurturing",
    body: "Automatización de marketing por comportamiento, no por calendario: cada lead recibe el siguiente mensaje según lo que hizo, no según cuántos días pasaron desde que llenó el formulario.",
  },
  {
    title: "Calificación automática de leads",
    body: "Scoring conectado a datos reales de cierre. El puntaje se ajusta con lo que efectivamente termina en venta, no con reglas que alguien inventó el primer día.",
  },
  {
    title: "Enrutamiento comercial",
    body: "Automatización de ventas desde el primer minuto: el lead correcto llega al vendedor correcto, con su contexto, y el sistema avisa si nadie lo atendió a tiempo.",
  },
  {
    title: "Sincronización CRM ↔ ads",
    body: "Las conversiones offline vuelven a Google y Meta para que las plataformas optimicen hacia ventas y no hacia formularios. Es la mitad del problema que describimos en nuestra guía sobre el CPL de plataforma.",
    link: { href: "/blog/tracking-server-side-cpl-plataforma", label: "Por qué el CPL de tu plataforma miente" },
  },
  {
    title: "Automatización de tareas operativas",
    body: "Cotizaciones, contratos, facturación y reportes que hoy alguien arma a mano cada semana. La automatización de tareas libera al equipo para lo que sí requiere criterio.",
  },
  {
    title: "Orquestación multiherramienta",
    body: "Make, n8n o Zapier según lo que exija el caso, y automatización con IA donde un modelo resuelve mejor que una regla fija: clasificar mensajes, resumir conversaciones, extraer datos de documentos.",
  },
];

const pasos = [
  {
    n: "01",
    title: "Diagnóstico de la operación",
    body: "Mapeamos por dónde entra el lead, qué pasa después y dónde depende de que alguien se acuerde de hacer algo.",
  },
  {
    n: "02",
    title: "Diseño del proceso",
    body: "Definimos qué se automatiza, qué se queda con el equipo y qué datos viajan entre herramientas, antes de construir nada.",
  },
  {
    n: "03",
    title: "Implementación y medición",
    body: "Construimos los flujos sobre tu plataforma, los documentamos y medimos su efecto en el pipeline, no en tareas completadas.",
  },
];

const cualificacion = [
  "Tu equipo comercial pierde tiempo en tareas repetitivas antes de hablar con el cliente",
  "Recibes leads por varios canales y no todos terminan registrados en el CRM",
  "Tienes un proceso de venta claro, pero se ejecuta a mano",
  "Pagas un CRM o herramientas de automatización que el equipo no aprovecha",
  "Inviertes en pauta y el seguimiento posterior no está a la altura",
  "Quieres crecer en volumen sin duplicar el tamaño del equipo",
];

const faqs = [
  {
    q: "¿Necesito cambiar de CRM para automatizar?",
    a: "No. Trabajamos sobre la plataforma que ya usas: HubSpot, GoHighLevel, Salesforce u otra. Solo recomendamos cambiar cuando la herramienta actual no puede hacer lo que tu operación necesita, y en ese caso te lo decimos en el diagnóstico con las razones concretas.",
  },
  {
    q: "¿Cuánto tarda en estar funcionando?",
    a: "Depende del alcance. Una automatización puntual sobre un stack existente puede estar operativa en 2 a 4 semanas. Una implementación completa con CRM, flujos e integraciones toma entre 6 y 12 semanas. En el diagnóstico te damos un estimado para tu caso, no un rango genérico.",
  },
  {
    q: "¿Qué pasa si ya tengo flujos armados a medias?",
    a: "Es el escenario más común. Revisamos lo que existe, corregimos lo que está roto o mal configurado y construimos sobre lo que sí funciona. No empezamos de cero si no hace falta.",
  },
  {
    q: "¿Los flujos quedan a mi nombre o dependo de ustedes?",
    a: "Quedan en tu cuenta y documentados. Si mañana decides seguir con tu equipo o con otro proveedor, la lógica de cada flujo está escrita y la puede mantener cualquiera que conozca la plataforma.",
  },
  {
    q: "¿Cómo se cobra: proyecto o mensualidad?",
    a: "Lo definimos según el alcance después del diagnóstico. La implementación inicial y el acompañamiento posterior son decisiones distintas, y te presentamos una propuesta concreta para cada una en lugar de un paquete cerrado.",
  },
  {
    q: "¿Cómo se mide si la automatización sirvió?",
    a: "En el pipeline: tiempo hasta el primer contacto, leads que dejan de perderse entre canal y CRM, y horas que el equipo recupera para vender. Contar tareas automatizadas no dice nada sobre el negocio, así que no lo usamos como métrica de éxito.",
  },
  {
    q: "¿Automatizar no vuelve fría la relación con el cliente?",
    a: "Solo si se automatiza lo que no se debe. Los flujos se ocupan de lo repetitivo y de que nadie quede sin respuesta; la conversación que requiere criterio sigue siendo humana, y llega antes porque el equipo ya no está ocupado copiando datos.",
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

export default function AutomatizacionDeProcesosPage() {
  const serviceSchema = service({
    name: "Automatización de procesos para empresas",
    serviceType: "Automatización de procesos",
    description:
      "Diseño e implementación de flujos de nurturing, calificación y enrutamiento de leads, sincronización entre CRM y plataformas de ads y automatización de tareas operativas.",
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
                Automatización de procesos:{" "}
                <span className="text-[#9bb4fe]">cada tarea manual de tu operación tiene un costo que nadie está midiendo.</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                Diseñamos e implementamos los flujos que conectan tus canales, tu CRM y tu equipo comercial,
                para que ningún lead dependa de que alguien se acuerde de llamarlo.
              </p>
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-10">
                {["Flujos documentados y tuyos", "Sin licencias atadas", "Diagnóstico sin costo"].map((f) => (
                  <span key={f} className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-300">
                    {f}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/diagnostico-operacion" data-cta="diag-operacion-procesos-hero" className={ctaPrimary}>
                  Diagnóstico gratuito de tu operación
                </Link>
                <a href="#implementamos" className={ctaSecondaryDark}>
                  Ver qué implementamos ↓
                </a>
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
              <strong>JT Ads automatiza procesos de marketing, ventas y operaciones para empresas en LATAM.</strong>{" "}
              Diseñamos e implementamos flujos de nurturing, calificación automática de leads, enrutamiento
              comercial y sincronización entre CRM, plataformas de ads y herramientas de ventas. Trabajamos sobre la
              plataforma que la empresa ya usa — HubSpot, GoHighLevel, Make, n8n, Zapier o Salesforce — o ayudamos a
              elegir la adecuada según la operación actual y su proyección de crecimiento.
            </p>
          </div>
        </section>

        {/* ── 4. Tabla comparativa ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4">
                Automatizar un proceso roto solo lo rompe más rápido.
              </h2>
              <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                Lo que cambia entre proveedores no es la herramienta: es qué pasa antes y después de construir el flujo.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full min-w-[560px] text-left border-collapse">
                <thead>
                  <tr className="bg-[#f6f3f2]">
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#424656]">Criterio</th>
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#294487] bg-[#eff4ff]">JT Ads</th>
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#424656]">Consultoras tradicionales</th>
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
                Automatización de marketing, ventas y operaciones, sobre la plataforma que ya usas.
              </h2>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                Es una de las piezas de nuestra{" "}
                <Link href="/soluciones" className="text-[var(--accent)] font-semibold hover:underline">
                  vertical de automatización e IA
                </Link>
                . Implementamos sobre HubSpot, GoHighLevel, Salesforce, Make, n8n o Zapier.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {implementamos.map((item) => (
                <article key={item.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{item.body}</p>
                  {item.link && (
                    <Link href={item.link.href} className="inline-block mt-4 text-sm font-semibold text-[var(--accent)] hover:underline">
                      {item.link.label} →
                    </Link>
                  )}
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
            <ol className="grid md:grid-cols-3 gap-6">
              {pasos.map((p) => (
                <li key={p.n} className="bg-[#fcf9f8] rounded-2xl p-7 border border-gray-100">
                  <span className="block text-sm font-bold text-[var(--accent)] mb-3">{p.n}</span>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{p.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 7. Caso con métricas ──
            TODO(caso): métricas reales de un caso de automatización (horas ahorradas por semana, tiempo de
            primera respuesta). Bloque omitido a propósito hasta tener datos verificables. No inventar cifras. */}

        {/* ── 8. CTA intermedio ── */}
        <section className="py-16 px-6 bg-[#0a0a0a]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Qué procesos de tu operación se pueden automatizar primero?
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              En el diagnóstico mapeamos dónde se pierde el lead y qué automatizar en las primeras cuatro semanas.
              Sin costo y sin llamada de ventas.
            </p>
            <Link href="/diagnostico-operacion" data-cta="diag-operacion-procesos-medio" className={ctaPrimary}>
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
              Preguntas frecuentes sobre automatización de procesos
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
                { href: "/soluciones", label: "Automatización e IA: todo lo que implementamos" },
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
                Empieza por saber qué te está costando cada proceso manual.
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                Te mostramos dónde se pierde el lead entre canal y CRM y qué automatizar primero, trabajes o no con nosotros.
              </p>
              <Link href="/diagnostico-operacion" data-cta="diag-operacion-procesos-final" className={`${ctaPrimary} w-full sm:w-auto`}>
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
