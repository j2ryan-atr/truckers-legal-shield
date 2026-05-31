import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(full)} />
      <nav aria-label="Breadcrumb" className="container-px pt-6">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-400">
          {full.map((c, i) => {
            const last = i === full.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1">
                {last ? (
                  <span className="text-slate-300" aria-current="page">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.path} className="hover:text-highway">
                    {c.name}
                  </Link>
                )}
                {!last && <span className="text-slate-600">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
