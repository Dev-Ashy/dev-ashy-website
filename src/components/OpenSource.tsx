import StatusBadge from "@/components/StatusBadge";
import type { BadgeTone } from "@/components/StatusBadge";

// Only repositories that genuinely exist and are public are listed. The real
// primary language is shown instead of invented star counts — real social
// proof beats a number a visitor can disprove in one click.
const repos: {
  name: string;
  desc: string;
  lang: string;
  badge: string;
  tone: BadgeTone;
}[] = [
  {
    name: "dev-ashy-cli",
    desc: "Command-line interface for the Dev-Ashy ecosystem — project generator, doctor, mobile sync.",
    lang: "typescript",
    badge: "ALPHA",
    tone: "alpha",
  },
  {
    name: "dev-ashy-os",
    desc: "Your developer workstation, rebuilt — a developer Linux distribution built on Ubuntu.",
    lang: "shell",
    badge: "ALPHA",
    tone: "alpha",
  },
  {
    name: "dev-ashy-website",
    desc: "This site — the Dev-Ashy public website, built with Next.js and TypeScript.",
    lang: "typescript",
    badge: "SHIPPING",
    tone: "shipping",
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="section-padding bg-[#0f110f]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow-mono mb-4">05 / open source ecosystem</p>
            <h2 className="font-display font-bold tracking-tight text-[#f4f6f2] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
              Public by default.
            </h2>
          </div>
          <p className="text-[#a0aaa1] max-w-[42ch] text-[14px] leading-relaxed font-mono">
            Everything Dev-Ashy ships starts in the open. Read the code, file
            issues, build with us.
          </p>
        </div>

        <div className="panel overflow-hidden">
          <ul className="divide-y divide-[#222923]">
            {repos.map((repo) => (
              <li key={repo.name}>
                <a
                  href={`https://github.com/Dev-Ashy/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid sm:grid-cols-[200px_1fr_auto] md:grid-cols-[240px_1fr_auto] items-center gap-x-8 gap-y-2 px-6 py-5 hover:bg-[#171c18] transition-colors group"
                >
                  <span className="font-mono text-[13.5px] text-[#b8f36b] group-hover:underline">
                    {repo.name}
                  </span>
                  <span className="text-[13px] font-mono text-[#a0aaa1] leading-snug">
                    {repo.desc}
                  </span>
                  <span className="flex items-center gap-4 sm:justify-end">
                    <span className="font-mono text-[11px] text-[#7a847d]">
                      {repo.lang}
                    </span>
                    <StatusBadge tone={repo.tone}>{repo.badge}</StatusBadge>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/Dev-Ashy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View all repositories on GitHub →
          </a>
          <a
            href="https://github.com/Dev-Ashy/dev-ashy-os"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            ★ Star dev-ashy-os on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
