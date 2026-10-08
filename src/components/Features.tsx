import Link from "next/link";

const products = [
  {
    id: "dev-ashy-os",
    name: "Dev-Ashy OS",
    status: { label: "alpha", live: true },
    desc: "A developer Linux distribution built on Ubuntu. Modern base, your choice of desktop environment — Hyprland, GNOME, KDE Plasma or XFCE.",
    href: "/product#os",
  },
  {
    id: "dev-ashy-security",
    name: "Dev-Ashy Security OS",
    status: { label: "planned", live: false },
    desc: "A security-focused edition grounded in the Kali ecosystem, with dev-ashy tooling and a dedicated hardening workflow.",
    href: "/product#os",
  },
  {
    id: "dev-ashy-tools",
    name: "Dev-Ashy Tools",
    status: { label: "shipping", live: true },
    desc: "A purpose-built IDE and a companion CLI for scaffolding, building, and deploying projects across web and mobile.",
    href: "/product",
  },
  {
    id: "dev-ashy-mobile",
    name: "Mobile App Creator",
    status: { label: "alpha", live: true },
    desc: "A developer platform for creating, running, testing and shipping React Native apps. TypeScript-first, open source.",
    href: "/product",
  },
];

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow-mono mb-4">what we build</p>
            <h2 className="font-display font-bold tracking-tight text-white text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
              One company.
              <br />
              An entire ecosystem.
            </h2>
          </div>
          <p className="text-[#94a3b8] max-w-[42ch] text-[15px] leading-relaxed">
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
                <span className={product.status.live ? "win-dot" : "win-dot win-dot-idle"} />
                {product.id}
                <span className="ml-auto text-[#64748b]">{product.status.label}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-[20px] text-white tracking-tight mb-3">
                  {product.name}
                </h3>
                <p className="text-[13.5px] text-[#94a3b8] leading-relaxed flex-1">
                  {product.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11.5px] text-[#6366f1] group-hover:text-[#818cf8] transition-colors">
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