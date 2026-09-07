import type { Metadata } from 'next'
import { ServiceDetail } from '@/components/service-detail'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: `Réparations électriques à ${SITE.city} · ${SITE.name}`,
  description: `Recherche de pannes, disjoncteurs qui sautent, odeurs de brûlé et maintenance planifiée par ${SITE.name}. Urgences 24h/24 à ${SITE.city}.`,
}

const POINTS = [
  'Disjoncteurs différentiels qui sautent, prises mortes et lumières qui clignotent',
  'Chaleur, bourdonnement et odeurs de brûlé au tableau',
  'Éclairage de jardin, pompes et alimentation de portail',
  'Contrôles de sécurité annuels pour villas et boutiques',
  'Pas de frais de déplacement si vous donnez suite à la réparation',
  'Téléphone 24h/24 pour les vraies urgences',
]

export default function MaintenancePage() {
  return (
    <ServiceDetail
      kicker="Maintenance"
      title="Réparations et maintenance, y compris en dehors des horaires"
      description="Nous trouvons la panne, chiffrons la réparation et remettons le courant sans remplacer la moitié de la maison."
      heroImage="/images/tools.jpg"
      bodyTitle="Quand quelque chose saute, chauffe ou ne répond plus"
      body={`Appelez le ${SITE.phoneDisplay}. Si c'est dangereux, nous vous disons quoi couper pendant que nous roulons. Si cela peut attendre demain matin, nous vous le disons aussi.`}
      points={POINTS}
      image="/images/switchboard.jpg"
      imageAlt="Tableau électrique résidentiel bien organisé"
      imageFirst
    />
  )
}
