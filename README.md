# Truckers Legal Shield

A production-ready, SEO-oriented marketing and lead-generation site for **TruckersLegalShield.com** — a nationwide CDL defense platform that connects commercial drivers with attorneys for traffic citations, serious CDL violations, and license-threatening charges.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**. Static-first, minimal JavaScript, and Vercel-ready.

---

## Tech stack

- **Next.js 14** App Router (static-first, server components by default)
- **TypeScript**
- **Tailwind CSS** (custom navy / charcoal / highway-yellow theme)
- **schema.org JSON-LD**: Organization/LegalService, WebSite, Breadcrumb, FAQ, BlogPosting
- Generated `sitemap.xml` and `robots.txt`
- Per-page metadata, Open Graph, Twitter cards, canonical URLs
- No heavy map or UI libraries — the interstate map is a hand-built SVG

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server (http://localhost:3000)
npm run dev

# 3. Production build
npm run build

# 4. Run the production build locally
npm run start
```

### Environment variables

Copy `.env.example` to `.env.local` and adjust:

```bash
cp .env.example .env.local
```

| Variable               | Purpose                                                                 |
| ---------------------- | ----------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site origin used for canonical tags, sitemap, and OG URLs.    |
| `LEAD_WEBHOOK_URL`     | Optional. If set, lead submissions are POSTed here (CRM/Zapier/webhook).|

---

## Project structure

```
app/
  layout.tsx                 Root layout: header, footer, sticky CTA, global schema
  page.tsx                   Home
  cdl-defense-services/      Services index + [slug] detail pages
  serious-cdl-violations/    Serious-violations SEO page
  cdl-ticket-lawyer/         State index + [state] landing pages (50 states + D.C.)
  speed-trap-database/       Searchable/filterable speed trap database
  interstate-map/            SVG interstate coverage map
  blog/                      Blog index + [slug] articles
  get-help/                  Lead capture page
  disclaimer/                Legal disclaimers
  api/lead/route.ts          Lead intake handler (local store + optional webhook)
  sitemap.ts / robots.ts     SEO infrastructure
  icon.svg                   Favicon
components/                  Reusable UI (Header, Footer, LeadForm, FAQ, maps, etc.)
lib/                         Data + helpers (states, services, speed-traps, blog, seo)
public/og.svg                Open Graph image
```

---

## Where to edit content

### Speed trap data
**File:** `lib/speed-traps.ts`

Each entry is a `SpeedTrap` object:

```ts
{
  id: "i95-va-emporia",          // unique slug
  state: "VA",                    // 2-letter abbreviation
  highway: "I-95",                // must match the "I-XX" format
  area: "MM 11–18",               // mile marker or segment
  nearby: "Emporia / Greensville County",
  issue: "Strict speed enforcement",
  notes: "Well-known reduced-speed enforcement zone.",
  updated: "2026-04-18"           // ISO date (Last updated)
}
```

Add or edit entries in the `SPEED_TRAPS` array. Filters, counts, the interstate
map, and per-state tables update automatically. To add a new corridor to the
interstate map, also add it to the `NS` or `EW` arrays in
`components/InterstateMap.tsx`.

### State page content
**File:** `lib/states.ts`

Each state is a `StateInfo` object (name, slug, abbr, capital, `corridors`,
`cities`). The page template lives at
`app/cdl-ticket-lawyer/[state]/page.tsx` and pulls intro copy, common
violations, court/process overview, corridors, FAQ, and matching speed traps
from this data. Edit the template to change shared copy; edit `lib/states.ts`
to change per-state facts.

### Services
**File:** `lib/services.ts` — citation types, consequences, defenses, and FAQs.
Template: `app/cdl-defense-services/[slug]/page.tsx`.

### Blog posts
**File:** `lib/blog.ts` — each post uses typed content blocks (`h2`, `p`, `ul`)
that render to clean semantic HTML. Add an object to `POSTS`.

### Global copy, nav, phone number
**File:** `lib/site.ts` — site name, phone (`phoneDisplay` / `phoneHref`),
email, and the primary navigation array.

---

## Connecting the lead form to a CRM

The intake form (`components/LeadForm.tsx`) POSTs JSON to `app/api/lead/route.ts`.

Out of the box the handler:

1. Validates required fields and consent.
2. If `LEAD_WEBHOOK_URL` is set, **forwards the full lead payload** to that URL.
3. Otherwise appends the lead to `data/leads.json` (local, gitignored).

To connect a CRM:

- **Zapier / Make:** create a "Catch Hook", paste its URL into `LEAD_WEBHOOK_URL`.
- **HubSpot / Salesforce / custom API:** point `LEAD_WEBHOOK_URL` at an inbound
  endpoint, or replace the `fetch(webhook, …)` block in `route.ts` with your
  SDK call.

> Note: On serverless/read-only hosts (including Vercel) the local
> `data/leads.json` fallback may not persist. **Set `LEAD_WEBHOOK_URL` in
> production** so no lead is lost.

The citation file upload is a placeholder input and is **not** transmitted in
this build — wire it to your storage provider (e.g. S3 presigned upload or
Vercel Blob) when ready.

---

## Deploying to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel, **New Project → Import** the repo. Framework preset auto-detects
   **Next.js**.
3. Add environment variables (`NEXT_PUBLIC_SITE_URL`, optionally
   `LEAD_WEBHOOK_URL`) under **Project → Settings → Environment Variables**.
4. Deploy. `vercel.json` adds sensible security headers.
5. Add your custom domain (`truckerslegalshield.com`) and update
   `NEXT_PUBLIC_SITE_URL` to match so canonical URLs, the sitemap, and OG tags
   are correct.

CLI alternative:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

---

## SEO checklist (implemented)

- Unique `<title>` + meta description per page
- Canonical URLs, Open Graph, and Twitter cards
- Local-SEO structure for 50 states + D.C. with LegalService schema
- FAQ, Breadcrumb, and BlogPosting JSON-LD
- Internal linking between services, states, serious violations, and speed traps
- `sitemap.xml` + `robots.txt`
- Semantic HTML, accessible headings, skip link, focus styles
- Static-first rendering and minimal client JS for fast Core Web Vitals

---

## Legal

All content is general information, not legal advice. Truckers Legal Shield is
not a law firm unless expressly stated in a specific jurisdiction. See
`/disclaimer` and the site footer for the full notices. Update the disclaimers
and the business phone/email in `lib/site.ts` before going live.
