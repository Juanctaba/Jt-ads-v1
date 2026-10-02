"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Monta los hijos solo cuando el contenedor se acerca al viewport. Se usa para
// el embed de formularios de HighLevel: el iframe trae ~1,5 MB de JS de
// terceros (incluido Turnstile) que no hace falta al pintar la página.
// No sirve loading="lazy" nativo: form_embed.js esconde el iframe fuera de
// pantalla (left:-9999px) hasta que este avisa que cargó, y un iframe lazy
// escondido nunca carga. Aquí iframe y script se montan juntos, ya visibles.
//
// waitForInteraction: además de estar cerca del viewport, espera la primera
// interacción del usuario (scroll, rueda, toque, mouse o teclado). Sirve cuando
// el formulario queda justo debajo del hero (p. ej. /diagnostico-en-vivo): sin
// esto se montaría en la carga inicial y su JS bloquea el hilo principal (TBT).
// Visualmente no cambia nada: el placeholder conserva la misma altura.
const INTERACTION_EVENTS = ["scroll", "wheel", "touchstart", "pointerdown", "pointermove", "keydown"] as const;

export default function LazyMount({
  children,
  minHeight,
  rootMargin = "800px 0px",
  waitForInteraction = false,
}: {
  children: ReactNode;
  minHeight: number;
  rootMargin?: string;
  waitForInteraction?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const [interacted, setInteracted] = useState(!waitForInteraction);
  const visible = near && interacted;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    if (interacted) return;
    // Llegada con ancla al formulario (#solicitar…): montar sin esperar.
    if (window.location.hash) {
      setInteracted(true);
      return;
    }
    const onInteract = () => setInteracted(true);
    const opts: AddEventListenerOptions = { once: true, passive: true, capture: true };
    INTERACTION_EVENTS.forEach((ev) => window.addEventListener(ev, onInteract, opts));
    window.addEventListener("hashchange", onInteract, opts);
    return () => {
      INTERACTION_EVENTS.forEach((ev) => window.removeEventListener(ev, onInteract, opts));
      window.removeEventListener("hashchange", onInteract, opts);
    };
  }, [interacted]);

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  );
}
