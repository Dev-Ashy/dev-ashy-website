import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DesktopEnvironments from "@/components/DesktopEnvironments";

export const metadata: Metadata = {
  title: "Dev-Ashy OS | Your developer workstation, rebuilt",
  description:
    "Dev-Ashy OS is a developer-focused Linux distribution built around Ubuntu. Choose your desktop environment, with Wine and security tooling built in.",
  keywords: [
    "Dev-Ashy OS",
    "Linux",
    "Ubuntu",
    "developer workstation",
    "operating system",
    "ISO",
  ],
};

const features = [
  {
    id: "dev tools",
    title: "Developer Tools",
    desc: "Node.js, Python, Go, Rust, Java, Git, GitHub CLI, and more — pre-installed.",
  },
  {
    id: "ai stack",
    title: "AI Stack",
    desc: "Ollama, OpenCode, and the Dev-Ashy CLI for local and remote model work.",
  },
  {
    id: "security",
    title: "Security Tools",
    desc: "Network analysis and hardening tooling, expanded in the Security edition.",
  },
  {
    id: "mobile dev",
    title: "Mobile Development",
    desc: "React Native, Expo, and Android tooling configured out of the box.",
  },
  {
    id: "windows apps",
    title: "Windows Apps",
    desc: "Wine and Winetricks bundled, so Windows software keeps running.",
  },
  {
    id: "branding",
    title: "Dev-Ashy Branding",
    desc: "Custom themes, wallpapers, terminal config, and default icons.",
  },
];

export default function OSPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-36 pb-20 border-b border-[#1e293b]">
        <div className="container">
          <p className="eyebrow-mono mb-5">dev-ashy os · flagship</p>
          <h1 className="font-display font-bold tracking-tight text-white text-[clamp(3rem,9vw,7rem)] leading-[0.98] mb-7">
            Dev-Ashy OS
          </h1>
          <p className="text-[#a5b4c8] text-lg max-w-[52ch] leading-relaxed mb-10">
            Your developer workstation, rebuilt. A Linux distribution for people
            who build — your desktop, your environment, your choice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="https://github.com/Dev-Ashy/dev-ashy-os/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-hero"
            >
              Download ISO
            </a>
            <a
              href="https://github.com/Dev-Ashy/dev-ashy-os"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !py-[18px]"
            >
              Source on GitHub
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            {[
              { value: "4 GB", label: "RAM" },
              { value: "25 GB", label: "disk" },
              { value: "64-bit", label: "cpu" },
              { value: "4 GB", label: "usb" },
            ].map((req) => (
              <div key={req.label} className="panel panel-hover p-5">
                <p className="font-display font-bold text-[24px] text-white tracking-tight">
                  {req.value}
                </p>
                <p className="font-mono text-[11px] text-[#64748b] mt-1">{req.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop environments */}
      <section className="section-padding">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow-mono mb-4">pick your desktop</p>
              <h2 className="font-display font-bold tracking-tight text-white text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
                Choose your environment
                <br />
                at install.
              </h2>
            </div>
            <p className="text-[#94a3b8] max-w-[46ch] text-[15px] leading-relaxed">
              Select a desktop environment below to see what gets installed.
              Your machine will need an internet connection during installation
              so the right packages can be downloaded.
            </p>
          </div>

          <DesktopEnvironments />
        </div>
      </section>

      {/* What's inside */}
      <section className="section-padding bg-[#0d0d14]">
        <div className="container">
          <p className="eyebrow-mono mb-4">everything you need, pre-installed</p>
          <h2 className="font-display font-bold tracking-tight text-white text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] mb-14">
            Ship day one.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <div key={feature.id} className="panel panel-hover p-6">
                <div className="win-bar !mb-5">
                  <span className="win-dot" />
                  {feature.id}
                </div>
                <h3 className="font-display font-semibold text-[18px] text-white tracking-tight mb-2">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-[#94a3b8] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 panel overflow-hidden">
            <div className="win-bar">
              <span className="win-dot" />
              flash the iso
            </div>
            <div className="p-7 md:p-9 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <p className="text-[14.5px] text-[#a5b4c8] leading-relaxed flex-1">
                Download the latest image, write it to a USB drive, and boot.
                The installer walks you through disk setup, desktop selection,
                and Dev-Ashy branding.
              </p>
              <div className="terminal shrink-0 md:w-[380px]">
                <div className="terminal-body !py-4 text-[12px] leading-[1.9]">
                  <p className="text-[#64748b]">
                    <span className="text-[#22d3ee]">$</span> sudo dd if=Dev-Ashy-OS-0.1.0-amd64.iso of=/dev/sdX bs=4M
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/product" className="btn-secondary">
              ← Back to products
            </Link>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}