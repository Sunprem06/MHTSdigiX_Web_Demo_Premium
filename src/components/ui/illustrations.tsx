/**
 * Zero real/stock photography — every visual on this site is an inline SVG
 * illustration. See DESIGN.md "Imagery". Distinct gradient/illustration
 * style from Demo (walnut/brass interiors) and Standard (coastal/skyline).
 */

const GRADIENTS: Record<string, [string, string]> = {
  lobby: ["#5262C2", "#32408F"],
  "patient-room": ["#9FE0D2", "#2FAE94"],
  "operation-theatre": ["#AFA3F7", "#8C7CF0"],
  "pediatric-play": ["#F5768A", "#F2546B"],
  "diagnostic-lab": ["#5CC4AE", "#238876"],
  "healing-garden": ["#9FE0D2", "#5262C2"],
  cafeteria: ["#F5768A", "#5262C2"],
  "ambulance-bay": ["#F2546B", "#28336E"],
};

function sceneMotif(id: string) {
  switch (id) {
    case "lobby":
      return (
        <>
          <rect x="30" y="120" width="140" height="60" rx="6" fill="rgba(255,255,255,0.18)" />
          <path d="M20 120 100 70 180 120" stroke="rgba(255,255,255,0.6)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="60" cy="150" r="10" fill="rgba(255,255,255,0.35)" />
          <circle cx="140" cy="150" r="10" fill="rgba(255,255,255,0.35)" />
        </>
      );
    case "patient-room":
      return (
        <>
          <rect x="30" y="110" width="90" height="50" rx="8" fill="rgba(255,255,255,0.22)" />
          <rect x="40" y="100" width="24" height="18" rx="4" fill="rgba(255,255,255,0.4)" />
          <rect x="130" y="90" width="50" height="70" rx="6" fill="rgba(255,255,255,0.14)" />
        </>
      );
    case "operation-theatre":
      return (
        <>
          <circle cx="100" cy="110" r="46" fill="rgba(255,255,255,0.14)" />
          <circle cx="100" cy="110" r="22" fill="rgba(255,255,255,0.3)" />
          <path d="M100 64v12M100 144v12M56 110h12M132 110h12" stroke="rgba(255,255,255,0.5)" strokeWidth="3" strokeLinecap="round" />
        </>
      );
    case "pediatric-play":
      return (
        <>
          <circle cx="60" cy="130" r="18" fill="rgba(255,255,255,0.3)" />
          <rect x="100" y="110" width="36" height="36" rx="8" fill="rgba(255,255,255,0.22)" transform="rotate(12 118 128)" />
          <path d="M150 140a16 16 0 1 0 0-32" stroke="rgba(255,255,255,0.45)" strokeWidth="3" fill="none" strokeLinecap="round" />
        </>
      );
    case "diagnostic-lab":
      return (
        <>
          <rect x="40" y="130" width="120" height="16" rx="4" fill="rgba(255,255,255,0.25)" />
          <rect x="55" y="90" width="14" height="44" rx="4" fill="rgba(255,255,255,0.35)" />
          <rect x="93" y="70" width="14" height="64" rx="4" fill="rgba(255,255,255,0.45)" />
          <rect x="131" y="105" width="14" height="29" rx="4" fill="rgba(255,255,255,0.3)" />
        </>
      );
    case "healing-garden":
      return (
        <>
          <path d="M60 150c0-30 14-45 14-45s14 15 14 45" stroke="rgba(255,255,255,0.5)" strokeWidth="3" fill="none" />
          <circle cx="74" cy="90" r="20" fill="rgba(255,255,255,0.25)" />
          <path d="M130 150c0-22 10-34 10-34s10 12 10 34" stroke="rgba(255,255,255,0.4)" strokeWidth="3" fill="none" />
          <circle cx="140" cy="104" r="14" fill="rgba(255,255,255,0.2)" />
        </>
      );
    case "cafeteria":
      return (
        <>
          <rect x="40" y="120" width="50" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
          <rect x="110" y="120" width="50" height="8" rx="4" fill="rgba(255,255,255,0.3)" />
          <circle cx="65" cy="100" r="16" fill="rgba(255,255,255,0.2)" />
          <circle cx="135" cy="100" r="16" fill="rgba(255,255,255,0.2)" />
        </>
      );
    case "ambulance-bay":
      return (
        <>
          <rect x="40" y="110" width="90" height="40" rx="6" fill="rgba(255,255,255,0.22)" />
          <rect x="130" y="125" width="30" height="25" rx="4" fill="rgba(255,255,255,0.3)" />
          <circle cx="60" cy="155" r="8" fill="rgba(255,255,255,0.4)" />
          <circle cx="110" cy="155" r="8" fill="rgba(255,255,255,0.4)" />
          <path d="M80 118h12M86 112v12" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" />
        </>
      );
    default:
      return null;
  }
}

export function FacilityIllustration({ id, className = "" }: { id: string; className?: string }) {
  const [from, to] = GRADIENTS[id] ?? ["#5262C2", "#32408F"];
  return (
    <svg viewBox="0 0 200 180" className={className} role="img" aria-label={`Illustration of ${id.replace(/-/g, " ")}`}>
      <defs>
        <linearGradient id={`grad-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="200" height="180" rx="16" fill={`url(#grad-${id})`} />
      {sceneMotif(id)}
    </svg>
  );
}

export function DoctorAvatar({ initials, className = "" }: { initials: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="Illustrative doctor avatar">
      <defs>
        <linearGradient id={`doc-${initials}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5262C2" />
          <stop offset="100%" stopColor="#2FAE94" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill={`url(#doc-${initials})`} />
      <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fontSize="30"
        fontWeight="600"
        fill="white"
        fontFamily="var(--font-display), sans-serif"
      >
        {initials}
      </text>
    </svg>
  );
}

export function MapPlaceholder({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 220" className={className} role="img" aria-label="Stylized placeholder map, not a live map embed">
      <defs>
        <linearGradient id="map-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#E7F0F2" />
          <stop offset="100%" stopColor="#9FE0D2" />
        </linearGradient>
      </defs>
      <rect width="320" height="220" rx="16" fill="url(#map-bg)" />
      <path d="M0 80 Q80 40 160 90 T320 70" stroke="rgba(50,64,143,0.25)" strokeWidth="6" fill="none" />
      <path d="M0 160 Q100 190 200 150 T320 170" stroke="rgba(47,174,148,0.3)" strokeWidth="6" fill="none" />
      <circle cx="170" cy="110" r="10" fill="#F2546B" />
      <path d="M170 95a15 15 0 0 1 15 15c0 9-15 28-15 28s-15-19-15-28a15 15 0 0 1 15-15Z" fill="#32408F" />
    </svg>
  );
}
