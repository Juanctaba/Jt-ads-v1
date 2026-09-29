import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WHATSAPP_PRICING as P } from "@/lib/whatsapp-pricing";
import { breadcrumb, faqPage, toJsonLd, absoluteUrl, type Crumb } from "@/lib/schema";

const PATH = "/blog/nuevos-costos-whatsapp-business-api-octubre-2026";
const URL = absoluteUrl(PATH);
const TITLE = "Nuevos costos de WhatsApp Business API: qué cambia el 1 de octubre de 2026";
const SEO_TITLE = "Nuevos costos de WhatsApp Business API desde octubre";
const DESC =
  "Meta cobra los mensajes de servicio y deja de regalar los de utilidad en la ventana de 24 horas. Qué cambia en tu factura desde el 1 de octubre de 2026.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESC,
  alternates: { canonical: URL, languages: { es: URL } },
  openGraph: {
    title: SEO_TITLE,
    description:
      "Cuatro cambios en la facturación de WhatsApp, uno de ellos a tu favor. Explicados con la documentación oficial de Meta y la fecha de cada uno.",
    images: ["/og-image.png"],
    url: URL,
  },
};

const crumbs: Crumb[] = [
  { name: "Inicio", path: "" },
  { name: "Blog", path: "/blog" },
  { name: "Nuevos costos de WhatsApp Business API", path: PATH },
];

const faqs = [
  {
    q: "¿El nivel gratuito de 1.000 mensajes de servicio se acumula?",
    a: "No. Se reinicia cada mes y lo que no uses se pierde. Meta lo dice explícitamente: 1.000 en octubre sin acumulación, 1.000 en noviembre sin acumulación.",
  },
  {
    q: "¿El nivel gratuito es por cuenta o por número de teléfono?",
    a: "Por número de teléfono de la empresa. Si tienes tres números, tienes 3.000 mensajes de servicio gratis al mes. Se comparte entre las entregas individuales y las de grupo: una entrega individual consume una unidad y un envío grupal consume una por cada destinatario que lo recibe.",
  },
  {
    q: "¿Hay descuentos por volumen para los mensajes de servicio?",
    a: "No. Meta confirmó que no habrá niveles de volumen para servicio. Los descuentos por volumen siguen existiendo para los mensajes de utilidad y de autenticación.",
  },
  {
    q: "¿Qué pasa si no tengo método de pago registrado?",
    a: "Desde el 1 de octubre de 2026 Meta entrega los mensajes de servicio que caben en el nivel gratuito, pero deja de entregarlos una vez agotado. Si tu operación responde por WhatsApp, esto significa que las respuestas dejan de salir a mitad de mes.",
  },
  {
    q: "¿Me siguen cobrando los mensajes que me escriben los clientes?",
    a: "Nunca se han cobrado y siguen sin cobrarse. Meta factura solo los mensajes que tu empresa entrega, y solo cuando se entregan. Los mensajes del usuario además abren o reinician la ventana de servicio al cliente de 24 horas.",
  },
];

const P_ = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-bold text-2xl text-[#1c1b1b] mt-12 mb-4";

const cambios = [
  {
    titulo: "Los mensajes de servicio pasan a cobrarse",
    detalle:
      "Son las respuestas sin plantilla que envías dentro de la ventana de 24 horas: las que escribe tu equipo o tu chatbot cuando un cliente pregunta algo. No se cobraban desde el 1 de noviembre de 2024. Ahora cuestan lo mismo que un mensaje de utilidad o de autenticación en ese mercado.",
    signo: "sube",
  },
  {
    titulo: "Los mensajes de utilidad dentro de la ventana dejan de ser gratis",
    detalle:
      "Desde julio de 2025, si enviabas una plantilla de utilidad respondiendo a un cliente dentro de la ventana de 24 horas, no pagabas. Ese beneficio desaparece: ahora se cobra igual que si la enviaras en frío.",
    signo: "sube",
  },
  {
    titulo: "Aparece un nivel gratuito de mensajes de servicio",
    detalle:
      "Cada número de teléfono de la empresa recibe 1.000 mensajes de servicio entregados gratis al mes. No se acumula y se reinicia cada mes. Es el único cambio a favor del anunciante.",
    signo: "baja",
  },
  {
    titulo: "Sin método de pago, Meta deja de entregar",
    detalle:
      "Al agotarse el nivel gratuito, las cuentas sin método de pago registrado dejan de entregar mensajes de servicio. No es un cobro: es una interrupción del canal.",
    signo: "riesgo",
  },
];

export default function PostNuevosCostos() {
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
    image: "https://jtads.com/og-image.png",
    url: URL,
    inLanguage: "es",
    about: ["WhatsApp Business API", "Precios de Meta", "Mensajes de servicio", "Facturación"],
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
            Nuevos costos de WhatsApp Business API: qué cambia el 1 de octubre de 2026
          </h1>
          <p className="text-[#727687] text-sm">Septiembre 2026 · 7 min de lectura</p>
        </div>
      </section>

      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <p className={P_}>
            Meta anunció cuatro cambios en cómo factura WhatsApp y todos entran a la vez, el {P.vigenteDesdeTexto}.
            Tres encarecen la operación y uno la abarata. Si tu empresa responde mensajes por WhatsApp, el tercero y el
            cuarto son los que más te van a afectar, y el cuarto ni siquiera es un cobro.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">En resumen</p>
            <p className="text-[#424656] text-sm leading-relaxed">
              <strong className="text-[#1c1b1b]">
                Desde el {P.vigenteDesdeTexto} Meta cobra los mensajes de servicio de WhatsApp a la misma tarifa por
                mercado que los de utilidad y autenticación, y deja de regalar los mensajes de utilidad enviados dentro
                de la ventana de servicio al cliente de 24 horas.
              </strong>{" "}
              A cambio introduce un nivel gratuito de {P.servicioGratisPorNumero.toLocaleString("es-CO")} mensajes de
              servicio entregados por número de teléfono de la empresa al mes, que no se acumula y se reinicia cada
              mes. Las cuentas sin método de pago registrado dejan de entregar mensajes de servicio al agotar ese
              nivel. El cobro se aplica a la entrega, no al envío, y los mensajes que escriben los usuarios siguen sin
              costo.
            </p>
          </div>

          <h2 className={H2}>Los cuatro cambios</h2>

          {cambios.map((c, i) => (
            <div key={c.titulo} className="mb-8">
              <h3 className="font-bold text-lg text-[#1c1b1b] mb-2 flex items-start gap-3">
                <span
                  className={`mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    c.signo === "baja"
                      ? "bg-[#16704a]/10 text-[#16704a]"
                      : c.signo === "riesgo"
                      ? "bg-[#a33200]/10 text-[#a33200]"
                      : "bg-[#b23a26]/10 text-[#b23a26]"
                  }`}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                {c.titulo}
              </h3>
              <p className={P_}>{c.detalle}</p>
            </div>
          ))}

          <h2 className={H2}>Qué sigue siendo gratis</h2>
          <p className={P_}>
            Los mensajes que te escriben los clientes no se cobran, y cada uno abre o reinicia la ventana de 24 horas.
            Tampoco se cobra la entrega dentro de la ventana de punto de entrada gratuito, la que abren los anuncios de
            clic a WhatsApp: ahí Meta marca como gratuitas las cuatro categorías de entrega. Es el argumento más
            concreto para mover parte de la captación a ese formato de anuncio en lugar de escribir en frío.
          </p>
          <p className={P_}>
            La excepción es Meta Business Agent, la categoría que Meta cobra por tokens desde el{" "}
            {P.mba.desdeTexto}: ahí el cargo aplica también dentro de la ventana gratuita.
          </p>

          <h2 className={H2}>Dos cosas que cambian junto con esto</h2>
          <p className={P_}>
            Si respondes con un agente de IA, el cargo que aplica no es el de servicio sino el de{" "}
            <Link href="/blog/que-es-meta-business-agent" className="text-[#0066ff] font-semibold hover:underline">
              Meta Business Agent, que se factura por tokens
            </Link>{" "}
            y sustituye al de servicio en lugar de sumarse. Y para los mensajes de utilidad hay ahora un camino que
            evita crear plantillas, el{" "}
            <Link href="/blog/envio-directo-whatsapp-direct-send" className="text-[#0066ff] font-semibold hover:underline">
              envío directo
            </Link>
            , que ahorra trabajo pero no dinero: el mensaje se cobra igual.
          </p>

          <h2 className={H2}>Qué hacer antes de que te llegue la factura</h2>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">Registra un método de pago.</strong> Es lo único con consecuencia
            inmediata: sin él, las respuestas dejan de salir cuando se agota el nivel gratuito.
          </p>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">Mira cuántos mensajes de servicio envías al mes por número.</strong> Si
            estás cerca de los {P.servicioGratisPorNumero.toLocaleString("es-CO")}, el cambio casi no te toca. Si
            envías diez veces más, el golpe es real y conviene calcularlo antes.
          </p>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">Revisa cuánta de tu conversación nace de un anuncio.</strong> Esa parte
            entra por la ventana gratuita y no paga entrega.
          </p>
          <p className={P_}>
            Para ponerle número a tu caso, la{" "}
            <Link href="/calculadora-costos-whatsapp-business-api" className="text-[#0066ff] font-semibold hover:underline">
              calculadora de costos de WhatsApp Business API
            </Link>{" "}
            usa las tarifas oficiales por país y compara lo que pagas ahora con lo que pagabas bajo las reglas
            anteriores.
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
            Datos verificados el {P.revisadoElTexto} en la{" "}
            <a href={P.fuente} target="_blank" rel="noopener noreferrer" className="text-[#0066ff] font-semibold hover:underline">
              documentación oficial de precios de Meta
            </a>
            . Meta puede actualizar tarifas hasta cuatro veces al año, el primer día de cada trimestre.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p className="text-[#1c1b1b] font-bold text-lg mb-3">¿Cuánto te va a costar a ti?</p>
            <p className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed">
              En el diagnóstico revisamos tu volumen real, por dónde entran las conversaciones y qué parte puede pasar
              por la ventana gratuita en lugar de pagarse.
            </p>
            <Link
              href="/diagnostico-operacion"
              data-cta="diag-operacion-costos-final"
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
              href="/calculadora-costos-whatsapp-business-api"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Herramienta</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">Calculadora de costos de WhatsApp Business API</p>
            </Link>
            <Link
              href="/blog/whatsapp-business-bloqueado-que-hacer"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">WhatsApp</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">
                WhatsApp Business bloqueado: los cuatro estados que se confunden
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
