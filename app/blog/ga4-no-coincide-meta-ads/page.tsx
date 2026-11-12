import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { toJsonLd } from "@/lib/schema";

// J4 · Copy: Gabo, versión final del 9 nov 2026 (revisión final de Rankin; bloque AEO de Oráculo literal).
// Fuente: /workspace/equipo/contenido/jtads/j4-ga4-no-coincide-meta-ads-borrador.md
const URL = "https://jtads.com/blog/ga4-no-coincide-meta-ads";
const SEO_TITLE = "GA4 no coincide con Meta Ads: por qué ocurre";
const H1_TEXT = "GA4 no coincide con Meta Ads: por qué ocurre (y qué mirar antes de pelearte con el píxel)";
const DESC =
  "GA4 no coincide con Meta Ads porque miden distinto: atribución, view-through, ventanas, UTMs y consentimiento. Qué comparar antes de tocar el píxel.";

const DATE_PUBLISHED = "2026-11-12T00:00:00-05:00";
const DATE_MODIFIED = "2026-11-12T00:00:00-05:00";
const DATE_ISO = "2026-11-12";
const DATE_VISIBLE = "12 de noviembre de 2026";
const SOURCES_CONSULTED = "9 de noviembre de 2026";
const BIO_URL = "https://www.linkedin.com/in/juan-tabares-b1272b58/";
// OG global del sitio (app/opengraph-image.tsx). No se crea una imagen propia.
const IMAGE_URL = "https://jtads.com/opengraph-image";
const IMAGE_ALT = "GA4 no coincide con Meta Ads: por qué ocurre. JT Ads";

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

// Fuente única: la FAQ visible y el FAQPage del JSON-LD salen de esta lista (texto literal de Oráculo).
const faqs = [
  {
    q: "¿Por qué GA4 no coincide con Meta Ads?",
    a: "Porque no miden lo mismo. GA4 registra sesiones y eventos clave en tu sitio o app y reparte crédito según su modelo de atribución (por defecto, basada en datos). Meta Ads atribuye conversiones a interacciones con el anuncio, con ventanas de clic y de view-through. Comparar totales sin alinear definiciones produce brechas normales.",
  },
  {
    q: "¿Si no coinciden, el píxel está mal?",
    a: "No necesariamente. Una brecha no prueba por sí sola un error de implementación. Meta puede contar conversiones tras una impresión (view-through) o un clic; GA4 atribuye lo que observa en rutas de tu propiedad. Revisa primero definición del evento, UTM, ventanas y, si usas píxel más CAPI, la deduplicación.",
  },
  {
    q: "¿El view-through explica parte de la diferencia?",
    a: "Sí, suele ser una causa clave. En la atribución estándar de Meta, el view-through cuenta eventos dentro de 1 día tras una impresión del anuncio; el click-through, 1 o 7 días tras el clic en el enlace. GA4 no usa esa misma lógica de impresión de Meta; atribuye según sus modelos y lo que mide en tu sitio.",
  },
  {
    q: "¿Cómo afectan los modelos y las ventanas de atribución?",
    a: "De forma directa. En GA4, el modelo por defecto es la atribución basada en datos; la ventana retrospectiva predeterminada de los demás eventos clave es de 90 días (configurable a 30 o 60). Meta usa clic a 1 o 7 días y view-through a 1 día tras la impresión. Sin alinear ventanas, los totales del mismo periodo no son comparables.",
  },
  {
    q: "¿Qué papel tienen las UTM y el consentimiento?",
    a: "Grande. Sin UTM coherentes (utm_source, utm_medium, utm_campaign), GA4 puede mostrar (not set) y malasignar canales. Con el modo de consentimiento, si el usuario no acepta, Google puede modelizar eventos clave no observados; Meta también opera con privacidad y señales limitadas. Eso abre brechas sin que el píxel esté «roto».",
  },
  {
    q: "¿Debo forzar que GA4 y Meta Ads muestren el mismo número?",
    a: "No. Ninguna de las dos plataformas promete que sus totales coincidan. Úsalas como lecturas distintas: Meta para optimizar pauta; GA4 para recorrido en el sitio; el CRM como juez del lead o compra buena. Si disparas píxel y Conversions API, Meta pide el mismo event_id y nombre para deduplicar.",
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
      description:
        "No: GA4 y Meta Ads casi nunca deben cuadrar al peso. Miden objetos distintos (sesiones y eventos clave en tu sitio frente a conversiones atribuidas a anuncios, incluido el view-through), con modelos y ventanas diferentes. Antes de pelearte con el píxel, alinea definición de evento, UTM, ventanas y mira el CRM; no esperes que los totales coincidan.",
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
        "https://support.google.com/analytics/answer/10596866?hl=es",
        "https://support.google.com/analytics/answer/10597962?hl=es",
        "https://support.google.com/analytics/answer/10710245?hl=es",
        "https://support.google.com/analytics/answer/10000067?hl=es",
        "https://support.google.com/analytics/answer/10917952?hl=es",
        "https://support.google.com/analytics/answer/12798876?hl=es",
        "https://www.facebook.com/business/help/460276478298895",
        "https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events",
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

const sources: { group: string; items: { label: string; href: string }[] }[] = [
  {
    group: "Google (Ayuda de Analytics y Privacy Sandbox)",
    items: [
      { label: "«Empezar a utilizar la atribución» (modelos; exclusión de directo; reatribución hasta 7 días)", href: "https://support.google.com/analytics/answer/10596866?hl=es" },
      { label: "«Atribuir la contribución a un evento clave» (basada en datos como modelo predeterminado)", href: "https://support.google.com/analytics/answer/12958241?hl=es" },
      { label: "«Seleccionar la configuración de atribución» (ventanas retrospectivas 90/30/60 y 30/7; dimensiones de evento vs sesión)", href: "https://support.google.com/analytics/answer/10597962?hl=es" },
      { label: "«Acerca de los eventos clave modelizados» (modelización; cambios hasta 12 días)", href: "https://support.google.com/analytics/answer/10710245?hl=es" },
      { label: "«Acerca del modo de consentimiento» (básico vs avanzado)", href: "https://support.google.com/analytics/answer/10000067?hl=es" },
      { label: "«Modo de consentimiento en sitios web y aplicaciones móviles» (pings sin cookies y modelización)", href: "https://support.google.com/analytics/answer/9976101?hl=es" },
      { label: "«Creadores de URLs» (UTM, «(not set)», mayúsculas)", href: "https://support.google.com/analytics/answer/10917952?hl=es" },
      { label: "«Sesión»", href: "https://support.google.com/analytics/answer/12798876?hl=es" },
      { label: "Privacy Sandbox, «Next steps for Privacy Sandbox and tracking protections in Chrome», 22 abr 2025", href: "https://privacysandbox.google.com/blog/privacy-sandbox-next-steps" },
      { label: "Privacy Sandbox, «Update on Plans for Privacy Sandbox Technologies», 17 oct 2025", href: "https://privacysandbox.google.com/blog/update-on-plans-for-privacy-sandbox-technologies" },
    ],
  },
  {
    group: "Meta",
    items: [
      { label: "Meta Business Help, «About attribution models and attribution settings» (estándar, incremental, personalizada; click/view/engage-through)", href: "https://www.facebook.com/business/help/460276478298895" },
      { label: "Meta Business Help, «Troubleshoot common reporting differences between Meta Ads Reporting and third-party reporting tools» (ventana, fecha de conversión vs impresión, píxel)", href: "https://www.facebook.com/business/help/511923449323749" },
      { label: "Meta for Developers, «Handling Duplicate Pixel and Conversions API Events» (event_id + nombre; 48 h)", href: "https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events" },
      { label: "Meta for Developers, Ad Account Insights API (action_report_time; default = 7d_click + 1d_view)", href: "https://developers.facebook.com/docs/marketing-api/reference/ad-account/insights/" },
    ],
  },
  {
    group: "Navegadores",
    items: [
      { label: "WebKit, «Full Third-Party Cookie Blocking and More», 24 mar 2020", href: "https://webkit.org/blog/10218/full-third-party-cookie-blocking-and-more/" },
    ],
  },
];

const P_ = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-bold text-2xl text-[#1c1b1b] mt-12 mb-4";
const H3 = "font-bold text-lg text-[#1c1b1b] mt-8 mb-3";
const A = "text-[#0066ff] font-semibold hover:underline";
const UL = "list-disc pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base";
const OL = "list-decimal pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base";
const B = "text-[#1c1b1b]";

export default function PostGa4NoCoincideMetaAds() {
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
            , fundador de JT Ads · <time dateTime={DATE_ISO}>{DATE_VISIBLE}</time> · 10 min de lectura
          </p>
          <p className="text-[#727687] text-sm mt-2">
            Actualizado el <time dateTime={DATE_ISO}>{DATE_VISIBLE}</time>. Documentación de Google y Meta consultada el {SOURCES_CONSULTED}.
          </p>
        </div>
      </section>

      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

<p className={P_}>Abres Meta Ads y dice una cosa. Abres GA4 y dice otra. La primera reacción es pensar que el píxel está roto. A veces lo está, pero casi siempre la razón es más simple: GA4 no coincide con Meta Ads porque no están midiendo lo mismo. Aquí te explico por qué, qué causas mueven más la diferencia y qué revisar antes de tocar la implementación.</p>

<h2 className={H2}>¿Por qué GA4 no coincide con Meta Ads?</h2>
<div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
<p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">Respuesta corta</p>
<p className="text-[#424656] text-sm leading-relaxed">No: GA4 y Meta Ads casi nunca deben cuadrar al peso. Miden objetos distintos (sesiones y eventos clave en tu sitio frente a conversiones atribuidas a anuncios, incluido el view-through), con modelos y ventanas diferentes. Antes de pelearte con el píxel, alinea definición de evento, UTM, ventanas y mira el CRM; no esperes que los totales coincidan.</p>
</div>

<h2 className={H2}>No es (solo) «el píxel está mal»</h2>
<h3 className={H3}>Dos lecturas del mismo lead</h3>
<p className={P_}>Piensa en un lead que llega por un anuncio de Meta. Meta lo cuenta como conversión de su anuncio si ocurrió dentro de la ventana que configuraste: después de un clic en el enlace o, según tu configuración, después de solo ver el anuncio. GA4 lo ve de otra forma: registra la sesión en tu sitio, el evento clave y le da el crédito a un canal según su modelo de atribución. Por defecto, la Ayuda de Analytics dice que GA4 usa el modelo de atribución basada en datos.</p>
<p className={P_}>Las dos lecturas pueden ser correctas al mismo tiempo. Lo que no tiene sentido es exigirles el mismo total. La propia Ayuda de Meta lo reconoce: los conteos de conversiones de Meta pueden diferir de los de una herramienta de terceros, porque cada una define y recibe la información de forma distinta. Meta incluso advierte que no compares resultados entre conjuntos de anuncios con modelos de atribución distintos, y que si usas una herramienta externa de analítica, evalúes el rendimiento en esa herramienta.</p>
<p className={P_}>Las causas de fondo de esa brecha las cubrimos en <Link href="/blog/tracking-server-side-cpl-plataforma" className={A}>CPL de plataforma vs CPL real</Link>. Aquí vamos a lo concreto: GA4 contra Meta.</p>

<h2 className={H2}>Causas que más mueven la brecha</h2>
<h3 className={H3}>Modelos y ventanas de atribución distintos</h3>
<p className={P_}><strong className={B}>En GA4</strong> (Ayuda de Analytics):</p>
<ul className={UL}>
<li>Hay tres modelos en los informes de atribución: basada en datos, último clic en canales de pago y orgánicos, y último clic en canales de pago de Google. Basada en datos es el predeterminado.</li>
<li>Todos los modelos excluyen las visitas directas del cálculo, salvo que la ruta sea solo de visitas directas.</li>
<li>La ventana retrospectiva predeterminada es de 90 días para los eventos clave en general (se puede cambiar a 30 o 60) y de 30 días para los de adquisición (<code>first_open</code> y <code>first_visit</code>, se puede cambiar a 7).</li>
<li>Con atribución basada en datos, una conversión se puede reatribuir hasta 7 días después de ocurrir, y puedes ver decimales en la columna de eventos clave porque el crédito se reparte.</li>
<li>El modelo que elijas cambia los informes con dimensiones de evento (Fuente, Medio, Campaña, Grupo de canales predeterminado), pero no las de sesión o usuario, como Fuente de la sesión. Dos informes de GA4 pueden no coincidir entre sí por eso.</li>
</ul>
<p className={P_}><strong className={B}>En Meta</strong> (Ayuda de Meta, modelo estándar):</p>
<ul className={UL}>
<li>Click-through: eventos dentro de 1 o 7 días después de un clic en el enlace del anuncio.</li>
<li>View-through: eventos dentro de 1 día después de una impresión del anuncio.</li>
<li>Engage-through: eventos dentro de 1 día después de una interacción que no es clic en el enlace (en video, también cuenta cierto tiempo de reproducción, según la definición de Meta).</li>
<li>Además del estándar, Meta ofrece atribución incremental y personalizada.</li>
<li>En la API de Insights de Meta, la opción <code>default</code> de ventana de atribución equivale a 7 días clic y 1 día visualización.</li>
</ul>
<p className={P_}>Ninguna de estas ventanas es la misma que la de GA4. Si comparas el mismo mes en las dos plataformas sin alinear esto, estás comparando reglas distintas.</p>

<h3 className={H3}>View-through: Meta cuenta la impresión</h3>
<p className={P_}>El view-through es la conversión de alguien que vio tu anuncio, no hizo clic y convirtió dentro de 1 día. Meta lo puede contar como conversión de su anuncio. GA4 no usa esa misma lógica de impresión de Meta: atribuye según sus modelos y lo que mide en tu sitio. Si tu cuenta de Meta tiene mucho alcance y mucha recordación, esa diferencia pesa.</p>
<p className={P_}>Un detalle útil: en Meta puedes usar «Comparar configuraciones de atribución» para ver cuántas conversiones son de clic y cuántas de visualización; es la herramienta que la propia Meta indica para comparar entre configuraciones.</p>

<h3 className={H3}>Fecha de la conversión</h3>
<p className={P_}>Meta te deja reportar las conversiones por el momento de la conversión o por el momento en que se mostró el anuncio. Su API lo explica con un ejemplo: si alguien vio el anuncio el 1 de enero y convirtió el 2, con fecha de impresión la conversión aparece el 1 y con fecha de conversión, el 2. Si no sabes cuál estás usando, un cierre de mes puede no cuadrar solo por eso.</p>

<h3 className={H3}>UTMs ausentes o inconsistentes</h3>
<p className={P_}>GA4 identifica las campañas por los parámetros UTM de la URL. La Ayuda de Analytics pide usar siempre <code>utm_source</code>, <code>utm_medium</code> y <code>utm_campaign</code>, y advierte que, si faltan parámetros, los informes muestran «(not set)». Además, los valores distinguen mayúsculas: <code>Meta</code> y <code>meta</code> son dos fuentes diferentes. Una cuenta con UTMs desordenados reparte el tráfico de Meta en varias filas o lo manda a otro canal.</p>

<h3 className={H3}>Consentimiento, navegadores y modelización</h3>
<p className={P_}>Cuando usas el modo de consentimiento y el usuario no acepta cookies, las etiquetas de Google no guardan cookies y envían pings sin cookies; GA4 usa modelización para completar los datos que faltan. En la implementación básica (etiquetas bloqueadas hasta el consentimiento) no se recogen esos datos y no hay modelización de comportamiento en GA4. GA4 también modeliza eventos clave en navegadores que no permiten medirlos con cookies de terceros o que limitan la duración de las cookies propias.</p>
<p className={P_}>Efecto práctico: en GA4, los datos de conversión atribuidos a cada canal pueden cambiar durante 12 días después de registrarse. Si comparas la semana que acaba de terminar, todavía se está moviendo.</p>

<h3 className={H3}>Deduplicación de píxel y Conversions API</h3>
<p className={P_}>Meta recomienda usar la Conversions API junto con el píxel. Si mandas el mismo evento por las dos vías, tienes que configurar la deduplicación: lo recomendado es enviar el mismo <code>event_id</code> y el mismo nombre de evento desde el navegador y desde el servidor. Meta solo deduplica si los eventos llegan dentro de las 48 horas siguientes al primero con ese <code>event_id</code>. Si no deduplicas, Meta puede contar dos veces lo que GA4 cuenta una.</p>
{/* J2 (/blog/conversions-api-vs-enhanced-conversions) hoy da 404: cuando esté en producción, agregar al final de la frase siguiente «y la comparación de Conversions API vs Enhanced Conversions» con su enlace. */}
<p className={P_}>Este artículo no es un tutorial de implementación; el contexto lo tienes en <Link href="/blog/tracking-server-side-que-es-por-que-pixel-miente" className={A}>qué es el tracking server-side y por qué tu píxel miente</Link>.</p>

<h3 className={H3}>Definición distinta del evento</h3>
<p className={P_}>Este es el más común y el que menos se revisa. En Meta, el «lead» que ves es el evento que configuraste para optimizar y reportar. En GA4, tu evento clave puede ser otro: un envío de formulario en tu sitio, un clic en un botón o una página de gracias. Si no son el mismo evento, no hay forma de que coincidan. Meta, además, sugiere revisar si los disparos del píxel en el Administrador de eventos coinciden con tu herramienta de terceros, y revisar disparos duplicados, que a veces vienen de redirecciones.</p>
<p className={P_}>Si sospechas que tu píxel está contando de más, repasa las <Link href="/blog/7-senales-de-que-tu-pixel-infla-tus-conversiones" className={A}>señales de que tu píxel infla tus conversiones</Link>.</p>

<h2 className={H2}>Atribución después de las cookies</h2>
<h3 className={H3}>Qué cambia en la práctica para quien pauta en LATAM</h3>
<p className={P_}>«Post-cookies» no significa que las cookies desaparecieron. Google anunció el 22 de abril de 2025 que Chrome mantiene su enfoque actual: el usuario elige sobre las cookies de terceros en la configuración, sin un aviso nuevo, y el modo incógnito ya las bloquea por defecto. El 17 de octubre de 2025, Google anunció el retiro de varias tecnologías de Privacy Sandbox, entre ellas la Attribution Reporting API y Topics. Safari, por su parte, bloquea por defecto las cookies de terceros desde Safari 13.1 e iOS 13.4 (marzo de 2020), según WebKit.</p>
<p className={P_}>Lo que sí cambió es que cada plataforma mide con más señales propias y más modelización: GA4 modeliza lo que no puede observar (consentimiento denegado, navegadores con restricciones, cambio de dispositivo), y Meta recomienda sumar señales de servidor con la Conversions API. Cada una completa los huecos con su propio método. Por eso las lecturas se separan más, no menos.</p>
<h3 className={H3}>Por qué el CRM sigue siendo el juez del «lead bueno»</h3>
<p className={P_}>Ni Meta ni GA4 saben si el lead contestó, si calificó o si compró. Eso lo sabe tu CRM. Mi criterio de operador: usa Meta para optimizar la pauta, GA4 para entender el recorrido en tu sitio, y el CRM para decidir qué campaña trae negocio. Si los tres cuentan cosas distintas, el que paga las cuentas es el tercero.</p>

<h2 className={H2}>Checklist antes de pelearte con el píxel</h2>
<p className={P_}>Cinco pasos que se pueden verificar. No van a hacer que los totales coincidan; van a hacer que la diferencia tenga explicación.</p>
<ol className={OL}>
<li><strong className={B}>Mismo evento en las dos plataformas.</strong> Escribe qué cuenta como lead en Meta y qué evento clave lo representa en GA4. Si no son el mismo, compara otra cosa o alinéalos primero.</li>
<li><strong className={B}>Ventanas y fecha a la vista.</strong> Anota la configuración de atribución de cada conjunto de anuncios en Meta y la ventana retrospectiva de GA4. Revisa si Meta reporta por fecha de impresión o de conversión. Usa «Comparar configuraciones de atribución» para separar clic de visualización.</li>
<li><strong className={B}>UTMs completos y en minúsculas.</strong> <code>utm_source</code>, <code>utm_medium</code> y <code>utm_campaign</code> en todos los anuncios, con la misma convención siempre. Busca «(not set)» en Adquisición de tráfico.</li>
<li><strong className={B}>Píxel y Conversions API deduplicados.</strong> Si envías el mismo evento por las dos vías, mismo <code>event_id</code> y mismo nombre. Compara los disparos del píxel en el Administrador de eventos con lo que ves en GA4.</li>
<li><strong className={B}>Cierra con el CRM y con periodos cerrados.</strong> Cuenta los leads por origen en tu CRM y compara periodos que ya no se muevan (GA4 puede ajustar la atribución por canal hasta 12 días después).</li>
</ol>

<h2 className={H2}>Cómo lo mira JT Ads</h2>
{/* Regla jtads.md: «cero inversión mínima» en todo el sitio (checks.py la busca). Se quitó «No hay inversión mínima» del borrador. */}
<p className={P_}>JT Ads es Meta Partner y Google Partner. Resultado que sí puedo decir: $500k+ USD/mes gestionados en ads. La pauta la pagas directo a la plataforma y la cuenta publicitaria queda a tu nombre.</p>
<p className={P_}>Cuando una cuenta llega con «GA4 no coincide con Meta», no empezamos por reinstalar el píxel. Empezamos por el checklist de arriba y por el CRM. Así es como trabajamos la medición en <Link href="/sistema" className={A}>nuestro sistema</Link>.</p>
<div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
<p className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed"><strong className={B}>¿Quieres que lo revisemos contigo?</strong></p>
<Link href="/diagnostico-en-vivo" data-cta="diag-envivo-ga4-meta-final" className="inline-block bg-[#0066ff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0052cc] transition-colors duration-150 text-sm">Revisamos en vivo cómo están midiendo GA4 y Meta en tu cuenta →</Link>
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
          {sources.map((g) => (
            <div key={g.group}>
              <p className="font-semibold text-[#1c1b1b] text-sm mb-2">{g.group}</p>
              <ul className="list-disc pl-6 mb-6 space-y-3 text-sm text-[#424656] leading-relaxed">
                {g.items.map((s) => (
                  <li key={s.href}>
                    {s.label}:{" "}
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>
                      {s.href}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>

      <Footer />
    </>
  );
}
