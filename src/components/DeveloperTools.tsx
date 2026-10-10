import StatusBadge from "@/components/StatusBadge";
import type { BadgeTone } from "@/components/StatusBadge";

const tools: {
  id: string;
  name: string;
  command: string;
  state: string;
  tone: BadgeTone;
  desc: string;
  code: string[];
}[] = [
  {
    id: "dev-ashy cli",
    name: "Dev-Ashy CLI",
    command: "npm install -g @dev-ashy/cli",
    state: "shipping",
    tone: "shipping",
    desc: "Scaffold, build, and deploy projects from the terminal. One command for web and mobile work.",
    code: ["$ dev-ashy doctor", "  ✓ node 22 · git ✓ · ssh ready"],
  },
  {
    id: "dev-ashy ide",
    name: "Dev-Ashy IDE",
    command: "code --install-extension dev-ashy",
    state: "beta",
    tone: "beta",
    desc: "A purpose-built editor with integrated terminal, AI coding help, and one-click CLI integration.",
    code: ["$ dev-ashy ide .", "  opening workspace · ready"],
  },
  {
    id: "dev-ashy cloud",
    name: "Dev-Ashy Cloud",
    command: "dev-ashy deploy --prod",
    state: "planned",
    tone: "planned",
    desc: "Cloud builds, signing, and distribution pipelines for app stores and the web.",
    code: ["$ dev-ashy deploy", "  pipeline · coming soon"],
  },
];

export default function DeveloperTools() {
  return (
    <section id="tools" className="section-padding bg-[#0f110f]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow-mono mb-4">02 / developer tools</p>
            <h2 className="font-display font-bold tracking-tight text-[#f4f6f2] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
              Tools that feel
              <br />
              native to the terminal.
            </h2>
          </div>
          <p className="text-[#a0aaa1] max-w-[42ch] text-[14px] leading-relaxed font-mono">
            The IDE ships with the CLI built in, and the cloud pipelines sit on
            top of both — a single toolchain, end to end.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <div key={tool.id} className="panel panel-hover flex flex-col">
              <div className="win-bar break-none">
                <span className="win-dot" />
                {tool.id}
                <span className="ml-auto">
                  <StatusBadge tone={tool.tone}>{tool.state}</StatusBadge>
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-[19px] text-[#f4f6f2] tracking-tight mb-2.5">
                  {tool.name}
                </h3>
                <p className="text-[13.5px] font-mono text-[#a0aaa1] leading-relaxed flex-1 mb-6">
                  {tool.desc}
                </p>
                <div className="terminal">
                  <div className="terminal-body !py-3.5 !px-4 text-[12px] leading-[1.8]">
                    <p className="text-[#b8f36b]">$ {tool.command}</p>
                    {tool.code.map((line) => (
                      <p key={line} className="text-[#a0aaa1]">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}