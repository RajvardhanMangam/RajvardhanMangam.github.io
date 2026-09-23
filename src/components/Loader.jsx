import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0);
  const rootRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      onDone?.();
      return;
    }

    const counter = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(rootRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "power4.inOut",
          delay: 0.15,
          onComplete: onDone,
        });
      },
    });

    tl.to(counter, {
      value: 100,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: () => setPct(Math.round(counter.value)),
    }).to(barRef.current, { scaleX: 1, duration: 1.6, ease: "power2.inOut" }, "<");

    return () => tl.kill();
  }, [onDone]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base"
    >
      <div className="font-display text-[14vw] leading-none tracking-tightest text-ink sm:text-[8vw]">
        {pct}%
      </div>
      <div className="mt-6 h-px w-40 overflow-hidden bg-base-line">
        <div
          ref={barRef}
          className="h-full w-full origin-left scale-x-0 bg-signal"
        />
      </div>
      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ink-faint">
        Loading Index
      </p>
    </div>
  );
}
