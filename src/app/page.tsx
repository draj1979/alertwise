import { Logo } from "@/components/Logo";
import { AlertTriage } from "@/components/AlertTriage";
import { WaitlistForm } from "@/components/WaitlistForm";
import {
  Check,
  FileText,
  Filter,
  Settings,
  Shield,
  Zap,
} from "@/components/Icons";

const TRUSTED = [
  { name: "SecureEdge Labs", sub: "Pune" },
  { name: "NetGuard Systems", sub: "Bengaluru" },
  { name: "Sentinel IT Services", sub: "Hyderabad" },
  { name: "Aegis Infosec", sub: "Gurugram" },
  { name: "ByteShield Solutions", sub: "Chennai" },
  { name: "CyberNetra", sub: "Noida" },
];

const FEATURES = [
  {
    n: "01 — Triage",
    title: "Every alert, ranked before you blink.",
    body: "Alertwise correlates signals across your EDR, firewall, identity, and cloud logs, dedupes the noise, and scores each by real risk — so your analysts see the few incidents that matter, not a wall of alerts.",
  },
  {
    n: "02 — Investigation",
    title: "The full attack story, assembled for you.",
    body: "Auto-builds the incident timeline — pulls the relevant logs, enriches with threat intel, maps each step to MITRE ATT&CK, and drafts a summary your analyst can act on or hand up the chain.",
  },
  {
    n: "03 — Response",
    title: "Contain the threat before it spreads.",
    body: "Alertwise recommends the containment move — isolate the host, disable the account, block the IP — and, with one approval, executes it. Every action is logged, scoped, and reversible.",
  },
];

const DETAIL_ITEMS = [
  {
    Icon: FileText,
    title: "Evidence-linked",
    body: "Every finding ties back to the raw log line, process event, or packet it came from. Full chain of custody — no black box.",
  },
  {
    Icon: Filter,
    title: "MITRE ATT&CK-mapped",
    body: "Every detection maps to ATT&CK techniques and tactics. Alertwise speaks the framework your team already runs playbooks against.",
  },
  {
    Icon: Settings,
    title: "Tuned to your stack",
    body: "Learns your SIEM, EDR, cloud, and identity tools — and your runbooks. Recommendations fit your environment, not a generic one.",
  },
  {
    Icon: Shield,
    title: "Least-privilege by design",
    body: "Scoped, time-boxed access with zero standing privilege. Every automated action is gated, logged, and reversible.",
  },
];

const TIERS = [
  {
    name: "Team",
    price: "₹6,999",
    per: "/ analyst / mo",
    desc: "For lean security teams and MSSPs getting started.",
    features: [
      "Up to 10,000 alerts / day",
      "Alert triage & correlation",
      "MITRE ATT&CK mapping",
      "Email support",
    ],
    cta: "Join the waitlist",
    variant: "secondary" as const,
  },
  {
    name: "Pro",
    price: "₹14,999",
    per: "/ analyst / mo",
    desc: "For 24×7 SOCs and incident-response teams up to 50.",
    features: [
      "Unlimited alert volume",
      "Automated investigation & timelines",
      "Approval-gated response actions",
      "SIEM / EDR / cloud integrations",
      "Priority support, 1hr SLA",
    ],
    cta: "Join the waitlist",
    variant: "primary" as const,
    featured: true,
    pill: "Most chosen",
  },
  {
    name: "Enterprise",
    price: "Custom",
    per: "",
    desc: "For large enterprises and managed security providers.",
    features: [
      "Single-tenant / on-prem deployment",
      "SSO, SCIM, role-based access",
      "Custom playbooks & SOAR integration",
      "Data residency in India",
      "Dedicated security engineer",
    ],
    cta: "Join the waitlist",
    variant: "dark" as const,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-bone text-fg2">
      {/* ═══ NAV ═══════════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 border-b border-transparent bg-bone/85 backdrop-blur-md" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 md:px-10">
          <Logo size={32} />
          <div className="hidden items-center gap-6 md:flex">
            <a
              href="#pricing"
              className="flex cursor-pointer items-center gap-1 text-[14px] text-fg2 transition-colors hover:text-fg1"
            >
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#waitlist"
              className="focus-ring rounded-[6px] px-4 py-2 text-[14px] font-medium text-bone transition-colors"
              style={{ background: "var(--slate-700)" }}
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-columns" />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_1fr] md:gap-16 md:px-10 md:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent-500)" }} />
              For security teams, by design
            </div>
            <h1
              className="t-display text-[44px] md:text-[60px] lg:text-[72px]"
              style={{ textWrap: "balance" }}
            >
              The alerts, the triage,
              <br />
              and the <span className="t-mark">response</span>
              <br />
              your SOC can trust.
            </h1>
            <p className="mt-7 max-w-[540px] text-[17px] leading-[1.55] text-fg2 md:text-[18px]">
              Alertwise cuts the noise, assembles the attack story, and contains the threat —
              leaving the judgment, where it belongs, with your analysts.
            </p>
            <div id="waitlist" className="mt-9 scroll-mt-24">
              <WaitlistForm source="Alertwise" />
            </div>
          </div>

          <div className="relative">
            <AlertTriage />
          </div>
        </div>
      </section>

      {/* ═══ TRUSTED BY ═══════════════════════════════════════ */}
      <section className="border-y bg-bone-50" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto max-w-[1240px] px-6 py-10 md:px-10">
          <div className="text-center text-[12px] tracking-[-0.005em] text-fg3">
            Trusted by lean security teams and IT shops across India
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {TRUSTED.map((f) => (
              <div key={f.name} className="flex items-baseline gap-2 opacity-70">
                <span
                  className="text-[18px] tracking-[-0.01em] text-fg1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.name}
                </span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-fg3">
                  {f.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ══════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 max-w-[760px]">
          <span className="t-eyebrow">What Alertwise does</span>
          <h2
            className="mt-4 text-[36px] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg1)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Three stages of the SOC workflow, returned to you as{" "}
            <span style={{ fontStyle: "italic", color: "var(--fg1)" }}>decisions, not noise.</span>
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg2">
            Triage that ranks by real risk. Investigation that assembles the whole attack chain.
            Response that contains it on approval. Each stage hands time back to your analysts —
            not another console to watch.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <article
              key={f.n}
              className="card-lift flex flex-col rounded-[14px] border bg-white p-7"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="mb-5 text-[11px] font-medium uppercase tracking-[0.12em]"
                style={{ color: "var(--teal-700)" }}
              >
                {f.n}
              </div>
              <h3
                className="mb-3 text-[20px] leading-[1.2] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
              >
                {f.title}
              </h3>
              <p className="mb-5 text-[14px] leading-[1.6] text-fg2">{f.body}</p>

              {/* Inline mini-visual per feature */}
              {i === 0 && (
                <div
                  className="mt-auto rounded-[10px] border p-4"
                  style={{ borderColor: "var(--border)", background: "var(--bone-50)" }}
                >
                  <div
                    className="mb-2 text-[10px] font-semibold uppercase tracking-[0.1em]"
                    style={{ color: "var(--teal-700)" }}
                  >
                    ▲ Alertwise · 1.8s
                  </div>
                  <div className="text-[13px] leading-[1.45] text-fg1">
                    &ldquo;312 alerts overnight · <span className="cite-chip">3 incidents</span>{" "}
                    need action · 0 false positives surfaced.&rdquo;
                  </div>
                </div>
              )}
              {i === 1 && (
                <div
                  className="mt-auto rounded-[10px] border bg-white p-4"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="text-[14px] leading-[1.55] text-fg1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    A phished credential on FIN-04 authenticated to{" "}
                    <span className="hl-yellow">three finance servers in 90 seconds</span>.
                    <sup
                      className="ml-0.5 inline-block rounded-[3px] px-1.5 align-super text-[9px] font-semibold text-white"
                      style={{ background: "var(--accent-600)", fontFamily: "var(--font-sans)" }}
                    >
                      T1021
                    </sup>
                  </div>
                </div>
              )}
              {i === 2 && (
                <div
                  className="mt-auto flex items-start gap-2.5 rounded-[10px] border p-4"
                  style={{
                    borderColor: "var(--accent-100)",
                    background: "var(--accent-50)",
                  }}
                >
                  <span
                    className="shrink-0"
                    style={{ color: "var(--accent-600)" }}
                  >
                    <Zap size={16} />
                  </span>
                  <div>
                    <div
                      className="mb-1 text-[12px] font-semibold leading-tight"
                      style={{ color: "var(--accent-700)" }}
                    >
                      Containment ready — 1 approval
                    </div>
                    <div
                      className="text-[11px] leading-[1.5]"
                      style={{ color: "var(--accent-700)" }}
                    >
                      Isolate host FIN-04 and revoke the session token. Reversible.
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ═══ PRODUCT DETAIL — DARK ════════════════════════════ */}
      <section
        className="relative"
        style={{ background: "var(--slate-900)", color: "var(--fg-on-dark)" }}
      >
        <div className="mx-auto grid max-w-[1240px] items-start gap-12 px-6 py-24 md:grid-cols-[1fr_1.05fr] md:gap-16 md:px-10 md:py-32">
          <div>
            <span
              className="text-[12px] font-medium uppercase tracking-[0.12em]"
              style={{ color: "var(--teal-300)" }}
            >
              Inside the workspace
            </span>
            <h2
              className="mt-4 text-[34px] md:text-[44px]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg-on-dark)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
            >
              One incident, every{" "}
              <span style={{ fontStyle: "italic", color: "var(--teal-300)" }}>signal,</span>{" "}
              in context.
            </h2>
            <p className="mt-5 max-w-[480px] text-[17px] leading-[1.65]" style={{ color: "rgba(236,238,241,0.75)" }}>
              Alertwise doesn&apos;t split detection from investigation from response. They&apos;re the
              same surface — because in an active incident, every second spent switching tools is a
              second the attacker keeps moving.
            </p>

            <div className="mt-9 grid gap-5">
              {DETAIL_ITEMS.map((d) => (
                <div key={d.title} className="flex gap-4">
                  <div
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-[8px]"
                    style={{ background: "rgba(118,171,174,0.18)", color: "var(--teal-300)" }}
                  >
                    <d.Icon size={18} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-[15px] font-semibold" style={{ color: "var(--fg-on-dark)" }}>
                      {d.title}
                    </h4>
                    <p className="text-[14px] leading-[1.55]" style={{ color: "rgba(236,238,241,0.7)" }}>
                      {d.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product shot */}
          <div
            className="overflow-hidden rounded-[14px] border bg-white text-fg2"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="flex items-center gap-1.5 border-b px-4 py-2.5"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--slate-200)" }} />
            </div>
            <div className="p-6 md:p-7">
              <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--teal-700)" }}>
                <span
                  className="text-[13px] leading-none"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent-500)", letterSpacing: 0, textTransform: "none" }}
                >
                  ▲
                </span>
                Incident · INC-4821
              </div>
              <h4
                className="mb-3 text-[18px] leading-[1.3] tracking-[-0.01em]"
                style={{ fontFamily: "var(--font-sans)", fontWeight: 600, color: "var(--fg1)" }}
              >
                Lateral movement from FIN-04 · Critical
              </h4>
              <p className="mb-4 text-[14px] leading-[1.6] text-fg2">
                Alertwise traced the chain:{" "}
                <span className="hl-yellow">
                  a phished credential on FIN-04 was used to authenticate to three finance servers
                  within 90 seconds
                </span>{" "}
                — consistent with an automated tool, not a human.
              </p>
              <div className="mb-5 flex flex-wrap gap-1.5">
                {["MITRE T1021", "EDR + identity", "Detected 1m ago"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border bg-bone px-2 py-0.5 text-[10px] text-fg3"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="space-y-2 border-t pt-3" style={{ borderColor: "var(--border)" }}>
                {[
                  { n: "01", title: "Isolate host FIN-04", badge: "Ready", color: "var(--accent-700)", bg: "var(--accent-50)", border: "rgba(31,63,160,0.25)" },
                  { n: "02", title: "Disable account p.nair", badge: "Approve", color: "#B07A1A", bg: "#FAF1DC", border: "rgba(176,122,26,0.25)" },
                ].map((r) => (
                  <div key={r.n} className="flex items-center gap-3 py-1.5">
                    <span
                      className="text-[10px] tracking-[0.05em] text-fg4"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {r.n}
                    </span>
                    <span
                      className="text-[14px] text-fg1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {r.title}
                    </span>
                    <span
                      className="ml-auto rounded-full border px-2 py-0.5 text-[10px] font-medium"
                      style={{
                        color: r.color,
                        background: r.bg,
                        borderColor: r.border,
                      }}
                    >
                      {r.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ QUOTE ═════════════════════════════════════════════ */}
      <section className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-start gap-12 md:grid-cols-[260px_1fr] md:gap-16">
          <div>
            <div
              className="mb-4 grid h-12 w-12 place-items-center rounded-full text-[14px] font-semibold text-white"
              style={{ background: "var(--slate-700)" }}
            >
              VR
            </div>
            <div className="text-[15px] font-semibold text-fg1">Vikram Rao</div>
            <div className="text-[13px] text-fg3">Head of Security Operations</div>
            <div className="text-[13px]" style={{ color: "var(--teal-700)" }}>
              HDFC Bank, Mumbai
            </div>
          </div>
          <p
            className="text-[24px] leading-[1.45] md:text-[28px]"
            style={{ fontFamily: "var(--font-display)", color: "var(--fg1)", letterSpacing: "-0.005em", textWrap: "pretty" }}
          >
            My team used to drown in alerts — thousands a night, most of them noise. Alertwise hands
            us the three incidents that actually matter by the time we log in, with the attack chain
            already mapped. Our mean time to respond dropped from hours to minutes.
          </p>
        </div>
      </section>

      {/* ═══ PRICING ═══════════════════════════════════════════ */}
      <section
        id="pricing"
        className="mx-auto max-w-[1240px] scroll-mt-20 border-t px-6 py-24 md:px-10 md:py-32"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="mb-14 max-w-[760px]">
          <span className="t-eyebrow">Pricing</span>
          <h2
            className="mt-4 text-[36px] md:text-[48px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg1)", lineHeight: 1.08, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Plans built around{" "}
            <span style={{ fontStyle: "italic" }}>how SOCs operate,</span>{" "}
            not endpoints.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.6] text-fg2">
            All tiers include unlimited integrations, DPDP&nbsp;Act-aligned controls, and SOC&nbsp;2 Type&nbsp;II.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {TIERS.map((t) => {
            const featured = t.featured;
            return (
              <div
                key={t.name}
                className="card-lift relative flex flex-col rounded-[14px] border bg-white p-7 md:p-8"
                style={{
                  borderColor: featured ? "var(--slate-700)" : "var(--border)",
                  boxShadow: featured
                    ? "0 12px 32px rgba(20,24,29,0.10), 0 2px 6px rgba(20,24,29,0.04)"
                    : undefined,
                }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-[14px] font-semibold tracking-[-0.005em] text-fg1">
                    {t.name}
                  </span>
                  {t.pill && (
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-white"
                      style={{ background: "var(--accent-600)" }}
                    >
                      {t.pill}
                    </span>
                  )}
                </div>
                <div className="mb-3 flex items-baseline gap-2">
                  <span
                    className="text-[44px] tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-display)", color: "var(--fg1)", lineHeight: 1 }}
                  >
                    {t.price}
                  </span>
                  {t.per && (
                    <span className="text-[13px] text-fg3">{t.per}</span>
                  )}
                </div>
                <p className="mb-6 text-[14px] leading-[1.55] text-fg2">{t.desc}</p>
                <ul className="mb-7 space-y-2.5 text-[14px] text-fg2">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span style={{ color: "var(--teal-700)" }} className="mt-1 shrink-0">
                        <Check size={14} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className={`focus-ring mt-auto rounded-[8px] px-5 py-3 text-center text-[14px] font-medium transition-colors`}
                  style={
                    t.variant === "primary"
                      ? { background: "var(--accent-600)", color: "white" }
                      : t.variant === "dark"
                        ? { background: "var(--slate-700)", color: "var(--bone)" }
                        : {
                            background: "white",
                            color: "var(--fg1)",
                            border: "1px solid var(--border-strong)",
                          }
                  }
                >
                  {t.cta}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ CLOSING CTA ═══════════════════════════════════════ */}
      <section
        className="relative"
        style={{ background: "var(--slate-900)", color: "var(--fg-on-dark)" }}
      >
        <div className="mx-auto max-w-[1240px] px-6 py-24 text-center md:px-10 md:py-32">
          <h2
            className="mx-auto max-w-[760px] text-[44px] md:text-[64px]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "var(--fg-on-dark)", lineHeight: 1.05, letterSpacing: "-0.015em", textWrap: "balance" }}
          >
            Spend the night on{" "}
            <span style={{ fontStyle: "italic", color: "var(--accent-500)" }}>real threats.</span>
          </h2>
          <p
            className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.55]"
            style={{ color: "rgba(236,238,241,0.7)" }}
          >
            We&apos;re opening access soon. Join the waitlist and be first to put your SOC&apos;s noise behind you.
          </p>
          <div className="mt-9 flex justify-center">
            <WaitlistForm source="Alertwise" variant="dark" />
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ════════════════════════════════════════════ */}
      <footer
        className="border-t"
        style={{ background: "var(--slate-950)", color: "var(--fg-on-dark)", borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center md:px-10">
          <div>
            <Logo size={28} inverse />
            <p className="mt-4 max-w-[300px] text-[13px] leading-[1.6]" style={{ color: "rgba(236,238,241,0.55)" }}>
              An AI security copilot built for the way SOC teams actually triage, investigate, and
              respond.
            </p>
          </div>
          <a
            href="#waitlist"
            className="focus-ring shrink-0 rounded-[8px] px-5 py-3 text-[14px] font-medium text-white transition-colors"
            style={{ background: "var(--accent-600)" }}
          >
            Join the waitlist
          </a>
        </div>
        <div
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="mx-auto flex max-w-[1240px] px-6 py-5 text-[12px] md:px-10" style={{ color: "rgba(236,238,241,0.5)" }}>
            <span>© {new Date().getFullYear()} Alertwise, Inc. · Alertwise augments security teams and does not replace human review of critical actions.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
