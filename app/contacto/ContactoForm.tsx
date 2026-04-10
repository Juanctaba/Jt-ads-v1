"use client";

import Script from "next/script";

export default function ContactoForm() {
  return (
    <div style={{ width: "100%", height: "602px" }}>
      <iframe
        src="https://api.jtads.com/widget/form/D4pmggg9CUScHXgsEcpg"
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "10px" }}
        id="inline-D4pmggg9CUScHXgsEcpg"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form LP JT Ads Nuevo Contacto v2"
        data-height="602"
        data-layout-iframe-id="inline-D4pmggg9CUScHXgsEcpg"
        data-form-id="D4pmggg9CUScHXgsEcpg"
        title="Form LP JT Ads Nuevo Contacto v2"
      />
      <Script
        src="https://api.jtads.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
