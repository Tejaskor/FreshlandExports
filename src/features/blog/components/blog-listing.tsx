import Link from "next/link";

import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import {
  type BlogCategory,
  type BlogPost,
  blogListHref,
  latestPosts,
  usedCategories,
} from "@/features/blog/data";
import { formatPublished } from "@/features/blog/meta";
import { cn } from "@/lib/utils";

/** Listing links land on the article list, not the top of the masthead. */
export const listingAnchor = "articles";
const toList = (href: string) => `${href}#${listingAnchor}`;

/* --- Article row ----------------------------------------------------------- */

/**
 * One article in the listing: the photograph beside the text from tablet
 * width, above it on phones. The title is the link, stretched over the row,
 * so the whole card is clickable and is a single tab stop.
 */
/**
 * Every card has the same height and inner layout, whatever its text: the
 * title and the excerpt are each held to three lines (reserving that
 * space), so "Read Article" sits at the same place on every card. From md
 * the card is a fixed-height row with the photograph filling its side.
 */
export function BlogListCard({ post, priority = false }: { post: BlogPost; priority?: boolean }) {
  return (
    <article className="group relative grid overflow-hidden md:h-[21rem] rounded-xl border border-line bg-white transition-[translate,box-shadow,border-color] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow-card)] has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-leaf/50 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
      <Figure
        image={post.image.src}
        alt={post.image.alt}
        art={post.art}
        priority={priority}
        sizes="(min-width: 1024px) 28vw, (min-width: 768px) 42vw, 100vw"
        className="aspect-[4/3] w-full md:aspect-auto md:h-full"
        mediaClassName="transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
      />

      <div className="flex min-h-0 flex-col p-6 sm:p-8">
        {/* Category, author and date on the left; views on the right. The
            author and view count appear only when the article records them —
            nothing is filled in. Wraps on narrow cards rather than overflowing. */}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5">
          <p className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 text-[0.8125rem] text-ink-faint">
            <span className="type-label font-semibold text-rust">{post.category}</span>
            <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
            {post.author && (
              <span className="inline-flex items-center gap-1.5">
                <Icon name="user" className="size-3.5 shrink-0" />
                <span className="sr-only">By </span>
                {post.author}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Icon name="calendar" className="size-3.5 shrink-0" />
              <time dateTime={post.published}>{formatPublished(post.published, "day")}</time>
            </span>
          </p>
          {post.views !== undefined && (
            <p className="inline-flex shrink-0 items-center gap-1.5 text-[0.8125rem] text-ink-faint">
              <Icon name="eye" className="size-3.5 shrink-0" />
              {new Intl.NumberFormat("en-IN").format(post.views)}
              <span className="sr-only"> views</span>
            </p>
          )}
        </div>

        <h2 className="mt-4 line-clamp-3 min-h-[3lh] font-display text-[clamp(1.375rem,1.2rem+0.6vw,1.75rem)] leading-[1.2] font-semibold tracking-[-0.01em] text-balance break-words text-forest">
          <Link href={post.href} className="outline-none after:absolute after:inset-0 after:content-['']">
            {post.title}
          </Link>
        </h2>

        <p className="mt-3 mb-6 line-clamp-3 min-h-[3lh] text-[0.9375rem] leading-relaxed text-ink-muted">
          {post.description}
        </p>

        <span
          aria-hidden="true"
          className="mt-auto inline-flex items-center gap-2 text-[0.875rem] font-semibold text-forest transition-colors duration-300 group-hover:text-rust"
        >
          Read Article
          <Icon
            name="arrow-right"
            className="size-3.5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </article>
  );
}

/* --- Sidebar --------------------------------------------------------------- */

const panel = "rounded-xl border border-line bg-white p-5 sm:p-6";
const panelHeading = "font-display text-[1.25rem] font-semibold text-forest";

/**
 * Categories and the five newest articles. Beside the list on desktop; below
 * it on smaller screens, where the categories wrap into a compact grid.
 */
export function BlogSidebar({ active }: { active?: BlogCategory }) {
  const options: { label: string; category?: BlogCategory }[] = [
    { label: "All Articles" },
    ...usedCategories.map((category) => ({ label: category, category })),
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
      <nav aria-labelledby="categories-heading" className={panel}>
        <h2 id="categories-heading" className={panelHeading}>
          Categories
        </h2>
        <span aria-hidden="true" className="mt-3 block h-px w-10 bg-rust" />
        <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1 sm:grid-cols-1">
          {options.map((option) => {
            const current = option.category === active;
            return (
              <li key={option.label}>
                <Link
                  href={toList(blogListHref({ category: option.category }))}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-2.5 py-2 text-[0.875rem] leading-snug transition-colors duration-300",
                    // A short horizontal dash before the name, drawn in CSS.
                    "before:h-px before:w-3 before:shrink-0 before:rounded-full before:transition-colors before:duration-300 before:content-['']",
                    current
                      ? "bg-section font-semibold text-forest before:bg-rust"
                      : "text-ink before:bg-line-strong hover:bg-section/70 hover:text-forest hover:before:bg-leaf",
                  )}
                >
                  {option.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <section aria-labelledby="recent-heading" className={panel}>
        <h2 id="recent-heading" className={panelHeading}>
          Recent Posts
        </h2>
        <span aria-hidden="true" className="mt-3 block h-px w-10 bg-rust" />
        <ol className="mt-4 divide-y divide-line">
          {latestPosts.slice(0, 5).map((post) => (
            <li key={post.slug}>
              <Link href={post.href} className="group/recent block py-3 first:pt-1">
                <span className="block text-[0.9375rem] leading-snug font-medium text-forest transition-colors duration-300 group-hover/recent:text-rust">
                  {post.title}
                </span>
                <time dateTime={post.published} className="mt-1 block text-[0.75rem] text-ink-faint">
                  {formatPublished(post.published, "day")}
                </time>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

/* --- Pagination ------------------------------------------------------------ */

/** Page numbers to show: the first, the last, and the current page's neighbours. */
function pageItems(page: number, pageCount: number): (number | "gap")[] {
  const keep = new Set([1, pageCount, page - 1, page, page + 1]);
  const items: (number | "gap")[] = [];
  for (let n = 1; n <= pageCount; n++) {
    if (keep.has(n)) items.push(n);
    else if (items.at(-1) !== "gap") items.push("gap");
  }
  return items;
}

const pageBox =
  "inline-flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-[0.875rem] font-semibold transition-colors duration-300 " +
  "focus-visible:ring-2 focus-visible:ring-leaf/50 focus-visible:outline-none";
const pageIdle = "border-line bg-white text-forest hover:border-forest hover:text-forest";
const pageDisabled = "cursor-not-allowed border-line bg-white/60 text-ink-faint";

export function BlogPagination({
  page,
  pageCount,
  category,
}: {
  page: number;
  pageCount: number;
  category?: BlogCategory;
}) {
  if (pageCount <= 1) return null;
  const href = (n: number) => toList(blogListHref({ category, page: n }));

  const step = (label: "Previous" | "Next", target: number, enabled: boolean) =>
    enabled ? (
      <Link href={href(target)} rel={label === "Next" ? "next" : "prev"} className={cn(pageBox, pageIdle)}>
        {label === "Previous" && <Icon name="arrow-right" className="mr-1.5 size-3.5 rotate-180" />}
        {label}
        {label === "Next" && <Icon name="arrow-right" className="ml-1.5 size-3.5" />}
      </Link>
    ) : (
      <span aria-disabled="true" className={cn(pageBox, pageDisabled)}>
        {label === "Previous" && <Icon name="arrow-right" className="mr-1.5 size-3.5 rotate-180" />}
        {label}
        {label === "Next" && <Icon name="arrow-right" className="ml-1.5 size-3.5" />}
      </span>
    );

  return (
    <nav aria-label="Blog pages" className="mt-10 flex flex-wrap items-center justify-center gap-2">
      {step("Previous", page - 1, page > 1)}
      <ol className="flex flex-wrap items-center gap-2">
        {pageItems(page, pageCount).map((item, index) =>
          item === "gap" ? (
            <li key={`gap-${index}`} aria-hidden="true" className="px-1 text-ink-faint">
              …
            </li>
          ) : (
            <li key={item}>
              <Link
                href={href(item)}
               
                aria-label={`Page ${item}`}
                aria-current={item === page ? "page" : undefined}
                className={cn(pageBox, item === page ? "border-forest bg-forest text-white" : pageIdle)}
              >
                {item}
              </Link>
            </li>
          ),
        )}
      </ol>
      {step("Next", page + 1, page < pageCount)}
    </nav>
  );
}
