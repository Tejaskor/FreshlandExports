import { notFound } from "next/navigation";

import { CaseStudyDetail } from "@/features/case-studies/components/case-study-detail";
import { caseStudies, caseStudyHref, findCaseStudy } from "@/features/case-studies/data";
import { createMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

// Only the case studies in the data exist; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const study = findCaseStudy(slug);
  if (!study) return createMetadata({ title: "Case study not found", noIndex: true });
  return createMetadata({
    title: study.title,
    description: study.summary,
    path: caseStudyHref(study.slug),
    image: { url: study.image.src, alt: study.image.alt },
  });
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = findCaseStudy(slug);
  if (!study) notFound();

  return <CaseStudyDetail study={study} />;
}
