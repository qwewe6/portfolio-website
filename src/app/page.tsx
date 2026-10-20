import Link from 'next/link';
import Terrain from '@/components/Terrain';
import SiteNav from '@/components/SiteNav';
import Squiggle from '@/components/Squiggle';
import FlotGlyphs from '@/components/FlotGlyphs';
import Chain from '@/components/Chain';
import Contact from '@/components/Contact';
import { profile, results, experience, education, skills, fit } from '@/data/profile';
import { projects } from '@/data/projects';
import { asset } from '@/lib/asset';
import { frames, getCover } from '@/data/notebook';

const teaserIds = ['flot-overview', 'flot-cells', 'flot-frames', 'rcxd-sketches'];

export default function Home() {
  return (
    <>
      <header className="hero">
        <Terrain />
        <SiteNav />
        <div className="wrap hero-inner">
          <h1 className="hero-name">{profile.name}</h1>
          <p className="hero-statement">{profile.statement}</p>
          <p className="hero-where">
            {profile.looking}. {profile.location}, open to remote.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Email me
            </a>
            <Link className="btn btn-ghost" href="/#work">
              See the work
            </Link>
            <a className="btn btn-ghost" href={asset(profile.resume)} download>
              Résumé (PDF)
            </a>
          </div>
        </div>
        <p className="hero-caption wrap">
          Each coloured line is a run traced over terrain, the way RCxDrive draws them.
        </p>
      </header>

      <main id="main">
        <section className="section about" aria-labelledby="about-title">
          <div className="wrap about-grid">
            <div className="about-text">
              <h2 id="about-title">Customers first, then the tools.</h2>
              {profile.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="ledger-wrap">
              <h3 className="ledger-title">On the record</h3>
              <dl className="ledger">
                {results.map((r) => (
                  <div className="ledger-row" key={r.label}>
                    <dt>{r.figure}</dt>
                    <dd>
                      {r.label}
                      <span className="ledger-where">{r.where}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="fit" className="section fit" aria-labelledby="fit-title">
          <div className="wrap">
            <h2 id="fit-title" className="section-title">
              Where I fit in education
            </h2>
            <p className="section-lede">
              I want to work at a company that helps people learn, in a role that touches customers and data. Here is
              what each kind of role can see in the work on this site.
            </p>
            <dl className="fit-grid">
              {fit.map((f) => (
                <div className="fit-item" key={f.role}>
                  <dt>{f.role}</dt>
                  <dd>
                    <p>{f.proof}</p>
                    {f.href && (
                      <Link href={f.href} className="text-link">
                        {f.linkLabel || 'Read more'}
                      </Link>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="work" className="section work" aria-labelledby="work-title">
          <div className="wrap">
            <h2 id="work-title" className="section-title">
              Things I’m building
            </h2>
            <p className="section-lede">
              What I’ve built since the boot camp, each started because I wanted it to exist, and the boot camp
              itself. Each has a write-up of how it works and what I learned.
            </p>
          </div>
          <div className="wrap projects">
            {projects.map((p, i) => (
              <article className={`project ${i % 2 ? 'flip' : ''}`} key={p.slug}>
                <Link href={`/work/${p.slug}/`} className="project-media" tabIndex={-1} aria-hidden="true">
                  {p.cover.src ? (
                    <img
                      src={asset(p.cover.src)}
                      alt=""
                      loading="lazy"
                      className={p.cover.contain ? 'contain' : p.cover.tall ? 'tall' : ''}
                      style={p.cover.bg ? { background: p.cover.bg } : undefined}
                    />
                  ) : (
                    <div className="project-glyphs">
                      <FlotGlyphs />
                    </div>
                  )}
                </Link>
                <div className="project-text">
                  <Squiggle color={p.color} />
                  <h3>
                    <Link href={`/work/${p.slug}/`}>{p.name}</Link>
                  </h3>
                  <p className="project-tagline">{p.tagline}</p>
                  <p>{p.summary}</p>
                  <p className="project-meta">
                    <span>{p.status}</span>
                    <span>{p.stack.slice(0, 4).join(', ')}</span>
                  </p>
                  <Link href={`/work/${p.slug}/`} className="text-link">
                    Read about {p.name}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section nb-teaser" aria-labelledby="nb-teaser-title">
          <div className="wrap">
            <h2 id="nb-teaser-title" className="section-title">
              On paper first
            </h2>
            <p className="section-lede">
              Most of this started as pencil on loose paper. The notebook has the original pages, laid out in FLOT,
              the visual language I’ve been drawing since 2020.
            </p>
            <div className="nb-teaser-grid">
              {teaserIds.map((id) => {
                const f = frames.find((x) => x.id === id)!;
                const c = getCover(f);
                return (
                  <Link key={id} href={`/notebook/#${id}`} className="nb-teaser-item">
                    <span className="nb-tab">{f.label}</span>
                    <span className="nb-cover">
                      <img src={asset(c.img)} alt={c.alt} loading="lazy" />
                    </span>
                    <span className="nb-meta">
                      <span className="nb-title">{c.title}</span>
                      {c.date && <span className="nb-date">{c.date}</span>}
                    </span>
                  </Link>
                );
              })}
            </div>
            <p className="nb-teaser-cta">
              <Link href="/notebook/" className="text-link">
                Open the notebook
              </Link>
            </p>
          </div>
        </section>

        <section id="approach" className="section approach" aria-labelledby="approach-title">
          <div className="wrap approach-grid">
            <div>
              <h2 id="approach-title" className="section-title">
                Human first, human last.
              </h2>
              <Chain />
            </div>
            <div className="approach-text">
              <p>
                I use AI heavily, and every AI step in what I build has a person on both sides of it. Nothing a model
                produces reaches a customer without someone looking at it first.
              </p>
              <p>
                In Mr. Pruner, I look at every photo before the model does, and approve every report before the
                customer’s copy exists. In RCxDrive, you draw a box around your truck before the tracker starts, and
                the tracker asks for help when it isn’t sure.
              </p>
              <p>
                The rest is habits from sales and operations. Every project keeps a written plan, a log of decisions
                and why they were made, and a changelog. When I don’t know something, I research it before I build
                it: RCxDrive started as a teardown of Strava, Mr. Pruner as a look at why home service customers
                don’t come back.
              </p>
            </div>
          </div>
        </section>

        <section id="experience" className="section experience" aria-labelledby="experience-title">
          <div className="wrap">
            <h2 id="experience-title" className="section-title">
              Experience
            </h2>
            <ol className="timeline">
              {experience.map((r) => (
                <li key={r.title + r.dates} className="role">
                  <p className="role-dates">{r.dates}</p>
                  <div className="role-body">
                    <h3>{r.title}</h3>
                    <p className="role-org">
                      {r.org}, {r.place}
                    </p>
                    <p>{r.summary}</p>
                    <ul>
                      {r.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>

            <div className="edu-grid">
              <div>
                <h3 className="sub-title">Education</h3>
                {education.map((e) => (
                  <div className="edu" key={e.school}>
                    <h4>{e.school}</h4>
                    <p className="edu-detail">{e.detail}</p>
                    <p className="edu-dates">{e.dates}</p>
                    <p>{e.note}</p>
                    {e.school === 'University of Denver' && (
                      <Link href="/work/data-analytics-boot-camp/" className="text-link">
                        What the boot camp covered
                      </Link>
                    )}
                  </div>
                ))}
                <figure className="cert">
                  <img
                    src={asset('/img/about/du-certificate.jpg')}
                    alt="University of Denver certificate: Maxwell Becker has successfully completed the Data Analytics Boot Camp, June 9, 2025, 494 hours earned"
                    loading="lazy"
                  />
                </figure>
              </div>
              <div>
                <h3 className="sub-title">Skills</h3>
                {Object.entries(skills).map(([group, items]) => (
                  <div className="skill-group" key={group}>
                    <h4>{group}</h4>
                    <ul className="tags">
                      {items.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Contact />
    </>
  );
}
