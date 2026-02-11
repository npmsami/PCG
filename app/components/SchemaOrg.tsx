'use client';

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "PCG Roofing",
    "image": "https://pcgroofing.net/logo.png",
    "url": "https://pcgroofing.net",
    "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "City",
      "addressRegion": "TX",
      "postalCode": "XXXXX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "XX.XXXX", // Replace with actual coordinates
      "longitude": "-XX.XXXX"
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
      "https://www.facebook.com/pcgroofing",
      "https://www.instagram.com/pcgroofing",
      "https://www.linkedin.com/company/pcgroofing"
    ],
    "areaServed": {
      "@type": "State",
      "name": "Texas"
    },
    "serviceType": [
      "Roof Repair",
      "Roof Replacement",
      "Storm Damage Restoration",
      "Insurance Claims Assistance",
      "Emergency Roof Repair",
      "Roof Inspection"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
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
  slug,
  readTime 
}: { 
  title: string;
  description: string;
  publishDate: string;
  slug: string;
  readTime: number;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": `https://pcgroofing.net/blogs/${slug}`,
    "datePublished": publishDate,
    "dateModified": publishDate,
    "author": {
      "@type": "Organization",
      "name": "PCG Roofing"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PCG Roofing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pcgroofing.net/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://pcgroofing.net/blogs/${slug}`
    },
    "wordCount": readTime * 200, // Approximate
    "articleBody": description
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
