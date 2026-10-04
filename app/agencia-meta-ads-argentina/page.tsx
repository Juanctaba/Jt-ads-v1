import type { Metadata } from "next";
import MetaCountryPage, { type MetaCountryContent } from "@/components/meta-pais/MetaCountryPage";

const TITLE = "Agencia de Meta Ads en Argentina: Facebook e Instagram Ads | JT Ads";
const DESC =
  "Agencia de Meta Ads en Argentina: Buenos Aires, Córdoba y Rosario. Cuenta en USD o ARS, Conversions API y CPL real en tu CRM. Diagnóstico sin costo.";
const URL = "https://jtads.com/agencia-meta-ads-argentina";

// Fuente oficial de Meta para el IVA en Argentina (la misma que cita /blog/cuanto-cobra-agencia-meta-ads-latam).
const META_IVA_AR = "https://www.facebook.com/business/help/261010294920208";
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
    "agencia meta ads argentina",
    "agencia de facebook ads argentina",
    "agencia instagram ads argentina",
    "meta ads buenos aires",
    "meta ads precio argentina",
    "impuestos meta ads argentina",
    "publicidad en facebook precios argentina",
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
  country: "Argentina",
  slug: "argentina",
  badge: "Meta Ads Argentina · 2026",
  h1: "Agencia de Meta Ads en Argentina: Facebook e Instagram Ads que se leen en ventas, aunque el tipo de cambio se mueva.",
  intro: (
    <>
      Somos una{" "}
      <a href="/agencia-meta-ads-latam" className={A}>agencia de Meta Ads</a>{" "}
      que opera en toda LATAM. En Argentina gestionamos Facebook e Instagram Ads para empresas de Buenos Aires,
      Córdoba, Rosario y el resto del país: definimos la moneda de la cuenta antes de lanzar, medimos con Conversions
      API y reportamos el CPL real desde tu CRM.
    </>
  ),
  stats: [
    { value: "Partner", label: "JT Ads es Meta Partner y Google Partner" },
    { value: "USD / ARS", label: "Moneda definida antes de lanzar" },
    { value: "< 4h", label: "Respuesta" },
  ],
  dashboardLabel: "Meta Ads Argentina · Dashboard",
  cityTags: ["Buenos Aires", "Córdoba", "Rosario"],
  pains: [
    "Un CPL que se ve bien en pesos este mes y no se puede comparar con el anterior porque cambió el tipo de cambio.",
    "Cargos de Meta con impuestos que nadie anticipó y presupuestos que se quedan cortos a mitad de mes.",
    "Leads de formulario que llegan al WhatsApp del equipo sin saber de qué campaña ni de qué anuncio vinieron.",
  ],
  comparisonTitle: "Antes de contratar una agencia de Meta Ads en Argentina, compara lo que realmente importa.",
  comparisonHeader: "Agencias Tradicionales en AR",
  comparisonRows: [
    { criterio: "Medición", tradicional: "Resultados leídos en el Administrador de anuncios", jtads: "Ventas y CPL real leídos en tu CRM" },
    { criterio: "Moneda de la cuenta", tradicional: "La que quedó al crearla, sin revisar", jtads: "USD o ARS, definida antes de lanzar" },
    { criterio: "Cuenta publicitaria", tradicional: "Puede quedar en el Business Manager de la agencia", jtads: "A tu nombre; la pauta la pagas directo a Meta" },
    { criterio: "Fee", tradicional: "Un número sin explicar qué lo mueve", jtads: "Según requerimientos y complejidad de la cuenta" },
    { criterio: "Tracking", tradicional: "Solo el píxel del navegador", jtads: "Píxel + Conversions API desde el servidor" },
    { criterio: "Respuesta ante problemas", tradicional: "Sin tiempo de respuesta publicado", jtads: "< 4 horas hábiles" },
  ],
  citiesTitle: "Meta Ads para empresas en los principales mercados de Argentina",
  cities: [
    { name: "Buenos Aires", note: "CABA y GBA: servicios profesionales, fintech y ecommerce, con Lead Ads y WhatsApp conectados al CRM." },
    { name: "Córdoba", note: "Tech, educación y servicios B2B: campañas de consideración con video y formularios que califican." },
    { name: "Rosario", note: "Comercio, logística y agroindustria: audiencias bien acotadas y retargeting sobre quien ya consultó." },
    { name: "Mendoza", note: "Turismo, vitivinicultura y real estate: Reels y Stories para quien planea un viaje o una compra." },
    { name: "La Plata", note: "Educación, salud y servicios locales: campañas por zona con seguimiento por WhatsApp." },
    { name: "Mar del Plata", note: "Turismo y retail de temporada: presupuesto que se mueve con la temporada y creativos que se renuevan." },
  ],
  servicesTitle: "Qué gestionamos en Meta Ads para empresas argentinas",
  services: [
    {
      title: "Estructura por objetivo",
      body: "Campañas separadas por objetivo y por formato, para que Meta no reparta el presupuesto donde el resultado se ve más barato pero no vende.",
    },
    {
      title: "Video vertical para Reels",
      body: "Piezas cortas pensadas para Instagram y Facebook, con el gancho al principio. Las rotamos antes de que se gasten y medimos cuál trae consultas que avanzan.",
    },
    {
      title: "Formularios que califican",
      body: "Lead Ads con preguntas que filtran por necesidad, zona o tipo de cliente. El lead llega al CRM con su origen, listo para que ventas sepa qué priorizar.",
    },
    {
      title: "Ecommerce y catálogo",
      body: "Campañas de catálogo y Advantage+ para tiendas online, con exclusiones de clientes actuales y control sobre qué productos empujar.",
    },
    {
      title: "Remarketing por etapa",
      body: "Mensajes distintos para quien vio un video, visitó la web, abrió un formulario o ya es cliente. Cada audiencia recibe el paso que le falta.",
    },
    {
      title: "Conversions API y CRM",
      body: "Eventos enviados desde el servidor y señales de calidad desde el CRM. El algoritmo aprende de los leads que compran y el reporte deja de depender solo del píxel.",
    },
  ],
  notes: [
    {
      title: "Moneda de la cuenta: USD o ARS",
      body: (
        <>
          En Argentina la cuenta publicitaria puede facturar en dólares (USD) o en pesos argentinos (ARS). La
          definimos antes de lanzar, según cómo pagas y cómo quieres leer los resultados frente a la variabilidad
          cambiaria. Los métodos de pago disponibles dependen de la moneda que elijas, y cambiarla después no edita la
          cuenta: Meta crea una cuenta publicitaria nueva, cierra la anterior y sus anuncios dejan de correr.
        </>
      ),
    },
    {
      title: "IVA y otros impuestos sobre los anuncios de Meta",
      body: (
        <>
          Desde mayo de 2018, si estás en Argentina y compras anuncios a Meta Platforms Ireland, un intermediario
          financiero agrega IVA a la tasa local cada vez que se te cobra, y Meta advierte que ese intermediario también
          puede cobrar otros impuestos aplicables (
          <a href={META_IVA_AR} target="_blank" rel="noopener noreferrer" className={A}>
            Meta Business Help: IVA en Argentina
          </a>
          ). Revísalo con tu contador antes de lanzar: la obligación fiscal es tuya y no de la agencia.
        </>
      ),
    },
    {
      title: "Zona horaria: Buenos Aires, UTC-3",
      body: (
        <>
          Argentina está en UTC-3 todo el año y nosotros operamos desde Medellín (UTC-5): son dos horas de diferencia,
          sin cambios de horario. La cuenta de Meta debería estar en la zona horaria de Argentina para que la
          programación de anuncios y los reportes diarios cuadren con tu operación.
        </>
      ),
    },
    {
      title: "La cuenta es tuya y la pauta la pagas tú",
      body: (
        <>
          La cuenta publicitaria queda a nombre del cliente, no de la agencia. La inversión en medios no pasa por
          nosotros: la pagas directamente a Meta con tu propio método de pago, y lo que nos pagas es el fee de gestión.
        </>
      ),
    },
    {
      title: "Lecturas recomendadas",
      body: (
        <>
          Para comparar propuestas, lee{" "}
          <a href="/blog/cuanto-cobra-agencia-meta-ads-latam" className={A}>cuánto cobra una agencia de Meta Ads en LATAM</a>.
          Para entender la diferencia entre lo que reporta Meta y lo que registra tu CRM,{" "}
          <a href="/blog/tracking-server-side-cpl-plataforma" className={A}>CPL de plataforma vs CPL real</a> y{" "}
          <a href="/blog/tracking-server-side-que-es-por-que-pixel-miente" className={A}>por qué el píxel miente</a>.
          Si también inviertes en Google, tenemos una página de{" "}
          <a href="/agencia-google-ads-argentina" className={A}>agencia de Google Ads en Argentina</a>.
        </>
      ),
    },
  ],
  formTitle: "Solicita tu diagnóstico de Meta Ads sin costo",
  formSubtitle: "Revisamos tu cuenta de Meta en vivo, en una sesión de 60 minutos. Te contactamos en menos de 4 horas hábiles.",
  faqTitle: "Preguntas frecuentes — Meta Ads Argentina",
  faqItems: [
    {
      q: "¿Cuánto cobra una agencia de Meta Ads en Argentina?",
      a: "El fee de gestión depende de los requerimientos y la complejidad de cada cuenta. La inversión en medios no pasa por nosotros: la pagas directamente a Meta. Explicamos qué mueve el precio en cuánto cobra una agencia de Meta Ads en LATAM.",
      links: [{ text: "cuánto cobra una agencia de Meta Ads en LATAM", href: "/blog/cuanto-cobra-agencia-meta-ads-latam" }],
    },
    {
      q: "¿En qué moneda conviene crear la cuenta de Meta Ads en Argentina?",
      a: "La cuenta puede facturar en dólares (USD) o en pesos argentinos (ARS). La moneda se elige al crear la cuenta y cambiarla después obliga a abrir una cuenta publicitaria nueva, así que la definimos antes de lanzar según cómo pagas y cómo quieres manejar la variabilidad cambiaria.",
    },
    {
      q: "¿Qué impuestos agrega Meta a los anuncios en Argentina?",
      a: "Desde mayo de 2018, si estás en Argentina y compras anuncios a Meta Platforms Ireland, un intermediario financiero agrega IVA a la tasa local cada vez que se te cobra, y Meta advierte que ese intermediario también puede cobrar otros impuestos aplicables. Revísalo con tu contador antes de lanzar.",
    },
    {
      q: "¿Son Meta Partner?",
      a: "Sí. JT Ads es Meta Partner y también Google Partner.",
    },
    {
      q: "¿A nombre de quién queda la cuenta publicitaria y quién paga la pauta?",
      a: "A tu nombre. La cuenta publicitaria queda a nombre del cliente, no de la agencia. La inversión en medios no pasa por nosotros: la pagas directamente a Meta.",
    },
    {
      q: "¿Trabajan con empresas en Buenos Aires, Córdoba y Rosario?",
      a: "Sí. Trabajamos de forma remota con empresas en Buenos Aires, Córdoba, Rosario y el resto del país. Las reuniones de diagnóstico y seguimiento son por videollamada con pantalla compartida, y el acceso a la cuenta es en tiempo real: ves todo lo que hacemos cuando quieras.",
    },
    {
      q: "¿Cómo manejan la diferencia horaria con Argentina?",
      a: "Argentina está en UTC-3 todo el año y nosotros operamos desde Medellín (UTC-5): son dos horas de diferencia, sin cambios de horario. La cuenta de Meta debería estar en la zona horaria de Argentina para que la programación de anuncios y los reportes diarios cuadren con tu operación.",
    },
    {
      q: "¿Cómo manejan el tracking después de iOS 14?",
      a: "Implementamos Meta Conversions API (CAPI) desde el servidor para recuperar eventos que el píxel pierde por restricciones de cookies y del dispositivo. Así el algoritmo toma decisiones con datos más completos y el CPL real se lee contra tu CRM, no solo contra el píxel.",
      links: [{ text: "CPL real", href: "/blog/tracking-server-side-cpl-plataforma" }],
    },
    {
      q: "¿Cómo comparo resultados entre meses si el tipo de cambio se mueve?",
      a: "Leemos el costo por lead y por venta en la moneda de la cuenta y, al lado, el resultado en el CRM. Si la cuenta está en ARS, acordamos en el diagnóstico con qué criterio comparar meses, el mismo que usa tu equipo de finanzas para el resto del negocio.",
    },
    {
      q: "¿Cómo es el proceso para empezar?",
      a: "Completas un formulario breve y te contactamos en menos de 4 horas hábiles. Revisamos tu cuenta de Meta en vivo, en una sesión de 60 minutos: tracking, estructura, audiencias y creativos. Las conclusiones son tuyas. Si quieres que implementemos, conversamos; si prefieres hacerlo internamente, también sirve.",
    },
  ],
  finalTitle: "¿Tu agencia de Meta Ads te muestra cuántos leads terminaron en venta?",
  finalBody: "Si la respuesta es no, ahí está el problema. Empieza con un diagnóstico sin costo de tu cuenta de Meta.",
};

export default function AgenciaMetaAdsArgentinaPage() {
  return <MetaCountryPage c={content} />;
}
