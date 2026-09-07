'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import { LanguageSwitcher } from '@/components/language-switcher'
import { Logo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { interp, useLanguage } from '@/lib/i18n'
import { AREAS, SITE } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 z-40 w-full transition-all duration-300 ease-out',
          scrolled && !open ? 'px-3 pt-3 lg:px-6' : 'px-0 pt-0',
        )}
      >
        <div
          className={cn(
            'nav-shell mx-auto flex max-w-site items-center justify-between gap-4 transition-all duration-300 ease-out',
            scrolled && !open
              ? 'h-20 rounded-2xl border border-border/60 bg-background/70 px-4 shadow-menu backdrop-blur-sm lg:px-6'
              : 'h-auto bg-transparent px-4 py-3 lg:px-8',
          )}
        >
          <Logo />
          <nav className="hidden flex-1 items-center justify-center lg:flex" aria-label={t.primary}>
            {t.nav.map((item) =>
              item.to === '/services' ? (
                <ServicesMega key={item.to} />
              ) : item.to === '/areas' ? (
                <AreasMega key={item.to} />
              ) : (
                <Link
                  key={item.to}
                  href={item.to}
                  className="inline-flex h-full items-center px-3 text-sm font-normal tracking-wide text-foreground uppercase transition-colors duration-300 hover:text-primary xl:px-5 xl:text-base"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <LanguageSwitcher align="end" />
            <ThemeToggle />
            <a
              href={SITE.phoneHref}
              className="hidden items-center gap-2 text-sm font-semibold text-foreground transition-colors duration-300 hover:text-primary xl:inline-flex xl:text-base"
            >
              <Image src="/icons/green-phone.svg" alt="" width={14} height={14} className="size-3.5" />
              {SITE.phoneDisplay}
            </a>
            <Button asChild className="px-5 py-2.5 text-sm xl:px-8 xl:py-3.5 xl:text-base">
              <a href="/devis" className="electric-button">
                <span className="led" aria-hidden="true" />
                {t.header.requestQuote}
              </a>
            </Button>
          </div>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center self-center text-foreground lg:hidden"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>
      {open ? (
        <div className="fixed inset-0 z-30 overflow-y-auto bg-background pt-20 lg:hidden">
          <nav className="flex flex-col px-4 py-4" aria-label={t.mobile}>
            <div className="mb-2 flex justify-start">
              <LanguageSwitcher align="start" />
              <ThemeToggle className="ml-3" />
            </div>
            {t.nav.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center border-b border-border py-3 text-lg font-medium text-foreground uppercase"
              >
                {item.label}
              </Link>
            ))}
            {t.serviceMenu.map((group) => (
              <Link
                key={group.title}
                href={group.to}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center border-b border-border py-3 text-base text-muted-foreground"
              >
                {group.title}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <Button asChild>
                <a href="/devis" onClick={() => setOpen(false)}>
                  {t.header.freeQuote}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={SITE.phoneHref}>
                  {t.header.call} {SITE.phoneDisplay}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  )
}
function ServicesMega() {
  const { t } = useLanguage()
  return (
    <div className="group relative flex h-full items-center">
      <Link
        href="/services"
        className="inline-flex items-center gap-1 px-3 text-sm font-normal tracking-wide text-foreground uppercase transition-colors duration-300 group-hover:text-primary xl:px-5 xl:text-base"
      >
        {t.nav.find((n) => n.to === '/services')?.label}
        <ChevronDown className="size-3.5" aria-hidden="true" />
      </Link>
      <div className="invisible absolute top-full left-1/2 z-20 w-[min(90vw,42rem)] origin-top -translate-x-1/2 scale-y-0 rounded-b-sm bg-popover p-8 text-left opacity-0 shadow-menu transition-[opacity,transform,visibility] duration-300 group-hover:visible group-hover:scale-y-100 group-hover:opacity-100 group-focus-within:visible group-focus-within:scale-y-100 group-focus-within:opacity-100">
        <p className="mb-5 max-w-sm text-sm text-popover-foreground">
          {interp(t.header.servicesMenuNote, { name: SITE.name })}
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {t.serviceMenu.map((group) => (
            <div key={group.title}>
              <Link href={group.to} className="text-sm font-semibold text-popover-foreground uppercase hover:text-primary">
                {group.title}
              </Link>
              <ul className="mt-3 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.to} className="text-sm text-popover-foreground/70 hover:text-primary">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button size="sm" asChild>
            <a href={SITE.phoneHref}>{SITE.phoneDisplay}</a>
          </Button>
          <Button size="sm" variant="dark" asChild>
            <a href="/devis">{t.header.freeQuote}</a>
          </Button>
        </div>
      </div>
    </div>
  )
}

function AreasMega() {
  const { t } = useLanguage()
  return (
    <div className="group relative flex h-full items-center">
      <Link
        href="/areas"
        className="inline-flex items-center gap-1 px-3 text-sm font-normal tracking-wide text-foreground uppercase transition-colors duration-300 group-hover:text-primary xl:px-5 xl:text-base"
      >
        {t.nav.find((n) => n.to === '/areas')?.label}
        <ChevronDown className="size-3.5" aria-hidden="true" />
      </Link>
      <div className="invisible absolute top-full left-1/2 z-20 w-[min(92vw,48rem)] origin-top -translate-x-1/2 scale-y-0 rounded-b-sm bg-popover p-8 text-left opacity-0 shadow-menu transition-[opacity,transform,visibility] duration-300 group-hover:visible group-hover:scale-y-100 group-hover:opacity-100 group-focus-within:visible group-focus-within:scale-y-100 group-focus-within:opacity-100">
        <p className="text-sm font-semibold text-popover-foreground">{t.header.areasWeServe}</p>
        <p className="mt-1 mb-4 text-sm text-popover-foreground/70">{interp(t.header.coverAreas, { city: t.city })}</p>
        <ul className="grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
          {AREAS.map((area) => (
            <li key={area.name}>
              <Link href="/areas" className="text-sm text-popover-foreground hover:text-primary">
                {interp(t.header.electricianIn, { name: area.name })}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
