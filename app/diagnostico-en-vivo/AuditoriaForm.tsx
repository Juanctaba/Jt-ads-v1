"use client";

import { useState } from "react";

const platforms = ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads"];
const budgets = ["$1k - $5k", "$5k - $20k", "$20k - $50k", "$50k+"];

export default function AuditoriaForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "$5k - $20k",
    problem: "",
  });
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  const toggle = (p: string) =>
    setSelected((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          platforms: selected.join(", "),
          source: "diagnostico-en-vivo",
        }),
      });
      setStatus(res.ok ? "ok" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "ok") {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-bold text-[#1c1b1b] text-xl mb-2">¡Solicitud recibida!</h3>
        <p className="text-[#727687] text-sm">Te contactamos en menos de 4 horas hábiles para agendar tu sesión.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-[11px] font-bold text-[#727687] uppercase tracking-wider mb-1">
          Nombre Completo
        </label>
        <input
          required
          type="text"
          placeholder="Juan Pérez"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-[#e5e2e1] border-none rounded-lg px-4 py-3 text-sm text-[#1c1b1b] placeholder-[#727687]/60 focus:outline-none focus:ring-2 focus:ring-[#0050cb]/30 transition-all"
        />
      </div>

      <div>
        <label className="block text-[11px] font-bold text-[#727687] uppercase tracking-wider mb-1">
          Email Corporativo
        </label>
        <input
          required
          type="email"
          placeholder="juan@empresa.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-[#e5e2e1] border-none rounded-lg px-4 py-3 text-sm text-[#1c1b1b] placeholder-[#727687]/60 focus:outline-none focus:ring-2 focus:ring-[#0050cb]/30 transition-all"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold text-[#727687] uppercase tracking-wider mb-1">
            Empresa
          </label>
          <input
            type="text"
            placeholder="Marketing SA"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full bg-[#e5e2e1] border-none rounded-lg px-4 py-3 text-sm text-[#1c1b1b] placeholder-[#727687]/60 focus:outline-none focus:ring-2 focus:ring-[#0050cb]/30 transition-all"
          />
        </div>
        <div>
          <label className="block text-[11px] font-bold text-[#727687] uppercase tracking-wider mb-1">
            Inversión Mensual
          </label>
          <select
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
            className="w-full bg-[#e5e2e1] border-none rounded-lg px-4 py-3 text-sm text-[#1c1b1b] focus:outline-none focus:ring-2 focus:ring-[#0050cb]/30 transition-all"
          >
            {budgets.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-bold text-[#727687] uppercase tracking-wider mb-2">
          Plataformas a auditar
        </label>
        <div className="grid grid-cols-2 gap-2">
          {platforms.map((p) => (
            <label
              key={p}
              className="flex items-center gap-2 p-3 bg-[#fcf9f8] rounded-lg cursor-pointer hover:bg-[#f0edec] transition-colors"
            >
              <input
                type="checkbox"
                checked={selected.includes(p)}
                onChange={() => toggle(p)}
                className="rounded text-[#0050cb] focus:ring-[#0050cb] border-[#c2c6d8]"
              />
              <span className="text-xs font-medium text-[#1c1b1b]">{p}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#0066ff] text-white font-bold py-4 rounded-lg hover:opacity-90 active:scale-95 transition-all mt-2 flex items-center justify-center gap-2 disabled:opacity-60 uppercase tracking-wide text-sm"
      >
        {status === "sending" ? "Enviando..." : "Sesión de Diagnóstico Gratuito →"}
      </button>

      {status === "error" && (
        <p className="text-red-500 text-xs text-center">Error al enviar. Intenta de nuevo.</p>
      )}

      <p className="text-[10px] text-center text-[#727687] uppercase tracking-tighter">
        No requerimos acceso a contraseñas. Proceso 100% seguro.
      </p>
    </form>
  );
}
