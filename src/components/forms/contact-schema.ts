/**
 * Contact enquiry rules, shared by the form (instant feedback) and the server
 * action (the authority — client checks can always be bypassed).
 */

export const countries = ["India", "United States", "United Kingdom", "Germany", "Japan", "Other"];

export const contactFields = ["name", "email", "country", "phone", "message"] as const;
export type ContactField = (typeof contactFields)[number];

export type ContactValues = Record<ContactField, string>;
export type ContactErrors = Partial<Record<ContactField, string>>;

export type ContactState =
  | { status: "idle" }
  | { status: "success" }
  /** `values` repopulates the form, which React resets after every action. */
  | { status: "invalid"; errors: ContactErrors; values: ContactValues }
  | { status: "error"; message: string; values: ContactValues };

export const limits = { name: 80, email: 254, phone: 20, message: 2000 } as const;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()\d\s.-]+$/;

export function readContact(formData: FormData): ContactValues {
  const read = (field: ContactField) => {
    const value = formData.get(field);
    return typeof value === "string" ? value.trim() : "";
  };

  return {
    name: read("name"),
    email: read("email"),
    country: read("country"),
    phone: read("phone"),
    message: read("message"),
  };
}

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  if (values.name.length < 2) errors.name = "Please enter your name.";
  else if (values.name.length > limits.name) errors.name = "Please shorten your name.";

  if (!values.email) errors.email = "Please enter your email address.";
  else if (values.email.length > limits.email || !EMAIL.test(values.email))
    errors.email = "Please enter a valid email address.";

  if (values.country && !countries.includes(values.country))
    errors.country = "Please choose a country from the list.";

  if (values.phone) {
    const digits = values.phone.replace(/\D/g, "").length;
    if (!PHONE.test(values.phone) || digits < 7 || values.phone.length > limits.phone)
      errors.phone = "Please enter a valid phone number.";
  }

  if (values.message.length < 10) errors.message = "Please tell us a little more (10+ characters).";
  else if (values.message.length > limits.message)
    errors.message = `Please keep your message under ${limits.message} characters.`;

  return errors;
}

export function hasErrors(errors: ContactErrors) {
  return Object.keys(errors).length > 0;
}
