import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { skillGroups } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-skill-card]", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 75%",
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="border-b border-base-line bg-base">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <div className="mb-6 font-mono text-[11px] tracking-wide text-signal">
              03 — Arsenal
            </div>
            <h2 className="text-balance font-display text-3xl font-medium leading-tight tracking-tightest text-ink md:text-4xl">
              Working vocabulary
            </h2>
          </div>
          <p className="hidden max-w-xs text-right font-body text-sm leading-relaxed text-ink-faint md:block">
            Grouped by where each tool actually gets used, not alphabetized
            for show.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              data-skill-card
              className="group rounded-3xl border border-base-line bg-base-panel p-7 transition-colors hover:bg-base-panel2 hover:border-base-line/80"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="font-display text-base text-ink">
                  {group.label}
                </h3>
                <span className="font-mono text-[11px] text-ink-faint">
                  {group.coord}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-base-line px-3 py-1 font-mono text-[11px] text-ink-dim group-hover:border-base-line"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
