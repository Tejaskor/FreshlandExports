"use client";

import { useState } from "react";

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
];

const button =
  "flex size-10 items-center justify-center rounded-full border border-line-strong bg-white text-forest transition-colors duration-300 hover:border-leaf hover:bg-leaf hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf";

/**
 * "Share This Content": copy the link, or share it to Facebook, LinkedIn or
 * X. The address is read from the browser when clicked, so it is always the
 * page's real URL on whatever domain serves it.
 */
export function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (insecure context or denied): nothing to copy.
    }
  };

  const share = (url: (page: string, title: string) => string) => {
    window.open(url(window.location.href, title), "_blank", "noopener,noreferrer,width=640,height=560");
  };

  return (
    <div className="text-center">
      <p className="font-display text-[1.125rem] text-forest">Share This Content</p>
      <ul className="mt-3 flex justify-center gap-2.5">
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
              className={cn(button)}
            >
              <Icon name={network.icon} className="size-4" />
            </button>
          </li>
        ))}
      </ul>
      <p aria-live="polite" className="mt-2 h-5 text-[0.8125rem] text-leaf">
        {copied ? "Link copied" : ""}
      </p>
    </div>
  );
}
