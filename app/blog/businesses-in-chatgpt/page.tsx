import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { toJsonLd } from "@/lib/schema";

const URL = "https://jtads.com/blog/businesses-in-chatgpt";
const SEO_TITLE = "Businesses in ChatGPT: cómo reclamar tu negocio";
const H1_TEXT = "Businesses in ChatGPT: cómo reclamar tu negocio y qué te muestra Business Hub";
const DESC =
  "OpenAI ya deja reclamar un negocio elegible en ChatGPT (beta). Cómo verificarlo paso a paso, qué mide Business Hub y qué hacer si aún no puedes.";

// PENDIENTE: actualizar fechas (byline, JSON-LD, sitemap lastmod) el día del merge
const DATE_PUBLISHED = "2026-11-11T00:00:00-05:00";
const DATE_MODIFIED = "2026-11-11T00:00:00-05:00";
const DATE_VISIBLE = "11 de noviembre de 2026";
const SOURCES_CONSULTED = "11 de noviembre de 2026";
const BIO_URL = "https://www.linkedin.com/in/juan-tabares-b1272b58/";
// OG global del sitio (app/opengraph-image.tsx). No se crea una imagen propia.
const IMAGE_URL = "https://jtads.com/opengraph-image";
const IMAGE_ALT = "Businesses in ChatGPT: cómo reclamar tu negocio y qué te muestra Business Hub. JT Ads";

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

// Fuente única: la FAQ visible y el FAQPage del JSON-LD salen de esta lista.
const faqs = [
  {
    q: "¿Qué es Businesses in ChatGPT?",
    a: "Es la beta que OpenAI lanzó el 10 de noviembre de 2026 para que los negocios elegibles reclamen su ficha en ChatGPT desde Business Hub, actualicen sus datos y vean menciones, clics a su web y temas de descubrimiento. Los Business Agents hoy son solo para e-commerce y servicios en línea elegibles de EE. UU.",
  },
  {
    q: "¿Cómo reclamo mi negocio en ChatGPT?",
    a: "Abre Business Hub en la barra lateral de ChatGPT, busca tu negocio, elige la ficha y verifícala por teléfono, correo del negocio, registro TXT en tu dominio o Shopify. Cuando OpenAI aprueba el reclamo, verificas tu identidad con Persona para publicar cambios, ver métricas o crear un agente si tu negocio es elegible.",
  },
  {
    q: "¿Qué métricas muestra Business Hub?",
    a: "La actividad agregada de los últimos 28 días: menciones (en un negocio en línea, cuando ChatGPT cita tu web; la marca sola no cuenta), clics a tu sitio y temas de descubrimiento. No muestra prompts ni conversaciones, y una métrica en blanco no significa cero.",
  },
  {
    q: "¿Reclamar mi negocio hace que ChatGPT me recomiende más?",
    a: "No. Según OpenAI, reclamarlo te deja gestionar la información que das, pero no garantiza más visibilidad ni da control sobre las recomendaciones independientes de ChatGPT. La publicidad tampoco influye en esas respuestas. Reclamar, publicar un agente y anunciarse son pasos separados.",
  },
  {
    q: "¿Una agencia puede gestionar la ficha de mi negocio en ChatGPT?",
    a: "Sí. El admin que reclamó el negocio puede agregar compañeros y dar acceso a una agencia desde Business Hub para gestionar el negocio o su agente. Cada persona entra con su propia cuenta de ChatGPT. Si el negocio se reclamó en un espacio de trabajo, los invitados pueden necesitar ser miembros de ese espacio.",
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
      name: H1_TEXT,
      description: DESC,
      inLanguage: "es",
      breadcrumb: { "@id": `${URL}#breadcrumb` },
      datePublished: DATE_PUBLISHED,
      dateModified: DATE_MODIFIED,
    },
    {
      "@type": "BlogPosting",
      "@id": `${URL}#article`,
      headline: H1_TEXT,
      description: DESC,
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
        "https://openai.com/index/introducing-businesses-chatgpt/",
        "https://help.openai.com/en/articles/20001635-setting-up-your-business-on-chatgpt",
        "https://www.reuters.com/5f374b32b07b/technology/openai-lets-businesses-claim-chatgpt-profiles-adds-ai-agents-us-e-commerce-firms-2026-11-10/",
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
        { "@type": "ListItem", position: 3, name: "Businesses in ChatGPT", item: URL },
      ],
    },
  ],
};

const P_ = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-bold text-2xl text-[#1c1b1b] mt-12 mb-4";
const A = "text-[#0066ff] font-semibold hover:underline";

export default function PostBusinessesInChatGPT() {
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
            , fundador de JT Ads · <time dateTime="2026-11-11">{DATE_VISIBLE}</time> · 7 min de lectura
          </p>
          <p className="text-[#727687] text-sm mt-2">
            Actualizado el <time dateTime="2026-11-11">{DATE_VISIBLE}</time>. Datos de OpenAI consultados el {SOURCES_CONSULTED}.
          </p>
        </div>
      </section>

      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

<div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
<p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">Respuesta corta</p>
<p className="text-[#424656] text-sm leading-relaxed">Businesses in ChatGPT es la beta que OpenAI lanzó el 10 de noviembre de 2026 para que un negocio elegible reclame su ficha en ChatGPT desde Business Hub, la verifique y, tras validar su identidad con Persona, edite sus datos y vea menciones, clics a su web y temas de descubrimiento de los últimos 28 días. <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup><sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></p>
</div>
<p className={P_}><strong className="text-[#1c1b1b]">Mi lectura, marcada como opinión:</strong> hasta el 10 de noviembre de 2026, saber si ChatGPT te recomendaba era pura estimación. Con Businesses in ChatGPT, OpenAI abre una vía oficial para gestionar tu ficha y ver datos agregados de cómo te encuentran. <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup> Te cuento cómo se hace y qué haría yo con eso.</p>
<h2 className={H2}>Qué es Businesses in ChatGPT (y qué no es)</h2>
<p className={P_}>Es un conjunto de herramientas en beta para negocios dentro de ChatGPT, que según OpenAI usan 1.200 millones de personas cada semana. <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup> Tiene dos piezas:</p>
<ul className="list-disc pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base">
<li><strong className="text-[#1c1b1b]">Business Hub:</strong> reclamas tu negocio, actualizas datos (web, descripción, categoría, logo, políticas de envío y devolución), subes un catálogo con precios y disponibilidad y ves métricas. <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup><sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></li>
<li><strong className="text-[#1c1b1b]">Business Agents:</strong> un agente con el que el usuario chatea sobre tus productos y políticas. Hoy solo para e-commerce y servicios en línea elegibles de EE. UU. <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup><sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></li>
</ul>
<p className={P_}>Lo que <strong className="text-[#1c1b1b]">no</strong> es: publicidad. OpenAI dice que reclamar tu negocio no garantiza más visibilidad ni te da control sobre las recomendaciones independientes de ChatGPT, y que la publicidad no influye en esas respuestas. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></p>
<h2 className={H2}>Quién puede reclamar hoy su negocio</h2>
<div className="overflow-x-auto rounded-xl border border-[#c2c6d8]/15 my-8">
<table className="w-full min-w-[560px] text-left border-collapse">
<thead><tr className="bg-[#f6f3f2]">
<th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Tipo de negocio</th>
<th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">¿Puede reclamar la ficha?</th>
<th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">¿Puede crear un Business Agent?</th>
</tr></thead><tbody>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Negocio elegible ubicado donde ChatGPT está disponible</th>
<td className="p-4 text-sm text-[#424656] align-top">Sí; la disponibilidad depende de la ubicación y el tipo de negocio <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup><sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></td>
<td className="p-4 text-sm text-[#424656] align-top">Solo si es e-commerce o servicio en línea de EE. UU., con web <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Negocio en línea elegible que no aparece en la búsqueda</th>
<td className="p-4 text-sm text-[#424656] align-top">Puede ver la opción de agregarlo <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></td>
<td className="p-4 text-sm text-[#424656] align-top">Igual que arriba</td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Tiendas y restaurantes locales</th>
<td className="p-4 text-sm text-[#424656] align-top">Por ahora solo pueden reclamar una ficha existente de EE. UU. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></td>
<td className="p-4 text-sm text-[#424656] align-top">No (hoy solo e-commerce y servicios en línea elegibles de EE. UU.)</td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Clientes Enterprise y anunciantes de OpenAI</th>
<td className="p-4 text-sm text-[#424656] align-top">Pueden hacerlo con su representante de OpenAI <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup></td>
<td className="p-4 text-sm text-[#424656] align-top">Según elegibilidad</td>
</tr>
<tr className="border-t border-[#c2c6d8]/15">
<th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b] align-top">Comercios de Shopify</th>
<td className="p-4 text-sm text-[#424656] align-top">Pueden conectar su tienda desde Business Hub o desde el admin de Shopify <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup></td>
<td className="p-4 text-sm text-[#424656] align-top">Según elegibilidad</td>
</tr>
</tbody></table></div>
<p className={P_}>No necesitas una cuenta de anuncios ni un contrato Enterprise para reclamar un negocio elegible. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></p>
<h2 className={H2}>Cómo reclamar tu negocio en ChatGPT, paso a paso</h2>
<p className={P_}>Estos son los pasos que publica el Centro de Ayuda de OpenAI: <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></p>
<ol className="list-decimal pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base">
<li>Inicia sesión en ChatGPT y abre <strong className="text-[#1c1b1b]">Business Hub</strong> desde la barra lateral. Busca tu negocio por nombre.</li>
<li>Elige la ficha que corresponde a tu negocio y confirma la cuenta de ChatGPT con la que la vas a gestionar.</li>
<li>Elige uno de los métodos de verificación que te muestre y sigue las instrucciones:
<ul className="list-disc pl-6 mt-2 space-y-2">
<li><strong className="text-[#1c1b1b]">Teléfono del negocio:</strong> código por SMS o por llamada automática.</li>
<li><strong className="text-[#1c1b1b]">Correo del negocio:</strong> código al correo asociado al negocio.</li>
<li><strong className="text-[#1c1b1b]">Dominio web:</strong> agregas en tu DNS el registro TXT que muestra ChatGPT y eliges «Verify domain». El DNS puede tardar.</li>
<li><strong className="text-[#1c1b1b]">Tienda Shopify:</strong> conectas la tienda y sigues los pasos.</li>
</ul>
</li>
<li>Espera la aprobación: OpenAI revisa el reclamo y responde por correo.</li>
<li>Completa la <strong className="text-[#1c1b1b]">verificación de identidad con Persona</strong>: sin ella no publicas cambios, no ves métricas ni creas un agente. Te pueden pedir documento de identidad, registro del negocio y prueba de que lo representas. La insignia azul aparece al aprobarse Persona.</li>
</ol>
<p className={P_}>Dos advertencias antes de empezar:</p>
<ul className="list-disc pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base">
<li><strong className="text-[#1c1b1b]">Si creas un perfil nuevo con Persona, la aprobación lo publica automáticamente</strong>, y el soporte de OpenAI no puede borrar, despublicar ni ocultar un perfil publicado. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></li>
<li><strong className="text-[#1c1b1b]">Si otra persona ya reclamó tu ficha</strong>, puedes disputarla desde el menú (•••) con «Dispute ownership». <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></li>
</ul>
<h2 className={H2}>Qué mide Business Hub (y qué no)</h2>
<p className={P_}>Una vez aprobados el reclamo y Persona, en <strong className="text-[#1c1b1b]">Insights</strong> ves la actividad agregada de los últimos 28 días: <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></p>
<ul className="list-disc pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base">
<li><strong className="text-[#1c1b1b]">Menciones.</strong> En un negocio en línea cuenta cuando ChatGPT hace referencia a tu sitio web; <strong className="text-[#1c1b1b]">que nombre tu marca sin tu web no cuenta</strong>. En un negocio local cuenta cuando ChatGPT muestra un resultado de esa ubicación, aunque el usuario no abra la ficha. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></li>
<li><strong className="text-[#1c1b1b]">Clics al sitio web.</strong> Cuántas veces la gente hace clic hacia tu web. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></li>
<li><strong className="text-[#1c1b1b]">Temas de descubrimiento.</strong> Temas comunes en las respuestas que te mencionaron o citaron. No muestran prompts individuales ni miden la intención del cliente. <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup><sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></li>
</ul>
<p className={P_}>No te da conversaciones ni prompts individuales. <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup><sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup> Los datos aparecen solo al superar ciertos umbrales: <strong className="text-[#1c1b1b]">una métrica en blanco no significa cero actividad</strong>. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></p>
<h2 className={H2}>Qué cambia esto en una estrategia de visibilidad en IA (GEO/AEO)</h2>
<p className={P_}><strong className="text-[#1c1b1b]">Mi lectura, marcada como opinión:</strong> lo importante no es la ficha, es la medición. En GEO y AEO trabajábamos con muestreos y estimaciones; ahora hay un número oficial de menciones y clics, aunque sea agregado, con umbrales y en beta.</p>
<p className={P_}>Lo que haría yo con eso:</p>
<ol className="list-decimal pl-6 mb-6 space-y-2 text-[#424656] leading-relaxed text-base">
<li><strong className="text-[#1c1b1b]">Reclamar la ficha y dejar los datos consistentes</strong> con tu web y tu perfil de Google. ChatGPT también usa otras fuentes para responder sobre tu negocio. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></li>
<li><strong className="text-[#1c1b1b]">Anotar la línea base el día uno.</strong> Guarda menciones, clics y temas de descubrimiento, y compáralos cada 28 días, que es la ventana que muestra Business Hub. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></li>
<li><strong className="text-[#1c1b1b]">Usar los temas de descubrimiento para el contenido.</strong> Si aparece un tema sin una página tuya que lo responda, ahí hay una página por escribir.</li>
<li><strong className="text-[#1c1b1b]">Medir los clics hasta el CRM.</strong> Un clic no es un lead: lo explico en <Link href="/blog/tracking-server-side-cpl-plataforma" className={A}>CPL de plataforma vs CPL real</Link> y en <Link href="/blog/tiempo-de-respuesta-leads" className={A}>tiempo de respuesta a leads</Link>.</li>
<li><strong className="text-[#1c1b1b]">Dar acceso a la agencia sin compartir contraseñas.</strong> El admin que reclamó el negocio puede agregar compañeros y dar acceso a una agencia; cada persona usa su propia cuenta de ChatGPT. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></li>
</ol>
<p className={P_}>Lo que sigue igual: el contenido citable. Lo que expliqué sobre <Link href="/blog/chatgpt-ads" className={A}>cómo aparecer en ChatGPT sin pagar anuncios</Link> sigue valiendo, porque la mención de un negocio en línea solo cuenta si ChatGPT cita tu web. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup></p>
<h2 className={H2}>Qué hacer si tu negocio todavía no puede reclamar</h2>
<p className={P_}>Según OpenAI, las tiendas y restaurantes locales por ahora solo pueden reclamar fichas existentes de EE. UU. <sup className="text-xs"><a href="#fuente-2" className="text-[#0066ff] hover:underline" aria-label="Fuente 2">[2]</a></sup>, y la empresa planea ampliar el producto a más mercados y categorías, sin fechas. <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup> Mientras tanto: perfil de Google completo, datos consistentes, páginas claras de servicios y FAQ visibles.</p>
<h2 className={H2}>Business Agents y ChatGPT Ads: cómo se conectan</h2>
<p className={P_}>Un negocio puede patrocinar su Business Agent y usarlo como destino de sus anuncios en ChatGPT; los espacios patrocinados van etiquetados y separados de las respuestas. <sup className="text-xs"><a href="#fuente-1" className="text-[#0066ff] hover:underline" aria-label="Fuente 1">[1]</a></sup><sup className="text-xs"><a href="#fuente-3" className="text-[#0066ff] hover:underline" aria-label="Fuente 3">[3]</a></sup> Sobre el lado pago, mira mi <Link href="/blog/chatgpt-ads" className={A}>prueba de ChatGPT Ads</Link>; y para otro agente de negocio dentro de una plataforma, <Link href="/blog/que-es-meta-business-agent" className={A}>Meta Business Agent</Link>.</p>
<p className={P_}>JT Ads es Google Partner y Meta Partner.</p>
<div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
<p className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed">Si quieres saber de dónde salen tus leads y cuántos terminan en cliente, lo revisamos en un diagnóstico en vivo.</p>
<Link href="/diagnostico-en-vivo" data-cta="diag-envivo-businesses-chatgpt-final" className="inline-block bg-[#0066ff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0052cc] transition-colors duration-150 text-sm">Agenda un diagnóstico en vivo →</Link>
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
          <p className={P_}>Consultadas el {SOURCES_CONSULTED}. Es una beta: revisa la fuente antes de decidir.</p>
<ol start={1} className="list-decimal pl-6 mb-6 space-y-3 text-sm text-[#424656] leading-relaxed">
<li id="fuente-1">OpenAI, «Introducing Businesses in ChatGPT», 10 nov 2026: <a href="https://openai.com/index/introducing-businesses-chatgpt/" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://openai.com/index/introducing-businesses-chatgpt/</a></li>
<li id="fuente-2">OpenAI Help Center, «Setting up your business on ChatGPT» (actualizada el 10 nov 2026; «Updated: 20 hours ago» al consultarla): <a href="https://help.openai.com/en/articles/20001635-setting-up-your-business-on-chatgpt" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://help.openai.com/en/articles/20001635-setting-up-your-business-on-chatgpt</a></li>
<li id="fuente-3">Reuters, «OpenAI lets businesses claim ChatGPT profiles, adds AI agents for US e-commerce firms», 10 nov 2026: <a href="https://www.reuters.com/5f374b32b07b/technology/openai-lets-businesses-claim-chatgpt-profiles-adds-ai-agents-us-e-commerce-firms-2026-11-10/" target="_blank" rel="noopener noreferrer" className={A} style={{ overflowWrap: "anywhere" }}>https://www.reuters.com/5f374b32b07b/technology/openai-lets-businesses-claim-chatgpt-profiles-adds-ai-agents-us-e-commerce-firms-2026-11-10/</a></li>
</ol>
        </div>
      </article>

      <Footer />
    </>
  );
}
