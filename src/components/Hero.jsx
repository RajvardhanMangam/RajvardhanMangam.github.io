import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroField from "./HeroField";
import { profile } from "../data";

export default function Hero() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-coord]", { opacity: 0, y: -8, duration: 0.6 })
        .from(
          "[data-hero-line]",
          { opacity: 0, y: 28, duration: 0.9, stagger: 0.09 },
          "-=0.3"
        )
        .from(
          "[data-hero-sub]",
          { opacity: 0, y: 16, duration: 0.7 },
          "-=0.5"
        )
        .from(
          "[data-hero-meta] > *",
          { opacity: 0, y: 10, duration: 0.5, stagger: 0.06 },
          "-=0.4"
        );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative min-h-[100svh] overflow-hidden border-b border-base-line"
    >
      <HeroField />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-base" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-16 pt-40 md:px-10 md:pb-24">
        <div
          data-hero-coord
          className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-base/70 px-4 py-2 font-mono text-[11px] tracking-wide text-ink backdrop-blur-md"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          <span>{profile.location}</span>
          <span className="text-ink-faint">{profile.coordinates}</span>
        </div>

        <h1 className="max-w-4xl font-display font-medium leading-[0.98] tracking-tightest text-ink">
          <span data-hero-line className="block text-[13vw] md:text-[6.4rem]">
            Rajvardhan
          </span>
          <span data-hero-line className="block text-[13vw] md:text-[6.4rem] text-ink-dim">
            Mangam
          </span>
        </h1>

        <p
          data-hero-sub
          className="mt-8 max-w-lg text-balance font-body text-lg leading-relaxed text-ink-dim"
        >
          I build systems that turn raw signal — satellite imagery, market
          data, citizen complaints — into something a machine can reason
          about and a person can act on.
        </p>

        <div
          data-hero-meta
          className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] tracking-wide text-ink-faint"
        >
          <span>{profile.role}</span>
          <span className="h-1 w-1 rounded-full bg-base-line" />
          <span>{profile.institute}</span>
          <span className="h-1 w-1 rounded-full bg-base-line" />
          <span>{profile.id}</span>
        </div>
      </div>
    </section>
  );
}
