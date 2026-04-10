import Link from "next/link";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import MobileMenu from "@/components/layout/MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="relative max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/logo-blue.png"
            alt="JT Ads — Ads Consulting & Performance"
            width={160}
            height={64}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--text-secondary)]">
          <Link href="/agencia-google-ads-latam" className="hover:text-[var(--text-primary)] transition-colors">
            Google Ads
          </Link>
          <Link href="/casos-de-exito" className="hover:text-[var(--text-primary)] transition-colors">
            Casos
          </Link>
          <Link href="/contacto" className="hover:text-[var(--text-primary)] transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <CTAButton href="/diagnostico-en-vivo" size="sm">
            Reservar Sesión
          </CTAButton>
        </div>

        {/* Mobile: hamburger + dropdown */}
        <MobileMenu />
      </div>
    </header>
  );
}
