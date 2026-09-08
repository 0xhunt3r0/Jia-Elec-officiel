'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CtaButtons } from '@/components/cta-buttons'
import { TitleFlourish } from '@/components/flourish'
import { GoogleReview } from '@/components/stars'
import { HERO_SLIDES } from '@/lib/site'
import { useLanguage } from '@/lib/i18n'
import { cn } from '@/lib/utils'

export function Hero() {
  const [index, setIndex] = useState(0)
  const slide = HERO_SLIDES[index]
  const { t } = useLanguage()

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length)
    }, 7000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section className="relative isolate min-h-svh overflow-hidden">
      {HERO_SLIDES.map((item, i) => (
        <div
          key={item.title}
          className={cn('absolute inset-0 transition-opacity duration-700', i === index ? 'opacity-100' : 'opacity-0')}
          aria-hidden={i !== index}
        >
          {/* Desktop image (≥640px) */}
          <Image
            src={item.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="hidden object-cover sm:block"
          />
          {/* Mobile image (<640px) */}
          <Image
            src={item.imageMobile}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover sm:hidden"
          />
        </div>
      ))}
      <div className="hero-overlay absolute inset-0 bg-linear-to-b from-background via-background/55 to-background/80" />
      <div className="relative mx-auto flex min-h-svh max-w-site flex-col items-center justify-center px-4 py-28 text-center sm:px-6 lg:px-8">
        <GoogleReview className="mb-6" />
               <h1 className="hero-title max-w-4xl text-display font-semibold tracking-wide text-foreground italic">
          {slide.eyebrow}
        </h1>
        <p className="hero-subtitle mt-4 max-w-2xl text-lg font-normal text-foreground sm:text-xl">
          {t.hero.slides[index] ?? slide.title}
        </p>
        <CtaButtons className="hero-cta mt-8 justify-center" />
      </div>
      <button
        type="button"
        className="absolute top-1/2 left-3 z-10 hidden size-11 -translate-y-1/2 items-center justify-center text-foreground/80 transition-colors hover:text-primary sm:inline-flex"
        aria-label="Previous slide"
        onClick={() => setIndex((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
      >
        <ChevronLeft className="size-8" />
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-3 z-10 hidden size-11 -translate-y-1/2 items-center justify-center text-foreground/80 transition-colors hover:text-primary sm:inline-flex"
        aria-label="Next slide"
        onClick={() => setIndex((i) => (i + 1) % HERO_SLIDES.length)}
      >
        <ChevronRight className="size-8" />
      </button>
    </section>
  )
}
