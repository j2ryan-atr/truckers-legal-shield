/**
 * Truckers Legal Shield — Lead capture via Google Apps Script
 * ----------------------------------------------------------------
 * Receives lead submissions from the site's /api/lead route (which
 * forwards JSON to LEAD_WEBHOOK_URL), appends each lead as a row in
 * the bound Google Sheet, and emails a notification.
 *
 * SETUP (see README "Connecting the lead form to a CRM"):
 *   1. Create a Google Sheet. Extensions → Apps Script.
 *   2. Paste this file in, replace NOTIFY_EMAIL below.
 *   3. Deploy → New deployment → type "Web app".
 *        - Execute as:  Me
 *        - Who has access:  Anyone
 *   4. Copy the Web app URL (ends in /exec).
 *   5. In Vercel → Settings → Environment Variables, set
 *        LEAD_WEBHOOK_URL = that /exec URL  (Production), then redeploy.
 */

// Where to send lead notifications. Change this.
const NOTIFY_EMAIL = "you@example.com";

// Column order written to the sheet (header row auto-created).
const COLUMNS = [
  "receivedAt",
  "name",
  "phone",
  "email",
  "state",
  "court",
  "citationType",
  "cdlHolder",
  "commercialVehicle",
  "courtDate",
  "urgency",
  "details",
  "consent"
];

function doPost(e) {
  try {
    const lead = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Ensure a header row exists.
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUMNS);
    }

    const stamp = lead.receivedAt || new Date().toISOString();
    const row = COLUMNS.map((key) => (key === "receivedAt" ? stamp : lead[key] || ""));
    sheet.appendRow(row);

    // Email notification.
    const subject = `New CDL lead: ${lead.name || "Unknown"} (${lead.state || "?"})`;
    const body = COLUMNS.map((k) => `${k}: ${k === "receivedAt" ? stamp : lead[k] || ""}`).join("\n");
    MailApp.sendEmail(NOTIFY_EMAIL, subject, body + "\n\n— TruckersLegalShield.com");

    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
      ContentService.MimeType.JSON
    );
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Simple health check when visiting the URL in a browser.
function doGet() {
  return ContentService.createTextOutput("Truckers Legal Shield lead endpoint is live.");
}
