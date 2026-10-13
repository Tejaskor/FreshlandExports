import { notFound } from "next/navigation";

import { BlogArticle } from "@/features/blog/components/blog-article";
import { blogPosts, findBlogPost } from "@/features/blog/data";
import { blogPostingJsonLd, createMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

/** Only the articles in the index exist; any other slug is a 404. */
export const dynamicParams = false;

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = findBlogPost(slug);
  if (!post) return createMetadata({ title: "Article not found", noIndex: true });

  return createMetadata({
    title: post.title,
    description: post.description,
    path: post.href,
    image: { url: post.image.src, alt: post.image.alt },
    article: { publishedTime: post.published, section: post.category },
  });
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = findBlogPost(slug);
  if (!post) notFound();


  const jsonLd = [
    blogPostingJsonLd({
      title: post.title,
      description: post.description,
      path: post.href,
      image: post.image.src,
      published: post.published,
      updated: post.updated,
      section: post.category,
    }),
  ];

  return (
    <>
      <BlogArticle post={post} />
      <JsonLd data={jsonLd} />
    </>
  );
}
