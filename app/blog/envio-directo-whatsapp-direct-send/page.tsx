import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WHATSAPP_PRICING as P } from "@/lib/whatsapp-pricing";
import { breadcrumb, faqPage, toJsonLd, absoluteUrl, type Crumb } from "@/lib/schema";

const PATH = "/blog/envio-directo-whatsapp-direct-send";
const URL = absoluteUrl(PATH);
const TITLE = "Envío directo en WhatsApp: mensajes de utilidad sin crear plantillas";
const SEO_TITLE = "Envío directo en WhatsApp: utilidad sin crear plantillas";
const DESC =
  "Direct Send deja enviar mensajes de utilidad y autenticación sin preparar plantillas: Meta las genera por detrás. Qué resuelve, qué no, y quién puede usarlo.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESC,
  alternates: { canonical: URL, languages: { es: URL } },
  openGraph: {
    title: SEO_TITLE,
    description:
      "Qué es el envío directo de WhatsApp, cómo genera plantillas automáticamente y por qué no cambia lo que pagas por mensaje.",
    images: ["/og-image.png"],
    url: URL,
  },
};

const crumbs: Crumb[] = [
  { name: "Inicio", path: "" },
  { name: "Blog", path: "/blog" },
  { name: "Envío directo en WhatsApp", path: PATH },
];

const faqs = [
  {
    q: "¿El envío directo abarata los mensajes?",
    a: "No. El mensaje se sigue cobrando según su categoría, utilidad o autenticación, con la tarifa del país del destinatario. Lo que ahorra es el trabajo de crear y esperar la aprobación de plantillas, no dinero por mensaje.",
  },
  {
    q: "¿Sirve para mensajes de marketing?",
    a: "No. Admite utilidad y autenticación, y la autenticación está en fase beta. Para contenido promocional siguen haciendo falta plantillas de marketing aprobadas.",
  },
  {
    q: "¿Cómo sé si mi cuenta puede usarlo?",
    a: "En el Administrador de WhatsApp aparece un banner que lo indica. Si la cuenta no cumple los requisitos y envías un mensaje de utilidad con el campo category, la API responde con un error 100 que dice explícitamente que se requiere envío directo y que uses una plantilla aprobada.",
  },
  {
    q: "¿Qué pasa con mis plantillas actuales?",
    a: "Siguen funcionando. El envío directo primero comprueba si el mensaje coincide con una plantilla que ya tienes y la usa. Solo cuando no encuentra coincidencia recurre a las plantillas de registro y crea una nueva en segundo plano.",
  },
  {
    q: "¿Puedo controlar con qué nombre se crean las plantillas?",
    a: "Sí. Si necesitas que los mensajes queden atribuidos a una plantilla concreta, puedes pasar el nombre en la llamada de envío. El envío directo crea la plantilla con ese nombre exacto y todos los mensajes que lo usen quedan atribuidos ahí.",
  },
];

const P_ = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-bold text-2xl text-[#1c1b1b] mt-12 mb-4";

export default function PostDirectSend() {
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
    about: ["Direct Send", "WhatsApp Business API", "Plantillas de mensajes"],
    citation: ["https://developers.facebook.com/docs/whatsapp/direct-send"],
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
            Envío directo en WhatsApp: mensajes de utilidad sin crear plantillas
          </h1>
          <p className="text-[#727687] text-sm">Septiembre 2026 · 6 min de lectura</p>
        </div>
      </section>

      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <p className={P_}>
            Cualquiera que haya montado WhatsApp en una empresa conoce el cuello de botella: para escribirle a un
            cliente fuera de la ventana de 24 horas hace falta una plantilla, y cada plantilla hay que redactarla,
            enviarla a revisión y esperar. Cambiar una palabra implica repetir el ciclo.
          </p>
          <p className={P_}>
            El envío directo elimina ese paso para dos categorías concretas. Envías el mensaje tal cual y Meta se
            encarga de la plantilla por detrás.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">En resumen</p>
            <p className="text-[#424656] text-sm leading-relaxed">
              <strong className="text-[#1c1b1b]">
                El envío directo, o Direct Send, permite enviar mensajes de utilidad y autenticación de WhatsApp sin
                crear una plantilla previamente: se llama al mismo endpoint de mensajes añadiendo un campo category, y
                Meta genera o empareja la plantilla automáticamente en segundo plano.
              </strong>{" "}
              Si el mensaje coincide con una plantilla existente, usa esa; si no, lo envía con una plantilla de
              registro de reserva y crea una nueva de forma asíncrona, con la información personal redactada y el
              idioma detectado. Es una función premium, de despliegue por fases, disponible para utilidad y con la
              autenticación en beta. No cambia el costo: cada mensaje se sigue cobrando según su categoría.
            </p>
          </div>

          <h2 className={H2}>Cómo funciona por dentro</h2>
          <p className={P_}>
            La llamada es la de siempre, al endpoint de mensajes del número, con un campo más que declara la categoría.
            A partir de ahí, para cada mensaje que entra, el envío directo hace tres cosas en orden:
          </p>
          <ol className="mb-6 space-y-3">
            {[
              "Comprueba si el mensaje coincide con alguna plantilla que ya tienes aprobada. Si coincide, la usa.",
              "Si no encuentra coincidencia, envía el mensaje usando una plantilla de registro de reserva, de las que Meta añade a la cuenta al activar la función. El mensaje sale igual.",
              "En paralelo, crea una plantilla nueva a partir de ese mensaje para que los siguientes que se parezcan la usen. Antes de crearla redacta el contenido para quitar información personal y detecta el idioma.",
            ].map((paso, i) => (
              <li key={paso} className="flex gap-3 text-[#424656] text-base leading-relaxed">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0066ff]/10 text-[#0066ff] text-xs font-bold" aria-hidden="true">
                  {i + 1}
                </span>
                <span>{paso}</span>
              </li>
            ))}
          </ol>
          <p className={P_}>
            El detalle de la plantilla de reserva es el que hace útil la función: el mensaje no se queda esperando a que
            exista la plantilla correcta. Sale, y el sistema aprende para la próxima.
          </p>

          <h2 className={H2}>Qué resuelve de verdad</h2>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">Tiempo hasta salir a producción.</strong> Una integración de
            notificaciones transaccionales deja de depender del ciclo de aprobación de plantillas.
          </p>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">Mensajes con muchas variantes.</strong> Cuando cada aviso cambia según
            el producto, la ciudad o el estado del pedido, mantener una plantilla por variante es inviable. Aquí ese
            problema desaparece.
          </p>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">Recategorización más flexible.</strong> Meta lo menciona explícitamente
            como uno de los objetivos de la función.
          </p>

          <h2 className={H2}>Qué no resuelve</h2>
          <p className={P_}>
            No abarata nada. El mensaje se cobra igual, según su categoría y el país de quien lo recibe, y desde el{" "}
            {P.vigenteDesdeTexto} eso incluye los mensajes de utilidad que envías respondiendo dentro de la ventana de
            24 horas, uno de los{" "}
            <Link
              href="/blog/nuevos-costos-whatsapp-business-api-octubre-2026"
              className="text-[#0066ff] font-semibold hover:underline"
            >
              cambios de facturación que entran ese día
            </Link>
            . Si esperabas un atajo de costos, no lo es: es un atajo de fricción. Para ver cuánto te costaría tu
            volumen real con las tarifas nuevas está la{" "}
            <Link
              href="/calculadora-costos-whatsapp-business-api"
              data-cta="calculadora-direct-send-cuerpo"
              className="text-[#0066ff] font-semibold hover:underline"
            >
              calculadora de costos de WhatsApp Business API
            </Link>
            .
          </p>
          <p className={P_}>
            Tampoco sirve para marketing. Admite utilidad y autenticación, y la autenticación está en beta. El
            contenido promocional sigue necesitando su plantilla aprobada, con su categoría correcta, que es justo
            donde se origina buena parte de los problemas de calidad que cuento en{" "}
            <Link href="/blog/como-evitar-bloqueos-whatsapp-business" className="text-[#0066ff] font-semibold hover:underline">
              las siete reglas para evitar bloqueos
            </Link>
            .
          </p>

          <h2 className={H2}>Quién puede usarlo hoy</h2>
          <p className={P_}>
            Es una solución premium con despliegue por fases, así que no está disponible para todas las cuentas. En el
            Administrador de WhatsApp aparece un banner que indica si la tuya cumple los requisitos, y si no cumple, la
            API devuelve un error explícito al intentar usar el campo de categoría. Para la autenticación hay que
            manifestar interés aparte, porque sigue en beta.
          </p>
          <p className={P_}>
            No hay fecha pública de disponibilidad general, así que conviene comprobar el banner en lugar de asumir que
            una cuenta lo tiene.
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
            Verificado el {P.revisadoElTexto} en la{" "}
            <a
              href="https://developers.facebook.com/docs/whatsapp/direct-send"
              target="_blank" rel="noopener noreferrer"
              className="text-[#0066ff] font-semibold hover:underline"
            >
              documentación de envío directo de Meta
            </a>
            . La función está en despliegue por fases, así que su disponibilidad puede cambiar.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p className="text-[#1c1b1b] font-bold text-lg mb-3">¿Tus notificaciones dependen de plantillas?</p>
            <p className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed">
              En el diagnóstico revisamos qué mensajes envías hoy, cuáles podrían simplificarse y cuánto te cuesta el
              canal completo con las tarifas nuevas.
            </p>
            <Link
              href="/diagnostico-operacion"
              data-cta="diag-operacion-direct-send-final"
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
              href="/blog/limites-mensajes-whatsapp-business"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">WhatsApp</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">
                Límites de mensajes en WhatsApp Business: cómo suben
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
