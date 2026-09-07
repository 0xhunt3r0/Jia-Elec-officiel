import type { Metadata } from 'next'
import { QuoteMultistep } from '@/components/quote-multistep'
import { Section } from '@/components/section'
import { PageHero } from '@/components/page-hero'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: `Demander un devis gratuit · ${SITE.name} à ${SITE.city}`,
  description: `Formulaire en 4 étapes pour demander votre devis gratuit — ${SITE.name}, électricien à ${SITE.city}. Réponse par téléphone, généralement le jour même.`,
}

export default function DevisPage() {
  return (
    <>
      <PageHero
        kicker="Devis"
        title="Demander un devis gratuit"
        description="4 étapes rapides. Nous répondons par téléphone, généralement le jour même."
      />
      <Section id="quote">
        <QuoteMultistep />
      </Section>
    </>
  )
}