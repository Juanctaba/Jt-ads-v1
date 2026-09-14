// Fuente única de verdad para enlaces de afiliado y datos de terceros que
// caducan. Cuando una oferta o un precio cambian se toca este archivo y nada más.
//
// Reglas (ver AUTOMATIZACION-PLAN.md):
// - Los enlaces se renderizan solo con app/soluciones/_components/AffiliateLink.tsx,
//   que fuerza rel="sponsored nofollow noopener" y data-cta.
// - Solo aparecen en /soluciones/gohighlevel y /soluciones/stack. Nunca en el hub.
// - `oferta` vacía = la página no promete ninguna oferta para esa herramienta.
// - Una herramienta sale de aquí el día que JT Ads deja de usarla.

export type Affiliate = {
  nombre: string;
  url: string;
  oferta: string;
};

export const AFFILIATES = {
  gohighlevel: {
    nombre: "GoHighLevel",
    url: "https://www.gohighlevel.com/highlevel-bootcamp-es?fp_ref=jt-ads-performance-llc93",
    oferta: "30 días gratis + bootcamp de implementación",
  },
  respondio: {
    nombre: "Respond.io",
    url: "https://get.respond.io/fbj14s44qmov",
    oferta: "7 días de prueba",
  },
  manychat: {
    nombre: "ManyChat",
    url: "https://manychat.partnerlinks.io/p7b7yziotma7-wki14",
    oferta: "2 meses con 50% de descuento",
  },
  elevenlabs: {
    nombre: "ElevenLabs",
    url: "https://try.elevenlabs.io/ejw3834hfy5k",
    oferta: "",
  },
  make: {
    nombre: "Make",
    url: "https://www.make.com/en/register?pc=jtads",
    oferta: "",
  },
  // stape: pendiente de enlace de afiliado.
} satisfies Record<string, Affiliate>;

export type AffiliateSlug = keyof typeof AFFILIATES;

export const AFFILIATES_REVISADO = "2026-09-14";

// Precios públicos de HighLevel. Leídos en la fuente en la fecha indicada;
// la página muestra la fecha de revisión para que un cambio de precios no
// quede como promesa incumplida.
export const GHL_PRICING = {
  fuente: "https://www.gohighlevel.com/pricing",
  revisadoEl: "2026-09-14",
  revisadoElTexto: "14 de septiembre de 2026",
  moneda: "USD",
  pruebaEstandarDias: 14,
  planes: [
    {
      nombre: "Starter",
      mensual: 97,
      anual: 970,
      incluye: ["Contactos y usuarios ilimitados", "CRM, automatizaciones, embudos y agenda", "Soporte 24/7"],
    },
    {
      nombre: "Unlimited",
      mensual: 297,
      anual: 2970,
      incluye: ["Todo lo de Starter", "Acceso básico a la API"],
    },
    {
      nombre: "Agency Pro",
      mensual: 497,
      anual: 4970,
      incluye: ["Todo lo de Unlimited", "Acceso avanzado a la API", "Reportes por usuario"],
    },
    {
      nombre: "Enterprise",
      mensual: null,
      anual: null,
      incluye: ["Precio a medida", "Gestor de cuenta dedicado", "Desarrollo a medida y soporte premium"],
    },
  ],
  adicionales: [
    { nombre: "AI Employee Growth", precio: "$50/mes por sub-cuenta" },
    { nombre: "AI Employee Unlimited", precio: "$97/mes por sub-cuenta" },
  ],
} as const;
