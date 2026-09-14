import Link from "next/link";
import type { Crumb } from "@/lib/schema";

// Miga de pan visible. Recibe el mismo array que breadcrumb() en lib/schema.ts,
// así el enlace rastreable y el JSON-LD no pueden divergir.
export default function Breadcrumbs({ items, tone = "dark" }: { items: Crumb[]; tone?: "dark" | "light" }) {
  const base = tone === "dark" ? "text-gray-400" : "text-[#727687]";
  const hover = tone === "dark" ? "hover:text-white" : "hover:text-[#1c1b1b]";
  const current = tone === "dark" ? "text-gray-200" : "text-[#1c1b1b]";

  return (
    <nav aria-label="Breadcrumb" className={`text-xs ${base}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.path || "inicio"} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={current}>
                  {c.name}
                </span>
              ) : (
                <Link href={c.path || "/"} className={`${hover} transition-colors`}>
                  {c.name}
                </Link>
              )}
              {!last && <span aria-hidden="true">›</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
