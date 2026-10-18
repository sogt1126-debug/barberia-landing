import { whatsappUrl } from '../lib/whatsapp'
import { WhatsAppIcon } from './BrandIcons'

/**
 * Botón flotante de conversión: el objetivo principal de la página,
 * siempre visible. Glifo y etiqueta en tinta sobre verde WhatsApp
 * (9.9:1 de contraste, cumple AA incluso para la etiqueta).
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar cita por WhatsApp"
      className="fab-pulse group fixed bottom-[calc(1.25rem_+_env(safe-area-inset-bottom))] right-5 z-40 inline-flex items-center gap-0 rounded-full bg-[#25D366] p-4 text-ink shadow-[0_14px_34px_-14px_rgba(0,0,0,0.8)] transition duration-300 hover:-translate-y-1 hover:bg-[#1eb557] sm:hover:gap-2.5 sm:hover:px-5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <WhatsAppIcon className="size-6 shrink-0" />

      <span
        aria-hidden="true"
        className="hidden max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 group-hover:max-w-[12rem] group-hover:pl-1 sm:inline"
      >
        Reservar cita
      </span>
    </a>
  )
}
