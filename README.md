# Max Becker — portfolio site

A Next.js (App Router, TypeScript) site that builds to plain static HTML, so it can be hosted anywhere: GitHub Pages, Netlify, Vercel, or any web server.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000, live-reloads as you edit
npm run build      # writes the finished site to ./out
```

## Where to change things

Almost everything you'd want to edit is in two files:

| File | What's in it |
| --- | --- |
| `src/data/profile.ts` | Your intro, the line about what you're looking for, the "Where I fit" role → proof list, the "On the record" numbers, experience, education, skills, email and links |
| `src/data/projects.ts` | The four projects: summary, facts, sections, steps and images. Each becomes a page at `/work/<slug>/`. The optional `shows` line is the one-sentence takeaway on each case study |

To add a project, copy one block in `projects.ts`, give it a new `slug`, and put its images in `public/img/<folder>/`. The home page and its case-study page pick it up automatically. `color` picks which trace colour it gets: `yellow`, `cyan`, `violet` or `green`.

Other files:

- `src/app/globals.css` — all styling. Colours and fonts are the variables at the top.
- `src/app/page.tsx` — the home page layout.
- `src/app/work/[slug]/page.tsx` — the case-study page layout.
- `src/components/Terrain.tsx` — the contour map and animated lines in the hero. The terrain shape itself is generated data in `src/data/terrain.ts`.
- `public/img/` — web-sized copies of photos from the project folders.

## Design notes

- The signature is the line traced over terrain, borrowed from how RCxDrive draws a run. Each project carries one of the four trace colours.
- Fonts are self-hosted from npm (Bricolage Grotesque for headings, Source Serif 4 for reading), so nothing loads from Google.
- The hero animation runs once on load and is skipped for anyone with reduced motion turned on.

## Publish

The site is plain static files, so any host works. The two easiest:

### GitHub Pages (free, already wired up)

1. Create a GitHub repo (for example `portfolio`) and push this folder to its `main` branch.
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. That's it. `.github/workflows/deploy.yml` builds on every push and publishes to `https://qwewe6.github.io/portfolio/`. The workflow sets the base path from the repo name automatically.

   With a custom domain: add it under Settings → Pages, create `public/CNAME` containing the domain, and push. The workflow then builds with no base path.

To test the Pages build locally: `NEXT_PUBLIC_BASE_PATH=/portfolio npm run build && npm start`, then open `http://localhost:3000/portfolio/`.

### Vercel or Netlify

Import the repo; both detect Next.js. No settings needed. Set the environment variable `NEXT_PUBLIC_SITE_URL` to the final URL (e.g. `https://maxbecker.dev`) so link previews on LinkedIn get absolute image URLs.

## Before you push

- `public/Max-Becker-Resume.pdf` is the résumé the "Résumé (PDF)" buttons download. Replace it whenever you update your résumé; keep the filename or change `resume` in `src/data/profile.ts`.
- The role-targeting copy (hero line, "Where I fit in education", contact text) lives in `src/data/profile.ts` (`looking`, `fit`) and `src/components/Contact.tsx`. Retune it per application if you like.
