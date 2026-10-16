import { Icon } from "@/components/ui/icon";
import { siteConfig } from "@/config/site";

const { number, message } = siteConfig.contact.whatsapp;

/** WhatsApp Click-to-Chat link with the pre-filled greeting. */
export const whatsappHref = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

/**
 * Small floating WhatsApp link, bottom-right on every page. Sits below the
 * header (z-50) so the open mobile menu covers it; modals use the top layer.
 * Clears the home indicator and side insets on notched phones.
 */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Freshland Exports on WhatsApp"
      className={
        "fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,calc(env(safe-area-inset-bottom)+0.5rem))] z-40 flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white " +
        // Soft green outer glow over the existing drop shadow; hover deepens both.
        "shadow-[0_4px_14px_rgb(22_36_28/0.18),0_0_12px_rgb(37_211_102/0.34)] hover:shadow-[0_8px_22px_rgb(22_36_28/0.22),0_0_20px_3px_rgb(37_211_102/0.45)] " +
        "transition-[transform,box-shadow] duration-300 ease-[var(--ease-out-expo)] hover:-translate-y-0.5 " +
        // Pulsing halo: a ring that carries only a green shadow; still when motion is reduced.
        "before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:opacity-60 before:shadow-[0_0_14px_4px_rgb(37_211_102/0.4)] before:content-[''] before:animate-whatsapp-glow " +
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:before:animate-none sm:right-6 sm:bottom-6"
      }
    >
      <Icon name="whatsapp" className="size-6" />
    </a>
  );
}
