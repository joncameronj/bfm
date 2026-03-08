import CTAButton from "./CTAButton";

export default function WhyNow() {
  return (
    <section className="px-5 py-16 md:py-20" aria-labelledby="why-now-heading">
      <div className="mx-auto max-w-[680px]">
        <h2
          id="why-now-heading"
          className="text-title-2 md:text-title-1 text-center text-[var(--color-label)]"
        >
          Why This Event Couldn&apos;t Come at a Better Time...
        </h2>

        <div className="mt-8 space-y-4 text-center text-body text-[var(--color-secondary-label)]">
          <p>
            Chronic disease is at an all-time high. EMF exposure is
            skyrocketing. People are sicker, more fatigued, and more inflamed
            than ever before.
          </p>
          <p>
            Conventional medicine continues to focus on symptoms while ignoring
            root causes. Meanwhile, the environmental factors destroying your
            health are accelerating every year.
          </p>
          <p className="font-semibold text-[var(--color-label)]">
            The longer you wait, the more energetic debt accumulates.
          </p>
        </div>

        <div className="mt-10 rounded-[var(--radius-xl)] bg-black px-8 py-6 text-center">
          <p className="text-body font-semibold leading-relaxed text-white">
            &ldquo;Your body is designed to heal. But it can&apos;t do it while
            running on empty. Let Dr. Rob show you how to rebuild from the
            inside out.&rdquo;
          </p>
        </div>

        <div className="mt-10 text-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}
