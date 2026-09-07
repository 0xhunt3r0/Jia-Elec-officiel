import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { HeadingMark } from '@/components/flourish'

export function Section({
  id,
  className,
  innerClassName,
  children,
}: {
  id?: string
  className?: string
  innerClassName?: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      className={cn('px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24', id && 'scroll-mt-28', className)}
    >
      <div className={cn('mx-auto w-full max-w-site', innerClassName)}>{children}</div>
    </section>
  )
}

export function Kicker({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn('text-kicker font-medium text-primary uppercase', className)}>{children}</p>
}

export function SectionTitle({
  children,
  className,
  marked = false,
  align = 'left',
}: {
  children: ReactNode
  className?: string
  marked?: boolean
  align?: 'left' | 'center'
}) {
  return (
    <div className={cn(align === 'center' && 'text-center')}>
      {marked ? <HeadingMark /> : null}
      <h2 className={cn('text-section font-extrabold tracking-wide text-foreground uppercase', className)}>
        {children}
      </h2>
    </div>
  )
}
