import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { breadcrumb, faqPage, toJsonLd, absoluteUrl, type Crumb } from "@/lib/schema";

const PATH = "/blog/cuanto-cobra-agencia-meta-ads-latam";
const URL = absoluteUrl(PATH);
const TITLE = "¿Cuánto cobra una agencia de Meta Ads en LATAM? De qué depende el precio, país por país";
const SEO_TITLE = "¿Cuánto cobra una agencia de Meta Ads en LATAM? De qué depende";
const DESC =
  "Lo que cobra una agencia de Meta Ads depende de la complejidad de tu cuenta, no de una tabla. Qué mueve el fee, qué pagas a Meta y qué cambia por país.";

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


// Fuentes oficiales de Meta para los datos por país (moneda, impuestos).
const SOURCES = {
  moneda: "https://www.facebook.com/business/help/291404291014138",
  impuestos: "https://www.facebook.com/business/help/133076073434794",
  peru: "https://www.facebook.com/business/help/1531360224148782",
  argentina: "https://www.facebook.com/business/help/261010294920208",
};

const crumbs: Crumb[] = [
  { name: "Inicio", path: "" },
  { name: "Blog", path: "/blog" },
  { name: "¿Cuánto cobra una agencia de Meta Ads?", path: PATH },
];

const faqs = [
  {
    q: "¿Cuánto cobra una agencia de Meta Ads en LATAM?",
    a: "No hay un precio único. El fee de gestión depende de los requerimientos y la complejidad de cada cuenta: cuántas plataformas y países se manejan, cuántos creativos nuevos se necesitan al mes y si hay que conectar o montar el CRM y el tracking. La pauta es aparte y se paga directo a Meta.",
  },
  {
    q: "¿La pauta se le paga a la agencia o a Meta?",
    a: "Con JT Ads, la pagas tú directamente a Meta con tu propio método de pago. La inversión en medios no pasa por nosotros: lo que nos pagas es el fee de gestión.",
  },
  {
    q: "¿A nombre de quién queda la cuenta publicitaria?",
    a: "A tu nombre. La cuenta publicitaria queda a nombre del cliente, no de la agencia. Si un día cambias de proveedor, el historial y los píxeles siguen siendo tuyos.",
  },
  {
    q: "¿Los creativos están incluidos en el fee?",
    a: "Depende de cada agencia, y es la primera pregunta que hay que hacer. En Meta el creativo pesa mucho en el resultado, así que el volumen de piezas nuevas al mes es uno de los factores que más mueve el fee. Pide que te lo pongan por escrito.",
  },
  {
    q: "¿Cuánto tarda en verse el CPL real?",
    a: "Se puede calcular desde la primera semana en que el CRM registra de dónde vino cada lead y si es válido. Lo que toma más tiempo es juntar suficiente volumen para comparar campañas entre sí con confianza.",
  },
  {
    q: "¿Qué cambia por país al pagar Meta Ads?",
    a: "La moneda, los métodos de pago disponibles, los impuestos que Meta agrega a la factura y la zona horaria de la cuenta. Por ejemplo, Meta agrega IVA en Colombia si no registras tu NIT ni indicas el régimen común de IVA, en Chile si no registras tu RUT y en Perú si no registras tu RUC. Cambiar la moneda o la zona horaria después crea una cuenta publicitaria nueva.",
  },
];

const P_ = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-bold text-2xl text-[#1c1b1b] mt-12 mb-4";
const H3 = "font-bold text-lg text-[#1c1b1b] mt-8 mb-3";
const A = "text-[#0066ff] font-semibold hover:underline";

const factores = [
  {
    factor: "Plataformas y países",
    detalle: "Solo Meta o Meta junto con Google y LinkedIn; un país o varios, con monedas, horarios y ofertas distintas.",
  },
  {
    factor: "Objetivo de la campaña",
    detalle: "Formularios instantáneos, mensajes a WhatsApp o ventas en el sitio piden estructuras y mediciones distintas.",
  },
  {
    factor: "Volumen creativo",
    detalle: "Cuántas piezas nuevas al mes (video vertical, carruseles, estáticos) y quién las produce.",
  },
  {
    factor: "CRM",
    detalle: "Si ya existe y recibe los leads con su origen, o si hay que conectarlo o montarlo desde cero.",
  },
  {
    factor: "Tracking",
    detalle: "Estado del píxel y de la API de Conversiones: si se revisa, se corrige o se monta.",
  },
  {
    factor: "Reportes",
    detalle: "Si el reporte trae solo el CPL de la plataforma o también el CPL real del CRM.",
  },
];

const preguntas = [
  "¿La cuenta publicitaria queda a mi nombre y con acceso de administrador para mí?",
  "¿La pauta la pago yo directo a Meta, o pasa por la agencia?",
  "¿Qué incluye exactamente el fee y qué se cobra aparte (creativos, landing, CRM, tracking)?",
  "¿Cuántas piezas creativas nuevas al mes incluye la propuesta?",
  "¿El reporte trae el CPL de la plataforma o el CPL real del CRM?",
  "¿Quién va a operar mi cuenta día a día y con quién hablo yo?",
  "¿Qué pasa si quiero terminar: cómo salgo y qué me llevo?",
];

export default function PostCuantoCobraMeta() {
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
    datePublished: "2026-10-04",
    dateModified: "2026-10-04",
    image: "https://jtads.com/opengraph-image",
    url: URL,
    inLanguage: "es",
    about: ["Meta Ads", "Facebook Ads", "Instagram Ads", "Agencia de publicidad", "Precios de agencia"],
    citation: Object.values(SOURCES),
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
            Precios &amp; Contratación
          </span>
          <h1 className="font-bold text-white text-3xl md:text-4xl leading-tight mb-6">{TITLE}</h1>
          <p className="text-[#727687] text-sm">Octubre 2026 · 10 min de lectura</p>
        </div>
      </section>

      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <p className={P_}>
            Lo que cobra una agencia de Meta Ads en LATAM no sale de una tabla: el fee de gestión depende de los
            requerimientos y la complejidad de tu cuenta. Cuántas plataformas y países se manejan, cuántos
            creativos nuevos necesitas al mes y si hay que conectar el CRM y el tracking. La pauta es otra
            cuenta: la pagas tú directo a Meta, con la cuenta publicitaria a tu nombre. Por eso no te voy a tirar
            un rango inventado. Te voy a explicar qué mueve el precio para que puedas comparar dos cotizaciones
            sin que te vendan humo.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">En resumen</p>
            <p className="text-[#424656] text-sm leading-relaxed">
              <strong className="text-[#1c1b1b]">
                Contratar Meta Ads implica tres costos distintos: el fee de gestión de la agencia, la pauta que
                le pagas a Meta y la producción creativa.
              </strong>{" "}
              El fee depende de la complejidad de la cuenta, no del país en el que estés. Lo que sí cambia por
              país es la moneda, los métodos de pago, los impuestos que Meta agrega a la factura y la zona
              horaria de la cuenta. Así es como trabajamos en nuestra{" "}
              <Link href="/agencia-meta-ads-latam" className={A}>
                agencia de Meta Ads para LATAM
              </Link>
              .
            </p>
          </div>

          <h2 className={H2}>Respuesta corta: de qué depende lo que cobra una agencia de Meta Ads</h2>
          <p className={P_}>
            Busca «cuánto cobra una agencia de Facebook Ads» y vas a encontrar tablas por país sin fuente, que
            mezclan fee, pauta y diseño en un solo número. Esas tablas no te sirven para decidir, porque dos
            cuentas en la misma ciudad pueden necesitar trabajos que no se parecen en nada.
          </p>
          <p className={P_}>
            Una tienda que vende un producto en un país, con creativos propios y un CRM que ya recibe los leads,
            pide un trabajo. Una empresa de servicios que pauta en tres países, necesita video vertical nuevo
            cada semana, recibe leads por formulario y por WhatsApp y todavía no tiene CRM, pide otro. Las dos
            «hacen Meta Ads». El fee no puede ser el mismo, y una agencia que te da precio sin preguntar nada de
            esto te está cotizando a ciegas.
          </p>

          <h2 className={H2}>Fee, pauta y creativos: tres cuentas que no se deben mezclar</h2>
          <p className={P_}>
            Antes de comparar cifras, separa las tres cosas que estás pagando. Cuando una propuesta las junta,
            no puedes saber cuánto es trabajo y cuánto es medio.
          </p>
          <h3 className={H3}>1. Fee de gestión</h3>
          <p className={P_}>
            Es lo que le pagas a la agencia por operar la cuenta: estrategia, estructura de campañas,
            optimización, lectura de datos y reportes. Es la única de las tres cuentas que es ingreso de la
            agencia.
          </p>
          <h3 className={H3}>2. Pauta</h3>
          <p className={P_}>
            Es lo que Meta te cobra por mostrar los anuncios. Con JT Ads la pagas tú directamente a Meta, con tu
            tarjeta o método de pago, en una cuenta publicitaria a tu nombre. Así ves cada peso que se gasta y
            nadie te revende medios con un margen escondido.
          </p>
          <h3 className={H3}>3. Producción creativa</h3>
          <p className={P_}>
            Videos, Reels, carruseles y estáticos. En Meta el creativo hace buena parte del trabajo de
            segmentación, así que no es un detalle: hay que saber cuántas piezas nuevas entran al mes, en qué
            formatos y quién las produce. Algunas agencias lo incluyen, otras lo cobran aparte y otras esperan
            que tú lo entregues.
          </p>

          <h2 className={H2}>Qué sube o baja la complejidad de una cuenta de Meta Ads</h2>
          <p className={P_}>
            Estos son los factores que reviso antes de proponer un fee. Si una agencia no te pregunta por ellos,
            no sabe qué te está cotizando.
          </p>
          <div className="overflow-x-auto rounded-xl border border-[#c2c6d8]/15 my-8">
            <table className="w-full min-w-[480px] text-left border-collapse">
              <thead>
                <tr className="bg-[#f6f3f2]">
                  <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Factor</th>
                  <th scope="col" className="p-4 text-xs font-bold uppercase tracking-wider text-[#424656]">Qué se mira</th>
                </tr>
              </thead>
              <tbody>
                {factores.map((f) => (
                  <tr key={f.factor} className="border-t border-[#c2c6d8]/15">
                    <th scope="row" className="p-4 text-sm font-medium text-[#1c1b1b]">{f.factor}</th>
                    <td className="p-4 text-sm text-[#424656]">{f.detalle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={P_}>
            Los dos últimos factores son los que más se esconden en las propuestas baratas. Si nadie revisa el
            píxel ni conecta el CRM, la agencia te va a reportar el CPL que muestra Meta, y ese número casi
            nunca coincide con los leads que tu equipo puede trabajar. Lo explico a fondo en{" "}
            <Link href="/blog/tracking-server-side-cpl-plataforma" className={A}>
              CPL de plataforma vs CPL real
            </Link>
            . Un fee barato que te reporta CPL de plataforma sale caro.
          </p>

          <h2 className={H2}>Modelos de cobro y la trampa de cada uno en Meta</h2>
          <p className={P_}>
            Hay tres formas comunes de cobrar la gestión. Ninguna es mala por sí misma; cada una tiene un
            incentivo que conviene conocer.
          </p>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">Fee fijo mensual.</strong> Un monto acordado según el alcance
            del trabajo. Es el más predecible para ti. La trampa: si el alcance no está escrito (cuántas
            campañas, cuántos creativos, qué reportes), el servicio se encoge sin que el precio cambie.
          </p>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">Porcentaje de la pauta.</strong> La agencia cobra una parte de lo
            que gastas en Meta. La trampa: a la agencia le conviene que gastes más, no que gastes mejor. En
            Meta, donde subir presupuesto es un clic, ese incentivo se nota rápido.
          </p>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">Por resultado.</strong> Se cobra por lead o por venta. Suena
            justo, pero la pregunta es quién cuenta los resultados. Si se cuentan con el administrador de
            anuncios, la agencia cobra por leads que Meta se atribuye, sirvan o no. Solo funciona si el resultado
            se mide en tu CRM y con un criterio acordado.
          </p>
          <p className={P_}>
            En JT Ads el fee depende de los requerimientos y la complejidad de cada cuenta, y la pauta no pasa
            por nosotros. Si quieres ver el mismo análisis del lado de Google, está en{" "}
            <Link href="/blog/cuanto-cobra-agencia-google-ads-latam" className={A}>
              cuánto cobra una agencia de Google Ads en LATAM
            </Link>
            .
          </p>

          <h2 className={H2}>¿Freelancer, trafficker o agencia? Qué cambia en lo que pagas</h2>
          <p className={P_}>
            «Trafficker digital» es como se le dice en buena parte de LATAM a quien opera la pauta. Lo que
            cambia entre un trafficker independiente, un freelancer y una agencia no es el título; es cuánto del
            trabajo queda cubierto y quién responde si algo se rompe.
          </p>
          <ul className="space-y-2 mb-6 pl-4">
            {[
              "Un trafficker o freelancer suele cubrir la operación de campañas. Creativos, tracking y CRM quedan en tus manos o en otros proveedores.",
              "Una agencia suele juntar operación, estrategia y, según el caso, creativos, tracking y CRM. Pagas por más alcance y por tener un solo responsable.",
              "En los dos casos, las mismas preguntas aplican: de quién es la cuenta, quién paga la pauta y qué se reporta.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#424656] text-sm leading-relaxed">
                <span className="text-[#727687] mt-0.5">–</span>
                {item}
              </li>
            ))}
          </ul>
          <p className={P_}>
            Lo caro no es elegir uno u otro. Lo caro es contratar operación de campañas cuando lo que te falta
            es que el lead llegue al CRM con responsable y alguien lo llame a tiempo. Eso no lo arregla ningún
            trafficker:{" "}
            <Link href="/sistema" className={A}>
              es el flujo form → oportunidad + responsable
            </Link>
            .
          </p>

          <h2 className={H2}>Qué cambia por país: moneda, impuestos y zona horaria</h2>
          <p className={P_}>
            El fee no depende del país. Lo que sí depende del país es cómo te factura Meta la pauta. Esto es lo
            que publica Meta en su centro de ayuda; revísalo con tu contador antes de lanzar, porque la
            obligación fiscal es tuya y no de la agencia.
          </p>
          <p className={P_}>
            <strong className="text-[#1c1b1b]">En todos los países:</strong> los métodos de pago disponibles
            dependen de la moneda que elijas para la cuenta publicitaria. Cambiar la moneda o la zona horaria
            después no edita la cuenta: Meta crea una cuenta nueva, cierra la anterior y sus anuncios dejan de
            correr. Solo se permite una vez cada 60 días y sin saldo pendiente, y si pagas con facturación
            mensual no se puede cambiar la moneda una vez creada la cuenta (
            <a href={SOURCES.moneda} target="_blank" rel="noopener noreferrer" className={A}>
              Meta Business Help: cambiar la moneda
            </a>
            ). Por eso conviene crearla desde el inicio en la moneda con la que vas a pagar y en la zona horaria
            donde opera tu equipo comercial.
          </p>

          <h3 className={H3}>México</h3>
          <p className={P_}>
            Meta indica que, desde febrero de 2020, si la entidad que vende en tu recibo es Facebook México y tu
            dirección de facturación está en México, agrega IVA a la tasa local, sin importar si estás
            registrado ante el SAT (
            <a href={SOURCES.impuestos} target="_blank" rel="noopener noreferrer" className={A}>
              impuestos sobre anuncios de Meta
            </a>
            ). Zona horaria: Ciudad de México está en UTC-6 todo el año.
          </p>

          <h3 className={H3}>Colombia</h3>
          <p className={P_}>
            Desde diciembre de 2018, si tu dirección de facturación está en Colombia y no agregaste tu NIT a la
            cuenta publicitaria ni indicaste que perteneces al régimen común de IVA, Meta agrega IVA a la tasa local (
            <a href={SOURCES.impuestos} target="_blank" rel="noopener noreferrer" className={A}>
              impuestos sobre anuncios de Meta
            </a>
            ). Zona horaria: Bogotá, UTC-5.
          </p>

          <h3 className={H3}>Chile</h3>
          <p className={P_}>
            Desde julio de 2020, si tu dirección de facturación está en Chile y no agregaste tu RUT a la cuenta
            publicitaria, Meta agrega IVA a la tasa local (
            <a href={SOURCES.impuestos} target="_blank" rel="noopener noreferrer" className={A}>
              impuestos sobre anuncios de Meta
            </a>
            ). Zona horaria: Santiago cambia de hora durante el año, así que revisa que los horarios de tus
            anuncios y de tu equipo coincidan después de cada cambio.
          </p>

          <h3 className={H3}>Perú</h3>
          <p className={P_}>
            Desde el 1 de diciembre de 2024, los anuncios de Meta en Perú llevan IVA a la tasa local si tu país
            de facturación es Perú y no agregaste tu RUC de 11 dígitos. Si lo agregas, Meta no suma el impuesto
            y tú quedas a cargo de autoliquidarlo (
            <a href={SOURCES.peru} target="_blank" rel="noopener noreferrer" className={A}>
              Meta Business Help: IVA en Perú
            </a>
            ). Zona horaria: Lima, UTC-5.
          </p>

          <h3 className={H3}>Argentina</h3>
          <p className={P_}>
            Desde mayo de 2018, si estás en Argentina y compras anuncios a Meta Platforms Ireland, un
            intermediario financiero agrega IVA a la tasa local cada vez que se te cobra, y Meta advierte que
            ese intermediario también puede cobrar otros impuestos aplicables (
            <a href={SOURCES.argentina} target="_blank" rel="noopener noreferrer" className={A}>
              Meta Business Help: IVA en Argentina
            </a>
            ). Zona horaria: Buenos Aires, UTC-3.
          </p>

          <h3 className={H3}>Estados Unidos (mercado hispano)</h3>
          <p className={P_}>
            Elige la moneda con la que vas a pagar. La mayoría de las ciudades de Estados Unidos cambian de
            hora durante el año y el país tiene varias zonas horarias, así que elige la de tu equipo comercial,
            no la de tu audiencia. Los impuestos dependen de tu ubicación: revisa la página de{" "}
            <a href={SOURCES.impuestos} target="_blank" rel="noopener noreferrer" className={A}>
              impuestos sobre anuncios de Meta
            </a>{" "}
            con tu contador.
          </p>
          <p className={P_}>
            Si además pautas en Google, tenemos páginas por país con lo que cambia en cada mercado:{" "}
            <Link href="/agencia-google-ads-mexico" className={A}>México</Link>,{" "}
            <Link href="/agencia-google-ads-colombia" className={A}>Colombia</Link>,{" "}
            <Link href="/agencia-google-ads-chile" className={A}>Chile</Link>,{" "}
            <Link href="/agencia-google-ads-argentina" className={A}>Argentina</Link> y{" "}
            <Link href="/agencia-google-ads-usa" className={A}>Estados Unidos</Link>.
          </p>

          <h2 className={H2}>7 preguntas para comparar dos cotizaciones de Meta Ads</h2>
          <p className={P_}>
            Pon las dos propuestas lado a lado y hazle estas preguntas a cada una. Si alguna respuesta es vaga,
            ahí está la diferencia de precio.
          </p>
          <ol className="space-y-3 mb-8">
            {preguntas.map((q, i) => (
              <li key={q} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066ff] text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-[#424656] text-sm leading-relaxed pt-1.5">{q}</span>
              </li>
            ))}
          </ol>
          <p className={P_}>
            Las dos primeras no son negociables. Si la cuenta queda a nombre de la agencia o la pauta pasa por
            ella sin que veas la factura de Meta, el día que quieras irte vas a perder historial, píxel y
            audiencias. Con JT Ads la cuenta es tuya y la pauta la pagas tú.
          </p>

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

          <p className="text-xs text-[#727687] leading-relaxed mb-10">
            Datos por país revisados el 4 de octubre de 2026 en el centro de ayuda de Meta:{" "}
            <a href={SOURCES.moneda} target="_blank" rel="noopener noreferrer" className={A}>cambiar la moneda</a>,{" "}
            <a href={SOURCES.impuestos} target="_blank" rel="noopener noreferrer" className={A}>impuestos sobre anuncios</a>,{" "}
            <a href={SOURCES.peru} target="_blank" rel="noopener noreferrer" className={A}>IVA en Perú</a> e{" "}
            <a href={SOURCES.argentina} target="_blank" rel="noopener noreferrer" className={A}>IVA en Argentina</a>.
            No es asesoría fiscal.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p className="text-[#1c1b1b] font-bold text-lg mb-3">¿Qué necesita tu cuenta de Meta?</p>
            <p className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed">
              En el diagnóstico en vivo revisamos tu cuenta, tu tracking y tu CRM. Sales sabiendo qué trabajo
              necesita tu cuenta, lo hagas con nosotros, con otra agencia o con tu equipo.
            </p>
            <Link
              href="/diagnostico-en-vivo"
              data-cta="diag-envivo-cuanto-cobra-meta-final"
              className="inline-block bg-[#0066ff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0052cc] transition-colors duration-150 text-sm"
            >
              Solicitar diagnóstico gratuito →
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-[#fcf9f8] py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#727687] mb-4">Lee también</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/agencia-meta-ads-latam"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Servicios</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">Agencia de Meta Ads: Instagram y Facebook Ads para empresas en LATAM</p>
            </Link>
            <Link
              href="/blog/leads-basura-meta-ads"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Meta Ads</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">Leads basura en Meta Ads: cómo filtrarlos antes, durante y después del formulario</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
