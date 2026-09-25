import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

type Variant = "ember" | "forest" | "outline" | "quiet";
type Size = "sm" | "md" | "lg";

/**
 * Hover is colour-only by design: no translate, scale or other position shift,
 * and the transition lists colour properties explicitly so a stray transform
 * utility can never be animated in. Every button in the app inherits this.
 */
const base =
  "group/btn relative inline-flex items-center justify-center gap-3 rounded-full " +
  "font-sans font-medium whitespace-nowrap " +
  "transition-[background-color,color,border-color,box-shadow] duration-500 " +
  "ease-[var(--ease-out-expo)] " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  ember: "bg-ember text-white hover:bg-ember-deep",
  forest: "bg-forest text-white hover:bg-forest-deep",
  outline:
    "border border-line-strong bg-white/80 text-forest hover:border-leaf hover:text-leaf",
  quiet: "text-forest hover:text-leaf",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-[0.8125rem]",
  md: "h-12 px-6 text-[0.875rem]",
  lg: "h-14 px-7 text-[0.9375rem]",
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  /** Trailing arrow in a filled disc — the reference's signature CTA detail. */
  withArrow?: boolean;
};

type ButtonAsButton = BaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: never };

type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const discTone: Record<Variant, string> = {
  ember: "bg-white/25 text-white",
  forest: "bg-white/20 text-white",
  outline: "bg-sage-100 text-forest group-hover/btn:bg-leaf group-hover/btn:text-white",
  quiet: "bg-sage-100 text-forest group-hover/btn:bg-leaf group-hover/btn:text-white",
};

function Arrow({ variant }: { variant: Variant }) {
  return (
    <span
      className={cn(
        "flex size-7 items-center justify-center rounded-full " +
          "transition-[background-color,color] duration-500 ease-[var(--ease-out-expo)]",
        discTone[variant],
      )}
    >
      <Icon name="arrow-right" className="size-3.5" />
    </span>
  );
}

/**
 * Renders an anchor when `href` is present and a button otherwise, so callers
 * never have to choose between styling and correct semantics.
 */
export function Button({
  variant = "ember",
  size = "md",
  withArrow = true,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    withArrow && "pr-2.5",
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <Arrow variant={variant} />}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}

/** Circular icon button used by category cards and the product carousel. */
export function CircleButton({
  label,
  icon = "arrow-right",
  className,
  as = "button",
  ...props
}: ComponentPropsWithoutRef<"button"> & {
  label: string;
  icon?: "arrow-right" | "arrow-left";
  as?: "button" | "span";
}) {
  const classes = cn(
    "flex size-10 shrink-0 items-center justify-center rounded-full border border-line-strong",
    "text-forest transition-[background-color,color,border-color] duration-500 ease-[var(--ease-out-expo)]",
    "hover:border-leaf hover:bg-leaf hover:text-white",
    "disabled:opacity-35 disabled:hover:border-line-strong disabled:hover:bg-transparent disabled:hover:text-forest",
    className,
  );

  if (as === "span") {
    return (
      <span className={classes} aria-hidden="true">
        <Icon name={icon} className="size-4" />
      </span>
    );
  }

  return (
    <button type="button" aria-label={label} className={classes} {...props}>
      <Icon name={icon} className="size-4" />
    </button>
  );
}
