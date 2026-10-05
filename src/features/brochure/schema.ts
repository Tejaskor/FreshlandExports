/**
 * Brochure lead rules, shared by the form (instant feedback) and the server
 * action (the authority — client checks can always be bypassed).
 */

export const brochureSources = ["header_brochure", "homepage_brochure", "footer_brochure"] as const;
export type BrochureSource = (typeof brochureSources)[number];

export const markets = [
  "India",
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Oman",
  "Kuwait",
  "Bahrain",
  "United Kingdom",
  "Germany",
  "Netherlands",
  "France",
  "Italy",
  "Spain",
  "United States",
  "Canada",
  "Australia",
  "New Zealand",
  "Singapore",
  "Malaysia",
  "Japan",
  "South Korea",
  "Other",
] as const;

export const productInterests = [
  "Fresh Agricultural Products",
  "Fresh Fruits",
  "Whole Spices",
  "Moringa Powder",
  "Onion Powder",
  "Turmeric Powder",
  "Multiple Product Categories",
] as const;

export const buyerTypes = [
  "Importer",
  "Distributor",
  "Wholesaler",
  "Food Manufacturer",
  "Food-Service Buyer",
  "Retailer",
  "Trader",
  "Other",
] as const;

export const quantities = ["500 KG – 1 MT", "1 – 5 MT", "5 – 10 MT", "10+ MT", "Not decided yet"] as const;

export const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
export type Utm = Partial<Record<(typeof utmKeys)[number], string>>;

export type BrochureValues = {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  products: string[];
  buyerType: string;
  quantity: string;
};

export type BrochureField = keyof BrochureValues;
export type BrochureErrors = Partial<Record<BrochureField, string>>;

export type BrochureState =
  | { status: "idle" }
  /** `download` is handed out by the server only after the lead is captured. */
  | { status: "success"; download: { url: string; filename: string } }
  | { status: "invalid"; errors: BrochureErrors }
  | { status: "error"; message: string };

export const brochureLimits = { name: 80, companyName: 120, email: 254, phone: 20 } as const;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+()\d\s.-]+$/;

const text = (formData: FormData, key: string) => {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
};

export function readBrochure(formData: FormData): BrochureValues {
  return {
    name: text(formData, "name"),
    companyName: text(formData, "companyName"),
    email: text(formData, "email"),
    phone: text(formData, "phone"),
    country: text(formData, "country"),
    products: formData
      .getAll("products")
      .filter((value): value is string => typeof value === "string")
      .map((value) => value.trim()),
    buyerType: text(formData, "buyerType"),
    quantity: text(formData, "quantity"),
  };
}

export function readUtm(formData: FormData): Utm {
  const utm: Utm = {};
  for (const key of utmKeys) {
    const value = text(formData, key).slice(0, 200);
    if (value) utm[key] = value;
  }
  return utm;
}

export function readSource(formData: FormData): BrochureSource | "unknown" {
  const source = text(formData, "source");
  return (brochureSources as readonly string[]).includes(source) ? (source as BrochureSource) : "unknown";
}

export function validateBrochure(values: BrochureValues): BrochureErrors {
  const errors: BrochureErrors = {};

  if (values.name.length < 2) errors.name = "Please enter your full name.";
  else if (values.name.length > brochureLimits.name) errors.name = "Please shorten your name.";

  if (values.companyName.length < 2) errors.companyName = "Please enter your company name.";
  else if (values.companyName.length > brochureLimits.companyName)
    errors.companyName = "Please shorten your company name.";

  if (!values.email) errors.email = "Please enter your business email.";
  else if (values.email.length > brochureLimits.email || !EMAIL.test(values.email))
    errors.email = "Please enter a valid email address.";

  if (values.phone) {
    const digits = values.phone.replace(/\D/g, "").length;
    if (!PHONE.test(values.phone) || digits < 7 || values.phone.length > brochureLimits.phone)
      errors.phone = "Please enter a valid phone number.";
  }

  if (!(markets as readonly string[]).includes(values.country)) errors.country = "Please select your country or market.";

  if (values.products.length === 0) errors.products = "Please select at least one product category.";
  else if (values.products.some((product) => !(productInterests as readonly string[]).includes(product)))
    errors.products = "Please choose from the listed products.";

  if (!(buyerTypes as readonly string[]).includes(values.buyerType)) errors.buyerType = "Please select your buyer type.";

  if (values.quantity && !(quantities as readonly string[]).includes(values.quantity))
    errors.quantity = "Please choose a quantity from the list.";

  return errors;
}

export const hasErrors = (errors: BrochureErrors) => Object.keys(errors).length > 0;
