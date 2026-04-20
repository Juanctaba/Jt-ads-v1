import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Performance Max en LATAM: cómo funciona y cuándo realmente conviene usarlo",
  description:
    "Performance Max no es para todos. Te explicamos cómo funciona el algoritmo de Google, qué señales necesita para optimizar bien y en qué casos conviene usarlo en LATAM.",
  alternates: {
    canonical: "https://jtads.com/blog/performance-max-como-funciona-latam",
    languages: { "es": "https://jtads.com/blog/performance-max-como-funciona-latam" },
  },
  openGraph: {
    title: "Performance Max en LATAM: cómo funciona y cuándo realmente conviene usarlo",
    description:
      "Cómo funciona el algoritmo de PMax, qué señales necesita y en qué casos conviene — o no — en el mercado latinoamericano.",
    images: ["/og-image.png"],
    url: "https://jtads.com/blog/performance-max-como-funciona-latam",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Performance Max en LATAM: cómo funciona y cuándo realmente conviene usarlo",
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
  datePublished: "2026-04-09",
  dateModified: "2026-04-09",
  image: "https://jtads.com/og-image.png",
  url: "https://jtads.com/blog/performance-max-como-funciona-latam",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jtads.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jtads.com/blog" },
    { "@type": "ListItem", position: 3, name: "Performance Max en LATAM: cómo funciona y cuándo realmente conviene usarlo", item: "https://jtads.com/blog/performance-max-como-funciona-latam" },
  ],
};

export default function PostPerformanceMax() {
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
            Performance Max
          </span>
          <h1
            className="font-black text-white text-3xl md:text-4xl leading-tight mb-6"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Performance Max en LATAM: cómo funciona y cuándo realmente conviene
            usarlo
          </h1>
          <p
            className="text-[#727687] text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Abril 2026 · 10 min de lectura
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
            Performance Max es la apuesta más importante de Google en los
            últimos años: un tipo de campaña que consolida todos los canales de
            la plataforma — Search, Display, YouTube, Gmail, Discover, Shopping
            y Maps — en una sola campaña gestionada por el algoritmo. La
            promesa es atractiva: menos gestión manual, más alcance, mejores
            resultados.
          </p>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            La realidad es más matizada. PMax puede funcionar muy bien en los
            casos correctos — y puede desperdiciar presupuesto de forma casi
            invisible en los casos incorrectos. En este artículo explicamos cómo
            funciona realmente, qué necesita para optimizar bien y cuándo tiene
            sentido (y cuándo no) en el contexto de LATAM.
          </p>

          {/* Section 1 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Qué es Performance Max y por qué Google lo promueve tanto
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Performance Max es un tipo de campaña basado en objetivos — no en
            canales. En lugar de elegir si quieres Search, Display o YouTube,
            defines un objetivo de conversión, proporcionas activos creativos
            (textos, imágenes, videos) y señales de audiencia, y el algoritmo
            de Google decide en tiempo real dónde y a quién mostrar tus anuncios
            para maximizar las conversiones al menor costo posible.
          </p>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Google promueve PMax agresivamente por una razón sencilla: consolida
            el gasto publicitario en una sola campaña, simplifica la gestión y
            — en teoría — aprovecha mejor el inventario disponible en todos sus
            canales. Desde el punto de vista de Google, PMax es el modelo ideal:
            más datos de cada anunciante, más control sobre la distribución del
            gasto y menor dependencia de las decisiones manuales del
            anunciante.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p
              className="text-[#424656] text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <strong className="text-[#1c1b1b]">Lo que esto significa en la práctica:</strong>{" "}
              Google tiene un incentivo estructural para recomendar PMax. Eso no
              lo hace malo — pero sí significa que debes evaluar si es la
              herramienta correcta para tu situación, no asumir que funciona
              igual para todos.
            </p>
          </div>

          {/* Section 2 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Cómo funciona el algoritmo de PMax
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            El funcionamiento interno de PMax gira alrededor de tres componentes
            principales:
          </p>

          <h3
            className="font-bold text-lg text-[#1c1b1b] mt-8 mb-3"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Asset groups y combinaciones automáticas
          </h3>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            En lugar de anuncios individuales, PMax trabaja con asset groups:
            conjuntos de activos (textos de titular, descripciones, imágenes,
            logos, videos) que el algoritmo combina automáticamente según el
            canal y el usuario. Google decide qué combinación mostrar, en qué
            canal y a qué precio, en tiempo real. Tú proporcionas los materiales;
            el algoritmo decide la ejecución.
          </p>

          <h3
            className="font-bold text-lg text-[#1c1b1b] mt-8 mb-3"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Señales de audiencia vs. targeting fijo
          </h3>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Una de las diferencias clave de PMax respecto a las campañas
            tradicionales es que no permite targeting fijo. En PMax, las
            "audience signals" son orientativas — le dices al algoritmo de
            dónde puede partir para buscar tu audiencia ideal, pero el algoritmo
            puede ir más allá si detecta oportunidades de conversión fuera de
            esas señales. Esto puede ser una ventaja en cuentas con mucho
            volumen, pero en cuentas más pequeñas significa que el presupuesto
            puede distribuirse en audiencias muy amplias.
          </p>

          <h3
            className="font-bold text-lg text-[#1c1b1b] mt-8 mb-3"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            La fase de aprendizaje y la competencia interna
          </h3>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            PMax necesita un período de aprendizaje de 4 a 6 semanas durante el
            cual el algoritmo recopila datos para optimizar. Durante este
            período el rendimiento es impredecible — el gasto puede ser alto con
            resultados bajos. Adicionalmente, PMax tiene prioridad sobre las
            campañas de Search en la mayoría de los casos, lo que significa que
            puede canibalizar tráfico de tus propias campañas de Search si no
            se configura correctamente.
          </p>

          {/* Section 3 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Cuándo usar Performance Max en LATAM
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            PMax funciona bien en contextos específicos. En LATAM, donde los
            volúmenes de conversión suelen ser menores que en mercados como
            USA o Europa, los criterios son más restrictivos:
          </p>

          <ul
            className="space-y-4 mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {[
              {
                title: "E-commerce con feed de productos sólido",
                desc: "PMax heredó las campañas de Shopping. Si tienes un catálogo de productos con datos completos y bien estructurados, PMax puede ser una herramienta poderosa para capturar intención de compra en múltiples canales simultáneamente.",
              },
              {
                title: "Retargeting con volumen de audiencia suficiente",
                desc: "Si tienes listas de remarketing con más de 1,000 usuarios activos, PMax puede ser efectivo para volver a impactar audiencias que ya conocen tu marca con creativos dinámicos en distintos canales.",
              },
              {
                title: "Brand awareness en mercados donde ya tienes presencia",
                desc: "Cuando el objetivo es maximizar el alcance en un mercado donde ya tienes reconocimiento de marca, la naturaleza multi-canal de PMax puede ser más eficiente que gestionar campañas separadas.",
              },
              {
                title: "Cuentas con +50 conversiones/mes con datos de calidad",
                desc: "El algoritmo necesita datos para aprender. Por debajo de 50 conversiones mensuales, PMax tiene muy poco con qué trabajar y el rendimiento es inconsistente. En mercados LATAM de volumen medio, esto muchas veces descalifica a PMax como opción principal.",
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

          {/* Section 4 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Cuándo NO usar Performance Max
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Hay casos donde PMax es contraproducente y donde una estructura de
            Search bien ejecutada supera con creces el rendimiento de PMax:
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
                  Lead gen con cualificación compleja
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Si tus leads requieren múltiples criterios de calificación
                  (cargo, tamaño de empresa, presupuesto, urgencia), PMax no
                  puede aplicar esa lógica. El algoritmo optimiza para
                  conversiones — no para leads calificados según tus criterios
                  de ventas. El resultado suele ser más volumen con menor
                  calidad.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c1b1b] text-white text-sm font-bold flex items-center justify-center">
                2
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  B2B con ciclos de venta largos
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  En B2B con ciclos de 3 a 12 meses, el algoritmo no tiene
                  señales suficientemente rápidas para aprender. Las
                  conversiones llegan mucho después del clic, y el algoritmo
                  optimiza con información muy rezagada. Search con
                  concordancias controladas y audiencias de intención es más
                  efectivo en estos casos.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c1b1b] text-white text-sm font-bold flex items-center justify-center">
                3
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  Cuentas con menos de 50 conversiones al mes
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  El umbral de datos mínimos para que PMax funcione bien es de
                  50 conversiones mensuales de calidad. Por debajo de eso, el
                  algoritmo está en fase de aprendizaje permanente y los
                  resultados son inestables. En muchos mercados LATAM de nicho,
                  esto descalifica a PMax directamente.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c1b1b] text-white text-sm font-bold flex items-center justify-center">
                4
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  Cuando necesitas control granular de keywords y placements
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Si tu estrategia requiere control sobre qué términos exactos
                  activan tus anuncios o en qué sitios se muestran tus
                  creativos, PMax no es la herramienta adecuada. La opacidad
                  del canal es una limitación real: los informes de PMax son
                  mucho menos granulares que los de Search o Display por
                  separado.
                </p>
              </div>
            </li>
          </ol>

          {/* Section 5 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Señales que necesita PMax para funcionar bien
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Si decides usar PMax, la calidad de las señales que le das al
            algoritmo determina la calidad de los resultados. Estas son las más
            críticas:
          </p>

          <ul
            className="space-y-4 mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {[
              {
                label: "Datos de conversión de calidad",
                desc: "PMax necesita señales de conversión precisas. Si el tracking por defecto pierde el 25–40% de las conversiones reales (por ad blockers o restricciones de Safari), el algoritmo trabaja con información incompleta. El tracking server-side es prácticamente obligatorio para sacar el máximo rendimiento a PMax.",
              },
              {
                label: "Listas de audiencia bien construidas",
                desc: "Las audience signals son el punto de partida del algoritmo. Cuanto más específicas y actualizadas sean tus listas (clientes actuales, usuarios de alta intención, audiencias lookalike de compradores), mejor es el punto de partida del algoritmo.",
              },
              {
                label: "Activos creativos de calidad (especialmente video)",
                desc: "PMax sin video es PMax a medias. YouTube es uno de los canales de mayor alcance de la suite de Google, y sin un video de calidad, el algoritmo tiene una paleta limitada para trabajar. El video no tiene que ser de producción alta — tiene que comunicar bien en los primeros 5 segundos.",
              },
              {
                label: "Exclusiones correctas",
                desc: "Sin exclusiones de marca y sin exclusiones de urls o placement incorrectos, PMax puede desperdiciar presupuesto en tráfico irrelevante. Configurar las exclusiones correctas desde el inicio es uno de los pasos más importantes del setup.",
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

          {/* Section 6 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            PMax vs. Search: cuál priorizar
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            La decisión no es necesariamente una u otra — pero hay una jerarquía
            clara según el contexto:
          </p>

          <div className="overflow-x-auto rounded-xl border border-[#c2c6d8]/20 mb-10">
            <table className="w-full bg-white text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              <thead>
                <tr className="bg-[#f6f3f2] text-left">
                  <th className="px-5 py-4 font-bold text-[#1c1b1b]">Escenario</th>
                  <th className="px-5 py-4 font-bold text-[#1c1b1b]">Recomendación</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f6f3f2]">
                {[
                  { scenario: "E-commerce con catálogo + datos de conversión sólidos", rec: "PMax puede ser la campaña principal" },
                  { scenario: "B2B lead gen, ciclos largos, menos de 50 conv/mes", rec: "Search primero. PMax solo si escala" },
                  { scenario: "Cuenta nueva sin historial de conversión", rec: "Search para construir señales, luego evaluar PMax" },
                  { scenario: "Retargeting con audiencias grandes (+1,000 usuarios)", rec: "PMax puede complementar Search" },
                  { scenario: "Qualificación compleja de leads, nicho B2B", rec: "Search con match types controlados" },
                  { scenario: "Awareness en mercado con reconocimiento de marca previo", rec: "PMax + video puede ser muy eficiente" },
                ].map((row) => (
                  <tr key={row.scenario}>
                    <td className="px-5 py-4 text-[#424656] text-sm">{row.scenario}</td>
                    <td className="px-5 py-4 text-[#1c1b1b] font-medium text-sm">{row.rec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p
              className="text-[#424656] text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <strong className="text-[#1c1b1b]">Nuestra posición en JT Ads:</strong> PMax es
              una herramienta que puede ser muy poderosa — cuando las condiciones
              están dadas. En cuentas que gestionamos en LATAM, la estrategia
              habitual es construir primero una base sólida de Search con tracking
              correcto, y evaluar PMax solo cuando hay datos suficientes de
              conversión de calidad. La recomendación de Google de "empieza con
              PMax" no siempre es la más adecuada para el tamaño y contexto de las
              empresas en LATAM.
            </p>
          </div>

          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p
              className="text-[#1c1b1b] font-bold text-lg mb-3"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              ¿Tu cuenta debería usar PMax o Search?
            </p>
            <p
              className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              En el diagnóstico en vivo revisamos tu situación específica y te
              decimos qué estructura tiene más sentido para tu volumen, sector
              y objetivos.
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
          <h2 className="text-2xl font-black text-white mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            ¿Usas PMax sin saber si es la herramienta correcta para tu cuenta?
          </h2>
          <p className="text-white/80 mb-8">
            En 60 minutos analizamos en vivo tu estructura, tus datos de conversión
            y te decimos si PMax tiene sentido — o si estás dejando dinero sobre
            la mesa.
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
            <a href="/blog/tracking-server-side-cpl-plataforma" className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow">
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Tracking</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">Por qué el CPL de tu plataforma miente y cómo solucionarlo</p>
            </a>
            <a href="/blog/cuanto-cobra-agencia-google-ads-latam" className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow">
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Precios</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">¿Cuánto cobra una agencia de Google Ads en LATAM? Precios reales en 2026</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
