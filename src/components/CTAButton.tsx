"use client";

const ZOOM_URL =
  "https://us02web.zoom.us/meeting/register/4UmEhSpkSFuShdukqTRaQQ";

export default function CTAButton({
  children = "Secure Your Spot At The Launch Party Today",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={ZOOM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Secure your spot at the launch party (opens in new tab)"
      className={`bg-brand-gradient inline-block rounded-[var(--radius-sm)] px-8 py-4 text-center font-bold uppercase tracking-[0.05em] text-white transition-all ${className}`}
      style={{
        transitionDuration: "var(--motion-quick)",
        transitionTimingFunction: "var(--ease-out)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-elevation-2)";
        e.currentTarget.style.filter = "brightness(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.filter = "none";
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "scale(0.97)";
        e.currentTarget.style.filter = "brightness(0.95)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.filter = "brightness(1.05)";
      }}
    >
      {children}
    </a>
  );
}
