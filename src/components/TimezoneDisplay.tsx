"use client";

import { useState, useEffect } from "react";

const EVENT_DATE = new Date("2026-03-14T17:00:00Z");

export default function TimezoneDisplay() {
  const [display, setDisplay] = useState<string | null>(null);

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formatted = EVENT_DATE.toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
      timeZone: tz,
    });
    setDisplay(formatted);
  }, []);

  if (!display) {
    return (
      <div className="flex justify-center">
        <div className="skeleton h-5 w-[200px]" />
      </div>
    );
  }

  return (
    <p className="text-subheadline text-center text-[var(--color-secondary-label)]">
      {display} your time
    </p>
  );
}
