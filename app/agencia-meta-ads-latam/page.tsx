import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuditoriaForm from "@/app/diagnostico-en-vivo/AuditoriaForm";

export const metadata: Metadata = {
  title: "Agencia Meta Ads LATAM — Facebook & Instagram Ads | JT Ads",
  description:
    "Gestión profesional de Meta Ads para empresas en LATAM. Facebook Ads, Instagram Ads, Advantage+, retargeting y tracking server-side. Diagnóstico gratuito de tu cuenta.",
  alternates: {
    canonical: "https://jtads.com/agencia-meta-ads-latam",
    languages: {
      "es": "https://jtads.com/agencia-meta-ads-latam",
      "x-default": "https://jtads.com/agencia-meta-ads-latam",
    },
  },
  keywords: [
    "agencia meta ads latam",
    "agencia facebook ads latam",
    "agencia instagram ads latam",
    "meta ads mexico",
    "meta ads colombia",
    "facebook ads para empresas",
  ],
  openGraph: {
    title: "Agencia Meta Ads LATAM — Facebook & Instagram Ads | JT Ads",
    description:
      "Gestión profesional de Meta Ads para empresas en LATAM. Tracking correcto, creativos que convierten y resultados medibles.",
    images: ["/og-image.png"],
    url: "https://jtads.com/agencia-meta-ads-latam",
  },
  twitter: { card: "summary_large_image" },
};

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    ),
    title: "Feed & Stories Ads",
    body: "Creativos optimizados para cada placement. Estructuramos campañas separadas por formato para evitar que Meta distribuya budget en el placement de menor CPL.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    ),
    title: "Reels Ads",
    body: "Video corto nativo para awareness y consideración. Producimos o adaptamos tus creativos para el formato vertical, con hooks probados en los primeros 3 segundos.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    ),
    title: "Lead Ads",
    body: "Formularios nativos de Meta con precarga de datos del perfil. Reducen fricción, bajan el CPL y se integran directamente a tu CRM o webhook sin pasar por un landing.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    ),
    title: "Advantage+ Shopping",
    body: "Campañas automatizadas con señales de audiencia avanzadas para ecommerce y SaaS. Aprovechamos el algoritmo de Meta sin perder control sobre exclusiones y segmentos.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    ),
    title: "Retargeting & Custom Audiences",
    body: "Secuencias de retargeting segmentadas por comportamiento: visitantes, video views, engagement, listas de clientes. Cada segmento ve el mensaje correcto en el momento correcto.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
      </svg>
    ),
    title: "Tracking & Pixel + CAPI",
    body: "Implementamos Conversions API (server-side) para recuperar eventos perdidos por iOS 14+, blockers y cookies de terceros. Sin CAPI, tu algoritmo toma decisiones con datos incompletos.",
  },
];

const faqItems = [
  {
    q: "¿Cuál es el presupuesto mínimo para Meta Ads con JT Ads?",
    a: "Mínimo $5,000 USD/mes en inversión en plataforma. Por debajo de ese monto, el volumen de datos es insuficiente para que el algoritmo de Meta aprenda correctamente y los resultados no justifican nuestros honorarios.",
  },
  {
    q: "¿Trabajan con ecommerce, SaaS o generación de leads?",
    a: "Los tres. La estructura de campañas, el tipo de conversión optimizada y los creativos cambian según el objetivo. En la sesión de diagnóstico definimos qué estructura tiene sentido para tu negocio específico.",
  },
  {
    q: "¿Qué pasa si ya tenemos una cuenta de Meta activa con historial?",
    a: "Empezamos con diagnóstico de la cuenta existente — tracking, estructura, audiencias, creativos y resultados históricos. En la mayoría de los casos hay mucho que reparar antes de escalar. Preservamos lo que funciona y reconstruimos lo que no.",
  },
  {
    q: "¿Cómo manejan el impacto de iOS 14 en el tracking?",
    a: "Implementamos Meta Conversions API (CAPI) desde el servidor para recuperar entre el 20% y el 40% de eventos perdidos por restricciones de cookies y trackers de dispositivo. Eso significa que el algoritmo toma decisiones con datos más completos y el CPL real es más bajo de lo que reporta el píxel solo.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: "https://jtads.com" },
    { "@type": "ListItem", position: 2, name: "Agencia Meta Ads LATAM", item: "https://jtads.com/agencia-meta-ads-latam" },
  ],
};

export default function AgenciaMetaAdsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="pt-0 bg-white text-slate-900 antialiased">

        {/* ── HERO ── */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left: copy */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1877F2]/10 text-[#1877F2] rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
                  Facebook · Instagram · Reels · WhatsApp
                </div>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                  Agencia de Meta Ads para empresas en LATAM
                </h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Gestión profesional de Facebook e Instagram Ads con tracking server-side,
                  creativos nativos y estrategia conectada a tus métricas de negocio — no solo al
                  CPL de plataforma.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
                  <a
                    href="#diagnostico-form"
                    className="bg-[#1877F2] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1464d8] hover:shadow-lg hover:shadow-blue-200 transition-all"
                  >
                    Solicitar diagnóstico gratuito
                  </a>
                </div>
                <div className="text-sm text-slate-500 space-y-1">
                  <p>• Sin llamada de ventas previa</p>
                  <p>• Respuesta en menos de 4 horas hábiles</p>
                </div>
              </div>

              {/* Right: Meta dashboard mockup */}
              <div className="relative">
                <div className="bg-slate-100 rounded-2xl p-4 shadow-2xl border border-slate-200">
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100">
                    {/* Browser chrome */}
                    <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      <div className="flex-1 mx-4 h-4 bg-slate-100 rounded-full" />
                    </div>
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                            Costo por Lead (CPL)
                          </p>
                          <p className="text-3xl font-bold text-slate-900">
                            $12.80{" "}
                            <span className="text-green-500 text-sm font-medium">↓ 41%</span>
                          </p>
                        </div>
                        <div className="w-24 h-12 bg-blue-50 rounded flex items-center justify-center">
                          <svg className="w-16 h-8 text-[#1877F2]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 40">
                            <path d="M0 5 Q 25 8 40 18 T 70 30 T 100 36" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                      {/* ROAS bar */}
                      <div className="mb-5">
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                          <span>ROAS</span>
                          <span className="text-green-500 font-semibold">↑ +1.9x</span>
                        </div>
                        <p className="text-xl font-bold text-slate-900 mb-2">5.4x</p>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-2 bg-[#1877F2] rounded-full" style={{ width: "82%" }} />
                        </div>
                        <div className="flex justify-between text-xs text-slate-400 mt-1">
                          <span>Antes: 2.1x</span><span>Ahora: 5.4x</span>
                        </div>
                      </div>
                      {/* Stats row */}
                      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-100">
                        {[
                          { label: "Reach", value: "124k" },
                          { label: "CTR", value: "3.8%" },
                          { label: "Ad Spend", value: "$18k" },
                        ].map((s) => (
                          <div key={s.label} className="text-center">
                            <p className="text-xs text-slate-400">{s.label}</p>
                            <p className="font-bold text-slate-900 text-sm">{s.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="border-y border-slate-100 py-8 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
              Trabajamos con empresas en:
            </p>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-12 items-center opacity-70">
              {[
                { flag: "🇲🇽", label: "México" },
                { flag: "🇨🇴", label: "Colombia" },
                { flag: "🇨🇱", label: "Chile" },
                { flag: "🇦🇷", label: "Argentina" },
                { flag: "🇺🇸", label: "USA" },
              ].map((m) => (
                <div key={m.label} className="flex items-center gap-2 font-semibold text-slate-600">
                  <span>{m.flag}</span> {m.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROBLEM SECTION (dark) ── */}
        <section className="py-24 bg-[#0F172A] text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              El problema no es el algoritmo de Meta. Es lo que le estás alimentando.
            </h2>
            <div className="space-y-6 text-lg text-slate-300">
              <p>
                Meta Ads funciona bien cuando tiene datos de calidad: el Píxel solo captura entre
                el 60% y el 80% de los eventos reales debido a bloqueadores, iOS 14+ y restricciones
                de cookies. Eso significa que el algoritmo está optimizando con información incompleta.
              </p>
              <p>
                El resultado: CPL inflado, audiencias lookalike construidas sobre datos ruidosos y
                campañas que nunca terminan de aprender.
              </p>
              <p className="font-semibold text-white">
                Antes de escalar presupuesto en Meta, necesitas saber exactamente qué está midiendo
                y qué no. Ahí empieza el diagnóstico.
              </p>
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {[
                { stat: "20–40%", label: "de eventos recuperados con CAPI server-side" },
                { stat: "$5k+", label: "inversión mensual mínima para resultados consistentes" },
                { stat: "<4h", label: "tiempo de respuesta para agendar tu diagnóstico" },
              ].map((item) => (
                <div key={item.stat} className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-3xl font-black text-[#1877F2] mb-2">{item.stat}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES GRID ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Qué gestionamos en Meta Ads
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                No es solo poner presupuesto y esperar que el algoritmo haga su trabajo.
                Cada tipo de campaña requiere estructura, creativos y medición distintos.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="p-8 border border-slate-100 rounded-2xl hover:border-blue-100 hover:bg-blue-50/30 transition-all"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-[#1877F2] mb-6">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORM ── */}
        <section className="py-24 bg-[#f6f3f2]" id="diagnostico-form">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1877F2] text-white rounded-sm text-[10px] font-bold uppercase tracking-[0.15em] mb-4">
                Diagnóstico Gratuito
              </div>
              <h2
                className="text-3xl md:text-4xl font-black text-[#1c1b1b] mb-3"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Revisamos tu cuenta de Meta Ads
              </h2>
              <p className="text-[#424656]">
                Tracking, estructura, creativos y métricas reales — en una sesión de 60 minutos.
                Te contactamos en menos de 4 horas hábiles.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-[#c2c6d8]/10 p-2 overflow-hidden">
              <AuditoriaForm />
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
              Preguntas frecuentes sobre Meta Ads
            </h2>
            <div className="space-y-6">
              {faqItems.map((item) => (
                <div key={item.q} className="border-b border-slate-100 pb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.q}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-20 bg-[#1877F2] text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Si Meta Ads no está generando resultados consistentes, el problema casi siempre
              está antes de la campaña.
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              La sesión de diagnóstico es gratuita. En 60 minutos sabemos exactamente qué está
              fallando y qué hay que hacer. Sin compromiso de contratación.
            </p>
            <a
              href="#diagnostico-form"
              className="inline-block bg-white text-[#1877F2] px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors"
            >
              Solicitar diagnóstico gratuito
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
