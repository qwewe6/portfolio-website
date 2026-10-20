import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteNav from '@/components/SiteNav';
import Squiggle from '@/components/Squiggle';
import FlotGlyphs from '@/components/FlotGlyphs';
import Contact from '@/components/Contact';
import { projects, getProject, type Img } from '@/data/projects';
import { asset } from '@/lib/asset';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  return p ? { title: p.name, description: p.summary } : {};
}

function Figure({ img }: { img: Img }) {
  return (
    <figure className={`fig ${img.tall ? 'fig-tall' : 'fig-wide'}`}>
      <img src={asset(img.src)} alt={img.alt} loading="lazy" />
      {img.caption && <figcaption>{img.caption}</figcaption>}
    </figure>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const i = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(i + 1) % projects.length];

  return (
    <>
      <div className="case-top">
        <SiteNav tone="light" />
      </div>
      <main id="main" className="case">
        <header className="wrap case-head">
          <Link href="/#work" className="back">
            All work
          </Link>
          <Squiggle color={p.color} />
          <h1>{p.name}</h1>
          <p className="case-tagline">{p.tagline}</p>
          <p className="case-summary">{p.summary}</p>

          <dl className="case-meta">
            <div>
              <dt>My role</dt>
              <dd>{p.role}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>
                {p.status.includes(p.year) ? p.status : `${p.status}, ${p.year}`}
              </dd>
            </div>
            <div>
              <dt>Built with</dt>
              <dd>{p.stack.join(', ')}</dd>
            </div>
          </dl>

          {p.shows && (
            <p className="case-shows">
              <strong>What it shows</strong> {p.shows}
            </p>
          )}

          {p.links.length > 0 && (
            <p className="case-links">
              {p.links.map((l) => (
                <a key={l.href} href={l.href} className="btn btn-primary">
                  {l.label}
                </a>
              ))}
            </p>
          )}
        </header>

        <div className="wrap case-hero">
          {p.cover.src ? (
            <figure className={`case-cover ${p.cover.tall ? 'tall' : ''} ${p.cover.contain ? 'contain' : ''}`}>
              <img src={asset(p.cover.src)} alt={p.cover.alt} style={p.cover.bg ? { background: p.cover.bg } : undefined} />
              {p.cover.caption && <figcaption>{p.cover.caption}</figcaption>}
            </figure>
          ) : (
            <div className="case-cover glyph-cover">
              <FlotGlyphs />
            </div>
          )}
          <dl className={`case-facts c-${p.color}`}>
            {p.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.figure}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {p.sections.map((s) => (
          <section className="case-section" key={s.heading}>
            <div className="wrap prose-wrap">
              <h2>{s.heading}</h2>
              {s.body.map((b, k) => (
                <p key={k}>{b}</p>
              ))}
              {s.quote && <blockquote className={`c-${p.color}`}>{s.quote}</blockquote>}
              {s.steps && (
                <ol className={`steps c-${p.color}`}>
                  {s.steps.map((st) => (
                    <li key={st.title}>
                      <h3>{st.title}</h3>
                      <p>{st.text}</p>
                      {st.href && (
                        <a className="step-link" href={st.href}>
                          {st.linkLabel || 'Read more'}
                        </a>
                      )}
                    </li>
                  ))}
                </ol>
              )}
            </div>
            {s.images && (
              <div className={`wrap figs figs-${s.images.length}`}>
                {s.images.map((img) => (
                  <Figure key={img.src} img={img} />
                ))}
              </div>
            )}
          </section>
        ))}

        <nav className="wrap" aria-label="Next project">
          <div className="next">
          <p>Next project</p>
          <Link href={`/work/${next.slug}/`}>
            <Squiggle color={next.color} />
            <span className="next-name">{next.name}</span>
            <span className="next-tag">{next.tagline}</span>
          </Link>
          </div>
        </nav>
      </main>
      <Contact />
    </>
  );
}
