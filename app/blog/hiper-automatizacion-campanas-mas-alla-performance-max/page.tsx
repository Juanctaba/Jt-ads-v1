import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Más allá de Performance Max y Advantage+: la hiper-automatización en campañas 2026 | JT Ads",
  description:
    "Performance Max y Advantage+ ya son el estándar. Analizamos qué viene después — AI Max, Advantage+ Shopping, LinkedIn Accelerate — y cuándo la automatización total se convierte en un riesgo real para tu estrategia.",
  alternates: {
    canonical: "https://jtads.com/blog/hiper-automatizacion-campanas-mas-alla-performance-max",
    languages: { es: "https://jtads.com/blog/hiper-automatizacion-campanas-mas-alla-performance-max" },
  },
  openGraph: {
    title: "Más allá de Performance Max y Advantage+: la hiper-automatización en campañas 2026",
    description:
      "Analizamos la próxima frontera de la automatización en Google Ads, Meta y LinkedIn — y cuándo delegar al algoritmo se convierte en un riesgo.",
    images: ["/og-image.png"],
    url: "https://jtads.com/blog/hiper-automatizacion-campanas-mas-alla-performance-max",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Más allá de Performance Max y Advantage+: la próxima frontera de la automatización en campañas",
  description:
    "Performance Max y Advantage+ son ya el estándar. Analizamos las nuevas funcionalidades que llevan la automatización a un nivel superior y cuándo la hiper-automatización introduce riesgos inaceptables.",
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
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
  image: "https://jtads.com/og-image.png",
  url: "https://jtads.com/blog/hiper-automatizacion-campanas-mas-alla-performance-max",
  about: [
    { "@type": "Thing", name: "Performance Max" },
    { "@type": "Thing", name: "Automatización de campañas" },
    { "@type": "Thing", name: "Google Ads" },
    { "@type": "Thing", name: "Meta Ads" },
    { "@type": "Thing", name: "LinkedIn Ads" },
    { "@type": "Thing", name: "Performance Marketing LATAM" },
  ],
  mentions: [
    { "@type": "Thing", name: "Advantage+" },
    { "@type": "Thing", name: "AI Max for Search" },
    { "@type": "Thing", name: "Smart Bidding" },
    { "@type": "Thing", name: "Advantage+ Shopping" },
    { "@type": "Thing", name: "LinkedIn Accelerate" },
    { "@type": "Thing", name: "Broad Match" },
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
      name: "Más allá de Performance Max y Advantage+",
      item: "https://jtads.com/blog/hiper-automatizacion-campanas-mas-alla-performance-max",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué es AI Max for Search en Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Max for Search es la evolución del broad match inteligente en Google Ads. Combina expansión de consultas impulsada por IA con targeting de URL final dinámica y personalización de copy en tiempo real. En la práctica, el algoritmo decide no solo a qué búsquedas responder, sino también qué URL mostrar y qué parte del anuncio adaptar según el contexto del usuario. Está disponible de manera progresiva desde principios de 2026 y representa el nivel más alto de automatización dentro de campañas de Search.",
      },
    },
    {
      "@type": "Question",
      name: "¿Performance Max y Advantage+ son lo mismo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, aunque tienen filosofías similares. Performance Max (Google) unifica todos los inventarios de Google — Search, Display, YouTube, Discover, Maps, Gmail — en una sola campaña gestionada por IA. Advantage+ (Meta) hace lo equivalente en el ecosistema de Facebook e Instagram, automatizando targeting, placements y creativos. Ambas ceden control al algoritmo a cambio de optimización cross-canal. La diferencia clave está en el tipo de señales disponibles: Google trabaja con intención de búsqueda; Meta trabaja con comportamiento social y patrones de consumo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuándo NO conviene usar Performance Max o Advantage+?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Performance Max no es recomendable cuando: el volumen de conversiones mensuales es menor a 30–50 (el algoritmo no aprende correctamente), cuando hay restricciones de brand estrictas que el algoritmo puede ignorar, o cuando el negocio opera en nichos muy específicos donde la expansión de audiencia automática genera tráfico irrelevante. Advantage+ tiene las mismas limitaciones para B2B y productos con ICP muy definido. En ambos casos, la falta de transparencia sobre dónde se invierte el presupuesto es un riesgo real cuando los objetivos de negocio son granulares.",
      },
    },
    {
      "@type": "Question",
      name: "¿La automatización total en campañas reduce el CPL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende. En cuentas con alto volumen de conversiones y señales de datos de calidad, la automatización total puede bajar el CPL al encontrar patrones que el humano no detectaría. En cuentas con poco historial, conversiones escasas o tracking deficiente, la automatización total amplifica los errores: el algoritmo optimiza agresivamente hacia la señal incorrecta. El resultado es un CPL aparentemente bajo en plataforma y leads de baja calidad en el CRM. La automatización no sustituye un tracking correcto — lo presupone.",
      },
    },
  ],
};

const comparisonRows = [
  {
    dimension: "Transparencia de gasto",
    manual: "Control total por keyword, placement y audiencia",
    pmax: "Reportes agregados, sin desglose granular",
    hiperAuto: "Casi ninguna visibilidad sobre distribución real",
  },
  {
    dimension: "Requisito de conversiones",
    manual: "Funciona con bajo volumen",
    pmax: "Mínimo 30–50 conv/mes para aprender",
    hiperAuto: "Volumen alto crítico; sin él, el algoritmo se equivoca más",
  },
  {
    dimension: "Control de brand safety",
    manual: "Exclusiones explícitas y revisables",
    pmax: "Exclusiones limitadas, placement no transparente",
    hiperAuto: "Prácticamente delegado al algoritmo de la plataforma",
  },
  {
    dimension: "Velocidad de optimización",
    manual: "Lenta, requiere intervención humana constante",
    pmax: "Rápida dentro del ecosistema",
    hiperAuto: "Muy rápida, pero en cualquier dirección",
  },
  {
    dimension: "Riesgo en nicho específico",
    manual: "Bajo — controlas a quién llegas",
    pmax: "Medio — expansión de audiencia semi-controlada",
    hiperAuto: "Alto — la IA amplía públicos sin restricciones claras",
  },
  {
    dimension: "Dependencia del tracking",
    manual: "Alta, pero los errores son detectables",
    pmax: "Muy alta — basura entra, basura sale",
    hiperAuto: "Crítica — sin datos limpios el sistema colapsa",
  },
];

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
            Automatización
          </span>
          <h1
            className="font-black text-white text-3xl md:text-4xl leading-tight mb-6"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Más allá de Performance Max y Advantage+: la próxima frontera de la autonomía en campañas
          </h1>
          <p
            className="text-[#a8aab8] text-base leading-relaxed mb-6 max-w-2xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            PMax y Advantage+ ya son el estándar. La conversación ahora es sobre lo que viene después: plataformas que prometen aún menos intervención humana. El debate real es si esa promesa es eficiencia o riesgo.
          </p>
          <p
            className="text-[#727687] text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Abril 2026 · 12 min de lectura · Por Juan Tabares
          </p>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Intro */}
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Hace tres años, la conversación sobre automatización en paid media giraba alrededor de Smart Bidding: ceder el control de las pujas a Google a cambio de optimización en tiempo real. Hoy esa conversación es historia. Performance Max y Advantage+ son el punto de partida asumido en la mayoría de las cuentas con presupuesto relevante.
          </p>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            El problema es que la industria no se detuvo ahí. Google, Meta y LinkedIn están empujando activamente hacia lo que internamente ya llaman <strong className="text-[#1c1b1b]">campañas autónomas</strong>: sistemas donde el algoritmo decide no solo las pujas, sino también la audiencia, el mensaje, la URL de destino y la combinación de canales — con supervisión humana mínima o nula.
          </p>
          <p className="text-[#424656] leading-relaxed mb-10 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Este artículo no es una defensa de la automatización ni un alegato en su contra. Es un análisis de qué está ocurriendo realmente en las plataformas, qué se gana, qué se pierde y cuándo la hiper-automatización pasa de ser una ventaja operativa a un riesgo estratégico que no es fácil detectar desde un dashboard.
          </p>

          {/* Section 1 */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            Dónde estamos hoy: PMax y Advantage+ como punto de partida
          </h2>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Performance Max unifica todo el inventario de Google — Search, Display, YouTube, Discover, Maps, Gmail — en una sola campaña. El anunciante define el objetivo, aporta los assets creativos y las señales de audiencia, y el algoritmo distribuye el presupuesto donde predice que obtendrá las mejores conversiones. La lógica es atractiva en papel.
          </p>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Advantage+ de Meta hace lo equivalente en Facebook e Instagram: automatiza targeting, placement y optimización creativa. Con Advantage+ Shopping Campaigns (ASC), Meta además controla qué productos mostrar y a qué usuarios, dejando al anunciante solo con el presupuesto y el catálogo.
          </p>
          <p className="text-[#424656] leading-relaxed mb-10 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Ambas herramientas funcionan bien bajo condiciones específicas: alto volumen de conversiones, datos de calidad, objetivos claros y un ICP lo suficientemente amplio para que el algoritmo tenga espacio de maniobra. Fuera de esas condiciones, los resultados son erráticos y el diagnóstico es difícil precisamente porque la caja es negra.
          </p>

          {/* Section 2 */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            La nueva frontera: qué viene después de PMax y Advantage+
          </h2>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Las plataformas están desarrollando activamente la siguiente capa de automatización. No es futurismo — algunas ya están en rollout gradual:
          </p>

          <div className="space-y-8 mb-10">
            {/* AI Max */}
            <div className="border-l-4 border-[#0066ff] pl-6">
              <h3 className="font-bold text-lg text-[#1c1b1b] mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                Google: AI Max for Search
              </h3>
              <p className="text-[#424656] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                AI Max for Search es la evolución más agresiva de broad match. Combina tres capacidades que antes eran separadas: expansión de consultas por IA (el algoritmo decide a qué búsquedas responder), targeting de URL final dinámica (el algoritmo decide qué página del sitio mostrar para cada búsqueda) y personalización de copy en tiempo real (el mensaje se adapta al contexto del usuario sin que el anunciante defina cada variación). El anunciante aporta las keywords como señal, no como restricción. El resultado es una campaña de Search que funciona con la lógica de PMax pero sobre el inventario de búsqueda.
              </p>
              <p className="text-[#424656] text-sm leading-relaxed mt-3" style={{ fontFamily: "Inter, sans-serif" }}>
                Lo que se gana: cobertura de búsquedas que el anunciante nunca habría identificado manualmente. Lo que se pierde: la capacidad de saber exactamente qué búsquedas están generando conversiones y a qué URLs está llegando el tráfico pagado.
              </p>
            </div>

            {/* Meta ASC */}
            <div className="border-l-4 border-[#1877F2] pl-6">
              <h3 className="font-bold text-lg text-[#1c1b1b] mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                Meta: Advantage+ Shopping y Advantage+ Audience
              </h3>
              <p className="text-[#424656] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                Advantage+ Shopping Campaigns ya eliminó la segmentación manual de audiencias para e-commerce. El anunciante define un presupuesto y un catálogo; Meta decide a quién mostrar qué producto. La extensión lógica es Advantage+ Audience, que aplica la misma filosofía a campañas de lead generation: el sistema aprende quiénes convierten y expande la audiencia de forma autónoma, sin que el anunciante defina segmentos. Los resultados en volumen son buenos cuando el pixel tiene datos suficientes. El problema: no hay forma de saber si esa expansión está llegando al ICP real o simplemente a personas que hacen clic.
              </p>
            </div>

            {/* LinkedIn Accelerate */}
            <div className="border-l-4 border-[#0A66C2] pl-6">
              <h3 className="font-bold text-lg text-[#1c1b1b] mb-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                LinkedIn: Accelerate
              </h3>
              <p className="text-[#424656] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                LinkedIn Accelerate es la apuesta más ambiciosa de las tres. El sistema construye la campaña completa — audiencia, formato, copy, presupuesto sugerido — a partir del URL del sitio web del anunciante. En teoría, basta con pegar la URL de tu landing y LinkedIn crea la campaña. En la práctica, las campañas generadas tienen targeting amplio, copy genérico y zero diferenciación. Para B2B enterprise con ICP muy definido, Accelerate produce resultados mediocres precisamente porque el valor de LinkedIn está en la segmentación granular por cargo y empresa — que Accelerate diluye.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            El problema real: lo que cedes cuando delegas al algoritmo
          </h2>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            La narrativa de las plataformas es clara: cede el control, obtén eficiencia. Lo que no aparece en los materiales de marketing es qué exactamente estás cediendo y qué riesgo introduce esa cesión.
          </p>

          <div className="bg-[#fcf9f8] rounded-2xl p-6 mb-8 border border-[#c2c6d8]/15">
            <p className="text-sm font-bold text-[#1c1b1b] mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
              Lo que el algoritmo optimiza vs. lo que tu negocio necesita
            </p>
            <div className="space-y-3">
              {[
                {
                  algoritmo: "Maximizar conversiones según la señal definida",
                  negocio: "Generar clientes con LTV alto, no leads de bajo valor",
                },
                {
                  algoritmo: "Expandir audiencias para encontrar más conversiones",
                  negocio: "Llegar exactamente al ICP, no a cualquier persona que hace clic",
                },
                {
                  algoritmo: "Distribuir presupuesto donde el modelo predice mejor ROAS",
                  negocio: "Mantener presencia en canales estratégicos aunque el ROAS inmediato sea menor",
                },
                {
                  algoritmo: "Usar cualquier placement disponible si mejora la métrica objetivo",
                  negocio: "Aparecer en contextos que no dañen la percepción de marca",
                },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 gap-4 py-3 border-b border-[#c2c6d8]/10 last:border-0">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#0066ff] mb-1">El algoritmo quiere</p>
                    <p className="text-xs text-[#424656] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{row.algoritmo}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#727687] mb-1">Tu negocio necesita</p>
                    <p className="text-xs text-[#424656] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{row.negocio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            La desconexión entre lo que optimiza el algoritmo y lo que necesita el negocio no es un bug — es una consecuencia estructural de cómo funcionan estos sistemas. El algoritmo maximiza la métrica que le diste. Si esa métrica no está perfectamente alineada con revenue real, el sistema va a optimizar en la dirección equivocada de forma cada vez más eficiente.
          </p>
          <p className="text-[#424656] leading-relaxed mb-10 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Y con hiper-automatización, ese problema se amplifica porque tampoco puedes auditar fácilmente dónde se está yendo el presupuesto ni qué búsquedas o audiencias están produciendo las conversiones que el sistema reporta.
          </p>

          {/* Section 4: Comparison table */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
            Control vs. automatización: qué cambia en cada nivel
          </h2>

          <div className="overflow-x-auto mb-10 -mx-2">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#f6f3f2]">
                  <th className="p-4 font-bold text-[#1c1b1b] text-xs uppercase tracking-wider rounded-tl-lg" style={{ fontFamily: "Manrope, sans-serif" }}>Dimensión</th>
                  <th className="p-4 font-bold text-[#1c1b1b] text-xs uppercase tracking-wider">Manual / Semi-manual</th>
                  <th className="p-4 font-bold text-[#0066ff] text-xs uppercase tracking-wider bg-blue-50/50">PMax / Advantage+</th>
                  <th className="p-4 font-bold text-[#1c1b1b] text-xs uppercase tracking-wider rounded-tr-lg">Hiper-automatización</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f6f3f2]">
                {comparisonRows.map((row) => (
                  <tr key={row.dimension} className="hover:bg-[#fcf9f8] transition-colors">
                    <td className="p-4 font-semibold text-[#1c1b1b] text-xs">{row.dimension}</td>
                    <td className="p-4 text-[#424656] text-xs leading-relaxed">{row.manual}</td>
                    <td className="p-4 text-[#424656] text-xs leading-relaxed bg-blue-50/20">{row.pmax}</td>
                    <td className="p-4 text-[#424656] text-xs leading-relaxed">{row.hiperAuto}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section 5 */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            ¿Hiper-automatización = eficiencia máxima? El debate real
          </h2>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            La respuesta honesta es: depende de a qué llamas eficiencia.
          </p>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Si eficiencia significa CPL bajo en plataforma con poco tiempo de gestión, la hiper-automatización gana. Los sistemas de IA procesan más variables en tiempo real de lo que cualquier equipo humano puede manejar, y encuentran patrones de conversión que ningún análisis manual detectaría.
          </p>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Si eficiencia significa revenue real generado con la menor inversión posible — incluyendo leads que cierran, clientes con buen LTV y campañas que no dañan el brand — la historia es más compleja.
          </p>

          <div className="bg-[#0F172A] rounded-2xl p-8 mb-8">
            <p className="text-white font-bold text-lg mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
              Lo que hemos visto en cuentas reales:
            </p>
            <div className="space-y-4">
              {[
                "Performance Max genera volumen, pero en cuentas B2B con ICP específico, entre el 40% y el 60% del gasto va a Search genérico y Display donde la audiencia no es el decisor.",
                "Advantage+ Shopping funciona bien para e-commerce de ticket bajo con catálogo amplio. Para ticket alto o marcas con posicionamiento premium, la expansión de audiencia automática lleva tráfico de precio, no de valor.",
                "LinkedIn Accelerate produce campañas que se ven razonables en el panel pero con targeting tan amplio que diluye el costo por clic de LinkedIn sin la calidad de lead que justifica ese costo.",
                "En los tres casos, el problema no es la automatización en sí — es que el sistema optimiza sobre la señal que tiene, y si esa señal no es revenue real, optimizará hacia algo diferente de lo que necesitas.",
              ].map((point, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-[#9bb4fe] font-bold text-sm mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[#a8aab8] text-sm leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6 */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            Cuándo sí y cuándo no: señales concretas para decidir tu nivel de automatización
          </h2>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            No hay una respuesta universal. Hay condiciones objetivas que determinan si más automatización te ayuda o te perjudica:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                <span className="text-lg">✅</span> Automatización avanzada tiene sentido cuando:
              </h3>
              <ul className="space-y-2">
                {[
                  "Tienes 50+ conversiones verificadas al mes (no proxy — conversiones reales de negocio)",
                  "Tu ICP es amplio o el producto tiene demanda masiva",
                  "El tracking está conectado al CRM y la señal de conversión es revenue, no solo leads",
                  "Tu equipo puede interpretar los reportes agregados y detectar anomalías",
                  "El presupuesto mensual justifica el volumen que necesita el algoritmo para aprender",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-green-900 flex items-start gap-2 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    <span className="text-green-500 mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
              <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2" style={{ fontFamily: "Manrope, sans-serif" }}>
                <span className="text-lg">⚠️</span> Mantén más control cuando:
              </h3>
              <ul className="space-y-2">
                {[
                  "Las conversiones mensuales son menores a 30 (el algoritmo no tiene señal suficiente)",
                  "Tu ICP tiene parámetros muy específicos: cargo, industria, tamaño de empresa o geografía",
                  "El tracking es browser-side solamente y el pixel pierde eventos por iOS o blockers",
                  "El ticket es alto y un lead mal calificado tiene un costo de oportunidad real en ventas",
                  "El brand tiene restricciones de imagen que el algoritmo puede no respetar en placements automáticos",
                ].map((item, i) => (
                  <li key={i} className="text-sm text-amber-900 flex items-start gap-2 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    <span className="text-amber-500 mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            Lo que recomendamos desde cuentas reales en LATAM
          </h2>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            La automatización no es la pregunta. La pregunta es si la señal que le das al algoritmo es lo suficientemente buena para que optimice en la dirección correcta.
          </p>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            En la mayoría de las cuentas que auditamos en LATAM, el problema no es que haya demasiada o poca automatización. Es que el tracking está roto o incompleto. Y cuando el tracking está roto, cualquier nivel de automatización amplifica el error: el algoritmo aprende a maximizar conversiones fantasma, leads sin calificación o eventos que se disparan por duplicado.
          </p>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            El framework que aplicamos es simple:
          </p>

          <ol className="space-y-4 mb-10" style={{ fontFamily: "Inter, sans-serif" }}>
            {[
              {
                n: "01",
                title: "Primero, tracking conectado a negocio",
                body: "Antes de activar cualquier automatización avanzada, la señal de conversión tiene que reflejar lo que importa al negocio: leads calificados, demos reales, SQLs. No formularios completados o visitas a páginas de gracias.",
              },
              {
                n: "02",
                title: "Segundo, volumen antes que automatización",
                body: "Si las conversiones mensuales son menores a 30, empezar con campañas de Search segmentadas. La automatización avanzada necesita datos para aprender. Sin datos, aprende cosas equivocadas.",
              },
              {
                n: "03",
                title: "Tercero, automatización como escala, no como atajo",
                body: "PMax y Advantage+ son herramientas de escala, no de inicio. Actívalas cuando la cuenta ya tiene historial, conversiones de calidad y un equipo que pueda interpretar los resultados agregados.",
              },
              {
                n: "04",
                title: "Cuarto, mantener visibilidad sobre lo que importa",
                body: "Con cualquier nivel de automatización, definir qué métricas vas a monitorear para detectar desviaciones: tasa de conversión de lead a SQL, costo por oportunidad en CRM, volumen de búsquedas de brand vs. no-brand. Si el sistema se va en la dirección equivocada, necesitas detectarlo antes de que queme presupuesto.",
              },
            ].map((step) => (
              <li key={step.n} className="flex gap-5 py-4 border-b border-[#f6f3f2] last:border-0">
                <span className="text-3xl font-black text-[#0066ff]/15 leading-none shrink-0 w-10">{step.n}</span>
                <div>
                  <p className="font-bold text-[#1c1b1b] mb-1" style={{ fontFamily: "Manrope, sans-serif" }}>{step.title}</p>
                  <p className="text-sm text-[#424656] leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Conclusion */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4" style={{ fontFamily: "Manrope, sans-serif" }}>
            La conclusión sin rodeos
          </h2>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            La hiper-automatización es el camino hacia la eficiencia máxima bajo condiciones específicas. Fuera de esas condiciones, es el camino hacia la pérdida de control sin capacidad de diagnóstico.
          </p>
          <p className="text-[#424656] leading-relaxed mb-6 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            Las plataformas tienen incentivos alineados hacia más automatización: menos fricción para el anunciante equivale a más gasto, más rápido. Eso no significa que más automatización sea siempre lo mejor para tu negocio.
          </p>
          <p className="text-[#424656] leading-relaxed mb-10 text-base" style={{ fontFamily: "Inter, sans-serif" }}>
            El criterio que usamos es este: si puedes explicar exactamente por qué el algoritmo está tomando las decisiones que toma y si esas decisiones están alineadas con lo que necesitas medir — adelante. Si la respuesta es "no sé, pero los números de plataforma se ven bien" — ahí está el problema.
          </p>

          {/* FAQ */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-14 mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
            Preguntas frecuentes
          </h2>
          <div className="space-y-6 mb-14">
            {[
              {
                q: "¿Qué es AI Max for Search en Google Ads?",
                a: "AI Max for Search es la evolución del broad match inteligente en Google Ads. Combina expansión de consultas por IA, targeting de URL final dinámica y personalización de copy en tiempo real. El algoritmo decide no solo a qué búsquedas responder, sino también qué URL mostrar y cómo adaptar el mensaje. Representa el nivel más alto de automatización dentro de campañas de Search.",
              },
              {
                q: "¿Performance Max y Advantage+ son lo mismo?",
                a: "No, aunque comparten filosofía. Performance Max (Google) unifica todos los inventarios de Google en una sola campaña. Advantage+ (Meta) hace lo equivalente en Facebook e Instagram. La diferencia clave: Google trabaja con intención de búsqueda; Meta trabaja con comportamiento social.",
              },
              {
                q: "¿Cuándo NO conviene usar Performance Max o Advantage+?",
                a: "Cuando el volumen de conversiones mensuales es menor a 30–50, cuando hay restricciones de brand estrictas, cuando el ICP es muy específico por cargo o industria, o cuando el tracking no está conectado a revenue real. En esos casos, la automatización amplifica errores en lugar de corregirlos.",
              },
              {
                q: "¿La automatización total en campañas reduce el CPL?",
                a: "En cuentas con alto volumen y datos de calidad, sí puede bajar el CPL al encontrar patrones que el humano no detecta. En cuentas con poco historial o tracking deficiente, la automatización total optimiza hacia la señal incorrecta. El resultado es un CPL bajo en plataforma y leads de mala calidad en el CRM.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-[#f6f3f2] pb-6">
                <h3 className="text-base font-bold text-[#1c1b1b] mb-3" style={{ fontFamily: "Manrope, sans-serif" }}>
                  {item.q}
                </h3>
                <p className="text-sm text-[#424656] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* Lee también */}
          <div className="bg-[#fcf9f8] rounded-2xl p-6 border border-[#c2c6d8]/15 mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#727687] mb-4">Lee también</p>
            <div className="space-y-3">
              <Link
                href="/blog/performance-max-como-funciona-latam"
                className="flex items-center gap-3 group"
              >
                <span className="text-[#0066ff] text-lg leading-none">→</span>
                <span className="text-sm font-semibold text-[#1c1b1b] group-hover:text-[#0066ff] transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                  Performance Max en LATAM: cómo funciona y cuándo realmente conviene usarlo
                </span>
              </Link>
              <Link
                href="/blog/tracking-server-side-cpl-plataforma"
                className="flex items-center gap-3 group"
              >
                <span className="text-[#0066ff] text-lg leading-none">→</span>
                <span className="text-sm font-semibold text-[#1c1b1b] group-hover:text-[#0066ff] transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                  Por qué el CPL de tu plataforma te está mintiendo (y cómo solucionarlo)
                </span>
              </Link>
              <Link
                href="/blog/como-reducir-cpl-google-ads-latam"
                className="flex items-center gap-3 group"
              >
                <span className="text-[#0066ff] text-lg leading-none">→</span>
                <span className="text-sm font-semibold text-[#1c1b1b] group-hover:text-[#0066ff] transition-colors" style={{ fontFamily: "Inter, sans-serif" }}>
                  Cómo reducir el CPL en Google Ads: 7 palancas reales para empresas en LATAM
                </span>
              </Link>
            </div>
          </div>

        </div>
      </article>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#0066ff]">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-black text-white text-2xl md:text-3xl mb-4 leading-tight"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            ¿Quieres saber si el nivel de automatización de tu cuenta está alineado con tus objetivos?
          </h2>
          <p className="text-blue-100 mb-8 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            En la sesión de diagnóstico revisamos en vivo la estructura de campañas, el nivel de automatización activo y si la señal de conversión que recibe el algoritmo refleja lo que realmente importa a tu negocio.
          </p>
          <Link
            href="/diagnostico-en-vivo"
            className="inline-block bg-white text-[#0066ff] px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-50 transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Reservar Sesión de Diagnóstico — Gratis
          </Link>
          <p className="text-blue-200 text-sm mt-4" style={{ fontFamily: "Inter, sans-serif" }}>
            Respuesta en menos de 4 horas hábiles · Sin compromiso
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
