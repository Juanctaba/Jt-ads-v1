"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
}

export default function FaqSection({ items, title = "Preguntas frecuentes" }: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10">{title}</h2>
      <div className="flex flex-col gap-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="border border-[var(--bg-border)] rounded-xl bg-[var(--bg-surface)] overflow-hidden"
          >
            <button
              className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="font-medium text-[var(--text-primary)] text-sm md:text-base leading-relaxed">
                {item.q}
              </span>
              <span className="flex-shrink-0 mt-0.5 text-[var(--text-muted)] transition-transform duration-200"
                style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>

            {open === i && (
              <div className="px-6 pb-5">
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
