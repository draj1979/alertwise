/**
 * Hero visual — a window-chromed mock of an Alertwise triage view,
 * showing how a night of raw alerts collapses into a handful of
 * ranked incidents, each with a severity badge.
 */
export function AlertTriage() {
  return (
    <div
      className="relative overflow-hidden rounded-[14px] border bg-white"
      style={{
        borderColor: "var(--border)",
        boxShadow:
          "0 12px 32px rgba(20,24,29,0.10), 0 2px 6px rgba(20,24,29,0.04)",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-1.5 border-b px-4 py-2.5"
        style={{ borderColor: "var(--border)" }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
        <span
          className="ml-3 text-[11px] tracking-[-0.01em] text-fg3"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          app.alertwise.com/i/INC-4821
        </span>
      </div>

      {/* Body */}
      <div className="p-6 md:p-7">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
          <span
            className="text-[13px] leading-none"
            style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent-500)", letterSpacing: 0, textTransform: "none" }}
          >
            ▲
          </span>
          <span>Alertwise</span>
          <span style={{ color: "var(--slate-200)" }}>·</span>
          <span>1.8s</span>
          <span style={{ color: "var(--slate-200)" }}>·</span>
          <span>312 alerts → 3 incidents</span>
        </div>

        <h3
          className="mb-3 text-[19px] leading-[1.3] tracking-[-0.01em]"
          style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
        >
          Overnight noise collapses to three incidents that need you.
        </h3>

        <p className="mb-5 text-[14px] leading-[1.55] text-fg2">
          Alertwise correlated signals across <span className="cite-chip">EDR</span>, firewall, and
          identity logs, deduped the noise, and ranked by blast radius. One shows lateral movement
          from a single compromised host.
        </p>

        {/* Incident rows */}
        <div
          className="space-y-2 border-t pt-4"
          style={{ borderColor: "var(--border)" }}
        >
          <IncidentRow
            n="01"
            title="Lateral movement"
            detail="host FIN-04"
            severity="critical"
          />
          <IncidentRow
            n="02"
            title="Impossible-travel sign-in"
            detail="p.nair"
            severity="high"
          />
          <IncidentRow
            n="03"
            title="Repeated MFA failures"
            detail="42 attempts"
            severity="medium"
          />
        </div>
      </div>
    </div>
  );
}

function IncidentRow({
  n,
  title,
  detail,
  severity,
}: {
  n: string;
  title: string;
  detail: string;
  severity: "critical" | "high" | "medium";
}) {
  const badge = {
    critical: {
      label: "Critical",
      color: "var(--danger-700)",
      bg: "var(--danger-50)",
      border: "rgba(154,40,32,0.28)",
    },
    high: {
      label: "High",
      color: "#B07A1A",
      bg: "#FAF1DC",
      border: "rgba(176,122,26,0.25)",
    },
    medium: {
      label: "Medium",
      color: "var(--teal-700)",
      bg: "var(--teal-50)",
      border: "rgba(78,132,135,0.25)",
    },
  }[severity];
  return (
    <div className="flex items-center gap-3 py-1.5">
      <span
        className="text-[10px] tracking-[0.05em] text-fg4"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {n}
      </span>
      <span
        className="text-[14px] tracking-[-0.005em] text-fg1"
        style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
      >
        {title}
      </span>
      <span
        className="text-[11px] text-fg3"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {detail}
      </span>
      <span
        className="ml-auto rounded-full border px-2 py-0.5 text-[10px] font-medium"
        style={{
          color: badge.color,
          background: badge.bg,
          borderColor: badge.border,
        }}
      >
        {badge.label}
      </span>
    </div>
  );
}
