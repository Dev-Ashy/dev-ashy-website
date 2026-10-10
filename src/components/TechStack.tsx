import Image from "next/image";

const stack = [
  { name: "react-native", role: "framework" },
  { name: "expo", role: "sdk + tooling" },
  { name: "typescript", role: "language" },
  { name: "node.js", role: "runtime" },
  { name: "linux / ubuntu", role: "dev-ashy os base" },
  { name: "android · ios · web", role: "targets" },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-padding">
      <div className="container">
        <div className="panel overflow-hidden">
          <div className="win-bar">
            <span className="win-dot" />
            04 / under the hood · dev-ashy --tech-stack
            <span className="ml-auto text-[#7a847d]">stable engine compilation</span>
          </div>

          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-0">
              <Image
                src="/images/circuit-4k.jpg"
                alt="Circuit board photograph used behind the stack panel"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#121613] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121613] lg:hidden" />
            </div>

            <div className="p-8 md:p-10">
              <p className="eyebrow-mono mb-4">open source ecosystem</p>
              <h2 className="font-display font-bold tracking-tight text-[#f4f6f2] text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.05] mb-7">
                Built on proven
                <br />
                open technology.
              </h2>
              <ul className="divide-y divide-[#222923] border-y border-[#222923]">
                {stack.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between gap-4 py-3 font-mono text-[13px]"
                  >
                    <span className="text-[#e2e3e0]">{item.name}</span>
                    <span className="text-[#7a847d] text-[11px]">{item.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}