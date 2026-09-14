"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const services = [
  {
    href: "/agencia-google-ads-latam",
    label: "Google Ads",
    description: "Search, PMax, Display, YouTube",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z" />
      </svg>
    ),
    color: "text-[#0061FF]",
    bg: "bg-blue-50",
  },
  {
    href: "/agencia-meta-ads-latam",
    label: "Meta Ads",
    description: "Facebook, Instagram, Reels",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
    color: "text-[#1877F2]",
    bg: "bg-[#1877F2]/10",
  },
  {
    href: "/agencia-linkedin-ads-latam",
    label: "LinkedIn Ads",
    description: "B2B, SaaS, Enterprise",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "text-[#0A66C2]",
    bg: "bg-[#0A66C2]/10",
  },
  {
    href: "/soluciones",
    label: "Automatización & IA",
    description: "CRM, flujos, agentes conversacionales",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "text-[#6366f1]",
    bg: "bg-[#6366f1]/10",
    divider: true,
  },
  {
    href: "/soluciones/automatizacion-de-procesos",
    label: "Automatización de procesos",
    description: "Flujos, CRM y tareas operativas",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
    color: "text-[#6366f1]",
    bg: "bg-[#6366f1]/10",
  },
  {
    href: "/soluciones/agentes-de-ia",
    label: "Agentes de IA",
    description: "WhatsApp, web y voz 24/7",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM2.25 12c0 4.556 4.03 8.25 9 8.25a9.764 9.764 0 002.555-.337A5.972 5.972 0 0018.75 21a5.969 5.969 0 01-.474-3.041C19.605 16.566 20.25 14.36 20.25 12c0-4.556-4.03-8.25-9-8.25S2.25 7.444 2.25 12z" />
      </svg>
    ),
    color: "text-[#6366f1]",
    bg: "bg-[#6366f1]/10",
  },
  {
    href: "/soluciones/gohighlevel",
    label: "GoHighLevel",
    description: "Guía, precios e implementación",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    color: "text-[#6366f1]",
    bg: "bg-[#6366f1]/10",
  },
];

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors"
        aria-expanded={open}
        aria-haspopup="true"
      >
        Servicios
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-2">
            {services.map((s) => (
              <div key={s.href}>
                {s.divider && <div className="h-px bg-gray-100 mx-2 my-1.5" />}
                <Link
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#f6f3f2] transition-colors group"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${s.bg} ${s.color}`}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1c1b1b] group-hover:text-[#0066ff] transition-colors">
                      {s.label}
                    </p>
                    <p className="text-xs text-[#727687]">{s.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
