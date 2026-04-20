import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "¿Cuánto cobra una agencia de Google Ads en LATAM? Precios reales 2026",
  description:
    "Los modelos de precios de agencias de Google Ads en México, Colombia y Chile. Qué incluye cada uno, cuál conviene según tu presupuesto y qué señales de alerta debes evitar.",
  alternates: {
    canonical: "https://jtads.com/blog/cuanto-cobra-agencia-google-ads-latam",
    languages: { "es": "https://jtads.com/blog/cuanto-cobra-agencia-google-ads-latam" },
  },
  openGraph: {
    title:
      "¿Cuánto cobra una agencia de Google Ads en LATAM? Precios reales 2026",
    description:
      "Guía de precios reales de agencias de Google Ads en México, Colombia y Chile. Modelos de cobro, qué incluir y señales de alerta.",
    images: ["/og-image.png"],
    url: "https://jtads.com/blog/cuanto-cobra-agencia-google-ads-latam",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "¿Cuánto cobra una agencia de Google Ads en LATAM? Precios reales en 2026",
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
  datePublished: "2026-04-01",
  dateModified: "2026-04-09",
  image: "https://jtads.com/og-image.png",
  url: "https://jtads.com/blog/cuanto-cobra-agencia-google-ads-latam",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jtads.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jtads.com/blog" },
    { "@type": "ListItem", position: 3, name: "¿Cuánto cobra una agencia de Google Ads?", item: "https://jtads.com/blog/cuanto-cobra-agencia-google-ads-latam" },
  ],
};

export default function PostPreciosAgencia() {
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
            Precios &amp; Contratación
          </span>
          <h1
            className="font-black text-white text-3xl md:text-4xl leading-tight mb-6"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            ¿Cuánto cobra una agencia de Google Ads en LATAM? Precios reales en
            2026
          </h1>
          <p
            className="text-[#727687] text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Abril 2026 · 8 min de lectura
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
            Si alguna vez intentaste comparar precios de agencias de Google Ads
            en LATAM, probablemente te encontraste con el mismo problema: nadie
            publica sus tarifas reales. El sitio web dice "planes personalizados
            según tus objetivos", la llamada de ventas termina con "te enviamos
            una propuesta" y la propuesta llega con números que no puedes
            contrastar con nada.
          </p>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Esa opacidad no es accidental. Es una estrategia. Sin precios de
            referencia, es difícil saber si estás pagando bien, mal o
            directamente mal. Esta guía existe para cambiar eso.
          </p>

          {/* Section 1 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Los 3 modelos de cobro más comunes
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Antes de hablar de números, hay que entender cómo cobran las
            agencias. El modelo de cobro afecta directamente sus incentivos — y
            sus incentivos afectan cómo gestionan tu cuenta.
          </p>

          <h3
            className="font-bold text-lg text-[#1c1b1b] mt-8 mb-3"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            1. Porcentaje del ad spend (10% – 20%)
          </h3>
          <p
            className="text-[#424656] leading-relaxed mb-4 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Es el modelo más extendido en el mercado. La agencia cobra un
            porcentaje mensual sobre el presupuesto que gastas en pauta — por
            lo general entre el 10% y el 20%. Si inviertes $10,000 USD en
            Google Ads, pagas entre $1,000 y $2,000 adicionales en honorarios.
          </p>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Conviene cuando tienes presupuestos altos y necesitas gestión
            activa. El problema estructural: a la agencia le conviene que
            gastes más, no necesariamente que gastes mejor. Es un incentivo
            implícito a subir el presupuesto antes de optimizar la estructura.
          </p>

          <h3
            className="font-bold text-lg text-[#1c1b1b] mt-8 mb-3"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            2. Fee fijo mensual
          </h3>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Un monto fijo independiente de cuánto inviertes en pauta. Suele
            incluir gestión de campañas, optimización semanal, reportes
            mensuales y soporte. Es el modelo más predecible para el cliente y
            el más común en agencias que trabajan con presupuestos medianos
            ($2,000 – $15,000 USD/mes en pauta). La clave está en qué incluye
            exactamente ese fee — y qué queda fuera.
          </p>

          <h3
            className="font-bold text-lg text-[#1c1b1b] mt-8 mb-3"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            3. Performance-based (% sobre resultados)
          </h3>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            La agencia cobra un porcentaje sobre los leads generados o las
            ventas atribuidas. Suena atractivo, pero es raro en LATAM y tiene
            un riesgo importante: si no hay un sistema de tracking robusto e
            independiente, la agencia termina midiendo sus propios resultados.
            Sin auditoría externa, el modelo puede dar lugar a inflación de
            métricas.
          </p>

          {/* Section 2 — Pricing table */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Rango de precios reales en LATAM (2026)
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-8 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Los siguientes rangos reflejan honorarios de gestión, no incluyen
            el presupuesto de pauta. Los precios están en USD y corresponden a
            agencias con al menos un equipo senior dedicado — no a freelancers
            ni a cuentas gestionadas por practicantes.
          </p>

          <div className="overflow-x-auto rounded-xl border border-[#c2c6d8]/20 mb-10">
            <table className="w-full bg-white text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
              <thead>
                <tr className="bg-[#f6f3f2] text-left">
                  <th className="px-6 py-4 font-bold text-[#1c1b1b]">País</th>
                  <th className="px-6 py-4 font-bold text-[#1c1b1b]">
                    Honorarios / mes
                  </th>
                  <th className="px-6 py-4 font-bold text-[#1c1b1b]">
                    Ad spend mínimo recomendado
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f6f3f2]">
                <tr>
                  <td className="px-6 py-4 text-[#1c1b1b] font-medium">
                    México
                  </td>
                  <td className="px-6 py-4 text-[#424656]">$800 – $3,500 USD</td>
                  <td className="px-6 py-4 text-[#424656]">$5,000 USD</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-[#1c1b1b] font-medium">
                    Colombia
                  </td>
                  <td className="px-6 py-4 text-[#424656]">$600 – $2,500 USD</td>
                  <td className="px-6 py-4 text-[#424656]">$2,000 – $3,000 USD</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-[#1c1b1b] font-medium">
                    Chile
                  </td>
                  <td className="px-6 py-4 text-[#424656]">$900 – $3,500 USD</td>
                  <td className="px-6 py-4 text-[#424656]">$5,000 USD</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p
              className="text-[#424656] text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <strong className="text-[#1c1b1b]">Nota importante:</strong> los
              rangos bajos ($600–$800 USD/mes) suelen corresponder a servicios
              más básicos — reportes estándar, optimizaciones mínimas, sin
              configuración de tracking avanzado. Los rangos altos (+$2,500
              USD/mes) incluyen gestión estratégica, tracking server-side,
              integración con CRM y soporte prioritario.
            </p>
          </div>

          {/* Section 3 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Qué debería incluir el servicio
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            No importa el modelo de cobro: hay un estándar mínimo que cualquier
            agencia seria debería cumplir. Si alguno de estos puntos no está
            incluido, es una señal de alerta.
          </p>

          <ul
            className="space-y-3 mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {[
              "Auditoría inicial de la cuenta y del tracking existente",
              "Configuración o revisión del tracking de conversiones (Google Tag, GA4, píxeles)",
              "Gestión mensual activa: estructura, pujas, creatividades, negativos",
              "Acceso propietario a tu cuenta — la cuenta es tuya, no de la agencia",
              "Reporte mensual conectado a datos reales (no solo screenshots de plataforma)",
              "Soporte con tiempo de respuesta definido (menos de 4 horas hábiles)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-[#0066ff] mt-0.5 font-bold text-base leading-none">
                  ✓
                </span>
                <span className="text-[#424656] text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Section 4 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            5 señales de alerta que debes conocer antes de contratar
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-8 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Ninguna de estas situaciones es normal. Si una agencia las presenta
            como estándar, el problema no es el precio — es el modelo de
            negocio.
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
                  No te dan acceso a tu propia cuenta
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  La cuenta de Google Ads debe estar a tu nombre. Si la agencia
                  administra la cuenta bajo su propia MCC y no te da acceso
                  propietario, perderás todo el historial si cambias de agencia.
                  Es una práctica de retención artificial, no una necesidad
                  técnica.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066ff] text-white text-sm font-bold flex items-center justify-center">
                2
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  El reporte solo muestra el CPL de plataforma
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  El CPL que ves en Google Ads es el costo por evento del
                  píxel, no por lead calificado real. Si el reporte mensual
                  solo muestra ese número sin cruzarlo con datos de CRM, la
                  agencia no está midiendo lo que importa — o prefiere no
                  hacerlo.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066ff] text-white text-sm font-bold flex items-center justify-center">
                3
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  Contratos de 12 meses sin cláusula de salida
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Una agencia que entrega resultados no necesita amarrarte por
                  un año. Los contratos largos sin salida son una señal de que
                  confían más en el contrato que en su trabajo. Lo estándar
                  es 3 meses de compromisos mínimos con renovación mensual.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066ff] text-white text-sm font-bold flex items-center justify-center">
                4
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  El account manager que te vendió no es quien gestiona
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  En muchas agencias, el perfil senior cierra el contrato y
                  luego el trabajo lo hace un junior o un trainee. Pregunta
                  antes de firmar: ¿quién va a gestionar mi cuenta día a día?
                  ¿Cuántas cuentas maneja esa persona simultáneamente?
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066ff] text-white text-sm font-bold flex items-center justify-center">
                5
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  Métricas de vanidad como KPI principal
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Si el reporte mensual habla de impresiones, reach o CTR como
                  logros principales — sin conectarlos a conversiones reales y
                  pipeline — hay un problema. Esas métricas pueden subir
                  mientras los resultados de negocio bajan. El único KPI que
                  importa es el costo por lead calificado o por venta cerrada.
                </p>
              </div>
            </li>
          </ol>

          {/* Conclusion + CTA */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Conclusión
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Contratar una agencia de Google Ads en LATAM no debería ser un acto
            de fe. Los rangos de precios existen, los modelos de cobro tienen
            implicaciones claras y hay señales objetivas que te permiten evaluar
            si lo que te ofrecen es proporcional a lo que pagas.
          </p>
          <p
            className="text-[#424656] leading-relaxed mb-10 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Si no sabes si tu agencia actual te está cobrando bien — o si lo
            que incluye el servicio realmente corresponde a lo que necesitas —
            empieza por revisar la cuenta. Un diagnóstico honesto es la única
            forma de saber con certeza dónde estás parado.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p
              className="text-[#1c1b1b] font-bold text-lg mb-3"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Revisamos tu cuenta sin compromiso
            </p>
            <p
              className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              En el diagnóstico en vivo analizamos estructura, tracking y
              resultados reales. Te decimos qué está mal, cuánto te está
              costando y cómo corregirlo.
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
            ¿Quieres saber exactamente qué estás pagando de más?
          </h2>
          <p className="text-white/80 mb-8">
            En 60 minutos te mostramos en vivo qué está fallando en tu cuenta y cuánto te está costando.
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
            <a href="/agencia-google-ads-latam" className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow">
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Servicios</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">Agencia de Google Ads para LATAM — cómo trabajamos</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
