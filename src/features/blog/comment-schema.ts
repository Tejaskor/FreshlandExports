/**
 * The Blog comment form's fields and rules, shared by the browser (instant
 * feedback) and the Server Action (which checks everything again). The
 * article a comment belongs to is not a field: the action takes it from the
 * server's own article index.
 */

export const commentFields = ["name", "email", "comment"] as const;
export type CommentField = (typeof commentFields)[number];

export type CommentValues = Record<CommentField, string>;
export type CommentErrors = Partial<Record<CommentField, string>>;

export type CommentState =
  | { status: "idle" }
  | { status: "success" }
  /** `values` repopulates the form, which React resets after every action. */
  | { status: "invalid"; errors: CommentErrors; values: CommentValues }
  | { status: "error"; message: string; values: CommentValues };

export const commentLimits = { name: 80, email: 254, comment: 2000 } as const;

/** More links than this reads as spam. */
const maxLinks = 2;

/** Hidden field holding when the form was shown, for the minimum-time check. */
export const shownAtField = "shown_at";

/** Faster than this, a person cannot have written a comment. */
export const minimumFillMs = 3000;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function readComment(formData: FormData): CommentValues {
  const read = (name: CommentField) => {
    const value = formData.get(name);
    return typeof value === "string" ? value.trim() : "";
  };
  return { name: read("name"), email: read("email"), comment: read("comment") };
}

export function validateComment(values: CommentValues): CommentErrors {
  const errors: CommentErrors = {};

  if (values.name.length < 2) errors.name = "Please enter your name.";
  else if (values.name.length > commentLimits.name) errors.name = "Please shorten your name.";

  if (!values.email) errors.email = "Please enter your email address.";
  else if (values.email.length > commentLimits.email || !EMAIL.test(values.email))
    errors.email = "Please enter a valid email address.";

  const links = values.comment.match(/https?:\/\/|www\./gi)?.length ?? 0;
  if (values.comment.length < 10) errors.comment = "Please write a comment of at least 10 characters.";
  else if (values.comment.length > commentLimits.comment) errors.comment = "Please shorten your comment.";
  else if (links > maxLinks) errors.comment = `Please include no more than ${maxLinks} links.`;

  return errors;
}

export const hasCommentErrors = (errors: CommentErrors) => Object.keys(errors).length > 0;
