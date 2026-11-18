import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { toJsonLd } from "@/lib/schema";

// J5 · Copy: Gabo, borrador c377713d… (18 nov 2026). FAQ y respuesta directa: Oráculo, literal.
// Fuente: /workspace/equipo/contenido/jtads/j5-poas-vs-roas-borrador.md
const URL = "https://jtads.com/blog/poas-vs-roas";
const SEO_TITLE = "POAS vs ROAS: cuándo medir la utilidad y no solo la venta";
const H1_TEXT = "POAS vs ROAS: cuándo medir la utilidad y no solo la venta";
const DESC =
  "POAS vs ROAS: qué mide cada uno, cuándo mirar la utilidad y no solo la venta, y por qué un buen ROAS no garantiza ganancia.";

// TODO(merge): fecha de publicación. Una sola constante para lo visible, el
// JSON-LD, el índice (app/blog/page.tsx) y el lastmod de app/sitemap.ts.
// Los valores de abajo son un PLACEHOLDER del calendario (jue 19 nov 2026).
// El R20 no fija fecha de merge. NO se mergea con esta fecha: al merge, con
// el OK de Juan, fijar un solo día real en DATE_PUBLISHED, DATE_MODIFIED,
// DATE_ISO, DATE_VISIBLE, el índice y el lastmod del sitemap.
const DATE_PUBLISHED = "2026-11-19T00:00:00-05:00"; // TODO(merge)
const DATE_MODIFIED = "2026-11-19T00:00:00-05:00"; // TODO(merge)
const DATE_ISO = "2026-11-19"; // TODO(merge)
const DATE_VISIBLE = "19 de noviembre de 2026"; // TODO(merge)
const SOURCES_CONSULTED = "18 de noviembre de 2026";
const BIO_URL = "https://www.linkedin.com/in/juan-tabares-b1272b58/";
// OG global del sitio (app/opengraph-image.tsx). No se crea una imagen propia.
const IMAGE_URL = "https://jtads.com/opengraph-image";
const IMAGE_ALT = "POAS vs ROAS: cuándo medir la utilidad y no solo la venta. JT Ads";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESC,
  alternates: { canonical: URL, languages: { es: URL } },
  openGraph: {
    title: SEO_TITLE,
    description: DESC,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: IMAGE_ALT }],
    url: URL,
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: DESC,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: IMAGE_ALT }],
  },
};

// Fuente única: la FAQ visible y el FAQPage del JSON-LD salen de esta lista
// (texto literal de Oráculo en seo/briefs/jtads-j5-bloque-geo.json).
const faqs = [
  {
    q: "¿Qué es el POAS y en qué se diferencia del ROAS?",
    a: "El POAS (profit on ad spend) divide la utilidad o contribución atribuida a la pauta entre el gasto publicitario; el ROAS divide el valor de conversión, normalmente ingresos, entre ese gasto. En Google Ads, el ROAS se lee en la columna «Valor conv./coste». La diferencia está en el numerador: venta frente a lo que queda tras los costes variables.",
  },
  {
    q: "¿Un ROAS alto significa que la campaña es rentable?",
    a: "No necesariamente. El ROAS solo compara valor de conversión con gasto; no descuenta el costo del producto, el envío, las comisiones, las devoluciones ni el costo de atender al cliente. Dos campañas con el mismo ROAS pueden dejar utilidades opuestas si sus márgenes son distintos. Para saber si ganas dinero, calcula cuánto queda después de esos costes.",
  },
  {
    q: "¿Cuál es un buen POAS?",
    a: "No hay un número universal. Si el numerador es la contribución antes de pauta, un POAS de 1 solo cubre la pauta y por encima queda contribución; si restas la pauta en el numerador, el equilibrio pasa a 0. Usa una sola convención por informe y fija el objetivo según tus márgenes y tus costes fijos.",
  },
  {
    q: "¿Debo dejar de mirar el ROAS?",
    a: "No. El ROAS sigue siendo útil para comparar anuncios y campañas dentro de una misma plataforma y para entender qué optimiza la puja: según Google, la estrategia ROAS objetivo maximiza el valor de conversión, como ingresos de ventas o márgenes de beneficios. Usa el POAS para decidir presupuesto: escalar, mantener o pausar.",
  },
  {
    q: "¿Puedo optimizar Google Ads por margen y no solo por ventas?",
    a: "Sí, en parte. Google Ads indica que el valor de conversión puede representar ingresos de ventas o márgenes de beneficios, y la puja ROAS objetivo maximiza ese valor. Con datos del carrito y el coste de los bienes vendidos en Merchant Center, reporta beneficio bruto. Si envías margen como valor, «Valor conv./coste» pasa a leer utilidad sobre gasto.",
  },
  {
    q: "¿El POAS sirve si mi negocio no es un ecommerce?",
    a: "Sí. En negocios de leads la pregunta es la misma: cuánto queda después de conseguir, atender y cerrar al cliente, no cuánto valor reportó la plataforma. Para eso necesitas el valor de la venta cerrada y su margen desde el CRM, porque un lead por sí solo no es utilidad. Sin ese dato, el ROAS de plataforma puede engañar.",
  },
  {
    q: "¿Cómo se calcula el ROAS de equilibrio?",
    a: "Divide 1 entre tu margen de contribución, expresado como fracción de la venta. Por debajo de ese ROAS, la pauta cuesta más de lo que deja cada venta después de los costes variables. Por eso un mismo objetivo de ROAS para productos o servicios con márgenes distintos lleva a decisiones equivocadas: cada línea tiene su propio punto de equilibrio.",
  },
  {
    q: "¿Cuánto debe ser el ROAS?",
    a: "No hay una cifra correcta para todos. Google indica que el ROAS objetivo debe definirse según tus objetivos de negocio, usando tu historial de ROAS como referencia. Como mínimo, debe superar tu ROAS de equilibrio, que depende de tu margen: con márgenes bajos necesitas un ROAS más alto para no perder dinero con la pauta.",
  },
];

const DIRECT_ANSWER =
  "El POAS mide utilidad; el ROAS, venta. El ROAS divide el valor de conversión atribuido entre el gasto publicitario. El POAS divide la utilidad o contribución, después de costes variables como producto, envío, comisiones y devoluciones, entre ese mismo gasto. Un ROAS alto puede perder dinero si el margen es bajo; el POAS lo deja a la vista.";

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://jtads.com/#organization",
      name: "JT Ads",
      url: "https://jtads.com",
      logo: {
        "@type": "ImageObject",
        url: "https://jtads.com/logo-blue.png",
      },
    },
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: SEO_TITLE,
      description: DESC,
      inLanguage: "es",
      breadcrumb: { "@id": `${URL}#breadcrumb` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
    },
    {
      "@type": "BlogPosting",
      "@id": `${URL}#article`,
      headline: SEO_TITLE,
      description: DIRECT_ANSWER,
      inLanguage: "es",
      mainEntityOfPage: { "@id": `${URL}#webpage` },
      author: {
        "@type": "Person",
        "@id": "https://jtads.com/#juan-tabares",
        name: "Juan Tabares",
        jobTitle: "Fundador de JT Ads",
        url: BIO_URL,
        worksFor: { "@id": "https://jtads.com/#organization" },
      },
      publisher: { "@id": "https://jtads.com/#organization" },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      image: IMAGE_URL,
      citation: [
        "https://support.google.com/google-ads/answer/6268637?hl=es",
        "https://support.google.com/google-ads/answer/3419241?hl=es",
        "https://support.google.com/google-ads/answer/16564103?hl=es",
        "https://support.google.com/google-ads/answer/9028254?hl=es-419",
        "https://support.google.com/merchants/answer/9017895?hl=es-419",
        "https://support.google.com/google-ads/answer/1722066?hl=es",
        "https://support.google.com/google-ads/answer/6268632?hl=es",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${URL}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jtads.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://jtads.com/blog" },
        { "@type": "ListItem", position: 3, name: SEO_TITLE, item: URL },
      ],
    },
  ],
};

const sources: { label: string; href: string }[] = [
  {
    label:
      "Ayuda de Google Ads, «Acerca de la estrategia de puja ROAS objetivo» (definir el valor de las conversiones antes de usarla; predicción del valor; columna «Valor conv./coste»; cambio de nomenclatura desde junio de 2026)",
    href: "https://support.google.com/google-ads/answer/6268637?hl=es",
  },
  {
    label:
      "Ayuda de Google Ads, «Acerca de los valores de conversión» (el valor puede ser ingresos de ventas o márgenes de beneficios; columna «Valor de conversión/Coste»)",
    href: "https://support.google.com/google-ads/answer/13064207?hl=es",
  },
  {
    label:
      "Ayuda de Google Ads, «Acerca de la estrategia de puja Maximizar el valor de las conversiones» (el valor a maximizar puede ser márgenes de beneficios o ingresos por ventas)",
    href: "https://support.google.com/google-ads/answer/7684216?hl=es",
  },
  {
    label:
      "Ayuda de Google Ads, «Acerca de las importaciones de conversiones offline» (GCLID + conversión offline, p. ej. firma de contrato; recomendación de Conversiones mejoradas de clientes potenciales)",
    href: "https://support.google.com/google-ads/answer/2998031?hl=es",
  },
];

const P_ = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-bold text-2xl text-[#1c1b1b] mt-12 mb-4";
const H3 = "font-bold text-lg text-[#1c1b1b] mt-8 mb-3";
const A = "text-[#0066ff] font-semibold hover:underline";
const UL = "list-disc pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base";
const OL = "list-decimal pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base";
const B = "text-[#1c1b1b]";
const TH = "p-4 text-xs font-bold uppercase tracking-wider text-[#424656]";
const TD = "p-4 text-sm text-[#424656] align-top";
const TD_B = "p-4 text-sm font-medium text-[#1c1b1b] align-top";

export default function PostPoasVsRoas() {
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
            Tracking Técnico
          </span>
          <h1 className="font-bold text-white text-3xl md:text-4xl leading-tight mb-6">{H1_TEXT}</h1>
          <p className="text-[#727687] text-sm">
            Por{" "}
            <a href={BIO_URL} target="_blank" rel="noopener noreferrer" className="text-[#9bb4fe] hover:underline">
              Juan Tabares
            </a>
            , fundador de JT Ads · <time dateTime={DATE_ISO}>{DATE_VISIBLE}</time> · 12 min de lectura
          </p>
          <p className="text-[#727687] text-sm mt-2">
            Actualizado el <time dateTime={DATE_ISO}>{DATE_VISIBLE}</time>. Documentación de Google Ads consultada el {SOURCES_CONSULTED}.
          </p>
        </div>
      </section>

      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <p className={P_}>Tienes una campaña con un ROAS que se ve bien en el panel. Escalas presupuesto. Fin de mes: la cuenta del banco no se parece a lo que prometía el panel. No es un error del píxel: el ROAS mide venta, y la venta no es lo mismo que la utilidad. Aquí te explico qué mide cada métrica, cómo calcularlas sin hacerte trampa y cuándo conviene mirar una u otra.</p>

          <h2 className={H2}>¿Qué es POAS y en qué se diferencia del ROAS?</h2>
          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">Respuesta corta</p>
            <p className="text-[#424656] text-sm leading-relaxed">{DIRECT_ANSWER}</p>
          </div>
          <p className={P_}>El POAS (profit on ad spend) no es una métrica oficial de Google ni de Meta, ni aparece como columna propia en esas plataformas: es una convención de la industria para mirar la utilidad o la contribución, no solo la venta. No compiten con el ROAS: el ROAS sirve para optimizar dentro de la plataforma y el POAS para decidir si escalas, mantienes o paras una campaña.</p>

          <h2 className={H2}>Cómo se calcula cada uno (define el numerador antes de comparar)</h2>
          <p className={P_}>Antes de discutir si una campaña «funciona», acuerda qué número va arriba de la división.</p>

          <h3 className={H3}>ROAS = valor o ingresos atribuidos ÷ gasto publicitario</h3>
          <p className={P_}>Es la métrica que ya conoces y la que te muestra la plataforma. En Google Ads la ves en la columna «Valor de conversión/Coste»: el valor total que registraron tus conversiones dividido entre lo que gastaste. La estrategia de puja ROAS objetivo trabaja sobre ese mismo valor: la Ayuda de Google Ads explica que, para usarla, primero tienes que definir el valor de las conversiones que mides, y que el sistema predice ese valor para pujar más alto cuando espera una conversión de mayor valor.</p>
          <p className={P_}>Fíjate en el detalle: el ROAS no sabe qué es ese valor. Si le mandas el total del carrito, mide facturación. Si le mandas otra cosa, mide otra cosa. El algoritmo optimiza lo que le envías, no lo que tú quisiste decir.</p>

          <h3 className={H3}>POAS = contribución o utilidad ÷ gasto publicitario</h3>
          <p className={P_}>El POAS cambia el numerador. En lugar de la venta, pones lo que queda de esa venta después de los costos variables que acordaste incluir: costo del producto o del servicio, envío, comisiones de pasarela o de venta, descuentos y devoluciones. En un negocio de servicios, también el costo de atender y cerrar a ese cliente.</p>
          <p className={P_}>La clave está en «que acordaste incluir». No hay una lista universal. Lo que importa es que la lista sea la misma en todos los informes y que todos en la empresa sepan cuál es.</p>

          <h3 className={H3}>Qué significa un POAS de 1,0</h3>
          <p className={P_}>Con esa convención, un POAS de 1,0 quiere decir que la contribución cubre exactamente lo que gastaste en pauta. Por encima, la pauta deja algo después de los costos incluidos; por debajo, esos costos más la pauta superan lo que entró.</p>
          <p className={P_}>Ojo con lo que no dice: no es un veredicto sobre todo el negocio. El arriendo, la nómina y el resto de los gastos fijos no están en esa cuenta. Un POAS por encima de 1,0 te dice que la pauta no está restando con esa convención; no te dice que la empresa sea rentable.</p>
          <p className={P_}><strong className={B}>Una advertencia de convención.</strong> Hay quien resta la pauta en el numerador (contribución menos gasto, dividido entre gasto). Con esa fórmula, el punto de equilibrio queda en 0 y no en 1. Las dos son válidas. Lo que no sirve es mezclarlas: elige una por informe y escríbela arriba de la tabla.</p>

          <h2 className={H2}>Por qué dos campañas pueden tener el mismo ROAS y una ganar y la otra perder</h2>
          <p className={P_}>Un ejemplo lo deja claro. Las cifras son <strong className={B}>inventadas, solo para ilustrar la fórmula</strong>: no son un caso de JT Ads ni un promedio del mercado.</p>
          <p className={P_}><strong className={B}>Ejemplo ilustrativo (cifras inventadas):</strong></p>
          <div className="overflow-x-auto rounded-xl border border-[#c2c6d8]/15 my-8">
            <table className="w-full min-w-[560px] text-left border-collapse">
              <thead>
                <tr className="bg-[#f6f3f2]">
                  <th scope="col" className={TH}></th>
                  <th scope="col" className={TH}>Campaña A</th>
                  <th scope="col" className={TH}>Campaña B</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className={TD_B}>Gasto en pauta</th>
                  <td className={TD}>USD 1.000</td>
                  <td className={TD}>USD 1.000</td>
                </tr>
                <tr>
                  <th scope="row" className={TD_B}>Venta atribuida</th>
                  <td className={TD}>USD 4.000</td>
                  <td className={TD}>USD 4.000</td>
                </tr>
                <tr>
                  <th scope="row" className={TD_B}>ROAS</th>
                  <td className={TD}><strong className={B}>4,0</strong></td>
                  <td className={TD}><strong className={B}>4,0</strong></td>
                </tr>
                <tr>
                  <th scope="row" className={TD_B}>Costos variables incluidos (producto, envío, comisiones, devoluciones)</th>
                  <td className={TD}>USD 2.000</td>
                  <td className={TD}>USD 3.400</td>
                </tr>
                <tr>
                  <th scope="row" className={TD_B}>Contribución</th>
                  <td className={TD}>USD 2.000</td>
                  <td className={TD}>USD 600</td>
                </tr>
                <tr>
                  <th scope="row" className={TD_B}>POAS</th>
                  <td className={TD}><strong className={B}>2,0</strong></td>
                  <td className={TD}><strong className={B}>0,6</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={P_}>Mismo gasto, misma venta, mismo ROAS. Si solo miras el panel, son gemelas. Pero la campaña A deja USD 1.000 después de pagar la pauta y la B pierde USD 400. Si decides presupuesto con el ROAS, le das el mismo dinero a las dos. Si lo decides con el POAS, sabes a cuál quitarle.</p>
          <p className={P_}>La diferencia no está en Google Ads ni en Meta Ads, sino en lo que vendes con cada una: margen distinto, más devoluciones, descuentos o envío más caro.</p>

          <h2 className={H2}>Cuándo usar ROAS y cuándo usar POAS</h2>
          <p className={P_}>No te voy a decir que el POAS «es mejor». Responden preguntas distintas, y las dos sirven.</p>

          <h3 className={H3}>ROAS: para comparar dentro de la plataforma</h3>
          <p className={P_}>
            El ROAS es la herramienta correcta para comparar anuncios, grupos o conjuntos dentro de una misma plataforma y con una mezcla de productos parecida. También te ayuda a entender qué está persiguiendo el algoritmo, porque las estrategias de puja por valor trabajan con el valor que tú les mandas. Si quieres ver hacia dónde va esa automatización, lo contamos en{" "}
            <Link href="/blog/hiper-automatizacion-campanas-mas-alla-performance-max" className={A}>qué viene después: AI Max, Advantage+ Audience y niveles de automatización</Link>.
          </p>

          <h3 className={H3}>POAS: para decidir presupuesto</h3>
          <p className={P_}>El POAS es la métrica para las decisiones de negocio: escalar, mantener o pausar; repartir presupuesto entre líneas de oferta con márgenes distintos; decidir si una promoción que dispara la venta también dispara la utilidad, o solo la venta.</p>

          <h3 className={H3}>El ROAS de equilibrio cambia con el margen</h3>
          <p className={P_}>Si divides 1 entre tu margen de contribución (expresado como fracción), obtienes el ROAS mínimo para no perder con esa definición. Siguiendo el ejemplo inventado de arriba: con un margen del 50 %, el equilibrio está en un ROAS de 2,0; con uno del 15 %, cerca de 6,7.</p>
          <p className={P_}>Por eso un único ROAS objetivo para todo el catálogo, o para todos tus servicios, engaña. El mismo número puede ser una campaña sana en una línea y una que pierde plata en otra. No hay un ROAS ni un POAS «bueno» universal: el tuyo sale de tus márgenes.</p>
          <p className={P_}>Y si quieres que la plataforma optimice hacia la utilidad, Google Ads lo contempla: su Ayuda indica que el valor de conversión que maximizan ROAS objetivo y Maximizar el valor de las conversiones puede ser el ingreso por ventas o los márgenes de beneficio. Es decir, puedes enviarle margen en lugar de facturación. Eso no significa que Google defina o reporte un POAS: la columna sigue llamándose «Valor de conversión/Coste» y mide el valor que tú le enviaste. Si ese valor es margen, el número se parece a un POAS, pero sigue siendo una convención tuya, no una definición oficial de Google. Si cambias qué significa el valor, cambias lo que optimiza la campaña: hazlo con calma y compara periodos equivalentes.</p>

          {/* Respuestas directas extra (PAA de Google). Texto literal de Oráculo. NO van en FAQPage ni en el JSON-LD. */}
          <h2 className={H2}>¿Qué significa el ROAS?</h2>
          <p className={P_}>ROAS significa retorno de la inversión publicitaria (return on ad spend): el valor de conversión, normalmente ingresos, que generan tus anuncios por cada unidad de gasto publicitario. En Google Ads se lee en la columna «Valor conv./coste»; multiplicada por 100, da el porcentaje que se usa como ROAS objetivo.</p>

          <h2 className={H2}>¿Cuál es la diferencia entre el ROI y el ROAS?</h2>
          <p className={P_}>El ROI mide beneficio y el ROAS, ingresos. Google Ads define el ROI como la relación entre el beneficio neto y los costes; el ROAS relaciona el valor de conversión con el gasto publicitario. Un ROAS alto no garantiza un ROI positivo, porque no descuenta el costo de lo vendido ni otros costes del negocio.</p>

          <h2 className={H2}>¿Qué es CPA y ROAS?</h2>
          <p className={P_}>Son dos formas de medir y pujar en Google Ads. El CPA es el coste por acción o conversión: con CPA objetivo defines cuánto quieres pagar de media por conversión. El ROAS mide valor de conversión sobre gasto: con ROAS objetivo, Google maximiza ese valor. El CPA encaja si tus conversiones valen parecido; el ROAS, si su valor cambia.</p>

          <h2 className={H2}>Si no vendes un producto: la utilidad en negocios de leads</h2>
          <p className={P_}>Mucha gente que pauta en LATAM no tiene carrito: vende servicios, cursos, software B2B o asesorías. El anuncio genera un lead, y la venta (si llega) ocurre días después, por WhatsApp, teléfono o en una reunión.</p>

          <h3 className={H3}>La pregunta no cambia</h3>
          <p className={P_}>En un negocio de leads, la pregunta sigue siendo la misma: ¿cuánto queda después de conseguir y atender a ese cliente, no solo cuánto «facturó» la plataforma? Aquí el «costo variable» incluye el tiempo del equipo comercial, las llamadas que no cierran y el costo de prestar el servicio.</p>
          <p className={P_}>La forma de llegar al POAS también cambia. En vez de la venta del carrito, el numerador sale de los negocios cerrados que puedes rastrear hasta la pauta, multiplicados por lo que deja cada uno. Si tu plataforma solo ve formularios enviados, solo puede contarte formularios.</p>

          <h3 className={H3}>Primero, el CPL que de verdad pagas</h3>
          <p className={P_}>
            Antes del POAS hay un paso: saber cuánto te cuesta un lead que sirve, no un lead cualquiera. Esa diferencia la explicamos en{" "}
            <Link href="/blog/tracking-server-side-cpl-plataforma" className={A}>CPL de plataforma vs CPL real: por qué Meta y Google no cuadran con tu CRM</Link>.
            {" "}Sin ese número limpio, cualquier POAS que calcules sobre leads va a salir inflado.
          </p>

          <h3 className={H3}>El CRM es el juez del valor</h3>
          <p className={P_}>La plataforma sabe quién llenó el formulario. Tu CRM sabe quién pagó. Por eso, en lead gen, el valor que importa vive en el CRM.</p>
          <p className={P_}>Google Ads permite cerrar ese círculo con la importación de conversiones offline: guardas el identificador del clic junto con el lead y, cuando ese cliente firma un contrato, se lo devuelves a Google Ads con el dato de la conversión. Para quien todavía no la usa, Google recomienda empezar por Conversiones mejoradas de clientes potenciales. Así la plataforma puede aprender de los negocios que cerraron y no solo de los formularios.</p>
          <p className={P_}>
            Cómo se atribuye ese valor entre plataformas, y por qué los números nunca cuadran al peso, es otra conversación: la tenemos en{" "}
            <Link href="/blog/ga4-no-coincide-meta-ads" className={A}>por qué GA4 no coincide con Meta Ads</Link>.
          </p>

          <h2 className={H2}>Errores frecuentes</h2>
          <ul className={UL}>
            <li><strong className={B}>Usar los ingresos de la plataforma como si fueran utilidad.</strong> El valor de conversión es lo que tú le enviaste a la plataforma, atribuido según sus reglas. No es tu estado de resultados.</li>
            <li><strong className={B}>Un solo margen promedio.</strong> Un promedio puede esconder líneas que pierden dentro de una cuenta que «da». Si tus márgenes son distintos por producto o por servicio, calcula por separado.</li>
            <li><strong className={B}>Olvidar devoluciones, descuentos o el costo de servir.</strong> Una venta que se devuelve a las tres semanas sigue sumando en el panel. Un servicio que cuesta caro prestar también.</li>
            <li><strong className={B}>Juzgar la prospección solo con último clic.</strong> Las campañas que abren demanda casi nunca se llevan el último clic. Si les mides el POAS con esa regla, las vas a apagar por error.</li>
            <li><strong className={B}>Prometer un «POAS objetivo» genérico.</strong> Si alguien te da un número sin conocer tus márgenes, te está dando un número inventado.</li>
          </ul>

          <h2 className={H2}>Checklist antes de cambiar tu métrica</h2>
          <ol className={OL}>
            <li>Escribe qué entra en el numerador: qué costos variables incluyes y cuáles no.</li>
            <li>Elige una convención (equilibrio en 1 o en 0) y úsala en todos los informes.</li>
            <li>Calcula el ROAS de equilibrio por línea de producto o servicio, no uno solo para todo.</li>
            <li>Si generas leads, conecta la venta cerrada del CRM con la campaña antes de calcular nada.</li>
            <li>Decide qué vas a seguir mirando en la plataforma (ROAS) y qué vas a usar para decidir presupuesto (POAS).</li>
            <li>Si vas a enviar margen como valor de conversión, cámbialo con un plan y compara periodos equivalentes.</li>
          </ol>

          <h2 className={H2}>Cómo lo mira JT Ads</h2>
          {/* Partner: wording del sitio («Meta Partner y Google Partner»). Cifra propia: solo $500k+. Cero inversión mínima. */}
          <p className={P_}>En JT Ads gestionamos $500k+ USD/mes en ads para empresas de LATAM. JT Ads es Meta Partner y Google Partner. La pauta la pagas directo a la plataforma y la cuenta publicitaria queda a tu nombre.</p>
          <p className={P_}>
            Lo primero que revisamos en una cuenta no es el ROAS, sino qué valor le estás mandando a la plataforma y si ese valor se parece a lo que gana tu negocio. Si mide facturación y tú decides con eso, estás optimizando venta. Cómo conectamos la medición con el CRM está en{" "}
            <Link href="/sistema" className={A}>el sistema</Link>.
          </p>
          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed">
              <strong className={B}>Si quieres saber si tus campañas están midiendo venta o utilidad, lo revisamos contigo.</strong>
            </p>
            <Link href="/diagnostico-en-vivo" data-cta="diag-envivo-j5-final" className="inline-block bg-[#0066ff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0052cc] transition-colors duration-150 text-sm">
              Revisamos en vivo si tus campañas miden venta o utilidad →
            </Link>
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
          <p className={P_}>Consultadas el miércoles {SOURCES_CONSULTED}, ~08:44 COT (America/Bogota).</p>
          <ul className="list-disc pl-6 mb-6 space-y-3 text-sm text-[#424656] leading-relaxed">
            {sources.map((s) => (
              <li key={s.href}>
                {s.label}:{" "}
                <a href={s.href} target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>
                  {s.href}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <Footer />
    </>
  );
}
