"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Will there be a replay?",
    answer:
      "This is a live event and we strongly encourage you to attend live. We'll do our best to make a replay available, but nothing beats being there in real time.",
  },
  {
    question: "I'm already seeing a doctor. Is this still for me?",
    answer:
      "Absolutely. This isn't about replacing your doctor — it's about understanding what they're not testing and what you can do in addition to conventional care.",
  },
  {
    question: "Do I need any medical background to understand this?",
    answer:
      "Not at all. Dr. Rob breaks down complex science into simple, actionable language anyone can follow.",
  },
  {
    question: "Is this really free?",
    answer:
      "Yes, 100% free. Dr. Rob believes this information is too important to gate behind a paywall. Just show up ready to learn.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-5 py-16 md:py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-[720px]">
        <h2
          id="faq-heading"
          className="text-title-2 md:text-title-1 text-center text-[var(--color-label)]"
        >
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <div
                key={faq.question}
                className="rounded-[var(--radius-md)] bg-[var(--color-surface)] transition-shadow"
                style={{
                  boxShadow: isOpen
                    ? "var(--shadow-elevation-1)"
                    : "0 0 0 1px var(--color-separator)",
                  transitionDuration: "var(--motion-standard)",
                }}
              >
                <button
                  id={buttonId}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-headline pr-4 text-[var(--color-label)]">
                    {faq.question}
                  </span>
                  <svg
                    className="h-4 w-4 shrink-0 text-[var(--color-tertiary-label)] transition-transform"
                    style={{
                      transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                      transitionDuration: "var(--motion-standard)",
                      transitionTimingFunction: "var(--ease-out)",
                    }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="grid transition-all"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transitionDuration: "var(--motion-standard)",
                    transitionTimingFunction: "var(--ease-out)",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="text-callout px-6 pb-4 text-[var(--color-secondary-label)]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
