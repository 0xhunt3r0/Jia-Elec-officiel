import type { Metadata } from 'next'
import { ServiceDetail } from '@/components/service-detail'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: `Rénovation d'une installation électrique · ${SITE.name} à ${SITE.city}`,
  description: `Mise aux normes, sécurisation, modernisation de l'éclairage et remise à niveau de vos installations électriques par ${SITE.name} à ${SITE.city}.`,
}

const POINTS = [
  "Mise aux normes électriques",
  "Sécurisation de l'installation",
  "Rénovation du câblage",
  "Modernisation de l'éclairage",
  "Remplacement des tableaux électriques",
  "Modernisation des armoires électriques",
  "Remise à niveau des installations existantes",
]

export default function RenovationPage() {
  return (
    <ServiceDetail
      kicker="Rénovation"
      title="Rénovation et mise aux normes d'une installation électrique"
      description={`Des installations vétustes aux nouvelles normes : ${SITE.name} sécurise, modernise et remet à niveau votre électricité pour la rendre fiable et conforme.`}
      heroImage="/images/renovation1.jpg"
      bodyTitle="Sécuriser et moderniser votre installation"
      body="Nous identifions les risques (câbles fatigués, tableaux obsolètes, absence de protection différentielle) et remettons votre installation aux normes, avec un éclairage modernisé et des équipements remplacés proprement."
      points={POINTS}
      image="/images/renovation2.jpg"
    />
  )
}