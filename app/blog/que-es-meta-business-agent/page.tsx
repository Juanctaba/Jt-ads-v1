import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WHATSAPP_PRICING as P } from "@/lib/whatsapp-pricing";
import { breadcrumb, faqPage, toJsonLd, absoluteUrl, type Crumb } from "@/lib/schema";

const PATH = "/blog/que-es-meta-business-agent";
const URL = absoluteUrl(PATH);
const TITLE = "Qué es Meta Business Agent y cómo te lo cobran por tokens";
const SEO_TITLE = "Meta Business Agent: qué es, cuánto cuesta y si es gratis";
const DESC =
  "Meta Business Agent cobra por tokens: $2 USD por millón, unos 4 a 5 centavos por respuesta. Qué es, si es gratis y cuándo conviene frente a tu propia IA.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESC,
  alternates: { canonical: URL, languages: { es: URL } },
  openGraph: {
    title: SEO_TITLE,
    description: DESC,
    images: ["/opengraph-image"],
    url: URL,
  },
};

const crumbs: Crumb[] = [
  { name: "Inicio", path: "" },
  { name: "Blog", path: "/blog" },
  { name: "Qué es Meta Business Agent", path: PATH },
];

const faqs = [
  {
    q: "¿Meta Business Agent se suma al cargo por mensaje de servicio?",
    a: "No. Meta lo dice explícitamente: un mensaje sin plantilla se cobra como mensaje de Meta Business Agent o como mensaje de servicio, nunca como ambos. Solo se aplica un cargo por mensaje.",
  },
  {
    q: "¿Cuántos tokens consume una respuesta?",
    a: "Meta estima entre 20.000 y 25.000 tokens por mensaje, lo que equivale a unos 4 o 5 centavos de dólar. Las respuestas simples consumen menos y las conversaciones complejas más, así que el costo varía dentro de esa franja.",
  },
  {
    q: "¿Se cobran los tokens de caché?",
    a: "No. Meta cobra solo los tokens de entrada y de salida.",
  },
  {
    q: "¿Los mensajes que entran por anuncios salen gratis con Meta Business Agent?",
    a: "La entrega sí es gratuita dentro de la ventana de punto de entrada gratuito, pero el cargo por tokens de Meta Business Agent se aplica igual. Es la única categoría a la que esa ventana no exime.",
  },
  {
    q: "¿Necesito método de pago para usarlo?",
    a: "Sí. Desde el 1 de agosto de 2026 Meta requiere un método de pago registrado para entregar mensajes de Meta Business Agent.",
  },
];

const P_ = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-bold text-2xl text-[#1c1b1b] mt-12 mb-4";

export default function PostMBA() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description: DESC,
    author: {
      "@type": "Person",
      name: "Juan Tabares",
      url: "https://www.linkedin.com/in/juan-tabares-b1272b58/",
    },
    publisher: {
      "@type": "Organization",
      name: "JT Ads",
      logo: { "@type": "ImageObject", url: "https://jtads.com/logo-blue.png" },
    },
    datePublished: "2026-09-29",
    dateModified: "2026-09-29",
    image: "https://jtads.com/opengraph-image",
    url: URL,
    inLanguage: "es",
    about: ["Meta Business Agent", "WhatsApp Business API", "Precios por tokens", "Agentes de IA"],
    citation: [P.fuente],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumb(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqPage(faqs)) }} />
      <Navbar />

      <section className="bg-[#1c1b1b] pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#9bb4fe] text-sm mb-8 hover:underline">
            ← Volver al blog
          </Link>
          <span className="inline-block mb-5 px-3 py-1 rounded-full bg-[#9bb4fe]/20 text-[#9bb4fe] text-xs font-semibold uppercase tracking-wide">
            WhatsApp
          </span>
          <h1 className="font-bold text-white text-3xl md:text-4xl leading-tight mb-6">
            Qué es Meta Business Agent y cómo te lo cobran por tokens
          </h1>
          <p className="text-[#727687] text-sm">Septiembre 2026 · 7 min de lectura</p>
        </div>
      </section>

      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <p className={P_}>
            Hasta hace poco, WhatsApp tenía cuatro categorías de mensaje y todas se cobraban igual: por mensaje
            entregado. Meta Business Agent rompe ese esquema. Es una categoría nueva, existe desde julio de 2026 y
            desde el {P.mba.desdeTexto} se factura de otra forma: por tokens consumidos, como cobran los modelos de
            lenguaje.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">En resumen</p>
            <p className="text-[#424656] text-sm leading-relaxed">
              <strong className="text-[#1c1b1b]">
                Meta Business Agent es una categoría de mensaje sin plantilla de WhatsApp, impulsada por la plataforma
                de agentes de Meta, que se cobra por tokens en lugar de por mensaje.
              </strong>{" "}
              La tarifa es de {P.mba.usdPorMillonTokens.toFixed(2)} USD por millón de tokens, y Meta estima entre{" "}
              {P.mba.tokensMin.toLocaleString("es-CO")} y {P.mba.tokensMax.toLocaleString("es-CO")} tokens por mensaje,
              es decir entre 4 y 5 centavos de dólar por respuesta. El cargo cubre el procesamiento del agente y la
              entrega, solo se cuentan los tokens de entrada y salida, y sustituye al cargo de mensaje de servicio: un
              mensaje sin plantilla se cobra como uno o como el otro, nunca como ambos. Solo puede enviarse dentro de
              la ventana de servicio al cliente de 24 horas.
            </p>
          </div>

          <h2 className={H2}>Qué cambia respecto a un agente propio</h2>
          <p className={P_}>
            Si hoy respondes con tu propia IA conectada a la API, pagas dos cosas por separado: lo que te cobra tu
            proveedor de modelo y lo que te cobra Meta por entregar el mensaje, que desde el{" "}
            {P.vigenteDesdeTexto} ya no es gratis. Con Meta Business Agent hay un solo cargo, calculado sobre los
            tokens, que incluye ambas partes.
          </p>
          <p className={P_}>
            Eso no significa que sea más barato. Significa que la comparación cambia de forma: pasas de sumar dos
            facturas a mirar una sola, y el resultado depende de qué tan complejas sean tus conversaciones.
          </p>

          <h2 className={H2}>La comparación que publica Meta</h2>
          <p className={P_}>
            Meta publicó un ejemplo con 1.000 respuestas a usuarios en Brasil. Lo reproducimos tal como lo presenta,
            porque es su estimación y no la nuestra: las cifras de las soluciones de terceros son aproximaciones que
            Meta basa en referencias públicas.
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#c2c6d8]/15 my-8">
            <table className="w-full min-w-[480px] text-left border-collapse">
              <thead>
                <tr className="bg-[#f6f3f2]">
                  <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Escenario</th>
                  <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Costo de IA por mensaje</th>
                  <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Total por 1.000</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#c2c6d8]/15">
                  <th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b]">IA de terceros, baja complejidad</th>
                  <td className="p-4 text-sm text-[#424656]">~2 centavos</td>
                  <td className="p-4 text-sm tabular-nums text-[#424656]">~$27</td>
                </tr>
                <tr className="border-t border-[#c2c6d8]/15">
                  <th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b]">IA de terceros, alta complejidad</th>
                  <td className="p-4 text-sm text-[#424656]">~9 centavos</td>
                  <td className="p-4 text-sm tabular-nums text-[#424656]">~$97</td>
                </tr>
                <tr className="border-t border-[#c2c6d8]/15">
                  <th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b]">Meta Business Agent</th>
                  <td className="p-4 text-sm text-[#424656]">~4 a 5 centavos</td>
                  <td className="p-4 text-sm tabular-nums text-[#424656]">~$40 a $50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={P_}>
            En los dos primeros escenarios hay que sumar además la entrega del mensaje, que en Brasil es de{" "}
            {P.mercados.br.servicio.toFixed(4)} USD. Meta lo señala en su propia nota: comparar servicio con Meta
            Business Agent no es comparar lo mismo, porque una empresa que usa IA de terceros tiene costos que no
            aparecen en la factura de Meta.
          </p>

          <h2 className={H2}>Dónde está el detalle que conviene mirar</h2>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">El cargo por tokens no perdona la ventana gratuita.</strong> Cuando una
            conversación nace de un anuncio de clic a WhatsApp, la entrega no se cobra en ninguna categoría. Meta
            Business Agent es la excepción: los tokens se pagan igual. Si buena parte de tu volumen entra por anuncios,
            esa diferencia pesa. Pasa sobre todo con campañas de clic a WhatsApp en{" "}
            <Link href="/agencia-meta-ads-latam" className="text-[#0066ff] font-semibold hover:underline">
              Instagram Ads y Facebook Ads
            </Link>
            .
          </p>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">El costo depende de la conversación, no del plan.</strong> Una consulta
            de horarios consume mucho menos que resolver un problema en varios pasos. Pagas proporcional a lo que
            resuelves, que es bueno para la previsibilidad de las respuestas simples y menos previsible para el resto.
          </p>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">Sigue siendo un mensaje dentro de la ventana.</strong> No sirve para
            contactar a alguien en frío: para eso siguen haciendo falta plantillas.
          </p>

          <h2 className={H2}>Entonces, ¿conviene?</h2>
          <p className={P_}>
            Depende de dos cosas que solo tú sabes: qué tan complejas son tus conversaciones y cuánto control necesitas
            sobre el comportamiento del agente. Un agente propio te deja definir criterios de calificación, conectarlo a
            tu CRM y cambiar la lógica cuando el negocio cambia. Meta Business Agent simplifica la factura y quita
            trabajo de implementación.
          </p>
          <p className={P_}>
            Nosotros implementamos{" "}
            <Link href="/soluciones/agentes-de-ia" className="text-[#0066ff] font-semibold hover:underline">
              agentes conversacionales conectados al CRM
            </Link>{" "}
            porque la calificación del lead y el registro en la ficha del contacto suelen ser el punto que decide si el
            canal sirve para vender. Si lo tuyo es solo responder preguntas frecuentes, la ecuación es distinta.
          </p>
          <p className={P_}>
            Para ver el efecto en tu factura, la{" "}
            <Link href="/calculadora-costos-whatsapp-business-api" className="text-[#0066ff] font-semibold hover:underline">
              calculadora de costos
            </Link>{" "}
            tiene una casilla para Meta Business Agent y calcula los dos escenarios con tu volumen.
          </p>

          <h2 className={H2}>Preguntas frecuentes</h2>
          <div className="space-y-4 mb-10">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-[#f6f3f2] rounded-xl border border-[#c2c6d8]/15 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                  <span className="font-semibold text-[#1c1b1b] text-sm">{f.q}</span>
                  <svg
                    className="w-5 h-5 text-[#0066ff] shrink-0 transition-transform group-open:rotate-180"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-5 text-sm leading-relaxed text-[#424656]">{f.a}</p>
              </details>
            ))}
          </div>

          <p className="text-xs text-[#727687] leading-relaxed mb-10">
            Datos y ejemplo de costos verificados el {P.revisadoElTexto} en la{" "}
            <a href={P.fuente} target="_blank" rel="noopener noreferrer" className="text-[#0066ff] font-semibold hover:underline">
              documentación de precios de Meta
            </a>
            .
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p className="text-[#1c1b1b] font-bold text-lg mb-3">¿Agente propio o el de Meta?</p>
            <p className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed">
              En el diagnóstico revisamos qué tan complejas son tus conversaciones, qué necesitas registrar en el CRM y
              cuál de los dos caminos sale mejor con tu volumen.
            </p>
            <Link
              href="/diagnostico-operacion"
              data-cta="diag-operacion-mba-final"
              className="inline-block bg-[#0066ff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0052cc] transition-colors duration-150 text-sm"
            >
              Diagnóstico gratuito de tu operación →
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-[#fcf9f8] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#727687] mb-4">Lee también</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog/nuevos-costos-whatsapp-business-api-octubre-2026"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">WhatsApp</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">
                Nuevos costos de WhatsApp Business API desde octubre de 2026
              </p>
            </Link>
            <Link
              href="/soluciones/agentes-de-ia"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Servicios</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">
                Agentes de IA que atienden y califican en WhatsApp
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
