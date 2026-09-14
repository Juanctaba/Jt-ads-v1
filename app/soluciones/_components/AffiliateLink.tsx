import type { ReactNode } from "react";
import { AFFILIATES, type AffiliateSlug } from "@/lib/affiliates";

// Único punto de salida de enlaces de afiliado. rel="sponsored nofollow" es
// política de enlaces de Google: un afiliado sin él se trata como esquema de
// enlaces. Centralizarlo aquí evita que una página lo olvide.
export default function AffiliateLink({
  slug,
  children,
  className,
  dataCta,
}: {
  slug: AffiliateSlug;
  children: ReactNode;
  className?: string;
  dataCta?: string;
}) {
  return (
    <a
      href={AFFILIATES[slug].url}
      target="_blank"
      rel="sponsored nofollow noopener"
      data-cta={dataCta ?? `afiliado-${slug}`}
      className={className}
    >
      {children}
    </a>
  );
}
