export const SITE = {
  name: "Jia Elec",
  legal: "Jia Elec",
  city: "Marrakech",
  country: "Morocco",
  tagline: "Votre partenaire de confiance pour des solutions électriques sûres et fiables",
  description:
    "Jia Elec est un électricien agréé à Marrakech. Installation, réparation, mise à niveau de tableaux électriques, éclairage et interventions d'urgence 24h/24 — avec des devis clairs et sans surprise.",
  phone: "+212661391599",
  phoneDisplay: "+212 6 61 39 15 99",
  phoneHref: "tel:+212661391599",
  whatsapp: "https://wa.me/212661391599",
  hours: "Lun–Sam 08:00–19:00",
  emergency: "Interventions d'urgence 24h/24",
  base: "Marrakech",
  reviews: "80+",
  rating: "5.0",
  instagram: "https://www.instagram.com/jiaelec",
  facebook: "https://www.facebook.com/profile.php?id=61593943490616",
} as const;

export const NAV = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Nos réalisations", to: "/work" },
  { label: "Secteurs", to: "/areas" },
  { label: "Contact", to: "/contact" },
];

export const SERVICE_MENU = [
  {
    title: "Installation",
    to: "/installation",
    items: [
      { label: "Nouveaux circuits & rénovations", to: "/installation" },
      { label: "Éclairage intérieur", to: "/services" },
      { label: "Gaines prêtes pour véhicule électrique", to: "/installation" },
    ],
  },
  {
    title: "Maintenance",
    to: "/maintenance",
    items: [
      { label: "Réparations & recherche de pannes", to: "/maintenance" },
      { label: "Recâblage", to: "/maintenance" },
      { label: "Mise à niveau des tableaux", to: "/switchboard" },
    ],
  },
  {
    title: "Sécurité",
    to: "/services",
    items: [
      { label: "Caméras de sécurité", to: "/services" },
      { label: "Détecteurs & alimentation", to: "/services" },
    ],
  },
];

export const SERVICE_LINKS = [
  { label: "Tous les services", to: "/services" },
  { label: "Installation", to: "/installation" },
  { label: "Maintenance", to: "/maintenance" },
  { label: "Mise à niveau des tableaux", to: "/switchboard" },
];

export const TRUST_POINTS = [
  { title: "Pas de frais de déplacement", body: "Vous payez pour le travail, pas pour notre venue." },
  { title: "Agréé et assuré", body: "Travaux conformes aux normes électriques marocaines." },
  { title: "Équipe locale de Marrakech", body: "Sur place dans toute la ville le jour même." },
  { title: "Maisons & commerces", body: "Riads, villas, appartements, boutiques et bureaux." },
  { title: "Tarifs clairs et justes", body: "Devis écrits avant de toucher au moindre câble." },
  { title: "Urgences 24h/24", body: "Pannes, coupures et dangers — nous répondons." },
];

export const WHY_US = [
  {
    icon: "zap",
    title: "Rapide",
    body: "Besoin d'aide ? Nous faisons notre possible pour intervenir rapidement.",
  },
  {
    icon: "shield",
    title: "Sécurité aux normes",
    body: "Nos installations respectent la norme NF C 15-100, la référence pour la sécurité électrique dans les logements et les bâtiments.",
  },
  {
    icon: "tag",
    title: "Prix clairs",
    body: "Vous connaissez le prix avant de commencer. Pas de mauvaises surprises.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Consultation initiale",
    body: "Nous discutons de vos besoins et fournissons un devis gratuit.",
    image: "/process/process-01.webp",
  },
  {
    step: "02",
    title: "Visite sur site",
    body: "Une inspection approfondie pour comprendre l'étendue des travaux.",
    image: "/process/process-02.webp",
  },
  {
    step: "03",
    title: "Proposition détaillée",
    body: "Nous présentons un plan détaillé, les matériaux et le calendrier.",
    image: "/process/process-03.webp",
  },
  {
    step: "04",
    title: "Exécution",
    body: "Notre équipe réalise les travaux avec attention à la sécurité et à la qualité.",
    image: "/process/process-04.webp",
  },
  {
    step: "05",
    title: "Inspection finale & remise",
    body: "Nous testons, étiquetons et vous expliquons ce qui a changé.",
    image: "/process/process-05.webp",
  },
];

export const HOME_SERVICES = [
  {
    slug: "installation",
    to: "/installation",
    title: "Nouvelle installation – Construction neuve",
    image: "/images/install.jpg",
    icon: "/icons/icon-install.svg",
    body: "Installation électrique complète des constructions neuves : tableau, câblage, prises, éclairage et locaux techniques.",
    items: [
      "Installation électrique complète",
      "Éclairage intérieur et extérieur",
      "Installation des tableaux électriques",
      "Câblage des armoires électriques",
      "Installation des prises et interrupteurs",
      "Installation des locaux techniques",
      "Pompes de piscine",
      "Pompes de puits",
      "Systèmes d'irrigation et d'arrosage",
    ],
  },
  {
    slug: "renovation",
    to: "/renovation",
    title: "Rénovation d'une installation électrique",
    image: "/images/lighting.jpg",
    icon: "/icons/icon-maintenance.svg",
    body: "Mise aux normes, sécurisation, modernisation de l'éclairage et remise à niveau de vos installations existantes.",
    items: [
      "Mise aux normes électriques",
      "Sécurisation de l'installation",
      "Rénovation du câblage",
      "Modernisation de l'éclairage",
      "Remplacement des tableaux électriques",
      "Modernisation des armoires électriques",
      "Remise à niveau des installations existantes",
    ],
  },
  {
    slug: "armoires",
    to: "/armoires",
    title: "Câblage des armoires électriques & locaux techniques",
    image: "/images/switchboard.jpg",
    icon: "/icons/icon-security.svg",
    body: "Installation et câblage des armoires, locaux techniques, pompes de piscine et de puits, et mise en service.",
    items: [
      "Installation et câblage des armoires électriques",
      "Raccordement des équipements",
      "Aménagement des locaux techniques",
      "Installation des pompes de piscine",
      "Installation des pompes de puits",
      "Raccordement des pompes",
      "Systèmes d'irrigation et d'arrosage",
      "Contrôle et mise en service des installations",
    ],
  },
  {
    slug: "depannage",
    to: "/depannage",
    title: "Dépannage électrique",
    image: "/images/tools.jpg",
    icon: "/icons/icon-install.svg",
    body: "Dépannage d'urgence, recherche et réparation de pannes, maintenance pour villas, riads et locaux professionnels.",
    items: [
      "Dépannage électrique d'urgence",
      "Recherche et réparation de pannes",
      "Réparation des tableaux électriques",
      "Réparation des armoires électriques",
      "Réparation des pompes de piscine et de puits",
      "Remplacement des équipements défectueux",
      "Maintenance et entretien",
      "Interventions pour villas, riads et locaux professionnels",
    ],
  },
];

export const SERVICES = [
  {
    slug: "installation",
    to: "/installation",
    title: "Installation électrique",
    body: "Nouveaux circuits, rénovations, cuisines, salles de bains et câblage complet de villas.",
    image: "/images/install.jpg",
  },
  {
    slug: "maintenance",
    to: "/maintenance",
    title: "Réparations & maintenance",
    body: "Recherche de pannes, disjoncteurs qui sautent, chaleur, bruit et visites de maintenance planifiées.",
    image: "/images/tools.jpg",
  },
  {
    slug: "switchboard",
    to: "/switchboard",
    title: "Mise à niveau des tableaux",
    body: "Remplacez les fusibles vieillissants, ajoutez des disjoncteurs différentiels et mettez le cœur de la maison à jour.",
    image: "/images/switchboard.jpg",
  },
  {
    slug: "lighting",
    to: "/services",
    title: "Éclairage intérieur",
    body: "Spots, suspensions, variateurs et plans d'éclairage pour riads et nouveaux intérieurs.",
    image: "/images/lighting.jpg",
  },
  {
    slug: "outdoor",
    to: "/services",
    title: "Éclairage extérieur & jardin",
    body: "Allées, piscines, palmiers et façades — lumière chaude et uniforme qui dure en extérieur.",
    image: "/images/outdoor.jpg",
  },
  {
    slug: "security",
    to: "/services",
    title: "Sécurité & caméras",
    body: "Caméras, détecteurs et l'alimentation nécessaire — installés proprement sur les murs des villas.",
    image: "/images/security.jpg",
  },
];

export const PRICING = [
  {
    name: "Visite de diagnostic",
    price: "0 MAD",
    note: "Déplacement",
    featured: false,
    points: [
      "Pas de frais de déplacement si vous donnez suite",
      "Créneaux le jour même quand c'est possible",
      "Recherche de panne et prochaine étape claire",
      "Devis écrit avant tout travail supplémentaire",
    ],
  },
  {
    name: "Contrôle de sécurité domestique",
    price: "450 MAD",
    note: "À partir de",
    featured: true,
    points: [
      "Vérification du tableau, de la mise à la terre et des disjoncteurs",
      "Prises, éclairage et circuits visibles",
      "Un rapport écrit à conserver",
      "Priorité pour tout suivi",
    ],
  },
  {
    name: "Plan d'entretien",
    price: "1 800 MAD",
    note: "Par an",
    featured: false,
    points: [
      "Deux visites programmées par an",
      "Réponse prioritaire en cas d'urgence",
      "Main-d'œuvre réduite sur les extras",
      "Villas, riads et petites boutiques",
    ],
  },
];

export const AREAS = [
  { name: "Guéliz", blurb: "Appartements, bureaux et boutiques en rez-de-chaussée.", image: "/images/commercial.jpg", lat: 31.6362, lng: -8.0089 },
  { name: "Hivernage", blurb: "Hôtels, villas et travaux d'éclairage en soirée.", image: "/images/lighting.jpg", lat: 31.6295, lng: -8.0197 },
  { name: "Médina", blurb: "Riads, accès étroits et installations patrimoniales soignées.", image: "/images/install.jpg", lat: 31.6295, lng: -7.9891 },
  { name: "Palmeraie", blurb: "Grandes villas, piscines et éclairage de jardin.", image: "/images/outdoor.jpg", lat: 31.667, lng: -7.937 },
  { name: "Targa", blurb: "Maisons familiales et nouveaux quartiers résidentiels.", image: "/images/hero.jpg", lat: 31.644, lng: -8.036 },
  { name: "Agdal", blurb: "Maisons et petites unités commerciales.", image: "/images/tools.jpg", lat: 31.618, lng: -7.995 },
  { name: "Massira", blurb: "Appartements et dépannages courants.", image: "/images/switchboard.jpg", lat: 31.654, lng: -8.023 },
  { name: "Daoudiate", blurb: "Maisons, cafés et commerces de proximité.", image: "/images/security.jpg", lat: 31.665, lng: -8.008 },
  { name: "Mhamid", blurb: "Rues résidentielles et façades de boutiques.", image: "/gallery/gallery-1.webp", lat: 31.598, lng: -8.035 },
  { name: "Sidi Youssef Ben Ali", blurb: "Maisons et bâtiments communautaires.", image: "/gallery/gallery-2.webp", lat: 31.607, lng: -7.972 },
  { name: "Amerchich", blurb: "Appartements récents et aménagements.", image: "/gallery/gallery-3.webp", lat: 31.649, lng: -7.999 },
  { name: "Iziki", blurb: "Résidences et villas.", image: "/gallery/gallery-4.webp", lat: 31.621, lng: -8.043 },
  { name: "Sidi Ghanem", blurb: "Ateliers, showrooms et tableaux commerciaux.", image: "/gallery/gallery-5.webp", lat: 31.679, lng: -8.009 },
  { name: "Menara", blurb: "Maisons près du corridor de l'aéroport.", image: "/gallery/gallery-6.webp", lat: 31.607, lng: -8.033 },
  { name: "Route d'Ourika", blurb: "Propriétés avec jardin et villas hors centre.", image: "/gallery/gallery-7.webp", lat: 31.596, lng: -7.943 },
  { name: "Route de Fès", blurb: "Commerces et maisons en bord de route.", image: "/gallery/gallery-8.webp", lat: 31.674, lng: -7.97 },
  { name: "Route de Casablanca", blurb: "Unités commerciales et résidences.", image: "/gallery/gallery-9.webp", lat: 31.663, lng: -8.053 },
  { name: "Ennakhil", blurb: "Villas et parcelles paysagées.", image: "/gallery/gallery-10.webp", lat: 31.66, lng: -7.925 },
  { name: "Amelkis", blurb: "Villas et résidences au bord du golf.", image: "/gallery/gallery-10.webp", lat: 31.648, lng: -7.918 },
  { name: "Izdihar", blurb: "Rues résidentielles de quartier.", image: "/gallery/gallery-10.webp", lat: 31.671, lng: -8.033 },
  { name: "Jamaa lfna", blurb: "Boutiques et locaux autour de la place.", image: "/images/install.jpg", lat: 31.6258, lng: -7.9891 },
  { name: "Route d'Amezmiz", blurb: "Maisons et parcelles hors centre.", image: "/images/outdoor.jpg", lat: 31.606, lng: -8.058 },
  { name: "Chrifia", blurb: "Villas, maisons et résidences au sud de la ville.", image: "/gallery/gallery-4.webp", lat: 31.578, lng: -8.012 },
];

/** Exact ordered list of areas shown in the homepage preview. The rest appear on /areas. */
export const HOME_AREAS = [
  "Guéliz",
  "Hivernage",
  "Palmeraie",
  "Targa",
  "Amelkis",
  "Izdihar",
  "Jamaa lfna",
  "Route d'Ourika",
  "Route d'Amezmiz",
  "Agdal",
  "Médina",
  "Route de Fès",
  "Sidi Ghanem",
] as const;

export const TESTIMONIALS = [
  {
    name: "Client Jia Elec",
    area: "Marrakech",
    quote: "Intervention rapide et travail très propre. Mon installation électrique fonctionne parfaitement.",
  },
  {
    name: "Client Jia Elec",
    area: "Marrakech",
    quote:
      "Très satisfait du travail sur l'éclairage de la villa. Équipe sérieuse et professionnelle.",
  },
  {
    name: "Client Jia Elec",
    area: "Marrakech",
    quote:
      "Tableau électrique remplacé rapidement. Travail soigné et explications claires.",
  },
  {
    name: "Client Jia Elec",
    area: "Marrakech",
    quote:
      "Dépannage efficace et rapide. L'équipe a trouvé la panne et l'a réparée sans perdre de temps.",
  },
  {
    name: "Client Jia Elec",
    area: "Marrakech",
    quote:
      "Installation des pompes de piscine et du local technique réalisée proprement. Très bon travail.",
  },
  {
    name: "Client Jia Elec",
    area: "Marrakech",
    quote:
      "Une équipe ponctuelle, professionnelle et attentive aux détails. Je recommande Jia Elec.",
  },
];

export const PROJECTS = [
  {
    title: "Villa board & RCDs",
    area: "Palmeraie",
    image: "/gallery/gallery-1.webp",
    body: "Remplacement complet du tableau, circuits étiquetés et protection différentielle.",
  },
  {
    title: "Riad lighting plan",
    area: "Médina",
    image: "/gallery/gallery-3.webp",
    body: "LED encastrées et suspension linéaire au-dessus d'une niche de repos en plâtre.",
  },
  {
    title: "Garden & pool light",
    area: "Ennakhil",
    image: "/gallery/gallery-5.webp",
    body: "Bornes lumineuses, éclairage des arbres et une piscine calme qui se lit la nuit.",
  },
  {
    title: "Aménagement de boutique",
    area: "Guéliz",
    image: "/gallery/gallery-2.webp",
    body: "Éclairage sur rail et un tableau commercial propre pour une boutique en rez-de-chaussée.",
  },
  {
    title: "Circuits de cuisine",
    area: "Targa",
    image: "/gallery/gallery-4.webp",
    body: "Alimentation de la plaque, prises et spots pour une cuisine familiale.",
  },
  {
    title: "Caméras de sécurité",
    area: "Hivernage",
    image: "/gallery/gallery-8.webp",
    body: "Caméras de villa et un passage de courant soigné le long du mur de la cour.",
  },
  {
    title: "Tableau d'atelier",
    area: "Sidi Ghanem",
    image: "/gallery/gallery-6.webp",
    body: "Tableau triphasé et éclairage pour un espace de production.",
  },
  {
    title: "Recâblage patrimonial",
    area: "Médina",
    image: "/gallery/gallery-9.webp",
    body: "Circuits encastrés dans un riad sans toucher au plâtre fini.",
  },
];

export const FAQS = [
  {
    q: "Intervenez-vous à Marrakech ?",
    a: "Oui, nous intervenons à Marrakech et dans les environs pour les travaux et dépannages électriques.",
  },
  {
    q: "Le devis est-il gratuit ?",
    a: "Oui, la demande de devis est gratuite et sans engagement.",
  },
  {
    q: "Combien coûte une intervention ?",
    a: "Le prix dépend du type de travaux et de la situation. Contactez-nous pour avoir une estimation adaptée à votre besoin.",
  },
  {
    q: "Faites-vous les rénovations électriques ?",
    a: "Oui, nous pouvons intervenir pour la rénovation ou la modification d'une installation électrique existante.",
  },
];

export const JOB_TYPES = [
  "Installation",
  "Réparation / panne",
  "Mise à niveau de tableau",
  "Éclairage",
  "Éclairage extérieur",
  "Sécurité / caméras",
  "Urgence",
  "Autre",
] as const;

export const HERO_SLIDES = [
  {
    eyebrow: "Jia Elec",
    title: "Votre partenaire de confiance pour des solutions électriques sûres et fiables",
    image: "/villa.webp",
    imageMobile: "/hero/hero-mobile.webp",
  },
  {
    eyebrow: "Jia Elec",
    title: "Des services sûrs, fiables et efficaces pour votre maison et votre entreprise",
    image: "/images/hero.jpg",
    imageMobile: "/hero/hero-mobile-alt.webp",
  },
];
