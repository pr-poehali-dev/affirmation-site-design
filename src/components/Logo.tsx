interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 48, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* 5 лепестков цветка */}
      <ellipse cx="60" cy="24" rx="14" ry="22" fill="#C084FC" transform="rotate(0 60 60)" />
      <ellipse cx="60" cy="24" rx="14" ry="22" fill="#F472B6" transform="rotate(72 60 60)" />
      <ellipse cx="60" cy="24" rx="14" ry="22" fill="#C084FC" transform="rotate(144 60 60)" />
      <ellipse cx="60" cy="24" rx="14" ry="22" fill="#F472B6" transform="rotate(216 60 60)" />
      <ellipse cx="60" cy="24" rx="14" ry="22" fill="#C084FC" transform="rotate(288 60 60)" />
      {/* Центр */}
      <circle cx="60" cy="60" r="18" fill="#FAEF5D" />
      <circle cx="60" cy="60" r="18" fill="#FAEF5D" stroke="#1a0a2e" strokeWidth="2.5" />
      {/* Буквы DP в центре */}
      <text
        x="60"
        y="65"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontStyle="italic"
        fontWeight="700"
        fontSize="13"
        fill="#1a0a2e"
      >
        DP
      </text>
      {/* Контур всего цветка */}
      <circle cx="60" cy="60" r="58" fill="none" stroke="#1a0a2e" strokeWidth="2" strokeDasharray="none" opacity="0.08" />
    </svg>
  );
}
