"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const update = () =>
      setNow(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    update();
    const t = window.setInterval(update, 1000);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.clearInterval(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const nav = [
    { href: "/", label: "Home" },
    { href: "/product", label: "Products" },
    { href: "/product#os", label: "Dev-Ashy OS" },
    { href: "/#opensource", label: "Open Source" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/85 backdrop-blur-xl border-[#1e293b]"
          : "bg-[#0a0a0f]/40 backdrop-blur-md border-[#1e293b]/60"
      }`}
    >
      <div className="mx-auto max-w-[1240px] px-5 h-14 flex items-center justify-between">
        {/* Left: logo + wordmark */}
        <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Dev-Ashy home">
          <Image
            src="/images/logo.svg"
            alt="Dev-Ashy logo"
            width={32}
            height={32}
            className="h-8 w-8"
            priority
          />
          <span className="font-display font-bold tracking-tight text-[17px] hidden sm:block">
            DEV-ASHY
          </span>
        </Link>

        {/* Center: nav */}
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13.5px] font-medium text-[#94a3b8] hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: status cluster */}
        <div className="flex items-center gap-5">
          <span className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-[#94a3b8]">
            <span className="w-1.5 h-1.5 rounded-[1px] bg-[#22d3ee]" />
            {now}
          </span>
          <a
            href="https://github.com/Dev-Ashy"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 font-mono text-[11.5px] text-[#94a3b8] hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            dev-ashy
          </a>
          <Link href="/product" className="btn-primary !py-2 !px-4 text-[13.5px] hidden sm:inline-flex">
            Explore Products
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#94a3b8] hover:text-white"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-[#1e293b]">
          <div className="px-5 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-[#94a3b8] hover:text-white border-b border-[#1e293b]/60 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/product" onClick={() => setOpen(false)} className="btn-primary mt-3 text-center text-sm">
              Explore Products
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}