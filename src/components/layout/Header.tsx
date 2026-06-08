"use client";

import { useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "בית" },
  { href: "/about", label: "אודות" },
  { href: "/membership", label: "הצטרפות" },
  { href: "/articles", label: "מאמרים" },
  { href: "/contact", label: "צור קשר" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-black/85 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-dark font-bold text-lg leading-tight hidden sm:block">
              מועצת הג&apos;אז הישראלי (ע&quot;ר)
            </span>
            <span className="text-dark font-bold text-base leading-tight sm:hidden">
              מועצת הג&apos;אז
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-150 border-b-2 ${
                    isActive
                      ? "text-white border-accent"
                      : "text-white/60 border-transparent hover:text-white hover:border-accent/50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/membership"
              className="mr-4 px-4 py-2 bg-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity duration-200"
            >
              הצטרפו עכשיו
            </Link>
            <Link
              href="/donations"
              className="px-4 py-2 border border-accent text-accent text-sm font-semibold hover:bg-accent/10 transition-colors duration-200"
            >
              ידידי המועצה
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "סגור תפריט" : "פתח תפריט"}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-200 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-200 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-200 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-border">
          <nav className="flex flex-col py-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-3 text-base font-medium border-r-4 transition-colors ${
                    isActive
                      ? "text-white border-accent bg-surface"
                      : "text-white/60 border-transparent hover:text-white hover:bg-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="px-6 py-3 flex flex-col gap-2">
              <Link
                href="/membership"
                onClick={() => setIsOpen(false)}
                className="block text-center px-4 py-2 bg-accent text-white font-semibold hover:opacity-90 transition-opacity"
              >
                הצטרפו עכשיו
              </Link>
              <Link
                href="/donations"
                onClick={() => setIsOpen(false)}
                className="block text-center px-4 py-2 border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
              >
                ידידי המועצה
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
