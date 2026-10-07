"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function TechStack() {
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

  const technologies = [
    { name: "React Native", slug: "react", color: "#61dafb" },
    { name: "Expo", slug: "expo", color: "#000020" },
    { name: "TypeScript", slug: "typescript", color: "#3178c6" },
    { name: "Node.js", slug: "nodedotjs", color: "#339933" },
    { name: "Android", slug: "android", color: "#3ddc84" },
    { name: "Apple", slug: "apple", color: "#999999" },
    { name: "Linux", slug: "linux", color: "#fcc624" },
    { name: "Vercel", slug: "vercel", color: "#000000" },
    { name: "GitHub", slug: "github", color: "#181717" },
    { name: "JavaScript", slug: "javascript", color: "#f7df1e" },
  ];

  return (
    <section id="tech-stack" ref={ref} className="section-padding relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="container">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-6xl font-bold tracking-tight mb-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="text-white">Built on</span>{" "}
            <span className="text-gradient">proven technology</span>
          </h2>
          <p className={`text-slate-400 max-w-2xl mx-auto text-lg transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Dev-Ashy leverages the best open-source technologies to deliver a premium development experience.
          </p>
        </div>

        {/* Background image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 h-64 md:h-80">
          <Image
            src="/images/circuit-4k.jpg"
            alt="Technology"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050508] via-[#050508]/80 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-lg md:text-xl text-slate-300 font-mono">
              <span className="text-green-400">$</span> dev-ashy --tech-stack
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, index) => (
            <a
              key={tech.slug}
              href={`https://simpleicons.org/?q=${tech.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`card px-8 py-6 flex items-center gap-4 group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: tech.color + "20" }}
              >
                <div className="w-5 h-5 rounded" style={{ backgroundColor: tech.color }} />
              </div>
              <span className="text-base font-medium text-slate-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
