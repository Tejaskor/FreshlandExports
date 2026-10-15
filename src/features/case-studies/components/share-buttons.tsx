"use client";

import { useState, useSyncExternalStore } from "react";

import { Icon, type IconName } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const networks: readonly { icon: IconName; label: string; url: (page: string, title: string) => string }[] = [
  {
    icon: "facebook",
    label: "Share on Facebook",
    url: (page) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(page)}`,
  },
  {
    icon: "linkedin",
    label: "Share on LinkedIn",
    url: (page) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(page)}`,
  },
  {
    icon: "x",
    label: "Share on X",
    url: (page, title) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(page)}&text=${encodeURIComponent(title)}`,
  },
  {
    icon: "whatsapp",
    label: "Share on WhatsApp",
    url: (page, title) => `https://wa.me/?text=${encodeURIComponent(`${title} ${page}`)}`,
  },
];

const button =
  "flex size-10 items-center justify-center rounded-full border border-line-strong bg-white text-forest transition-colors duration-300 hover:border-leaf hover:bg-leaf hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf";

/** Whether the browser offers its own share sheet; false while rendering on the server. */
const subscribe = () => () => {};
const canShareNatively = () => typeof navigator !== "undefined" && typeof navigator.share === "function";

/**
 * "Share This Content": copy the link, share it to Facebook, LinkedIn, X or
 * WhatsApp, or open the device's own share sheet where there is one. `url`
 * is the page's canonical address when the server knows it; otherwise the
 * address is read from the browser when clicked. Either way it is the plain
 * page address, without query string or fragment, so campaign tags and
 * other parameters are never passed on.
 */
export function ShareButtons({
  title,
  url,
  heading = "Share This Content",
  className,
}: {
  title: string;
  url?: string;
  heading?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const nativeShare = useSyncExternalStore(subscribe, canShareNatively, () => false);

  const pageUrl = () => url ?? `${window.location.origin}${window.location.pathname}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (insecure context or denied): nothing to copy.
    }
  };

  const share = (network: (page: string, title: string) => string) => {
    window.open(network(pageUrl(), title), "_blank", "noopener,noreferrer,width=640,height=560");
  };

  const shareNatively = async () => {
    try {
      await navigator.share({ title, url: pageUrl() });
    } catch {
      // Dismissed by the reader, or refused by the browser: nothing to do.
    }
  };

  return (
    <div className={cn("text-center", className)}>
      <p className="font-display text-[1.125rem] text-forest">{heading}</p>
      <ul className="mt-3 flex flex-wrap justify-center gap-2.5">
        <li>
          <button type="button" onClick={copy} aria-label="Copy link" className={button}>
            <Icon name={copied ? "check" : "link"} className="size-4" />
          </button>
        </li>
        {networks.map((network) => (
          <li key={network.icon}>
            <button
              type="button"
              onClick={() => share(network.url)}
              aria-label={network.label}
              className={button}
            >
              <Icon name={network.icon} className="size-4" />
            </button>
          </li>
        ))}
        {nativeShare && (
          <li>
            <button type="button" onClick={shareNatively} aria-label="More sharing options" className={button}>
              <Icon name="share" className="size-4" />
            </button>
          </li>
        )}
      </ul>
      <p aria-live="polite" className="mt-2 h-5 text-[0.8125rem] text-leaf">
        {copied ? "Link copied" : ""}
      </p>
    </div>
  );
}
