import Link from "next/link";
import type { WriteupMeta } from "@/lib/writeups";

export default function WriteupsList({ writeups }: { writeups: WriteupMeta[] }) {
  return (
    <section id="writeups" className="section">
      <h2 className="section-heading">
        <span className="prompt">$</span> writeups --recent
      </h2>
      <p className="section-sub">
        Disclosure-style log of boxes, CTFs, and things I broke while
        learning.
      </p>

      <ul className="disclosure-log">
        {writeups.length === 0 && (
          <li className="log-entry">
            <span className="log-link">
              <span className="badge badge-info">EMPTY</span>
              <span className="log-title">
                No write-ups yet — add a .md file to content/writeups/
              </span>
            </span>
          </li>
        )}
        {writeups.map((w) => (
          <li className="log-entry" key={w.slug}>
            <Link href={`/writeups/${w.slug}`} className="log-link">
              <span className={`badge ${w.badgeClass}`}>{w.badge}</span>
              <span className="log-title">{w.title}</span>
              <span className="log-meta">
                <time dateTime={w.date}>{w.date}</time> · {w.source}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
