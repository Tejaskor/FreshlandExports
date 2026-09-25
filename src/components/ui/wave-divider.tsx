import { cn } from "@/lib/utils";

/**
 * The organic curve that separates the hero from the statistics band.
 * Decorative only, so it is hidden from assistive technology.
 */
export function WaveDivider({
  className,
  fill = "text-white",
  flip = false,
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("block h-[60px] w-full sm:h-[90px]", fill, flip && "rotate-180", className)}
    >
      <path
        d="M0 120V56c186 0 292 34 468 34s272-56 480-56 306 42 492 42v44Z"
        fill="currentColor"
      />
    </svg>
  );
}
