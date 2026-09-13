import { profile } from "../data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#field", label: "Field" },
  { href: "#log", label: "Log" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mt-5 flex items-center justify-between rounded-full border border-base-line/70 bg-base/60 px-5 py-3 backdrop-blur-xl">
          <a
            href="#top"
            className="font-display text-sm tracking-tight text-ink hover:text-signal transition-colors"
          >
            Rajvardhan Mangam
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] tracking-wide text-ink-dim hover:text-ink transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-[11px] tracking-wide text-signal hover:text-signal-glow transition-colors"
          >
            Say hello
          </a>
        </div>
      </div>
    </header>
  );
}
