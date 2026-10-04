export default function TechStack() {
  const technologies = [
    { name: "React Native", slug: "react" },
    { name: "Expo", slug: "expo" },
    { name: "TypeScript", slug: "typescript" },
    { name: "Node.js", slug: "nodedotjs" },
    { name: "Android", slug: "android" },
    { name: "Apple", slug: "apple" },
    { name: "Linux", slug: "linux" },
    { name: "Vercel", slug: "vercel" },
    { name: "GitHub", slug: "github" },
    { name: "JavaScript", slug: "javascript" },
  ];

  return (
    <section id="tech-stack" className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">Built on</span>{" "}
            <span className="text-gradient">proven technology</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Dev-Ashy leverages the best open-source technologies to deliver a
            premium development experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech) => (
            <a
              key={tech.slug}
              href={`https://simpleicons.org/?q=${tech.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card px-6 py-4 flex items-center gap-3 group"
            >
              <div className="w-8 h-8 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
