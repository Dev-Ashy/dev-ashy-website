"use client";

import { useEffect, useRef, useState } from "react";

export default function OpenSource() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const repos = [
    {
      name: "expo",
      description: "An open-source platform for making universal native apps with React. Expo runs on Android, iOS, and the web.",
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
    <section id="opensource" ref={ref} className="section-padding bg-[#08080f] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-6xl font-bold tracking-tight mb-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="text-white">Open Source</span>{" "}
            <span className="text-gradient">at heart</span>
          </h2>
          <p className={`text-slate-400 max-w-2xl mx-auto text-lg transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            We believe in open source. Dev-Ashy is built on and contributes to the open-source community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {repos.map((repo, index) => (
            <a
              key={repo.name}
              href={`https://github.com/Dev-Ashy/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`card p-8 group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <h3 className="text-lg font-bold group-hover:text-indigo-400 transition-colors">{repo.name}</h3>
              </div>
              <p className="text-sm text-slate-400 mb-6">{repo.description}</p>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
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
