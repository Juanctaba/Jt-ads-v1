"use client";

import { useState } from "react";

export default function ContactoForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "contacto-puntual" }),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <div className="text-center py-8">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-bold text-[#1c1b1b]">Mensaje recibido</p>
        <p className="text-sm text-[#727687] mt-1">Respondemos en menos de 24h hábiles.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-[#727687] mb-2">
          Nombre
        </label>
        <input
          required
          type="text"
          placeholder="Tu nombre completo"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-[#e5e2e1] border-none rounded-lg p-4 text-sm text-[#1c1b1b] placeholder-[#727687]/60 focus:outline-none focus:ring-2 focus:ring-[#0050cb]/20 transition-all"
        />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-[#727687] mb-2">
          Email Profesional
        </label>
        <input
          required
          type="email"
          placeholder="nombre@empresa.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-[#e5e2e1] border-none rounded-lg p-4 text-sm text-[#1c1b1b] placeholder-[#727687]/60 focus:outline-none focus:ring-2 focus:ring-[#0050cb]/20 transition-all"
        />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-[#727687] mb-2">
          Pregunta o Mensaje
        </label>
        <textarea
          required
          rows={4}
          placeholder="¿En qué podemos ayudarte?"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full bg-[#e5e2e1] border-none rounded-lg p-4 text-sm text-[#1c1b1b] placeholder-[#727687]/60 focus:outline-none focus:ring-2 focus:ring-[#0050cb]/20 transition-all resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 border-2 border-[#0050cb] text-[#0050cb] font-bold rounded-lg hover:bg-[#0050cb] hover:text-white transition-all uppercase tracking-widest text-sm disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar pregunta"}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-xs text-center">Error al enviar. Intenta de nuevo.</p>
      )}
    </form>
  );
}
