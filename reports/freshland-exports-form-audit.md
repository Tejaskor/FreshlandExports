# Freshland Exports — Website Form Audit

| | |
|---|---|
| **Audit date** | 2026-10-14 |
| **Scope** | All lead-capture forms in the Next.js App Router project (`src/`), their submission handlers and integrations |
| **Codebase state** | Working tree on `main` at `e7c0cda` **plus uncommitted changes** (see `git status`). No form, action, schema or webhook file is modified in the working tree. |
| **Method** | Static code inspection, plus a read-only script (run with `jiti`, outside the source tree) that loaded the project's own product/blog/case-study data to list every dynamic route and which form it renders. |
| **Not done** | No form was submitted, no webhook was called, no Make.com scenario or spreadsheet was opened. Everything about delivery beyond the webhook POST is **unverified** (see §8). |

**Production domain.** No production domain is configured in the repository. `.env.example` sets `NEXT_PUBLIC_SITE_URL=http://localhost:3000`, no `.env`/`.env.local` exists, and `src/config/site.ts:22-26` falls back to `VERCEL_PROJECT_PRODUCTION_URL` (set only on Vercel at build time) and then to the placeholder `https://freshland-exports.example.com`. URLs in this report are therefore written as **`{SITE_URL}/path`**. Replace `{SITE_URL}` with the live domain once confirmed. (The contact email `info@freshlandexports.com` hints at `freshlandexports.com`, but the code does not confirm this.)

---

## 1. Executive Summary

- The site has **two form components**:
  - `ContactForm` in `src/components/forms/contact-form.tsx`, which has three layout variants (`compact`, `detailed`, `quote`).
  - `BrochureDownloadModal` in `src/features/brochure/brochure-modal.tsx`, a single site-wide popup.
- Together they give **five distinct forms as visitors see them**. There are also two further form placements in code that **no current route renders**.
- **Every form goes through one function**, `postToWebhook()` (`src/components/forms/webhook.ts:15`). It POSTs JSON to the URL in the **`CONTACT_WEBHOOK_URL`** environment variable.
  - There are no API routes, email services, databases or other endpoints. Each submission goes through a React Server Action and then this webhook.
- **Make.com and Google Sheets appear only in comments and copy**, never in executable code:
  - the `.env.example` comment ("the Make.com scenario");
  - the Privacy Policy content (`src/features/legal/privacy-policy.ts:5-7, 119-120`).
  
  The code is generic: it would post to any HTTPS webhook.
- **No form bypasses the shared webhook.** No form is disconnected from lead storage at the code level. Whether leads actually reach a spreadsheet depends on the deployed `CONTACT_WEBHOOK_URL` and the Make scenario, and **neither could be verified**.
- **Lead quality gaps (main findings):**
  1. All three contact variants send `type: "contact"` and no variant, page URL, or UTM data. The receiver cannot tell a homepage message from a /contact enquiry or a product quote.
  2. On **43 of 45 product pages** the quote form is the *compact* variant. That variant sends **no product field**. The product name exists only as editable pre-filled text in the message, so the visitor can delete it.
  3. Contact and brochure payloads use **different field names and shapes** for the same data: `product` (a string) vs `productsInterested` (an array), and `quantity` vs `expectedQuantity`.
  4. The brochure PDF is a public static file at a fixed path. The lead gate can be bypassed by anyone who knows the URL; the code acknowledges this.
  5. Duplicate and spam protection is limited to a honeypot field and a disabled button while a submission is pending. There is no rate limiting, CAPTCHA or server-side de-duplication.

---

## 2. Total Number of Unique Forms

| Count | What is counted |
|---|---|
| **2** | Form components (`ContactForm`, `BrochureDownloadModal`) |
| **5** | Distinct forms as rendered to visitors (unique field set and purpose) — listed in §4 |
| **2** | Additional `ContactForm` placements that exist in code but are **not reachable** by any current route (dormant) |
| **1** | Submission endpoint shared by all forms (`postToWebhook` → `CONTACT_WEBHOOK_URL`) |

The case-study search box (`src/features/case-studies/components/case-study-browser.tsx:78`) is a client-side filter with no submission, so it is **not** a lead form. No other `<form>`, `<input>`, `<textarea>` or `<select>` exists outside these components. No HTML file in `public/` contains a form. The untracked `dt.html` at the project root contains no `<form>` and is not served by Next.js.

---

## 3. Total Number of Pages Containing Forms

The route list comes from each route's `generateStaticParams()`, evaluated against the current source data.

| Category | Routes | Embedded form | Brochure popup reachable |
|---|---:|---|---|
| Homepage `/` | 1 | Yes — compact contact form | Yes (homepage CTA + header + footer) |
| `/contact` | 1 | Yes — detailed enquiry form | Yes (header + footer) |
| Product pages `/products/[slug]` (export range) | 45 | Yes — quote form (2 business, 43 compact) | Yes (header + footer) |
| Product pages `/products/[slug]` (legacy organic catalogue) | 8 | **No** | Yes (header + footer) |
| Blog articles `/blog/[slug]` | 141 | No embedded form, but an inline brochure card | Yes (blog card + header + footer) |
| All other routes (see below) | 76 | No | Yes (header + footer) |
| **Total routes** | **272** | **47 routes with an embedded form** | **All 272 (plus the 404 page)** |

"All other routes" covers:
- 12 static pages: `/about`, `/blog`, `/case-studies`, `/certificates`, `/faqs`, `/farms`, `/privacy-policy`, `/products`, `/r-and-d`, `/signature-ingredients`, `/site-map`, `/terms-and-conditions`;
- 57 `/case-studies/[slug]` pages;
- 7 `/signature-ingredients/[slug]` pages.

The brochure popup is mounted once in the root layout (`src/app/layout.tsx:88-95`). The header and footer on every page carry a Brochure button, so the brochure form is reachable from every page.

---

## 4. Complete Form Inventory

| No. | Form Name | Page URL / Route | Component File | Fields | Submission Endpoint | Current Destination | Status |
|---|---|---|---|---|---|---|---|
| F1 | Homepage "Send Us a Message" (contact, compact) | `{SITE_URL}/` | `src/features/home/components/contact.tsx:73` → `src/components/forms/contact-form.tsx` | Name*, Email*, Country, Phone, Message* | Server Action `submitContact` (`src/components/forms/contact-action.ts:17`) → `postToWebhook("contact")` | POST JSON to `CONTACT_WEBHOOK_URL` (documented as Make.com → Google Sheets) | Code path complete; delivery **unverified** |
| F2 | Contact page "Send Us a Message" (enquiry, detailed) | `{SITE_URL}/contact` | `src/app/contact/page.tsx:50` → `contact-form.tsx` (`variant="detailed"`) | Full Name*, Company Name*, Business Email*, Country / Market*, Product / Category* (multi), Expected Quantity, Message* | `submitContact` → `postToWebhook("contact")` | Same webhook | Code path complete; delivery **unverified** |
| F3 | Product "Request a Quote" — business quote variant | `{SITE_URL}/products/moringa-powder`, `{SITE_URL}/products/red-chilli-powder` | `src/features/moringa/components/moringa-cta.tsx:32`; `src/features/agri/components/contact.tsx:26` → `contact-form.tsx` (`variant="quote"`) | Full Name*, Company Name*, Business Email*, Country / Market*, Required Quantity*, Message / Requirements, product (hidden, set by the page) | `submitContact` → `postToWebhook("contact")` | Same webhook | Code path complete; delivery **unverified** |
| F4 | Product "Request a Quote" — compact variant | 43 product URLs (§5.3) | `src/features/agri/components/contact.tsx:28-32`; `src/features/onion-powder/components/onion-contact.tsx:26-30`; `src/features/turmeric-powder/components/turmeric-contact.tsx:32-36`; `src/features/fresh-onion/components/fresh-onion-contact.tsx:29-33` → `contact-form.tsx` (compact) | Name*, Email*, Country, Phone, Message* (pre-filled with the product name) | `submitContact` → `postToWebhook("contact")` | Same webhook | Code path complete; **no structured product field**; delivery **unverified** |
| F5 | Brochure Download popup | Every route (modal); triggers listed in §7.1 | `src/features/brochure/brochure-modal.tsx`, opened via `brochure-provider.tsx` / `brochure-button.tsx` | Full Name, Company Name, Business Email*, WhatsApp / Phone*, Country / Market*, Buyer Type*, Products of Interest* (multi), Expected Purchase Quantity | Server Action `submitBrochureLead` (`src/features/brochure/brochure-action.ts:29`) → `postToWebhook("brochure_lead")` | Same webhook; PDF released after the webhook succeeds | Code path complete; delivery **unverified** |
| D1 | *(dormant)* Export product quote, compact | none at present | `src/features/products/components/export-product-detail.tsx:213` | As F4 | As F4 | As F4 | Unreachable — all 9 export products route to a dedicated or agri page |
| D2 | *(dormant)* Menu-only product enquiry, compact | none at present | `src/features/products/components/product-enquiry.tsx:72` | As F4 | As F4 | As F4 | Unreachable — all 36 menu-only products have an agri landing page |

`*` = required (enforced on both client and server).

**Why D1 and D2 are unreachable.** `src/app/products/[slug]/page.tsx:108-140` checks routes in this order:
1. agri landing pages;
2. the four dedicated pages: moringa, onion-powder, turmeric-powder and onion;
3. `ExportProductDetail`;
4. `ProductEnquiry`;
5. the legacy `ProductDetail`.

With the current data, every export and menu-only slug is caught by one of the first two steps. D1 and D2 become live as soon as a product is added to `exportProducts` or `menuOnlyProducts` without an agri landing page.

---

## 5. Page-by-Page Form URLs

### 5.1 Site-wide and static pages

| Route | Full URL | Form(s) | How opened |
|---|---|---|---|
| `/` | `{SITE_URL}/` | F1 (embedded, "Send Us a Message" section near the bottom, `src/app/page.tsx:36`); F5 via "Download Now" (`src/app/page.tsx:34`) | F1 inline; F5 modal on button click |
| `/contact` | `{SITE_URL}/contact` | F2 (embedded) | Inline |
| Every route | — | F5 via header "Brochure" (desktop/tablet bar, and mobile menu) and footer "Brochure" | Modal on button click |
| `/blog/[slug]` (141 articles) | `{SITE_URL}/blog/{slug}` | F5 via inline brochure card (sticky sidebar on tablet+; after the article on phones) | Modal on button click |

The header "Get a Quote" button (`src/components/layout/site-header.tsx:178, 403`) and the homepage "Contact Us" button are **links to `/contact`**, not separate forms.

### 5.2 Product pages with the business quote form (F3) — 2 pages

| Route | Rendered by | Form placement |
|---|---|---|
| `/products/moringa-powder` | `MoringaPage` → `moringa-cta.tsx:32` | `#quote` / `#quote-form` section |
| `/products/red-chilli-powder` | `AgriPage` → `agri/components/contact.tsx:26` (enabled by `quote:` in `src/features/agri/content/powders/red-chilli-powder.ts:188`) | `#quote` section |

### 5.3 Product pages with the compact quote form (F4) — 43 pages

All of them post through `ContactForm` (compact) → `submitContact` → `CONTACT_WEBHOOK_URL`. Each form's title is "Request a Quote for {Product}" and its message is pre-filled with "I'd like a quote for {Product}. …".

| Route | Product | Rendered by |
|---|---|---|
| `/products/onion-powder` | Onion Powder | `OnionPage` → `onion-contact.tsx:26` |
| `/products/turmeric-powder` | Turmeric Powder | `TurmericPage` → `turmeric-contact.tsx:32` |
| `/products/onion` | Fresh Onions | `FreshOnionPage` → `fresh-onion-contact.tsx:29` |
| `/products/red-chilli` | Red Chilli | `AgriPage` → `agri/components/contact.tsx:28` |
| `/products/garlic` | Garlic | AgriPage |
| `/products/turmeric` | Turmeric | AgriPage |
| `/products/cumin-seeds` | Cumin Seeds | AgriPage |
| `/products/coriander-seeds` | Coriander Seeds | AgriPage |
| `/products/black-pepper-powder` | Black Pepper Powder | AgriPage |
| `/products/coriander-seeds-powder` | Coriander Seeds Powder | AgriPage |
| `/products/garlic-powder` | Garlic Powder | AgriPage |
| `/products/dry-mango-powder` | Dry Mango Powder | AgriPage |
| `/products/garam-masala` | Garam Masala | AgriPage |
| `/products/white-pepper-powder` | White Pepper Powder | AgriPage |
| `/products/nutmeg-powder` | Nutmeg Powder | AgriPage |
| `/products/dry-ginger-powder` | Dry Ginger Powder | AgriPage |
| `/products/clove-powder` | Clove Powder | AgriPage |
| `/products/elephant-yam` | Elephant Yam | AgriPage |
| `/products/cabbage` | Cabbage | AgriPage |
| `/products/cucumber` | Cucumber | AgriPage |
| `/products/green-chili` | Green Chilli | AgriPage |
| `/products/frozen-peas` | Frozen Peas | AgriPage |
| `/products/okra` | Okra | AgriPage |
| `/products/bitter-gourd` | Bitter Gourd | AgriPage |
| `/products/eggplant` | Eggplant | AgriPage |
| `/products/drumstick` | Drumstick | AgriPage |
| `/products/beans` | Beans | AgriPage |
| `/products/mango` | Mango | AgriPage |
| `/products/banana` | Banana | AgriPage |
| `/products/grapes` | Grapes | AgriPage |
| `/products/pomegranate` | Pomegranate | AgriPage |
| `/products/orange` | Orange | AgriPage |
| `/products/chikoo` | Chikoo | AgriPage |
| `/products/papaya` | Papaya | AgriPage |
| `/products/guava` | Guava | AgriPage |
| `/products/black-pepper` | Black Pepper | AgriPage |
| `/products/green-cardamom` | Green Cardamom | AgriPage |
| `/products/cloves` | Cloves | AgriPage |
| `/products/cinnamon` | Cinnamon | AgriPage |
| `/products/mustard-seeds` | Mustard Seeds | AgriPage |
| `/products/fennel-seeds` | Fennel Seeds | AgriPage |
| `/products/fenugreek-seeds` | Fenugreek Seeds | AgriPage |
| `/products/psyllium-seed` | Psyllium Seed | AgriPage |

Every one of the 41 agri landing products has exactly one `contact` section. This was checked programmatically against `product.sections`. `AgriPage` renders the form at `src/features/agri/components/agri-page.tsx:99-125`.

### 5.4 Product routes with no embedded form — 8 pages

`/products/organic-turmeric-powder`, `organic-ginger-powder`, `organic-moringa-powder`, `organic-ashwagandha-powder`, `organic-beetroot-powder`, `organic-black-pepper-powder`, `organic-brahmi-powder`, `organic-neem-powder`.

These pages are rendered by `ProductDetail`, the legacy organic catalogue. They are set to `noIndex` and nothing links to them (`page.tsx:96-105`). Only the header and footer brochure buttons appear.

### 5.5 Dynamic route patterns

| Pattern | Source of slugs | Form |
|---|---|---|
| `/products/[slug]` | `exportProducts` (9) + `menuOnlyProducts` (36) + organic `products` (8) — `src/app/products/[slug]/page.tsx:32-38` | F3 / F4 / none, by the dispatch order in §4 |
| `/blog/[slug]` | `blogPosts` (141) — `src/app/blog/[slug]/page.tsx:11` | F5 trigger (brochure card) |
| `/case-studies/[slug]` | `caseStudies` (57) | F5 via header/footer only |
| `/signature-ingredients/[slug]` | `ingredients` (7) | F5 via header/footer only |

---

## 6. Form Fields and Validation

Validation runs twice: in the browser for instant feedback, then again in the Server Action. The Server Action is the authority, because Server Actions are public endpoints. Both sides use the same schema module. All forms set `noValidate` and show custom inline errors linked via `aria-describedby`. Focus moves to the first invalid field.

### 6.1 `ContactForm` (F1–F4)

Schema: `src/components/forms/contact-schema.ts` (`validateContact`, lines 77-128). Length limits are at line 39.

| Field (`name`) | F1/F4 compact | F2 detailed | F3 quote | Rule |
|---|---|---|---|---|
| `name` | Required | Required | Required | 2–80 chars |
| `company` | — | Required | Required | 2–120 chars |
| `email` | Required | Required | Required | Basic `x@y.zz` regex, ≤254 |
| `country` | Optional, native `<select>` with **6 options** (India, US, UK, Germany, Japan, Other — line 20) | Required, 22 markets | Required, 22 markets | Must be in the list |
| `phone` | Optional | — | — | `[+()\d\s.-]`, ≥7 digits, ≤20 chars |
| `product` | — | Required, multi-select from the catalogue | Hidden input set by the page; required, ≤120, no newlines | Must be a catalogue entry (detailed) |
| `quantity` | — | Optional | Required | One of: 500 KG – 1 MT, 1 – 5 MT, 5 – 10 MT, 10+ MT, Not decided yet |
| `message` | Required, 10–2000 | Required, 10–2000 | Optional; if given, 10–2000 | |
| `variant` (hidden) | not sent | `detailed` | `quote` | Selects the rule set; **not forwarded to the webhook** |
| `website` (honeypot) | hidden | hidden | hidden | If filled: returns success, delivers nothing (`contact-action.ts:23`) |

| Behaviour | Detail |
|---|---|
| Submit label | F1 "Send Message" (default); F2 "Send Enquiry"; F3/F4 "Request a Quote"; "Sending…" while pending (`contact-form.tsx:391-393`) |
| Success | "Thank You!" modal: "Thank you for contacting us. Your message has been successfully submitted…" (`contact-form.tsx:408-436`). The form resets and the custom dropdowns remount. |
| Validation error | Inline per-field messages. A field's error clears when it is edited. Values are restored from the server state. |
| Delivery error | "We couldn't send your message just now. Please try again in a moment." plus a `mailto:` fallback (`contact-action.ts:36`, `contact-form.tsx:395-405`). A network failure gives "We couldn't reach our server…" (`contact-form.tsx:57`). |
| Duplicate protection | Submit button disabled while pending only. No server-side de-duplication or rate limit. |

### 6.2 `BrochureDownloadModal` (F5)

Schema: `src/features/brochure/schema.ts` (`validateBrochure`, lines 139-186).

| Field (`name`) | Required | Rule |
|---|---|---|
| `name` (Full Name) | Optional | If given: 2–80 chars, letters in any script (`NAME` regex, line 100) |
| `companyName` | Optional | If given: 2–120 chars, `COMPANY` regex |
| `email` (Business Email) | **Required** | Stricter regex (line 95-96), ≤254. Free-mail domains are **not** blocked. |
| `phone` (WhatsApp / Phone) | **Required** | 7–15 digits, rejects one repeated digit, ≤20 chars |
| `country` | **Required** | One of 22 markets |
| `buyerType` | **Required** | Importer, Distributor, Wholesaler, Food Manufacturer, Food-Service Buyer, Retailer, Trader, Other |
| `products` | **Required** (≥1) | Multi-select of catalogue categories and products |
| `quantity` | Optional | Same 5 quantity bands |
| `source` (hidden) | — | `header_brochure` / `homepage_brochure` / `footer_brochure` / `blog_brochure`, else `unknown` |
| `utm_source` … `utm_content` (hidden) | — | From the landing URL, kept in `sessionStorage` (`brochure-provider.tsx:28-45`), each trimmed to 200 chars |
| `website` (honeypot) | — | If filled: returns a generic **error**, delivers and downloads nothing (`brochure-action.ts:32`) |

| Behaviour | Detail |
|---|---|
| Submit label | "Download Brochure", "Preparing…" while pending (`brochure-modal.tsx:306-313`) |
| Validation | On submit, and on blur for fields that already have a value (`brochure-modal.tsx:97-124`) |
| Success | The view switches to "Your brochure is ready." The download starts automatically. "Download Brochure Again" and a "Request a Quote" link to `/contact` are shown (`brochure-modal.tsx:395-443`). |
| Error | "Something went wrong. Please try again." Nothing downloads and the entered values stay in place. |
| Duplicate protection | Button disabled while pending. Reopening the popup remounts a fresh form (`brochure-provider.tsx:76-83`), so the same visitor can submit again and create another lead. |

---

## 7. Brochure Download Flow

### 7.1 Triggers and source identifiers

| Trigger | Location | `source` sent | Visible on |
|---|---|---|---|
| Header "Brochure" button (sm and up) | `src/components/layout/site-header.tsx:173-176` | `header_brochure` | Every page |
| Mobile menu "Brochure" button | `src/components/layout/site-header.tsx:395-402` | `header_brochure` (same as desktop) | Every page, phones |
| Footer "Brochure" link-button | `src/components/layout/site-footer.tsx:147-149` | `footer_brochure` | Every page |
| Homepage "Download Now" | `src/features/home/components/brochure-cta.tsx:59-65` | `homepage_brochure` | `/` |
| Blog brochure card "Download" | `src/features/blog/components/brochure-card.tsx:29-35`, used at `src/features/blog/components/blog-article.tsx:175` (phones) and `:183` (sidebar) | `blog_brochure` | All 141 `/blog/[slug]` pages |

There is no `<a href>` to the PDF anywhere in the markup. Every trigger is a `<button>` (`brochure-button.tsx`).

### 7.2 PDF location

| Item | Value | Verified |
|---|---|---|
| Path served | `/images/Brochure/FreshLandExportsBrochure.pdf` (`brochure-action.ts:19`) | File exists: `public/images/Brochure/FreshLandExportsBrochure.pdf`, 1,856,801 bytes |
| Download filename | `Freshland-Exports-Company-Brochure.pdf` (`brochure-action.ts:20`) | — |
| Cover image | `/images/shared/brochure-cover.webp` (`brochure-modal.tsx:385`) | File exists |

The path is case-sensitive (`Brochure` / `FreshLandExports`). It matches the file on disk, which matters on Linux hosting.

### 7.3 End-to-end trace

1. **Click.** `BrochureButton` calls `track("brochure_cta_click")` and then `openBrochure(source)` (`brochure-button.tsx:34-38`).
2. **Open.** `BrochureProvider.openBrochure` sets the source, increments the session key (a fresh form each time) and opens the modal (`brochure-provider.tsx:64-69`). UTM data is read once on first load (`:59-62`).
3. **Client validation.** `onSubmit` prevents the default submit and runs `validateBrochure`. If it passes, it fires `track("brochure_form_submit")` and calls the Server Action through `startTransition` (`brochure-modal.tsx:97-109`).
4. **Server.** `submitBrochureLead` checks the honeypot, re-validates, then calls `postToWebhook("brochure_lead", {...})` (`brochure-action.ts:29-50`).
5. **Webhook.** `postToWebhook` POSTs JSON to `CONTACT_WEBHOOK_URL` with a 10-second timeout. Any non-2xx response throws (`webhook.ts:27-34`).
6. **Release.** Only after the webhook returns 2xx does the action return `{ status: "success", download }`. The client effect then creates a temporary `<a download>` and clicks it (`brochure-modal.tsx:42-50, 78-86`).
7. **Failure.** No download happens and the generic error is shown.

### 7.4 Is the lead forwarded to Make.com?

- **By code inspection:** yes, provided `CONTACT_WEBHOOK_URL` is set to the Make.com webhook in the deployment environment. The download is gated on a 2xx response from that URL.
- **Not verified:**
  - The deployed value of `CONTACT_WEBHOOK_URL`: no `.env`/`.env.local` exists locally, and no hosting configuration (`vercel.json`) is in the repo.
  - That the URL is a Make.com hook.
  - That the Make scenario is active and writes to a spreadsheet.
- **Caveat on the 2xx check:** a Make.com custom webhook normally returns `200 Accepted` once it has queued the payload, unless the scenario ends with a "Webhook response" module. If so, the site shows success and releases the PDF even when a later step (such as the Google Sheets write) fails. This should be confirmed in the Make scenario.

### 7.5 Gaps found in the brochure flow

| # | Finding | Evidence |
|---|---|---|
| B1 | The PDF is a public static file, so anyone with the URL can download it without filling in the form. The code acknowledges this ("a lead-capture flow rather than access control"). | `brochure-action.ts:13-21` |
| B2 | Desktop header and mobile menu both send `header_brochure`, so they cannot be told apart in the lead data. | `site-header.tsx:173, 396` |
| B3 | The funnel events (`brochure_cta_click`, `brochure_form_open`, `brochure_form_submit`, `brochure_lead_success`, `brochure_download`, `brochure_lead_error`, `brochure_quote_click`) are pushed to `dataLayer`/`gtag` only if those exist. No analytics script is loaded (Privacy Policy, `privacy-policy.ts:8`), so **these events are currently dropped**. | `src/lib/analytics.ts:13-18` |
| B4 | Every reopen creates a new form, so repeat downloads by the same visitor create repeat leads. | `brochure-provider.tsx:64-69, 76-83` |
| B5 | The automatic download is started from an effect after an async round trip, not directly from the click. Most browsers allow a same-origin `download` link here. Behaviour on iOS Safari and in strict popup/download settings is **not verified**. A "Download Brochure Again" button is provided as a fallback. | `brochure-modal.tsx:78-86, 417-424` |
| B6 | The honeypot behaves differently from the contact form: a bot gets an error here but a fake success on the contact form. This has no functional impact on real users. | `brochure-action.ts:32` vs `contact-action.ts:23` |

No broken paths or missing handlers were found. All brochure source identifiers used by buttons are in the `brochureSources` allow-list (`schema.ts:8`).

---

## 8. Make.com and Spreadsheet Integration

### 8.1 What the code contains

| Item | Finding |
|---|---|
| Integration code | One function: `postToWebhook(type, payload)` in `src/components/forms/webhook.ts`. It is marked `import "server-only"`, which Next.js aliases internally (`node_modules/next/dist/compiled/server-only`), so the webhook URL can never ship to the browser. |
| Environment variable | `CONTACT_WEBHOOK_URL` (server only). No other secret or integration variable is referenced. `NEXT_PUBLIC_SITE_URL` and `VERCEL_PROJECT_PRODUCTION_URL` are used only for canonical URLs. |
| Callers | `submitContact` (`contact-action.ts:44`, `type: "contact"`) and `submitBrochureLead` (`brochure-action.ts:39`, `type: "brochure_lead"`). There are no other callers. |
| API routes | None for forms. The only `route.ts` files serve `humans.txt`, `llms.txt` and `llms-full.txt`. |
| Email, database, CRM SDKs | None. The dependencies are `next`, `react`, `react-dom`, `gsap`, `lenis`, `clsx` and `tailwind-merge` only. |
| Make.com / Google Sheets / Excel | **Not in executable code.** Mentioned in the `.env.example` comment ("the Make.com scenario") and in the Privacy Policy (`privacy-policy.ts:5-7, 119-120`: "Make.com … Google Sheets"). There is **no reference to Excel**. |
| Missing webhook behaviour | Development: the payload is logged to the server console and success is returned. Production: an error is thrown and the visitor sees the error message (`webhook.ts:19-25`). |

**Conclusion:** all forms go through one central webhook. That this webhook is a Make.com scenario writing to Google Sheets is **documented intent and not verifiable from the repository**.

### 8.2 Payloads sent to the webhook

**`type: "contact"` (F1–F4).** Every key is always present; unused ones are empty strings (`contact-action.ts:43-45`, `ContactValues`):

```json
{ "type": "contact", "name": "", "company": "", "email": "", "country": "", "phone": "",
  "product": "", "quantity": "", "message": "", "submittedAt": "ISO-8601" }
```

- `product` is a single string; several products are joined with `"; "`.
- **Not sent:** form variant, page URL or slug, source and UTM.

**`type: "brochure_lead"` (F5)** (`brochure-action.ts:39-50`):

```json
{ "type": "brochure_lead", "name": "", "company": "", "email": "", "phone": "", "country": "",
  "productsInterested": ["…"], "buyerType": "", "expectedQuantity": "", "source": "header_brochure",
  "utm_source": "…", "utm_medium": "…", "utm_campaign": "…", "utm_term": "…", "utm_content": "…",
  "submittedAt": "ISO-8601" }
```

- `productsInterested` is a JSON **array**.
- UTM keys are present only when they have values.

### 8.3 Field comparison and expected spreadsheet columns

These columns come from the payloads. No spreadsheet schema exists in the repo.

| Column | F1 Home | F2 /contact | F3 Quote (business) | F4 Quote (compact) | F5 Brochure |
|---|:-:|:-:|:-:|:-:|:-:|
| `type` | contact | contact | contact | contact | brochure_lead |
| `submittedAt` | ✓ | ✓ | ✓ | ✓ | ✓ |
| `name` | ✓ | ✓ | ✓ | ✓ | ✓ (optional) |
| `company` | — | ✓ | ✓ | — | ✓ (optional) |
| `email` | ✓ | ✓ | ✓ | ✓ | ✓ |
| `phone` | optional | — | — | optional | ✓ |
| `country` | optional (6-item list) | ✓ | ✓ | optional (6-item list) | ✓ |
| `product` (string) | — | ✓ multi, `; `-joined | ✓ fixed by page | **— (only inside message)** | — |
| `productsInterested` (array) | — | — | — | — | ✓ |
| `quantity` | — | optional | ✓ | — | — |
| `expectedQuantity` | — | — | — | — | optional |
| `buyerType` | — | — | — | — | ✓ |
| `message` | ✓ | ✓ | optional | ✓ | — |
| `source` | — | — | — | — | ✓ |
| `utm_*` (5) | — | — | — | — | when present |
| form variant / page URL | **not sent** | **not sent** | **not sent** | **not sent** | via `source` only |

---

## 9. Forms Not Connected to Lead Storage

**By code inspection: none.** All five live forms and both dormant placements call `postToWebhook`, which posts to `CONTACT_WEBHOOK_URL`. No form uses a different endpoint, `mailto:` submission, third-party embed or client-side `fetch`.

**Conditionally disconnected:**
- If `CONTACT_WEBHOOK_URL` is unset in **production**, every form returns an error and no lead is stored.
- If it is unset in **development or preview** (`NODE_ENV !== "production"`), forms report success but leads are only logged to the server console.

Whether the production deployment has the variable set **could not be verified**.

Other ways visitors can make contact that are not forms and not captured as leads: the footer `mailto:` and `tel:` links (`site-footer.tsx:11, 15`) and the email fallback in the contact form's error message.

---

## 10. Errors, Risks, and Missing Integrations

| # | Severity | Issue | Evidence | Impact |
|---|---|---|---|---|
| R1 | High | **Integration unverified end to end.** No deployed `CONTACT_WEBHOOK_URL`, Make scenario or sheet is visible from the repo. | `.env.example`; no `.env*`; no `vercel.json` | Cannot confirm any lead currently reaches a spreadsheet. |
| R2 | High | **Compact product quote forms (43 pages) send no structured product.** The product name is only pre-filled message text, which the visitor can edit or delete. | `fresh-onion-contact.tsx:29-33`, `agri/components/contact.tsx:28-32`, etc.; `contact-form.tsx:171` (hidden product only for `quote`) | Quote leads from most product pages cannot be filtered by product in the sheet. |
| R3 | High | **No form or page identifier on contact leads.** `variant` is used for validation but not forwarded; no page URL, slug or UTM is sent. | `contact-action.ts:25-30, 43-45` | Homepage messages, /contact enquiries and quote requests from 45 product pages all arrive as identical `type: "contact"` rows. |
| R4 | Medium | **Payload schemas differ between form types** (`product` string vs `productsInterested` array; `quantity` vs `expectedQuantity`). | §8.2 | The Make scenario must map two shapes and join the array, or columns will be mismatched or blank. |
| R5 | Medium | **Make's default 200 "Accepted" response** can mean the site reports success (and releases the PDF) even if the downstream Sheets step fails. | `webhook.ts:34` checks only `response.ok` | Silent lead loss is possible; needs checking in Make. |
| R6 | Medium | **Spam and abuse protection is minimal.** Server Actions are public endpoints and the only bot defence is a honeypot. There is no CAPTCHA, rate limit or de-duplication. | `contact-action.ts:23`, `brochure-action.ts:32` | The spreadsheet may fill with spam or duplicates; Make operations quota may be consumed. |
| R7 | Medium | **Brochure PDF is directly downloadable** from `/images/Brochure/FreshLandExportsBrochure.pdf`. | `brochure-action.ts:13-21` | The lead gate can be bypassed. This is known and accepted in code. |
| R8 | Low | Compact form's country list has only 6 options vs 22 markets elsewhere. | `contact-schema.ts:20` | Most export markets must choose "Other", which loses information. |
| R9 | Low | Analytics funnel events are dropped (no GTM/gtag loaded). | `src/lib/analytics.ts`; `privacy-policy.ts:8` | No conversion data on brochure or quote flows. |
| R10 | Low | Desktop and mobile header brochure buttons share `header_brochure`. | `site-header.tsx:173, 396` | Device placement is not attributable. |
| R11 | Low | Dormant compact quote placements (D1, D2) go live automatically for any new product without an agri page. | `products/[slug]/page.tsx:121-135` | Any such new page inherits R2 and R3. |
| R12 | Low | Production domain is not set in the repo. `.env.example` is `localhost`; the fallback is a placeholder `example.com`. | `src/config/site.ts:22-26` | Off Vercel, canonical and sitemap URLs would be wrong if `NEXT_PUBLIC_SITE_URL` were missing. This does not affect form delivery. |
| R13 | Info | 10-second webhook timeout; on timeout the visitor sees an error, although Make may still have received the request. | `webhook.ts:31` | A retry can create duplicate rows. |
| R14 | Info | Leads are only logged on failure (`console.error`), with no retry queue or fallback store. | `contact-action.ts:33`, `brochure-action.ts:53` | A lead that fails delivery is lost unless the visitor retries. |

No broken file paths, missing handlers, or forms posting to non-existent endpoints were found. The last production build in `.next/` (2026-10-13 19:43) post-dates the last change to `webhook.ts` (2026-10-13 13:02), which suggests the form code compiles. The build was not re-run for this audit.

---

## 11. Recommended Next Steps

These are recommendations only; nothing has been changed.

1. **Verify the live integration (manual, outside the repo).**
   - Confirm `CONTACT_WEBHOOK_URL` is set in the production and preview environments.
   - Confirm it points to the intended Make.com scenario and that the scenario is active.
   - Record the target Google Sheet and its column headers.
   - Submit one test lead per form type (F1–F5) on a preview deployment with an agreed test identity, and confirm each row appears.
2. **Decide how Make should report success.** Add a "Webhook response" module at the end of the scenario, after the Sheets write, so a failed write returns non-2xx and the site shows an error instead of a false success (R5).
3. **Add form identification to contact leads.** Forward `variant` (or a `formId` such as `home_contact`, `contact_page`, `product_quote`) and the page path in the `contact` payload (R3).
4. **Send the product as a field on every product quote form.** Either switch the 43 compact placements to `variant="quote"` (as moringa-powder and red-chilli-powder already use), or add the hidden `product` input to the compact layout (R2).
5. **Unify the payload schema** so contact and brochure leads share column names and value shapes, e.g. `products` as a joined string and a single `quantity` key (R4).
6. **Add UTM and source capture to contact forms**, reusing the brochure provider's `sessionStorage` UTM logic.
7. **Harden against spam and duplicates.** Add server-side rate limiting per IP/email and optionally a CAPTCHA (e.g. Cloudflare Turnstile), plus de-duplication in Make, e.g. on email + type + same day (R6, B4, R13).
8. **Widen the compact form's country list** to the shared 22-market list (R8).
9. **Decide on brochure gating.** If gating matters, serve the PDF through a signed or short-lived route instead of `/public` (R7).
10. **Load an analytics/tag manager** (and update the Privacy Policy accordingly), or remove the unused `track()` calls (R9). Optionally give the mobile menu its own source, such as `mobile_menu_brochure` (R10).
11. **Set `NEXT_PUBLIC_SITE_URL`** to the production domain in hosting, and replace `{SITE_URL}` in this report once confirmed (R12).

---

### Appendix — What remains unverified

- The value of `CONTACT_WEBHOOK_URL` in any deployed environment, and whether it is a Make.com URL.
- The existence, configuration and activity of the Make.com scenario, and its response behaviour.
- The existence and columns of the Google Sheet. Excel is not referenced anywhere.
- The live production domain.
- Real-browser behaviour of the automatic brochure download (especially iOS Safari).
- Runtime behaviour in general: no form was submitted, and no build or dev server was run for this audit.
