import Image from "next/image";

const templates = [
  {
    name: "Starter",
    desc: "Minimal app with tab navigation and a solid base structure.",
    tags: ["typescript", "expo-router"],
    image: "/images/code-4k.jpg",
  },
  {
    name: "E-Commerce",
    desc: "Storefront with cart, checkout, and payment flows.",
    tags: ["stripe", "cart", "auth"],
    image: "/images/workspace-4k.jpg",
  },
  {
    name: "Social",
    desc: "Feeds, direct messages, and user profiles.",
    tags: ["chat", "feed", "auth"],
    image: "/images/mobile-4k.jpg",
  },
  {
    name: "Dashboard",
    desc: "Admin console with charts, tables, and analytics.",
    tags: ["charts", "tables", "auth"],
    image: "/images/circuit-4k.jpg",
  },
  {
    name: "Fitness",
    desc: "Workout tracking with progress and sensors.",
    tags: ["health", "sensors"],
    image: "/images/hero-bg.jpg",
  },
  {
    name: "Food Delivery",
    desc: "Ordering with maps, payments, and live tracking.",
    tags: ["maps", "payments", "realtime"],
    image: "/images/gradient-4k.jpg",
  },
];

export default function Templates() {
  return (
    <section id="templates" className="section-padding bg-[#0d0d14]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow-mono mb-4">starter templates</p>
            <h2 className="font-display font-bold tracking-tight text-white text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
              Jump-start a project
              <br />
              on day one.
            </h2>
          </div>
          <p className="text-[#94a3b8] max-w-[42ch] text-[15px] leading-relaxed">
            Production-ready templates for the Mobile App Creator. MIT licensed,
            free to remix, and fully customizable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template) => (
            <div key={template.name} className="panel panel-hover flex flex-col">
              <div className="relative h-40 overflow-hidden rounded-t-[5px]">
                <Image
                  src={template.image}
                  alt={`${template.name} template screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-[18px] text-white tracking-tight mb-2">
                  {template.name}
                </h3>
                <p className="text-[13px] text-[#94a3b8] leading-relaxed flex-1 mb-5">
                  {template.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {template.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}