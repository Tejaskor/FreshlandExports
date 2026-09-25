import { notFound } from "next/navigation";

import { ProductDetail } from "@/features/products/components/product-detail";
import { productSlug, products } from "@/features/products/data";
import { createMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

/** Pre-renders every catalogue product at build time. */
export function generateStaticParams() {
  return products.map((product) => ({ slug: productSlug(product) }));
}

function findProduct(slug: string) {
  return products.find((product) => productSlug(product) === slug);
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) return createMetadata({ title: "Product not found", noIndex: true });

  return createMetadata({
    title: product.name,
    description: `${product.name} — ${product.descriptor}.`,
    path: product.href,
  });
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = findProduct(slug);

  if (!product) notFound();

  return <ProductDetail product={product} />;
}
