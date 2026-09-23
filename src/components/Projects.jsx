import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../data";

gsap.registerPlugin(ScrollTrigger);

const PANEL_STYLES = [
  "bg-[radial-gradient(circle_at_30%_20%,#2a3140,transparent_60%)]",
  "bg-[radial-gradient(circle_at_70%_30%,#3a2f18,transparent_60%)]",
  "bg-[radial-gradient(circle_at_50%_70%,#1f3025,transparent_60%)]",
  "bg-[radial-gradient(circle_at_20%_80%,#301f30,transparent_60%)]",
  "bg-[radial-gradient(circle_at_80%_60%,#1f2a30,transparent_60%)]",
  "bg-[radial-gradient(circle_at_40%_40%,#302518,transparent_60%)]",
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { scale: 0.94, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            end: "top 30%",
            scrub: true,
          },
        }
      );

      const onMove = (e) => {
        const rect = panelRef.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(panelRef.current, {
          rotateY: px * 8,
          rotateX: -py * 8,
          duration: 0.5,
          ease: "power2.out",
        });
      };
      const onLeave = () => {
        gsap.to(panelRef.current, { rotateX: 0, rotateY: 0, duration: 0.6, ease: "power3.out" });
      };
      const el = panelRef.current;
      el?.addEventListener("mousemove", onMove);
      el?.addEventListener("mouseleave", onLeave);
      return () => {
        el?.removeEventListener("mousemove", onMove);
        el?.removeEventListener("mouseleave", onLeave);
      };
    }, cardRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="sticky top-16 sm:top-20"
      style={{ zIndex: index + 1 }}
    >
      <div
        ref={cardRef}
        className="mx-auto mb-6 w-full max-w-6xl origin-top rounded-2xl border border-base-line bg-base-panel p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] sm:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-signal">{project.index}</span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
                  {project.period}
                </span>
              </div>
              <h3 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tightest text-ink sm:text-5xl">
                {project.name}
              </h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                {project.tag}
              </p>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-dim sm:text-base">
                {project.summary}
              </p>
              <ul className="mt-5 space-y-2">
                {project.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-ink-dim">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-base-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-faint"
                >
                  {s}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="group mt-7 inline-flex w-fit items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-ink transition-colors hover:text-signal"
            >
              View Repository
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </div>

          <div
            ref={panelRef}
            className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-base-line ${
              PANEL_STYLES[index % PANEL_STYLES.length]
            }`}
            style={{ transformStyle: "preserve-3d", perspective: "800px" }}
          >
            <div className="absolute inset-0 flex items-end justify-between p-6">
              <span className="font-display text-[22vw] leading-none text-ink/5 lg:text-[9vw]">
                {project.index}
              </span>
            </div>
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:28px_28px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative bg-base px-6 pb-24 pt-24 sm:px-10">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-4 border-b border-base-line pb-6">
        <h2 className="font-display text-5xl uppercase leading-none tracking-tightest text-ink sm:text-7xl">
          Selected <span className="text-signal">Work</span>
        </h2>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
          {String(projects.length).padStart(2, "0")} Projects
        </span>
      </div>

      <div className="relative">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
