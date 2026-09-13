import { profile } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-base">
      <div
        className="pointer-events-none absolute left-1/2 top-6 h-56 w-[48rem] -translate-x-1/2 rounded-full bg-signal/20 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-36">
        <div className="rounded-3xl border border-white/10 bg-white/[0.07] px-8 py-14 md:px-16 md:py-20">
          <div className="mb-6 font-mono text-[11px] tracking-wide text-signal">
            05 — Contact
          </div>
          <h2 className="max-w-2xl text-balance font-display text-4xl font-medium leading-[1.03] tracking-tightest text-ink md:text-6xl">
            Building something with real signal in it? Let's talk.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            <a
              href={`mailto:${profile.email}`}
              className="group border-t border-white/10 pt-4"
            >
              <span className="block font-mono text-[11px] tracking-wide text-ink-faint">
                Email
              </span>
              <span className="mt-2 block font-body text-sm text-ink group-hover:text-signal transition-colors">
                {profile.email}
              </span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group border-t border-white/10 pt-4"
            >
              <span className="block font-mono text-[11px] tracking-wide text-ink-faint">
                GitHub
              </span>
              <span className="mt-2 block font-body text-sm text-ink group-hover:text-signal transition-colors">
                github.com/RajvardhanMangam
              </span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group border-t border-white/10 pt-4"
            >
              <span className="block font-mono text-[11px] tracking-wide text-ink-faint">
                LinkedIn
              </span>
              <span className="mt-2 block font-body text-sm text-ink group-hover:text-signal transition-colors">
                in/yamaraja
              </span>
            </a>
          </div>
        </div>

        <div className="mt-10 font-mono text-[11px] tracking-wide text-ink-faint">
          <span>© {year} Rajvardhan Mangam</span>
        </div>
      </div>
    </footer>
  );
}
