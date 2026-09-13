import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { achievements, internship } from "../data";

gsap.registerPlugin(ScrollTrigger);

export default function Log() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-log-reveal]", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 75%",
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="log" ref={rootRef} className="border-t border-base-line bg-base">
      <div className="mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <div className="mb-14 font-mono text-[11px] tracking-wide text-signal">
          04 — Log
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2
              data-log-reveal
              className="mb-10 font-display text-2xl font-medium tracking-tightest text-ink"
            >
              Recognitions
            </h2>
            <div className="space-y-8">
              {achievements.map((a) => (
                <div
                  key={a.title}
                  data-log-reveal
                  className="border-l border-base-line pl-6"
                >
                  <h3 className="font-body text-[15px] font-medium text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-2 max-w-lg font-body text-sm leading-relaxed text-ink-faint">
                    {a.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <h2
              data-log-reveal
              className="mb-10 font-display text-2xl font-medium tracking-tightest text-ink"
            >
              Internship
            </h2>
            <div data-log-reveal className="rounded-3xl border border-base-line bg-base-panel p-7">
              <div className="flex items-baseline justify-between">
                <h3 className="font-body text-[15px] font-medium text-ink">
                  {internship.company}
                </h3>
                <span className="font-mono text-[11px] text-ink-faint">
                  {internship.period}
                </span>
              </div>
              <p className="mt-1 font-mono text-[11px] tracking-wide text-signal">
                {internship.role}
              </p>
              <p className="mt-4 font-body text-sm leading-relaxed text-ink-faint">
                {internship.detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
