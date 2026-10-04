export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="badge mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Now in Development
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-gradient">Build Beyond</span>
          <br />
          <span className="text-white">the Screen.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Dev-Ashy Mobile Creator helps developers build mobile applications
          using a modern React Native development workflow. From idea to app
          store in minutes, not months.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#cta" className="btn-primary text-base px-8 py-4">
            Start Building
          </a>
          <a href="#features" className="btn-secondary text-base px-8 py-4">
            Learn More
          </a>
        </div>

        {/* Terminal Preview */}
        <div className="terminal max-w-2xl mx-auto text-left glow">
          <div className="terminal-header">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
            <span className="text-xs text-slate-500 ml-2">
              dev-ashy — zsh
            </span>
          </div>
          <div className="p-6">
            <p className="text-slate-500">
              <span className="text-green-400">$</span> npx create-dev-ashy-app
              my-app
            </p>
            <p className="text-slate-300">
              ✓ Creating project structure...
            </p>
            <p className="text-slate-300">
              ✓ Installing dependencies...
            </p>
            <p className="text-slate-300">
              ✓ Configuring Expo...
            </p>
            <p className="text-slate-300">
              ✓ Setting up development environment...
            </p>
            <p className="text-green-400 mt-2">
              ✓ Project created successfully!
            </p>
            <p className="text-slate-500 mt-2">
              <span className="text-green-400">$</span> cd my-app && npm start
            </p>
            <p className="text-slate-300">
              ✓ Starting development server...
            </p>
            <p className="text-cyan-400">
              ✓ Ready! Scan QR code with Expo Go to preview.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          {[
            { value: "60fps", label: "Performance" },
            { value: "100%", label: "Cross-Platform" },
            { value: "< 1min", label: "Setup Time" },
            { value: "OSS", label: "Open Source" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gradient">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
