"use client";

import { useActionState, useEffect, useId, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Modal } from "@/components/ui/modal";
import { submitContact } from "@/components/forms/contact-action";
import {
  type ContactField,
  type ContactState,
  countries,
  hasErrors,
  isDetailed,
  limits,
  markets,
  productInterestGroups,
  productSeparator,
  quantities,
  readContact,
  validateContact,
} from "@/components/forms/contact-schema";
import { ListSelect, MultiSelect } from "@/components/forms/select-fields";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const field =
  "h-10 w-full rounded-lg border border-line bg-white px-3.5 text-[0.8125rem] text-ink " +
  "placeholder:text-ink-faint transition-colors duration-300 " +
  "hover:border-line-strong focus:border-leaf focus:outline-none " +
  "aria-invalid:border-rust-deep/70 aria-invalid:focus:border-rust-deep";

const initialState: ContactState = { status: "idle" };
const noFields: ReadonlySet<string> = new Set();

/**
 * Checks the enquiry in the browser first — instant feedback, no round trip —
 * then hands it to the server action, which validates again and delivers it.
 * A thrown action (offline, server down) becomes an inline error rather than
 * an error boundary.
 */
async function submit(previous: ContactState, formData: FormData): Promise<ContactState> {
  const values = readContact(formData);
  const errors = validateContact(values, isDetailed(formData));
  if (hasErrors(errors)) return { status: "invalid", errors, values };

  try {
    return await submitContact(previous, formData);
  } catch {
    return {
      status: "error",
      message: "We couldn't reach our server. Please check your connection and try again.",
      values,
    };
  }
}

export function ContactForm({
  title,
  defaultMessage,
  variant = "compact",
  submitLabel = "Send Message",
}: {
  title: string;
  /** Pre-fills the message, e.g. a quote request naming the product. */
  defaultMessage?: string;
  /**
   * "compact" (product pages, homepage): name, email, country, phone, message.
   * "detailed" (/contact): name, company, email, country / market,
   * product / category, expected quantity and message.
   */
  variant?: "compact" | "detailed";
  submitLabel?: string;
}) {
  const detailed = variant === "detailed";
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(submit, initialState);

  // Each submission returns a fresh state object, so identity tells us which
  // result the visitor has already dismissed or started correcting.
  const [dismissed, setDismissed] = useState<ContactState | null>(null);
  const [edited, setEdited] = useState({ state, fields: noFields });

  const values = state.status === "invalid" || state.status === "error" ? state.values : undefined;
  const errors = state.status === "invalid" ? state.errors : {};
  const editedFields = edited.state === state ? edited.fields : noFields;
  const errorFor = (name: ContactField) => (editedFields.has(name) ? undefined : errors[name]);

  // A field the visitor changes stops showing its error until the next submit.
  const markEdited = (name: ContactField) => {
    if (!errors[name]) return;
    setEdited((current) => ({
      state,
      fields: new Set([...(current.state === state ? current.fields : []), name]),
    }));
  };

  // The custom dropdowns keep their own selection; remount them after a
  // successful send, when React resets the rest of the form.
  const [previous, setPrevious] = useState(state);
  const [round, setRound] = useState(0);
  if (state !== previous) {
    setPrevious(state);
    if (state.status === "success") setRound(round + 1);
  }

  // Move focus to the first problem so keyboard and screen-reader users land
  // on it; the error text is linked through aria-describedby.
  useEffect(() => {
    if (state.status !== "invalid") return;
    formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"], [data-invalid="true"]')?.focus();
  }, [state]);

  const describe = (name: ContactField) => ({
    id: `${id}-${name}`,
    "aria-invalid": errorFor(name) ? true : undefined,
    "aria-describedby": errorFor(name) ? `${id}-${name}-error` : undefined,
  });

  const error = (name: ContactField) =>
    errorFor(name) ? (
      <span id={`${id}-${name}-error`} className="mt-1 block text-left text-[0.75rem] text-rust-deep">
        {errorFor(name)}
      </span>
    ) : null;

  return (
    <>
      <form
        ref={formRef}
        action={formAction}
        // Validation is ours: consistent messages and styling instead of the
        // browser's tooltips, and the same rules the server applies.
        noValidate
        aria-busy={pending}
        onInput={(event) => markEdited((event.target as HTMLInputElement).name as ContactField)}
        className={cn(
          "rounded-card border border-line bg-white p-5 shadow-[var(--shadow-lift)] sm:p-6",
          // The /contact card ends closer under its button.
          detailed && "pb-4 sm:pb-5",
        )}
      >
        <h3 className="text-heading">{title}</h3>

        {/* Honeypot — hidden from people and assistive tech, tempting to bots. */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label>
            Website
            <input name="website" type="text" tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        {detailed && <input type="hidden" name="variant" value="detailed" />}

        {detailed ? (
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            <label className="block">
              <span className="sr-only">Full Name (required)</span>
              <input
                {...describe("name")}
                name="name"
                type="text"
                autoComplete="name"
                maxLength={limits.name}
                placeholder="Full Name*"
                defaultValue={values?.name}
                className={field}
              />
              {error("name")}
            </label>

            <label className="block">
              <span className="sr-only">Company Name (required)</span>
              <input
                {...describe("company")}
                name="company"
                type="text"
                autoComplete="organization"
                maxLength={limits.company}
                placeholder="Company Name*"
                defaultValue={values?.company}
                className={field}
              />
              {error("company")}
            </label>

            <label className="block">
              <span className="sr-only">Business Email (required)</span>
              <input
                {...describe("email")}
                name="email"
                type="email"
                autoComplete="email"
                maxLength={limits.email}
                placeholder="Business Email*"
                defaultValue={values?.email}
                className={field}
              />
              {error("email")}
            </label>

            <div>
              <label id={`${id}-country-label`} htmlFor={`${id}-country`} className="sr-only">
                Country / Market (required)
              </label>
              <ListSelect
                key={`country-${round}`}
                id={`${id}-country`}
                name="country"
                options={markets}
                placeholder="Country / Market*"
                fieldClassName={field}
                defaultValue={values?.country}
                invalid={Boolean(errorFor("country"))}
                describedBy={errorFor("country") ? `${id}-country-error` : undefined}
                onChange={() => markEdited("country")}
              />
              {error("country")}
            </div>

            <div>
              <label id={`${id}-product-label`} htmlFor={`${id}-product`} className="sr-only">
                Product / Category (required)
              </label>
              <MultiSelect
                key={`product-${round}`}
                id={`${id}-product`}
                name="product"
                label="Product / Category"
                groups={productInterestGroups}
                placeholder="Product / Category*"
                fieldClassName={field}
                defaultValue={values?.product ? values.product.split(productSeparator) : []}
                invalid={Boolean(errorFor("product"))}
                describedBy={errorFor("product") ? `${id}-product-error` : undefined}
                onChange={() => markEdited("product")}
              />
              {error("product")}
            </div>

            <div>
              <label id={`${id}-quantity-label`} htmlFor={`${id}-quantity`} className="sr-only">
                Expected Quantity (optional)
              </label>
              <ListSelect
                key={`quantity-${round}`}
                id={`${id}-quantity`}
                name="quantity"
                options={quantities}
                placeholder="Expected Quantity"
                fieldClassName={field}
                defaultValue={values?.quantity}
                invalid={Boolean(errorFor("quantity"))}
                describedBy={errorFor("quantity") ? `${id}-quantity-error` : undefined}
                onChange={() => markEdited("quantity")}
              />
              {error("quantity")}
            </div>

            <label className="block sm:col-span-2">
              <span className="sr-only">Message (required)</span>
              <textarea
                {...describe("message")}
                name="message"
                rows={3}
                maxLength={limits.message}
                placeholder="Message*"
                defaultValue={values?.message ?? defaultMessage}
                className={cn(field, "h-auto resize-none py-2.5 leading-relaxed")}
              />
              {error("message")}
            </label>
          </div>
        ) : (
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            <label className="block">
              <span className="sr-only">Name (required)</span>
              <input
                {...describe("name")}
                name="name"
                type="text"
                autoComplete="name"
                maxLength={limits.name}
                placeholder="Name*"
                defaultValue={values?.name}
                className={field}
              />
              {error("name")}
            </label>

            <label className="block">
              <span className="sr-only">Email (required)</span>
              <input
                {...describe("email")}
                name="email"
                type="email"
                autoComplete="email"
                maxLength={limits.email}
                placeholder="Email*"
                defaultValue={values?.email}
                className={field}
              />
              {error("email")}
            </label>

            <label className="block">
              <span className="sr-only">Country</span>
              <select
                // Keyed so a restored value is applied after React resets the form.
                // The key must precede the spread, or React reads the options as a
                // keyless list.
                key={values?.country ?? ""}
                {...describe("country")}
                name="country"
                autoComplete="country-name"
                defaultValue={values?.country ?? ""}
                className={cn(field, "has-[option[value='']:checked]:text-ink-faint")}
              >
                <option value="" disabled>
                  Country
                </option>
                {countries.map((country) => (
                  <option key={country} value={country} className="text-ink">
                    {country}
                  </option>
                ))}
              </select>
              {error("country")}
            </label>

            <label className="block">
              <span className="sr-only">Phone number</span>
              <input
                {...describe("phone")}
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={limits.phone}
                placeholder="Phone number"
                defaultValue={values?.phone}
                className={field}
              />
              {error("phone")}
            </label>

            <label className="block sm:col-span-2">
              <span className="sr-only">Message (required)</span>
              <textarea
                {...describe("message")}
                name="message"
                rows={3}
                maxLength={limits.message}
                placeholder="Message*"
                defaultValue={values?.message ?? defaultMessage}
                className={cn(field, "h-auto resize-none py-3.5 leading-relaxed")}
              />
              {error("message")}
            </label>
          </div>

        )}

        <Button type="submit" disabled={pending} className="mt-4">
          {pending ? "Sending…" : submitLabel}
        </Button>

        <p role="alert" className="mt-3 text-[0.75rem] text-rust-deep empty:hidden">
          {state.status === "error" && (
            <>
              {state.message} You can also email us at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="underline underline-offset-2">
                {siteConfig.contact.email}
              </a>
              .
            </>
          )}
        </p>
      </form>

      <Modal
        open={state.status === "success" && dismissed !== state}
        onClose={() => setDismissed(state)}
        labelledBy={`${id}-thanks-title`}
        describedBy={`${id}-thanks-body`}
      >
        <span className="mx-auto flex size-16 scale-100 items-center justify-center rounded-full bg-sage-100 ring-8 ring-sage-50 transition-[scale] delay-150 duration-500 ease-[var(--ease-out-expo)] starting:scale-50">
          <span className="flex size-11 items-center justify-center rounded-full bg-leaf text-white">
            <Icon name="check" className="size-6" strokeWidth={2.4} />
          </span>
        </span>

        <h2 id={`${id}-thanks-title`} className="mt-6 text-title">
          Thank You!
        </h2>
        <p id={`${id}-thanks-body`} className="mx-auto mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-ink-muted">
          Thank you for contacting us. Your message has been successfully submitted. Our team will
          get back to you as soon as possible.
        </p>

        <Button
          variant="forest"
          withArrow={false}
          className="mt-7"
          onClick={(event) => event.currentTarget.closest("dialog")?.close()}
        >
          Close
        </Button>
      </Modal>
    </>
  );
}
