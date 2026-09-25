"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const field =
  "h-10 w-full rounded-lg border border-line bg-white px-3.5 text-[0.8125rem] text-ink " +
  "placeholder:text-ink-faint transition-colors duration-300 " +
  "hover:border-line-strong focus:border-leaf focus:outline-none";

const countries = ["India", "United States", "United Kingdom", "Germany", "Japan", "Other"];

/**
 * Client component only because of the submit state. No backend is wired yet —
 * `onSubmit` is where a server action or API route will land.
 */
export function ContactForm({ title }: { title: string }) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [country, setCountry] = useState("");

  return (
    <form
      className="rounded-card border border-line bg-white p-5 shadow-[var(--shadow-lift)] sm:p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus("sent");
      }}
    >
      <h3 className="text-heading">{title}</h3>

      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
        <label className="block">
          <span className="sr-only">Name</span>
          <input name="name" type="text" required placeholder="Name*" className={field} />
        </label>

        <label className="block">
          <span className="sr-only">Email</span>
          <input name="email" type="email" required placeholder="Email*" className={field} />
        </label>

        <label className="block">
          <span className="sr-only">Country</span>
          <select
            name="country"
            value={country}
            onChange={(event) => setCountry(event.target.value)}
            className={cn(field, country === "" && "text-ink-faint")}
          >
            <option value="" disabled>
              Country
            </option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="sr-only">Phone number</span>
          <input name="phone" type="tel" placeholder="Phone number" className={field} />
        </label>

        <label className="block sm:col-span-2">
          <span className="sr-only">Message</span>
          <textarea
            name="message"
            required
            rows={3}
            placeholder="Message*"
            className={cn(field, "h-auto resize-none py-3.5 leading-relaxed")}
          />
        </label>
      </div>

      <Button type="submit" className="mt-4">
        Send Message
      </Button>

      <p role="status" aria-live="polite" className="mt-3 text-[0.75rem] text-leaf">
        {status === "sent" ? "Thanks — we'll be in touch shortly." : ""}
      </p>
    </form>
  );
}
