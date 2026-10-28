import TraceLink from './TraceLink';
import { site } from '@/data/site';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-grid">
        <div>
          <p className="eyebrow">Contact</p>
          <a className="footer-email" href={`mailto:${site.email}?subject=Hello%20Max`}>
            {site.email}
          </a>
          <p className="muted">{site.looking}</p>
          <p className="muted">Open to on-site, hybrid or remote.</p>
        </div>
        <ul className="footer-links">
          <li>
            <TraceLink href={site.resume} color="yellow" download={site.resumeFilename}>
              Résumé (PDF)
            </TraceLink>
          </li>
          <li>
            <TraceLink href={site.links.linkedin} color="cyan">
              LinkedIn
            </TraceLink>
          </li>
          <li>
            <TraceLink href={site.links.youtube} color="violet">
              YouTube
            </TraceLink>
          </li>
          <li>
            <TraceLink href={site.links.github} color="green">
              GitHub
            </TraceLink>
          </li>
        </ul>
      </div>
      <p className="fineprint">
        © {new Date().getFullYear()} {site.fullName}
      </p>
    </footer>
  );
}
