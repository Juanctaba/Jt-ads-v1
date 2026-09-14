import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "../_components/Breadcrumbs";
import AffiliateLink from "../_components/AffiliateLink";
import { AFFILIATES, GHL_PRICING } from "@/lib/affiliates";
import { breadcrumb, faqPage, service, toJsonLd, type Crumb } from "@/lib/schema";

// Landing en español neutro (tú, USD), sin país objetivo. Rompe el patrón de
// las otras hijas a propósito: guía primero, oferta después. El enlace de
// afiliado nunca va en el hero (patrón de "thin affiliate" que Google penaliza).

const PATH = "/soluciones/gohighlevel";
const URL = `https://jtads.com${PATH}`;

export const metadata: Metadata = {
  title: "GoHighLevel en Español: Qué Es, Precios y Cómo Usarlo",
  description:
    "Qué es GoHighLevel, cuánto cuesta y cómo se implementa en Latinoamérica. Guía en español de la plataforma y la alternativa white-label que operamos: Omnix.",
  alternates: { canonical: URL, languages: { es: URL, "x-default": URL } },
  openGraph: {
    title: "GoHighLevel en Español: Qué Es, Precios y Cómo Usarlo",
    description:
      "Guía en español de GoHighLevel: qué incluye, cuánto cuesta en USD, cómo se compara con HubSpot y Kommo, y cuándo no conviene usarlo.",
    images: ["/og-image.png"],
    url: URL,
  },
};

const crumbs: Crumb[] = [
  { name: "Inicio", path: "" },
  { name: "Soluciones", path: "/soluciones" },
  { name: "GoHighLevel", path: PATH },
];

const ghl = AFFILIATES.gohighlevel;
const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

const modulos = [
  { modulo: "CRM y pipelines", que: "Contactos, oportunidades y etapas de venta personalizables", uso: "Ver en qué etapa está cada cliente potencial y quién lo atiende" },
  { modulo: "Automatizaciones", que: "Flujos que se disparan por acciones del contacto o del equipo", uso: "Seguimiento, recordatorios y asignación sin trabajo manual" },
  { modulo: "Conversaciones", que: "Bandeja unificada de SMS, email, WhatsApp y redes sociales", uso: "Responder desde un solo lugar sin perder el historial" },
  { modulo: "Calendarios", que: "Agenda con reservas en línea y recordatorios", uso: "Que el cliente agende solo y llegue a la cita" },
  { modulo: "Embudos y sitios web", que: "Constructor de páginas, formularios y encuestas", uso: "Captar leads sin depender de otra herramienta" },
  { modulo: "Email marketing", que: "Campañas y secuencias de correo", uso: "Nutrir a los contactos que todavía no compran" },
  { modulo: "Reputación", que: "Solicitud y gestión de reseñas", uso: "Pedir reseñas de forma sistemática a clientes satisfechos" },
  { modulo: "Pagos y facturas", que: "Cobros, facturas y productos", uso: "Cobrar sin salir de la plataforma" },
];

const comparativa = [
  { criterio: "Enfoque", ghl: "Todo en una cuenta: CRM, embudos, agenda y mensajería", hubspot: "CRM maduro con módulos de marketing, ventas y servicio", kommo: "Ventas a través de chats y mensajería" },
  { criterio: "Modelo de precio", ghl: "Tarifa mensual plana con usuarios ilimitados", hubspot: "Por módulo, plan y número de usuarios", kommo: "Por usuario al mes" },
  { criterio: "Mejor para", ghl: "Pymes y agencias que quieren un solo sistema", hubspot: "Equipos de marketing y ventas estructurados", kommo: "Equipos que venden sobre todo por WhatsApp e Instagram" },
  { criterio: "Curva de aprendizaje", ghl: "Alta al inicio: muchas piezas que configurar", hubspot: "Moderada, con mucha documentación", kommo: "Baja para empezar" },
  { criterio: "Embudos y sitios web incluidos", ghl: "Sí", hubspot: "Sí, según el plan", kommo: "No es su foco" },
];

const noUsarlo = [
  "Tu empresa ya tiene HubSpot o Salesforce bien implementado y el equipo lo usa. Migrar por migrar no suma.",
  "No tienes a nadie que lo configure ni lo mantenga. Mal armado, se convierte en otra herramienta que nadie abre.",
  "Esperas que la plataforma ordene tu proceso comercial por sí sola. Automatiza lo que diseñes, no lo diseña por ti.",
];

type Faq = { q: string; a: string; extra?: ReactNode };

const faqs: Faq[] = [
  {
    q: "¿GoHighLevel está en español?",
    a: "La interfaz de las cuentas se puede configurar en español. Parte de la documentación, las plantillas y el soporte oficial siguen principalmente en inglés, así que conviene tenerlo en cuenta si tu equipo no se maneja en ese idioma.",
  },
  {
    q: "¿Cuánto cuesta GoHighLevel al mes?",
    a: `Los planes públicos van desde ${usd(97)} al mes (Starter) hasta ${usd(497)} al mes (Agency Pro), con opción anual y un plan Enterprise a medida. A eso se suma el uso de teléfono, SMS, email e IA, que se cobra aparte según consumo. Para una sola empresa, el plan Starter suele ser suficiente. Precios revisados el ${GHL_PRICING.revisadoElTexto}.`,
    extra: (
      <>
        {" "}Si quieres probarla, con nuestro enlace tienes {ghl.oferta.toLowerCase()} en lugar de la prueba estándar
        de {GHL_PRICING.pruebaEstandarDias} días:{" "}
        <AffiliateLink slug="gohighlevel" dataCta="ghl-afiliado-faq" className="text-[var(--accent)] font-semibold hover:underline">
          probar GoHighLevel
        </AffiliateLink>
        . <em className="not-italic text-[#727687]">Enlace de afiliado: JT Ads recibe una comisión sin costo adicional para ti.</em>
      </>
    ),
  },
  {
    q: "¿Sirve para empresas que no son agencias?",
    a: "Sí. Aunque nació pensada para agencias, muchas empresas la usan como su sistema comercial completo: un solo negocio ocupa una sub-cuenta y aprovecha el CRM, las automatizaciones, la agenda y la mensajería sin necesitar las funciones de agencia.",
  },
  {
    q: "¿Reemplaza a HubSpot?",
    a: "Depende de lo que uses de HubSpot. Si buscas CRM, automatizaciones, embudos y mensajería en una sola cuenta con tarifa plana, GoHighLevel cubre ese caso. Si tu equipo depende de reportes avanzados o del ecosistema de HubSpot, no conviene cambiar solo por precio.",
  },
  {
    q: "¿Se puede pagar GoHighLevel desde Colombia o México?",
    a: "Sí. Se paga con tarjeta internacional y se factura en dólares. Ten en cuenta la comisión de cambio de tu banco y los posibles impuestos locales a servicios digitales, que pueden encarecer el costo final respecto al precio publicado.",
  },
  {
    q: "¿Qué diferencia hay entre GoHighLevel y Omnix?",
    a: "Omnix es la plataforma que operamos en JT Ads, construida sobre GoHighLevel: comparte la misma base tecnológica, pero llega configurada, en español y con acompañamiento de nuestro equipo. Contratar GoHighLevel directo tiene sentido si prefieres implementarlo por tu cuenta.",
  },
  {
    q: "¿Puedo migrar mi CRM actual a GoHighLevel?",
    a: "Sí. Los contactos y oportunidades se importan, normalmente desde un archivo CSV. Los pipelines, las automatizaciones y las integraciones no se trasladan solos: hay que reconstruirlos, y es el momento ideal para corregir lo que no funcionaba.",
  },
];

const ctaPrimary =
  "inline-flex items-center justify-center gap-2 bg-[#0066ff] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#0050cb] transition-colors text-sm";
const ctaSecondaryDark =
  "inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm";

export default function GoHighLevelPage() {
  const serviceSchema = service({
    name: "Implementación de GoHighLevel en español",
    serviceType: "Implementación de GoHighLevel",
    description:
      "Implementación y configuración de GoHighLevel para empresas hispanohablantes: CRM, automatizaciones, calendarios, WhatsApp e integraciones, además de Omnix, plataforma construida sobre GoHighLevel.",
    path: PATH,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumb(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqPage(faqs)) }} />
      <Navbar />
      <main className="flex-1">

        {/* ── 1. Hero informativo ── sin enlace de afiliado */}
        <section className="bg-[#0a0a0a] pt-28 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={crumbs} tone="dark" />
            <div className="text-center mt-10">
              <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[var(--accent)]/20 text-[#9bb4fe] text-xs font-semibold tracking-widest uppercase">
                Guía de plataforma
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                GoHighLevel en español:{" "}
                <span className="text-[#9bb4fe]">qué es, qué resuelve y cuándo tiene sentido</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                GoHighLevel es una plataforma todo en uno que reúne CRM, automatizaciones, embudos, agenda y mensajería
                en una sola cuenta. Nació para agencias, pero cada vez más empresas la usan como su sistema comercial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#precios" className={ctaSecondaryDark}>
                  Ver precios ↓
                </a>
                <a href="#cuando-no" className={ctaSecondaryDark}>
                  Cuándo no conviene ↓
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Qué es GoHighLevel ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-4">En resumen</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-6">
              Qué es GoHighLevel
            </h2>
            <p className="text-[var(--text-primary)] text-lg leading-relaxed mb-6">
              <strong>GoHighLevel (también llamado HighLevel) es un software que combina CRM, automatización de
              marketing, embudos de venta, calendarios y una bandeja de mensajería unificada en una sola plataforma.</strong>{" "}
              Su propuesta es reemplazar cinco o seis herramientas sueltas por una cuenta con tarifa mensual plana y
              usuarios ilimitados.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-6">
              Se diseñó para agencias que gestionan varios clientes, por eso organiza todo en sub-cuentas: cada negocio
              vive en la suya, con sus contactos, flujos y configuraciones. Una empresa que la usa para sí misma
              simplemente trabaja en una sola sub-cuenta.
            </p>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              Lo que no hace es diseñar tu proceso comercial. Es una caja de herramientas muy completa: el resultado
              depende de cómo se configure. Por eso en JT Ads la tratamos como una pieza más de la{" "}
              <Link href="/soluciones/automatizacion-de-procesos" className="text-[var(--accent)] font-semibold hover:underline">
                automatización de procesos
              </Link>{" "}
              y de los{" "}
              <Link href="/soluciones/agentes-de-ia" className="text-[var(--accent)] font-semibold hover:underline">
                agentes de IA
              </Link>{" "}
              que implementamos, no como el objetivo en sí.
            </p>
          </div>
        </section>

        {/* ── 3. Qué incluye ── */}
        <section className="py-20 px-6 bg-[#fcf9f8]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4">
                Qué incluye GoHighLevel
              </h2>
              <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                Los módulos principales, qué hace cada uno y para qué le sirve a una empresa.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
              <table className="w-full min-w-[640px] text-left border-collapse">
                <thead>
                  <tr className="bg-[#f6f3f2]">
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#424656]">Módulo</th>
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#424656]">Qué hace</th>
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#424656]">Para qué sirve</th>
                  </tr>
                </thead>
                <tbody>
                  {modulos.map((m) => (
                    <tr key={m.modulo} className="border-t border-gray-100">
                      <th scope="row" className="p-5 font-semibold text-[#1c1b1b] text-sm">{m.modulo}</th>
                      <td className="p-5 text-sm text-[#424656]">{m.que}</td>
                      <td className="p-5 text-sm text-[#424656]">{m.uso}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 4. Precios explicados ── */}
        <section id="precios" className="py-20 px-6 bg-white scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4">
                Cuánto cuesta GoHighLevel
              </h2>
              <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                Precios públicos en {GHL_PRICING.moneda}, facturados por HighLevel. Revisados el{" "}
                {GHL_PRICING.revisadoElTexto} en su página oficial de precios.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {GHL_PRICING.planes.map((p) => (
                <article key={p.nombre} className="bg-[#fcf9f8] rounded-2xl p-6 border border-gray-100 flex flex-col">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{p.nombre}</h3>
                  {p.mensual !== null ? (
                    <p className="mb-5">
                      <span className="text-3xl font-bold text-[var(--text-primary)]">{usd(p.mensual)}</span>
                      <span className="text-sm text-[#727687]"> /mes</span>
                      <span className="block text-xs text-[#727687] mt-1">o {usd(p.anual)} al año</span>
                    </p>
                  ) : (
                    <p className="mb-5 text-2xl font-bold text-[var(--text-primary)]">A medida</p>
                  )}
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    {p.incluye.map((i) => (
                      <li key={i} className="leading-snug">· {i}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="max-w-3xl mx-auto space-y-5 text-[var(--text-secondary)] leading-relaxed">
              <p>
                <strong className="text-[var(--text-primary)]">Qué plan necesita una empresa.</strong> Para usar
                GoHighLevel en tu empresa, el plan Starter suele ser suficiente: ya incluye contactos y usuarios
                ilimitados. Los planes superiores tienen sentido cuando necesitas conectar la plataforma con otros
                sistemas por API o reportes más detallados por usuario.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Lo que se cobra aparte.</strong> Los mensajes SMS, los
                números de teléfono, los envíos de email y el uso avanzado de IA se cobran según consumo. Los empleados
                de IA se contratan como adicional: {GHL_PRICING.adicionales.map((a) => `${a.nombre} a ${a.precio}`).join(" y ")}.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">El costo real en Latinoamérica.</strong> El precio se
                factura en dólares con tarjeta internacional. Suma la comisión de cambio de tu banco y los impuestos
                locales a servicios digitales que apliquen en tu país.
              </p>
              <p>
                <strong className="text-[var(--text-primary)]">Prueba gratuita.</strong> HighLevel ofrece una prueba
                estándar de {GHL_PRICING.pruebaEstandarDias} días. Con nuestro enlace de afiliado la prueba es de{" "}
                {ghl.oferta.toLowerCase()}{" "}
                (<AffiliateLink slug="gohighlevel" dataCta="ghl-afiliado-precios" className="text-[var(--accent)] font-semibold hover:underline">
                  ver la oferta
                </AffiliateLink>
                ; JT Ads recibe una comisión sin costo adicional para ti).
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. GoHighLevel vs HubSpot vs Kommo ── */}
        <section className="py-20 px-6 bg-[#fcf9f8]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4">
                GoHighLevel vs HubSpot vs Kommo
              </h2>
              <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                Una comparativa orientativa, sin precios de terceros que cambian cada trimestre. La mejor opción depende
                de cómo vende tu equipo, no de cuál tiene más funciones.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm bg-white">
              <table className="w-full min-w-[720px] text-left border-collapse">
                <thead>
                  <tr className="bg-[#f6f3f2]">
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#424656]">Criterio</th>
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#294487] bg-[#eff4ff]">GoHighLevel</th>
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#424656]">
                      <Link href="/soluciones/hubspot" className="hover:text-[var(--accent)] underline underline-offset-2">
                        HubSpot
                      </Link>
                    </th>
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#424656]">Kommo</th>
                  </tr>
                </thead>
                <tbody>
                  {comparativa.map((row) => (
                    <tr key={row.criterio} className="border-t border-gray-100">
                      <th scope="row" className="p-5 font-medium text-[#1c1b1b] text-sm">{row.criterio}</th>
                      <td className="p-5 text-sm text-[#1c1b1b] bg-[#eff4ff]/40">{row.ghl}</td>
                      <td className="p-5 text-sm text-[#424656]">{row.hubspot}</td>
                      <td className="p-5 text-sm text-[#424656]">{row.kommo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 6. Cuándo NO usarlo ── */}
        <section id="cuando-no" className="py-20 px-6 bg-white scroll-mt-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4">
              Cuándo no conviene usar GoHighLevel
            </h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-8">
              Es una buena plataforma, pero no es para todos. No te la recomendaríamos si:
            </p>
            <ul className="space-y-4">
              {noUsarlo.map((item) => (
                <li key={item} className="flex items-start gap-3 bg-[#fcf9f8] rounded-xl p-5 border border-gray-100">
                  <span className="w-5 h-5 rounded-full bg-[#a33200]/10 text-[#a33200] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold" aria-hidden="true">
                    ✕
                  </span>
                  <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 7 + 8. Bisagra DIY / servicio ──
            Dos perfiles, dos salidas: el afiliado para quien quiere implementarlo solo,
            Omnix y el diagnóstico para quien quiere que se lo dejen funcionando. */}
        <section className="py-20 px-6 bg-[#0a0a0a]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                ¿Prefieres implementarlo por tu cuenta o que te lo dejemos funcionando?
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Las dos opciones son válidas. Depende del tiempo y del equipo que tengas para configurarlo.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 flex flex-col">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">Por tu cuenta</p>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Probar GoHighLevel directo</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  Si tienes tiempo y ganas de aprender la plataforma, empieza con la prueba gratuita y el bootcamp de
                  implementación de HighLevel. Con nuestro enlace tienes {ghl.oferta.toLowerCase()}, en lugar de la prueba
                  estándar de {GHL_PRICING.pruebaEstandarDias} días.
                </p>
                <p className="text-xs text-[#727687] leading-relaxed mb-6 bg-[#f6f3f2] rounded-lg p-4">
                  Si contratas GoHighLevel con nuestro enlace, JT Ads recibe una comisión sin costo adicional para ti. Lo
                  recomendamos porque lo usamos: Omnix está construido sobre esta plataforma.
                </p>
                <AffiliateLink slug="gohighlevel" dataCta="ghl-afiliado" className={`${ctaPrimary} mt-auto`}>
                  Probar GoHighLevel 30 días gratis
                </AffiliateLink>
              </div>

              <div className="bg-white rounded-2xl p-8 flex flex-col">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">Con implementación</p>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Omnix, configurado para tu operación</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  Omnix es nuestra plataforma de CRM con IA, construida sobre GoHighLevel: CRM, automatización, WhatsApp
                  API, agentes con IA y bandeja unificada en un solo lugar, en español y con acompañamiento de nuestro
                  equipo. Más de 2.400 negocios activos en LATAM.
                </p>
                {/* TODO(omnix): diferenciales concretos y precio de Omnix frente a GoHighLevel directo. No inventar. */}
                <div className="mt-auto flex flex-col gap-3">
                  <Link href="/diagnostico-operacion" data-cta="diag-operacion-ghl-medio" className={ctaPrimary}>
                    Diagnóstico gratuito de tu operación
                  </Link>
                  <a
                    href="https://omnixapp.one"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="omnix-ghl"
                    className="text-center text-sm font-semibold text-[var(--accent)] hover:underline"
                  >
                    Conocer Omnix →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. Implementación ── */}
        <section className="py-20 px-6 bg-[#fcf9f8]">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
                ¿Ya tienes GoHighLevel y no lo estás aprovechando?
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                Es el caso más común: la cuenta existe, pero el equipo sigue trabajando en hojas de cálculo y WhatsApp
                personal. Revisamos lo que hay y lo dejamos funcionando sobre tu proceso real.
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                {[
                  "Auditoría de la cuenta y de los flujos existentes",
                  "Pipelines y etapas modelados sobre tu proceso de venta",
                  "Automatizaciones de seguimiento y asignación",
                  "Conexión de WhatsApp y de tus formularios",
                  "Integración con Google Ads y Meta para medir ventas reales",
                  "Capacitación para que el equipo lo use a diario",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold" aria-hidden="true">✓</span>
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[var(--text-secondary)]">
                Es parte de nuestra{" "}
                <Link href="/soluciones" className="text-[var(--accent)] font-semibold hover:underline">
                  vertical de automatización e IA
                </Link>
                , que también trabaja sobre{" "}
                <Link href="/soluciones/hubspot" className="text-[var(--accent)] font-semibold hover:underline">
                  HubSpot
                </Link>{" "}
                y otras plataformas.{" "}
                <Link href="/soluciones/stack" className="text-[var(--accent)] font-semibold hover:underline">
                  El stack completo con el que trabajamos →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ── 10. FAQ ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-10 text-center">
              Preguntas frecuentes sobre GoHighLevel
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
              GoHighLevel y HighLevel son marcas de HighLevel Inc. JT Ads no es parte ni representante oficial de
              HighLevel; esta página es una guía independiente.
            </p>
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="relative overflow-hidden py-24 px-6 bg-[#0a0a0a]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--accent)]/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">
                Antes de elegir plataforma, define qué tiene que resolver.
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                En el diagnóstico mapeamos tu operación y te decimos si GoHighLevel, Omnix u otra herramienta es la
                adecuada para tu caso, trabajes o no con nosotros.
              </p>
              <Link href="/diagnostico-operacion" data-cta="diag-operacion-ghl-final" className={`${ctaPrimary} w-full sm:w-auto`}>
                Diagnóstico gratuito de tu operación
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
