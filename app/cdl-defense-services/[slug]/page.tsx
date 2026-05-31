import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES, SERVICE_SLUGS, getService } from "@/lib/services";
import { buildMetadata, legalServiceForState } from "@/lib/seo";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) return {};
  return buildMetadata({
    title: s.name,
    description: s.summary,
    path: `/cdl-defense-services/${s.slug}`,
    keywords: s.keywords
  });
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();

  const related = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 4);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "CDL Defense Services", path: "/cdl-defense-services" },
          { name: s.shortName, path: `/cdl-defense-services/${s.slug}` }
        ]}
      />
      <PageHero
        eyebrow={s.serious ? "Federal serious violation" : "CDL citation defense"}
        title={s.name}
        subtitle={s.summary}
      />

      <section className="section">
        <div className="container-px grid gap-12 lg:grid-cols-3">
          <div className="prose-tls lg:col-span-2">
            <h2>What this charge means for your CDL</h2>
            <p>{s.whatItMeans}</p>

            <h2>Potential consequences</h2>
            <ul>
              {s.consequences.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <h2>How these cases are defended</h2>
            <ul>
              {s.defense.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg border border-highway/30 bg-navy-800 p-5 not-prose">
              <p className="text-sm text-slate-300">
                <strong className="text-white">Do not just pay this ticket.</strong> Paying is a guilty plea
                that can lock in a conviction on your CDL record. Talk to an attorney before your deadline.
              </p>
            </div>

            <h2>Related CDL defense</h2>
            <div className="not-prose grid gap-3 sm:grid-cols-2">
              {related.map((r) => (
                <Link key={r.slug} href={`/cdl-defense-services/${r.slug}`} className="rounded-lg border border-white/10 bg-navy-800 p-4 transition hover:border-highway/50">
                  <span className="font-semibold text-white">{r.shortName}</span>
                  <span className="mt-1 block text-xs text-slate-400">{r.summary.slice(0, 90)}…</span>
                </Link>
              ))}
            </div>

            <p className="mt-8 text-sm text-slate-500">
              Laws vary by state and the facts of your case matter. This page is general information, not legal
              advice. See our <Link href="/serious-cdl-violations">serious violations guide</Link> for the
              federal framework.
            </p>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-3 text-sm font-semibold text-slate-300">Get defense for this citation</div>
            <LeadForm compact />
          </aside>
        </div>
      </section>

      <div className="bg-navy-900">
        <FAQ items={s.faqs} heading={`${s.shortName}: common questions`} />
      </div>

      <JsonLd data={legalServiceForState("the United States", `/cdl-defense-services/${s.slug}`)} />
    </>
  );
}
