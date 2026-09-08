import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Section } from '@/components/section'
import { DevisHero } from '@/components/devis-hero'
import { SITE } from '@/lib/site'

// The multistep form pulls a large client bundle (framer-motion, selects…).
// Loading it lazily lets the page paint instantly while the form chunk streams in.
const QuoteMultistep = dynamic(
  () => import('@/components/quote-multistep').then((m) => m.QuoteMultistep),
  {
    loading: () => <QuoteSkeleton />,
  },
)

function QuoteSkeleton() {
  return (
    <div
      className="rounded-md border border-border bg-elevated p-6 sm:p-8"
      aria-busy="true"
      aria-label="Chargement du formulaire"
    >
      <div className="mb-6">
        <div className="h-5 w-64 animate-pulse rounded bg-muted" />
        <div className="mt-2 h-4 w-96 max-w-full animate-pulse rounded bg-muted" />
      </div>
      <div className="mb-8 flex justify-between">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="size-6 animate-pulse rounded-full bg-muted" />
            <div className="h-2 w-16 animate-pulse rounded bg-muted" />
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <div className="h-24 w-full animate-pulse rounded bg-muted" />
        <div className="h-12 w-full animate-pulse rounded bg-muted" />
        <div className="h-12 w-full animate-pulse rounded bg-muted" />
      </div>
      <div className="mt-6 h-12 w-48 animate-pulse rounded bg-muted" />
    </div>
  )
}

export const metadata: Metadata = {
  title: `Demander un devis gratuit · ${SITE.name} à ${SITE.city}`,
  description: `Formulaire en 4 étapes pour demander votre devis gratuit — ${SITE.name}, électricien à ${SITE.city}. Réponse par téléphone, généralement le jour même.`,
}

export default function DevisPage() {
  return (
    <>
      <DevisHero />
      <Section id="quote">
        <QuoteMultistep />
      </Section>
    </>
  )
}