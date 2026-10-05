import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

export type IconName =
  | "arrow-right"
  | "arrow-left"
  | "chevron-down"
  | "play"
  | "search"
  | "menu"
  | "close"
  | "check"
  | "sprout"
  | "shield"
  | "globe"
  | "handshake"
  | "recycle"
  | "seedling"
  | "mail"
  | "phone"
  | "pin"
  | "eye"
  | "target"
  | "award"
  | "users"
  | "layers"
  | "flask"
  | "molecule"
  | "clipboard"
  | "download"
  | "linkedin"
  | "instagram"
  | "youtube";

/** Stroked paths, 24×24 grid. Brand marks are filled and handled separately. */
const strokePaths: Partial<Record<IconName, string>> = {
  "arrow-right": "M4 12h15m0 0-6-6m6 6-6 6",
  "arrow-left": "M20 12H5m0 0 6-6m-6 6 6 6",
  "chevron-down": "m6 9 6 6 6-6",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm6.5-1.5L21 21",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  check: "m5 12.5 4.5 4.5L19 7.5",
  sprout: "M12 21v-8m0 0c0-4-3-7-7-7 0 4 3 7 7 7Zm0 0c0-4 3-7 7-7 0 4-3 7-7 7Z",
  shield: "M12 3l7 3v6c0 4-3 7.5-7 9-4-1.5-7-5-7-9V6l7-3Zm-2.5 9 2 2 4-4",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c2.5-2.4 3.8-5.4 3.8-9S14.5 5.4 12 3M12 21c-2.5-2.4-3.8-5.4-3.8-9S9.5 5.4 12 3M3.4 9h17.2M3.4 15h17.2",
  handshake: "M8 13l3 3 2-2 3 3M3 10l4-4 5 2 5-2 4 4-4 8H7l-4-8Z",
  recycle: "M7 7l2.5-4 2.5 4M17 11l2.5 4-4.5.5M7 19l-2.5-4 4.5-.5M4.5 15h-1m17-4h1M9.5 3h1",
  seedling: "M12 21v-7m0 0C12 9 8 6 3 6c0 5 4 8 9 8Zm0 0c0-3.5 3-6.5 8-6.5 0 3.5-3.5 6.5-8 6.5Z",
  mail: "M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Zm0 .5 9 6 9-6",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1Z",
  pin: "M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  play: "M9 6.5v11l9-5.5-9-5.5Z",
  eye: "M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Zm9.5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  award: "M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm-3.5-1.1L7 21l5-2.5 5 2.5-1.5-7.1",
  users: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-6 10v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1m1-10a3.5 3.5 0 0 0 0-7m2.5 17v-1a4.5 4.5 0 0 0-3-4.2",
  layers: "M12 3 3 8l9 5 9-5-9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5",
  flask: "M9.5 3h5M10 3v6.2L4.8 18.1A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-2.9L14 9.2V3M7.2 14h9.6",
  molecule: "M12 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-6 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm12 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM10.8 9.2l-3.6 5.6m6-5.6 3.6 5.6M8.5 17h7",
  clipboard: "M9 4h6v3H9V4Zm-2 1.5H6a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6.5a1 1 0 0 0-1-1h-1M8.5 12h7m-7 4h4.5",
  download: "M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19h14",
};

const filledPaths: Partial<Record<IconName, string>> = {
  linkedin:
    "M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 22 10.6 22 14v7h-4v-6.2c0-1.5-.03-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V21H9V9Z",
  instagram:
    "M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.4.36 1 .42 2.2.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.4.17-1 .36-2.2.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 3.3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm0 10.72a4.22 4.22 0 1 1 0-8.44 4.22 4.22 0 0 1 0 8.44Zm6.75-10.97a1.52 1.52 0 1 1-3.04 0 1.52 1.52 0 0 1 3.04 0Z",
  youtube:
    "M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z",
};

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

export function Icon({ name, className, ...props }: IconProps) {
  const filled = filledPaths[name];

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={cn("h-4 w-4 shrink-0", className)}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={filled ? undefined : 1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d={filled ?? strokePaths[name]} />
    </svg>
  );
}
