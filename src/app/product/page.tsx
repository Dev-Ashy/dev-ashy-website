import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | Dev-Ashy Limited",
  description:
    "Explore Dev-Ashy products: Mobile App Creator, Dev-Ashy OS, Dev-Ashy IDE, Dev-Ashy CLI, and more.",
  keywords: [
    "Dev-Ashy",
    "Products",
    "Mobile App Creator",
    "Dev-Ashy OS",
    "IDE",
    "CLI",
  ],
};

const desktopEnvironments = [
  {
    name: "Hyprland",
    description: "Modern Wayland compositor with dynamic tiling",
    image: "/images/slideshow/desktop-4k.jpg",
    status: "Planned",
  },
  {
    name: "GNOME",
    description: "Clean and user-friendly desktop environment",
    image: "/images/slideshow/linux-4k.jpg",
    status: "Planned",
  },
  {
    name: "KDE Plasma",
    description: "Feature-rich and customizable desktop",
    image: "/images/slideshow/ide-4k.jpg",
    status: "Planned",
  },
  {
    name: "XFCE",
    description: "Lightweight and fast desktop environment",
    image: "/images/slideshow/coding-4k.jpg",
    status: "Planned",
  },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <Image
            src="/images/slideshow/desktop-4k.jpg"
            alt="Dev-Ashy Products"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-20">
          <div className="badge mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Dev-Ashy Products
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            <span className="text-gradient">Our Products</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Explore the Dev-Ashy ecosystem — from mobile app creation to operating systems.
          </p>
        </div>
      </section>

      {/* Mobile App Creator */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="text-gradient">Dev-Ashy</span>
                <br />
                <span className="text-white">Mobile App Creator</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                A modern developer platform for creating, running, testing, and building mobile applications
                using React Native and Expo.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Create mobile projects with a single command",
                  "Run development server with hot reload",
                  "Preview on Android, iOS, and Web",
                  "Build for production with EAS",
                  "Integrate with Dev-Ashy IDE",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
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
                <Link href="/#features" className="btn-primary">Learn More</Link>
                <a href="https://github.com/Dev-Ashy" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  View on GitHub
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 rounded-[32px] blur-3xl" />
              <div className="relative card p-8">
                <div className="terminal">
                  <div className="terminal-header">
                    <div className="terminal-dot terminal-dot-red" />
                    <div className="terminal-dot terminal-dot-yellow" />
                    <div className="terminal-dot terminal-dot-green" />
                  </div>
                  <div className="p-6">
                    <p className="text-slate-500">
                      <span className="text-green-400">$</span> dev-ashy create my-app
                    </p>
                    <p className="text-slate-300">✓ Creating project structure...</p>
                    <p className="text-slate-300">✓ Installing dependencies...</p>
                    <p className="text-slate-300">✓ Configuring Expo...</p>
                    <p className="text-green-400 mt-2">✓ Project created successfully!</p>
                    <p className="text-slate-500 mt-2">
                      <span className="text-green-400">$</span> cd my-app && dev-ashy start
                    </p>
                    <p className="text-slate-300">✓ Starting development server...</p>
                    <p className="text-cyan-400">✓ Ready! Local: http://localhost:8081</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dev-Ashy OS */}
      <section className="section-padding bg-[#0d0d14]">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-white">Dev-Ashy</span>{" "}
              <span className="text-gradient">OS</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Your developer workstation, rebuilt. A modern Linux distribution with multiple desktop environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {desktopEnvironments.map((env) => (
              <div key={env.name} className="card p-6 group">
                <div className="w-full h-40 rounded-xl overflow-hidden relative mb-4">
                  <Image
                    src={env.image}
                    alt={env.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-mono text-white bg-indigo-500/80 px-2 py-1 rounded">
                      {env.status}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{env.name}</h3>
                <p className="text-sm text-slate-400">{env.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 card p-8">
            <h3 className="text-2xl font-bold mb-4">Desktop Environment Selection</h3>
            <p className="text-slate-400 mb-6">
              During installation, you can choose your preferred desktop environment. Each environment
              comes with Dev-Ashy branding, themes, and pre-configured tools.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Hyprland", desc: "Modern Wayland compositor with dynamic tiling" },
                { name: "GNOME", desc: "Clean and user-friendly desktop environment" },
                { name: "KDE Plasma", desc: "Feature-rich and customizable desktop" },
                { name: "XFCE", desc: "Lightweight and fast desktop environment" },
              ].map((env) => (
                <div key={env.name} className="flex items-center gap-3 p-4 rounded-xl bg-[#1a1a25]">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">{env.name}</h4>
                    <p className="text-sm text-slate-400">{env.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-white">Coming</span>{" "}
              <span className="text-gradient">Soon</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              The Dev-Ashy ecosystem is growing. Here&apos;s what we&apos;re building next.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Dev-Ashy IDE", desc: "Full-featured development environment with AI assistance", icon: "💻" },
              { name: "Dev-Ashy CLI", desc: "Command-line interface for the entire ecosystem", icon: "⌨️" },
              { name: "Dev-Ashy Browser", desc: "A browser built by Dev-Ashy", icon: "🌐" },
              { name: "Dev-Ashy Search", desc: "Search without the clutter", icon: "🔍" },
              { name: "Dev-Ashy Mail", desc: "Email for your digital identity", icon: "📧" },
              { name: "Dev-Ashy Chat", desc: "Communication for everyone", icon: "💬" },
            ].map((product) => (
              <div key={product.name} className="card p-8 text-center">
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{product.desc}</p>
                <span className="badge">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0d0d14]">
        <div className="container">
          <div className="card p-16 text-center glow">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Ready to build?</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg mb-10">
              Start building with Dev-Ashy today. Free and open source.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/" className="btn-primary text-base px-10 py-5">
                Back to Home
              </Link>
              <a href="https://github.com/Dev-Ashy" target="_blank" rel="noopener noreferrer" className="btn-secondary text-base px-10 py-5">
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e293b] bg-[#0a0a0f] py-12">
        <div className="container text-center">
          <p className="text-slate-500">
            &copy; 2026 Dev-Ashy Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
