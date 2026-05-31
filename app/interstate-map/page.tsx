import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InterstateMap } from "@/components/InterstateMap";
import { CTABand } from "@/components/CTABand";
import { TRAP_HIGHWAYS, trapsForHighway } from "@/lib/speed-traps";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Interstate Coverage Map — CDL Defense by Corridor",
  description:
    "Explore major U.S. interstate freight corridors. Tap a corridor to see reported enforcement areas and connect with CDL ticket defense along your route.",
  path: "/interstate-map",
  keywords: ["interstate freight corridor map", "CDL defense interstate map", "trucker interstate enforcement"]
});

export default function InterstateMapPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Interstate Map", path: "/interstate-map" }]} />
      <PageHero
        eyebrow="Coast to coast"
        title="Interstate Coverage Map"
        subtitle="A lightweight schematic of the major freight corridors we cover. Tap any interstate to see its reported enforcement areas and jump to the full speed trap database."
      />

      <section className="section">
        <div className="container-px">
          <InterstateMap />
        </div>
      </section>

      <section className="section bg-navy-900">
        <div className="container-px">
          <h2 className="text-2xl font-bold text-white">Corridors we track</h2>
          <p className="mt-2 text-slate-400">Jump straight to reported enforcement areas on any corridor.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {TRAP_HIGHWAYS.map((h) => (
              <Link
                key={h}
                href={`/speed-trap-database?hwy=${h}`}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-navy-800 px-4 py-3 transition hover:border-highway/50"
              >
                <span className="font-bold text-white">{h}</span>
                <span className="text-xs text-slate-400">{trapsForHighway(h).length} areas</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
