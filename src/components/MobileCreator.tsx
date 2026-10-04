export default function MobileCreator() {
  return (
    <section id="mobile-creator" className="section-padding bg-[#0d0d14]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-gradient">Dev-Ashy</span>
              <br />
              <span className="text-white">Mobile Creator</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              The heart of Dev-Ashy. A complete mobile development platform
              built on React Native and Expo. Design, build, test, and deploy
              — all from one place.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Visual builder with live preview",
                "Full Expo SDK compatibility",
                "TypeScript-first development",
                "EAS Build integration",
                "Over-the-air updates",
                "Push notifications built-in",
                "Offline-first architecture",
                "Web, iOS, and Android from one codebase",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a href="#cta" className="btn-primary">
                Try Mobile Creator
              </a>
              <a href="#docs" className="btn-secondary">
                Documentation
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone frame */}
              <div className="w-[280px] h-[560px] bg-[#1a1a25] rounded-[40px] border-4 border-[#2a2a3a] p-2 shadow-2xl glow">
                <div className="w-full h-full bg-[#0a0a0f] rounded-[32px] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 py-3 text-xs text-slate-500">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-slate-600 rounded-sm" />
                      <div className="w-2 h-2 bg-slate-600 rounded-full" />
                    </div>
                  </div>
                  {/* App content */}
                  <div className="px-4 py-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 mb-4" />
                    <div className="h-3 bg-[#1a1a25] rounded-full w-3/4 mb-2" />
                    <div className="h-3 bg-[#1a1a25] rounded-full w-1/2 mb-6" />
                    <div className="space-y-3">
                      <div className="h-24 bg-[#1a1a25] rounded-xl" />
                      <div className="h-24 bg-[#1a1a25] rounded-xl" />
                      <div className="h-24 bg-[#1a1a25] rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -right-8 top-20 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="absolute -left-8 bottom-32 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
