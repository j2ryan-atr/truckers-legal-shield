import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQ } from "@/components/FAQ";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { STATES, STATE_SLUGS, getState } from "@/lib/states";
import { trapsForState } from "@/lib/speed-traps";
import { SERIOUS_VIOLATIONS } from "@/lib/content";
import { buildMetadata, legalServiceForState } from "@/lib/seo";

export function generateStaticParams() {
  return STATE_SLUGS.map((state) => ({ state }));
}

export function generateMetadata({ params }: { params: { state: string } }) {
  const s = getState(params.state);
  if (!s) return {};
  return buildMetadata({
    title: `${s.name} CDL Ticket Lawyer — Traffic & License Defense`,
    description: `CDL ticket defense in ${s.name}. Connect with a local attorney for commercial driver speeding tickets, serious violations, and license protection along ${s.corridors
      .slice(0, 3)
      .join(", ")} and statewide.`,
    path: `/cdl-ticket-lawyer/${s.slug}`,
    keywords: [
      `${s.name} CDL ticket lawyer`,
      `${s.name} trucker traffic lawyer`,
      `CDL speeding ticket ${s.name}`,
      `${s.name} CDL violation attorney`
    ]
  });
}

export default function StatePage({ params }: { params: { state: string } }) {
  const s = getState(params.state);
  if (!s) notFound();

  const traps = trapsForState(s.abbr);
  const faqs = [
    {
      question: `Do I have to travel back to ${s.name} to fight my CDL ticket?`,
      answer: `Often not. A local ${s.name} attorney in our network can frequently appear on your behalf, contest the citation, and negotiate a reduction so you can keep driving without returning for every court date.`
    },
    {
      question: `Is a ${s.name} CDL ticket reported to my home state?`,
      answer: `Yes. Through interstate compacts, a ${s.name} conviction is reported back to your home state and added to your CDL record, where it can count toward federal serious-violation thresholds.`
    },
    {
      question: `Which ${s.name} highways see the most CDL enforcement?`,
      answer: `Heavy commercial enforcement in ${s.name} is commonly reported along ${s.corridors.join(", ")}. See our speed trap database for specific reported enforcement areas.`
    },
    {
      question: `Should I just pay the ${s.name} citation?`,
      answer: `No. Paying is a guilty plea that locks the conviction onto your CDL record. Talk to an attorney about a reduction or dismissal before your deadline.`
    }
  ];

  const nearbyStates = STATES.filter((x) => x.slug !== s.slug).slice(0, 8);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Find by State", path: "/cdl-ticket-lawyer" },
          { name: s.name, path: `/cdl-ticket-lawyer/${s.slug}` }
        ]}
      />
      <PageHero
        eyebrow={`${s.name} · CDL Defense`}
        title={`${s.name} CDL Ticket Lawyer`}
        subtitle={`Cited in ${s.name}? Our nationwide network connects commercial drivers with local attorneys for traffic citations, serious violations, and license protection across the state.`}
      />

      <section className="section">
        <div className="container-px grid gap-12 lg:grid-cols-3">
          <div className="prose-tls lg:col-span-2">
            <h2>CDL defense in {s.name}</h2>
            <p>
              {s.name} sits on some of the country's busiest freight corridors, and commercial drivers
              passing through {s.capital} and metros like {s.cities.slice(0, 3).join(", ")} face strict
              traffic enforcement. A citation here is not just a {s.name} problem — it follows you home and
              onto your CDL record. Getting local help quickly is the difference between a minor stop and a
              threat to your license.
            </p>

            <h2>Common CDL violations in {s.name}</h2>
            <p>
              The citations we most often help {s.name} drivers fight are the federally defined serious
              violations, because they carry the highest stakes:
            </p>
            <ul>
              {SERIOUS_VIOLATIONS.slice(0, 6).map((v) => (
                <li key={v.title}>
                  <strong>{v.title}</strong> — {v.detail}
                </li>
              ))}
            </ul>
            <p>
              See the full federal framework on our{" "}
              <Link href="/serious-cdl-violations">serious CDL violations</Link> page, or browse all{" "}
              <Link href="/cdl-defense-services">CDL defense services</Link>.
            </p>

            <h2>{s.name} court & process overview</h2>
            <p>
              CDL traffic cases in {s.name} are typically handled in the local court for the county or
              municipality where the citation was issued. Deadlines to respond are short, and a missed court
              date can turn into a failure-to-appear and a license hold. The general path looks like this:
            </p>
            <ul>
              <li>Review the citation for the charge, court, and deadline.</li>
              <li>Retain a local attorney who regularly appears in that {s.name} court.</li>
              <li>Enter a plea and, where possible, negotiate a reduction to a non-serious offense.</li>
              <li>Resolve the case — often without you traveling back to {s.name}.</li>
            </ul>
            <p className="text-sm text-slate-500">
              Court procedures vary by county and municipality. This is a general overview, not legal advice
              about any specific {s.name} court.
            </p>

            <h2>Interstate corridors in {s.name}</h2>
            <p>
              Major freight corridors crossing {s.name} include {s.corridors.join(", ")}. These routes carry
              heavy commercial traffic and concentrated enforcement.
            </p>
            <div className="not-prose flex flex-wrap gap-2">
              {s.corridors.map((c) => {
                const isInterstate = c.startsWith("I-");
                return isInterstate ? (
                  <Link
                    key={c}
                    href={`/speed-trap-database?hwy=${c}`}
                    className="rounded-md border border-highway/40 bg-navy-800 px-3 py-1.5 text-sm font-semibold text-highway transition hover:bg-highway hover:text-navy-950"
                  >
                    {c}
                  </Link>
                ) : (
                  <span key={c} className="rounded-md border border-white/10 bg-navy-800 px-3 py-1.5 text-sm text-slate-300">
                    {c}
                  </span>
                );
              })}
            </div>

            {traps.length > 0 && (
              <>
                <h2>Reported enforcement areas in {s.name}</h2>
                <div className="not-prose overflow-x-auto rounded-xl border border-white/10">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-navy-800 text-xs uppercase tracking-wide text-slate-400">
                      <tr>
                        <th className="px-4 py-3">Highway</th>
                        <th className="px-4 py-3">Area</th>
                        <th className="px-4 py-3">Nearby</th>
                        <th className="px-4 py-3">Common issue</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {traps.map((t) => (
                        <tr key={t.id}>
                          <td className="px-4 py-3"><span className="rounded bg-highway px-2 py-0.5 text-xs font-bold text-navy-950">{t.highway}</span></td>
                          <td className="px-4 py-3 font-medium text-white">{t.area}</td>
                          <td className="px-4 py-3 text-slate-300">{t.nearby}</td>
                          <td className="px-4 py-3 text-slate-400">{t.issue}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="not-prose mt-3 text-xs text-slate-500">
                  Reported enforcement areas are informational only and are not legal conclusions about any
                  location. <Link href="/speed-trap-database" className="link-highway">Open the full database →</Link>
                </p>
              </>
            )}

            <h2>Other states</h2>
            <div className="not-prose flex flex-wrap gap-2">
              {nearbyStates.map((n) => (
                <Link key={n.slug} href={`/cdl-ticket-lawyer/${n.slug}`} className="rounded-md border border-white/10 bg-navy-800 px-3 py-1.5 text-sm text-slate-300 hover:border-highway hover:text-highway">
                  {n.name}
                </Link>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-3 text-sm font-semibold text-slate-300">{s.name} CDL intake</div>
            <LeadForm compact defaultState={s.name} />
          </aside>
        </div>
      </section>

      <div className="bg-navy-900">
        <FAQ items={faqs} heading={`${s.name} CDL defense: common questions`} />
      </div>

      <JsonLd data={legalServiceForState(s.name, `/cdl-ticket-lawyer/${s.slug}`)} />
    </>
  );
}
