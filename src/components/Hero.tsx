"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { src: "/images/slideshow/linux-4k.jpg", alt: "Linux terminal on a dark setup", label: "linux · terminals" },
  { src: "/images/slideshow/hacking-4k.jpg", alt: "Cybersecurity and network analysis", label: "cybersecurity" },
  { src: "/images/slideshow/ide-4k.jpg", alt: "Code in a modern IDE", label: "ide · code" },
  { src: "/images/slideshow/mobile-4k.jpg", alt: "Mobile apps in hand", label: "mobile apps" },
  { src: "/images/slideshow/desktop-4k.jpg", alt: "A modern desktop environment", label: "desktop environments" },
  { src: "/images/slideshow/coding-4k.jpg", alt: "Programming languages on screen", label: "programming languages" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed 4K slideshow */}
      <div className="absolute inset-0" aria-hidden>
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
              quality={88}
            />
          </div>
        ))}
        {/* Legibility scrims */}
        <div className="absolute inset-0 bg-[#0a0a0f]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/30 to-[#0a0a0f]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/80 via-[#0a0a0f]/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-[1240px] px-5 pt-32 pb-28 lg:pt-28">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_440px] gap-14 items-center">
          {/* Left column */}
          <div className="hero-in" style={{ animationDelay: "0.05s" }}>
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="/images/logo.svg"
                alt="Dev-Ashy logo"
                width={64}
                height={64}
                className="h-16 w-16"
                priority
              />
              <div>
                <p className="font-display font-bold tracking-tight text-xl leading-none text-white">
                  DEV-ASHY LIMITED
                </p>
                <p className="font-mono text-[11px] text-[#94a3b8] mt-1.5 tracking-[0.08em]">
                  lagos · nigeria
                </p>
              </div>
            </div>

            <h1 className="font-display font-bold leading-[0.98] tracking-tighter text-white text-[clamp(3rem,7.2vw,5.5rem)] mb-7">
              Build beyond
              <br />
              the screen.
            </h1>

            <p className="text-[#a5b4c8] text-base md:text-lg max-w-[52ch] leading-relaxed mb-10">
              Dev-Ashy builds an operating system, a security edition, developer tools
              and mobile app infrastructure — an open ecosystem made for people who
              build what comes next.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href="/product" className="btn-primary btn-hero">
                Explore Products
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                </svg>
              </Link>
              <a
                href="#features"
                className="btn-secondary !py-[18px] !px-8 h-full"
              >
                Take a tour
              </a>
            </div>
          </div>

          {/* Right column: terminal window */}
          <div
            className="hero-in hidden lg:block"
            style={{ animationDelay: "0.25s" }}
          >
            <div className="panel overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
              <div className="win-bar">
                <span className="win-dot" />
                dev-ashy — zsh
                <span className="ml-auto font-mono text-[11px] text-[#6366f1]">/home/devashy</span>
              </div>
              <div className="terminal-body bg-[#08080d] font-mono text-[13px] leading-[1.9]">
                <p className="text-[#64748b]">
                  <span className="text-[#22d3ee]">~</span> dev-ashy create my-app
                </p>
                <p className="text-[#94a3b8]">  creating project · dev-ashy os-flavored template</p>
                <p className="text-[#94a3b8]">  installing dependencies · react-native · expo</p>
                <p className="text-[#94a3b8]">  wiring dev server · metro on :8081</p>
                <p className="text-[#67e8f9] mt-2">✓ project ready — my-app</p>
                <p className="text-[#64748b] mt-2">
                  <span className="text-[#22d3ee]">~</span> cd my-app &amp;&amp; dev-ashy start
                </p>
                <p className="text-[#94a3b8]">✓ dev server running locally</p>
                <p className="text-[#67e8f9]">
                  ✓ scan the QR code to preview
                  <span className="cursor-blink ml-1.5" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom rail: slide label + progress + controls */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#1e293b]/80 bg-[#0a0a0f]/60 backdrop-blur-md">
        <div className="mx-auto max-w-[1240px] px-5 py-3.5 flex items-center gap-5">
          <button
            type="button"
            onClick={() =>
              setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
            }
            aria-label="Previous slide"
            className="text-[#94a3b8] hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-3 min-w-0">
            <span className="font-mono text-[11px] text-[#64748b] tabular-nums">
              {String(current + 1).padStart(2, "0")}
            </span>
            <div className="h-[3px] w-40 bg-[#1e293b] overflow-hidden rounded-full shrink-0">
              <div
                key={current}
                className="slide-progress h-full bg-[#22d3ee]"
                style={{ width: 0 }}
              />
            </div>
            <span className="font-mono text-[11px] text-[#a5b4c8] truncate">
              {slides[current].label}
            </span>
          </div>

          <div className="ml-auto hidden sm:flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Show slide ${i + 1}: ${s.label}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-7 bg-[#6366f1]" : "w-1.5 bg-[#334155] hover:bg-[#475569]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            aria-label="Next slide"
            className="text-[#94a3b8] hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}