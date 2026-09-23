import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroField from "./HeroField";
import { profile } from "../data";

export default function Hero() {
  const rootRef = useRef(null);
  const lineRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(lineRefs.current, { yPercent: 120, rotate: 3 });
      gsap.to(lineRefs.current, {
        yPercent: 0,
        rotate: 0,
        duration: 1.1,
        stagger: 0.09,
        ease: "power4.out",
        delay: 0.3,
      });
      gsap.fromTo(
        ".hero-sub",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 1, delay: 1.1, ease: "power2.out" }
      );
      gsap.fromTo(
        ".hero-scroll",
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1.5, ease: "power2.out" }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const lines = ["Systems.", "Signal.", "Shipped."];

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-base px-6 pb-16 pt-28 sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <HeroField />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base via-base/40 to-transparent" />

      <div className="relative z-10 flex flex-wrap items-end justify-between gap-6 border-b border-base-line pb-6">
        <p className="hero-sub max-w-xs font-mono text-[11px] uppercase leading-relaxed tracking-[0.25em] text-ink-dim">
          {profile.coordinates} — {profile.location}
        </p>
        <p className="hero-sub font-mono text-[11px] uppercase tracking-[0.25em] text-ink-dim">
          {profile.role}
        </p>
      </div>

      <h1 className="relative z-10 mt-6 font-display font-semibold uppercase leading-[0.86] tracking-tightest text-ink">
        {lines.map((line, i) => (
          <span key={line} className="block overflow-hidden">
            <span
              ref={(el) => (lineRefs.current[i] = el)}
              className="block text-[15vw] sm:text-[10.5vw] lg:text-[8.5vw]"
            >
              {line}
            </span>
          </span>
        ))}
      </h1>

      <div className="hero-scroll relative z-10 mt-10 flex items-center gap-3 self-start">
        <span className="h-10 w-px animate-pulse bg-signal" />
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-faint">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}
