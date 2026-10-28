import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="case">
        <p className="eyebrow">404</p>
        <h1>Nothing here.</h1>
        <p className="intro">There’s no page at this address.</p>
        <Link className="btn btn-fill" href="/">
          Back to the home page
        </Link>
      </main>
      <Footer />
    </>
  );
}
