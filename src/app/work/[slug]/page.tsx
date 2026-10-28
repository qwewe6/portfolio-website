import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Trace from '@/components/Trace';
import { projects } from '@/data/site';
import { asset } from '@/lib/asset';

export const dynamicParams = false;

const pages = projects.filter((p) => !p.external);

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = pages.find((x) => x.slug === slug);
  return p ? { title: p.name, description: p.line } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = pages.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = pages[i];
  const next = pages[(i + 1) % pages.length];

  return (
    <>
      <Nav />
      <main id="main" className="case">
        <Link href="/#projects" className="back">
          All projects
        </Link>
        <p className="eyebrow">{p.year}</p>
        <h1>{p.name}</h1>
        <p className="tagline">{p.line}</p>
        <p className="intro">{p.summary}</p>

        {p.stats && (
          <dl className="facts">
            {p.stats.map((f) => (
              <div key={f.label}>
                <dt>{f.figure}</dt>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="case-body">
          {p.story?.map((b) => (
            <p key={b}>{b}</p>
          ))}
          {p.bullets && (
            <>
              <h2 className="h2-small">{p.bullets.heading}</h2>
              <ul className="wins">
                {p.bullets.items.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </>
          )}
          {p.closing?.map((b) => (
            <p key={b}>{b}</p>
          ))}
          {p.tech && (
            <p className="tech">
              <strong>Built with</strong> {p.tech}
            </p>
          )}
          {p.link && (
            <a className="btn btn-text" href={p.link.href}>
              {p.link.label} <Trace color="ink" kind="external" />
            </a>
          )}
        </div>

        {p.images && (
          <div className="figs">
            {p.images.map((img) => (
              <figure key={img.src}>
                <img src={asset(img.src)} alt={img.alt} loading="lazy" />
                {img.caption && <figcaption>{img.caption}</figcaption>}
              </figure>
            ))}
          </div>
        )}

        {next.slug !== p.slug && (
          <p className="next">
            <span className="muted">Next</span>{' '}
            <Link href={`/work/${next.slug}/`}>
              {next.name} <Trace color="violet" />
            </Link>
          </p>
        )}
      </main>
      <Footer />
    </>
  );
}
