/**
 * Event tracking that rides on whatever analytics the site loads — no
 * platform is bundled here. Events go to a Google Tag Manager dataLayer and
 * gtag when present, and are dropped silently otherwise.
 */
type Params = Record<string, string | number | boolean | undefined>;

type AnalyticsWindow = Window & {
  dataLayer?: Record<string, unknown>[];
  gtag?: (command: "event", event: string, params?: Params) => void;
};

export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  w.dataLayer?.push({ event, ...params });
  w.gtag?.("event", event, params);
}
