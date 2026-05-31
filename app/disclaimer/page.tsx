import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Legal Disclaimer & Attorney Advertising Notice",
  description:
    "Important legal disclaimers for Truckers Legal Shield, including attorney advertising notice, no-guarantee-of-outcome, and how state and federal CDL rules vary.",
  path: "/disclaimer",
  keywords: ["legal disclaimer", "attorney advertising notice"]
});

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Disclaimer", path: "/disclaimer" }]} />
      <PageHero eyebrow="Legal" title="Disclaimer & Important Notices" />

      <section className="section">
        <div className="container-px prose-tls max-w-3xl">
          <h2>Not a law firm</h2>
          <p>
            {SITE.name} is not a law firm unless expressly stated in a specific jurisdiction. Use of this
            website does not create an attorney-client relationship. Attorney availability, legal options, and
            outcomes vary by jurisdiction and case facts. We connect commercial drivers with independent
            attorneys; the attorneys are solely responsible for the legal services they provide.
          </p>

          <h2>Attorney advertising</h2>
          <p>
            This website may constitute attorney advertising in some jurisdictions. The information provided
            here is for general informational purposes and is not a solicitation for legal services in any
            jurisdiction where such solicitation would be prohibited.
          </p>

          <h2>No guarantee of outcome</h2>
          <p>
            Prior results do not guarantee or predict a similar outcome. Every case is different. We make no
            guarantee, representation, or warranty regarding the outcome of any matter. Any discussion of
            potential strategies or results is general and not a promise of any specific result in your case.
          </p>

          <h2>State law varies</h2>
          <p>
            Traffic and licensing laws differ from state to state and change over time. Procedures, deadlines,
            penalties, and available defenses depend on the specific state, county, and court involved. Nothing
            on this site should be relied upon as legal advice for your situation.
          </p>

          <h2>Federal and state CDL rules</h2>
          <p>
            CDL consequences may involve both federal and state rules. Federal regulations define serious and
            major violations and disqualification periods, while states administer licensing, courts, and
            enforcement. The interaction between these systems is complex and fact-specific. Consult a licensed
            attorney about how the rules apply to you.
          </p>

          <h2>Speed trap database</h2>
          <p>
            Entries in our speed trap database describe areas where commercial traffic enforcement has been
            reported along known freight corridors. They are provided for general awareness and safety, are not
            verified in real time, and are not legal conclusions, accusations, or advice about any agency or
            location. Always follow posted limits and lawful instructions.
          </p>

          <p className="text-sm text-slate-500">
            Questions about these notices? <Link href="/get-help">Contact us</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
