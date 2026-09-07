import type { Metadata } from 'next'
import Image from 'next/image'
import { Clock, MapPin, MessageCircle, Phone, type LucideIcon } from 'lucide-react'
import { FaqList } from '@/components/faq-list'
import { PageHero } from '@/components/page-hero'
import { Section, SectionTitle } from '@/components/section'
import { Button } from '@/components/ui/button'
import { SITE } from '@/lib/site'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: `Contact ${SITE.name} · Électricien à ${SITE.city}`,
  description: `Appelez ou écrivez sur WhatsApp à ${SITE.name} au ${SITE.phoneDisplay}. Devis gratuits pour vos travaux électriques dans tout ${SITE.city}.`,
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title={`Parlez à ${SITE.name}`}
        description="Le téléphone et WhatsApp sont les plus rapides. Le formulaire convient si le travail peut attendre quelques heures."
      />
      <Section id="quote">
        <div className="flex flex-col gap-4 lg:max-w-lg">
          <ContactCard icon={Phone} label="Téléphone" value={SITE.phoneDisplay} href={SITE.phoneHref} />
          <ContactCard icon={MessageCircle} label="WhatsApp" value="Écrivez à l'équipe" href={SITE.whatsapp} />
          <ContactCard
            image="/logos/instagram.svg"
            label="Instagram"
            value="Suivez nos réalisations"
            href={SITE.instagram}
            external
          />
          <ContactCard
            image="/logos/facebook.svg"
            label="Facebook"
            value="Retrouvez-nous sur Facebook"
            href={SITE.facebook}
            external
          />
          <ContactCard icon={Clock} label="Horaires" value={`${SITE.hours}. ${SITE.emergency}.`} />
          <ContactCard icon={MapPin} label="Basé à" value={SITE.base} />
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild>
              <a href={SITE.phoneHref}>Appelez-nous</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={SITE.whatsapp}>WhatsApp</a>
            </Button>
          </div>
        </div>
      </Section>
      <Section className="bg-elevated">
        <SectionTitle>Avant d'appeler</SectionTitle>
        <div className="mt-8">
          <FaqList />
        </div>
      </Section>
    </>
  )
}

function ContactCard({
  icon: Icon,
  image,
  label,
  value,
  href,
  external,
}: {
  icon?: LucideIcon
  image?: string
  label: string
  value: string
  href?: string
  external?: boolean
}) {
  const inner = (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary text-white">
        {image ? (
          <Image src={image} alt="" width={24} height={24} className="size-6 object-contain" />
        ) : (
          Icon && <Icon className="size-5" aria-hidden="true" />
        )}
      </span>
      <span>
        <span className="block text-xs font-medium tracking-wide text-muted-foreground uppercase">{label}</span>
        <span className="mt-1 block font-medium text-foreground">{value}</span>
      </span>
    </>
  )
  const className = 'flex items-start gap-3 rounded-md border border-border bg-elevated p-5'
  if (href) {
    return (
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className={cn(className, 'transition-colors duration-300 hover:border-primary')}
      >
        {inner}
      </a>
    )
  }
  return <div className={className}>{inner}</div>
}
