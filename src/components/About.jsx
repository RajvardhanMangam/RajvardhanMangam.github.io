import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { education } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-about-reveal]", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 70%",
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="field"
      ref={rootRef}
      className="border-b border-base-line bg-base"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div
              data-about-reveal
              className="mb-6 font-mono text-[11px] tracking-wide text-signal"
            >
              02 — Field
            </div>
            <h2
              data-about-reveal
              className="text-balance font-display text-3xl font-medium leading-tight tracking-tightest text-ink md:text-4xl"
            >
              A chemical engineer's instinct for process, applied to data.
            </h2>
            <p
              data-about-reveal
              className="mt-6 max-w-sm text-balance font-body leading-relaxed text-ink-dim"
            >
              I started in chemical engineering, watching boiler operations
              and utility systems at Coromandel International — plants where
              a process either holds steady or it doesn't. That's the lens I
              brought into computer science at IIT Tirupati: treat a model or
              a pipeline like a process to be monitored, tuned, and trusted,
              not just trained once and shipped.
            </p>
          </div>

          <div className="md:col-span-7">
            <div
              data-about-reveal
              className="divide-y divide-base-line border-t border-base-line"
            >
              {education.map((row) => (
                <div
                  key={row.degree}
                  className="grid grid-cols-[5.5rem_1fr] items-baseline gap-4 py-5 md:grid-cols-[7rem_1fr]"
                >
                  <span className="font-mono text-[11px] tracking-wide text-ink-faint">
                    {row.range}
                  </span>
                  <span>
                    <span className="block font-body text-sm text-ink">
                      {row.degree}
                    </span>
                    <span className="block font-body text-[13px] text-ink-faint">
                      {row.institute}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
