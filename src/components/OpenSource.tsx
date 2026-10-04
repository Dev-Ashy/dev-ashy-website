export default function OpenSource() {
  const repos = [
    {
      name: "expo",
      description:
        "An open-source platform for making universal native apps with React. Expo runs on Android, iOS, and the web.",
      stars: "50k+",
      language: "TypeScript",
    },
    {
      name: "opencode",
      description: "The open source coding agent.",
      stars: "30k+",
      language: "TypeScript",
    },
    {
      name: "NetlessLM",
      description: "A lightweight offline AI experience for Browsers.",
      stars: "5k+",
      language: "TypeScript",
    },
  ];

  return (
    <section id="opensource" className="section-padding bg-[#0d0d14]">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">Open Source</span>{" "}
            <span className="text-gradient">at heart</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We believe in open source. Dev-Ashy is built on and contributes to
            the open-source community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {repos.map((repo) => (
            <a
              key={repo.name}
              href={`https://github.com/Dev-Ashy/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-6 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <svg
                  className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <h3 className="font-bold group-hover:text-indigo-400 transition-colors">
                  {repo.name}
                </h3>
              </div>
              <p className="text-sm text-slate-400 mb-4">{repo.description}</p>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  {repo.stars}
                </span>
                <span>{repo.language}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/Dev-Ashy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
}
