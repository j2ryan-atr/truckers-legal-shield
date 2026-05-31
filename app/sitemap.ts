import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { STATE_SLUGS } from "@/lib/states";
import { SERVICE_SLUGS } from "@/lib/services";
import { POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = SITE.url;

  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/cdl-defense-services", priority: 0.9, freq: "monthly" },
    { path: "/serious-cdl-violations", priority: 0.9, freq: "monthly" },
    { path: "/cdl-ticket-lawyer", priority: 0.9, freq: "monthly" },
    { path: "/speed-trap-database", priority: 0.8, freq: "weekly" },
    { path: "/interstate-map", priority: 0.7, freq: "monthly" },
    { path: "/blog", priority: 0.8, freq: "weekly" },
    { path: "/get-help", priority: 0.9, freq: "monthly" },
    { path: "/disclaimer", priority: 0.3, freq: "yearly" }
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority
  }));

  for (const slug of SERVICE_SLUGS) {
    entries.push({ url: `${base}/cdl-defense-services/${slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  }
  for (const slug of STATE_SLUGS) {
    entries.push({ url: `${base}/cdl-ticket-lawyer/${slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  }
  for (const post of POSTS) {
    entries.push({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date + "T00:00:00"),
      changeFrequency: "yearly",
      priority: 0.6
    });
  }

  return entries;
}
