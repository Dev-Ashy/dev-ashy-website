"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Templates() {
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

  const templates = [
    {
      name: "Starter",
      description: "Clean minimal template with navigation and basic UI components",
      tags: ["TypeScript", "Expo Router"],
      gradient: "from-indigo-500 to-purple-500",
      image: "/images/code-4k.jpg",
    },
    {
      name: "E-Commerce",
      description: "Full shopping app with cart, checkout, and payment integration",
      tags: ["Stripe", "Cart", "Auth"],
      gradient: "from-cyan-500 to-blue-500",
      image: "/images/workspace-4k.jpg",
    },
    {
      name: "Social",
      description: "Social media app with feeds, messaging, and user profiles",
      tags: ["Chat", "Feed", "Auth"],
      gradient: "from-green-500 to-emerald-500",
      image: "/images/mobile-4k.jpg",
    },
    {
      name: "Dashboard",
      description: "Admin dashboard with charts, tables, and analytics",
      tags: ["Charts", "Tables", "Auth"],
      gradient: "from-orange-500 to-red-500",
      image: "/images/gradient-4k.jpg",
    },
    {
      name: "Fitness",
      description: "Health and fitness tracking with workouts and progress",
      tags: ["Health", "Charts", "Sensors"],
      gradient: "from-pink-500 to-rose-500",
      image: "/images/circuit-4k.jpg",
    },
    {
      name: "Food Delivery",
      description: "Restaurant ordering with maps, payments, and real-time tracking",
      tags: ["Maps", "Payments", "Realtime"],
      gradient: "from-yellow-500 to-orange-500",
      image: "/images/hero-bg.jpg",
    },
  ];

  return (
    <section id="templates" ref={ref} className="section-padding bg-[#0d0d14] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-6xl font-bold tracking-tight mb-6 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <span className="text-white">Start with a</span>{" "}
            <span className="text-gradient">template</span>
          </h2>
          <p className={`text-slate-400 max-w-2xl mx-auto text-lg transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Production-ready templates to jumpstart your project. Fully customizable and MIT licensed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div
              key={template.name}
              className={`card p-8 group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Template preview with real image */}
              <div className="w-full h-40 rounded-2xl overflow-hidden relative mb-6">
                <Image
                  src={template.image}
                  alt={template.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-mono text-white bg-[#12121a]/80 px-2 py-1 rounded">
                    {template.name}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{template.name}</h3>
              <p className="text-sm text-slate-400 mb-6">{template.description}</p>
              <div className="flex flex-wrap gap-2">
                {template.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full bg-[#1a1a25] text-slate-400 border border-[#1e293b]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
