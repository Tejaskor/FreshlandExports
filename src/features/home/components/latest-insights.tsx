import { BlogSection } from "@/features/blog/components/blog-section";
import { latestPosts } from "@/features/blog/data";

/**
 * Homepage "Latest Blogs": the three newest Blog articles, newest first as
 * on /blog, in the shared Blog section. Sits between the sustainability band
 * and the Case Studies section.
 */
export function LatestInsights() {
  return (
    <BlogSection
      posts={latestPosts.slice(0, 3)}
      description="Explore expert insights on agricultural products, botanical powders, spices, sourcing and global export trends."
      headingId="latest-insights-heading"
    />
  );
}
