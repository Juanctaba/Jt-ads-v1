// Tarifario oficial de Meta para la plataforma de WhatsApp Business.
//
// Fuente única de verdad de la calculadora y de los artículos del clúster.
// Cuando Meta cambia una tarifa o una regla, se toca este archivo y nada más;
// la fecha de revisión se renderiza en pantalla para que un dato viejo se vea
// viejo en lugar de mentir en silencio.
//
// Por qué está escrito a mano y no se descarga: Meta publica el tarifario como
// XLSX en una URL de fbcdn con firma que caduca en días. Un fetch en build o en
// request se rompería en silencio y dejaría la página con tarifas vacías.
//
// Revisado el 2026-09-29 en https://developers.facebook.com/docs/whatsapp/pricing

export type Mercado = {
  nombre: string;
  marketing: number;
  utilidad: number;
  autenticacion: number;
  servicio: number;
};

export const WHATSAPP_PRICING = {
  fuente: "https://developers.facebook.com/docs/whatsapp/pricing",
  revisadoEl: "2026-09-29",
  revisadoElTexto: "29 de septiembre de 2026",
  vigenteDesde: "2026-10-01",
  vigenteDesdeTexto: "1 de octubre de 2026",
  moneda: "USD",

  // Nivel gratuito introducido el 1 de octubre de 2026: 1.000 mensajes de
  // servicio entregados por número de teléfono de la empresa al mes. Se comparte
  // entre envíos individuales y de grupo, no se acumula y se reinicia cada mes.
  servicioGratisPorNumero: 1000,

  // Tarifas por mensaje entregado, en USD, vigentes desde el 1 de octubre de 2026.
  // La columna "servicio" es nueva: hasta el 30 de septiembre de 2026 estos
  // mensajes no se cobraban.
  mercados: {
    co: { nombre: "Colombia", marketing: 0.0125, utilidad: 0.0008, autenticacion: 0.0008, servicio: 0.0008 },
    mx: { nombre: "México", marketing: 0.0397, utilidad: 0.0085, autenticacion: 0.0085, servicio: 0.0085 },
    cl: { nombre: "Chile", marketing: 0.0889, utilidad: 0.02, autenticacion: 0.02, servicio: 0.02 },
    pe: { nombre: "Perú", marketing: 0.0703, utilidad: 0.03, autenticacion: 0.03, servicio: 0.03 },
    ar: { nombre: "Argentina", marketing: 0.0618, utilidad: 0.026, autenticacion: 0.026, servicio: 0.026 },
    br: { nombre: "Brasil", marketing: 0.0625, utilidad: 0.0068, autenticacion: 0.0068, servicio: 0.0068 },
    es: { nombre: "España", marketing: 0.0707, utilidad: 0.02, autenticacion: 0.02, servicio: 0.02 },
  } satisfies Record<string, Mercado>,

  // Reglas y tarifas vigentes hasta el 30 de septiembre de 2026, para poder
  // mostrar cuánto sube la factura. Solo se listan los mercados con un cambio
  // de tarifa confirmado; el resto mantiene la misma cifra y lo que cambia son
  // las reglas de abajo.
  anterior: {
    vigenteHasta: "2026-09-30",
    vigenteHastaTexto: "30 de septiembre de 2026",
    servicioFacturado: false,
    utilidadEnVentanaFacturada: false,
    cambiosDeTarifa: {
      mx: { marketing: 0.0305 },
      pe: { utilidad: 0.02, autenticacion: 0.02 },
    },
  },

  // Meta Business Agent: categoría nueva de mensaje sin plantilla, facturada
  // desde el 1 de agosto de 2026 por tokens en lugar de por mensaje. Meta cobra
  // solo tokens de entrada y salida, no los de caché.
  //
  // Sustituye al cargo de servicio, no se suma: "un mensaje sin plantilla se
  // cobra como un mensaje de Meta Business Agent o como un mensaje de servicio,
  // nunca como ambos".
  mba: {
    desde: "2026-08-01",
    desdeTexto: "1 de agosto de 2026",
    usdPorMillonTokens: 2.0,
    tokensMin: 20000,
    tokensMax: 25000,
    tokensDefecto: 22500,
  },

  // Límites de mensajería de la API: máximo de destinatarios únicos a los que se
  // puede escribir fuera de la ventana de servicio en 24 horas. Se calculan por
  // portafolio comercial, no por número.
  // https://developers.facebook.com/docs/whatsapp/messaging-limits
  limitesMensajeria: [250, 2000, 10000, 100000] as const,
} as const;

export type MercadoId = keyof typeof WHATSAPP_PRICING.mercados;
