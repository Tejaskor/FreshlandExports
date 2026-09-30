import { MoringaSprig } from "@/features/moringa/components/moringa-sprig";
import styles from "@/features/moringa/moringa.module.css";
import { cn } from "@/lib/utils";

/**
 * Circular seal with slowly rotating type around a moringa sprig — the
 * page's recurring signature. Decorative: the words repeat facts stated in
 * the copy, so the whole badge is hidden from assistive tech.
 */
export function OrbitBadge({
  id,
  className,
  text = "Moringa oleifera · Leaf Powder · From India · ",
  tone = "light",
}: {
  /** Unique per page — names the circular text path. */
  id: string;
  className?: string;
  text?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative flex aspect-square items-center justify-center rounded-full",
        dark ? "bg-forest-deep text-highlight-inverse" : "bg-cream-warm text-forest",
        className,
      )}
    >
      <svg viewBox="0 0 200 200" className={cn("absolute inset-0 size-full", styles.spin)}>
        <defs>
          <path id={id} d="M100 100m-76 0a76 76 0 1 1 152 0a76 76 0 1 1-152 0" />
        </defs>
        <text
          className="type-label fill-current text-[11px]"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </svg>
      <MoringaSprig className="h-[46%] w-auto rotate-[18deg]" />
    </div>
  );
}
