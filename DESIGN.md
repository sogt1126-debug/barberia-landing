---
name: Black Label Barber Studio
description: Sistema editorial nocturno con latón dorado para barberías premium; toda conversación aterriza en WhatsApp.
colors:
  ink: "#0b0b0b"
  carbon: "#171717"
  cream: "#f5f2ec"
  gold: "#c6a46c"
  gold-light: "#d8b983"
  whatsapp: "#25d366"
typography:
  display:
    fontFamily: "Bodoni Moda, Georgia, Times New Roman, serif"
    fontWeight: 500
  body:
    fontFamily: "Manrope, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontWeight: 400
  label:
    fontFamily: "Manrope, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    letterSpacing: "0.18em"
rounded:
  md: "6px"
  lg: "8px"
  full: "9999px"
spacing:
  section-y: "80px"
  section-y-md: "112px"
  gutter: "20px"
  gutter-md: "32px"
  card-pad: "28px"
  grid-gap: "20px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.gold-light}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
    typography: "{typography.label}"
  button-outline-hover:
    backgroundColor: "rgba(198, 164, 108, 0.05)"
    textColor: "{colors.gold}"
  card:
    backgroundColor: "rgba(23, 23, 23, 0.6)"
    textColor: "{colors.cream}"
    rounded: "{rounded.lg}"
    padding: "28px"
  card-service:
    backgroundColor: "rgba(23, 23, 23, 0.6)"
    textColor: "{colors.cream}"
    rounded: "{rounded.lg}"
    padding: "24px"
  gallery-tile:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.lg}"
---

# Design System: Black Label Barber Studio

## Overview

**Creative North Star: "Edición de Medianoche"**

La barbería vista como una edición limitada de revista nocturna: fondo de tinta profunda (#0B0B0B), titulares esculturales de Bodoni Moda y un hilo de latón que subraya solo los momentos que importan. El sistema es sobrio, cinematográfico y de contraste alto; el aire es generoso y la densidad, media: nada compite con la fotografía ni con el botón de WhatsApp.

Su filosofía es la profundidad sin sombras: la estructura se construye con el escalón tonal entre Tinta y Carbón, filetes de 1 px y veladuras de tinta sobre las fotos; las sombras están reservadas a los dos elementos que convierten. El movimiento es contenido y de autor: el titular sube enmascarado línea a línea, la fotografía del hero asienta lentamente, los contenidos aparecen con fundidos de 600 ms y las reglas doradas se dibujan como en imprenta — todo se desaparece bajo `prefers-reduced-motion` salvo el fundido, que ayuda a comprender.

Lo que este sistema rechaza, de forma confirmada: los fondos claros y luminosos de peluquería, los degradados multicolor fuera de la paleta de marca y cualquier peso decorativo que compita con la conversión. La paleta (negro, carbón, crema y dorado) es un compromiso cerrado; el verde de WhatsApp es la única excepción y existe únicamente en el FAB.

**Key Characteristics:**

- Paleta cerrada de cuatro valores + verde WhatsApp reservado al FAB (9.9:1 de contraste).
- Bodoni Moda escultural para títulos y cifras; Manrope neutra para toda lectura.
- Profundidad sin sombras: escalón ink→carbon, filetes de 1 px y scrims de tinta.
- Oro escaso: filetes, iconos, foco y acciones — nunca fondos grandes ni texto corrido.
- Movimiento cinematográfico contenido (líneas enmascaradas, fundidos de 600 ms, zoom de 700 ms) con soporte total de reduced-motion.
- Geometría de imprenta: escuadras doradas, filetes que se dibujan y versalitas muy trackeadas.

## Colors

Un solo acento cálido (latón) sobre una escalera de negros neutros: el oro no decora, señala.

### Primary

- **Latón Cálido** (#C6A46C): relleno del botón de conversión, filete de 64×1 px que se dibuja bajo cada título de sección, iconos de contacto y confianza, borde de foco, hover de enlaces y bordes, punto final del titular y cifras de precio. Aparece siempre en dosis pequeñas.
- **Latón Pulido** (#D8B983): exclusivamente el hover del botón primario — un paso más claro que imita el brillo del metal al tocarlo.

### Functional

- **Verde WhatsApp** (#25D366, hover #1EB557): solo el FAB flotante. El canal de conversión conserva su verde oficial para ser reconocible al instante; su glifo e etiqueta van en tinta (9.9:1). Nunca se usa como color de interfaz general.

### Neutral

- **Tinta Profunda** (#0B0B0B): fondo de página, veladuras (scrims) sobre fotografía, texto sobre dorado y fondo de los mosaicos de galería.
- **Carbón** (#171717): superficies — bandas de TrustBar y Galería, tarjetas al 60 % (`rgba(23,23,23,0.6)`), fondo de la banda CTA bajo la foto.
- **Crema Cálida** (#F5F2EC): texto principal; en alfa cumple los demás roles — /70 lectura secundaria, /60–50 apoyo terciario, /25–15–10–5 bordes, divisores y filetes estructurales.
- **Ceniza de barra** (#3A362F): pulgar de la barra de desplazamiento tematizada (al pasar el cursor se vuelve dorado).

### Named Rules

**La Regla del Oro Escaso.** El dorado marca solo lo que importa — acciones, filetes, iconos y foco. Nunca es un fondo grande ni texto de lectura; su escasez es lo que lo hace brillar.

**La Regla de los Dos Negros.** Nunca se apila negro sobre negro sin intención: la página es Tinta (#0B0B0B) y los paneles son Carbón (#171717). Ese escalón de tono es la estructura que reemplaza a las sombras.

## Typography

**Display Font:** Bodoni Moda (con Georgia, "Times New Roman" de respaldo)
**Body Font:** Manrope (con `ui-sans-serif`, system-ui, Segoe UI, Roboto)

**Character:** La pareja editorial de una revista de lujo: Bodoni Moda aporta el gesto escultural y el contraste de sus astas finas; Manrope mantiene la lectura moderna, neutra y legible en móvil. La regla práctica: la serif manda en los titulares, la sans sirve en todo lo demás.

### Hierarchy

- **Display** (500, `clamp(2.9rem, 9vw, 6rem)`, línea de 0.95): h1 del hero, tracking −0.02em; segunda línea en cursiva con punto final dorado.
- **Headline** (500, `clamp(2.1rem, 6vw, 4.5rem)` en la banda CTA y `clamp(2rem, 4.6vw, 3.4rem)` en encabezados de sección, líneas 1.02–1.05): tracking −0.015em a −0.01em, siempre con `text-balance`.
- **Title** (500, Bodoni 24 px / línea 1.2): títulos de tarjetas; figcaption de galería 18 px; enlaces del menú móvil 20 px; cifras de precio Bodoni 36 px en dorado.
- **Body** (400, Manrope 14–16 px, `leading-relaxed` 1.625): toda lectura larga; el texto secundario baja a crema/70. Medición cómoda hasta ~65ch (`max-w-xl`/`max-w-2xl`).
- **Label** (600, 11.5–12 px, versalitas, tracking 0.18em–0.40em): botones (0.18em), enlaces de navegación (0.20em), precios y kickers (0.25em), pista de scroll y marca vertical (0.30–0.40em).

### Named Rules

**La Regla de la Escultural.** Bodoni Moda solo para títulos, marca y cifras de precio — jamás en párrafos ni en microtexto de interfaz.

**La Regla de la Versalita Lejana.** Todo texto en versalitas lleva tracking generoso (≥0.18em): la etiqueta se lee como rótulo de imprenta, nunca como texto apretado.

## Layout

Contenedor único centrado de 1280 px (`max-w-7xl`) con canales de 20 px que suben a 32 px desde `sm`. Ritmo vertical de secciones de 80 px en móvil y 112 px en `md` (`py-20 md:py-28`); entre cabecera y contenido, 48 px (`mt-12`). Las bandas de contraste (TrustBar, Galería) van a sangre con fondo Carbón y filetes de 1 px arriba y abajo, manteniendo el mismo ritmo interior.

Los encabezados usan una rejilla de 12 columnas: título en 7 columnas y texto de apoyo en 5, alineados por la base, separados por un filete inferior de 1 px con 48 px de aire. Rejillas de tarjetas: 4 columnas de servicios (`gap` 20 px), 3 de contacto, 2 de About (`gap` 48→80 px) y galería en columnas CSS tipo masonry (1→2→3 columnas, hueco 20→24 px). La navegación fija mide 64 px en móvil y 80 px en `md`, con `scroll-padding-top` de 80 px; el hero ocupa `min-h-svh` con marco interior a 12 px (20 px en `md`). Banda de conversión centrada en `max-w-4xl`, alto mínimo 26→34 rem. Breakpoints estándar de Tailwind: sm 640, md 768, lg 1024, xl 1280.

## Elevation & Depth

El sistema es plano en reposo: la profundidad la construyen el escalón tonal (página Tinta → paneles Carbón → tarjetas Carbón/60), los filetes de 1 px en crema y las veladuras de tinta (`ink/95→transparente`, `ink/85`, radial de tinta) que velan la fotografía antes de poner texto encima. No existe ninguna sombra descansando sobre una superficie.

### Shadow Vocabulary

- **Botón de conversión** (`box-shadow: 0 14px 30px -16px rgba(0,0,0,0.9)`): el único alzo del botón primario; se percibe como un leve levantamiento del latón sobre la tinta.
- **FAB de WhatsApp** (`box-shadow: 0 14px 34px -14px rgba(0,0,0,0.8)`): mantiene el botón flotante separado de cualquier contenido que pase por debajo.

### Named Rules

**La Regla del Plano por Defecto.** Las superficies descansan planas; la sombra aparece solo como respuesta de estado y únicamente en los dos elementos que convierten. El foco no es una sombra sino un contorno: `2 px` de oro con `3 px` de separación (`:focus-visible`).

## Shapes

Escalera de radio corta y disciplinada: 6 px (`rounded-md`) para botones y controles, 8 px (`rounded-lg`) para tarjetas, fotos y mosaicos, círculo completo (`9999px`) para el FAB, las insignias de confianza y las viñetas de check. Los bordes son filetes de 1 px en escala de alfa (crema 5→25 %; en hover ascienden a oro 30→50 %). El recorte es una herramienta recurrente: `overflow-hidden` en todo lo que contiene imagen, para que los zooms de hover se recorten limpios.

Geometría de firma: **escuadras doradas** de 2 px y 20 px de lado en las esquinas superior izquierda e inferior derecha del marco del hero; **reglas doradas que crecen** — 64 px dibujadas bajo títulos, 24→40 px en el pie de galería, 20→32 px en enlaces de contacto.

## Components

### Buttons

- **Shape:** radio 6 px (`rounded-md`), altura de 49 px (`py-3.5`), etiqueta en versalitas 11.5 px / 0.18em.
- **Primary:** fondo Latón Cálido con texto Tinta e ícono de WhatsApp de 16 px; en hover sube 2 px, aclara a Latón Pulido y un destello blanco barre la pieza (`::after`, 650 ms, solo en puntero fino); `active` comprime a 0.98 en 150 ms. Sombra de alzo propia.
- **Secondary / Outline:** borde de 1 px crema/25 con texto crema; en hover el borde y el texto pasan a oro con un velo `gold/5`. La variante del hero añade una flecha que avanza 4 px.
- **Focus:** contorno global de 2 px en oro con 3 px de offset.

### Cards / Containers

- **Corner Style:** 8 px de radio, recorte de imagen incluido.
- **Background:** `rgba(23,23,23,0.6)` sobre tinta; borde de 1 px crema/10.
- **Shadow Strategy:** ninguna — ver *The Flat-By-Default Rule*.
- **Internal Padding:** 24 px en tarjeta de servicio, 28 px en tarjetas de contacto.
- **States:** hover eleva 6 px (`-translate-y-1.5`) y lleva el borde a oro/40 (servicio) u oro/30 (contacto); la foto de servicio entra desaturada al 85 % y con brillo 90 %, y al hover se aclara a 110 % y se acerca ×1.05 en 500 ms.

### Navigation

Barra fija de 64→80 px. En el tope, degradado `ink/70→transparente`; al hacer scroll, Tinta al 90 % con `backdrop-blur` de 12 px y filete inferior crema/10. El lockup es Bodoni 16→18 px (tracking 0.14em) con bajada dorada en versalitas (0.30→0.38em) que pasa a crema al hover del grupo. Enlaces de 12 px en versalitas (0.20em) en crema/70, a crema en hover y a oro la sección activa (`aria-current`). CTA compacto (`px-5 py-3`) en el borde derecho. Móvil: hamburguesa cuadrada de 40 px con borde crema/15 (hover oro/50) y panel inferior con Tinta al 95 %, blur, enlaces Bodoni de 20 px y trampa de foco con cierre por Escape.

### Section Heading (signature)

Filete dorado de 64×1 px que se dibuja con `scaleX` (700 ms, +150 ms de retardo) sobre un título Bodoni en `clamp(2rem, 4.6vw, 3.4rem)`. El filete es la firma de marca — no un "kicker" de texto.

### Gallery Tile (signature)

Mosaico de 8 px con borde crema/10 y fondo Tinta; la imagen hace zoom ×1.06 en 700 ms al hover. El pie lleva un velo de tinta ascendente con el título en Bodoni 18 px precedido de un filete dorado que crece de 24 a 40 px, y el pie en 12 px crema/70. Ratios: 4:5, 4:3 y 1:1.

### Floating WhatsApp (signature)

Pastilla circular de 56 px en verde WhatsApp con glifo en tinta, anillo que pulsa (×1.85 en 2.8 s) y alzo con sombra propia. En hover se levanta 4 px, oscurece a #1EB557 y despliega la etiqueta "RESERVAR CITA" (12 px, 700, versalitas 0.10em) hasta 192 px. Respeta `safe-area-inset` inferior; bajo reduced-motion pierde transición y anillo.

### Trust Badge (chip)

Círculo de 36 px con borde oro/30 y fondo oro/10, ícono Lucide de 16 px en oro. Acompaña títulos de 14 px semineutros y textos de 14 px crema/70 en las celdas de la banda de confianza.

## Do's and Don'ts

### Do:

- **Do** mantener la paleta cerrada (ink, carbon, cream, gold); el verde solo existe en el FAB de WhatsApp.
- **Do** usar Bodoni Moda en peso 500 con tracking negativo y `text-balance` en todo título, y Manrope `leading-relaxed` en toda lectura larga.
- **Do** velar la fotografía con degradados de tinta antes de poner texto encima: ningún texto de overlay toca la foto desnuda.
- **Do** revelar el contenido con `Reveal` (fundido + 24 px, o escala 0.96) escalonando 30–80 ms entre hermanos.
- **Do** construir profundidad con el escalón ink→carbon y filetes de 1 px crema/10; reservar sombra al botón primario y al FAB.
- **Do** marcar el foco con contorno de 2 px en oro (offset 3 px): el foco es dorado y siempre visible.

### Don't:

- **Don't** usar Bodoni Moda en párrafos, microcopy ni textos de interfaz pequeños.
- **Don't** rellenar superficies grandes con dorado ni emplearlo como texto de lectura.
- **Don't** añadir sombras nuevas, bordes duros blancos ni resplandores: el sistema es plano por defecto.
- **Don't** introducir giros de color fuera de la paleta — degradados multicolor, azules de SaaS o secciones blancas tipo peluquería lumínica.
- **Don't** romper el ritmo de 80/112 px ni meter tarjetas dentro de tarjetas.
- **Don't** animar desplazamientos o escalas bajo `prefers-reduced-motion`: el fundido es lo único que se conserva.
