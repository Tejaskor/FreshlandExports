"use server";

import {
  type ContactState,
  type ContactValues,
  hasErrors,
  readContact,
  validateContact,
} from "@/components/forms/contact-schema";

/**
 * Receives a contact enquiry. Re-validates everything the browser checked,
 * since a Server Action is a public endpoint and can be called directly.
 */
export async function submitContact(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: invisible to people, filled in by naive bots. Report success so
  // the bot learns nothing, but deliver nothing.
  if (formData.get("company")) return { status: "success" };

  const values = readContact(formData);
  const errors = validateContact(values);
  if (hasErrors(errors)) return { status: "invalid", errors, values };

  try {
    await deliverEnquiry(values);
    return { status: "success" };
  } catch (error) {
    console.error("[contact] enquiry could not be delivered", error);
    return {
      status: "error",
      message: "We couldn't send your message just now. Please try again in a moment.",
      values,
    };
  }
}

/**
 * Hands the enquiry to CONTACT_WEBHOOK_URL as JSON — any form backend, CRM,
 * Zapier/Make hook or email relay that accepts a POST works without adding a
 * dependency here.
 *
 * Without a webhook, development logs the enquiry so the flow can be tested
 * end to end; production refuses rather than report success for a message
 * nobody will ever receive.
 */
async function deliverEnquiry(enquiry: ContactValues) {
  const url = process.env.CONTACT_WEBHOOK_URL;

  if (!url) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] CONTACT_WEBHOOK_URL is not set; enquiry logged only:", enquiry);
      return;
    }
    throw new Error("CONTACT_WEBHOOK_URL is not configured");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...enquiry, submittedAt: new Date().toISOString() }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) throw new Error(`Webhook responded ${response.status}`);
}
