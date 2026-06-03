export default function Logo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon
        points="15,2 25,2 38,15 38,25 25,38 15,38 2,25 2,15"
        fill="url(#grad)"
        stroke="rgba(100,80,220,0.3)"
        strokeWidth="1"
      />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#6450dc"/>
          <stop offset="100%" stopColor="#a855f7"/>
        </linearGradient>
      </defs>
      <text x="20" y="25" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800" fontFamily="Syne, sans-serif" letterSpacing="-0.5">MM</text>
    </svg>
  );
}
