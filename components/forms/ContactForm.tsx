"use client";

import { useState } from "react";
import { FormField, TextInput, TextArea } from "./FormField";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", question: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, formType: "contact" }),
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
      <div
        className="rounded-xl p-8 text-center"
        style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.2)" }}
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: "rgba(16,185,129,0.1)" }}
        >
          <svg className="w-6 h-6" style={{ color: "var(--green)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
          Mensaje recibido
        </h3>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Respondemos en menos de 4 horas hábiles. Sin ventas, sin presión.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
      style={{ background: "var(--bg-surface)", border: "1px solid var(--bg-border)", borderRadius: "0.75rem", padding: "1.5rem" }}
    >
      <FormField label="Nombre" required>
        <TextInput
          type="text"
          placeholder="Tu nombre"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
      </FormField>

      <FormField label="Email" required>
        <TextInput
          type="email"
          placeholder="tu@email.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
      </FormField>

      <FormField label="¿Cuál es tu pregunta o situación?" required>
        <TextArea
          rows={4}
          placeholder='Ej: "Llevamos 6 meses con Meta Ads y el CPL no baja. ¿Por dónde empiezo a revisar?" / "¿Tiene sentido invertir en LinkedIn si vendo a empresas medianas en México?"'
          value={form.question}
          onChange={(e) => setForm({ ...form, question: e.target.value })}
          required
        />
      </FormField>

      {status === "error" && (
        <p
          className="text-sm rounded-lg px-4 py-3"
          style={{ color: "var(--red)", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.15)" }}
        >
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full font-semibold py-3 rounded-lg transition-colors text-sm"
        style={{
          background: status === "loading" ? "var(--bg-border)" : "var(--accent)",
          color: "white",
          cursor: status === "loading" ? "not-allowed" : "pointer",
        }}
      >
        {status === "loading" ? "Enviando..." : "Enviar pregunta"}
      </button>

      <p className="text-xs text-center" style={{ color: "var(--text-muted)" }}>
        Respondemos en menos de 4 horas hábiles. Sin ventas, sin presión.
      </p>
    </form>
  );
}
