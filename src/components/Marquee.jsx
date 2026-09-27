import { skillGroups } from "../data";

export default function Marquee() {
  const words = skillGroups.flatMap((g) => g.items).slice(0, 14);
  const loop = [...words, ...words];

  return (
    <div className="relative overflow-hidden border-y border-base-line bg-base-panel py-4">
      <div className="marquee-track">
        {loop.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="mx-6 flex items-center gap-6 font-display text-2xl uppercase tracking-tight text-ink-faint sm:text-3xl"
          >
            {w}
            <span className="text-signal">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
