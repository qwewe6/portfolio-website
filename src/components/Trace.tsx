// A short line ending in a circle, the way RCxDrive draws a run. Used in place of arrows.
// `dir` is 'right' for internal links, 'up' for links that leave the site, 'down' for downloads.
export type TraceColor = 'yellow' | 'cyan' | 'violet' | 'green' | 'ink';

export default function Trace({ color = 'ink', dir = 'right' }: { color?: TraceColor; dir?: 'right' | 'up' | 'down' }) {
  const d = dir === 'up' ? 'M3 17 L15 5' : dir === 'down' ? 'M11 3 L11 17' : 'M3 11 L17 11';
  const end = dir === 'up' ? { cx: 15, cy: 5 } : dir === 'down' ? { cx: 11, cy: 17 } : { cx: 17, cy: 11 };
  return (
    <svg className={`trace t-${color}`} width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
      <path d={d} />
      <circle cx={end.cx} cy={end.cy} r="3.2" />
    </svg>
  );
}

// A longer decorative trace, used under section headings.
export function TraceRule({ color = 'yellow' }: { color?: TraceColor }) {
  const d = 'M3 22 C22 22 28 8 48 10 S76 26 96 18 S124 4 142 8';
  return (
    <svg className={`trace-rule t-${color}`} viewBox="0 0 152 30" width="152" height="30" aria-hidden="true" focusable="false">
      <path d={d} />
      <circle cx="142" cy="8" r="4" />
    </svg>
  );
}
