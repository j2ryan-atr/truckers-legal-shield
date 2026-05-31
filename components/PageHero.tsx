export function PageHero({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-navy-900">
      <div className="absolute inset-0 bg-grid-motif [background-size:44px_44px] opacity-50" aria-hidden="true" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-highway/10 blur-3xl" aria-hidden="true" />
      <div className="container-px relative py-12 sm:py-16">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-2 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-slate-300">{subtitle}</p>}
      </div>
    </section>
  );
}
