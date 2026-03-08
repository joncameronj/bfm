"use client";

import { useEffect, useState } from "react";
import AddToCalendar from "@/components/AddToCalendar";
import CountdownTimer from "@/components/CountdownTimer";
import TimezoneDisplay from "@/components/TimezoneDisplay";
import ShareButton from "@/components/ShareButton";

export default function ConfirmedContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div
        className="bg-brand-gradient mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
        style={{
          animation: mounted ? "scale-in 500ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards" : "none",
          transform: mounted ? undefined : "scale(0)",
        }}
      >
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
          style={{
            strokeDasharray: 24,
            strokeDashoffset: mounted ? 0 : 24,
            transition: "stroke-dashoffset 400ms ease-out 200ms",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h1 className="text-display-small md:text-display-medium text-[var(--color-label)]">
        You&apos;re In! See You March 14th.
      </h1>

      <p className="text-body mt-4 text-[var(--color-secondary-label)]">
        Your spot is confirmed. Here&apos;s what to do next:
      </p>

      <div className="mt-8 space-y-4 text-left">
        {[
          "Check your email for confirmation from Zoom",
          "Add the event to your calendar (below)",
          "Show up 5 minutes early on March 14th",
        ].map((step, i) => (
          <div
            key={step}
            className="flex items-start gap-4 rounded-[var(--radius-md)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-elevation-1)]"
          >
            <span className="bg-brand-gradient flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-caption-1 font-bold text-white">
              {i + 1}
            </span>
            <p className="text-callout pt-1 text-[var(--color-secondary-label)]">{step}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <p className="text-subheadline mb-4 font-semibold uppercase tracking-wider text-[var(--color-tertiary-label)]">
          Add to Your Calendar
        </p>
        <AddToCalendar />
      </div>

      <div className="mt-10">
        <TimezoneDisplay />
      </div>

      <div className="mt-8">
        <p className="text-subheadline mb-3 font-semibold uppercase tracking-wider text-[var(--color-tertiary-label)]">
          Countdown to the Event
        </p>
        <CountdownTimer compact />
      </div>

      <div className="mt-10">
        <ShareButton />
      </div>
    </>
  );
}
