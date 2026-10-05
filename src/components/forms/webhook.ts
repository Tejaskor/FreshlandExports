// Server-only: imported by Server Actions, never by client components.

/**
 * Posts a form submission to CONTACT_WEBHOOK_URL as JSON — any form backend,
 * CRM, Zapier/Make hook or email relay that accepts a POST works without
 * adding a dependency here. Shared by every form so leads land in one place;
 * `type` tells the receiver which form sent it.
 *
 * Without a webhook, development logs the payload so the flow can be tested
 * end to end; production refuses rather than report success for a submission
 * nobody will ever receive.
 */
export async function postToWebhook(type: string, payload: Record<string, unknown>) {
  const url = process.env.CONTACT_WEBHOOK_URL;
  const body = { type, ...payload, submittedAt: new Date().toISOString() };

  if (!url) {
    if (process.env.NODE_ENV !== "production") {
      console.info(`[${type}] CONTACT_WEBHOOK_URL is not set; submission logged only:`, body);
      return;
    }
    throw new Error("CONTACT_WEBHOOK_URL is not configured");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
}
