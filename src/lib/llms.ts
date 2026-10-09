import { siteConfig } from "@/config/site";
import { blogPosts } from "@/features/blog/data";
import { catalogue, catalogueCategoryHref, catalogueHref } from "@/features/products/catalogue";
import { categoryMoq, findMoq } from "@/features/products/moq";
import { absoluteUrl } from "@/lib/utils";

/**
 * /llms.txt and /llms-full.txt — plain Markdown guides to the site for AI
 * systems (llmstxt.org). Both are built from the same catalogue, MOQ and blog
 * data the pages render, so they cannot drift from the live site. They state
 * only what the site itself states: no certifications, destinations,
 * capacities or technical specifications, and no contact details until the
 * real ones replace the placeholders in config/site.ts.
 */

const url = (path: string) => absoluteUrl(path, siteConfig.url);
const link = (label: string, path: string) => `[${label}](${url(path)})`;

const summary =
  "Freshland Exports is an Indian supplier of fresh agricultural produce, powder products, fresh fruits and whole spices, supplied in bulk for wholesale, food-service, processing and export buyers.";

/** Main company pages, in the site's footer order. */
const companyPages = [
  { label: "Home", path: "/", text: "Overview of Freshland Exports and its product categories." },
  { label: "About Us", path: "/about", text: "Who the company is, its story, vision, mission and values." },
  { label: "Products", path: "/products", text: "The full product catalogue, grouped by category." },
  { label: "Our Farms", path: "/farms", text: "How the company works with farming communities and agricultural partners." },
  { label: "Knowledge Center", path: "/r-and-d", text: "The company's research and quality pages." },
  { label: "Certificates", path: "/certificates", text: "Certifications and registrations as listed by the company." },
  { label: "Blog", path: "/blog", text: "Buyer guides on sourcing, quality, storage and applications." },
  { label: "Contact Us", path: "/contact", text: "Enquiry form for availability, specifications and export requirements." },
] as const;

/** A product's MOQ note, only where it differs from its category's. */
function moqNote(slug: string, categoryValue: string) {
  const moq = findMoq(slug);
  return moq && moq !== categoryValue ? ` Minimum order quantity: ${moq}.` : "";
}

const enquiry = [
  "Prices are not published; buyers request a quotation for each order.",
  `Each product page has a Request a Quote form (name, company, business email, country or market, required quantity and an optional message). General enquiries use the form at ${url("/contact")}.`,
  "Specifications, packaging and quantities are discussed with each enquiry.",
];

export function llmsText() {
  return [
    `# ${siteConfig.name}`,
    "",
    `> ${summary}`,
    "",
    "Products are listed by category below. Prices are quoted per order on request, and specifications and packaging are discussed with each enquiry.",
    "",
    ...catalogue.flatMap((category) => [
      `## ${category.heading}`,
      "",
      `${category.description} Minimum order quantity: ${categoryMoq[category.id]}. Category overview: ${url(catalogueCategoryHref(category))}`,
      "",
      ...category.products.map(
        (product) => `- ${link(product.name, catalogueHref(product.slug))}: ${product.description}${moqNote(product.slug, categoryMoq[category.id])}`,
      ),
      "",
    ]),
    "## Company",
    "",
    ...companyPages.map((page) => `- ${link(page.label, page.path)}: ${page.text}`),
    "",
    "## Optional",
    "",
    `- ${link("Full site guide", "/llms-full.txt")}: Every category and product with its minimum order quantity, the enquiry process and the list of blog articles.`,
    `- ${link("Sitemap", "/sitemap.xml")}: Indexable pages.`,
    "",
  ].join("\n");
}

export function llmsFullText() {
  const articlesByProduct = new Map<string, typeof blogPosts[number][]>();
  for (const post of blogPosts) {
    const list = articlesByProduct.get(post.product.name) ?? [];
    list.push(post);
    articlesByProduct.set(post.product.name, list);
  }

  return [
    `# ${siteConfig.name} — Full Site Guide`,
    "",
    `> ${summary}`,
    "",
    `Website: ${url("/")}`,
    `Short guide: ${url("/llms.txt")}`,
    "",
    "## Company Overview",
    "",
    "Freshland Exports works with farmers, processors and global partners to supply natural ingredients. The website presents four product categories: fresh agricultural produce, powder products, fresh fruits and whole spices, each supplied in bulk for wholesale, food-service, processing and export buyers.",
    "",
    ...companyPages.map((page) => `- ${link(page.label, page.path)}: ${page.text}`),
    "",
    "## Enquiries and Quotations",
    "",
    ...enquiry.map((line) => `- ${line}`),
    "",
    "## Minimum Order Quantities",
    "",
    ...catalogue.map((category) => `- ${category.heading}: ${categoryMoq[category.id]}`),
    ...catalogue.flatMap((category) =>
      category.products
        .filter((product) => findMoq(product.slug) !== categoryMoq[category.id])
        .map((product) => `- Exception — ${product.name}: ${findMoq(product.slug)}`),
    ),
    "",
    "## Product Catalogue",
    "",
    `The full catalogue is at ${url("/products")}. Each product has its own page with an overview, uses, specifications and a quote form. Specifications not yet confirmed are not shown.`,
    "",
    ...catalogue.flatMap((category) => [
      `### ${category.heading}`,
      "",
      category.description,
      "",
      `- Category overview: ${url(catalogueCategoryHref(category))}`,
      `- Minimum order quantity: ${categoryMoq[category.id]}`,
      "",
      ...category.products.map(
        (product) =>
          `- ${link(product.name, catalogueHref(product.slug))}: ${product.description}${moqNote(product.slug, categoryMoq[category.id])}`,
      ),
      "",
    ]),
    "## Blog Articles",
    "",
    `Buyer guides grouped by product. All articles: ${url("/blog")}`,
    "",
    ...[...articlesByProduct].flatMap(([product, posts]) => [
      `### ${product}`,
      "",
      ...posts.map((post) => `- ${link(post.title, post.href)}: ${post.description}`),
      "",
    ]),
  ].join("\n");
}

/** A plain-text response for the static text routes. */
export function textResponse(body: string, contentType = "text/plain") {
  return new Response(body, { headers: { "Content-Type": `${contentType}; charset=utf-8` } });
}
