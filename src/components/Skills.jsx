import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillGroups } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".skill-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: (i % 3) * 0.06,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 90%" },
          }
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={rootRef} className="relative bg-base px-6 py-24 sm:px-10">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-4 border-b border-base-line pb-6">
        <h2 className="font-display text-5xl uppercase leading-none tracking-tightest text-ink sm:text-7xl">
          The <span className="text-signal">Arsenal</span>
        </h2>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
          {String(skillGroups.length).padStart(2, "0")} Categories
        </span>
      </div>

      <div className="grid gap-px overflow-hidden rounded-xl border border-base-line bg-base-line sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.label} className="skill-card bg-base-panel p-7">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-xl uppercase tracking-tight text-ink">
                {g.label}
              </h3>
              <span className="font-mono text-xs text-signal">{g.coord}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-base-line px-3 py-1 text-xs text-ink-dim"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
