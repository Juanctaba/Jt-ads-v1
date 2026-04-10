import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Por qué el CPL de tu plataforma miente y cómo solucionarlo | JT Ads",
  description:
    "El dashboard de Google Ads muestra un CPL de $45. Tu CRM dice que los leads no convierten. Esta guía explica por qué sucede y cómo el tracking server-side soluciona la discrepancia.",
  alternates: {
    canonical:
      "https://jtads.com/blog/tracking-server-side-cpl-plataforma",
  },
  openGraph: {
    title:
      "Por qué el CPL de tu plataforma miente y cómo solucionarlo | JT Ads",
    description:
      "Guía sobre tracking server-side para directores de marketing: cómo corregir la discrepancia entre el CPL de plataforma y el CPL real.",
    images: ["/og-image.png"],
  },
};

export default function PostTrackingServerSide() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1c1b1b] pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#9bb4fe] text-sm mb-8 hover:underline"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            ← Volver al blog
          </Link>
          <span className="inline-block mb-5 px-3 py-1 rounded-full bg-[#9bb4fe]/20 text-[#9bb4fe] text-xs font-semibold uppercase tracking-wide">
            Tracking Técnico
          </span>
          <h1
            className="font-black text-white text-3xl md:text-4xl leading-tight mb-6"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Por qué el CPL de tu plataforma te está mintiendo (y cómo
            solucionarlo)
          </h1>
          <p
            className="text-[#727687] text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Abril 2026 · 10 min de lectura
          </p>
        </div>
      </section>

      {/* Article Body */}
      <article className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">

          {/* Intro */}
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            La escena se repite en casi todas las reuniones de revisión mensual:
            el equipo de marketing presenta el reporte de Google Ads con un CPL
            de $45. El director de ventas dice que los leads no sirven, que el
            equipo comercial pierde tiempo con contactos que no califican, que
            las conversiones reales están lejos de lo que muestran las
            plataformas.
          </p>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            La discrepancia no es un error de reporte ni un problema de
            expectativas. Es una consecuencia directa de cómo funciona el
            tracking por defecto en Google Ads — y es la causa número uno de
            decisiones de presupuesto incorrectas.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p
              className="text-[#424656] text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <strong className="text-[#1c1b1b]">Dato de referencia:</strong> en
              las cuentas que auditamos en 2025, la diferencia promedio entre el
              CPL reportado por la plataforma y el CPL real (basado en leads
              calificados en CRM) fue del{" "}
              <strong className="text-[#1c1b1b]">40% al 60%</strong>. Dicho de
              otro modo: muchas empresas creen que están pagando $50 por lead
              cuando en realidad están pagando $80–$100 por un lead que realmente
              vale algo.
            </p>
          </div>

          {/* Section 1 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Por qué el tracking por defecto está roto
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            El tracking estándar de Google Ads funciona con un píxel —
            básicamente un fragmento de código JavaScript que se ejecuta en el
            navegador del usuario cuando completa una acción (llena un
            formulario, llama, compra). Ese píxel le avisa a Google: "ocurrió
            una conversión".
          </p>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            El problema es que ese aviso depende completamente del navegador
            — y los navegadores modernos han reducido drásticamente la capacidad
            de los píxeles de terceros de funcionar correctamente.
          </p>

          <ul
            className="space-y-4 mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <li className="flex items-start gap-3">
              <span className="text-[#0066ff] font-bold mt-0.5">→</span>
              <div>
                <p className="text-[#1c1b1b] font-semibold text-sm mb-1">
                  Ad blockers
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Extensiones como uBlock Origin, AdGuard o Brave Shield
                  bloquean activamente los píxeles de seguimiento. En audiencias
                  B2B técnicas, la tasa de uso de ad blockers puede superar el
                  40%.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0066ff] font-bold mt-0.5">→</span>
              <div>
                <p className="text-[#1c1b1b] font-semibold text-sm mb-1">
                  Intelligent Tracking Prevention (ITP) de Safari
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Safari es el segundo navegador más usado en LATAM y tiene
                  restricciones agresivas sobre cookies de terceros. En muchos
                  casos, las conversiones que ocurren en Safari directamente no
                  se registran.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#0066ff] font-bold mt-0.5">→</span>
              <div>
                <p className="text-[#1c1b1b] font-semibold text-sm mb-1">
                  Modo incógnito y configuraciones de privacidad
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Los usuarios que navegan en modo incógnito o con configuraciones
                  de privacidad estrictas generan conversiones que el píxel no
                  puede capturar.
                </p>
              </div>
            </li>
          </ul>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p
              className="text-[#424656] text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <strong className="text-[#1c1b1b]">El resultado combinado:</strong>{" "}
              entre el 30% y el 40% de las conversiones reales no llegan a
              registrarse en Google Ads. Google ve menos conversiones de las que
              ocurren, el algoritmo de Smart Bidding optimiza con datos
              incompletos, y el costo real por resultado sube — aunque el reporte
              no lo muestre.
            </p>
          </div>

          {/* Section 2 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            El problema específico con el CPL de plataforma
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Hay un segundo problema, distinto al de los píxeles bloqueados: aun
            cuando el píxel funciona perfectamente, lo que cuenta como
            "conversión" en Google no es lo mismo que lo que cuenta como lead
            calificado para tu equipo de ventas.
          </p>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Google cuenta el evento del formulario. Cada vez que alguien hace
            clic en "enviar", Google registra una conversión. Eso incluye:
          </p>

          <ul
            className="space-y-2 mb-6 pl-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {[
              "Competidores que enviaron el formulario para ver tu proceso de ventas",
              "Estudiantes que investigan el sector para un trabajo universitario",
              "Personas de otro país que no cumplen el perfil geográfico",
              "Leads duplicados (el mismo contacto que llenó el formulario dos veces)",
              "Bots y tráfico inválido que pasó los filtros básicos",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[#424656] text-sm leading-relaxed"
              >
                <span className="text-[#727687] mt-0.5">–</span>
                {item}
              </li>
            ))}
          </ul>

          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            El gap entre "conversión de plataforma" y "lead calificado que entra
            al pipeline" puede ser del 20% al 70%, según el sector. En mercados
            B2B con formularios de contacto genéricos, es normal que solo 3 de
            cada 10 formularios recibidos sean leads realmente trabajables.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p
              className="text-[#424656] text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <strong className="text-[#1c1b1b]">Ejemplo concreto:</strong>{" "}
              Google reporta 100 conversiones a $50 CPL = $5,000 invertidos. Tu
              equipo de ventas califica 30 de esos 100 leads. El CPL real no es
              $50 — es <strong className="text-[#1c1b1b]">$167 por lead calificado</strong>.
              La decisión de aumentar o mantener el presupuesto cambia
              completamente con ese número.
            </p>
          </div>

          {/* Section 3 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Qué es el tracking server-side (explicado sin jerga técnica)
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            El tracking tradicional funciona así: el navegador del usuario carga
            tu página, el píxel de Google se activa en ese navegador y le manda
            los datos de la conversión directamente a los servidores de Google.
            Todo depende del navegador.
          </p>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            El tracking server-side cambia eso: cuando el usuario completa una
            acción, los datos van primero a{" "}
            <em>tu propio servidor</em> — no al navegador. Tu servidor valida la
            información, la enriquece si es necesario (por ejemplo, cruzándola
            con el CRM) y la envía directamente a los servidores de Google. El
            navegador del usuario ya no es el intermediario.
          </p>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Eso significa que los ad blockers no lo bloquean, que las
            restricciones de Safari no lo afectan y que el modo incógnito no lo
            rompe. La señal que llega a Google es más completa, más precisa y
            más confiable.
          </p>

          {/* Section 4 */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Cómo se implementa (lo que necesitas saber, no cómo hacerlo)
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            No necesitas ser desarrollador para entender las piezas que
            intervienen. Hay tres componentes principales:
          </p>

          <ol
            className="space-y-6 mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c1b1b] text-white text-sm font-bold flex items-center justify-center">
                1
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  Google Tag Manager Server-Side
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Es la infraestructura de Google para implementar tracking
                  server-side. En lugar de cargar los tags en el navegador del
                  usuario, se configura un contenedor en un servidor propio y
                  los datos fluyen a través de él antes de llegar a Google Ads,
                  GA4 u otras plataformas.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c1b1b] text-white text-sm font-bold flex items-center justify-center">
                2
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  Conversions API de Meta (CAPI)
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  Si también inviertes en Meta Ads, la Conversions API funciona
                  bajo el mismo principio: los eventos se envían desde el
                  servidor directamente a Meta, evitando las limitaciones del
                  píxel del navegador. Implementar ambos — GTM server-side y CAPI
                  — te da una visión consistente entre plataformas.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1c1b1b] text-white text-sm font-bold flex items-center justify-center">
                3
              </span>
              <div>
                <p className="text-[#1c1b1b] font-bold text-sm mb-1">
                  Integración con CRM para enviar solo leads calificados
                </p>
                <p className="text-[#424656] text-sm leading-relaxed">
                  El paso más importante: conectar el CRM al flujo de datos
                  para que Google no reciba señales de todos los formularios
                  enviados, sino solo de los leads que tu equipo de ventas marcó
                  como calificados. Esto le dice al algoritmo exactamente qué
                  tipo de usuario debe buscar — y mejora drásticamente la calidad
                  del tráfico generado.
                </p>
              </div>
            </li>
          </ol>

          <div className="bg-[#f6f3f2] rounded-xl p-6 my-8">
            <p
              className="text-[#424656] text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <strong className="text-[#1c1b1b]">En JT Ads:</strong> la
              configuración de tracking server-side es parte del proceso de
              onboarding estándar. No es un add-on ni un servicio adicional —
              es la base sobre la que construimos todo lo demás. No tiene sentido
              optimizar campañas con datos rotos.
            </p>
          </div>

          {/* Section 5 — Impact */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            El impacto real: qué cambia cuando el tracking funciona bien
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Implementar tracking server-side e integración con CRM no es solo
            una mejora técnica. Cambia cómo funciona el algoritmo de Smart
            Bidding — y eso tiene impacto directo en los resultados.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                stat: "25–35%",
                label: "de conversiones recuperadas",
                desc: "Conversiones que el píxel no estaba capturando y que ahora llegan correctamente a Google.",
              },
              {
                stat: "20–30%",
                label: "de reducción en CPL real",
                desc: "Cuando el algoritmo optimiza con datos correctos, la calidad del tráfico mejora y el costo baja.",
              },
              {
                stat: "+40%",
                label: "en Event Match Quality",
                desc: "La métrica de Google que mide qué tan bien coinciden los datos enviados con usuarios reales.",
              },
            ].map((item) => (
              <div
                key={item.stat}
                className="bg-[#f6f3f2] rounded-xl p-5 text-center"
              >
                <p
                  className="text-3xl font-black text-[#0066ff] mb-1"
                  style={{ fontFamily: "Manrope, sans-serif" }}
                >
                  {item.stat}
                </p>
                <p
                  className="text-[#1c1b1b] font-semibold text-xs mb-2 uppercase tracking-wide"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[#424656] text-xs leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Estos datos son promedios basados en cuentas que auditamos e
            implementamos en 2024–2025. Los resultados varían según el estado
            inicial del tracking, el sector y el volumen de conversiones — pero
            la dirección es consistente: más datos buenos igual a mejor
            optimización igual a mejor rendimiento.
          </p>

          {/* Conclusion + CTA */}
          <h2
            className="font-black text-2xl text-[#1c1b1b] mt-12 mb-4"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Conclusión: el tracking es el primer problema, no el último
          </h2>
          <p
            className="text-[#424656] leading-relaxed mb-6 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Antes de cambiar la estructura de campañas, aumentar el presupuesto
            o revisar las creatividades, hay una pregunta previa que responder:
            ¿estamos midiendo bien?
          </p>
          <p
            className="text-[#424656] leading-relaxed mb-10 text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Si el tracking está roto o incompleto, todas las decisiones que
            tomamos sobre la cuenta se basan en datos incorrectos. Es como
            intentar mejorar la ruta antes de arreglar el GPS. El tracking
            server-side, combinado con la integración del CRM, es la única forma
            de tener una imagen real de lo que está pasando — y de darle al
            algoritmo las señales que necesita para optimizar correctamente.
          </p>

          <div className="bg-[#f6f3f2] rounded-xl p-8 my-8 text-center">
            <p
              className="text-[#1c1b1b] font-bold text-lg mb-3"
              style={{ fontFamily: "Manrope, sans-serif" }}
            >
              ¿Sabes cómo está configurado tu tracking?
            </p>
            <p
              className="text-[#424656] text-sm mb-6 max-w-md mx-auto leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Si no estás seguro, ese es el primer problema a resolver. En el
              diagnóstico en vivo revisamos el estado de tu tracking, qué
              conversiones se están perdiendo y cómo corregirlo — sin costo y
              sin compromiso.
            </p>
            <Link
              href="/diagnostico-en-vivo"
              className="inline-block bg-[#0066ff] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#0052cc] transition-colors duration-150 text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Solicitar diagnóstico gratuito →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
