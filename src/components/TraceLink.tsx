import Link from 'next/link';
import Trace, { type TraceColor } from './Trace';
import { withBasePath } from '@/lib/withBasePath';

type Props = {
  href: string;
  color: TraceColor;
  /** Filename to download as; makes this a download link. */
  download?: string;
  children: React.ReactNode;
};

// Picks the tag and arrow direction from the href: on-site paths get a <Link>,
// everything else a plain <a>. Downloads need the base path prefixed by hand.
export default function TraceLink({ href, color, download, children }: Props) {
  if (download) {
    return (
      <a href={withBasePath(href)} download={download}>
        {children} <Trace color={color} kind="download" />
      </a>
    );
  }
  if (href.startsWith('/')) {
    return (
      <Link href={href}>
        {children} <Trace color={color} />
      </Link>
    );
  }
  return (
    <a href={href}>
      {children} <Trace color={color} kind="external" />
    </a>
  );
}
