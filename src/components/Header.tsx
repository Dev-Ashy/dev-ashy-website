"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type BadgeTone = "shipping" | "alpha" | "beta" | "planned";

const products: {
  name: string;
  href: string;
  badge: string;
  tone: BadgeTone;
}[] = [
  { name: "Dev-Ashy OS", href: "/product#os", badge: "HYPR", tone: "shipping" },
  { name: "Security OS", href: "/product#security", badge: "KALI", tone: "planned" },
  { name: "Dev-Ashy CLI", href: "/product", badge: "v1.4", tone: "shipping" },
  { name: "Dev-Ashy IDE", href: "/product", badge: "BETA", tone: "beta" },
  { name: "Mobile Creator", href: "/product#mobile-creator", badge: "PROD", tone: "shipping" },
];

const nav = [
  { href: "/", label: "Home" },
  { href: "/#opensource", label: "Open Source" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [now, setNow] = useState<string>("");
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const update = () =>
      setNow(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Africa/Lagos",
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

  // Close the product dropdown on outside click or Escape.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-[#0b0d0c]/85 backdrop-blur-xl border-[#222923]"
          : "bg-[#0b0d0c]/40 backdrop-blur-md border-[#222923]/60"
      }`}
    >
      <div className="mx-auto max-w-[1240px] px-5 h-14 flex items-center justify-between gap-4">
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
          <span className="flex flex-col leading-none">
            <span className="font-display font-bold tracking-tight text-[15px] text-[#f4f6f2]">
              DEV-ASHY LIMITED
            </span>
            <span className="font-mono text-[9px] text-[#7a847d] tracking-[0.08em] mt-0.5">
              v2026 · open source
            </span>
          </span>
        </Link>

        {/* Center: nav */}
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-7">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[13px] font-mono text-[#a0aaa1] hover:text-[#f4f6f2] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Products dropdown */}
            <li
              ref={dropdownRef}
              className="relative"
            >
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-haspopup="menu"
              className="text-[13px] font-mono text-[#a0aaa1] hover:text-[#f4f6f2] transition-colors flex items-center gap-1.5"
            >
              Products
              <svg className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-[300px] bg-[#1e241f] border border-[#2a332c] shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
              >
                {products.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between gap-3 px-4 py-3 border-b border-[#222923] last:border-0 hover:bg-[#171c18] transition-colors"
                  >
                    <span className="text-[12.5px] font-mono text-[#e2e3e0]">
                      {product.name}
                    </span>
                    <span className={`badge badge-${product.tone}`}>{product.badge}</span>
                  </Link>
                ))}
                <Link
                  href="/product"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-[12px] font-mono text-[#b8f36b] hover:bg-[#171c18] transition-colors"
                >
                  view full catalog →
                </Link>
              </div>
            )}
            </li>
          </ul>
        </nav>

        {/* Right: status cluster */}
        <div className="flex items-center gap-5">
          <span className="hidden lg:flex items-center gap-2 font-mono text-[11px] text-[#a0aaa1]">
            <span className="w-1.5 h-1.5 bg-[#b8f36b] status-pulse" />
            LAGOS {now} UTC+1
            <span className="text-[#7a847d]">|</span>
            <span className="text-[#4ade80]">SYSTEM NORMAL</span>
          </span>
          <a
            href="https://github.com/Dev-Ashy"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 font-mono text-[12px] text-[#a0aaa1] hover:text-[#f4f6f2] transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            dev-ashy
          </a>
          <Link href="/product" className="btn-primary !py-2 !px-4 text-[12.5px] hidden sm:inline-flex">
            Explore Products
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#a0aaa1] hover:text-[#f4f6f2]"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b0d0c]/95 backdrop-blur-xl border-t border-[#222923]">
          <div className="px-5 py-4 flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-[13px] font-mono text-[#a0aaa1] hover:text-[#f4f6f2] border-b border-[#222923]/60"
            >
              Home
            </Link>
            <Link
              href="/product"
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-[13px] font-mono text-[#a0aaa1] hover:text-[#f4f6f2] border-b border-[#222923]/60"
            >
              Products
            </Link>
            <div className="pl-4 flex flex-col gap-1 border-b border-[#222923]/60 pb-2">
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 flex items-center justify-between gap-3 text-[13px] font-mono text-[#a0aaa1] hover:text-[#f4f6f2]"
                >
                  {product.name}
                  <span className={`badge badge-${product.tone}`}>{product.badge}</span>
                </Link>
              ))}
            </div>
            <Link
              href="/#opensource"
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-[13px] font-mono text-[#a0aaa1] hover:text-[#f4f6f2] border-b border-[#222923]/60"
            >
              Open Source
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="py-2.5 text-[13px] font-mono text-[#a0aaa1] hover:text-[#f4f6f2] border-b border-[#222923]/60"
            >
              Contact
            </Link>
            <Link href="/product" onClick={() => setMenuOpen(false)} className="btn-primary mt-3 text-center text-[13px]">
              Explore Products
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}