# JT Ads — Guía de Diseño de Marca

Documento de referencia para aplicar el sistema visual de JT Ads a presentaciones, propuestas, entregables, dashboards, documentos comerciales y cualquier pieza de comunicación.

---

## 1. Esencia de marca

**Posicionamiento:** Agencia de performance marketing para empresas en LATAM que exigen resultados reales.

**Tono visual:** Minimalista, profesional, alto contraste. Cero adornos. Cada elemento justifica su lugar.

**Principios de diseño:**
- Honestidad visual: los datos hablan, no el decorado.
- Espacio en blanco como herramienta, no como relleno.
- Contraste fuerte entre secciones claras (trabajo, claridad) y oscuras (autoridad, foco).
- Tipografía con jerarquía marcada y letter-spacing negativo en titulares.

---

## 2. Paleta de colores

### Marca

| Token | HEX | Uso |
|---|---|---|
| `--accent` | `#0066ff` | Color primario. CTAs, links, énfasis, datos clave. |
| `--accent-hover` | `#1d4ed8` | Hover de botones y links primarios. |
| `--accent-light` | `#3b82f6` | Acentos secundarios, gradientes. |
| `--accent-faint` | `rgba(0, 102, 255, 0.08)` | Fondos sutiles de badges/chips con texto azul. |

### Neutros

| Token | HEX | Uso |
|---|---|---|
| `--bg-base` | `#ffffff` | Fondo principal de secciones claras. |
| `--bg-surface` | `#f8fafc` | Tarjetas sobre fondo blanco, mockups. |
| `--bg-surface-2` | `#f1f5f9` | Superficies de segundo nivel. |
| `--bg-dark` | `#0a0a0a` | Secciones oscuras de autoridad/contraste. |
| `--bg-border` | `#e5e7eb` | Bordes estándar de tarjetas. |
| `--bg-border-light` | `#f3f4f6` | Bordes muy sutiles. |

### Texto

| Token | HEX | Uso |
|---|---|---|
| `--text-primary` | `#1a1a1a` | Titulares y texto principal sobre claro. |
| `--text-secondary` | `#4b5563` | Párrafos, descripciones. |
| `--text-muted` | `#9ca3af` | Microcopy, captions, footnotes. |
| `--text-on-dark` | `#ffffff` | Titulares sobre fondo `#0a0a0a`. |
| `--text-on-dark-2` | `#9ca3af` | Párrafos sobre fondo `#0a0a0a`. |

### Estado

| Token | HEX | Uso |
|---|---|---|
| `--green` | `#22c55e` | Éxito, mejora, ✅. |
| `--red` | `#ef4444` | Error, problema, alerta crítica. |
| `--orange` | `#f97316` | Advertencia. |
| `--yellow` | `#facc15` | Caución, pendiente. |

### Reglas de uso del color

- El azul `#0066ff` se reserva para acción y énfasis. Nunca como fondo de bloques grandes.
- Las secciones oscuras (`#0a0a0a`) se usan para crear pausas visuales y enmarcar mensajes de autoridad ("Así trabajamos diferente").
- Verde solo para deltas positivos o checks. Rojo solo para problemas, nunca decorativo.
- Badges con texto azul → fondo `--accent-faint` + borde `rgba(0,102,255,0.2)`.

---

## 3. Tipografía

### Familias

- **Primaria — Inter** (Google Fonts, subsets `latin`, `latin-ext`). Todo el sistema.
- **Secundaria — Manrope** (solo para titulares de secciones premium como "Trayectoria/Marcas líderes").
- **Fallback:** `system-ui, sans-serif`.

### Escala

| Nivel | Tamaño | Peso | Letter-spacing | Uso |
|---|---|---|---|---|
| H1 | `text-4xl md:text-5xl lg:text-6xl` (36-60px) | `font-bold` (700) | `-0.02em` | Hero principal |
| H2 | `text-3xl md:text-4xl` (30-36px) | `font-bold` (700) | `-0.02em` | Títulos de sección |
| H3 | `text-xl` / `text-2xl` (20-24px) | `font-semibold` (600) | `-0.02em` | Subtítulos, tarjetas |
| Body L | `text-lg md:text-xl` (18-20px) | `font-normal` (400) | normal | Subhead del hero |
| Body | `text-base` (16px) | `font-normal` (400) | normal | Párrafos |
| Body S | `text-sm` (14px) | `font-normal` (400) | normal | Descripciones de tarjetas |
| Caption | `text-xs` (12px) | `font-semibold` o `medium` | `tracking-widest` cuando es uppercase | Labels, eyebrows, badges |

### Reglas tipográficas

- Titulares siempre con `letter-spacing: -0.02em` y `leading-tight`.
- Eyebrows/labels en uppercase con `tracking-[0.2em]` y color `--text-muted` o `--accent`.
- Párrafos con `leading-relaxed` (1.625).
- Énfasis en frases clave: aplicar `text-[var(--accent)]` a un fragmento del titular (no a todo).
- Nunca uses cursiva decorativa. La itálica se reserva para citas textuales.

---

## 4. Layout y espaciado

- **Ancho máximo de contenido:** `max-w-6xl` (1152px) centrado con `mx-auto`.
- **Padding lateral móvil:** `px-6` (24px).
- **Padding vertical de secciones:** `py-20` (80px) estándar; `py-24` para CTA destacados; `py-16` para barras de credibilidad.
- **Grids:** `grid-cols-1 md:grid-cols-3` para value props; `gap-6` a `gap-10` según jerarquía.
- **Alternancia de secciones:** blanco → gris claro (`bg-gray-50`) → blanco → oscuro (`#0a0a0a`). Crea ritmo visual.

---

## 5. Componentes

### Botones (CTA)

Base: `inline-flex items-center justify-center font-semibold rounded-[8px] transition-all duration-200`.

**Primary:**
- BG `#0066ff` → hover `#1d4ed8`
- Texto blanco
- `shadow-sm` → hover `shadow-md` con tinte azul

**Secondary:**
- Borde `gray-200` sobre fondo blanco
- Texto `--text-secondary` → hover `--text-primary`

**Ghost:**
- Texto `--accent`, underline en hover

**Tamaños:** `sm` (px-4 py-2 text-sm) · `md` (px-6 py-3 text-base) · `lg` (px-8 py-4 text-lg).

### Tarjetas

- Borde `border border-gray-100`, radio `rounded-2xl` (16px) o `rounded-3xl` (24px) para hero/CTA.
- Padding interno `p-6` a `p-12` según importancia.
- Hover sutil: `hover:border-[var(--accent)]/20 hover:bg-blue-50/30`.
- Sombras solo en mockups o CTA destacados (`shadow-2xl`).

### Badges / chips

- Pill (`rounded-full`), `px-4 py-1.5`, `text-sm font-medium`.
- Variante "disponibilidad": dot verde + texto + fondo `--accent-faint` + borde azul al 20%.
- Variante "delta": fondo `bg-green-50` o `bg-red-50`, texto `text-xs font-semibold`.

### Iconografía

- Stroke-based SVG (Heroicons style), `stroke-width: 2`, tamaño `w-5 h-5`.
- Contenedor cuadrado `w-10 h-10 rounded-lg` con fondo de color suave (`bg-red-50`, `bg-green-50`, `bg-blue-50`).
- Banderas de país como emojis nativos junto al nombre.

### Mockups de datos

- Tarjeta blanca con borde gris claro, padding `p-4`.
- Métrica grande (`text-2xl font-bold`) + label pequeño (`text-xs text-gray-400`).
- Delta a la derecha con flecha (↑/↓) en verde/rojo.
- Sparkline SVG con `stroke="#0066ff"` y gradiente de área al 12% → 0%.
- Barras de progreso `h-2 bg-gray-100 rounded-full` con relleno `bg-[var(--accent)]`.

### Listas con check

- Círculo `w-5 h-5 rounded-full bg-green-50` + check verde `stroke-width: 2.5`.
- Texto en `text-sm text-[var(--text-secondary)]`.
- Separación vertical `space-y-4`.

---

## 6. Logo

| Versión | Archivo | Uso |
|---|---|---|
| Azul | `/logo-blue.png` | Principal, sobre fondos claros |
| Negro | `/logo-black.png` | Documentos impresos, blanco y negro |
| Blanco | `/logo-white.png` | Sobre fondos oscuros (`#0a0a0a`) |

**Reglas:**
- Altura mínima en pantalla: 32px. En navbar: 56px (`h-14`).
- Padding de respeto: equivalente a la altura del logo dividida en 4 por cada lado.
- No deformar, no recolorear, no aplicar sombras ni outlines.

---

## 7. Tono y voz (para texto en piezas)

- **Directo, sin rodeos.** "El dashboard dice que va bien. El equipo de ventas dice que los leads son pésimos."
- **Datos concretos.** "$500k+/mes gestionados", "Respuesta en <4 horas hábiles", no genéricos.
- **Antagonismo honesto.** Nombra el problema (agencias que optimizan para renovar contrato, tracking mal configurado).
- **Sin jerga vacía.** Nunca "sinergia", "transformación digital", "innovación disruptiva".
- **Promesa medible.** Toda afirmación debe poderse verificar.

---

## 8. Aplicación a entregables

### Presentaciones (Keynote/PPT/HTML slides)
- Slides claras alternadas con 1-2 slides oscuras por sección de autoridad.
- Una idea por slide. Titular en H1, soporte mínimo.
- Datos siempre con delta y contexto temporal ("últimos 30 días").

### Propuestas comerciales
- Portada: logo blue sobre blanco + título H1 + nombre del cliente.
- Secciones con eyebrow azul uppercase + H2 negro.
- Precios siempre con moneda explícita (USD/COP) y entregables tangibles.

### Reportes de performance
- Header con periodo, ad spend, KPI principal grande.
- Cards de métricas con sparkline azul y delta vs periodo anterior.
- Sección "qué pasó" en prosa corta, no bullets de plataforma.

### Documentos (Docs/PDFs)
- Inter 11pt body, 18pt H2, 28pt H1.
- Márgenes generosos (2.5cm).
- Azul `#0066ff` solo para links y énfasis puntual.

---

## 9. Snippets listos para copiar

### CSS variables raíz
```css
:root {
  --accent: #0066ff;
  --accent-hover: #1d4ed8;
  --bg-dark: #0a0a0a;
  --text-primary: #1a1a1a;
  --text-secondary: #4b5563;
  --text-muted: #9ca3af;
}
```

### Botón primario (HTML inline)
```html
<a href="#" style="background:#0066ff;color:#fff;padding:16px 32px;border-radius:8px;font-weight:600;font-family:Inter,sans-serif;text-decoration:none;display:inline-block;">
  Reservar Sesión
</a>
```

### Sección oscura de autoridad
```html
<section style="background:#0a0a0a;color:#fff;padding:80px 24px;text-align:center;">
  <h2 style="font-size:36px;font-weight:700;letter-spacing:-0.02em;">Así trabajamos diferente.</h2>
  <div style="width:80px;height:4px;background:#0066ff;margin:16px auto;border-radius:9999px;"></div>
</section>
```
