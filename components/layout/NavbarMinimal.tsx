import Link from "next/link";
import Image from "next/image";

export default function NavbarMinimal() {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center">
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/logo-blue.png"
            alt="JT Ads — Ads Consulting & Performance"
            width={120}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>
      </div>
    </header>
  );
}
