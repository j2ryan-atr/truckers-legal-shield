import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-px flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-2 text-4xl font-extrabold text-white">Off the route</h1>
        <p className="mt-3 max-w-md text-slate-400">
          We couldn't find that page. Let's get you back on the road to protecting your CDL.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">Back to home</Link>
          <Link href="/get-help" className="btn-secondary">Get CDL Defense Help</Link>
        </div>
      </div>
    </section>
  );
}
