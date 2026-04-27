# PCG Roofing — SEO Action Plan
**Site:** https://pcgroofing.net  
**Generated:** 2026-04-27  
**Current SEO Score:** 38/100 → Target: 75/100

---

## CRITICAL — Fix Immediately (Blocks Rankings)

### C-1. Replace All 7 Off-Topic Blog Posts
**Impact:** +12-18 SEO points | **Effort:** High | **Owner:** Content

All current blog posts are about software engineering — not roofing. They actively harm topical authority and E-E-A-T.

**Replace with roofing-relevant content:**

| New Blog Title | Target Keyword | Priority |
|----------------|---------------|---------|
| How to Tell If Your Roof Needs Repair or Full Replacement | roof repair vs replacement | 1 |
| Texas Hail Damage: What Homeowners Need to Know | hail damage roof Texas | 2 |
| How to File a Homeowner's Insurance Claim for Roof Damage | roofing insurance claim Texas | 3 |
| How Long Does a Roof Replacement Take in Texas? | roof replacement timeline Texas | 4 |
| 5 Signs Your Texas Roof Wasn't Installed Correctly | roof installation problems Texas | 5 |
| Asphalt Shingles vs. Metal Roofing: Which Is Right for Texas? | metal roof vs shingles Texas | 6 |
| What to Expect During a Free Roof Inspection | free roof inspection Texas | 7 |

**Implementation steps:**
1. Delete or redirect all 7 current off-topic blog posts to `/blogs` (301 redirect)
2. Update the sitemap to remove old URLs
3. Write and publish the 7 replacement articles (minimum 800 words each, with real roofing expertise, photos)
4. Add author bio with name + credentials to each post

---

### C-2. Fix Contact Page Canonical + Title + Meta Description
**Impact:** +5 SEO points | **Effort:** Low (1 hour) | **Owner:** Developer

**Problem:** `/contact` uses homepage's canonical, title, and meta — Google treats it as a duplicate.

**Fix in Next.js:** Create or update the contact page component to export its own metadata:

```typescript
// In the contact page component (in Builder.io or Next.js)
export const metadata = {
  title: "Contact PCG Roofing | Free Roof Inspection in Texas",
  description: "Get in touch with PCG Roofing for a free roof inspection in Texas. Call us or fill out the form — we respond within 24 hours. Licensed & insured Texas roofers.",
  alternates: {
    canonical: "https://pcgroofing.net/contact",
  },
  openGraph: {
    title: "Contact PCG Roofing | Free Roof Inspection",
    description: "Get a free roof inspection from Texas roofing experts. Call or message us today.",
    url: "https://pcgroofing.net/contact",
  },
};
```

Also add to the contact page:
- Full business address
- Real phone number (click-to-call `<a href="tel:+1...">`)
- Business hours
- Google Maps embed

---

### C-3. Fill In Schema Placeholder Data
**Impact:** +8 SEO points | **Effort:** Low (30 min) | **Owner:** Developer

**Problem:** The `RoofingContractor` schema on the homepage has all placeholder values. Google's Rich Results will reject it.

**Find this in the code and update:**
```json
{
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "PCG Roofing",
  "telephone": "+1-[REAL-PHONE-NUMBER]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[REAL STREET ADDRESS]",
    "addressLocality": "[REAL CITY]",
    "addressRegion": "TX",
    "postalCode": "[REAL ZIP]",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[REAL LATITUDE]",
    "longitude": "[REAL LONGITUDE]"
  }
}
```

**Also verify:**
- Facebook/Instagram/LinkedIn URLs in `sameAs` are real, active profiles
- `aggregateRating` of 4.9/150 must link to a verifiable source (Google, BBB, Yelp) — if not real, **remove it** (false ratings violate Google's guidelines)

---

### C-4. Create /services and /service-areas Pages
**Impact:** +10 SEO points | **Effort:** High | **Owner:** Developer + Content

Both pages return 404. These are the most important pages for local rankings.

**Priority order:**

**Phase 1 — Service Pages** (one per service, each 600+ words):
- `/services/roof-repair` — "Roof Repair in Texas"
- `/services/roof-replacement` — "Roof Replacement in Texas"  
- `/services/storm-damage-restoration` — "Storm Damage Roof Repair Texas"
- `/services/insurance-claims` — "Roofing Insurance Claims Assistance Texas"
- `/services` — Hub page linking to all the above

**Phase 2 — Location Pages** (one per city served):
- `/service-areas/san-antonio` — "Roofing Company in San Antonio TX"
- `/service-areas/austin` — "Roofing Company in Austin TX"
- `/service-areas/houston` — "Roofing Company in Houston TX"
- `/service-areas/[city]` — for each additional market

Each location page needs: city-specific content, local stats, embedded map, city-specific testimonials.

---

## HIGH — Fix Within 1 Week

### H-1. Fix About Page Incomplete Sentence
**Impact:** UX + E-E-A-T | **Effort:** 15 min

The about page renders: *"PCG Roofing proudly serves homeowners and businesses throughout [empty]..."*

Fix by adding actual service cities to the data that populates this template variable.

---

### H-2. Add Security Headers in netlify.toml
**Impact:** Page Experience score | **Effort:** 20 min | **Owner:** Developer

Add to `D:/PCG/PCG/netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=(self)"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' https://app.cal.com https://cdn.builder.io; style-src 'self' 'unsafe-inline'; img-src 'self' https://api.builder.io data:; connect-src 'self' https://api.builder.io;"
```

---

### H-3. Add FAQPage Schema to Homepage and Service Pages
**Impact:** Rich snippets in search | **Effort:** 2 hours | **Owner:** Developer + Content

FAQs that PCG Roofing should target:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does PCG Roofing offer free roof inspections?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, PCG Roofing offers free roof inspections for homeowners across Texas. Call us or use our online form to schedule."
      }
    },
    {
      "@type": "Question",
      "name": "Does PCG Roofing help with insurance claims?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we work directly with your insurance company to document damage, file the claim, and manage approvals so you don't have to."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a roof replacement take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most residential roof replacements in Texas are completed within 1-3 days depending on roof size and complexity."
      }
    },
    {
      "@type": "Question",
      "name": "Is PCG Roofing licensed and insured in Texas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, PCG Roofing is fully licensed and insured in the state of Texas, meeting all state contractor requirements."
      }
    }
  ]
}
```

---

### H-4. Add Google Business Profile (GBP) and Get Real Reviews
**Impact:** Local pack rankings | **Effort:** Medium | **Owner:** Business Owner

- Create/claim Google Business Profile at business.google.com
- Ensure NAP matches website exactly
- Add real photos of jobs, team, before/after
- Request reviews from past customers (direct review link)
- Link GBP to website; Google will verify the business

---

### H-5. Add Real Phone Number and Address Sitewide
**Impact:** NAP consistency, trust | **Effort:** Low

- Add real phone number to header navigation (click-to-call)
- Add real address and phone to footer
- Add to /contact page
- Must match schema exactly (character for character)

---

## MEDIUM — Fix Within 1 Month

### M-1. Preconnect to Builder.io CDN
**Impact:** Image load speed | **Effort:** 5 min | **Owner:** Developer

In `src/app/layout.tsx`, add to `<head>`:

```tsx
<link rel="preconnect" href="https://api.builder.io" />
<link rel="dns-prefetch" href="https://api.builder.io" />
```

---

### M-2. Create llms.txt for AI Search Engines
**Impact:** AI citation readiness | **Effort:** 15 min | **Owner:** Developer

Create `public/llms.txt`:

```
# PCG Roofing — llms.txt
# https://pcgroofing.net

PCG Roofing is a licensed and insured roofing contractor serving Texas homeowners
and businesses. Specializing in roof repair, roof replacement, storm damage restoration,
and insurance claims assistance. 15+ years of experience. Free inspections available.

## Services
- Roof Repair
- Roof Replacement
- Storm Damage Restoration
- Insurance Claims Assistance
- Emergency Roof Repair
- Free Roof Inspections

## Service Areas
Texas (San Antonio, Austin, Houston and surrounding areas)

## Contact
Phone: [REAL PHONE NUMBER]
Email: [REAL EMAIL]
Website: https://pcgroofing.net

## Pages
- Homepage: https://pcgroofing.net
- About: https://pcgroofing.net/about
- Services: https://pcgroofing.net/services
- Contact: https://pcgroofing.net/contact
- Blog: https://pcgroofing.net/blogs
```

---

### M-3. Add Article Schema to Blog Posts
**Impact:** Blog indexing signals | **Effort:** 2 hours | **Owner:** Developer

Once blog content is replaced with roofing topics, add `Article` schema to each post:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Tell If Your Roof Needs Repair or Replacement",
  "author": {
    "@type": "Person",
    "name": "[Author Name]",
    "jobTitle": "Roofing Expert"
  },
  "publisher": {
    "@type": "Organization",
    "name": "PCG Roofing",
    "logo": {
      "@type": "ImageObject",
      "url": "https://pcgroofing.net/logo.png"
    }
  },
  "datePublished": "2026-04-27",
  "dateModified": "2026-04-27"
}
```

---

### M-4. Migrate Builder.io Images from TEMP URLs
**Impact:** Image reliability | **Effort:** Medium | **Owner:** Developer + Content

All images are stored at `https://api.builder.io/api/v1/image/assets/TEMP/[hash]`. The `TEMP` path suggests these may be temporary uploads. 

**Action:**
1. Re-upload images through a permanent builder.io space or migrate to Netlify's own CDN
2. Use descriptive filenames before upload (e.g., `pcg-roofing-texas-team.jpg` not `d6ef8f1c47d8.jpg`)
3. This also helps with image search SEO (Google indexes image filenames)

---

### M-5. Add BreadcrumbList to All Pages
**Impact:** Rich results + site structure | **Effort:** 2 hours

Currently only /about has breadcrumb schema. Add to all pages:
- Homepage: Home
- /contact: Home > Contact
- /blogs: Home > Blog
- /blogs/[slug]: Home > Blog > [Post Title]
- /services/[service]: Home > Services > [Service Name]
- /service-areas/[city]: Home > Service Areas > [City]

---

### M-6. Improve TTFB (Target <200ms)
**Impact:** Core Web Vitals, rankings | **Effort:** Medium

Current TTFB is ~511ms — high for a CDN-cached Netlify deployment.

**Investigate:**
- Whether pages are being statically generated (`generateStaticParams`) or computed server-side on each request
- Builder.io API call latency — if builder.io is fetching content at request time, switch to ISR (Incremental Static Regeneration) with a revalidation period
- Enable Netlify's "On-demand Builders" or ensure static export is working

---

## LOW — Backlog

### L-1. Improve Alt Text on Logo
- Change: `alt="PCG Logo"` → `alt="PCG Roofing Texas — Licensed Roofing Contractor"`

### L-2. Add WebSite Schema with SearchAction
Add to homepage schema for sitelinks search box potential:
```json
{
  "@type": "WebSite",
  "url": "https://pcgroofing.net",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://pcgroofing.net/blogs?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

### L-3. Add ContactPage Schema to /contact
```json
{
  "@type": "ContactPage",
  "name": "Contact PCG Roofing",
  "url": "https://pcgroofing.net/contact"
}
```

### L-4. Remove Meta Keywords Tag
Not a ranking factor; remove to reduce HTML bloat slightly.

### L-5. Add security.txt
Create `public/.well-known/security.txt` for security researcher contact info.

### L-6. Submit Sitemap to Google Search Console
Once blog content is replaced and service pages are created, submit updated sitemap.xml.

---

## Score Projection by Phase

| Phase | Actions Completed | Estimated Score |
|-------|------------------|----------------|
| Current | None | 38/100 |
| After Critical fixes (C-1 to C-4) | Schema fixed, blog replaced, contact fixed, service pages built | ~58/100 |
| After High fixes (H-1 to H-5) | Security headers, FAQ schema, GBP verified, NAP consistent | ~68/100 |
| After Medium fixes (M-1 to M-6) | Performance improved, AI ready, image CDN stable | ~76/100 |
| After Low fixes (L-1 to L-6) | Full polish | ~80/100 |

---

## Implementation Roadmap

```
Week 1 (Critical):
  Day 1-2:  Fill in real phone/address/coordinates in schema (C-3)
  Day 2:    Fix contact page canonical + title + meta (C-2)
  Day 3:    Fix about page incomplete sentence (H-1)
  Day 3:    Add security headers to netlify.toml (H-2)
  Day 4-7:  Begin replacing blog content — at least 3 of 7 posts (C-1)

Week 2-3 (High):
  Day 8-14: Complete blog replacement (7/7 posts)
  Day 10:   Create /services hub page and 4 service sub-pages (C-4)
  Day 12:   Add FAQ schema to homepage (H-3)
  Day 14:   Setup Google Business Profile (H-4)

Week 3-4 (Medium):
  Day 15-16: Create /service-areas hub + 3 city landing pages
  Day 17:    Create llms.txt (M-2)
  Day 18:    Add preconnect headers (M-1)
  Day 19-21: Add Article schema to blog posts (M-3)
  Day 22-25: Investigate TTFB / static rendering (M-6)
  Day 26-28: Migrate TEMP image URLs (M-4)

Month 2 (Low + Ongoing):
  - Submit sitemap to GSC
  - Monitor Core Web Vitals
  - Publish 1 roofing blog post per week
  - Collect real Google reviews
  - Build local citations (BBB, Yelp, Angi, HomeAdvisor)
```

---

*Action plan generated by Claude SEO Audit Agent | pcgroofing.net | 2026-04-27*
