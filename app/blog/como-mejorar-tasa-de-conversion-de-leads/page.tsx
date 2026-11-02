import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { toJsonLd } from "@/lib/schema";

const URL = "https://jtads.com/blog/como-mejorar-tasa-de-conversion-de-leads";
const SEO_TITLE = "Cómo mejorar la tasa de conversión de leads (hasta la venta)";
const H1_TEXT =
  "Cómo mejorar la tasa de conversión de leads: mídela hasta la venta, no hasta el formulario";
const DESC =
  "Tasa de conversión de leads medida en el CRM: lead, contactado, calificado y venta. Cómo ver en qué etapa se cae y qué arreglar primero.";

// TODO(merge): fecha de publicación. Una sola constante para lo visible, el
// JSON-LD y el lastmod de app/sitemap.ts. El valor de abajo es un PLACEHOLDER
// (fecha objetivo jue 5 nov 2026): fijar el día real del merge con el OK de
// Juan y cambiar también la entrada de app/sitemap.ts.
const DATE_PUBLISHED = "2026-11-05T00:00:00-05:00"; // TODO(merge)
const DATE_MODIFIED = "2026-11-05T00:00:00-05:00"; // TODO(merge)
const DATE_ISO = "2026-11-05"; // TODO(merge)
const DATE_VISIBLE = "5 de noviembre de 2026"; // TODO(merge)
const SOURCES_CONSULTED = "1 de noviembre de 2026";
const BIO_URL = "https://www.linkedin.com/in/juan-tabares-b1272b58/";
// Imagen OG: la de marca (app/opengraph-image.tsx), URL absoluta a jtads.com.
const IMAGE_URL = "https://jtads.com/opengraph-image";
const IMAGE_ALT = "JT Ads: paid media para empresas en LATAM";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESC,
  alternates: { canonical: URL, languages: { es: URL } },
  openGraph: {
    title: SEO_TITLE,
    description: DESC,
    images: [{ url: IMAGE_URL, width: 1200, height: 630, alt: IMAGE_ALT }],
    url: URL,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: DESC,
    images: [{ url: IMAGE_URL, width: 1200, height: 630, alt: IMAGE_ALT }],
  },
};

// Fuente única: la FAQ visible y el FAQPage del JSON-LD salen de esta lista.
const faqs = [
  {
    q: "¿Qué es una buena tasa de conversión de leads?",
    a: "No existe un número bueno para todos: depende del negocio, del canal y de cómo definas «lead». Sin datos propios medidos en el CRM, cualquier porcentaje que veas en internet es una suposición. Mide tu tasa entre etapas durante varias semanas, por campaña, y compárate contigo mismo, no contra un promedio ajeno.",
  },
  {
    q: "¿Cómo se calcula la tasa de conversión de leads a ventas?",
    a: "Divide las ventas ganadas entre los leads del mismo periodo y de la misma fuente, y multiplica por 100. Es mejor calcularla también por etapa y por cohorte: los leads que entraron en la misma semana. Así ves dónde se pierden, no solo cuántos. Ejemplo con números inventados: 8 ventas de 100 leads es 8 %.",
  },
  {
    q: "¿Por qué mi plataforma de anuncios muestra muchas conversiones y casi no hay ventas?",
    a: "Porque la plataforma cuenta el formulario enviado, no la venta. Esa conversión ocurre antes de que alguien contacte, califique o cierre al lead, y esas etapas solo las ve tu CRM. Un costo por conversión bajo puede convivir con cero ventas. Por eso conviene leer el embudo en el CRM, por campaña, hasta la venta.",
  },
  {
    q: "¿Qué etapa del embudo conviene arreglar primero?",
    a: "Arregla primero la etapa que más leads pierde y que depende de ti. Si nadie mide cuánto tardan en contactar al lead, empieza por «contactado»: suele ser la fuga más barata de corregir. Cambia una sola cosa a la vez y compárala por cohorte, para saber si el cambio funcionó o fue casualidad.",
  },
  {
    q: "¿Esto sirve si no uso Meta Ads?",
    a: "Sí. El embudo en el CRM funciona igual con Google Ads, LinkedIn Ads o cualquier otro canal: lead, contactado, calificado, venta. Lo único que cambia es cómo le devuelves esas etapas a cada plataforma, porque cada una tiene sus propias condiciones. Lo primero, medir y cortar por campaña, no depende del canal.",
  },
];

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://jtads.com/#organization",
      name: "JT Ads",
      url: "https://jtads.com",
    },
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: SEO_TITLE,
      inLanguage: "es",
      breadcrumb: { "@id": `${URL}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jtads.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://jtads.com/blog" },
        { "@type": "ListItem", position: 3, name: H1_TEXT, item: URL },
      ],
    },
    {
      "@type": "BlogPosting",
      "@id": `${URL}#article`,
      headline: H1_TEXT,
      author: {
        "@type": "Person",
        "@id": "https://jtads.com/#juan-tabares",
        name: "Juan Tabares",
        jobTitle: "Fundador de JT Ads",
        url: BIO_URL,
        worksFor: { "@id": "https://jtads.com/#organization" },
      },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      mainEntityOfPage: { "@id": `${URL}#webpage` },
      url: URL,
      inLanguage: "es",
      description: DESC,
      image: IMAGE_URL,
      publisher: { "@id": "https://jtads.com/#organization" },
      citation: [
        "https://developers.facebook.com/docs/marketing-api/conversions-api/conversion-leads-integration",
        "https://support.google.com/google-ads/answer/2998031?hl=es",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      inLanguage: "es",
      isPartOf: { "@id": `${URL}#webpage` },
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const P_ = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-bold text-2xl text-[#1c1b1b] mt-12 mb-4";
const H3 = "font-bold text-lg text-[#1c1b1b] mt-8 mb-3";
const A = "text-[#0066ff] font-semibold hover:underline";
const STRONG = "text-[#1c1b1b]";
const TH = "p-4 text-xs font-bold uppercase tracking-wider text-[#424656]";
const TR = "border-t border-[#c2c6d8]/15";
const TD = "p-4 text-sm text-[#424656] align-top";
const TDH = "p-4 text-sm font-medium text-[#1c1b1b] align-top";
const UL = "list-disc pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base";
const OL = "list-decimal pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base";
const TABLE_WRAP = "overflow-x-auto rounded-xl border border-[#c2c6d8]/15 my-8";

export default function PostTasaConversionLeads() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(schemaGraph) }} />
      <Navbar />

      <section className="bg-[#1c1b1b] pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#9bb4fe] text-sm mb-8 hover:underline">
            ← Volver al blog
          </Link>
          <span className="inline-block mb-5 px-3 py-1 rounded-full bg-[#9bb4fe]/20 text-[#9bb4fe] text-xs font-semibold uppercase tracking-wide">
            Optimización
          </span>
          <h1 className="font-bold text-white text-3xl md:text-4xl leading-tight mb-6">{H1_TEXT}</h1>
          <p className="text-[#727687] text-sm">
            Por{" "}
            <a href={BIO_URL} target="_blank" rel="noopener noreferrer" className="text-[#9bb4fe] hover:underline">
              Juan Tabares
            </a>
            , fundador de JT Ads · <time dateTime={DATE_ISO}>{DATE_VISIBLE}</time> · 11 min de lectura
          </p>
        </div>
      </section>

      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className={P_}>
            Recibes leads y las ventas no suben. La reacción de siempre es tocar el anuncio, la landing o el color del botón. Casi nunca es ahí.
          </p>
          <p className={P_}>«Tasa de conversión de leads» son dos números distintos, y se confunden:</p>
          <ol className={OL}>
            <li>
              <strong className={STRONG}>Visitante → lead.</strong> Cuántos de los que entran a tu página dejan sus datos. Es el número que ve Google Ads o Meta Ads.
            </li>
            <li>
              <strong className={STRONG}>Lead → venta.</strong> Cuántos de esos leads terminan pagando. Es el que paga las cuentas.
            </li>
          </ol>
          <p className={P_}>
            La plataforma de anuncios solo ve el primero. El segundo vive en tu CRM. Este post es sobre cómo leer ese segundo número, etapa por etapa, para saber qué arreglar.
          </p>
          <p className={P_}>
            Aquí no hablo de formularios ni de cómo filtrar leads antes de que entren. Eso está en{" "}
            <Link href="/blog/leads-basura-meta-ads" className={A}>cómo filtrar leads basura en Meta Ads</Link>. Esto empieza después: ya tienes leads en el CRM y quieres saber por qué no se vuelven ventas.
          </p>

          <h2 className={H2}>¿Qué es la tasa de conversión de leads?</h2>
          <p className={P_}>
            En JT Ads medimos la tasa de conversión de leads en el CRM, no en la plataforma de anuncios: es el porcentaje de leads que pasa de una etapa a la siguiente (contactado, calificado, venta). La plataforma solo ve el formulario enviado; la venta ocurre después y solo el CRM la ve.
          </p>
          <p className={P_}>
            Por eso una sola tasa global engaña. Una tasa baja de lead a venta no te dice si el lead nunca fue contactado, si fue contactado y no era para ti, o si era para ti y nadie le dio seguimiento. Son tres problemas con tres arreglos distintos.
          </p>

          <h2 className={H2}>Dos «tasas de conversión» que se confunden</h2>
          <h3 className={H3}>Qué ve la plataforma y qué no</h3>
          <p className={P_}>
            Google Ads y Meta registran una conversión cuando alguien envía el formulario o hace la acción que configuraste. Ahí termina su visibilidad. No saben si el lead contestó el teléfono, si era el decisor, ni si compró.
          </p>
          <p className={P_}>Eso no es un defecto. Es el límite de lo que miden. El error es leerlo como si fuera venta.</p>
          <h3 className={H3}>Por qué un CPL bajo puede convivir con cero ventas</h3>
          <p className={P_}>
            Un costo por lead bajo dice que el anuncio consiguió formularios baratos. No dice nada de lo que pasó con ellos. Si el lead se muere en la etapa de contacto, el CPL sigue viéndose bien y la venta no llega. La diferencia entre el CPL del panel y el costo real por lead que avanza la expliqué en{" "}
            <Link href="/blog/tracking-server-side-cpl-plataforma" className={A}>CPL de plataforma vs CPL real</Link>.
          </p>
          <p className={P_}>
            Reducir el CPL tampoco es mejorar la conversión a venta. Son trabajos distintos, y{" "}
            <Link href="/blog/como-reducir-cpl-google-ads-latam" className={A}>bajar el CPL en Google Ads</Link> no te dice nada sobre lo que pasa después del formulario.
          </p>

          <h2 className={H2}>Las 4 etapas que hay que medir en el CRM</h2>
          <p className={P_}>
            Todo CRM, el que uses (HubSpot, otro), puede tener estas cuatro etapas. Si tu pipeline tiene más, agrúpalas en estas.
          </p>
          <div className={TABLE_WRAP}>
            <table className="w-full min-w-[560px] text-left border-collapse">
              <thead>
                <tr className="bg-[#f6f3f2]">
                  <th scope="col" className={TH}>Etapa</th>
                  <th scope="col" className={TH}>Qué cuenta</th>
                  <th scope="col" className={TH}>Qué dato mirar</th>
                  <th scope="col" className={TH}>Quién es dueño</th>
                </tr>
              </thead>
              <tbody>
                <tr className={TR}>
                  <th scope="row" className={TDH}>Lead</th>
                  <td className={TD}>Entró un contacto con datos válidos</td>
                  <td className={TD}>Fuente y campaña de origen</td>
                  <td className={TD}>Marketing</td>
                </tr>
                <tr className={TR}>
                  <th scope="row" className={TDH}>Contactado</th>
                  <td className={TD}>Alguien habló con él, no solo intentó</td>
                  <td className={TD}>Tiempo hasta el primer contacto real y canal usado</td>
                  <td className={TD}>Ventas</td>
                </tr>
                <tr className={TR}>
                  <th scope="row" className={TDH}>Calificado</th>
                  <td className={TD}>Cumple los criterios acordados de encaje</td>
                  <td className={TD}>Criterio aplicado y motivo si no pasa</td>
                  <td className={TD}>Ventas, con criterio escrito junto a marketing</td>
                </tr>
                <tr className={TR}>
                  <th scope="row" className={TDH}>Venta</th>
                  <td className={TD}>Pagó o firmó</td>
                  <td className={TD}>Valor y fecha de cierre</td>
                  <td className={TD}>Ventas</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={P_}>
            La tasa que importa es la de <strong className={STRONG}>cada paso al siguiente</strong>: lead → contactado, contactado → calificado, calificado → venta. La tasa lead → venta global es el resultado de multiplicarlas, no un dato que se pueda arreglar por separado.
          </p>

          <h3 className={H3}>Cómo definir «contactado» y «calificado»</h3>
          <p className={P_}>
            Escríbelo en una hoja y que lo firmen marketing y ventas. Sin definición compartida, cada lado cuenta distinto y el embudo no se puede leer.
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>Contactado</strong> es una conversación real. Un intento de llamada sin respuesta no cuenta. Un mensaje enviado sin lectura tampoco.
            </li>
            <li>
              <strong className={STRONG}>Calificado</strong> es que cumple los criterios de encaje que acordaron los dos equipos: qué problema tiene, si puede pagar, si es quien decide. Los criterios son tuyos. No te los puedo dar yo desde afuera.
            </li>
          </ul>

          <h3 className={H3}>La fórmula por etapa</h3>
          <p className={P_}>
            Tasa de una etapa = leads que pasaron a la siguiente ÷ leads que entraron a esa etapa × 100. Sácala por cohorte: los leads que entraron en la misma semana, seguidos hasta que cierran o se descartan. Mezclar cohortes distintas es la forma más común de leer mal el embudo.
          </p>
          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[#424656] text-sm leading-relaxed mb-2">
              <strong className={STRONG}>Ejemplo con variables (sin números).</strong> A leads entran → B son contactados → C son calificados → D terminan en venta.
            </p>
            <p className="text-[#424656] text-sm leading-relaxed">
              Lead → contactado: B ÷ A. Contactado → calificado: C ÷ B. Calificado → venta: D ÷ C. Global: D ÷ A. Multiplica cada cociente por 100 y lo ves en %. La etapa con el cociente más bajo es donde se te cae el lead, y la comparas contra tu propio histórico, no contra un rango de afuera. El panel de anuncios solo ve A.
            </p>
          </div>
          <p className={P_}>
            <strong className={STRONG}>¿Quieres ver tu embudo así?</strong>{" "}
            <Link href="/diagnostico-en-vivo" data-cta="diag-envivo-j3-medio" className={A}>
              Mira tu embudo con nosotros: revisamos en vivo dónde se cae tu lead, del anuncio al CRM
            </Link>.
          </p>

          <h2 className={H2}>Dónde se cae el lead: cómo leer el embudo</h2>
          <p className={P_}>
            Un «lead → venta bajo» tiene causas distintas según la etapa donde se cae. Mira primero dónde está la fuga y recién después piensa en la causa.
          </p>
          <div className={TABLE_WRAP}>
            <table className="w-full min-w-[560px] text-left border-collapse">
              <thead>
                <tr className="bg-[#f6f3f2]">
                  <th scope="col" className={TH}>Dónde se cae</th>
                  <th scope="col" className={TH}>Qué mirar primero</th>
                  <th scope="col" className={TH}>Quién lo arregla</th>
                </tr>
              </thead>
              <tbody>
                <tr className={TR}>
                  <th scope="row" className={TDH}>Antes de «contactado»</th>
                  <td className={TD}>Tiempo de respuesta, canal de contacto, datos falsos o incompletos</td>
                  <td className={TD}>Ventas y operación</td>
                </tr>
                <tr className={TR}>
                  <th scope="row" className={TDH}>Entre «contactado» y «calificado»</th>
                  <td className={TD}>Criterio de calificación, oferta que la pauta prometió y no es la real</td>
                  <td className={TD}>Marketing y ventas juntos</td>
                </tr>
                <tr className={TR}>
                  <th scope="row" className={TDH}>Entre «calificado» y «venta»</th>
                  <td className={TD}>Seguimiento comercial, propuesta, ciclo de decisión</td>
                  <td className={TD}>Ventas</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className={H3}>Si se cae antes de «contactado»</h3>
          <p className={P_}>
            Los leads existen en el panel y nadie habló con ellos. Mira cuánto tardan en contactarlos y por qué canal, y compara contra los que sí contestaron. No te doy una cifra de «tiempo ideal»: no tengo una fuente oficial para eso. Lo que sí te digo es que cuanto antes, mejor, y que lo midas.
          </p>
          <p className={P_}>
            Los datos falsos o incompletos también caen aquí. Cómo reducirlos desde el formulario y la segmentación está en{" "}
            <Link href="/blog/leads-basura-meta-ads" className={A}>cómo filtrar el formulario y las preguntas</Link>. Cómo registrar por qué se descarta un lead está en{" "}
            <Link href="/blog/leads-basura-meta-ads" className={A}>el motivo de descarte obligatorio</Link>. Aquí solo importa que, si esta etapa es la rota, el arreglo está antes de la venta y no en el anuncio.
          </p>

          <h3 className={H3}>Si se cae entre «contactado» y «calificado»</h3>
          <p className={P_}>
            Hablaron con el lead y no era para ti. Pasa cuando la pauta promete algo que la oferta no entrega, o cuando el criterio de calificación está en la cabeza de una persona y no escrito.
          </p>
          <p className={P_}>
            Revisa qué decía el anuncio y qué escuchó el lead, y compáralo con lo que vendes. Si ventas descarta por «no es lo que buscaba», el problema suele ser la promesa. Si descarta por «no puede pagar», suele ser la segmentación o la oferta.
          </p>

          <h3 className={H3}>Si se cae entre «calificado» y «venta»</h3>
          <p className={P_}>
            Aquí la pauta ya hizo su trabajo. El lead era bueno y no compró. Mira seguimiento, tiempos entre contactos, propuesta y ciclo de decisión. Gastar más en anuncios no arregla una etapa de ventas rota. Solo trae más leads a la misma fuga.
          </p>

          <h2 className={H2}>Qué arreglar primero</h2>
          <p className={P_}>
            Arregla la etapa con más fuga <strong className={STRONG}>que dependa de ti</strong>. No la que más se ve en el panel ni la más fácil de tocar.
          </p>
          <ol className={OL}>
            <li>Saca las tasas entre etapas de las últimas semanas, por cohorte.</li>
            <li>Elige la etapa con más pérdida donde tengas control.</li>
            <li>
              Cambia <strong className={STRONG}>una</strong> cosa. Si cambias el anuncio, la landing y el guion de contacto a la vez, no sabrás qué funcionó.
            </li>
            <li>Mídela con la siguiente cohorte, no con los mismos leads de antes.</li>
          </ol>
          <p className={P_}>
            Tampoco se escala una etapa rota. Si pierdes la mayoría de los leads antes de contactarlos, más presupuesto solo multiplica la pérdida.
          </p>

          <h2 className={H2}>Cómo cortarlo por campaña y por canal</h2>
          <p className={P_}>
            Para saber qué campaña trae leads que sí cierran, el CRM tiene que guardar la fuente y la campaña de cada lead desde que entra. Sin ese campo, solo ves un embudo promedio de todo mezclado.
          </p>
          <p className={P_}>Dos reglas:</p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>Un embudo por canal.</strong> No mezcles Google, Meta y LinkedIn en una sola tasa. Cada uno trae leads con intención distinta.
            </li>
            <li>
              <strong className={STRONG}>Un embudo por campaña dentro del canal.</strong> Dos campañas del mismo canal pueden tener tasas muy distintas. Ahí está la decisión de dónde poner el presupuesto.
            </li>
          </ul>
          <p className={P_}>
            Esto sirve para cualquier canal, incluso uno nuevo. Probé ChatGPT Ads durante una semana y los leads llegaron en etapa temprana: querían aprender más que contratar. Es una prueba corta y pequeña, así que no concluyo nada sobre el canal. El detalle está en{" "}
            <Link href="/blog/chatgpt-ads" className={A}>mi prueba de ChatGPT Ads</Link>. Un canal nuevo se juzga igual: hasta el CRM, no hasta el formulario.
          </p>

          <h2 className={H2}>Cuándo devolver estas etapas a Google y Meta</h2>
          <p className={P_}>
            Cuando ya mides bien las etapas, puedes devolverlas a la plataforma para que optimice por el lead que sí avanza y no por el formulario enviado. No es el tema de este post, así que va en resumen:
          </p>
          <ul className={UL}>
            <li>
              <strong className={STRONG}>Meta</strong> documenta una integración para optimizar por una etapa de tu CRM, con requisitos propios. Está en la{" "}
              <a href="https://developers.facebook.com/docs/marketing-api/conversions-api/conversion-leads-integration" target="_blank" rel="noopener noreferrer" className={A}>documentación oficial de Meta</a> y la resumo en{" "}
              <Link href="/blog/leads-basura-meta-ads" className={A}>devolverle a Meta las etapas del CRM</Link>.
            </li>
            <li>
              <strong className={STRONG}>Google</strong> documenta que un clic en un anuncio puede acabar en una venta offline y que se puede importar esa conversión. Para quien empieza, Google recomienda las <strong className={STRONG}>conversiones mejoradas de clientes potenciales</strong> (
              <a href="https://support.google.com/google-ads/answer/2998031?hl=es" target="_blank" rel="noopener noreferrer" className={A}>Ayuda de Google Ads</a>).
            </li>
          </ul>
          <p className={P_}>Los pasos técnicos van en otra guía. La documentación de Google cambió en 2026, así que no los copio aquí.</p>

          <h2 className={H2}>Cómo lo trabaja JT Ads</h2>
          <p className={P_}>JT Ads es Partner de Google y Meta. Resultado que sí puedo decir: $500k+ USD/mes gestionados en ads.</p>
          <p className={P_}>
            Lo que hacemos con tu embudo: conectamos el anuncio con el CRM para que cada lead llegue con su fuente y campaña, y medimos la velocidad de contacto y el paso de lead a oportunidad. Lo ves en{" "}
            <Link href="/sistema" className={A}>/sistema</Link> y en{" "}
            <Link href="/crm-agencia-ads" className={A}>el CRM para la operación de ads</Link>. Trabajamos{" "}
            <Link href="/agencia-google-ads-latam" className={A}>Google Ads</Link> y{" "}
            <Link href="/agencia-meta-ads-latam" className={A}>Meta Ads</Link> para LATAM.
          </p>
          <p className={P_}>
            La pauta la pagas directo a la plataforma y la cuenta publicitaria queda a tu nombre. Cuánto cuesta depende de los requerimientos y la complejidad de cada cuenta.
          </p>
          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p className="text-[#424656] text-sm leading-relaxed max-w-md mx-auto">
              <strong className={STRONG}>Si ya sabes que pierdes leads y no sabes dónde:</strong>{" "}
              <Link href="/diagnostico-en-vivo" data-cta="diag-envivo-j3-final" className={A}>
                mira tu embudo con nosotros: revisamos en vivo dónde se cae tu lead, del anuncio al CRM
              </Link>.
            </p>
          </div>

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

          <h2 className={H2}>Fuentes</h2>
          <p className={P_}>Consultadas el {SOURCES_CONSULTED}.</p>
          <ul className="list-disc pl-6 mb-6 space-y-3 text-sm text-[#424656] leading-relaxed">
            <li>
              Meta for Developers, «Integración de la API de conversiones para CRM»:{" "}
              <a href="https://developers.facebook.com/docs/marketing-api/conversions-api/conversion-leads-integration" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://developers.facebook.com/docs/marketing-api/conversions-api/conversion-leads-integration</a>
            </li>
            <li>
              Ayuda de Google Ads, «Acerca de las importaciones de conversiones offline»:{" "}
              <a href="https://support.google.com/google-ads/answer/2998031?hl=es" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://support.google.com/google-ads/answer/2998031?hl=es</a>
            </li>
          </ul>
        </div>
      </article>

      <Footer />
    </>
  );
}
