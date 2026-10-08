"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  { src: "/images/slideshow/linux-4k.jpg", alt: "Linux terminal" },
  { src: "/images/slideshow/hacking-4k.jpg", alt: "Cybersecurity" },
  { src: "/images/slideshow/ide-4k.jpg", alt: "IDE development" },
  { src: "/images/slideshow/mobile-4k.jpg", alt: "Mobile apps" },
  { src: "/images/slideshow/desktop-4k.jpg", alt: "Desktop environment" },
  { src: "/images/slideshow/coding-4k.jpg", alt: "Programming languages" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo.svg"
              alt="Dev-Ashy Logo"
              width={120}
              height={120}
              className="drop-shadow-2xl"
            />
          </div>
        </div>

        <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-gradient">Build Beyond</span>
          <br />
          <span className="text-white">the Screen.</span>
        </h1>

        <p className={`text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Dev-Ashy Mobile App Creator helps developers build mobile applications
          using a modern React Native development workflow. From idea to app
          store in minutes, not months.
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 transition-all duration-1000 delay-600 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Link href="/product" className="btn-primary text-base px-12 py-5 text-lg">
            Explore Products
          </Link>
          <a href="#features" className="btn-secondary text-base px-12 py-5 text-lg">
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
              <span className="text-green-400">$</span> dev-ashy create my-app
            </p>
            <p className="text-slate-300">✓ Creating project structure...</p>
            <p className="text-slate-300">✓ Installing dependencies...</p>
            <p className="text-slate-300">✓ Configuring Expo...</p>
            <p className="text-slate-300">✓ Setting up development environment...</p>
            <p className="text-green-400 mt-2">✓ Project created successfully!</p>
            <p className="text-slate-500 mt-2">
              <span className="text-green-400">$</span> cd my-app && dev-ashy start
            </p>
            <p className="text-slate-300">✓ Starting development server...</p>
            <p className="text-cyan-400">✓ Ready! Scan QR code with Expo Go to preview.</p>
          </div>
        </div>

        {/* Slideshow indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-indigo-500 w-8" : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
