import type { Metadata } from 'next'
import { ServiceDetail } from '@/components/service-detail'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: `Mise à niveau des tableaux à ${SITE.city} · ${SITE.name}`,
  description: `Remplacez les vieux tableaux à fusibles, ajoutez des disjoncteurs différentiels et étiquetez chaque circuit. Mise à niveau par ${SITE.name} à ${SITE.city}.`,
}

const POINTS = [
  'Remplacement des fusibles céramique et disjoncteurs fatigués',
  'Ajout de protection différentielle là où elle manque',
  'Place pour climatisation, pompes, véhicule électrique et cuisine',
  'Étiquettes de circuits claires, en français ou en anglais',
  'Changements le jour même sur beaucoup de maisons',
  'Rapport de test à la remise',
]

export default function SwitchboardPage() {
  return (
    <ServiceDetail
      kicker="Tableaux"
      title="Le tableau est le cœur de la maison. Traitez-le comme tel."
      description="Des mises à niveau qui ajoutent de la protection, des départs de réserve et des étiquettes que vous pouvez réellement lire en cas de coupure."
      heroImage="/images/switchboard.jpg"
      bodyTitle="Du fil fusible à un tableau moderne étiqueté"
      body="Les vieux tableaux font sauter toute la maison, cachent les pannes et vous laissent sans protection différentielle. Nous dimensionnons le nouveau tableau selon ce que vous avez aujourd'hui — et la climatisation que vous ajouterez l'été prochain."
      points={POINTS}
      image="/images/switchboard.jpg"
      imageAlt="Électricien travaillant sur un tableau de distribution de villa"
    />
  )
}
