import type { Metadata } from 'next'
import { ServiceDetail } from '@/components/service-detail'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: `Dépannage électrique · ${SITE.name} à ${SITE.city}`,
  description: `Dépannage électrique d'urgence, recherche et réparation de pannes, maintenance pour villas, riads et locaux professionnels par ${SITE.name} à ${SITE.city}.`,
}

const POINTS = [
  "Dépannage électrique d'urgence",
  "Recherche et réparation de pannes",
  "Réparation des tableaux électriques",
  "Réparation des armoires électriques",
  "Réparation des pompes de piscine et de puits",
  "Remplacement des équipements défectueux",
  "Maintenance et entretien",
  "Interventions pour villas, riads et locaux professionnels",
]

export default function DepannagePage() {
  return (
    <ServiceDetail
      kicker="Dépannage"
      title="Dépannage électrique d'urgence"
      description={`Coupures, pannes, disjoncteurs qui sautent, odeurs de brûlé : ${SITE.name} intervient rapidement pour villas, riads et locaux professionnels à ${SITE.city}.`}
      heroImage="/images/depannage1.jpg"
      bodyTitle="Réparation rapide et durable"
      body="Nous trouvons la panne, la réparons sans remplacer inutilement, remplaçons les équipements défectueux et assurons la maintenance et l'entretien de vos installations électriques."
      points={POINTS}
      image="/images/depannage2.jpg"
    />
  )
}