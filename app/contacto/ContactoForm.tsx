"use client";

import Script from "next/script";

export default function ContactoForm() {
  return (
    <div style={{ width: "100%", height: "455px" }}>
      <iframe
        src="https://api.jtads.com/widget/form/XDcMt9HwgIQDJIpP8AIP"
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "10px" }}
        id="inline-XDcMt9HwgIQDJIpP8AIP"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form LP JT Ads Nuevo Contacto"
        data-height="455"
        data-layout-iframe-id="inline-XDcMt9HwgIQDJIpP8AIP"
        data-form-id="XDcMt9HwgIQDJIpP8AIP"
        title="Form LP JT Ads Nuevo Contacto"
      />
      <Script
        src="https://api.jtads.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
