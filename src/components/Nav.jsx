import { useEffect, useState } from "react";
import Dock from "./Dock";
import { profile } from "../data";

const links = [
  { key: "work", label: "Work", href: "#work", n: "01" },
  { key: "about", label: "About", href: "#about", n: "02" },
  { key: "skills", label: "Arsenal", href: "#skills", n: "03" },
  { key: "log", label: "Log", href: "#log", n: "04" },
  { key: "contact", label: "Contact", href: "#contact", n: "05" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 transition-all duration-500 sm:px-10 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <a
          href="#top"
          data-cursor="link"
          onClick={(e) => {
            e.preventDefault();
            go("#top");
          }}
          className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink"
        >
          {profile.navName}
          <span className="text-signal">.</span>
        </a>

        {/* Desktop nav as a horizontal GSAP dock */}
        <Dock
          items={links}
          active={-1}
          orientation="x"
          className="hidden gap-1 md:flex"
          renderItem={(l) => (
            <button
              data-cursor="link"
              onClick={() => go(l.href)}
              className="flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-dim transition-colors duration-200 hover:text-ink"
            >
              <span className="text-signal">{l.n}</span>
              {l.label}
            </button>
          )}
        />

        <button
          data-cursor="link"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      <div
        className={`fixed inset-0 z-30 flex flex-col justify-center gap-4 bg-base px-8 transition-all duration-500 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {links.map((l) => (
          <button
            key={l.href}
            onClick={() => go(l.href)}
            className="flex items-baseline gap-4 border-b border-base-line py-3 text-left"
          >
            <span className="font-mono text-xs text-signal">{l.n}</span>
            <span className="font-display text-3xl tracking-tightest text-ink">{l.label}</span>
          </button>
        ))}
        <a
          href={`mailto:${profile.email}`}
          className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-ink-dim"
        >
          {profile.email}
        </a>
      </div>
    </>
  );
}
