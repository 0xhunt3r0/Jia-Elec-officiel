'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { GoogleReview } from '@/components/stars'
import { interp, useLanguage } from '@/lib/i18n'
import { SITE } from '@/lib/site'

export function SiteFooter() {
  const { t } = useLanguage()
  return (
    <footer className="relative border-t border-border bg-background pb-24 lg:pb-0">
      <div className="mx-auto max-w-site px-4 pt-16 pb-10 sm:px-6 lg:px-8 lg:pt-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex w-full max-w-xs flex-col items-start border-border lg:border-r lg:pr-10">
            <Logo />
            <GoogleReview align="left" className="mt-6 text-sm" />
            <p className="mt-4 text-sm text-muted-foreground">{interp(t.footer.desc, { city: t.city })}</p>
          </div>
          <div className="grid flex-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:pl-8">
            <div>
              <h2 className="mb-6 text-base font-bold tracking-wide text-primary uppercase">{t.footer.explore}</h2>
              <ul>
                {t.nav.map((item) => (
                  <li key={item.to}>
                    <Link
                      href={item.to}
                      className="mb-4 inline-block text-sm text-foreground transition-colors duration-300 hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-base font-bold tracking-wide text-primary uppercase">{t.footer.services}</h2>
              <ul>
                {t.serviceLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.to}
                      className="mb-4 inline-block text-sm text-foreground transition-colors duration-300 hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-base font-bold tracking-wide text-primary uppercase">{t.footer.getInTouch}</h2>
              <ul className="flex flex-col gap-5 text-sm text-foreground">
                <li>
                  <p className="font-medium">{t.footer.phone}</p>
                  <a href={SITE.phoneHref} className="hover:text-primary">
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li>
                  <p className="font-medium">{t.footer.hours}</p>
                  <p>
                    {t.hours}
                    <br />
                    {t.emergency}
                  </p>
                </li>
                <li>
                  <p className="font-medium">{t.footer.based}</p>
                  <p>{t.base}</p>
                </li>
              </ul>
              <div className="mt-6 flex gap-4">
                <a href={SITE.facebook} className="opacity-80 hover:opacity-100" aria-label="Facebook">
                  <Image src="/logos/facebook.svg" alt="" width={16} height={16} className="h-4 w-auto" />
                </a>
                <a href={SITE.instagram} className="opacity-80 hover:opacity-100" aria-label="Instagram">
                  <Image src="/logos/instagram.svg" alt="" width={16} height={16} className="h-4 w-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-site flex-col gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.legal}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
