import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { breadcrumb, faqPage, toJsonLd, absoluteUrl, type Crumb } from "@/lib/schema";

const PATH = "/blog/whatsapp-business-bloqueado-que-hacer";
const URL = absoluteUrl(PATH);
const TITLE = "WhatsApp Business bloqueado: los cuatro estados que se confunden";
const SEO_TITLE = "WhatsApp Business bloqueado: qué pasó y cómo resolverlo";
const DESC =
  "Bloqueado no es una sola cosa. Distingue los cuatro estados de una cuenta de WhatsApp Business, dónde se comprueba cada uno y qué puedes hacer en cada caso.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESC,
  alternates: { canonical: URL, languages: { es: URL } },
  openGraph: {
    title: SEO_TITLE,
    description:
      "Calidad baja, cuenta inhabilitada, plantilla rechazada o app restringida: cuatro problemas distintos que se llaman igual y se resuelven distinto.",
    images: ["/og-image.png"],
    url: URL,
  },
};

const crumbs: Crumb[] = [
  { name: "Inicio", path: "" },
  { name: "Blog", path: "/blog" },
  { name: "WhatsApp Business bloqueado", path: PATH },
];

const faqs = [
  {
    q: "¿Cuánto dura una restricción de WhatsApp Business?",
    a: "Depende del estado. Una calidad baja se recupera sola si la métrica mejora en los días siguientes, y el límite de mensajería vuelve a subir cuando el historial reciente lo respalda. Una cuenta inhabilitada no tiene plazo: depende de la revisión de Meta. No existe un tiempo garantizado publicado, y desconfía de quien te prometa uno.",
  },
  {
    q: "¿Pierdo mi número si me inhabilitan la cuenta?",
    a: "El número sigue siendo tuyo, pero mientras la cuenta de WhatsApp Business esté inhabilitada no puedes usarlo para enviar mensajes por la API. Si la decisión se mantiene, migrar ese mismo número a otra cuenta no resuelve nada: la restricción va asociada al número y al portafolio comercial, no a la plataforma que uses.",
  },
  {
    q: "¿Puedo apelar una restricción?",
    a: "Sí. Meta ofrece un canal de revisión desde el Administrador de WhatsApp cuando la cuenta o el número aparecen restringidos. La apelación es más útil cuando puedes mostrar cómo obtuviste el consentimiento de esos contactos, porque la causa más común es enviar a gente que no lo pidió.",
  },
  {
    q: "¿Migrar a la API oficial levanta un bloqueo?",
    a: "No. Migrar cambia la forma en que envías, no el historial del número. Si el número tiene calidad baja o la cuenta está inhabilitada, ese estado viaja con él. La API ayuda a prevenir el problema siguiente, no a borrar el actual.",
  },
  {
    q: "¿Por qué me bloquearon si nunca compré bases de datos?",
    a: "Las causas más frecuentes no son las listas compradas, sino el ritmo y la relevancia: escribir a mucha gente nueva en poco tiempo, mandar promociones a quien solo dejó su número para una factura, o usar una plantilla de utilidad para contenido de marketing. Los usuarios bloquean o reportan, y esa señal es la que mueve tu calificación de calidad.",
  },
];

const P = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-bold text-2xl text-[#1c1b1b] mt-12 mb-4";
const H3 = "font-bold text-lg text-[#1c1b1b] mt-8 mb-3";

const estados = [
  {
    n: "01",
    titulo: "Calidad del número en rojo y límite de mensajería reducido",
    sintoma:
      "Tus mensajes siguen saliendo, pero llegan a menos gente de la habitual o empiezan a fallar al superar cierta cantidad al día.",
    donde:
      "Administrador de WhatsApp → Herramientas de la cuenta → Calidad del número y Límites de mensajes.",
    que:
      "Es el estado más leve y el único que se revierte solo. La calificación se calcula con las señales de los últimos días: bloqueos y reportes de usuarios. Baja el ritmo, deja de enviar a contactos fríos y escribe primero a quienes te respondieron hace poco. Si el límite bajó de nivel, vuelve a subir cuando el historial reciente lo respalde.",
  },
  {
    n: "02",
    titulo: "Cuenta o número restringido por políticas",
    sintoma:
      "Los envíos se detienen por completo y aparece un aviso de restricción en el Administrador de WhatsApp.",
    donde: "Administrador de WhatsApp → Estado de la cuenta.",
    que:
      "Aquí sí hay una decisión de Meta detrás. Revisa qué política menciona el aviso, detén cualquier envío masivo y prepara la apelación con evidencia concreta de cómo conseguiste el consentimiento de esos contactos: el formulario, la casilla, la conversación donde el cliente pidió que le escribieras. Apelar sin esa evidencia rara vez funciona.",
  },
  {
    n: "03",
    titulo: "Plantilla rechazada o pausada",
    sintoma:
      "La cuenta funciona y otras plantillas salen, pero una campaña concreta no se envía o devuelve error al intentar usarla.",
    donde: "Administrador de WhatsApp → Plantillas de mensajes, columna de estado.",
    que:
      "No es un bloqueo de cuenta: es esa plantilla. Se pausa cuando recibe demasiadas respuestas negativas, y se rechaza cuando el contenido no corresponde a la categoría declarada. El caso más común es una plantilla de utilidad con contenido promocional. Reescríbela en la categoría correcta en lugar de volver a enviarla igual.",
  },
  {
    n: "04",
    titulo: "La app de WhatsApp Business restringida",
    sintoma:
      "No usas la API: usas la aplicación en un teléfono, y de pronto no puedes escribir a contactos nuevos o la sesión se cierra.",
    donde: "En la propia aplicación, con el aviso que aparece al intentar enviar.",
    que:
      "La app tiene sus propias reglas y sus propios límites, distintos de los de la API. Suele pasar tras usar listas de difusión con muchos contactos que no tienen tu número guardado. Si tu operación ya depende de escribir primero a los clientes, este es el punto en que la app se queda corta y conviene evaluar la API.",
  },
];

export default function PostWhatsAppBloqueado() {
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
    about: ["WhatsApp Business", "Restricciones de cuenta", "Calidad del número", "Plantillas de mensajes"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumb(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqPage(faqs)) }} />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1c1b1b] pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#9bb4fe] text-sm mb-8 hover:underline">
            ← Volver al blog
          </Link>
          <span className="inline-block mb-5 px-3 py-1 rounded-full bg-[#9bb4fe]/20 text-[#9bb4fe] text-xs font-semibold uppercase tracking-wide">
            WhatsApp
          </span>
          <h1 className="font-bold text-white text-3xl md:text-4xl leading-tight mb-6">
            WhatsApp Business bloqueado: los cuatro estados que se confunden
          </h1>
          <p className="text-[#727687] text-sm">Septiembre 2026 · 8 min de lectura</p>
        </div>
      </section>

      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <p className={P}>
            &quot;Me bloquearon WhatsApp&quot; puede significar cuatro cosas distintas, y cada una se arregla de
            una forma diferente. Hay quien pasa una semana escribiendo apelaciones cuando lo único que le pasó fue que
            le bajó la calificación de calidad, y hay quien sigue enviando campañas sin saber que la cuenta ya está
            restringida.
          </p>
          <p className={P}>
            Lo primero es identificar en cuál de los cuatro estados estás. Se comprueba en dos pantallas del
            Administrador de WhatsApp y toma menos de cinco minutos.
          </p>

          {/* En resumen — bloque autocontenido para buscadores e IA generativas */}
          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">En resumen</p>
            <p className="text-[#424656] text-sm leading-relaxed">
              <strong className="text-[#1c1b1b]">
                Una cuenta de WhatsApp Business puede estar en cuatro estados distintos que en la calle se llaman
                igual: calidad del número baja con el límite de mensajería reducido, cuenta o número restringido por
                políticas, plantilla rechazada o pausada, y la aplicación de WhatsApp Business restringida.
              </strong>{" "}
              Los dos primeros se comprueban en el Administrador de WhatsApp, en Calidad del número y en Estado de la
              cuenta; el tercero en la lista de plantillas; el cuarto solo se ve dentro de la app. Solo el primero se
              revierte solo al bajar el ritmo de envío. Los demás requieren corregir la causa, y en el caso de una
              restricción por políticas, apelar con evidencia del consentimiento de los contactos.
            </p>
          </div>

          <h2 className={H2}>Los cuatro estados, uno por uno</h2>

          {estados.map((e) => (
            <div key={e.n} className="mb-10">
              <h3 className={H3}>
                <span className="text-[#0066ff]">{e.n}</span> · {e.titulo}
              </h3>
              <p className={P}>
                <strong className="text-[#1c1b1b]">Qué ves:</strong> {e.sintoma}
              </p>
              <p className={P}>
                <strong className="text-[#1c1b1b]">Dónde se comprueba:</strong> {e.donde}
              </p>
              <p className={P}>
                <strong className="text-[#1c1b1b]">Qué hacer:</strong> {e.que}
              </p>
            </div>
          ))}

          <h2 className={H2}>Lo que no deberías hacer</h2>
          <p className={P}>
            <strong className="text-[#1c1b1b]">Cambiar de número y seguir igual.</strong> Es la reacción más común y la
            que más caro sale. Si la causa fue el ritmo o la lista, el número nuevo dura unas semanas y termina en el
            mismo estado, solo que ahora con dos números quemados.
          </p>
          <p className={P}>
            <strong className="text-[#1c1b1b]">Repetir la campaña &quot;a ver si ahora sí&quot;.</strong> Cada envío
            con respuestas negativas empuja la calificación más abajo. Si una plantilla está recibiendo bloqueos,
            reenviarla acelera el problema.
          </p>
          <p className={P}>
            <strong className="text-[#1c1b1b]">Pagar por un &quot;desbloqueo garantizado&quot;.</strong> Nadie fuera de
            Meta decide sobre una apelación. Lo que sí puedes controlar es la calidad de la evidencia que presentas y
            que la causa no se repita.
          </p>

          <h2 className={H2}>Por qué esto se volvió más caro de ignorar</h2>
          <p className={P}>
            Desde el 1 de octubre de 2026 Meta cobra también los mensajes de servicio y los de utilidad que respondes
            dentro de la ventana de 24 horas. Antes, una operación con mucha respuesta manual podía tener una factura
            baja aunque enviara de más. Ahora cada mensaje cuenta, así que enviar a quien no te va a responder es dos
            veces malo: te cuesta dinero y te baja la calidad.
          </p>
          <p className={P}>
            Si quieres ver el efecto en tu caso, la{" "}
            <Link href="/calculadora-costos-whatsapp-business-api" className="text-[#0066ff] font-semibold hover:underline">
              calculadora de costos de WhatsApp Business API
            </Link>{" "}
            usa las tarifas oficiales por país y te muestra cuánto pagas al mes con tu volumen real.
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
            <p className="text-[#1c1b1b] font-bold text-lg mb-3">
              ¿Tu operación depende de escribir primero?
            </p>
            <p className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed">
              En el diagnóstico revisamos por dónde entran tus conversaciones, qué parte podría nacer de un anuncio y
              cómo dejar de depender de envíos que te queman el número.
            </p>
            <Link
              href="/diagnostico-operacion"
              data-cta="diag-operacion-bloqueos-final"
              className="inline-block bg-[#0066ff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0052cc] transition-colors duration-150 text-sm"
            >
              Diagnóstico gratuito de tu operación →
            </Link>
          </div>
        </div>
      </article>

      {/* Lee también */}
      <section className="bg-[#fcf9f8] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#727687] mb-4">Lee también</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/calculadora-costos-whatsapp-business-api"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Herramienta</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">
                Calculadora de costos de WhatsApp Business API
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
