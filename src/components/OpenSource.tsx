const repos = [
  {
    name: "dev-ashy-cli",
    desc: "Command-line interface for the Dev-Ashy ecosystem.",
    stars: "★ shippable now",
    lang: "typescript",
  },
  {
    name: "dev-ashy-ide",
    desc: "Desktop IDE built for the ecosystem — editor, terminal, AI.",
    stars: "★ beta",
    lang: "typescript",
  },
  {
    name: "dev-ashy-website",
    desc: "This site. Open source, MIT licensed.",
    stars: "★ live",
    lang: "typescript",
  },
];

export default function OpenSource() {
  return (
    <section id="opensource" className="section-padding bg-[#0d0d14]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow-mono mb-4">open source</p>
            <h2 className="font-display font-bold tracking-tight text-white text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
              Public by default.
            </h2>
          </div>
          <p className="text-[#94a3b8] max-w-[42ch] text-[15px] leading-relaxed">
            Everything Dev-Ashy ships starts in the open. Read the code, file
            issues, build with us.
          </p>
        </div>

        <div className="panel overflow-hidden">
          <ul className="divide-y divide-[#1e293b]">
            {repos.map((repo) => (
              <li key={repo.name}>
                <a
                  href={`https://github.com/Dev-Ashy/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid sm:grid-cols-[240px_1fr_auto] items-baseline gap-x-8 gap-y-1 px-6 py-5 hover:bg-[#16161f] transition-colors group"
                >
                  <span className="font-mono text-[13.5px] text-[#22d3ee] group-hover:underline">
                    {repo.name}
                  </span>
                  <span className="text-[13.5px] text-[#94a3b8] leading-snug">
                    {repo.desc}
                  </span>
                  <span className="flex items-center gap-4 font-mono text-[11px] text-[#64748b] sm:justify-end">
                    <span>{repo.stars}</span>
                    <span className="chip">{repo.lang}</span>
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
            View all repositories
          </a>
          <a
            href="https://github.com/Dev-Ashy/dev-ashy-os"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Star Dev-Ashy OS
          </a>
        </div>
      </div>
    </section>
  );
}