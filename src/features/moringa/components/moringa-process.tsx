import Image from "next/image";
import type { CSSProperties } from "react";

import styles from "@/features/moringa/components/moringa-process.module.css";
import { cn } from "@/lib/utils";

const dir = "/images/products/Moringa Powder";

const frames: readonly { label: string; image: string; alt: string }[] = [
  { label: "Fresh Leaves", image: `${dir}/moringa-fresh-leaves.webp`, alt: "Fresh moringa leaves" },
  { label: "Leaf Drying", image: `${dir}/moringa-leaf-drying.webp`, alt: "Moringa leaves drying on racks" },
  { label: "Powder Milling", image: `${dir}/moringa-powder-milling.webp`, alt: "Dried moringa leaves being milled into powder" },
  { label: "Moringa Powder", image: `${dir}/moringa-powder1.webp`, alt: "A bowl of finished moringa powder" },
];

/** Each frame's offset within the shared 12s loop: 3s apart. */
const delay = (index: number) => ({ "--delay": `${index * 3}s` }) as CSSProperties;

/**
 * Leaf to Powder — one small floating card that shows a single process
 * photograph at a time (fresh leaves, drying, milling, powder), crossfading
 * every 3s, with one label beneath that changes in step. Pure CSS; under
 * reduced motion it holds the first frame.
 */
export function MoringaProcess({ className }: { className?: string }) {
  return (
    <figure
      className={cn(
        "w-32 rounded-[1.25rem] bg-cream-warm p-1.5 shadow-[var(--shadow-lift)] ring-1 ring-line sm:w-36 lg:w-[9.5rem]",
        className,
      )}
    >
      <div className="relative aspect-[5/4] overflow-hidden rounded-[0.875rem] bg-sage-100">
        {frames.map((frame, index) => (
          <Image
            key={frame.image}
            src={frame.image}
            alt={index === 0 ? frame.alt : ""}
            fill
            sizes="152px"
            className={cn(styles.frame, "object-cover")}
            style={delay(index)}
            data-first={index === 0 || undefined}
          />
        ))}
      </div>
      <figcaption className="relative mt-1.5 mb-0.5 h-4 text-center">
        <span className="sr-only">From leaf to powder: fresh leaves, leaf drying, powder milling, moringa powder.</span>
        {frames.map((frame, index) => (
          <span
            key={frame.label}
            aria-hidden="true"
            className={cn(styles.label, "absolute inset-0 text-[0.75rem] leading-4 font-medium text-forest")}
            style={delay(index)}
            data-first={index === 0 || undefined}
          >
            {frame.label}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
