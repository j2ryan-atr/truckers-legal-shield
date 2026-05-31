"use client";

import { useMemo, useState } from "react";
import { SPEED_TRAPS, TRAP_HIGHWAYS, TRAP_STATES } from "@/lib/speed-traps";

export function SpeedTrapExplorer({ initialHighway = "", initialState = "" }: { initialHighway?: string; initialState?: string }) {
  const [q, setQ] = useState("");
  const [hwy, setHwy] = useState(initialHighway);
  const [state, setState] = useState(initialState);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return SPEED_TRAPS.filter((t) => {
      if (hwy && t.highway !== hwy) return false;
      if (state && t.state !== state) return false;
      if (!needle) return true;
      return [t.state, t.highway, t.area, t.nearby, t.issue, t.notes]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
  }, [q, hwy, state]);

  const ctrl = "rounded-md border border-white/15 bg-navy-900 px-3 py-2.5 text-sm text-white focus:border-highway focus:outline-none";

  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-3">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search city, county, highway…"
          aria-label="Search speed traps"
          className={`${ctrl} sm:col-span-1`}
        />
        <select value={hwy} onChange={(e) => setHwy(e.target.value)} aria-label="Filter by highway" className={ctrl}>
          <option value="">All highways</option>
          {TRAP_HIGHWAYS.map((h) => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>
        <select value={state} onChange={(e) => setState(e.target.value)} aria-label="Filter by state" className={ctrl}>
          <option value="">All states</option>
          {TRAP_STATES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-slate-400" role="status" aria-live="polite">
          {results.length} reported enforcement {results.length === 1 ? "area" : "areas"}
        </p>
        {(q || hwy || state) && (
          <button
            type="button"
            onClick={() => { setQ(""); setHwy(""); setState(""); }}
            className="text-xs font-semibold text-highway hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Mobile cards */}
      <div className="mt-4 grid gap-3 md:hidden">
        {results.map((t) => (
          <div key={t.id} className="rounded-lg border border-white/10 bg-navy-800 p-4">
            <div className="flex items-center gap-2">
              <span className="rounded bg-highway px-2 py-0.5 text-xs font-bold text-navy-950">{t.highway}</span>
              <span className="text-xs font-semibold text-slate-400">{t.state}</span>
            </div>
            <p className="mt-2 font-semibold text-white">{t.area}</p>
            <p className="text-sm text-slate-400">{t.nearby}</p>
            <p className="mt-2 text-sm text-slate-300"><span className="text-highway">Issue:</span> {t.issue}</p>
            <p className="text-sm text-slate-400">{t.notes}</p>
            <p className="mt-2 text-[11px] text-slate-500">Updated {t.updated}</p>
          </div>
        ))}
      </div>

      {/* Desktop table */}
      <div className="mt-4 hidden overflow-x-auto rounded-xl border border-white/10 md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-navy-800 text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-4 py-3">Highway</th>
              <th className="px-4 py-3">State</th>
              <th className="px-4 py-3">Area / Mile Marker</th>
              <th className="px-4 py-3">Nearby</th>
              <th className="px-4 py-3">Common Issue</th>
              <th className="px-4 py-3">Notes</th>
              <th className="px-4 py-3">Updated</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {results.map((t) => (
              <tr key={t.id} className="hover:bg-navy-800/50">
                <td className="px-4 py-3"><span className="rounded bg-highway px-2 py-0.5 text-xs font-bold text-navy-950">{t.highway}</span></td>
                <td className="px-4 py-3 font-semibold text-slate-300">{t.state}</td>
                <td className="px-4 py-3 font-medium text-white">{t.area}</td>
                <td className="px-4 py-3 text-slate-300">{t.nearby}</td>
                <td className="px-4 py-3 text-slate-300">{t.issue}</td>
                <td className="px-4 py-3 text-slate-400">{t.notes}</td>
                <td className="px-4 py-3 text-slate-500">{t.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {results.length === 0 && (
        <p className="mt-6 rounded-lg border border-white/10 bg-navy-800 p-6 text-center text-sm text-slate-400">
          No matches. Try clearing a filter or searching a different corridor.
        </p>
      )}
    </div>
  );
}
