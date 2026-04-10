import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import ContactoForm from "./ContactoForm";

export const metadata: Metadata = {
  title: "Contacto — JT Ads | Paid Media para Empresas en LATAM",
  description:
    "¿Tienes dudas sobre tu estrategia de ads? Respondemos en menos de 24h hábiles. Sin llamadas de ventas, sin procesos complicados.",
  alternates: { canonical: "https://ads.juantabares.co/contacto" },
};

const icpRows = [
  { criterio: "Estructura interna", detalle: "Equipo de marketing interno" },
  { criterio: "Inversión Publicitaria", detalle: "$5k – $50k / mes" },
  { criterio: "Sector", detalle: "SaaS, B2B Tech, Fintech, Real Estate, Educación" },
  { criterio: "Mercados", detalle: "LATAM Tier 1 + USA" },
  { criterio: "Enfoque", detalle: "Performance & Rentabilidad" },
];

const expectations = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#0050cb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    text: "Respondemos todos los mensajes legítimos en <strong>menos de 24h laborables</strong>.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#0050cb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    text: "Sinceridad técnica: si tu cuenta no encaja con nuestro perfil, te lo decimos de inmediato.",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#0050cb]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    text: "Cero presión: no hay llamadas de ventas agresivas, solo análisis diagnóstico.",
  },
];

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-0 bg-[#fcf9f8] text-[#1c1b1b] antialiased" style={{ fontFamily: "Inter, sans-serif" }}>

        {/* ── HERO ── dot-grid background */}
        <section
          className="pt-24 pb-16 px-4 sm:px-8"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #e5e2e1 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0050cb] mb-4 block">
              Contacto de alto rendimiento
            </span>
            <h1
              className="text-6xl md:text-8xl font-extrabold tracking-tight leading-none mb-8 text-[#1c1b1b]"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              Hablemos de<br />tus ads.
            </h1>
            <p className="text-xl md:text-2xl text-[#424656] max-w-2xl leading-relaxed">
              Priorizamos la técnica sobre el discurso comercial. Recibe una respuesta honesta sobre
              la viabilidad de tu cuenta en menos de 24 horas.
            </p>
          </div>
        </section>

        {/* ── BENTO: Diagnóstico + Formulario ── */}
        <section className="px-4 sm:px-8 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* Left — 7 cols: Diagnóstico */}
              <div
                className="lg:col-span-7 bg-white p-8 md:p-12 rounded-xl flex flex-col justify-between border-l-4 border-[#0066ff]"
                style={{ boxShadow: "0px 20px 40px rgba(28,27,27,0.04)" }}
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <svg className="w-6 h-6 text-[#0066ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <h2
                      className="text-2xl font-bold text-[#1c1b1b]"
                      style={{ fontFamily: "Manrope, sans-serif" }}
                    >
                      Sesión de Diagnóstico sin costo
                    </h2>
                  </div>
                  <p className="text-lg text-[#424656] mb-8 leading-relaxed">
                    Ideal para empresas con una inversión publicitaria superior a{" "}
                    <strong className="text-[#1c1b1b]">$5,000/mes</strong> que buscan escalar resultados
                    mediante precisión técnica y análisis de datos.
                  </p>
                  <div className="space-y-4 mb-12">
                    {[
                      "Auditoría rápida de estructura de campañas.",
                      "Identificación de fugas de presupuesto.",
                      "Hoja de ruta táctica inmediata.",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-4">
                        <svg className="w-5 h-5 text-[#0066ff] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium text-[#1c1b1b]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link
                  href="/diagnostico-en-vivo"
                  className="inline-flex items-center justify-center bg-[#0066ff] text-white px-8 py-5 rounded-lg font-bold text-lg hover:bg-[#0050cb] transition-all group w-full md:w-max gap-2"
                >
                  Ir al formulario de Sesión de Diagnóstico
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Right — 5 cols: Simple form */}
              <div className="lg:col-span-5 bg-white rounded-xl self-start overflow-hidden" style={{ boxShadow: "0px 20px 40px rgba(28,27,27,0.04)" }}>
                <div className="px-8 pt-8 md:px-10 md:pt-10">
                  <h2
                    className="text-xl font-bold mb-6 text-[#1c1b1b]"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    Preguntas puntuales
                  </h2>
                </div>
                <ContactoForm />
              </div>

            </div>
          </div>
        </section>

        {/* ── ICP + EXPECTATIONS ── */}
        <section className="py-24 px-4 sm:px-8 bg-[#f6f3f2]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* ICP table */}
            <div>
              <h3
                className="text-3xl font-bold mb-8 tracking-tight text-[#1c1b1b]"
                style={{ fontFamily: "Manrope, sans-serif" }}
              >
                Perfil de Empresa Ideal
              </h3>
              <div className="bg-white rounded-xl overflow-hidden" style={{ boxShadow: "0 1px 3px rgba(28,27,27,0.06), 0 0 0 1px rgba(194,198,216,0.15)" }}>
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {icpRows.map((row, i) => (
                      <tr
                        key={row.criterio}
                        className="hover:bg-[#f6f3f2] transition-colors"
                        style={{ borderBottom: i < icpRows.length - 1 ? "1px solid rgba(194,198,216,0.2)" : "none" }}
                      >
                        <td className="p-6 text-xs font-bold uppercase tracking-widest text-[#727687]">
                          {row.criterio}
                        </td>
                        <td className="p-6 font-semibold text-[#1c1b1b]">{row.detalle}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <blockquote className="mt-6 pl-4 border-l-2 border-[#0066ff] text-sm text-[#424656] italic leading-relaxed">
                "Si no cumples exactamente estos criterios, escríbenos igual. Prefiero que me cuentes tu caso
                y yo te digo si puedo ayudarte."
                <br />
                <strong className="not-italic text-[#1c1b1b]">— Juan Tabares</strong>
              </blockquote>
            </div>

            {/* Expectations + direct contact */}
            <div className="space-y-12">
              <div>
                <h3
                  className="text-3xl font-bold mb-6 tracking-tight text-[#1c1b1b]"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  Qué esperar
                </h3>
                <ul className="space-y-4">
                  {expectations.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5">{item.icon}</div>
                      <span
                        className="text-[#424656] font-medium"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct contact */}
              <div className="pt-8 border-t border-[#c2c6d8]/20">
                <p className="text-xs font-bold uppercase tracking-widest text-[#727687] mb-4">
                  Contacto Directo
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:hola@juantabares.co"
                    className="text-xl font-bold text-[#0050cb] flex items-center gap-2 hover:translate-x-1 transition-transform"
                    style={{ fontFamily: "Manrope, sans-serif" }}
                  >
                    hola@juantabares.co
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/juan-tabares-b1272b58/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#424656] hover:text-[#0050cb] transition-colors flex items-center gap-2 font-medium"
                  >
                    Conecta en LinkedIn
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-24 px-4 sm:px-8 text-center">
          <div className="max-w-7xl mx-auto">
            <div
              className="p-12 md:p-20 rounded-xl relative overflow-hidden"
              style={{ background: "#313030" }}
            >
              {/* Blue glow */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px]" style={{ background: "rgba(0,102,255,0.15)" }} />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2
                  className="text-4xl md:text-5xl font-extrabold text-white mb-6"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  ¿Listo para optimizar?
                </h2>
                <p className="text-lg text-white/70 mb-10 leading-relaxed">
                  No pierdas más presupuesto en campañas ineficientes. Obtén una auditoría profesional ahora.
                </p>
                <Link
                  href="/diagnostico-en-vivo"
                  className="inline-flex items-center gap-2 bg-[#0066ff] text-white px-10 py-5 rounded-lg font-bold text-lg hover:opacity-90 active:scale-95 transition-all"
                >
                  Sesión de Diagnóstico gratuito
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
