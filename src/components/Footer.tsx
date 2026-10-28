import Trace from './Trace';
import { site } from '@/data/site';
import { asset } from '@/lib/asset';

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
            <a href={asset(site.resume)} download={site.resumeFilename}>
              Résumé (PDF) <Trace color="yellow" dir="down" />
            </a>
          </li>
          <li>
            <a href={site.links.linkedin}>
              LinkedIn <Trace color="cyan" dir="up" />
            </a>
          </li>
          <li>
            <a href={site.links.youtube}>
              YouTube <Trace color="violet" dir="up" />
            </a>
          </li>
          <li>
            <a href={site.links.github}>
              GitHub <Trace color="green" dir="up" />
            </a>
          </li>
        </ul>
      </div>
      <p className="fineprint">
        © {new Date().getFullYear()} {site.fullName}
      </p>
    </footer>
  );
}
