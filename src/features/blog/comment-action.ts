"use server";

import { postToWebhook } from "@/components/forms/webhook";
import { featureFlags } from "@/config/features";
import { placeholderSiteUrl, siteConfig } from "@/config/site";
import {
  type CommentState,
  hasCommentErrors,
  minimumFillMs,
  readComment,
  shownAtField,
  validateComment,
} from "@/features/blog/comment-schema";
import { findBlogPost } from "@/features/blog/data";
import { absoluteUrl } from "@/lib/utils";

/**
 * Receives a Blog comment for moderation. Re-validates everything the
 * browser checked, since a Server Action is a public endpoint. `slug` is
 * bound by the article page; the title and path sent with the comment come
 * from the server's article index, never from the form, and an unknown slug
 * is refused. Nothing is published: the comment goes to the shared form
 * webhook marked as a blog comment, for review.
 */
export async function submitComment(
  slug: string,
  _previous: CommentState,
  formData: FormData,
): Promise<CommentState> {
  const values = readComment(formData);
  const unavailable: CommentState = {
    status: "error",
    message: "Comments are not open on this article.",
    values,
  };

  // Hidden form, but the endpoint is public: refuse until comments are on.
  if (!featureFlags.blogComments) return unavailable;

  // Honeypot or a form sent faster than anyone could write: a bot. Report
  // success so it learns nothing, but deliver nothing (as the lead forms do).
  const shownAt = Number(formData.get(shownAtField));
  if (formData.get("website") || !Number.isFinite(shownAt) || Date.now() - shownAt < minimumFillMs) {
    return { status: "success" };
  }

  const errors = validateComment(values);
  if (hasCommentErrors(errors)) return { status: "invalid", errors, values };

  const post = findBlogPost(slug);
  if (!post) return unavailable;

  try {
    await postToWebhook("blog_comment", {
      // Lets the Make.com scenario route comments away from the lead records.
      submissionType: "blog_comment",
      source: `blog_comment_${post.slug.replace(/-/g, "_")}`,
      form_type: "blog_comment",
      moderation_status: "pending",
      name: values.name,
      email: values.email,
      message: values.comment,
      article_slug: post.slug,
      article_title: post.title,
      source_path: post.href,
      page_url: siteConfig.url === placeholderSiteUrl ? post.href : absoluteUrl(post.href, siteConfig.url),
    });
    return { status: "success" };
  } catch (error) {
    console.error("[comment] comment could not be delivered", error);
    return {
      status: "error",
      message: "We couldn't send your comment just now. Please try again in a moment.",
      values,
    };
  }
}
