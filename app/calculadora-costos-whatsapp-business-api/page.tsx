import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "../soluciones/_components/Breadcrumbs";
import CalculadoraWhatsApp from "./_components/CalculadoraWhatsApp";
import { WHATSAPP_PRICING as P } from "@/lib/whatsapp-pricing";
import { absoluteUrl, breadcrumb, faqPage, toJsonLd, type Crumb } from "@/lib/schema";

const PATH = "/calculadora-costos-whatsapp-business-api";
const URL = absoluteUrl(PATH);

export const metadata: Metadata = {
  title: "Calculadora de Costos de WhatsApp Business API 2026",
  description:
    "Calcula cuánto te cobra Meta al mes por WhatsApp Business API con las tarifas oficiales por país vigentes desde el 1 de octubre de 2026. Gratis, sin registro.",
  alternates: { canonical: URL, languages: { es: URL } },
  openGraph: {
    title: "Calculadora de Costos de WhatsApp Business API 2026",
    description:
      "Tarifas oficiales de Meta por país, nivel gratuito de mensajes de servicio y Meta Business Agent, en una sola estimación mensual.",
    images: ["/og-image.png"],
    url: URL,
  },
};

const crumbs: Crumb[] = [
  { name: "Inicio", path: "" },
  { name: "Calculadora de costos de WhatsApp Business API", path: PATH },
];

const faqs = [
  {
    q: "¿Meta cobra por los mensajes que me escriben los clientes?",
    a: "No. Solo se cobran los mensajes que tu empresa entrega al usuario. Los que el usuario te envía no tienen costo, y además abren o reinician la ventana de servicio al cliente de 24 horas.",
  },
  {
    q: "¿Qué cambió el 1 de octubre de 2026?",
    a: "Cuatro cosas: los mensajes de servicio pasan a cobrarse a la misma tarifa que utilidad y autenticación; los mensajes de utilidad enviados dentro de la ventana de 24 horas dejan de ser gratis; aparece un nivel gratuito de 1.000 mensajes de servicio por número al mes; y sin método de pago Meta deja de entregar mensajes de servicio cuando ese nivel se agota.",
  },
  {
    q: "¿El nivel gratuito de 1.000 mensajes se acumula de un mes a otro?",
    a: "No. Se reinicia cada mes y lo que no uses se pierde. Es por número de teléfono de la empresa, así que dos números dan 2.000 mensajes de servicio gratis al mes, y se reparte entre envíos individuales y de grupo.",
  },
  {
    q: "¿Por qué los mensajes que vienen de anuncios salen gratis?",
    a: "Los anuncios de clic a WhatsApp abren la ventana de punto de entrada gratuito. Dentro de esa ventana Meta no cobra la entrega de ninguna de las categorías. La excepción es Meta Business Agent, que cobra tokens también ahí.",
  },
  {
    q: "¿Por qué la calculadora no aplica descuentos por volumen?",
    a: "Porque Meta no publica los umbrales ni los porcentajes en un formato que podamos citar. Los descuentos existen para utilidad y autenticación, así que tu factura real puede ser algo menor que esta estimación. Para mensajes de servicio Meta confirmó que no hay niveles de volumen.",
  },
  {
    q: "¿En qué moneda factura Meta?",
    a: "En dólares para la mayoría de las cuentas, que es la moneda de esta calculadora. Brasil e India tienen facturación localizada en moneda propia, con su propio tarifario.",
  },
];

const ctaPrimary =
  "inline-flex items-center justify-center gap-2 bg-[#0066ff] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#0050cb] transition-colors text-sm";

const tarifa = (n: number) => `$${n.toLocaleString("es-CO", { minimumFractionDigits: 4, maximumFractionDigits: 4 })}`;

export default function CalculadoraPage() {
  const webApp = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de costos de WhatsApp Business API",
    url: URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    isAccessibleForFree: true,
    inLanguage: "es",
    description:
      "Estimador del costo mensual de WhatsApp Business API con las tarifas oficiales de Meta por país vigentes desde el 1 de octubre de 2026.",
    provider: { "@id": "https://jtads.com/#organization" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumb(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(webApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqPage(faqs)) }} />
      <Navbar />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="bg-[#0a0a0a] pt-28 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={crumbs} tone="dark" />
            <div className="text-center mt-10">
              <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[var(--accent)]/20 text-[#9bb4fe] text-xs font-semibold tracking-widest uppercase">
                Herramienta gratuita
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Calculadora de costos de WhatsApp Business API{" "}
                <span className="text-[#9bb4fe]">con las tarifas de octubre de 2026</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Meta cambió la forma de cobrar. Pon tu volumen y tu país y mira cuánto pagas al mes,
                cuánto te ahorra la ventana gratuita de los anuncios y cuánto sube tu factura frente a las reglas anteriores.
              </p>
            </div>
          </div>
        </section>

        {/* ── Calculadora ── */}
        <section className="py-14 px-6 bg-[#fcf9f8] border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <CalculadoraWhatsApp />
          </div>
        </section>

        {/* ── En resumen ── bloque autocontenido que citan buscadores e IA generativas */}
        <section className="py-14 px-6 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-4">En resumen</p>
            <p className="text-[var(--text-primary)] text-lg leading-relaxed">
              <strong>
                WhatsApp Business API se cobra por mensaje entregado, y la tarifa depende de la categoría del mensaje
                y del país de quien lo recibe.
              </strong>{" "}
              Hay cuatro categorías de cobro: marketing, utilidad, autenticación y servicio. Desde el{" "}
              {P.vigenteDesdeTexto} Meta cobra también los mensajes de servicio y los de utilidad enviados dentro de la
              ventana de 24 horas, con un nivel gratuito de {P.servicioGratisPorNumero.toLocaleString("es-CO")} mensajes
              de servicio por número de teléfono al mes. Los mensajes que el usuario envía nunca se cobran, y los que
              caen dentro de la ventana de punto de entrada gratuito que abren los anuncios de clic a WhatsApp tampoco.
              En Colombia un mensaje de marketing cuesta {tarifa(P.mercados.co.marketing)} y uno de utilidad{" "}
              {tarifa(P.mercados.co.utilidad)}; en México, {tarifa(P.mercados.mx.marketing)} y{" "}
              {tarifa(P.mercados.mx.utilidad)}.
            </p>
          </div>
        </section>

        {/* ── Tabla de tarifas ── renderizada en servidor: es lo que se indexa */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4">
                Tarifas oficiales por país
              </h2>
              <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
                Costo por mensaje entregado en {P.moneda}, vigente desde el {P.vigenteDesdeTexto}. La columna de
                servicio es nueva: hasta el {P.anterior.vigenteHastaTexto} esos mensajes no se cobraban.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full min-w-[560px] text-left border-collapse">
                <thead>
                  <tr className="bg-[#f6f3f2]">
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#424656]">Mercado</th>
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#424656]">Marketing</th>
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#424656]">Utilidad</th>
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#424656]">Autenticación</th>
                    <th scope="col" className="p-5 text-xs font-bold uppercase tracking-wider text-[#294487] bg-[#eff4ff]">Servicio</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(P.mercados).map(([id, m]) => (
                    <tr key={id} className="border-t border-gray-100">
                      <th scope="row" className="p-5 font-medium text-[#1c1b1b] text-sm">{m.nombre}</th>
                      <td className="p-5 text-sm tabular-nums text-[#424656]">{tarifa(m.marketing)}</td>
                      <td className="p-5 text-sm tabular-nums text-[#424656]">{tarifa(m.utilidad)}</td>
                      <td className="p-5 text-sm tabular-nums text-[#424656]">{tarifa(m.autenticacion)}</td>
                      <td className="p-5 text-sm tabular-nums font-semibold text-[#0066ff] bg-[#eff4ff]/40">{tarifa(m.servicio)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-[#727687] text-center">
              Revisadas el {P.revisadoElTexto} en el{" "}
              <a href={P.fuente} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] font-semibold hover:underline">
                tarifario oficial de Meta
              </a>
              . Meta puede actualizarlas hasta cuatro veces al año, el primer día de cada trimestre.
            </p>
          </div>
        </section>

        {/* ── Cómo se calcula ── */}
        <section className="py-20 px-6 bg-[#fcf9f8]">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-12 text-center">
              Cómo se calcula
            </h2>
            <ol className="grid md:grid-cols-3 gap-6">
              {[
                {
                  n: "01",
                  title: "Se reparte tu volumen",
                  body: "Cada mensaje cae en una categoría y cada categoría tiene su tarifa. El servicio es el resto: lo que respondes dentro de la ventana de 24 horas.",
                },
                {
                  n: "02",
                  title: "Se descuenta lo gratuito",
                  body: `Primero la ventana que abren los anuncios de clic a WhatsApp, y después el nivel gratuito de ${P.servicioGratisPorNumero.toLocaleString("es-CO")} mensajes de servicio por número.`,
                },
                {
                  n: "03",
                  title: "Se multiplica por la tarifa del país",
                  body: "Con las cifras oficiales de Meta. Si respondes con Meta Business Agent, el cargo pasa a ser por tokens en lugar de por mensaje de servicio.",
                },
              ].map((p) => (
                <li key={p.n} className="bg-white rounded-2xl p-7 border border-gray-100">
                  <span className="block text-sm font-bold text-[var(--accent)] mb-3">{p.n}</span>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{p.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-center text-[var(--text-secondary)]">
              El detalle de qué cambió y por qué está en{" "}
              <Link href="/soluciones/agentes-de-ia" className="text-[var(--accent)] font-semibold hover:underline">
                cómo implementamos agentes de IA en WhatsApp
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-10 text-center">
              Preguntas frecuentes sobre los costos de WhatsApp
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

        {/* ── CTA final ── */}
        <section className="relative overflow-hidden py-24 px-6 bg-[#0a0a0a]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--accent)]/20 blur-[120px] rounded-full pointer-events-none" />
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">
                La tarifa es lo barato. Lo caro es mandar mensajes que nadie contesta.
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                En el diagnóstico revisamos por dónde entran tus conversaciones, cuáles podrían nacer de un anuncio y
                caer en la ventana gratuita, y qué parte de la atención puede resolver un agente.
              </p>
              <Link href="/diagnostico-operacion" data-cta="diag-operacion-calculadora-final" className={`${ctaPrimary} w-full sm:w-auto`}>
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
