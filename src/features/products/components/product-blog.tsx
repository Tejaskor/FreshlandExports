import type { ReactNode } from "react";

import { BlogSection } from "@/features/blog/components/blog-section";
import { productPosts } from "@/features/blog/data";

/**
 * A product page's Blog section: the product's own three Blog articles in the
 * shared Blog section, laid out as on the homepage. Each page passes its own
 * ground and accent so the section sits in its palette; `after` takes a
 * divider (such as a wave) flush to the bottom edge. Renders nothing for a
 * product without articles.
 */
export function ProductBlog({
  slug,
  productName,
  heading,
  description,
  className,
  accentClassName = "text-leaf",
  linkClassName = "text-rust-deep group-hover:text-rust",
  after,
}: {
  slug: string;
  productName: string;
  /** Replaces the default "Latest Blogs" heading. */
  heading?: string;
  /** Replaces the default introduction under the heading. */
  description?: string;
  /** Section background (and any border). */
  className?: string;
  /** Colour of the category labels. */
  accentClassName?: string;
  /** Colour of the "Read More" links. */
  linkClassName?: string;
  after?: ReactNode;
}) {
  return (
    <BlogSection
      posts={productPosts(slug)}
      description={description ?? `Buyer guides on quality, sourcing, storage and uses of ${productName.toLowerCase()} for export.`}
      heading={heading}
      className={className}
      accentClassName={accentClassName}
      linkClassName={linkClassName}
      after={after}
    />
  );
}
