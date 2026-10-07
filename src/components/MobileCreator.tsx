"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function MobileCreator() {
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
    <section id="mobile-creator" ref={ref} className="section-padding bg-[#08080f] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              <span className="text-gradient">Dev-Ashy</span>
              <br />
              <span className="text-white">Mobile Creator</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              The heart of Dev-Ashy. A complete mobile development platform
              built on React Native and Expo. Design, build, test, and deploy
              — all from one place.
            </p>

            <ul className="space-y-5 mb-10">
              {[
                "Visual builder with live preview",
                "Full Expo SDK compatibility",
                "TypeScript-first development",
                "EAS Build integration",
                "Over-the-air updates",
                "Push notifications built-in",
                "Offline-first architecture",
                "Web, iOS, and Android from one codebase",
              ].map((item, index) => (
                <li
                  key={item}
                  className={`flex items-start gap-4 transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a href="#cta" className="btn-primary">Try Mobile Creator</a>
              <a href="#docs" className="btn-secondary">Documentation</a>
            </div>
          </div>

          {/* Phone mockup with image */}
          <div className={`relative flex justify-center transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 rounded-[50px] blur-3xl" />

              {/* Phone frame */}
              <div className="relative w-[300px] h-[600px] bg-[#0a0a12] rounded-[40px] border-2 border-[#1e293b] p-3 shadow-2xl">
                <div className="w-full h-full bg-[#050508] rounded-[32px] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 py-4 text-xs text-slate-500">
                    <span>9:41</span>
                    <div className="flex gap-1.5">
                      <div className="w-4 h-2.5 bg-slate-600 rounded-sm" />
                      <div className="w-2.5 h-2.5 bg-slate-600 rounded-full" />
                    </div>
                  </div>

                  {/* App content with background image */}
                  <div className="relative h-full">
                    <Image
                      src="/images/mobile-4k.jpg"
                      alt="Mobile app"
                      fill
                      className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050508]/50 via-transparent to-[#050508]" />

                    {/* App UI overlay */}
                    <div className="absolute inset-0 p-5 flex flex-col">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400" />
                        <div>
                          <div className="h-3 bg-white/20 rounded-full w-24 mb-2" />
                          <div className="h-2 bg-white/10 rounded-full w-16" />
                        </div>
                      </div>

                      {/* Hero card */}
                      <div className="h-36 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/20 mb-4 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <div className="h-3 bg-white/20 rounded-full w-32 mb-2" />
                          <div className="h-2 bg-white/10 rounded-full w-20" />
                        </div>
                      </div>

                      {/* Grid items */}
                      <div className="grid grid-cols-2 gap-3 flex-1">
                        <div className="h-24 rounded-xl bg-[#0a0a12]/80 border border-[#1e293b]" />
                        <div className="h-24 rounded-xl bg-[#0a0a12]/80 border border-[#1e293b]" />
                        <div className="h-24 rounded-xl bg-[#0a0a12]/80 border border-[#1e293b]" />
                        <div className="h-24 rounded-xl bg-[#0a0a12]/80 border border-[#1e293b]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -right-12 top-24 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl animate-float">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute -left-12 bottom-40 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl animate-float" style={{ animationDelay: "2s" }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
