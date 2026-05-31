import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SpeedTrapExplorer } from "@/components/SpeedTrapExplorer";
import { CTABand } from "@/components/CTABand";
import { SPEED_TRAP_COUNT, TRAP_HIGHWAYS } from "@/lib/speed-traps";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Interstate Speed Trap Database for Truckers",
  description:
    `Searchable database of ${SPEED_TRAP_COUNT}+ reported enforcement areas along major U.S. freight corridors. Filter by interstate and state. Informational only — not legal advice.`,
  path: "/speed-trap-database",
  keywords: ["interstate speed trap database", "trucker speed traps", "CDL speed trap map", "freight corridor enforcement"]
});

export default function SpeedTrapPage({
  searchParams
}: {
  searchParams: { hwy?: string; state?: string };
}) {
  const initialHighway = TRAP_HIGHWAYS.includes(searchParams.hwy ?? "") ? searchParams.hwy! : "";

  return (
    <>
      <Breadcrumbs items={[{ name: "Speed Trap Database", path: "/speed-trap-database" }]} />
      <PageHero
        eyebrow="Reported enforcement areas"
        title="Interstate Speed Trap Database"
        subtitle={`${SPEED_TRAP_COUNT}+ reported enforcement areas across major freight corridors. Search and filter by interstate or state. This is informational only — not a legal conclusion about any location.`}
      />

      <section className="section">
        <div className="container-px">
          <SpeedTrapExplorer initialHighway={initialHighway} initialState={searchParams.state ?? ""} />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-navy-800 p-5">
              <h2 className="text-lg font-bold text-white">Report an enforcement area</h2>
              <p className="mt-2 text-sm text-slate-400">
                Seen heavy commercial enforcement on your route? Help other drivers stay alert. Submit details
                through our intake and note it in the message field.
              </p>
              <Link href="/get-help" className="btn-ghost mt-4">Submit a report</Link>
            </div>
            <div className="rounded-xl border border-highway/30 bg-navy-800 p-5">
              <h2 className="text-lg font-bold text-white">Already cited?</h2>
              <p className="mt-2 text-sm text-slate-400">
                A ticket in one of these corridors can still threaten your CDL. Do not ignore it — connect with
                a local attorney before your deadline.
              </p>
              <Link href="/get-help" className="btn-primary mt-4">Get CDL defense help</Link>
            </div>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-slate-500">
            <strong className="text-slate-400">Important:</strong> Entries describe areas where commercial
            traffic enforcement has been reported along known freight corridors. They are provided for general
            awareness and safety, are not verified in real time, and are not legal conclusions, accusations,
            or advice about any agency or location. Always follow posted limits and lawful instructions.
          </p>
        </div>
      </section>
      <CTABand title="A speed trap ticket can still cost you your CDL." subtitle="Fast response matters. Connect with a CDL-focused attorney before your court date." />
    </>
  );
}
