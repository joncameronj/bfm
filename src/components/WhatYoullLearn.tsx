import PillarCard from "./PillarCard";

const topics = [
  {
    title: "Why You're Really Sick",
    subtitle:
      "The mitochondrial model of disease — explained in plain language",
    bullets: [
      "Why 80% of chronic disease isn't genetic — it's energetic",
      'What "energetic debt" means and why it matters more than any blood test',
      "How your cells lose the ability to produce energy over time",
    ],
    color: "rgb(0,200,255)",
  },
  {
    title: "The 5 Levers Nobody Tests",
    subtitle: "The biomarkers your doctor has never checked",
    bullets: [
      "Melatonin, Leptin, Vitamin D, MSH, Ubiquitin — and why they matter",
      "Why standard blood work misses the real picture",
      "How these markers predict disease years before symptoms appear",
    ],
    color: "rgb(80,120,255)",
  },
  {
    title: "Light, Timing & Environment",
    subtitle: "The invisible forces destroying your health",
    bullets: [
      "How circadian rhythm disruption drives chronic inflammation",
      "Why morning sunlight is more powerful than most supplements",
      "The EMF exposure problem — and what you can actually do about it",
    ],
    color: "rgb(20,10,255)",
  },
  {
    title: "Your Action Plan",
    subtitle: "Protocols you can start immediately",
    bullets: [
      "Specific light exposure protocols for energy and sleep",
      "Meal timing strategies that support mitochondrial health",
      "Simple EMF remediation steps for your home and workspace",
    ],
    color: "rgb(100,0,200)",
  },
];

export default function WhatYoullLearn() {
  return (
    <section
      className="bg-[var(--color-surface-secondary)] px-5 py-16 md:py-20"
      aria-labelledby="learn-heading"
    >
      <div className="mx-auto max-w-[720px]">
        <h2
          id="learn-heading"
          className="text-title-2 md:text-title-1 text-center text-[var(--color-label)]"
        >
          Here&apos;s What You Can Expect To Learn During This Free Event
        </h2>
        <p className="mx-auto mt-4 max-w-[580px] text-center text-body text-[var(--color-secondary-label)]">
          Dr. Rob will go deep on the bioenergetic model and give you actionable
          steps you can start using immediately.
        </p>

        <div className="mt-10 space-y-4">
          {topics.map((topic) => (
            <PillarCard key={topic.title} {...topic} />
          ))}
        </div>
      </div>
    </section>
  );
}
