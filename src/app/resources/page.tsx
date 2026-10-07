import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import {
  BlogListCard,
  BlogPagination,
  BlogSidebar,
  listingAnchor,
} from "@/features/blog/components/blog-listing";
import { blogListHref, blogListing, findCategory } from "@/features/blog/data";
import { createMetadata } from "@/lib/seo";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const blogTitle = "Freshland Exports Blog | Agricultural Export Insights";
const blogDescription =
  "Explore Freshland Exports insights on agricultural products, sourcing, quality, handling, food applications and bulk supply.";

/** Reads ?category=<slug>&page=<n>. Unknown values resolve to null. */
async function readQuery(searchParams: SearchParams) {
  const query = await searchParams;
  const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

  const categoryParam = one(query.category);
  const category = categoryParam ? findCategory(categoryParam) : undefined;
  const pageParam = one(query.page);
  const page = pageParam === undefined ? 1 : Number(pageParam);

  // An unknown category is a missing page, not a silent "all".
  if (categoryParam && !category) return null;
  return { category, page };
}

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }) {
  const query = await readQuery(searchParams);
  if (!query) return createMetadata({ title: "Page not found", noIndex: true });
  const { category, page } = query;

  const parts = [category, page > 1 ? `Page ${page}` : null].filter(Boolean);
  const title = parts.length > 0 ? `${parts.join(" — ")} | Freshland Exports Blog` : blogTitle;

  return {
    ...createMetadata({
      title,
      description: category
        ? `${category} from the Freshland Exports Blog: practical guidance for buyers of agricultural products, fruits and spices.`
        : blogDescription,
      // Each listing page is its own canonical URL.
      path: blogListHref({ category, page }),
    }),
    // The full title already names the company, so the site template is skipped.
    title: { absolute: title },
  };
}

/**
 * Resources → Blog: three articles per page, newest first, with category
 * filtering, the five most recent posts and page navigation, all carried in
 * the URL (?category=…&page=…).
 */
export default async function ResourcesPage({ searchParams }: { searchParams: SearchParams }) {
  const query = await readQuery(searchParams);
  if (!query) notFound();

  const listing = blogListing(query);
  if (!listing) notFound();
  const { category } = query;

  return (
    <section
      id={listingAnchor}
      aria-labelledby="blog-heading"
      // No masthead: the list starts just below the fixed header (whose
      // height the top padding clears).
      className="scroll-mt-24 bg-cream pt-28 pb-20 lg:pt-32 lg:pb-28"
    >
      {/* The page's heading, for search engines and screen readers only. */}
      <h1 id="blog-heading" className="sr-only">
        Freshland Exports Blog{category ? ` — ${category}` : ""}
      </h1>

      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-8">

          <ul className="grid gap-6 lg:gap-8">
            {listing.posts.map((post, index) => (
              <li key={post.slug}>
                <BlogListCard post={post} priority={index === 0} />
              </li>
            ))}
          </ul>

          <BlogPagination page={listing.page} pageCount={listing.pageCount} category={category} />
        </div>

        <aside aria-label="Blog navigation" className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <BlogSidebar active={category} />
          </div>
        </aside>
      </Container>
    </section>
  );
}
