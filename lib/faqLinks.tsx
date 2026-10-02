import type { ReactElement } from "react";

// FAQ visible + FAQPage JSON-LD con el mismo texto. `links` convierte en enlace
// un fragmento literal de la respuesta sin cambiar el texto (el JSON-LD usa `a`
// tal cual). Los items con `pending: true` esperan un dato de Juan: se filtran
// con `publishedFaq` y no se muestran ni van al JSON-LD.
export type FaqItem = {
  q: string;
  a: string;
  links?: { text: string; href: string }[];
  pending?: boolean;
};

export function publishedFaq<T extends FaqItem>(items: T[]): T[] {
  return items.filter((f) => !f.pending);
}

export function withLinks(
  text: string,
  links: FaqItem["links"] = [],
  className = "text-[#0066ff] font-semibold hover:underline",
) {
  let parts: (string | ReactElement)[] = [text];
  links.forEach((l, li) => {
    parts = parts.flatMap((part) => {
      if (typeof part !== "string" || !part.includes(l.text)) return [part];
      const [before, ...rest] = part.split(l.text);
      return [
        before,
        <a key={`${li}-${l.href}`} href={l.href} className={className}>
          {l.text}
        </a>,
        rest.join(l.text),
      ];
    });
  });
  return parts;
}
