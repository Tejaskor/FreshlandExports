"use client";

import Link from "next/link";
import { useActionState, useEffect, useId, useRef } from "react";

import { Button } from "@/components/ui/button";
import { submitComment } from "@/features/blog/comment-action";
import {
  type CommentField,
  type CommentState,
  commentLimits,
  hasCommentErrors,
  readComment,
  shownAtField,
  validateComment,
} from "@/features/blog/comment-schema";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-lg border border-line bg-white text-ink h-11 px-3.5 text-[0.875rem] " +
  "placeholder:text-ink-faint transition-colors duration-300 " +
  "hover:border-line-strong focus:border-leaf focus:ring-2 focus:ring-leaf/20 focus:outline-none " +
  "aria-invalid:border-rust-deep/70 aria-invalid:focus:border-rust-deep";

const initialState: CommentState = { status: "idle" };

/**
 * Checks the comment in the browser first, then hands it to the server
 * action bound to this article, which validates again and delivers it. A
 * thrown action (offline, server down) becomes an inline error.
 */
async function submit(slug: string, previous: CommentState, formData: FormData): Promise<CommentState> {
  const values = readComment(formData);
  const errors = validateComment(values);
  if (hasCommentErrors(errors)) return { status: "invalid", errors, values };

  try {
    return await submitComment(slug, previous, formData);
  } catch {
    return {
      status: "error",
      message: "We couldn't reach our server. Please check your connection and try again.",
      values,
    };
  }
}

/**
 * "Leave a Comment" under a Blog article: name, email and comment. The
 * article is identified on the server from `slug`; readers never type it.
 * Comments are held for review and never published automatically.
 */
export function CommentForm({ slug, className }: { slug: string; className?: string }) {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const shownAtRef = useRef<HTMLInputElement>(null);
  const [state, formAction, pending] = useActionState(submit.bind(null, slug), initialState);

  const values = state.status === "invalid" || state.status === "error" ? state.values : undefined;
  const errors = state.status === "invalid" ? state.errors : {};

  // When the form became usable, for the server's minimum-time check.
  useEffect(() => {
    if (shownAtRef.current) shownAtRef.current.value = String(Date.now());
  }, []);

  // Move focus to the first problem; the error text is linked to its field.
  useEffect(() => {
    if (state.status !== "invalid") return;
    formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
  }, [state]);

  const describe = (name: CommentField) => ({
    id: `${id}-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
  });

  const error = (name: CommentField) =>
    errors[name] ? (
      <span id={`${id}-${name}-error`} className="mt-1 block text-[0.75rem] text-rust-deep">
        {errors[name]}
      </span>
    ) : null;

  return (
    <section aria-labelledby={`${id}-title`} className={cn("rounded-xl border border-line bg-cream-warm p-5 sm:p-6", className)}>
      <h2 id={`${id}-title`} className="font-display text-[1.375rem] font-semibold text-forest">
        Leave a Comment
      </h2>

      {state.status === "success" ? (
        <p role="status" className="mt-3 text-[0.9375rem] leading-relaxed text-ink-muted">
          Thank you. Your comment has been sent to our team for review; comments are not published automatically.
        </p>
      ) : (
        <form ref={formRef} action={formAction} noValidate aria-busy={pending} className="mt-4">
          {/* Honeypot — hidden from people and assistive tech, tempting to bots. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label>
              Website
              <input name="website" type="text" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <input ref={shownAtRef} type="hidden" name={shownAtField} defaultValue="" />

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-[0.8125rem] font-semibold text-forest">Name</span>
              <input
                {...describe("name")}
                name="name"
                type="text"
                autoComplete="name"
                maxLength={commentLimits.name}
                defaultValue={values?.name}
                className={field}
              />
              {error("name")}
            </label>
            <label className="block">
              <span className="mb-1 block text-[0.8125rem] font-semibold text-forest">Email</span>
              <input
                {...describe("email")}
                name="email"
                type="email"
                autoComplete="email"
                maxLength={commentLimits.email}
                defaultValue={values?.email}
                className={field}
              />
              {error("email")}
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1 block text-[0.8125rem] font-semibold text-forest">Comment</span>
              <textarea
                {...describe("comment")}
                name="comment"
                rows={4}
                maxLength={commentLimits.comment}
                defaultValue={values?.comment}
                className={cn(field, "h-auto resize-y py-3 leading-relaxed")}
              />
              {error("comment")}
            </label>
          </div>

          <p className="mt-3 text-[0.8125rem] leading-relaxed text-ink-muted">
            Your email address is never published. We use it only to contact you about your comment if needed.
            Comments are reviewed by our team and are not published automatically. See our{" "}
            <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-leaf">
              Privacy Policy
            </Link>
            .
          </p>

          <Button type="submit" disabled={pending} className="mt-4">
            {pending ? "Sending…" : "Submit Comment"}
          </Button>

          <p role="alert" className="mt-3 text-[0.75rem] text-rust-deep empty:hidden">
            {state.status === "error" && state.message}
          </p>
        </form>
      )}
    </section>
  );
}
