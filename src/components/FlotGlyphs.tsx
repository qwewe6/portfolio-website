// FLOT's four primary forms, drawn: content (a dot), a cell holding content, two linked cells, and a frame.
export default function FlotGlyphs() {
  return (
    <figure className="flot">
      <svg viewBox="0 0 640 220" role="img" aria-labelledby="flot-title">
        <title id="flot-title">FLOT forms: content is a dot, a cell holds content, links connect cells, frames hold structures</title>
        <g className="flot-ink" fill="none" strokeWidth="3" strokeLinecap="round">
          <circle cx="60" cy="96" r="10" className="fill" />
          <circle cx="200" cy="96" r="40" />
          <circle cx="200" cy="96" r="10" className="fill" />
          <circle cx="330" cy="70" r="30" />
          <circle cx="330" cy="70" r="8" className="fill" />
          <circle cx="410" cy="130" r="30" />
          <circle cx="410" cy="130" r="8" className="fill" />
          <path d="M352 90 L388 111" />
          <rect x="490" y="40" width="120" height="112" rx="4" />
          <circle cx="530" cy="78" r="16" />
          <circle cx="530" cy="78" r="5" className="fill" />
          <circle cx="574" cy="118" r="16" />
          <circle cx="574" cy="118" r="5" className="fill" />
          <path d="M542 89 L562 107" />
        </g>
        <g className="flot-label">
          <text x="60" y="190" textAnchor="middle">content</text>
          <text x="200" y="190" textAnchor="middle">cell</text>
          <text x="370" y="190" textAnchor="middle">link</text>
          <text x="550" y="190" textAnchor="middle">frame</text>
        </g>
      </svg>
    </figure>
  );
}
