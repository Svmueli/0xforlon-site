import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllWriteupSlugs, getWriteupBySlug } from "@/lib/writeups";

export async function generateStaticParams() {
  return getAllWriteupSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const { meta } = getWriteupBySlug(params.slug);
    return {
      title: `${meta.title} — 0xFORLON`,
      description: meta.title,
    };
  } catch {
    return { title: "Write-up not found — 0xFORLON" };
  }
}

export default function WriteupPage({ params }: { params: { slug: string } }) {
  let writeup;
  try {
    writeup = getWriteupBySlug(params.slug);
  } catch {
    notFound();
  }

  const { meta, content } = writeup!;

  return (
    <>
      <Header />
      <main className="writeup">
        <Link href="/#writeups" className="back-link">
          ← back to writeups
        </Link>

        <header className="writeup-head">
          <span className={`badge ${meta.badgeClass}`}>{meta.badge}</span>
          <h1>{meta.title}</h1>
          <p className="writeup-meta">
            <time dateTime={meta.date}>{meta.date}</time> · {meta.source} ·{" "}
            {meta.tags}
          </p>
        </header>

        <article className="writeup-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ src, alt, title }) => (
                <figure className="writeup-figure">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={alt ?? ""} loading="lazy" />
                  {(title || alt) && (
                    <figcaption>{title ?? alt}</figcaption>
                  )}
                </figure>
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </main>
      <Footer />
    </>
  );
}
