"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { trapsForHighway } from "@/lib/speed-traps";

// Schematic of major freight corridors. Vertical = North-South (odd),
// horizontal = East-West (even). Lightweight, no map library.
const NS = [
  { id: "I-5", x: 70, label: "I-5" },
  { id: "I-15", x: 150, label: "I-15" },
  { id: "I-25", x: 300, label: "I-25" },
  { id: "I-35", x: 430, label: "I-35" },
  { id: "I-55", x: 560, label: "I-55" },
  { id: "I-65", x: 650, label: "I-65" },
  { id: "I-75", x: 760, label: "I-75" },
  { id: "I-95", x: 880, label: "I-95" }
];

const EW = [
  { id: "I-90", y: 70, label: "I-90" },
  { id: "I-80", y: 150, label: "I-80" },
  { id: "I-70", y: 220, label: "I-70" },
  { id: "I-40", y: 300, label: "I-40" },
  { id: "I-20", y: 380, label: "I-20" },
  { id: "I-10", y: 440, label: "I-10" }
];

export function InterstateMap() {
  const router = useRouter();
  const [active, setActive] = useState<string | null>(null);
  const activeCount = active ? trapsForHighway(active).length : 0;
  const go = (id: string) => router.push(`/speed-trap-database?hwy=${id}`);

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-navy-900 p-3">
          <svg
            viewBox="0 0 940 500"
            className="h-auto w-full"
            role="img"
            aria-label="Interactive schematic of major U.S. interstate freight corridors"
          >
            <rect x="0" y="0" width="940" height="500" fill="url(#tlsgrid)" />
            <defs>
              <pattern id="tlsgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0H0V40" fill="none" stroke="rgba(255,206,31,0.06)" strokeWidth="1" />
              </pattern>
            </defs>

            {/* stylized US outline */}
            <path
              d="M40 120 L120 80 L300 60 L520 70 L760 60 L900 110 L905 230 L860 300 L880 400 L760 460 L520 470 L300 460 L150 440 L60 360 L40 240 Z"
              fill="rgba(19,28,48,0.6)"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="2"
            />

            {EW.map((r) => {
              const on = active === r.id;
              return (
                <g
                  key={r.id}
                  onMouseEnter={() => setActive(r.id)}
                  onClick={() => go(r.id)}
                  role="link"
                  tabIndex={0}
                  aria-label={`${r.label} speed traps`}
                  onKeyDown={(e) => e.key === "Enter" && go(r.id)}
                  className="cursor-pointer focus:outline-none"
                >
                  <line
                    x1="55" y1={r.y} x2="895" y2={r.y}
                    stroke={on ? "#ffce1f" : "rgba(255,206,31,0.45)"}
                    strokeWidth={on ? 5 : 3}
                    strokeLinecap="round"
                  />
                  <rect x="50" y={r.y - 10} width="40" height="20" rx="4" fill={on ? "#ffce1f" : "#1b2740"} stroke="#ffce1f" strokeWidth="1" />
                  <text x="70" y={r.y + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill={on ? "#0a0f1c" : "#ffce1f"}>{r.label}</text>
                </g>
              );
            })}

            {NS.map((c) => {
              const on = active === c.id;
              return (
                <g
                  key={c.id}
                  onMouseEnter={() => setActive(c.id)}
                  onClick={() => go(c.id)}
                  role="link"
                  tabIndex={0}
                  aria-label={`${c.label} speed traps`}
                  onKeyDown={(e) => e.key === "Enter" && go(c.id)}
                  className="cursor-pointer focus:outline-none"
                >
                  <line
                    x1={c.x} y1="55" x2={c.x} y2="465"
                    stroke={on ? "#ffce1f" : "rgba(255,255,255,0.35)"}
                    strokeWidth={on ? 5 : 3}
                    strokeLinecap="round"
                  />
                  <rect x={c.x - 20} y="40" width="40" height="20" rx="4" fill={on ? "#ffce1f" : "#1b2740"} stroke="#ffce1f" strokeWidth="1" />
                  <text x={c.x} y="54" textAnchor="middle" fontSize="11" fontWeight="700" fill={on ? "#0a0f1c" : "#ffce1f"}>{c.label}</text>
                </g>
              );
            })}
          </svg>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Schematic for navigation only — not to geographic scale. Tap a corridor to see reported enforcement
          areas along it.
        </p>
      </div>

      <div className="card">
        <h3 className="text-lg font-bold text-white">
          {active ? `${active} corridor` : "Pick a corridor"}
        </h3>
        <p className="mt-2 text-sm text-slate-400">
          {active
            ? `${activeCount} reported enforcement ${activeCount === 1 ? "area" : "areas"} logged along ${active}.`
            : "Hover or tap any interstate to preview its reported enforcement areas, then open the full database."}
        </p>
        {active && (
          <div className="mt-4 space-y-3">
            <Link href={`/speed-trap-database?hwy=${active}`} className="btn-primary w-full">
              View {active} speed traps
            </Link>
            <ul className="space-y-2 text-sm text-slate-300">
              {trapsForHighway(active).slice(0, 4).map((t) => (
                <li key={t.id} className="rounded-md border border-white/10 bg-navy-900 p-2">
                  <span className="font-semibold text-white">{t.area}</span>
                  <span className="block text-xs text-slate-400">{t.nearby} — {t.issue}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
