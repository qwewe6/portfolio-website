// A short traced line in a project's colour, with a checkpoint at the end.
export default function Squiggle({ color }: { color: string }) {
  const d = 'M4 26 C24 26 30 10 52 12 S78 30 98 20 S128 4 148 8';
  return (
    <svg className="squiggle" viewBox="0 0 160 34" aria-hidden="true" focusable="false">
      <g fill="none" strokeLinecap="round">
        <path d={d} className="trace-casing" />
        <path d={d} className={`trace-line c-${color}`} />
      </g>
      <circle cx="148" cy="8" r="5" className={`trace-dot end c-${color}`} />
    </svg>
  );
}
