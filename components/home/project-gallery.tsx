'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react'
import { PROJECTS } from '@/lib/site'
import { interp, useLanguage } from '@/lib/i18n'

export function ProjectGallery() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  const scrollGallery = (direction: 'left' | 'right') => {
    galleryRef.current?.scrollBy({
      left: direction === 'right' ? galleryRef.current.clientWidth * 0.72 : -galleryRef.current.clientWidth * 0.72,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative mt-12 w-full overflow-hidden">
      <button
        type="button"
        onClick={() => scrollGallery('left')}
        aria-label="Show previous project"
        className="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-background/90 text-foreground shadow-lg transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:left-6 lg:left-10"
      >
        <ChevronLeft className="size-5" aria-hidden="true" />
      </button>
      <div
        ref={galleryRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-[10vw] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-8 sm:px-[8vw] lg:gap-10 lg:px-[7vw]"
        aria-label="Recent electrical projects"
      >
        {PROJECTS.map((project) => (
          <Link
            key={project.title}
            href="/work"
            aria-label={`${project.title}, view all projects`}
            className="group relative block w-[86vw] max-w-[38rem] shrink-0 snap-center overflow-hidden rounded-md sm:w-[56vw] lg:w-[42vw]"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={1200}
              className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
        ))}
      </div>
      <button
        type="button"
        onClick={() => scrollGallery('right')}
        aria-label="Show next project"
        className="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border/70 bg-background/90 text-foreground shadow-lg transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:right-6 lg:right-10"
      >
        <ChevronRight className="size-5" aria-hidden="true" />
      </button>
      <Link
        href="/work"
        className="mt-3 block text-center text-xs tracking-[0.12em] text-muted-foreground uppercase transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {t.projects.seeMore}
      </Link>
    </div>
  )
}

export function ProjectsHeading() {
  const { t } = useLanguage()
  return (
    <>
      <div className="flex justify-center text-primary">
        <Zap className="size-10 stroke-[1.4]" aria-hidden="true" />
      </div>
      <h2 className="mt-4 text-center text-section font-semibold tracking-wide text-foreground uppercase">
        {t.projects.heading}
      </h2>
      <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
        {interp(t.projects.subtitle, { city: t.city })}
      </p>
    </>
  )
}
