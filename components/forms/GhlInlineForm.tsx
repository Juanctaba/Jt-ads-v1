"use client";

import Script from "next/script";

type Props = {
  formId: string;
  formName: string;
  height?: number;
};

// Embed inline de un formulario de GoHighLevel servido desde api.jtads.com.
// Es la misma integración que app/diagnostico-en-vivo/AuditoriaForm.tsx, con el
// ID parametrizado para que cada embudo use su propio formulario y los leads
// entren etiquetados por origen en GHL. AuditoriaForm no se toca.
export default function GhlInlineForm({ formId, formName, height = 814 }: Props) {
  const iframeId = `inline-${formId}`;
  return (
    <div className="w-full overflow-hidden">
      <iframe
        src={`https://api.jtads.com/widget/form/${formId}`}
        style={{ width: "100%", height: `${height}px`, border: "none", borderRadius: "10px", display: "block" }}
        id={iframeId}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-height={String(height)}
        data-layout-iframe-id={iframeId}
        data-form-id={formId}
        title={formName}
        scrolling="no"
      />
      <Script src="https://api.jtads.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
