import Link from 'next/link';
import Logo from './Logo';
import { site } from '@/data/site';

export default function Nav() {
  return (
    <header className="nav">
      <Link href="/" className="nav-name" aria-label={`${site.name}, home`}>
        <Logo />
        <span>{site.name}</span>
      </Link>
      <nav aria-label="Main">
        <Link href="/#experience">Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/#hobbies">Hobbies</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}
