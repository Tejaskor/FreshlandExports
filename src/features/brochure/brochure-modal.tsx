"use client";

import Image from "next/image";
import Link from "next/link";
import { startTransition, useActionState, useEffect, useId, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";

import { Icon } from "@/components/ui/icon";
import { Modal } from "@/components/ui/modal";
import { ListSelect, MultiSelect } from "@/components/forms/select-fields";
import { submitBrochureLead } from "@/features/brochure/brochure-action";
import {
  type BrochureErrors,
  type BrochureField,
  type BrochureSource,
  type BrochureState,
  type Utm,
  brochureLimits,
  buyerTypes,
  hasErrors,
  markets,
  productInterestGroups,
  quantities,
  readBrochure,
  validateBrochure,
} from "@/features/brochure/schema";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

const initialState: BrochureState = { status: "idle" };

/** Matches the contact form's fields, with a visible focus ring. */
const field =
  "h-11 w-full rounded-lg border border-line bg-white px-3.5 text-[0.875rem] text-ink " +
  "placeholder:text-ink-faint transition-colors duration-300 " +
  "hover:border-line-strong focus:border-leaf focus:ring-2 focus:ring-leaf/20 focus:outline-none " +
  "aria-invalid:border-rust-deep/70 aria-invalid:focus:border-rust-deep";

const labelText = "mb-1.5 block text-[0.8125rem] font-medium text-forest";

/** Starts the file download in the same tab. */
function downloadFile({ url, filename }: { url: string; filename: string }) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

/**
 * The one brochure lead-capture popup, opened from the header, homepage and
 * footer. The brochure downloads only after the server confirms the lead was
 * captured; on failure nothing downloads and the entries stay in place.
 */
export function BrochureDownloadModal({
  open,
  source,
  utm,
  onClose,
}: {
  open: boolean;
  source: BrochureSource;
  utm: Utm;
  onClose: () => void;
}) {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(submitBrochureLead, initialState);
  const [clientErrors, setClientErrors] = useState<BrochureErrors | null>(null);
  const trackingSource = source.replace("_brochure", "");

  // Server-side errors show until the visitor submits again.
  const errors: BrochureErrors = clientErrors ?? (state.status === "invalid" ? state.errors : {});

  // Release the download only on confirmed success.
  useEffect(() => {
    if (state.status === "success") {
      track("brochure_lead_success", { source: trackingSource });
      downloadFile(state.download);
      track("brochure_download", { source: trackingSource });
    } else if (state.status === "error") {
      track("brochure_lead_error", { source: trackingSource });
    }
  }, [state, trackingSource]);

  // After a submission with problems, move focus to the first one so keyboard
  // and screen-reader users land on it. Runs per submission, not per keystroke.
  const focusFirstError = () =>
    requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"], [data-invalid="true"]')?.focus());

  useEffect(() => {
    if (state.status === "invalid") focusFirstError();
  }, [state]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const found = validateBrochure(readBrochure(formData));
    if (hasErrors(found)) {
      setClientErrors(found);
      focusFirstError();
      return;
    }
    setClientErrors(null);
    track("brochure_form_submit", { source: trackingSource });
    startTransition(() => formAction(formData));
  };

  const clearError = (name: BrochureField) => {
    if (!errors[name]) return;
    setClientErrors({ ...errors, [name]: undefined });
  };

  // Leaving a typed field checks its format straight away; an empty field
  // is only flagged on submit, so nothing shows before the visitor engages.
  const checkOnBlur = (name: BrochureField, form: HTMLFormElement | null) => {
    if (!form) return;
    const values = readBrochure(new FormData(form));
    if (!values[name] || (Array.isArray(values[name]) && values[name].length === 0)) return;
    const message = validateBrochure(values)[name];
    if (message) setClientErrors({ ...errors, [name]: message });
  };

  const describe = (name: BrochureField) => ({
    id: `${id}-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
    onInput: () => clearError(name),
    onBlur: (event: { currentTarget: { form: HTMLFormElement | null } }) => checkOnBlur(name, event.currentTarget.form),
  });

  const error = (name: BrochureField) =>
    errors[name] ? (
      <span id={`${id}-${name}-error`} className="mt-1 block text-[0.75rem] text-rust-deep">
        {errors[name]}
      </span>
    ) : null;

  const success = state.status === "success";

  return (
    <Modal
      open={open}
      onClose={onClose}
      labelledBy={`${id}-title`}
      describedBy={`${id}-description`}
      closeLabel="Close brochure form"
      panelClassName="max-w-[60rem] text-left"
      className="px-0 pt-0 pb-0 text-left sm:px-0"
    >
      <div className="grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="px-5 pt-6 pb-7 sm:px-8 sm:pt-8 sm:pb-8">
          {/* Mobile: a small brochure preview leads the popup. */}
          <div className="mb-5 flex items-center gap-4 md:hidden">
            <BrochureCover className="w-16" sizes="64px" />
            <p className="text-[0.8125rem] leading-snug text-ink-muted">
              <span className="block font-display text-heading text-forest">Brochure</span>
              PDF · 10 pages
            </p>
          </div>

          {success ? (
            <SuccessState
              titleId={`${id}-title`}
              descriptionId={`${id}-description`}
              onDownloadAgain={() => {
                downloadFile(state.download);
                track("brochure_download", { source: trackingSource, repeat: true });
              }}
              onQuote={() => {
                track("brochure_quote_click", { source: trackingSource });
                onClose();
              }}
            />
          ) : (
            <>
              <p className="type-label text-leaf">Freshland Exports</p>
              <h2 id={`${id}-title`} className="mt-2.5 font-display text-title leading-[1.1] text-forest">
                Get the Freshland Exports Brochure
              </h2>
              <p id={`${id}-description`} className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
                Explore our products, sourcing approach and bulk export capabilities.
              </p>

              <form ref={formRef} noValidate onSubmit={onSubmit} aria-busy={pending} className="mt-6">
                <input type="hidden" name="source" value={source} />
                {Object.entries(utm).map(([key, value]) => (
                  <input key={key} type="hidden" name={key} value={value} />
                ))}
                {/* Honeypot — hidden from people and assistive tech, tempting to bots. */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                  <label>
                    Website
                    <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div className="grid gap-x-4 gap-y-3.5 sm:grid-cols-2">
                  <Field label="Full Name" htmlFor={`${id}-name`} error={error("name")}>
                    <input
                      {...describe("name")}
                      name="name"
                      type="text"
                      autoComplete="name"
                      maxLength={brochureLimits.name}
                      placeholder="Enter your full name"
                      className={field}
                    />
                  </Field>
                  <Field label="Company Name" htmlFor={`${id}-companyName`} error={error("companyName")}>
                    <input
                      {...describe("companyName")}
                      name="companyName"
                      type="text"
                      autoComplete="organization"
                      maxLength={brochureLimits.companyName}
                      placeholder="Enter company name"
                      className={field}
                    />
                  </Field>
                  <Field label="Business Email" required htmlFor={`${id}-email`} error={error("email")}>
                    <input
                      {...describe("email")}
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      maxLength={brochureLimits.email}
                      placeholder="Enter your business email"
                      className={field}
                    />
                  </Field>
                  <Field label="WhatsApp / Phone" required htmlFor={`${id}-phone`} error={error("phone")}>
                    <input
                      {...describe("phone")}
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={brochureLimits.phone}
                      placeholder="Phone Number"
                      className={field}
                    />
                  </Field>
                  <Field label="Country / Market" required htmlFor={`${id}-country`} error={error("country")}>
                    <ListSelect
                      fieldClassName={field}
                      id={`${id}-country`}
                      name="country"
                      options={markets}
                      placeholder="Select country"
                      invalid={Boolean(errors.country)}
                      describedBy={errors.country ? `${id}-country-error` : undefined}
                      onChange={() => clearError("country")}
                    />
                  </Field>
                  <Field label="Buyer Type" required htmlFor={`${id}-buyerType`} error={error("buyerType")}>
                    <ListSelect
                      fieldClassName={field}
                      id={`${id}-buyerType`}
                      name="buyerType"
                      options={buyerTypes}
                      placeholder="Select buyer type"
                      invalid={Boolean(errors.buyerType)}
                      describedBy={errors.buyerType ? `${id}-buyerType-error` : undefined}
                      onChange={() => clearError("buyerType")}
                    />
                  </Field>
                </div>

                {/* Products beside quantity whenever the row itself is wide
                    enough (31rem) for both at full size; stacked otherwise.
                    The minimums fit each field's placeholder in Inter (products
                    ~251px, quantity ~214px with its label on one line). */}
                <div className="@container mt-4">
                  <div className="grid gap-x-4 gap-y-3.5 @min-[31rem]:grid-cols-[minmax(15.75rem,1.6fr)_minmax(14rem,1fr)] @min-[31rem]:items-start">
                    <Field label="Products of Interest" required htmlFor={`${id}-products`} error={error("products")}>
                      <MultiSelect
                        id={`${id}-products`}
                        name="products"
                        label="Products of Interest"
                        groups={productInterestGroups}
                        placeholder="Select products or categories"
                        fieldClassName={field}
                        invalid={Boolean(errors.products)}
                        describedBy={errors.products ? `${id}-products-error` : undefined}
                        onChange={() => clearError("products")}
                      />
                    </Field>
                    <Field label="Expected Purchase Quantity" nowrap htmlFor={`${id}-quantity`} error={error("quantity")}>
                      <ListSelect
                        fieldClassName={field}
                        id={`${id}-quantity`}
                        name="quantity"
                        options={quantities}
                        placeholder="Select quantity (optional)"
                        invalid={Boolean(errors.quantity)}
                        describedBy={errors.quantity ? `${id}-quantity-error` : undefined}
                        onChange={() => clearError("quantity")}
                      />
                    </Field>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={pending}
                  className="mx-auto mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-forest px-6 text-[0.875rem] font-semibold tracking-[0.08em] text-white uppercase transition-colors duration-300 hover:bg-leaf focus-visible:ring-2 focus-visible:ring-leaf/50 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-wait disabled:opacity-80 sm:w-fit"
                >
                  <Icon name="download" className="size-4" strokeWidth={2} />
                  {pending ? "Preparing…" : "Download Brochure"}
                </button>

                <p role="alert" className="mt-3 text-center text-[0.8125rem] text-rust-deep empty:hidden">
                  {state.status === "error" ? state.message : null}
                </p>
                <p className="mt-3 text-center text-[0.75rem] text-ink-muted">
                  Your information is used only to respond to your enquiry.
                </p>
              </form>
            </>
          )}
        </div>

        {/* Desktop/tablet: the brochure cover beside the form. */}
        <aside aria-hidden="true" className="hidden flex-col items-center justify-center gap-5 bg-sage-100 px-8 py-10 md:flex">
          <BrochureCover className="w-full max-w-[15rem] -rotate-2" sizes="240px" />
          <p className="text-center text-[0.8125rem] leading-relaxed text-ink-muted">
            <span className="block font-display text-heading text-forest">Brochure</span>
            Powder products, agricultural produce, fruits and spices · PDF
          </p>
        </aside>
      </div>
    </Modal>
  );
}

function Field({
  label,
  required = false,
  nowrap = false,
  htmlFor,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  /** Keeps the label on one line. */
  nowrap?: boolean;
  htmlFor: string;
  error: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      <label id={`${htmlFor}-label`} htmlFor={htmlFor} className={cn(labelText, nowrap && "whitespace-nowrap")}>
        {label}
        {required && (
          <>
            {" "}
            <span aria-hidden="true" className="text-rust">
              *
            </span>
            <span className="sr-only">(required)</span>
          </>
        )}
      </label>
      {children}
      {error}
    </div>
  );
}

/** The brochure's own cover, rendered from page 1 of the PDF. */
function BrochureCover({ className, sizes }: { className?: string; sizes: string }) {
  return (
    <span
      className={cn(
        "relative block aspect-[595/842] shrink-0 overflow-hidden rounded-md bg-white shadow-[var(--shadow-lift)] ring-1 ring-forest/10",
        className,
      )}
    >
      <Image
        src="/images/shared/brochure-cover.webp"
        alt="Cover of the Freshland Exports company brochure"
        fill
        sizes={sizes}
        className="object-cover"
      />
    </span>
  );
}

function SuccessState({
  titleId,
  descriptionId,
  onDownloadAgain,
  onQuote,
}: {
  titleId: string;
  descriptionId: string;
  onDownloadAgain: () => void;
  onQuote: () => void;
}) {
  return (
    <div role="status">
      <span className="flex size-12 items-center justify-center rounded-full bg-sage-100 text-leaf">
        <Icon name="check" className="size-6" strokeWidth={2.4} />
      </span>
      <h2 id={titleId} className="mt-5 font-display text-title leading-[1.1] text-forest">
        Your brochure is ready.
      </h2>
      <p id={descriptionId} className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-muted">
        Thank you for your interest in Freshland Exports. Your brochure download has started.
      </p>
      <button
        type="button"
        onClick={onDownloadAgain}
        className="mt-5 inline-flex h-11 items-center gap-2 rounded-full border border-forest px-5 text-[0.875rem] font-semibold text-forest transition-colors duration-300 hover:bg-forest hover:text-white focus-visible:ring-2 focus-visible:ring-leaf/50 focus-visible:outline-none"
      >
        <Icon name="download" className="size-4" strokeWidth={2} />
        Download Brochure Again
      </button>

      <div className="mt-7 rounded-2xl bg-cream-warm p-5 ring-1 ring-line">
        <p className="font-display text-heading text-forest">Looking for bulk supply?</p>
        <p className="mt-1.5 text-[0.875rem] leading-relaxed text-ink-muted">
          Tell us what you&apos;re looking for and our team can help with availability, specifications and
          quotation details.
        </p>
        <Link
          href="/contact"
          onClick={onQuote}
          className="mt-4 inline-flex items-center gap-2 text-[0.875rem] font-semibold text-rust-deep transition-colors duration-300 hover:text-rust"
        >
          Request a Quote
          <Icon name="arrow-right" className="size-3.5" />
        </Link>
      </div>
    </div>
  );
}
