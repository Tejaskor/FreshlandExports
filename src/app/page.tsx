import { BrandStory } from "@/features/home/components/brand-story";
import { BrochureCta } from "@/features/home/components/brochure-cta";
import { Contact } from "@/features/home/components/contact";
import { FeaturedProducts } from "@/features/home/components/featured-products";
import { Hero } from "@/features/home/components/hero";
import { ProductCategories } from "@/features/home/components/product-categories";
import { Sustainability } from "@/features/home/components/sustainability";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  path: "/",
});

/**
 * Section order mirrors the reference composition. Every section is a Server
 * Component; only the carousel, contact form and motion wrappers hydrate.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <BrandStory />
      <FeaturedProducts />
      <Sustainability />
      <BrochureCta />
      <Contact />
    </>
  );
}
