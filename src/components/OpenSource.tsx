import StatusBadge from "@/components/StatusBadge";
import type { BadgeTone } from "@/components/StatusBadge";

const repos: {
  name: string;
  desc: string;
  stars: string;
  lang: string;
  badge: string;
  tone: BadgeTone;
}[] = [
  {
    name: "dev-ashy-cli",
    desc: "Command-line interface for the Dev-Ashy ecosystem. Project generator, doctor, emulator sync.",
    stars: "★ 1.2k",
    lang: "typescript",
    badge: "SHIPPING",
    tone: "shipping",
  },
  {
    name: "dev-ashy-ide",
    desc: "Desktop IDE built for the ecosystem — high performance editor, terminal multiplexer, local AI.",
    stars: "★ 420",
    lang: "typescript / rust",
    badge: "BETA",
    tone: "beta",
  },
  {
    name: "dev-ashy-website",
    desc: "This exact site. Open source, MIT licensed, built with zero dependency clutter for low latency.",
    stars: "★ 180",
    lang: "typescript / html",
    badge: "LIVE",
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
                    <span className="font-mono text-[11px] text-[#7a847d]">{repo.stars}</span>
                    <span className="font-mono text-[11px] text-[#7a847d] hidden xl:inline">
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
            ★ Star Dev-Ashy OS repository
          </a>
        </div>
      </div>
    </section>
  );
}