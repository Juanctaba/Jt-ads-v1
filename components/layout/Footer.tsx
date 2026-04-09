import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <Link href="/" className="inline-flex items-center hover:opacity-80 transition-opacity mb-2">
              <Image
                src="/logo-blue.png"
                alt="JT Ads"
                width={100}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              Paid media para empresas en LATAM + USA
            </p>
            {/* Google Partner Badge */}
            <a
              href="https://www.google.com/partners/agency?id=1978608979"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.gstatic.com/partners/badge/images/2026/PartnerBadgeClickable.svg"
                alt="Google Partner"
                height={60}
                style={{ height: "60px", width: "auto" }}
              />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-[var(--text-secondary)]">
            <Link
              href="https://www.linkedin.com/in/juan-tabares-b1272b58/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              LinkedIn Personal
            </Link>
            <Link
              href="https://www.linkedin.com/company/jtadsllc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              LinkedIn Agencia
            </Link>
            <a
              href="mailto:hola@juantabares.co"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              hola@juantabares.co
            </a>
            <Link href="/contacto" className="hover:text-[var(--text-primary)] transition-colors">
              Contacto
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--bg-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
          <span>© 2026 JT Ads · Ads Consulting & Performance. Todos los derechos reservados.</span>
          <Link href="/politica-de-privacidad" className="hover:text-[var(--text-primary)] transition-colors">
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
