'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Section, SectionTitle } from '@/components/section'
import { getServiceCopy, useLanguage } from '@/lib/i18n'
import { SITE } from '@/lib/site'

export function ServiceDetail({
  kicker,
  title,
  description,
  heroImage,
  bodyTitle,
  body,
  points,
  image,
  imageAlt,
  imageFirst = false,
}: {
  kicker: string
  title: string
  description: string
  heroImage: string
  bodyTitle: string
  body: ReactNode
  points: readonly string[]
  image: string
  imageAlt: string
  imageFirst?: boolean
}) {
  const { lang } = useLanguage()
  const localized = getServiceCopy(title, lang)
  const copy = localized ?? { kicker, title, description, bodyTitle, body: typeof body === 'string' ? body : '', points: [...points], imageAlt }
  const picture = (
    <Image src={image} alt={copy.imageAlt ?? `${copy.title} — ${SITE.name}`} width={1200} height={900} className="aspect-4/3 w-full rounded-md object-cover" />
  )
  return (
    <>
      <PageHero kicker={copy.kicker} title={copy.title} description={copy.description} image={heroImage} />
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {imageFirst ? picture : null}
          <div>
            <SectionTitle>{copy.bodyTitle}</SectionTitle>
            <p className="mt-4 text-muted-foreground">{copy.body || body}</p>
            <ul className="mt-6 flex flex-col gap-3">
              {copy.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          {imageFirst ? null : picture}
        </div>
      </Section>
    </>
  )
}
