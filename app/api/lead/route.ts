import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Lead = Record<string, unknown> & {
  receivedAt: string;
};

/**
 * Placeholder lead handler.
 *
 * Behavior:
 *  - Validates a few required fields.
 *  - Optionally forwards the lead to a CRM/webhook if LEAD_WEBHOOK_URL is set.
 *  - Otherwise appends the lead to data/leads.json (local, gitignored).
 *
 * To connect a CRM later, set LEAD_WEBHOOK_URL in your environment (e.g. a
 * Zapier/Make catch hook, or your CRM's inbound endpoint). The JSON payload is
 * posted as-is. See README "Connecting the lead form to a CRM".
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const required = ["name", "phone", "email"];
  const missing = required.filter((f) => !body[f] || String(body[f]).trim() === "");
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
      { status: 422 }
    );
  }
  if (!body.consent) {
    return NextResponse.json({ ok: false, error: "Consent is required" }, { status: 422 });
  }

  const lead: Lead = { ...body, receivedAt: new Date().toISOString() };

  // 1) Forward to CRM/webhook if configured.
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead)
      });
      return NextResponse.json({ ok: true, forwarded: true });
    } catch {
      // fall through to local storage so the lead is never lost
    }
  }

  // 2) Local fallback storage (development / no CRM connected yet).
  try {
    const dir = path.join(process.cwd(), "data");
    const file = path.join(dir, "leads.json");
    await fs.mkdir(dir, { recursive: true });
    let existing: Lead[] = [];
    try {
      existing = JSON.parse(await fs.readFile(file, "utf8"));
    } catch {
      existing = [];
    }
    existing.push(lead);
    await fs.writeFile(file, JSON.stringify(existing, null, 2), "utf8");
  } catch {
    // On serverless/read-only filesystems writing may fail; still return ok so
    // the user gets a confirmation. Configure LEAD_WEBHOOK_URL in production.
    return NextResponse.json({ ok: true, stored: false });
  }

  return NextResponse.json({ ok: true, stored: true });
}
