export default function CTA() {
  return (
    <section id="cta" className="section-padding">
      <div className="container">
        <div className="panel overflow-hidden">
          <div className="win-bar">
            <span className="win-dot" />
            dev-ashy --install
            <span className="ml-auto text-[#7a847d]">cross-platform</span>
          </div>
          <div className="px-6 py-14 md:py-20 text-center">
            <h2 className="font-display font-bold tracking-tight text-[#f4f6f2] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] mb-5">
              Ready to build?
            </h2>
            <p className="text-[#a0aaa1] text-[14.5px] font-mono max-w-xl mx-auto mb-9">
              Install the CLI, pull down the source, or grab an OS image. Free
              and open source — start today from your terminal.
            </p>

            <div className="terminal max-w-lg mx-auto text-left mb-10">
              <div className="terminal-body !py-4">
                <p className="text-[#a0aaa1]">
                  <span className="text-[#4ade80]">$</span> npm install -g @dev-ashy/cli
                </p>
                <p className="text-[#a0aaa1]">
                  <span className="text-[#4ade80]">$</span> dev-ashy create my-app
                  <span className="cursor-blink ml-1.5" />
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/Dev-Ashy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get started on GitHub
              </a>
              <a href="/product" className="btn-secondary">
                Browse products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}