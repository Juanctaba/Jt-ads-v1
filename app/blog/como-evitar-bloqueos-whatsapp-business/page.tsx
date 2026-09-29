import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { breadcrumb, faqPage, toJsonLd, absoluteUrl, type Crumb } from "@/lib/schema";

const PATH = "/blog/como-evitar-bloqueos-whatsapp-business";
const URL = absoluteUrl(PATH);
const TITLE = "Cómo evitar bloqueos en WhatsApp Business: siete reglas que sí dependen de ti";
const SEO_TITLE = "Cómo evitar bloqueos en WhatsApp Business: 7 reglas";
const DESC =
  "El bloqueo no llega por azar: llega por a quién escribes, con qué plantilla y a qué ritmo. Siete reglas operativas para proteger la calidad de tu número.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESC,
  alternates: { canonical: URL, languages: { es: URL } },
  openGraph: {
    title: SEO_TITLE,
    description:
      "Consentimiento verificable, categoría correcta de plantilla, ritmo de envío y gestión de bajas. Lo que de verdad mueve la calificación de calidad.",
    images: ["/og-image.png"],
    url: URL,
  },
};

const crumbs: Crumb[] = [
  { name: "Inicio", path: "" },
  { name: "Blog", path: "/blog" },
  { name: "Cómo evitar bloqueos en WhatsApp Business", path: PATH },
];

const faqs = [
  {
    q: "¿Cuántos mensajes al día puedo enviar sin riesgo?",
    a: "No existe una cifra segura publicada, y quien te dé una se la está inventando. Lo que Meta sí documenta son los límites de mensajería: cuántos destinatarios únicos puedes contactar fuera de la ventana de 24 horas. El riesgo no lo marca el volumen en sí, sino la proporción de gente que bloquea o reporta lo que recibe.",
  },
  {
    q: "¿Comprar una base de datos es riesgoso?",
    a: "Es la forma más rápida de perder un número. Esos contactos no te dieron consentimiento, no reconocen tu marca y una parte va a reportar el mensaje. Además incumple las políticas de WhatsApp, así que no es solo un problema de calidad sino también de permanencia de la cuenta.",
  },
  {
    q: "¿Sirve pedir que me guarden en contactos?",
    a: "Ayuda a la entrega y a la relación, pero no es lo que protege tu número. Lo que protege tu número es que la persona espere tu mensaje. Un contacto guardado que recibe promociones que no pidió reporta igual.",
  },
  {
    q: "¿La calidad del número se recupera?",
    a: "Sí. La calificación se calcula con las señales recientes, así que mejora sola cuando bajas el ritmo y escribes a gente que responde. El límite de mensajería vuelve a subir cuando el historial de los últimos días lo respalda.",
  },
  {
    q: "¿Cambiar de plantilla arregla una campaña que va mal?",
    a: "Solo si el problema era la plantilla. Si la lista es fría o el mensaje no interesa, la plantilla nueva recibe los mismos reportes. Antes de reescribir, mira qué porcentaje de la gente respondió y cuánta bloqueó.",
  },
];

const P_ = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-bold text-2xl text-[#1c1b1b] mt-12 mb-4";

const reglas = [
  {
    n: "01",
    titulo: "Consentimiento que puedas mostrar",
    cuerpo:
      "No basta con tener el número. Necesitas poder señalar dónde la persona pidió que le escribieras: la casilla del formulario, el momento de la compra, la conversación donde lo pidió. Sirve para prevenir el reporte y, si alguna vez apelas, es la única evidencia que pesa.",
  },
  {
    n: "02",
    titulo: "La categoría de la plantilla tiene que coincidir con el contenido",
    cuerpo:
      "El error más frecuente es mandar contenido promocional en una plantilla de utilidad porque sale más barata. Meta revisa la categoría, y cuando no corresponde, rechaza o recategoriza. Cada uso de una plantilla acepta los cargos de la categoría que tenga aplicada en ese momento.",
  },
  {
    n: "03",
    titulo: "Escribe primero a quien te escribió hace poco",
    cuerpo:
      "Una lista ordenada por recencia rinde mejor y ensucia menos. Quien habló contigo hace dos semanas responde; quien dejó su número hace catorce meses probablemente ya no recuerda quién eres, y esa es la gente que bloquea.",
  },
  {
    n: "04",
    titulo: "Sube el volumen por escalones, no de golpe",
    cuerpo:
      "Un número nuevo que pasa de cero a miles de mensajes en un día es exactamente el patrón que el sistema detecta. Aumenta de forma gradual y observa la calidad entre cada escalón. Los límites de mensajería suben solos cuando el historial lo respalda.",
  },
  {
    n: "05",
    titulo: "Haz fácil la baja",
    cuerpo:
      "Si la única salida que le dejas a alguien es bloquearte, te va a bloquear. Una instrucción clara para dejar de recibir mensajes convierte un reporte en una baja silenciosa, que no daña tu calificación.",
  },
  {
    n: "06",
    titulo: "Segmenta aunque cueste más trabajo",
    cuerpo:
      "Mandar la misma promoción a toda la base es cómodo y caro: pagas cada mensaje y encima recoges reportes de la parte a la que no le interesaba. Menos mensajes mejor dirigidos cuestan menos y protegen el número.",
  },
  {
    n: "07",
    titulo: "Mira la calidad antes de la siguiente campaña",
    cuerpo:
      "La calificación del número y el estado de las plantillas están en el Administrador de WhatsApp. Revisarlos antes de cada envío toma un minuto y evita encadenar dos campañas malas, que es como se pasa de una calidad media a una cuenta restringida.",
  },
];

export default function PostEvitarBloqueos() {
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
    about: ["WhatsApp Business", "Calidad del número", "Plantillas de mensajes", "Consentimiento"],
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
            Cómo evitar bloqueos en WhatsApp Business: siete reglas que sí dependen de ti
          </h1>
          <p className="text-[#727687] text-sm">Septiembre 2026 · 8 min de lectura</p>
        </div>
      </section>

      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <p className={P_}>
            Casi nadie pierde un número por una sola campaña desastrosa. Se pierde por acumulación: una lista vieja,
            una plantilla en la categoría equivocada, un volumen que sube demasiado rápido, y nadie mirando la
            calificación entre envío y envío.
          </p>
          <p className={P_}>
            La buena noticia es que las señales que mueven tu calificación son pocas y todas están bajo tu control.
            Estas siete reglas son las que aplicamos antes de tocar el volumen de una cuenta.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">En resumen</p>
            <p className="text-[#424656] text-sm leading-relaxed">
              <strong className="text-[#1c1b1b]">
                La calificación de calidad de un número de WhatsApp Business depende de cuánta gente bloquea o reporta
                los mensajes que recibe, no del volumen en sí.
              </strong>{" "}
              Para protegerla: pide un consentimiento que puedas demostrar, usa la categoría de plantilla que
              corresponde al contenido, prioriza a los contactos recientes, sube el volumen por escalones, ofrece una
              forma clara de darse de baja, segmenta en lugar de enviar a toda la base y revisa la calidad del número y
              el estado de las plantillas en el Administrador de WhatsApp antes de cada campaña. No existe una cifra
              publicada de mensajes diarios seguros.
            </p>
          </div>

          <h2 className={H2}>Las siete reglas</h2>

          {reglas.map((r) => (
            <div key={r.n} className="mb-8">
              <h3 className="font-bold text-lg text-[#1c1b1b] mb-2">
                <span className="text-[#0066ff]">{r.n}</span> · {r.titulo}
              </h3>
              <p className={P_}>{r.cuerpo}</p>
            </div>
          ))}

          <h2 className={H2}>La regla que no existe</h2>
          <p className={P_}>
            Te van a decir que el límite seguro son 200 mensajes al día, o 500, o los que sea. Meta no publica esa
            cifra, y por una razón: no es el número lo que te bloquea, es la reacción de quien lo recibe. Mil mensajes
            a gente que los espera son más seguros que cien a una lista comprada.
          </p>
          <p className={P_}>
            Lo que Meta sí documenta son los límites de mensajería, que marcan a cuántos destinatarios únicos puedes
            escribir fuera de la ventana de 24 horas, y que suben solos cuando la calidad acompaña.
          </p>

          <h2 className={H2}>Y si ya te pasó</h2>
          <p className={P_}>
            Antes de intentar arreglarlo conviene saber qué te pasó exactamente, porque &quot;bloqueado&quot; puede
            significar cuatro cosas distintas y cada una se resuelve diferente. Eso está en{" "}
            <Link href="/blog/whatsapp-business-bloqueado-que-hacer" className="text-[#0066ff] font-semibold hover:underline">
              los cuatro estados de una cuenta de WhatsApp Business
            </Link>
            .
          </p>
          <p className={P_}>
            Y si el motivo por el que envías tanto es que dependes de escribir primero, vale la pena mirar cuánto te
            cuesta esa estrategia ahora que Meta cobra también los mensajes de servicio. La{" "}
            <Link href="/calculadora-costos-whatsapp-business-api" className="text-[#0066ff] font-semibold hover:underline">
              calculadora de costos
            </Link>{" "}
            lo pone en números.
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

          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p className="text-[#1c1b1b] font-bold text-lg mb-3">¿Tu número aguanta el volumen que necesitas?</p>
            <p className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed">
              En el diagnóstico revisamos cómo entran tus conversaciones, qué parte puede nacer de un anuncio y cómo
              crecer sin quemar el número.
            </p>
            <Link
              href="/diagnostico-operacion"
              data-cta="diag-operacion-evitar-bloqueos-final"
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
              href="/blog/whatsapp-business-bloqueado-que-hacer"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">WhatsApp</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">
                WhatsApp Business bloqueado: los cuatro estados que se confunden
              </p>
            </Link>
            <Link
              href="/blog/nuevos-costos-whatsapp-business-api-octubre-2026"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">WhatsApp</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">
                Nuevos costos de WhatsApp Business API desde octubre de 2026
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
