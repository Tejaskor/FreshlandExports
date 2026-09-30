import { notFound } from "next/navigation";

import { ExportProductDetail } from "@/features/products/components/export-product-detail";
import { ProductDetail } from "@/features/products/components/product-detail";
import { productSlug, products } from "@/features/products/data";
import {
  exportCategories,
  exportProductHref,
  exportProducts,
  findExportProduct,
  relatedExportProducts,
} from "@/features/products/export-catalogue";
import { exportProductMedia } from "@/features/products/export-images";
import { createMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

/**
 * One route serves both ranges: the export range behind the header menu, and
 * the organic catalogue the homepage features. Their slugs never overlap.
 */
export function generateStaticParams() {
  return [
    ...exportProducts.map((product) => ({ slug: product.slug })),
    ...products.map((product) => ({ slug: productSlug(product) })),
  ];
}

function findProduct(slug: string) {
  return products.find((product) => productSlug(product) === slug);
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;

  const exportProduct = findExportProduct(slug);
  if (exportProduct) {
    return createMetadata({
      title: exportProduct.name,
      description: `${exportProduct.name} from India — ${exportProduct.summary.toLowerCase()}. ${exportCategories[exportProduct.category].name} from Freshland Exports; specifications, packaging and quotes on request.`,
      path: exportProductHref(exportProduct.slug),
    });
  }

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

  const exportProduct = findExportProduct(slug);
  if (exportProduct) {
    return (
      <ExportProductDetail
        product={exportProduct}
        media={exportProductMedia(exportProduct)}
        related={relatedExportProducts(exportProduct).map((item) => ({
          product: item,
          media: exportProductMedia(item),
        }))}
      />
    );
  }

  const product = findProduct(slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
