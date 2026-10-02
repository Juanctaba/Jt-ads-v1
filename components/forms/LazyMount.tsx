"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Monta los hijos solo cuando el contenedor se acerca al viewport. Se usa para
// el embed de formularios de HighLevel: el iframe trae ~1,5 MB de JS de
// terceros (incluido Turnstile) que no hace falta al pintar la página.
// No sirve loading="lazy" nativo: form_embed.js esconde el iframe fuera de
// pantalla (left:-9999px) hasta que este avisa que cargó, y un iframe lazy
// escondido nunca carga. Aquí iframe y script se montan juntos, ya visibles.
export default function LazyMount({
  children,
  minHeight,
  rootMargin = "800px 0px",
}: {
  children: ReactNode;
  minHeight: number;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={visible ? undefined : { minHeight }}>
      {visible ? children : null}
    </div>
  );
}
