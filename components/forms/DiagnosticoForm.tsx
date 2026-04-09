"use client";

import { useState } from "react";
import { FormField, TextInput, TextArea, Select } from "./FormField";

const PLATFORMS = [
  "Google Ads",
  "Meta Ads (Facebook / Instagram)",
  "LinkedIn Ads",
  "Otra",
];

export default function DiagnosticoForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    adSpend: "",
    problem: "",
  });
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function togglePlatform(p: string) {
    setPlatforms((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, platforms, formType: "diagnostico" }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Ocurrió un error. Intenta de nuevo.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Error de conexión. Intenta de nuevo.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[var(--bg-surface)] border border-[var(--green)]/30 rounded-xl p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-[var(--green)]/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-[var(--green)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
          Solicitud recibida
        </h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
          Te contactamos en menos de 4 horas hábiles para confirmar tu sesión de diagnóstico.
          Revisamos tu cuenta juntos — en tiempo real.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[var(--bg-surface)] border border-[var(--bg-border)] rounded-xl p-6 md:p-8 flex flex-col gap-5"
    >
      <h2 className="text-lg font-semibold text-[var(--text-primary)]">
        Reserva tu sesión de diagnóstico
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Nombre completo" required>
          <TextInput
            type="text"
            placeholder="Tu nombre"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </FormField>
        <FormField label="Email corporativo" required>
          <TextInput
            type="email"
            placeholder="tu@empresa.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </FormField>
      </div>

      <FormField label="Empresa" required>
        <TextInput
          type="text"
          placeholder="Empresa S.A."
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          required
        />
      </FormField>

      <FormField label="Gasto mensual en ads" required>
        <Select
          value={form.adSpend}
          onChange={(e) => setForm({ ...form, adSpend: e.target.value })}
          required
        >
          <option value="">Selecciona tu rango</option>
          <option value="menos-2k">Menos de $2,000/mes</option>
          <option value="2k-10k">$2,000 – $10,000/mes</option>
          <option value="10k-30k">$10,000 – $30,000/mes</option>
          <option value="mas-30k">Más de $30,000/mes</option>
        </Select>
      </FormField>

      <FormField label="Plataformas activas">
        <div className="flex flex-wrap gap-3 pt-1">
          {PLATFORMS.map((p) => (
            <label
              key={p}
              className={`flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg border text-sm transition-colors ${
                platforms.includes(p)
                  ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--text-primary)]"
                  : "border-[var(--bg-border)] text-[var(--text-secondary)] hover:border-[var(--text-muted)]"
              }`}
            >
              <input
                type="checkbox"
                className="sr-only"
                checked={platforms.includes(p)}
                onChange={() => togglePlatform(p)}
              />
              {p}
            </label>
          ))}
        </div>
      </FormField>

      <FormField label="¿Cuál es tu principal problema con las campañas actuales?">
        <TextArea
          rows={3}
          placeholder='Ej: "El CPL subió pero no sabemos por qué" / "Llevamos 3 meses sin mejorar resultados"'
          value={form.problem}
          onChange={(e) => setForm({ ...form, problem: e.target.value })}
        />
      </FormField>

      {status === "error" && (
        <p className="text-sm text-[var(--red)] bg-[var(--red)]/10 border border-[var(--red)]/20 rounded-lg px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-[8px] transition-colors text-base"
      >
        {status === "loading" ? "Enviando..." : "Reservar mi Sesión de Diagnóstico →"}
      </button>

      <p className="text-xs text-center text-[var(--text-muted)]">
        Sin tarjeta de crédito. Sin contrato. Te contactamos en menos de 4 horas hábiles.
      </p>
    </form>
  );
}
