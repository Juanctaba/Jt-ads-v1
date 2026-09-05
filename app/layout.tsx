import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jtads.com"),
  title: "JT Ads — Paid Media para Empresas en LATAM",
  description:
    "Diagnóstico en vivo de tu cuenta de Google Ads, Meta y LinkedIn. Equipo senior con experiencia en $500k+/mes. Sin contratos largos.",
  openGraph: {
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full`}>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W3MS2WPT');`,
          }}
        />
        {/* External tracking. Se sirve desde el layout y no desde GTM a
            proposito: el script se localiza a si mismo con
            document.querySelector('script[src*="external-tracking"]') y lee
            data-tracking-id de ese elemento. GTM inyectaba el tag solo con el
            src, sin los data-*, asi que abortaba con "Required data-tracking-id
            attribute not found" y no registraba nada. beforeInteractive lo
            emite en el HTML del servidor con el atributo intacto. */}
        <Script
          id="external-tracking"
          strategy="beforeInteractive"
          src="https://api.jtads.com/js/external-tracking.js"
          data-tracking-id="tk_939bfcd8bdb64c58aeedc898bc057403"
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W3MS2WPT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
