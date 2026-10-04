import type { Metadata } from "next";
import MetaCountryPage, { type MetaCountryContent } from "@/components/meta-pais/MetaCountryPage";

const TITLE = "Agencia de Meta Ads en México: Facebook e Instagram Ads | JT Ads";
const DESC =
  "Agencia de Meta Ads en México: CDMX, Monterrey y Guadalajara. Facebook e Instagram Ads con Conversions API y CPL real en tu CRM. Diagnóstico sin costo.";
const URL = "https://jtads.com/agencia-meta-ads-mexico";

// Fuente oficial de Meta para impuestos (la misma que cita /blog/cuanto-cobra-agencia-meta-ads-latam).
const META_IMPUESTOS = "https://www.facebook.com/business/help/133076073434794";
const A = "text-[#0066ff] font-semibold hover:underline";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: {
    canonical: URL,
    languages: {
      "es-MX": "https://jtads.com/agencia-meta-ads-mexico",
      "es-AR": "https://jtads.com/agencia-meta-ads-argentina",
      "es": "https://jtads.com/agencia-meta-ads-latam",
      "x-default": "https://jtads.com/agencia-meta-ads-latam",
    },
  },
  keywords: [
    "agencia de meta ads en mexico",
    "agencia de meta ads en monterrey",
    "agencia facebook ads mexico",
    "agencia instagram ads mexico",
    "experto en meta ads mexico",
    "meta ads precio mexico",
    "facturacion facebook ads mexico",
  ],
  openGraph: {
    title: TITLE,
    description: DESC,
    images: ["/opengraph-image"],
    url: URL,
  },
  twitter: { card: "summary_large_image" },
};

const content: MetaCountryContent = {
  country: "México",
  slug: "mexico",
  badge: "Meta Ads México · 2026",
  h1: "Agencia de Meta Ads en México: Facebook e Instagram Ads medidos contra tus ventas, no contra el píxel.",
  intro: (
    <>
      Somos una{" "}
      <a href="/agencia-meta-ads-latam" className={A}>agencia de Meta Ads</a>{" "}
      que opera en toda LATAM. En México gestionamos Facebook e Instagram Ads para empresas de CDMX, Monterrey,
      Guadalajara y el resto del país, con Conversions API, Lead Ads conectados a tu CRM y reportes de CPL real.
    </>
  ),
  stats: [
    { value: "Partner", label: "JT Ads es Meta Partner y Google Partner" },
    { value: "CAPI", label: "Server-side + CRM" },
    { value: "< 4h", label: "Respuesta" },
  ],
  dashboardLabel: "Meta Ads México · Dashboard",
  cityTags: ["CDMX", "Monterrey", "Guadalajara"],
  pains: [
    "Leads de formulario que nunca contestan el WhatsApp, con un CPL que en el Administrador de anuncios se ve barato.",
    "Facturas de Meta con IVA que nadie revisó antes de lanzar y datos fiscales que se cargaron tarde.",
    "Los mismos creativos durante meses, porque nadie mide qué anuncio trae clientes y cuál solo trae clics.",
  ],
  comparisonTitle: "Antes de contratar una agencia de Meta Ads en México, compara lo que realmente importa.",
  comparisonHeader: "Agencias Tradicionales en MX",
  comparisonRows: [
    { criterio: "Tracking", tradicional: "Solo el píxel del navegador", jtads: "Píxel + Conversions API conectada al CRM" },
    { criterio: "Reporte", tradicional: "Alcance, clics y CPL de plataforma", jtads: "CPL real y ventas por campaña y por anuncio" },
    { criterio: "Cuenta publicitaria", tradicional: "A veces queda a nombre de la agencia", jtads: "A tu nombre desde el primer día" },
    { criterio: "Pauta", tradicional: "Mezclada con el fee en una sola cuenta", jtads: "La pagas directo a Meta; el fee va aparte" },
    { criterio: "Creativos", tradicional: "Las mismas piezas hasta que se queman", jtads: "Pruebas por formato: Reels, Stories y Feed" },
    { criterio: "Respuesta ante problemas", tradicional: "Sin tiempo de respuesta publicado", jtads: "< 4 horas hábiles" },
  ],
  citiesTitle: "Meta Ads para empresas en los principales mercados de México",
  cities: [
    { name: "Ciudad de México", note: "Servicios, educación y B2B con ciclos largos: Lead Ads con preguntas de calificación y seguimiento en el CRM." },
    { name: "Monterrey", note: "Industria y servicios de alto ticket: audiencias bien definidas y leads que se validan antes de pasar a ventas." },
    { name: "Guadalajara", note: "Ecommerce, retail y tech: catálogo de productos, Advantage+ y retargeting por comportamiento." },
    { name: "Querétaro", note: "Real estate y empresas en expansión: campañas por zona y formularios que filtran por tipo de comprador." },
    { name: "Puebla", note: "Educación privada y retail: campañas por temporada de inscripciones y de ventas, con WhatsApp como canal de cierre." },
    { name: "Mérida", note: "Real estate y turismo: Reels y Stories para compradores que llegan desde otras ciudades." },
  ],
  servicesTitle: "Qué gestionamos en Meta Ads para empresas mexicanas",
  services: [
    {
      title: "Lead Ads con calificación",
      body: "Formularios nativos de Meta con preguntas que separan curiosos de compradores. Cada lead entra al CRM con su campaña, conjunto y anuncio, para saber cuál trae ventas.",
    },
    {
      title: "Reels y Stories",
      body: "Video vertical nativo para Instagram y Facebook. Producimos o adaptamos piezas para que el mensaje se entienda en los primeros segundos y en el formato de cada placement.",
    },
    {
      title: "Anuncios que abren WhatsApp",
      body: "Campañas que llevan a una conversación de WhatsApp, donde muchas empresas en México cierran la venta. Conectamos esa conversación con el CRM para no perder el origen del lead.",
    },
    {
      title: "Advantage+ y catálogo",
      body: "Campañas automatizadas para ecommerce con catálogo de productos, sin perder el control de exclusiones, listas de clientes y segmentos que no deben mezclarse.",
    },
    {
      title: "Retargeting y audiencias propias",
      body: "Secuencias por comportamiento: visitas, reproducciones de video, interacción y listas de clientes. Cada segmento ve el mensaje que le toca según dónde está en la compra.",
    },
    {
      title: "Píxel + Conversions API",
      body: "Conversions API desde el servidor y eventos de calidad de lead enviados desde el CRM. Así Meta optimiza hacia los leads que compran, no hacia los formularios llenos.",
    },
  ],
  notes: [
    {
      title: "Moneda y método de pago de la cuenta",
      body: (
        <>
          Crea la cuenta publicitaria en la moneda con la que vas a pagar: los métodos de pago disponibles dependen
          de esa moneda. Cambiar la moneda o la zona horaria después no edita la cuenta: Meta crea una cuenta
          publicitaria nueva, cierra la anterior y sus anuncios dejan de correr. Además, solo se permite una vez cada
          60 días y sin saldo pendiente. Por eso lo definimos en el diagnóstico, antes de lanzar.
        </>
      ),
    },
    {
      title: "IVA y facturación de Meta en México",
      body: (
        <>
          Meta indica que, desde febrero de 2020, si la entidad que vende en tu recibo es Facebook México y tu
          dirección de facturación está en México, agrega IVA a la tasa local, sin importar si estás registrado ante
          el SAT (
          <a href={META_IMPUESTOS} target="_blank" rel="noopener noreferrer" className={A}>
            impuestos sobre anuncios de Meta
          </a>
          ). La pauta te la cobra Meta directamente; lo que nos pagas a nosotros es el fee de gestión. La
          deducibilidad y el tratamiento contable revísalos con tu contador: la obligación fiscal es tuya y no de la
          agencia.
        </>
      ),
    },
    {
      title: "Zona horaria: CDMX, Monterrey, Guadalajara y el resto del país",
      body: (
        <>
          En la mayor parte del país, incluida Ciudad de México, rige UTC-6 todo el año desde que se eliminó el
          horario de verano en 2022; Quintana Roo está en UTC-5 y algunos municipios de la frontera norte cambian de
          hora junto con USA. Elige la zona horaria donde opera tu equipo comercial: define cuándo corren los anuncios
          programados y cómo se corta el día en los reportes.
        </>
      ),
    },
    {
      title: "Tu cuenta y tu pauta, a tu nombre",
      body: (
        <>
          La cuenta publicitaria queda a nombre del cliente, no de la agencia, y la inversión en medios no pasa por
          nosotros: la pagas directamente a Meta. Si un día cambias de proveedor, el historial y los píxeles siguen
          siendo tuyos.
        </>
      ),
    },
    {
      title: "Para profundizar",
      body: (
        <>
          Qué mueve el precio de una agencia en{" "}
          <a href="/blog/cuanto-cobra-agencia-meta-ads-latam" className={A}>cuánto cobra una agencia de Meta Ads en LATAM</a>;
          por qué el número de Meta no cuadra con tu CRM en{" "}
          <a href="/blog/tracking-server-side-cpl-plataforma" className={A}>CPL de plataforma vs CPL real</a>; y cómo
          filtrar formularios que no sirven en{" "}
          <a href="/blog/leads-basura-meta-ads" className={A}>leads basura en Meta Ads</a>. Si además pautas en
          Google, mira nuestra{" "}
          <a href="/agencia-google-ads-mexico" className={A}>agencia de Google Ads en México</a>.
        </>
      ),
    },
  ],
  formTitle: "Solicita tu diagnóstico de Meta Ads sin costo",
  formSubtitle: "Revisamos tu cuenta de Meta en vivo, en una sesión de 60 minutos. Te contactamos en menos de 4 horas hábiles.",
  faqTitle: "Preguntas frecuentes — Meta Ads México",
  faqItems: [
    {
      q: "¿Cuánto cuesta contratar una agencia de Meta Ads en México?",
      a: "El fee de gestión depende de los requerimientos y la complejidad de cada cuenta. La inversión en medios no pasa por nosotros: la pagas directamente a Meta. Explicamos qué mueve el precio en cuánto cobra una agencia de Meta Ads en LATAM.",
      links: [{ text: "cuánto cobra una agencia de Meta Ads en LATAM", href: "/blog/cuanto-cobra-agencia-meta-ads-latam" }],
    },
    {
      q: "¿Cuánto cuesta la publicidad en Facebook e Instagram en México?",
      a: "La pauta la decides tú: es el presupuesto que defines por campaña y Meta lo cobra al método de pago de tu cuenta publicitaria. No hay una tarifa fija por anuncio; el costo depende de la competencia por tu audiencia, del formato y de la calidad del creativo. Por eso medimos el costo por lead real en el CRM y no solo lo que reporta la plataforma.",
      links: [{ text: "costo por lead real", href: "/blog/tracking-server-side-cpl-plataforma" }],
    },
    {
      q: "¿Cómo se factura la publicidad de Meta en México?",
      a: "Meta te cobra la pauta directamente y lo que nos pagas a nosotros es el fee de gestión. Meta indica que, desde febrero de 2020, si la entidad que vende en tu recibo es Facebook México y tu dirección de facturación está en México, agrega IVA a la tasa local, sin importar si estás registrado ante el SAT. La deducibilidad y el tratamiento contable revísalos con tu contador.",
    },
    {
      q: "¿Son Meta Partner?",
      a: "Sí. JT Ads es Meta Partner y también Google Partner.",
    },
    {
      q: "¿A nombre de quién queda la cuenta publicitaria?",
      a: "A tu nombre. La cuenta publicitaria queda a nombre del cliente, no de la agencia.",
    },
    {
      q: "¿Trabajan con empresas en Monterrey, Guadalajara y CDMX?",
      a: "Sí. Trabajamos de forma remota con empresas en CDMX, Monterrey, Guadalajara y cualquier otra ciudad de México. La gestión es totalmente digital: revisamos tu cuenta en pantalla compartida y nos comunicamos por email y videollamada.",
    },
    {
      q: "¿Qué zona horaria conviene para la cuenta de Meta Ads en México?",
      a: "La de tu operación. En la mayor parte del país, incluida Ciudad de México, rige UTC-6 todo el año; Quintana Roo está en UTC-5 y algunos municipios de la frontera norte cambian de hora junto con USA. Cambiar la zona horaria después no edita la cuenta: Meta crea una cuenta publicitaria nueva y cierra la anterior.",
    },
    {
      q: "¿Qué hacen con los leads de formulario que no contestan?",
      a: "Los filtramos antes, durante y después del formulario: preguntas de calificación en los Lead Ads, formularios de mayor intención cuando el volumen lo permite y validación en el CRM antes de pasar el lead a ventas. Lo explicamos paso a paso en cómo filtrar los leads basura en Meta Ads.",
      links: [{ text: "cómo filtrar los leads basura en Meta Ads", href: "/blog/leads-basura-meta-ads" }],
    },
    {
      q: "¿Qué pasa si ya tenemos una cuenta de Meta activa con historial?",
      a: "Empezamos con diagnóstico de la cuenta existente — tracking, estructura, audiencias, creativos y resultados históricos. En la mayoría de los casos hay mucho que reparar antes de escalar. Preservamos lo que funciona y reconstruimos lo que no.",
    },
    {
      q: "¿Cómo es el proceso para empezar?",
      a: "Completas un formulario breve y te contactamos en menos de 4 horas hábiles. Revisamos tu cuenta de Meta en vivo, en una sesión de 60 minutos: tracking, estructura, audiencias y creativos. Las conclusiones son tuyas. Si quieres que implementemos, conversamos; si prefieres hacerlo internamente, también sirve.",
    },
  ],
  finalTitle: "¿Tu agencia de Meta Ads te reporta el CPL real de ventas?",
  finalBody: "Si la respuesta es no, ya encontraste el problema. Empieza con un diagnóstico sin costo de tu cuenta de Meta.",
};

export default function AgenciaMetaAdsMexicoPage() {
  return <MetaCountryPage c={content} />;
}
