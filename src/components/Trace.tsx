// A short line ending in a circle, the way RCxDrive draws a run. Used in place of arrows.
export type TraceColor = 'yellow' | 'cyan' | 'violet' | 'green' | 'ink';

export type TraceKind = 'internal' | 'external' | 'download';

// internal points right, external up-and-out, download down.
const GEOMETRY: Record<TraceKind, { d: string; cx: number; cy: number }> = {
  internal: { d: 'M3 11 L17 11', cx: 17, cy: 11 },
  external: { d: 'M3 17 L15 5', cx: 15, cy: 5 },
  download: { d: 'M11 3 L11 17', cx: 11, cy: 17 },
};

export default function Trace({ color = 'ink', kind = 'internal' }: { color?: TraceColor; kind?: TraceKind }) {
  const { d, cx, cy } = GEOMETRY[kind];
  return (
    <svg className={`trace t-${color}`} width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
      <path d={d} />
      <circle cx={cx} cy={cy} r="3.2" />
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
