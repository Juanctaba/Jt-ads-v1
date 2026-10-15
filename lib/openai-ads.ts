/** Shared contract; contains no credentials or server dependencies. */
export const CONSENT_COOKIE = "jtads_openai_measurement";
export const ATTRIBUTION_COOKIE = "__oppref";
export const BROWSER_COOKIE = "__obref";
export const SOURCE_URLS = {
  ExDq9WBVQ74hXB8YBmkH: "https://jtads.com/diagnostico-en-vivo",
  D4pmggg9CUScHXgsEcpg: "https://jtads.com/contacto",
  azNkDnlHWDexRIOMjNnr: "https://jtads.com/diagnostico-operacion",
} as const;

export function opaque(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 && value.length <= 2048
    ? value : undefined;
}

export function readCookie(name: string, cookies: string): string | undefined {
  const raw = cookies.split(";").map((v) => v.trim()).find((v) => v.startsWith(`${name}=`));
  if (!raw) return undefined;
  try { return decodeURIComponent(raw.slice(name.length + 1)); } catch { return undefined; }
}

export function measurementAllowed(cookies: string): boolean {
  return readCookie(CONSENT_COOKIE, cookies) === "granted";
}

export type LeadEvent = {
  id: string;
  type: "lead_created";
  timestamp_ms: number;
  action_source: "web";
  source_url: string;
  data: { type: "customer_action" };
  oppref?: string;
  user?: { obref: string };
};

/** Authenticated GHL workflows must map these fields from a confirmed submission. */
export function ghlLeadEvent(body: unknown, now = Date.now()): LeadEvent | null {
  if (!body || typeof body !== "object") return null;
  const b = body as Record<string, unknown>;
  if (b.measurement_consent !== true || typeof b.form_id !== "string" ||
      !Object.hasOwn(SOURCE_URLS, b.form_id) || typeof b.submission_id !== "string" ||
      !/^[a-zA-Z0-9_-]{1,128}$/.test(b.submission_id) ||
      typeof b.timestamp_ms !== "number" || !Number.isSafeInteger(b.timestamp_ms) ||
      b.timestamp_ms < now - 7 * 86400000 || b.timestamp_ms > now + 600000) return null;
  const obref = opaque(b.obref);
  return {
    id: `ghl_${b.form_id}_${b.submission_id}`,
    type: "lead_created", timestamp_ms: b.timestamp_ms, action_source: "web",
    source_url: SOURCE_URLS[b.form_id as keyof typeof SOURCE_URLS],
    data: { type: "customer_action" },
    ...(opaque(b.oppref) ? { oppref: opaque(b.oppref) } : {}),
    ...(obref ? { user: { obref } } : {}),
  };
}
