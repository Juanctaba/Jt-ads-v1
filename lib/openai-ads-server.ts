import { createHash, timingSafeEqual } from "node:crypto";
import type { LeadEvent } from "./openai-ads";

export function webhookAuthorized(header: string | null, secret: string | undefined): boolean {
  if (!secret || secret.length < 32 || !header) return false;
  const digest = (s: string) => createHash("sha256").update(s).digest();
  return timingSafeEqual(digest(header), digest(`Bearer ${secret}`));
}

export async function sendLeadEvent(event: LeadEvent): Promise<"sent" | "disabled"> {
  const pixelId = process.env.NEXT_PUBLIC_OPENAI_ADS_PIXEL_ID;
  const key = process.env.OPENAI_CONVERSIONS_API_KEY;
  if (process.env.OPENAI_ADS_SERVER_ENABLED !== "true" || !pixelId || !key) return "disabled";
  // validate_only avoids polluting reporting during local/preview checks.
  const response = await fetch(`https://bzr.openai.com/v1/events?pid=${encodeURIComponent(pixelId)}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      validate_only: process.env.OPENAI_ADS_VALIDATE_ONLY !== "false",
      integration_source: "jtads_website",
      events: [event],
    }),
    signal: AbortSignal.timeout(5000),
  });
  if (!response.ok) throw new Error(`OpenAI conversions status ${response.status}`);
  return "sent";
}
