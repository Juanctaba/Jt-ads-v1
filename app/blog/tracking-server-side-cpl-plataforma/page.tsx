import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { breadcrumb, faqPage, toJsonLd, absoluteUrl, type Crumb } from "@/lib/schema";

// La URL se conserva (tiene impresiones en GSC). El enfoque cambió en oct-2026:
// de "tracking server-side" a "CPL de plataforma vs CPL real" (mes3, tema 2).
const PATH = "/blog/tracking-server-side-cpl-plataforma";
const URL = absoluteUrl(PATH);
const TITLE = "CPL de plataforma vs CPL real: por qué Meta y Google no cuadran con tu CRM";
const SEO_TITLE = "CPL de plataforma vs CPL real: por qué no cuadra con tu CRM";
const DESC =
  "El CPL de Meta o Google divide el gasto entre lo que la plataforma se atribuye; el real, entre los leads válidos de tu CRM. Por qué no cuadran y cómo calcularlo.";

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: DESC,
  alternates: { canonical: URL, languages: { es: URL } },
  openGraph: {
    title: SEO_TITLE,
    description: DESC,
    images: ["/opengraph-image"],
    url: URL,
  },
};

const SOURCES = {
  googleModelos: "https://support.google.com/google-ads/answer/6259715?hl=es-419",
  googleVentanas: "https://support.google.com/google-ads/answer/3123169?hl=es-419",
  googleLeads: "https://support.google.com/google-ads/answer/11347292?hl=es-419",
  metaAtribucion: "https://www.facebook.com/business/help/460276478298895",
  metaDedup: "https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events",
  metaCrm: "https://developers.facebook.com/docs/marketing-api/conversions-api/conversion-leads-integration",
};

const crumbs: Crumb[] = [
  { name: "Inicio", path: "" },
  { name: "Blog", path: "/blog" },
  { name: "CPL de plataforma vs CPL real", path: PATH },
];

const faqs = [
  {
    q: "¿Qué es el CPL real?",
    a: "Es el gasto en pauta de un periodo dividido entre los leads de ese periodo que tu equipo comercial reconoce como válidos en el CRM. El CPL de plataforma divide el mismo gasto entre las conversiones que Meta o Google se atribuyen, que no son lo mismo.",
  },
  {
    q: "¿Por qué Meta reporta más leads que mi CRM?",
    a: "Porque cuenta eventos con sus propias reglas: puede acreditarse conversiones hasta 1 día después de que alguien vio un anuncio sin hacer clic, puede contar dos veces el mismo evento si el píxel y la API de Conversiones no se deduplican, y cuenta formularios que tu equipo luego descarta. Tu CRM cuenta personas que existen y que alguien revisó.",
  },
  {
    q: "¿Qué modelo de atribución usa Google Ads por defecto?",
    a: "Google indica que la atribución basada en datos es el modelo predeterminado para la mayoría de las acciones de conversión, y que ya no admite los modelos lineal, de primer clic, de decaimiento temporal y según la posición. El último clic sigue disponible.",
  },
  {
    q: "¿El tracking server-side arregla el CPL?",
    a: "Arregla una parte: recupera señales que el navegador pierde y te deja enviar a la plataforma datos que vienen del CRM. No convierte un lead basura en uno bueno ni decide por ti qué es un lead válido. Eso se define con ventas y se mide en el CRM.",
  },
  {
    q: "¿Cada cuánto conviene cuadrar el CPL de plataforma con el del CRM?",
    a: "Cada semana, con la misma tabla y el mismo criterio de lead válido. Lo que importa no es que los dos números coincidan, sino entender la diferencia y ver si cambia cuando cambias algo en la campaña o en el formulario.",
  },
];

const P = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-black text-2xl text-[#1c1b1b] mt-12 mb-4";
const H3 = "font-bold text-lg text-[#1c1b1b] mt-8 mb-3";
const INTER = { fontFamily: "Inter, sans-serif" };
const MANROPE = { fontFamily: "Manrope, sans-serif" };
const A = "text-[#0066ff] font-semibold hover:underline";

const causas = [
  {
    titulo: "Cuentan eventos, no leads válidos",
    detalle:
      "Para la plataforma, cada envío del formulario es una conversión. Eso incluye datos falsos, el mismo contacto que llenó el formulario dos veces, competidores mirando tu proceso y gente de un país donde no vendes. Tu equipo comercial descarta todo eso; la plataforma no se entera si nadie se lo dice.",
  },
  {
    titulo: "Atribución por visualización",
    detalle:
      "En Meta, la atribución estándar puede acreditar conversiones ocurridas hasta 1 día después de que alguien vio tu anuncio, aunque no haya hecho clic. Esa persona pudo llegar por Google, por un referido o escribiendo tu marca, y Meta igual cuenta el lead como suyo.",
  },
  {
    titulo: "Eventos duplicados entre píxel y API de Conversiones",
    detalle:
      "Si envías el mismo evento desde el navegador (píxel) y desde el servidor (API de Conversiones), Meta solo los deduplica cuando ambos llevan el mismo nombre de evento y el mismo identificador de evento. Sin ese identificador, un lead puede contarse dos veces.",
  },
  {
    titulo: "Ventanas de atribución distintas a tu ciclo de venta",
    detalle:
      "Cada plataforma cuenta solo lo que pasa dentro de su ventana. En Google Ads la ventana posclic predeterminada es de 30 días para Búsqueda y Display; en Meta eliges entre 1 y 7 días después del clic. Si tu cliente decide en tres semanas, una plataforma lo cuenta y la otra no.",
  },
  {
    titulo: "Las dos plataformas se adjudican la misma venta",
    detalle:
      "Meta solo ve los anuncios de Meta y Google solo ve los de Google. Si una persona tocó los dos, cada una puede acreditarse el mismo lead. Sumar los dos reportes te da más leads de los que entraron al CRM.",
  },
  {
    titulo: "Leads que pierden el origen en el camino",
    detalle:
      "Pasa al revés también: el lead que llega por WhatsApp o por llamada y nadie registra de qué anuncio vino aparece en el CRM como «directo» o «WhatsApp», sin campaña. Ahí el CRM le quita crédito a una campaña que sí trabajó.",
  },
];

export default function PostCplPlataformaVsReal() {
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
    datePublished: "2026-04-01",
    dateModified: "2026-10-04",
    image: "https://jtads.com/opengraph-image",
    url: URL,
    inLanguage: "es",
    about: ["CPL real", "Costo por lead", "Atribución publicitaria", "CRM", "Meta Ads", "Google Ads"],
    citation: Object.values(SOURCES),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumb(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqPage(faqs)) }} />
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
          <h1 className="font-black text-white text-3xl md:text-4xl leading-tight mb-6" style={MANROPE}>
            {TITLE}
          </h1>
          <p className="text-[#727687] text-sm" style={INTER}>
            Actualizado en octubre 2026 · 11 min de lectura
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <p className={P} style={INTER}>
            El CPL de plataforma es lo que gastaste dividido entre las conversiones que Meta o Google se
            atribuyen. El CPL real es lo que gastaste dividido entre los leads que tu equipo comercial reconoce
            como válidos en el CRM. No cuadran porque no cuentan lo mismo: la plataforma cuenta eventos con sus
            propias reglas de atribución, y el CRM cuenta personas que alguien revisó. Si decides presupuesto con
            el primer número, decides con la opinión de quien te vende los anuncios.
          </p>
          <p className={P} style={INTER}>
            La escena se repite en casi todas las revisiones de mes: marketing llega con el reporte del
            administrador de anuncios y ventas dice que los leads no sirven. Los dos tienen razón a medias. Aquí
            te explico por qué los números no coinciden, cómo calcular el CPL real sin herramientas raras y qué
            parte del problema se arregla con tracking y qué parte no.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[#424656] text-sm leading-relaxed" style={INTER}>
              <strong className="text-[#1c1b1b]">En una frase:</strong> el CPL de plataforma mide cuánto te
              cuesta que la plataforma registre un evento; el CPL real mide cuánto te cuesta un lead que tu
              equipo puede trabajar. El primero sirve para optimizar dentro de la plataforma. El segundo sirve
              para decidir cuánto invertir.
            </p>
          </div>

          {/* 1 */}
          <h2 className={H2} style={MANROPE}>
            CPL de plataforma vs CPL real: la diferencia en una frase
          </h2>
          <p className={P} style={INTER}>
            Las dos fórmulas tienen el mismo numerador: el gasto en pauta. Lo que cambia es el denominador.
          </p>
          <ul className="space-y-4 mb-8" style={INTER}>
            <li className="flex items-start gap-3">
              <span className="text-[#0066ff] font-bold mt-0.5">→</span>
              <div>
                <p className="text-[#1c1b1b] font-semibold text-sm mb-1">CPL de plataforma</p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Gasto ÷ conversiones que la plataforma se atribuye, según su modelo de atribución y su
                  ventana. Lo calcula Meta o Google y lo ves en el administrador de anuncios.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0066ff] font-bold mt-0.5">→</span>
              <div>
                <p className="text-[#1c1b1b] font-semibold text-sm mb-1">CPL real</p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Gasto ÷ leads válidos en el CRM que vienen de esa plataforma, en el mismo periodo. Lo calculas
                  tú, con un criterio de «lead válido» que acordaste con ventas.
                </p>
              </div>
            </li>
          </ul>
          <p className={P} style={INTER}>
            Ninguno de los dos es «el verdadero» en abstracto. El de plataforma es el que el algoritmo usa para
            aprender; el real es el que paga la nómina. El problema aparece cuando el reporte mensual solo trae
            el primero y alguien decide subir presupuesto con él.
          </p>

          {/* 2 */}
          <h2 className={H2} style={MANROPE}>
            6 razones por las que Meta o Google reportan más leads que tu CRM
          </h2>
          <p className={P} style={INTER}>
            Casi nunca es una sola causa. En una misma cuenta suelen convivir varias, y cada una empuja el número
            hacia un lado distinto.
          </p>
          <ol className="space-y-6 mb-8" style={INTER}>
            {causas.map((c, i) => (
              <li key={c.titulo} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c1b1b] text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[#1c1b1b] font-bold text-sm mb-1">{c.titulo}</p>
                  <p className="text-[#424656] text-sm leading-relaxed">{c.detalle}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={P} style={INTER}>
            Y si además miras GA4, tienes una tercera fuente que tampoco va a coincidir con ninguna de las dos
            plataformas ni con el CRM, porque usa sus propias reglas. No es un error de nadie: son tres sistemas
            midiendo cosas distintas. El CRM es el único que sabe si el lead existía y si compró.
          </p>
          <p className={P} style={INTER}>
            Si sospechas que el problema es sobre todo de medición (eventos que se disparan dos veces, páginas
            de gracias que se recargan), revisa antes las{" "}
            <Link href="/blog/7-senales-de-que-tu-pixel-infla-tus-conversiones" className={A}>
              7 señales de que tu píxel está inflando tus conversiones
            </Link>
            . Si el problema es que los formularios llegan llenos de datos que no sirven, eso tiene su propio
            arreglo:{" "}
            <Link href="/blog/leads-basura-meta-ads" className={A}>
              cómo filtrar los leads basura en Meta Ads
            </Link>
            .
          </p>

          {/* 3 */}
          <h2 className={H2} style={MANROPE}>
            Ventanas y modelos de atribución: por qué Meta y Google se adjudican la misma venta
          </h2>
          <p className={P} style={INTER}>
            La atribución es la regla que decide qué anuncio se queda con el crédito de una conversión. Cada
            plataforma tiene la suya, y ninguna ve lo que hizo la otra.
          </p>
          <h3 className={H3} style={MANROPE}>
            Google Ads
          </h3>
          <p className={P} style={INTER}>
            Google explica que la atribución basada en datos es el modelo predeterminado para la mayoría de las
            acciones de conversión: reparte el crédito entre los clics según los datos de tu cuenta. También
            avisa que ya no admite los modelos lineal, de primer clic, de decaimiento temporal y según la
            posición; el último clic sigue disponible (
            <a href={SOURCES.googleModelos} target="_blank" rel="noopener noreferrer" className={A}>
              Ayuda de Google Ads: modelos de atribución
            </a>
            ). La ventana posclic predeterminada es de 30 días para Búsqueda y Display, y se puede ajustar por
            acción de conversión (
            <a href={SOURCES.googleVentanas} target="_blank" rel="noopener noreferrer" className={A}>
              Ayuda de Google Ads: ventanas de conversión
            </a>
            ).
          </p>
          <h3 className={H3} style={MANROPE}>
            Meta Ads
          </h3>
          <p className={P} style={INTER}>
            En Meta eliges el modelo en cada conjunto de anuncios: estándar o incremental. Con el estándar,
            defines qué cuenta: conversiones hasta 1 o 7 días después de un clic en el enlace, hasta 1 día
            después de ver el anuncio y hasta 1 día después de una interacción que no es clic en el enlace. Meta
            advierte que no se deben comparar resultados entre conjuntos con modelos distintos (
            <a href={SOURCES.metaAtribucion} target="_blank" rel="noopener noreferrer" className={A}>
              Meta Business Help: modelos y configuración de atribución
            </a>
            ).
          </p>
          <p className={P} style={INTER}>
            Pon las dos cosas juntas. Una persona ve un Reel el lunes, busca tu marca en Google el martes, hace
            clic en tu anuncio de búsqueda y llena el formulario. Meta puede contarlo por la visualización y
            Google por el clic. En tu CRM hay un solo lead. Por eso sumar los reportes de las dos plataformas
            casi siempre da más leads de los que existen, y por eso el CPL real se calcula desde el CRM hacia
            afuera, no sumando reportes.
          </p>
          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[#424656] text-sm leading-relaxed" style={INTER}>
              <strong className="text-[#1c1b1b]">Qué hacer con esto:</strong> no busques el modelo de
              atribución «correcto». Deja cada plataforma con la configuración que le sirve para optimizar,
              anota cuál es, y toma las decisiones de presupuesto con el origen que registró el CRM.
            </p>
          </div>

          {/* 4 */}
          <h2 className={H2} style={MANROPE}>
            Cómo calcular tu CPL real (gasto ÷ leads válidos del CRM)
          </h2>
          <p className={P} style={INTER}>
            No necesitas un software de atribución para empezar. Necesitas cuatro cosas y disciplina semanal.
          </p>
          <ol className="space-y-6 mb-8" style={INTER}>
            {[
              {
                t: "Define «lead válido» con ventas, por escrito",
                d: "Por ejemplo: teléfono que contesta, está en un país donde vendes y tiene el problema que resuelves. Sin esa definición, cada quien cuenta lo que le conviene.",
              },
              {
                t: "Guarda el origen de cada lead en el CRM",
                d: "Fuente, campaña y, cuando exista, el identificador del clic o del lead: el GCLID de Google o el ID de lead de Meta. Si el lead llega por WhatsApp, alguien o algo tiene que registrar de qué anuncio vino.",
              },
              {
                t: "Agrupa por fecha de creación del lead (cohorte)",
                d: "Compara el gasto de la semana con los leads creados esa semana, no con los que se calificaron esa semana. Si mezclas fechas, el CPL real sube y baja sin que nada haya cambiado.",
              },
              {
                t: "Divide gasto entre leads válidos, por plataforma y por campaña",
                d: "El gasto lo sacas del administrador de anuncios; los leads válidos, del CRM. El cociente es tu CPL real. Ponlo al lado del CPL de plataforma en la misma tabla.",
              },
            ].map((s, i) => (
              <li key={s.t} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c1b1b] text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[#1c1b1b] font-bold text-sm mb-1">{s.t}</p>
                  <p className="text-[#424656] text-sm leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={P} style={INTER}>
            Si tu formulario de Meta no crea una oportunidad con responsable en el CRM, no vas a poder contar
            leads válidos porque nadie los revisa a tiempo. Ese es el primer arreglo, antes que cualquier
            reporte:{" "}
            <Link href="/sistema" className={A}>
              el flujo form → oportunidad + responsable
            </Link>
            .
          </p>

          {/* 5 */}
          <h2 className={H2} style={MANROPE}>
            Cuánta diferencia es normal y cuándo es un problema
          </h2>
          <p className={P} style={INTER}>
            No te voy a dar un porcentaje «normal», porque depende de tu formulario, de tu sector, de tu criterio
            de lead válido y de cómo está montada la medición. Un número genérico solo sirve para tranquilizar a
            alguien. Lo que sí te puedo dar es el criterio para leer la diferencia:
          </p>
          <ul className="space-y-2 mb-6 pl-4" style={INTER}>
            {[
              "Una diferencia estable semana a semana es una característica de tu cuenta: la conoces y decides con ella.",
              "Una diferencia que crece después de cambiar el formulario, la oferta o el objetivo de campaña es una alarma: ese cambio está trayendo volumen que no sirve.",
              "Una campaña con CPL de plataforma bajo y CPL real alto es la que primero hay que revisar, aunque en el administrador se vea como la mejor.",
              "Si el CRM muestra más leads de una plataforma que la propia plataforma, revisa la medición: probablemente se están perdiendo eventos en el navegador.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#424656] text-sm leading-relaxed">
                <span className="text-[#727687] mt-0.5">–</span>
                {item}
              </li>
            ))}
          </ul>

          {/* 6 */}
          <h2 className={H2} style={MANROPE}>
            Qué se corrige con tracking server-side y qué no
          </h2>
          <p className={P} style={INTER}>
            El tracking server-side envía los eventos desde tu servidor en lugar de depender solo del navegador.
            Te sirve para dos cosas concretas: recuperar señales que el navegador pierde (bloqueadores,
            restricciones de cookies) y mandarle a la plataforma datos que salen del CRM. Si quieres entender
            cómo funciona sin jerga, está en{" "}
            <Link href="/blog/tracking-server-side-que-es-por-que-pixel-miente" className={A}>
              qué es el tracking server-side y por qué tu píxel miente
            </Link>
            .
          </p>
          <p className={P} style={INTER}>
            Lo que no hace: no convierte un lead basura en uno bueno, no decide qué es un lead válido y no evita
            que dos plataformas se adjudiquen la misma venta. Tampoco arregla la duplicación por sí solo: si
            mandas el mismo evento por píxel y por API de Conversiones, Meta pide que ambos lleven el mismo
            nombre y el mismo identificador de evento para deduplicarlos (
            <a href={SOURCES.metaDedup} target="_blank" rel="noopener noreferrer" className={A}>
              documentación de Meta sobre deduplicación
            </a>
            ). Server-side bien montado mejora la señal; mal montado, duplica.
          </p>

          {/* 7 */}
          <h2 className={H2} style={MANROPE}>
            Devolver la calidad a la plataforma: etapas del CRM hacia Meta y Google
          </h2>
          <p className={P} style={INTER}>
            Aquí está la parte que cambia resultados, no solo reportes. Si la plataforma solo recibe «se llenó un
            formulario», optimiza para conseguir más formularios, sirvan o no. Si recibe «este lead se calificó»
            o «este lead compró», puede buscar más gente parecida a esa.
          </p>
          <ul className="space-y-4 mb-8" style={INTER}>
            <li className="flex items-start gap-3">
              <span className="text-[#0066ff] font-bold mt-0.5">→</span>
              <div>
                <p className="text-[#1c1b1b] font-semibold text-sm mb-1">Meta: integración del CRM con la API de Conversiones</p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Para formularios instantáneos, Meta documenta cómo enviar desde el CRM cada etapa del lead
                  (calificado, oportunidad, venta) con el ID de lead que Meta generó. Recomienda tener ese ID
                  guardado en el CRM, enviar datos al menos una vez al día y que la etapa por la que quieres
                  optimizar ocurra dentro de los 28 días posteriores al lead (
                  <a href={SOURCES.metaCrm} target="_blank" rel="noopener noreferrer" className={A}>
                    API de Conversiones para CRM
                  </a>
                  ).
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0066ff] font-bold mt-0.5">→</span>
              <div>
                <p className="text-[#1c1b1b] font-semibold text-sm mb-1">Google: conversiones avanzadas de clientes potenciales</p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Google describe las conversiones avanzadas de clientes potenciales como una versión
                  actualizada de la importación de conversiones sin conexión, que usa datos del formulario con
                  codificación hash para atribuir las ventas del CRM. En la misma página llama a la importación
                  de conversiones sin conexión una «función heredada» (
                  <a href={SOURCES.googleLeads} target="_blank" rel="noopener noreferrer" className={A}>
                    Ayuda de Google Ads: conversiones avanzadas de clientes potenciales
                  </a>
                  ).
                </p>
              </div>
            </li>
          </ul>
          <p className={P} style={INTER}>
            Este es el trabajo que hacemos al conectar el CRM con las campañas, tanto en{" "}
            <Link href="/agencia-meta-ads-latam" className={A}>
              Meta Ads (Facebook e Instagram)
            </Link>{" "}
            como en{" "}
            <Link href="/agencia-google-ads-latam" className={A}>
              Google Ads
            </Link>
            . Si tu CRM es HubSpot, así se ve la{" "}
            <Link href="/soluciones/hubspot" className={A}>
              implementación de HubSpot conectada a Google Ads y Meta
            </Link>
            .
          </p>

          {/* 8 */}
          <h2 className={H2} style={MANROPE}>
            Del CPL real al CAC real
          </h2>
          <p className={P} style={INTER}>
            El CPL real es la mitad del camino. Un lead válido todavía no es un cliente. La pregunta que decide
            si la pauta es negocio es cuánto te cuesta un cliente nuevo: el CAC.
          </p>
          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[#424656] text-sm leading-relaxed" style={INTER}>
              <strong className="text-[#1c1b1b]">CAC real</strong> = (pauta + fee de gestión + producción
              creativa + herramientas + el costo del equipo comercial que atiende esos leads) ÷ clientes nuevos
              del periodo que vinieron de esos canales.
            </p>
          </div>
          <p className={P} style={INTER}>
            Dos campañas con el mismo CPL real pueden tener CAC muy distintos si una trae leads que cierran y la
            otra trae leads que se calientan y se enfrían. Por eso el mismo CRM que te da el CPL real tiene que
            registrar quién compró y de dónde vino. Con eso dejas de discutir el CPL y empiezas a discutir cuánto
            puedes pagar por un cliente.
          </p>

          {/* FAQ */}
          <h2 className="font-black text-2xl text-[#1c1b1b] mt-12 mb-6" style={MANROPE}>
            Preguntas frecuentes
          </h2>
          <div className="space-y-4 mb-10">
            {faqs.map((f) => (
              <div key={f.q} className="border border-[#c2c6d8]/20 rounded-xl overflow-hidden">
                <div className="bg-[#f6f3f2] px-6 py-4">
                  <p className="font-bold text-sm text-[#1c1b1b]" style={MANROPE}>
                    {f.q}
                  </p>
                </div>
                <div className="px-6 py-4">
                  <p className="text-sm text-[#424656] leading-relaxed" style={INTER}>
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#727687] leading-relaxed mb-10">
            Fuentes revisadas el 4 de octubre de 2026:{" "}
            <a href={SOURCES.googleModelos} target="_blank" rel="noopener noreferrer" className={A}>modelos de atribución</a>,{" "}
            <a href={SOURCES.googleVentanas} target="_blank" rel="noopener noreferrer" className={A}>ventanas de conversión</a> y{" "}
            <a href={SOURCES.googleLeads} target="_blank" rel="noopener noreferrer" className={A}>conversiones avanzadas de clientes potenciales</a>{" "}
            (Ayuda de Google Ads);{" "}
            <a href={SOURCES.metaAtribucion} target="_blank" rel="noopener noreferrer" className={A}>configuración de atribución</a>,{" "}
            <a href={SOURCES.metaDedup} target="_blank" rel="noopener noreferrer" className={A}>deduplicación de eventos</a> y{" "}
            <a href={SOURCES.metaCrm} target="_blank" rel="noopener noreferrer" className={A}>API de Conversiones para CRM</a> (Meta).
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p className="text-[#1c1b1b] font-bold text-lg mb-3" style={MANROPE}>
              ¿Cuál es tu CPL real?
            </p>
            <p className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed" style={INTER}>
              En el diagnóstico en vivo ponemos tu administrador de anuncios al lado de tu CRM y te mostramos de
              dónde sale la diferencia: atribución, duplicados, formularios o leads sin origen.
            </p>
            <Link
              href="/diagnostico-en-vivo"
              data-cta="diag-envivo-cpl-real-final"
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
            ¿Tu reporte trae el CPL de la plataforma o el de tu CRM?
          </h2>
          <p className="text-white/80 mb-8">
            En 60 minutos revisamos en vivo tu medición, tu atribución y qué le estás devolviendo a Meta y a Google.
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
            <a href="/blog/leads-basura-meta-ads" className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow">
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Meta Ads</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">Leads basura en Meta Ads: cómo filtrarlos antes, durante y después del formulario</p>
            </a>
            <a href="/blog/tracking-server-side-que-es-por-que-pixel-miente" className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow">
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Tracking Técnico</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">Tracking server-side para principiantes: qué es y por qué tu píxel miente</p>
            </a>
            <a href="/agencia-meta-ads-latam" className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow">
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Servicios</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">Agencia de Meta Ads para LATAM: cómo trabajamos</p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
