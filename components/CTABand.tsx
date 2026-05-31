import Link from "next/link";
import { SITE } from "@/lib/site";

export function CTABand({
  title = "Do not ignore the citation.",
  subtitle = "A regular traffic ticket can become a career problem for a CDL driver. Fast response matters."
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-2xl border border-highway/30 bg-gradient-to-br from-navy-800 to-navy-900 p-8 sm:p-12">
          <div className="absolute inset-0 bg-grid-motif [background-size:40px_40px] opacity-40" aria-hidden="true" />
          <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{title}</h2>
              <p className="mt-3 text-slate-300">{subtitle}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/get-help" className="btn-primary">Get Help Now</Link>
              <a href={`tel:${SITE.phoneHref}`} className="btn-secondary">Call {SITE.phoneDisplay}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
