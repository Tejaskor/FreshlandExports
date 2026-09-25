import { RandDIntro } from "@/features/r-and-d/components/rd-intro";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "R&D Lab",
  description: "Supercritical and low-temperature extraction developed and validated in-house.",
  path: "/r-and-d",
});

export default function Page() {
  return <RandDIntro />;
}
