export const SITE = {
  name: "Truckers Legal Shield",
  shortName: "TLS",
  domain: "truckerslegalshield.com",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://truckerslegalshield.com").replace(/\/$/, ""),
  tagline: "Protect Your CDL. Protect Your Livelihood.",
  description:
    "Nationwide attorney network for CDL drivers facing traffic citations, serious violations, and license-threatening charges. Fast attorney dispatch in all 50 states.",
  // Update this to your real intake number. Used in tel: links and schema.
  phoneDisplay: "(702) 800-9999",
  phoneHref: "+17028009999",
  email: "intake@truckerslegalshield.com",
  // Used by LegalService / Organization schema. Replace with real details.
  address: {
    region: "Nationwide",
    country: "US"
  },
  social: {
    twitter: "@truckerslegalshield"
  }
} as const;

export const NAV = [
  { label: "CDL Defense", href: "/cdl-defense-services" },
  { label: "Serious Violations", href: "/serious-cdl-violations" },
  { label: "Find by State", href: "/cdl-ticket-lawyer" },
  { label: "Speed Traps", href: "/speed-trap-database" },
  { label: "Interstate Map", href: "/interstate-map" },
  { label: "Blog", href: "/blog" }
] as const;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE.url}${path.startsWith("/") ? "" : "/"}${path}`;
}
