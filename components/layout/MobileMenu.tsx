"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/agencia-google-ads-latam", label: "Google Ads", sub: true },
  { href: "/agencia-meta-ads-latam", label: "Meta Ads", sub: true },
  { href: "/agencia-linkedin-ads-latam", label: "LinkedIn Ads", sub: true },
  { href: "/casos-de-exito", label: "Casos", sub: false },
  { href: "/blog", label: "Blog", sub: false },
  { href: "/blog/recursos", label: "Recursos", sub: false },
  { href: "/contacto", label: "Contacto", sub: false },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button — only visible on mobile */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-md hover:bg-gray-100 transition-colors"
      >
        <span
          className={`block h-[2px] w-5 bg-[#1c1b1b] rounded-full transition-all duration-200 ${
            open ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-5 bg-[#1c1b1b] rounded-full transition-all duration-200 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-[2px] w-5 bg-[#1c1b1b] rounded-full transition-all duration-200 ${
            open ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {/* Servicios label */}
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#727687] px-3 pt-2 pb-1">
              Servicios
            </p>
            {links.filter(l => l.sub).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[#1c1b1b] text-sm font-medium py-2.5 px-3 pl-5 rounded-lg hover:bg-[#f6f3f2] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-2" />
            {links.filter(l => !l.sub).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[#1c1b1b] text-sm font-medium py-3 px-3 rounded-lg hover:bg-[#f6f3f2] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
