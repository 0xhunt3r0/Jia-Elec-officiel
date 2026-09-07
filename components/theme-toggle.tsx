'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const [light, setLight] = useState(false)

  useEffect(() => {
    // hydrate from the class applied by the layout's no-flash script
    setLight(document.documentElement.classList.contains('light'))
  }, [])

  const toggle = () => {
    const next = !light
    setLight(next)
    document.documentElement.classList.toggle('light', next)
    try {
      window.localStorage.setItem('theme', next ? 'light' : 'dark')
    } catch {
      /* ignore storage errors */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? 'Passer en mode sombre' : 'Passer en mode clair'}
      title={light ? 'Passer en mode sombre' : 'Passer en mode clair'}
      className={cn(
        'inline-flex size-10 items-center justify-center rounded-sm border border-border text-foreground transition-colors duration-300 hover:border-primary hover:text-primary',
        className,
      )}
    >
      {light ? <Moon className="size-4" aria-hidden="true" /> : <Sun className="size-4" aria-hidden="true" />}
    </button>
  )
}