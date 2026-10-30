import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { toJsonLd } from "@/lib/schema";

const URL = "https://jtads.com/blog/chatgpt-ads";
const SEO_TITLE = "ChatGPT Ads: qué es, cuánto cuesta y si da leads (lo probé)";
const H1_TEXT = "ChatGPT Ads: qué es, cuánto cuesta y si da leads (lo probé en 3 países)";
const DESC =
  "Qué es ChatGPT Ads, cómo funciona y cuánto cuesta. Qué pasó con los leads en una semana de prueba real y cómo medirlos hasta el CRM.";

// Fecha de publicación: una sola constante para lo visible, el JSON-LD y el
// lastmod de app/sitemap.ts (2026-10-30). Si se cambia aquí, cambiar también allí.
const DATE_PUBLISHED = "2026-10-30T00:00:00-05:00";
const DATE_MODIFIED = "2026-10-30T00:00:00-05:00";
const DATE_VISIBLE = "30 de octubre de 2026";
const SOURCES_CONSULTED = "29 de octubre de 2026";
const BIO_URL = "https://www.linkedin.com/in/juan-tabares-b1272b58/";
const IMAGE_URL = "https://jtads.com/opengraph-image";

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
    q: "¿Vale la pena anunciarse en ChatGPT?",
    a: "Es pronto para decirlo: el canal sigue en fase de prueba. En la prueba de Juan Tabares, de JT Ads (EE. UU., Colombia y Costa Rica), 8 leads costaron USD 224, unos USD 28 por lead, una muestra pequeña. OpenAI no publica referencias de rendimiento por industria, así que mide cualquier prueba contra tu CRM, no contra clics.",
  },
  {
    q: "¿Qué resultado tuvo la prueba de ChatGPT Ads de JT Ads?",
    a: "Juan Tabares, de JT Ads, gastó USD 224 en una semana, en una prueba corta en Estados Unidos, Colombia y Costa Rica, y obtuvo 8 leads, unos USD 28 por lead. Llegaron poco calificados por intención: estaban en etapa temprana y buscaban aprender o pedir ayuda, no contratar una agencia. Es una hipótesis inicial, con una muestra pequeña.",
  },
  {
    q: "¿Cuánto cuesta anunciarse en ChatGPT?",
    a: "OpenAI no publica un costo promedio. Lo oficial: compras por mil impresiones o por clic válido, la puja máxima por clic recomendada para empezar es de USD 3 a 5 y el presupuesto diario mínimo es de USD 25 (10.000 COP si tu cuenta factura en pesos colombianos). Esa puja es un punto de partida, no un costo medio.",
  },
  {
    q: "¿Cómo anunciarse en ChatGPT?",
    a: "Te registras como anunciante en ads.openai.com, agregas el pago, defines presupuesto y puja, subes los anuncios y esperas su revisión. También hay acceso por socios tecnológicos de OpenAI. Las cuentas nuevas pueden empezar anunciando solo en su país de origen, y salud, finanzas y servicios legales tienen restricciones que debes revisar antes de invertir.",
  },
  {
    q: "¿ChatGPT Ads sirve para generar leads?",
    a: "Sí puede generarlos: en la prueba de Juan Tabares salieron 8 leads con USD 224, poco calificados por la intención del usuario; con esa muestra no se sabe cuántos cierran. En las cuatro comparaciones del mismo anunciante que recopiló PPC ONE, Google convirtió mejor; en costo por lead los resultados son mixtos. Mide contra el CRM.",
  },
  {
    q: "¿Cómo segmentar en ChatGPT Ads y qué oferta tendría más sentido?",
    a: "Según OpenAI, se segmenta con pistas de contexto por grupo de anuncios, ubicación, plataforma y audiencias personalizadas. La oferta ideal es una hipótesis de Juan Tabares, no un resultado probado: si la intención en ChatGPT es informativa, una oferta educativa (guía, diagnóstico, herramienta) tendría más sentido que «contrata una agencia».",
  },
  {
    q: "¿ChatGPT Ads o Google Ads: cuál conviene?",
    a: "Para captar clientes que ya te buscan, Google Ads. En ChatGPT el anuncio aparece debajo de una respuesta y se elige por el contexto de la conversación; en Google, junto a una búsqueda con intención explícita. En las cuatro comparaciones del mismo anunciante que recopiló PPC ONE, Google convirtió mejor. Antes de mover presupuesto, verifica tu medición a CRM.",
  },
  {
    q: "¿Está disponible ChatGPT Ads en Colombia y Latinoamérica?",
    a: "Según OpenAI, sí: la tabla de Ads Manager marca a Colombia y Costa Rica como disponibles y el 21 de octubre de 2026 anunció 89 países, con Argentina, Chile y Perú. Eso significa que puedes crear campañas; no confirma que los usuarios ya vean anuncios, porque la prensa habla de un despliegue gradual. Revisa también qué categorías puedes anunciar.",
  },
  {
    q: "¿Cómo aparecer en ChatGPT sin pagar anuncios?",
    a: "No se compra: se gana con contenido que ChatGPT pueda citar. Publica respuestas directas con fuente y fecha, FAQ con marcado FAQPage y páginas claras de tu servicio, y no bloquees a OAI-SearchBot en tu robots.txt. OpenAI afirma que los anuncios no influyen en las respuestas de ChatGPT, así que pagar no te hace aparecer en ellas.",
  },
  {
    q: "¿Qué tipo de negocio debería probar ChatGPT Ads?",
    a: "Solo uno con la medición a CRM resuelta, una categoría permitida y un presupuesto de prueba aparte de Google y Meta. Los mejores resultados publicados vienen sobre todo de tiendas en línea, con atribución de plataforma. Fuera de EE. UU., salud, servicios legales y financieros están en general prohibidos. Si Google y Meta no están medidos, empieza por ahí.",
  },
  {
    q: "¿Cuáles son las novedades y el futuro de ChatGPT Ads?",
    a: "OpenAI dijo el 21 de octubre de 2026 que su próxima fase incluye más formatos, objetivos, opciones de compra y medición. Ya prueba Sponsored Agents en EE. UU. (16 de septiembre) y abrió en beta el formato de varias imágenes (26 de octubre). No hay fechas publicadas para otros países; cualquier otra predicción es opinión, no dato.",
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
      "@type": "BlogPosting",
      headline: SEO_TITLE,
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
      "@id": `${URL}#article`,
      url: URL,
      inLanguage: "es",
      description: DESC,
      image: IMAGE_URL,
      publisher: { "@id": "https://jtads.com/#organization" },
      about: { "@type": "Thing", name: "ChatGPT Ads" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
      "@id": `${URL}#faq`,
      inLanguage: "es",
      isPartOf: { "@id": `${URL}#webpage` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jtads.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://jtads.com/blog" },
        { "@type": "ListItem", position: 3, name: "ChatGPT Ads", item: URL },
      ],
      "@id": `${URL}#breadcrumb`,
    },
  ],
};

const P_ = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-bold text-2xl text-[#1c1b1b] mt-12 mb-4";
const H3 = "font-bold text-lg text-[#1c1b1b] mt-8 mb-3";
const A = "text-[#0066ff] font-semibold hover:underline";

export default function PostChatGPTAds() {
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
            Automatización
          </span>
          <h1 className="font-bold text-white text-3xl md:text-4xl leading-tight mb-6">{H1_TEXT}</h1>
          <p className="text-[#727687] text-sm">
            Por{" "}
            <a href={BIO_URL} target="_blank" rel="noopener noreferrer" className="text-[#9bb4fe] hover:underline">
              Juan Tabares
            </a>
            , fundador de JT Ads · <time dateTime="2026-10-30">{DATE_VISIBLE}</time> · 18 min de lectura
          </p>
          <p className="text-[#727687] text-sm mt-2">
            Actualizado el <time dateTime="2026-10-30">{DATE_VISIBLE}</time>. Datos de OpenAI consultados el {SOURCES_CONSULTED}.
          </p>
        </div>
      </section>

      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

<p className={P_}>Probé ChatGPT Ads (en español, «Anuncios en ChatGPT») en Estados Unidos, Colombia y Costa Rica. Fue una prueba corta, de solo una semana: 8 leads con USD 224 de gasto en una semana, unos USD 28 por lead. Lo más útil que aprendí: los 8 leads llegaron poco calificados por la intención del usuario. Estaban en etapa temprana y buscaban aprender o pedir ayuda más que contratar una agencia. Mi hipótesis: en ChatGPT la intención es informativa, no transaccional, y la gente pregunta cosas como «cómo optimizo mis campañas». Es una prueba corta y pequeña, la primera de varias, así que no concluyo nada sobre el canal. Los anuncios en ChatGPT empezaron a probarse en EE. UU. el 9 de febrero de 2026 <sup className="text-xs"><a href="#fuente-15" className="text-[#0066ff] hover:underline" aria-label="Fuente 15">[15]</a></sup>.</p>
<div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
<p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">Respuesta corta</p>
<p className="text-[#424656] text-sm leading-relaxed mb-2"><strong className="text-[#1c1b1b]">¿Existe?</strong> Sí. OpenAI empezó a probar anuncios en ChatGPT en febrero de 2026 y, desde el 21 de octubre de 2026, están en 89 países, incluida Colombia. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup><sup className="text-xs"><a href="#fuente-15" className="text-[#0066ff] hover:underline" aria-label="Fuente 15">[15]</a></sup></p>
<p className="text-[#424656] text-sm leading-relaxed mb-2"><strong className="text-[#1c1b1b]">¿Cómo se compra?</strong> Por impresiones (CPM) o clic válido (CPC), por autoservicio (beta) o por socios de OpenAI. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup><sup className="text-xs"><a href="#fuente-7" className="text-[#0066ff] hover:underline" aria-label="Fuente 7">[7]</a></sup></p>
<p className="text-[#424656] text-sm leading-relaxed mb-2"><strong className="text-[#1c1b1b]">¿Cuánto cuesta?</strong> OpenAI no publica un costo promedio. Sí publica un presupuesto diario mínimo (USD 25) y una puja recomendada para empezar (USD 3 a 5 por clic). En mi prueba de una semana: 8 leads con USD 224. <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup><sup className="text-xs"><a href="#fuente-7" className="text-[#0066ff] hover:underline" aria-label="Fuente 7">[7]</a></sup></p>
<p className="text-[#424656] text-sm leading-relaxed mb-2"><strong className="text-[#1c1b1b]">¿Sirve para leads?</strong> Puede generar leads; en mi prueba llegaron 8, poco calificados por la intención del usuario. Con esa muestra no sé cuántos llegan a cliente. En cuatro comparaciones, en conversión favorecieron a Google y en costo por lead fueron mixtas. <sup className="text-xs"><a href="#fuente-18" className="text-[#0066ff] hover:underline" aria-label="Fuente 18">[18]</a></sup></p>
<p className="text-[#424656] text-sm leading-relaxed mb-2"><strong className="text-[#1c1b1b]">¿Quién no puede anunciarse?</strong> Fuera de EE. UU., salud, servicios legales y financieros están en general prohibidos; confirma con OpenAI (política consultada el 29 oct 2026). <sup className="text-xs"><a href="#fuente-11" className="text-[#0066ff] hover:underline" aria-label="Fuente 11">[11]</a></sup></p>
<p className="text-[#424656] text-sm leading-relaxed mb-2"><strong className="text-[#1c1b1b]">¿Novedades y futuro?</strong> OpenAI anunció más formatos, objetivos y medición, y prueba Sponsored Agents y formatos con imágenes. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup><sup className="text-xs"><a href="#fuente-23" className="text-[#0066ff] hover:underline" aria-label="Fuente 23">[23]</a></sup><sup className="text-xs"><a href="#fuente-26" className="text-[#0066ff] hover:underline" aria-label="Fuente 26">[26]</a></sup></p>
<p className="text-[#424656] text-sm leading-relaxed mb-2"><strong className="text-[#1c1b1b]">¿Qué haría yo?</strong> Medir Google y Meta hasta el CRM y seguir aprendiendo de ChatGPT Ads con pruebas pequeñas y con medición.</p>
</div>
<h2 className={H2}>Qué es ChatGPT Ads (anuncios en ChatGPT) y qué no es</h2>
<p className={P_}>ChatGPT Ads es la publicidad en ChatGPT: anuncios que OpenAI muestra dentro de ChatGPT, <strong className="text-[#1c1b1b]">debajo de las respuestas</strong>; incluyen nombre del anunciante, título, descripción, página de destino e imagen. <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup></p>
<p className={P_}>Tres cosas que OpenAI afirma y conviene tener claras:</p>
<ul className="list-disc pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base">
<li><strong className="text-[#1c1b1b]">No es una respuesta patrocinada.</strong> Los anuncios están etiquetados y separados de las respuestas, y la publicidad no influye en lo que responde ChatGPT. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup> <strong className="text-[#1c1b1b]">Pagar no te hace aparecer dentro de la respuesta.</strong></li>
<li><strong className="text-[#1c1b1b]">No lo ve todo el mundo.</strong> Solo los usuarios de los planes Free y Go; ni Plus, Pro, Business, Enterprise y Edu ni las cuentas de menores de 18. <sup className="text-xs"><a href="#fuente-15" className="text-[#0066ff] hover:underline" aria-label="Fuente 15">[15]</a></sup></li>
<li><strong className="text-[#1c1b1b]">No son palabras clave.</strong> Se eligen por el contexto y la intención de la conversación, la página de destino, el título y el texto. Las «pistas de contexto» no son palabras clave exactas. <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup></li>
</ul>
<h2 className={H2}>Cómo funciona ChatGPT Ads hoy y cómo anunciarse (Ads Manager, octubre de 2026)</h2>
<p className={P_}><strong className="text-[#1c1b1b]">Cronología verificada</strong></p>
<div className="overflow-x-auto rounded-xl border border-[#c2c6d8]/15 my-8">
<table className="w-full min-w-[560px] text-left border-collapse">
<thead><tr className="bg-[#f6f3f2]">
<th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Fecha</th>
<th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Qué pasó</th>
<th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Fuente</th>
</tr></thead><tbody>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">9 feb 2026</th>
<td className="p-4 text-sm text-[#424656] align-top">OpenAI empieza a probar anuncios en EE. UU.</td>
<td className="p-4 text-sm text-[#424656] align-top"><sup className="text-xs"><a href="#fuente-15" className="text-[#0066ff] hover:underline" aria-label="Fuente 15">[15]</a></sup></td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">5 may 2026</th>
<td className="p-4 text-sm text-[#424656] align-top">Beta de Ads Manager (autoservicio) y puja por clic (CPC); antes solo CPM.</td>
<td className="p-4 text-sm text-[#424656] align-top"><sup className="text-xs"><a href="#fuente-4" className="text-[#0066ff] hover:underline" aria-label="Fuente 4">[4]</a></sup></td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">11 y 31 ago 2026</th>
<td className="p-4 text-sm text-[#424656] align-top">Lanzamiento en Reino Unido, México, Brasil, Japón y Corea del Sur; 31 países de Europa, con autoservicio desde el 31 de agosto.</td>
<td className="p-4 text-sm text-[#424656] align-top"><sup className="text-xs"><a href="#fuente-3" className="text-[#0066ff] hover:underline" aria-label="Fuente 3">[3]</a></sup><sup className="text-xs"><a href="#fuente-5" className="text-[#0066ff] hover:underline" aria-label="Fuente 5">[5]</a></sup></td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">16 sep 2026</th>
<td className="p-4 text-sm text-[#424656] align-top">Sponsored Agents en pruebas en EE. UU., plugin de Ads Manager e integraciones con HubSpot y Shopify.</td>
<td className="p-4 text-sm text-[#424656] align-top"><sup className="text-xs"><a href="#fuente-23" className="text-[#0066ff] hover:underline" aria-label="Fuente 23">[23]</a></sup></td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">21 oct 2026</th>
<td className="p-4 text-sm text-[#424656] align-top">Llega a 26 países más (89 en total), 14 de Latinoamérica. Más de 100.000 anunciantes han corrido campañas.</td>
<td className="p-4 text-sm text-[#424656] align-top"><sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></td>
</tr>
</tbody></table></div>
<p className={P_}><strong className="text-[#1c1b1b]">Objetivos y compra.</strong> <em>Views</em> (CPM, por mil impresiones), <em>Clicks</em> (CPC, por clic válido) y <em>Conversions</em> (optimizas hacia un evento de conversión; <strong className="text-[#1c1b1b]">no pagas por conversión</strong>). <sup className="text-xs"><a href="#fuente-7" className="text-[#0066ff] hover:underline" aria-label="Fuente 7">[7]</a></sup></p>
<p className={P_}><strong className="text-[#1c1b1b]">Reportes.</strong> Ads Manager (beta) muestra impresiones, clics, gasto, CTR, CPC, CPM y conversiones. Impresiones y clics se actualizan cada ~15 minutos; el gasto llega con 7 a 8 horas de retraso y las conversiones, en 24 a 48 horas. <sup className="text-xs"><a href="#fuente-13" className="text-[#0066ff] hover:underline" aria-label="Fuente 13">[13]</a></sup></p>
<p className={P_}><strong className="text-[#1c1b1b]">Lo que NO existe todavía (según la prensa especializada, no según OpenAI).</strong> Search Engine Journal (8 sep 2026) señala que no hay Auction Insights, cuota de impresiones ni reporte competitivo, y que OpenAI no publica referencias de rendimiento por industria. <sup className="text-xs"><a href="#fuente-17" className="text-[#0066ff] hover:underline" aria-label="Fuente 17">[17]</a></sup></p>
<h2 className={H2}>ChatGPT Ads en Colombia y Latinoamérica: dónde está disponible</h2>
<p className={P_}><strong className="text-[#1c1b1b]">Qué dice OpenAI.</strong> El 21 de octubre de 2026 sumó 26 países (89 en total), 14 de Latinoamérica, entre ellos Argentina, Chile, Colombia y Perú. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup> En su tabla de disponibilidad (consultada el 29 oct 2026), Colombia, Costa Rica, México, Argentina, Chile, Perú y Brasil figuran como «Available» para autoservicio. Condición: <strong className="text-[#1c1b1b]">la entidad legal que anuncia y paga debe estar en un país de la lista.</strong> <sup className="text-xs"><a href="#fuente-14" className="text-[#0066ff] hover:underline" aria-label="Fuente 14">[14]</a></sup></p>
<p className={P_}><strong className="text-[#1c1b1b]">Qué NO significa.</strong> «Disponible» quiere decir que puedes crear campañas desde ese país. <strong className="text-[#1c1b1b]">No está verificado que los usuarios de Colombia ya vean anuncios</strong>: la prensa (El Tiempo y Enter, 21 oct 2026) habla de un despliegue gradual «durante las próximas semanas». <sup className="text-xs"><a href="#fuente-21" className="text-[#0066ff] hover:underline" aria-label="Fuente 21">[21]</a></sup> No publico un desglose por país de mi prueba.</p>
<p className={P_}>Dos matices: algunas cuentas nuevas <strong className="text-[#1c1b1b]">solo pueden anunciar en su país de origen</strong> hasta verificar identidad y alcanzar cierto gasto (OpenAI no dice cuánto) <sup className="text-xs"><a href="#fuente-7" className="text-[#0066ff] hover:underline" aria-label="Fuente 7">[7]</a></sup>, y <strong className="text-[#1c1b1b]">hay categorías prohibidas o restringidas fuera de EE. UU.</strong> (ver «Para quién NO es»).</p>
<h2 className={H2}>Cuánto cuesta anunciarse en ChatGPT (costo de medios, no honorarios de agencia)</h2>
<p className={P_}>Aquí «cuánto cuesta» es lo que pagas a OpenAI por impresiones o clics. Si buscas honorarios de agencia, mira <Link href="/blog/cuanto-cobra-agencia-google-ads-latam" className={A}>cuánto cobra una agencia de Google Ads en LATAM</Link> y <Link href="/blog/cuanto-cobra-agencia-meta-ads-latam" className={A}>de Meta Ads</Link>.</p>
<p className={P_}><strong className="text-[#1c1b1b]">Lo oficial (OpenAI, Centro de Ayuda, consultado el 29 oct 2026)</strong></p>
<ul className="list-disc pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base">
<li>Para campañas por clic, OpenAI <strong className="text-[#1c1b1b]">recomienda empezar con una puja máxima de USD 3 a 5 por clic</strong>. Es una recomendación, no un costo promedio. <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup></li>
<li><strong className="text-[#1c1b1b]">Presupuesto diario mínimo:</strong> USD 25 en cuentas en dólares; en pesos, por ejemplo, 10.000 COP o 150 MXN. <sup className="text-xs"><a href="#fuente-7" className="text-[#0066ff] hover:underline" aria-label="Fuente 7">[7]</a></sup></li>
<li>El gasto de un día puede llegar al <strong className="text-[#1c1b1b]">doble</strong> del presupuesto diario, y el de la semana a <strong className="text-[#1c1b1b]">siete veces</strong>. <sup className="text-xs"><a href="#fuente-7" className="text-[#0066ff] hover:underline" aria-label="Fuente 7">[7]</a></sup><sup className="text-xs"><a href="#fuente-10" className="text-[#0066ff] hover:underline" aria-label="Fuente 10">[10]</a></sup></li>
<li>No figura un mínimo de inversión total para autoservicio. (En el piloto, ppc.land reportó compromisos mínimos de USD 250.000 y USD 50.000; dato histórico de prensa, 5 may 2026. <sup className="text-xs"><a href="#fuente-19" className="text-[#0066ff] hover:underline" aria-label="Fuente 19">[19]</a></sup>)</li>
</ul>
<p className={P_}><strong className="text-[#1c1b1b]">Lo que cuentan terceros (quién, fecha y muestra)</strong></p>
<ul className="list-disc pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base">
<li>Search Engine Journal (8 sep 2026): OpenAI <strong className="text-[#1c1b1b]">no tiene referencias de rendimiento</strong> por industria, y los USD 3 a 5 se volvieron «benchmark» sin serlo. Además, Hostinger, tras casi USD 70.000 de prueba, reportó CPM por encima de USD 65 y tráfico irregular. <sup className="text-xs"><a href="#fuente-17" className="text-[#0066ff] hover:underline" aria-label="Fuente 17">[17]</a></sup></li>
<li><strong className="text-[#1c1b1b]">PPC ONE</strong> (29 sep 2026, actualizado el 14 oct 2026), 15 campañas facturadas en dólares, sobre todo de EE. UU.: el CPC fue de USD 0,76 a USD 14,80 y la mitad pagó menos de USD 4,41 (mediana sin ponderar). Aclara que <strong className="text-[#1c1b1b]">los resultados positivos vienen sobre todo de quienes venden publicidad en ChatGPT.</strong> <sup className="text-xs"><a href="#fuente-18" className="text-[#0066ff] hover:underline" aria-label="Fuente 18">[18]</a></sup></li>
<li><strong className="text-[#1c1b1b]">Cactus Marketing</strong> (agencia en España; 18 oct 2026, actualizado el 19 oct), campaña propia de servicios B2B del 6 al 19 oct 2026, gasto de EUR 196,84: 100 clics, <strong className="text-[#1c1b1b]">CTR 0,90 %, CPC EUR 1,97</strong> y 7 contactos (2 formularios y 5 clics a WhatsApp), unos EUR 28,12 por contacto. Advierten que la muestra es pequeña. <sup className="text-xs"><a href="#fuente-20" className="text-[#0066ff] hover:underline" aria-label="Fuente 20">[20]</a></sup></li>
<li>No he encontrado datos publicados de costo por lead para Colombia o Latinoamérica con fuente verificable. <strong className="text-[#1c1b1b]">El único dato de LATAM que uso es el de mi prueba</strong>: 8 leads con USD 224 de gasto en una semana, unos USD 28 por lead, en EE. UU., Colombia y Costa Rica. Es una muestra pequeña, no un promedio del canal, y no la comparo con la de Cactus: otra oferta, otra moneda y contactos que incluyen clics a WhatsApp.</li>
</ul>
<h2 className={H2}>Para quién sirve y para quién NO es</h2>
<p className={P_}><strong className="text-[#1c1b1b]">Qué categorías admite hoy.</strong> La política de anuncios de OpenAI (v1.6, actualizada el 10 sep 2026) limita al inicio los anuncios a categorías de consumo (bienes del hogar, servicios locales, viajes, productos digitales o educación). Pueden ampliarse. <sup className="text-xs"><a href="#fuente-11" className="text-[#0066ff] hover:underline" aria-label="Fuente 11">[11]</a></sup></p>
<h3 className={H3}>Para quién NO es</h3>
<p className={P_}>Según la política (consultada el 29 oct 2026), <strong className="text-[#1c1b1b]">no es para ti, por ahora, si tu negocio es de estas categorías</strong> <sup className="text-xs"><a href="#fuente-11" className="text-[#0066ff] hover:underline" aria-label="Fuente 11">[11]</a></sup>:</p>
<div className="overflow-x-auto rounded-xl border border-[#c2c6d8]/15 my-8">
<table className="w-full min-w-[560px] text-left border-collapse">
<thead><tr className="bg-[#f6f3f2]">
<th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Categoría</th>
<th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Qué dice la política de OpenAI</th>
</tr></thead><tbody>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Salud y servicios legales</th>
<td className="p-4 text-sm text-[#424656] align-top">Fuera de EE. UU., salud «generalmente prohibida» y servicios legales <strong className="text-[#1c1b1b]">prohibidos</strong>. En EE. UU., caso por caso.</td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Servicios financieros</th>
<td className="p-4 text-sm text-[#424656] align-top">Fuera de EE. UU., en general prohibidos; confirma con OpenAI (consultado el 29 oct 2026). En EE. UU., caso por caso.</td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Reparación de crédito, asistencia de deudas, inversiones alternativas</th>
<td className="p-4 text-sm text-[#424656] align-top"><strong className="text-[#1c1b1b]">No se permiten</strong> (en ningún país).</td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Alcohol y tabaco, apuestas, contenido adulto, drogas recreativas, política, y ofertas de empleo o vivienda individuales</th>
<td className="p-4 text-sm text-[#424656] align-top"><strong className="text-[#1c1b1b]">No permitidos</strong> actualmente.</td>
</tr>
</tbody></table></div>
<p className={P_}>Si eres una <strong className="text-[#1c1b1b]">clínica, un despacho de abogados, una financiera o una empresa de cobranza</strong>, este canal hoy no está pensado para ti. Otra página del Centro de Ayuda <sup className="text-xs"><a href="#fuente-12" className="text-[#0066ff] hover:underline" aria-label="Fuente 12">[12]</a></sup> habla de «solo anunciantes aprobados» para algunas categorías financieras; en la política son «generalmente prohibidos» fuera de EE. UU.: <strong className="text-[#1c1b1b]">confirma con OpenAI antes de gastar</strong> (consultado el 29 oct 2026).</p>
<p className={P_}><strong className="text-[#1c1b1b]">Servicios B2B y agencias.</strong> La política no los nombra como categoría. <strong className="text-[#1c1b1b]">No afirmo que puedan o no anunciarse</strong>: depende de la revisión de OpenAI.</p>
<h3 className={H3}>Qué muestran las pruebas publicadas</h3>
<p className={P_}>Los resultados positivos vienen sobre todo de <strong className="text-[#1c1b1b]">tiendas en línea</strong>, con atribución de plataforma y no con ingresos verificados (PPC ONE, 14 oct 2026) <sup className="text-xs"><a href="#fuente-18" className="text-[#0066ff] hover:underline" aria-label="Fuente 18">[18]</a></sup>. Los menos favorables, de <strong className="text-[#1c1b1b]">B2B con ciclo largo</strong>: un caso en SEJ (8 sep 2026) gastó unos 7.000 CAD y, de 146 empresas detrás de 336 clics, solo cinco encajaban con su cliente ideal. <sup className="text-xs"><a href="#fuente-17" className="text-[#0066ff] hover:underline" aria-label="Fuente 17">[17]</a></sup></p>
<h3 className={H3}>Veredicto: cuándo sí y cuándo no</h3>
<p className={P_}><strong className="text-[#1c1b1b]">Lectura mía, marcada como opinión:</strong> si tu negocio vive de leads calificados, la medición hasta el CRM pesa más que el clic barato; y si estás en salud, legal o finanzas fuera de EE. UU., la política hoy te deja fuera.</p>
<div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
<p className="text-[#424656] text-sm leading-relaxed"><strong className="text-[#1c1b1b]">Si quieres saber si el costo por lead de tu cuenta de Google y Meta es real,</strong> lo revisamos en un <Link href="/diagnostico-en-vivo" data-cta="diag-envivo-chatgpt-ads-veredicto" className={A}>diagnóstico en vivo</Link>.</p>
</div>
<h2 className={H2}>Mi prueba rápida en ChatGPT Ads: qué hice y qué aprendí</h2>
<p className={P_}>Prefiero probar con presupuesto real que opinar desde una presentación. Esto fue lo que hice y lo que salió:</p>
<ul className="list-disc pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base">
<li><strong className="text-[#1c1b1b]">Dónde:</strong> 3 países: Estados Unidos, Colombia y Costa Rica.</li>
<li><strong className="text-[#1c1b1b]">Duración:</strong> solo una semana.</li>
<li><strong className="text-[#1c1b1b]">Gasto total:</strong> USD 224 en esa semana.</li>
<li><strong className="text-[#1c1b1b]">Leads:</strong> 8.</li>
<li><strong className="text-[#1c1b1b]">Costo por lead:</strong> unos USD 28 (224 ÷ 8).</li>
<li><strong className="text-[#1c1b1b]">Calidad de los leads:</strong> poco calificados por la intención del usuario (ver más abajo).</li>
<li><strong className="text-[#1c1b1b]">Tipo de prueba:</strong> corta y temprana, la primera de varias.</li>
</ul>
<p className={P_}><strong className="text-[#1c1b1b]">Qué aprendí</strong></p>
<ol className="list-decimal pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base">
<li><strong className="text-[#1c1b1b]">En ChatGPT la intención parece informativa, no transaccional (hipótesis mía).</strong> Los 8 leads llegaron poco calificados por la intención del usuario: estaban en etapa temprana y buscaban aprender o pedir ayuda más que contratar una agencia. Mi lectura es que así se usa ChatGPT: la gente pregunta cosas como «cómo optimizo mis campañas», no «qué agencia contrato». Es lo que vi en 8 leads, y una hipótesis que me toca probar.</li>
<li><strong className="text-[#1c1b1b]">Ocho leads en una semana no son una conclusión.</strong> Es una muestra demasiado corta para decir algo a favor o en contra del canal, y no es un promedio para otro anunciante.</li>
<li><strong className="text-[#1c1b1b]">El costo por lead es solo la primera mitad de la cuenta.</strong> Importa cuántos llegan a ser clientes, y con 8 leads eso aún no se puede medir.</li>
<li><strong className="text-[#1c1b1b]">La plataforma es joven y cambia rápido.</strong> Las pruebas de anuncios empezaron en EE. UU. el 9 de febrero de 2026 <sup className="text-xs"><a href="#fuente-15" className="text-[#0066ff] hover:underline" aria-label="Fuente 15">[15]</a></sup>, y OpenAI sigue publicando formatos y medición nuevos (ver «Novedades de ChatGPT Ads»). Una prueba de hoy puede no describir el canal de dentro de unos meses.</li>
</ol>
<p className={P_}><strong className="text-[#1c1b1b]">Qué sigue:</strong> faltan más pruebas, en más países, con más gasto y con seguimiento hasta ventas. Voy a seguir probando y lo que aprenda lo cuento con fuente y fecha. Para filtrar y calificar leads de cualquier canal, mira <Link href="/blog/leads-basura-meta-ads" className={A}>cómo filtrar y calificar leads</Link>.</p>
<h2 className={H2}>Segmentación en ChatGPT Ads: qué oferta tendría más sentido (hipótesis)</h2>
<p className={P_}>Separo lo que OpenAI documenta (consultado el 29 de octubre de 2026) de lo que yo supongo.</p>
<p className={P_}><strong className="text-[#1c1b1b]">Cómo segmentar en ChatGPT Ads: lo que OpenAI documenta</strong></p>
<div className="overflow-x-auto rounded-xl border border-[#c2c6d8]/15 my-8">
<table className="w-full min-w-[560px] text-left border-collapse">
<thead><tr className="bg-[#f6f3f2]">
<th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Opción</th>
<th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Qué dice OpenAI</th>
<th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Fuente</th>
</tr></thead><tbody>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Señales para elegir un anuncio</th>
<td className="p-4 text-sm text-[#424656] align-top">El contexto y la intención de la conversación, la landing, el título, el texto, las pistas de contexto y, con personalización activada, señales más amplias del usuario</td>
<td className="p-4 text-sm text-[#424656] align-top"><sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup></td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Pistas de contexto (por grupo de anuncios)</th>
<td className="p-4 text-sm text-[#424656] align-top">Describen conversaciones o temas donde tu producto puede ser relevante; no son palabras clave exactas ni garantizan entrega</td>
<td className="p-4 text-sm text-[#424656] align-top"><sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup></td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Ubicación y plataforma</th>
<td className="p-4 text-sm text-[#424656] align-top">País y, donde esté disponible, regiones, ciudades y códigos postales; Android, iOS, web y escritorio</td>
<td className="p-4 text-sm text-[#424656] align-top"><sup className="text-xs"><a href="#fuente-7" className="text-[#0066ff] hover:underline" aria-label="Fuente 7">[7]</a></sup></td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Audiencias personalizadas</th>
<td className="p-4 text-sm text-[#424656] align-top">Incluir o excluir; para incluir se necesitan al menos 25.000 usuarios coincidentes</td>
<td className="p-4 text-sm text-[#424656] align-top"><sup className="text-xs"><a href="#fuente-7" className="text-[#0066ff] hover:underline" aria-label="Fuente 7">[7]</a></sup></td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Frases negativas y prueba de temas</th>
<td className="p-4 text-sm text-[#424656] align-top">Frases negativas, solo para anunciantes calificados <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup>; recomiendan varios grupos de anuncios para probar temas o mensajes <sup className="text-xs"><a href="#fuente-7" className="text-[#0066ff] hover:underline" aria-label="Fuente 7">[7]</a></sup></td>
<td className="p-4 text-sm text-[#424656] align-top"><sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup><sup className="text-xs"><a href="#fuente-7" className="text-[#0066ff] hover:underline" aria-label="Fuente 7">[7]</a></sup></td>
</tr>
</tbody></table></div>
<p className={P_}>No vi una opción para elegir «intención informativa» o «transaccional»: la plataforma lee la intención y tú la influyes con las pistas, la landing y el texto.</p>
<p className={P_}><strong className="text-[#1c1b1b]">Lo que supongo (hipótesis mía, sin probar)</strong></p>
<ul className="list-disc pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base">
<li><strong className="text-[#1c1b1b]">Oferta:</strong> si la persona viene a aprender, tiene más sentido darle algo educativo (una guía, un diagnóstico, una calculadora) que pedirle que contrate. La landing es parte de lo que OpenAI evalúa <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup>, así que debe coincidir con la pregunta.</li>
<li><strong className="text-[#1c1b1b]">Segmentación:</strong> escribir las pistas de contexto como las preguntas de quien aprende («cómo optimizo mis campañas») y no como el servicio que vendes, con un grupo de anuncios por tema <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup><sup className="text-xs"><a href="#fuente-7" className="text-[#0066ff] hover:underline" aria-label="Fuente 7">[7]</a></sup>.</li>
<li><strong className="text-[#1c1b1b]">Medición:</strong> un lead educativo no es un cliente; hay que seguirlo hasta el CRM.</li>
</ul>
<p className={P_}><strong className="text-[#1c1b1b]">Qué no sé:</strong> si esta oferta convierte mejor en ChatGPT, ni si una pista de contexto como esa alcanza a las conversaciones que quiero. Eso se prueba, no se supone.</p>
<h2 className={H2}>Novedades de ChatGPT Ads: lo que OpenAI ya anunció</h2>
<p className={P_}>Hechos con fuente y fecha (leídos el 29 de octubre de 2026); mi opinión va marcada.</p>
<div className="overflow-x-auto rounded-xl border border-[#c2c6d8]/15 my-8">
<table className="w-full min-w-[560px] text-left border-collapse">
<thead><tr className="bg-[#f6f3f2]">
<th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Novedad</th>
<th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Estado según OpenAI</th>
<th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Fecha y fuente</th>
</tr></thead><tbody>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Más formatos, objetivos, opciones de compra y medición, y formatos más dinámicos (por ejemplo, hablar con negocios)</th>
<td className="p-4 text-sm text-[#424656] align-top">Anunciado como lo que viene; sin fechas</td>
<td className="p-4 text-sm text-[#424656] align-top">21 oct 2026 <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup><sup className="text-xs"><a href="#fuente-24" className="text-[#0066ff] hover:underline" aria-label="Fuente 24">[24]</a></sup>; 31 ago 2026 <sup className="text-xs"><a href="#fuente-25" className="text-[#0066ff] hover:underline" aria-label="Fuente 25">[25]</a></sup></td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Formatos visuales: durante la generación de imágenes (Free y Go) y varias imágenes en Ads Manager (4 a 6, «Learn more» como único botón)</th>
<td className="p-4 text-sm text-[#424656] align-top">Anunciado el 5 oct; en prueba en EE. UU. desde octubre; beta de varias imágenes abierta desde el 26 oct</td>
<td className="p-4 text-sm text-[#424656] align-top">5 oct 2026 <sup className="text-xs"><a href="#fuente-6" className="text-[#0066ff] hover:underline" aria-label="Fuente 6">[6]</a></sup>; 26 oct 2026 <sup className="text-xs"><a href="#fuente-26" className="text-[#0066ff] hover:underline" aria-label="Fuente 26">[26]</a></sup></td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Sponsored Agents y plugin de Ads Manager</th>
<td className="p-4 text-sm text-[#424656] align-top">Sponsored Agents en prueba con anunciantes seleccionados de EE. UU.; plugin en despliegue</td>
<td className="p-4 text-sm text-[#424656] align-top">16 sep 2026 <sup className="text-xs"><a href="#fuente-23" className="text-[#0066ff] hover:underline" aria-label="Fuente 23">[23]</a></sup></td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Integraciones con HubSpot y Shopify y socios de medición</th>
<td className="p-4 text-sm text-[#424656] align-top">HubSpot y Shopify disponibles; incrementalidad «en etapa temprana»; idoneidad de marca en pilotos</td>
<td className="p-4 text-sm text-[#424656] align-top">16 sep 2026 <sup className="text-xs"><a href="#fuente-23" className="text-[#0066ff] hover:underline" aria-label="Fuente 23">[23]</a></sup>; 5 oct 2026 <sup className="text-xs"><a href="#fuente-6" className="text-[#0066ff] hover:underline" aria-label="Fuente 6">[6]</a></sup></td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Escala: USD 1.000 millones de ingresos anualizados (run rate, no ingresos ya cobrados) en menos de 200 días; 89 países y más de 100.000 anunciantes</th>
<td className="p-4 text-sm text-[#424656] align-top">Cifra de OpenAI, reportada también por Reuters</td>
<td className="p-4 text-sm text-[#424656] align-top">USD 1.000 millones: OpenAI <sup className="text-xs"><a href="#fuente-25" className="text-[#0066ff] hover:underline" aria-label="Fuente 25">[25]</a></sup> y Reuters <sup className="text-xs"><a href="#fuente-27" className="text-[#0066ff] hover:underline" aria-label="Fuente 27">[27]</a></sup>, 31 ago 2026. Países y anunciantes: OpenAI, 21 oct 2026 <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></td>
</tr>
</tbody></table></div>
<p className={P_}><strong className="text-[#1c1b1b]">Resultados que OpenAI cita de socios y anunciantes (no los verifiqué; no son de LATAM ni de servicios):</strong> según DV Rockerbox, el costo por adquisición atribuido de WeightWatchers fue 15,3 % menor que su referencia de búsqueda paga (5 oct 2026) <sup className="text-xs"><a href="#fuente-6" className="text-[#0066ff] hover:underline" aria-label="Fuente 6">[6]</a></sup>; un anunciante de ecommerce logró 3x de retorno en 28 días (31 ago 2026) <sup className="text-xs"><a href="#fuente-25" className="text-[#0066ff] hover:underline" aria-label="Fuente 25">[25]</a></sup>. Son casos que elige OpenAI, no un promedio.</p>
<p className={P_}><strong className="text-[#1c1b1b]">Lo que no está dicho.</strong> No hay fechas para llevar Sponsored Agents ni los formatos con imágenes fuera de EE. UU., y cualquier cifra sobre lo que rendirá ChatGPT Ads en Colombia o Costa Rica es una suposición.</p>
<p className={P_}><strong className="text-[#1c1b1b]">Mi lectura (opinión mía, no un dato).</strong> Creo que la plataforma va a mejorar, porque la hoja de ruta pública apunta a más formatos y mejor medición. Lo que aún no sé es cuánto costará un lead que cierre en Colombia o Costa Rica.</p>
<h2 className={H2}>ChatGPT Ads vs Google Ads</h2>
<div className="overflow-x-auto rounded-xl border border-[#c2c6d8]/15 my-8">
<table className="w-full min-w-[560px] text-left border-collapse">
<thead><tr className="bg-[#f6f3f2]">
<th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]"></th>
<th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">ChatGPT Ads</th>
<th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Google Ads</th>
</tr></thead><tbody>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Cuándo aparece el anuncio</th>
<td className="p-4 text-sm text-[#424656] align-top">Debajo de una respuesta, según el contexto de la conversación <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup></td>
<td className="p-4 text-sm text-[#424656] align-top">Junto a una búsqueda; segmentas por palabras clave y tipos de concordancia <sup className="text-xs"><a href="#fuente-22" className="text-[#0066ff] hover:underline" aria-label="Fuente 22">[22]</a></sup></td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Segmentación</th>
<td className="p-4 text-sm text-[#424656] align-top">Pistas de contexto (no son palabras clave), ubicación, plataforma y audiencias personalizadas <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup><sup className="text-xs"><a href="#fuente-7" className="text-[#0066ff] hover:underline" aria-label="Fuente 7">[7]</a></sup></td>
<td className="p-4 text-sm text-[#424656] align-top">Palabras clave y tipos de concordancia <sup className="text-xs"><a href="#fuente-22" className="text-[#0066ff] hover:underline" aria-label="Fuente 22">[22]</a></sup></td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Intención del usuario (hipótesis mía, no un dato de OpenAI)</th>
<td className="p-4 text-sm text-[#424656] align-top">Más informativa: preguntas para aprender; mis 8 leads estaban en etapa temprana</td>
<td className="p-4 text-sm text-[#424656] align-top">Búsqueda con intención explícita, que suele incluir quien ya compara</td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Conversión del mismo anunciante en ambos canales</th>
<td className="p-4 text-sm text-[#424656] align-top">En cuatro comparaciones publicadas, <strong className="text-[#1c1b1b]">menor</strong> que en Google (PPC ONE, 14 oct 2026) <sup className="text-xs"><a href="#fuente-18" className="text-[#0066ff] hover:underline" aria-label="Fuente 18">[18]</a></sup></td>
<td className="p-4 text-sm text-[#424656] align-top">Mayor en las cuatro <sup className="text-xs"><a href="#fuente-18" className="text-[#0066ff] hover:underline" aria-label="Fuente 18">[18]</a></sup></td>
</tr>
</tbody></table></div>
<p className={P_}><em>Nota:</em> no pongo un costo por lead de Google: no tengo uno del mismo periodo y de la misma oferta. Esas cuatro comparaciones son una muestra pequeña, en parte de agencias que venden anuncios en ChatGPT. <sup className="text-xs"><a href="#fuente-18" className="text-[#0066ff] hover:underline" aria-label="Fuente 18">[18]</a></sup></p>
<h2 className={H2}>Cómo medirlo: Pixel y API de Conversiones de OpenAI</h2>
<p className={P_}>Esto es lo que documenta OpenAI (consultado el 29 oct 2026); no afirmo que jtads.com ya lo tenga instalado.</p>
<ol className="list-decimal pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base">
<li><strong className="text-[#1c1b1b]">Define antes de gastar qué resultado lo hace valer la pena</strong> (un costo por lead calificado, no un CPC). <sup className="text-xs"><a href="#fuente-17" className="text-[#0066ff] hover:underline" aria-label="Fuente 17">[17]</a></sup></li>
<li><strong className="text-[#1c1b1b]">Etiqueta todo con UTM</strong> y compara con tu analítica: los clics de Ads Manager y las sesiones de Analytics suelen no coincidir (consentimiento, bloqueadores, zona horaria). <sup className="text-xs"><a href="#fuente-13" className="text-[#0066ff] hover:underline" aria-label="Fuente 13">[13]</a></sup></li>
<li><strong className="text-[#1c1b1b]">Elige cómo enviar conversiones.</strong> El Pixel de OpenAI mide acciones en el navegador; la API de Conversiones las envía desde tu servidor. Con ambos, usa el mismo ID de evento para deduplicar y, si un clic trae `oppref`, captúralo y mándalo en el evento de servidor. <sup className="text-xs"><a href="#fuente-8" className="text-[#0066ff] hover:underline" aria-label="Fuente 8">[8]</a></sup><sup className="text-xs"><a href="#fuente-9" className="text-[#0066ff] hover:underline" aria-label="Fuente 9">[9]</a></sup><sup className="text-xs"><a href="#fuente-13" className="text-[#0066ff] hover:underline" aria-label="Fuente 13">[13]</a></sup> Para un lead, el evento estándar es `lead_created`. <sup className="text-xs"><a href="#fuente-9" className="text-[#0066ff] hover:underline" aria-label="Fuente 9">[9]</a></sup> Más sobre el pixel en <Link href="/blog/tracking-server-side-que-es-por-que-pixel-miente" className={A}>por qué el pixel puede mentir</Link>.</li>
<li><strong className="text-[#1c1b1b]">Entiende la atribución y los retrasos.</strong> OpenAI usa atribución al último toque, con ventana de clic de 7, 14 o 30 días; las conversiones pueden tardar 24 a 48 horas y el gasto 7 a 8 horas. <sup className="text-xs"><a href="#fuente-13" className="text-[#0066ff] hover:underline" aria-label="Fuente 13">[13]</a></sup> <strong className="text-[#1c1b1b]">No decidas con un día de datos</strong>: en un caso publicado, el ROAS diario fue de 0,2× a 2,9×. <sup className="text-xs"><a href="#fuente-18" className="text-[#0066ff] hover:underline" aria-label="Fuente 18">[18]</a></sup></li>
<li><strong className="text-[#1c1b1b]">Mide hasta el CRM, no hasta el formulario.</strong> En un caso publicado, la plataforma mostró 36 conversiones y el anunciante tuvo 2 consultas reales, de fuera de ChatGPT. <sup className="text-xs"><a href="#fuente-18" className="text-[#0066ff] hover:underline" aria-label="Fuente 18">[18]</a></sup> Ver <Link href="/blog/tracking-server-side-cpl-plataforma" className={A}>CPL de plataforma vs CPL real</Link>.</li>
<li><strong className="text-[#1c1b1b]">Corta con una regla escrita:</strong> si a los 14 días no hay leads que ventas acepte, se detiene.</li>
</ol>
<h2 className={H2}>Cómo aparecer en ChatGPT sin pagar anuncios</h2>
<p className={P_}>Los anuncios no cambian lo que ChatGPT responde. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup> Lo que está en tu mano:</p>
<ul className="list-disc pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base">
<li>Páginas con <strong className="text-[#1c1b1b]">respuesta directa en el primer párrafo</strong>, con fuente y fecha.</li>
<li><strong className="text-[#1c1b1b]">FAQ con marcado FAQPage</strong> que coincida palabra por palabra con lo visible.</li>
<li><strong className="text-[#1c1b1b]">No bloquear a OAI-SearchBot</strong> en robots.txt: OpenAI lo usa para mostrar sitios en la búsqueda de ChatGPT y recomienda permitirlo. <sup className="text-xs"><a href="#fuente-16" className="text-[#0066ff] hover:underline" aria-label="Fuente 16">[16]</a></sup> (jtads.com ya lo permite.)</li>
<li>Presencia en directorios y fuentes que ya se citan en tu sector.</li>
</ul>
<h2 className={H2}>Qué haría yo con el presupuesto</h2>
<ol className="list-decimal pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base">
<li><strong className="text-[#1c1b1b]">Google Ads para captar a quien ya te busca.</strong> Si tu cliente ya te busca, Google. Si necesitas crear la demanda, Meta. Si buscas equipo, mira nuestra <Link href="/agencia-google-ads-colombia" className={A}>agencia de Google Ads en Colombia</Link>.</li>
<li><strong className="text-[#1c1b1b]">Medición a CRM antes que canales nuevos.</strong> Sin eso no sabes si cualquier canal, ChatGPT incluido, funciona.</li>
<li><strong className="text-[#1c1b1b]">Seguir de cerca ChatGPT Ads.</strong> Sigo probando y lo que aprenda lo cuento con fuente y fecha.</li>
<li><strong className="text-[#1c1b1b]">IA dentro de las plataformas que ya usas.</strong> Otro producto nuevo de IA en anuncios: <Link href="/blog/que-es-meta-business-agent" className={A}>Meta Business Agent</Link>. Y, como lectura relacionada, <Link href="/blog/hiper-automatizacion-campanas-mas-alla-performance-max" className={A}>qué viene después de PMax</Link>.</li>
</ol>
<p className={P_}>JT Ads es Google Partner y Meta Partner. La cuenta publicitaria siempre queda a nombre del cliente.</p>
<div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
<p className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed">Si quieres saber de dónde sale hoy el costo por lead de tu cuenta y qué parte de él llega a ser cliente, lo vemos en vivo.</p>
<Link href="/diagnostico-en-vivo" data-cta="diag-envivo-chatgpt-ads-final" className="inline-block bg-[#0066ff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0052cc] transition-colors duration-150 text-sm">Agenda un diagnóstico en vivo →</Link>
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
          <p className={P_}>Consultadas el {SOURCES_CONSULTED}. Los datos de OpenAI pueden cambiar en días: revisa la fuente antes de decidir.</p>
<h3 className={H3}>OpenAI (oficial)</h3>
<ol start={1} className="list-decimal pl-6 mb-6 space-y-3 text-sm text-[#424656] leading-relaxed">
<li id="fuente-1">OpenAI Help Center, «Ads in ChatGPT: The Basics» (actualizada hace 7 días al consultarla): <a href="https://help.openai.com/en/articles/20001207-ads-in-chatgpt-the-basics" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://help.openai.com/en/articles/20001207-ads-in-chatgpt-the-basics</a></li>
<li id="fuente-2">OpenAI, «ChatGPT Ads expands to 26 new countries…» / «ChatGPT Anuncios llega a 26 nuevos países…», 21 oct 2026 (89 países, acceso por socios o autoservicio, 100.000 anunciantes, anuncios etiquetados y sin influir en las respuestas): <a href="https://openai.com/index/chatgpt-ads-expands-26-new-countries/" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://openai.com/index/chatgpt-ads-expands-26-new-countries/</a> · ES: <a href="https://openai.com/es-ES/index/chatgpt-ads-expands-26-new-countries/" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://openai.com/es-ES/index/chatgpt-ads-expands-26-new-countries/</a></li>
<li id="fuente-3">OpenAI, «Testing ads in ChatGPT» (con actualizaciones del 26 mar, 7 may y 11 ago 2026): <a href="https://openai.com/index/testing-ads-in-chatgpt/" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://openai.com/index/testing-ads-in-chatgpt/</a></li>
<li id="fuente-4">OpenAI, «New ways to buy ChatGPT ads», 5 may 2026: <a href="https://openai.com/index/new-ways-to-buy-chatgpt-ads/" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://openai.com/index/new-ways-to-buy-chatgpt-ads/</a></li>
<li id="fuente-5">OpenAI, «ChatGPT Ads expands across Europe», 18 ago 2026 (actualizado el 31 ago): <a href="https://openai.com/index/chatgpt-ads-expands-across-europe/" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://openai.com/index/chatgpt-ads-expands-across-europe/</a></li>
<li id="fuente-6">OpenAI, «Building advertising for the way people use AI», 5 oct 2026: <a href="https://openai.com/index/new-chatgpt-ads-format-and-measurement/" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://openai.com/index/new-chatgpt-ads-format-and-measurement/</a></li>
<li id="fuente-7">OpenAI Help Center, «Creating campaigns for ChatGPT Ads» (objetivos, presupuesto, países, tabla de mínimos, cuentas nuevas): <a href="https://help.openai.com/en/articles/20001210-creating-campaigns-for-chatgpt-ads" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://help.openai.com/en/articles/20001210-creating-campaigns-for-chatgpt-ads</a></li>
<li id="fuente-8">OpenAI Help Center, «Conversion Measurement»: <a href="https://help.openai.com/en/articles/20001409-conversion-measurement" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://help.openai.com/en/articles/20001409-conversion-measurement</a></li>
<li id="fuente-9">OpenAI Developers, «Conversion Tracking» (Pixel, Conversions API, `oppref`, `lead_created`, eventos estándar): <a href="https://developers.openai.com/ads/conversion-tracking" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://developers.openai.com/ads/conversion-tracking</a></li>
<li id="fuente-10">OpenAI Help Center, «Daily budgets»: <a href="https://help.openai.com/en/articles/20001413-daily-budgets" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://help.openai.com/en/articles/20001413-daily-budgets</a></li>
<li id="fuente-11">OpenAI, «Ad policies», v1.6, actualizada el 10 sep 2026: <a href="https://openai.com/policies/ad-policies" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://openai.com/policies/ad-policies</a></li>
<li id="fuente-12">OpenAI Help Center, «Troubleshooting Common Onboarding and Policy Issues» (tabla de elegibilidad): <a href="https://help.openai.com/en/articles/20001534-troubleshooting-common-onboarding-and-policy-issues" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://help.openai.com/en/articles/20001534-troubleshooting-common-onboarding-and-policy-issues</a></li>
<li id="fuente-13">OpenAI Help Center, «Measure Results» (reportes, ventanas de atribución, retrasos, Google Tag Manager, parámetros dinámicos; «Updated: 8 days ago» al consultarla): <a href="https://help.openai.com/en/articles/20001214-measure-results" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://help.openai.com/en/articles/20001214-measure-results</a></li>
<li id="fuente-14">OpenAI Help Center, «Ads Manager Availability» (países; «Updated: 2 days ago» al consultarla): <a href="https://help.openai.com/en/articles/20001245-ads-manager-availability" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://help.openai.com/en/articles/20001245-ads-manager-availability</a></li>
<li id="fuente-15">OpenAI Help Center, «Ads in ChatGPT» (planes, prueba desde el 9 feb 2026; ES: <a href="https://help.openai.com/es-es/articles/20001047-anuncios-en-chatgpt" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://help.openai.com/es-es/articles/20001047-anuncios-en-chatgpt</a>): <a href="https://help.openai.com/en/articles/20001047-ads-in-chatgpt" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://help.openai.com/en/articles/20001047-ads-in-chatgpt</a></li>
<li id="fuente-16">OpenAI, «Overview of OpenAI Crawlers»: <a href="https://platform.openai.com/docs/bots" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://platform.openai.com/docs/bots</a></li>
</ol>
<h3 className={H3}>Prensa y terceros (con fecha y quién vende qué)</h3>
<ol start={17} className="list-decimal pl-6 mb-6 space-y-3 text-sm text-[#424656] leading-relaxed">
<li id="fuente-17">Search Engine Journal, Brooke Osmundson, «6 Months Into ChatGPT Ads, Advertisers Still Don&apos;t Know What &apos;Good&apos; Looks Like», 8 sep 2026: <a href="https://www.searchenginejournal.com/6-months-into-chatgpt-ads-advertisers-still-dont-know-what-good-looks-like/587583/" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://www.searchenginejournal.com/6-months-into-chatgpt-ads-advertisers-still-dont-know-what-good-looks-like/587583/</a></li>
<li id="fuente-18">PPC ONE, «International ChatGPT Ads results: CTR, CPC, conversions», 29 sep 2026, actualizado 14 oct 2026 (agrega casos publicados; indica en cada uno si el autor vende publicidad en ChatGPT): <a href="https://ppcone.cz/en/blog/chatgpt-ads-results/" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://ppcone.cz/en/blog/chatgpt-ads-results/</a></li>
<li id="fuente-19">ppc.land, 5 may 2026, mínimos del piloto (dato histórico): <a href="https://ppc.land/openai-opens-chatgpt-ads-manager-to-all-us-businesses-with-cpc-bidding/" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://ppc.land/openai-opens-chatgpt-ads-manager-to-all-us-businesses-with-cpc-bidding/</a></li>
<li id="fuente-20">Cactus Marketing, «¿Funcionan los anuncios en ChatGPT? Test real con 200 €», 18 oct 2026, actualizado 19 oct 2026 (campaña propia en España, 6–19 oct 2026; muestra pequeña según el propio autor): <a href="https://cactusmarketing.es/blog/chatgpt-ads-funcionan-test-real" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://cactusmarketing.es/blog/chatgpt-ads-funcionan-test-real</a></li>
<li id="fuente-21">El Tiempo, «ChatGPT mostrará anuncios en su versión gratuita en Colombia y otros 14 países de América Latina», 21 oct 2026 (despliegue gradual en las próximas semanas): <a href="https://www.eltiempo.com/tecnosfera/novedades-tecnologia/chatgpt-mostrara-anuncios-en-su-version-gratuita-en-colombia-y-otros-14-paises-de-america-latina-asi-lo-confirmo-openai-3595288" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://www.eltiempo.com/tecnosfera/novedades-tecnologia/chatgpt-mostrara-anuncios-en-su-version-gratuita-en-colombia-y-otros-14-paises-de-america-latina-asi-lo-confirmo-openai-3595288</a> · Enter.co, mismo día: <a href="https://www.enter.co/colombia/chatgpt-anuncios-colombia-quien-los-vera/" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://www.enter.co/colombia/chatgpt-anuncios-colombia-quien-los-vera/</a></li>
</ol>
<h3 className={H3}>Google</h3>
<ol start={22} className="list-decimal pl-6 mb-6 space-y-3 text-sm text-[#424656] leading-relaxed">
<li id="fuente-22">Ayuda de Google Ads, tipos de concordancia de palabras clave: <a href="https://support.google.com/google-ads/answer/7478529" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://support.google.com/google-ads/answer/7478529</a></li>
</ol>
<h3 className={H3}>Novedades de ChatGPT Ads (OpenAI y Reuters)</h3>
<ol start={23} className="list-decimal pl-6 mb-6 space-y-3 text-sm text-[#424656] leading-relaxed">
<li id="fuente-23">OpenAI, «Reimagining advertising with AI», 16 sep 2026 (Sponsored Agents en prueba en EE. UU., plugin de Ads Manager en ChatGPT, asistencia de IA, personalización de texto, HubSpot y Shopify): <a href="https://openai.com/index/reimagining-advertising-with-ai/" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://openai.com/index/reimagining-advertising-with-ai/</a></li>
<li id="fuente-24">OpenAI, «How we built ChatGPT&apos;s novel ad stack for user trust and relevance», 21 oct 2026 (más experimentos con formatos más dinámicos; ritmo de ingresos): <a href="https://openai.com/index/building-chatgpt-ad-stack/" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://openai.com/index/building-chatgpt-ad-stack/</a></li>
<li id="fuente-25">OpenAI, «A milestone in expanding access to AI», 31 ago 2026 (USD 1.000 millones de ingresos anualizados en menos de 200 días; caso de 3x de retorno): <a href="https://openai.com/index/expanding-access-to-ai-with-chatgpt-ads/" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://openai.com/index/expanding-access-to-ai-with-chatgpt-ads/</a></li>
<li id="fuente-26">OpenAI Help Center, «Creating ads for ChatGPT Ads» (formato de varias imágenes en beta abierta desde el 26 oct 2026): <a href="https://help.openai.com/en/articles/20001212-creating-ads-for-chatgpt-ads" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://help.openai.com/en/articles/20001212-creating-ads-for-chatgpt-ads</a></li>
<li id="fuente-27">Reuters, «OpenAI&apos;s ad business hits $1 billion annualized revenue run rate», 31 ago 2026 (el extracto del buscador, con el primer párrafo, confirma la cifra de USD 1.000 millones de ingresos anualizados, que coincide con la fuente 25; el artículo completo pide suscripción): <a href="https://www.reuters.com/business/media-telecom/openais-ad-business-hits-1-billion-annualized-revenue-run-rate-2026-08-31/" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://www.reuters.com/business/media-telecom/openais-ad-business-hits-1-billion-annualized-revenue-run-rate-2026-08-31/</a></li>
</ol>
        </div>
      </article>

      <Footer />
    </>
  );
}
