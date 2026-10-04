export default function CTA() {
  return (
    <section id="cta" className="section-padding">
      <div className="container">
        <div className="card p-12 md:p-16 text-center glow">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-gradient">Ready to build?</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg mb-8">
            Start building your mobile app today. Free and open source.
          </p>
          <div className="terminal max-w-md mx-auto text-left mb-8">
            <div className="terminal-header">
              <div className="terminal-dot terminal-dot-red" />
              <div className="terminal-dot terminal-dot-yellow" />
              <div className="terminal-dot terminal-dot-green" />
            </div>
            <div className="p-4">
              <p className="text-slate-500">
                <span className="text-green-400">$</span> npx
                create-dev-ashy-app my-app
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/Dev-Ashy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base px-8 py-4"
            >
              Get Started on GitHub
            </a>
            <a href="#features" className="btn-secondary text-base px-8 py-4">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
