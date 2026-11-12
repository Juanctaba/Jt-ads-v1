# GTM-W3MS2WPT v17 (SIN PUBLICAR)

`gtm-W3MS2WPT-v17-select-cta-SIN-PUBLICAR.json` es un archivo de importación de GTM (exportFormatVersion 2). **No se importa ni se publica solo**: lo hace una persona con acceso al contenedor, con el OK de Juan.

Contenido (todo con prefijo/sufijo `v17` para no chocar con nombres existentes):
- Variables de capa de datos: `cta_id`, `cta_destino`, `link_url`, `page_path`, `form_id`, `event_id`, y una tabla de búsqueda `LUT v17 - form por form_id` (ExDq9… → diagnostico-en-vivo, azNkD… → diagnostico-operacion, D4pmg… → contacto).
- Activadores: evento personalizado `select_cta` y evento personalizado `jtads_form_success`.
- Etiquetas GA4 (`G-CCJX8R2MC9`): `select_cta` (cta_id, cta_destino, link_url, page_path) y `generate_lead` por envío de formulario (form_id, form, page_path, lead_source=form_submit, event_id).

## Cómo aplicarlo (ver el orden completo en el PR)
1. Admin → Importar contenedor → archivo → espacio de trabajo nuevo → **Combinar** (no sobrescribir).
2. **Paso manual obligatorio:** en ese espacio de trabajo, pausar la etiqueta GA4 existente que envía `generate_lead` por clic (tag_id 18, activador "evento personalizado generate_lead"). La exportación pública no trae sus nombres, por eso no se puede incluir en el JSON.
3. Vista previa: un clic a `/diagnostico-en-vivo` no dispara `generate_lead`; un envío de prueba real dispara `jtads_form_success` y la etiqueta nueva.
4. Publicar como versión 17 solo con OK de Juan. Rollback: volver a la versión 16.
