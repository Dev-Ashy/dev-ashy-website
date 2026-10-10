import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import StatusBadge from "@/components/StatusBadge";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import DesktopEnvironments from "@/components/DesktopEnvironments";

export const metadata: Metadata = {
  title: "Products | Dev-Ashy Limited",
  description:
    "Dev-Ashy OS with your choice of desktop environment, Dev-Ashy Security OS, developer tools, and the Mobile App Creator.",
};

const comingSoon = [
  { name: "Dev-Ashy Browser", desc: "A privacy-minded browser for every platform." },
  { name: "Dev-Ashy Search", desc: "Search without the clutter." },
  { name: "Dev-Ashy Mail", desc: "Email built on your Dev-Ashy identity." },
  { name: "Dev-Ashy Chat", desc: "Communication for teams and friends." },
  { name: "Dev-Ashy Drive", desc: "Cloud storage across the ecosystem." },
  { name: "Dev-Ashy AI", desc: "An assistant that uses the models you choose." },
];

const jumps = [
  { href: "#os", label: "# Dev-Ashy OS" },
  { href: "#security", label: "# Security OS" },
  { href: "#tools", label: "# Developer Tools" },
  { href: "#mobile-creator", label: "# Mobile App Creator" },
  { href: "#roadmap", label: "# Roadmap" },
  { href: "#contact", label: "# Direct Comm" },
];

const securityFeatures = [
  { id: "pentest", label: "Pen testing", value: "kali toolchain" },
  { id: "analysis", label: "Network analysis", value: "wireshark · nmap" },
  { id: "hardening", label: "Hardening", value: "grsec · apparmor · ufw" },
  { id: "privacy", label: "Privacy base", value: "vpn · tor client" },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* System catalog status strip */}
      <div className="border-b border-[#222923] bg-[#0f110f]">
        <div className="mx-auto max-w-[1240px] px-5 py-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-[#a0aaa1]">
          <span className="text-[#b8f36b]">SYS.CATALOG // PUBLIC ROADMAP</span>
          <span className="hidden sm:inline text-[#7a847d]">|</span>
          <span className="hidden sm:inline">ARCH: x86_64 + aarch64</span>
          <span className="hidden lg:inline text-[#7a847d]">|</span>
          <span className="hidden lg:inline">LOC: LAGOS, NIGERIA</span>
          <span className="hidden xl:inline text-[#7a847d]">|</span>
          <span className="hidden xl:inline flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#4ade80] status-pulse" />
            STATUS: RELEASED + PLANNED
          </span>
          <span className="ml-auto text-[#7a847d]">SOURCE: OPEN</span>
        </div>
      </div>

      {/* Page hero */}
      <section className="pt-24 pb-16 border-b border-[#222923]">
        <div className="container">
          <p className="font-mono text-[13px] text-[#b8f36b] mb-4">&gt;&gt;</p>
          <p className="eyebrow-mono mb-5">products · dev-ashy limited · system catalog</p>
          <h1 className="font-display font-bold tracking-tight text-[#f4f6f2] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] mb-6">
            Everything we build,
            <br />
            in one place.
          </h1>
          <p className="font-mono text-[#a0aaa1] text-[14px] max-w-[58ch] leading-relaxed mb-9">
            From the operating system up to developer tooling and mobile
            infrastructure — every product is open, cross-platform where it
            counts, and built to be shaped by its users.
          </p>

          {/* Anchor jump */}
          <p className="font-mono text-[11px] text-[#7a847d] mb-3">ANCHOR JUMP:</p>
          <div className="flex flex-wrap gap-2.5">
            {jumps.map((jump) => (
              <a key={jump.href} href={jump.href} className="chip hover:!border-[#b8f36b]/50 hover:!text-[#f4f6f2] transition-colors">
                {jump.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Dev-Ashy OS */}
      <section id="os" className="section-padding">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow-mono mb-4">flagship · linux</p>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="font-display font-bold tracking-tight text-[#f4f6f2] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
                  Dev-Ashy OS
                </h2>
                <StatusBadge tone="alpha">alpha</StatusBadge>
              </div>
            </div>
            <p className="font-mono text-[#a0aaa1] max-w-[46ch] text-[14px] leading-relaxed">
              A developer Linux distribution built on Ubuntu, with Wine for
              Windows apps and your choice of desktop environment at install
              time.
            </p>
          </div>

          <DesktopEnvironments />

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {[
              { label: "base", value: "ubuntu · debian" },
              { label: "windows apps", value: "wine · winetricks" },
              { label: "hardening", value: "security edition" },
            ].map((item) => (
              <div key={item.label} className="panel panel-hover p-6">
                <p className="font-mono text-[11px] text-[#7a847d] mb-2">{item.label}</p>
                <p className="font-display font-semibold text-[18px] text-[#f4f6f2] tracking-tight">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security OS */}
      <section id="security" className="section-padding bg-[#0f110f]">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow-mono mb-4">security edition · kali base</p>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="font-display font-bold tracking-tight text-[#f4f6f2] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
                  Dev-Ashy Security OS
                </h2>
                <StatusBadge tone="planned">planned</StatusBadge>
              </div>
            </div>
            <p className="font-mono text-[#a0aaa1] max-w-[46ch] text-[14px] leading-relaxed">
              A security-focused edition grounded in the Kali ecosystem — the
              same Dev-Ashy base, hardened for offensive security work and
              defensive operations. In development.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {securityFeatures.map((feature) => (
              <div key={feature.id} className="panel panel-hover p-6">
                <div className="win-bar !mb-4">
                  <span className="win-dot win-dot-idle" />
                  {feature.id}
                </div>
                <p className="font-display font-semibold text-[17px] text-[#f4f6f2] tracking-tight mb-2">
                  {feature.label}
                </p>
                <p className="font-mono text-[12.5px] text-[#a0aaa1]">{feature.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Tools */}
      <section id="tools" className="section-padding">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow-mono mb-4">developer tools</p>
              <h2 className="font-display font-bold tracking-tight text-[#f4f6f2] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
                One toolchain,
                <br />
                end to end.
              </h2>
            </div>
            <p className="font-mono text-[#a0aaa1] max-w-[42ch] text-[14px] leading-relaxed">
              The IDE ships with the CLI built in, and cloud pipelines sit on
              top of both.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                id: "dev-ashy cli",
                name: "Dev-Ashy CLI",
                state: "shipping" as const,
                desc: "Scaffold, run, and deploy the whole ecosystem from a shell.",
              },
              {
                id: "dev-ashy ide",
                name: "Dev-Ashy IDE",
                state: "beta" as const,
                desc: "Editor, integrated terminal and AI help in one window.",
              },
              {
                id: "dev-ashy cloud",
                name: "Dev-Ashy Cloud",
                state: "planned" as const,
                desc: "Cloud builds and distribution to the app stores.",
              },
            ].map((tool) => (
              <div key={tool.id} className="panel panel-hover">
                <div className="win-bar">
                  <span className="win-dot" />
                  {tool.id}
                  <span className="ml-auto">
                    <StatusBadge tone={tool.state}>{tool.state}</StatusBadge>
                  </span>
                </div>
                <div className="p-6 flex items-center justify-between gap-6">
                  <div>
                    <h3 className="font-display font-semibold text-[17px] text-[#f4f6f2] tracking-tight mb-1.5">
                      {tool.name}
                    </h3>
                    <p className="font-mono text-[13px] text-[#a0aaa1] leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Creator */}
      <section id="mobile-creator" className="section-padding bg-[#0f110f]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="win-bar mb-8 max-w-md">
                <span className="win-dot" />
                dev-ashy-mobile · app creator
              </div>
              <h2 className="font-display font-bold tracking-tight text-[#f4f6f2] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] mb-6">
                Mobile App
                <br />
                Creator
              </h2>
              <p className="font-mono text-[#a0aaa1] text-[14px] leading-relaxed max-w-[52ch] mb-7">
                Create, run, test and ship React Native apps — with a CLI that
                scaffolds the project, a dev server with hot reload, and live
                preview on Android, iOS, and web.
              </p>
              <div className="terminal max-w-md mb-8">
                <div className="terminal-body !py-4 text-[12.5px] leading-[1.9]">
                  <p className="text-[#a0aaa1]">
                    <span className="text-[#4ade80]">~</span> dev-ashy create store-app --mobile
                  </p>
                  <p className="text-[#a0aaa1]">✓ project created · typescript</p>
                  <p className="text-[#a0aaa1]">✓ dev server on :8081 · hot reload</p>
                  <p className="text-[#b8f36b]">
                    ✓ preview: android · ios · web
                    <span className="cursor-blink ml-1.5" />
                  </p>
                </div>
              </div>
              <Link href="/#templates" className="btn-primary">
                Browse templates
              </Link>
            </div>

            {/* Preview window */}
            <div>
              <div className="panel overflow-hidden">
                <div className="win-bar">
                  <span className="win-dot" />
                  dev-ashy-mobile · live preview
                  <span className="ml-auto text-[10px] text-[#b8f36b]">:8081</span>
                </div>
                <div className="relative h-[420px] bg-[#090b0a]">
                  <Image
                    src="/images/mobile-4k.jpg"
                    alt="A mobile app running on the Dev-Ashy mobile preview"
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d0c]/40 via-transparent to-[#0b0d0c]/90" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <p className="font-mono text-[11px] text-[#4ade80] mb-2">● live preview</p>
                    <p className="font-display text-[#f4f6f2] text-[18px] leading-tight mb-1">
                      My App
                    </p>
                    <p className="font-mono text-[12px] text-[#a0aaa1] mb-5">
                      built with dev-ashy create
                    </p>
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="h-16 bg-[#121613]/85 border border-[#222923]" />
                      <div className="h-16 bg-[#121613]/85 border border-[#222923]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section id="roadmap" className="section-padding">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow-mono mb-4">roadmap</p>
              <h2 className="font-display font-bold tracking-tight text-[#f4f6f2] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
                Coming soon.
              </h2>
            </div>
            <p className="font-mono text-[#a0aaa1] max-w-[42ch] text-[14px] leading-relaxed">
              The ecosystem grows in the open — these are the next windows on
              the desktop.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {comingSoon.map((product) => (
              <div key={product.name} className="panel panel-hover p-6">
                <div className="win-bar !mb-5">
                  <span className="win-dot win-dot-idle" />
                  {product.name.toLowerCase().replace(/ /g, "-")}
                  <span className="ml-auto">
                    <StatusBadge tone="planned">planned</StatusBadge>
                  </span>
                </div>
                <h3 className="font-display font-semibold text-[18px] text-[#f4f6f2] tracking-tight mb-2">
                  {product.name}
                </h3>
                <p className="font-mono text-[13px] text-[#a0aaa1] leading-relaxed">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}