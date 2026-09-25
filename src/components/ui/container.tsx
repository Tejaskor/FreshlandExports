import type { ElementType, ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType> = {
  as?: T;
  /** `wide` removes the reading-width cap used by editorial blocks. */
  width?: "default" | "wide" | "narrow";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "width">;

const widths = {
  narrow: "max-w-3xl",
  default: "max-w-shell",
  wide: "max-w-none",
} as const;

/** Horizontal rhythm for every section. Gutter is a fluid design token. */
export function Container<T extends ElementType = "div">({
  as,
  width = "default",
  className,
  ...props
}: ContainerProps<T>) {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={cn("mx-auto w-full px-gutter", widths[width], className)}
      {...props}
    />
  );
}
