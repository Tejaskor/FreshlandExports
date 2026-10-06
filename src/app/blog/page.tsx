import { PageHeader } from "@/components/layout/page-header";
import { Container } from "@/components/ui/container";
import { BlogArchive } from "@/features/blog/components/blog-archive";
import { blogPath, blogPosts, toCardData } from "@/features/blog/data";
import { createMetadata } from "@/lib/seo";

const title = "Freshland Exports Blog | Agricultural Export Insights";

export const metadata = {
  ...createMetadata({
    title,
    description:
      "Explore Freshland Exports insights on agricultural products, sourcing, quality, handling, food applications and bulk supply.",
    path: blogPath,
  }),
  // The full title already names the company, so the site template is skipped.
  title: { absolute: title },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="From Our Blog"
        title={["Freshland Exports Blog"]}
        lead="Practical insights on agricultural products, sourcing, quality, handling, food applications and global supply."
      />

      <section aria-label="All articles" className="bg-cream pb-20 lg:pb-28">
        <Container>
          <BlogArchive posts={blogPosts.map(toCardData)} />
        </Container>
      </section>
    </>
  );
}
