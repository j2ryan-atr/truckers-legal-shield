import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { FAQ } from "@/components/FAQ";
import { CTABand } from "@/components/CTABand";
import { SITE } from "@/lib/site";
import { HOME_FAQS, SERIOUS_VIOLATIONS, TRUST_POINTS } from "@/lib/content";
import { SERVICES } from "@/lib/services";
import { SPEED_TRAPS, SPEED_TRAP_COUNT } from "@/lib/speed-traps";
import { STATES } from "@/lib/states";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "CDL Ticket Defense Lawyers Nationwide | Truckers Legal Shield",
  description:
    "Facing a CDL ticket or serious violation? Truckers Legal Shield connects commercial drivers with a nationwide attorney network for fast traffic citation and license defense.",
  path: "/",
  keywords: [
    "CDL ticket defense",
    "trucker traffic lawyer",
    "CDL speeding ticket lawyer",
    "serious CDL violations",
    "CDL license protection"
  ]
});

const previewTraps = SPEED_TRAPS.slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid-motif [background-size:48px_48px] opacity-60" aria-hidden="true" />
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-highway/10 blur-3xl" aria-hidden="true" />
        <div className="container-px relative grid gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="eyebrow">Nationwide CDL Defense Network</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Protect Your CDL.<br />
              <span className="text-highway">Protect Your Livelihood.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              Nationwide attorney network for CDL drivers facing traffic citations, serious violations, and
              license-threatening charges. Fast attorney dispatch in all 50 states.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/get-help" className="btn-primary text-base">Get Help Now</Link>
              <Link href="/cdl-ticket-lawyer" className="btn-secondary text-base">Find CDL Defense by State</Link>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {TRUST_POINTS.map((t) => (
                <div key={t.title} className="rounded-lg border border-white/10 bg-navy-800/50 p-3">
                  <dt className="text-sm font-bold text-highway">{t.title}</dt>
                  <dd className="mt-1 text-xs text-slate-400">{t.detail}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:pl-6">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-300">
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-highway" /> Fast intake — start your defense
            </div>
            <LeadForm compact />
          </div>
        </div>
      </section>

      {/* Why CDL tickets are different */}
      <section className="section">
        <div className="container-px">
          <div className="max-w-3xl">
            <p className="eyebrow">Why this matters</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Why CDL tickets are different</h2>
            <p className="mt-4 text-lg text-slate-300">
              A regular traffic ticket can become a career problem for a CDL driver. Commercial drivers are
              held to a stricter federal standard — and you generally cannot hide a conviction with traffic
              school the way other drivers can.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { t: "Federal serious violations", d: "Offenses like 15-over speeding, reckless driving, and following too closely count toward CDL disqualification." },
              { t: "No masking allowed", d: "Federal law bars hiding CDL convictions through diversion or traffic school. Paying the ticket locks it in." },
              { t: "Your job is on the line", d: "Convictions drive CSA points, insurance hikes, lost loads, and possible termination — not just a fine." }
            ].map((c) => (
              <div key={c.t} className="card">
                <h3 className="text-lg font-bold text-white">{c.t}</h3>
                <p className="mt-2 text-sm text-slate-400">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serious violation consequences */}
      <section className="section bg-navy-900">
        <div className="container-px">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Know the risk</p>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Serious violation consequences</h2>
              <p className="mt-4 text-slate-300">
                Two serious violations within three years can disqualify your CDL for at least 60 days. Three
                can mean 120 days or more. These are the offenses that put your license at risk.
              </p>
            </div>
            <Link href="/serious-cdl-violations" className="btn-ghost shrink-0">See the full list</Link>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {SERIOUS_VIOLATIONS.map((v) => (
              <li key={v.title} className="flex items-start gap-3 rounded-lg border border-white/10 bg-navy-800/60 p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highway/20 text-xs font-bold text-highway">!</span>
                <div>
                  <span className="font-semibold text-white">{v.title}</span>
                  <span className="block text-sm text-slate-400">{v.detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services / Attorney network */}
      <section className="section">
        <div className="container-px">
          <p className="eyebrow">What we defend</p>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">CDL defense services</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            Our attorney network is ready to deploy fast across every major citation type that threatens a
            commercial driver.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/cdl-defense-services/${s.slug}`}
                className="card group transition hover:border-highway/50"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-white">{s.shortName}</h3>
                  {s.serious && <span className="rounded bg-highway/15 px-2 py-0.5 text-[10px] font-bold uppercase text-highway">Serious</span>}
                </div>
                <p className="mt-2 text-sm text-slate-400">{s.summary}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-highway group-hover:underline">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Attorney network ready to deploy */}
      <section className="section bg-navy-900">
        <div className="container-px grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Built for speed</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">An attorney network ready to deploy</h2>
            <p className="mt-4 text-slate-300">
              Cited a thousand miles from home? You usually do not have to drive back. A local CDL-focused
              attorney in the citation jurisdiction can often appear on your behalf, fight the ticket, and
              negotiate a reduction — while you stay on the road.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Fast matching to a CDL-focused attorney in the right court",
                "Local knowledge of the prosecutor, judge, and realistic reductions",
                "Often able to appear for you so you keep driving",
                "One point of contact instead of cold-calling strange firms"
              ].map((i) => (
                <li key={i} className="flex items-start gap-3 text-slate-200">
                  <span className="mt-1 text-highway">✓</span> {i}
                </li>
              ))}
            </ul>
            <Link href="/get-help" className="btn-primary mt-8">Start your intake</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { n: "50", l: "States + D.C. covered" },
              { n: `${SPEED_TRAP_COUNT}+`, l: "Reported enforcement areas" },
              { n: "16", l: "Major freight corridors" },
              { n: "24/7", l: "Intake — never ignore a citation" }
            ].map((s) => (
              <div key={s.l} className="rounded-xl border border-white/10 bg-navy-800 p-6 text-center">
                <div className="text-4xl font-extrabold text-highway">{s.n}</div>
                <div className="mt-2 text-sm text-slate-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed trap database preview */}
      <section className="section">
        <div className="container-px">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Stay alert out there</p>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Speed trap database</h2>
              <p className="mt-4 text-slate-300">
                Reported enforcement areas along major freight corridors. Informational only — not legal
                conclusions about any location.
              </p>
            </div>
            <Link href="/speed-trap-database" className="btn-ghost shrink-0">Open full database</Link>
          </div>
          <div className="mt-8 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy-800 text-xs uppercase tracking-wide text-slate-400">
                <tr>
                  <th className="px-4 py-3">Highway</th>
                  <th className="px-4 py-3">Area</th>
                  <th className="hidden px-4 py-3 sm:table-cell">Nearby</th>
                  <th className="px-4 py-3">Common issue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {previewTraps.map((t) => (
                  <tr key={t.id}>
                    <td className="px-4 py-3"><span className="rounded bg-highway px-2 py-0.5 text-xs font-bold text-navy-950">{t.highway}</span></td>
                    <td className="px-4 py-3 font-medium text-white">{t.area}</td>
                    <td className="hidden px-4 py-3 text-slate-300 sm:table-cell">{t.nearby}</td>
                    <td className="px-4 py-3 text-slate-400">{t.issue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interstate coverage */}
      <section className="section bg-navy-900">
        <div className="container-px">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Coast to coast</p>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Interstate defense coverage</h2>
              <p className="mt-4 text-slate-300">
                Find CDL ticket defense in your state, or explore the interstate corridors where commercial
                enforcement is heaviest.
              </p>
            </div>
            <Link href="/interstate-map" className="btn-ghost shrink-0">View interstate map</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {STATES.map((s) => (
              <Link
                key={s.slug}
                href={`/cdl-ticket-lawyer/${s.slug}`}
                className="rounded-md border border-white/10 bg-navy-800 px-3 py-1.5 text-sm text-slate-300 transition hover:border-highway hover:text-highway"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={HOME_FAQS} />

      {/* Final lead form */}
      <section className="section bg-navy-900" id="intake">
        <div className="container-px grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="eyebrow">Free case review</p>
            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Get CDL defense help now</h2>
            <p className="mt-4 text-slate-300">
              Do not ignore the citation. CDL tickets can affect your job, insurance, and future loads. Send
              your details and we will work to connect you with a CDL-focused attorney fast.
            </p>
            <div className="mt-6 space-y-3 text-slate-200">
              <p className="flex items-center gap-3"><span className="text-highway">→</span> A regular ticket can become a career problem.</p>
              <p className="flex items-center gap-3"><span className="text-highway">→</span> Fast response matters — deadlines are short.</p>
              <p className="flex items-center gap-3"><span className="text-highway">→</span> Or call <a href={`tel:${SITE.phoneHref}`} className="link-highway">{SITE.phoneDisplay}</a> right now.</p>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      <CTABand />
    </>
  );
}
