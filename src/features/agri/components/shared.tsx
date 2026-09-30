import type { ReactNode } from "react";

import { Line, RevealLines } from "@/animations/reveal-lines";
import { Reveal } from "@/animations/reveal";
import { RuledEyebrow } from "@/components/ui/ruled-eyebrow";
import type { ImageShape, ImageSlotData } from "@/features/agri/types";
import { ImageSlot } from "@/features/moringa/components/image-slot";
import { type } from "@/features/moringa/styles";
import { cn } from "@/lib/utils";

/** Radius and proportion for each image shape. */
export const shapes: Record<ImageShape, { radius: string; aspect: string }> = {
  arch: { radius: "rounded-t-full rounded-b-[2rem]", aspect: "aspect-[4/5]" },
  circle: { radius: "rounded-full", aspect: "aspect-square" },
  leaf: { radius: "rounded-[3rem_0.75rem_3rem_0.75rem]", aspect: "aspect-[5/4]" },
  pill: { radius: "rounded-full", aspect: "aspect-[3/5]" },
  rounded: { radius: "rounded-[2rem]", aspect: "aspect-[4/3]" },
};

/** A product photograph slot in the page's accent colours. */
export function ProductImage({
  slot,
  className,
  dark = false,
  priority = false,
  compact = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  slot: ImageSlotData;
  className?: string;
  dark?: boolean;
  priority?: boolean;
  compact?: boolean;
  sizes?: string;
}) {
  return (
    <ImageSlot
      slot={slot}
      tone={dark ? "productDark" : "product"}
      priority={priority}
      compact={compact}
      framed={false}
      sizes={sizes}
      className={className}
    />
  );
}

/** Eyebrow + section heading (h2) + optional lead, in homepage type. */
export function SectionHeader({
  id,
  eyebrow,
  heading,
  intro,
  inverse = false,
  align = "split",
  className,
}: {
  id: string;
  eyebrow: string;
  heading: string;
  intro?: ReactNode;
  inverse?: boolean;
  /** `split` puts the lead beside the heading on desktop; `center` stacks it. */
  align?: "split" | "center" | "start";
  className?: string;
}) {
  const center = align === "center";

  return (
    <div
      className={cn(
        "grid gap-4",
        align === "split" && intro && "lg:grid-cols-12 lg:items-end",
        center && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      <div className={cn(align === "split" && intro && "lg:col-span-7")}>
        <Reveal variant="rise">
          <RuledEyebrow tone={inverse ? "inverse" : "default"} align={center ? "center" : "start"}>
            {eyebrow}
          </RuledEyebrow>
        </Reveal>
        <RevealLines
          as="h2"
          id={id}
          className={cn(type.section, "mt-5", inverse ? "text-white" : "text-forest")}
        >
          <Line>{heading}</Line>
        </RevealLines>
      </div>
      {intro && (
        <Reveal
          variant="rise"
          delay={0.1}
          className={cn(align === "split" && "lg:col-span-4 lg:col-start-9", center && "mt-1")}
        >
          <p className={cn("text-[1rem] leading-relaxed", inverse ? "text-white/75" : "text-ink-muted")}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Small uppercase label in homepage type (Geist Mono). */
export const label = "type-label";

/** Pre-filled inquiry message: the product plus the details a buyer gives. */
export function inquiryMessage(name: string) {
  return `I'd like a quote for ${name}.\nCompany: \nRequired quantity: \nPackaging preference: \n`;
}
