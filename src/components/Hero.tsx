"use client";

import CTAButton from "./CTAButton";
import CountdownTimer from "./CountdownTimer";
import TimezoneDisplay from "./TimezoneDisplay";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

export default function Hero() {
  const containerRef = useStaggerReveal<HTMLDivElement>();

  return (
    <section
      className="px-5 pb-20 pt-24 text-center md:pb-24 md:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[680px]" ref={containerRef}>
        <p
          data-reveal="0"
          className="text-subheadline mb-6 font-semibold uppercase tracking-[0.1em] opacity-0"
          style={{
            background: "linear-gradient(135deg, var(--color-cyan), var(--color-blue))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          If you&apos;re tired of feeling sick and being told
          &ldquo;everything looks normal&rdquo;...
        </p>

        <h1
          id="hero-heading"
          data-reveal="100"
          className="text-display-small md:text-display-medium lg:text-display-large mx-auto text-[var(--color-label)] opacity-0"
        >
          Discover the Hidden Reason You&apos;re Still Sick{" "}
          <span className="italic">
            &mdash; And the Bioenergetic Model That&apos;s Helping People Take
            Back Their Health
          </span>
        </h1>

        <p
          data-reveal="200"
          className="text-body mx-auto mt-6 max-w-[580px] italic text-[var(--color-secondary-label)] opacity-0"
        >
          Join Dr. Rob DeMartino for a FREE live training where he pulls back
          the curtain on why your body is losing energy &mdash; and exactly what
          you can do to fix it.
        </p>

        <div
          data-reveal="300"
          className="mx-auto mt-8 max-w-lg rounded-[var(--radius-lg)] bg-[var(--color-surface-secondary)] px-6 py-3 opacity-0"
        >
          <p className="text-subheadline font-semibold text-[var(--color-label)]">
            This is a free, live event &mdash; and you&apos;re invited
          </p>
        </div>

        <div data-reveal="400" className="mt-10 opacity-0">
          <CountdownTimer />
        </div>

        <div data-reveal="400" className="mt-4 opacity-0">
          <TimezoneDisplay />
        </div>

        <div data-reveal="500" className="mt-8 opacity-0">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
