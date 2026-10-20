import Link from 'next/link';

export default function SiteNav({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  return (
    <nav className={`nav nav-${tone}`} aria-label="Main">
      <Link href="/" className="nav-name">
        Max Becker
      </Link>
      <ul>
        <li>
          <Link href="/#work">Work</Link>
        </li>
        <li>
          <Link href="/notebook/">Notebook</Link>
        </li>
        <li>
          <Link href="/#approach">How I work</Link>
        </li>
        <li>
          <Link href="/#experience">Experience</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
