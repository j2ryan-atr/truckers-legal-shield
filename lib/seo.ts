import type { Metadata } from "next";
import { SITE, absoluteUrl } from "./site";

type BuildMetaArgs = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
  publishedTime
}: BuildMetaArgs): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE.name,
      type,
      locale: "en_US",
      ...(publishedTime ? { publishedTime } : {}),
      images: [
        {
          url: absoluteUrl("/og.svg"),
          width: 1200,
          height: 630,
          alt: SITE.tagline
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/og.svg")]
    }
  };
}

/* ---------- schema.org JSON-LD builders ---------- */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    telephone: SITE.phoneHref,
    email: SITE.email,
    areaServed: { "@type": "Country", name: "United States" },
    priceRange: "$$",
    serviceType: "CDL traffic citation and license defense referral",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US"
    },
    sameAs: [`https://twitter.com/${SITE.social.twitter.replace("@", "")}`]
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": `${SITE.url}/#organization` }
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer }
    }))
  };
}

export function blogPostingSchema(args: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: args.title,
    description: args.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(args.path) },
    datePublished: args.datePublished,
    dateModified: args.dateModified || args.datePublished,
    author: { "@type": "Organization", name: args.author || SITE.name },
    publisher: { "@id": `${SITE.url}/#organization` }
  };
}

export function legalServiceForState(stateName: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${SITE.name} — CDL Ticket Defense in ${stateName}`,
    url: absoluteUrl(path),
    description: `CDL ticket and traffic citation defense attorney network serving commercial drivers in ${stateName}.`,
    telephone: SITE.phoneHref,
    areaServed: { "@type": "State", name: stateName },
    parentOrganization: { "@id": `${SITE.url}/#organization` }
  };
}
