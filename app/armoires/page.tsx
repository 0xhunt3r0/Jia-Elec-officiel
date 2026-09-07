import type { Metadata } from 'next'
import { ServiceDetail } from '@/components/service-detail'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: `Câblage des armoires électriques & locaux techniques · ${SITE.name} à ${SITE.city}`,
  description: `Installation et câblage des armoires électriques, locaux techniques, pompes de piscine et de puits, et systèmes d'irrigation par ${SITE.name} à ${SITE.city}.`,
}

const POINTS = [
  "Installation et câblage des armoires électriques",
  "Raccordement des équipements",
  "Aménagement des locaux techniques",
  "Installation des pompes de piscine",
  "Installation des pompes de puits",
  "Raccordement des pompes",
  "Systèmes d'irrigation et d'arrosage",
  "Contrôle et mise en service des installations",
]

export default function ArmoiresPage() {
  return (
    <ServiceDetail
      kicker="Armoires électriques"
      title="Câblage des armoires électriques et locaux techniques"
      description={`Des armoires proprement câblées et des locaux techniques opérationnels pour les piscines et les puits — par ${SITE.name} à ${SITE.city}.`}
      heroImage="/images/switchboard.jpg"
      bodyTitle="Armoires, pompes et locaux techniques"
      body="Nous installons et câblons vos armoires électriques, raccordons les pompes de piscine et de puits, aménageons les locaux techniques et mettons le tout en service et sous contrôle."
      points={POINTS}
      image="/images/outdoor.jpg"
      imageAlt="Piscine avec équipement technique électrique"
    />
  )
}