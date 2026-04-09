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
            <p className="text-sm text-[var(--text-muted)]">
              Paid media para empresas en LATAM + USA
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-[var(--text-secondary)]">
            <Link
              href="https://linkedin.com/in/juantabares"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              LinkedIn
            </Link>
            <a
              href="mailto:juan@juantabares.co"
              className="hover:text-[var(--text-primary)] transition-colors"
            >
              juan@juantabares.co
            </a>
            <Link href="/contacto" className="hover:text-[var(--text-primary)] transition-colors">
              Contacto
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--bg-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[var(--text-muted)]">
          <span>© 2026 JT Ads · Ads Consulting & Performance. Todos los derechos reservados.</span>
          <span>Política de privacidad</span>
        </div>
      </div>
    </footer>
  );
}
