import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad — JT Ads",
  description: "Política de privacidad y tratamiento de datos personales de JT Ads Performance LLC.",
  alternates: { canonical: "https://jtads.com/politica-de-privacidad" },
};

const sections = [
  {
    title: "1. Responsable del tratamiento",
    content: `JT Ads Performance LLC (en adelante, "la Empresa", "nosotros" o "JT Ads") es el responsable del tratamiento de los datos personales recopilados a través del sitio web jtads.com y sus subpáginas. Puedes contactarnos en hola@juantabares.co para cualquier consulta relacionada con el tratamiento de tus datos.`,
  },
  {
    title: "2. Datos que recopilamos",
    content: `Recopilamos los siguientes tipos de información:

• Datos de contacto: nombre, dirección de correo electrónico, nombre de empresa, cuando completas formularios en nuestro sitio.
• Datos de diagnóstico: información sobre tus plataformas de publicidad, presupuesto mensual y problemática actual, cuando solicitas una sesión de diagnóstico.
• Datos de uso: información técnica sobre tu visita al sitio, como dirección IP, tipo de navegador, páginas visitadas y duración de la sesión, recopilada de forma agregada y anónima.
• Datos de pago: si realizas un pago a través de nuestro portal, este es procesado directamente por Stripe. JT Ads Performance LLC no almacena ni tiene acceso a datos de tarjetas de crédito o débito.`,
  },
  {
    title: "3. Finalidad del tratamiento",
    content: `Utilizamos los datos recopilados para las siguientes finalidades:

• Responder a solicitudes de información y agendar sesiones de diagnóstico.
• Enviar comunicaciones relacionadas con los servicios contratados.
• Mejorar la experiencia del sitio web y el funcionamiento de nuestros servicios.
• Cumplir con obligaciones legales aplicables.

No utilizamos tus datos para marketing no solicitado ni los compartimos con terceros para fines publicitarios.`,
  },
  {
    title: "4. Base legal del tratamiento",
    content: `El tratamiento de tus datos se basa en:

• Tu consentimiento explícito, otorgado al completar formularios de contacto o solicitud.
• La ejecución de un contrato o acuerdo de servicios, cuando aplique.
• El interés legítimo de JT Ads Performance LLC en responder consultas comerciales y mejorar sus servicios.`,
  },
  {
    title: "5. Compartición de datos con terceros",
    content: `JT Ads Performance LLC puede compartir datos con los siguientes proveedores de servicios, exclusivamente para las finalidades descritas:

• Resend (procesamiento de emails): los datos del formulario se transmiten para enviar notificaciones internas. Resend actúa como encargado del tratamiento.
• Stripe (procesamiento de pagos): si realizas un pago, los datos de pago son gestionados directamente por Stripe bajo su propia política de privacidad.
• Vercel (hosting): el sitio web está alojado en servidores de Vercel. Los logs técnicos pueden incluir IPs y datos de acceso.

No vendemos ni cedemos datos personales a terceros.`,
  },
  {
    title: "6. Retención de datos",
    content: `Conservamos los datos de contacto y solicitudes durante el tiempo necesario para responder a tu consulta y, si se establece una relación comercial, durante la vigencia de dicha relación más un período adicional de hasta 3 años para cumplir con obligaciones legales. Puedes solicitar la eliminación de tus datos en cualquier momento.`,
  },
  {
    title: "7. Tus derechos",
    content: `Dependiendo de tu jurisdicción, puedes tener los siguientes derechos sobre tus datos personales:

• Acceso: solicitar información sobre qué datos tenemos sobre ti.
• Rectificación: corregir datos inexactos o incompletos.
• Supresión: solicitar la eliminación de tus datos ("derecho al olvido").
• Oposición: oponerte al tratamiento de tus datos para determinadas finalidades.
• Portabilidad: recibir tus datos en formato estructurado y legible por máquina.
• Revocación del consentimiento: retirar tu consentimiento en cualquier momento.

Para ejercer cualquiera de estos derechos, escríbenos a hola@juantabares.co. Responderemos en un plazo máximo de 30 días hábiles.`,
  },
  {
    title: "8. Cookies y tecnologías de seguimiento",
    content: `El sitio web puede utilizar cookies técnicas esenciales para su funcionamiento. No utilizamos cookies de seguimiento de terceros para publicidad comportamental sin consentimiento previo. Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.`,
  },
  {
    title: "9. Seguridad",
    content: `Implementamos medidas técnicas y organizativas razonables para proteger tus datos contra acceso no autorizado, pérdida o alteración. El sitio opera bajo HTTPS. Los datos de formularios se transmiten de forma cifrada.`,
  },
  {
    title: "10. Cambios a esta política",
    content: `Podemos actualizar esta política de privacidad periódicamente. Cuando lo hagamos, actualizaremos la fecha de última modificación indicada a continuación. Te recomendamos revisar esta página de forma ocasional. El uso continuado del sitio tras la publicación de cambios implica aceptación de la política actualizada.`,
  },
  {
    title: "11. Contacto",
    content: `Si tienes preguntas, inquietudes o solicitudes relacionadas con el tratamiento de tus datos personales, puedes contactarnos en:\n\nhola@juantabares.co\n\nJT Ads Performance LLC · jtads.com`,
  },
];

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="pt-20 pb-6 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-4">
              Privacidad
            </p>
            <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4">
              Política de Privacidad
            </h1>
            <p className="text-[var(--text-muted)] text-sm">
              Última actualización: abril de 2026
            </p>
          </div>
        </section>

        <section className="py-12 px-6 bg-white">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">{s.title}</h2>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)] whitespace-pre-line">
                  {s.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-12 px-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-[var(--text-muted)]">
              ¿Tienes dudas sobre cómo tratamos tus datos?{" "}
              <a href="mailto:hola@juantabares.co" className="text-[var(--accent)] hover:underline">
                Escríbenos
              </a>{" "}
              — respondemos en menos de 4 horas hábiles.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
