import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Top: logo + columnas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Logo + tagline + badge */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center hover:opacity-80 transition-opacity mb-2">
              <Image
                src="/logo-blue.png"
                alt="JT Ads"
                width={200}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              Paid media para empresas en LATAM + USA
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/google-partner-badge.svg"
              alt="Google Partner"
              style={{ height: "60px", width: "auto" }}
            />
          </div>

          {/* Servicios */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#727687] mb-4">
              Servicios
            </p>
            <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
              <li>
                <Link href="/agencia-google-ads-latam" className="hover:text-[var(--text-primary)] transition-colors">
                  Google Ads LATAM
                </Link>
              </li>
              <li>
                <Link href="/diagnostico-en-vivo" className="hover:text-[var(--text-primary)] transition-colors">
                  Diagnóstico Gratuito
                </Link>
              </li>
              <li>
                <Link href="/casos-de-exito" className="hover:text-[var(--text-primary)] transition-colors">
                  Casos de Éxito
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[var(--text-primary)] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Mercados */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#727687] mb-4">
              Mercados
            </p>
            <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
              <li>
                <Link href="/agencia-google-ads-mexico" className="hover:text-[var(--text-primary)] transition-colors">
                  Google Ads México
                </Link>
              </li>
              <li>
                <Link href="/agencia-google-ads-colombia" className="hover:text-[var(--text-primary)] transition-colors">
                  Google Ads Colombia
                </Link>
              </li>
              <li>
                <Link href="/agencia-google-ads-chile" className="hover:text-[var(--text-primary)] transition-colors">
                  Google Ads Chile
                </Link>
              </li>
              <li>
                <Link href="/agencia-google-ads-argentina" className="hover:text-[var(--text-primary)] transition-colors">
                  Google Ads Argentina
                </Link>
              </li>
              <li>
                <Link href="/agencia-google-ads-usa" className="hover:text-[var(--text-primary)] transition-colors">
                  Google Ads USA
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#727687] mb-4">
              Contacto
            </p>
            <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
              <li>
                <a
                  href="mailto:hola@juantabares.co"
                  className="hover:text-[var(--text-primary)] transition-colors"
                >
                  hola@juantabares.co
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/juan-tabares-b1272b58/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors"
                >
                  LinkedIn Personal
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/jtadsllc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors"
                >
                  LinkedIn Agencia
                </a>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[var(--text-primary)] transition-colors">
                  Formulario de contacto
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[var(--bg-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
          <span>© 2026 JT Ads · Ads Consulting & Performance. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <Link href="/politica-de-privacidad" className="hover:text-[var(--text-primary)] transition-colors">
              Política de privacidad
            </Link>
            <Link href="/pagos" className="hover:text-[var(--text-primary)] transition-colors">
              Pagos
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
