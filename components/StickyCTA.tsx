import Link from "next/link";
import { SITE } from "@/lib/site";

export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-highway/30 bg-navy-900/95 p-3 backdrop-blur lg:hidden">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${SITE.phoneHref}`}
          className="btn-secondary flex-1 !px-3 !py-3"
          aria-label="Call now"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call
        </a>
        <Link href="/get-help" className="btn-primary flex-[2] !px-3 !py-3 text-center">
          Get CDL Defense Help Now
        </Link>
      </div>
    </div>
  );
}
