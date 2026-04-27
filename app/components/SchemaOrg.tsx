'use client';

// ─── IMPORTANT: Fill in the TODO values below before going live ───────────────
// These are used by Google's Rich Results and local search rankings.
// Placeholder/fake data will cause schema to be rejected by Google.

const BUSINESS_INFO = {
  telephone: '+1-TODO-PHONE-NUMBER',   // e.g. "+12105550100"
  streetAddress: 'TODO Street Address', // e.g. "123 Main St"
  addressLocality: 'San Antonio',       // City — update if different
  postalCode: 'TODO-ZIP',              // e.g. "78201"
  latitude: 29.4241,                   // San Antonio default — update to exact office location
  longitude: -98.4936,                 // San Antonio default — update to exact office location
  facebookUrl: 'https://www.facebook.com/yourtrueroofingexperts',
  instagramUrl: 'https://www.instagram.com/pcgroofing',
};

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "RoofingContractor"],
    "name": "PCG Contractors",
    "image": "https://pcgroofing.net/logo.png",
    "url": "https://pcgroofing.net",
    "telephone": BUSINESS_INFO.telephone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.streetAddress,
      "addressLocality": BUSINESS_INFO.addressLocality,
      "addressRegion": "TX",
      "postalCode": BUSINESS_INFO.postalCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.latitude,
      "longitude": BUSINESS_INFO.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      BUSINESS_INFO.facebookUrl,
      BUSINESS_INFO.instagramUrl,
    ],
    "areaServed": [
      { "@type": "City", "name": "San Antonio", "containedInPlace": { "@type": "State", "name": "Texas" } },
      { "@type": "City", "name": "Austin", "containedInPlace": { "@type": "State", "name": "Texas" } },
      { "@type": "City", "name": "Houston", "containedInPlace": { "@type": "State", "name": "Texas" } },
      { "@type": "City", "name": "New Braunfels", "containedInPlace": { "@type": "State", "name": "Texas" } },
      { "@type": "City", "name": "Seguin", "containedInPlace": { "@type": "State", "name": "Texas" } },
    ],
    "description": "PCG Contractors is a licensed and insured Texas home repair and restoration company. We provide roofing, exterior and interior repairs, storm damage restoration, emergency protection, and insurance claim documentation assistance.",
    "serviceType": [
      "Roof Repair",
      "Roofing and Exterior Restoration",
      "Exterior Home Repairs",
      "Interior Home Repairs",
      "Storm Damage Restoration",
      "Insurance Claim Assistance",
      "Emergency Storm Damage Repairs",
      "Emergency Tarping and Protection",
      "Free Home Inspection"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Home Repair and Restoration Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Free Home Inspection" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Repairs" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roofing and Exterior Restoration" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Home Repairs" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Home Repairs" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Storm Damage Repairs" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Insurance Claim Assistance" } },
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PCG Contractors",
    "url": "https://pcgroofing.net",
    "description": "PCG Contractors helps Texas homeowners with roofing, exterior repairs, interior repairs, storm damage restoration, and insurance claim support.",
    "publisher": {
      "@type": "Organization",
      "name": "PCG Contractors",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pcgroofing.net/logo.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ items }: { items: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  publishDate,
  modifiedDate,
  slug,
  readTime,
  authorName,
}: {
  title: string;
  description: string;
  publishDate: string;
  modifiedDate?: string;
  slug: string;
  readTime: number;
  authorName?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": `https://pcgroofing.net/blogs/${slug}`,
    "datePublished": publishDate,
    "dateModified": modifiedDate ?? publishDate,
    "author": {
      "@type": authorName ? "Person" : "Organization",
      "name": authorName ?? "PCG Contractors",
    },
    "publisher": {
      "@type": "Organization",
      "name": "PCG Contractors",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pcgroofing.net/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://pcgroofing.net/blogs/${slug}`
    },
    "wordCount": readTime * 200,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
