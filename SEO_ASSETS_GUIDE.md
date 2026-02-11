# SEO Assets Guide for PCG Roofing

## Required Image Assets

To complete the SEO optimization, you need to add these image files to your project:

### 1. Favicon
- **Location:** `public/favicon.ico`
- **Size:** 32x32 pixels or 16x16 pixels
- **Format:** ICO format
- **Tool:** Use https://favicon.io/ to generate from logo

### 2. Apple Touch Icon
- **Location:** `public/apple-touch-icon.png`
- **Size:** 180x180 pixels
- **Format:** PNG
- **Purpose:** iOS home screen icon

### 3. Open Graph Image (Social Media Preview)
- **Location:** `public/og-image.jpg`
- **Size:** 1200x630 pixels
- **Format:** JPG or PNG
- **Content:** Company logo + tagline + visuals
- **Tool:** Use Canva or https://www.opengraph.xyz/

### 4. Logo
- **Location:** `public/logo.png`
- **Size:** 500x500 pixels (or larger)
- **Format:** PNG with transparent background
- **Purpose:** Schema markup and general branding

## How to Add These Files

1. **Create the images** using design tools or online generators
2. **Place them** in the `public` folder with the exact names above
3. **Update metadata** in `app/layout.tsx` if URLs change
4. **Test** social media previews using:
   - Facebook Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

## Schema Markup - Update Required Info

Open `app/components/SchemaOrg.tsx` and replace placeholder data:

- **telephone:** Add your actual phone number
- **streetAddress:** Your business address
- **addressLocality:** City name
- **postalCode:** ZIP code
- **geo coordinates:** Get from Google Maps
- **sameAs URLs:** Add your actual social media profile URLs
- **aggregateRating:** Update with real ratings if you have them

## Google Search Console Setup

1. Go to https://search.google.com/search-console
2. Add property: pcgroofing.net
3. Copy verification code
4. Add to `app/layout.tsx` in metadata.verification.google
5. Verify ownership
6. Submit sitemap: https://pcgroofing.net/sitemap.xml
