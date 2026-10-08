"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Technology background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="badge mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Now in Development
          </div>
        </div>

        <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-gradient">Build Beyond</span>
          <br />
          <span className="text-white">the Screen.</span>
        </h1>

        <p className={`text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Dev-Ashy Mobile Creator helps developers build mobile applications
          using a modern React Native development workflow. From idea to app
          store in minutes, not months.
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <a href="#cta" className="btn-primary text-base px-10 py-5">
            Start Building
          </a>
          <a href="#features" className="btn-secondary text-base px-10 py-5">
            Learn More
          </a>
        </div>

        {/* Terminal Preview */}
        <div className={`terminal max-w-3xl mx-auto text-left glow transition-all duration-1000 delay-800 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
            <span className="text-xs text-slate-500 ml-2">dev-ashy — zsh</span>
          </div>
          <div className="p-8">
            <p className="text-slate-500">
              <span className="text-green-400">$</span> npx create-dev-ashy-app my-app
            </p>
            <p className="text-slate-300">✓ Creating project structure...</p>
            <p className="text-slate-300">✓ Installing dependencies...</p>
            <p className="text-slate-300">✓ Configuring Expo...</p>
            <p className="text-slate-300">✓ Setting up development environment...</p>
            <p className="text-green-400 mt-2">✓ Project created successfully!</p>
            <p className="text-slate-500 mt-2">
              <span className="text-green-400">$</span> cd my-app && npm start
            </p>
            <p className="text-slate-300">✓ Starting development server...</p>
            <p className="text-cyan-400">✓ Ready! Scan QR code with Expo Go to preview.</p>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-3xl mx-auto transition-all duration-1000 delay-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {[
            { value: "60fps", label: "Performance" },
            { value: "100%", label: "Cross-Platform" },
            { value: "< 1min", label: "Setup Time" },
            { value: "OSS", label: "Open Source" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-slate-500 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
