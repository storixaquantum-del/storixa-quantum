interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 32, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer ring - quantum orbit */}
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />

      {/* Inner hexagonal shape - represents data/storage */}
      <path
        d="M24 6L40 15V33L24 42L8 33V15L24 6Z"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="url(#logoGradient)"
        fillOpacity="0.12"
        strokeLinejoin="round"
      />

      {/* Speed lines / data flow - left */}
      <path
        d="M14 20L22 24L14 28"
        stroke="url(#logoGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Speed lines / data flow - right */}
      <path
        d="M26 18L34 24L26 30"
        stroke="url(#logoGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Center quantum dot */}
      <circle cx="24" cy="24" r="2.5" fill="url(#logoGradient)" />

      <defs>
        <linearGradient id="logoGradient" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="oklch(0.65 0.25 262)" />
          <stop offset="1" stopColor="oklch(0.55 0.28 262)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
