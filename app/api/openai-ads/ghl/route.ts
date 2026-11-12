import { NextRequest, NextResponse } from "next/server";
import { ghlLeadEvent } from "@/lib/openai-ads";
import { sendLeadEvent, webhookAuthorized } from "@/lib/openai-ads-server";

export async function POST(req: NextRequest) {
  if (!webhookAuthorized(req.headers.get("authorization"), process.env.OPENAI_ADS_GHL_WEBHOOK_SECRET)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const raw = await req.text();
  if (raw.length > 16384) return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  let body: unknown;
  try { body = JSON.parse(raw); } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (body && typeof body === "object" && (body as Record<string, unknown>).measurement_consent === false) {
    return NextResponse.json({ skipped: "no_measurement_consent" });
  }
  const event = ghlLeadEvent(body);
  if (!event) return NextResponse.json({ error: "Invalid confirmed submission" }, { status: 400 });
  try {
    if (await sendLeadEvent(event) === "disabled") {
      return NextResponse.json({ error: "Tracking not configured" }, { status: 503 });
    }
    return NextResponse.json({ success: true, event_id: event.id });
  } catch {
    // GHL should retry with the same submission ID; never log payloads or keys.
    return NextResponse.json({ error: "Conversion delivery failed; retry same submission" }, { status: 502 });
  }
}
