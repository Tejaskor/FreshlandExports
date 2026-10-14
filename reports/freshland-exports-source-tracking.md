# Freshland Exports — Lead Source Tracking

| | |
|---|---|
| **Date** | 2026-10-14 |
| **Base commit** | `9c675ce` (`main`) — changes are uncommitted in the working tree |
| **Goal** | Every form submission sends a meaningful, consistent `source`, plus `form_type` and `page_url`, through the existing `postToWebhook` → `CONTACT_WEBHOOK_URL` → Make.com scenario *Integration Webhooks, Google Sheets* → spreadsheet *FLE Leads*, worksheet *Website Leads*, column I `Source` |
| **Status** | Code change done and verified locally (typecheck, lint, build, offline payload test). **Not verified live:** no real form was submitted and no request was sent to the webhook, so the Google Sheet has **not** been confirmed to populate column I. |

Related: [freshland-exports-form-audit.md](freshland-exports-form-audit.md) (the form inventory this work is based on).

---

## 1. Forms and their assigned source

All submissions keep the existing `type` key (`contact` / `brochure_lead`), so any current Make mapping that relies on it still works. `source`, `form_type` and `page_url` are new keys alongside it. `source` and `form_type` are separate fields.

### 1.1 Contact and enquiry forms (`type: "contact"`)

| Form | Route(s) | `source` | `form_type` |
|---|---|---|---|
| Homepage "Send Us a Message" | `/` | `homepage_contact` | `contact` |
| Contact page enquiry | `/contact` | `contact_page` | `contact` |
| Product "Request a Quote" (all 45 product pages, both the business-quote and the compact layout) | `/products/{slug}` | `product_enquiry_{slug with - → _}` | `product_enquiry` |

The product source is built from each page's slug by `productEnquirySource(slug)` in `src/components/forms/contact-schema.ts`. No product name is hardcoded. A product page added later gets its source automatically through the same placements.

Every product page and its source (checked in the prerendered HTML, §4.3):

| Route | `source` |
|---|---|
| `/products/moringa-powder` | `product_enquiry_moringa_powder` |
| `/products/onion-powder` | `product_enquiry_onion_powder` |
| `/products/turmeric-powder` | `product_enquiry_turmeric_powder` |
| `/products/onion` | `product_enquiry_onion` |
| `/products/red-chilli` | `product_enquiry_red_chilli` |
| `/products/garlic` | `product_enquiry_garlic` |
| `/products/turmeric` | `product_enquiry_turmeric` |
| `/products/cumin-seeds` | `product_enquiry_cumin_seeds` |
| `/products/coriander-seeds` | `product_enquiry_coriander_seeds` |
| `/products/red-chilli-powder` | `product_enquiry_red_chilli_powder` |
| `/products/black-pepper-powder` | `product_enquiry_black_pepper_powder` |
| `/products/coriander-seeds-powder` | `product_enquiry_coriander_seeds_powder` |
| `/products/garlic-powder` | `product_enquiry_garlic_powder` |
| `/products/dry-mango-powder` | `product_enquiry_dry_mango_powder` |
| `/products/garam-masala` | `product_enquiry_garam_masala` |
| `/products/white-pepper-powder` | `product_enquiry_white_pepper_powder` |
| `/products/nutmeg-powder` | `product_enquiry_nutmeg_powder` |
| `/products/dry-ginger-powder` | `product_enquiry_dry_ginger_powder` |
| `/products/clove-powder` | `product_enquiry_clove_powder` |
| `/products/elephant-yam` | `product_enquiry_elephant_yam` |
| `/products/cabbage` | `product_enquiry_cabbage` |
| `/products/cucumber` | `product_enquiry_cucumber` |
| `/products/green-chili` | `product_enquiry_green_chili` |
| `/products/frozen-peas` | `product_enquiry_frozen_peas` |
| `/products/okra` | `product_enquiry_okra` |
| `/products/bitter-gourd` | `product_enquiry_bitter_gourd` |
| `/products/eggplant` | `product_enquiry_eggplant` |
| `/products/drumstick` | `product_enquiry_drumstick` |
| `/products/beans` | `product_enquiry_beans` |
| `/products/mango` | `product_enquiry_mango` |
| `/products/banana` | `product_enquiry_banana` |
| `/products/grapes` | `product_enquiry_grapes` |
| `/products/pomegranate` | `product_enquiry_pomegranate` |
| `/products/orange` | `product_enquiry_orange` |
| `/products/chikoo` | `product_enquiry_chikoo` |
| `/products/papaya` | `product_enquiry_papaya` |
| `/products/guava` | `product_enquiry_guava` |
| `/products/black-pepper` | `product_enquiry_black_pepper` |
| `/products/green-cardamom` | `product_enquiry_green_cardamom` |
| `/products/cloves` | `product_enquiry_cloves` |
| `/products/cinnamon` | `product_enquiry_cinnamon` |
| `/products/mustard-seeds` | `product_enquiry_mustard_seeds` |
| `/products/fennel-seeds` | `product_enquiry_fennel_seeds` |
| `/products/fenugreek-seeds` | `product_enquiry_fenugreek_seeds` |
| `/products/psyllium-seed` | `product_enquiry_psyllium_seed` |

The 8 legacy `/products/organic-*` pages have no form (unchanged; see the audit).

The two placements that no route currently renders (`ExportProductDetail`, `ProductEnquiry`) were updated the same way. Any product that falls back to them later also sends `product_enquiry_{slug}`.

### 1.2 Brochure download (`type: "brochure_lead"`)

| Trigger | Where | `source` | `form_type` |
|---|---|---|---|
| Header "Brochure" button (tablet/desktop bar) | every page | `header_brochure` (unchanged) | `brochure_download` |
| Mobile menu "Brochure" button | every page, phones | `header_mobile_brochure` (**new**, was `header_brochure`) | `brochure_download` |
| Footer "Brochure" | every page | `footer_brochure` (unchanged) | `brochure_download` |
| Blog article brochure card | `/blog/{slug}` | `blog_brochure` (unchanged) | `brochure_download` |
| Homepage "Download Now" | `/` | `homepage_brochure` (unchanged) | `brochure_download` |

**Why the mobile button now has its own source.** The desktop button and the mobile-menu button are separate elements in `site-header.tsx`, each with its own `source` prop. The trigger is therefore identified exactly, with no guessing from screen width or user agent.

Rows from the mobile menu now read `header_mobile_brochure`. A sheet filter matching exactly `header_brochure` will no longer include them. A "starts with `header_`" filter catches both.

### 1.3 `page_url`

- **Contents:** the page the form was submitted from, as origin + path only, e.g. `https://…/products/moringa-powder`.
- **What is stripped:** the query string and `#hash`. UTM parameters already travel separately on brochure leads, and nothing else in a URL belongs in a lead.
- **How it's captured:** the browser fills it in when the visitor submits.
- **Server check:** the server accepts only an `http(s)` URL of at most 500 characters. Anything else becomes `""`.

### 1.4 Server-side validation of `source`

Server Actions are public endpoints, so the server never forwards an arbitrary `source`.

| Payload | Accepted values | Anything else becomes |
|---|---|---|
| Contact | `homepage_contact`, `contact_page`, or `product_enquiry_` + lowercase letters/digits joined by single `_` (≤ 100 chars) | `"unknown"` (`form_type` is also `"unknown"`) |
| Brochure | Its allow-list (existing behaviour) | `"unknown"` |

The lead itself is still delivered, so a bad label never loses a lead. This also stops spreadsheet-formula strings from being injected through `source`.

---

## 2. Files changed

| File | Change |
|---|---|
| `src/components/forms/lead-meta.ts` | **New.** `currentPageUrl()` (browser) and `readPageUrl()` (server validation) for `page_url` |
| `src/components/forms/contact-schema.ts` | `ContactSource` / `ContactFormType` types; `productEnquirySource(slug)`, `readContactSource()`, `contactFormType()` |
| `src/components/forms/contact-action.ts` | Reads and validates `source`, derives `form_type`, reads `page_url`, adds all three to the `contact` payload |
| `src/components/forms/contact-form.tsx` | Required `source` prop (TypeScript fails the build if a placement omits it); hidden `source` input; sets `page_url` at submit |
| `src/features/brochure/schema.ts` | Adds `header_mobile_brochure` to the source allow-list |
| `src/features/brochure/brochure-action.ts` | Adds `form_type: "brochure_download"` and `page_url` to the `brochure_lead` payload |
| `src/features/brochure/brochure-modal.tsx` | Sets `page_url` at submit |
| `src/components/layout/site-header.tsx` | Mobile-menu brochure button sends `header_mobile_brochure` (one line) |
| `src/features/home/components/contact.tsx` | `source="homepage_contact"` |
| `src/app/contact/page.tsx` | `source="contact_page"` |
| `src/features/agri/components/contact.tsx` | `source={productEnquirySource(product.slug)}` on both layouts (41 product pages) |
| `src/features/moringa/components/moringa-cta.tsx`, `moringa-page.tsx` | Takes `productSlug` from the page; slug-based source |
| `src/features/onion-powder/components/onion-contact.tsx`, `onion-page.tsx` | Same |
| `src/features/turmeric-powder/components/turmeric-contact.tsx`, `turmeric-page.tsx` | Same |
| `src/features/fresh-onion/components/fresh-onion-contact.tsx`, `fresh-onion-page.tsx` | Same |
| `src/features/products/components/export-product-detail.tsx`, `product-enquiry.tsx` | Slug-based source (placements not currently rendered) |

**Not changed:**
- `src/components/forms/webhook.ts`, which is still the only delivery path;
- `CONTACT_WEBHOOK_URL`;
- existing fields, validation rules, success and error messages, honeypots;
- the brochure download behaviour;
- the existing `type` key.

No new webhook, API route, integration, spreadsheet or Make scenario was created.

---

## 3. Example payloads

These were captured from the real server actions with `fetch` stubbed (§4.4). The host `example.test` and the contact details are test placeholders; `submittedAt` is shortened.

**Homepage contact**
```json
{
  "type": "contact",
  "name": "Test Buyer", "company": "", "email": "buyer@example.test", "country": "India",
  "phone": "", "product": "", "quantity": "", "message": "Looking for bulk supply.",
  "source": "homepage_contact",
  "form_type": "contact",
  "page_url": "https://example.test/",
  "submittedAt": "<ISO-8601>"
}
```

`/contact` is identical in shape, with `"source": "contact_page"`.

**Product enquiry (Moringa Powder, business-quote layout)**
```json
{
  "type": "contact",
  "name": "Test Buyer", "company": "Test Co", "email": "buyer@example.test", "country": "Germany",
  "phone": "", "product": "Moringa Powder", "quantity": "1 – 5 MT", "message": "",
  "source": "product_enquiry_moringa_powder",
  "form_type": "product_enquiry",
  "page_url": "https://example.test/products/moringa-powder",
  "submittedAt": "<ISO-8601>"
}
```

On the 43 compact-layout product pages, `product` is still `""`. The product is identified by `source`, and still appears in the pre-filled message.

**Brochure download (desktop header button)**
```json
{
  "type": "brochure_lead",
  "name": "", "company": "", "email": "buyer@example.test", "phone": "+49 30 1234567",
  "country": "Germany", "productsInterested": ["Moringa Powder"], "buyerType": "Importer",
  "expectedQuantity": "",
  "source": "header_brochure",
  "form_type": "brochure_download",
  "page_url": "https://example.test/blog",
  "utm_source": "linkedin",
  "submittedAt": "<ISO-8601>"
}
```

---

## 4. Build and test results

The project has no test framework or existing test files: its scripts are `typecheck`, `lint` and `build`. No test suite was added. Instead, the two checks below were run as throwaway scripts outside `src/` and then deleted.

| Check | Command | Result |
|---|---|---|
| 4.1 Typecheck | `npm run typecheck` (`tsc --noEmit`) | **Pass** (exit 0) |
| 4.2 Lint | `npm run lint` (`eslint`) | **Pass** (exit 0, no warnings) |
| 4.3 Build | `npm run build` (Next.js 16.4.0, Turbopack) | **Pass**: 283/283 static pages generated |
| 4.3 Rendered sources | Grep of the prerendered `.next/server/app/{index,contact,products/*}.html` for the hidden `source` input, compared with the expected value per route | **47/47 pages with a form match** (home, `/contact`, 45 product pages); 8 legacy organic pages have no form, as expected |
| 4.4 Payloads | Ran `submitContact` and `submitBrochureLead` with `globalThis.fetch` stubbed and a dummy `CONTACT_WEBHOOK_URL` (no network) | **All assertions pass** (7 delivered payloads, see below) |

The payload test (4.4) asserted the following:
- Homepage, `/contact`, business-quote product, compact product, desktop-header brochure and mobile-menu brochure each send the expected `source`, `form_type` and normalised `page_url`.
- A tampered `source` (`evil=HYPERLINK()`) and `page_url` (`javascript:…`) are delivered as `"unknown"` / `""`.
- An invalid submission is rejected and **nothing** is sent.

**Secrets and logging.**
- No webhook URL, token or secret appears in source code. `CONTACT_WEBHOOK_URL` is still read only in the server-only `webhook.ts`.
- No new logging was added. Existing error logs (`console.error` in both actions) print the error object, not the URL. A DNS or network failure from `fetch` can include the webhook **hostname** (for example a Make region host) in its `cause`, but not the secret path. This behaviour is unchanged by this work.

---

## 5. Remaining Make.com and Google Sheets steps (manual)

These cannot be done or verified from the code. Nothing in the Make scenario or spreadsheet was changed.

1. **Refresh the webhook's data structure.** Make learns a Custom Webhook's fields from sample payloads. Before this change, `contact` payloads had no `source`, `form_type` or `page_url`, so those fields may not appear in Make's mapping panel yet.
   - In the scenario's *Webhooks* module, choose **Redetermine data structure**.
   - While it is listening, send one agreed test submission from a **preview** deployment (§6).
2. **Map column I (`Source`)** in the *Google Sheets → Add a row* module (worksheet *Website Leads*) to the webhook's `source` field.
   - If the scenario has a router with separate routes for `type = contact` and `type = brochure_lead`, map `source` on **every** route.
   - Brochure payloads already carried `source`, so that route may already be mapped. Contact routes most likely are not.
3. **Optional:** add columns for `form_type` and `page_url` and map them. These are new columns, not renames.
4. **Optional:** add a *Webhook response* module after the Sheets step, so a failed sheet write returns an error to the site instead of Make's default `200 Accepted` (see audit R5).
5. **Update sheet filters** that match `header_brochure` exactly to also include `header_mobile_brochure`.

---

## 6. Verification still required before calling it fixed

The Google Sheet is **not** confirmed to populate column I. That needs one real end-to-end test per form type, done by someone with access to Make and the sheet:

1. Deploy this branch to a preview environment that has `CONTACT_WEBHOOK_URL` set.
2. Using an agreed test identity, submit each of:
   - the homepage form;
   - `/contact`;
   - one business-quote product page (e.g. `/products/moringa-powder`);
   - one compact product page (e.g. `/products/garlic`);
   - one brochure trigger each from the desktop header and the mobile menu.
3. Confirm each new row in *FLE Leads → Website Leads* has the expected value in column I (`Source`), and delete the test rows afterwards.

---

## 7. Notes

- **Privacy Policy:** `page_url` is a new data point sent with every lead. The policy's "Information We Collect" list (`src/features/legal/privacy-policy.ts`) does not explicitly mention it; its server-log paragraph covers "the pages requested" only in general terms. Consider adding a line such as "the page you submitted the form from". This was **not** changed here because it is legal copy.
- **Audit report:** this resolves audit findings R3 (no form or page identifier on contact leads) and R10 (desktop and mobile header sharing a source). It partly addresses R2: compact product leads are now identified by `source`, but they still have no `product` field.
