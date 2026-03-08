"use client";

interface PillarCardProps {
  title: string;
  subtitle: string;
  bullets: string[];
  color: string;
}

export default function PillarCard({
  title,
  subtitle,
  bullets,
  color,
}: PillarCardProps) {
  return (
    <div
      className="rounded-[var(--radius-md)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-elevation-1)] transition-all"
      style={{
        transitionDuration: "var(--motion-standard)",
        transitionTimingFunction: "var(--ease-out)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-elevation-2)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-elevation-1)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="mt-1.5 h-3 w-3 shrink-0 rounded-full"
          style={{ backgroundColor: color }}
        />
        <div>
          <h3 className="text-title-3 text-[var(--color-label)]">
            {title}
          </h3>
          <p className="text-footnote mt-1 text-[var(--color-tertiary-label)]">{subtitle}</p>
          <ul className="mt-3 space-y-2">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-callout text-[var(--color-secondary-label)]">
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-blue)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
