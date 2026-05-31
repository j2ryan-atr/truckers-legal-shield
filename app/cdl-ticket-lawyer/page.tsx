import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { STATES } from "@/lib/states";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "CDL Ticket Lawyer by State — Nationwide CDL Defense",
  description:
    "Find CDL ticket defense in your state. Truckers Legal Shield connects commercial drivers with local attorneys in all 50 states and D.C. for traffic and license defense.",
  path: "/cdl-ticket-lawyer",
  keywords: ["CDL ticket lawyer by state", "CDL defense attorney near me", "state CDL traffic lawyer"]
});

export default function StatesIndex() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Find CDL Defense by State", path: "/cdl-ticket-lawyer" }]} />
      <PageHero
        eyebrow="Nationwide coverage"
        title="Find a CDL Ticket Lawyer by State"
        subtitle="Select the state where you were cited. Our network connects you with a local CDL-focused attorney who knows that court — often able to appear for you so you stay on the road."
      />
      <section className="section">
        <div className="container-px">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {STATES.map((s) => (
              <Link
                key={s.slug}
                href={`/cdl-ticket-lawyer/${s.slug}`}
                className="group flex items-center justify-between rounded-lg border border-white/10 bg-navy-800 px-4 py-3 transition hover:border-highway/50"
              >
                <span>
                  <span className="font-semibold text-white">{s.name}</span>
                  <span className="mt-0.5 block text-xs text-slate-500">{s.corridors.slice(0, 3).join(" · ")}</span>
                </span>
                <span className="text-highway opacity-0 transition group-hover:opacity-100">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
