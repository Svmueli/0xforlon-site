# 0xFORLON —  portfolio & write-up site

Next.js 14 (App Router, TypeScript). Minimalist design with write-ups powered by a real content model instead of hand-copied HTML files.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. For production:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx              self-hosted fonts (@fontsource, no network calls) + metadata
  page.tsx                home page — assembles all sections
  globals.css             design tokens + all styles
  writeups/[slug]/page.tsx   dynamic write-up post page, statically generated
components/               Header, Hero, Terminal, WriteupsList, Projects, Education, Certifications, About, Contact, Footer, ThemeToggle
content/writeups/         your write-ups, as markdown files with frontmatter
lib/writeups.ts           reads + parses content/writeups at build time
```

## Content management: How this works.

**What's built in:** write-ups live as markdown files in `content/writeups/`, each with YAML frontmatter (title, date, source, tags, badge). `lib/writeups.ts` reads that folder at build time — no database, no CMS dashboard, no API keys. To publish, add a file; to unpublish, delete or rename it with a leading underscore (ignored by the loader — that's what `_template.md` uses).

**Adding a new write-up:**
1. Copy `content/writeups/_template.md` to `content/writeups/your-slug.md`.
2. Fill in the frontmatter and the five sections.
3. `npm run dev` to preview, then deploy — it appears in the list automatically, sorted by date, no code changes needed.

**Adding screenshots:**
1. Create a folder for the write-up's images: `public/writeups/your-slug/`.
2. Drop your image files in there (PNG/JPG/WebP — keep them reasonably sized, a few hundred KB max, since they're served as-is).
3. Reference them in the markdown with standard image syntax, using the `title` field for an optional caption:
   ```markdown
   ![Alt text for accessibility](/writeups/your-slug/screenshot.png "Optional caption shown under the image")
   ```
4. It renders bordered and full-width, matching the terminal aesthetic, with the caption (or alt text, if no title is given) shown underneath.

The `content/writeups/sample-htb-box.md` post has a working example if you want to see it live.

**Why this is the right default for me:** I'm the only author, already comfortable in a text editor and git, and the content is technical (code blocks, commands) — markdown handles that better than any rich-text editor. It's also free, versioned (full history and diffs of every write-up via git), and has zero moving parts to maintain or get hacked.

**When to switch to a headless CMS instead:** worth it only if one of these becomes true —
- Want to publish from a phone without touching git/code.
- Someone non-technical (an editor, a co-author) needs to publish too.
- Want scheduled publishing, a visual editor, or image uploads through a UI.

If it gets there, the migration path is small since I'm already structured as frontmatter + markdown body.

For a solo offensive-security portfolio, most people outgrow markdown-in-git later than they expect — it's worth staying here until one of the triggers above actually happens.

## Before you deploy — placeholders to replace

- `0xforlon` handle → your real handle (`components/Header.tsx`, `Contact.tsx`, `app/layout.tsx` metadata)
- `hello@0xforlon.dev`, GitHub/X links → `components/Contact.tsx`
- About section copy → `components/About.tsx`
- Education → the `EDUCATION` array in `components/Education.tsx`.
- Trainings/certifications → the `CERTIFICATIONS` array in `components/Certifications.tsx`; add an entry per course or cert, with a status like "Completed" or "In progress".
- Navbar → centered, with index / writeups / contact / theme toggle in `components/Header.tsx`. Projects, Education, Certifications and About are still on the page, just not in the nav.
- Projects list → the `PROJECTS` array at the top of `components/Projects.tsx`. Each entry takes a name, description, tags, status, and an optional `url` (omit it and the card renders as non-clickable — useful for private/client work you don't want to link out).


## Deploying

**Vercel (built by the Next.js team, free tier, zero config):**
1. Push this project to a GitHub repo.
2. Import it at vercel.com → New Project.
3. It detects Next.js automatically and deploys on every push.

**Alternative:** Netlify and Cloudflare Pages both support Next.js directly if you'd rather not use Vercel.
