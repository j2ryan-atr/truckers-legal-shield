import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { POSTS, POST_SLUGS, getPost, type Block } from "@/lib/blog";
import { buildMetadata, blogPostingSchema } from "@/lib/seo";

export function generateStaticParams() {
  return POST_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug);
  if (!p) return {};
  return buildMetadata({
    title: p.title,
    description: p.description,
    path: `/blog/${p.slug}`,
    keywords: p.tags,
    type: "article",
    publishedTime: p.date
  });
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function renderBlock(b: Block, i: number) {
  if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
  if (b.type === "ul")
    return (
      <ul key={i}>
        {b.items.map((it, j) => (
          <li key={j}>{it}</li>
        ))}
      </ul>
    );
  return <p key={i}>{b.text}</p>;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` }
        ]}
      />

      <article className="section">
        <div className="container-px max-w-3xl">
          <p className="eyebrow">{post.tags.join(" · ")}</p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl">{post.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span>{post.readMinutes} min read</span>
          </div>
          <p className="mt-6 text-lg text-slate-300">{post.description}</p>

          <div className="prose-tls mt-8">{post.body.map(renderBlock)}</div>

          <div className="mt-10 rounded-xl border border-highway/30 bg-navy-800 p-6">
            <h2 className="text-lg font-bold text-white">Cited and not sure what to do?</h2>
            <p className="mt-2 text-sm text-slate-300">
              Do not ignore the citation. Connect with a CDL-focused attorney before your deadline.
            </p>
            <Link href="/get-help" className="btn-primary mt-4">Get CDL Defense Help Now</Link>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-white">Keep reading</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="rounded-lg border border-white/10 bg-navy-800 p-4 transition hover:border-highway/50">
                  <span className="text-sm font-semibold text-white">{r.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <JsonLd
        data={blogPostingSchema({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          datePublished: post.date
        })}
      />
      <CTABand />
    </>
  );
}
