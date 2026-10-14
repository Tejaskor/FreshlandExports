"use server";

import {
  type ContactState,
  type ContactValues,
  contactFormType,
  hasErrors,
  formVariant,
  readContact,
  readContactSource,
  validateContact,
} from "@/components/forms/contact-schema";
import { readPageUrl } from "@/components/forms/lead-meta";
import { postToWebhook } from "@/components/forms/webhook";

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
  if (formData.get("website")) return { status: "success" };

  const values = readContact(formData);
  const errors = validateContact(values, formVariant(formData));
  if (hasErrors(errors)) return { status: "invalid", errors, values };

  const source = readContactSource(formData);

  try {
    await deliverEnquiry(values, {
      source,
      form_type: contactFormType(source),
      page_url: readPageUrl(formData),
    });
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

/** Delivers the enquiry, with where it came from, through the shared form webhook. */
async function deliverEnquiry(
  enquiry: ContactValues,
  origin: { source: string; form_type: string; page_url: string },
) {
  await postToWebhook("contact", { ...enquiry, ...origin });
}
