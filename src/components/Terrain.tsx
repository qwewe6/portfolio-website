import { terrain } from '@/data/terrain';

// The hero's contour map with traced lines drawn over it, the way RCxDrive draws a run.
// Lines animate in once on load (CSS, see .trace in globals.css); reduced motion shows them finished.
export default function Terrain({ lines = true, className = '' }: { lines?: boolean; className?: string }) {
  const maxLevel = Math.max(...terrain.contours.map((c) => c.l));
  return (
    <svg
      className={`terrain ${className}`}
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" strokeLinejoin="round">
        {terrain.contours.map((c, i) => (
          <path
            key={i}
            d={c.d}
            className={c.l % 5 === 0 ? 'contour index' : 'contour'}
            style={{ opacity: 0.35 + 0.65 * (c.l / maxLevel) }}
          />
        ))}
      </g>
      {lines && (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {terrain.lines.map((l, i) => (
            <g key={l.color} className="trace" style={{ ['--i' as string]: i }}>
              <path d={l.d} pathLength={1} className="trace-casing" />
              <path d={l.d} pathLength={1} className={`trace-line c-${l.color}`} />
              <circle cx={l.start[0]} cy={l.start[1]} r={7} className={`trace-dot c-${l.color}`} />
              <circle cx={l.end[0]} cy={l.end[1]} r={9} className={`trace-dot end c-${l.color}`} />
            </g>
          ))}
        </g>
      )}
    </svg>
  );
}
