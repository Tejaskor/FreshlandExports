/**
 * Lead metadata every form sends alongside its fields: the page the visitor
 * submitted from. The browser fills it in at submit time; the server action
 * reads it back through readPageUrl, which accepts only a plain http(s) URL.
 */

export const pageUrlField = "page_url";

const maxPageUrl = 500;

/**
 * The page the form sits on, without query string or hash: campaign
 * parameters travel separately, and nothing else typed into a URL belongs in
 * a lead. Browser only.
 */
export function currentPageUrl() {
  return `${window.location.origin}${window.location.pathname}`;
}

/** The submitted page URL, normalised, or "" when missing or not a web URL. */
export function readPageUrl(formData: FormData): string {
  const value = formData.get(pageUrlField);
  if (typeof value !== "string" || value.length > maxPageUrl) return "";
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? `${url.origin}${url.pathname}` : "";
  } catch {
    return "";
  }
}
