import type { Metadata } from "next";
import NavbarMinimal from "@/components/layout/NavbarMinimal";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pago de Factura — JT Ads",
  description: "Portal de pago seguro para clientes de JT Ads. Paga tu factura con tarjeta de crédito o débito.",
  robots: "noindex",
};

export default function PagosPage() {
  return (
    <>
      <NavbarMinimal />
      <main className="flex-1">
        <section className="py-20 px-6 bg-white min-h-[60vh]">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
                Portal de pagos
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                Pago de factura
              </h1>
              <p className="text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto">
                Paga tu factura de forma segura con tarjeta de crédito o débito.
                Si tienes dudas sobre el monto o referencia, escríbenos a{" "}
                <a href="mailto:hola@juantabares.co" className="text-[var(--accent)] hover:underline">
                  hola@juantabares.co
                </a>
              </p>
            </div>

            {/* Stripe Buy Button */}
            <div className="flex justify-center">
              {/* @ts-expect-error Stripe web component */}
              <stripe-buy-button
                buy-button-id="buy_btn_1OFHh3IyFAuE26pVDzFjis0t"
                publishable-key="pk_live_51O4o0OIyFAuE26pVtBatSHXiFVkFJrv6rPQ6GfoAmiIpkQN5kRoHOjZeCb2XXfZNFLW6wFTMjyztaHKI7QJDCZYc00PuS2HAGY"
              />
            </div>

            <div className="mt-10 flex items-center justify-center gap-2 text-xs text-[var(--text-muted)]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Pago procesado de forma segura por Stripe. JT Ads no almacena datos de tu tarjeta.
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Script
        src="https://js.stripe.com/v3/buy-button.js"
        strategy="afterInteractive"
      />
    </>
  );
}
