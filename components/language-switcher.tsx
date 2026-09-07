'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Globe } from 'lucide-react'
import { LANGS, useLanguage } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({ align = 'start' }: { align?: 'start' | 'end' }) {
  const { lang, t, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.switchLanguage}
        title={t.switchLanguage}
        className="inline-flex h-10 items-center gap-1.5 rounded-sm border border-border px-2.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
      >
        <Globe className="size-4" aria-hidden="true" />
        <span className="uppercase">{lang}</span>
        <ChevronDown
          className={cn('size-3.5 transition-transform duration-200', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div
          role="listbox"
          aria-label={t.language}
          className={cn(
            'absolute top-full z-50 mt-2 min-w-44 overflow-hidden rounded-sm border border-border bg-elevated py-1 shadow-menu',
            align === 'end' ? 'right-0' : 'left-0',
          )}
        >
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              role="option"
              aria-selected={l.code === lang}
              onClick={() => {
                setLang(l.code)
                setOpen(false)
              }}
              className={cn(
                'flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm transition-colors',
                l.code === lang ? 'text-foreground' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              <span className="flex items-center gap-2.5">
                <span
                  className={cn(
                    'inline-flex w-6 justify-center text-xs font-bold uppercase',
                    l.code === lang ? 'text-primary' : 'text-muted-foreground',
                  )}
                >
                  {l.short}
                </span>
                <span>{l.name}</span>
              </span>
              {l.code === lang ? <Check className="size-4 text-primary" aria-hidden="true" /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}