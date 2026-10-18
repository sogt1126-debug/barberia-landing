import { siteConfig } from '../config/site'

/**
 * Construye un enlace de WhatsApp con el mensaje predefinido.
 * Documentación: https://faq.whatsapp.com/591339899867293
 */
export function whatsappUrl(message?: string): string {
  const { number, defaultMessage } = siteConfig.contact.whatsapp
  const text = message ?? defaultMessage
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`
}

/** Mensaje personalizado para cada servicio. */
export function serviceMessage(serviceName: string): string {
  return `Hola, quisiera consultar la disponibilidad para el servicio ${serviceName}.`
}

/** Formatea un precio con la moneda centralizada: 25 -> "S/ 25". */
export function formatPrice(price: number): string {
  const { currency } = siteConfig.pricing
  return `${currency} ${price}`
}
