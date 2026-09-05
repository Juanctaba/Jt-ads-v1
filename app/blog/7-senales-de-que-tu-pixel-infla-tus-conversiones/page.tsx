import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const URL = "https://jtads.com/blog/7-senales-de-que-tu-pixel-infla-tus-conversiones";

export const metadata: Metadata = {
  title: "7 señales de que tu píxel infla tus conversiones | JT Ads",
  description:
    "Siete banderas rojas de que tu píxel está inflando tus conversiones y cómo comprobar cada una antes de renovar con tu agencia.",
  alternates: {
    canonical: URL,
    languages: { es: URL },
  },
  openGraph: {
    title: "7 señales de que tu píxel infla tus conversiones | JT Ads",
    description:
      "Siete banderas rojas de que tu píxel está inflando tus conversiones y cómo comprobar cada una antes de renovar con tu agencia.",
    images: ["/og-image.png"],
    url: URL,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "7 señales de que tu píxel está inflando tus conversiones (y cómo comprobarlo)",
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
  datePublished: "2026-08-27",
  dateModified: "2026-08-27",
  image: "https://jtads.com/og-image.png",
  url: URL,
  inLanguage: "es",
  about: [
    "Tracking de conversiones",
    "Píxel de Meta",
    "Atribución publicitaria",
    "Auditoría de cuentas de Google Ads",
  ],
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
      name: "7 señales de que tu píxel infla tus conversiones",
      item: URL,
    },
  ],
};

const P = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-black text-2xl text-[#1c1b1b] mt-12 mb-4";
const INTER = { fontFamily: "Inter, sans-serif" };
const MANROPE = { fontFamily: "Manrope, sans-serif" };

export default function PostPixelInflaConversiones() {
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
            style={INTER}
          >
            ← Volver al blog
          </Link>
          <span className="inline-block mb-5 px-3 py-1 rounded-full bg-[#9bb4fe]/20 text-[#9bb4fe] text-xs font-semibold uppercase tracking-wide">
            Tracking Técnico
          </span>
          <h1
            className="font-black text-white text-3xl md:text-4xl leading-tight mb-6"
            style={MANROPE}
          >
            7 señales de que tu píxel está inflando tus conversiones (y cómo
            comprobarlo)
          </h1>
          <p className="text-[#727687] text-sm" style={INTER}>
            Agosto 2026 · 7 min de lectura
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <p className={P} style={INTER}>
            Tu reporte de Google Ads dice que tuviste 200 conversiones este mes.
            Tu equipo comercial dice que 45 ventas entraron por esa pauta. La
            diferencia no es un detalle contable: es la diferencia entre un
            reporte que alivia tu conciencia y un negocio que de verdad crece.
          </p>
          <p className={P} style={INTER}>
            Casi siempre, cuando los números no cuadran, alguien está mintiendo.
            Y en la gran mayoría de los casos no es tu agencia en sentido
            malintencionado: es el píxel. Un píxel roto, mal configurado o mal
            deduplicado infla cifras que después mantienen a un equipo
            confundido, con leads que nunca llegan a venta.
          </p>
          <p className={P} style={INTER}>
            Acá van las siete señales más claras de que tu píxel te está
            inflando las conversiones, y cómo comprobarlas en menos de una hora
            sin depender del reporte que tu agencia te envía.
          </p>

          {/* 1 */}
          <h2 className={H2} style={MANROPE}>
            1. Tus conversiones duplican tus ventas reales
          </h2>
          <p className={P} style={INTER}>
            La señal más obvia y la más ignorada. Tu cuenta reporta 200
            conversiones, pero tu CRM o tu backend registra 60 oportunidades que
            de verdad llegaron por pauta.
          </p>
          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[#424656] text-sm leading-relaxed" style={INTER}>
              <strong className="text-[#1c1b1b]">Cómo comprobarlo:</strong>{" "}
              compara la conversión de «lead» de tu cuenta (Google Ads o Meta)
              contra tu CRM, filtrando por periodo y por campaña. Si hay una
              brecha grande, es duplicación: el mismo evento se está contando
              más de una vez.
            </p>
          </div>

          {/* 2 */}
          <h2 className={H2} style={MANROPE}>
            2. El píxel dispara en páginas que no debería
          </h2>
          <p className={P} style={INTER}>
            Si tu píxel está instalado en toda la web y tu cuenta considera
            «conversión» cualquier visita a una página que no corresponde —una
            página de gracias que no cierra ninguna venta, un clic en un enlace
            interno—, estás contando humo.
          </p>
          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[#424656] text-sm leading-relaxed" style={INTER}>
              <strong className="text-[#1c1b1b]">Cómo comprobarlo:</strong> abre
              el informe de eventos de tus píxeles y revisa qué URLs disparan
              cada evento de conversión. Si una «compra» se atribuye a páginas
              que no son de checkout final, tienes un criterio de conversión mal
              armado.
            </p>
          </div>

          {/* 3 */}
          <h2 className={H2} style={MANROPE}>
            3. Conversiones que llegan en fracciones de segundo
          </h2>
          <p className={P} style={INTER}>
            Un píxel que registra la «compra» 0,2 segundos después del clic no
            representa un comprador: es un bot o un evento hardcodeado que
            dispara antes de que exista una venta real.
          </p>
          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[#424656] text-sm leading-relaxed" style={INTER}>
              <strong className="text-[#1c1b1b]">Cómo comprobarlo:</strong> en
              tu herramienta de analytics revisa la distribución de tiempo entre
              el clic y el evento de conversión. Una pared de conversiones que
              aparecen a velocidades imposibles para un humano —menos de un
              segundo cuando el checkout debería tomar varios— es una bandera
              roja.
            </p>
          </div>

          {/* 4 */}
          <h2 className={H2} style={MANROPE}>
            4. El reporting «mejora de repente» justo en los cierres
          </h2>
          <p className={P} style={INTER}>
            Las conversiones suben de forma sospechosa cada lunes, o justo
            cuando se construye el reporte mensual. Cuando las métricas se
            inflan exactamente en el cierre de la agencia, más que a un problema
            del píxel suele apuntar a un juego con las ventanas de atribución.
            La medición no debería mejorar solo cuando llega el momento de
            rendir cuentas.
          </p>

          {/* 5 */}
          <h2 className={H2} style={MANROPE}>
            5. Tus leads llegan a ventas, pero el tracking no las ve
          </h2>
          <p className={P} style={INTER}>
            El caso más honesto del problema: el píxel funciona bien para los
            «leads», pero el lead no viaja hasta la venta. Compras 100 leads en
            pauta, tu CRM confirma que 80 son reales, pero solo 20 llegan a
            venta y no sabes por cuál canal. Cuando la conversión final —la
            venta— no se registra, la cuenta optimiza contra el evento
            equivocado y acabas escalando lo que menos vende.
          </p>

          {/* 6 */}
          <h2 className={H2} style={MANROPE}>
            6. La atribución es «último clic» sin deduplicar
          </h2>
          <p className={P} style={INTER}>
            La mayoría de las cuentas no deduplica eventos entre canales. Un
            mismo usuario que vio tu anuncio en Facebook, hizo clic en Google y
            compró se cuenta como conversión en ambas plataformas. No es que
            alguien esté mintiendo: es que nadie conectó una medición
            multicanal, y el doble conteo te convence de que cada canal rinde
            más de lo que de verdad rinde.
          </p>

          {/* 7 */}
          <h2 className={H2} style={MANROPE}>
            7. Tu medición se rompió con las políticas de privacidad
          </h2>
          <p className={P} style={INTER}>
            Los bloqueadores y las nuevas políticas sobre cookies reducen la
            señal real que llega a tu píxel. Cuando los datos se pierden, las
            plataformas recurren a metodologías de estimación y modelado, y esas
            cifras estimadas terminan leyéndose como si fueran conversiones
            medidas. Un «aumento de conversiones» que coincide con una caída de
            datos verificados suele ser señal de que la medición dejó de ser
            honesta.
          </p>

          {/* Cierre */}
          <h2 className={H2} style={MANROPE}>
            Cómo lo resolvemos
          </h2>
          <p className={P} style={INTER}>
            Ya adivinarás la respuesta. Reemplazamos el píxel «adivino» por
            tracking server-side honesto y una estructura de medición que sigue
            cada evento hasta que llega a la venta final. Nada de conversiones
            infladas, nada de leads que se pierden en el camino. Se mide lo que
            se vende, y se optimiza contra eso.
          </p>
          <p className="text-[#424656] leading-relaxed mb-10 text-base" style={INTER}>
            Si alguna de estas señales te sonó familiar, ese es el momento
            exacto de hacer una auditoría de tu cuenta de Google Ads y de tus
            píxeles antes de renovar contrato. Es tu presupuesto, y mereces
            saber qué está pasando con él.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p className="text-[#1c1b1b] font-bold text-lg mb-3" style={MANROPE}>
              ¿Cuántas de las siete te sonaron familiares?
            </p>
            <p
              className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed"
              style={INTER}
            >
              En el diagnóstico en vivo revisamos, métrica por métrica, dónde se
              está inflando tu tracking y qué conversiones se están perdiendo —
              sin costo y sin compromiso.
            </p>
            <Link
              href="/diagnostico-en-vivo"
              className="inline-block bg-[#0066ff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0052cc] transition-colors duration-150 text-sm"
              style={INTER}
            >
              Solicitar diagnóstico gratuito →
            </Link>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[#0050cb] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-4" style={MANROPE}>
            ¿Tu píxel te está diciendo la verdad?
          </h2>
          <p className="text-white/80 mb-8">
            En 60 minutos revisamos en vivo el estado de tu tracking, las
            conversiones infladas y cómo corregirlo.
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
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#727687] mb-4">
            Lee también
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/blog/tracking-server-side-cpl-plataforma"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">
                Tracking Técnico
              </p>
              <p className="text-sm font-semibold text-[#1c1b1b]">
                Por qué el CPL de tu plataforma te está mintiendo (y cómo
                solucionarlo)
              </p>
            </a>
            <a
              href="/soluciones"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">
                Servicios
              </p>
              <p className="text-sm font-semibold text-[#1c1b1b]">
                Automatización, IA y CRM — cómo conectamos tu medición de punta
                a punta
              </p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
