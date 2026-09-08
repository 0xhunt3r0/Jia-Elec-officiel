'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/i18n'
import { SITE } from '@/lib/site'
import { cn } from '@/lib/utils'

export function CtaButtons({ className, quoteHref = '/devis' }: { className?: string; quoteHref?: string }) {
  const { t } = useLanguage()
  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      <Button variant="outline" asChild>
        <a href={SITE.phoneHref} dir="ltr" className="min-w-48 flex-row [unicode-bidi:isolate]">
          <Image src="/icons/call-w.svg" alt="" width={16} height={16} className="size-4" />
          <span>{SITE.phoneDisplay}</span>
        </a>
      </Button>
      <Button asChild>
        <a href={quoteHref} className="electric-button">
          <span className="led" aria-hidden="true" />
          {t.header.freeQuote}
        </a>
      </Button>
    </div>
  )
}
