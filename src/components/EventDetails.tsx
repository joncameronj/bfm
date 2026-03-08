"use client";

import { useState, useEffect } from "react";

const EVENT_START = new Date("2026-03-14T18:00:00Z");
const EVENT_END = new Date("2026-03-15T01:00:00Z");
const ZOOM_URL =
  "https://us02web.zoom.us/meeting/register/4UmEhSpkSFuShdukqTRaQQ";

interface TZCard {
  label: string;
  timezone: string;
  highlighted: boolean;
}

function formatTime(date: Date, tz: string) {
  return date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
    timeZone: tz,
  });
}

function formatDate(date: Date, tz: string) {
  return date.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: tz,
  });
}

export default function EventDetails() {
  const [cards, setCards] = useState<TZCard[]>([]);

  useEffect(() => {
    const visitorTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const tzCards: TZCard[] = [
      { label: "Your Time", timezone: visitorTZ, highlighted: true },
      { label: "Pacific Time", timezone: "America/Los_Angeles", highlighted: false },
      { label: "Eastern Time", timezone: "America/New_York", highlighted: false },
    ];
    const seen = new Set<string>();
    const deduped = tzCards.filter((card) => {
      const key = formatTime(EVENT_START, card.timezone);
      if (seen.has(key) && !card.highlighted) return false;
      seen.add(key);
      return true;
    });
    setCards(deduped);
  }, []);

  if (cards.length === 0) {
    return (
      <section className="px-5 py-16 md:py-20" aria-labelledby="details-heading">
        <div className="mx-auto max-w-[980px]">
          <h2
            id="details-heading"
            className="text-title-2 md:text-title-1 text-center text-[var(--color-label)]"
          >
            The Details (What You Need to Know)
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="skeleton h-[240px] rounded-[var(--radius-xl)]" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 py-16 md:py-20" aria-labelledby="details-heading">
      <div className="mx-auto max-w-[980px]">
        <h2
          id="details-heading"
          className="text-title-2 md:text-title-1 text-center text-[var(--color-label)]"
        >
          The Details (What You Need to Know)
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.label}
              className="rounded-[var(--radius-xl)] p-6 text-center"
              style={{
                backgroundColor: "#1D1D1F",
                ...(card.highlighted
                  ? { boxShadow: "0 0 0 2px var(--color-cyan)" }
                  : {}),
              }}
            >
              {card.highlighted && (
                <span className="bg-brand-gradient mb-3 inline-block rounded-[var(--radius-pill)] px-3 py-1 text-caption-1 font-bold uppercase tracking-wider text-white">
                  Your Timezone
                </span>
              )}
              <p className="text-subheadline font-medium text-[var(--color-quaternary-label)]">
                {card.label}
              </p>
              <p className="text-headline mt-2 text-white">
                {formatDate(EVENT_START, card.timezone)}
              </p>
              <p className="mt-1 text-[24px] font-bold text-white" style={{ letterSpacing: "-0.02em" }}>
                {formatTime(EVENT_START, card.timezone)}
              </p>
              <p className="text-subheadline mt-1 text-[var(--color-quaternary-label)]">
                to {formatTime(EVENT_END, card.timezone)}
              </p>
              <p className="text-footnote mt-3 text-[var(--color-quaternary-label)]">
                Live Over Zoom
              </p>
              <a
                href={ZOOM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Register now for ${card.label} (opens in new tab)`}
                className="bg-brand-gradient mt-4 inline-block w-full rounded-[var(--radius-sm)] px-4 py-2.5 text-subheadline font-bold uppercase tracking-wide text-white transition-all"
                style={{
                  transitionDuration: "var(--motion-quick)",
                  transitionTimingFunction: "var(--ease-out)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "brightness(1.05)";
                  e.currentTarget.style.boxShadow = "var(--shadow-elevation-2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Register Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
