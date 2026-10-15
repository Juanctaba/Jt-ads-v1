import test from 'node:test';
import assert from 'node:assert/strict';
import { ghlLeadEvent, measurementAllowed, readCookie } from '../lib/openai-ads.ts';
import { sendLeadEvent, webhookAuthorized } from '../lib/openai-ads-server.ts';

const now = 1791385000000;
const submission = {
  form_id: 'ExDq9WBVQ74hXB8YBmkH', submission_id: 'submission-123',
  timestamp_ms: now, measurement_consent: true, oppref: 'Opaque+Reference/Case=', obref: 'browser-id',
};
test('confirmed GHL lead uses the official schema and preserves attribution', () => {
  assert.deepEqual(ghlLeadEvent(submission, now), {
    id: 'ghl_ExDq9WBVQ74hXB8YBmkH_submission-123', type: 'lead_created',
    timestamp_ms: now, action_source: 'web', source_url: 'https://jtads.com/diagnostico-en-vivo',
    data: { type: 'customer_action' }, oppref: submission.oppref, user: { obref: 'browser-id' },
  });
});
test('retries keep the same ID; different submissions have different IDs', () => {
  assert.equal(ghlLeadEvent(submission, now).id, ghlLeadEvent(submission, now + 1000).id);
  assert.notEqual(ghlLeadEvent(submission, now).id, ghlLeadEvent({...submission, submission_id: 'other'}, now).id);
});
for (const [name, change] of Object.entries({
  denial: {measurement_consent:false}, missingConsent: {measurement_consent:undefined},
  stringConsent: {measurement_consent:'true'}, unknownForm: {form_id:'unknown'},
  prototypeForm: {form_id:'toString'}, missingSubmission: {submission_id:undefined},
  stale: {timestamp_ms:now - 7*86400000 - 1}, future: {timestamp_ms:now + 600001},
  fractional: {timestamp_ms:now + 0.5}, missingTime: {timestamp_ms:undefined},
})) test(`rejects ${name}`, () => assert.equal(ghlLeadEvent({...submission, ...change}, now), null));
test('payload excludes PII and arbitrary source URLs', () => {
  const event = ghlLeadEvent({...submission, email:'private@example.com', source_url:'https://evil.example/'}, now);
  assert.equal(JSON.stringify(event).includes('private'), false);
  assert.equal(event.source_url, 'https://jtads.com/diagnostico-en-vivo');
});
test('measurement defaults to denied and handles malformed cookies', () => {
  assert.equal(measurementAllowed(''), false);
  assert.equal(measurementAllowed('jtads_openai_measurement=denied'), false);
  assert.equal(measurementAllowed('x=1; jtads_openai_measurement=granted'), true);
  assert.equal(readCookie('__oppref', '__oppref=%invalid'), undefined);
  assert.equal(readCookie('__oppref', '__oppref=Opaque%2BCase%3D'), 'Opaque+Case=');
});
test('webhook requires an exact bearer secret of at least 32 characters', () => {
  const secret = 's'.repeat(32);
  assert.equal(webhookAuthorized(`Bearer ${secret}`, secret), true);
  assert.equal(webhookAuthorized(`Bearer ${secret}x`, secret), false);
  assert.equal(webhookAuthorized(null, secret), false);
  assert.equal(webhookAuthorized('Bearer short', 'short'), false);
});
test('server defaults off and validation-only; transport errors remain retryable', async () => {
  const saved = {...process.env}; const originalFetch = globalThis.fetch;
  try {
    delete process.env.OPENAI_ADS_SERVER_ENABLED;
    globalThis.fetch = async () => { throw new Error('must not send'); };
    assert.equal(await sendLeadEvent(ghlLeadEvent(submission,now)), 'disabled');
    Object.assign(process.env, {OPENAI_ADS_SERVER_ENABLED:'true', NEXT_PUBLIC_OPENAI_ADS_PIXEL_ID:'pixel-id', OPENAI_CONVERSIONS_API_KEY:'test-only'});
    let request;
    globalThis.fetch = async (url, options) => { request={url,options}; return new Response('{}',{status:200}); };
    assert.equal(await sendLeadEvent(ghlLeadEvent(submission,now)), 'sent');
    assert.equal(request.url, 'https://bzr.openai.com/v1/events?pid=pixel-id');
    assert.equal(request.options.headers.Authorization, 'Bearer test-only');
    assert.equal(JSON.parse(request.options.body).validate_only, true);
    process.env.OPENAI_ADS_VALIDATE_ONLY='false';
    await sendLeadEvent(ghlLeadEvent(submission,now));
    assert.equal(JSON.parse(request.options.body).validate_only, false);
    globalThis.fetch = async () => new Response('{}',{status:429});
    await assert.rejects(sendLeadEvent(ghlLeadEvent(submission,now)), /429/);
  } finally { globalThis.fetch=originalFetch; process.env=saved; }
});
