import { notFound } from "next/navigation";

import { ExportProductDetail } from "@/features/products/components/export-product-detail";
import { ProductEnquiry } from "@/features/products/components/product-enquiry";
import { AgriPage } from "@/features/agri/components/agri-page";
import { findLandingProduct } from "@/features/agri/content";
import { FreshOnionPage } from "@/features/fresh-onion/components/fresh-onion-page";
import { MoringaPage } from "@/features/moringa/components/moringa-page";
import { OnionPage } from "@/features/onion-powder/components/onion-page";
import { TurmericPage } from "@/features/turmeric-powder/components/turmeric-page";
import { ProductDetail } from "@/features/products/components/product-detail";
import { productSlug, products } from "@/features/products/data";
import {
  exportCategories,
  exportProductHref,
  exportProducts,
  findExportProduct,
  findMenuOnlyProduct,
  menuOnlyProducts,
  relatedExportProducts,
} from "@/features/products/export-catalogue";
import { exportProductMedia } from "@/features/products/export-images";
import { createMetadata, existingImage } from "@/lib/seo";
import { catalogueImage, findCatalogueProduct } from "@/features/products/catalogue";

type Params = { params: Promise<{ slug: string }> };

/**
 * One route serves both ranges: the export range behind the header menu, and
 * the organic catalogue the homepage features. Their slugs never overlap.
 */
export function generateStaticParams() {
  return [
    ...exportProducts.map((product) => ({ slug: product.slug })),
    ...menuOnlyProducts.map((product) => ({ slug: product.slug })),
    ...products.map((product) => ({ slug: productSlug(product) })),
  ];
}

/** The product's catalogue photograph, as a share image. */
function catalogueShareImage(slug: string) {
  const entry = findCatalogueProduct(slug);
  const url = entry ? catalogueImage(entry.image) : null;
  return entry && url ? { url, alt: entry.alt } : undefined;
}

function findProduct(slug: string) {
  return products.find((product) => productSlug(product) === slug);
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;

  // Agricultural, fruit and spice landing pages carry temporary copy for now: kept out of
  // search results until their final content is in place.
  const agri = findLandingProduct(slug);
  if (agri) {
    return createMetadata({
      title: agri.name,
      description: agri.hero.body,
      path: exportProductHref(agri.slug),
      noIndex: true,
      // The page's own hero photograph, else the catalogue photograph.
      image: existingImage({ url: agri.images.hero.file, alt: agri.images.hero.alt }, catalogueShareImage(agri.slug)),
    });
  }

  const exportProduct = findExportProduct(slug);
  if (exportProduct) {
    const media = exportProductMedia(exportProduct);
    return createMetadata({
      title: exportProduct.name,
      description:
        exportProduct.seoDescription ??
        `${exportProduct.name} from India — ${exportProduct.summary.toLowerCase()}. ${exportCategories[exportProduct.category].name} from Freshland Exports; specifications, packaging and quotes on request.`,
      path: exportProductHref(exportProduct.slug),
      image: existingImage(media.image ? { url: media.image, alt: media.alt } : undefined, catalogueShareImage(exportProduct.slug)),
    });
  }

  // Menu products awaiting a full page: indexable only once real content exists.
  const menuOnly = findMenuOnlyProduct(slug);
  if (menuOnly) {
    return createMetadata({
      title: menuOnly.name,
      description: `Enquire about ${menuOnly.name} from Freshland Exports — specifications, packaging and quotes on request.`,
      path: exportProductHref(menuOnly.slug),
      noIndex: true,
      image: catalogueShareImage(menuOnly.slug),
    });
  }

  const product = findProduct(slug);
  if (!product) return createMetadata({ title: "Product not found", noIndex: true });

  // The earlier organic catalogue: no page links here and the sitemap leaves
  // it out, and its short copy overlaps the export product pages, so it stays
  // out of search results like the other placeholder pages.
  return createMetadata({
    title: product.name,
    description: `${product.name} — ${product.descriptor}.`,
    path: product.href,
    noIndex: true,
    image: product.image ? { url: product.image, alt: product.alt } : undefined,
  });
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;

  const agri = findLandingProduct(slug);
  if (agri) return <AgriPage product={agri} />;

  const exportProduct = findExportProduct(slug);
  // Moringa, Onion and Turmeric Powder and Fresh Onions have their own
  // editorial pages; the rest of the export range shares one layout.
  if (exportProduct?.slug === "moringa-powder") return <MoringaPage product={exportProduct} />;
  if (exportProduct?.slug === "onion-powder") return <OnionPage product={exportProduct} />;
  if (exportProduct?.slug === "turmeric-powder") return <TurmericPage product={exportProduct} />;
  if (exportProduct?.slug === "onion") return <FreshOnionPage product={exportProduct} />;
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

  const menuOnly = findMenuOnlyProduct(slug);
  if (menuOnly) return <ProductEnquiry product={menuOnly} />;

  const product = findProduct(slug);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}
