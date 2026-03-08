"use client";

const EVENT_TITLE = "BFM Live Training with Dr. Rob DeMartino, DC";
const EVENT_DESCRIPTION =
  "Free live training on the bioenergetic model of health. Join via Zoom: https://us02web.zoom.us/meeting/register/4UmEhSpkSFuShdukqTRaQQ";
const EVENT_LOCATION =
  "https://us02web.zoom.us/meeting/register/4UmEhSpkSFuShdukqTRaQQ";
const EVENT_START = "20260314T180000Z";
const EVENT_END = "20260315T010000Z";

function getGoogleCalendarUrl() {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT_TITLE,
    dates: `${EVENT_START}/${EVENT_END}`,
    details: EVENT_DESCRIPTION,
    location: EVENT_LOCATION,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function generateICS() {
  try {
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//BFM//Live Training//EN",
      "BEGIN:VEVENT",
      `DTSTART:${EVENT_START}`,
      `DTEND:${EVENT_END}`,
      `SUMMARY:${EVENT_TITLE}`,
      `DESCRIPTION:${EVENT_DESCRIPTION}`,
      `LOCATION:${EVENT_LOCATION}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "bfm-live-training.ics";
    link.click();
    URL.revokeObjectURL(url);
  } catch {
    // Silently fail - user can manually add event
  }
}

export default function AddToCalendar() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
      <a
        href={getGoogleCalendarUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Add to Google Calendar (opens in new tab)"
        className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-surface)] px-5 py-3 text-subheadline font-semibold text-[var(--color-label)] transition-colors hover:bg-[var(--color-surface-secondary)]"
        style={{ boxShadow: "0 0 0 1px var(--color-separator)" }}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
          <path
            d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"
            fill="currentColor"
          />
        </svg>
        Google Calendar
      </a>
      <button
        onClick={generateICS}
        className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-surface)] px-5 py-3 text-subheadline font-semibold text-[var(--color-label)] transition-colors hover:bg-[var(--color-surface-secondary)]"
        style={{ boxShadow: "0 0 0 1px var(--color-separator)" }}
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
          <path
            d="M17 2H7C5.9 2 5 2.9 5 4v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H7V4h10v16zM8 5h8v2H8V5z"
            fill="currentColor"
          />
        </svg>
        Apple / Outlook (.ics)
      </button>
    </div>
  );
}
