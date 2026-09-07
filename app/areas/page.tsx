import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Section, SectionTitle } from '@/components/section'
import { LocationsGrid } from '@/components/locations-grid'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: `Électricien près de chez vous à ${SITE.city} · ${SITE.name}`,
  description: `${SITE.name} couvre Guéliz, Hivernage, la Médina, la Palmeraie, Targa, Sidi Ghanem et le reste de ${SITE.city}.`,
}

export default function AreasPage() {
  return (
    <>
      <PageHero
        kicker="Secteurs"
        title="Nos secteurs d'intervention"
        description="Une équipe mobile dans tout Marrakech. Visites le jour même en ville ; nous intervenons aussi à la Palmeraie, sur la route d'Ourika et à Sidi Ghanem."
        image="/images/outdoor.jpg"
      />
      <Section>
        <SectionTitle>Les quartiers où nous intervenons</SectionTitle>
        <LocationsGrid />
      </Section>
    </>
  )
}
