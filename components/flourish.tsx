import { cn } from '@/lib/utils'

export function TitleFlourish({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 34" className={cn('size-7 text-primary', className)} fill="none" aria-hidden="true">
      <path d="M4 30 V10 H22" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
      <path d="M18 4 l4 4 -4 4 -4 -4 z" fill="currentColor" />
    </svg>
  )
}

export function BoxArk({
  className,
  corner = 'tr',
}: {
  className?: string
  corner?: 'tr' | 'tl' | 'br' | 'bl'
}) {
  const rot =
    corner === 'tr'
      ? ''
      : corner === 'tl'
        ? '-scale-x-100'
        : corner === 'br'
          ? '-scale-y-100'
          : '-scale-x-100 -scale-y-100'
  return (
    <svg viewBox="0 0 72 72" className={cn('text-primary', rot, className)} fill="none" aria-hidden="true">
      <path d="M8 64 V18 H56" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
      <path d="M48 6 l8 8 -8 8 -8 -8 z" fill="currentColor" />
    </svg>
  )
}

export function HeadingMark({ className }: { className?: string }) {
  return (
    <div className={cn('mb-3 flex justify-center', className)} aria-hidden="true">
      <svg viewBox="0 0 44 36" className="h-8 w-10 text-primary" fill="none">
        <path d="M6 32 V12 H22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
        <path d="M18 4 l5 5 -5 5 -5 -5 z" fill="currentColor" />
        <path d="M38 4 V24 H22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
        <path d="M26 32 l5 -5 5 5 -5 5 z" fill="currentColor" />
      </svg>
    </div>
  )
}
