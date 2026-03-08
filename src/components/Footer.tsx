export default function Footer() {
  return (
    <footer
      className="px-5 py-10"
      style={{ borderTop: "1px solid var(--color-separator)" }}
    >
      <div className="mx-auto max-w-[980px] text-center">
        <div className="flex flex-wrap items-center justify-center gap-4 text-subheadline text-[var(--color-secondary-label)]">
          <a
            href="mailto:support@beyondfunctionalmedicine.com"
            className="transition-colors hover:text-[var(--color-label)]"
          >
            Support
          </a>
          <span className="text-[var(--color-separator)]">|</span>
          <a href="#" className="transition-colors hover:text-[var(--color-label)]">
            Terms of Service
          </a>
          <span className="text-[var(--color-separator)]">|</span>
          <a href="#" className="transition-colors hover:text-[var(--color-label)]">
            Privacy Policy
          </a>
        </div>

        <p className="text-caption-1 mt-4 text-[var(--color-tertiary-label)]">
          Copyright 2026 Beyond Functional Medicine. All Rights Reserved.
        </p>

        <p className="text-caption-2 mx-auto mt-4 max-w-[580px] leading-relaxed text-[var(--color-tertiary-label)]">
          This event is for educational purposes only and is not intended to
          diagnose, treat, cure, or prevent any disease. Always consult with
          your healthcare provider before making changes to your health regimen.
        </p>
      </div>
    </footer>
  );
}
