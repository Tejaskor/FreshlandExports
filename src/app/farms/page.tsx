import { FarmsIntro } from "@/features/farms/components/farms-intro";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Our Farms",
  description: "Regenerative farmland under long-term stewardship, traceable plot by plot.",
  path: "/farms",
});

export default function Page() {
  return <FarmsIntro />;
}
