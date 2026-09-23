import { achievements } from "../data";

export default function Log() {
  return (
    <section id="log" className="relative bg-base px-6 py-24 sm:px-10">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-4 border-b border-base-line pb-6">
        <h2 className="font-display text-5xl uppercase leading-none tracking-tightest text-ink sm:text-7xl">
          Achievement <span className="text-signal">Log</span>
        </h2>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-faint">
          {String(achievements.length).padStart(2, "0")} Entries
        </span>
      </div>

      <div className="flex flex-col divide-y divide-base-line border-y border-base-line">
        {achievements.map((a, i) => (
          <div
            key={a.title}
            className="group grid grid-cols-[auto_1fr] items-start gap-5 py-7 transition-colors sm:gap-10"
          >
            <span className="font-mono text-sm text-ink-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-xl uppercase leading-snug tracking-tight text-ink transition-colors group-hover:text-signal sm:text-2xl">
                {a.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-dim">{a.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
