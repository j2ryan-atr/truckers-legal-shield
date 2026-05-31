export const HOME_FAQS = [
  {
    question: "Why are CDL tickets different from regular traffic tickets?",
    answer:
      "CDL holders are held to a stricter federal standard. Offenses like 15-over speeding, following too closely, and improper lane changes are 'serious violations' that can lead to disqualification, and CDL holders generally cannot use traffic school or diversion to hide a conviction."
  },
  {
    question: "Will paying my ticket make the problem go away?",
    answer:
      "No. Paying a ticket is a guilty plea that puts the conviction on your CDL record, where it can trigger disqualification, CSA points, and insurance and employment consequences. Talk to an attorney before paying anything."
  },
  {
    question: "I was cited in a state I was just driving through. Do I have to go back?",
    answer:
      "Usually not. A local attorney in the citation state can often appear on your behalf, fight the ticket, and negotiate a reduction so you can keep driving without losing days on the road."
  },
  {
    question: "How fast can you connect me with an attorney?",
    answer:
      "Our network is built for speed. Submit your citation details and we work to match you with a CDL-focused attorney in the right jurisdiction quickly — because court deadlines are short and early action matters."
  },
  {
    question: "How many serious violations does it take to lose my CDL?",
    answer:
      "Two serious violations within three years can disqualify your CDL for at least 60 days; three within three years can mean 120 days or more. Major offenses like DUI carry a one-year minimum on a first offense."
  },
  {
    question: "Is Truckers Legal Shield a law firm?",
    answer:
      "Truckers Legal Shield is not a law firm unless expressly stated in a specific jurisdiction. We connect commercial drivers with independent attorneys. Using this site does not create an attorney-client relationship."
  }
];

// Federal serious-violation examples (used on the serious-violations page).
export const SERIOUS_VIOLATIONS = [
  { title: "Excessive speeding", detail: "Driving 15 mph or more over the posted speed limit." },
  { title: "Reckless driving", detail: "Operating with willful or wanton disregard for safety." },
  { title: "Improper or erratic lane changes", detail: "Unsafe, weaving, or improper lane movements." },
  { title: "Following too closely", detail: "Failing to keep a safe distance behind another vehicle." },
  { title: "Traffic offense connected to a fatal accident", detail: "Any traffic violation arising in connection with a fatality." },
  { title: "Driving a CMV without a CDL", detail: "Operating a commercial motor vehicle without holding a CDL." },
  { title: "Driving without the CDL in possession", detail: "Operating a CMV without your CDL physically present." },
  { title: "Wrong class or missing endorsement", detail: "Driving without the proper class of license or required endorsement." },
  { title: "Texting while driving", detail: "Texting while operating a commercial motor vehicle." },
  { title: "Using a hand-held mobile phone", detail: "Holding and using a mobile telephone while driving a CMV." }
];

// Citation types for the intake form select.
export const CITATION_TYPES = [
  "Speeding (15+ over)",
  "Speeding (under 15 over)",
  "Reckless driving",
  "Following too closely",
  "Improper / erratic lane change",
  "Texting / handheld device",
  "Railroad crossing violation",
  "Out-of-service order violation",
  "DUI / controlled substance",
  "Accident-related citation",
  "Logbook / HOS / ELD",
  "Inspection / equipment",
  "Other"
];

export const URGENCY_LEVELS = [
  "Court date within 7 days",
  "Court date within 30 days",
  "No court date yet",
  "Just received citation",
  "Not sure"
];

export const TRUST_POINTS = [
  { title: "Nationwide network", detail: "Attorneys across all 50 states and D.C." },
  { title: "Fast attorney dispatch", detail: "Built to match you quickly, before deadlines hit." },
  { title: "CDL-focused defense", detail: "Lawyers who understand federal CDL consequences." },
  { title: "License protection", detail: "Focused on keeping you qualified and on the road." }
];
