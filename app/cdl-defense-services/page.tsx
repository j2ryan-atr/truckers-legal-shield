import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { SERVICES } from "@/lib/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "CDL Defense Services — Ticket & Violation Defense for Truckers",
  description:
    "From CDL speeding tickets to out-of-service violations and DUI, see every citation type our nationwide attorney network defends for commercial drivers.",
  path: "/cdl-defense-services",
  keywords: ["CDL defense services", "CDL violation lawyer", "truck driver citation defense"]
});

export default function ServicesIndex() {
  return (
    <>
      <Breadcrumbs items={[{ name: "CDL Defense Services", path: "/cdl-defense-services" }]} />
      <PageHero
        eyebrow="What we defend"
        title="CDL Defense Services"
        subtitle="Every citation type that can threaten a commercial driver's license, livelihood, and safety record — handled by attorneys who understand federal CDL consequences."
      />
      <section className="section">
        <div className="container-px grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/cdl-defense-services/${s.slug}`} className="card group transition hover:border-highway/50">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">{s.name}</h2>
                {s.serious && <span className="rounded bg-highway/15 px-2 py-0.5 text-[10px] font-bold uppercase text-highway">Serious violation</span>}
              </div>
              <p className="mt-3 text-sm text-slate-400">{s.summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-highway group-hover:underline">View defense details →</span>
            </Link>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
