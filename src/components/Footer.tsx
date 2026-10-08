import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "products",
    links: [
      { label: "All products", href: "/product" },
      { label: "Dev-Ashy OS", href: "/product#os" },
      { label: "Mobile App Creator", href: "/product" },
      { label: "IDE + CLI", href: "/product" },
    ],
  },
  {
    title: "ecosystem",
    links: [
      { label: "Open source", href: "/#opensource" },
      { label: "Templates", href: "/#templates" },
      { label: "Documentation", href: "https://github.com/Dev-Ashy" },
      { label: "Changelog", href: "https://github.com/Dev-Ashy" },
    ],
  },
  {
    title: "company",
    links: [
      { label: "Contact", href: "/#contact" },
      { label: "GitHub", href: "https://github.com/Dev-Ashy" },
      { label: "Email", href: "mailto:meforbello@gmail.com" },
      { label: "WhatsApp", href: "https://wa.me/2349041059110" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1e293b] bg-[#0a0a0f]">
      <div className="container py-16">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.svg"
                alt="Dev-Ashy logo"
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <span className="font-display font-bold tracking-tight text-white text-lg">
                DEV-ASHY
              </span>
            </div>
            <p className="text-[13.5px] text-[#64748b] leading-relaxed max-w-[34ch]">
              Dev-Ashy Limited — technology built in the open, for the next
              generation.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[11px] tracking-[0.08em] text-[#64748b] mb-5">
                {col.title}
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
                      className="text-[13.5px] text-[#94a3b8] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#1e293b] pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[12px] text-[#64748b]">
            © 2026 Dev-Ashy Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="mailto:ashrafbello51@gmail.com"
              aria-label="Email Dev-Ashy"
              className="chip hover:text-white hover:border-[#475569] transition-colors"
            >
              ✉ mail
            </a>
            <a
              href="https://wa.me/2349041059110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Dev-Ashy"
              className="chip hover:text-white hover:border-[#475569] transition-colors"
            >
              ✆ whatsapp
            </a>
            <a
              href="https://github.com/Dev-Ashy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dev-Ashy on GitHub"
              className="chip hover:text-white hover:border-[#475569] transition-colors"
            >
              ⎇ github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}