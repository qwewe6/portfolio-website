import type { Metadata, Viewport } from 'next';
import './globals.css';
import { site } from '@/data/site';
import { asset } from '@/lib/asset';

// Set NEXT_PUBLIC_SITE_URL at build time (the deploy workflow does) so link previews get absolute image URLs.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qwewe6.github.io';

const description = `${site.name}, ${site.location}. ${site.tagline} ${site.intro}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name}: software sales`, template: `%s | ${site.name}` },
  description,
  icons: { icon: asset('/favicon.svg') },
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name}: software sales`,
    description,
    images: [{ url: asset('/img/rcx/hero-roots.jpg'), alt: 'Six colored lines traced over tree roots' }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: '#22302b',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <div className="page">{children}</div>
      </body>
    </html>
  );
}
