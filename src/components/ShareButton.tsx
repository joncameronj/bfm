"use client";

import { useState } from "react";

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="rounded-[var(--radius-md)] bg-[var(--color-surface-secondary)] p-6">
      <p className="text-headline text-[var(--color-label)]">
        Know someone who needs this?
      </p>
      <p className="text-subheadline mt-1 text-[var(--color-secondary-label)]">
        Share this event with a friend or family member.
      </p>
      <button
        onClick={handleCopy}
        className="mt-3 inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-surface)] px-4 py-2 text-subheadline font-medium text-[var(--color-label)] transition-all"
        style={{
          boxShadow: "0 0 0 1px var(--color-separator)",
          transitionDuration: "var(--motion-quick)",
        }}
      >
        {copied ? (
          <>
            <svg
              className="h-4 w-4 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-green-600">Copied!</span>
          </>
        ) : (
          <>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            Copy Link
          </>
        )}
      </button>
    </div>
  );
}
