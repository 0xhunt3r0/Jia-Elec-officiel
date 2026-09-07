'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n'
import { SITE } from '@/lib/site'
import { cn } from '@/lib/utils'

export function Stars({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' }) {
  return (
    <span className={cn('inline-flex items-center gap-0.5 text-star', className)} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={size === 'sm' ? 'size-3.5' : 'size-5'}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.6 12.4 7l5.9.5-4.5 3.8 1.4 5.8L10 14.4 4.8 17.1l1.4-5.8L1.7 7.5 7.6 7 10 1.6Z" />
        </svg>
      ))}
    </span>
  )
}

export function GoogleReview({ align = 'center', className }: { align?: 'center' | 'left'; className?: string }) {
  const { t } = useLanguage()
  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-2.5 text-base font-medium text-foreground sm:text-lg',
        align === 'center' && 'justify-center',
        className,
      )}
    >
      <Image src="/logos/google-logo.webp" alt="Google" width={72} height={24} className="h-6 w-auto" />
      <Stars size="sm" />
      <span>{t.common.rateUs}</span>
    </div>
  )
}
