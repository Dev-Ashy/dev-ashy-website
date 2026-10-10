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

const telemetry = [
  { key: "distro", value: "Dev-Ashy OS · Ubuntu Base" },
  { key: "compositor", value: "Hyprland · wayland" },
  { key: "shell", value: "zsh 5.9" },
  { key: "kernel", value: "6.8 LTS · stable" },
  { key: "runtime", value: "Node 22.x" },
  { key: "load", value: "0.02 · normal" },
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
    <section className="relative min-h-screen flex flex-col overflow-hidden">
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
        <div className="absolute inset-0 bg-[#0b0d0c]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0c] via-[#0b0d0c]/30 to-[#0b0d0c]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d0c]/80 via-[#0b0d0c]/20 to-transparent" />
      </div>

      {/* Top telemetry strip */}
      <div className="relative z-10 border-b border-[#222923] bg-[#0b0d0c]/70 backdrop-blur-sm">
        <div className="mx-auto max-w-[1240px] px-5 py-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-[#a0aaa1]">
          <span className="text-[#4ade80]">KERNEL 6.8 · STABLE</span>
          <span className="hidden sm:inline text-[#7a847d]">|</span>
          <span className="hidden sm:inline">DEV-ASHY LIMITED · LAGOS, NIGERIA · EST. 2026</span>
          <span className="hidden lg:inline text-[#7a847d]">|</span>
          <span className="hidden lg:inline">ARCH: x86_64 / aarch64</span>
          <span className="hidden xl:inline text-[#7a847d]">|</span>
          <span className="hidden xl:inline">RUNTIME: Node 22.x · Wayland Hyprland</span>
          <span className="ml-auto flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#b8f36b] status-pulse" />
            SYS: NORMAL [0.02 LOAD]
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full mx-auto max-w-[1240px] px-5 pt-16 pb-28 lg:pt-20 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_460px] gap-14 items-center">
          {/* Left column */}
          <div className="hero-in" style={{ animationDelay: "0.05s" }}>
            <p className="font-mono text-[11px] tracking-[0.1em] text-[#b8f36b] mb-6">
              &gt; SYS//2026.1 · LAGOS · NIGERIA — OPEN ECOSYSTEM
            </p>

            <h1 className="font-display font-bold leading-[0.98] tracking-tighter text-[#f4f6f2] text-[clamp(3rem,7.2vw,5.5rem)] mb-7">
              Build beyond
              <br />
              the screen.
            </h1>

            <p className="text-[#a0aaa1] text-[15px] md:text-[16px] max-w-[52ch] leading-relaxed mb-10 font-mono">
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
                href="https://github.com/Dev-Ashy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-[18px] !px-8 h-full"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </div>

            {/* System telemetry mini-grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-12 max-w-[560px]">
              {telemetry.map((item) => (
                <div key={item.key} className="border border-[#222923] bg-[#0b0d0c]/60 px-3 py-2.5">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.1em] text-[#7a847d]">
                    {item.key}
                  </p>
                  <p className="font-mono text-[11.5px] text-[#e2e3e0] mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: terminal window */}
          <div
            className="hero-in hidden lg:block"
            style={{ animationDelay: "0.25s" }}
          >
            <div className="panel overflow-hidden">
              <div className="win-bar">
                <span className="win-dot" />
                dev-ashy — zsh
                <span className="ml-auto font-mono text-[11px] text-[#b8f36b]">/home/devashy</span>
              </div>
              <div className="terminal-body bg-[#090b0a] font-mono text-[13px] leading-[1.9]">
                <p className="text-[#7a847d]">
                  <span className="text-[#4ade80]">●</span> SYSTEM TELEMETRY · READY
                </p>
                <p className="text-[#e2e3e0]">
                  <span className="text-[#7a847d]">distro</span> dev-ashy os · ubuntu base
                </p>
                <p className="text-[#e2e3e0]">
                  <span className="text-[#7a847d]">compositor</span> hyprland · wayland
                </p>
                <p className="text-[#e2e3e0]">
                  <span className="text-[#7a847d]">window manager</span> tiling · keyboard-first
                </p>
                <p className="text-[#a0aaa1] mt-3">
                  <span className="text-[#4ade80]">~</span> dev-ashy create my-app
                </p>
                <p className="text-[#a0aaa1]">  creating project · dev-ashy os-flavored template</p>
                <p className="text-[#a0aaa1]">  installing dependencies · react-native · expo</p>
                <p className="text-[#a0aaa1]">  wiring dev server · metro on :8081</p>
                <p className="text-[#b8f36b] mt-2">✓ project ready — my-app</p>
                <p className="text-[#a0aaa1] mt-2">
                  <span className="text-[#4ade80]">~</span> dev-ashy start
                </p>
                <p className="text-[#b8f36b]">
                  ✓ dev server running · android · ios · web
                  <span className="cursor-blink ml-1.5" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom rail: slide label + progress + controls */}
      <div className="relative z-10 border-t border-[#222923] bg-[#0b0d0c]/70 backdrop-blur-md">
        <div className="mx-auto max-w-[1240px] px-5 py-3.5 flex items-center gap-5">
          <button
            type="button"
            onClick={() =>
              setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
            }
            aria-label="Previous slide"
            className="text-[#a0aaa1] hover:text-[#f4f6f2] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-3 min-w-0">
            <span className="font-mono text-[11px] text-[#7a847d] tabular-nums">
              {String(current + 1).padStart(2, "0")}
            </span>
            <div className="h-[3px] w-36 sm:w-44 bg-[#222923] overflow-hidden shrink-0">
              <div
                key={current}
                className="slide-progress h-full bg-[#b8f36b]"
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
                className={`h-1.5 transition-all duration-300 ${
                  i === current ? "w-7 bg-[#b8f36b]" : "w-1.5 bg-[#2e3831] hover:bg-[#3a453c]"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
            aria-label="Next slide"
            className="text-[#a0aaa1] hover:text-[#f4f6f2] transition-colors"
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