import { type FaqEntry, faqJsonLd } from "@/lib/seo";

/**
 * A JSON-LD script. The JSON is escaped for an HTML script element ("<"
 * becomes <), so no string in the data can close the tag early.
 * Server-rendered only: it adds no client JavaScript.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/**
 * FAQPage JSON-LD for the questions an FAQ section shows. Pass the same
 * array the accordion renders, so the markup always matches the page.
 * Renders nothing when there are no complete questions.
 */
export function FaqJsonLd({ items }: { items: readonly FaqEntry[] }) {
  const data = faqJsonLd(items);
  return data ? <JsonLd data={data} /> : null;
}
