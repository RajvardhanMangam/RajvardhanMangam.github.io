import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillGroups } from "../data";

gsap.registerPlugin(ScrollTrigger);

const COLORS = ["#D8FF3E", "#7FE0FF", "#E893FF", "#8AE8C0", "#FFB86B", "#9BA8FF"];

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

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-base-line bg-base-line sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const color = COLORS[i % COLORS.length];
          return (
            <div key={g.label} className="skill-card flex h-full flex-col bg-base-panel p-7">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-xs" style={{ color }}>
                    {g.coord}
                  </span>
                  <h3 className="mt-2 font-display text-xl uppercase leading-tight tracking-tight text-ink">
                    {g.label}
                  </h3>
                </div>
                <span
                  className="mt-1 h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: color }}
                  aria-hidden="true"
                />
              </div>

              <p className="mt-2 text-xs leading-relaxed text-ink-faint">{g.blurb}</p>

              <div className="mt-6 flex flex-1 flex-wrap content-start gap-2 border-t border-base-line/60 pt-5">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-base-line px-3 py-1 text-[11px] leading-none text-ink-dim transition-colors duration-200 hover:border-current"
                    onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
