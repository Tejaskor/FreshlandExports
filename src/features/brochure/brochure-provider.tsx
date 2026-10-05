"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

import { BrochureDownloadModal } from "@/features/brochure/brochure-modal";
import { type BrochureSource, type Utm, utmKeys } from "@/features/brochure/schema";
import { track } from "@/lib/analytics";

const STORAGE_KEY = "freshland:utm";

type BrochureContextValue = { openBrochure: (source: BrochureSource) => void };

const BrochureContext = createContext<BrochureContextValue | null>(null);

/** Opens the shared brochure popup from any button on the site. */
export function useBrochure() {
  const context = useContext(BrochureContext);
  if (!context) throw new Error("useBrochure must be used inside <BrochureProvider>");
  return context;
}

/**
 * Campaign parameters from the landing URL, kept for the session so a
 * visitor who arrives from an ad and browses before opening the popup is
 * still attributed. Storage failures (private mode) fall back to the URL.
 */
function readUtm(): Utm {
  const params = new URLSearchParams(window.location.search);
  const fromUrl: Utm = {};
  for (const key of utmKeys) {
    const value = params.get(key);
    if (value) fromUrl[key] = value;
  }
  try {
    if (Object.keys(fromUrl).length > 0) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
      return fromUrl;
    }
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Utm) : {};
  } catch {
    return fromUrl;
  }
}

/**
 * Holds the single brochure popup for the whole site. Header, homepage and
 * footer buttons call openBrochure(source); the popup remounts on each
 * opening so every visit starts with a fresh form.
 */
export function BrochureProvider({ children }: { children: ReactNode }) {
  const [source, setSource] = useState<BrochureSource>("header_brochure");
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(0);
  const [utm, setUtm] = useState<Utm>({});

  // Capture campaign parameters on first load, before any navigation drops them.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reads the URL once, client-only.
    setUtm(readUtm());
  }, []);

  const openBrochure = useCallback((next: BrochureSource) => {
    setSource(next);
    setSession((value) => value + 1);
    setOpen(true);
    track("brochure_form_open", { source: next.replace("_brochure", "") });
  }, []);

  const value = useMemo(() => ({ openBrochure }), [openBrochure]);

  return (
    <BrochureContext.Provider value={value}>
      {children}
      {session > 0 && (
        <BrochureDownloadModal
          key={session}
          open={open}
          source={source}
          utm={utm}
          onClose={() => setOpen(false)}
        />
      )}
    </BrochureContext.Provider>
  );
}
