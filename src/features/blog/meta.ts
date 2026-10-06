/*
 * Blog values that client components need. Kept apart from data.ts so the
 * archive's filter and cards never pull the article index into the browser.
 */

/**
 * Archive categories. Each article's topic label (shown on its card) maps
 * onto one of these, so the archive can be filtered without relabelling the
 * articles themselves.
 */
export const blogCategories = [
  "Export Guides",
  "Product Guides",
  "Quality & Sourcing",
  "Storage & Handling",
  "Food Applications",
  "Agriculture & Ingredients",
] as const;
export type BlogCategory = (typeof blogCategories)[number];

/** "October 2026" — the archive shows the month of publication. */
export function formatPublished(date: string, style: "month" | "day" = "month") {
  return new Intl.DateTimeFormat("en-GB", {
    ...(style === "day" ? { day: "numeric" } : {}),
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
