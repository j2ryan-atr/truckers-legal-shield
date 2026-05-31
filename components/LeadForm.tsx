"use client";

import { useState } from "react";
import { STATES } from "@/lib/states";
import { CITATION_TYPES, URGENCY_LEVELS } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

export function LeadForm({ defaultState = "", compact = false }: { defaultState?: string; compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!data.consent) {
      setStatus("error");
      setMessage("Please confirm consent to be contacted.");
      return;
    }

    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage("Thanks. Your request was received. We will work to connect you with a CDL attorney quickly.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please call us directly so we can help right away.");
    }
  }

  if (status === "success") {
    return (
      <div className="card border-highway/40 bg-navy-800 text-center" role="status">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-highway text-navy-950">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-white">Request received</h3>
        <p className="mt-2 text-sm text-slate-300">{message}</p>
      </div>
    );
  }

  const field = "w-full rounded-md border border-white/15 bg-navy-900 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-highway focus:outline-none focus:ring-1 focus:ring-highway";
  const label = "mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-300";

  return (
    <form onSubmit={onSubmit} className="card space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">Full name</label>
          <input id="name" name="name" required autoComplete="name" className={field} placeholder="John Driver" />
        </div>
        <div>
          <label className={label} htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="(555) 123-4567" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="you@email.com" />
        </div>
        <div>
          <label className={label} htmlFor="state">State of citation</label>
          <select id="state" name="state" required defaultValue={defaultState} className={field}>
            <option value="" disabled>Select state</option>
            {STATES.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="court">Court / county</label>
          <input id="court" name="court" className={field} placeholder="e.g. Greensville County" />
        </div>
        <div>
          <label className={label} htmlFor="citationType">Citation type</label>
          <select id="citationType" name="citationType" required defaultValue="" className={field}>
            <option value="" disabled>Select citation</option>
            {CITATION_TYPES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <fieldset>
          <legend className={label}>CDL holder?</legend>
          <div className="flex gap-4 pt-1 text-sm text-slate-200">
            <label className="flex items-center gap-2"><input type="radio" name="cdlHolder" value="yes" defaultChecked className="accent-highway" /> Yes</label>
            <label className="flex items-center gap-2"><input type="radio" name="cdlHolder" value="no" className="accent-highway" /> No</label>
          </div>
        </fieldset>
        <fieldset>
          <legend className={label}>Commercial vehicle involved?</legend>
          <div className="flex gap-4 pt-1 text-sm text-slate-200">
            <label className="flex items-center gap-2"><input type="radio" name="commercialVehicle" value="yes" defaultChecked className="accent-highway" /> Yes</label>
            <label className="flex items-center gap-2"><input type="radio" name="commercialVehicle" value="no" className="accent-highway" /> No</label>
          </div>
        </fieldset>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="courtDate">Court date / deadline</label>
          <input id="courtDate" name="courtDate" type="date" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="urgency">Urgency level</label>
          <select id="urgency" name="urgency" defaultValue="" className={field}>
            <option value="" disabled>Select urgency</option>
            {URGENCY_LEVELS.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>
      </div>

      {!compact && (
        <div>
          <label className={label} htmlFor="details">Tell us what happened (optional)</label>
          <textarea id="details" name="details" rows={3} className={field} placeholder="Brief description of the stop and the citation." />
        </div>
      )}

      <div>
        <label className={label} htmlFor="citationFile">Upload citation (optional)</label>
        <input id="citationFile" name="citationFile" type="file" accept="image/*,.pdf" className="w-full text-sm text-slate-400 file:mr-3 file:rounded-md file:border-0 file:bg-navy-700 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-highway" />
        <p className="mt-1 text-[11px] text-slate-500">Placeholder upload — file is not transmitted in this demo build.</p>
      </div>

      <label className="flex items-start gap-2 text-xs leading-relaxed text-slate-400">
        <input type="checkbox" name="consent" value="yes" className="mt-0.5 accent-highway" />
        <span>
          I consent to be contacted by phone, text, or email about my citation. I understand this does not
          create an attorney-client relationship and that Truckers Legal Shield is not a law firm unless
          expressly stated in a specific jurisdiction.
        </span>
      </label>

      {status === "error" && (
        <p className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300" role="alert">
          {message}
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-60">
        {status === "submitting" ? "Sending…" : "Get CDL Defense Help Now"}
      </button>
      <p className="text-center text-[11px] text-slate-500">
        Fast response matters. Do not ignore your citation — deadlines are short.
      </p>
    </form>
  );
}
