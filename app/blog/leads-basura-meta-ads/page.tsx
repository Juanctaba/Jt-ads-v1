import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { breadcrumb, faqPage, toJsonLd, absoluteUrl, type Crumb } from "@/lib/schema";

const PATH = "/blog/leads-basura-meta-ads";
const URL = absoluteUrl(PATH);
const TITLE = "Leads basura en Meta Ads: cómo filtrarlos antes, durante y después del formulario";
const SEO_TITLE = "Leads basura en Meta Ads: por qué llegan y cómo filtrarlos";
const DESC =
  "Por qué Meta te manda leads que no sirven y cómo filtrarlos: tipo de formulario, preguntas que descalifican, CRM y calidad de vuelta con la API de Conversiones.";

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


// Documentación oficial de Meta citada en el texto.
const SOURCES = {
  tiposFormulario: "https://www.facebook.com/business/help/252352181957512",
  formulariosApi: "https://developers.facebook.com/docs/marketing-api/guides/lead-ads/create/",
  preguntas: "https://www.facebook.com/business/help/774623835981457",
  condicional: "https://www.facebook.com/business/help/3373123166040766",
  crm: "https://developers.facebook.com/docs/marketing-api/conversions-api/conversion-leads-integration",
};

const crumbs: Crumb[] = [
  { name: "Inicio", path: "" },
  { name: "Blog", path: "/blog" },
  { name: "Leads basura en Meta Ads", path: PATH },
];

const faqs = [
  {
    q: "¿Por qué Meta me manda leads basura?",
    a: "Porque optimiza por lo que le pides y por lo que le cuentas. Si el objetivo es conseguir formularios y nunca le dices cuáles sirvieron, Meta busca a la gente que llena formularios más fácil, que no siempre es la que compra. El formulario de más volumen, que es el predeterminado, está diseñado justamente para que enviar sea rápido.",
  },
  {
    q: "¿Qué es el formulario de mayor intención en Meta?",
    a: "Es un tipo de formulario instantáneo que Meta ofrece en lugar del de más volumen. Agrega un paso en el que la persona revisa y confirma sus respuestas antes de enviar. Meta lo presenta como la opción para conseguir leads más intencionales.",
  },
  {
    q: "¿Qué preguntas conviene agregar al formulario instantáneo?",
    a: "Las que te ayudan a descartar: país o ciudad donde vendes, tipo de empresa o necesidad, plazo de compra o rango de presupuesto con opciones cerradas. Meta permite preguntas personalizadas de opción múltiple y respuesta corta, y lógica condicional para que la siguiente pregunta dependa de la respuesta anterior.",
  },
  {
    q: "¿Qué es optimizar por clientes potenciales de conversión?",
    a: "Es una forma de optimizar los formularios instantáneos en la que Meta busca a las personas con más probabilidad de convertirse en clientes. Funciona mejor cuando tu CRM le devuelve a Meta, por la API de Conversiones, en qué etapa quedó cada lead: calificado, oportunidad o venta.",
  },
  {
    q: "¿Cómo sé qué porcentaje de mis leads es basura?",
    a: "Con un campo obligatorio de motivo de descarte en el CRM y una tabla semanal por campaña y por formulario: leads descartados entre leads recibidos. Si no lo mides en el CRM, la discusión entre marketing y ventas se queda en opiniones.",
  },
];

const P_ = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-bold text-2xl text-[#1c1b1b] mt-12 mb-4";
const H3 = "font-bold text-lg text-[#1c1b1b] mt-8 mb-3";
const A = "text-[#0066ff] font-semibold hover:underline";

const motivos = [
  "Teléfono o correo falso",
  "No contesta después de varios intentos",
  "Fuera de la zona donde vendes",
  "No tiene la necesidad o buscaba otra cosa",
  "Duplicado de un lead que ya existía",
  "Buscaba empleo o es un proveedor",
];

export default function PostLeadsBasuraMeta() {
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
    datePublished: "2026-10-04",
    dateModified: "2026-10-04",
    image: "https://jtads.com/opengraph-image",
    url: URL,
    inLanguage: "es",
    about: ["Meta Ads", "Formularios instantáneos", "Calidad de leads", "CRM", "API de Conversiones"],
    citation: Object.values(SOURCES),
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
            Meta Ads
          </span>
          <h1 className="font-bold text-white text-3xl md:text-4xl leading-tight mb-6">{TITLE}</h1>
          <p className="text-[#727687] text-sm">Octubre 2026 · 10 min de lectura</p>
        </div>
      </section>

      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <p className={P_}>
            Los leads basura en Meta Ads llegan porque la campaña optimiza por formularios enviados y nadie le
            dice a Meta cuáles sirvieron. Se filtran en tres capas: antes del formulario (la oferta y un anuncio
            que dice para quién no es), durante el formulario (tipo de mayor intención y preguntas que
            descalifican) y después del formulario (el CRM valida el lead en minutos y le devuelve a Meta, con la
            API de Conversiones, qué lead terminó en venta). Ajustar solo el formulario ayuda; arreglar las tres
            capas cambia lo que Meta sale a buscar.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">En resumen</p>
            <p className="text-[#424656] text-sm leading-relaxed">
              <strong className="text-[#1c1b1b]">
                Meta te manda la gente que más se parece a la que ya llenó tus formularios.
              </strong>{" "}
              Si nunca le cuentas cuáles de esos leads compraron, sigue buscando a quien llena formularios
              rápido. El arreglo no es solo de campaña: es de campaña, formulario y CRM al mismo tiempo. Es lo
              que hacemos en nuestra{" "}
              <Link href="/agencia-meta-ads-latam" className={A}>
                agencia de Meta Ads para LATAM
              </Link>
              .
            </p>
          </div>

          <h2 className={H2}>Qué es un lead basura (y por qué Meta te los sigue mandando)</h2>
          <p className={P_}>
            Un lead basura es un contacto que nunca va a comprar: datos falsos, alguien que no recuerda haber
            llenado nada, una persona fuera de tu zona, un duplicado o alguien que buscaba otra cosa. Ojo con
            meter en la misma bolsa al lead que sí era bueno pero nadie llamó a tiempo. Ese no es basura, es un
            lead perdido, y se arregla en otro lado.
          </p>
          <p className={P_}>
            Meta no te manda basura por maldad. Hace lo que le pediste. Cuando creas una campaña de clientes
            potenciales con formulario instantáneo, el tipo de formulario predeterminado es el de «más volumen»,
            que Meta describe como diseñado para que la gente lo envíe rápido desde el celular y así generar más
            leads (
            <a href={SOURCES.tiposFormulario} target="_blank" rel="noopener noreferrer" className={A}>
              Meta Business Help: tipos de formulario instantáneo
            </a>
            ). Si además el único evento que Meta recibe es «formulario enviado», aprende a encontrar gente que
            envía formularios. Cuanto más barato le resulta, más de esa gente te trae.
          </p>
          <p className={P_}>
            Por eso el CPL que ves en el administrador de anuncios puede verse bien mientras ventas se queja.
            Ese CPL cuenta formularios, no leads trabajables. La diferencia entre los dos números está explicada
            en{" "}
            <Link href="/blog/tracking-server-side-cpl-plataforma" className={A}>
              CPL de plataforma vs CPL real
            </Link>
            .
          </p>

          <h2 className={H2}>Antes del formulario: oferta, segmentación y el anuncio que filtra</h2>
          <p className={P_}>
            La primera capa de filtro es el anuncio. Si el anuncio promete algo que le interesa a todo el mundo,
            le llega a todo el mundo.
          </p>
          <ul className="space-y-2 mb-6 pl-4">
            {[
              "Di para quién es y para quién no es. «Para clínicas con más de un consultorio» filtra más que «haz crecer tu negocio».",
              "Muestra el precio de entrada o el rango cuando puedas. Quien no puede pagar no llena el formulario, y eso es bueno.",
              "Cuidado con los regalos. Un ebook o un sorteo trae contactos que querían el regalo, no tu servicio.",
              "Que el creativo muestre el producto real. La promesa vaga atrae curiosos; la concreta atrae compradores.",
              "Revisa a qué países y ciudades llega la campaña. Si vendes en una ciudad, no dejes que la entrega se vaya a todo el país.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#424656] text-sm leading-relaxed">
                <span className="text-[#727687] mt-0.5">–</span>
                {item}
              </li>
            ))}
          </ul>
          <p className={P_}>
            Cada una de estas decisiones sube el costo por formulario. Está bien: lo que quieres bajar es el
            costo por lead válido, no el costo por formulario.
          </p>

          <h2 className={H2}>Formulario instantáneo: más volumen vs mayor intención y preguntas que descalifican</h2>
          <h3 className={H3}>Elige el tipo de formulario a propósito</h3>
          <p className={P_}>
            Meta ofrece varios tipos de formulario instantáneo. El de más volumen es el predeterminado. El de
            mayor intención está pensado para conseguir leads más intencionales (
            <a href={SOURCES.tiposFormulario} target="_blank" rel="noopener noreferrer" className={A}>
              tipos de formulario
            </a>
            ): agrega un paso en el que la persona revisa y confirma sus respuestas antes de enviar (
            <a href={SOURCES.formulariosApi} target="_blank" rel="noopener noreferrer" className={A}>
              documentación de formularios para anuncios
            </a>
            ). Ese paso extra frena al que tocó «enviar» sin leer. Vas a recibir menos formularios; la pregunta
            es si recibes más leads válidos, y eso solo lo responde el CRM.
          </p>
          <h3 className={H3}>Haz preguntas que descalifiquen</h3>
          <p className={P_}>
            Un formulario que solo pide nombre, correo y teléfono no filtra nada.
            Meta permite agregar preguntas personalizadas de opción múltiple y de respuesta corta (
            <a href={SOURCES.preguntas} target="_blank" rel="noopener noreferrer" className={A}>
              Meta Business Help: preguntas personalizadas
            </a>
            ) y usar lógica condicional, para que la siguiente pregunta dependa de lo que la persona respondió (
            <a href={SOURCES.condicional} target="_blank" rel="noopener noreferrer" className={A}>
              Meta Business Help: lógica condicional
            </a>
            ). Algunas preguntas que suelen funcionar:
          </p>
          <ul className="space-y-2 mb-6 pl-4">
            {[
              "¿En qué ciudad o país está tu negocio? (con opciones cerradas, solo donde vendes)",
              "¿Qué tipo de empresa eres? o ¿qué necesitas resolver? (opciones que separen tu cliente del que no lo es)",
              "¿Cuándo piensas empezar? (este mes, en tres meses, solo estoy averiguando)",
              "Una pregunta abierta corta sobre el problema. Quien escribe dos líneas suele estar más interesado que quien no escribe nada.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#424656] text-sm leading-relaxed">
                <span className="text-[#727687] mt-0.5">–</span>
                {item}
              </li>
            ))}
          </ul>
          <p className={P_}>
            Usa opciones cerradas siempre que puedas: son las que después puedes filtrar y contar en el CRM. Y
            pide el teléfono como obligatorio. En LATAM, el correo solo no sirve para contactar en minutos.
          </p>

          <h2 className={H2}>Después del formulario: los primeros minutos deciden</h2>
          <p className={P_}>
            Aquí se pierden muchos leads buenos que después alguien llama «basura». El formulario llega, crea un
            contacto en una lista y nadie lo ve hasta el día siguiente. Para entonces la persona ya habló con
            otros tres. Antes de culpar a la campaña, revisa esto:
          </p>
          <ol className="space-y-3 mb-8">
            {[
              "El formulario crea una oportunidad en el CRM, no solo un contacto.",
              "Esa oportunidad tiene un responsable asignado en el mismo momento.",
              "El primer contacto sale en minutos, por WhatsApp del negocio, llamada o SMS.",
              "Quien atiende marca el resultado: válido, no contesta o descartado, con motivo.",
            ].map((q, i) => (
              <li key={q} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066ff] text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-[#424656] text-sm leading-relaxed pt-1.5">{q}</span>
              </li>
            ))}
          </ol>
          <p className={P_}>
            Ese contacto rápido también es tu validación: un teléfono que no existe o una persona que no recuerda
            el formulario se detecta en la primera llamada. Así se ve el arreglo en pantalla, con un formulario
            de prueba:{" "}
            <Link href="/sistema" className={A}>
              el flujo form → oportunidad + responsable
            </Link>
            . Si todavía no tienes CRM, lo montamos con{" "}
            <Link href="/soluciones/gohighlevel" className={A}>
              GoHighLevel
            </Link>{" "}
            o con{" "}
            <Link href="/soluciones/hubspot" className={A}>
              HubSpot
            </Link>
            , según tu operación.
          </p>

          <h2 className={H2}>Devolverle a Meta qué lead sí sirvió (etapas del CRM y API de Conversiones)</h2>
          <p className={P_}>
            Esta es la capa que casi nadie arma y la que cambia lo que Meta sale a buscar. Meta documenta cómo
            conectar tu CRM con la API de Conversiones para enviar la etapa de cada lead de formulario
            instantáneo (por ejemplo: lead inicial, calificado, oportunidad, venta), identificándolo con el ID de
            lead que Meta generó (
            <a href={SOURCES.crm} target="_blank" rel="noopener noreferrer" className={A}>
              API de Conversiones para CRM
            </a>
            ). Con esa información puedes optimizar por clientes potenciales de conversión: Meta busca a la gente
            con más probabilidad de llegar a la etapa que elegiste, no a la que envía formularios más rápido.
          </p>
          <p className={P_}>Según la misma documentación, funciona mejor cuando:</p>
          <ul className="space-y-2 mb-6 pl-4">
            {[
              "Guardas en el CRM el ID de lead de Meta de cada formulario.",
              "Generas al menos 200 leads al mes.",
              "Envías los datos al menos una vez al día.",
              "La etapa por la que quieres optimizar ocurre dentro de los 28 días posteriores al lead.",
              "Esa etapa tiene una tasa de conversión de entre 1% y 40% sobre los leads.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#424656] text-sm leading-relaxed">
                <span className="text-[#727687] mt-0.5">–</span>
                {item}
              </li>
            ))}
          </ul>
          <p className={P_}>
            Si tu volumen todavía no llega ahí, igual vale la pena guardar el ID de lead y registrar las etapas
            desde hoy: es el historial que vas a necesitar cuando llegues. Y si el lead entra por tu sitio web y
            no por formulario instantáneo, el camino es otro (píxel y API de Conversiones web, con
            deduplicación); está en{" "}
            <Link href="/blog/tracking-server-side-que-es-por-que-pixel-miente" className={A}>
              qué es el tracking server-side
            </Link>
            .
          </p>

          <h2 className={H2}>Cómo medir el porcentaje de leads basura en tu CRM</h2>
          <p className={P_}>
            Mientras la calidad se discuta por WhatsApp entre marketing y ventas, nadie va a ganar la discusión.
            Pásala al CRM:
          </p>
          <ol className="space-y-3 mb-6">
            {[
              "Crea un campo obligatorio «motivo de descarte» con opciones cerradas.",
              "Guarda en cada lead la campaña, el anuncio y el formulario de origen.",
              "Cada semana, divide leads descartados entre leads recibidos, por campaña y por formulario.",
              "Mira el motivo, no solo el porcentaje: no es lo mismo «no contesta» que «fuera de zona».",
            ].map((q, i) => (
              <li key={q} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066ff] text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-[#424656] text-sm leading-relaxed pt-1.5">{q}</span>
              </li>
            ))}
          </ol>
          <p className={P_}>Motivos de descarte que suelen servir como punto de partida:</p>
          <ul className="space-y-2 mb-6 pl-4">
            {motivos.map((m) => (
              <li key={m} className="flex items-start gap-3 text-[#424656] text-sm leading-relaxed">
                <span className="text-[#727687] mt-0.5">–</span>
                {m}
              </li>
            ))}
          </ul>
          <p className={P_}>
            Cada motivo apunta a una capa. «Fuera de zona» se arregla en la segmentación y en las preguntas.
            «Datos falsos» se arregla con el tipo de formulario. «No contesta» muchas veces es velocidad de
            respuesta, no calidad. Con esa tabla dejas de pedir «leads de mejor calidad» en abstracto y sabes
            qué tocar.
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
            Documentación de Meta revisada el 4 de octubre de 2026:{" "}
            <a href={SOURCES.tiposFormulario} target="_blank" rel="noopener noreferrer" className={A}>tipos de formulario instantáneo</a>,{" "}
            <a href={SOURCES.formulariosApi} target="_blank" rel="noopener noreferrer" className={A}>formularios para anuncios</a>,{" "}
            <a href={SOURCES.preguntas} target="_blank" rel="noopener noreferrer" className={A}>preguntas personalizadas</a>,{" "}
            <a href={SOURCES.condicional} target="_blank" rel="noopener noreferrer" className={A}>lógica condicional</a> y{" "}
            <a href={SOURCES.crm} target="_blank" rel="noopener noreferrer" className={A}>API de Conversiones para CRM</a>.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p className="text-[#1c1b1b] font-bold text-lg mb-3">¿Tus leads de Meta no contestan?</p>
            <p className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed">
              En el diagnóstico en vivo revisamos tu campaña, tu formulario y lo que pasa con el lead en el CRM.
              Te decimos en cuál de las tres capas se está yendo la calidad.
            </p>
            <Link
              href="/diagnostico-en-vivo"
              data-cta="diag-envivo-leads-basura-final"
              className="inline-block bg-[#0066ff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0052cc] transition-colors duration-150 text-sm"
            >
              Solicitar diagnóstico gratuito →
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-[#fcf9f8] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#727687] mb-4">Lee también</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog/tracking-server-side-cpl-plataforma"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Tracking Técnico</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">CPL de plataforma vs CPL real: por qué Meta y Google no cuadran con tu CRM</p>
            </Link>
            <Link
              href="/agencia-meta-ads-latam"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Servicios</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">Agencia de Meta Ads: Instagram y Facebook Ads para empresas en LATAM</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
