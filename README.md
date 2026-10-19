# 0xFORLON — Next.js portfolio & write-up site

Next.js 14 (App Router, TypeScript). Same minimalist hacker-terminal design as the static version, now with write-ups powered by a real content model instead of hand-copied HTML files.

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
components/               Header, Hero, Terminal, WriteupsList, Projects, About, Contact, Footer, ThemeToggle
content/writeups/         your write-ups, as markdown files with frontmatter
lib/writeups.ts           reads + parses content/writeups at build time
```

## Content management: how this works, and your options

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

**Why this is the right default for you:** you're the only author, you're already comfortable in a text editor and git, and the content is technical (code blocks, commands) — markdown handles that better than any rich-text editor. It's also free, versioned (full history and diffs of every write-up via git), and has zero moving parts to maintain or get hacked.

**When to switch to a headless CMS instead:** worth it only if one of these becomes true —
- You want to publish from your phone without touching git/code.
- Someone non-technical (an editor, a co-author) needs to publish too.
- You want scheduled publishing, a visual editor, or image uploads through a UI.

If you get there, the migration path is small since you're already structured as frontmatter + markdown body:
- **Notion as a CMS** — write in Notion, pull it in via their API at build time. Lowest friction if you already think in Notion.
- **Sanity or Contentful** — proper structured-content CMS, free tiers available, more setup work but a real editor UI and image pipeline.
- **Git-based CMS (Decap CMS, Tina)** — adds a web form on top of your existing markdown files, so you keep this exact repo structure but get a UI. Smallest jump from where you are now.

For a solo offensive-security portfolio, most people outgrow markdown-in-git later than they expect — it's worth staying here until one of the triggers above actually happens.

## Before you deploy — placeholders to replace

- `0xforlon` handle → your real handle (`components/Header.tsx`, `Contact.tsx`, `app/layout.tsx` metadata)
- `hello@0xforlon.dev`, GitHub/X links → `components/Contact.tsx`
- About section copy → `components/About.tsx`
- Projects list → the `PROJECTS` array at the top of `components/Projects.tsx`. Each entry takes a name, description, tags, status, and an optional `url` (omit it and the card renders as non-clickable — useful for private/client work you don't want to link out).

## Notes on recent changes

- **Services section removed for now.** `components/Services.tsx` is still in the project, just not imported in `app/page.tsx`. To bring it back: import it in `page.tsx` and re-add the `#services` link in `components/Header.tsx`.
- **Dark/light toggle.** A button in the header (sun/moon icon) switches themes, persisted in `localStorage` and applied before first paint (via the inline script in `app/layout.tsx`) so there's no flash of the wrong theme on load. It also respects the visitor's OS-level preference on first visit. Theme colors are defined as CSS variables in `app/globals.css` — dark is the default `:root` block, light overrides live under `[data-theme="light"]`.
- **Font swapped to IBM Plex.** IBM Plex Mono (headers, code, terminal) + IBM Plex Sans (body text), both self-hosted via the `@fontsource` packages rather than `next/font/google` — the font files ship inside `node_modules` and get bundled at build time, so nothing is fetched from Google Fonts at dev or build time. This matters on networks that block `fonts.googleapis.com` (common on hardened/offline setups). To swap fonts: `npm install @fontsource/<font-name>`, update the `import` lines at the top of `app/layout.tsx`, and update the `--mono` / `--sans` values in `app/globals.css` to match the new font's family name.

## Deploying

**Vercel (built by the Next.js team, free tier, zero config):**
1. Push this project to a GitHub repo.
2. Import it at vercel.com → New Project.
3. It detects Next.js automatically and deploys on every push.

**Alternative:** Netlify and Cloudflare Pages both support Next.js directly if you'd rather not use Vercel.
