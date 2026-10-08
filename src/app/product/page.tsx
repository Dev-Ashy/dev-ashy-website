import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
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

export default function ProductPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Page hero */}
      <section className="pt-32 pb-20 border-b border-[#1e293b]">
        <div className="container">
          <p className="eyebrow-mono mb-5">products · dev-ashy limited</p>
          <h1 className="font-display font-bold tracking-tight text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] mb-6">
            Everything we build,
            <br />
            in one place.
          </h1>
          <p className="text-[#94a3b8] text-[15.5px] max-w-[56ch] leading-relaxed">
            From the operating system up to developer tooling and mobile
            infrastructure — every product is open, cross-platform where it
            counts, and built to be shaped by its users.
          </p>
        </div>
      </section>

      {/* Dev-Ashy OS */}
      <section id="os" className="section-padding">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow-mono mb-4">flagship · linux</p>
              <h2 className="font-display font-bold tracking-tight text-white text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
                Dev-Ashy OS
              </h2>
            </div>
            <p className="text-[#94a3b8] max-w-[46ch] text-[15px] leading-relaxed">
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
                <p className="font-mono text-[11px] text-[#64748b] mb-2">{item.label}</p>
                <p className="font-display font-semibold text-[18px] text-white tracking-tight">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Creator */}
      <section className="section-padding bg-[#0d0d14]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="win-bar mb-8 max-w-md">
                <span className="win-dot" />
                dev-ashy-mobile · app creator
              </div>
              <h2 className="font-display font-bold tracking-tight text-white text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] mb-6">
                Mobile App
                <br />
                Creator
              </h2>
              <p className="text-[#94a3b8] text-[15px] leading-relaxed max-w-[52ch] mb-7">
                Create, run, test and ship React Native apps — with a CLI that
                scaffolds the project, a dev server with hot reload, and live
                preview on Android, iOS, and web.
              </p>
              <div className="terminal max-w-md mb-8">
                <div className="terminal-body !py-4 text-[12.5px] leading-[1.9]">
                  <p className="text-[#64748b]">
                    <span className="text-[#22d3ee]">~</span> dev-ashy create store-app --mobile
                  </p>
                  <p className="text-[#94a3b8]">✓ project created · typescript</p>
                  <p className="text-[#94a3b8]">✓ dev server on :8081 · hot reload</p>
                  <p className="text-[#67e8f9]">
                    ✓ preview: android · ios · web
                    <span className="cursor-blink ml-1.5" />
                  </p>
                </div>
              </div>
              <Link href="/#templates" className="btn-primary">
                Browse templates
              </Link>
            </div>

            <div className="grid gap-4">
              {[
                {
                  id: "dev-ashy cli",
                  name: "Dev-Ashy CLI",
                  desc: "Scaffold, run, and deploy the whole ecosystem from a shell.",
                },
                {
                  id: "dev-ashy ide",
                  name: "Dev-Ashy IDE",
                  desc: "Editor, integrated terminal and AI help in one window.",
                },
                {
                  id: "dev-ashy cloud",
                  name: "Dev-Ashy Cloud",
                  desc: "Cloud builds and distribution to the app stores.",
                },
              ].map((tool) => (
                <div key={tool.id} className="panel panel-hover">
                  <div className="win-bar">
                    <span className="win-dot" />
                    {tool.id}
                  </div>
                  <div className="p-6 flex items-center justify-between gap-6">
                    <div>
                      <h3 className="font-display font-semibold text-[17px] text-white tracking-tight mb-1.5">
                        {tool.name}
                      </h3>
                      <p className="text-[13px] text-[#94a3b8] leading-relaxed">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="section-padding">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow-mono mb-4">roadmap</p>
              <h2 className="font-display font-bold tracking-tight text-white text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
                Coming soon.
              </h2>
            </div>
            <p className="text-[#94a3b8] max-w-[42ch] text-[15px] leading-relaxed">
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
                </div>
                <h3 className="font-display font-semibold text-[18px] text-white tracking-tight mb-2">
                  {product.name}
                </h3>
                <p className="text-[13px] text-[#94a3b8] leading-relaxed">
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