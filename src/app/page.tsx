import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import TheProblem from "@/components/TheProblem";
import TheSolution from "@/components/TheSolution";
import WhatYoullLearn from "@/components/WhatYoullLearn";
import CopilotTease from "@/components/CopilotTease";
import WhoIsDrRob from "@/components/WhoIsDrRob";
import WhyNow from "@/components/WhyNow";
import EventDetails from "@/components/EventDetails";
import FAQAccordion from "@/components/FAQAccordion";
import CTAButton from "@/components/CTAButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <IntroSection />
        <TheProblem />
        <TheSolution />
        <WhatYoullLearn />
        <CopilotTease />
        <WhoIsDrRob />
        <WhyNow />
        <EventDetails />
        <FAQAccordion />

        <section className="px-5 py-16 text-center md:py-20">
          <CTAButton />
          <p className="text-footnote mt-4 text-[var(--color-tertiary-label)]">
            Spots are limited. Secure yours before they&apos;re gone.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
