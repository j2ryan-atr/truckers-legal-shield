"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/90 backdrop-blur">
      <div className="container-px flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2" aria-label={`${SITE.name} home`}>
          <Logo className="h-9 w-9" />
          <span className="text-sm font-extrabold uppercase leading-tight tracking-wide text-white sm:text-base">
            Truckers <span className="text-highway">Legal Shield</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-300 transition hover:text-highway"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${SITE.phoneHref}`} className="text-sm font-bold text-highway">
            {SITE.phoneDisplay}
          </a>
          <Link href="/get-help" className="btn-primary !px-4 !py-2">
            Get Help Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-slate-200 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy-900 lg:hidden" aria-label="Mobile">
          <div className="container-px flex flex-col py-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-sm font-semibold text-slate-200"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/get-help" onClick={() => setOpen(false)} className="btn-primary mt-3">
              Get CDL Defense Help Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
