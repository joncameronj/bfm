"use client";
import { memo, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";

const pillars = [
  {
    label: "Pillar 1",
    title: "Redox Potential",
    description:
      "The electrical charge in your cells that determines inflammation, healing, and energy production. When your redox drops, disease follows.",
    content: (
      <Image
        src="/redox-potential.png"
        alt="Redox Potential"
        width={420}
        height={340}
        className="rounded-[var(--radius-lg)] object-contain"
      />
    ),
  },
  {
    label: "Pillar 2",
    title: "Heteroplasmy",
    description:
      "The damage to your mitochondrial DNA that accumulates over time from environmental stressors. The good news? It can be reversed.",
    content: (
      <Image
        src="/heteroplasmy.png"
        alt="Heteroplasmy"
        width={420}
        height={340}
        className="rounded-[var(--radius-lg)] object-contain"
      />
    ),
  },
  {
    label: "Pillar 3",
    title: "Autophagy",
    description:
      "Your body's built-in repair system that cleans out damaged cells. When it breaks, autoimmune disease and degeneration follow.",
    content: (
      <Image
        src="/autophagy.png"
        alt="Autophagy"
        width={420}
        height={340}
        className="rounded-[var(--radius-lg)] object-contain"
      />
    ),
  },
];

export default function TheSolution() {
  return (
    <section
      className="bg-[var(--color-surface)] px-5 pt-20 pb-10 md:pt-24"
      aria-labelledby="solution-heading"
    >
      <div className="mx-auto max-w-[980px]">
        <div className="flex flex-col items-center px-6 text-center">
          <h2
            id="solution-heading"
            className="text-title-2 md:text-title-1 text-[var(--color-label)]"
          >
            The 3 Hidden Pillars That Control Whether You Heal or Stay Sick
          </h2>
          <p className="mx-auto mt-4 max-w-[580px] text-body text-[var(--color-secondary-label)]">
            Dr. Rob will show you how these 3 pillars interact — and the
            specific things you can start doing immediately to rebuild your
            health from the cellular level up.
          </p>
        </div>
        <StickyScroll content={pillars} />
      </div>
    </section>
  );
}

const StickyScroll = memo(function StickyScroll({
  content,
}: {
  content: typeof pillars;
}) {
  return (
    <div className="py-4 md:py-16">
      <div className="relative mx-auto hidden max-w-[980px] flex-col justify-between p-10 lg:flex">
        {content.map((item, index) => (
          <ScrollContent key={item.title} item={item} index={index} />
        ))}
      </div>
      <div className="relative mx-auto flex max-w-[980px] flex-col justify-between p-6 lg:hidden">
        {content.map((item, index) => (
          <ScrollContentMobile key={item.title} item={item} index={index} />
        ))}
      </div>
    </div>
  );
});

const ScrollContent = memo(function ScrollContent({
  item,
  index,
}: {
  item: (typeof pillars)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translate = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const translateContent = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.5, 0.7, 1],
    [0, 1, 1, 0, 0],
  );
  const opacityContent = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0, 1, 1, 0],
  );

  return (
    <div ref={ref} className="relative my-40 grid grid-cols-2 gap-12">
      <div className="w-full">
        <motion.div
          style={{ y: translate, opacity: index === 0 ? opacityContent : 1 }}
        >
          <p className="text-subheadline mb-2 font-semibold uppercase tracking-widest text-brand-gradient">
            {item.label}
          </p>
          <h3 className="text-title-2 lg:text-title-1 mt-2 max-w-md text-left text-[var(--color-label)]">
            {item.title}
          </h3>
          <p className="mt-4 max-w-sm text-body text-[var(--color-secondary-label)]">
            {item.description}
          </p>
        </motion.div>
      </div>
      <motion.div
        style={{ y: translateContent, opacity }}
        className="flex h-full w-full items-center self-start rounded-[var(--radius-lg)]"
      >
        {item.content}
      </motion.div>
    </div>
  );
});

const ScrollContentMobile = memo(function ScrollContentMobile({
  item,
}: {
  item: (typeof pillars)[number];
  index: number;
}) {
  return (
    <div className="relative my-10 flex flex-col gap-8">
      <div className="w-full self-start rounded-[var(--radius-lg)]">{item.content}</div>
      <div className="w-full">
        <p className="text-subheadline mb-2 font-semibold uppercase tracking-widest text-brand-gradient">
          {item.label}
        </p>
        <h3 className="text-title-2 mt-2 text-left text-[var(--color-label)]">
          {item.title}
        </h3>
        <p className="mt-3 max-w-sm text-callout text-[var(--color-secondary-label)]">
          {item.description}
        </p>
      </div>
    </div>
  );
});
