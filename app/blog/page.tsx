import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { POSTS_BY_DATE } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "CDL Defense Blog — Tickets, Violations & License Protection",
  description:
    "Plain-English guides for commercial drivers on serious violations, CDL disqualification, speeding tickets, out-of-state citations, and protecting your license.",
  path: "/blog",
  keywords: ["CDL defense blog", "trucker legal advice", "CDL ticket help"]
});

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export default function BlogIndex() {
  const [featured, ...rest] = POSTS_BY_DATE;
  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />
      <PageHero
        eyebrow="Knowledge for drivers"
        title="CDL Defense Blog"
        subtitle="Straight answers for working truckers on the citations and rules that can put your CDL — and your livelihood — at risk."
      />

      <section className="section">
        <div className="container-px">
          <Link href={`/blog/${featured.slug}`} className="group block rounded-2xl border border-white/10 bg-navy-800 p-8 transition hover:border-highway/50">
            <p className="eyebrow">Latest</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{featured.title}</h2>
            <p className="mt-3 max-w-2xl text-slate-300">{featured.description}</p>
            <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
              <span>{formatDate(featured.date)}</span>
              <span>·</span>
              <span>{featured.readMinutes} min read</span>
            </div>
            <span className="mt-4 inline-block text-sm font-semibold text-highway group-hover:underline">Read article →</span>
          </Link>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="card group flex flex-col transition hover:border-highway/50">
                <h3 className="text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-400">{p.description}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                  <span>{formatDate(p.date)}</span>
                  <span>·</span>
                  <span>{p.readMinutes} min</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
