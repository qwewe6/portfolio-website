import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Photo from '@/components/Photo';
import RoleList from '@/components/RoleList';
import { TraceRule } from '@/components/Trace';
import TraceLink from '@/components/TraceLink';
import { site, stats, experience, education, projects, hobbies, about } from '@/data/site';

// The bird's-eye index at the bottom of the page: every place on the site, in three columns.
const index: { heading: string; color: 'yellow' | 'cyan' | 'violet' | 'green'; items: { label: string; href: string; download?: string }[] }[] = [
  {
    heading: 'Professional',
    color: 'cyan',
    items: [
      { label: 'Experience', href: '/#experience' },
      { label: 'Education', href: '/#education' },
      { label: 'Résumé (PDF)', href: site.resume, download: site.resumeFilename },
      { label: 'LinkedIn', href: site.links.linkedin },
      { label: 'GitHub', href: site.links.github },
    ],
  },
  {
    heading: 'Projects',
    color: 'violet',
    items: projects.map((p) => ({ label: p.indexLabel ?? p.name, href: p.external ?? `/work/${p.slug}/` })),
  },
  {
    heading: 'Learn',
    color: 'green',
    items: [
      { label: 'About me', href: '/#about' },
      { label: 'Hobbies', href: '/#hobbies' },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow">{site.eyebrow}</p>
            <h1>{site.name}</h1>
            <p className="tagline">{site.tagline}</p>
            <p className="intro">{site.intro}</p>
            <p className="ask">{site.lookingFor}</p>
            <div className="actions">
              <Link className="btn btn-fill" href="/#index">
                Bird’s-eye view
              </Link>
              <Link className="btn btn-text" href="/#about">
                More about me
              </Link>
            </div>
          </div>
          <Photo />
        </section>

        <section className="numbers" aria-label="Results">
          <dl>
            {stats.map((n) => (
              <div key={n.label}>
                <dt>{n.figure}</dt>
                <dd>{n.label}</dd>
              </div>
            ))}
          </dl>
          <p className="muted small">Lowe’s pro sales 2022–2025; Angi 2018–2019.</p>
        </section>

        <section id="experience" className="section" aria-labelledby="experience-title">
          <TraceRule color="cyan" />
          <h2 id="experience-title">Experience</h2>
          <RoleList roles={experience} />
        </section>

        <section id="projects" className="section" aria-labelledby="projects-title">
          <TraceRule color="violet" />
          <h2 id="projects-title">Projects</h2>
          <ol className="list">
            {projects.map((p) => (
              <li key={p.slug}>
                <span className="years">{p.year}</span>
                <div>
                  <h3>
                    <TraceLink href={p.external ?? `/work/${p.slug}/`} color="violet">
                      {p.name}
                    </TraceLink>
                  </h3>
                  <p>{p.line}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section id="education" className="section" aria-labelledby="education-title">
          <TraceRule color="cyan" />
          <h2 id="education-title">Education</h2>
          <RoleList roles={education} />
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <TraceRule color="yellow" />
          <h2 id="about-title">About</h2>
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>

        <section id="hobbies" className="section" aria-labelledby="hobbies-title">
          <TraceRule color="green" />
          <h2 id="hobbies-title">Hobbies</h2>
          <ul className="list">
            {hobbies.map((h) => (
              <li key={h.id} id={`hobby-${h.id}`}>
                <span className="years" aria-hidden="true" />
                <div>
                  <h3>
                    {h.href ? (
                      <TraceLink href={h.href} color="green">
                        {h.name}
                      </TraceLink>
                    ) : (
                      h.name
                    )}
                  </h3>
                  <p>{h.line}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="index" className="section explore" aria-labelledby="index-title">
          <h2 id="index-title">Bird’s-eye view</h2>
          <div className="explore-grid">
            {index.map((g) => (
              <div key={g.heading}>
                <h3>{g.heading}</h3>
                <ul>
                  {g.items.map((it) => (
                    <li key={it.label}>
                      <TraceLink href={it.href} color={g.color} download={it.download}>
                        <span>{it.label}</span>
                      </TraceLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
