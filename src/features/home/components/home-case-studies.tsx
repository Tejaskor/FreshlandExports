import { CaseStudiesSection } from "@/features/case-studies/components/product-case-studies";
import { featuredCaseStudies } from "@/features/case-studies/data";

/**
 * Homepage "Case Studies", directly under Latest Blogs: the three featured
 * case studies (botanical powders, whole spices, fresh produce and fruit).
 */
export function HomeCaseStudies() {
  return (
    <CaseStudiesSection
      studies={featuredCaseStudies}
      description="Explore product-specific applications, sourcing considerations and industry insights across agricultural exports."
      headingId="home-case-studies-heading"
      className="border-t border-line bg-white"
      viewAll
    />
  );
}
