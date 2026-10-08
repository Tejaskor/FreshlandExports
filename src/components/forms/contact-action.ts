"use server";

import {
  type ContactState,
  type ContactValues,
  hasErrors,
  formVariant,
  readContact,
  validateContact,
} from "@/components/forms/contact-schema";
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

/** Delivers the enquiry through the shared form webhook. */
async function deliverEnquiry(enquiry: ContactValues) {
  await postToWebhook("contact", enquiry);
}
