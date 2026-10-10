export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#0f110f]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow-mono mb-4">06 / get in touch</p>
            <h2 className="font-display font-bold tracking-tight text-[#f4f6f2] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05]">
              Talk to us directly.
            </h2>
          </div>
          <p className="text-[#a0aaa1] max-w-[42ch] text-[14px] leading-relaxed font-mono">
            Questions, partnerships, or feedback on the OS and the tools — our
            engineering team in Lagos reads every transmission.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Email */}
          <a
            href="mailto:ashrafbello51@gmail.com"
            className="panel panel-hover p-8 flex flex-col"
          >
            <div className="win-bar !mb-6">
              <span className="win-dot" />
              mail · dev-ashy
              <span className="ml-auto badge badge-shipping">email</span>
            </div>
            <h3 className="font-display font-semibold text-[19px] text-[#f4f6f2] tracking-tight mb-1.5">
              Email us
            </h3>
            <p className="font-mono text-[12.5px] text-[#7a847d] mb-6">
              Replies within 24 hours. Open to open-source sponsorships,
              partnerships, and press.
            </p>
            <ul className="space-y-2.5 mt-auto">
              <li className="flex items-center gap-3 font-mono text-[13.5px] text-[#e2e3e0]">
                <span className="w-7 h-7 shrink-0 border border-[#2a332c] flex items-center justify-center text-[#b8f36b]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                ashrafbello51@gmail.com
              </li>
              <li className="flex items-center gap-3 font-mono text-[13.5px] text-[#e2e3e0]">
                <span className="w-7 h-7 shrink-0 border border-[#2a332c] flex items-center justify-center text-[#b8f36b]">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                meforbello@gmail.com
              </li>
            </ul>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/2349041059110"
            target="_blank"
            rel="noopener noreferrer"
            className="panel panel-hover p-8 flex flex-col"
          >
            <div className="win-bar !mb-6">
              <span className="win-dot" />
              chat · whatsapp
              <span className="ml-auto badge badge-shipping">instant</span>
            </div>
            <h3 className="font-display font-semibold text-[19px] text-[#f4f6f2] tracking-tight mb-1.5">
              WhatsApp Direct
            </h3>
            <p className="font-mono text-[12.5px] text-[#7a847d] mb-6">
              Fastest way to reach the core maintenance team. Real-time chat
              with engineering in Lagos.
            </p>
            <div className="mt-auto">
              <p className="flex items-center gap-3 font-mono text-[13.5px] text-[#e2e3e0] mb-5">
                <span className="w-7 h-7 shrink-0 bg-[#22c55e]/15 border border-[#22c55e]/30 flex items-center justify-center text-[#22c55e]">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                +234 904 105 9110
              </p>
              <span className="btn-primary">
                Open Chat →
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}