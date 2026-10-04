export default function DeveloperTools() {
  const tools = [
    {
      name: "Dev-Ashy CLI",
      description:
        "Command-line interface for project scaffolding, building, and deployment. Automate your entire workflow.",
      command: "npm install -g @dev-ashy/cli",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: "Dev-Ashy IDE",
      description:
        "A purpose-built IDE with intelligent code completion, live preview, and integrated debugging for React Native.",
      command: "Coming Soon",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      name: "Dev-Ashy Cloud",
      description:
        "Cloud build service with automated testing, signing, and deployment to app stores. CI/CD built-in.",
      command: "Coming Soon",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999A5.002 5.002 0 105.9 8.01 4.002 4.002 0 003 15z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="tools" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">Developer</span>{" "}
            <span className="text-gradient">Tools</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A complete toolkit designed for modern mobile development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div key={tool.name} className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
                {tool.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
              <p className="text-sm text-slate-400 mb-4">{tool.description}</p>
              <div className="terminal p-3 text-xs">
                <span className="text-green-400">$</span>{" "}
                <span className="text-slate-300">{tool.command}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
