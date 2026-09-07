'use client'

import Image from 'next/image'
import { MessageCircle, Phone } from 'lucide-react'
import { interp, useLanguage } from '@/lib/i18n'
import { SITE } from '@/lib/site'

export function MobileCta() {
  const { t } = useLanguage()
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-3 border-t border-border bg-elevated pb-[env(safe-area-inset-bottom)] lg:hidden">
        <a
          href={SITE.phoneHref}
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-medium text-foreground"
        >
          <Phone className="size-4" aria-hidden="true" />
          {t.mobileCta.call}
        </a>
        <a
          href={SITE.whatsapp}
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 bg-primary text-xs font-semibold text-primary-foreground"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          {t.mobileCta.whatsapp}
        </a>
        <a
          href="/devis"
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 text-xs font-medium text-foreground"
        >
          {t.mobileCta.quote}
        </a>
      </div>
      <a
        href={SITE.whatsapp}
        className="fixed right-5 bottom-20 z-20 inline-flex size-12 items-center justify-center rounded-full bg-background/90 p-1 shadow-md transition-transform duration-150 ease-out hover:scale-105 lg:right-6 lg:bottom-6"
        aria-label={interp(t.mobileCta.whatsappAria, { name: SITE.name })}
      >
        <Image
          src="/logos/whatsapp.png"
          alt="WhatsApp"
          width={48}
          height={48}
          className="size-11 object-contain"
        />
      </a>
    </>
  )
}
