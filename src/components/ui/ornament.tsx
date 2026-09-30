import { cn } from "@/lib/utils";

/** Small rust diamond on a hairline — a centred section ornament. */
export function Ornament({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 80 12" className={cn("h-3 w-20 text-rust", className)}>
      <path d="M0 6h30M50 6h30" stroke="currentColor" strokeWidth="1" />
      <path d="M40 1.5 44.5 6 40 10.5 35.5 6Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
