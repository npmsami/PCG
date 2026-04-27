# PCG Roofing — Full SEO Audit Report
**URL:** https://pcgroofing.net  
**Audit Date:** 2026-04-27  
**Business Type:** Local Service Business — Roofing Contractor (Texas)  
**Platform:** Next.js / Netlify / Builder.io CMS  
**Auditor:** Claude SEO Audit (claude-sonnet-4-6)

---

## Overall SEO Health Score: **38 / 100** ⚠️

| Category | Score | Weight | Weighted |
|----------|-------|--------|---------|
| Technical SEO | 52/100 | 22% | 11.4 |
| Content Quality | 22/100 | 23% | 5.1 |
| On-Page SEO | 48/100 | 20% | 9.6 |
| Schema / Structured Data | 30/100 | 10% | 3.0 |
| Performance (CWV) | 58/100 | 10% | 5.8 |
| AI Search Readiness | 15/100 | 10% | 1.5 |
| Images | 75/100 | 5% | 3.75 |
| **TOTAL** | | | **40.15 → 38/100** |

> Score held back primarily by: off-topic blog content, placeholder schema data, missing service pages (404), and no contact page canonical.

---

## Executive Summary

PCG Roofing has a functional website with solid homepage meta tags and a basic schema implementation, but is undermined by **critical structural and content problems** that actively harm search performance. The most damaging issues are:

1. **All 7 blog posts are about tech topics** (cloud infrastructure, AI workflows, software engineering) — not roofing. This destroys E-E-A-T and topical authority.
2. **Schema structured data contains placeholder values** — phone, address, city, ZIP, and GPS coordinates are all dummy text ("+1-XXX-XXX-XXXX", "Your Street Address", "XXXXX").
3. **Contact page has no canonical URL** — it inherits the homepage's canonical, causing Google to treat /contact as a duplicate of the homepage.
4. **/services and /service-areas pages return 404** — critical pages for a local service business are completely missing.
5. **About page has an incomplete sentence** — "PCG Roofing proudly serves homeowners and businesses throughout [blank]" — the city list is empty.

---

## 1. Technical SEO (52/100)

### ✅ Passing

| Item | Status |
|------|--------|
| HTTPS enforced (HTTP → 301 redirect) | ✅ PASS |
| robots.txt present and configured | ✅ PASS |
| sitemap.xml present | ✅ PASS |
| Canonical tag on homepage | ✅ PASS |
| Canonical tag on /about | ✅ PASS |
| Canonical tag on /blogs | ✅ PASS |
| X-Content-Type-Options: nosniff | ✅ PASS |
| Strict-Transport-Security | ✅ PASS (max-age=31536000) |
| Server-side rendering (Next.js SSR/SSG) | ✅ PASS |
| Netlify CDN (edge caching) | ✅ PASS |

### ❌ Failing

#### CRITICAL: Contact page missing canonical URL
- **URL:** https://pcgroofing.net/contact
- The `/contact` page renders `<link rel="canonical" href="https://pcgroofing.net"/>` (pointing to homepage)
- Google will treat /contact as a duplicate of the homepage and may not index it separately
- **Fix:** Add page-specific metadata to the contact page component

#### CRITICAL: /services returns 404
- **URL:** https://pcgroofing.net/services → HTTP 404
- A roofing company's most important page does not exist
- Google cannot index service offerings as separate rankable pages

#### CRITICAL: /service-areas returns 404
- **URL:** https://pcgroofing.net/service-areas → HTTP 404
- Local service businesses need geo-targeted landing pages to rank for "[city] + roofer" queries

#### HIGH: Missing security headers
- `Content-Security-Policy` — **MISSING**
- `X-Frame-Options` — **MISSING**
- `X-XSS-Protection` — **MISSING**
- `Referrer-Policy` — **MISSING**
- `Permissions-Policy` — **MISSING**
- These affect Google's Page Experience signals and security trust

#### HIGH: Sitemap contains off-topic URLs
- `/blogs/the-future-of-cloud-infrastructure`
- `/blogs/ai-driven-automation-transforming-workflows`
- `/blogs/building-scalable-product-architecture`
- `/blogs/security-best-practices-for-modern-applications`
- `/blogs/engineering-practices-that-scale`
- `/blogs/launching-new-features-effectively`
- `/blogs/january-product-updates-2024`
- Submitting these to Google Search Console will confuse crawl budget on irrelevant tech content

#### MEDIUM: /services and /service-areas not in sitemap
- Missing pages that should exist are also absent from sitemap (compounding the 404 problem)

#### MEDIUM: Sitemap lastmod dates are 2024
- Blog posts all show `2024-01-xx` last modified dates
- Homepage shows `2026-04-23` (correct)

#### LOW: No llms.txt file
- `https://pcgroofing.net/llms.txt` → 404
- Emerging standard for AI crawler optimization

#### LOW: No security.txt
- `https://pcgroofing.net/.well-known/security.txt` → 404

---

## 2. Content Quality (22/100)

### CRITICAL: All blog content is off-topic for a roofing company

Every single blog post on pcgroofing.net covers **software engineering and tech startup topics**, not roofing:

| URL | Topic | Relevant to Roofing? |
|-----|-------|---------------------|
| /blogs/the-future-of-cloud-infrastructure | Cloud computing trends | ❌ NO |
| /blogs/ai-driven-automation-transforming-workflows | AI/ML automation | ❌ NO |
| /blogs/building-scalable-product-architecture | Software architecture | ❌ NO |
| /blogs/security-best-practices-for-modern-applications | App security | ❌ NO |
| /blogs/engineering-practices-that-scale | Dev team practices | ❌ NO |
| /blogs/launching-new-features-effectively | Product launches | ❌ NO |
| /blogs/january-product-updates-2024 | Software product updates | ❌ NO |

**Impact:** Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals require topical consistency. A roofing company publishing tech blogs:
- Signals no topical authority in roofing
- Confuses search intent (user searches for roofing tips, finds software content)
- May trigger a "quality review" penalty
- Wastes crawl budget on content that will never rank for roofing queries

These appear to be **leftover demo/template content** from a tech startup template that was repurposed for PCG Roofing. All 7 posts must be replaced.

### HIGH: About page has an incomplete sentence

The /about page contains: *"PCG Roofing proudly serves homeowners and businesses throughout [empty], including major metro areas and surrounding communities."*

The city/region list is missing from the data. This looks broken and unprofessional.

### HIGH: No dedicated service pages with informational content

There is no content explaining individual services in depth:
- No page for: "Roof Repair", "Roof Replacement", "Storm Damage Restoration", "Insurance Claims"
- No FAQ content per service
- No before/after content or case studies
- This limits ranking for high-intent keywords like "roof repair Texas" or "storm damage roof replacement"

### HIGH: Thin contact page

The /contact page contains only:
- A headline
- 2-sentence description
- Email and phone fields
- Submit button

No address, no map, no hours, no alternate contact methods — this hurts Local SEO and E-E-A-T.

### MEDIUM: No author attribution on blog posts

Blog posts lack author names, author bios, publication dates visible on page, or credentials. Google's Helpful Content guidelines specifically require demonstrable first-hand experience for YMYL-adjacent (Your Money/Your Life) topics like home services.

### MEDIUM: Testimonials lack verifiable sources

Homepage shows testimonials from "Maria", "Ken", and "John" from San Antonio but:
- No last names
- No links to Google/BBB/Yelp reviews
- No review dates
- Schema shows 4.9 rating / 150 reviews but no verifiable platform source

---

## 3. On-Page SEO (48/100)

### ✅ Homepage — Good

| Element | Value | Assessment |
|---------|-------|------------|
| Title | `PCG Roofing - Texas Roofing Experts \| Roof Repair & Replacement` | ✅ 66 chars — optimal |
| Meta Description | `Professional roofing services in Texas. 15+ years experience in roof repair, roof replacement, storm damage restoration, and insurance claims assistance. Free inspections. Call today!` | ✅ 185 chars — includes CTA |
| H1 | Present (1 per page) | ✅ PASS |
| OG Title | `PCG Roofing - Texas Roofing Experts` | ✅ PASS |
| OG Description | Present | ✅ PASS |
| OG Image | `/og-image.jpg` (1200×630) | ✅ PASS |
| Twitter Card | `summary_large_image` | ✅ PASS |
| Canonical | `https://pcgroofing.net` | ✅ PASS |
| Keywords meta tag | Present (roofing, texas, storm, etc.) | ℹ️ Low impact but harmless |

### ❌ Issues Found

#### CRITICAL: Contact page duplicates homepage title + meta
- **Title:** `PCG Roofing - Texas Roofing Experts | Roof Repair & Replacement` (identical to homepage)
- **Meta Desc:** Identical to homepage
- **Canonical:** Points to homepage (https://pcgroofing.net)
- Google sees /contact as a pure duplicate of the homepage

#### HIGH: Blog posts have no H2 tags
- All blog post pages checked: 0 `<h2>` tags found
- Content hierarchy is flat — poor for readability and keyword targeting

#### HIGH: Blogs page title is good but blog post titles are misleading
- `The Future of Cloud Infrastructure | PCG Roofing Blog` — a roofing company should not rank for cloud computing

#### MEDIUM: No breadcrumbs rendered on homepage or contact
- /about has BreadcrumbList schema ✅
- Homepage, /contact, blog posts: no breadcrumb navigation

#### MEDIUM: Internal linking is extremely thin
- Homepage HTML contains only **1 internal link**: `/contact`
- Navigation links are JavaScript-rendered, which is fine for Next.js, but no in-content links to service pages, location pages, or related blog posts
- Services 404s mean there are no service pages to link to

#### LOW: Meta keywords tag present
- Not a ranking factor, but adds minor page bloat

---

## 4. Schema / Structured Data (30/100)

### Schema Present
- `RoofingContractor` on homepage ✅ (correct type)
- `BreadcrumbList` on /about ✅

### CRITICAL: Schema contains placeholder data

The `RoofingContractor` schema on the homepage has the following **unfilled template values**:

```json
{
  "telephone": "+1-XXX-XXX-XXXX",
  "address": {
    "streetAddress": "Your Street Address",
    "addressLocality": "City",
    "postalCode": "XXXXX"
  },
  "geo": {
    "latitude": "XX.XXXX",
    "longitude": "-XX.XXXX"
  }
}
```

Google's Rich Results Test will **reject** this schema because:
- The phone number is not a real E.164 format number
- The address contains literal placeholder strings
- Coordinates are invalid

This means the business gets **zero benefit** from having schema despite it being coded.

Also in the schema:
- `sameAs` links to `/pcgroofing` on Facebook/Instagram/LinkedIn — these may be placeholder or unverified social profiles
- `aggregateRating`: `4.9` / `150 reviews` — if not sourced from a real platform (Google, Yelp, BBB), this can violate Google's schema guidelines

### HIGH: Missing schema types for local service business

| Schema Type | Status | Impact |
|-------------|--------|--------|
| LocalBusiness (or RoofingContractor) | ✅ Present but broken | Needs real data |
| BreadcrumbList | ✅ on /about only | Add to all pages |
| FAQPage | ❌ Missing | High for local search |
| Service | ❌ Missing | One per service type |
| Review | ❌ Missing | Real reviews needed |
| WebSite + SearchAction | ❌ Missing | Sitelinks search box |
| Article | ❌ Missing on blog posts | Needed for news/blog indexing |
| ContactPage | ❌ Missing | Improves contact discoverability |

---

## 5. Performance / Core Web Vitals (58/100)

*Note: Lab measurements only — no field data (CrUX) available without Google Search Console access.*

| Metric | Measured | Assessment |
|--------|----------|------------|
| Time to First Byte (TTFB) | ~511ms (homepage), ~462ms (contact) | ⚠️ Slow — target <200ms |
| SSL Handshake time | ~277ms | ⚠️ High — check TLS config |
| DNS Lookup | ~40ms | ✅ Fast |
| Netlify Edge Cache | HIT on repeat requests | ✅ CDN working |
| Next.js SSR/SSG | Server-side rendered | ✅ Good for SEO |

### Issues
- **TTFB 511ms** — For a CDN-cached Netlify deployment, 511ms TTFB is higher than expected. This suggests possible server-side computation on each request rather than pure static rendering.
- **Multiple JS chunks loading async** — 8+ JavaScript chunks on page load; Next.js code splitting is working but the sum is large.
- **Images served via Builder.io CDN** with `TEMP` URLs — these depend on builder.io's uptime. If builder.io CDN is slow, images will be slow.
- **No explicit `<link rel="preconnect">` for builder.io CDN** — 3rd party image domain not preconnected.

---

## 6. Images (75/100)

### ✅ Good
- Most images have descriptive alt text:
  - "Step 1: Free Roof Inspection" ✅
  - "PCG Roofing professionals discussing with homeowner" ✅
  - "Roofing Repairs", "Roof Replacements", "Roofing Insurance Claims" ✅
  - Testimonial avatars have contextual alt text ✅
- Next.js `<Image>` component used — automatic WebP conversion and srcSet
- Lazy loading implemented (`loading="lazy"` on below-fold images)
- `fetchPriority="high"` on logo (LCP candidate) ✅

### ❌ Issues
- **Images use Builder.io `TEMP` URLs** — these are temporary asset paths; if the builder.io project is rebuilt or assets re-uploaded, all image URLs will break, causing 404 images site-wide.
- **No `<link rel="preconnect" href="https://api.builder.io">` in `<head>`** — causes extra DNS lookup delay for the first image
- **Logo image alt text generic** — "PCG Logo" could be "PCG Roofing Texas Logo" for slight keyword signal

---

## 7. AI Search Readiness (15/100)

| Check | Status |
|-------|--------|
| llms.txt present | ❌ 404 |
| Robots.txt allows AI crawlers | ✅ (allows all) |
| Citability: NAP data structured | ❌ Placeholder data |
| Citability: Real phone/address | ❌ Missing |
| Content: Answers common questions | ❌ No FAQ pages |
| Content: Topically authoritative | ❌ Off-topic blogs undermine this |
| Citation signals: Reviews w/ sources | ❌ Unverifiable testimonials |
| Knowledge panel signals | ❌ No verified Google Business Profile signals |
| Author expertise signals | ❌ No named experts, credentials |

**AI search engines (ChatGPT, Perplexity, Gemini) cite businesses that:**
1. Have consistent, real NAP data across web — PCG fails this (placeholder schema)
2. Have authoritative content that answers questions — PCG has zero roofing-focused content on its blog
3. Have verified reviews on major platforms — PCG has no verifiable review sources
4. Have an llms.txt file guiding AI crawlers — PCG has none

---

## 8. Local SEO (35/100)

| Factor | Status |
|--------|--------|
| Business Name Consistent | ✅ "PCG Roofing" throughout |
| Phone Number (NAP) | ❌ Placeholder "+1-XXX-XXX-XXXX" |
| Address (NAP) | ❌ Placeholder "Your Street Address" |
| City/State (NAP) | ❌ City is "City", State is TX |
| Schema areaServed | ⚠️ "Texas" (too broad — not city-specific) |
| Google Business Profile | ❌ Unverifiable from site |
| City-specific landing pages | ❌ /service-areas returns 404 |
| Local reviews cited | ❌ None (unverifiable testimonials) |
| Local backlinks | ❌ Unknown — no backlink data |
| NAP in footer/contact | ❌ Contact page has no address |

The most damaging issue for local rankings: **There is no actual phone number or address anywhere on the website or in the schema.** Google Maps and local pack rankings require verified, consistent NAP (Name, Address, Phone) data.

---

## Pages Crawled Summary

| URL | Status | Canonical OK | Title Unique | Meta Desc Unique |
|-----|--------|-------------|-------------|-----------------|
| / (homepage) | 200 ✅ | ✅ | ✅ | ✅ |
| /about | 200 ✅ | ✅ | ✅ | ✅ |
| /contact | 200 ✅ | ❌ (→ homepage) | ❌ (= homepage) | ❌ (= homepage) |
| /blogs | 200 ✅ | ✅ | ✅ | ✅ |
| /blogs/the-future-of-cloud-infrastructure | 200 ✅ | ✅ | Off-topic ❌ | Off-topic ❌ |
| /blogs/ai-driven-automation-transforming-workflows | 200 ✅ | ✅ | Off-topic ❌ | Off-topic ❌ |
| /blogs/building-scalable-product-architecture | 200 ✅ | ✅ | Off-topic ❌ | Off-topic ❌ |
| /blogs/security-best-practices-for-modern-applications | 200 ✅ | ✅ | Off-topic ❌ | Off-topic ❌ |
| /blogs/engineering-practices-that-scale | 200 ✅ | ✅ | Off-topic ❌ | Off-topic ❌ |
| /blogs/launching-new-features-effectively | 200 ✅ | ✅ | Off-topic ❌ | Off-topic ❌ |
| /blogs/january-product-updates-2024 | 200 ✅ | ✅ | Off-topic ❌ | Off-topic ❌ |
| /services | 404 ❌ | — | — | — |
| /service-areas | 404 ❌ | — | — | — |
| /llms.txt | 404 ❌ | — | — | — |
| /og-image.jpg | Unverified | — | — | — |
| /logo.png | Unverified | — | — | — |

---

## Top 5 Quick Wins (Low Effort, High Impact)

1. **Fix schema placeholder data** — Update phone number, address, city, ZIP, GPS coordinates in the RoofingContractor schema. Takes 30 minutes; unlocks Google Rich Results immediately.
2. **Fix /contact page canonical + title + meta** — Add a Contact page metadata export in Next.js. Takes 1 hour.
3. **Add missing security headers in netlify.toml** — 4 headers, 20 minutes of config. Improves Page Experience score.
4. **Add `<link rel="preconnect">` for builder.io** — 5-minute fix in `layout.tsx`. Speeds up image load.
5. **Create llms.txt** — One static text file; takes 15 minutes. Boosts AI search readiness.

---

*Audit generated by Claude SEO Audit Agent | pcgroofing.net | 2026-04-27*
