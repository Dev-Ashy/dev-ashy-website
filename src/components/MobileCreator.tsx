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
            <h2 className="font-display font-bold tracking-tight text-[#f4f6f2] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] mb-6">
              Mobile apps,
              <br />
              without the setup tax.
            </h2>
            <p className="text-[#a0aaa1] text-[14.5px] leading-relaxed max-w-[52ch] mb-9 font-mono">
              Dev-Ashy Mobile App Creator is a developer platform for React
              Native and Expo projects — design, develop, test, and deploy from
              one place, with the CLI doing the heavy lifting.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3.5 mb-9 max-w-xl">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-[13.5px] font-mono text-[#e2e3e0] leading-snug"
                >
                  <span className="mt-[3px] w-4 h-4 shrink-0 border border-[#2a332c] flex items-center justify-center text-[#b8f36b]">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href="/product#mobile-creator" className="btn-primary">
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

          {/* Preview window */}
          <div className="flex justify-center">
            <div className="w-full max-w-[340px]">
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
                    sizes="(max-width: 1024px) 100vw, 340px"
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0b0d0c]/40 via-transparent to-[#0b0d0c]/90" />

                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <p className="font-mono text-[11px] text-[#4ade80] mb-2">● live preview</p>
                    <p className="font-display text-[#f4f6f2] text-[17px] leading-tight mb-1">
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

              <div className="flex justify-between mt-4">
                <span className="chip chip-live">dev server · :8081</span>
                <span className="chip">qr ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}