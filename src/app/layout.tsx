import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/bricolage-grotesque/standard.css';
import '@fontsource-variable/source-serif-4/standard.css';
import '@fontsource-variable/source-serif-4/standard-italic.css';
import './globals.css';

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
// Set NEXT_PUBLIC_SITE_URL at build time (e.g. https://maxbecker.dev) so link previews get absolute image URLs.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://qwewe6.github.io';

const title = 'Max Becker';
const description =
  'Max Becker, Denver. Seven years in sales and customer work, a data analytics certificate, and software I’ve built: RCxDrive, Mr. Pruner and Rockwood Displays. Looking for customer success, implementation or data roles in education technology.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${title}: customer success, implementation and data for education`, template: `%s | ${title}` },
  description,
  icons: { icon: `${base}/favicon.svg` },
  openGraph: {
    type: 'website',
    siteName: title,
    title: `${title}: customer success, implementation and data for education`,
    description,
    images: [{ url: `${base}/img/rcx/hero-roots.jpg`, alt: 'Six coloured lines traced over tree roots, each one a run by an RC truck' }],
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
        {children}
      </body>
    </html>
  );
}
