import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTAButton from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "JT Ads — Paid Media para Empresas en LATAM",
  description:
    "Diagnóstico en vivo de tu cuenta de Google Ads, Meta y LinkedIn. Equipo senior con experiencia gestionando $500k+/mes. Sin contratos largos.",
  alternates: { canonical: "https://ads.juantabares.co" },
  openGraph: {
    title: "JT Ads — Paid Media para Empresas en LATAM",
    description: "Diagnóstico en vivo de tu cuenta de ads. Equipo senior, $500k+/mes gestionados.",
    images: ["/og-image.png"],
  },
};

const problems = [
  {
    title: "Tracking mal configurado",
    body: "El dashboard dice que va bien. El equipo de ventas dice que los leads son pésimos. Alguien está mintiendo — y casi siempre es el píxel.",
  },
  {
    title: "Estructura desalineada con el funnel",
    body: "Las campañas están armadas para el reporte de la agencia, no para tu proceso de ventas. Capturan clics, no clientes.",
  },
  {
    title: "Agencia que optimiza para renovar contrato",
    body: 'El CPL "baja". Los reportes se ven bien. Las ventas no suben. Hay una desconexión entre lo que se reporta y lo que realmente pasa en tu pipeline.',
  },
];

const valueProp = [
  {
    title: "Equipo senior desde el día 1",
    body: "Account manager senior dedicado desde el inicio. Nuestro equipo ha gestionado más de $500,000 USD/mes en Google Ads, Meta y LinkedIn — no aprendemos con tu cuenta.",
  },
  {
    title: "Tracking honesto desde cero",
    body: "Implementamos server-side tracking antes de gastar un peso más. Mides leads que llegan a ventas, no conversiones de plataforma infladas.",
  },
  {
    title: "Sin contratos de 12 meses",
    body: "Confiamos en los resultados para retener clientes. Si en los primeros 90 días no ves mejoras concretas y medibles, no tiene sentido que sigamos.",
  },
];

const steps = [
  {
    n: "01",
    title: "Reservas la sesión",
    body: "Completas un formulario breve. Plataforma, presupuesto actual, principal problema. Te contactamos en menos de 4 horas hábiles.",
  },
  {
    n: "02",
    title: "Diagnóstico en vivo",
    body: "Revisamos tu cuenta juntos en pantalla compartida. 20+ puntos: tracking, estructura, audiencias, creativos. El diagnóstico ocurre en tiempo real.",
  },
  {
    n: "03",
    title: "Te llevás las conclusiones",
    body: "Los hallazgos y prioridades son tuyos. Claridad sobre qué cambiar, en qué orden, y por qué cada punto impacta tu negocio.",
  },
  {
    n: "04",
    title: "Decidís si seguimos",
    body: "Si querés implementar con nosotros, conversamos. Si preferís hacerlo internamente, perfecto. Sin presión ni obligaciones.",
  },
];

const icpItems = [
  "Empresas con equipo de marketing interno",
  "Ad spend mensual entre $5,000 y $50,000 USD",
  "Director de Marketing, CMO o VP de Growth",
  "Mercados LATAM Tier 1 (México, Colombia, Chile, Argentina) + USA",
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="pt-20 pb-16 px-6 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-8 bg-[var(--accent-faint)] text-[var(--accent)] border border-[var(--accent)]/20">
                <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                Sesiones disponibles esta semana
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[var(--text-primary)]">
                Paid media para equipos que ya{" "}
                <span className="text-[var(--accent)]">saben lo que hacen.</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed mb-10 text-[var(--text-secondary)] max-w-xl">
                Diagnóstico en vivo de tu cuenta actual. Te decimos exactamente qué cambiar
                para bajar tu CPL y mejorar la calidad de leads. Sin rodeos, sin reportes
                que esconden la verdad.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/diagnostico-en-vivo" size="lg">
                  Reservar Sesión de Diagnóstico — Gratis
                </CTAButton>
                <CTAButton href="#como-funciona" variant="secondary" size="lg">
                  Ver cómo funciona ↓
                </CTAButton>
              </div>

              <p className="mt-5 text-sm text-[var(--text-muted)]">
                Respuesta en menos de 4 horas hábiles · Sin contratos ni compromisos
              </p>
            </div>

            {/* Right: dashboard mockup */}
            <div className="relative hidden lg:block">
              {/* Subtle blob behind the card */}
              <div className="absolute inset-0 -rotate-1 bg-gray-50 rounded-3xl" />

              <div className="relative bg-[#F8FAFC] border border-gray-200 rounded-2xl shadow-2xl p-6 space-y-4">
                {/* Header bar */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    Performance Dashboard
                  </span>
                  <span className="text-xs text-gray-400">Últimos 30 días</span>
                </div>

                {/* CPL Card */}
                <div className="bg-white rounded-xl border border-gray-100 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Costo por Lead (CPL)</p>
                      <p className="text-2xl font-bold text-gray-900">$18.40</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      ↓ 34%
                    </span>
                  </div>
                  {/* Mini sparkline (SVG) */}
                  <svg className="w-full h-10 mt-3" viewBox="0 0 200 40" preserveAspectRatio="none">
                    <polyline
                      fill="none"
                      stroke="#0066ff"
                      strokeWidth="2"
                      points="0,6 30,10 60,16 90,22 120,27 150,31 200,35"
                    />
                    <polyline
                      fill="url(#cplGrad)"
                      stroke="none"
                      points="0,6 30,10 60,16 90,22 120,27 150,31 200,35 200,40 0,40"
                    />
                    <defs>
                      <linearGradient id="cplGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0066ff" stopOpacity="0.12" />
                        <stop offset="100%" stopColor="#0066ff" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Lead Quality Score Card */}
                <div className="bg-white rounded-xl border border-gray-100 p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">Calidad de Leads</p>
                      <p className="text-2xl font-bold text-gray-900">8.7 / 10</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      ↑ +2.4
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-3 bg-gray-100 rounded-full h-2">
                    <div className="bg-[var(--accent)] h-2 rounded-full" style={{ width: "87%" }} />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Antes: 6.3</span>
                    <span>Ahora: 8.7</span>
                  </div>
                </div>

                {/* Stat row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "ROAS", value: "4.8×" },
                    { label: "Conv. Rate", value: "12.3%" },
                    { label: "Ad Spend", value: "$22k" },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-3 text-center">
                      <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                      <p className="text-base font-bold text-gray-900">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Credibility bar ── */}
        <section className="bg-gray-50 border-y border-gray-100 py-6 px-6">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--text-muted)]">
            {[
              { flag: "🇲🇽", label: "México" },
              { flag: "🇨🇴", label: "Colombia" },
              { flag: "🇨🇱", label: "Chile" },
              { flag: "🇦🇷", label: "Argentina" },
              { flag: "🇵🇪", label: "Perú" },
              { flag: "🇺🇸", label: "USA" },
            ].map((m) => (
              <span key={m.label} className="flex items-center gap-2 font-medium">
                <span>{m.flag}</span>
                {m.label}
              </span>
            ))}
            <span className="hidden md:inline-block h-4 w-px bg-gray-200" />
            <span className="font-semibold text-[var(--text-secondary)]">$500k+/mes gestionados</span>
          </div>
        </section>

        {/* ── Problems ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight">
                Si invierten en ads pero los números no cuadran,
                <br className="hidden md:inline" />
                {" "}el problema casi siempre es uno de estos tres:
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {problems.map((p) => (
                <div
                  key={p.title}
                  className="group border border-gray-100 rounded-2xl p-6 hover:border-[var(--accent)]/20 hover:bg-blue-50/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 bg-red-50 text-red-500 group-hover:bg-red-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 text-[var(--text-primary)]">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Value Prop (dark section) ── */}
        <section className="py-20 px-6 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Así trabajamos diferente.
              </h2>
              <div className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {valueProp.map((v) => (
                <div key={v.title} className="flex flex-col gap-4">
                  <div className="w-8 h-0.5 bg-[var(--accent)]" />
                  <h3 className="text-xl font-semibold text-white">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section id="como-funciona" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight">
                El proceso es simple. La ejecución es lo que cambia.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {steps.map((s) => (
                <div key={s.n} className="flex flex-col">
                  <span className="text-5xl font-black text-[var(--accent)]/10 leading-none mb-4 select-none">
                    {s.n}
                  </span>
                  <h3 className="font-semibold text-[var(--text-primary)] mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ICP ── */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
              <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Left: checklist */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-8">
                    JT Ads trabaja con un perfil específico.
                  </h2>
                  <div className="space-y-4">
                    {icpItems.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm leading-relaxed text-[var(--text-secondary)]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: why card */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <p className="text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-4">¿Por qué este filtro?</p>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-4">
                    Trabajamos con empresas donde el ad spend es suficientemente significativo para
                    que un cambio estratégico tenga impacto real y medible en el negocio. No en
                    presupuestos donde el margen no justifica la inversión en un equipo senior.
                  </p>
                  <p className="text-sm italic text-[var(--text-muted)]">
                    "Si no cumplís exactamente este perfil, cuéntanos igual. Si podemos ayudarte,
                    lo hacemos. Si no, te orientamos sin costo."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA with glow ── */}
        <section className="relative overflow-hidden py-24 px-6 bg-[#0a0a0a]">
          {/* Radial glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--accent)]/20 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">
                La primera sesión es gratis. Sin compromiso.
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                Te contactamos en menos de 4 horas hábiles. Si tu perfil encaja, agendamos la
                sesión. Si no encaja, te lo decimos con honestidad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/diagnostico-en-vivo" size="lg" className="flex-1 justify-center">
                  Reservar Sesión de Diagnóstico
                </CTAButton>
                <CTAButton href="/contacto" variant="secondary" size="lg">
                  Tengo preguntas
                </CTAButton>
              </div>
              <p className="mt-5 text-sm text-[var(--text-muted)] text-center">
                Respuesta en &lt;4 horas hábiles · Sin contratos · Sin presión
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
