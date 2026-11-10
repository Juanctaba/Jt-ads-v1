import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { breadcrumb, faqPage, toJsonLd, absoluteUrl, type Crumb } from "@/lib/schema";

const PATH = "/blog/tiempo-de-respuesta-leads";
const URL = absoluteUrl(PATH);
const TITLE = "El lead que no respondes en 5 minutos ya es de tu competencia";
const SEO_TITLE = "Automatización de marketing: responde en 5 min o pierdes";
const DESC =
  "Responder un lead en menos de 5 minutos multiplica tus ventas. Te mostramos los estudios, por qué tu equipo no alcanza y qué automatizar para lograrlo.";

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

// Estudios citados en el texto.
const SOURCES = {
  mit: "https://www.mortech.com/hs-fs/hub/25649/file-13535879-pdf/docs/mit_study.pdf",
  hbr: "https://scholarsarchive.byu.edu/facpub/9711",
  optifai: "https://optif.ai/learn/questions/lead-response-time-benchmark/",
  blazeo: "https://discover.blazeo.com/speed-to-lead-2026-report",
};

const crumbs: Crumb[] = [
  { name: "Inicio", path: "" },
  { name: "Blog", path: "/blog" },
  { name: "Tiempo de respuesta a leads", path: PATH },
];

const faqs = [
  {
    q: "¿En cuánto tiempo hay que responderle a un lead?",
    a: "En menos de 5 minutos. El estudio de Oldroyd (MIT) e InsideSales de 2007 encontró que llamar a un lead a los 5 minutos en lugar de a los 30 multiplica por 100 la probabilidad de contactarlo y por 21 la de calificarlo.",
  },
  {
    q: "¿Cuánto tardan las empresas en responder un lead?",
    a: "Mucho más de lo que creen. La auditoría que publicó Harvard Business Review en 2011 midió 42 horas en promedio y un 23% de empresas que nunca respondió. El benchmark de Optifai de 2025–2026, con 939 empresas B2B, encontró un promedio de 47 horas.",
  },
  {
    q: "¿Qué se automatiza primero para responder más rápido?",
    a: "La respuesta inmediata por WhatsApp con una primera pregunta de calificación y la asignación del lead al asesor que está activo en ese momento. Después vienen la alerta cuando el asesor no contesta, el enlace para agendar y los recordatorios.",
  },
  {
    q: "¿Cómo se mide el tiempo de respuesta a leads?",
    a: "Con la mediana del tiempo al primer contacto, el porcentaje de leads contactados en menos de 5 minutos y la tasa de lead a cita y de cita a venta separada por tiempo de respuesta. El promedio engaña porque unos pocos leads atendidos en segundos esconden a los que esperaron un día.",
  },
];

const P_ = "text-[#424656] leading-relaxed mb-6 text-base";
const H2 = "font-bold text-2xl text-[#1c1b1b] mt-12 mb-4";
const A = "text-[#0066ff] font-semibold hover:underline";

const automatizar = [
  "Una respuesta inmediata por WhatsApp que confirme que recibiste la solicitud y haga la primera pregunta de calificación.",
  "La asignación del lead al asesor que está activo en ese momento.",
  "Una alerta cuando el asesor no contesta en X minutos, para pasarle el lead a otro asesor o avisarle al líder comercial.",
  "Un enlace para que el lead agende su cita sin esperar a que lo llamen.",
  "Una secuencia de recordatorios para los leads que no responden al primer mensaje.",
];

const metricas = [
  "El tiempo al primer contacto, medido en mediana. El promedio engaña: unos pocos leads atendidos en segundos pueden esconder muchos que esperaron un día.",
  "El porcentaje de leads contactados en menos de 5 minutos.",
  "La tasa de lead a cita y de cita a venta, separada por tiempo de respuesta: menos de 5 minutos, de 5 a 30, de 30 a 60 y más de una hora. Con esa tabla ves cuánta plata te cuesta cada minuto.",
  "Cuántos leads entran fuera de horario y cuánto tardan en ser atendidos.",
];

export default function PostTiempoRespuestaLeads() {
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
    datePublished: "2026-11-10",
    dateModified: "2026-11-10",
    image: "https://jtads.com/opengraph-image",
    url: URL,
    inLanguage: "es",
    about: ["Automatización de marketing", "Tiempo de respuesta a leads", "CRM", "GoHighLevel", "WhatsApp"],
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
            Automatización
          </span>
          <h1 className="font-bold text-white text-3xl md:text-4xl leading-tight mb-6">{TITLE}</h1>
          <p className="text-[#727687] text-sm">Noviembre 2026 · 6 min de lectura</p>
        </div>
      </section>

      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          <p className={P_}>
            Pagas por cada lead que te llega de Meta, de Google o de WhatsApp, y en la mayoría de empresas ese
            lead espera horas, a veces días, a que alguien le conteste. Para entonces ya le escribió a tu
            competencia, y la plata que pusiste en la pauta se fue con él.
          </p>
          <p className={P_}>
            Muchas veces la pauta funciona bien y las ventas se pierden en los minutos que siguen a la llegada
            del lead.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-3">En resumen</p>
            <p className="text-[#424656] text-sm leading-relaxed">
              <strong className="text-[#1c1b1b]">
                Responder en menos de 5 minutos multiplica la probabilidad de contactar y calificar al lead.
              </strong>{" "}
              La mayoría de empresas tarda casi dos días, y un equipo humano no llega a tiempo de noche, en fin
              de semana o en un pico de campaña. Para eso sirve la{" "}
              <Link href="/soluciones/automatizacion-de-procesos" className={A}>
                automatización de procesos
              </Link>
              : respuesta inmediata, asignación al asesor que sí está y seguimiento.
            </p>
          </div>

          <h2 className={H2}>Lo que dicen los estudios clásicos</h2>
          <p className={P_}>
            La investigación más citada sobre velocidad de respuesta es de 2007. La hicieron el Dr. James
            Oldroyd, del MIT, e InsideSales, con tres años de datos de seis empresas que generan leads por web:
            más de 15.000 leads y más de 100.000 intentos de llamada. Llamar a un lead a los 5 minutos en lugar
            de a los 30 multiplica por 100 la probabilidad de contactarlo y por 21 la de calificarlo (
            <a href={SOURCES.mit} target="_blank" rel="noopener noreferrer" className={A}>
              Lead Response Management Study
            </a>
            ).
          </p>
          <p className={P_}>
            En 2011, Harvard Business Review publicó una auditoría aparte, de 2.241 empresas en Estados Unidos (
            <a href={SOURCES.hbr} target="_blank" rel="noopener noreferrer" className={A}>
              The Short Life of Online Sales Leads
            </a>
            ). El tiempo promedio de respuesta fue de 42 horas, casi dos días para contestarle a alguien que
            pidió información, y el 23% de las empresas nunca respondió. Las que contactaban dentro de la primera
            hora tenían casi siete veces más probabilidades de calificar al lead que las que esperaban más.
          </p>

          <h2 className={H2}>Quince años después, las empresas siguen respondiendo tarde</h2>
          <p className={P_}>Los datos de 2025 y 2026 muestran que el problema sigue sin resolverse.</p>
          <p className={P_}>
            Optifai midió 939 empresas B2B entre el segundo trimestre de 2025 y el primero de 2026 (
            <a href={SOURCES.optifai} target="_blank" rel="noopener noreferrer" className={A}>
              benchmark de tiempo de respuesta
            </a>
            ). Los leads contactados en menos de 5 minutos cierran al 32%, contra 12% cuando la respuesta pasa
            de 24 horas. Solo el 23% de las empresas responde dentro de esos 5 minutos, y el promedio sigue en
            47 horas.
          </p>

          <h2 className={H2}>El problema es de sistema</h2>
          <p className={P_}>
            En 2026, Blazeo analizó 573 empresas de servicios (
            <a href={SOURCES.blazeo} target="_blank" rel="noopener noreferrer" className={A}>
              Speed-to-Lead Benchmark Report
            </a>
            ). Más de un tercio de los líderes de negocio dijo que responder en 5 minutos es esencial, y el 38%
            de ellos no cumple su propio estándar.
          </p>
          <p className={P_}>
            Las empresas con un acuerdo formal de tiempo de respuesta cumplen el estándar de 15 minutos en un
            54,9%. Sin ese acuerdo, solo lo cumple el 29,5%. Entre las que usan IA y automatización lo cumple el
            62,5%, contra 39,1% de las que operan a mano.
          </p>
          <p className={P_}>
            Optifai y Blazeo venden soluciones de respuesta rápida, así que hay que leer sus cifras con ese
            filtro. Aun así, coinciden con lo que encontró la investigación académica.
          </p>
          <p className={P_}>
            Tu equipo puede tener toda la intención y aun así no llegar a tiempo. Los leads entran a las 9 de la
            noche, los domingos, o de a 40 en una hora cuando una campaña pega. Mientras tanto, el asesor puede
            estar en otra llamada, almorzando o de descanso ese día. Para cubrir esos casos hace falta un proceso
            automático.
          </p>

          <h2 className={H2}>El lead que le cae a un asesor que no está</h2>
          <p className={P_}>
            Muchos CRMs reparten los leads entre los asesores en rotación sin revisar si el asesor está
            conectado. Nos pasó con{" "}
            <Link href="/soluciones/gohighlevel" className={A}>
              GoHighLevel
            </Link>
            : asigna contactos a los usuarios del CRM sin considerar si están activos. Un lead nuevo puede caerle
            a alguien que no trabaja ese día y quedarse ahí, sin respuesta, hasta que otra persona se da cuenta.
            En el CRM aparece asignado, pero nadie lo está atendiendo.
          </p>
          <p className={P_}>
            Para resolverlo construimos Smart Assign. Cada asesor se marca como activo cuando empieza a atender,
            y los leads se asignan en tiempo real solo entre quienes están disponibles.
          </p>

          <h2 className={H2}>Qué automatizar primero</h2>
          <ol className="space-y-3 mb-8">
            {automatizar.map((q, i) => (
              <li key={q} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066ff] text-white text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-[#424656] text-sm leading-relaxed pt-1.5">{q}</span>
              </li>
            ))}
          </ol>

          <h2 className={H2}>Cómo medirlo</h2>
          <p className={P_}>
            Lo que no se mide no existe. Estas son las métricas que conectan la velocidad con las ventas:
          </p>
          <ul className="space-y-2 mb-6 pl-4">
            {metricas.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[#424656] text-sm leading-relaxed">
                <span className="text-[#727687] mt-0.5">–</span>
                {item}
              </li>
            ))}
          </ul>
          <p className={P_}>
            Ojo con confundir lentitud con mala calidad: muchos leads que ventas descarta como «no contesta» eran
            buenos y nadie los llamó a tiempo. Esa diferencia está en{" "}
            <Link href="/blog/leads-basura-meta-ads" className={A}>
              leads basura en Meta Ads
            </Link>
            .
          </p>

          <h2 className={H2}>Antes de subir el presupuesto</h2>
          <p className={P_}>
            Si la pauta está trayendo leads y las ventas no suben, revisa qué pasa con cada lead en los primeros
            minutos después de que llega.
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
            Fuentes revisadas el 10 de noviembre de 2026:{" "}
            <a href={SOURCES.mit} target="_blank" rel="noopener noreferrer" className={A}>Lead Response Management Study (Oldroyd e InsideSales, 2007)</a>,{" "}
            <a href={SOURCES.hbr} target="_blank" rel="noopener noreferrer" className={A}>The Short Life of Online Sales Leads (HBR, 2011)</a>,{" "}
            <a href={SOURCES.optifai} target="_blank" rel="noopener noreferrer" className={A}>benchmark de Optifai</a> y{" "}
            <a href={SOURCES.blazeo} target="_blank" rel="noopener noreferrer" className={A}>Speed-to-Lead Benchmark Report de Blazeo (2026)</a>.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p className="text-[#1c1b1b] font-bold text-lg mb-3">¿Cuánto tarda tu equipo en responder?</p>
            <p className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed">
              En el diagnóstico en vivo revisamos qué pasa con cada lead desde que llega y cuántas ventas se
              están quedando en el camino.
            </p>
            <Link
              href="/diagnostico-en-vivo"
              data-cta="diag-envivo-tiempo-respuesta-final"
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
              href="/blog/leads-basura-meta-ads"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Meta Ads</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">Leads basura en Meta Ads: cómo filtrarlos antes, durante y después del formulario</p>
            </Link>
            <Link
              href="/soluciones/automatizacion-de-procesos"
              className="flex-1 bg-white rounded-xl p-5 border border-[#c2c6d8]/15 hover:shadow-sm transition-shadow"
            >
              <p className="text-xs text-[#727687] mb-1 uppercase tracking-wide font-semibold">Soluciones</p>
              <p className="text-sm font-semibold text-[#1c1b1b]">Automatización de procesos para empresas</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
