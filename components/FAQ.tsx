import { JsonLd } from "./JsonLd";
import { faqSchema } from "@/lib/seo";

export type FAQItem = { question: string; answer: string };

export function FAQ({ items, heading = "Frequently Asked Questions" }: { items: FAQItem[]; heading?: string }) {
  return (
    <section className="section" aria-labelledby="faq-heading">
      <div className="container-px">
        <p className="eyebrow">Answers for drivers</p>
        <h2 id="faq-heading" className="mt-2 text-3xl font-bold text-white">
          {heading}
        </h2>
        <div className="mt-8 divide-y divide-white/10 rounded-xl border border-white/10 bg-navy-800/50">
          {items.map((f) => (
            <details key={f.question} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white">
                {f.question}
                <span className="text-highway transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqSchema(items)} />
    </section>
  );
}
