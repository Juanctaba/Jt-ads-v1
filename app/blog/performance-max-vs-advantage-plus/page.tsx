import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { breadcrumb, faqPage, toJsonLd, absoluteUrl, type Crumb } from "@/lib/schema";

const PATH = "/blog/performance-max-vs-advantage-plus";
const URL = absoluteUrl(PATH);
const H1 = "Performance Max vs Advantage+: en qué se diferencian y cuál te conviene";
const SEO_TITLE = "Performance Max vs Advantage+: cuál conviene a tu negocio";
const DESC =
  "Performance Max (Google) y Advantage+ (Meta) no son lo mismo. Compara objetivos, controles y reportes, y decide dónde poner tu próximo dólar.";

// TODO(merge): datePublished/dateModified se fijan el día del merge a producción.
// Hoy llevan la fecha en que se abrió el PR (2026-10-28) como valor provisional;
// Atlas/Dev Web los actualizan al día real del merge, igual que la fecha visible
// ("Octubre 2026") y el lastmod de app/sitemap.ts.
const DATE_PUBLISHED = "2026-10-28";
const DATE_MODIFIED = "2026-10-28";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESC,
  alternates: { canonical: URL, languages: { es: URL } },
  openGraph: {
    title: "Performance Max vs Advantage+: en qué se diferencian y cuál te conviene",
    description:
      "La comparación directa entre Performance Max y Advantage+: qué es cada una, qué controlas y cómo medir cuál funciona en tu cuenta.",
    images: ["/opengraph-image"],
    url: URL,
  },
};

const crumbs: Crumb[] = [
  { name: "Inicio", path: "" },
  { name: "Blog", path: "/blog" },
  { name: H1, path: PATH },
];

// FAQ visible y FAQPage JSON-LD salen del mismo array: el texto no puede divergir.
const faqs = [
  {
    q: "¿Performance Max y Advantage+ son el mismo tipo de campaña?",
    a: "No. Performance Max es un tipo de campaña de Google Ads que sirve en los canales de Google con una sola campaña. Advantage+ es el nombre que Meta le da a un conjunto de automatizaciones: campañas completas para ventas, apps y leads, y funciones sueltas de audiencia, ubicaciones, presupuesto y creativos. Comparten la idea de ceder decisiones al algoritmo; el resto cambia.",
  },
  {
    q: "¿Cuál es mejor para generar leads?",
    a: "Depende de cómo midas. Google permite Performance Max con objetivo de oportunidades de venta y Meta tiene campañas Advantage+ de leads. En ambas, si optimizas solo al costo por lead de la plataforma, el algoritmo aprende a conseguir formularios, no clientes. Lo que decide es qué conversión le envías: mientras más cerca de una venta real, mejor.",
  },
  {
    q: "¿Puedo usar Performance Max y Advantage+ al mismo tiempo?",
    a: "Sí, son plataformas distintas. Cada una reporta sus propias conversiones, así que lo útil es comparar los resultados de las dos contra tu CRM.",
  },
  {
    q: "¿Qué puedo controlar si uso automatización?",
    a: "En Google Ads puedes aplicar exclusiones de marca, palabras clave negativas, temas de búsqueda, exclusiones de emplazamientos y decidir si activas la expansión de URL final. En Meta puedes fijar a nivel de cuenta ubicaciones geográficas, edad mínima, audiencias excluidas para proteger la marca y ubicaciones que no quieres usar. Estos controles de Meta no aplican a anuncios de temas sociales, elecciones o política, ni a productos y servicios financieros, empleo o vivienda.",
  },
  {
    q: "¿Cómo sé cuál funciona mejor en mi cuenta?",
    a: "Compara por resultado de negocio, no por el reporte de cada plataforma: ventas o leads calificados en tu CRM contra lo que invertiste en cada una. Google advierte que el rendimiento promedio de un solo canal, sobre todo en periodos cortos, no cuenta la historia completa; Meta aclara que su Opportunity Score no refleja tu rendimiento real ni futuro.",
  },
  {
    q: "¿Advantage+ Shopping y Advantage+ sales campaigns son lo mismo?",
    a: "Sí. Meta actualizó y renombró las campañas Advantage+ Shopping como Advantage+ sales campaigns. Si lees guías antiguas que hablan de ASC, se refieren a esto.",
  },
];

const comparison: { dim: string; pmax: string; adv: string }[] = [
  {
    dim: "Qué es",
    pmax: "Un tipo de campaña de Google Ads",
    adv: "Un conjunto de soluciones: campañas completas y automatizaciones sueltas",
  },
  {
    dim: "Dónde se muestra",
    pmax: "Canales de Google: Búsqueda, YouTube, Display, Discover, Gmail y Maps",
    adv: "Ubicaciones de Meta; Advantage+ placements busca las más rentables",
  },
  {
    dim: "Objetivos",
    pmax: "Ventas, oportunidades de venta, tráfico, visitas a tienda",
    adv: "Campañas completas para ventas, apps y leads",
  },
  {
    dim: "Qué le das",
    pmax: "Objetivos de conversión, texto, imágenes, video, feeds y señales de audiencia",
    adv: "Datos propios conectados, creativos variados y tu audiencia como sugerencia",
  },
  {
    dim: "Controles principales",
    pmax: "Exclusiones de marca, palabras clave negativas, temas de búsqueda, exclusiones de emplazamientos, expansión de URL final",
    adv: "Controles de cuenta: ubicaciones geográficas, edad mínima, audiencias excluidas para proteger la marca, ubicaciones excluidas",
  },
  {
    dim: "Presupuesto",
    pmax: "Presupuesto diario, con recomendaciones de nivel bajo, medio y alto al configurar",
    adv: "Advantage+ campaign budget reparte un presupuesto único entre conjuntos de anuncios",
  },
  {
    dim: "Reportes",
    pmax: "Rendimiento por canal, términos de búsqueda, recursos y grupos de recursos",
    adv: "Desgloses por audiencias nuevas, comprometidas y existentes; Opportunity Score",
  },
  {
    dim: "Lo que cedes",
    pmax: "Cómo se reparte el gasto entre canales",
    adv: "Qué tanto se expande la audiencia más allá de lo que sugeriste",
  },
];

const SOURCES: { href: string; label: string }[] = [
  { href: "https://support.google.com/google-ads/answer/10724817?hl=es", label: "Google Ads Help: Acerca de las campañas Máximo rendimiento" },
  { href: "https://blog.google/products/ads-commerce/channel-performance-reporting-coming-to-performance-max/", label: "Google Ads & Commerce Blog: Channel performance reporting coming to Performance Max" },
  { href: "https://www.facebook.com/business/help/2486309305148646", label: "Meta Business Help Center: Meta Advantage+ features" },
  { href: "https://www.facebook.com/business/help/1362234537597370", label: "Meta Business Help Center: About Advantage+ sales campaigns" },
  { href: "https://www.facebook.com/business/help/1438478636941047", label: "Meta Business Help Center: Set audience and placement controls for your ad account" },
  { href: "https://www.facebook.com/business/ads/meta-advantage/advantage-plus-shopping-ads", label: "Meta for Business: Advantage+ shopping campaigns (aviso de renombre a Advantage+ sales campaigns)" },
];

const P_ = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-bold text-2xl text-[#1c1b1b] mt-12 mb-4";
const H3 = "font-bold text-lg text-[#1c1b1b] mt-8 mb-3";
const A = "text-[#0066ff] font-semibold hover:underline";
const LI = "text-[#424656] leading-relaxed text-base";

export default function PostPmaxVsAdvantage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: H1,
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
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
    image: "https://jtads.com/opengraph-image",
    url: URL,
    inLanguage: "es",
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
            Performance Max
          </span>
          <h1 className="font-bold text-white text-3xl md:text-4xl leading-tight mb-6">{H1}</h1>
          <p className="text-[#727687] text-sm">Octubre 2026 · 8 min de lectura</p>
        </div>
      </section>

      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <p className={P_}>
            Si manejas ads en Google y en Meta, alguien ya te lo preguntó: «¿Performance Max y Advantage+ no son lo
            mismo?». No. Se parecen en una sola cosa, que le entregas decisiones al algoritmo. Todo lo demás cambia:
            qué compran, qué te dejan controlar y cómo se miden.
          </p>
          <p className={P_}>
            Esta guía es solo la comparación. Si quieres entender cómo opera PMax por dentro, lee{" "}
            <Link href="/blog/performance-max-como-funciona-latam" className={A}>
              Performance Max en LATAM: cómo funciona y cuándo realmente conviene usarlo
            </Link>
            . Si te interesa{" "}
            <Link href="/blog/hiper-automatizacion-campanas-mas-alla-performance-max" className={A}>
              qué viene después: AI Max, Advantage+ Audience y niveles de automatización
            </Link>
            , tienes ese análisis aparte. Aquí vamos a lo práctico: qué es cada una, cuál encaja con tu negocio y cómo saber si está funcionando.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">Respuesta corta</p>
            <ul className="space-y-3 text-sm leading-relaxed text-[#424656] list-disc pl-5">
              <li>
                <strong className="text-[#1c1b1b]">Performance Max</strong> es un tipo de campaña de Google Ads que
                sirve en los canales de Google con una sola campaña.
              </li>
              <li>
                <strong className="text-[#1c1b1b]">Advantage+</strong> es el nombre de un conjunto de automatizaciones
                de Meta: campañas completas y funciones sueltas que enciendes por piezas.
              </li>
              <li>
                Para e-commerce con catálogo suele tener sentido probar las dos. Para leads, depende de que midas
                calidad en tu CRM y no solo el costo por lead de la plataforma.
              </li>
              <li>Ninguna arregla un tracking malo. Lo amplifican.</li>
            </ul>
          </div>

          <h2 className={H2}>Una es una campaña; la otra es una familia de automatizaciones</h2>
          <p className={P_}>Esta es la diferencia que más se pasa por alto.</p>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">Performance Max</strong> es, según Google, un tipo de campaña basada en
            objetivos que da acceso a todo el inventario de Google Ads (YouTube, Display, Búsqueda, Discover, Gmail y
            Maps) desde una sola campaña. Puedes crearla con objetivo de ventas, oportunidades de venta, tráfico al
            sitio web o visitas a tiendas.
          </p>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">Advantage+</strong> no es una campaña. Meta lo describe como un conjunto
            de productos. Por un lado, soluciones de punta a punta para ventas, apps y leads. Por otro, automatizaciones
            que eliges una por una: audiencia, ubicaciones, presupuesto, creativos y destino.
          </p>
          <p className={P_}>
            ¿Qué cambia para ti? En Google la automatización llega empaquetada en la campaña. En Meta puedes encenderla
            por piezas y dejar el resto bajo tu control. Eso cambia cómo pruebas y cómo aislas lo que funciona.
          </p>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">Ojo con los nombres.</strong> Meta actualizó y renombró Advantage+
            shopping como Advantage+ sales campaigns. Si lees guías viejas sobre ASC, hablan de lo mismo.
          </p>

          <h2 className={H2}>Tabla comparativa: Performance Max vs Advantage+</h2>
          <div className="overflow-x-auto rounded-xl border border-[#c2c6d8]/15 my-8">
            <table className="w-full min-w-[640px] text-left border-collapse">
              <thead>
                <tr className="bg-[#f6f3f2]">
                  <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Dimensión</th>
                  <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Performance Max (Google)</th>
                  <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Advantage+ (Meta)</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((r) => (
                  <tr key={r.dim} className="border-t border-[#c2c6d8]/15 align-top">
                    <th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b]">{r.dim}</th>
                    <td className="p-4 text-sm text-[#424656]">{r.pmax}</td>
                    <td className="p-4 text-sm text-[#424656]">{r.adv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#727687] leading-relaxed mb-10 italic">
            Fuentes: ayuda de Google Ads («Acerca de las campañas Máximo rendimiento»), blog de Google Ads sobre
            reportes de Performance Max, y el Centro de ayuda de Meta («Meta Advantage+ features», «About Advantage+
            sales campaigns», «Set audience and placement controls for your ad account»).
          </p>

          <h2 className={H2}>Qué sí puedes controlar en cada una</h2>
          <p className={P_}>Automatizar no es renunciar a todo. Estos son los frenos que existen hoy.</p>

          <h3 className={H3}>En Performance Max (Google):</h3>
          <ul className="space-y-2 mb-6 pl-5 list-disc">
            <li className={LI}>Exclusiones de marca y palabras clave negativas para bloquear consultas que no quieres.</li>
            <li className={LI}>
              Temas de búsqueda y segmentación sin palabras clave, para orientar a la IA hacia las intenciones que más
              valen.
            </li>
            <li className={LI}>Exclusiones de emplazamientos y filtros de idoneidad del contenido.</li>
            <li className={LI}>
              Expansión de URL final: la activas tú. Si la activas, Google puede cambiar tu página de destino, y tú
              sigues siendo responsable de lo que dice.
            </li>
            <li className={LI}>
              Una regla útil: si ya tienes una campaña de Búsqueda con una palabra clave de concordancia exacta, esa
              campaña tiene prioridad sobre Performance Max cuando la consulta coincide.
            </li>
          </ul>

          <h3 className={H3}>En Advantage+ (Meta):</h3>
          <ul className="space-y-2 mb-6 pl-5 list-disc">
            <li className={LI}>
              Controles de cuenta que aplican a todas tus campañas: ubicaciones geográficas, edad mínima, audiencias
              excluidas para proteger la marca, y ubicaciones que no quieres usar.
            </li>
            <li className={LI}>
              Las audiencias que defines (personalizadas, lookalike, segmentación detallada) pueden funcionar como
              sugerencia: Meta puede entregar más allá si cree que mejora el rendimiento.
            </li>
            <li className={LI}>
              Un límite: estos controles de cuenta no aplican a anuncios de temas sociales, elecciones o política, ni a
              productos y servicios financieros, empleo o vivienda.
            </li>
          </ul>

          <h2 className={H2}>Cómo medir cada una sin engañarte</h2>
          <p className={P_}>Aquí se rompen más cuentas que en la configuración.</p>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">Performance Max</strong> te da reporte de rendimiento por canal,
            términos de búsqueda y métricas por recurso. Úsalos, pero con una advertencia que hace Google: el
            rendimiento promedio de un solo canal, sobre todo en periodos cortos, no cuenta la historia completa. No
            apagues YouTube porque su CPA de esta semana se ve alto.
          </p>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">Advantage+</strong> te deja armar segmentos de audiencia para ver
            desgloses de clientes nuevos, comprometidos y existentes. Meta también ofrece Opportunity Score, pero
            aclara que ese puntaje no refleja tu rendimiento real ni futuro.
          </p>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">Mi regla:</strong> la plataforma te dice qué pasó dentro de la
            plataforma. Tu CRM te dice si eso fue dinero. Si optimizas al costo por lead y nunca bajas a «lead
            calificado» o «venta», el algoritmo aprende a conseguir formularios, no clientes. Eso pasa en las dos. Si
            quieres ver por qué el CPL de plataforma suele mentir, lee{" "}
            <Link href="/blog/tracking-server-side-cpl-plataforma" className={A}>
              CPL de plataforma vs CPL real: por qué Meta y Google no cuadran con tu CRM
            </Link>
            .
          </p>

          <h2 className={H2}>Cuál elegir según tu caso</h2>
          <p className={P_}>
            Esta es mi posición, sin humo. Si prefieres que lo veamos en tu cuenta, así trabajamos{" "}
            <Link href="/agencia-google-ads-latam" className={A}>
              Google Ads
            </Link>{" "}
            y{" "}
            <Link href="/agencia-meta-ads-latam" className={A}>
              Meta Ads
            </Link>
            :
          </p>
          <ol className="space-y-3 mb-6 pl-5 list-decimal">
            <li className={LI}>
              <strong className="text-[#1c1b1b]">E-commerce con catálogo.</strong> Prueba las dos. Performance Max
              aprovecha tus feeds en los canales de Google y Advantage+ sales campaigns hace lo propio dentro de Meta.
              Es el caso donde más sentido tienen.
            </li>
            <li className={LI}>
              <strong className="text-[#1c1b1b]">Generación de leads o servicios.</strong> Google permite Performance
              Max con objetivo de oportunidades de venta y Meta tiene campañas Advantage+ de leads. Mi orden: si tu
              cliente ya te busca, Google; si necesitas crear la demanda, Meta. En ambos casos, mide calidad de lead
              antes de escalar.
            </li>
            <li className={LI}>
              <strong className="text-[#1c1b1b]">Cuenta nueva o sin historial.</strong> Define desde el inicio qué
              conversión vas a medir en tu CRM, porque cada plataforma reporta las suyas.
            </li>
            <li className={LI}>
              <strong className="text-[#1c1b1b]">Necesitas control fino de palabras clave.</strong> Mantén Búsqueda por
              separado y usa Performance Max para complementar, no para reemplazar.
            </li>
            <li className={LI}>
              <strong className="text-[#1c1b1b]">Marca con restricciones estrictas.</strong> Revisa primero qué
              controles te dejan cada una. Si no alcanzan, la respuesta correcta puede ser no automatizar esa parte.
            </li>
          </ol>

          <h2 className={H2}>Tres errores al comparar</h2>
          <ul className="space-y-2 mb-6 pl-5 list-disc">
            <li className={LI}>
              <strong className="text-[#1c1b1b]">Comparar CPA entre plataformas.</strong> Cada una cuenta a su manera.
              La comparación válida es contra tu CRM.
            </li>
            <li className={LI}>
              <strong className="text-[#1c1b1b]">Juzgar una semana.</strong> Cambiar presupuesto, creativos y objetivos
              cada día no deja que ninguna de las dos aprenda, y no sabrás qué cambio hizo qué.
            </li>
            <li className={LI}>
              <strong className="text-[#1c1b1b]">Delegar sin exclusiones.</strong> Sin exclusiones de marca en Google
              ni controles de cuenta en Meta, entregas el volante completo.
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

          <h2 className={H2}>Fuentes</h2>
          <ul className="space-y-2 mb-10 pl-5 list-disc">
            {SOURCES.map((x) => (
              <li key={x.href} className="text-sm leading-relaxed text-[#424656]">
                <a href={x.href} target="_blank" rel="noopener noreferrer" className={A}>
                  {x.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p className="text-[#1c1b1b] font-bold text-lg mb-3">¿Tu cuenta debería usar Performance Max o Advantage+?</p>
            <p className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed">
              En el diagnóstico en vivo revisamos tu situación específica y te decimos qué estructura tiene más sentido
              para tu volumen, sector y objetivos.
            </p>
            <Link
              href="/diagnostico-en-vivo"
              data-cta="diag-envivo-pmax-vs-advantage-cuerpo"
              className="inline-block bg-[#0066ff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0052cc] transition-colors duration-150 text-sm"
            >
              Solicitar diagnóstico gratuito →
            </Link>
          </div>

          <p className="text-sm text-[#727687] leading-relaxed">
            {/* PENDIENTE JUAN: confirmar «$500k+ USD/mes gestionados en ads» y «Meta Partner» antes de publicar. */}
            Soy Juan Tabares. JT Ads es Google Partner y Meta Partner, con $500k+ USD/mes gestionados en ads.
          </p>
        </div>
      </article>

      <section className="bg-[#0050cb] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-4">
            ¿Estás pagando por automatización sin saber cuál funciona?
          </h2>
          <p className="text-white/80 mb-8">
            En 60 minutos analizamos en vivo tu estructura, tus datos de conversión y te decimos dónde conviene poner
            el siguiente dólar.
          </p>
          <Link
            href="/diagnostico-en-vivo"
            data-cta="diag-envivo-pmax-vs-advantage-final"
            className="inline-block bg-white text-[#0050cb] font-bold px-8 py-4 rounded-sm hover:bg-[#f6f3f2] transition-colors"
          >
            Solicitar diagnóstico gratuito
          </Link>
        </div>
      </section>

      <section className="bg-[#fcf9f8] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#727687] mb-4">Lee también</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/blog/performance-max-como-funciona-latam"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Performance Max</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">
                Performance Max en LATAM: cómo funciona y cuándo realmente conviene usarlo
              </p>
            </Link>
            <Link
              href="/blog/hiper-automatizacion-campanas-mas-alla-performance-max"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Automatización</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">
                Qué viene después: AI Max, Advantage+ Audience y niveles de automatización
              </p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
