# Max Becker — portfolio site

A short Next.js site (App Router, TypeScript, static export) that builds to plain HTML. Live at https://qwewe6.github.io/portfolio-website/.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000, live-reloads as you edit
npm run build      # writes the finished site to ./out
```

## Where to change things

Every word and number on the site is in **one file**: `src/data/site.ts`.

| In `site.ts` | What it controls |
| --- | --- |
| `site` | Name, eyebrow line, tagline, intro, email, résumé path, links, photo |
| `numbers` | The four figures under the hero |
| `experience`, `education` | The Experience section, one line per role |
| `hobbies` | The Hobbies section |
| `projects` | The Projects list. Entries with `external` link out; the rest get a page at `/work/<slug>/` with `summary`, `facts`, `body`, `wins`, `after`, `tech`, `images`, `link` |

Other files:

- `src/app/globals.css` — all styling. Colours and fonts are the variables at the top.
- `src/app/page.tsx` — home page layout. `src/app/work/[slug]/page.tsx` — project page layout.
- `src/components/` — `Nav`, `Footer`, `Photo` (hero portrait with corner marks), `Logo` (the mark), `Trace` (the circle-ended lines used instead of arrows).
- `public/img/` — the images referenced from `site.ts`. `public/Max-Becker-Resume.pdf` is what the Résumé links download.

## Add your photo

Put a square photo at `public/img/max.jpg` and change `photo: null` to `photo: '/img/max.jpg'` in `src/data/site.ts`.

## Publish

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages (Settings → Pages → Source must be "GitHub Actions", which it is). The workflow sets the base path from the repo name on its own.

With a custom domain: add it under Settings → Pages, create `public/CNAME` containing the domain, and push.

## Housekeeping

`delete/` is a scratch folder (git-ignored) for things to look over before trashing. Trash it whenever.
