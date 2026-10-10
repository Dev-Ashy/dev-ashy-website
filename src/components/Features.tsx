import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import type { BadgeTone } from "@/components/StatusBadge";

const products: {
  id: string;
  name: string;
  status: { label: string; tone: BadgeTone };
  desc: string;
  href: string;
}[] = [
  {
    id: "dev-ashy-os",
    name: "Dev-Ashy OS",
    status: { label: "alpha", tone: "alpha" },
    desc: "A developer Linux distribution built on Ubuntu. Modern base, your choice of desktop environment — Hyprland, GNOME, KDE Plasma or XFCE.",
    href: "/product#os",
  },
  {
    id: "dev-ashy-security",
    name: "Dev-Ashy Security OS",
    status: { label: "planned", tone: "planned" },
    desc: "A security-focused edition grounded in the Kali ecosystem, with dev-ashy tooling and a dedicated hardening workflow.",
    href: "/product#security",
  },
  {
    id: "dev-ashy-tools",
    name: "Dev-Ashy Tools",
    status: { label: "shipping", tone: "shipping" },
    desc: "A purpose-built IDE and a companion CLI for scaffolding, building, and deploying projects across web and mobile.",
    href: "/product",
  },
  {
    id: "dev-ashy-mobile",
    name: "Mobile App Creator",
    status: { label: "alpha", tone: "alpha" },
    desc: "A developer platform for creating, running, testing and shipping React Native apps. TypeScript-first, open source.",
    href: "/product#mobile-creator",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow-mono mb-4">01 / what we build</p>
            <h2 className="font-display font-bold tracking-tight text-[#f4f6f2] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
              One company.
              <br />
              An entire ecosystem.
            </h2>
          </div>
          <p className="text-[#a0aaa1] max-w-[42ch] text-[14px] leading-relaxed font-mono">
            Operating systems, security editions, developer tools and mobile
            infrastructure — built in the open, rooted in Linux.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="panel panel-hover group flex flex-col"
            >
              <div className="win-bar">
                <span className="win-dot" />
                {product.id}
                <span className="ml-auto">
                  <StatusBadge tone={product.status.tone}>{product.status.label}</StatusBadge>
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-[20px] text-[#f4f6f2] tracking-tight mb-3">
                  {product.name}
                </h3>
                <p className="text-[13.5px] font-mono text-[#a0aaa1] leading-relaxed flex-1">
                  {product.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] text-[#b8f36b] group-hover:text-[#c7f688] transition-colors">
                  view →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}