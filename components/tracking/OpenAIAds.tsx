"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { CONSENT_COOKIE, measurementAllowed, readCookie } from "@/lib/openai-ads";

type Queue = ((...args: unknown[]) => void) & { q?: unknown[][] };
declare global { interface Window { oaiq?: Queue } }

type Consent = "unknown" | "granted" | "denied";
function readConsent(): Consent {
  const stored = readCookie(CONSENT_COOKIE, document.cookie);
  return stored === "granted" || stored === "denied" ? stored : "unknown";
}
function subscribeConsent(callback: () => void) {
  window.addEventListener("jtads-openai-consent", callback);
  window.addEventListener("focus", callback);
  return () => {
    window.removeEventListener("jtads-openai-consent", callback);
    window.removeEventListener("focus", callback);
  };
}
function serverConsent(): Consent { return "unknown"; }

export default function OpenAIAds() {
  const pixelId = process.env.NEXT_PUBLIC_OPENAI_ADS_PIXEL_ID;
  const enabled = process.env.NEXT_PUBLIC_OPENAI_ADS_PIXEL_ENABLED === "true" && !!pixelId;
  const path = usePathname();
  const consent = useSyncExternalStore(subscribeConsent, readConsent, serverConsent);
  const [editing, setEditing] = useState(false);
  const lastPage = useRef<string | null>(null);

  const initialized = useRef(false);

  useEffect(() => {
    if (!enabled) return;
    if (!window.oaiq && consent === "granted") {
      const q: Queue = (...args) => { q.q!.push(args); };
      q.q = [];
      window.oaiq = q;
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://bzrcdn.openai.com/sdk/oaiq.min.js";
      document.head.appendChild(script);
    }
    window.oaiq?.("consent", consent === "granted");
    if (consent === "granted" && !initialized.current) {
      window.oaiq?.("init", { pixelId });
      initialized.current = true;
    }
    if (consent !== "granted") lastPage.current = null;
  }, [enabled, consent, pixelId]);

  useEffect(() => {
    if (!enabled || consent !== "granted" || !measurementAllowed(document.cookie) || lastPage.current === path) return;
    window.oaiq?.("measure", "page_viewed", {
      type: "contents", contents: [{ id: path, content_type: "page" }],
    }, { event_id: crypto.randomUUID() });
    lastPage.current = path;
  }, [enabled, consent, path]);

  function choose(value: "granted" | "denied") {
    document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=15552000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
    window.dispatchEvent(new Event("jtads-openai-consent"));
    setEditing(false);
  }

  if (!enabled) return null;
  if (consent !== "unknown" && !editing) return (
    <button type="button" onClick={() => setEditing(true)} className="fixed bottom-3 left-3 z-50 rounded-lg border bg-white px-3 py-2 text-xs text-slate-700 shadow-sm">
      Preferencias de medición
    </button>
  );
  return (
    <aside aria-label="Preferencias de medición" className="fixed bottom-4 left-4 right-4 z-50 max-w-lg rounded-xl border border-slate-200 bg-white p-5 text-slate-900 shadow-lg">
      <p className="text-sm">¿Permites cookies de OpenAI Ads para medir visitas y solicitudes que llegan desde nuestros anuncios?</p>
      <div className="mt-3 flex gap-3">
        <button type="button" onClick={() => choose("granted")} className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">Permitir</button>
        <button type="button" onClick={() => choose("denied")} className="rounded-lg border border-slate-300 px-4 py-2 text-sm">Rechazar</button>
      </div>
    </aside>
  );
}
