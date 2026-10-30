# BLACK LABEL BARBER STUDIO — Landing page

Landing page premium para barberías: una sola página, oscura y editorial, con
galería de cortes, lista de precios y conversión directa a WhatsApp.

Creada con **React 19 + TypeScript + Vite + Tailwind CSS v4**.

---

## Requisitos

- **Node.js `^20.19.0` o `>=22.12.0`** (Vite 8 no arranca en versiones
  anteriores; comprueba tu versión con `node --version`).
- npm (se entrega con Node; el proyecto usa `package-lock.json`).

## Puesta en marcha

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo → http://localhost:5173
```

Comprobaciones:

```bash
npm run lint        # linter (oxlint)
npm run typecheck   # TypeScript
npm run build       # typecheck + build de producción (genera ./dist)
npm run check       # lint + build de una sola vez
npm run preview     # sirve ./dist en local para revisar el build
```

Despliegue: cualquier estático. La carpeta de salida es **`dist/`**
(Netlify, Vercel, GitHub Pages, Cloudflare Pages o un hosting convencional).
No hay backend, base de datos ni pagos: es una landing de contacto.

---

## Estructura

```
vite.config.ts            compilación + plugin que inyecta el SEO y genera
                           robots.txt, sitemap.xml y 404.html en dist/
public/
├── favicon.svg            monograma BL dorado sobre negro
├── fotos/                 imágenes locales (sin peticiones externas)
└── fonts/                 tipografías auto-alojadas woff2 (sin Google Fonts)
src/
├── config/site.ts          ← TODO el contenido editable vive aquí
├── lib/whatsapp.ts         ← construcción de enlaces wa.me y formato de precios
├── hooks/
│   ├── useActiveSection.ts ← resalta la sección visible en el navbar
│   └── useScrolled.ts      ← detecta scroll para la navbar
├── components/
│   ├── Navbar.tsx          logo, enlaces, CTA y menú móvil
│   ├── Hero.tsx            portada con foto a sangre
│   ├── TrustBar.tsx        franja de confianza (3 características)
│   ├── Services.tsx        servicios y precios
│   ├── Gallery.tsx         galería masonry de estilos
│   ├── About.tsx           sección "nosotros"
│   ├── CallToAction.tsx    banda destacada de conversión
│   ├── Contact.tsx         ubicación, horarios y redes
│   ├── PoliticaDePrivacidad.tsx política de privacidad (vista #privacidad)
│   ├── Footer.tsx          pie de página
│   ├── FloatingWhatsApp.tsx botón flotante
│   ├── WhatsAppButton.tsx  botón reutilizable hacia wa.me
│   ├── SmartImage.tsx      imagen con carga y fallback elegante
│   ├── SectionHeading.tsx  cabecera de sección reutilizable
│   ├── Reveal.tsx          aparición al hacer scroll (IntersectionObserver)
│   └── BrandIcons.tsx      iconos de WhatsApp, Instagram y TikTok
├── index.css               paleta, tipografías y animaciones
└── App.tsx                 composición de la página
```

---

## Personalización para otra barbería

### 1. Contenido — `src/config/site.ts`

Todo lo que cambia entre clientes está centralizado en ese archivo:

| Qué cambiar | Dónde |
| --- | --- |
| Nombre, logotipo y lema | `brand` |
| Título y descripción SEO (se inyectan solos en cada build) | `seo` |
| URL del dominio publicado (activa canonical, og:url y sitemap) | `seo.url` |
| Enlaces del menú | `nav` |
| Textos y fotos de la portada | `hero` |
| Franja de confianza | `trust` |
| **Servicios, precios y sus fotos** | `services` + `pricing.currency` |
| **Fotos de la galería** | `gallery` |
| Textos "nosotros" | `about` |
| Banda final de conversión | `cta` |
| **Número de WhatsApp** | `contact.whatsapp.number` |
| Dirección y enlace de Maps | `contact.address`, `contact.mapsUrl` |
| Horarios | `contact.hours` |
| Instagram y TikTok | `contact.socials` |
| Fecha de la política de privacidad | `legal.politicaActualizada` |

#### Número de WhatsApp

```ts
whatsapp: {
  number: '51999888777',   // formato internacional: código de país + número
  ...
}
```

Sin espacios, guiones ni símbolos:

| País | Ejemplo válido |
| --- | --- |
| Perú | `51999888777` |
| México | `5215512345678` |
| España | `34612345678` |
| Argentina | `5491122334455` |

> ⚠️ El número `51999888777`, la dirección, los horarios, los precios (`S/`)
> y los perfiles `@blacklabel.ejemplo` son **datos ficticios de demostración**
> (documentados en los comentarios de `site.ts`). Reemplázalos antes de
> publicar.

### 2. Colores — `src/index.css`

```css
@theme {
  --color-ink:    #0b0b0b;  /* negro profundo  */
  --color-carbon: #171717;  /* gris carbón     */
  --color-cream:  #f5f2ec;  /* blanco cálido   */
  --color-gold:   #c6a46c;  /* dorado suave    */
}
```

Cambiando estos cuatro valores se re-tematiza toda la web (fondos, textos,
bordes y acentos usan las utilidades `bg-ink`, `text-cream`, `text-gold`…).

### 3. Tipografías — `public/fonts/` + `src/index.css`

- **Títulos:** Fraunces (`--font-display`, clase `font-display`) — serif de
  carácter artesanal, con itálica variable para el segundo título del hero.
- **Texto:** Archivo (`--font-sans`, fuente por defecto) — grotesca de
  retícula periodística, muy nítida en mayúsculas con tracking.

Las dos familias son de licencia libre **SIL OFL** (aptas para reventa) y están
**auto-alojadas** en `public/fonts/` (3 archivos woff2 declarados con
`@font-face` al inicio de `index.css`): el sitio no pide nada a Google ni a
ningún CDN, lo que mejora la privacidad del visitante y la carga.

Para cambiarlas: descarga los woff2 nuevos en `public/fonts/`, actualiza los
`@font-face` de `index.css` y las variables `--font-display` / `--font-sans`.

### 4. Fotos

Las 14 fotos actuales están en **`public/fotos/`** (origen: Unsplash, licencia
libre) y la web las sirve desde ahí: sin peticiones externas a terceros.

| Archivo | Uso |
| --- | --- |
| `hero.jpg` | Portada |
| `servicio-01.jpg` … `servicio-04.jpg` | Tarjetas de servicios |
| `estilo-01.jpg` … `estilo-06.jpg` | Galería de estilos |
| `estudio.jpg` | Sección "nosotros" |
| `silla.jpg` | Banda de conversión |
| `og-image.jpg` | Imagen al compartir en redes/WhatsApp (1200×630) |

Para personalizar:

1. Sustituye los archivos manteniendo el nombre (o cambia las rutas en
   `site.ts`: `hero.image`, `about.image`, `cta.image`, `seo.ogImage` y el
   `image` de cada elemento de `gallery`).
2. Actualiza los textos alternativos (`alt`, `imageAlt`): son necesarios para
   accesibilidad y SEO.
3. Recomendación: fotos reales del local, JPG, máximo ~1920 px de ancho.
4. Si alguna imagen no carga, `SmartImage` muestra un fondo elegante con el
   texto alternativo en lugar de un hueco roto.

### 5. SEO, datos estructurados y favicon

- **Fuente única:** `siteConfig.seo` en `src/config/site.ts`. El plugin de
  `vite.config.ts` inyecta en el HTML, tanto en dev como en cada build:
  `<title>`, description, Open Graph, Twitter Card, `robots`, un bloque
  **JSON-LD LocalBusiness/HairSalon** (nombre, teléfono, dirección, horarios,
  precios y redes — tomados del mismo config) y un `<noscript>` con el
  contacto de respaldo.
- **`seo.url`:** déjala vacía en local. Cuando publiques el dominio
  (ej. `'https://tudominio.pe'`) rellénala: con eso aparecen
  `<link rel="canonical">` y `og:url`, y en `dist/` se genera `sitemap.xml`
  (referenciado en `robots.txt`).
- **`dist/` incluye siempre** `robots.txt` y `404.html` (página de error
  autogenerada con el estilo de la marca y enlace a WhatsApp).
- Favicon: `public/favicon.svg`.

---

## Comportamiento incluido

- **Navbar fija** que se opaca al hacer scroll y resalta la sección activa.
- **Menú móvil** con foco accesible: bloquea el scroll, entrega el foco al
  primer enlace, **atrapa el Tab dentro del panel** mientras está abierto,
  cierra con `Escape` y devuelve el foco al botón.
- **Animación al entrar en pantalla**: el titular del hero sube enmascarado
  línea a línea y, cuando cada sección entra en el viewport, aparece con un
  fundido suave (`.reveal` + IntersectionObserver) y el filete dorado de su
  cabecera se dibuja con `scaleX`. Todo se desactiva con
  `prefers-reduced-motion`.
- **CTA con dos verbos coherentes**: "Reservar cita" (navbar, hero, banda y
  flotante) envía el mensaje de reserva; "Consultar por WhatsApp" (cada
  servicio) consulta por ese servicio concreto. El número queda visible junto
  al CTA principal.
- **Botón flotante de WhatsApp** con `env(safe-area-inset-bottom)` para no
  chocar con la barra del sistema (el footer reserva espacio inferior en
  móvil). Glifo y etiqueta en tinta sobre verde (contraste 9.9:1).
- **Responsive** verificado de 320 a 1920 px sin scroll horizontal.
- **Política de privacidad** en la vista `#privacidad` (enlace en el pie):
  describe con exactitud lo que el sitio hace hoy — no recoge datos —
  redactada sobre la Ley N° 29733 (Perú).
- **Cero peticiones a terceros**: fotos y tipografías se sirven desde el
  propio dominio; solo se conecta a WhatsApp, Maps o redes cuando el
  visitante toca un enlace.
- Accesibilidad: `lang="es"`, encabezados jerárquicos, enlace "saltar al
  contenido", foco visible en dorado, textos alternativos, contraste AA y
  `<noscript>` con datos de contacto.

---

## Datos que debes pedir al cliente

Antes de personalizar la landing, recopila (todo se edita en
`src/config/site.ts`):

| Dato | Dónde va | Obligatorio |
| --- | --- | --- |
| Nombre comercial exacto (y "estudio/taller" si usa) | `brand` | Sí |
| Número de WhatsApp con código de país, sin espacios (`51999888777`) | `contact.whatsapp.number` | Sí |
| Texto del mensaje con el que quieres que abran el chat | `contact.whatsapp.defaultMessage` / `bookingMessage` | Sí |
| Dirección (calle y distrito/ciudad) | `contact.address` | Sí |
| Enlace de Google Maps (botón "Compartir" → copiar enlace) | `contact.mapsUrl` | Sí |
| Horarios por día (con texto libre para festivos) | `contact.hours` | Sí |
| Lista de servicios con nombre, precio y descripción | `services` | Sí |
| Moneda del país (`S/`, `MX$`, `€`…) | `pricing.currency` | Sí |
| Fotos reales: local, silla/trabajo, 4 de servicios y 6 de galería | `public/fotos/` + rutas en `site.ts` | Sí |
| Instagram/TikTok (usuario y enlace) o confirmación de que no tiene | `contact.socials` | No |
| Título y descripción SEO (o redáctalos tú a partir de su actividad) | `seo` | Sí |
| Dominio reservado (aún puede quedar vacío hasta contratar hosting) | `seo.url` | No |
| Eslogan y textos "nosotros" (si no, se adapta el copy de ejemplo) | `hero`, `about` | No |

> No inventes datos: si el cliente no entrega algo, deja los valores de
> demostración claramente marcados y dilo en la entrega. Los datos ficticios
> actuales están comentados en `site.ts` (búsqueda: "ficticio", "demo").

## Checklist de entrega (cada nueva barbería)

1. `npm install` y `npm run check` en verde (lint + typecheck + build).
2. Todos los datos del cliente aplicados en `src/config/site.ts` y
   `src/index.css` (colores).
3. Fotos del cliente en `public/fotos/` (mismos nombres o rutas actualizadas);
   comprueba en el navegador que **todas** cargan.
4. Textos alternativos (`alt`, `imageAlt`) escritos con la foto real.
5. `npm run preview` y revisión visual: móvil (~360 px), tablet y escritorio;
   comprobar que no hay scroll horizontal.
6. Probar los botones de WhatsApp (hero, servicios, flotante y pie) con el
   número real, y el enlace de Maps.
7. Fecha de la política (`legal.politicaActualizada`) puesta al día y texto
   revisado si el sitio ha cambiado.
8. `seo.url` con el dominio definitivo **antes** de generar el build final
   (de lo contrario faltarán canonical, `og:url` y sitemap).
9. Build final con `npm run build` y subida de `dist/` al hosting.
10. Verificar en el dominio publicado: título, favicon, imagen al compartir
    en WhatsApp y `https://dominio/sitemap.xml`.

---

## Política de privacidad

La web incluye una política completa en la vista `#privacidad` (enlace en la
barra legal del pie). Está redactada para este sitio tal como funciona hoy:
sin formularios, cookies ni analíticas, con los datos del negocio tomados de
`site.ts` (nombre, dirección, WhatsApp y fecha — `legal.politicaActualizada`).

⚠️ Si el cliente añade herramientas que sí traten datos (Google Analytics,
píxel de Meta, reservas en línea, formularios...), **actualiza el texto y la
fecha** en `src/components/PoliticaDePrivacidad.tsx` y en `site.ts`. Es un
modelo informativo basado en la Ley N° 29733 (Perú); para un cliente real
conviene que un profesional lo revise, sobre todo si el negocio opera en
otro país.

---

## Nota

Es una landing de contacto: no implementa reservas confirmadas, calendario,
pagos ni reseñas. La reserva se cierra por WhatsApp, como indica el objetivo
del proyecto. Los datos de ejemplo se documentan en los comentarios de
`site.ts` y en este README: cámbialos (número, dirección, horarios, precios,
redes y fotos) antes de publicar.
