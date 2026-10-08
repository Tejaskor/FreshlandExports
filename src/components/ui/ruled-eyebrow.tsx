import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

/**
 * Section marker used on every section so each page reads as one sequence.
 * It once carried a short rust rule; that decoration has been retired, so it
 * now renders the plain eyebrow, centred when asked.
 */
export function RuledEyebrow({
  children,
  align = "start",
  tone = "default",
  className,
}: {
  children: string;
  align?: "start" | "center";
  tone?: "default" | "inverse";
  className?: string;
}) {
  return (
    <Eyebrow tone={tone} className={cn(align === "center" && "text-center", className)}>
      {children}
    </Eyebrow>
  );
}
