import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import type { HtmlTagDescriptor } from 'vite'
import { defineConfig } from 'vite'
import { siteConfig } from './src/config/site.ts'

const { brand, contact, pricing, seo, services } = siteConfig

/** URL del sitio publicado (sin barra final). Vacía mientras no haya dominio. */
const baseUrl = seo.url.replace(/\/+$/, '')

/** Convierte una ruta interna en URL absoluta cuando `seo.url` está definida. */
const absolute = (path: string) => (baseUrl ? `${baseUrl}${path}` : path)

const whatsappHref = `https://wa.me/${contact.whatsapp.number}`

/* ------------------------------------------------------------------
 * Datos estructurados LocalBusiness (schema.org), generados del
 * mismo config que la interfaz: si cambian teléfono, dirección,
 * horarios o precios en `site.ts`, se actualizan aquí solos.
 * ------------------------------------------------------------------ */

const WEEK_DAYS = [
  'lunes',
  'martes',
  'miércoles',
  'jueves',
  'viernes',
  'sábado',
  'domingo',
]
const WEEK_CODES = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

const stripAccents = (text: string) =>
  text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim()

/** Índice (0 = lunes … 6 = domingo) de un nombre de día, tolerando plurales. */
function dayIndexOf(token: string): number {
  const clean = stripAccents(token)
  const exact = WEEK_DAYS.findIndex((day) => stripAccents(day) === clean)
  if (exact >= 0) return exact
  return WEEK_DAYS.findIndex((day) => `${stripAccents(day)}s` === clean)
}

/** "Lunes a viernes", "Sábados", "Domingos"… → ['Mo', 'Tu', …] */
function parseDays(days: string): string[] {
  const text = stripAccents(days)
  if (text.includes('todos')) return WEEK_CODES
  if (/\sa\s/.test(text)) {
    const [from, to] = text.split(/\sa\s/)
    const first = dayIndexOf(from)
    const last = dayIndexOf(to)
    if (first < 0 || last < 0) return []
    const range: string[] = []
    for (let i = Math.min(first, last); i <= Math.max(first, last); i += 1) {
      range.push(WEEK_CODES[i])
    }
    return range
  }
  return text
    .split(/,|\sy\s/)
    .map(dayIndexOf)
    .filter((index) => index >= 0)
    .map((index) => WEEK_CODES[index])
}

function openingHoursSpecification() {
  return contact.hours.flatMap(({ days, hours }) => {
    const [opens, closes] = hours.split(/\s*[–—-]\s*/)
    if (!opens || !closes) return []
    if (!/^\d{2}:\d{2}$/.test(opens) || !/^\d{2}:\d{2}$/.test(closes)) return []
    return parseDays(days).map((dayOfWeek) => ({ dayOfWeek, opens, closes }))
  })
}

const priceList = services.map((service) => service.price)
const priceRange = `${pricing.currency}${Math.min(...priceList)} – ${pricing.currency}${Math.max(...priceList)}`

function localBusinessJsonLd(): string {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HairSalon'],
    name: brand.fullName,
    description: seo.description,
    image: absolute(seo.ogImage),
    telephone: `+${contact.whatsapp.number}`,
    priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.address.line1,
      addressLocality: contact.address.locality,
      addressRegion: contact.address.region,
      addressCountry: contact.address.country,
    },
    openingHoursSpecification: openingHoursSpecification().map((entry) => ({
      '@type': 'OpeningHoursSpecification',
      ...entry,
    })),
    sameAs: contact.socials.map((social) => social.url),
    hasMap: contact.mapsUrl,
  }
  if (baseUrl) schema.url = `${baseUrl}/`
  // Nunca debe aparecer un `</` literal dentro de un <script>.
  return JSON.stringify(schema, null, 2).replace(/</g, '\\u003c')
}

/* ------------------------------------------------------------------
 * Etiquetas <head> inyectadas en dev y en cada build
 * ------------------------------------------------------------------ */

function headTags(): HtmlTagDescriptor[] {
  const ogImage = absolute(seo.ogImage)
  const tags: HtmlTagDescriptor[] = [
    { tag: 'title', injectTo: 'head', children: seo.title },
    {
      tag: 'meta',
      injectTo: 'head',
      attrs: { name: 'description', content: seo.description },
    },
    {
      tag: 'meta',
      injectTo: 'head',
      attrs: { name: 'robots', content: 'index, follow' },
    },
    // Open Graph
    {
      tag: 'meta',
      injectTo: 'head',
      attrs: { property: 'og:type', content: 'website' },
    },
    {
      tag: 'meta',
      injectTo: 'head',
      attrs: { property: 'og:locale', content: 'es_PE' },
    },
    {
      tag: 'meta',
      injectTo: 'head',
      attrs: { property: 'og:site_name', content: brand.fullName },
    },
    {
      tag: 'meta',
      injectTo: 'head',
      attrs: { property: 'og:title', content: seo.title },
    },
    {
      tag: 'meta',
      injectTo: 'head',
      attrs: { property: 'og:description', content: seo.description },
    },
    {
      tag: 'meta',
      injectTo: 'head',
      attrs: { property: 'og:image', content: ogImage },
    },
    // Twitter
    {
      tag: 'meta',
      injectTo: 'head',
      attrs: { name: 'twitter:card', content: 'summary_large_image' },
    },
    {
      tag: 'meta',
      injectTo: 'head',
      attrs: { name: 'twitter:title', content: seo.title },
    },
    {
      tag: 'meta',
      injectTo: 'head',
      attrs: { name: 'twitter:description', content: seo.description },
    },
    {
      tag: 'meta',
      injectTo: 'head',
      attrs: { name: 'twitter:image', content: ogImage },
    },
    // Datos estructurados
    {
      tag: 'script',
      injectTo: 'head',
      attrs: { type: 'application/ld+json' },
      children: localBusinessJsonLd(),
    },
  ]
  if (baseUrl) {
    tags.push({
      tag: 'link',
      injectTo: 'head',
      attrs: { rel: 'canonical', href: `${baseUrl}/` },
    })
    tags.push({
      tag: 'meta',
      injectTo: 'head',
      attrs: { property: 'og:url', content: `${baseUrl}/` },
    })
  }
  return tags
}

/** Respaldo con contacto directo cuando el navegador no ejecuta JavaScript. */
function noscriptTag(): HtmlTagDescriptor {
  return {
    tag: 'noscript',
    injectTo: 'body',
    children: `
      <div style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:3rem 1.25rem;background:#0b0b0b;color:#f5f2ec;text-align:center;font-family:Arial,Helvetica,sans-serif">
        <span style="display:block;width:64px;height:1px;background:#c6a46c" aria-hidden="true"></span>
        <p style="margin:1.5rem 0 .75rem;font-size:.7rem;letter-spacing:.3em;text-transform:uppercase;color:#c6a46c">${brand.fullName}</p>
        <h1 style="margin:0 0 1rem;font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:clamp(1.75rem,5vw,2.75rem)">Activa JavaScript para ver esta página</h1>
        <p style="max-width:34rem;margin:0;line-height:1.7;color:rgba(245,242,236,.75)">Esta web necesita JavaScript para mostrarse. Si no puedes activarlo, escríbenos por WhatsApp al <a href="${whatsappHref}" style="color:#c6a46c">${contact.whatsapp.display}</a>.</p>
      </div>`,
  }
}

/* ------------------------------------------------------------------
 * Página 404 autogenerada (estilo de marca, sin dependencias)
 * ------------------------------------------------------------------ */

function notFoundHtml(): string {
  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#0B0B0B" />
    <meta name="robots" content="noindex" />
    <title>Página no encontrada — ${brand.fullName}</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <style>
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 2rem;
        background: #0b0b0b;
        color: #f5f2ec;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
      }
      .rule { width: 64px; height: 1px; background: #c6a46c; margin: 0 auto 1.5rem; }
      .kicker { margin: 0 0 1rem; font-size: .7rem; letter-spacing: .3em; text-transform: uppercase; color: #c6a46c; }
      h1 { margin: 0 0 1rem; font-family: Georgia, 'Times New Roman', serif; font-weight: 400; font-size: clamp(2rem, 6vw, 3.25rem); }
      .lead { max-width: 34rem; margin: 0 auto 2.25rem; line-height: 1.7; color: rgba(245, 242, 236, .7); }
      .actions { display: flex; flex-wrap: wrap; gap: .75rem; justify-content: center; }
      .btn {
        display: inline-block;
        padding: .9rem 1.75rem;
        text-decoration: none;
        font-size: .72rem;
        font-weight: 600;
        letter-spacing: .18em;
        text-transform: uppercase;
        border: 1px solid #c6a46c;
        color: #c6a46c;
        transition: background .3s, color .3s;
      }
      .btn:hover, .btn:focus-visible { background: #c6a46c; color: #0b0b0b; }
      .btn.solid { background: #c6a46c; color: #0b0b0b; }
      .btn.solid:hover, .btn.solid:focus-visible { background: transparent; color: #c6a46c; }
    </style>
  </head>
  <body>
    <main>
      <div class="rule" aria-hidden="true"></div>
      <p class="kicker">${brand.fullName}</p>
      <h1>Página no encontrada</h1>
      <p class="lead">El enlace que seguiste no existe o la página se movió. Vuelve al inicio para ver los servicios y los precios.</p>
      <div class="actions">
        <a class="btn solid" href="/">Volver al inicio</a>
        <a class="btn" href="${whatsappHref}" target="_blank" rel="noopener noreferrer">Reservar cita</a>
      </div>
    </main>
  </body>
</html>
`
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'black-label:seo',
      transformIndexHtml: {
        order: 'post',
        handler(html) {
          return { html, tags: [...headTags(), noscriptTag()] }
        },
      },
      generateBundle() {
        const robots = ['User-agent: *', 'Allow: /']
        if (baseUrl) robots.push('', `Sitemap: ${baseUrl}/sitemap.xml`)
        this.emitFile({
          type: 'asset',
          fileName: 'robots.txt',
          source: `${robots.join('\n')}\n`,
        })

        if (baseUrl) {
          const sitemap = [
            '<?xml version="1.0" encoding="UTF-8"?>',
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
            '  <url>',
            `    <loc>${baseUrl}/</loc>`,
            '    <changefreq>monthly</changefreq>',
            '    <priority>1.0</priority>',
            '  </url>',
            '</urlset>',
          ].join('\n')
          this.emitFile({
            type: 'asset',
            fileName: 'sitemap.xml',
            source: `${sitemap}\n`,
          })
        }

        this.emitFile({
          type: 'asset',
          fileName: '404.html',
          source: notFoundHtml(),
        })
      },
    },
  ],
})
