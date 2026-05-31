export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readMinutes: number;
  tags: string[];
  body: Block[];
};

const DISCLAIMER =
  "This article is general information, not legal advice. CDL rules combine federal and state law, and outcomes depend on the specific facts of your case. Talk to a licensed attorney about your citation.";

export const POSTS: Post[] = [
  {
    slug: "what-is-a-serious-offense-for-cdl-drivers",
    title: "What Is a Serious Offense for CDL Drivers?",
    description:
      "A plain-English breakdown of the federal 'serious traffic violations' that can put a commercial driver's license at risk.",
    date: "2026-05-20",
    readMinutes: 6,
    tags: ["serious violations", "basics"],
    body: [
      { type: "p", text: "If you hold a CDL, the words 'serious traffic violation' carry a specific federal meaning. They are not just any ticket — they are a defined list of offenses that can lead to losing your commercial license. Understanding that list is the first step to protecting your career." },
      { type: "h2", text: "The federal serious-violation list" },
      { type: "p", text: "Federal regulations identify a core set of serious traffic violations for CDL holders. They include:" },
      { type: "ul", items: [
        "Excessive speeding — 15 mph or more over the posted limit",
        "Reckless driving",
        "Improper or erratic lane changes",
        "Following too closely",
        "Traffic offenses connected with a fatal accident",
        "Driving a commercial vehicle without the proper CDL",
        "Driving without your CDL in your possession",
        "Driving without the proper class of license or endorsement",
        "Texting while driving a CMV",
        "Using a hand-held mobile phone while driving a CMV"
      ] },
      { type: "h2", text: "Why the label matters" },
      { type: "p", text: "Two serious violations within a three-year period can disqualify your CDL for at least 60 days. Three within three years can mean 120 days or more. These periods stack on top of any fines or points from the underlying ticket — and a disqualification means you cannot legally work as a commercial driver." },
      { type: "h2", text: "What you should do" },
      { type: "p", text: "Do not just pay a serious-violation ticket. Paying it is a guilty plea that locks in the conviction. Because CDL holders generally cannot 'mask' convictions through diversion programs, your best move is to fight the citation or negotiate it down to a non-serious offense before it becomes final." },
      { type: "p", text: DISCLAIMER }
    ]
  },
  {
    slug: "how-serious-violations-lead-to-cdl-disqualification",
    title: "How Serious Violations Can Lead to CDL Disqualification",
    description:
      "The math behind CDL disqualification: how many serious violations it takes, the time windows, and how the penalties stack.",
    date: "2026-05-18",
    readMinutes: 5,
    tags: ["serious violations", "disqualification"],
    body: [
      { type: "p", text: "CDL disqualification is not a vague threat — it follows a formula. Once you understand the counting rules, you can see why a single 'minor' ticket can be the difference between working and being parked." },
      { type: "h2", text: "The two-and-three rule" },
      { type: "ul", items: [
        "Two serious violations in 3 years: at least a 60-day disqualification",
        "Three serious violations in 3 years: at least a 120-day disqualification",
        "The clock looks at the dates of the offenses, not the convictions"
      ] },
      { type: "h2", text: "Major offenses are even harsher" },
      { type: "p", text: "Separate from serious violations, 'major' offenses like DUI, refusing a chemical test, leaving the scene, or using a CMV to commit a felony carry a one-year minimum disqualification on a first offense — three years if hazardous materials were involved, and a lifetime ban can apply to a second major offense." },
      { type: "h2", text: "Why timing is everything" },
      { type: "p", text: "Because the windows are measured from offense dates, the order and timing of your tickets matter. Getting one serious violation reduced or dismissed can keep you under the threshold that triggers disqualification. That is why acting quickly — before a conviction is entered — is so important." },
      { type: "p", text: DISCLAIMER }
    ]
  },
  {
    slug: "why-cdl-speeding-tickets-are-more-dangerous",
    title: "Why CDL Speeding Tickets Are More Dangerous Than Regular Tickets",
    description:
      "A speeding ticket that is a nuisance for a four-wheeler can threaten a trucker's livelihood. Here is why.",
    date: "2026-05-15",
    readMinutes: 5,
    tags: ["speeding", "serious violations"],
    body: [
      { type: "p", text: "Most drivers treat a speeding ticket as a minor expense. For a CDL holder, the same piece of paper can put your job, your insurance, and your future loads on the line." },
      { type: "h2", text: "15 over is a serious violation" },
      { type: "p", text: "Federal rules treat 15 mph or more over the limit as a serious traffic violation. Pair it with one more serious ticket in three years and you are facing disqualification. The fine is the least of your worries." },
      { type: "h2", text: "It follows you everywhere" },
      { type: "ul", items: [
        "CSA points attach to your record and your carrier's safety score",
        "Commercial insurance rates climb after convictions",
        "Hiring managers see your violation history through PSP reports",
        "Some carriers automatically disqualify drivers after certain tickets"
      ] },
      { type: "h2", text: "You usually cannot hide it" },
      { type: "p", text: "Many states let regular drivers take traffic school or deferral to keep tickets off their record. CDL holders generally cannot — federal law prohibits masking convictions for commercial drivers. Fighting the ticket is often the only real way to protect your record." },
      { type: "p", text: DISCLAIMER }
    ]
  },
  {
    slug: "can-a-cdl-driver-mask-or-reduce-a-citation",
    title: "Can a CDL Driver Mask or Reduce a Traffic Citation?",
    description:
      "Masking is off the table for CDL holders, but reduction and dismissal are not. Here is the difference and why it matters.",
    date: "2026-05-12",
    readMinutes: 5,
    tags: ["basics", "defense"],
    body: [
      { type: "p", text: "There is a lot of confusion about what a CDL driver can and cannot do with a ticket. The key is understanding the difference between masking, reducing, and dismissing a citation." },
      { type: "h2", text: "Masking is prohibited" },
      { type: "p", text: "Federal law bars states from 'masking' a CDL holder's conviction — that means no diversion programs, deferred adjudication, or traffic school that hides the conviction from your record. A court cannot keep a qualifying conviction off your CDL history." },
      { type: "h2", text: "Reduction and dismissal are different" },
      { type: "p", text: "What an attorney can often do is negotiate the charge itself down to a non-serious offense, or get it dismissed entirely based on the evidence. That is not masking — it changes what you are actually convicted of, which is permitted." },
      { type: "ul", items: [
        "Reducing 'following too closely' to a non-serious equipment or parking offense",
        "Negotiating a speed below the 15-over serious-violation threshold",
        "Challenging the stop or the evidence to win a dismissal"
      ] },
      { type: "p", text: "Because the rules are strict and vary by state, a local attorney who handles CDL cases is the person who knows what reductions a particular court and prosecutor will accept." },
      { type: "p", text: DISCLAIMER }
    ]
  },
  {
    slug: "what-happens-after-a-cdl-reckless-driving-ticket",
    title: "What Happens After a CDL Driver Gets a Reckless Driving Ticket?",
    description:
      "Reckless driving is both a crime and a serious CDL violation. Here is what to expect and what to do first.",
    date: "2026-05-09",
    readMinutes: 5,
    tags: ["reckless driving", "serious violations"],
    body: [
      { type: "p", text: "A reckless driving charge is one of the worst tickets a commercial driver can receive, because it hits you on two fronts at once: criminal court and your CDL." },
      { type: "h2", text: "Two problems, one ticket" },
      { type: "ul", items: [
        "Criminal: reckless driving is usually a misdemeanor with possible fines and even jail",
        "Licensing: it is a federally listed serious violation that counts toward disqualification"
      ] },
      { type: "h2", text: "What to do first" },
      { type: "p", text: "Write down everything you remember about the stop while it is fresh — speed, road conditions, traffic, what the officer said. Preserve any dashcam or ELD data. Then talk to an attorney before your court date; reckless charges often hinge on subjective officer judgment that can be challenged." },
      { type: "h2", text: "Why a reduction matters so much" },
      { type: "p", text: "Getting reckless driving reduced to a non-serious offense does more than lower a fine — it can keep you off the path to disqualification and protect you from a criminal record that follows you to every future employer." },
      { type: "p", text: DISCLAIMER }
    ]
  },
  {
    slug: "cdl-following-too-closely-tickets",
    title: "CDL Following Too Closely Tickets: Why They Matter",
    description:
      "Tailgating tickets look minor but are a federal serious violation for truckers. Here is what is really at stake.",
    date: "2026-05-06",
    readMinutes: 4,
    tags: ["following too closely", "serious violations"],
    body: [
      { type: "p", text: "Following too closely sounds like a slap on the wrist. For a CDL holder it is anything but — it sits on the federal serious-violation list right next to reckless driving and excessive speed." },
      { type: "h2", text: "Why trucks get cited more" },
      { type: "p", text: "A loaded truck needs far more distance to stop than a car. Officers know this, and a gap that looks fine for a sedan can be cited as following too closely for an 80,000-pound rig. Cut-ins by other vehicles often create the exact situation that gets you ticketed." },
      { type: "h2", text: "What is at stake" },
      { type: "ul", items: [
        "Serious-violation status toward CDL disqualification",
        "CSA Unsafe Driving points",
        "Insurance and carrier safety-rating impact"
      ] },
      { type: "h2", text: "How these are defended" },
      { type: "p", text: "A good defense often focuses on whether the distance was reasonable for the speed and conditions, and whether another driver cut in front of you. Officer distance estimates are also frequently challengeable." },
      { type: "p", text: DISCLAIMER }
    ]
  },
  {
    slug: "cdl-cell-phone-and-texting-violations-explained",
    title: "CDL Cell Phone and Texting Violations Explained",
    description:
      "What counts as a handheld or texting violation in a CMV, and why these convictions are so costly for CDL holders.",
    date: "2026-05-03",
    readMinutes: 5,
    tags: ["distracted driving", "serious violations"],
    body: [
      { type: "p", text: "Phone use behind the wheel of a commercial vehicle is tightly regulated. Both texting and holding a phone are federally restricted, and convictions count as serious violations." },
      { type: "h2", text: "What is prohibited" },
      { type: "ul", items: [
        "Texting while the CMV is moving",
        "Holding a mobile phone to make or take a call",
        "Reaching for a phone in an unsafe position",
        "Dialing by pressing more than a single button"
      ] },
      { type: "h2", text: "What is allowed" },
      { type: "p", text: "Hands-free use with the phone mounted within reach is generally permitted. Using a single-button voice command or speakerphone is the safe approach. The violation is about holding and manipulating the device while driving." },
      { type: "h2", text: "Why it is expensive" },
      { type: "p", text: "Beyond fines, these are serious violations that count toward disqualification, and multiple convictions trigger mandatory disqualification periods. Carriers also face civil penalties, so a conviction can put your job at risk." },
      { type: "p", text: DISCLAIMER }
    ]
  },
  {
    slug: "how-out-of-state-tickets-affect-your-cdl",
    title: "How Out-of-State Tickets Affect Your CDL",
    description:
      "A ticket far from home does not stay there. Here is how out-of-state CDL citations follow you back to your home state.",
    date: "2026-04-30",
    readMinutes: 5,
    tags: ["interstate", "basics"],
    body: [
      { type: "p", text: "Truckers cross state lines for a living, and a citation in a state you were just passing through can feel easy to ignore. It is not. Through interstate compacts, that ticket finds its way home." },
      { type: "h2", text: "How the information travels" },
      { type: "p", text: "States share conviction data, and CDL holders are required to be tracked through a single driver record. A conviction in another state is reported back to your home state and added to your CDL history just as if it happened at home." },
      { type: "h2", text: "Why ignoring it backfires" },
      { type: "ul", items: [
        "Missing an out-of-state court date can trigger a failure-to-appear and license suspension",
        "The conviction still counts toward federal serious-violation thresholds",
        "Unpaid fines can lead to holds that stop you from renewing your CDL"
      ] },
      { type: "h2", text: "The practical answer" },
      { type: "p", text: "You usually do not have to travel back for the case. A local attorney in the citation state can often appear on your behalf, fight the ticket, and negotiate a reduction — without you losing days off the road." },
      { type: "p", text: DISCLAIMER }
    ]
  },
  {
    slug: "interstate-speed-traps-what-truckers-should-know",
    title: "Interstate Speed Traps: What Truckers Should Know",
    description:
      "How enforcement-prone interstate corridors work, and how to protect yourself when you get stopped.",
    date: "2026-04-27",
    readMinutes: 5,
    tags: ["interstate", "speeding"],
    body: [
      { type: "p", text: "Certain stretches of the interstate system are well known among drivers for heavy commercial enforcement. Knowing where they are — and how to handle a stop — keeps small mistakes from becoming career problems." },
      { type: "h2", text: "Where enforcement concentrates" },
      { type: "ul", items: [
        "Steep grades and downgrades where truck speed is closely watched",
        "Speed-limit transitions entering towns from open highway",
        "Inspection-station corridors and port-of-entry zones",
        "Construction work zones with reduced limits"
      ] },
      { type: "h2", text: "Handling a stop" },
      { type: "p", text: "Be professional, keep your hands visible, and provide your documents. You are not required to volunteer that you were speeding. Note the conditions, the equipment the officer used, and exactly where you were stopped — these details matter later." },
      { type: "h2", text: "Use the data, not just instinct" },
      { type: "p", text: "Our speed trap database tracks reported enforcement areas along major freight corridors. Treat it as a heads-up to slow down and stay alert — not as legal advice about any specific location." },
      { type: "p", text: DISCLAIMER }
    ]
  },
  {
    slug: "why-you-should-fight-cdl-tickets-quickly",
    title: "Why You Should Fight CDL Tickets Quickly",
    description:
      "Deadlines are short and options shrink fast. Here is why speed is your friend after a CDL citation.",
    date: "2026-04-24",
    readMinutes: 4,
    tags: ["defense", "urgency"],
    body: [
      { type: "p", text: "After a CDL citation, time is not on your side. Court deadlines are short, evidence fades, and the longer you wait, the fewer options you have." },
      { type: "h2", text: "What slips away when you wait" },
      { type: "ul", items: [
        "Dashcam and ELD data can be overwritten or lost",
        "Witness memories fade and details disappear",
        "Court deadlines pass, turning a fightable ticket into an automatic conviction",
        "Prosecutors are often more flexible early, before the docket hardens"
      ] },
      { type: "h2", text: "The cost of a default" },
      { type: "p", text: "Simply paying the ticket or missing the date enters a conviction on your CDL record. Once that happens, it is extremely hard to undo. Acting in the first days after a citation keeps reduction and dismissal on the table." },
      { type: "p", text: "If you have a citation in hand, the smartest move is to get it in front of an attorney before the deadline — not after." },
      { type: "p", text: DISCLAIMER }
    ]
  },
  {
    slug: "how-attorney-networks-help-truck-drivers-nationwide",
    title: "How Attorney Networks Help Truck Drivers Nationwide",
    description:
      "Why a nationwide network of local CDL-focused attorneys beats trying to find a lawyer in a strange town yourself.",
    date: "2026-04-21",
    readMinutes: 4,
    tags: ["network", "interstate"],
    body: [
      { type: "p", text: "When you get cited a thousand miles from home, finding the right local attorney on your own is hard. A nationwide network solves that problem by connecting you with a lawyer who already knows the local court." },
      { type: "h2", text: "Why local knowledge wins" },
      { type: "p", text: "Traffic and CDL cases are won on local relationships and local practice. An attorney who regularly appears in the citation county knows the prosecutor, the judge's tendencies, and what reductions are realistically available." },
      { type: "h2", text: "What a network adds" },
      { type: "ul", items: [
        "Fast matching to a CDL-focused attorney in the right jurisdiction",
        "Often the ability to appear on your behalf so you stay on the road",
        "One point of contact instead of cold-calling strange firms",
        "Attorneys who understand federal CDL consequences, not just the local fine"
      ] },
      { type: "p", text: "The goal is simple: keep you driving while a qualified local attorney handles the citation the right way." },
      { type: "p", text: DISCLAIMER }
    ]
  },
  {
    slug: "cdl-defense-checklist-after-a-citation",
    title: "CDL Defense Checklist After Receiving a Citation",
    description:
      "A step-by-step checklist for commercial drivers in the critical first days after getting a ticket.",
    date: "2026-04-18",
    readMinutes: 4,
    tags: ["defense", "checklist"],
    body: [
      { type: "p", text: "What you do in the first few days after a CDL citation can shape the entire outcome. Use this checklist to protect your record and your livelihood." },
      { type: "h2", text: "Right away" },
      { type: "ul", items: [
        "Do not admit fault or pay the ticket — paying is a guilty plea",
        "Read the citation for the charge, court, and deadline",
        "Photograph the ticket and store it somewhere safe",
        "Write down everything about the stop while it is fresh"
      ] },
      { type: "h2", text: "Within the first week" },
      { type: "ul", items: [
        "Preserve dashcam, ELD, and any relevant logs",
        "Note road, weather, and traffic conditions at the time",
        "Identify the exact location and mile marker",
        "Contact a CDL-focused attorney in the citation state"
      ] },
      { type: "h2", text: "Before your court date" },
      { type: "ul", items: [
        "Confirm whether your attorney can appear for you",
        "Understand whether the charge is a serious violation",
        "Ask about realistic reduction or dismissal options",
        "Never ignore the date — a default becomes a conviction"
      ] },
      { type: "p", text: DISCLAIMER }
    ]
  }
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export const POST_SLUGS = POSTS.map((p) => p.slug);

export const POSTS_BY_DATE = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
