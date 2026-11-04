import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { toJsonLd } from "@/lib/schema";

const URL = "https://jtads.com/blog/segmentacion-idioma-google-ads-cambios";
const SEO_TITLE = "Google Ads elimina la segmentación por idioma: qué hacer";
const H1_TEXT =
  "Google Ads elimina la segmentación por idioma: qué hacer en campañas de español, portugués e inglés";
const DESC =
  "Google Ads elimina la segmentación por idioma en Búsqueda desde finales de septiembre de 2026. Checklist para campañas en español, portugués e inglés.";

// TODO(merge): fecha de publicación provisional (2026-11-04). Al hacer merge, poner la fecha real
// del merge en estas tres constantes, en el <time dateTime> del encabezado, en el lastmod de
// app/sitemap.ts y en la fecha de la entrada de este post en app/blog/page.tsx.
const DATE_PUBLISHED = "2026-11-04T00:00:00-05:00"; // TODO(merge)
const DATE_MODIFIED = "2026-11-04T00:00:00-05:00"; // TODO(merge)
const DATE_VISIBLE = "4 de noviembre de 2026"; // TODO(merge)
const DATE_ISO = "2026-11-04"; // TODO(merge)

const BIO_URL = "https://www.linkedin.com/in/juan-tabares-b1272b58/";
// Sin imagen propia del post: misma imagen de respaldo que usan los demás posts (/opengraph-image).
const IMAGE_URL = "https://jtads.com/opengraph-image";
const LOGO_URL = "https://jtads.com/logo-blue.png";

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

// Fuente única: la FAQ visible y el FAQPage del JSON-LD salen de esta lista.
const faqs = [
  {
    q: "¿Ya no puedo elegir idioma en campañas de búsqueda de Google Ads?",
    a: "No. Google anunció el 13 de agosto de 2026 que, desde finales de septiembre de 2026, se elimina el ajuste de idioma a nivel de campaña en Búsqueda y AI Max for Search. Los anuncios se muestran según el idioma en que están creados, y Google usa además el idioma de la búsqueda y las preferencias del usuario.",
  },
  {
    q: "¿El idioma sigue funcionando en Performance Max?",
    a: "Solo en parte. En Performance Max, el idioma de campaña deja de aplicarse a los anuncios en la Red de Búsqueda de Google, que funcionan como una campaña de búsqueda. Sí se sigue usando en YouTube, Display, Discover y Gmail. Los anuncios de Shopping dentro de Performance Max no se ven afectados por la configuración de idioma.",
  },
  {
    q: "¿Debo fusionar mis campañas separadas por idioma o por país?",
    a: "Google no pide fusionarlas: indica que los anunciantes no tienen que hacer nada y que las campañas existentes siguen funcionando sin interrupción. Si varias campañas son elegibles, la priorización de grupos de anuncios con IA elige el idioma más relevante. Lo clave es que cada anuncio y su página de destino estén claramente en el idioma previsto.",
  },
];

// Un solo @graph (JSON-LD de Oráculo, literal) con los marcadores PENDIENTE cerrados.
const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://jtads.com/#organization",
      name: "JT Ads",
      url: "https://jtads.com/",
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: SEO_TITLE,
      inLanguage: "es",
      breadcrumb: {
        "@id": `${URL}#breadcrumb`,
      },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
    },
    {
      "@type": "BlogPosting",
      "@id": `${URL}#article`,
      headline: SEO_TITLE,
      description:
        "Sí: desde finales de septiembre de 2026, Google Ads elimina la segmentación por idioma a nivel de campaña en Búsqueda y AI Max for Search. Los anuncios se emparejan por el idioma del anuncio, junto con el idioma de la búsqueda y las preferencias del usuario. Según Google, no tienes que hacer nada para que el cambio se aplique.",
      inLanguage: "es",
      mainEntityOfPage: {
        "@id": `${URL}#webpage`,
      },
      author: {
        "@type": "Person",
        "@id": "https://jtads.com/#juan-tabares",
        name: "Juan Tabares",
        jobTitle: "Fundador de JT Ads",
        url: BIO_URL,
        worksFor: { "@id": "https://jtads.com/#organization" },
      },
      publisher: {
        "@id": "https://jtads.com/#organization",
      },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
      image: IMAGE_URL,
      citation: [
        "https://ads-developers.googleblog.com/2026/08/google-ads-language-targeting-changes.html",
        "https://support.google.com/google-ads/answer/1722078?hl=es",
        "https://developers.google.com/google-ads/api/docs/campaigns/search-campaigns/getting-started",
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
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jtads.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://jtads.com/blog" },
        { "@type": "ListItem", position: 3, name: SEO_TITLE, item: URL },
      ],
    },
  ],
};

const SOURCES_GOOGLE: { href: string; label: string }[] = [
  {
    href: "https://ads-developers.googleblog.com/2026/08/google-ads-language-targeting-changes.html",
    label:
      "Google Ads Developer Blog, «Google Ads language targeting changes starting September 2026», 13 ago 2026, Dora Sun (Google Ads API Team)",
  },
  {
    href: "https://support.google.com/google-ads/answer/1722078?hl=es",
    label: "Ayuda de Google Ads, «Acerca de la segmentación por idioma»",
  },
  {
    href: "https://developers.google.com/google-ads/api/docs/campaigns/search-campaigns/getting-started",
    label: "Google Ads API, «Get started with Search campaigns» (nota sobre CampaignCriterion.language)",
  },
];

const SOURCES_PRESS: { href: string; label: string }[] = [
  {
    href: "https://adtech.com.mx/google-ads-elimina-segmentacion-idioma-search-performance-max/",
    label: "adtech.com.mx, 14 ago 2026",
  },
  {
    href: "https://www.searchenginejournal.com/google-is-removing-language-targeting-from-search-campaigns/585592/",
    label: "Search Engine Journal, 13 ago 2026",
  },
  {
    href: "https://searchengineland.com/google-ads-is-removing-language-targeting-from-search-campaigns-484831",
    label: "Search Engine Land, 13 ago 2026",
  },
];

const P_ = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-bold text-2xl text-[#1c1b1b] mt-12 mb-4";
const A = "text-[#0066ff] font-semibold hover:underline";
const LI = "text-[#424656] leading-relaxed text-base";
const TH = "p-4 text-xs font-bold uppercase tracking-wider text-[#424656]";
const TD = "p-4 text-sm text-[#424656]";
const STRONG = "text-[#1c1b1b]";

export default function PostSegmentacionIdioma() {
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
            Google Ads
          </span>
          <h1 className="font-bold text-white text-3xl md:text-4xl leading-tight mb-6">{H1_TEXT}</h1>
          <p className="text-[#727687] text-sm">
            <time dateTime={DATE_ISO}>{DATE_VISIBLE}</time> · 9 min de lectura
          </p>
        </div>
      </section>

      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className={P_}>
            Sí: desde finales de septiembre de 2026, Google Ads elimina la segmentación por idioma a nivel de campaña
            en Búsqueda y AI Max for Search. Los anuncios se emparejan por el idioma del anuncio, junto con el idioma de
            la búsqueda y las preferencias del usuario. Según Google, no tienes que hacer nada para que el cambio se
            aplique.
          </p>
          <p className={P_}>
            Si pautas en varios países y en más de un idioma, esto te toca. Google dice que no tienes que hacer nada
            para que el cambio se aplique, y eso es cierto: tus campañas no se rompen. Lo que sí cambia es quién decide
            qué idioma ve cada persona. Antes lo decías tú en la campaña; ahora lo deciden tu anuncio, tu página de
            destino y las señales de Google. Abajo te dejo qué cambió y un checklist para revisar tus cuentas.
          </p>
          <p className={P_}>
            Todo lo que afirmo sobre el cambio sale de dos fuentes de Google: el anuncio del 13 de agosto de 2026 en el
            blog de desarrolladores de Google Ads y la Ayuda de Google Ads. Lo que solo dice la prensa te lo marco como
            «según prensa».
          </p>

          <h2 className={H2}>Qué cambió en la segmentación por idioma (y desde cuándo)</h2>
          <ul className="space-y-2 mb-6 pl-5 list-disc">
            <li className={LI}>
              <strong className={STRONG}>Fecha:</strong> el cambio es desde finales de septiembre de 2026, según el
              blog de Google. La Ayuda dice: «A partir de septiembre del 2026, va a cambiar el funcionamiento de la
              segmentación por idioma». Ninguna de las dos da un día exacto por cuenta.
            </li>
            <li className={LI}>
              <strong className={STRONG}>Búsqueda y AI Max for Search:</strong> se elimina el ajuste de idioma a nivel
              de campaña. Los anuncios se emparejan por el idioma del anuncio.
            </li>
            <li className={LI}>
              <strong className={STRONG}>Performance Max:</strong> en Google Search, el idioma de campaña deja de
              usarse y funciona igual que Búsqueda. En YouTube, Display, Discover y Gmail se sigue usando. Shopping
              dentro de Performance Max no depende del idioma.
            </li>
            <li className={LI}>
              <strong className={STRONG}>Qué te pide Google:</strong> según la Ayuda, los anunciantes no tienen que
              hacer nada para que el cambio se aplique. El blog de desarrolladores agrega que las campañas de Búsqueda
              y AI Max for Search existentes siguen funcionando sin interrupción.
            </li>
          </ul>
          <p className={P_}>
            Si buscas el detalle de cómo funciona Performance Max por dentro, no lo repito aquí: está en{" "}
            <Link href="/blog/performance-max-como-funciona-latam" className={A}>
              cómo funciona Performance Max en LATAM
            </Link>
            .
          </p>

          <h2 className={H2}>Búsqueda y AI Max: el idioma lo decide el anuncio</h2>
          <p className={P_}>
            Con el ajuste fuera, la Ayuda lo resume así: los anuncios de búsqueda se muestran automáticamente en el
            idioma en el que se crearon. Y el blog de desarrolladores lo dice con una instrucción clara: asegúrate de
            que tus anuncios y tus páginas de destino estén bien estructurados en los idiomas que quieres. Los anuncios
            de Búsqueda usarán principalmente esas señales, junto con las preferencias de idioma del usuario.
          </p>
          <p className={P_}>Dos cosas que conviene tener claras:</p>
          <ul className="space-y-2 mb-6 pl-5 list-disc">
            <li className={LI}>
              <strong className={STRONG}>El idioma de la búsqueda no es el único dato.</strong> La propia Ayuda pone un
              ejemplo: Pablo habla inglés y español, su navegador está en español y muchas de sus consultas están en
              inglés. Puede ver anuncios en inglés o en español, e incluso escribir en español y recibir un anuncio en
              inglés.
            </li>
            <li className={LI}>
              <strong className={STRONG}>«AI Max for Search» sale en el blog de desarrolladores, no en la Ayuda en
              español.</strong> La Ayuda en español habla de campañas de búsqueda y de la parte de búsqueda de
              Performance Max. Por eso lo cito del blog.
            </li>
          </ul>

          <h2 className={H2}>Performance Max: Search sí, YouTube/<wbr />Display/<wbr />Discover/<wbr />Gmail no</h2>
          <p className={P_}>
            En Performance Max el cambio es a medias, y es lo que más se presta a confusión:
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#c2c6d8]/15 my-8">
            <table className="w-full min-w-[480px] text-left border-collapse">
              <thead>
                <tr className="bg-[#f6f3f2]">
                  <th scope="col" className={TH}>Dónde se muestra el anuncio</th>
                  <th scope="col" className={TH}>¿Usa el idioma de campaña?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#c2c6d8]/15 align-top">
                  <th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b]">Google Search (Red de Búsqueda de Google)</th>
                  <td className={TD}>No. Funciona como una campaña de búsqueda: idioma del anuncio.</td>
                </tr>
                <tr className="border-t border-[#c2c6d8]/15 align-top">
                  <th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b]">YouTube, Display, Discover, Gmail</th>
                  <td className={TD}>Sí, el ajuste de idioma que elegiste se sigue usando.</td>
                </tr>
                <tr className="border-t border-[#c2c6d8]/15 align-top">
                  <th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b]">Shopping dentro de Performance Max</th>
                  <td className={TD}>No se ve afectado por el idioma.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={P_}>
            Fuente: Ayuda de Google Ads y blog de desarrolladores. Qué haría yo: en tus campañas de Performance Max, no
            borres el idioma pensando que ya no sirve. Sigue guiando YouTube, Display, Discover y Gmail.
          </p>

          <h2 className={H2}>Cómo elige Google el idioma (señales y priorización)</h2>
          <p className={P_}>Esto es lo que dicen las fuentes de Google, sin interpretarlo de más:</p>
          <ul className="space-y-2 mb-6 pl-5 list-disc">
            <li className={LI}>
              <strong className={STRONG}>Señales:</strong> la Ayuda dice que Google Ads usa el idioma de los términos
              de búsqueda, la configuración de idioma del usuario y sus preferencias para saber qué idiomas entiende esa
              persona. Intenta publicar el mejor anuncio disponible en un idioma que el usuario entienda. El blog suma
              el idioma del anuncio y de la página de destino.
            </li>
            <li className={LI}>
              <strong className={STRONG}>Varias campañas elegibles:</strong> si hay más de una campaña elegible en tu
              cuenta, la priorización de grupos de anuncios con IA elige el idioma más relevante. Esto aplica justo a
              quien tiene campañas separadas por idioma o por país.
            </li>
            <li className={LI}>
              <strong className={STRONG}>Priorización por idioma de la búsqueda:</strong> entre los próximos cambios,
              la Ayuda dice: «Damos prioridad a los anuncios que coinciden con el idioma del término de búsqueda del
              usuario».
            </li>
            <li className={LI}>
              <strong className={STRONG}>Búsquedas sin un idioma claro:</strong> la tabla «Cómo funciona la
              segmentación por idioma» de la Ayuda incluye esta regla de priorización: «En las búsquedas sin un idioma
              claro, como las marcas, prioriza el idioma preferido del usuario».
            </li>
          </ul>
          <p className={P_}>
            Lo que Google <strong className={STRONG}>no</strong> publica en estas fuentes: un informe por idioma ni un
            día de despliegue por cuenta. Según prensa (SEJ y adtech.com.mx), Google tampoco anunció un reporte de
            idiomas servidos.
          </p>

          <h2 className={H2}>Qué revisar en campañas multipaís: español, portugués e inglés</h2>
          <p className={P_}>
            Este es el checklist. Lo que viene de Google va con su fuente; lo que es mi criterio de operador lo digo
            como tal.
          </p>
          <p className={P_}>
            <strong className={STRONG}>Checklist (5 puntos):</strong>
          </p>
          <ol className="space-y-3 mb-6 pl-5 list-decimal">
            <li className={LI}>
              <strong className={STRONG}>Un idioma por grupo de anuncios, sin mezclar.</strong>{" "}
              <em>Mi criterio, no lo dice Google.</em> Lo que sí dice Google es que el anuncio y la página deben estar
              claramente en el idioma que quieres. Si mezclas idiomas en el mismo grupo, le quitas claridad a la señal
              que ahora pesa más.
            </li>
            <li className={LI}>
              <strong className={STRONG}>La página de destino en el mismo idioma que el anuncio.</strong> Cuidado con
              anuncios en español que llevan a una página en inglés. El blog de Google pide estructurar anuncios y
              páginas en los idiomas previstos.
            </li>
            <li className={LI}>
              <strong className={STRONG}>Revisa los términos de búsqueda en otros idiomas.</strong>{" "}
              <em>Mi recomendación.</em> Google mismo dice que alguien puede buscar en un idioma y ver un anuncio en
              otro (ejemplo de Pablo). Mira qué términos y qué páginas están recibiendo tráfico, y ajusta palabras clave
              negativas si ves tráfico que no es para ti.
            </li>
            <li className={LI}>
              <strong className={STRONG}>Performance Max: el idioma sigue valiendo en YouTube, Display, Discover y Gmail.</strong>{" "}
              Revisa que esos ajustes sigan siendo los que quieres.
            </li>
            <li className={LI}>
              <strong className={STRONG}>Integraciones por API: deja de enviar criterios de idioma en Búsqueda.</strong>{" "}
              Detalle en la sección de API más abajo.
            </li>
          </ol>

          <p className={P_}>
            <strong className={STRONG}>Cómo aplicarlo a cada idioma:</strong>
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#c2c6d8]/15 my-8">
            <table className="w-full min-w-[560px] text-left border-collapse">
              <thead>
                <tr className="bg-[#f6f3f2]">
                  <th scope="col" className={TH}>Mercado</th>
                  <th scope="col" className={TH}>Qué revisar</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#c2c6d8]/15 align-top">
                  <th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b]">Español (varios países hispanos)</th>
                  <td className={TD}>
                    Anuncios y página en español. Si tienes una campaña por país, mira los términos de búsqueda de cada
                    una para ver si se cruzan.
                  </td>
                </tr>
                <tr className="border-t border-[#c2c6d8]/15 align-top">
                  <th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b]">Portugués (Brasil)</th>
                  <td className={TD}>
                    Anuncios y página en portugués.{" "}
                    <em>
                      Ejemplo ilustrativo (no es un caso de Google ni de un cliente):
                    </em>{" "}
                    una tienda que vende en Brasil y en México tiene un grupo de anuncios en portugués con su página en
                    portugués, y otro en español con su página en español. Lo que identifica a cada grupo es el idioma
                    de su anuncio y de su página, así que cada página debe coincidir con su anuncio.
                  </td>
                </tr>
                <tr className="border-t border-[#c2c6d8]/15 align-top">
                  <th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b]">Inglés (EE. UU., o público bilingüe)</th>
                  <td className={TD}>
                    Si tu público entiende inglés y español, Google puede considerar ambos. Deja claro qué anuncio y qué
                    página es cada uno, como en el ejemplo de Pablo.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className={P_}>
            <strong className={STRONG}>Qué no dice Google y sí dice la prensa (rotulado):</strong>
          </p>
          <ul className="space-y-2 mb-6 pl-5 list-disc">
            <li className={LI}>
              <strong className={STRONG}>Según prensa</strong> (adtech.com.mx, citando a Ginny Marvin, Ads Product
              Liaison de Google): Google no traduce automáticamente las creatividades ni la personalización de textos de
              AI Max. Fuente:{" "}
              <a
                href="https://adtech.com.mx/google-ads-elimina-segmentacion-idioma-search-performance-max/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${A} break-all`}
              >
                https://adtech.com.mx/google-ads-elimina-segmentacion-idioma-search-performance-max/
              </a>
            </li>
            <li className={LI}>
              <strong className={STRONG}>Según prensa</strong> (adtech.com.mx y Search Engine Journal): no hace falta
              fusionar las campañas que hoy están separadas por idioma. Fuentes: la de adtech y{" "}
              <a
                href="https://www.searchenginejournal.com/google-is-removing-language-targeting-from-search-campaigns/585592/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${A} break-all`}
              >
                https://www.searchenginejournal.com/google-is-removing-language-targeting-from-search-campaigns/585592/
              </a>
            </li>
            <li className={LI}>
              <strong className={STRONG}>Según prensa</strong> (Search Engine Land): el cambio puede dar una entrega
              menos predecible en campañas multilingües, por lo que conviene revisar estructuras, anuncios y páginas, y
              monitorear el rendimiento. Fuente:{" "}
              <a
                href="https://searchengineland.com/google-ads-is-removing-language-targeting-from-search-campaigns-484831"
                target="_blank"
                rel="noopener noreferrer"
                className={`${A} break-all`}
              >
                https://searchengineland.com/google-ads-is-removing-language-targeting-from-search-campaigns-484831
              </a>
            </li>
          </ul>

          <p className={P_}>
            Mi consejo de operador, que no es de Google: antes de tocar nada, guarda cómo van hoy tus campañas por
            campaña, ubicación, términos de búsqueda y página de destino. Si algo se mueve, vas a poder separar si fue
            por el idioma o por otra cosa. No te doy un plazo ni un porcentaje de «normal»: no tengo una fuente oficial
            para eso.
          </p>
          <p className={P_}>
            Si además estás probando automatización, mira{" "}
            <Link href="/blog/hiper-automatizacion-campanas-mas-alla-performance-max" className={A}>
              qué viene después: AI Max, Advantage+ Audience y niveles de automatización
            </Link>
            .
          </p>

          <h2 className={H2}>Si usas la API de Google Ads</h2>
          <p className={P_}>Si tu agencia o tu herramienta crea campañas por API, esto sí es una tarea:</p>
          <ul className="space-y-2 mb-6 pl-5 list-disc">
            <li className={LI}>Los criterios de idioma se siguen devolviendo al consultar, pero ya no segmentan.</li>
            <li className={LI}>
              Agregar o actualizar <code className="text-sm break-words">CampaignCriterion.language</code> en una
              campaña de Búsqueda devuelve el error{" "}
              <code className="text-sm break-all">ContextError.OPERATION_NOT_PERMITTED_FOR_CONTEXT</code>.
            </li>
            <li className={LI}>
              En Performance Max no hay error, porque el idioma se puede seguir usando en otros canales.
            </li>
            <li className={LI}>
              Qué recomienda Google: dejar de incluir criterios de idioma al crear o actualizar campañas de Búsqueda.
              En las campañas existentes, quitarlos es opcional («por limpieza»; no es obligatorio porque ya no
              aplican).
            </li>
            <li className={LI}>
              La documentación de la API para Búsqueda dice lo mismo: las campañas de Búsqueda no admiten la
              segmentación manual por idioma y los anuncios se emparejan por el idioma de los anuncios y de las páginas
              de destino, junto con las preferencias del usuario.
            </li>
          </ul>

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

          <h2 className={H2}>Cómo lo trabaja JT Ads</h2>
          <p className={P_}>
            JT Ads es Google Partner. Resultado que sí puedo decir: $500k+ USD/mes gestionados en ads. No hay inversión
            mínima.
          </p>
          <p className={P_}>
            Si manejas{" "}
            <Link href="/agencia-google-ads-latam" className={A}>
              Google Ads en LATAM
            </Link>{" "}
            con campañas en varios países e idiomas, lo que miramos primero es lo mismo que en el checklist: idioma del
            anuncio, idioma de la página, ubicación y términos de búsqueda.
          </p>
          <p className={P_}>
            <strong className={STRONG}>¿Quieres que revisemos tus campañas contigo?</strong>{" "}
            <Link href="/diagnostico-en-vivo" data-cta="diag-envivo-segmentacion-idioma-cuerpo" className={A}>
              Mira tu cuenta con nosotros: revisamos en vivo cómo está estructurada tu pauta
            </Link>
            .
          </p>

          <h2 className={H2}>Fuentes</h2>
          <p className="text-sm leading-relaxed text-[#424656] mb-4">
            Consultadas el 4 de noviembre de 2026 (todas abiertas con WebFetch).
          </p>
          <p className="text-sm font-bold text-[#1c1b1b] mb-2">Oficiales de Google</p>
          <ul className="space-y-2 mb-6 pl-5 list-disc">
            {SOURCES_GOOGLE.map((x) => (
              <li key={x.href} className="text-sm leading-relaxed text-[#424656]">
                {x.label}:{" "}
                <a href={x.href} target="_blank" rel="noopener noreferrer" className={`${A} break-all`}>
                  {x.href}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm font-bold text-[#1c1b1b] mb-2">Prensa (solo lo rotulado como «según prensa»)</p>
          <ul className="space-y-2 mb-10 pl-5 list-disc">
            {SOURCES_PRESS.map((x) => (
              <li key={x.href} className="text-sm leading-relaxed text-[#424656]">
                {x.label}:{" "}
                <a href={x.href} target="_blank" rel="noopener noreferrer" className={`${A} break-all`}>
                  {x.href}
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
