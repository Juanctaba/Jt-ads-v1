import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "../_components/Breadcrumbs";
import AffiliateLink from "../_components/AffiliateLink";
import { AFFILIATES, type AffiliateSlug } from "@/lib/affiliates";
import { absoluteUrl, breadcrumb, toJsonLd, type Crumb } from "@/lib/schema";

// Página de utilidad, no de captación: no persigue keyword ni va en el menú.
// Da salida honesta a los afiliados sin ensuciar las landings de servicio y
// concentra el mantenimiento en lib/affiliates.ts. Sin rankings, sin
// puntuaciones, sin "la mejor herramienta": solo lo que JT Ads usa.

const PATH = "/soluciones/stack";

export const metadata: Metadata = {
  title: "Herramientas de Automatización e IA que Usamos | JT Ads",
  description:
    "Las herramientas con las que implementamos automatización, agentes de IA y medición para nuestros clientes: qué resuelve cada una y en qué caso la usamos.",
  alternates: { canonical: absoluteUrl(PATH), languages: { es: absoluteUrl(PATH) } },
  openGraph: {
    title: "Herramientas de Automatización e IA que Usamos | JT Ads",
    description:
      "El stack real de JT Ads: CRM, mensajería, voz con IA y orquestación de flujos, con el caso concreto en que usamos cada herramienta.",
    images: ["/og-image.png"],
    url: absoluteUrl(PATH),
  },
};

const crumbs: Crumb[] = [
  { name: "Inicio", path: "" },
  { name: "Soluciones", path: "/soluciones" },
  { name: "Stack", path: PATH },
];

type StackTool = {
  slug: AffiliateSlug | string;
  nombre: string;
  categoria: string;
  resuelve: string;
  usamos: string;
  guia?: { href: string; label: string };
};

// Herramientas con enlace de afiliado. Solo se renderizan las que existen en
// AFFILIATES: si una sale de lib/affiliates.ts, desaparece de aquí también.
const conAfiliado: StackTool[] = [
  {
    slug: "gohighlevel",
    nombre: "GoHighLevel",
    categoria: "CRM y automatización todo en uno",
    resuelve: "CRM, embudos, agenda, automatizaciones y mensajería en una sola cuenta.",
    usamos: "Es la base de Omnix y la usamos en implementaciones completas donde la empresa quiere un solo sistema comercial.",
    guia: { href: "/soluciones/gohighlevel", label: "Guía de GoHighLevel en español" },
  },
  {
    slug: "respondio",
    nombre: "Respond.io",
    categoria: "Bandeja omnicanal",
    resuelve: "Centraliza WhatsApp, Instagram, Facebook y chat web en un solo inbox con equipos y asignaciones.",
    usamos: "Cuando varios agentes atienden conversaciones por distintos canales y hace falta repartirlas y medir tiempos de respuesta.",
  },
  {
    slug: "manychat",
    nombre: "ManyChat",
    categoria: "Automatización de mensajería",
    resuelve: "Flujos automáticos de conversación en Instagram, Facebook Messenger y WhatsApp.",
    usamos: "Para flujos de captación en Instagram y WhatsApp: respuestas a comentarios, lead magnets y primera calificación.",
  },
  {
    slug: "elevenlabs",
    nombre: "ElevenLabs",
    categoria: "Voz con IA",
    resuelve: "Síntesis de voz realista y voces personalizadas en varios idiomas.",
    usamos: "Es la voz de los agentes telefónicos que implementamos, en español neutro o con acento regional.",
  },
  {
    slug: "make",
    nombre: "Make",
    categoria: "Orquestación de flujos",
    resuelve: "Conecta aplicaciones y automatiza procesos entre ellas sin programar.",
    usamos: "Para integraciones entre herramientas que no se conectan de forma nativa: CRM, formularios, hojas de cálculo y plataformas de ads.",
  },
];

// Plataformas sobre las que implementamos pero sin enlace de afiliado.
const sinAfiliado: StackTool[] = [
  {
    slug: "hubspot",
    nombre: "HubSpot",
    categoria: "CRM",
    resuelve: "CRM con módulos de marketing, ventas y servicio al cliente.",
    usamos: "Con empresas que tienen equipos de marketing y ventas estructurados y necesitan reportes e integraciones maduras.",
    guia: { href: "/soluciones/hubspot", label: "Implementación de HubSpot en español" },
  },
  {
    slug: "omnix",
    nombre: "Omnix",
    categoria: "CRM con IA",
    resuelve: "Nuestra plataforma construida sobre GoHighLevel: CRM, automatización, WhatsApp API, agentes con IA y bandeja unificada.",
    usamos: "Cuando la empresa quiere arrancar rápido con todo configurado, en español y con acompañamiento de nuestro equipo.",
  },
  {
    slug: "n8n",
    nombre: "n8n",
    categoria: "Orquestación de flujos",
    resuelve: "Automatización de flujos con opción de alojarla en infraestructura propia.",
    usamos: "En integraciones con lógica compleja o cuando la empresa necesita controlar dónde se procesan sus datos.",
  },
  {
    slug: "zapier",
    nombre: "Zapier",
    categoria: "Automatización entre aplicaciones",
    resuelve: "Conexiones simples entre miles de aplicaciones.",
    usamos: "Cuando la empresa ya lo tiene en uso y la integración es sencilla: no migramos lo que funciona.",
  },
  {
    slug: "salesforce",
    nombre: "Salesforce",
    categoria: "CRM corporativo",
    resuelve: "CRM empresarial altamente personalizable.",
    usamos: "En empresas que ya operan sobre Salesforce: construimos automatizaciones e integraciones encima, sin migrar.",
  },
];

const publicados = conAfiliado.filter((t) => t.slug in AFFILIATES);

function ToolCard({ tool, afiliado }: { tool: StackTool; afiliado: boolean }) {
  const aff = afiliado ? AFFILIATES[tool.slug as AffiliateSlug] : null;
  return (
    <article className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col">
      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#727687] mb-2">{tool.categoria}</p>
      <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{tool.nombre}</h3>
      <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-4">{tool.resuelve}</p>
      <p className="text-sm leading-relaxed text-[var(--text-primary)] mb-6">
        <strong>En qué caso la usamos:</strong> {tool.usamos}
      </p>
      <div className="mt-auto flex flex-col gap-3">
        {aff && aff.oferta && (
          <p className="text-xs font-semibold text-[#294487] bg-[#eff4ff] rounded-lg px-3 py-2">Oferta con nuestro enlace: {aff.oferta}</p>
        )}
        {aff && (
          <AffiliateLink
            slug={tool.slug as AffiliateSlug}
            className="inline-flex items-center justify-center gap-2 bg-[#0066ff] text-white px-5 py-3 rounded-lg font-bold hover:bg-[#0050cb] transition-colors text-sm"
          >
            Ir a {tool.nombre} ↗
          </AffiliateLink>
        )}
        {tool.guia && (
          <Link href={tool.guia.href} className="text-center text-sm font-semibold text-[var(--accent)] hover:underline">
            {tool.guia.label} →
          </Link>
        )}
      </div>
    </article>
  );
}

export default function StackPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Herramientas que usa JT Ads en automatización e IA",
    itemListElement: [...publicados, ...sinAfiliado].map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.nombre,
      ...(t.guia ? { url: absoluteUrl(t.guia.href) } : {}),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumb(crumbs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(itemList) }} />
      <Navbar />
      <main className="flex-1">

        <section className="bg-[#0a0a0a] pt-28 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs items={crumbs} tone="dark" />
            <div className="text-center mt-10">
              <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[var(--accent)]/20 text-[#9bb4fe] text-xs font-semibold tracking-widest uppercase">
                Stack
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                El stack con el que trabajamos,{" "}
                <span className="text-[#9bb4fe]">y por qué elegimos cada pieza</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                Las herramientas con las que implementamos{" "}
                <Link href="/soluciones/automatizacion-de-procesos" className="text-[#9bb4fe] hover:underline">
                  automatización de procesos
                </Link>
                ,{" "}
                <Link href="/soluciones/agentes-de-ia" className="text-[#9bb4fe] hover:underline">
                  agentes de IA
                </Link>{" "}
                y medición para nuestros clientes. Qué resuelve cada una y en qué caso la usamos.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 px-6 bg-[#fcf9f8] border-b border-gray-100">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed bg-white rounded-xl border border-gray-100 p-5">
              <strong className="text-[var(--text-primary)]">Sobre los enlaces de esta página.</strong> Algunos de estos
              enlaces son de afiliado: si contratas la herramienta con ellos, JT Ads recibe una comisión sin costo
              adicional para ti. Están aquí porque las usamos en proyectos reales, no al revés. Cuando una herramienta no
              nos convence, no aparece en esta lista.
            </p>
          </div>
        </section>

        <section className="py-20 px-6 bg-[#fcf9f8]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4 text-center">
              Nuestro stack
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto text-center mb-12">
              Herramientas que usamos a diario en implementaciones de CRM, mensajería, voz y orquestación.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publicados.map((t) => (
                <ToolCard key={t.slug} tool={t} afiliado />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4 text-center">
              Otras plataformas sobre las que implementamos
            </h2>
            <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto text-center mb-12">
              No tenemos enlace de afiliado con estas. Trabajamos sobre ellas cuando son la mejor opción para la
              operación o cuando la empresa ya las usa.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sinAfiliado.map((t) => (
                <ToolCard key={t.slug} tool={t} afiliado={false} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 px-6 bg-[#0a0a0a]">
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-3">
                La herramienta es lo último que se elige.
              </h2>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                Primero se entiende la operación. En el diagnóstico te decimos qué combinación tiene sentido para tu caso,
                incluida la que ya tienes.
              </p>
              <Link
                href="/diagnostico-operacion"
                data-cta="diag-operacion-stack-final"
                className="inline-flex items-center justify-center gap-2 bg-[#0066ff] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#0050cb] transition-colors text-sm w-full sm:w-auto"
              >
                Diagnóstico gratuito de tu operación
              </Link>
              <p className="mt-5 text-sm text-[var(--text-muted)]">
                <Link href="/soluciones" className="hover:underline">
                  Ver todas las soluciones de automatización e IA
                </Link>
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
