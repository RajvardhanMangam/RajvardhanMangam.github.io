import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projects } from "../data";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project, i, total, sectionRef, tileRef, isLast }) {
  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: isLast ? "100svh" : "160vh" }}
    >
      <div
        ref={tileRef}
        className="sticky top-0 flex h-[100svh] items-center"
        style={{ zIndex: i + 1 }}
      >
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="rounded-3xl border border-base-line bg-base-panel px-7 py-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] md:px-14 md:py-16">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-4">
                <div className="flex items-baseline gap-3 font-mono text-[11px] tracking-wide text-ink-faint">
                  <span className="text-signal">{project.index}</span>
                  <span>/ {String(total).padStart(2, "0")}</span>
                  <span className="ml-auto md:hidden">{project.period}</span>
                </div>
                <h3 className="mt-5 font-display text-3xl font-medium leading-[1.02] tracking-tightest text-ink md:text-[2.6rem]">
                  {project.name}
                </h3>
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-base-line px-3 py-1 font-mono text-[11px] text-signal">
                  {project.tag}
                </div>
                <div className="mt-6 hidden font-mono text-[11px] tracking-wide text-ink-faint md:block">
                  {project.period}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] tracking-wide text-ink-dim underline decoration-base-line underline-offset-4 hover:text-signal hover:decoration-signal"
                >
                  View source
                </a>
              </div>

              <div className="md:col-span-8">
                <p className="text-balance font-body text-lg leading-relaxed text-ink-dim">
                  {project.summary}
                </p>
                <ul className="mt-8 space-y-4 border-t border-base-line pt-8">
                  {project.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-4 font-body text-[15px] leading-relaxed text-ink-dim"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-base-panel2 px-3 py-1 font-mono text-[11px] text-ink-faint"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const rootRef = useRef(null);
  const sectionRefs = useRef([]);
  const tileRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = sectionRefs.current.filter(Boolean);
      const tiles = tileRefs.current.filter(Boolean);

      tiles.forEach((tile, i) => {
        if (i === tiles.length - 1) return;
        // Only the tile itself (the rounded card) scales/fades as the next
        // one covers it -- the outer section stays a plain, static spacer.
        gsap.to(tile, {
          scale: 0.92,
          opacity: 0.35,
          filter: "blur(3px)",
          ease: "none",
          scrollTrigger: {
            trigger: sections[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={rootRef} className="relative bg-base">
      <div className="mx-auto max-w-6xl px-6 pt-28 md:px-10 md:pt-36">
        <div className="mb-4 font-mono text-[11px] tracking-wide text-signal">
          01 — Work
        </div>
        <h2 className="max-w-2xl text-balance font-display text-3xl font-medium leading-tight tracking-tightest text-ink md:text-4xl">
          Six systems, six different kinds of signal.
        </h2>
      </div>

      <div className="relative mt-16">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            i={i}
            total={projects.length}
            isLast={i === projects.length - 1}
            sectionRef={(el) => (sectionRefs.current[i] = el)}
            tileRef={(el) => (tileRefs.current[i] = el)}
          />
        ))}
      </div>
    </section>
  );
}
