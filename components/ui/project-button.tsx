'use client'

import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Reusable premium CTA — a pill-shaped "Lancer mon projet" button paired with a
 * separate circular arrow button (8px gap), both in the brand lime (#D2ED9F).
 */
export function ProjectButton({
  label = 'Lancer mon projet',
  href = '#quote',
  className,
}: {
  label?: string
  href?: string
  className?: string
}) {
  return (
    <div className={cn('group inline-flex w-full max-w-full items-center gap-2 sm:w-auto', className)}>
      <a
        href={href}
        aria-label={label}
        className="flex h-[55px] flex-1 items-center justify-center rounded-full bg-[#D2ED9F] px-[30px] text-base font-medium text-[#1c1c1c] transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#c2e681] sm:flex-none"
      >
        {label}
      </a>
      <a
        href={href}
        aria-label={`${label} — open`}
        className="flex size-[51px] shrink-0 items-center justify-center rounded-full bg-[#D2ED9F] text-[#1c1c1c] shadow-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#c2e681]"
      >
        <ArrowUpRight className="size-5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.8} />
      </a>
    </div>
  )
}