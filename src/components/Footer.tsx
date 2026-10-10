import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "products",
    links: [
      { label: "All Products", href: "/product" },
      { label: "Dev-Ashy OS (Hyprland)", href: "/product#os" },
      { label: "Security OS (Kali)", href: "/product#security" },
      { label: "Mobile App Creator", href: "/product#mobile-creator" },
      { label: "Dev-Ashy IDE & CLI", href: "/product" },
      { label: "Dev-Ashy Cloud", href: "/product" },
    ],
  },
  {
    title: "ecosystem",
    links: [
      { label: "Open Source Repositories", href: "/#opensource" },
      { label: "Starter Templates", href: "/#templates" },
      { label: "Documentation", href: "https://github.com/Dev-Ashy" },
      { label: "Changelog", href: "https://github.com/Dev-Ashy" },
      { label: "Architecture Specs", href: "https://github.com/Dev-Ashy" },
    ],
  },
  {
    title: "company",
    links: [
      { label: "About Dev-Ashy Limited", href: "/" },
      { label: "Contact", href: "/#contact" },
      { label: "WhatsApp Support (+234 904 105 9110)", href: "https://wa.me/2349041059110" },
      { label: "Press & Partnerships", href: "/#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#222923] bg-[#0b0d0c]">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-10 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.svg"
                alt="Dev-Ashy logo"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="font-display font-bold tracking-tight text-[#f4f6f2] text-lg">
                DEV-ASHY LIMITED
              </span>
            </div>
            <p className="font-mono text-[12.5px] text-[#7a847d] leading-relaxed max-w-[36ch]">
              Technology built in the open, for the next generation. Rooted in
              Linux, built in Lagos.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[10.5px] tracking-[0.08em] text-[#7a847d] mb-5 uppercase flex items-center gap-2">
                {col.title}
                <span className="text-[#b8f36b]">&gt;</span>
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="font-mono text-[12.5px] text-[#a0aaa1] hover:text-[#f4f6f2] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Direct comm */}
          <div>
            <p className="font-mono text-[10.5px] tracking-[0.08em] text-[#7a847d] mb-5 uppercase flex items-center gap-2">
              direct comm
              <span className="text-[#b8f36b]">@</span>
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:ashrafbello51@gmail.com"
                  className="font-mono text-[12.5px] text-[#a0aaa1] hover:text-[#b8f36b] transition-colors"
                >
                  ashrafbello51@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="mailto:meforbello@gmail.com"
                  className="font-mono text-[12.5px] text-[#a0aaa1] hover:text-[#b8f36b] transition-colors"
                >
                  meforbello@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2349041059110"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[12.5px] text-[#a0aaa1] hover:text-[#b8f36b] transition-colors"
                >
                  WhatsApp Direct Chat →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#222923] pt-7">
          <p className="font-mono text-[12px] text-[#a0aaa1] mb-3">
            <span className="text-[#4ade80]">dev-ashy:~$</span> echo {"\"Lagos Core UTC+1\""}
            <span className="cursor-blink ml-1.5 align-middle" />
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-mono text-[12px] text-[#a0aaa1]">
              © 2026 Dev-Ashy Limited. Technology built in the open, for the
              next generation. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:ashrafbello51@gmail.com"
                aria-label="Email Dev-Ashy"
                className="chip hover:text-[#f4f6f2] hover:border-[#3a453c] transition-colors"
              >
                ✉ mail
              </a>
              <a
                href="https://wa.me/2349041059110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Dev-Ashy"
                className="chip hover:text-[#f4f6f2] hover:border-[#3a453c] transition-colors"
              >
                ✆ whatsapp (+234 904 105 9110)
              </a>
              <a
                href="https://github.com/Dev-Ashy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dev-Ashy on GitHub"
                className="chip hover:text-[#f4f6f2] hover:border-[#3a453c] transition-colors"
              >
                ⎇ github (github.com/Dev-Ashy)
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}