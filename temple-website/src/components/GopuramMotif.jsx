// The signature element: a simplified tiered gopuram (temple tower) silhouette.
// Reused at different sizes as a section marker instead of generic icons/numbers.
export default function GopuramMotif({ className = "", tone = "currentColor" }) {
  return (
    <svg viewBox="0 0 120 90" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill={tone}>
        <rect x="52" y="2" width="16" height="8" />
        <polygon points="60,0 66,6 54,6" />
        <polygon points="30,14 90,14 82,26 38,26" />
        <polygon points="24,28 96,28 86,42 34,42" />
        <polygon points="16,44 104,44 92,60 28,60" />
        <rect x="10" y="60" width="100" height="8" />
        <rect x="20" y="68" width="80" height="20" />
        <rect x="52" y="72" width="16" height="16" fill="var(--gopuram-door, #2B0A0C)" />
      </g>
    </svg>
  );
}
