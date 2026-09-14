import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "../_components/Breadcrumbs";
import { breadcrumb, faqPage, service, toJsonLd, type Crumb } from "@/lib/schema";

// Keyword principal: "hubspot crm español". No persigue "crm que es": esa
// intención va a una guía pilar, no a esta landing de servicio.

const PATH = "/soluciones/hubspot";
const URL = `https://jtads.com${PATH}`;

export const metadata: Metadata = {
  title: "HubSpot CRM en Español: Implementación para LATAM | JT Ads",
  description:
    "Implementamos y configuramos HubSpot CRM en español para empresas en LATAM: migración, flujos, integraciones y reportes conectados a tus ventas reales.",
  alternates: { canonical: URL, languages: { es: URL } },
  openGraph: {
    title: "HubSpot CRM en Español: Implementación para LATAM | JT Ads",
    description:
      "Migración de datos, pipelines, flujos, integración con Google Ads y Meta y reportes de atribución. HubSpot bien implementado, en español.",
    images: ["/og-image.png"],
    url: URL,
  },
};

const crumbs: Crumb[] = [
  { name: "Inicio", path: "" },
  { name: "Soluciones", path: "/soluciones" },
  { name: "HubSpot", path: PATH },
];

const dolores = [
  "Pagas la licencia hace ocho meses y el equipo sigue trabajando en la hoja de cálculo.",
  "Los datos entraron mal en la migración y ahora ningún reporte es confiable.",
  "Nadie conectó HubSpot con las plataformas de ads, así que el CPL del dashboard sigue mintiendo.",
];

const comparacion = [
  { criterio: "Pipelines y propiedades", jt: "Modelados sobre tu proceso comercial real", otros: "Configuración por defecto de la plataforma" },
  { criterio: "Migración de datos", jt: "Limpieza y deduplicación antes de importar", otros: "Importación directa del archivo tal como está" },
  { criterio: "Integración con Google Ads y Meta", jt: "Conectada, con conversiones offline de vuelta", otros: "Sin conexión o solo el píxel" },
  { criterio: "Reportes", jt: "CPL real y ventas cerradas por campaña", otros: "Actividad: correos enviados, tareas creadas" },
  { criterio: "Capacitación", jt: "Sobre el flujo real de tu equipo", otros: "Tutoriales genéricos de la plataforma" },
  { criterio: "Cuentas ya activas", jt: "Auditamos y rescatamos lo que existe", otros: "Se propone empezar de cero" },
];

const implementamos = [
  {
    title: "Migración de datos",
    body: "Desde hojas de cálculo u otro CRM, con limpieza y deduplicación antes de importar. Un CRM con datos sucios produce reportes que nadie cree.",
  },
  {
    title: "Pipelines y propiedades",
    body: "Modelados sobre el proceso comercial que tu equipo ya sigue, con las etapas y los campos que realmente usa, no con los que trae la plataforma por defecto.",
  },
  {
    title: "Flujos de nurturing y scoring",
    body: "Workflows de seguimiento y calificación conectados a datos reales de cierre, para que el equipo comercial priorice a quien tiene más probabilidad de comprar.",
  },
  {
    title: "Integración con ads",
    body: "Conexión con Google Ads y Meta para que las etapas del pipeline vuelvan a las plataformas como conversiones offline y las campañas optimicen hacia ventas.",
    link: { href: "/blog/tracking-server-side-cpl-plataforma", label: "Por qué el CPL de tu plataforma miente" },
  },
  {
    title: "WhatsApp y canales",
    body: "Conversaciones de WhatsApp, formularios y correo registrados en la ficha del contacto, para que nadie tenga que preguntar qué se habló antes.",
  },
  {
    title: "Reportes de atribución",
    body: "CPL real por campaña y ventas cerradas por canal, no el CPL de plataforma. Es el reporte que responde si la inversión en pauta está funcionando.",
  },
];

const pasos = [
  {
    n: "01",
    title: "Diagnóstico de la operación",
    body: "Revisamos tu proceso comercial, tus datos y, si ya tienes HubSpot, cómo está configurado hoy y qué no se está usando.",
  },
  {
    n: "02",
    title: "Implementación",
    body: "Migración, pipelines, propiedades, flujos e integraciones, construidos sobre tu proceso y documentados para tu equipo.",
  },
  {
    n: "03",
    title: "Adopción y medición",
    body: "Capacitamos al equipo en su flujo real y dejamos los reportes que conectan campañas con ventas cerradas.",
  },
];

const cualificacion = [
  "Pagas HubSpot y el equipo sigue usando hojas de cálculo",
  "Vas a contratar HubSpot y quieres implementarlo bien desde el inicio",
  "Tus reportes de HubSpot no coinciden con lo que vende el equipo",
  "Inviertes en Google Ads o Meta y no sabes qué campaña trae ventas",
  "Tus leads llegan por WhatsApp y no quedan registrados en el CRM",
  "Migraste a HubSpot y los datos quedaron duplicados o incompletos",
];

type Faq = { q: string; a: string; extra?: ReactNode };

const faqs: Faq[] = [
  {
    q: "¿Ustedes venden la licencia de HubSpot o solo la implementan?",
    a: "Nuestro trabajo es la implementación y la configuración. Recomendamos que la licencia quede contratada a nombre de tu empresa, de modo que la cuenta y los datos sean siempre tuyos. En el diagnóstico definimos qué plan necesitas para lo que quieres hacer.",
  },
  {
    q: "¿Cuánto tarda una implementación completa de HubSpot?",
    a: "Una implementación completa con migración, pipelines, flujos e integraciones suele tomar entre 6 y 12 semanas. Ajustes puntuales sobre una cuenta que ya funciona pueden estar listos en 2 a 4 semanas. En el diagnóstico te damos un estimado para tu caso.",
  },
  {
    q: "¿Pueden rescatar una cuenta de HubSpot mal configurada?",
    a: "Sí, y es uno de los casos más frecuentes. Auditamos la configuración actual, corregimos propiedades, pipelines y flujos mal armados, limpiamos los datos y construimos sobre lo que sí funciona, sin empezar de cero si no hace falta.",
  },
  {
    q: "¿Se puede migrar a HubSpot sin perder el histórico?",
    a: "Los contactos, empresas, negocios y notas se pueden migrar. Qué parte del historial de actividad se conserva depende del sistema de origen y de cómo se exporten los datos, por eso lo planificamos antes de mover nada y te decimos qué se traslada y qué no.",
  },
  {
    q: "¿Qué plan de HubSpot necesito para lo que quiero hacer?",
    a: "Depende de qué necesites automatizar. Las funciones básicas de CRM están en los planes de entrada, pero los flujos de automatización avanzados y ciertos reportes suelen requerir planes Professional. Te recomendamos el plan según lo que vas a usar, no el más caro.",
  },
  {
    q: "¿HubSpot se integra con Google Ads y Meta?",
    a: "Sí. HubSpot tiene integraciones nativas con Google Ads y Meta. Las configuramos para que las etapas del pipeline se envíen de vuelta como conversiones, de modo que las campañas optimicen hacia oportunidades reales y no solo hacia formularios.",
  },
  {
    q: "¿Y si mejor me conviene GoHighLevel?",
    a: "Puede ser. GoHighLevel reúne CRM, embudos, agenda y mensajería con tarifa plana, y suele encajar mejor en empresas que quieren un solo sistema y venden mucho por WhatsApp. HubSpot destaca cuando hay equipos de marketing y ventas estructurados y necesidad de reportes e integraciones. Te decimos cuál conviene en el diagnóstico.",
    extra: (
      <>
        {" "}
        <Link href="/soluciones/gohighlevel" className="text-[var(--accent)] font-semibold hover:underline">
          Ver la guía de GoHighLevel →
        </Link>
      </>
    ),
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

export default function HubSpotPage() {
  const serviceSchema = service({
    name: "Implementación de HubSpot CRM en español",
    serviceType: "Implementación de HubSpot CRM",
    description:
      "Implementación y configuración de HubSpot CRM para empresas en LATAM: migración de datos, pipelines, flujos, integración con Google Ads, Meta y WhatsApp, y reportes de atribución.",
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
                HubSpot CRM en español bien implementado,{" "}
                <span className="text-[#9bb4fe]">o una licencia cara que tu equipo no usa.</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                Configuramos HubSpot sobre tu proceso comercial real: migración limpia, pipelines que el equipo usa,
                flujos automáticos y reportes que conectan tus campañas con las ventas cerradas.
              </p>
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-10">
                {["Implementaciones nuevas o rescate", "Integrado con ads", "Diagnóstico sin costo"].map((f) => (
                  <span key={f} className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-300">
                    {f}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/diagnostico-operacion" data-cta="diag-operacion-hubspot-hero" className={ctaPrimary}>
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
            <p className="text-[var(--text-primary)] text-lg leading-relaxed mb-6">
              <strong>JT Ads implementa y configura HubSpot CRM en español para empresas en LATAM.</strong>{" "}
              Cubrimos la migración de datos desde el sistema anterior, la configuración de pipelines y propiedades
              según el proceso comercial real, la construcción de flujos de nurturing y calificación, la integración
              con Google Ads, Meta y WhatsApp, y los reportes que conectan campañas con ventas cerradas. Trabajamos
              tanto sobre implementaciones nuevas como sobre cuentas de HubSpot ya activas que no se están aprovechando.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              HubSpot es una plataforma de CRM con módulos de marketing, ventas y servicio al cliente. Su interfaz está
              disponible en español, pero la plataforma no ordena el proceso por sí sola: antes de pedir una
              demostración de HubSpot conviene tener claro qué debe resolver en tu operación.
            </p>
          </div>
        </section>

        {/* ── 4. Tabla comparativa ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4">
                La licencia es lo de menos. Lo que cambia el resultado es cómo se implementa.
              </h2>
              <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                Dos empresas con el mismo plan de HubSpot pueden tener un CRM que ordena la venta o uno que nadie abre.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full min-w-[560px] text-left border-collapse">
                <thead>
                  <tr className="bg-[#f6f3f2]">
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#424656]">Criterio</th>
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#294487] bg-[#eff4ff]">Implementación JT Ads</th>
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#424656]">Licencia sin implementación</th>
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
        <section id="implementamos" className="py-20 px-6 bg-[#fcf9f8] scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">Qué implementamos</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4">
                Implementación de HubSpot conectada a tus ventas, no solo a tus contactos.
              </h2>
              <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
                Es una de las piezas de nuestra{" "}
                <Link href="/soluciones" className="text-[var(--accent)] font-semibold hover:underline">
                  vertical de automatización e IA
                </Link>
                , junto con la{" "}
                <Link href="/soluciones/automatizacion-de-procesos" className="text-[var(--accent)] font-semibold hover:underline">
                  automatización de procesos
                </Link>{" "}
                que se construye encima del CRM.{" "}
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
            TODO(caso): métricas reales de una implementación de HubSpot (adopción del equipo, tiempo de primera
            respuesta, CPL real vs CPL de plataforma). Bloque omitido a propósito hasta tener datos verificables. */}

        {/* ── 8. CTA intermedio ── */}
        <section className="py-16 px-6 bg-[#0a0a0a]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Tu HubSpot está trabajando para tu equipo o tu equipo trabaja para HubSpot?
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              En el diagnóstico revisamos tu proceso comercial y, si ya tienes HubSpot, qué está mal configurado y qué
              se puede resolver primero.
            </p>
            <Link href="/diagnostico-operacion" data-cta="diag-operacion-hubspot-medio" className={ctaPrimary}>
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
              Preguntas frecuentes sobre HubSpot CRM
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
                  <p className="px-6 pb-5 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {f.a}
                    {f.extra}
                  </p>
                </details>
              ))}
            </div>
            <p className="mt-10 text-xs text-[#727687] leading-relaxed text-center">
              HubSpot es una marca de HubSpot, Inc. JT Ads no es parte ni representante oficial de HubSpot.
            </p>
          </div>
        </section>

        {/* ── 11. CTA final ── */}
        <section className="relative overflow-hidden py-24 px-6 bg-[#0a0a0a]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--accent)]/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">
                Que HubSpot sea el sistema donde vive tu venta, no una licencia más.
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                Te mostramos qué configurar primero para que tu equipo lo use y tus campañas se midan en ventas, trabajes o no con nosotros.
              </p>
              <Link href="/diagnostico-operacion" data-cta="diag-operacion-hubspot-final" className={`${ctaPrimary} w-full sm:w-auto`}>
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
