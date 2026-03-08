export default function CopilotTease() {
  return (
    <section className="px-5 py-16 md:py-20" aria-labelledby="copilot-heading">
      <div
        className="mx-auto max-w-[720px] rounded-[var(--radius-xl)] px-8 py-12 text-center"
        style={{
          background: `
            radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.12) 0%, transparent 60%),
            linear-gradient(135deg, var(--color-blue), var(--color-cyan))
          `,
        }}
      >
        <p id="copilot-heading" className="text-body italic leading-relaxed text-white">
          Plus... Dr. Rob will be sharing something he&apos;s been working on
          for over a year &mdash; a breakthrough that could change how you manage
          your health forever.
        </p>
        <p className="text-headline mt-4 font-bold text-white">
          You&apos;ll want to be there live to see this.
        </p>
      </div>
    </section>
  );
}
