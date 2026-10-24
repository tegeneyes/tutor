import type { ReactNode } from "react";

/**
 * TutorLink's own icon set.
 *
 * Every mark is drawn on a 24x24 grid with the same 1.7 stroke, round caps and
 * a soft tinted fill, so the whole site reads as one family instead of a
 * grab-bag of library icons. Colour always comes from `currentColor`, which
 * means each icon follows the theme (light or dark) with no extra work.
 */

export type IconProps = { className?: string | undefined };

const ACCENT = { fill: "currentColor", stroke: "none", opacity: 0.16 } as const;

function Svg({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {children}
    </svg>
  );
}

/* ---------- Subjects ---------- */

export function IconMath({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="4" y="3" width="16" height="18" rx="3" {...ACCENT} />
      <rect x="4" y="3" width="16" height="18" rx="3" />
      <path d="M8 7.5h8" />
      <path d="M12 11.5v5.5M9.2 14.2h5.6" />
    </Svg>
  );
}

export function IconEnglish({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 7.2C10.1 5.9 7.9 5.5 5.2 5.8V17c2.7-.3 4.9.1 6.8 1.4 1.9-1.3 4.1-1.7 6.8-1.4V5.8c-2.7-.3-4.9.1-6.8 1.4z" {...ACCENT} />
      <path d="M12 7.2C10.1 5.9 7.9 5.5 5.2 5.8V17c2.7-.3 4.9.1 6.8 1.4 1.9-1.3 4.1-1.7 6.8-1.4V5.8c-2.7-.3-4.9.1-6.8 1.4z" />
      <path d="M12 7.2v11.2" />
    </Svg>
  );
}

export function IconPhysics({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="2.8" {...ACCENT} />
      <circle cx="12" cy="12" r="2.8" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(-30 12 12)" />
    </Svg>
  );
}

export function IconChemistry({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7.4 14h9.2l1.5 3.2a1.9 1.9 0 0 1-1.7 2.8H7.6a1.9 1.9 0 0 1-1.7-2.8z" {...ACCENT} />
      <path d="M10 3.5v5.4L5.7 17a2 2 0 0 0 1.7 3h9.2a2 2 0 0 0 1.7-3L14 8.9V3.5" />
      <path d="M8.5 3.5h7" />
      <path d="M7.4 14h9.2" />
    </Svg>
  );
}

export function IconAmharic({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4.5 6.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6l-4 3.5V15.5h-1a2 2 0 0 1-2-2z" {...ACCENT} />
      <path d="M4.5 6.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-6l-4 3.5V15.5h-1a2 2 0 0 1-2-2z" />
      <path d="M8.5 9h7M8.5 12h4.5" />
    </Svg>
  );
}

export function IconBiology({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5.5 18.5C4.5 12 9 5.5 18.5 5c1 7.5-3.5 13-13 13.5z" {...ACCENT} />
      <path d="M5.5 18.5C4.5 12 9 5.5 18.5 5c1 7.5-3.5 13-13 13.5z" />
      <path d="M6.2 17.8C9 14.6 12.4 10.4 15.8 7.2" />
    </Svg>
  );
}

export function IconIT({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="5" y="5.5" width="14" height="9" rx="1.6" {...ACCENT} />
      <rect x="5" y="5.5" width="14" height="9" rx="1.6" />
      <path d="M3 18h18" />
      <path d="M10 9l-2 2 2 2M14 9l2 2-2 2" />
    </Svg>
  );
}

export function IconOther({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="4" y="4" width="7" height="7" rx="2" />
      <rect x="13" y="4" width="7" height="7" rx="2" />
      <rect x="4" y="13" width="7" height="7" rx="2" />
      <rect x="13" y="13" width="7" height="7" rx="2" {...ACCENT} />
      <rect x="13" y="13" width="7" height="7" rx="2" />
    </Svg>
  );
}

/* ---------- Steps & features ---------- */

export function IconProfile({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="8.5" r="3.6" {...ACCENT} />
      <circle cx="12" cy="8.5" r="3.6" />
      <path d="M5 19.5c1.2-3.4 3.8-5 7-5s5.8 1.6 7 5" />
    </Svg>
  );
}

export function IconJobs({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="10.5" cy="10.5" r="5.6" {...ACCENT} />
      <circle cx="10.5" cy="10.5" r="5.6" />
      <path d="M14.8 14.8L20 20" />
      <path d="M8 9h5M8 12h3.4" />
    </Svg>
  );
}

export function IconApply({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M21 4L3 11l7 3z" {...ACCENT} />
      <path d="M21 4L3 11l7 3 3 7 8-17z" />
      <path d="M10 14l11-10" />
    </Svg>
  );
}

export function IconEarn({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3" y="8.5" width="14" height="10" rx="2.2" {...ACCENT} />
      <rect x="3" y="8.5" width="14" height="10" rx="2.2" />
      <circle cx="10" cy="13.5" r="2.4" />
      <path d="M19.2 10.5V5M16.7 7.5L19.2 5l2.5 2.5" />
    </Svg>
  );
}

export function IconGraduate({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 5L3 9l9 4 9-4-9-4z" {...ACCENT} />
      <path d="M12 5L3 9l9 4 9-4-9-4z" />
      <path d="M7 11.2v4c0 1.6 2.4 2.8 5 2.8s5-1.2 5-2.8v-4" />
      <path d="M21 9v5.5" />
    </Svg>
  );
}

export function IconLesson({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 12.5L12 6l7 6.5V19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" {...ACCENT} />
      <path d="M5 12.5L12 6l7 6.5V19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" />
      <path d="M10 20v-4.5h4V20" />
    </Svg>
  );
}

export function IconProgress({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4.5 12.5L9 9l3.5 2.5L19.5 5v14h-15z" {...ACCENT} />
      <path d="M4 19.5h16" />
      <path d="M4.5 12.5L9 9l3.5 2.5L19.5 5" />
      <path d="M16 5h3.5v3.5" />
    </Svg>
  );
}

export function IconUsers({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="9" cy="8.4" r="3.3" {...ACCENT} />
      <circle cx="9" cy="8.4" r="3.3" />
      <path d="M3.4 19c1-3 3-4.6 5.6-4.6s4.6 1.6 5.6 4.6" />
      <path d="M16 5.6a3.3 3.3 0 0 1 0 6.4" />
      <path d="M16.4 14.8c2 .6 3.5 2.1 4.2 4.2" />
    </Svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.6" {...ACCENT} />
      <circle cx="12" cy="12" r="8.6" />
      <path d="M8.4 12.2l2.5 2.5 4.7-5.2" />
    </Svg>
  );
}

/* ---------- Interface ---------- */

export function IconPhone({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4.5 5.5c0-1.1.9-2 2-2h2l1.5 4-2 1.5c1 2.5 3 4.5 5.5 5.5l1.5-2 4 1.5v2c0 1.1-.9 2-2 2C10 20 4.5 14.5 4.5 5.5z" {...ACCENT} />
      <path d="M4.5 5.5c0-1.1.9-2 2-2h2l1.5 4-2 1.5c1 2.5 3 4.5 5.5 5.5l1.5-2 4 1.5v2c0 1.1-.9 2-2 2C10 20 4.5 14.5 4.5 5.5z" />
    </Svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" {...ACCENT} />
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </Svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.6" {...ACCENT} />
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7v5.5l3.6 2" />
    </Svg>
  );
}

export function IconWallet({ className }: IconProps) {
  return (
    <Svg className={className}>
      <rect x="3.5" y="6.5" width="17" height="12" rx="2.5" {...ACCENT} />
      <rect x="3.5" y="6.5" width="17" height="12" rx="2.5" />
      <path d="M3.5 10.5h17" />
      <circle cx="16.6" cy="14.6" r="1.3" />
    </Svg>
  );
}

export function IconInfo({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="8.6" {...ACCENT} />
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 8h.01M12 11.4v5" />
    </Svg>
  );
}

export function IconSun({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="4.2" {...ACCENT} />
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" />
    </Svg>
  );
}

export function IconMoon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" {...ACCENT} />
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
    </Svg>
  );
}

export function IconSearch({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="11" cy="11" r="6.5" {...ACCENT} />
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </Svg>
  );
}

export function IconSearchX({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="11" cy="11" r="6.5" {...ACCENT} />
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
      <path d="M9 9l4 4M13 9l-4 4" />
    </Svg>
  );
}

export function IconArrowRight({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </Svg>
  );
}

export function IconChevronRight({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M9.5 6l6 6-6 6" />
    </Svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Svg>
  );
}
