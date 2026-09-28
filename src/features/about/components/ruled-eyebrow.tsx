import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

/**
 * Section marker with a short ember rule — the About page's signature, used
 * on every section so the page reads as one sequence. Centred variants carry
 * a rule on both sides.
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
  const rule = <span aria-hidden="true" className="h-px w-8 shrink-0 bg-ember" />;

  return (
    <Eyebrow
      tone={tone}
      className={cn(
        "flex items-center gap-3",
        align === "center" && "justify-center",
        className,
      )}
    >
      {rule}
      <span>{children}</span>
      {align === "center" && rule}
    </Eyebrow>
  );
}
