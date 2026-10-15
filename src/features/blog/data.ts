import type { ArtVariant } from "@/components/media/botanical-art";
import { fruitsBodies } from "@/features/blog/bodies/fruits";
import { powdersABodies } from "@/features/blog/bodies/powders-a";
import { powdersBBodies } from "@/features/blog/bodies/powders-b";
import { powdersCBodies } from "@/features/blog/bodies/powders-c";
import { powdersDBodies } from "@/features/blog/bodies/powders-d";
import { spicesABodies } from "@/features/blog/bodies/spices-a";
import { spicesBBodies } from "@/features/blog/bodies/spices-b";
import { spicesCBodies } from "@/features/blog/bodies/spices-c";
import { vegetablesBodies } from "@/features/blog/bodies/vegetables";
import { type ArticleImage, type SectionImage, articleImages, sectionImages } from "@/features/blog/images";
import { blogCategories, type BlogCategory } from "@/features/blog/meta";
import { caseStudies, caseStudyHref } from "@/features/case-studies/data";
import { type ArticleBody, type ArticleHashtag, type ArticleSection, productBlogs } from "@/features/products/blog";
import {
  type CatalogueCategoryId,
  catalogue,
  catalogueCategoryHref,
  findCatalogueProduct,
} from "@/features/products/catalogue";
import { exportProductHref, findExportProduct } from "@/features/products/export-catalogue";
import { productMenu } from "@/features/products/menu";

/**
 * The Blog: every product article from features/products/blog.ts, given its
 * own page at /blog/<slug>. Product pages, the archive and the article pages
 * all read from this one index, so an article is written once.
 */

/** The Blog: the listing at /blog and every article at /blog/<slug> (listed under Resources in the menu). */
export const blogPath = "/blog";
export const blogPostHref = (slug: string) => `${blogPath}/${slug}`;

export { blogCategories, type BlogCategory } from "@/features/blog/meta";

const categoryByTopic: Record<string, BlogCategory> = {
  "Buying Guide": "Product Guides",
  "Export Guide": "Export Guides",
  "Market Guide": "Export Guides",
  Quality: "Quality & Sourcing",
  Sourcing: "Quality & Sourcing",
  Storage: "Storage & Handling",
  Applications: "Food Applications",
  Uses: "Food Applications",
  "Food Processing": "Food Applications",
  Processing: "Agriculture & Ingredients",
};

/** The day the product articles were published (ISO date). */
const firstPublished = "2026-10-05";

export type BlogPost = {
  slug: string;
  href: string;
  topic: string;
  category: BlogCategory;
  title: string;
  description: string;
  body: ArticleBody;
  image: ArticleImage;
  /** Fallback art for the image frame. */
  art: ArtVariant;
  published: string;
  /** ISO date of the last substantive revision, when there has been one. */
  updated?: string;
  /** Set per article in features/products/blog.ts; absent until known. */
  author?: string;
  /** Set per article in features/products/blog.ts; absent until recorded. */
  views?: number;
  /** The product the article belongs to; `href` is null when it has no page. */
  product: { slug: string; name: string; href: string | null };
  /** Topic hashtags shown at the end of the article, each a link; empty until written. */
  hashtags: readonly ArticleHashtag[];
  /** Photographs placed between the article's sections. */
  figures: readonly SectionImage[];
};

/** Fields a card needs — what crosses into client components. */
export type BlogCardData = Pick<BlogPost, "slug" | "href" | "topic" | "category" | "title" | "description" | "image" | "art" | "published">;

/** Bodies for the articles that do not carry theirs inline. */
const separateBodies = {
  ...vegetablesBodies,
  ...fruitsBodies,
  ...spicesABodies,
  ...spicesBBodies,
  ...spicesCBodies,
  ...powdersABodies,
  ...powdersBBodies,
  ...powdersCBodies,
  ...powdersDBodies,
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/* --- Links inside article text ----------------------------------------- */

/**
 * Section text may link to another page of the site as `[anchor text](/path)`.
 * Only site paths are accepted, and every target is checked when the index
 * is built (see checkInlineLinks), so a mistyped link fails the build.
 */
const inlineLinkPattern = /\[([^\]]+)\]\((\/[^)\s]*)\)/g;

export type TextPart = string | { text: string; href: string };

/** Section text split into plain runs and links, in reading order. */
export function textParts(text: string): TextPart[] {
  const parts: TextPart[] = [];
  let last = 0;
  for (const match of text.matchAll(inlineLinkPattern)) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push({ text: match[1], href: match[2] });
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

/** Section text as it reads on the page, without link markup. */
export const plainText = (text: string) => text.replace(inlineLinkPattern, "$1");

/** Menu order first (the order buyers browse the range), then the rest. */
const menuOrder = productMenu.flatMap((group) => group.items.map((item) => item.slug));
const productOrder = [
  ...menuOrder.filter((slug) => slug in productBlogs),
  ...Object.keys(productBlogs).filter((slug) => !menuOrder.includes(slug)),
];

function productName(slug: string) {
  const menuItem = productMenu.flatMap((group) => group.items).find((item) => item.slug === slug);
  return menuItem?.label ?? findExportProduct(slug)?.name ?? productBlogs[slug]?.name ?? slug;
}

/** Only products with a page of their own are linked. */
function productHref(slug: string) {
  const hasPage =
    productMenu.some((group) => group.items.some((item) => item.slug === slug)) || Boolean(findExportProduct(slug));
  return hasPage ? exportProductHref(slug) : null;
}

function buildPosts(): readonly BlogPost[] {
  const posts = productOrder.flatMap((productSlug) => {
    const entry = productBlogs[productSlug];
    const images = articleImages[productSlug];
    const bodies = separateBodies[productSlug];
    const name = productName(productSlug);

    return entry.articles.map((article, index): BlogPost => {
      const body = article.body ?? bodies?.[index];
      const image = images?.[index];
      // Every card links to its article, so a missing body or image is a
      // content error: fail the build rather than publish a broken link.
      if (!body) throw new Error(`Blog: no body for "${article.title}" (${productSlug})`);
      if (!image) throw new Error(`Blog: no image for "${article.title}" (${productSlug})`);
      const category = categoryByTopic[article.topic];
      if (!category) throw new Error(`Blog: no category for topic "${article.topic}"`);

      const slug = slugify(article.title);
      return {
        slug,
        href: blogPostHref(slug),
        topic: article.topic,
        category,
        title: article.title,
        description: article.description,
        body,
        image,
        art: entry.art,
        published: article.published ?? firstPublished,
        updated: article.updated,
        author: article.author,
        views: article.views,
        product: { slug: productSlug, name, href: productHref(productSlug) },
        hashtags: article.hashtags ?? [],
        figures: sectionImages[slug] ?? [],
      };
    });
  });

  const seen = new Set<string>();
  for (const post of posts) {
    if (seen.has(post.slug)) throw new Error(`Blog: duplicate article slug "${post.slug}"`);
    seen.add(post.slug);
  }
  checkInlineLinks(posts);
  checkFigures(posts);
  checkHashtags(posts);
  return posts;
}

/** Every piece of an article's text that may carry links, in reading order. */
export function sectionTexts(section: ArticleSection): string[] {
  return [
    section.text,
    ...(section.list?.items ?? []),
    ...(section.faq ?? []).flatMap((entry) => [entry.question, entry.answer]),
  ];
}

/**
 * Each photograph follows a section of its own article and appears once on
 * the whole Blog — never repeating an article's main image or another
 * article's photograph.
 */
function checkFigures(posts: readonly BlogPost[]) {
  const used = new Set(posts.map((post) => post.image.src));
  for (const slug of Object.keys(sectionImages)) {
    if (!posts.some((post) => post.slug === slug)) throw new Error(`Blog: images for unknown article "${slug}"`);
  }
  for (const post of posts) {
    for (const figure of post.figures) {
      if (!post.body.some((section) => section.heading === figure.after))
        throw new Error(`Blog: "${post.slug}" has no section "${figure.after}" for ${figure.src}`);
      if (used.has(figure.src)) throw new Error(`Blog: ${figure.src} is used more than once`);
      used.add(figure.src);
    }
  }
}

/**
 * Three or fewer "#CamelCase" tags, no two articles with the same set, and
 * each tag linking to an existing page: never the article itself, never a
 * page its topic labels already link to, and no two tags to the same page.
 */
function checkHashtags(posts: readonly BlogPost[]) {
  const pages = sitePages(posts);
  const labelPages = new Set([
    ...catalogue.map((category) => listingHref(category.label)),
    ...catalogue.map(catalogueCategoryHref),
  ]);
  const sets = new Set<string>();
  for (const post of posts) {
    if (post.hashtags.length === 0) continue;
    if (post.hashtags.length > 3) throw new Error(`Blog: "${post.slug}" has more than three hashtags`);
    const targets = new Set<string>();
    for (const { tag, href } of post.hashtags) {
      if (!/^#[A-Za-z][A-Za-z0-9]*$/.test(tag)) throw new Error(`Blog: "${post.slug}" has a malformed hashtag "${tag}"`);
      if (!pages.has(href)) throw new Error(`Blog: hashtag ${tag} on "${post.slug}" links to unknown page "${href}"`);
      if (href === post.href) throw new Error(`Blog: hashtag ${tag} on "${post.slug}" links to its own article`);
      if (labelPages.has(href)) throw new Error(`Blog: hashtag ${tag} on "${post.slug}" repeats a topic label's page`);
      if (targets.has(href)) throw new Error(`Blog: two hashtags on "${post.slug}" link to "${href}"`);
      targets.add(href);
    }
    const key = post.hashtags.map((entry) => entry.tag).sort().join(" ");
    if (sets.has(key)) throw new Error(`Blog: "${post.slug}" repeats another article's hashtags`);
    sets.add(key);
  }
}

/** The Blog listing filtered to a topic category or product range, by its label. */
const listingHref = (label: string) => `${blogPath}?category=${slugify(label)}`;

/**
 * Every page an article may link to: another article, a Blog listing by
 * topic or range, a product page, a catalogue section, a case study, the
 * catalogue or the contact page.
 */
function sitePages(posts: readonly BlogPost[]) {
  return new Set<string>([
    "/contact",
    "/products",
    ...posts.map((post) => post.href),
    ...blogCategories.map(listingHref),
    ...catalogue.map((category) => listingHref(category.label)),
    ...catalogue.map(catalogueCategoryHref),
    ...catalogue.flatMap((category) => category.products.flatMap((product) => productHref(product.slug) ?? [])),
    // Product pages outside the catalogue (whole turmeric) that articles belong to.
    ...posts.flatMap((post) => post.product.href ?? []),
    ...caseStudies.map((study) => caseStudyHref(study.slug)),
  ]);
}

/**
 * Every link written into article text must point at a page that exists —
 * another article, a product page, a catalogue section, a case study or the
 * contact page — never at its own article, and each destination only once
 * per article.
 */
function checkInlineLinks(posts: readonly BlogPost[]) {
  const pages = sitePages(posts);
  for (const post of posts) {
    const linked = new Set<string>();
    for (const section of post.body) {
      for (const part of sectionTexts(section).flatMap(textParts)) {
        if (typeof part === "string") continue;
        if (!pages.has(part.href)) throw new Error(`Blog: "${post.slug}" links to unknown page "${part.href}"`);
        if (part.href === post.href) throw new Error(`Blog: "${post.slug}" links to itself`);
        if (linked.has(part.href)) throw new Error(`Blog: "${post.slug}" links to "${part.href}" more than once`);
        linked.add(part.href);
      }
    }
  }
}

export const blogPosts = buildPosts();

/**
 * Newest first, by publication date. Articles published the same day keep
 * their catalogue order, so the listing is stable from build to build.
 */
export const latestPosts: readonly BlogPost[] = blogPosts
  .map((post, index) => ({ post, index }))
  .sort((a, b) => b.post.published.localeCompare(a.post.published) || a.index - b.index)
  .map(({ post }) => post);

/** URL form of a category, e.g. "Quality & Sourcing" → "quality-and-sourcing". */
export const categorySlug = (category: BlogCategory) => slugify(category);

export function findCategory(slug: string) {
  return blogCategories.find((category) => categorySlug(category) === slug);
}

/* --- Product ranges: the listing sidebar's Categories ------------------ */

/**
 * The four product ranges the Blog listing filters by, in the catalogue's
 * order. An article's range is its product's catalogue category; the topic
 * categories above stay on each article and its card.
 */
export const blogRanges = [
  {
    id: "powders",
    label: "Powder Products",
    image: "/images/home/categories/Botanicalpowder.webp",
    alt: "Bowls of botanical powders",
  },
  {
    id: "agricultural",
    label: "Agricultural Products",
    image: "/images/home/categories/Agriculturalproduct.webp",
    alt: "Fresh agricultural produce",
  },
  { id: "fruits", label: "Fruits", image: "/images/home/categories/Fruits.webp", alt: "Fresh fruits" },
  { id: "spices", label: "Spices", image: "/images/home/categories/Spices.webp", alt: "Whole spices" },
] as const satisfies readonly { id: CatalogueCategoryId; label: string; image: string; alt: string }[];

export type BlogRange = (typeof blogRanges)[number];

/** Articles whose product is not a catalogue entry, by product slug. */
const rangeOverrides: Record<string, CatalogueCategoryId> = {
  // Whole turmeric has a spice page but no catalogue entry.
  turmeric: "spices",
  // Fresh and dried ginger root: produce handling and storage.
  ginger: "agricultural",
  // General fresh-produce articles (mixed orders, seasonality, documents).
  "other-agricultural-products": "agricultural",
};

/** The product range an article belongs to; fails the build if unknown. */
export function postRange(post: BlogPost): BlogRange {
  const id = findCatalogueProduct(post.product.slug)?.category.id ?? rangeOverrides[post.product.slug];
  const range = blogRanges.find((entry) => entry.id === id);
  if (!range) throw new Error(`Blog: no product range for "${post.slug}" (${post.product.slug})`);
  return range;
}

/** URL form of a range, e.g. "Powder Products" → "powder-products". */
export const rangeSlug = (range: BlogRange) => slugify(range.label);

export function findRange(slug: string) {
  return blogRanges.find((range) => rangeSlug(range) === slug);
}

/**
 * What the listing is narrowed to: a product range (the sidebar's
 * Categories) or, for links from articles, a topic category. Both travel in
 * the same ?category= parameter; their slugs never collide.
 */
export type BlogFilter = { range: BlogRange } | { topic: BlogCategory };

export const filterLabel = (filter: BlogFilter) => ("range" in filter ? filter.range.label : filter.topic);

export function findFilter(slug: string): BlogFilter | undefined {
  const range = findRange(slug);
  if (range) return { range };
  const topic = findCategory(slug);
  return topic ? { topic } : undefined;
}

/** Categories that have at least one article, in taxonomy order. */
export const usedCategories = blogCategories.filter((category) =>
  blogPosts.some((post) => post.category === category),
);

export const postsPerPage = 3;

/** The listing URL for a range or topic and a page; page 1 and "all" stay implicit. */
export function blogListHref({
  category,
  range,
  page = 1,
}: {
  category?: BlogCategory;
  range?: BlogRange;
  page?: number;
}) {
  const params = new URLSearchParams();
  if (range) params.set("category", rangeSlug(range));
  else if (category) params.set("category", categorySlug(category));
  if (page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `${blogPath}?${query}` : blogPath;
}

/** blogListHref's arguments for a filter. */
export const filterHref = (filter: BlogFilter | undefined, page = 1) =>
  blogListHref({ ...(filter && ("range" in filter ? { range: filter.range } : { category: filter.topic })), page });

/**
 * Orders posts so each page holds one product's articles. Products keep the
 * order they arrive in, and each product's articles their relative order.
 * Every product contributes its full pages (`perPage` articles) first; the
 * remainders of products with fewer than `perPage` left are then packed
 * together at the end, still in product order, so full product pages never
 * shift. Each post appears exactly once.
 */
export function groupByProduct(posts: readonly BlogPost[], perPage: number): readonly BlogPost[] {
  const groups = new Map<string, BlogPost[]>();
  for (const post of posts) {
    const group = groups.get(post.product.slug);
    if (group) group.push(post);
    else groups.set(post.product.slug, [post]);
  }
  const full: BlogPost[] = [];
  const remainders: BlogPost[] = [];
  for (const group of groups.values()) {
    const whole = group.length - (group.length % perPage);
    full.push(...group.slice(0, whole));
    remainders.push(...group.slice(whole));
  }
  return [...full, ...remainders];
}

/**
 * One page of the listing. The full listing and a product range group their
 * articles by product, in catalogue order (Moringa, Onion Powder, Turmeric
 * and so on), three to a page; a topic category cuts across products, so it
 * stays newest first. Returns null for a page beyond the last.
 */
export function blogListing({ filter, page }: { filter?: BlogFilter; page: number }) {
  const posts = !filter
    ? groupByProduct(blogPosts, postsPerPage)
    : "range" in filter
      ? groupByProduct(
          blogPosts.filter((post) => postRange(post).id === filter.range.id),
          postsPerPage,
        )
      : latestPosts.filter((post) => post.category === filter.topic);
  const pageCount = Math.max(1, Math.ceil(posts.length / postsPerPage));
  if (!Number.isInteger(page) || page < 1 || page > pageCount) return null;
  const start = (page - 1) * postsPerPage;
  return { posts: posts.slice(start, start + postsPerPage), page, pageCount };
}

/* --- Article outline --------------------------------------------------- */

export type OutlineItem = { id: string; text: string; level: 2 | 3 };

/**
 * The article's sections with a unique anchor id each, built from its own
 * headings — so every article, including ones added later, gets its own
 * table of contents without any extra data.
 */
export function articleOutline(post: BlogPost) {
  const used = new Map<string, number>();
  const sections = post.body.map((section) => {
    const base = slugify(section.heading) || "section";
    const count = used.get(base) ?? 0;
    used.set(base, count + 1);
    return {
      id: count === 0 ? base : `${base}-${count + 1}`,
      level: section.level ?? 2,
      heading: section.heading,
      text: section.text,
      list: section.list,
      faq: section.faq,
      figures: post.figures.filter((figure) => figure.after === section.heading),
    };
  });
  const toc: OutlineItem[] = sections.map(({ id, heading, level }) => ({ id, text: heading, level }));
  return { sections, toc };
}

/** Minutes to read at an unhurried 200 words a minute. */
export function readingMinutes(post: BlogPost) {
  const words = [post.description, ...post.body.flatMap((section) => [section.heading, ...sectionTexts(section).map(plainText)])]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function findBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

/** A product's own articles, in their written order. */
export function productPosts(productSlug: string) {
  return blogPosts.filter((post) => post.product.slug === productSlug);
}

/**
 * Further reading under an article: the product's other articles first,
 * then articles on the same topic for other products.
 */
export function relatedPosts(post: BlogPost, limit = 3) {
  const sameProduct = blogPosts.filter((other) => other.product.slug === post.product.slug && other !== post);
  const sameCategory = blogPosts.filter((other) => other.category === post.category && other.product.slug !== post.product.slug);
  return [...sameProduct, ...sameCategory].slice(0, limit);
}

export function toCardData(post: BlogPost): BlogCardData {
  const { slug, href, topic, category, title, description, image, art, published } = post;
  return { slug, href, topic, category, title, description, image, art, published };
}


/**
 * Linked labels at the end of an article: more articles from its product
 * range, and that range on /products. Both are existing pages; a label is
 * left out when the article's own text already links there.
 */
export function topicLabels(post: BlogPost) {
  const range = postRange(post);
  const category = catalogue.find((entry) => entry.id === range.id);
  const linked = new Set(
    post.body
      .flatMap(sectionTexts)
      .flatMap(textParts)
      .flatMap((part) => (typeof part === "string" ? [] : [part.href])),
  );
  const labels = [
    { label: `${range.label} articles`, href: blogListHref({ range }) },
    ...(category ? [{ label: `${category.label} range`, href: catalogueCategoryHref(category) }] : []),
  ];
  return labels.filter((label) => !linked.has(label.href));
}

/**
 * An article's hashtags with an accessible name for each link: the tag
 * first (as shown), then where it leads.
 */
export function hashtagLinks(post: BlogPost) {
  return post.hashtags.map(({ tag, href }) => {
    const article = blogPosts.find((other) => other.href === href);
    const study = caseStudies.find((entry) => caseStudyHref(entry.slug) === href);
    // A catalogue product's page, or an article's own product page outside the catalogue (whole turmeric).
    const product =
      catalogue.flatMap((category) => category.products).find((entry) => productHref(entry.slug) === href) ??
      blogPosts.find((other) => other.product.href === href)?.product;
    const filter = href.startsWith(`${blogPath}?category=`) ? findFilter(href.split("=")[1]) : undefined;
    const destination = article
      ? `article: ${article.title}`
      : study
        ? `case study: ${study.title}`
        : product
          ? `${product.name} product page`
          : filter
            ? `${filterLabel(filter)} articles`
            : "related page";
    return { tag, href, label: `${tag}, ${destination}` };
  });
}
