import { useEffect, useRef } from "react";
import gsap from "gsap";
import { profile } from "../data";

export default function Footer() {
  const linkRef = useRef(null);

  useEffect(() => {
    const el = linkRef.current;
    if (!el || window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      gsap.to(el, { x: x * 0.25, y: y * 0.4, duration: 0.4, ease: "power2.out" });
    };
    const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <footer id="contact" className="relative bg-base px-6 pb-10 pt-24 sm:px-10">
      <div className="flex flex-col items-center rounded-2xl border border-base-line bg-base-panel px-6 py-20 text-center sm:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink-faint">
          {String(new Date().getFullYear())} — Available for opportunities
        </p>
        <a
          ref={linkRef}
          href={`mailto:${profile.email}`}
          data-cursor="link"
          className="mt-6 font-display text-[12vw] uppercase leading-[0.9] tracking-tightest text-ink transition-colors hover:text-signal sm:text-[6vw]"
        >
          Let&apos;s Talk
        </a>
        <p className="mt-6 font-mono text-sm text-ink-dim">{profile.email}</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            data-cursor="link"
            className="font-mono text-xs uppercase tracking-[0.2em] text-ink-dim transition-colors hover:text-signal"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            data-cursor="link"
            className="font-mono text-xs uppercase tracking-[0.2em] text-ink-dim transition-colors hover:text-signal"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
        <span>{profile.name} — {profile.coordinates}</span>
        <span>Built with React, R3F &amp; GSAP</span>
      </div>
    </footer>
  );
}
