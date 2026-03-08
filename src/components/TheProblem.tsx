export default function TheProblem() {
  return (
    <section
      className="bg-[var(--color-surface-secondary)] px-5 py-16 md:py-20"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-[720px]">
        <h2
          id="problem-heading"
          className="text-title-2 md:text-title-1 text-center text-[var(--color-label)]"
        >
          Here&apos;s What Nobody Is Telling You About Why You&apos;re Sick...
        </h2>

        <div className="mt-10 space-y-6 text-body text-[var(--color-secondary-label)]">
          <p>
            You go to your doctor. They run blood work. They order imaging.
            Everything comes back &ldquo;normal.&rdquo; But you still feel
            terrible. Exhausted. Inflamed. Like your body is breaking down and
            nobody can tell you why.
          </p>
          <p>
            Here&apos;s the truth:{" "}
            <strong className="text-[var(--color-label)]">
              80% of chronic disease isn&apos;t genetic &mdash; it&apos;s
              energetic.
            </strong>{" "}
            Your mitochondria &mdash; the power plants inside every cell &mdash;
            are losing their ability to produce energy. And when that happens,
            everything falls apart.
          </p>
          <p>
            The conventional medical model is designed to find and suppress
            symptoms. It targets the wrong thing. It looks at the branches while
            completely ignoring the roots.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <div
            className="flex h-48 w-full max-w-lg items-center justify-center rounded-[var(--radius-lg)] bg-gray-300 text-footnote text-[var(--color-tertiary-label)]"
            aria-hidden="true"
          >
            Cell Energy Graphic
          </div>
        </div>

        <div className="bg-brand-gradient mt-10 rounded-[var(--radius-xl)] px-8 py-6 text-center">
          <p className="text-body font-semibold leading-relaxed text-white">
            &ldquo;The real cause isn&apos;t in your genes. It&apos;s in your
            energy. And once you understand this, everything changes.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
