import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CtaButtons } from '@/components/cta-buttons'
import { PageHero } from '@/components/page-hero'
import { Section, SectionTitle } from '@/components/section'
import { HOME_SERVICES, SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: `Services électriques à ${SITE.city} · ${SITE.name}`,
  description: `Installation, réparations, mise à niveau de tableaux, éclairage et sécurité — ${SITE.name} couvre maisons, riads, villas et commerces dans tout ${SITE.city}.`,
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title={`Services électriques pour les maisons et commerces de ${SITE.city}`}
        description="Installation, recherche de pannes, tableaux, éclairage et caméras. Une équipe locale, des devis écrits, pas de frais de déplacement."
        image="/images/install.jpg"
      />
      <Section className="bg-elevated">
        <SectionTitle>Nos services</SectionTitle>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Cliquez sur un service pour découvrir tous les détails et prestations.
        </p>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2">
          {HOME_SERVICES.map((service) => (
            <li key={service.to}>
              <Link
                href={service.to}
                className="group block overflow-hidden rounded-md border border-border bg-elevated transition-[border-color] duration-300 hover:border-primary"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1200}
                  height={900}
                  className="aspect-16/10 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <h2 className="p-6 text-center text-lg font-semibold tracking-wide text-foreground uppercase">
                  {service.title}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <Section className="bg-elevated">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle>Boutiques, bureaux et ateliers</SectionTitle>
            <p className="mt-4 text-muted-foreground">
              Showrooms de Sidi Ghanem, boutiques de Guéliz et plateaux de bureaux. Nous planifions le tableau,
              l'éclairage et l'alimentation des enseignes autour de votre date d'ouverture — pas l'inverse.
            </p>
            <CtaButtons className="mt-6" />
          </div>
          <Image
            src="/images/commercial.jpg"
            alt="Intérieur de boutique avec éclairage sur rail"
            width={1200}
            height={900}
            className="aspect-4/3 w-full rounded-md object-cover"
          />
        </div>
      </Section>
    </>
  )
}
