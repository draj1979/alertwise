/**
 * Alertwise wordmark — a slate-rounded square holding a bone
 * shield with a checkmark, plus a signal-blue corner-tab, paired
 * with the wordmark "Alertwise" (italic "wise") in display serif.
 */
export function Logo({ size = 32, inverse = false }: { size?: number; inverse?: boolean }) {
  const slate = inverse ? "var(--bone)" : "var(--slate-700)";
  const bone = inverse ? "var(--slate-700)" : "var(--bone)";
  const accent = "var(--accent-500)";
  const text = inverse ? "var(--bone)" : "var(--slate-700)";

  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size}
        viewBox="0 0 56 56"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="4" y="4" width="48" height="48" rx="8" fill={slate} />
        <Shield shield={bone} mark={slate} />
        <path d="M52 4v9h-9c0-4.971 4.029-9 9-9z" fill={accent} />
      </svg>
      <span
        className="text-[24px] tracking-[-0.01em]"
        style={{ fontFamily: "var(--font-display)", color: text }}
      >
        Alert
        <em style={{ fontStyle: "italic" }}>wise</em>
      </span>
    </div>
  );
}

/** Just the rounded mark — used as favicon-style accent. */
export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" aria-hidden="true">
      <rect x="4" y="4" width="48" height="48" rx="8" fill="var(--slate-700)" />
      <Shield shield="var(--bone)" mark="var(--slate-700)" />
      <path d="M52 4v9h-9c0-4.971 4.029-9 9-9z" fill="var(--accent-500)" />
    </svg>
  );
}

function Shield({ shield, mark }: { shield: string; mark: string }) {
  return (
    <g>
      <path
        d="M28 9 43 14.5V27c0 9.5-6.5 15.5-15 18.5-8.5-3-15-9-15-18.5V14.5L28 9Z"
        fill={shield}
      />
      <path
        d="M21.5 27.2l4.3 4.3 8.7-9.4"
        fill="none"
        stroke={mark}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  );
}
