import { notFound } from "next/navigation";

import { PageHeader } from "@/components/layout/page-header";
import { categories, categorySlug } from "@/features/categories/data";
import { createMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categories.map((category) => ({ slug: categorySlug(category) }));
}

function findCategory(slug: string) {
  return categories.find((category) => categorySlug(category) === slug);
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const category = findCategory(slug);

  if (!category) return createMetadata({ title: "Category not found", noIndex: true });

  return createMetadata({
    title: category.title,
    description: `${category.title} — ${category.description}.`,
    path: `/categories/${slug}`,
  });
}

/**
 * Header only for now: nothing in the product data associates a product with
 * a category, so listing the full catalogue here would imply a filter that
 * does not exist. Add a `category` field to Product and this page can list.
 */
export default async function CategoryPage({ params }: Params) {
  const { slug } = await params;
  const category = findCategory(slug);

  if (!category) notFound();

  return (
    <PageHeader
      eyebrow="Category"
      title={[category.title]}
      lead={category.description}
    />
  );
}
