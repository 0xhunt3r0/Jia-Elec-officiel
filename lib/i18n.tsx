'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { usePathname, useRouter } from 'next/navigation'

export type Lang = 'fr' | 'en' | 'ar'

export const LANGS: { code: Lang; short: string; name: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'fr', short: 'FR', name: 'Français', dir: 'ltr' },
  { code: 'en', short: 'EN', name: 'English', dir: 'ltr' },
  { code: 'ar', short: 'ع', name: 'العربية', dir: 'rtl' },
]

export const DEFAULT_LANG: Lang = 'fr'

const STORAGE_KEY = 'jia-elec-lang'

type NavItem = { label: string; to: string }
type MenuGroup = { title: string; to: string; items: NavItem[] }

export type SiteText = {
  city: string
  hours: string
  emergency: string
  base: string
  primary: string
  mobile: string
  language: string
  switchLanguage: string
  nav: NavItem[]
  serviceMenu: MenuGroup[]
  serviceLinks: NavItem[]
  header: {
    requestQuote: string
    freeQuote: string
    call: string
    openMenu: string
    closeMenu: string
    servicesMenuNote: string
    areasWeServe: string
    coverAreas: string
    electricianIn: string
  }
  footer: {
    desc: string
    explore: string
    services: string
    getInTouch: string
    phone: string
    hours: string
    based: string
    rights: string
    tagline: string
  }
  mobileCta: {
    call: string
    whatsapp: string
    quote: string
    whatsappAria: string
  }
  common: {
    rateUs: string
  }
  trustedBrands: {
    title: string
  }
  hero: {
    slides: string[]
  }
  services: {
    heading: string
  }
  projects: {
    seeMore: string
    heading: string
    subtitle: string
  }
  ui: {
    callNow: string
  }
  jobTypes: string[]
  quoteForm: {
    steps: string[]
    profiles: string[]
    deadlines: string[]
    paymentMethods: { label: string; description: string }[]
    successTitle: string
    successBody: string
    profileLabel: string
    profileHint: string
    needTitle: string
    needHint: string
    serviceLabel: string
    servicePlaceholder: string
    sectorLabel: string
    sectorPlaceholder: string
    addressLabel: string
    addressPlaceholder: string
    descriptionLabel: string
    descriptionPlaceholder: string
    deadlineLabel: string
    deadlinePlaceholder: string
    surfaceLabel: string
    surfacePlaceholder: string
    instructionsLabel: string
    instructionsPlaceholder: string
    back: string
    send: string
    sending: string
    next: string
  }
}
const fr: SiteText = {
  city: 'Marrakech',
  hours: 'Lun–Sam 08:00–19:00',
  emergency: 'Interventions d’urgence 24h/24',
  base: 'Marrakech',
  primary: 'Principal',
  mobile: 'Mobile',
  language: 'Langue',
  switchLanguage: 'Changer de langue',
  nav: [
    { label: 'Accueil', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Réalisations', to: '/work' },
    { label: 'Zones', to: '/areas' },
    { label: 'Contact', to: '/contact' },
  ],
  serviceMenu: [
    {
      title: 'Nouvelle installation',
      to: '/installation',
      items: [
        { label: 'Construction neuve', to: '/installation' },
        { label: 'Éclairage intérieur et extérieur', to: '/installation' },
        { label: 'Tableaux et prises', to: '/installation' },
      ],
    },
    {
      title: 'Rénovation',
      to: '/renovation',
      items: [
        { label: 'Mise aux normes électriques', to: '/renovation' },
        { label: 'Rénovation du câblage', to: '/renovation' },
        { label: "Modernisation de l'éclairage", to: '/renovation' },
      ],
    },
    {
      title: 'Armoires électriques',
      to: '/armoires',
      items: [
        { label: 'Câblage des armoires', to: '/armoires' },
        { label: 'Locaux techniques', to: '/armoires' },
        { label: 'Pompes de piscine et de puits', to: '/armoires' },
      ],
    },
    {
      title: 'Dépannage',
      to: '/depannage',
      items: [
        { label: "Dépannage d'urgence", to: '/depannage' },
        { label: 'Recherche et réparation de pannes', to: '/depannage' },
        { label: 'Maintenance et entretien', to: '/depannage' },
      ],
    },
  ],
  serviceLinks: [
    { label: 'Tous les services', to: '/services' },
    { label: 'Nouvelle installation', to: '/installation' },
    { label: 'Rénovation électrique', to: '/renovation' },
    { label: 'Armoires électriques', to: '/armoires' },
    { label: 'Dépannage électrique', to: '/depannage' },
  ],
  header: {
    requestQuote: 'Demander un devis',
    freeQuote: 'Lancer mon projet',
    call: 'Appeler',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    servicesMenuNote: 'Renseignez-vous sur les services de {name} ou demandez votre devis gratuit',
    areasWeServe: 'Zones desservies',
    coverAreas: 'Nous couvrons tous les quartiers de {city}',
    electricianIn: 'Électricien {name}',
  },
  footer: {
    desc: 'Entrepreneur électricien agréé à {city}. Installation, réparation et éclairage pour maisons, riads, villas et entreprises.',
    explore: 'Explorer',
    services: 'Services',
    getInTouch: 'Contact',
    phone: 'Téléphone',
    hours: 'Horaires',
    based: 'Basé à',
    rights: 'Tous droits réservés.',
    tagline: 'Électricien à {city}',
  },
  mobileCta: {
    call: 'Appeler',
    whatsapp: 'WhatsApp',
    quote: 'Devis',
    whatsappAria: 'Envoyer un message WhatsApp à {name}',
  },
  common: {
    rateUs: 'Évaluez-nous sur Google',
  },
  trustedBrands: {
    title: 'Marques de confiance',
  },
  hero: {
    slides: [
      'Électricien agréé à Marrakech, disponible quand vous en avez besoin',
      'Des installations sûres, claires et durables pour votre maison ou votre entreprise',
    ],
  },
  services: {
    heading: 'Nos services',
  },
  projects: {
    seeMore: 'Voir plus',
    heading: 'Nos récents projets électriques',
    subtitle:
      'Fiers de servir {city} et toutes ses environs, une équipe locale bâtie sur un travail électrique de haute qualité, fiable et abordable.',
  },
  ui: {
    callNow: 'Appelez-nous',
  },
  jobTypes: [
    'Installation électrique',
    'Réparation / panne',
    'Rénovation électrique',
    'Éclairage',
    'Tableau électrique',
    'Prises et interrupteurs',
    'Climatisation / alimentation électrique',
    'Autre',
  ],
  quoteForm: {
    steps: ['Profil', 'Votre besoin', 'Détails', 'Coordonnées'],
    profiles: ['Particulier', 'Airbnb / Booking', 'Entreprise', 'Commerce', 'Conciergerie', 'Syndic'],
    deadlines: ['Dès que possible', 'Cette semaine', 'Ce mois-ci', 'Planifié'],
    paymentMethods: [
      { label: 'Espèces', description: 'Paiement directement à l’artisan après la réalisation de l’intervention.' },
      { label: 'Virement Bancaire', description: 'Un acompte de 20% sera requis avant le déplacement pour valider la commande.' },
    ],
    successTitle: 'Demande envoyée',
    successBody: 'Merci ! Nous vous rappelons par téléphone, généralement le jour même.',
    profileLabel: 'Sélectionnez le profil qui vous correspond le mieux.',
    profileHint: 'Cela nous aide à adapter notre réponse.',
    needTitle: 'Votre besoin',
    needHint: 'Détaillez le service dont vous avez besoin.',
    serviceLabel: 'Service principal',
    servicePlaceholder: 'Choisissez un service',
    sectorLabel: 'Secteur (Marrakech)',
    sectorPlaceholder: 'Votre secteur',
    addressLabel: 'Adresse, Derb ou Repère',
    addressPlaceholder: 'Ex. : Rue Ibn Sina, Guéliz',
    descriptionLabel: 'Description détaillée',
    descriptionPlaceholder: 'Ex. : Je souhaite installer de nouveaux spots dans mon salon.',
    deadlineLabel: 'Délai souhaité',
    deadlinePlaceholder: 'Quand ?',
    surfaceLabel: 'Surface du projet (m²)',
    surfacePlaceholder: 'Ex. : 120',
    instructionsLabel: 'Instructions particulières',
    instructionsPlaceholder: 'Accès, étage, contraintes…',
    back: 'Retour',
    send: 'Envoyer la demande',
    sending: 'Envoi…',
    next: 'Continuer',
  },
}
const en: SiteText = {
  city: 'Marrakech',
  hours: 'Mon–Sat 08:00–19:00',
  emergency: '24/7 emergency call-outs',
  base: 'Marrakech',
  primary: 'Primary',
  mobile: 'Mobile',
  language: 'Language',
  switchLanguage: 'Switch language',
  nav: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Our Work', to: '/work' },
    { label: 'Areas', to: '/areas' },
    { label: 'Contact Us', to: '/contact' },
  ],
  serviceMenu: [
    {
      title: 'New installation',
      to: '/installation',
      items: [
        { label: 'New construction', to: '/installation' },
        { label: 'Interior & exterior lighting', to: '/installation' },
        { label: 'Boards & outlets', to: '/installation' },
      ],
    },
    {
      title: 'Renovation',
      to: '/renovation',
      items: [
        { label: 'Bringing up to code', to: '/renovation' },
        { label: 'Rewiring', to: '/renovation' },
        { label: 'Lighting upgrades', to: '/renovation' },
      ],
    },
    {
      title: 'Electrical cabinets',
      to: '/armoires',
      items: [
        { label: 'Cabinet wiring', to: '/armoires' },
        { label: 'Technical rooms', to: '/armoires' },
        { label: 'Pool & well pumps', to: '/armoires' },
      ],
    },
    {
      title: 'Troubleshooting',
      to: '/depannage',
      items: [
        { label: 'Emergency repair', to: '/depannage' },
        { label: 'Fault finding & repair', to: '/depannage' },
        { label: 'Maintenance', to: '/depannage' },
      ],
    },
  ],
  serviceLinks: [
    { label: 'All services', to: '/services' },
    { label: 'New installation', to: '/installation' },
    { label: 'Electrical renovation', to: '/renovation' },
    { label: 'Electrical cabinets', to: '/armoires' },
    { label: 'Electrical repair', to: '/depannage' },
  ],
  header: {
    requestQuote: 'Request A Quote',
    freeQuote: 'Start My Project',
    call: 'Call',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    servicesMenuNote: 'To enquire on any of {name}’s services or to arrange your free quote',
    areasWeServe: 'Areas we serve',
    coverAreas: 'We cover all neighbourhoods of {city}',
    electricianIn: 'Electrician {name}',
  },
  footer: {
    desc: 'Licensed electrical contractor in {city}. Installation, repair, and lighting for homes, riads, villas, and businesses.',
    explore: 'Explore',
    services: 'Services',
    getInTouch: 'Get in touch',
    phone: 'Phone',
    hours: 'Hours',
    based: 'Based',
    rights: 'All rights reserved.',
    tagline: 'Electrician in {city}',
  },
  mobileCta: {
    call: 'Call',
    whatsapp: 'WhatsApp',
    quote: 'Quote',
    whatsappAria: 'Message {name} on WhatsApp',
  },
  common: {
    rateUs: 'Rate us on Google',
  },
  trustedBrands: {
    title: 'Trusted brands',
  },
  hero: {
    slides: [
      'Your trusted partner for safe & reliable electrical solutions',
      'Safe, reliable, and efficient services for your home and business',
    ],
  },
  services: {
    heading: 'Our Services',
  },
  projects: {
    seeMore: 'See more',
    heading: 'Our recent electrical projects',
    subtitle:
      'Proudly servicing {city} and all surrounding areas, a local team built on a foundation of high-quality, reliable, and affordable electrical work.',
  },
  ui: {
    callNow: 'Call now',
  },
  jobTypes: [
    'Electrical installation',
    'Repair / breakdown',
    'Electrical renovation',
    'Lighting',
    'Switchboard',
    'Sockets and switches',
    'AC / power supply',
    'Other',
  ],
  quoteForm: {
    steps: ['Profile', 'Your need', 'Details', 'Contact'],
    profiles: ['Homeowner', 'Airbnb / Booking', 'Company', 'Shop', 'Concierge', 'Property manager'],
    deadlines: ['As soon as possible', 'This week', 'This month', 'Scheduled'],
    paymentMethods: [
      { label: 'Cash', description: 'Paid directly to the electrician after the job is done.' },
      { label: 'Bank transfer', description: 'A 20% deposit is required before the visit to confirm the booking.' },
    ],
    successTitle: 'Request sent',
    successBody: 'Thank you! We will call you back, usually the same day.',
    profileLabel: 'Select the profile that fits you best.',
    profileHint: 'This helps us tailor our answer.',
    needTitle: 'Your need',
    needHint: 'Describe the service you need.',
    serviceLabel: 'Main service',
    servicePlaceholder: 'Choose a service',
    sectorLabel: 'Area (Marrakech)',
    sectorPlaceholder: 'Your area',
    addressLabel: 'Address, derb or landmark',
    addressPlaceholder: 'E.g.: Rue Ibn Sina, Guéliz',
    descriptionLabel: 'Detailed description',
    descriptionPlaceholder: 'E.g.: I would like new spots installed in my living room.',
    deadlineLabel: 'Preferred timing',
    deadlinePlaceholder: 'When?',
    surfaceLabel: 'Project surface (m²)',
    surfacePlaceholder: 'E.g.: 120',
    instructionsLabel: 'Special instructions',
    instructionsPlaceholder: 'Access, floor, constraints…',
    back: 'Back',
    send: 'Send request',
    sending: 'Sending…',
    next: 'Continue',
  },
}
const ar: SiteText = {
  city: 'مراكش',
  hours: 'الاثنين–السبت 08:00–19:00',
  emergency: 'تدخلات الطوارئ على مدار الساعة',
  base: 'مراكش',
  primary: 'الأساسية',
  mobile: 'الجوال',
  language: 'اللغة',
  switchLanguage: 'تغيير اللغة',
  nav: [
    { label: 'الرئيسية', to: '/' },
    { label: 'خدماتنا', to: '/services' },
    { label: 'أعمالنا', to: '/work' },
    { label: 'المناطق', to: '/areas' },
    { label: 'اتصل بنا', to: '/contact' },
  ],
  serviceMenu: [
    {
      title: 'تركيب جديد',
      to: '/installation',
      items: [
        { label: 'بناء جديد', to: '/installation' },
        { label: 'إضاءة داخلية وخارجية', to: '/installation' },
        { label: 'لوحات ولبيسات', to: '/installation' },
      ],
    },
    {
      title: 'تجديد',
      to: '/renovation',
      items: [
        { label: 'مطابقة المعايير الكهربائية', to: '/renovation' },
        { label: 'إعادة الأسلاك', to: '/renovation' },
        { label: 'تحديث الإضاءة', to: '/renovation' },
      ],
    },
    {
      title: 'الخزانات الكهربائية',
      to: '/armoires',
      items: [
        { label: 'أسلاك الخزانات', to: '/armoires' },
        { label: 'الغرف التقنية', to: '/armoires' },
        { label: 'مضخات المسابح والآبار', to: '/armoires' },
      ],
    },
    {
      title: 'إصلاح الأعطال',
      to: '/depannage',
      items: [
        { label: 'إصلاح طارئ', to: '/depannage' },
        { label: 'تشخيص وإصلاح الأعطال', to: '/depannage' },
        { label: 'الصيانة والخدمة', to: '/depannage' },
      ],
    },
  ],
  serviceLinks: [
    { label: 'جميع الخدمات', to: '/services' },
    { label: 'تركيب جديد', to: '/installation' },
    { label: 'تجديد كهربائي', to: '/renovation' },
    { label: 'الخزانات الكهربائية', to: '/armoires' },
    { label: 'إصلاح الأعطال', to: '/depannage' },
  ],
  header: {
    requestQuote: 'اطلب عرض سعر',
    freeQuote: 'أطلق مشروعي',
    call: 'اتصل',
    openMenu: 'فتح القائمة',
    closeMenu: 'إغ����اق القائمة',
    servicesMenuNote: 'استفسر عن خدمات {name} أو اطلب عرض السعر المجاني',
    areasWeServe: 'المناطق التي نخدمها',
    coverAreas: 'نغطي جميع أحياء {city}',
    electricianIn: 'كهربائي في {name}',
  },
  footer: {
    desc: 'م��اولات كهربائية مرخصة في {city}. تركيب وإصلاح وإضاءة للمنازل والرياض والفيلات والشركات.',
    explore: 'استكشف',
    services: 'الخدمات',
    getInTouch: 'تواصل معنا',
    phone: 'الهاتف',
    hours: 'ساعات العمل',
    based: 'الموقع',
    rights: 'جميع الحقوق محفوظة.',
    tagline: 'كهربائي في {city}',
  },
  mobileCta: {
    call: 'اتصال',
    whatsapp: 'واتساب',
    quote: 'عرض سعر',
    whatsappAria: 'أرسل رسالة واتساب إلى {name}',
  },
  common: {
    rateUs: 'قيّمنا على Google',
  },
  trustedBrands: {
    title: 'علامات موثوقة',
  },
  hero: {
    slides: [
      'شريككم الموثوق لحلول كهربائية آمنة وموثوقة',
      'خدمات آمنة وموثوقة وفعالة لمنزلك ومكان عملك',
    ],
  },
  services: {
    heading: 'خدماتنا',
  },
  projects: {
    seeMore: 'عرض المزيد',
    heading: 'أحدث مشاريعنا الكهربائية',
    subtitle:
      'نفتخر بخدمة {city} وجميع المناطق المحيطة بها، فريق محلي قائم على أعمال كهربائية عالية الجودة وموثوقة ومناسبة.',
  },
  ui: {
    callNow: 'اتصل بنا',
  },
  jobTypes: [
    'تركيبات كهربائية',
    'إصلاح / عطل',
    'تجديد كهربائي',
    'إضاءة',
    'لوحة كهربائية',
    'منافذ ومفاتيح',
    'تكييف / تغذية كهربائية',
    'أخرى',
  ],
  quoteForm: {
    steps: ['الملف الشخصي', 'احتياجك', 'التفاصيل', 'التواصل'],
    profiles: ['فرد', 'Airbnb / Booking', 'شركة', 'متجر', 'شركة حراسة', 'شركة إدارة عقارات'],
    deadlines: ['في أقرب وقت', 'هذا الأسبوع', 'هذا الشهر', 'مجدول'],
    paymentMethods: [
      { label: 'نقداً', description: 'الدفع مباشرة للحرفي بعد إنجاز العمل.' },
      { label: 'تحويل بنكي', description: 'يُطلب عربون 20% قبل التنقل لتأكيد الطلب.' },
    ],
    successTitle: 'تم إرسال الطلب',
    successBody: 'شكراً! سنتصل بك هاتفياً، عادة في نفس اليوم.',
    profileLabel: 'اختر الملف الشخصي الذي يناسبك أفضل.',
    profileHint: 'هذا يساعدنا على تكييف إجابتنا.',
    needTitle: 'احتياجك',
    needHint: 'فصّل الخدمة التي تحتاجها.',
    serviceLabel: 'الخدمة الرئيسية',
    servicePlaceholder: 'اختر خدمة',
    sectorLabel: 'الحي (مراكش)',
    sectorPlaceholder: 'حيك',
    addressLabel: 'العنوان أو معلم قريب',
    addressPlaceholder: 'مثال: شارع ابن سينا، جيليز',
    descriptionLabel: 'وصف مفصل',
    descriptionPlaceholder: 'مثال: أريد تركيب بقع إضاءة جديدة في صالوني.',
    deadlineLabel: 'التوقيت المفضل',
    deadlinePlaceholder: 'متى؟',
    surfaceLabel: 'مساحة المشروع (م²)',
    surfacePlaceholder: 'مثال: 120',
    instructionsLabel: 'تعليمات خاصة',
    instructionsPlaceholder: 'الوصول، الطابق، قيود…',
    back: 'رجوع',
    send: 'إرسال الطلب',
    sending: 'جاري الإرسال…',
    next: 'متابعة',
  },
}
export const dict: Record<Lang, SiteText> = { fr, en, ar }

/** Replace {token} placeholders such as {name} or {city} inside a translated string. */
export function interp(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => values[key] ?? match)
}

export type LocalizedServiceCopy = {
  kicker: string
  title: string
  description: string
  bodyTitle: string
  body: string
  points: string[]
  imageAlt: string
}

const serviceCopy: Record<string, Record<Lang, LocalizedServiceCopy>> = {
  'Installation électrique': {
    fr: { kicker: 'Services', title: 'Installation électrique', description: 'Des installations propres, sûres et pensées pour durer.', bodyTitle: 'Une installation fiable dès le premier jour', body: 'Nous concevons et réalisons des installations électriques adaptées à votre logement, votre commerce ou votre projet neuf.', points: ['Étude et dimensionnement', 'Câblage et tableaux électriques', 'Éclairage intérieur et extérieur', 'Contrôle et mise en service'], imageAlt: 'Installation électrique professionnelle' },
    en: { kicker: 'Services', title: 'Electrical installation', description: 'Clean, safe installations designed to last.', bodyTitle: 'A reliable installation from day one', body: 'We design and deliver electrical systems tailored to your home, business, or new-build project.', points: ['Planning and sizing', 'Wiring and electrical panels', 'Interior and exterior lighting', 'Testing and commissioning'], imageAlt: 'Professional electrical installation' },
    ar: { kicker: 'الخدمات', title: 'التركيب الكهربائي', description: 'تركيبات نظيفة وآمنة مصممة لتدوم طويلاً.', bodyTitle: 'تركيب موثوق منذ اليوم الأول', body: 'نصمم وننفذ أنظمة كهربائية مناسبة لمنزلك أو متجرك أو مشروعك الجديد.', points: ['الدراسة وتحديد المقاسات', 'الأسلاك واللوحات الكهربائية', 'الإضاءة الداخلية والخارجية', 'الفحص والتشغيل'], imageAlt: 'تركيب كهربائي احترافي' },
  },
  'Rénovation électrique': {
    fr: { kicker: 'Services', title: 'Rénovation électrique', description: 'Modernisez votre installation et améliorez votre sécurité.', bodyTitle: 'Une installation remise aux normes', body: 'Nous rénovons les réseaux anciens, remplaçons les équipements usés et préparons votre installation pour les usages actuels.', points: ['Diagnostic de l’existant', 'Mise en sécurité et mise aux normes', 'Remplacement du câblage', 'Modernisation de l’éclairage'], imageAlt: 'Rénovation électrique' },
    en: { kicker: 'Services', title: 'Electrical renovation', description: 'Modernize your installation and improve safety.', bodyTitle: 'An upgraded electrical system', body: 'We renew older networks, replace worn equipment, and prepare your installation for today’s needs.', points: ['Existing-system assessment', 'Safety and code upgrades', 'Wiring replacement', 'Lighting modernization'], imageAlt: 'Electrical renovation' },
    ar: { kicker: 'الخدمات', title: 'تجديد كهربائي', description: 'حدّث تجهيزاتك وحسّن مستوى السلامة.', bodyTitle: 'نظام كهربائي مطابق للمعايير', body: 'نجدد الشبكات القديمة ونستبدل المعدات البالية ونجهز منشأتك للاستخدامات الحديثة.', points: ['تشخيص الوضع الحالي', 'تأمين النظام ومطابقته للمعايير', 'استبدال الأسلاك', 'تحديث الإضاءة'], imageAlt: 'تجديد كهربائي' },
  },
  'Dépannage électrique d’urgence': {
    fr: { kicker: 'Dépannage', title: 'Dépannage électrique d’urgence', description: 'Une intervention rapide pour rétablir votre sécurité et votre courant.', bodyTitle: 'Réparation rapide et durable', body: 'Nous trouvons la panne, la réparons sans remplacer inutilement et sécurisons votre installation.', points: ['Diagnostic sur place', 'Réparation des pannes', 'Remplacement des équipements défectueux', 'Conseils de prévention'], imageAlt: 'Dépannage électrique d’urgence' },
    en: { kicker: 'Emergency repair', title: 'Emergency electrical repair', description: 'A fast response to restore your safety and power.', bodyTitle: 'Fast, lasting repairs', body: 'We locate the fault, repair it without unnecessary replacement, and secure your installation.', points: ['On-site diagnosis', 'Fault repair', 'Replacement of defective equipment', 'Prevention advice'], imageAlt: 'Emergency electrical repair' },
    ar: { kicker: 'إصلاح الأعطال', title: 'إصلاح كهربائي طارئ', description: 'استجابة سريعة لاستعادة السلامة والتيار الكهربائي.', bodyTitle: 'إصلاح سريع ودائم', body: 'نحدد العطل ونصلحه دون استبدال غير ضروري ونؤمن منشأتك.', points: ['تشخيص في الموقع', 'إصلاح الأعطال', 'استبدال المعدات التالفة', 'نصائح للوقاية'], imageAlt: 'إصلاح كهربائي طارئ' },
  },
}


export function getServiceCopy(title: string, lang: Lang): LocalizedServiceCopy | null {
  const normalized = title.toLowerCase().replace(/[’']/g, "'")
  const key = Object.keys(serviceCopy).find((candidate) => {
    const candidateNormalized = candidate.toLowerCase().replace(/[’']/g, "'")
    return normalized === candidateNormalized || normalized.includes(candidateNormalized) || candidateNormalized.includes(normalized)
  })
  return key ? serviceCopy[key][lang] : null
}

type LanguageContextValue = {
  lang: Lang
  dir: 'ltr' | 'rtl'
  t: SiteText
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const pathLocale = pathname?.split('/')[1]
  const cookieLocale = typeof document !== 'undefined' ? document.cookie.match(/(?:^|; )jia-elec-lang=(fr|en|ar)(?:;|$)/)?.[1] : undefined
  const localeFromPath: Lang = pathLocale === 'en' || pathLocale === 'ar' || pathLocale === 'fr'
    ? pathLocale
    : cookieLocale === 'en' || cookieLocale === 'ar' || cookieLocale === 'fr'
      ? cookieLocale
      : DEFAULT_LANG
  const [lang, setLangState] = useState<Lang>(localeFromPath)

  useEffect(() => {
    setLangState(localeFromPath)
    try {
      window.localStorage.setItem(STORAGE_KEY, localeFromPath)
      document.cookie = `jia-elec-lang=${localeFromPath}; path=/; max-age=31536000; samesite=lax`
    } catch {
      /* ignore storage errors */
    }
  }, [localeFromPath])

  const setLang = useCallback((next: Lang) => {
    const currentPath = window.location.pathname
    const segments = currentPath.split('/').filter(Boolean)
    if (segments[0] === 'fr' || segments[0] === 'en' || segments[0] === 'ar') segments.shift()
    const nextPath = `/${next}${segments.length ? `/${segments.join('/')}` : ''}`
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
      document.cookie = `jia-elec-lang=${next}; path=/; max-age=31536000; samesite=lax`
    } catch {
      /* ignore storage errors */
    }
    router.push(nextPath)
  }, [router])

  // Keep the <html> lang / dir / data-lang attributes in sync.
  useEffect(() => {
    const dir = LANGS.find((l) => l.code === lang)?.dir ?? 'ltr'
    const root = document.documentElement
    root.setAttribute('lang', lang)
    root.setAttribute('dir', dir)
    root.setAttribute('data-lang', lang)
  }, [lang])

  const value = useMemo<LanguageContextValue>(() => {
    const dir = LANGS.find((l) => l.code === lang)?.dir ?? 'ltr'
    return { lang, dir, t: dict[lang], setLang }
  }, [lang, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
