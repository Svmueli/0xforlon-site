import fs from "fs";
import path from "path";
import matter from "gray-matter";

const writeupsDirectory = path.join(process.cwd(), "content/writeups");

export interface WriteupMeta {
  slug: string;
  title: string;
  date: string;
  source: string;
  tags: string;
  badge: string;
  badgeClass: "badge-critical" | "badge-high" | "badge-medium" | "badge-info";
}

export interface Writeup {
  meta: WriteupMeta;
  content: string;
}

/**
 * Lists every published write-up, newest first.
 * Files prefixed with "_" (like _template.md) are skipped, so you can keep
 * a reusable template in the same folder without it appearing on the site.
 */
export function getAllWriteups(): WriteupMeta[] {
  if (!fs.existsSync(writeupsDirectory)) return [];

  const files = fs
    .readdirSync(writeupsDirectory)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"));

  const writeups = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(
      path.join(writeupsDirectory, filename),
      "utf8"
    );
    const { data } = matter(fileContents);
    return { slug, ...(data as Omit<WriteupMeta, "slug">) };
  });

  return writeups.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getWriteupBySlug(slug: string): Writeup {
  const fullPath = path.join(writeupsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { meta: { slug, ...(data as Omit<WriteupMeta, "slug">) }, content };
}

export function getAllWriteupSlugs(): string[] {
  return getAllWriteups().map((w) => w.slug);
}
