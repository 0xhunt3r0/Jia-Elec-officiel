import type { Metadata } from 'next'
import { ServiceDetail } from '@/components/service-detail'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: `Nouvelle installation – Construction neuve · ${SITE.name} à ${SITE.city}`,
  description: `Installation électrique complète des constructions neuves à ${SITE.city} par ${SITE.name} : tableau, câblage, éclairage, prises, interrupteurs et locaux techniques.`,
}

const POINTS = [
  "Installation électrique complète",
  "Éclairage intérieur et extérieur",
  "Installation des tableaux électriques",
  "Câblage des armoires électriques",
  "Installation des prises et interrupteurs",
  "Installation des locaux techniques",
  "Pompes de piscine",
  "Pompes de puits",
  "Systèmes d'irrigation et d'arrosage",
]

export default function InstallationPage() {
  return (
    <ServiceDetail
      kicker="Nouvelle installation"
      title="Installation électrique complète pour constructions neuves"
      description={`De la conception du tableau au dernier interrupteur, ${SITE.name} équipe les constructions neuves avec des installations propres, sûres et conformes aux normes.`}
      heroImage="/images/installation1.jpg"
      bodyTitle="Ce que nous installons"
      body="Nous prenons en charge l'installation électrique complète d'une construction neuve : circuit d'alimentation, tableau, câblage, éclairage, prises et locaux techniques liés à la piscine et au puits."
      points={POINTS}
      image="/images/installation2.jpg"
    />
  )
}
