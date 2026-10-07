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
import { type ArticleImage, articleImages } from "@/features/blog/images";
import { blogCategories, type BlogCategory } from "@/features/blog/meta";
import { type ArticleBody, productBlogs } from "@/features/products/blog";
import { exportProductHref, findExportProduct, productMenu } from "@/features/products/export-catalogue";

/**
 * The Blog: every product article from features/products/blog.ts, given its
 * own page at /resources/<slug>. Product pages, the archive and the article pages
 * all read from this one index, so an article is written once.
 */

/** The Blog lives under Resources: the listing and every article. */
export const blogPath = "/resources";
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
  product: { slug: string; name: string; href: string };
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

/** Menu order first (the order buyers browse the range), then the rest. */
const menuOrder = productMenu.flatMap((group) => group.items.map((item) => item.slug));
const productOrder = [
  ...menuOrder.filter((slug) => slug in productBlogs),
  ...Object.keys(productBlogs).filter((slug) => !menuOrder.includes(slug)),
];

function productName(slug: string) {
  const menuItem = productMenu.flatMap((group) => group.items).find((item) => item.slug === slug);
  return menuItem?.label ?? findExportProduct(slug)?.name ?? slug;
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
        published: firstPublished,
        updated: article.updated,
        author: article.author,
        views: article.views,
        product: { slug: productSlug, name, href: exportProductHref(productSlug) },
      };
    });
  });

  const seen = new Set<string>();
  for (const post of posts) {
    if (seen.has(post.slug)) throw new Error(`Blog: duplicate article slug "${post.slug}"`);
    seen.add(post.slug);
  }
  return posts;
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

/** Categories that have at least one article, in taxonomy order. */
export const usedCategories = blogCategories.filter((category) =>
  blogPosts.some((post) => post.category === category),
);

export const postsPerPage = 3;

/** The listing URL for a category and page; page 1 and "all" stay implicit. */
export function blogListHref({ category, page = 1 }: { category?: BlogCategory; page?: number }) {
  const params = new URLSearchParams();
  if (category) params.set("category", categorySlug(category));
  if (page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `${blogPath}?${query}` : blogPath;
}

/**
 * One page of the listing: the newest articles first, optionally narrowed to
 * a category. Returns null for a page beyond the last.
 */
export function blogListing({ category, page }: { category?: BlogCategory; page: number }) {
  const posts = category ? latestPosts.filter((post) => post.category === category) : latestPosts;
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
    };
  });
  const toc: OutlineItem[] = sections.map(({ id, heading, level }) => ({ id, text: heading, level }));
  return { sections, toc };
}

/** Minutes to read at an unhurried 200 words a minute. */
export function readingMinutes(post: BlogPost) {
  const words = [post.description, ...post.body.flatMap((section) => [section.heading, section.text])]
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

