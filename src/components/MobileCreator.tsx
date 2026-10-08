import Image from "next/image";
import Link from "next/link";

const points = [
  "Create a project with a single command",
  "Hot-reload preview on Android, iOS, and web",
  "TypeScript-first codegen, Expo-compatible",
  "Build and ship via EAS + Dev-Ashy Cloud",
];

export default function MobileCreator() {
  return (
    <section id="mobile-creator" className="section-padding">
      <div className="container">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_420px] gap-14 items-center">
          {/* Copy */}
          <div>
            <div className="win-bar mb-8 max-w-md">
              <span className="win-dot" />
              dev-ashy-mobile · app creator
            </div>
            <h2 className="font-display font-bold tracking-tight text-white text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] mb-6">
              Mobile apps,
              <br />
              without the setup tax.
            </h2>
            <p className="text-[#94a3b8] text-[15px] leading-relaxed max-w-[52ch] mb-9">
              Dev-Ashy Mobile App Creator is a developer platform for React
              Native and Expo projects — design, develop, test, and deploy from
              one place, with the CLI doing the heavy lifting.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3.5 mb-9 max-w-xl">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[14px] text-[#cbd5e1] leading-snug"
                >
                  <span className="mt-[3px] w-4 h-4 shrink-0 border border-[#334155] rounded-[3px] flex items-center justify-center text-[#22d3ee]">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href="/product" className="btn-primary">
                See product detail
              </Link>
              <a
                href="https://github.com/Dev-Ashy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Source on GitHub
              </a>
            </div>
          </div>

          {/* Phone mock */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-[280px] h-[560px] bg-[#12121a] rounded-[38px] border border-[#273449] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
                <div className="w-full h-full bg-[#0a0a0f] rounded-[30px] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 py-4 text-[11px] font-mono text-[#64748b]">
                    <span>9:41</span>
                    <span className="w-8 h-2.5 bg-[#1e293b] rounded-full" />
                  </div>

                  {/* App content */}
                  <div className="relative h-[calc(100%-44px)]">
                    <Image
                      src="/images/mobile-4k.jpg"
                      alt="A mobile app running on the Dev-Ashy mobile preview"
                      fill
                      sizes="280px"
                      className="object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/40 via-transparent to-[#0a0a0f]/90" />

                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                      <p className="font-mono text-[11px] text-[#22d3ee] mb-2">● live preview</p>
                      <p className="font-display text-white text-[17px] leading-tight mb-1">
                        My App
                      </p>
                      <p className="text-[12px] text-[#94a3b8] mb-5">
                        built with dev-ashy create
                      </p>
                      <div className="grid grid-cols-2 gap-2.5">
                        <div className="h-16 rounded-lg bg-[#12121a]/85 border border-[#1e293b]" />
                        <div className="h-16 rounded-lg bg-[#12121a]/85 border border-[#1e293b]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Console chips */}
              <div className="absolute -bottom-5 -left-10 hidden sm:block">
                <div className="chip chip-live">dev server · :8081</div>
              </div>
              <div className="absolute -top-4 -right-8 hidden sm:block">
                <div className="chip">qr ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}