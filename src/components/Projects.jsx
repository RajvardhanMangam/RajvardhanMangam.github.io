import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Dock from "./Dock";
import { shapeFor } from "./gallery/shapes";
import { projects } from "../data";

gsap.registerPlugin(ScrollTrigger);

const dockItems = projects.map((p) => ({ key: p.name, ...p }));

export default function Projects() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const panelRef = useRef(null);
  const project = projects[active];
  const shape = shapeFor(project.tag);

  const select = (i) => {
    if (i === active) return;
    gsap.fromTo(
      panelRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
    setActive(i);
  };

  useEffect(() => {
    const onKey = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect || rect.top > window.innerHeight || rect.bottom < 0) return;
      if (e.key === "ArrowDown") select((active + 1) % projects.length);
      if (e.key === "ArrowUp") select((active - 1 + projects.length) % projects.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".work-fade",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="relative overflow-visible bg-base px-6 py-24 sm:px-10">
      <div className="work-fade mb-14 flex flex-wrap items-end justify-between gap-4 border-b border-base-line pb-6">
        <h2 className="font-display text-5xl uppercase leading-none tracking-tightest text-ink sm:text-7xl">
          Selected <span className="text-signal">Work</span>
        </h2>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
          {project.index} / {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <div className="work-fade grid gap-6 overflow-visible md:grid-cols-[132px_1fr] md:items-center md:gap-6">
        {/* macOS-style dock, left side — hover a number to see the project name */}
        <Dock
          items={dockItems}
          active={active}
          orientation="y"
          className="w-fit gap-2 rounded-2xl border border-base-line bg-base-panel/80 p-2 backdrop-blur"
          renderItem={(p, isActive, i) => {
            const s = shapeFor(p.tag);
            return (
              <button
                data-cursor="link"
                onClick={() => select(i)}
                aria-current={isActive}
                aria-label={p.name}
                className="group relative flex h-9 w-9 items-center justify-center rounded-full border font-mono text-[10px] transition-colors duration-200"
                style={{
                  borderColor: isActive ? s.color : "rgba(255,255,255,0.16)",
                  backgroundColor: isActive ? `${s.color}22` : "rgba(255,255,255,0.04)",
                  color: isActive ? s.color : "#C9C9CE",
                }}
              >
                {p.index}
                <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md border border-base-line bg-base-panel px-3 py-1.5 text-xs uppercase tracking-[0.15em] text-ink opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100">
                  {p.name}
                </span>
              </button>
            );
          }}
        />

        {/* Detail panel for whichever project is selected */}
        <div
          ref={panelRef}
          className="relative overflow-hidden rounded-2xl border border-base-line bg-base-panel p-7 sm:p-10"
        >
          <span
            className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[13rem] leading-none opacity-[0.06] sm:text-[16rem]"
            style={{ color: shape.color }}
          >
            {project.index}
          </span>

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: shape.color }}
                  aria-hidden="true"
                />
                <p className="font-mono text-[11px] uppercase tracking-[0.25em]" style={{ color: shape.color }}>
                  {project.tag}
                </p>
              </div>

              <h3 className="mt-4 font-display text-4xl uppercase leading-[0.92] tracking-tightest text-ink sm:text-5xl">
                {project.name}
              </h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
                {project.period}
              </p>

              <p className="mt-5 max-w-md text-sm leading-relaxed !text-ink sm:text-base">
                {project.summary}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                className="group mt-6 inline-flex w-fit items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ink transition-colors hover:text-signal"
              >
                View Repository
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </a>
            </div>

            <div className="flex flex-col justify-center">
              <ul className="space-y-3">
                {project.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm leading-relaxed !text-ink">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: shape.color }} />
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-base-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-faint"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
