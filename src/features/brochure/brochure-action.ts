"use server";

import { postToWebhook } from "@/components/forms/webhook";
import {
  type BrochureState,
  hasErrors,
  readBrochure,
  readSource,
  readUtm,
  validateBrochure,
} from "@/features/brochure/schema";

/**
 * The brochure is served only from here, after the lead has been captured,
 * so its path never ships in client JavaScript or page markup. The file sits
 * in /public, so this is a lead-capture flow rather than access control.
 */
const brochure = {
  url: "/images/Brochure/FreshLandExportsBrochure.pdf",
  filename: "Freshland-Exports-Company-Brochure.pdf",
} as const;

/**
 * Receives a brochure lead. Re-validates everything the browser checked,
 * since a Server Action is a public endpoint, then delivers the lead through
 * the same webhook as contact enquiries. The download is released only once
 * delivery succeeds.
 */
export async function submitBrochureLead(_previous: BrochureState, formData: FormData): Promise<BrochureState> {
  // Honeypot: invisible to people, filled in by naive bots. Nothing is
  // delivered and nothing is downloaded.
  if (formData.get("website")) return { status: "error", message: "Something went wrong. Please try again." };

  const values = readBrochure(formData);
  const errors = validateBrochure(values);
  if (hasErrors(errors)) return { status: "invalid", errors };

  try {
    await postToWebhook("brochure_lead", {
      name: values.name,
      company: values.companyName,
      email: values.email,
      phone: values.phone,
      country: values.country,
      productsInterested: values.products,
      buyerType: values.buyerType,
      expectedQuantity: values.quantity,
      source: readSource(formData),
      ...readUtm(formData),
    });
    return { status: "success", download: brochure };
  } catch (error) {
    console.error("[brochure] lead could not be delivered", error);
    return { status: "error", message: "Something went wrong. Please try again." };
  }
}
