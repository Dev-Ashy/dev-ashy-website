"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function DeveloperTools() {
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

  const tools = [
    {
      name: "Dev-Ashy CLI",
      description:
        "Command-line interface for project scaffolding, building, and deployment. Automate your entire workflow.",
      command: "npm install -g @dev-ashy/cli",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      image: "/images/code-4k.jpg",
    },
    {
      name: "Dev-Ashy IDE",
      description:
        "A purpose-built IDE with intelligent code completion, live preview, and integrated debugging for React Native.",
      command: "Coming Soon",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      image: "/images/workspace-4k.jpg",
    },
    {
      name: "Dev-Ashy Cloud",
      description:
        "Cloud build service with automated testing, signing, and deployment to app stores. CI/CD built-in.",
      command: "Coming Soon",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999A5.002 5.002 0 105.9 8.01 4.002 4.002 0 003 15z" />
        </svg>
      ),
      image: "/images/gradient-4k.jpg",
    },
  ];

  return (
    <section id="tools" ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="container">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-6xl font-bold tracking-tight mb-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="text-white">Developer</span>{" "}
            <span className="text-gradient">Tools</span>
          </h2>
          <p className={`text-slate-400 max-w-2xl mx-auto text-lg transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            A complete toolkit designed for modern mobile development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className={`card p-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Tool image */}
              <div className="w-full h-32 rounded-xl overflow-hidden relative mb-6">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent" />
              </div>

              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{tool.name}</h3>
              <p className="text-sm text-slate-400 mb-6">{tool.description}</p>
              <div className="terminal p-4 text-xs">
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
