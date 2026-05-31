import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { SITE } from "@/lib/site";
import { TRUST_POINTS } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Get CDL Defense Help Now — Free Case Review",
  description:
    "Start your CDL defense in minutes. Tell us about your citation and we will work to connect you with a CDL-focused attorney in the right jurisdiction. Fast response matters.",
  path: "/get-help",
  keywords: ["CDL defense help", "CDL ticket free case review", "truck driver lawyer intake"]
});

export default function GetHelpPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Get Help Now", path: "/get-help" }]} />
      <PageHero
        eyebrow="Free case review"
        title="Get CDL Defense Help Now"
        subtitle="Do not ignore the citation. CDL tickets can affect your job, insurance, and future loads. Send your details and we will work to connect you with a CDL-focused attorney fast."
      />

      <section className="section">
        <div className="container-px grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white">Why act fast</h2>
            <ul className="mt-6 space-y-4">
              {[
                "A regular traffic ticket can become a career problem for a CDL driver.",
                "Court deadlines are short — a missed date can become an automatic conviction.",
                "Paying the ticket is a guilty plea that locks the conviction onto your CDL record.",
                "Early action keeps reduction and dismissal options on the table."
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-slate-200">
                  <span className="mt-1 text-highway">✓</span> {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-highway/30 bg-navy-800 p-5">
              <p className="text-sm text-slate-300">Prefer to talk now?</p>
              <a href={`tel:${SITE.phoneHref}`} className="mt-1 block text-2xl font-extrabold text-highway">
                {SITE.phoneDisplay}
              </a>
              <p className="mt-1 text-xs text-slate-500">Fast intake — never ignore a citation.</p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-3">
              {TRUST_POINTS.map((t) => (
                <div key={t.title} className="rounded-lg border border-white/10 bg-navy-800/60 p-3">
                  <dt className="text-sm font-bold text-highway">{t.title}</dt>
                  <dd className="mt-1 text-xs text-slate-400">{t.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-3">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
