import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { WorkGallery } from '@/components/work-gallery'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: `Nos réalisations · Projets électriques à ${SITE.city} · ${SITE.name}`,
  description: `Projets récents de ${SITE.name} à ${SITE.city} — tableaux, éclairage, recâblage de riads et aménagements commerciaux.`,
}

export default function WorkPage() {
  return (
    <>
      <PageHero
        kicker="Nos réalisations"
        title={`Projets électriques récents à ${SITE.city}`}
        description="Tableaux, éclairage, caméras et installations soignées dans des riads, villas et boutiques."
        image="/gallery/gallery-1.webp"
      />
      <WorkGallery />
    </>
  )
}
