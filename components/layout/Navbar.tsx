import Link from "next/link";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--bg-border)] bg-[var(--bg-base)]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/logo-white.png"
            alt="JT Ads — Ads Consulting & Performance"
            width={120}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--text-secondary)]">
          <Link href="/agencia-google-ads-latam" className="hover:text-white transition-colors">
            Google Ads
          </Link>
          <Link href="/casos-de-exito" className="hover:text-white transition-colors">
            Casos
          </Link>
          <Link href="/contacto" className="hover:text-white transition-colors">
            Contacto
          </Link>
        </nav>

        <CTAButton href="/diagnostico-en-vivo" size="sm">
          Reservar Sesión
        </CTAButton>
      </div>
    </header>
  );
}
