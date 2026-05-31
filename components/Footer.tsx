import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
import { Logo } from "./Logo";

const SERVICE_LINKS = [
  { label: "CDL Speeding Tickets", href: "/cdl-defense-services/cdl-speeding-tickets" },
  { label: "Reckless Driving", href: "/cdl-defense-services/reckless-driving" },
  { label: "Following Too Closely", href: "/cdl-defense-services/following-too-closely" },
  { label: "DUI / Controlled Substance", href: "/cdl-defense-services/dui-controlled-substance" },
  { label: "Out-of-Service Orders", href: "/cdl-defense-services/out-of-service-order-violations" }
];

export function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10 bg-navy-900">
      <div className="container-px py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="text-sm font-extrabold uppercase tracking-wide text-white">
                Truckers <span className="text-highway">Legal Shield</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-400">{SITE.description}</p>
            <a href={`tel:${SITE.phoneHref}`} className="mt-4 inline-block text-lg font-bold text-highway">
              {SITE.phoneDisplay}
            </a>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-slate-300 hover:text-highway">
                    {i.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/get-help" className="text-slate-300 hover:text-highway">
                  Get Help Now
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Defense services">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Defense</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICE_LINKS.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-slate-300 hover:text-highway">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Get Started</h3>
            <p className="mt-4 text-sm text-slate-400">
              Cited on the road? Do not ignore it. Send your citation details and we will work to connect
              you with a CDL-focused attorney fast.
            </p>
            <Link href="/get-help" className="btn-primary mt-4">
              Get CDL Defense Help
            </Link>
          </div>
        </div>

        <div className="mt-12 space-y-3 border-t border-white/10 pt-8 text-xs leading-relaxed text-slate-500">
          <p>
            <strong className="text-slate-400">Disclaimer:</strong> Truckers Legal Shield is not a law firm
            unless expressly stated in a specific jurisdiction. Use of this website does not create an
            attorney-client relationship. Attorney availability, legal options, and outcomes vary by
            jurisdiction and case facts.
          </p>
          <p>
            <strong className="text-slate-400">Attorney advertising.</strong> This website may constitute
            attorney advertising in some jurisdictions. Prior results do not guarantee a similar outcome. We
            make no guarantee of any particular outcome in any case.
          </p>
          <p>
            State traffic and licensing laws vary, and CDL consequences may involve both federal and state
            rules. The information on this site is general in nature and is not legal advice.
          </p>
          <p className="pt-2 text-slate-600">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved. ·{" "}
            <Link href="/disclaimer" className="hover:text-highway">
              Full Disclaimer
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
