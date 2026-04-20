import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Google Ads para SaaS B2B en LATAM: guía completa 2026 | JT Ads",
  description:
    "Cómo estructurar Google Ads para SaaS B2B en LATAM: keywords por intención, tracking conectado al CRM, benchmarks de CPL por etapa del funnel y errores frecuentes en cuentas activas.",
  alternates: {
    canonical: "https://jtads.com/blog/google-ads-saas-b2b-latam",
    languages: { es: "https://jtads.com/blog/google-ads-saas-b2b-latam" },
  },
  openGraph: {
    title: "Google Ads para SaaS B2B en LATAM: guía completa 2026",
    description:
      "Estructura de campañas, tracking con CRM, benchmarks de CPL y errores frecuentes en cuentas de SaaS B2B en LATAM.",
    images: ["/og-image.png"],
    url: "https://jtads.com/blog/google-ads-saas-b2b-latam",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Google Ads para SaaS B2B en LATAM: guía completa 2026",
  description:
    "Cómo estructurar Google Ads para SaaS B2B en LATAM: keywords por intención, tracking conectado al CRM, benchmarks de CPL y errores frecuentes.",
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
  datePublished: "2026-04-14",
  dateModified: "2026-04-14",
  image: "https://jtads.com/og-image.png",
  url: "https://jtads.com/blog/google-ads-saas-b2b-latam",
  about: [
    { "@type": "Thing", name: "Google Ads" },
    { "@type": "Thing", name: "SaaS B2B" },
    { "@type": "Thing", name: "Marketing Digital LATAM" },
  ],
  mentions: [
    { "@type": "Thing", name: "Performance Max" },
    { "@type": "Thing", name: "Smart Bidding" },
    { "@type": "Thing", name: "Tracking server-side" },
    { "@type": "Thing", name: "CRM" },
    { "@type": "Thing", name: "CPL" },
    { "@type": "Thing", name: "CAC" },
  ],
  inLanguage: "es",
  isAccessibleForFree: true,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jtads.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jtads.com/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Google Ads para SaaS B2B en LATAM",
      item: "https://jtads.com/blog/google-ads-saas-b2b-latam",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Funciona Google Ads para SaaS B2B en LATAM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, pero requiere una configuración diferente a la de e-commerce o servicios locales. El ciclo de venta largo exige que el tracking esté conectado al CRM para optimizar por oportunidades calificadas, no solo por formularios completados. Con la estructura correcta, Google Ads puede ser un canal de adquisición predecible para SaaS B2B en México, Colombia, Chile y Argentina.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta un lead de Google Ads para SaaS B2B en LATAM?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El CPL (costo por lead) de Google Ads para SaaS B2B en LATAM varía entre $30 y $90 USD por formulario completado. El costo por demo calificada oscila entre $80 y $250 USD. El costo por SQL (oportunidad en CRM) está entre $200 y $600 USD. Si el CPL de plataforma supera los $150 USD o el costo por SQL supera los $900 USD, es señal de problemas estructurales en la cuenta.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué keywords funcionan mejor para SaaS B2B en Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las keywords de mayor conversión para SaaS B2B son las de comparación ('alternativa a [competidor]', '[competidor] vs [tu producto]') y las de categoría ('[categoría] software', 'plataforma para [caso de uso]'). Las keywords de problema tienen mayor volumen pero requieren más inversión para que el algoritmo aprenda. Se recomienda empezar con exact y phrase match antes de escalar a broad match.",
      },
    },
    {
      "@type": "Question",
      name: "¿Debo usar Performance Max para mi SaaS B2B?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la mayoría de los casos de SaaS B2B en LATAM en 2026, Performance Max no es la primera opción. Requiere mínimo 30–50 conversiones de calidad por mes para salir de la fase de aprendizaje, y la mayoría de los SaaS B2B en LATAM no alcanzan ese volumen en demos calificadas. Se recomienda empezar con campañas de Search segmentadas y activar PMax solo cuando existan datos de conversión robustos.",
      },
    },
  ],
};

const benchmarks = [
  { etapa: "Lead (formulario completado)", rango: "$30 – $90 USD", alerta: "Más de $150 USD" },
  { etapa: "Demo calificada", rango: "$80 – $250 USD", alerta: "Más de $400 USD" },
  { etapa: "SQL (oportunidad en CRM)", rango: "$200 – $600 USD", alerta: "Más de $900 USD" },
];

export default function PostSaaSB2B() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1c1b1b] pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#9bb4fe] text-sm mb-8 hover:underline"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            ← Volver al blog
          </Link>
          <span className="inline-block mb-5 px-3 py-1 rounded-full bg-[#9bb4fe]/20 text-[#9bb4fe] text-xs font-semibold uppercase tracking-wide">
            SaaS &amp; B2B
          </span>
          <h1
            className="font-black text-white text-3xl md:text-4xl leading-tight mb-6"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Google Ads para SaaS B2B en LATAM: guía completa 2026
          </h1>
          <p
            className="text-[#a8aab8] text-base leading-relaxed mb-6 max-w-2xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Estructura de campañas, tracking conectado al CRM, benchmarks de CPL por etapa del funnel y los tres errores que destruyen el rendimiento en cuentas activas.
          </p>
          <p
            className="text-[#727687] text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Abril 2026 · 11 min de lectura · Por Juan Tabares
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Intro */}
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Vender un SaaS B2B con Google Ads no es lo mismo que vender un producto de e-commerce. El ciclo de venta es largo. El decisor no compra en el primer clic. Y el píxel de conversión — si está mal configurado — te va a mentir durante meses antes de que te des cuenta.
          </p>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            La mayoría de las agencias aplican al SaaS la misma lógica que usan para lead gen de servicios locales: campañas de búsqueda, formulario, CPL bajo. El resultado es un dashboard que se ve bien y un equipo de ventas que recibe leads sin calificación real.
          </p>
          <p className="text-[#424656] leading-relaxed mb-10 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Esta guía está pensada para directores de marketing y fundadores de SaaS B2B en LATAM — México, Colombia, Chile, Argentina — que quieren entender cómo estructurar Google Ads correctamente desde el principio, o diagnosticar por qué sus campañas actuales no están escalando.
          </p>

          {/* Section 1 */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            Por qué Google Ads funciona diferente en SaaS B2B
          </h2>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            En e-commerce, el viaje del comprador es corto: el usuario ve un anuncio, entra al sitio y compra. El píxel registra la conversión y el algoritmo optimiza.
          </p>
          <p className="text-[#424656] leading-relaxed mb-4 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            En SaaS B2B, el proceso es diferente:
          </p>

          <ol className="space-y-2 mb-8 pl-1" style={{ fontFamily: "Inter, sans-serif" }}>
            {[
              "El usuario busca una solución a un problema de negocio.",
              "Llega al sitio y solicita una demo o descarga un recurso.",
              "Entra a un proceso de evaluación de 2 a 8 semanas.",
              "El comité de compra aprueba (o no).",
              "Se cierra el deal.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 text-[#424656] text-sm leading-relaxed">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0066ff] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>

          <div className="bg-[#f6f3f2] rounded-xl p-6 mb-8 border-l-4 border-[#0066ff]">
            <p className="text-[#1c1b1b] text-sm leading-relaxed font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
              <strong>El problema clave:</strong> Google Ads solo ve el paso 2. Si entrenas el algoritmo con "solicitud de demo", estás optimizando para el tope del funnel, no para el cierre. El CPL de plataforma puede ser excelente ($40–$80 USD por demo) mientras el costo por cliente adquirido resulta 5x mayor. La única forma de conectar estos dos números es con tracking server-side integrado al CRM.
            </p>
          </div>

          {/* Section 2 */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            La estructura de campañas para SaaS B2B en LATAM
          </h2>
          <p className="text-[#424656] leading-relaxed mb-8 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            No existe una estructura universal, pero este esquema de tres capas funciona en cuentas de SaaS B2B con $5k–$30k USD/mes de ad spend en México, Colombia, Chile y Argentina:
          </p>

          {[
            {
              capa: "Capa 1 — Búsqueda de alta intención (Bottom of Funnel)",
              keywords: 'Keywords exactas y de frase: "[categoría] software", "[problema] herramienta", "alternativa a [competidor]".',
              objetivo: "Capturar demanda existente con intención de compra clara.",
              conversion: "Demo, trial, contacto con ventas.",
              color: "#0066ff",
            },
            {
              capa: "Capa 2 — Búsqueda de solución (Middle of Funnel)",
              keywords: 'Keywords informacionales: "cómo [resolver problema]", "mejor software para [caso de uso]".',
              objetivo: "Capturar a quien tiene el problema pero no conoce tu solución.",
              conversion: "Contenido con formulario, caso de éxito, webinar.",
              color: "#0050cb",
            },
            {
              capa: "Capa 3 — Remarketing (todo el funnel)",
              keywords: "Audiencias: visitantes sin conversión, usuarios que llegaron a pricing, leads en CRM sin cierre.",
              objetivo: "Recuperar contactos en etapa de evaluación.",
              conversion: "Oferta directa: demo, prueba gratuita, consultoría.",
              color: "#294487",
            },
          ].map((layer) => (
            <div key={layer.capa} className="bg-white rounded-xl border border-[#c2c6d8]/20 p-6 mb-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.12em] mb-3" style={{ color: layer.color, fontFamily: "Inter, sans-serif" }}>
                {layer.capa}
              </p>
              <div className="space-y-2 text-sm text-[#424656]" style={{ fontFamily: "Inter, sans-serif" }}>
                <p><span className="font-semibold text-[#1c1b1b]">Keywords:</span> {layer.keywords}</p>
                <p><span className="font-semibold text-[#1c1b1b]">Objetivo:</span> {layer.objetivo}</p>
                <p><span className="font-semibold text-[#1c1b1b]">Conversión:</span> {layer.conversion}</p>
              </div>
            </div>
          ))}

          <div className="bg-[#f6f3f2] rounded-xl p-5 mt-4 mb-10">
            <p className="text-sm text-[#424656] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              <strong className="text-[#1c1b1b]">Lo que no funciona:</strong> Display sin segmentación de audiencia, Performance Max sin señales robustas de CRM, o Search con broad match sin negativos agresivos desde el inicio.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            Keywords que convierten en SaaS B2B
          </h2>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            En SaaS B2B hay tres tipos de keywords y cada una tiene un rol distinto en el funnel:
          </p>

          {[
            {
              tipo: "Keywords de comparación",
              ejemplos: '"alternativa a [competidor]", "[competidor] vs [tu producto]", "[competidor] precio"',
              cpl: "Bajo",
              conversion: "Alta",
              nota: "Las más rentables y las más ignoradas. El usuario ya evaluó la categoría y está eligiendo entre opciones.",
            },
            {
              tipo: "Keywords de categoría",
              ejemplos: '"CRM para equipas de ventas B2B", "plataforma de automatización de marketing", "software de [caso de uso]"',
              cpl: "Medio-alto",
              conversion: "Media",
              nota: "Intención de compra clara. El usuario ya sabe que necesita una herramienta, busca la mejor opción.",
            },
            {
              tipo: "Keywords de problema",
              ejemplos: '"cómo automatizar reportes de ventas", "reducir tiempo en [proceso]", "gestionar equipo remoto"',
              cpl: "Alto",
              conversion: "Baja-media",
              nota: "Mayor volumen pero requieren más inversión para que el algoritmo aprenda a filtrar calidad.",
            },
          ].map((kw) => (
            <div key={kw.tipo} className="mb-6 border border-[#c2c6d8]/20 rounded-xl overflow-hidden">
              <div className="bg-[#f6f3f2] px-6 py-3 flex items-center justify-between">
                <p className="font-bold text-sm text-[#1c1b1b]" style={{ fontFamily: "Manrope, sans-serif" }}>{kw.tipo}</p>
                <div className="flex gap-4 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                  <span className="text-[#727687]">CPL: <strong className="text-[#1c1b1b]">{kw.cpl}</strong></span>
                  <span className="text-[#727687]">Conv.: <strong className="text-[#1c1b1b]">{kw.conversion}</strong></span>
                </div>
              </div>
              <div className="px-6 py-4 space-y-2">
                <p className="text-xs text-[#424656]" style={{ fontFamily: "Inter, sans-serif" }}>
                  <span className="font-semibold text-[#1c1b1b]">Ejemplos:</span> {kw.ejemplos}
                </p>
                <p className="text-xs text-[#424656]" style={{ fontFamily: "Inter, sans-serif" }}>{kw.nota}</p>
              </div>
            </div>
          ))}

          <p className="text-[#424656] leading-relaxed mb-10 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            <strong className="text-[#1c1b1b]">Recomendación práctica:</strong> si tienes presupuesto limitado, comienza por keywords de comparación y categoría con exact match. Las de problema requieren mayor volumen de inversión para ser eficientes.
          </p>

          {/* Section 4 */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            El problema del tracking en SaaS B2B — y cómo resolverlo
          </h2>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Este es el punto donde la mayoría de las cuentas de SaaS B2B fallan silenciosamente. El píxel registra un evento cuando el usuario completa el formulario. Pero ese evento puede ser un lead que nunca respondió, un competidor haciendo research, o alguien sin presupuesto real.
          </p>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Si el algoritmo de Smart Bidding aprende de esos eventos, optimiza para conseguir más de lo mismo: volumen sin calidad.
          </p>

          <h3 className="font-bold text-lg text-[#1c1b1b] mt-8 mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            La solución en tres pasos
          </h3>

          <ol className="space-y-6 mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
            {[
              {
                titulo: "Definir una conversión de calidad como señal principal",
                detalle: 'No "demo solicitada" — sino "demo confirmada con SQL" u "oportunidad creada en CRM". Eso requiere pasar datos del CRM de vuelta a Google Ads via offline conversion import o server-side tracking.',
              },
              {
                titulo: "Usar micro-conversiones solo como señales de observación",
                detalle: "El formulario, el tiempo en página, la visita a pricing — útiles para análisis, no para optimización de pujas. Configurarlos como conversiones secundarias en modo observación.",
              },
              {
                titulo: "Implementar tracking server-side",
                detalle: "El píxel del navegador pierde entre el 20% y el 40% de conversiones por bloqueadores de anuncios, iOS 17+ y restricciones de cookies. El servidor no tiene ese problema. En SaaS con ciclos largos, cada conversión perdida distorsiona la optimización del algoritmo.",
              },
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066ff] text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[#1c1b1b] font-bold text-sm mb-1">{step.titulo}</p>
                  <p className="text-[#424656] text-sm leading-relaxed">{step.detalle}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Section 5 — PMax */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            Performance Max para SaaS B2B: cuándo sí y cuándo no
          </h2>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            La respuesta directa: en la mayoría de los casos de SaaS B2B en LATAM en 2026, Performance Max no es la primera opción.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="bg-[#fff5f5] border border-red-100 rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-red-500 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
                Cuándo NO usar PMax
              </p>
              <ul className="space-y-2" style={{ fontFamily: "Inter, sans-serif" }}>
                {[
                  "Menos de 30–50 conversiones de calidad por mes",
                  "Sin listas de audiencia de CRM robustas",
                  "Sin activos de video de calidad",
                  "Cuando necesitas control granular de keywords",
                  "En las primeras fases de la cuenta, mientras se acumulan datos",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[#424656] leading-relaxed">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f0fdf4] border border-green-100 rounded-xl p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-green-600 mb-3" style={{ fontFamily: "Inter, sans-serif" }}>
                Cuándo SÍ usar PMax
              </p>
              <ul className="space-y-2" style={{ fontFamily: "Inter, sans-serif" }}>
                {[
                  "Más de 50 conversiones de calidad al mes",
                  "Listas de CRM segmentadas por etapa del funnel",
                  "Activos de video con buenos indicadores de vista",
                  "Quieres probar canales adicionales de forma consolidada",
                  "Ya tienes una cuenta Search optimizada como base",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[#424656] leading-relaxed">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 6 — Benchmarks */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            Benchmarks de CPL para SaaS B2B en LATAM (2026)
          </h2>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Los siguientes rangos reflejan datos de cuentas activas de SaaS B2B en México, Colombia, Chile y Argentina con ad spend mensual entre $5,000 y $30,000 USD:
          </p>

          <div className="overflow-x-auto rounded-xl border border-[#c2c6d8]/20 mb-6">
            <table className="w-full bg-white text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              <thead>
                <tr className="bg-[#f6f3f2] text-left">
                  <th className="px-6 py-4 font-bold text-[#1c1b1b]">Etapa del funnel</th>
                  <th className="px-6 py-4 font-bold text-[#1c1b1b]">Benchmark LATAM</th>
                  <th className="px-6 py-4 font-bold text-[#1c1b1b]">Señal de alerta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f6f3f2]">
                {benchmarks.map((row) => (
                  <tr key={row.etapa}>
                    <td className="px-6 py-4 text-[#1c1b1b] font-medium">{row.etapa}</td>
                    <td className="px-6 py-4 text-[#424656]">{row.rango}</td>
                    <td className="px-6 py-4 text-red-500 text-xs font-medium">{row.alerta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#f6f3f2] rounded-xl p-5 mb-10">
            <p className="text-sm text-[#424656] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              <strong className="text-[#1c1b1b]">Cómo leer estos números:</strong> el CPL de plataforma siempre será menor que el costo por demo calificada, que a su vez será menor que el costo por SQL. Si solo mides el primer número, tomas decisiones de presupuesto basadas en datos que no representan tu negocio real. Los tres deben medirse en paralelo.
            </p>
          </div>

          {/* Section 7 — Errores */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            Los 3 errores más comunes en cuentas de SaaS B2B
          </h2>

          <ol className="space-y-8 mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
            {[
              {
                titulo: "Optimizar para el lead, no para el pipeline",
                detalle: "El algoritmo maximiza lo que le indicas que maximice. Si la conversión principal es 'formulario completado', trae formularios. Si es 'oportunidad calificada en CRM', trae oportunidades. La elección de la acción de conversión principal es una decisión estratégica, no técnica. Es el cambio de mayor impacto en cuentas de SaaS B2B que no están escalando.",
              },
              {
                titulo: "Keywords demasiado amplias desde el inicio",
                detalle: "En SaaS B2B es tentador usar broad match con Smart Bidding para encontrar demanda latente. El resultado casi siempre es el mismo: mucho gasto en búsquedas irrelevantes durante los primeros meses mientras el algoritmo aprende. La recomendación: empezar con exact y phrase match, agregar negativos agresivamente y ampliar gradualmente solo cuando existan datos de conversión de calidad.",
              },
              {
                titulo: "Una sola landing page para todos los segmentos",
                detalle: "Un SaaS B2B suele tener múltiples casos de uso y distintos perfiles de comprador. Enviar todo el tráfico a la homepage — o a una landing genérica — baja drásticamente la tasa de conversión. El mensaje del anuncio debe continuar en la landing: mismo problema, misma promesa, misma oferta. Cada segmento ICP merece su propia landing con copy específico.",
              },
            ].map((error, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c1b1b] text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[#1c1b1b] font-bold text-base mb-2">{error.titulo}</p>
                  <p className="text-[#424656] text-sm leading-relaxed">{error.detalle}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* FAQ */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
            Preguntas frecuentes
          </h2>
          <div className="space-y-4 mb-10">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="border border-[#c2c6d8]/20 rounded-xl overflow-hidden">
                <div className="bg-[#f6f3f2] px-6 py-4">
                  <p className="font-bold text-sm text-[#1c1b1b]" style={{ fontFamily: "Manrope, sans-serif" }}>
                    {faq.name}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <p className="text-sm text-[#424656] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    {faq.acceptedAnswer.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            Conclusión
          </h2>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Google Ads puede ser un canal de adquisición predecible para SaaS B2B en LATAM — pero requiere una configuración diferente a la que funciona en e-commerce o en servicios locales. El tracking conectado al CRM, la estructura por intención de compra y la elección correcta de la conversión principal son los tres factores que más impactan en el resultado real.
          </p>
          <p className="text-[#424656] leading-relaxed mb-10 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Si tu cuenta lleva más de tres meses activa y el equipo de ventas sigue reportando que los leads no califican, el problema casi siempre está en el tracking o en la señal de optimización — no en el presupuesto ni en las keywords.
          </p>

          {/* Inline CTA */}
          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p className="text-[#1c1b1b] font-bold text-lg mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>
              ¿Cuánto está costando realmente cada cliente nuevo?
            </p>
            <p className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
              En el diagnóstico en vivo conectamos los datos de plataforma con tu CRM y te mostramos el CPL real por etapa del funnel — no el que reporta Google Ads.
            </p>
            <Link
              href="/diagnostico-en-vivo"
              className="inline-block bg-[#0066ff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0052cc] transition-colors duration-150 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Solicitar diagnóstico gratuito →
            </Link>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-[#0050cb] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            ¿Tu SaaS B2B está escalando con Google Ads o solo gastando?
          </h2>
          <p className="text-white/80 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>
            En 60 minutos auditamos tu cuenta, cruzamos los datos con tu CRM y te decimos exactamente qué está fallando y cuánto te está costando.
          </p>
          <a
            href="/diagnostico-en-vivo"
            className="inline-block bg-white text-[#0050cb] font-bold px-8 py-4 rounded-sm hover:bg-[#f6f3f2] transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Solicitar diagnóstico gratuito
          </a>
        </div>
      </section>

      {/* Related */}
      <section className="bg-[#fcf9f8] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#727687] mb-4" style={{ fontFamily: "Inter, sans-serif" }}>
            Lee también
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/blog/tracking-server-side-cpl-plataforma"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>Tracking</p>
              <p className="text-sm font-semibold text-[#1c1b1b]" style={{ fontFamily: "Inter, sans-serif" }}>
                Por qué el CPL de tu plataforma miente y cómo solucionarlo
              </p>
            </a>
            <a
              href="/blog/como-reducir-cpl-google-ads-latam"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>Optimización</p>
              <p className="text-sm font-semibold text-[#1c1b1b]" style={{ fontFamily: "Inter, sans-serif" }}>
                Cómo reducir el CPL en Google Ads: 7 palancas reales para LATAM
              </p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
