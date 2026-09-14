// Constructores de JSON-LD para las páginas de la vertical /soluciones.
// Centralizan lo que no puede divergir entre páginas: el @id del proveedor
// (declarado como ProfessionalService en app/page.tsx) y las URLs absolutas
// de los breadcrumbs. Las páginas existentes no se migran a esto.

const SITE = "https://jtads.com";

export type Crumb = { name: string; path: string };

export const absoluteUrl = (path: string) => (path ? `${SITE}${path}` : SITE);

export function breadcrumb(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function faqPage(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function service({
  name,
  serviceType,
  description,
  path,
}: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: absoluteUrl(path),
    inLanguage: "es",
    provider: { "@id": `${SITE}/#organization` },
    areaServed: ["Colombia", "México", "Chile", "Argentina", "Perú", "Estados Unidos"].map((c) => ({
      "@type": "Country",
      name: c,
    })),
  };
}

// JSON.stringify no escapa "<": un "</script>" dentro de un string cerraría la
// etiqueta. Recomendación de node_modules/next/dist/docs/01-app/02-guides/json-ld.md.
export const toJsonLd = (obj: object) => JSON.stringify(obj).replace(/</g, "\\u003c");
