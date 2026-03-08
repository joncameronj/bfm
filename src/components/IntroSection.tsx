import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="px-5 py-16 md:py-20" aria-labelledby="intro-heading">
      <div className="mx-auto grid max-w-[980px] items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div className="order-2 md:order-1">
          <h2
            id="intro-heading"
            className="text-title-2 md:text-title-1 text-[var(--color-label)]"
          >
            What if everything you&apos;ve been told about your health... is
            wrong?
          </h2>
          <div className="mt-6 space-y-4 text-body text-[var(--color-secondary-label)]">
            <p>
              For over 20 years, Dr. Rob DeMartino, DC has been treating patients
              that conventional medicine gave up on. People with chronic fatigue,
              autoimmune conditions, brain fog, and symptoms that no doctor could
              explain.
            </p>
            <p>
              What he discovered changed everything: the root cause isn&apos;t in
              your blood work or imaging. It&apos;s in your cells &mdash;
              specifically, in your mitochondria and the energy they produce.
            </p>
            <p>
              He built a completely new model of health based on bioenergetics
              &mdash; and it&apos;s helped thousands of people finally understand
              why they&apos;re sick and what to do about it.
            </p>
          </div>
          <div className="mt-6 rounded-[var(--radius-xl)] bg-[var(--color-surface-secondary)] px-6 py-4">
            <p className="text-body font-semibold italic text-[var(--color-label)]">
              &ldquo;I&apos;m not going to tell you it&apos;s all in your head.
              I&apos;m going to show you exactly what&apos;s happening inside
              your cells &mdash; and what to do about it.&rdquo;
            </p>
          </div>
        </div>

        <div className="order-1 flex items-center justify-center md:order-2">
          <Image
            src="/energetic-debt-pyramid.png"
            alt="Diagram showing biology depending on chemistry and physics"
            width={768}
            height={768}
            className="w-full max-w-md rounded-[var(--radius-lg)] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
