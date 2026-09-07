'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n'
import { Section } from '@/components/section'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

const BRAND_LOGOS: { src: string; name: string; className?: string }[] = [
  { src: '/brands/schneider.png', name: 'Schneider Electric', className: 'h-14' },
  { src: '/brands/legrand.png', name: 'Legrand', className: 'h-24' },
  { src: '/brands/hager.png', name: 'Hager', className: 'h-16' },
  { src: '/brands/abb.png', name: 'ABB', className: 'h-14' },
  { src: '/brands/ingelec.png', name: 'Ingelec', className: 'h-20' },
]

export function TrustedBrands() {
  const { t } = useLanguage()
  return (
    <Section className="bg-elevated">
      <h2 className="text-center text-xl font-bold tracking-widest text-foreground uppercase sm:text-2xl">
        {t.trustedBrands.title}
      </h2>
      <div className="relative mx-auto mt-10 h-28 max-w-4xl overflow-hidden">
        <InfiniteSlider className="flex h-full w-full items-center" duration={25} gap={64}>
          {BRAND_LOGOS.map((brand) => (
            <div key={brand.name} className="flex w-40 shrink-0 items-center justify-center">
              <Image
                src={brand.src}
                alt={`${brand.name} logo`}
                width={140}
                height={56}
                unoptimized
                className={brand.className ?? 'h-14 w-auto object-contain'}
              />
            </div>
          ))}
        </InfiniteSlider>
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-24 sm:w-40 lg:w-56"
          direction="left"
          blurIntensity={1.5}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-24 sm:w-40 lg:w-56"
          direction="right"
          blurIntensity={1.5}
        />
      </div>
    </Section>
  )
}
