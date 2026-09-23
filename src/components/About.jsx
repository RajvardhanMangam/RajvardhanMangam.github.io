import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { education, profile, internship } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".edu-row").forEach((row) => {
        gsap.fromTo(
          row,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 88%" },
          }
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={rootRef} className="relative bg-base px-6 py-24 sm:px-10">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <h2 className="font-display text-5xl uppercase leading-none tracking-tightest text-ink sm:text-7xl">
            Back<span className="text-signal">ground</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-dim sm:text-base">
            {profile.name} is a {profile.role.toLowerCase()} at {profile.institute}, working
            across geospatial AI, applied machine learning, and systems engineering — building
            things that hold up outside a notebook.
          </p>

          <div className="mt-10 rounded-xl border border-base-line bg-base-panel p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-signal">
              Internship
            </p>
            <h3 className="mt-3 font-display text-xl uppercase tracking-tight text-ink">
              {internship.company}
            </h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
              {internship.role} · {internship.period}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-dim">{internship.detail}</p>
          </div>
        </div>

        <div className="flex flex-col divide-y divide-base-line border-y border-base-line">
          {education.map((e) => (
            <div
              key={e.degree}
              className="edu-row grid grid-cols-[auto_1fr_auto] items-baseline gap-4 py-6 sm:gap-8"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
                {e.range}
              </span>
              <div>
                <h4 className="font-display text-lg uppercase leading-tight tracking-tight text-ink sm:text-2xl">
                  {e.degree}
                </h4>
                <p className="mt-1 text-xs text-ink-dim sm:text-sm">{e.institute}</p>
              </div>
              <span className="font-mono text-sm text-signal">{e.metric}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
