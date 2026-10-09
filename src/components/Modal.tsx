import { useEffect, useRef, type ReactNode } from 'react'

export function Modal({ open, onClose, className, label, children }: {
  open: boolean; onClose: () => void; className?: string; label: string; children: ReactNode
}) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])
  return (
    <dialog
      ref={ref}
      className={className}
      aria-label={label}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      {children}
    </dialog>
  )
}
