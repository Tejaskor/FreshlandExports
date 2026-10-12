import { ProductCatalogue } from "@/features/products/components/product-catalogue";
import { ProductsHero } from "@/features/products/components/products-hero";
import { ProductsQuoteCta } from "@/features/products/components/products-quote-cta";
import { createMetadata, ogCard } from "@/lib/seo";

export const metadata = createMetadata({
  image: ogCard("products", "Freshland Exports products: botanical powders, fresh produce, fruits and whole spices"),
  title: "Products",
  description:
    "Freshland Exports product catalogue: fresh agricultural produce, botanical powders, fruits and whole spices from India, supplied in bulk for wholesale, food-service, processing and export buyers.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductCatalogue />
      <ProductsQuoteCta />
    </>
  );
}
