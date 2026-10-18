/**
 * ============================================================
 *  CONFIGURACIÓN CENTRAL DE LA LANDING
 * ============================================================
 *  Todo el contenido editable de la web vive en este archivo.
 *  Para adaptar la landing a otra barbería solo necesitas
 *  modificar los valores de abajo (nombre, colores, precios,
 *  WhatsApp, horarios, fotos y redes).
 *
 *  Los colores principales están en `src/index.css` (@theme).
 *  El SEO (title, description, Open Graph, canonical, robots,
 *  datos estructurados LocalBusiness y <noscript>) se genera
 *  desde aquí en cada build: ver `vite.config.ts`.
 * ============================================================
 */

/** Fotos incluidas en `public/fotos/` (origen: Unsplash, licencia libre). Reemplázalas por fotos reales de la barbería. */
function foto(nombre: string): string {
  return `/fotos/${nombre}`
}

export type NavItem = {
  label: string
  /** Debe coincidir con el `id` de la sección correspondiente. */
  href: string
}

export type Service = {
  id: string
  name: string
  description: string
  /** Precio numérico: se formatea con el símbolo de `pricing.currency`. */
  price: number
  /** Foto del servicio en `public/fotos/` (relación 3:2). */
  image: string
  /** Texto alternativo de la foto: accesibilidad y SEO. */
  imageAlt: string
}

export type GalleryRatio = 'portrait' | 'landscape' | 'square'

export type GalleryItem = {
  id: string
  title: string
  caption: string
  image: string
  alt: string
  ratio: GalleryRatio
}

export type TrustItem = {
  icon: 'handshake' | 'scissors' | 'target'
  title: string
  text: string
}

export type Schedule = {
  days: string
  hours: string
}

export type Social = {
  id: 'instagram' | 'tiktok'
  label: string
  /** Visible en la web. Cambia el handle `.ejemplo` por el real. */
  handle: string
  /** URL completa del perfil. */
  url: string
}

export const siteConfig = {
  /* ------------------------------------------------------------
   * MARCA
   * ------------------------------------------------------------ */
  brand: {
    /** Nombre corto: se usa en el logotipo del navbar y del footer. */
    name: 'BLACK LABEL',
    /** Nombre completo: SEO, títulos y textos legales. */
    fullName: 'BLACK LABEL BARBER STUDIO',
    /** Segunda línea del logotipo. */
    suffix: 'BARBER STUDIO',
    /** Descripción corta junto al logotipo y en el footer. */
    tagline: 'Barbería · Estudio de imagen masculina',
  },

  /* ------------------------------------------------------------
   * SEO — única fuente de verdad.
   * `vite.config.ts` los inyecta en el HTML en cada build:
   * <title>, description, Open Graph, Twitter Card, robots,
   * JSON-LD LocalBusiness y <noscript>.
   * ------------------------------------------------------------ */
  seo: {
    title: 'BLACK LABEL BARBER STUDIO | Cortes, degradados y barba',
    description:
      'Barbería especializada en cortes, degradados, arreglo de barba y estilo masculino. Consulta la disponibilidad y reserva tu cita por WhatsApp.',
    /** Imagen que comparten redes y WhatsApp (1200×630). */
    ogImage: foto('og-image.jpg'),
    /**
     * URL definitiva del sitio publicado, sin barra final.
     * Ej.: 'https://blacklabelperu.pe'
     * Vacía en local. Al rellenarla se añaden también el
     * `<link canonical>`, el `og:url` y se genera `sitemap.xml`
     * (y `robots.txt` con su referencia) en `dist/`.
     */
    url: '',
  },

  /* ------------------------------------------------------------
   * NAVEGACIÓN
   * ------------------------------------------------------------ */
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ] satisfies NavItem[],

  /* ------------------------------------------------------------
   * HERO
   * ------------------------------------------------------------ */
  hero: {
    image: foto('hero.jpg'),
    imageAlt:
      'Barbero afeitando a un cliente en una silla de barbería con iluminación tenue',
    titleLines: ['TU ESTILO.', 'TU SELLO.'],
    subtitle:
      'Cortes precisos, detalles impecables y un estilo que habla por ti.',
    primaryCta: 'RESERVAR CITA',
    secondaryCta: 'VER SERVICIOS',
    scrollHint: 'DESLIZA',
  },

  /* ------------------------------------------------------------
   * BARRA DE CONFIANZA (solo características, sin premios ni años)
   * ------------------------------------------------------------ */
  trust: [
    {
      icon: 'handshake',
      title: 'Atención personalizada',
      text: 'Escuchamos lo que buscas antes de empezar.',
    },
    {
      icon: 'scissors',
      title: 'Barberos especializados',
      text: 'Cada corte, en manos expertas.',
    },
    {
      icon: 'target',
      title: 'Estilo y precisión',
      text: 'Líneas limpias y acabado impecable.',
    },
  ] satisfies TrustItem[],

  /* ------------------------------------------------------------
   * SERVICIOS Y PRECIOS
   * Los importes son datos ficticios de demostración.
   * ------------------------------------------------------------ */
  pricing: {
    /** Símbolo de moneda: 'S/', '$', '€'... */
    currency: 'S/',
    /** Etiqueta pequeña sobre el precio. */
    label: 'Precio',
  },

  services: [
    {
      id: 'corte-clasico',
      name: 'Corte clásico',
      description:
        'Un corte limpio y contemporáneo, adaptado a la forma de tu rostro.',
      price: 25,
      image: foto('servicio-01.jpg'),
      imageAlt:
        'Herramientas de barbero sobre una mesa de madera: máquinas de corte, tijeras, peine y productos de peinado',
    },
    {
      id: 'fade',
      name: 'Fade / degradado',
      description:
        'Degradado preciso de bajo, medio o alto, con contornos bien definidos.',
      price: 30,
      image: foto('servicio-02.jpg'),
      imageAlt:
        'Barbero perfilando un degradado con máquina sobre las patillas de un cliente',
    },
    {
      id: 'corte-barba',
      name: 'Corte + barba',
      description:
        'El servicio completo: corte de cabello con diseño y arreglo de barba.',
      price: 40,
      image: foto('servicio-03.jpg'),
      imageAlt:
        'Afeitado con navaja recta sobre el rostro de un cliente recostado en la silla',
    },
    {
      id: 'perfilado-barba',
      name: 'Perfilado de barba',
      description:
        'Recorte y contorno de barba con acabado definido y natural.',
      price: 15,
      image: foto('servicio-04.jpg'),
      imageAlt:
        'Barbero aplicando crema de afeitar con brocha sobre la barba de un cliente, en blanco y negro',
    },
  ] satisfies Service[],

  /* ------------------------------------------------------------
   * GALERÍA (fotos de referencia de estilos)
   * ------------------------------------------------------------ */
  gallery: [
    {
      id: 'low-fade',
      title: 'Low Fade',
      caption: 'Degradado bajo que arranca cerca de la nuca y las sienes.',
      image: foto('estilo-01.jpg'),
      alt: 'Barbero peinando a un cliente con degradado bajo y barba recortada',
      ratio: 'portrait',
    },
    {
      id: 'mid-fade',
      title: 'Mid Fade',
      caption: 'Transición media para un look marcado y limpio.',
      image: foto('estilo-02.jpg'),
      alt: 'Primer plano lateral de un degradado medio peinado con peine',
      ratio: 'portrait',
    },
    {
      id: 'taper-fade',
      title: 'Taper Fade',
      caption: 'Difuminado gradual en patillas y nuca, sin líneas marcadas.',
      image: foto('estilo-03.jpg'),
      alt: 'Barbero recortando el cabello rizado de un cliente con peine y tijera',
      ratio: 'portrait',
    },
    {
      id: 'textured-crop',
      title: 'Textured Crop',
      caption: 'Flequillo con textura y volumen controlado.',
      image: foto('estilo-04.jpg'),
      alt: 'Barbero recortando con tijera el cabello con textura de un cliente',
      ratio: 'landscape',
    },
    {
      id: 'corte-clasico',
      title: 'Corte clásico',
      caption: 'Peinado atemporal con contornos definidos.',
      image: foto('estilo-05.jpg'),
      alt: 'Barbero peinando el cabello de un cliente con barba hacia atrás',
      ratio: 'landscape',
    },
    {
      id: 'arreglo-barba',
      title: 'Arreglo de barba',
      caption: 'Recorte, contorno y forma para una barba cuidada.',
      image: foto('estilo-06.jpg'),
      alt: 'Barbero recortando la barba de un cliente con tijera en blanco y negro',
      ratio: 'portrait',
    },
  ] satisfies GalleryItem[],

  /* ------------------------------------------------------------
   * NOSOTROS
   * ------------------------------------------------------------ */
  about: {
    image: foto('estudio.jpg'),
    imageAlt:
      'Interior de una barbería con ladrillo, espejos y tres sillas de piel',
    title: 'El detalle marca la diferencia.',
    paragraphs: [
      'BLACK LABEL BARBER STUDIO nace de una idea simple: cada persona merece un corte que se sienta propio. Trabajamos con calma, escuchamos lo que buscas y lo traducimos en un acabado limpio y preciso.',
      'Nuestro espacio está pensado para desconectar: un lugar tranquilo donde el tiempo se toma para hacer bien las cosas, desde la primera línea del degradado hasta el último detalle de la barba.',
    ],
    highlights: [
      'Te asesoramos antes de cortar: estilo, forma del rostro y tipo de cabello.',
      'Técnicas de corte y degradado adaptadas a cada persona.',
      'Un acabado revisado detalle a detalle antes de que te levantes de la silla.',
    ],
  },

  /* ------------------------------------------------------------
   * LLAMADA A LA ACCIÓN
   * ------------------------------------------------------------ */
  cta: {
    image: foto('silla.jpg'),
    imageAlt: 'Silla de barbería de cuero marrón en un espacio oscuro',
    title: 'TU PRÓXIMO CORTE EMPIEZA AQUÍ.',
    subtitle: 'Escríbenos para reservar tu cita y confirmar los horarios disponibles.',
    buttonLabel: 'RESERVAR CITA',
  },

  /* ------------------------------------------------------------
   * CONTACTO: WHATSAPP, DIRECCIÓN, HORARIOS Y REDES
   * ------------------------------------------------------------ */
  contact: {
    whatsapp: {
      /**
       * NÚMERO DE WHATSAPP.
       * Formato internacional con código de país, SIN espacios,
       * guiones ni símbolos. Ejemplos válidos:
       *   Perú:    51999888777
       *   México:  5215512345678
       *   España:  34612345678
       *   Argentina: 5491122334455
       * ⚠️ Número de ejemplo: reemplázalo por el real.
       */
      number: '51999888777',
      /** Formato legible que se muestra en pantalla. */
      display: '+51 999 888 777',
      /** Mensaje por defecto de los botones generales. */
      defaultMessage:
        'Hola, quisiera consultar la disponibilidad para un corte de cabello.',
      /** Mensaje del botón "Reservar cita" del navbar. */
      bookingMessage:
        'Hola, quisiera reservar una cita. ¿Qué horarios tienen disponibles?',
    },

    /**
     * DIRECCIÓN DE EJEMPLO.
     * No corresponde a un negocio real: edítala con los datos verdaderos.
     * `locality`, `region` y `country` alimentan los datos estructurados
     * (schema.org); el país usa código ISO (Perú = 'PE').
     */
    address: {
      line1: 'Av. de los Ejemplos 123',
      line2: 'Miraflores, Lima — Perú',
      locality: 'Miraflores',
      region: 'Lima',
      country: 'PE',
    },

    /** Enlace de Google Maps configurable (abre el buscador de Maps). */
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Av.%20de%20los%20Ejemplos%20123%20Miraflores%20Lima',
    mapsLabel: 'ABRIR EN GOOGLE MAPS',

    /** Horarios ficticios: edítalos con los horarios reales. */
    hours: [
      { days: 'Lunes a viernes', hours: '10:00 – 20:00' },
      { days: 'Sábados', hours: '09:00 – 19:00' },
      { days: 'Domingos', hours: '10:00 – 15:00' },
    ] satisfies Schedule[],

    /** Handles y URLs de ejemplo: reemplázalos por los perfiles reales. */
    socials: [
      {
        id: 'instagram',
        label: 'Instagram',
        handle: '@blacklabel.ejemplo',
        url: 'https://www.instagram.com/blacklabel.ejemplo',
      },
      {
        id: 'tiktok',
        label: 'TikTok',
        handle: '@blacklabel.ejemplo',
        url: 'https://www.tiktok.com/@blacklabel.ejemplo',
      },
    ] satisfies Social[],
  },

  /* ------------------------------------------------------------
   * LEGAL — política de privacidad (#privacidad)
   * ------------------------------------------------------------ */
  legal: {
    /**
     * Fecha de la última revisión de la política de privacidad.
     * Se muestra en la página `#privacidad`. Actualízala si cambian
     * los datos del negocio o si se añaden herramientas que sí
     * traten datos (analíticas, píxeles, reservas, formularios...).
     */
    politicaActualizada: '16 de octubre de 2026',
  },

  /* ------------------------------------------------------------
   * FOOTER
   * ------------------------------------------------------------ */
  footer: {
    /** Año para el copyright. `null` usa el año en curso. */
    year: null as number | null,
  },
}

export type SiteConfig = typeof siteConfig
