import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const URL = "https://jtads.com/blog/tracking-server-side-que-es-por-que-pixel-miente";
const TITLE =
  "Tracking server-side para principiantes: qué es y por qué tu píxel miente";
const DESC =
  "Qué es el tracking server-side, cómo funciona y por qué tu píxel infla tus conversiones. Guía para principiantes para tener leads reales y auditables.";

export const metadata: Metadata = {
  title: `${TITLE} | JT Ads`,
  description: DESC,
  alternates: { canonical: URL, languages: { es: URL } },
  openGraph: {
    title: `${TITLE} | JT Ads`,
    description: DESC,
    images: ["/og-image.png"],
    url: URL,
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
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
  datePublished: "2026-09-07",
  dateModified: "2026-09-07",
  image: "https://jtads.com/og-image.png",
  url: URL,
  inLanguage: "es",
  about: [
    "Tracking server-side",
    "Píxel de Meta",
    "Conversiones de Google Ads",
    "Atribución publicitaria",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jtads.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://jtads.com/blog" },
    { "@type": "ListItem", position: 3, name: "Tracking server-side para principiantes", item: URL },
  ],
};

const P = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-black text-2xl text-[#1c1b1b] mt-12 mb-4";
const H3 = "font-bold text-lg text-[#1c1b1b] mt-8 mb-3";
const INTER = { fontFamily: "Inter, sans-serif" };
const MANROPE = { fontFamily: "Manrope, sans-serif" };

export default function PostTrackingServerSideGuia() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1c1b1b] pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#9bb4fe] text-sm mb-8 hover:underline" style={INTER}>
            ← Volver al blog
          </Link>
          <span className="inline-block mb-5 px-3 py-1 rounded-full bg-[#9bb4fe]/20 text-[#9bb4fe] text-xs font-semibold uppercase tracking-wide">
            Tracking Técnico
          </span>
          <h1 className="font-black text-white text-3xl md:text-4xl leading-tight mb-6" style={MANROPE}>
            Tracking server-side para principiantes: qué es y por qué tu píxel
            miente
          </h1>
          <p className="text-[#727687] text-sm" style={INTER}>
            Septiembre 2026 · 8 min de lectura
          </p>
        </div>
      </section>

      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <p className={P} style={INTER}>
            Hay una frase incómoda que casi ninguna agencia te va a decir:{" "}
            <strong className="text-[#1c1b1b]">
              alguien está mintiendo en tus números de marketing, y casi siempre
              es el píxel.
            </strong>{" "}
            No es por maldad, es por cómo está construido. Tu píxel infla
            conversiones, pierde otras por el camino y te muestra un escenario
            que no se parece a lo que entra a tu CRM.
          </p>
          <p className={P} style={INTER}>
            La buena noticia es que la solución existe, se llama tracking
            server-side y no necesitas ser ingeniero para entenderla. Esta guía
            es para principiantes: qué es, cómo funciona y por qué probablemente
            tus números están mal ahora mismo.
          </p>

          <h2 className={H2} style={MANROPE}>Qué es el tracking server-side</h2>
          <p className={P} style={INTER}>
            El tracking server-side —a veces escrito «server side tracking» o
            «s2s»— es una forma de enviar los datos de tus conversiones a
            Google, Meta y LinkedIn <strong className="text-[#1c1b1b]">desde
            tu propio servidor</strong>, en lugar de hacerlo desde el navegador
            de cada visitante.
          </p>
          <p className={P} style={INTER}>
            En el tracking tradicional, llamado client-side, un pedazo de código
            —el píxel de Meta, la etiqueta de Google Ads— vive dentro de tu
            página web. Cuando alguien compra, el píxel se dispara en su
            navegador y le avisa a la plataforma: «hubo una conversión aquí».
          </p>
          <p className={P} style={INTER}>
            En el server-side ese aviso ya no viaja desde el navegador del
            usuario. Tu página le manda la información a tu servidor —el mismo
            que ya usas para tu sitio, o el de tu proveedor— y desde ahí, de
            forma controlada, se reenvía el evento a cada plataforma.
          </p>
          <p className={P} style={INTER}>
            Piénsalo como la diferencia entre mandar un mensaje desde un
            teléfono con una barra de señal y mandarlo desde una estación con
            cable dedicado. El contenido es el mismo; lo que cambia es cuánto
            llega.
          </p>

          <h2 className={H2} style={MANROPE}>Por qué tu píxel miente</h2>
          <p className={P} style={INTER}>
            Acá viene la parte que incomoda, y también la que casi nadie explica
            bien.
          </p>
          <p className={P} style={INTER}>
            El píxel mide desde el navegador del usuario, y el navegador se ha
            ido cerrando. Los bloqueadores de anuncios silencian el píxel antes
            de que alcance a avisar. Safari limita las cookies con Intelligent
            Tracking Prevention, Firefox hace lo propio con Enhanced Tracking
            Protection, y Chrome avanza en la misma dirección. En iPhone
            —enorme en LATAM— buena parte de la señal simplemente no sale.
          </p>
          <p className={P} style={INTER}>
            Hasta acá parecería que el problema es que{" "}
            <strong className="text-[#1c1b1b]">faltan</strong> conversiones. Y
            sí, faltan. Pero el número que ves en el dashboard suele ser{" "}
            <strong className="text-[#1c1b1b]">más alto</strong> que la
            realidad, no más bajo. Esa es la parte contraintuitiva, y es la que
            explica por qué tu reporte y tu equipo comercial nunca coinciden.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[#424656] text-sm leading-relaxed mb-4" style={INTER}>
              <strong className="text-[#1c1b1b]">Se pierden eventos reales.</strong>{" "}
              Ventas y leads que ocurrieron y que la plataforma nunca llegó a
              registrar.
            </p>
            <p className="text-[#424656] text-sm leading-relaxed mb-4" style={INTER}>
              <strong className="text-[#1c1b1b]">La plataforma rellena el hueco.</strong>{" "}
              Cuando la señal medida cae, Google y Meta completan con modelado y
              estimación. Esas conversiones estimadas aparecen en tu reporte con
              el mismo aspecto que las medidas, sin ninguna etiqueta que las
              distinga.
            </p>
            <p className="text-[#424656] text-sm leading-relaxed" style={INTER}>
              <strong className="text-[#1c1b1b]">Y lo que sí se mide, se cuenta de más.</strong>{" "}
              Sin deduplicación entre canales, un mismo usuario que vio tu
              anuncio en Meta y luego hizo clic en Google se cuenta como
              conversión en las dos plataformas.
            </p>
          </div>

          <p className={P} style={INTER}>
            El resultado no es solo un número inflado: es un número del que no
            puedes saber qué parte se midió y qué parte se estimó. Por eso tu
            reporte se ve impecable y tu equipo comercial dice que los leads no
            aparecen. Las dos cosas pueden ser ciertas a la vez.
          </p>

          <h2 className={H2} style={MANROPE}>Qué ganas con el tracking server-side</h2>

          <h3 className={H3} style={MANROPE}>1. Leads reales y auditables</h3>
          <p className={P} style={INTER}>
            En lugar de las conversiones que el píxel alcanzó a ver, envías
            eventos que ya pasaron tu validación: un lead que respondió, una
            reunión agendada, una venta cerrada. Dejas de optimizar hacia
            formularios llenados y empiezas a optimizar hacia lo que de verdad
            llena tu CRM.
          </p>

          <h3 className={H3} style={MANROPE}>2. Datos que no se pierden en el camino</h3>
          <p className={P} style={INTER}>
            Al no depender del navegador, el server-side conserva la señal
            aunque el visitante use bloqueador. Y eso no solo mejora tu reporte:
            le da al algoritmo señales reales con las que optimizar. Menos
            relleno estimado significa mejores decisiones de puja, en Google Ads
            y en Meta por igual.
          </p>

          <h3 className={H3} style={MANROPE}>3. Un reporte que aguanta la pregunta que importa</h3>
          <p className={P} style={INTER}>
            «De estas 200 conversiones, ¿cuántas están en el CRM?» Con tracking
            server-side esa pregunta tiene respuesta. Eso es lo que llamamos
            reporting honesto: medir leads que llegan a ventas, no clics que se
            quedan en la diapositiva.
          </p>

          <h2 className={H2} style={MANROPE}>¿Necesitas ser ingeniero para usarlo?</h2>
          <p className={P} style={INTER}>
            No. Esa es una de las excusas con las que las agencias tradicionales
            te empujan hacia la complejidad. La realidad es que:
          </p>
          <ul className="mb-6 space-y-3">
            {[
              "La infraestructura son herramientas que probablemente ya tienes: Google Tag Manager, tu servidor o uno de bajo costo.",
              "La implementación inicial es un trabajo de configuración que se hace una vez.",
              "El resultado se revisa en los mismos dashboards que ya usas.",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-[#424656] text-base leading-relaxed" style={INTER}>
                <span className="text-[#0066ff] font-bold shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className={P} style={INTER}>
            Lo que sí cambia es quién tiene interés en que esto se mida bien.
            Una agencia cuyo reporte se ve mejor cuando el tracking es opaco no
            tiene ningún incentivo para arreglarlo. Si la tuya nunca te ha
            hablado de tracking server-side y su reporting se ve demasiado
            perfecto, eso te está costando dinero.
          </p>

          <h2 className={H2} style={MANROPE}>Cómo saber si tu píxel te está mintiendo</h2>
          <p className={P} style={INTER}>
            Tres preguntas antes de renovar con cualquiera:
          </p>
          <p className={P} style={INTER}>
            <strong className="text-[#1c1b1b]">
              ¿Cuántas conversiones de este reporte llegaron a venta o a lead
              verificado en el CRM?
            </strong>{" "}
            Si no saben responder, lo que tienes es un reporte de métricas de
            vanidad.
          </p>
          <p className={P} style={INTER}>
            <strong className="text-[#1c1b1b]">
              ¿Puedo ver una auditoría de la cuenta, no solo el reporte?
            </strong>{" "}
            Un buen diagnóstico te muestra el funnel completo, no únicamente los
            clics de la plataforma.
          </p>
          <p className={P} style={INTER}>
            <strong className="text-[#1c1b1b]">¿Qué modelo de atribución usan?</strong>{" "}
            Si la respuesta es «el último clic de la plataforma» y nada más,
            estás viendo el mundo tal como lo cuenta quien te cobra.
          </p>
          <p className={P} style={INTER}>
            Si esquivan las tres, ya tienes tu respuesta.
          </p>

          <h2 className={H2} style={MANROPE}>La conclusión</h2>
          <p className={P} style={INTER}>
            El tracking server-side no es un lujo técnico para empresas grandes:
            es el mínimo para saber si tu inversión publicitaria vale la pena.
            Cuando el píxel deja de mentir, por fin sabes qué está generando tus
            ventas y puedes escalar con datos que aguantan una auditoría.
          </p>
          <p className="text-[#424656] leading-relaxed mb-10 text-base" style={INTER}>
            En JT Ads vivimos este problema todos los días. Hacemos diagnóstico
            en vivo y gestión de paid media con tracking server-side honesto,
            sin jerga de plataforma: medimos leads que llegan a ventas, no
            conversiones infladas. Si el reporte que te muestran se ve demasiado
            bonito, es hora de mirar lo que el píxel te está escondiendo.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p className="text-[#1c1b1b] font-bold text-lg mb-3" style={MANROPE}>
              ¿Cuántas de tus conversiones están en el CRM?
            </p>
            <p className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed" style={INTER}>
              En el diagnóstico en vivo revisamos tu tracking actual, qué se
              está midiendo de verdad y qué está estimando la plataforma por ti
              — sin costo y sin compromiso.
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

      <section className="bg-[#0050cb] py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-4" style={MANROPE}>
            ¿Tu reporte se ve demasiado bonito?
          </h2>
          <p className="text-white/80 mb-8">
            En 60 minutos revisamos en vivo qué está midiendo tu tracking, qué
            está estimando la plataforma y cómo corregirlo.
          </p>
          <a href="/diagnostico-en-vivo" className="inline-block bg-white text-[#0050cb] font-bold px-8 py-4 rounded-sm hover:bg-[#f6f3f2] transition-colors">
            Solicitar diagnóstico gratuito
          </a>
        </div>
      </section>

      <section className="bg-[#fcf9f8] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#727687] mb-4">Lee también</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/blog/7-senales-de-que-tu-pixel-infla-tus-conversiones" className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow">
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Tracking Técnico</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">7 señales de que tu píxel está inflando tus conversiones</p>
            </a>
            <a href="/blog/tracking-server-side-cpl-plataforma" className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow">
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Tracking Técnico</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">Por qué el CPL de tu plataforma te está mintiendo</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
