import { markets, productInterests, quantities } from "@/features/brochure/schema";

/**
 * Contact enquiry rules, shared by the form (instant feedback) and the server
 * action (the authority — client checks can always be bypassed).
 *
 * Two layouts post here. The compact form (product pages, homepage) sends
 * name, email, country, phone and message. The detailed form (/contact) adds
 * company, product/category and expected quantity, uses the brochure form's
 * country list, and requires company, country and product; it identifies
 * itself with variant=detailed.
 *
 * The quote form (a product page's Request a Quote section) sends name,
 * company, email, country / market, required quantity and an optional
 * message; the product comes from the page itself as a hidden field, so the
 * lead names it without the visitor choosing it again. It identifies itself
 * with variant=quote. All three post the same fields to the same webhook,
 * plus `source`, `form_type` and `page_url` to say where the lead came from.
 */

export const countries = ["India", "United States", "United Kingdom", "Germany", "Japan", "Other"];

/** Lists offered by the detailed form, shared with the brochure form. */
export { markets, quantities };
export { productInterestGroups } from "@/features/brochure/schema";

export const contactFields = ["name", "company", "email", "country", "phone", "product", "quantity", "message"] as const;
export type ContactField = (typeof contactFields)[number];

export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  /** `values` repopulates the form, which React resets after every action. */
  | { status: "invalid"; errors: ContactErrors; values: ContactValues }
  | { status: "error"; message: string; values: ContactValues };

export const limits = { name: 80, company: 120, email: 254, phone: 20, product: 120, message: 2000 } as const;

export type FormVariant = "compact" | "detailed" | "quote";

/** Multiple products travel as one string, joined by this separator. */
export const productSeparator = "; ";

/**
 * Where a contact lead came from, sent as `source` (the spreadsheet's Source
 * column). Each placement passes its own: the homepage and /contact forms a
 * fixed label, every product page one built from its slug.
 */
export type ContactSource = "homepage_contact" | "contact_page" | `product_enquiry_${string}`;

/** The kind of form, sent as `form_type` beside `source`. */
export type ContactFormType = "contact" | "product_enquiry";

const PRODUCT_SOURCE = /^product_enquiry_[a-z0-9]+(?:_[a-z0-9]+)*$/;

/** A product page's source, from its slug: "moringa-powder" → "product_enquiry_moringa_powder". */
export function productEnquirySource(slug: string): ContactSource {
  return `product_enquiry_${slug.toLowerCase().replace(/-/g, "_")}`;
}

/** The submitted source if it is one the site sends, else "unknown" (the lead is still delivered). */
export function readContactSource(formData: FormData): ContactSource | "unknown" {
  const value = formData.get("source");
  if (typeof value !== "string" || value.length > 100) return "unknown";
  if (value === "homepage_contact" || value === "contact_page" || PRODUCT_SOURCE.test(value)) return value as ContactSource;
  return "unknown";
}

/** The form type a source belongs to. */
export function contactFormType(source: ContactSource | "unknown"): ContactFormType | "unknown" {
  if (source === "unknown") return "unknown";
  return source.startsWith("product_enquiry_") ? "product_enquiry" : "contact";
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()\d\s.-]+$/;

export function readContact(formData: FormData): ContactValues {
  const read = (field: ContactField) => {
    const value = formData.get(field);
    return typeof value === "string" ? value.trim() : "";
  };

  return {
    name: read("name"),
    company: read("company"),
    email: read("email"),
    country: read("country"),
    phone: read("phone"),
    product: formData
      .getAll("product")
      .filter((value): value is string => typeof value === "string" && value.trim() !== "")
      .map((value) => value.trim())
      .join(productSeparator),
    quantity: read("quantity"),
    message: read("message"),
  };
}

/** Which form sent the submission: the detailed /contact form, a product quote form, or the compact form. */
export function formVariant(formData: FormData): FormVariant {
  const variant = formData.get("variant");
  return variant === "detailed" || variant === "quote" ? variant : "compact";
}

export function validateContact(values: ContactValues, variant: FormVariant = "compact"): ContactErrors {
  const errors: ContactErrors = {};
  // The quote form shares the detailed form's required company, market list
  // and quantity list; its product is fixed by the page, not picked.
  const detailed = variant === "detailed";
  const quote = variant === "quote";
  const business = detailed || quote;

  if (values.name.length < 2) errors.name = "Please enter your name.";
  else if (values.name.length > limits.name) errors.name = "Please shorten your name.";

  if (business && values.company.length < 2) errors.company = "Please enter your company name.";
  else if (values.company.length > limits.company) errors.company = "Please shorten the company name.";

  if (!values.email) errors.email = "Please enter your email address.";
  else if (values.email.length > limits.email || !EMAIL.test(values.email))
    errors.email = "Please enter a valid email address.";

  if (business && !values.country) errors.country = "Please select your country or market.";
  else if (values.country && !((business ? markets : countries) as readonly string[]).includes(values.country))
    errors.country = "Please choose a country from the list.";

  if (quote) {
    // Set by the product page, not typed: only its presence and size matter.
    if (!values.product || values.product.length > limits.product || /[\r\n]/.test(values.product))
      errors.product = "The product for this quote is missing. Please reload the page.";
  } else {
    const products = values.product ? values.product.split(productSeparator) : [];
    if (detailed && products.length === 0) errors.product = "Please select at least one product or category.";
    else if (products.some((product) => !productInterests.includes(product)))
      errors.product = "Please choose from the listed products.";
  }

  if (quote && !values.quantity) errors.quantity = "Please select the quantity you need.";
  else if (values.quantity && !(quantities as readonly string[]).includes(values.quantity))
    errors.quantity = "Please choose a quantity from the list.";

  if (values.phone) {
    const digits = values.phone.replace(/\D/g, "").length;
    if (!PHONE.test(values.phone) || digits < 7 || values.phone.length > limits.phone)
      errors.phone = "Please enter a valid phone number.";
  }

  // The quote form's message is optional; the others need a real message.
  if (quote && values.message.length === 0) {
    // Nothing to check.
  } else if (values.message.length < 10) errors.message = "Please tell us a little more (10+ characters).";
  else if (values.message.length > limits.message)
    errors.message = `Please keep your message under ${limits.message} characters.`;

  return errors;
}

export function hasErrors(errors: ContactErrors) {
  return Object.keys(errors).length > 0;
}
