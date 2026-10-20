import type { Metadata } from 'next';
import SiteNav from '@/components/SiteNav';
import Contact from '@/components/Contact';
import NotebookFrame from '@/components/NotebookFrame';
import { frames } from '@/data/notebook';

export const metadata: Metadata = {
  title: 'Notebook, by Max Becker',
  description: 'Scanned pages from Max Becker’s notebooks: the first drawings of FLOT and RCxDrive.',
};

const groups = [
  {
    name: 'FLOT' as const,
    intro: 'A visual language for ideas, built from a dot, a cell, a frame and a link. These pages go back to 2020.',
  },
  {
    name: 'RCxDrive' as const,
    intro: 'The app before there was any code: what a run is, what it connects to, and how you’d share it.',
  },
  {
    name: 'Boot camp' as const,
    intro: 'From the margins of the data analytics course.',
  },
];

function Legend() {
  return (
    <ul className="nb-legend" aria-label="How to read this page">
      <li>
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <circle cx="20" cy="20" r="5" className="fill" />
        </svg>
        <span>Content: what’s on the page</span>
      </li>
      <li>
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <circle cx="20" cy="20" r="14" />
          <circle cx="20" cy="20" r="4" className="fill" />
        </svg>
        <span>Cell: one scanned page</span>
      </li>
      <li>
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <rect x="6" y="6" width="28" height="28" />
          <circle cx="20" cy="20" r="4" className="fill" />
        </svg>
        <span>Frame: a folder of pages. Open it to see the rest.</span>
      </li>
      <li>
        <svg viewBox="0 0 40 40" aria-hidden="true">
          <circle cx="9" cy="20" r="5" />
          <circle cx="31" cy="20" r="5" />
          <path d="M14 20 H26" />
        </svg>
        <span>Link: what led where</span>
      </li>
    </ul>
  );
}

export default function NotebookPage() {
  return (
    <>
      <div className="case-top">
        <SiteNav tone="light" />
      </div>
      <main id="main" className="notebook">
        <header className="wrap nb-head">
          <h1>Notebook</h1>
          <p className="nb-lede">
            Most of my ideas start on loose paper. These are the pages, scanned as they are, before any of it was
            software.
          </p>
          <p className="nb-lede-2">
            The page itself is laid out in FLOT, the language in the first set of drawings. Each folder is a frame:
            closed, it shows one page; open it to see the rest.
          </p>
          <Legend />
        </header>

        {groups.map((g) => (
          <section className="wrap nb-group" key={g.name} aria-labelledby={`g-${g.name.replace(/\s+/g, '-')}`}>
            <div className="nb-group-head">
              <h2 id={`g-${g.name.replace(/\s+/g, '-')}`}>{g.name}</h2>
              <p>{g.intro}</p>
            </div>
            <div className="nb-grid">
              {frames
                .filter((f) => f.group === g.name)
                .map((f) => (
                  <NotebookFrame key={f.id} frame={f} />
                ))}
            </div>
          </section>
        ))}
      </main>
      <Contact />
    </>
  );
}
