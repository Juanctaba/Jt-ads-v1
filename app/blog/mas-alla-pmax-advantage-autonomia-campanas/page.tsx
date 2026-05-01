import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Más allá de PMax y Advantage+: la hiper-automatización en campañas y sus riesgos reales",
  description:
    "Performance Max y Advantage+ ya son el estándar. Las plataformas van más lejos con automatización total. Analizamos qué está cambiando, qué se gana, qué se pierde y cuándo el control humano sigue siendo irremplazable.",
  alternates: {
    canonical: "https://jtads.com/blog/mas-alla-pmax-advantage-autonomia-campanas",
    languages: { "es": "https://jtads.com/blog/mas-alla-pmax-advantage-autonomia-campanas" },
  },
  openGraph: {
    title: "Más allá de PMax y Advantage+: la hiper-automatización en campañas y sus riesgos reales",
    description:
      "¿La autonomía total en campañas es el camino hacia la eficiencia máxima o un riesgo inaceptable para tu marca y estrategia?",
    images: ["/og-image.png"],
    url: "https://jtads.com/blog/mas-alla-pmax-advantage-autonomia-campanas",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Más allá de PMax y Advantage+: la hiper-automatización en campañas y sus riesgos reales",
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
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  image: "https://jtads.com/og-image.png",
  url: "https://jtads.com/blog/mas-alla-pmax-advantage-autonomia-campanas",
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
      name: "Más allá de PMax y Advantage+: la hiper-automatización en campañas y sus riesgos reales",
      item: "https://jtads.com/blog/mas-alla-pmax-advantage-autonomia-campanas",
    },
  ],
};

export default function PostHiperAutomatizacion() {
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
            Automatización
          </span>
          <h1
            className="font-black text-white text-3xl md:text-4xl leading-tight mb-6"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Más allá de Performance Max y Advantage+: la próxima frontera de la
            autonomía en campañas
          </h1>
          <p
            className="text-[#727687] text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Mayo 2026 · 11 min de lectura
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Intro */}
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            En 2022, hablar de automatización en paid media significaba decidir
            si usar Smart Bidding o pujas manuales. Hoy, Performance Max de Google
            y Advantage+ de Meta son el punto de partida por defecto para muchos
            anunciantes, no una opción avanzada. El debate ya no es si automatizar
            — es hasta dónde.
          </p>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Las plataformas no se detienen ahí. Google está desplegando AI Max for
            Search Campaigns. Meta amplía Advantage+ a prácticamente todos los
            formatos. TikTok, LinkedIn y Amazon empujan sus propias versiones de
            campañas "totalmente automatizadas". La dirección es clara: menos
            decisiones manuales del anunciante, más autonomía cedida al
            algoritmo.
          </p>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            La pregunta que deberían hacerse los equipos de marketing en LATAM no
            es si este cambio va a ocurrir — ya está ocurriendo. La pregunta es
            qué parte del control vale la pena ceder y en qué punto la
            automatización empieza a trabajar en contra de tu estrategia y tu
            marca.
          </p>

          {/* Section 1 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            El nuevo estándar: dónde estamos hoy con PMax y Advantage+
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Para entender adónde va la automatización, es útil tener claro el
            punto de partida. Performance Max y Advantage+ representan la primera
            generación de campañas de "autonomía total" a escala masiva:
          </p>

          <ul
            className="space-y-4 mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {[
              {
                label: "Performance Max (Google, 2021–presente)",
                desc: "Consolida todos los canales de Google — Search, Display, YouTube, Gmail, Discover, Shopping y Maps — en una sola campaña. El anunciante define un objetivo de conversión, proporciona activos creativos y señales de audiencia. El algoritmo decide dónde, cuándo y a quién mostrar los anuncios, en tiempo real. El control sobre keywords, placements y creativos individuales desaparece casi por completo.",
              },
              {
                label: "Advantage+ Shopping (Meta, 2022–presente)",
                desc: "El equivalente de Meta para e-commerce. Cede la segmentación, el placement y la optimización creativa al algoritmo. La plataforma decide qué creativos mostrar a qué audiencia en qué momento, optimizando hacia conversiones. El anunciante define el presupuesto, el catálogo y el objetivo — y el sistema hace el resto.",
              },
              {
                label: "Advantage+ App Campaigns y Audience Ads",
                desc: "Meta amplió el modelo Advantage+ más allá del e-commerce. Advantage+ Audience Ads reduce drásticamente los controles de segmentación manual, dejando que el algoritmo encuentre audiencias relevantes de forma autónoma. El targeting detallado pasa de ser una herramienta de control a ser una sugerencia orientativa.",
              },
            ].map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <span className="text-[#0066ff] mt-0.5 font-bold text-base leading-none">
                  ✓
                </span>
                <div>
                  <p className="text-[#1c1b1b] font-semibold text-sm mb-1">{item.label}</p>
                  <p className="text-[#424656] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p
              className="text-[#424656] text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <strong className="text-[#1c1b1b]">Lo que tienen en común:</strong>{" "}
              Tanto PMax como Advantage+ ceden el control táctico al algoritmo a
              cambio de (supuestamente) mejores resultados agregados. El anunciante
              pasa de ser un gestor de campañas a ser un proveedor de objetivos,
              presupuesto y materiales creativos.
            </p>
          </div>

          {/* Section 2 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            La próxima frontera: qué está llegando ahora
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            PMax y Advantage+ son la primera oleada. La segunda está en proceso de
            despliegue y lleva la autonomía a un nivel cualitativamente diferente,
            incorporando IA generativa directamente en el ciclo de ejecución:
          </p>

          <h3
            className="font-bold text-lg text-[#1c1b1b] mt-8 mb-3"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            AI Max for Search Campaigns (Google, 2025)
          </h3>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            AI Max es la actualización más importante de las campañas de Search
            desde la introducción del broad match moderno. Combina tres
            capacidades que antes requerían decisiones separadas del anunciante:
            expansión automática de queries mediante concordancia amplia con IA,
            personalización dinámica de los textos del anuncio según la consulta
            específica del usuario, y selección automática de la landing page más
            relevante dentro del dominio del anunciante.
          </p>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            En la práctica: el anunciante define unos textos base y un conjunto
            de URLs, y el sistema genera variantes del anuncio en tiempo real
            adaptadas a cada búsqueda específica, eligiendo además a qué página
            enviar al usuario. La capa de keywords deja de ser el mecanismo
            principal de control para convertirse en una guía contextual.
          </p>

          <h3
            className="font-bold text-lg text-[#1c1b1b] mt-8 mb-3"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Generación creativa autónoma (Meta Advantage+ Creative)
          </h3>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Meta avanza hacia campañas donde la IA no solo decide a quién mostrar
            los anuncios, sino que genera o modifica activamente los creativos.
            Advantage+ Creative puede alterar el texto, reencuadrar imágenes,
            añadir overlays visuales y adaptar el formato al placement de forma
            automática. El anunciante sube un activo base; el sistema crea las
            variantes. En algunos mercados, Meta ya está probando generación
            completa de imágenes de fondo mediante IA generativa.
          </p>

          <h3
            className="font-bold text-lg text-[#1c1b1b] mt-8 mb-3"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Campañas autogestionadas en otras plataformas
          </h3>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            El patrón se repite en otras plataformas. TikTok Smart+ automatiza
            targeting, creativos y pujas en un único tipo de campaña similar a
            PMax. LinkedIn introduce funcionalidades de audiencias predictivas que
            reducen la necesidad de segmentación manual. Amazon Performance+ sigue
            la misma lógica para campañas de producto en su ecosistema. La
            convergencia hacia modelos de "objetivo + presupuesto + activos = la
            plataforma hace el resto" es universal.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p
              className="text-[#424656] text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <strong className="text-[#1c1b1b]">La diferencia cualitativa con la primera oleada:</strong>{" "}
              PMax y Advantage+ ceden el control de la <em>distribución</em>. Las
              herramientas de segunda generación ceden también el control del
              <em>mensaje</em>. Ya no es solo "el algoritmo decide dónde" — es
              "el algoritmo decide qué decir y cómo decirlo". Eso cambia
              fundamentalmente la ecuación del control de marca.
            </p>
          </div>

          {/* Section 3 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Los riesgos reales de la hiper-automatización
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            La narrativa de las plataformas es que más automatización siempre
            produce mejores resultados. La realidad que observamos en cuentas
            reales en LATAM es más matizada. Hay cuatro riesgos concretos que la
            hiper-automatización introduce:
          </p>

          <ol
            className="space-y-6 mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c1b1b] text-white text-sm font-bold flex items-center justify-center">
                1
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  Erosión del control de marca y del mensaje
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Cuando el algoritmo combina textos, adapta creativos o genera
                  variantes automáticamente, el anunciante pierde la garantía de
                  que el mensaje que llega al usuario es coherente con su
                  posicionamiento. Los sistemas de IA generativa optimizan para
                  CTR o conversión — no para consistencia de marca, tono de voz
                  ni alineación con la estrategia de posicionamiento a largo
                  plazo. Para marcas con equity construido o mensajes regulados
                  (salud, finanzas, servicios legales), esto es un riesgo
                  operativo real, no teórico.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c1b1b] text-white text-sm font-bold flex items-center justify-center">
                2
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  La caja negra dentro de la caja negra
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  PMax ya era opaco en términos de reporting — el desglose por
                  canal y por término de búsqueda es limitado. Las nuevas
                  herramientas añaden una segunda capa de opacidad: no solo no
                  sabes exactamente a quién le estás mostrando los anuncios, sino
                  que tampoco sabes exactamente qué mensaje se está mostrando.
                  Diagnosticar por qué una campaña rinde mal se vuelve
                  exponencialmente más difícil cuando ni los textos ni los
                  placements son fijos y auditables.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c1b1b] text-white text-sm font-bold flex items-center justify-center">
                3
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  Optimización hacia la métrica proxy, no hacia el objetivo real
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Los algoritmos optimizan hacia lo que pueden medir: clics,
                  formularios enviados, compras atribuidas. Si tu objetivo real
                  es leads calificados según criterios de ventas complejos, o
                  clientes con LTV alto a 18 meses, o nuevos clientes netos (no
                  retargeting), los sistemas automatizados suelen optimizar hacia
                  el volumen de la métrica proxy — no hacia el resultado de
                  negocio. Cuanto más autónomo es el sistema, más difícil es
                  corregir esta deriva sin romper el aprendizaje acumulado.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c1b1b] text-white text-sm font-bold flex items-center justify-center">
                4
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  Dependencia y pérdida de knowhow estratégico
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Las cuentas que ceden el control táctico completamente al
                  algoritmo durante períodos prolongados acumulan un problema
                  silencioso: el equipo pierde la capacidad de diagnosticar,
                  interpretar y corregir lo que está pasando. Cuando los
                  resultados caen — y siempre hay momentos en que caen — no hay
                  visibilidad ni knowhow interno para reaccionar con rapidez.
                  La dependencia del algoritmo se convierte también en una
                  dependencia de la plataforma, con escasa capacidad de
                  negociación o cuestionamiento.
                </p>
              </div>
            </li>
          </ol>

          {/* Section 4 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Cuándo la hiper-automatización sí tiene sentido
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            La crítica a la automatización sin límites no significa que la
            automatización sea mala. En los contextos correctos, ceder control al
            algoritmo produce resultados genuinamente superiores. Estos son los
            escenarios donde la hiper-automatización trabaja a tu favor:
          </p>

          <ul
            className="space-y-4 mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {[
              {
                title: "E-commerce con catálogo amplio y conversiones de ciclo corto",
                desc: "Compras directas, tickets medios definidos, miles de SKUs. El algoritmo puede aprender rápido qué productos mostrar a quién y en qué momento. El ciclo de conversión es lo suficientemente corto como para que el aprendizaje sea continuo y preciso. Aquí PMax y Advantage+ Shopping tienen sentido incluso a niveles avanzados de automatización.",
              },
              {
                title: "Escala con datos de conversión de calidad y volumen alto",
                desc: "Por encima de 200 conversiones mensuales con señales limpias (tracking server-side, datos de CRM conectados), el algoritmo tiene suficiente combustible para tomar decisiones mejores que un humano a escala táctica. La automatización compensa en velocidad y capacidad de procesamiento lo que pierde en criterio estratégico.",
              },
              {
                title: "Retargeting y reactivación de audiencias con creative testing",
                desc: "Para audiencias que ya conocen la marca, la automatización creativa puede ser muy efectiva: el algoritmo puede encontrar qué variante del mensaje resuena mejor con cada segmento más rápido que cualquier proceso de testing manual. El riesgo de marca es menor porque el usuario ya tiene contexto previo.",
              },
              {
                title: "Expansión a nuevos mercados sin historia de datos",
                desc: "Cuando entras a un mercado nuevo donde no tienes datos históricos propios, la inteligencia colectiva del algoritmo — entrenada con millones de señales de otros anunciantes — puede ser un punto de partida más sólido que las hipótesis del equipo. La autonomía temporal mientras construyes tus propias señales tiene sentido.",
              },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="text-[#0066ff] mt-0.5 font-bold text-base leading-none">
                  ✓
                </span>
                <div>
                  <p className="text-[#1c1b1b] font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-[#424656] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Section 5 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            El mapa de control: qué ceder y qué retener
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            La decisión estratégica correcta no es "automatizar todo" ni
            "controlar todo manualmente". Es saber qué dimensiones del control
            tienen mayor impacto en tu caso específico y retener esas — cediendo
            el resto al algoritmo donde la ganancia en eficiencia es real.
          </p>

          <div className="overflow-x-auto rounded-xl border border-[#c2c6d8]/20 mb-10">
            <table className="w-full bg-white text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              <thead>
                <tr className="bg-[#f6f3f2] text-left">
                  <th className="px-5 py-4 font-bold text-[#1c1b1b]">Dimensión de control</th>
                  <th className="px-5 py-4 font-bold text-[#1c1b1b]">Ceder al algoritmo cuando…</th>
                  <th className="px-5 py-4 font-bold text-[#1c1b1b]">Retener cuando…</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f6f3f2]">
                {[
                  {
                    dim: "Pujas y presupuesto",
                    ceder: "Tienes +50 conversiones/mes de calidad y objetivo de CPA/ROAS claro",
                    retener: "El volumen es bajo o las señales de conversión son imprecisas",
                  },
                  {
                    dim: "Targeting y audiencias",
                    ceder: "Objetivo es escala amplia o entrada a mercado nuevo",
                    retener: "Cualificación compleja de leads, B2B nicho, ciclos de venta largos",
                  },
                  {
                    dim: "Textos y creativos",
                    ceder: "E-commerce, variantes de producto, retargeting con mensaje conocido",
                    retener: "Marca con equity construido, mensajes regulados, posicionamiento diferencial",
                  },
                  {
                    dim: "Selección de canales",
                    ceder: "Objetivo es cobertura máxima y tienes datos de conversión sólidos",
                    retener: "Cuando necesitas atribuir resultados por canal o controlar la experiencia de marca por contexto",
                  },
                  {
                    dim: "Landing page y destino",
                    ceder: "Tienes múltiples páginas de alta relevancia bien optimizadas",
                    retener: "Cuando cada variante de mensaje necesita llevar a una experiencia post-clic específica y consistente",
                  },
                ].map((row) => (
                  <tr key={row.dim}>
                    <td className="px-5 py-4 text-[#1c1b1b] font-semibold text-sm">{row.dim}</td>
                    <td className="px-5 py-4 text-[#424656] text-sm">{row.ceder}</td>
                    <td className="px-5 py-4 text-[#424656] text-sm">{row.retener}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 6 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            El rol del especialista en la era de la autonomía algorítmica
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Una pregunta que surge naturalmente en este contexto: si los
            algoritmos gestionan cada vez más la ejecución táctica, ¿qué hace un
            especialista en paid media? La respuesta es que el trabajo cambia de
            naturaleza, no desaparece.
          </p>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            En un entorno de alta automatización, el valor del especialista se
            concentra en cuatro áreas donde el juicio humano sigue siendo
            irremplazable:
          </p>

          <ol
            className="space-y-6 mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066ff] text-white text-sm font-bold flex items-center justify-center">
                1
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  Arquitectura de señales: qué datos le das al algoritmo
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  El rendimiento de cualquier sistema automatizado está acotado
                  por la calidad de los datos que recibe. Decidir qué conversiones
                  medir, cómo implementar el tracking para que sea completo y
                  preciso, cómo conectar señales del CRM con las plataformas y
                  cómo definir los valores de conversión es trabajo estratégico
                  de alto impacto que el algoritmo no puede hacer por sí solo.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066ff] text-white text-sm font-bold flex items-center justify-center">
                2
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  Estrategia de estructura y restricciones
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Definir los límites correctos dentro de los cuales opera el
                  algoritmo: qué excluir, qué proteger como campaña de Search
                  independiente, cómo estructurar los asset groups para que la
                  personalización automática no rompa la coherencia de mensaje,
                  cuándo separar objetivos en campañas distintas. El algoritmo
                  optimiza dentro del espacio que le defines; la calidad de ese
                  espacio es responsabilidad humana.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066ff] text-white text-sm font-bold flex items-center justify-center">
                3
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  Interpretación y diagnóstico ante anomalías
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Cuando los resultados caen, los costos se disparan o aparecen
                  patrones inesperados, la capacidad de diagnosticar qué está
                  pasando — y qué es ruido estadístico vs. señal real — requiere
                  un criterio analítico que los algoritmos no tienen. Saber cuándo
                  intervenir, cuándo esperar y cómo corregir sin destruir el
                  aprendizaje acumulado es una habilidad escasa y de alto valor.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066ff] text-white text-sm font-bold flex items-center justify-center">
                4
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  Alineación con objetivos de negocio que el algoritmo no conoce
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  El algoritmo optimiza hacia lo que le dices que optimice.
                  No sabe que prefieres leads de empresas de más de 50 empleados,
                  que tu equipo de ventas no puede gestionar más de 80 leads por
                  semana, que estás priorizando un segmento específico este
                  trimestre o que hay un competidor que quieres evitar en ciertos
                  placements. Traducir la estrategia de negocio en restricciones
                  y señales que el algoritmo pueda usar es trabajo de criterio
                  humano.
                </p>
              </div>
            </li>
          </ol>

          {/* Section 7: Position JT Ads */}
          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p
              className="text-[#424656] text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <strong className="text-[#1c1b1b]">Nuestra posición en JT Ads:</strong>{" "}
              La hiper-automatización es una tendencia irreversible — las
              plataformas seguirán reduciendo los controles manuales y ampliando
              la autonomía algorítmica. Pero eficiencia operativa y eficiencia
              estratégica no son lo mismo. En cuentas con objetivos específicos,
              cualificación de leads compleja o marcas con posicionamiento
              diferencial, la automatización total introduce más riesgo del que
              elimina. El modelo que recomendamos es automatización selectiva con
              supervisión activa: ceder el control táctico donde el algoritmo
              tiene ventaja real, retener el control estratégico y las señales
              de calidad donde el juicio humano marca la diferencia.
            </p>
          </div>

          {/* Section 8: FAQ / GEO */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Preguntas frecuentes sobre automatización en campañas
          </h2>

          <div className="space-y-6 mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
            {[
              {
                q: "¿AI Max for Search es lo mismo que Performance Max?",
                a: "No. Performance Max corre en todos los canales de Google simultáneamente (Search, Display, YouTube, Gmail, etc.) con mínima intervención del anunciante. AI Max for Search es una actualización específica para campañas de Search que introduce expansión automática de queries con IA, personalización dinámica de textos según la búsqueda y selección automática de landing page — pero sigue siendo una campaña de Search. Son productos distintos con niveles de automatización distintos.",
              },
              {
                q: "¿Conviene activar AI Max en cuentas que ya usan PMax?",
                a: "Depende. Si ya tienes PMax activo capturando búsquedas amplias, activar AI Max en campañas de Search puede generar competencia interna entre campañas del mismo anunciante. La configuración correcta requiere revisar qué queries están siendo capturadas por PMax vs. Search, y asegurarse de que los dos tipos de campaña no estén pujando por los mismos términos con lógicas distintas. Sin esa revisión, la activación por defecto puede inflar el CPC sin mejorar el resultado.",
              },
              {
                q: "¿Advantage+ Audience reemplaza la segmentación manual en Meta?",
                a: "Advantage+ Audience no elimina la segmentación manual — la convierte en sugerencia orientativa. La plataforma puede ir más allá de los parámetros que defines si detecta oportunidades de conversión fuera de ellos. Para cuentas con mucho volumen y objetivos amplios, esto puede ser positivo. Para cuentas B2B con segmentación muy específica (cargo, industria, tamaño de empresa), la pérdida de control puede traducirse en leads fuera del perfil objetivo.",
              },
              {
                q: "¿La automatización creativa de Meta afecta la consistencia de marca?",
                a: "Sí, y es uno de los riesgos más subestimados. Advantage+ Creative puede modificar textos, reencuadrar imágenes, añadir elementos visuales y cambiar proporciones de los activos. Para marcas con guías de estilo estrictas, mensajes regulados o posicionamiento premium, estas modificaciones automáticas pueden resultar en anuncios que no cumplen los estándares de marca. La solución es revisar activamente las variantes que genera la plataforma y desactivar las modificaciones específicas que no son aceptables para tu marca.",
              },
            ].map((item) => (
              <div key={item.q} className="border-l-2 border-[#9bb4fe] pl-5">
                <p className="text-[#1c1b1b] font-semibold text-sm mb-2">{item.q}</p>
                <p className="text-[#424656] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>

          {/* Mid-article CTA */}
          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p
              className="text-[#1c1b1b] font-bold text-lg mb-3"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              ¿Tu cuenta está cediendo más control del necesario al algoritmo?
            </p>
            <p
              className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              En el diagnóstico en vivo revisamos qué nivel de automatización
              tiene sentido para tu cuenta específica — y dónde el control humano
              genera más retorno que cederlo al algoritmo.
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

      {/* CTA */}
      <section className="bg-[#0050cb] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-2xl font-black text-white mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            ¿Cuánto control deberías ceder en tu cuenta?
          </h2>
          <p className="text-white/80 mb-8">
            En 60 minutos analizamos tu estructura actual, tus datos de
            conversión y tus objetivos — y te decimos exactamente qué
            automatizar, qué retener y cómo configurarlo.
          </p>
          <a
            href="/diagnostico-en-vivo"
            className="inline-block bg-white text-[#0050cb] font-bold px-8 py-4 rounded-sm hover:bg-[#f6f3f2] transition-colors"
          >
            Solicitar diagnóstico gratuito
          </a>
        </div>
      </section>

      {/* Related */}
      <section className="bg-[#fcf9f8] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#727687] mb-4">Lee también</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/blog/performance-max-como-funciona-latam"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Performance Max</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">Performance Max en LATAM: cómo funciona y cuándo realmente conviene usarlo</p>
            </a>
            <a
              href="/blog/tracking-server-side-cpl-plataforma"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Tracking</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">Por qué el CPL de tu plataforma miente y cómo solucionarlo</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
