/**
 * Декоративные Y2K элементы: цветки, звёздочки, крестики
 * Используются по всему сайту как фоновые украшения
 */

interface DecoProps {
  className?: string;
  size?: number;
  color?: string;
}

/* 4-лепестковый цветок (клевер) */
export function Flower4({ size = 40, color = "#F472B6", className = "" }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <circle cx="50" cy="25" r="22" fill={color} />
      <circle cx="75" cy="50" r="22" fill={color} />
      <circle cx="50" cy="75" r="22" fill={color} />
      <circle cx="25" cy="50" r="22" fill={color} />
      <circle cx="50" cy="50" r="12" fill="white" />
    </svg>
  );
}

/* Ромашка (6 лепестков, округлые) */
export function Daisy({ size = 40, color = "#FAEF5D", className = "" }: DecoProps) {
  return (
    <img
      src="https://cdn.poehali.dev/projects/4cf41188-5395-41e4-8d67-7a5eb0b6447f/bucket/a9aaa836-7d7f-4176-a61e-65765e7f4932.png"
      width={size}
      height={size}
      className={className}
      style={{ filter: color !== "#FAEF5D" ? `hue-rotate(0deg)` : undefined }}
      alt=""
    />
  );
}

/* 4-конечная звезда (sparkle) */
export function Sparkle({ size = 40, color = "#C084FC", className = "" }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M50 5 C50 5 54 38 54 50 C54 62 50 95 50 95 C50 95 46 62 46 50 C46 38 50 5 50 5Z"
        fill={color}
      />
      <path
        d="M5 50 C5 50 38 46 50 46 C62 46 95 50 95 50 C95 50 62 54 50 54 C38 54 5 50 5 50Z"
        fill={color}
      />
    </svg>
  );
}

/* Крест / плюс ✦ */
export function CrossStar({ size = 40, color = "#FB923C", className = "" }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M50 2 C50 2 56 32 56 50 C56 68 50 98 50 98 C50 98 44 68 44 50 C44 32 50 2 50 2Z"
        fill={color}
      />
      <path
        d="M2 50 C2 50 32 44 50 44 C68 44 98 50 98 50 C98 50 68 56 50 56 C32 56 2 50 2 50Z"
        fill={color}
      />
      <path
        d="M14.6 14.6 C14.6 14.6 37 40 50 50 C63 60 85.4 85.4 85.4 85.4 C85.4 85.4 60 63 50 50 C40 37 14.6 14.6 14.6 14.6Z"
        fill={color}
      />
      <path
        d="M85.4 14.6 C85.4 14.6 63 37 50 50 C37 63 14.6 85.4 14.6 85.4 C14.6 85.4 40 60 50 50 C60 40 85.4 14.6 85.4 14.6Z"
        fill={color}
      />
    </svg>
  );
}

/* Цветок-ретро (5 круглых лепестков) */
export function RetroFlower({ size = 40, color = "#F472B6", centerColor = "white", className = "" }: DecoProps & { centerColor?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <circle cx="50" cy="22" r="18" fill={color} />
      <circle cx="72" cy="36" r="18" fill={color} />
      <circle cx="64" cy="68" r="18" fill={color} />
      <circle cx="36" cy="68" r="18" fill={color} />
      <circle cx="28" cy="36" r="18" fill={color} />
      <circle cx="50" cy="50" r="16" fill={centerColor} />
    </svg>
  );
}

/* Звезда-взрыв (астериск) */
export function Asterisk({ size = 40, color = "#4ADE80", className = "" }: DecoProps) {
  const lines = [0, 30, 60, 90, 120, 150];
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      {lines.map((angle) => (
        <rect
          key={angle}
          x="46" y="8" width="8" height="84"
          rx="4"
          fill={color}
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
    </svg>
  );
}

/* Маленький кружок-точка */
export function Dot({ size = 12, color = "#C084FC", className = "" }: DecoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" className={className}>
      <circle cx="6" cy="6" r="6" fill={color} />
    </svg>
  );
}
