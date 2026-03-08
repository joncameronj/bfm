"use client";

import { useState, useEffect, useRef } from "react";

const EVENT_DATE = new Date("2026-03-14T18:00:00Z");

function calculateTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer({ compact = false }: { compact?: boolean }) {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof calculateTimeLeft>>(
    calculateTimeLeft
  );
  const [mounted, setMounted] = useState(false);
  const prevSeconds = useRef<number | null>(null);
  const ariaRef = useRef<HTMLDivElement>(null);
  const lastAnnounce = useRef(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!timeLeft || !ariaRef.current) return;
    const now = Date.now();
    if (now - lastAnnounce.current >= 30000) {
      ariaRef.current.textContent = `${timeLeft.days} days, ${timeLeft.hours} hours, ${timeLeft.minutes} minutes until event`;
      lastAnnounce.current = now;
    }
  }, [timeLeft]);

  if (!mounted) {
    return (
      <div className="flex justify-center gap-3">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`skeleton ${compact ? "h-[60px] w-[60px]" : "h-[76px] w-[80px]"}`}
          />
        ))}
      </div>
    );
  }

  if (!timeLeft) {
    return (
      <div className="text-center">
        <span
          className="bg-brand-gradient inline-block rounded-[var(--radius-lg)] px-6 py-3 text-headline font-semibold text-white"
          style={{ animation: "live-pulse 2s ease-in-out infinite" }}
        >
          Event is LIVE!
        </span>
      </div>
    );
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  const isNewSecond = prevSeconds.current !== null && prevSeconds.current !== timeLeft.seconds;
  prevSeconds.current = timeLeft.seconds;

  return (
    <>
      <div
        ref={ariaRef}
        aria-live="polite"
        className="sr-only"
      />
      <div className="flex justify-center gap-3" role="timer" aria-label="Countdown to event">
        {units.map((unit, i) => (
          <div
            key={unit.label}
            className={`flex flex-col items-center rounded-[var(--radius-md)] bg-black ${compact ? "min-w-[60px] px-3 py-2" : "min-w-[80px] px-4 py-3"}`}
            style={
              i === 3 && isNewSecond
                ? { animation: "tick-pulse 200ms ease-out" }
                : undefined
            }
          >
            <span
              className={`font-bold text-white ${compact ? "text-xl" : "text-[32px]"}`}
              style={{ letterSpacing: "-0.02em", lineHeight: 1.12 }}
            >
              {String(unit.value).padStart(2, "0")}
            </span>
            <span
              className={`font-medium uppercase tracking-wider text-gray-400 ${compact ? "text-[10px]" : "text-caption-1"}`}
            >
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
