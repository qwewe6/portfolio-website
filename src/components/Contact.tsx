import { profile } from '@/data/profile';
import Terrain from './Terrain';
import { asset } from '@/lib/asset';

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <Terrain lines={false} className="contact-terrain" />
      <div className="wrap contact-inner">
        <h2>Let’s talk.</h2>
        <p className="contact-lede">
          I’m looking for customer success, implementation and data roles at education companies, where seven years
          with customers and a bit of building go a long way. I’m in {profile.location} and open to on-site, hybrid or
          remote.
        </p>
        <a className="contact-email" href={`mailto:${profile.email}?subject=Hello%20Max`}>
          {profile.email}
        </a>
        <ul className="contact-links">
          <li>
            <a href={profile.links.linkedin}>LinkedIn</a>
          </li>
          <li>
            <a href={profile.links.github}>GitHub</a>
          </li>
          <li>
            <a href={profile.links.youtube}>YouTube</a>
          </li>
          <li>
            <a href={asset(profile.resume)} download>
              Résumé (PDF)
            </a>
          </li>
        </ul>
        <p className="fineprint">© {new Date().getFullYear()} {profile.fullName}</p>
      </div>
    </footer>
  );
}
