// "Human first, human last": a person at both ends of every AI step.
const nodes = ['h', 'ai', 'h', 'ai', 'h'] as const;

export default function Chain() {
  const gap = 120;
  return (
    <figure className="chain">
      <svg viewBox={`0 0 ${gap * (nodes.length - 1) + 80} 120`} role="img" aria-labelledby="chain-title">
        <title id="chain-title">A chain that alternates person, AI, person, AI, person, starting and ending with a person</title>
        <path
          d={`M40 60 H${gap * (nodes.length - 1) + 40}`}
          className="chain-link"
          fill="none"
        />
        {nodes.map((n, i) => {
          const cx = 40 + i * gap;
          return n === 'h' ? (
            <g key={i}>
              <circle cx={cx} cy={60} r={26} className="chain-h" />
              <text x={cx} y={66} textAnchor="middle" className="chain-h-text">
                me
              </text>
            </g>
          ) : (
            <g key={i}>
              <circle cx={cx} cy={60} r={18} className="chain-ai" />
              <text x={cx} y={65} textAnchor="middle" className="chain-ai-text">
                AI
              </text>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
