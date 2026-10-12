import { BrandStory } from "@/features/home/components/brand-story";
import { BrochureCta } from "@/features/home/components/brochure-cta";
import { Contact } from "@/features/home/components/contact";
import { FeaturedProducts } from "@/features/home/components/featured-products";
import { Hero } from "@/features/home/components/hero";
import { HomeCaseStudies } from "@/features/home/components/home-case-studies";
import { HomeFaq } from "@/features/home/components/home-faq";
import { LatestInsights } from "@/features/home/components/latest-insights";
import { ProductCategories } from "@/features/home/components/product-categories";
import { Sustainability } from "@/features/home/components/sustainability";
import { siteConfig } from "@/config/site";
import { createMetadata, defaultShareImage } from "@/lib/seo";

export const metadata = createMetadata({
  image: defaultShareImage,
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
      <LatestInsights />
      <HomeCaseStudies />
      <BrochureCta />
      <HomeFaq />
      <Contact />
    </>
  );
}
