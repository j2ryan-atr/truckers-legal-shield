export type Service = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  keywords: string[];
  serious: boolean; // counts toward federal "serious violation" framework
  whatItMeans: string;
  consequences: string[];
  defense: string[];
  faqs: { question: string; answer: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "cdl-speeding-tickets",
    name: "CDL Speeding Ticket Defense",
    shortName: "Speeding Tickets",
    summary:
      "Speeding tickets hit CDL holders harder than four-wheel drivers. Excessive speed can count as a federal serious violation that threatens your license and your job.",
    keywords: ["CDL speeding ticket lawyer", "truck driver speeding ticket", "CDL speeding defense"],
    serious: true,
    whatItMeans:
      "Under federal rules, driving 15 mph or more over the posted limit is treated as a serious traffic violation for CDL holders. Two serious violations in three years can disqualify you; three can sideline your career for a year or more.",
    consequences: [
      "Possible CDL disqualification after multiple serious violations in a 3-year window",
      "Sharp commercial insurance and carrier safety-score increases",
      "CSA points that follow you to every carrier",
      "Lost loads, lost routes, and possible termination"
    ],
    defense: [
      "Challenge radar/lidar calibration and operator certification",
      "Question speed estimates, pacing, and clocked distance",
      "Negotiate to a non-moving or non-serious violation where the law allows",
      "Protect your record from masking prohibitions that apply to CDL holders"
    ],
    faqs: [
      {
        question: "Is 15 over really a serious violation for a CDL?",
        answer:
          "Yes. Federal regulations classify 15 mph or more over the limit as a serious traffic violation for CDL holders, regardless of whether you were driving a commercial vehicle at the time in many states."
      },
      {
        question: "Can I just pay the ticket to make it go away?",
        answer:
          "Paying the ticket is a guilty plea. It puts the conviction on your record and can trigger CDL consequences. Talk to an attorney before paying anything."
      }
    ]
  },
  {
    slug: "reckless-driving",
    name: "CDL Reckless Driving Defense",
    shortName: "Reckless Driving",
    summary:
      "Reckless driving is one of the most damaging CDL citations. It is a federal serious violation and is frequently charged after a single aggressive-driving stop.",
    keywords: ["CDL reckless driving lawyer", "truck driver reckless driving", "reckless driving CDL"],
    serious: true,
    whatItMeans:
      "Reckless driving alleges a willful or wanton disregard for safety. For CDL holders it is a defined serious violation, and a conviction can carry criminal penalties on top of license consequences.",
    consequences: [
      "Federal serious-violation status — two within 3 years risks disqualification",
      "Possible misdemeanor criminal record",
      "Major insurance and employment impact",
      "Heightened scrutiny at future inspections and hiring"
    ],
    defense: [
      "Argue the conduct was ordinary negligence, not willful recklessness",
      "Attack subjective officer observations and dashcam gaps",
      "Seek reduction to a non-serious moving violation",
      "Address any underlying mechanical or road-condition factors"
    ],
    faqs: [
      {
        question: "Why is reckless driving worse for a CDL holder?",
        answer:
          "It is both a criminal charge and a federally defined serious violation. Two serious violations in three years can disqualify your CDL, so a reckless conviction puts you one ticket away from losing your livelihood."
      }
    ]
  },
  {
    slug: "following-too-closely",
    name: "Following Too Closely Defense",
    shortName: "Following Too Closely",
    summary:
      "Tailgating tickets seem minor but are a federal serious violation for CDL drivers. They are common after rear-end stops and rolling traffic enforcement.",
    keywords: ["CDL following too closely", "tailgating ticket truck driver", "serious violation following"],
    serious: true,
    whatItMeans:
      "Following too closely is on the federal list of serious traffic violations. Large trucks need long stopping distances, so officers frequently cite commercial drivers for gaps that would be ignored in a car.",
    consequences: [
      "Counts as a serious violation toward CDL disqualification thresholds",
      "CSA Unsafe Driving points",
      "Insurance and carrier safety-rating impact"
    ],
    defense: [
      "Show the following distance was reasonable for speed and conditions",
      "Identify cut-ins by other vehicles that closed the gap",
      "Challenge the officer's distance and timing estimates"
    ],
    faqs: [
      {
        question: "Is following too closely really a serious violation?",
        answer:
          "Yes. Federal regulations specifically list following too closely as a serious traffic violation for CDL holders."
      }
    ]
  },
  {
    slug: "improper-lane-change",
    name: "Improper / Erratic Lane Change Defense",
    shortName: "Improper Lane Change",
    summary:
      "Improper or erratic lane changes are federally listed serious violations. They are often paired with other citations after a single traffic stop.",
    keywords: ["CDL improper lane change", "erratic lane change truck", "unsafe lane change CDL"],
    serious: true,
    whatItMeans:
      "Improper, erratic, or unsafe lane changes appear on the federal serious-violation list. A conviction can combine with another serious ticket to trigger disqualification.",
    consequences: [
      "Serious-violation status under federal CDL rules",
      "CSA points and carrier scrutiny",
      "Insurance increases"
    ],
    defense: [
      "Demonstrate proper signaling and mirror checks",
      "Show road work, debris, or hazards forced the maneuver",
      "Challenge the officer's vantage point and characterization"
    ],
    faqs: [
      {
        question: "What makes a lane change 'erratic'?",
        answer:
          "It is largely a judgment call by the officer. That subjectivity is also where a defense attorney can create reasonable doubt or negotiate a reduction."
      }
    ]
  },
  {
    slug: "texting-handheld-device",
    name: "Texting & Handheld Device Violation Defense",
    shortName: "Texting / Handheld",
    summary:
      "Texting and using a handheld phone while driving a CMV are federally restricted and count as serious violations. Penalties escalate quickly for repeat offenses.",
    keywords: ["CDL texting ticket", "handheld phone CMV", "distracted driving CDL"],
    serious: true,
    whatItMeans:
      "Federal rules prohibit texting and hand-held mobile phone use while operating a commercial motor vehicle. Both are listed serious violations and can lead to disqualification after multiple convictions.",
    consequences: [
      "Federal serious-violation status",
      "Disqualification after multiple convictions in the defined period",
      "Civil penalties and carrier liability exposure"
    ],
    defense: [
      "Establish hands-free or stationary use",
      "Challenge whether the device was in use while the CMV was moving",
      "Examine phone records and timestamps for context"
    ],
    faqs: [
      {
        question: "Can I use my phone at all in a truck?",
        answer:
          "Hands-free use within reach is generally allowed, but holding the phone, dialing more than a single button, or texting while the CMV is moving is prohibited and treated as a serious violation."
      }
    ]
  },
  {
    slug: "railroad-crossing-violations",
    name: "Railroad Crossing Violation Defense",
    shortName: "Railroad Crossings",
    summary:
      "Railroad-grade crossing violations carry their own federal disqualification track for CDL holders — even a first offense brings a mandatory minimum disqualification.",
    keywords: ["CDL railroad crossing violation", "grade crossing ticket truck", "railroad disqualification CDL"],
    serious: true,
    whatItMeans:
      "Railroad crossing violations (failing to stop, slow, or have sufficient clearance) are handled separately from other serious violations. A first conviction carries a mandatory disqualification of at least 60 days.",
    consequences: [
      "Mandatory 60-day disqualification for a first violation",
      "120 days for a second within 3 years; 1 year for a third",
      "Severe carrier and insurance consequences"
    ],
    defense: [
      "Challenge signal timing and visibility evidence",
      "Show compliance with stop/clearance requirements",
      "Address signage and crossing-condition defects"
    ],
    faqs: [
      {
        question: "Is a railroad crossing ticket a serious violation?",
        answer:
          "It is treated under a separate, strict federal category with mandatory disqualification periods — even a single conviction triggers a minimum 60-day disqualification."
      }
    ]
  },
  {
    slug: "out-of-service-order-violations",
    name: "Out-of-Service Order Violation Defense",
    shortName: "Out-of-Service Orders",
    summary:
      "Driving while under an out-of-service order is among the most serious CDL offenses, with mandatory disqualification periods and steep civil penalties.",
    keywords: ["CDL out of service violation", "OOS order ticket", "driving while out of service"],
    serious: true,
    whatItMeans:
      "Violating an out-of-service order — driving when you or the vehicle has been ordered off the road — carries mandatory disqualification starting at 180 days for a first offense, plus significant fines.",
    consequences: [
      "Mandatory 180-day to 2-year disqualification depending on history",
      "Civil penalties that can exceed several thousand dollars",
      "Carrier penalties and likely termination"
    ],
    defense: [
      "Verify the order was valid, properly issued, and communicated",
      "Establish the vehicle/driver status at the time of the stop",
      "Challenge identity and notice issues"
    ],
    faqs: [
      {
        question: "How long can I lose my CDL for an OOS violation?",
        answer:
          "A first conviction generally carries at least a 180-day disqualification, with longer periods for repeat violations. These are some of the harshest CDL penalties, so act fast."
      }
    ]
  },
  {
    slug: "dui-controlled-substance",
    name: "CDL DUI / Controlled Substance Defense",
    shortName: "DUI / Controlled Substance",
    summary:
      "A CDL DUI is a major offense with a one-year minimum disqualification — and a lifetime ban is possible for repeat or transport-related offenses.",
    keywords: ["CDL DUI lawyer", "trucker DUI defense", "controlled substance CDL"],
    serious: true,
    whatItMeans:
      "CDL holders face a lower 0.04 BAC threshold and are subject to disqualification even for a DUI in a personal vehicle. A first major offense brings a minimum one-year disqualification; transporting hazardous materials raises it to three years.",
    consequences: [
      "Minimum 1-year disqualification (3 years with HazMat)",
      "Lifetime disqualification possible for a second major offense",
      "Criminal record and severe employment impact"
    ],
    defense: [
      "Challenge the stop, testing procedures, and chemical analysis",
      "Examine BAC margin against the 0.04 commercial threshold",
      "Protect against refusal-based disqualification where defensible"
    ],
    faqs: [
      {
        question: "Does a DUI in my personal car affect my CDL?",
        answer:
          "Yes. A DUI in any vehicle can disqualify your CDL. The consequences reach your commercial license even when you were off duty."
      }
    ]
  },
  {
    slug: "accident-related-citations",
    name: "Accident-Related Citation Defense",
    shortName: "Accident Citations",
    summary:
      "Citations issued after a crash can carry outsized weight — especially any traffic offense connected to a fatal accident, which is a federal serious violation.",
    keywords: ["CDL accident citation", "truck accident ticket", "fatal accident CDL violation"],
    serious: true,
    whatItMeans:
      "Any traffic offense arising in connection with a fatal accident is a federally listed serious violation. Even non-fatal accident citations can drive CSA points, liability exposure, and carrier action.",
    consequences: [
      "Serious-violation status when connected to a fatality",
      "Significant civil-liability and litigation exposure",
      "CSA Crash Indicator impact"
    ],
    defense: [
      "Reconstruct the crash and challenge causation",
      "Separate the citation from fault determinations",
      "Coordinate defense with any civil claims"
    ],
    faqs: [
      {
        question: "Should I talk to investigators after a crash?",
        answer:
          "Be cautious. Statements can be used against you in both the citation and any civil case. Get legal guidance before giving detailed accounts."
      }
    ]
  },
  {
    slug: "logbook-inspection-citations",
    name: "Logbook & Inspection Citation Defense",
    shortName: "Logbook / Inspection",
    summary:
      "Hours-of-service, ELD, and inspection violations can stack up CSA points fast and put you out of service. We help protect your record and your standing.",
    keywords: ["CDL logbook violation", "ELD ticket", "DOT inspection citation", "hours of service violation"],
    serious: false,
    whatItMeans:
      "Logbook, ELD, and roadside-inspection citations are not on the federal serious-violation list, but they generate CSA points, can place you out of service, and can compound into bigger problems for you and your carrier.",
    consequences: [
      "CSA points across HOS and vehicle-maintenance categories",
      "Out-of-service designations that strand loads",
      "Carrier audits and intervention thresholds"
    ],
    defense: [
      "Audit ELD data and supporting documents for errors",
      "Challenge form-and-manner versus substantive violations",
      "Resolve citations before they harden into convictions"
    ],
    faqs: [
      {
        question: "Are logbook tickets serious violations?",
        answer:
          "They are not on the federal serious-violation list, but they still generate CSA points and can put you out of service, so they are worth fighting."
      }
    ]
  }
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
