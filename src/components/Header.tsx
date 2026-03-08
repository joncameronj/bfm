"use client";

import { useState, useEffect } from "react";
import Image from "next/image";


export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav aria-label="Main navigation">
      <header
        className="fixed top-0 z-50 w-full transition-all"
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          boxShadow: scrolled
            ? "var(--shadow-elevation-3)"
            : "none",
          borderBottom: scrolled
            ? "1px solid var(--color-separator)"
            : "1px solid transparent",
          transitionDuration: "var(--motion-standard)",
          transitionTimingFunction: "var(--ease-out)",
        }}
      >
        <div className="mx-auto flex max-w-[980px] items-center justify-center px-5 py-3 md:py-3.5">
          <Image
            src="/All Black - Horizontal.png"
            alt="Beyond Functional Medicine"
            width={220}
            height={32}
            priority
          />
        </div>
      </header>
    </nav>
  );
}
