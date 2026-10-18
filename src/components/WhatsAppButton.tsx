import { WhatsAppIcon } from './BrandIcons'
import { whatsappUrl } from '../lib/whatsapp'

type WhatsAppButtonProps = {
  label: string
  /** Mensaje predefinido que llega al chat. */
  message?: string
  variant?: 'primary' | 'outline'
  className?: string
}

const variants = {
  primary:
    'btn-primary bg-gold text-ink hover:bg-[#d8b983] hover:-translate-y-0.5 active:scale-[0.98] active:duration-150 shadow-[0_14px_30px_-16px_rgba(0,0,0,0.9)]',
  outline:
    'border border-cream/25 text-cream hover:border-gold hover:text-gold hover:bg-gold/5 active:scale-[0.98] active:duration-150',
} as const

/**
 * Botón conversión hacia WhatsApp: abre wa.me con el mensaje configurado.
 * `target="_blank"` + `rel` para abrir en una pestaña nueva de forma segura.
 */
export function WhatsAppButton({
  label,
  message,
  variant = 'primary',
  className = '',
}: WhatsAppButtonProps) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-md px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition duration-300 ${variants[variant]} ${className}`.trim()}
    >
      <WhatsAppIcon className="size-4 shrink-0" />
      <span>{label}</span>
    </a>
  )
}
