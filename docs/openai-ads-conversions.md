# OpenAI Ads conversion tracking

Verified against official OpenAI documentation on 2026-10-07:
- https://developers.openai.com/ads/measurement-pixel
- https://developers.openai.com/ads/conversions-api
- https://developers.openai.com/ads/supported-events
- https://developers.openai.com/ads/conversion-tracking

## What is wired

The root layout mounts an optional Measurement Pixel. It loads only after the visitor permits OpenAI Ads measurement; rejection and later revocation stop future events. It records `page_viewed` with data type `contents` on initial load and pathname changes. The SDK captures and stores `oppref` and `__obref`; no raw contact data is passed by this integration. Existing GTM and external HighLevel tracking are unchanged. The consent control applies only to OpenAI Ads, not the existing vendors. Static files served from `public/` do not use the React layout and are outside this integration.

The live diagnostic/contact forms are cross-origin HighLevel embeds, not the unused React forms that post to `/api/contact`. The parent cannot read their submissions. No iframe load, CTA click, resize, or sticky-contact message is treated as a lead. GHL confirmed submissions must be delivered by an authenticated workflow to `POST /api/openai-ads/ghl`. This reports `lead_created` with data type `customer_action`. A diagnostic request is not an `appointment_scheduled` event; the meeting is not confirmed yet.

## Required deployment configuration

Add these environment variables to Vercel for the selected environment:

| Variable | Value |
| --- | --- |
| `NEXT_PUBLIC_OPENAI_ADS_PIXEL_ID` | Pixel ID from OpenAI Ads Manager (public identifier) |
| `NEXT_PUBLIC_OPENAI_ADS_PIXEL_ENABLED` | `true` to enable the browser integration |
| `OPENAI_CONVERSIONS_API_KEY` | Secret Conversions API key for the same ad account, server only |
| `OPENAI_ADS_SERVER_ENABLED` | `true` to enable webhook delivery |
| `OPENAI_ADS_GHL_WEBHOOK_SECRET` | Random secret of at least 32 characters, server only |
| `OPENAI_ADS_VALIDATE_ONLY` | Keep `true` for validation; set `false` only for live event delivery |

Missing configuration disables tracking; no sample Pixel ID is installed. Public variables are embedded at build time, so rebuild after changing them. Use a separate test Pixel ID for browser preview checks; browser events have no validation-only flag. Never put API keys or the webhook secret in `NEXT_PUBLIC_*`, source code, or client HTML.

## Connect the active HighLevel forms

Create a workflow triggered by **successful Form Submitted**, filtered to each of:

| Form ID | Source URL |
| --- | --- |
| `ExDq9WBVQ74hXB8YBmkH` | `https://jtads.com/diagnostico-en-vivo` |
| `D4pmggg9CUScHXgsEcpg` | `https://jtads.com/contacto` |
| `azNkDnlHWDexRIOMjNnr` | `https://jtads.com/diagnostico-operacion` |

Send a JSON POST to `https://jtads.com/api/openai-ads/ghl` with `Authorization: Bearer <OPENAI_ADS_GHL_WEBHOOK_SECRET>` and `Content-Type: application/json`:

```json
{
  "form_id": "ExDq9WBVQ74hXB8YBmkH",
  "submission_id": "unique-confirmed-submission-id",
  "timestamp_ms": 1791385000000,
  "measurement_consent": true,
  "oppref": "original-click-reference-if-captured",
  "obref": "original-browser-reference-if-captured"
}
```

Map dynamic values from the actual confirmed submission; the example timestamp is not for reuse. Do not use the contact ID as the submission ID: one contact can submit more than once. Retries must preserve the ID and original timestamp. The server derives the source URL from the allowlisted form ID, accepts timestamps within the documented window, and uses a stable event ID so retries deduplicate at OpenAI.

Explicit measurement permission must be captured on the GHL form and mapped to the JSON boolean `measurement_consent`. Do not hardcode it to true or assume that a request for contact grants advertising measurement consent. Denied submissions are acknowledged and skipped; absent/invalid consent is rejected. The browser preference does not automatically synchronize with cross-origin GHL forms. Configure that consent mapping before enabling server tracking, and make GHL retry 502/503 deliveries with the same submission identity.

`oppref` and `obref` are optional; omit them when unavailable. Capture `oppref` unchanged from the landing URL into a GHL hidden field and preserve it with the submission. HighLevel's existing embed forwards parent query parameters, but **verify the hidden field mapping and persistence across navigation in the CRM**. This PR does not inject new fields into GHL or claim that attribution transfer is already configured. `obref` requires a separately consented browser-to-GHL mapping; never send it after consent is revoked. No raw email/name/phone is needed for this implementation.

Only the server sends GHL leads, so browser/server lead duplication is absent. If a future GHL browser success hook is installed, it must use the exact same event name, Pixel ID, and ID (`ghl_<form_id>_<submission_id>`) in Pixel `event_id` and API `id`.

## Validate and activate

1. Run `node --test tests/openai-ads.test.mjs`, `npx tsc --noEmit`, and `npm run build`. Node 24 matches Vercel.
2. On preview, confirm absent configuration generates no OpenAI SDK or event requests. With a test Pixel ID, verify rejection, acceptance, SPA page changes, and revocation in the browser network panel.
3. Configure the GHL workflow and submit a controlled test lead. Check the CRM actually received it; inspect mapped consent and attribution. With server validation-only mode, a successful request validates the schema but does not appear in monitoring.
4. Set live server validation to `false`, trigger a consented test submission, and check OpenAI's recent events endpoint/Ads Manager. Verify `server_to_server`, `lead_created`, and the intended Pixel ID. Resend the same submission to verify deduplication; test denied submissions and wrong secrets.
5. Create a `lead_created` conversion event setting for that source and attach it to the intended campaign in OpenAI Ads Manager. Receiving events alone does not configure campaign reporting/optimization.

## Outstanding before production activation

At implementation time Vercel returned no project environment variables. The Pixel ID and server keys, GHL workflows/consent/attribution mapping, OpenAI conversion setting/campaign attachment, and end-to-end receipt must be configured and validated. This change can be reviewed/deployed disabled; it is not yet an active conversion integration.
