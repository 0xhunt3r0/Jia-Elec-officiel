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
      <div className="fixed right-5 bottom-20 z-20 flex flex-col items-center gap-2 lg:bottom-6 lg:right-6">
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-12 items-center justify-center rounded-full bg-background/90 p-1 shadow-md transition-transform duration-150 ease-out hover:scale-105"
          aria-label="Instagram"
        >
          <Image src="/logos/instagram.png" alt="Instagram" width={48} height={48} className="size-11 object-contain" />
        </a>
        <a
          href={SITE.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-12 items-center justify-center rounded-full bg-background/90 p-1 shadow-md transition-transform duration-150 ease-out hover:scale-105"
          aria-label="Facebook"
        >
          <Image src="/logos/facebook.png" alt="Facebook" width={48} height={48} className="size-11 object-contain" />
        </a>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-12 items-center justify-center rounded-full bg-background/90 p-1 shadow-md transition-transform duration-150 ease-out hover:scale-105"
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
      </div>
    </>
  )
}
