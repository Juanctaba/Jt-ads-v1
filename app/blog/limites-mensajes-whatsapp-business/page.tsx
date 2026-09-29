import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WHATSAPP_PRICING as P } from "@/lib/whatsapp-pricing";
import { breadcrumb, faqPage, toJsonLd, absoluteUrl, type Crumb } from "@/lib/schema";

const PATH = "/blog/limites-mensajes-whatsapp-business";
const URL = absoluteUrl(PATH);
const TITLE = "Límites de mensajes en WhatsApp Business: cómo funcionan y cómo suben";
const SEO_TITLE = "Límites de mensajes en WhatsApp Business: cómo suben";
const DESC =
  "Cuántos destinatarios puedes contactar al día, por qué el límite es del portafolio y no del número, y qué tienes que hacer para pasar de 250 a ilimitado.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESC,
  alternates: { canonical: URL, languages: { es: URL } },
  openGraph: {
    title: SEO_TITLE,
    description:
      "Los tiers de mensajería de la API de WhatsApp, cómo se escalan y en qué se diferencian de los límites de la aplicación.",
    images: ["/og-image.png"],
    url: URL,
  },
};

const crumbs: Crumb[] = [
  { name: "Inicio", path: "" },
  { name: "Blog", path: "/blog" },
  { name: "Límites de mensajes en WhatsApp Business", path: PATH },
];

const faqs = [
  {
    q: "¿El límite es por número de teléfono o por cuenta?",
    a: "Por portafolio comercial, y se comparte entre todos los números que contenga. Es una diferencia importante: si tienes tres números en el mismo portafolio, uno solo puede consumir toda la capacidad del día y dejar sin margen a los otros dos.",
  },
  {
    q: "¿Cuenta cada mensaje o cada persona?",
    a: "Cada destinatario único. El límite mide a cuántos números distintos de usuarios puedes entregar mensajes fuera de la ventana de servicio al cliente en un periodo móvil de 24 horas, no cuántos mensajes envías en total.",
  },
  {
    q: "¿Las respuestas dentro de la ventana de 24 horas consumen límite?",
    a: "No. El límite aplica a los mensajes que inicias tú fuera de esa ventana. Responder a alguien que te escribió no consume cupo, aunque desde el 1 de octubre de 2026 esas respuestas sí tienen costo.",
  },
  {
    q: "¿Cuánto tarda en subir el límite?",
    a: "Cuando completas uno de los caminos de aumento, Meta analiza la calidad de tus mensajes y, si aprueba, sube el límite a 2.000 de inmediato y te avisa por correo. A partir de ahí los aumentos siguientes son automáticos y Meta los aplica en un plazo de seis horas cuando se cumplen los criterios.",
  },
  {
    q: "¿Dónde consulto mi límite actual?",
    a: "En el Administrador de WhatsApp, en Herramientas de la cuenta → Límites de mensajes. Por API se consulta el campo whatsapp_business_manager_messaging_limit; el antiguo messaging_limit_tier quedó obsoleto.",
  },
];

const P_ = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-bold text-2xl text-[#1c1b1b] mt-12 mb-4";

export default function PostLimites() {
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
    about: ["WhatsApp Business API", "Límites de mensajería", "Portafolio comercial"],
    citation: ["https://developers.facebook.com/docs/whatsapp/messaging-limits"],
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
            Límites de mensajes en WhatsApp Business: cómo funcionan y cómo suben
          </h1>
          <p className="text-[#727687] text-sm">Septiembre 2026 · 7 min de lectura</p>
        </div>
      </section>

      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <p className={P_}>
            Hay dos conversaciones distintas sobre límites en WhatsApp y se mezclan todo el tiempo. Una es la de la
            aplicación de WhatsApp Business, la que se instala en un teléfono. La otra es la de la API, que tiene
            límites documentados, escalones definidos y una forma concreta de subirlos.
          </p>
          <p className={P_}>
            Este artículo es sobre la segunda, porque es la que está publicada y la que puedes planificar.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">En resumen</p>
            <p className="text-[#424656] text-sm leading-relaxed">
              <strong className="text-[#1c1b1b]">
                El límite de mensajería de WhatsApp Business API es la cantidad máxima de destinatarios únicos a los
                que puedes entregar mensajes fuera de la ventana de servicio al cliente en un periodo móvil de 24
                horas.
              </strong>{" "}
              Se calcula por portafolio comercial y se comparte entre todos los números que contenga. Un portafolio
              nuevo empieza en {P.limitesMensajeria[0]} destinatarios y escala a{" "}
              {P.limitesMensajeria[1].toLocaleString("es-CO")},{" "}
              {P.limitesMensajeria[2].toLocaleString("es-CO")},{" "}
              {P.limitesMensajeria[3].toLocaleString("es-CO")} y finalmente a ilimitado. El primer salto se consigue
              verificando el negocio o entregando {P.limitesMensajeria[1].toLocaleString("es-CO")} mensajes con
              plantillas de calidad alta en 30 días; los siguientes son automáticos si la calidad se mantiene y usas al
              menos la mitad de tu límite actual.
            </p>
          </div>

          <h2 className={H2}>Los escalones</h2>
          <div className="overflow-x-auto rounded-xl border border-[#c2c6d8]/15 my-8">
            <table className="w-full min-w-[420px] text-left border-collapse">
              <thead>
                <tr className="bg-[#f6f3f2]">
                  <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Nivel</th>
                  <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Destinatarios únicos / 24 h</th>
                  <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Cómo se llega</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#c2c6d8]/15">
                  <th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b]">Inicial</th>
                  <td className="p-4 text-sm tabular-nums text-[#424656]">{P.limitesMensajeria[0]}</td>
                  <td className="p-4 text-sm text-[#424656]">Al crear el portafolio</td>
                </tr>
                <tr className="border-t border-[#c2c6d8]/15">
                  <th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b]">Segundo</th>
                  <td className="p-4 text-sm tabular-nums text-[#424656]">{P.limitesMensajeria[1].toLocaleString("es-CO")}</td>
                  <td className="p-4 text-sm text-[#424656]">Verificar el negocio o completar el recorrido de envío</td>
                </tr>
                <tr className="border-t border-[#c2c6d8]/15">
                  <th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b]">Tercero</th>
                  <td className="p-4 text-sm tabular-nums text-[#424656]">{P.limitesMensajeria[2].toLocaleString("es-CO")}</td>
                  <td className="p-4 text-sm text-[#424656]">Aumento automático</td>
                </tr>
                <tr className="border-t border-[#c2c6d8]/15">
                  <th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b]">Cuarto</th>
                  <td className="p-4 text-sm tabular-nums text-[#424656]">{P.limitesMensajeria[3].toLocaleString("es-CO")}</td>
                  <td className="p-4 text-sm text-[#424656]">Aumento automático</td>
                </tr>
                <tr className="border-t border-[#c2c6d8]/15">
                  <th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b]">Máximo</th>
                  <td className="p-4 text-sm text-[#424656]">Ilimitado</td>
                  <td className="p-4 text-sm text-[#424656]">Aumento automático</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className={H2}>Cómo se sube del primer escalón</h2>
          <p className={P_}>
            Hay dos caminos y basta con uno. El primero es verificar tu negocio ante Meta. El segundo es entregar{" "}
            {P.limitesMensajeria[1].toLocaleString("es-CO")} mensajes fuera de la ventana de atención a destinatarios
            únicos en un periodo de 30 días, usando plantillas con calificación de calidad alta.
          </p>
          <p className={P_}>
            Cuando completas uno de los dos, Meta revisa la calidad de tus envíos y decide. Si aprueba, el límite sube
            a {P.limitesMensajeria[1].toLocaleString("es-CO")} de inmediato. Si rechaza, recibes una alerta que indica
            qué camino alternativo seguir, normalmente el de los {P.limitesMensajeria[1].toLocaleString("es-CO")}{" "}
            mensajes de calidad alta.
          </p>

          <h2 className={H2}>Los aumentos siguientes son automáticos</h2>
          <p className={P_}>
            A partir del segundo escalón ya no hay que pedir nada. Meta sube el límite un nivel, en un plazo de seis
            horas, cuando se cumplen dos condiciones a la vez: que la calidad de tus mensajes sea alta en todos los
            números y plantillas del portafolio, y que en los últimos siete días hayas usado al menos la mitad del
            límite que tienes.
          </p>
          <p className={P_}>
            Esa segunda condición explica por qué algunas cuentas se quedan estancadas: si nunca te acercas a tu
            límite, el sistema no tiene motivo para ampliarlo.
          </p>

          <h2 className={H2}>La aplicación es otra historia</h2>
          <p className={P_}>
            La app de WhatsApp Business tiene sus propias restricciones y no publica escalones equivalentes. Funciona
            bien mientras la conversación la inicia el cliente, y se queda corta cuando tu operación necesita escribir
            primero de forma sistemática: ahí aparecen los bloqueos de los que hablamos en{" "}
            <Link href="/blog/whatsapp-business-bloqueado-que-hacer" className="text-[#0066ff] font-semibold hover:underline">
              los cuatro estados de una cuenta bloqueada
            </Link>
            .
          </p>
          <p className={P_}>
            La señal para migrar a la API no es el volumen en sí, sino la dependencia: si el negocio se detiene cuando
            el número falla, necesitas límites documentados y una calidad que puedas monitorear, no una app que un día
            deja de dejarte escribir.
          </p>

          <h2 className={H2}>Límite no es lo mismo que costo</h2>
          <p className={P_}>
            Son dos cosas distintas y conviene no confundirlas: el límite dice a cuánta gente puedes escribir, y la
            tarifa dice cuánto pagas por cada mensaje entregado. Puedes tener límite ilimitado y una factura enorme, o
            un límite bajo y pagar poco. Desde el {P.vigenteDesdeTexto} el cálculo cambió, porque ahora también se
            cobran los mensajes de servicio. La{" "}
            <Link href="/calculadora-costos-whatsapp-business-api" className="text-[#0066ff] font-semibold hover:underline">
              calculadora de costos de WhatsApp Business API
            </Link>{" "}
            lo estima con tu volumen y tu país.
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
            <a
              href="https://developers.facebook.com/docs/whatsapp/messaging-limits"
              target="_blank" rel="noopener noreferrer"
              className="text-[#0066ff] font-semibold hover:underline"
            >
              documentación de límites de mensajes de Meta
            </a>
            .
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p className="text-[#1c1b1b] font-bold text-lg mb-3">¿Te estás quedando sin margen?</p>
            <p className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed">
              En el diagnóstico revisamos tu límite actual, cómo está repartido entre tus números y qué hace falta para
              subir sin arriesgar la calidad.
            </p>
            <Link
              href="/diagnostico-operacion"
              data-cta="diag-operacion-limites-final"
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
              href="/blog/como-evitar-bloqueos-whatsapp-business"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">WhatsApp</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">
                Cómo evitar bloqueos en WhatsApp Business: siete reglas
              </p>
            </Link>
            <Link
              href="/calculadora-costos-whatsapp-business-api"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Herramienta</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">Calculadora de costos de WhatsApp Business API</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
