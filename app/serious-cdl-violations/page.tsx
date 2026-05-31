import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/CTABand";
import { SERIOUS_VIOLATIONS } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Serious CDL Violations: Disqualification Rules Explained",
  description:
    "What counts as a serious traffic violation for CDL drivers, how federal disqualification works after multiple violations, and why fast defense protects your license.",
  path: "/serious-cdl-violations",
  keywords: [
    "serious CDL violations",
    "CDL disqualification",
    "serious traffic violation CDL",
    "FMCSA serious violations"
  ]
});

const faqs = [
  {
    question: "What is a serious traffic violation for a CDL holder?",
    answer:
      "Federal regulations define a specific list of serious traffic violations including 15-over speeding, reckless driving, improper or erratic lane changes, following too closely, texting, hand-held phone use, and traffic offenses connected to a fatal accident."
  },
  {
    question: "How many serious violations cause disqualification?",
    answer:
      "Two serious violations within three years lead to at least a 60-day disqualification. Three within three years lead to at least 120 days. The violations are counted by offense date."
  },
  {
    question: "Do violations in my personal vehicle count?",
    answer:
      "They can. Some serious violations apply when operating any vehicle, and major offenses like DUI affect your CDL even if committed in a personal car. State rules vary, so get advice on your specific situation."
  },
  {
    question: "Can I avoid a conviction with traffic school?",
    answer:
      "Generally no. Federal law prohibits masking CDL convictions through diversion or traffic school. The reliable path is to fight the citation or negotiate a reduction before it becomes a conviction."
  }
];

export default function SeriousViolationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Serious CDL Violations", path: "/serious-cdl-violations" }]} />
      <PageHero
        eyebrow="The federal framework"
        title="Serious CDL Violations & Disqualification"
        subtitle="The offenses that can take a commercial driver off the road — explained in plain English for working truckers."
      />

      <section className="section">
        <div className="container-px grid gap-12 lg:grid-cols-3">
          <div className="prose-tls lg:col-span-2">
            <h2>What is a “serious traffic violation”?</h2>
            <p>
              For CDL holders, “serious traffic violation” is not a casual phrase — it is a defined federal
              category. These offenses are tracked across state lines and counted toward disqualification of
              your commercial driver's license. A ticket that would be a minor nuisance for a four-wheel
              driver can threaten your career.
            </p>

            <h2>How disqualification stacks up</h2>
            <p>
              The federal rules use simple counting math. The danger is how quickly two ordinary-looking
              tickets can combine:
            </p>
            <ul>
              <li><strong>Two serious violations in 3 years:</strong> minimum 60-day disqualification.</li>
              <li><strong>Three serious violations in 3 years:</strong> minimum 120-day disqualification.</li>
              <li>Violations are counted by the date of the offense, not the conviction date.</li>
              <li>Major offenses (DUI, refusal, hit-and-run) carry a separate one-year minimum on a first offense.</li>
            </ul>

            <h2>Examples of serious violations</h2>
            <p>The core federal list of serious traffic violations includes:</p>
            <div className="not-prose grid gap-3 sm:grid-cols-2">
              {SERIOUS_VIOLATIONS.map((v) => (
                <div key={v.title} className="rounded-lg border border-white/10 bg-navy-800 p-4">
                  <p className="font-semibold text-white">{v.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{v.detail}</p>
                </div>
              ))}
            </div>

            <h2>Railroad crossings and out-of-service orders</h2>
            <p>
              Two categories carry their own, even harsher penalty tracks. Railroad-grade crossing violations
              bring a mandatory disqualification starting at 60 days for a first offense. Violating an
              out-of-service order starts at 180 days. These do not follow the two-and-three counting rule —
              a single conviction triggers mandatory time off the road.
            </p>

            <h2>Why fast defense matters</h2>
            <p>
              Because convictions cannot be masked and the counting windows are unforgiving, the time to act
              is before a ticket becomes a conviction. Getting one serious violation reduced or dismissed can
              keep you under the threshold that triggers disqualification. Explore our{" "}
              <Link href="/cdl-defense-services">CDL defense services</Link> or check the{" "}
              <Link href="/speed-trap-database">speed trap database</Link> for the corridors where these
              tickets are most common.
            </p>

            <div className="mt-8 rounded-lg border border-highway/30 bg-navy-800 p-5 not-prose">
              <p className="text-sm font-semibold text-white">Disclaimer</p>
              <p className="mt-1 text-sm text-slate-300">
                Laws vary by state and the facts of your case matter. CDL consequences may involve both
                federal and state rules. This page is general information, not legal advice.
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="card">
              <h3 className="text-lg font-bold text-white">At a glance</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
                  <dt className="text-slate-400">2 serious / 3 yrs</dt>
                  <dd className="font-semibold text-highway">60+ days</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
                  <dt className="text-slate-400">3 serious / 3 yrs</dt>
                  <dd className="font-semibold text-highway">120+ days</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
                  <dt className="text-slate-400">Railroad crossing</dt>
                  <dd className="font-semibold text-highway">60+ days</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-white/10 pb-2">
                  <dt className="text-slate-400">Out-of-service</dt>
                  <dd className="font-semibold text-highway">180+ days</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">DUI (1st)</dt>
                  <dd className="font-semibold text-highway">1 year+</dd>
                </div>
              </dl>
              <Link href="/get-help" className="btn-primary mt-6 w-full">Protect your CDL now</Link>
            </div>
          </aside>
        </div>
      </section>

      <div className="bg-navy-900">
        <FAQ items={faqs} heading="Serious violations: common questions" />
      </div>
      <CTABand />
    </>
  );
}
