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
    "Diagnóstico en vivo de tu cuenta de Google Ads, Meta y LinkedIn. Equipo senior, tracking server-side y CPL real. Sin contratos largos.",
  openGraph: {
    images: ["/opengraph-image"],
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
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W3MS2WPT');`,
          }}
        />
        {/* Medicion: un solo listener delegado (guardado con una bandera global
            para no duplicarse) que empuja affiliate_click en enlaces de afiliado
            de HighLevel (fp_ref) y generate_lead en CTAs al diagnostico. Las
            etiquetas que escuchan estos eventos viven en GTM. */}
        <Script
          id="jtads-click-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){if(window.__jtadsClickTracking)return;window.__jtadsClickTracking=true;window.dataLayer=window.dataLayer||[];document.addEventListener('click',function(e){var a=e.target&&e.target.closest?e.target.closest('a[href]'):null;if(!a)return;var u;try{u=new URL(a.getAttribute('href'),location.href)}catch(x){return}var pp=location.pathname;if(/(^|\\.)gohighlevel\\.com$|(^|\\.)highlevel\\.com$/i.test(u.hostname)&&u.searchParams.has('fp_ref')){window.dataLayer.push({event:'affiliate_click',link_url:u.href,page_path:pp});return}if((u.hostname===location.hostname||/(^|\\.)jtads\\.com$/i.test(u.hostname))&&/^\\/(diagnostico-en-vivo|diagnostico-operacion)\\/?$/.test(u.pathname)){window.dataLayer.push({event:'generate_lead',form:'diagnostico',page_path:pp})}},true)})();`,
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
