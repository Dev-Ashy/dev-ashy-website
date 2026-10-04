import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dev-Ashy OS | Your developer workstation, rebuilt",
  description:
    "Dev-Ashy OS is a modern, developer-focused Linux distribution built around Ubuntu. Pre-installed with everything you need for software development, AI development, cybersecurity, mobile development, and creative work.",
  keywords: [
    "Dev-Ashy OS",
    "Linux",
    "Ubuntu",
    "developer workstation",
    "operating system",
    "ISO",
  ],
};

export default function OSPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 animated-bg" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="badge mb-8">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Alpha Release
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8">
            <span className="text-gradient glow-text">Dev-Ashy OS</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Your developer workstation, rebuilt.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://github.com/Dev-Ashy/dev-ashy-os/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-10 py-5"
            >
              Download ISO
            </a>
            <a
              href="https://github.com/Dev-Ashy/dev-ashy-os"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base px-10 py-5"
            >
              View on GitHub
            </a>
          </div>

          {/* System requirements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { value: "4 GB", label: "RAM" },
              { value: "25 GB", label: "Disk" },
              { value: "64-bit", label: "CPU" },
              { value: "4 GB", label: "USB" },
            ].map((req) => (
              <div key={req.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient">{req.value}</div>
                <div className="text-sm text-slate-500 mt-2">{req.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-[#08080f]">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-white">Everything you need.</span>
              <br />
              <span className="text-gradient">Pre-installed.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Developer Tools",
                description: "Node.js, Python, Go, Rust, Java, Git, GitHub CLI, and more.",
                icon: "💻",
              },
              {
                title: "AI Tools",
                description: "Ollama, OpenCode, Gemini CLI, Hermes Agent support.",
                icon: "🤖",
              },
              {
                title: "Security Tools",
                description: "Nmap, Metasploit, Wireshark, and penetration testing tools.",
                icon: "🔒",
              },
              {
                title: "Mobile Development",
                description: "React Native, Expo, Android SDK pre-configured.",
                icon: "📱",
              },
              {
                title: "Creative Tools",
                description: "FFmpeg, OBS Studio, GIMP, Blender, and more.",
                icon: "🎨",
              },
              {
                title: "Dev-Ashy Branding",
                description: "Custom themes, wallpapers, and terminal configuration.",
                icon: "✨",
              },
            ].map((feature) => (
              <div key={feature.title} className="card p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="section-padding">
        <div className="container">
          <div className="card p-16 text-center glow">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Download Dev-Ashy OS</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg mb-10">
              Download the latest ISO and create a bootable USB drive.
            </p>

            <div className="terminal max-w-lg mx-auto text-left mb-10">
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
              </div>
              <div className="p-6">
                <p className="text-slate-500">
                  <span className="text-green-400">$</span> sudo dd if=Dev-Ashy-OS-0.1.0-amd64.iso of=/dev/sdX bs=4M
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/Dev-Ashy/dev-ashy-os/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-10 py-5"
              >
                Download from GitHub
              </a>
              <Link href="/" className="btn-secondary text-base px-10 py-5">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1e293b] bg-[#050508] py-12">
        <div className="container text-center">
          <p className="text-slate-500">
            &copy; 2026 Dev-Ashy Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
