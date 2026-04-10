"use client";

import Script from "next/script";

export default function AuditoriaForm() {
  return (
    <div style={{ width: "100%", height: "814px" }}>
      <iframe
        src="https://api.jtads.com/widget/form/ExDq9WBVQ74hXB8YBmkH"
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "10px" }}
        id="inline-ExDq9WBVQ74hXB8YBmkH"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form LP JT Ads Nuevo Diagnostico"
        data-height="814"
        data-layout-iframe-id="inline-ExDq9WBVQ74hXB8YBmkH"
        data-form-id="ExDq9WBVQ74hXB8YBmkH"
        title="Form LP JT Ads Nuevo Diagnostico"
      />
      <Script
        src="https://api.jtads.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
