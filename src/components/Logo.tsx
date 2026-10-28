// Max's mark: a framed cell holding a dot over a line, with a dot in the frame's corner.
// Drawn from logo_rough.pdf. Inherits the text color.
export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      className="logo"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1.5" y="1.5" width="29" height="29" />
      <circle cx="5.5" cy="5.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="16" cy="16.5" r="8.5" />
      <circle cx="16" cy="13.5" r="1.4" fill="currentColor" stroke="none" />
      <path d="M11.5 18.5h9" />
    </svg>
  );
}
