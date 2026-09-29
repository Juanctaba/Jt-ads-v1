"use client";

import { useState } from "react";
import { WHATSAPP_PRICING, type Mercado, type MercadoId } from "@/lib/whatsapp-pricing";

// Único componente de cliente de la página. El resto es server component.
// Sin useEffect: todo se deriva durante el render, así el HTML del servidor y
// el primer render del cliente coinciden y no hay salto al hidratar.

const P = WHATSAPP_PRICING;
const MERCADOS = Object.entries(P.mercados) as [MercadoId, Mercado][];

type Estado = {
  pais: MercadoId | "otro";
  numeros: number;
  volumen: number;
  pctMarketing: number;
  pctUtilidad: number;
  pctAuth: number;
  pctAnuncios: number;
  pctUtilidadEnVentana: number;
  mbaOn: boolean;
  tokens: number;
  plataforma: number;
  modeloIA: number;
  tarifaOtraMarketing: number;
  tarifaOtraUtilidad: number;
};

const INICIAL: Estado = {
  pais: "co",
  numeros: 1,
  volumen: 10000,
  pctMarketing: 30,
  pctUtilidad: 40,
  pctAuth: 0,
  pctAnuncios: 20,
  pctUtilidadEnVentana: 50,
  mbaOn: false,
  tokens: P.mba.tokensDefecto,
  plataforma: 0,
  modeloIA: 0,
  tarifaOtraMarketing: 0.05,
  tarifaOtraUtilidad: 0.01,
};

const usd = (n: number) =>
  `$${n.toLocaleString("es-CO", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const usdFino = (n: number) =>
  `$${n.toLocaleString("es-CO", { minimumFractionDigits: 4, maximumFractionDigits: 4 })}`;
const num = (n: number) => n.toLocaleString("es-CO", { maximumFractionDigits: 0 });

function calcular(e: Estado) {
  const base: Mercado =
    e.pais === "otro"
      ? {
          nombre: "Otro mercado",
          marketing: e.tarifaOtraMarketing,
          utilidad: e.tarifaOtraUtilidad,
          autenticacion: e.tarifaOtraUtilidad,
          servicio: e.tarifaOtraUtilidad,
        }
      : P.mercados[e.pais];

  // Tarifas vigentes hasta el 30 de septiembre, para la comparación.
  const cambios =
    e.pais !== "otro"
      ? (P.anterior.cambiosDeTarifa as Record<string, Partial<Mercado>>)[e.pais]
      : undefined;
  const antes: Mercado = { ...base, ...(cambios ?? {}) };

  const V = Math.max(0, e.volumen);
  const pctServicio = Math.max(0, 100 - e.pctMarketing - e.pctUtilidad - e.pctAuth);
  const M = (V * e.pctMarketing) / 100;
  const U = (V * e.pctUtilidad) / 100;
  const A = (V * e.pctAuth) / 100;
  const S = (V * pctServicio) / 100;

  // Ventana de punto de entrada gratuito: Meta la marca gratis para marketing,
  // utilidad, autenticación y servicio. Meta Business Agent es la excepción,
  // porque sigue cobrando tokens dentro de la ventana.
  const f = e.pctAnuncios / 100;
  const pagable = 1 - f;

  const costoMarketing = M * pagable * base.marketing;
  const costoUtilidad = U * pagable * base.utilidad;
  const costoAuth = A * pagable * base.autenticacion;

  const servicioGratis = P.servicioGratisPorNumero * Math.max(1, e.numeros);
  const servicioTrasVentana = S * pagable;
  const servicioFacturable = Math.max(0, servicioTrasVentana - servicioGratis);
  const costoServicio = e.mbaOn ? 0 : servicioFacturable * base.servicio;
  const costoMBA = e.mbaOn ? (S * e.tokens * P.mba.usdPorMillonTokens) / 1_000_000 : 0;

  const metaTotal = costoMarketing + costoUtilidad + costoAuth + costoServicio + costoMBA;

  // Reglas hasta el 30 de septiembre de 2026: el servicio no se cobraba y la
  // utilidad enviada respondiendo dentro de la ventana de 24 h tampoco.
  const utilidadFueraDeVentana = U * pagable * (1 - e.pctUtilidadEnVentana / 100);
  const metaAntes =
    M * pagable * antes.marketing +
    utilidadFueraDeVentana * antes.utilidad +
    A * pagable * antes.autenticacion;

  const mensajesFacturados =
    M * pagable + U * pagable + A * pagable + (e.mbaOn ? S : servicioFacturable);

  return {
    base,
    pctServicio,
    M, U, A, S,
    costoMarketing, costoUtilidad, costoAuth, costoServicio, costoMBA,
    ahorroVentana: V * f,
    servicioCubiertoGratis: Math.min(servicioTrasVentana, servicioGratis),
    metaTotal,
    metaAntes,
    delta: metaTotal - metaAntes,
    deltaPct: metaAntes > 0 ? ((metaTotal - metaAntes) / metaAntes) * 100 : null,
    promedioPorMensaje: mensajesFacturados > 0 ? metaTotal / mensajesFacturados : 0,
    totalReal: metaTotal + Math.max(0, e.plataforma) + Math.max(0, e.modeloIA),
    extras: Math.max(0, e.plataforma) + Math.max(0, e.modeloIA),
  };
}

const labelCls = "block text-sm font-semibold text-[var(--text-primary)] mb-2";
const inputCls =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20";
const rangeCls = "w-full accent-[#0066ff]";
const ayudaCls = "mt-1 text-xs text-[#727687]";

export default function CalculadoraWhatsApp() {
  const [e, setE] = useState<Estado>(INICIAL);
  const set = <K extends keyof Estado>(k: K, v: Estado[K]) => setE((p) => ({ ...p, [k]: v }));
  const r = calcular(e);

  const filas = [
    { etiqueta: "Marketing", mensajes: r.M, costo: r.costoMarketing },
    { etiqueta: "Utilidad", mensajes: r.U, costo: r.costoUtilidad },
    { etiqueta: "Autenticación", mensajes: r.A, costo: r.costoAuth },
    e.mbaOn
      ? { etiqueta: "Meta Business Agent", mensajes: r.S, costo: r.costoMBA }
      : { etiqueta: "Servicio", mensajes: r.S, costo: r.costoServicio },
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
      {/* ── Entradas ── */}
      <form className="space-y-6" onSubmit={(ev) => ev.preventDefault()}>
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="pais" className={labelCls}>País de tus destinatarios</label>
            <select
              id="pais"
              className={inputCls}
              value={e.pais}
              onChange={(ev) => set("pais", ev.target.value as Estado["pais"])}
            >
              {MERCADOS.map(([id, m]) => (
                <option key={id} value={id}>{m.nombre}</option>
              ))}
              <option value="otro">Otro país (pego mis tarifas)</option>
            </select>
            <p className={ayudaCls}>La tarifa depende del país de quien recibe, no del tuyo.</p>
          </div>

          <div>
            <label htmlFor="numeros" className={labelCls}>Números de teléfono en la API</label>
            <input
              id="numeros" type="number" min={1} max={50} inputMode="numeric" className={inputCls}
              value={e.numeros}
              onChange={(ev) => set("numeros", Math.max(1, Number(ev.target.value) || 1))}
            />
            <p className={ayudaCls}>Cada número trae {num(P.servicioGratisPorNumero)} mensajes de servicio gratis al mes.</p>
          </div>
        </div>

        {e.pais === "otro" && (
          <div className="grid sm:grid-cols-2 gap-5 rounded-xl bg-[#fcf9f8] border border-gray-100 p-5">
            <div>
              <label htmlFor="tmk" className={labelCls}>Tu tarifa de marketing (USD)</label>
              <input
                id="tmk" type="number" min={0} step={0.0001} inputMode="decimal" className={inputCls}
                value={e.tarifaOtraMarketing}
                onChange={(ev) => set("tarifaOtraMarketing", Math.max(0, Number(ev.target.value) || 0))}
              />
            </div>
            <div>
              <label htmlFor="tut" className={labelCls}>Tu tarifa de utilidad (USD)</label>
              <input
                id="tut" type="number" min={0} step={0.0001} inputMode="decimal" className={inputCls}
                value={e.tarifaOtraUtilidad}
                onChange={(ev) => set("tarifaOtraUtilidad", Math.max(0, Number(ev.target.value) || 0))}
              />
              <p className={ayudaCls}>
                Cópialas del{" "}
                <a href={P.fuente} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] font-semibold hover:underline">
                  tarifario oficial de Meta
                </a>
                . Servicio y autenticación usan la misma que utilidad.
              </p>
            </div>
          </div>
        )}

        <div>
          <label htmlFor="volumen" className={labelCls}>Mensajes que envías al mes</label>
          <input
            id="volumen" type="number" min={0} step={100} inputMode="numeric" className={inputCls}
            value={e.volumen}
            onChange={(ev) => set("volumen", Math.max(0, Number(ev.target.value) || 0))}
          />
          <p className={ayudaCls}>Solo los que envías tú. Los que te escriben los clientes nunca se cobran.</p>
        </div>

        <fieldset className="rounded-xl border border-gray-100 bg-[#fcf9f8] p-5">
          <legend className="px-2 text-sm font-semibold text-[var(--text-primary)]">
            Cómo se reparten tus mensajes
          </legend>

          {([
            ["pctMarketing", "Marketing", "Promociones y campañas. Es la categoría más cara."],
            ["pctUtilidad", "Utilidad", "Confirmaciones, envíos, recordatorios de una compra."],
            ["pctAuth", "Autenticación", "Códigos de verificación."],
          ] as const).map(([k, etiqueta, ayuda]) => (
            <div key={k} className="mt-4 first:mt-2">
              <label htmlFor={k} className="flex items-baseline justify-between text-sm font-semibold text-[var(--text-primary)]">
                <span>{etiqueta}</span>
                <span className="tabular-nums text-[var(--accent)]" id={`${k}-val`}>{e[k]}%</span>
              </label>
              <input
                id={k} type="range" min={0} max={100} step={5} className={`${rangeCls} mt-2`}
                aria-describedby={`${k}-val ${k}-help`}
                value={e[k]}
                onChange={(ev) => set(k, Number(ev.target.value))}
              />
              <p id={`${k}-help`} className={ayudaCls}>{ayuda}</p>
            </div>
          ))}

          <div className="mt-5 flex items-baseline justify-between rounded-lg bg-white border border-gray-100 px-4 py-3">
            <span className="text-sm font-semibold text-[var(--text-primary)]">Servicio (el resto)</span>
            <span className="tabular-nums text-sm font-bold text-[var(--text-primary)]">{r.pctServicio}%</span>
          </div>
          <p className={ayudaCls}>
            Respuestas dentro de la ventana de 24 h. Desde el {P.vigenteDesdeTexto} se cobran.
          </p>
        </fieldset>

        <div>
          <label htmlFor="pctAnuncios" className="flex items-baseline justify-between text-sm font-semibold text-[var(--text-primary)]">
            <span>Conversaciones que nacen de anuncios de clic a WhatsApp</span>
            <span className="tabular-nums text-[var(--accent)]" id="anuncios-val">{e.pctAnuncios}%</span>
          </label>
          <input
            id="pctAnuncios" type="range" min={0} max={100} step={5} className={`${rangeCls} mt-2`}
            aria-describedby="anuncios-val anuncios-help"
            value={e.pctAnuncios}
            onChange={(ev) => set("pctAnuncios", Number(ev.target.value))}
          />
          <p id="anuncios-help" className={ayudaCls}>
            Abren la ventana de punto de entrada gratuito: dentro de ella Meta no cobra la entrega.
          </p>
        </div>

        <div>
          <label htmlFor="pctUtilidadEnVentana" className="flex items-baseline justify-between text-sm font-semibold text-[var(--text-primary)]">
            <span>Utilidad que envías respondiendo (dentro de la ventana de 24 h)</span>
            <span className="tabular-nums text-[var(--accent)]" id="ventana-val">{e.pctUtilidadEnVentana}%</span>
          </label>
          <input
            id="pctUtilidadEnVentana" type="range" min={0} max={100} step={5} className={`${rangeCls} mt-2`}
            aria-describedby="ventana-val ventana-help"
            value={e.pctUtilidadEnVentana}
            onChange={(ev) => set("pctUtilidadEnVentana", Number(ev.target.value))}
          />
          <p id="ventana-help" className={ayudaCls}>
            Solo afecta a la comparación: hasta el {P.anterior.vigenteHastaTexto} estos mensajes eran gratis.
          </p>
        </div>

        <fieldset className="rounded-xl border border-gray-100 p-5">
          <legend className="px-2 text-sm font-semibold text-[var(--text-primary)]">
            ¿Respondes con Meta Business Agent?
          </legend>
          <label htmlFor="mba" className="flex items-start gap-3 cursor-pointer">
            <input
              id="mba" type="checkbox" className="mt-1 h-4 w-4 accent-[#0066ff]"
              checked={e.mbaOn}
              onChange={(ev) => set("mbaOn", ev.target.checked)}
            />
            <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Sí. Meta cobra por tokens ({usd(P.mba.usdPorMillonTokens)} por millón) en lugar de por mensaje de servicio,
              y ese cargo aplica también dentro de la ventana gratuita.
            </span>
          </label>
          {e.mbaOn && (
            <div className="mt-4">
              <label htmlFor="tokens" className={labelCls}>Tokens por mensaje</label>
              <input
                id="tokens" type="number" min={1000} step={500} inputMode="numeric" className={inputCls}
                value={e.tokens}
                onChange={(ev) => set("tokens", Math.max(0, Number(ev.target.value) || 0))}
              />
              <p className={ayudaCls}>
                Meta estima entre {num(P.mba.tokensMin)} y {num(P.mba.tokensMax)} por mensaje, según lo compleja que sea la respuesta.
              </p>
            </div>
          )}
        </fieldset>

        <fieldset className="rounded-xl border border-gray-100 p-5">
          <legend className="px-2 text-sm font-semibold text-[var(--text-primary)]">
            Lo que pagas aparte de Meta (opcional)
          </legend>
          <div className="grid sm:grid-cols-2 gap-5 mt-2">
            <div>
              <label htmlFor="plataforma" className={labelCls}>Plataforma al mes (USD)</label>
              <input
                id="plataforma" type="number" min={0} step={10} inputMode="decimal" className={inputCls}
                value={e.plataforma}
                onChange={(ev) => set("plataforma", Math.max(0, Number(ev.target.value) || 0))}
              />
            </div>
            <div>
              <label htmlFor="modeloIA" className={labelCls}>Modelo de IA al mes (USD)</label>
              <input
                id="modeloIA" type="number" min={0} step={10} inputMode="decimal" className={inputCls}
                value={e.modeloIA}
                onChange={(ev) => set("modeloIA", Math.max(0, Number(ev.target.value) || 0))}
              />
            </div>
          </div>
        </fieldset>
      </form>

      {/* ── Resultado ── */}
      <div id="resultado" className="lg:sticky lg:top-24 lg:self-start">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm min-h-[420px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#727687] mb-2">
            Lo que te cobra Meta al mes
          </p>
          <p className="text-4xl font-bold tabular-nums text-[var(--text-primary)]" aria-live="polite">
            {usd(r.metaTotal)}
          </p>
          <p className="mt-1 text-sm text-[#727687]">
            {num(e.volumen)} mensajes a destinatarios en {r.base.nombre}
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th scope="col" className="pb-2 text-xs font-bold uppercase tracking-wider text-[#727687]">Categoría</th>
                  <th scope="col" className="pb-2 text-right text-xs font-bold uppercase tracking-wider text-[#727687]">Mensajes</th>
                  <th scope="col" className="pb-2 text-right text-xs font-bold uppercase tracking-wider text-[#727687]">Costo</th>
                </tr>
              </thead>
              <tbody>
                {filas.map((f) => (
                  <tr key={f.etiqueta} className="border-b border-gray-50">
                    <th scope="row" className="py-2 font-medium text-[var(--text-primary)]">{f.etiqueta}</th>
                    <td className="py-2 text-right tabular-nums text-[#727687]">{num(f.mensajes)}</td>
                    <td className="py-2 text-right tabular-nums font-semibold text-[var(--text-primary)]">{usd(f.costo)}</td>
                  </tr>
                ))}
                {e.pctAnuncios > 0 && (
                  <tr>
                    <th scope="row" className="py-2 font-medium text-[#16704a]">Ventana gratuita por anuncios</th>
                    <td className="py-2 text-right tabular-nums text-[#16704a]">−{num(r.ahorroVentana)}</td>
                    <td className="py-2 text-right text-[#16704a]">incluido</td>
                  </tr>
                )}
                {!e.mbaOn && r.servicioCubiertoGratis > 0 && (
                  <tr>
                    <th scope="row" className="py-2 font-medium text-[#16704a]">Servicio gratis ({num(e.numeros)} × {num(P.servicioGratisPorNumero)})</th>
                    <td className="py-2 text-right tabular-nums text-[#16704a]">−{num(r.servicioCubiertoGratis)}</td>
                    <td className="py-2 text-right text-[#16704a]">incluido</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <dl className="mt-5 space-y-2 border-t border-gray-100 pt-4 text-sm">
            <div className="flex items-baseline justify-between">
              <dt className="text-[#727687]">Promedio por mensaje facturado</dt>
              <dd className="tabular-nums font-semibold text-[var(--text-primary)]">{usdFino(r.promedioPorMensaje)}</dd>
            </div>
            {r.extras > 0 && (
              <div className="flex items-baseline justify-between">
                <dt className="text-[#727687]">Costo total del canal</dt>
                <dd className="tabular-nums font-semibold text-[var(--text-primary)]">{usd(r.totalReal)}</dd>
              </div>
            )}
          </dl>

          <div className="mt-5 rounded-xl bg-[#fcf9f8] border border-gray-100 p-4">
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Con las reglas vigentes hasta el {P.anterior.vigenteHastaTexto}, el mismo volumen te costaba{" "}
              <strong className="text-[var(--text-primary)] tabular-nums">{usd(r.metaAntes)}</strong>.
              {r.delta > 0.005 ? (
                <>
                  {" "}Desde el {P.vigenteDesdeTexto} pagas{" "}
                  <strong className="text-[#b23a26] tabular-nums">{usd(r.delta)} más</strong>
                  {r.deltaPct !== null && <> ({Math.round(r.deltaPct)}%)</>}.
                </>
              ) : (
                <> Tu mezcla actual no se ve afectada por el cambio.</>
              )}
            </p>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-[#727687]">
            Estimación en {P.moneda} con las tarifas oficiales de Meta vigentes desde el {P.vigenteDesdeTexto},
            revisadas el {P.revisadoElTexto}. No aplicamos descuentos por volumen: existen para utilidad y
            autenticación, así que tu factura real puede ser algo menor.{" "}
            <a href={P.fuente} target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] font-semibold hover:underline">
              Tarifario oficial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
