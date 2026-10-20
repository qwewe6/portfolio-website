import Link from 'next/link';
import SiteNav from '@/components/SiteNav';

export default function NotFound() {
  return (
    <>
      <div className="case-top">
        <SiteNav tone="light" />
      </div>
      <main id="main" className="wrap notfound">
        <h1>Off the line.</h1>
        <p>There’s no page at this address. It may have moved when the site was rebuilt.</p>
        <Link className="btn btn-primary" href="/">
          Go to the home page
        </Link>
      </main>
    </>
  );
}
