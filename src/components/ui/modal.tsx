"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

import { Icon } from "@/components/ui/icon";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";
import { cn } from "@/lib/utils";

const noop = () => () => {};

/** True only on the client, after hydration — portals need `document`. */
function useIsClient() {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
}

/**
 * Full-viewport modal. Three layers of insurance keep it above everything:
 *
 * 1. It is portalled to <body>, so no transformed, clipped or stacking-context
 *    ancestor (GSAP reveals, `isolate` sections) can contain it.
 * 2. showModal() puts it in the browser's top layer — above every z-index,
 *    including the fixed header — and makes the page behind it inert, traps
 *    focus and closes on Escape.
 * 3. The <dialog> itself is the overlay (fixed, inset 0, 100vw × 100dvh,
 *    z-[100]) rather than relying on ::backdrop styling, so the dim and blur
 *    render identically in every browser.
 *
 * Enter animations use @starting-style; exits use allow-discrete transitions.
 * Browsers without them still open and close correctly, just without motion.
 */
export function Modal({
  open,
  onClose,
  labelledBy,
  describedBy,
  closeLabel = "Close",
  className,
  children,
}: {
  open: boolean;
  /** Fires however the dialog closes — button, overlay click or Escape. */
  onClose: () => void;
  labelledBy: string;
  describedBy?: string;
  closeLabel?: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const isClient = useIsClient();
  const { stop, start } = useSmoothScroll();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open, isClient]);

  // Background scroll lock. Lenis drives wheel scrolling on the window, and
  // native overflow covers touch and keyboard; the reserved scrollbar gutter
  // stops the page shifting sideways when the scrollbar disappears.
  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const previous = { overflow: root.style.overflow, gutter: root.style.scrollbarGutter };
    root.style.scrollbarGutter = "stable";
    root.style.overflow = "hidden";
    stop();

    return () => {
      root.style.overflow = previous.overflow;
      root.style.scrollbarGutter = previous.gutter;
      start();
    };
  }, [open, stop, start]);

  if (!isClient) return null;

  return createPortal(
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
      onClose={onClose}
      onClick={(event) => {
        // The dialog is the overlay; the panel stops at its own edges, so a
        // click landing on the dialog element itself is outside the panel.
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      className={cn(
        "group fixed inset-0 z-[100] m-0 h-dvh max-h-none w-screen max-w-none p-4 sm:p-6",
        "bg-forest-deep/60 backdrop-blur-[6px] backdrop:bg-transparent",
        "open:flex open:items-center open:justify-center",
        // Overlay fade.
        "opacity-0 transition-[opacity,display,overlay] transition-discrete duration-300 ease-[var(--ease-out-expo)]",
        "open:opacity-100 starting:open:opacity-0",
      )}
    >
      <div
        className={cn(
          "relative max-h-full w-full max-w-md overflow-y-auto rounded-card bg-white px-6 pt-10 pb-8 text-center text-ink shadow-[var(--shadow-panel)] sm:px-10",
          // Panel scale, riding the dialog's open state.
          "scale-95 transition-[scale] duration-300 ease-[var(--ease-out-expo)]",
          "group-open:scale-100 starting:group-open:scale-95",
          className,
        )}
      >
        <button
          type="button"
          aria-label={closeLabel}
          onClick={() => ref.current?.close()}
          className="absolute top-3.5 right-3.5 flex size-9 items-center justify-center rounded-full text-ink-muted transition-[background-color,color] duration-300 hover:bg-sage-100 hover:text-forest"
        >
          <Icon name="close" className="size-4" />
        </button>
        {children}
      </div>
    </dialog>,
    document.body,
  );
}
