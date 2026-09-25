import { AboutIntro } from "@/features/about/components/about-intro";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us",
  description: "A certified organic botanical house cultivating, extracting and validating plant actives in India.",
  path: "/about",
});

export default function Page() {
  return <AboutIntro />;
}
