import Link from "next/link";

import { Figure } from "@/components/media/figure";
import { Icon } from "@/components/ui/icon";
import type { BlogCardData } from "@/features/blog/data";
import { formatPublished } from "@/features/blog/meta";
import { cn } from "@/lib/utils";

/**
 * One Blog article as an editorial card: photograph, topic label, title,
 * summary and "Read More". The title is the link, stretched over the whole
 * card, so the card is a single tab stop and screen readers hear the title
 * rather than the full card text. Shared by product pages, the archive and
 * the related articles under each article.
 */
export function BlogCard({
  post,
  headingLevel = "h3",
  showDate = false,
  accentClassName = "text-rust",
  linkClassName = "text-forest group-hover:text-rust",
  sizes = "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw",
}: {
  post: BlogCardData;
  headingLevel?: "h2" | "h3";
  showDate?: boolean;
  /** Colour of the topic label. */
  accentClassName?: string;
  /** Colour of "Read More", at rest and on hover. */
  linkClassName?: string;
  sizes?: string;
}) {
  const Heading = headingLevel;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition-[translate,box-shadow,border-color] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow-card)] has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-leaf/50">
      <Figure
        image={post.image.src}
        alt={post.image.alt}
        art={post.art}
        sizes={sizes}
        className="aspect-[4/3] w-full"
        mediaClassName="transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
      />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className={cn("type-label font-semibold", accentClassName)}>{post.topic}</p>

        <Heading className="mt-3 font-display text-[1.375rem] leading-[1.22] font-semibold tracking-[-0.01em] text-balance break-words text-forest">
          <Link href={post.href} className="outline-none after:absolute after:inset-0 after:content-['']">
            {post.title}
          </Link>
        </Heading>

        {showDate && (
          <p className="mt-2.5 text-[0.8125rem] text-ink-faint">
            <time dateTime={post.published}>{formatPublished(post.published)}</time>
          </p>
        )}

        <p className="mt-3 mb-6 line-clamp-3 text-[0.9375rem] leading-relaxed text-ink-muted">{post.description}</p>

        <span
          aria-hidden="true"
          className={cn(
            "mt-auto inline-flex items-center gap-2 text-[0.875rem] font-semibold transition-colors duration-300",
            linkClassName,
          )}
        >
          Read More
          <Icon
            name="arrow-right"
            className="size-3.5 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </article>
  );
}

/** The card grid: three across on desktop, two on tablet, one on phones. */
export const blogGrid = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8";
