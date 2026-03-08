import Image from "next/image";

export default function WhoIsDrRob() {
  return (
    <section className="px-5 py-16 md:py-20" aria-labelledby="dr-rob-heading">
      <div className="mx-auto grid max-w-[980px] items-center gap-12 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <Image
            src="/rob-demartino.webp"
            alt="Dr. Rob DeMartino standing in blue scrubs"
            width={640}
            height={800}
            className="aspect-[3/4] w-full max-w-sm rounded-[var(--radius-lg)] object-cover"
          />
        </div>

        <div>
          <h2
            id="dr-rob-heading"
            className="text-title-2 md:text-title-1 text-[var(--color-label)]"
          >
            Who is Dr. Rob DeMartino?
          </h2>

          <div className="mt-6 space-y-4 text-body text-[var(--color-secondary-label)]">
            <p>
              Dr. Rob has spent over 20 years in clinical practice, helping
              thousands of patients reclaim their health when conventional
              medicine had no answers.
            </p>
            <p>
              He walked away from the traditional medical model after watching it
              fail patient after patient &mdash; people who were told
              &ldquo;everything looks normal&rdquo; while their bodies were
              breaking down from the inside out.
            </p>
            <p>
              He built a new model from the ground up &mdash; one focused on
              cellular energy, mitochondrial health, and the environmental
              factors that modern medicine completely ignores.
            </p>
            <p>
              Today, he&apos;s the developer of the Beyond Functional Medicine
              bioenergetic model and the creator of the BFM At Home Program,
              which teaches people how to take control of their own health using
              the science of light, water, magnetism, and circadian biology.
            </p>
          </div>

          <p className="mt-6 border-l-4 border-[var(--color-cyan)] pl-4 text-body font-semibold italic text-[var(--color-label)]">
            &ldquo;I&apos;m not interested in suppressing your symptoms. I want
            to help your body remember how to heal itself.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
