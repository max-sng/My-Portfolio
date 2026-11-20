import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

/** Full-screen image viewer. Closes on Esc, backdrop click or the Close button. */
export default function Lightbox({ item, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!item) return
    const prev = document.activeElement
    closeRef.current?.focus()
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      prev?.focus?.()
    }
  }, [item, onClose])

  if (!item) return null
  return (
    <div role="dialog" aria-modal="true" aria-label={item.title} className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-5 md:p-16" onClick={onClose}>
      <figure className="m-0 flex max-h-full max-w-5xl flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
        <img src={item.src} alt={item.title} className="max-h-[78vh] w-auto max-w-full object-contain" />
        <figcaption className="flex w-full items-center justify-between gap-4 text-white">
          <span className="font-sub text-2xl font-bold uppercase">{item.title}</span>
          <button ref={closeRef} type="button" onClick={onClose} className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-full border-0 bg-white px-5 text-[15px] font-bold text-ink">
            <X size={16} aria-hidden="true" /> Close
          </button>
        </figcaption>
      </figure>
    </div>
  )
}
