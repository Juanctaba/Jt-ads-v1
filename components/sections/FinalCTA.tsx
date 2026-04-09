import CTAButton from "@/components/ui/CTAButton";

interface FinalCTAProps {
  headline: string;
  subtext?: string;
  microcopy?: string;
}

export default function FinalCTA({
  headline,
  subtext,
  microcopy = "Sin tarjeta de crédito. Sin contrato. Respuesta en menos de 4 horas hábiles.",
}: FinalCTAProps) {
  return (
    <div className="bg-[var(--bg-surface)] border border-[var(--bg-border)] rounded-2xl p-10 md:p-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
        {headline}
      </h2>
      {subtext && (
        <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          {subtext}
        </p>
      )}
      <CTAButton href="/diagnostico-en-vivo" size="lg">
        Reservar Sesión de Diagnóstico →
      </CTAButton>
      <p className="mt-4 text-sm text-[var(--text-muted)]">{microcopy}</p>
    </div>
  );
}
