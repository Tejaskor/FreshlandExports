# Freshland Exports — Message Tracking

| | |
|---|---|
| **Date** | 2026-10-14 |
| **Base commit** | `a6449ed` (`main`); the change below is uncommitted |
| **Goal** | Store the visitor's own message in *FLE Leads → Website Leads*, new column K `Message`, via the existing `postToWebhook` → `CONTACT_WEBHOOK_URL` → Make.com scenario |
| **Status** | Website payload verified offline. Every payload now carries `message`. **Google Sheets storage is not confirmed:** the Make mapping in §5 still has to be done, then confirmed with one live test per form (§6). |

Related: [freshland-exports-form-audit.md](freshland-exports-form-audit.md), [freshland-exports-source-tracking.md](freshland-exports-source-tracking.md).

---

## 1. Findings: where each form's message comes from

| Form | Route(s) | Message field in the form | Required? | Sent as `message` before this change? |
|---|---|---|---|---|
| Homepage contact | `/` | `<textarea name="message">` (`contact-form.tsx`, compact layout) | Yes, 10–2000 chars | **Yes** |
| Contact page enquiry | `/contact` | `<textarea name="message">` (detailed layout) | Yes, 10–2000 chars | **Yes** |
| Product enquiry, business layout | `/products/moringa-powder`, `/products/red-chilli-powder` | `<textarea name="message">` "Tell us your required specifications…" | Optional; if given, 10–2000 chars | **Yes** (`""` when left blank) |
| Product enquiry, compact layout | the other 43 `/products/{slug}` pages | `<textarea name="message">`, pre-filled with an editable template, e.g. "I'd like a quote for Garlic.\nCompany: \nRequired quantity: \nPackaging preference: " | Yes, 10–2000 chars | **Yes** |
| Brochure download popup | every page (modal) | **None.** The popup collects no free text. | — | **No**: the payload had no `message` key |

**How the contact forms send it.** All four contact layouts use one component, `ContactForm`, and one Server Action, `submitContact`.
1. `readContact()` reads the textarea into `values.message`. It trims leading and trailing whitespace only; line breaks, punctuation and non-English text are kept (`src/components/forms/contact-schema.ts`).
2. `deliverEnquiry()` spreads every value into the webhook payload (`src/components/forms/contact-action.ts:52-57`).

So **every contact, `/contact` and product-enquiry payload already sent the visitor's actual message as `message`.** No mapping or renaming was needed for these forms. The same textarea was confirmed on all 47 rendered pages that have a form (§4).

**Product identification** is unchanged and separate from the message:
- `source` = `product_enquiry_{slug}` on every product page;
- `product` = the product name on the two business-layout pages (a hidden field set by the page);
- the message is never overwritten with a product name.

On the compact layout, any product text in the message is whatever the visitor submitted. That includes the pre-filled template if they left it in place, or their own wording if they replaced it.

---

## 2. Change made

| File | Change |
|---|---|
| `src/features/brochure/brochure-action.ts` | Adds `message: ""` to the `brochure_lead` payload, with a comment. The popup collects no message, so the key is sent empty. Nothing is invented, and no field was added to the popup. |

That is the only source change. Unchanged:
- every other field (`source`, `form_type`, `page_url`, name, company, email, phone, country, product / `productsInterested`, `buyerType`, quantity / `expectedQuantity`, `type`, `submittedAt`);
- validation, success and error messages, and brochure download behaviour;
- `webhook.ts` and `CONTACT_WEBHOOK_URL`.

**Why send an empty `message` for brochure leads.** With the key present in every payload, a single Make mapping `message → Message` works for all lead types. Brochure rows get a blank cell instead of a missing-field reference. The server builds the brochure payload from an explicit field list, so a `message` value posted to the brochure action by hand is ignored (verified in §4).

---

## 3. Example payloads

These were produced by the real Server Actions with `fetch` stubbed (§4). The host `example.test` and the contact details are test placeholders.

**Product enquiry, compact layout (visitor filled in the template)**
```json
{
  "type": "contact",
  "name": "Test Buyer", "company": "", "email": "buyer@example.test", "country": "", "phone": "",
  "product": "", "quantity": "",
  "message": "I'd like a quote for Garlic.\nCompany: Fresh Mart GmbH\nRequired quantity: 1 container\nPackaging preference: 10 kg mesh bags",
  "source": "product_enquiry_garlic", "form_type": "product_enquiry",
  "page_url": "https://example.test/products/garlic",
  "submittedAt": "<ISO-8601>"
}
```

**Homepage contact.** Same shape; the message is kept exactly, including line breaks:
```json
{ "type": "contact", "...": "...",
  "message": "Hello,\nWe need 2 MT of turmeric monthly.\nCan you ship to Hamburg? — Grüße, Jürgen 🌿",
  "source": "homepage_contact", "form_type": "contact", "page_url": "https://example.test/" }
```

**Brochure download**
```json
{
  "type": "brochure_lead",
  "name": "", "company": "", "email": "buyer@example.test", "phone": "+49 30 1234567", "country": "Germany",
  "productsInterested": ["Moringa Powder"], "buyerType": "Importer", "expectedQuantity": "",
  "message": "",
  "source": "footer_brochure", "form_type": "brochure_download",
  "page_url": "https://example.test/",
  "submittedAt": "<ISO-8601>"
}
```

---

## 4. Build and test results

The project has no test framework (its scripts are `typecheck`, `lint` and `build`), so the offline checks below were run as throwaway scripts outside `src/` and then deleted. No live form was submitted and no request reached the webhook: `fetch` was replaced by a stub, and `CONTACT_WEBHOOK_URL` was set to a dummy `.invalid` address.

| Check | Result |
|---|---|
| `npm run typecheck` | **Pass** (exit 0) |
| `npm run lint` | **Pass** (exit 0, no warnings) |
| `npm run build` (Next.js 16.4.0) | **Pass**: 283/283 static pages |
| Rendered HTML: every page with a form has `<textarea name="message">` | **47/47** (home, `/contact`, 45 product pages) |
| Offline payloads, `submitContact` (see cases below) | **All pass** |
| Offline payloads, `submitBrochureLead` | **Pass**: `message` is `""`, all existing keys present, a hand-posted `message` is ignored |
| Invalid message ("short", under 10 chars) | **Pass**: rejected, nothing sent |

`submitContact` cases tested:

| # | Case | Expected `message` | Other checks |
|---|---|---|---|
| 1 | Homepage, multi-line message with non-English text and an emoji | Delivered exactly | `source` correct; all existing keys present |
| 2 | `/contact` with `&`, `<` and quotes in the message | Delivered exactly | `product` = "Moringa Powder; Garlic" |
| 3 | Business product layout, message given | Delivered exactly | `product` kept |
| 4 | Business product layout, message left blank | `""` | `product` kept |
| 5 | Compact product layout, template filled in by the visitor | Delivered as typed, minus the trailing newline (trimmed) | — |
| 6 | Compact product layout, product text replaced by the visitor | The visitor's own text, unchanged | — |

**Secrets:** no new logging was added. No webhook URL or secret appears in code or test output.

---

## 5. Make.com mapping steps (manual; nothing was changed in Make or Sheets)

Scenario *Integration Webhooks, Google Sheets* → spreadsheet *FLE Leads* → worksheet *Website Leads*.

1. **Add the header.** In the sheet, type `Message` in **K1**. Columns A–J (Name … Submitted At) stay as they are.
2. **Refresh the sheet columns in Make.** Open the *Google Sheets → Add a row* module. With *Table contains headers* set to Yes, reload or refresh so that `Message (K)` appears among the column fields.
3. **Check the webhook's data structure.**
   - Contact payloads have always included `message`, so it should already be in the *Webhooks* module's data structure.
   - Brochure payloads include it only from this change.
   - If `message` is not offered in the mapping panel, choose **Redetermine data structure** on the *Webhooks* module and send one test submission from a preview deployment.
4. **Map** the webhook field `message` to `Message (K)`.
   - If the scenario has a router with separate routes or *Add a row* modules for `type = contact` and `type = brochure_lead`, map it on **each** of them. Brochure rows will be blank.
5. **Recommended: write values as plain text.** If the *Add a row* module offers *Value input option*, choose **Raw** rather than *User entered*. Otherwise a message starting with `=`, `+`, `-` or `@` could be interpreted by Google Sheets as a formula, and text such as a date may be reformatted.
   - The website sends the message unaltered on purpose. It does not prefix or escape the visitor's text.
   - The same applies to the other free-text columns (Name, Company).
6. **Save the scenario** and make sure it is switched on.

Line breaks in messages arrive as `\n` in JSON and are stored as multi-line cells; no extra Make formatting is needed. The website caps messages at 2,000 characters, well under Google Sheets' per-cell limit.

---

## 6. Verification still required

Message storage in Google Sheets is **not complete until a live test confirms it**. From a preview deployment with `CONTACT_WEBHOOK_URL` set, using an agreed test identity:

1. Submit the homepage form, the `/contact` form, `/products/moringa-powder` (with a message) and one compact product page, e.g. `/products/garlic`, each with a distinct multi-line message.
2. Download the brochure once.
3. In *Website Leads*, confirm:
   - column K holds each message exactly as typed;
   - the brochure row's K is blank;
   - columns A–J (including Source in I) are unchanged.
4. Delete the test rows.

---

## 7. Notes

- **Pre-filled template on compact product pages.** If a visitor submits without editing the template, the message contains that template text ("I'd like a quote for {Product}. Company: …"). This is the visitor's submitted text and is stored as-is. Because the template is longer than 10 characters, an unedited template also passes the minimum-length check. Changing the pre-fill (e.g. to a placeholder) is a separate UX decision and was not part of this task.
- **Product column.** The sheet's *Products Interested* column (F) receives `productsInterested` from brochure leads. Contact leads send their product as `product` (business layouts and `/contact` only). Map `product` to F on the contact route if that column should also show it for enquiries; this was not changed here.
