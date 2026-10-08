"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CTA() {
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

  return (
    <section id="cta" ref={ref} className="section-padding relative">
      <div className="container">
        <div className={`card p-16 md:p-24 text-center glow transition-all duration-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          {/* Background image */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Image
              src="/images/gradient-4k.jpg"
              alt="Background"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#12121a]/80 via-[#12121a]/60 to-[#12121a]" />
          </div>

          <div className="relative z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Ready to build?</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg mb-10">
              Start building your mobile app today. Free and open source.
            </p>

            <div className="terminal max-w-lg mx-auto text-left mb-10">
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
              </div>
              <div className="p-6">
                <p className="text-slate-500">
                  <span className="text-green-400">$</span> npx create-dev-ashy-app my-app
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/Dev-Ashy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-10 py-5"
              >
                Get Started on GitHub
              </a>
              <a href="#features" className="btn-secondary text-base px-10 py-5">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
