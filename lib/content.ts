/**
 * Single source of truth for the site copy.
 * Every string below comes from the original page (see docs/content-inventory.md);
 * the redesign only reorganises it visually.
 */

export const site = {
  name: 'Pr Najeb Youssef',
  title: 'Chirurgien orthopédiste et traumatologue',
  brandLine: 'Chirurgie orthopédique',
  discipline: 'Chirurgie orthopédique & traumatologie',
  city: 'Casablanca',
  district: 'Aïn Sebaâ',
  phoneDisplay: '+212 6 65 24 79 95',
  phoneHref: 'tel:+212665247995',
  whatsappHref: 'https://wa.me/212665247995',
  whatsappNumber: '212665247995',
  email: 'youssefnajeb@gmail.com',
  instagramHref: 'https://instagram.com/cabinet_pr_najeb_youssef',
  mapsHref: 'https://maps.app.goo.gl/kspc5B2zU7YjAfBHA',
  clinicName: 'Cabinet Pr Najeb Youssef',
  addressLines: ['Angle Bd Chefchaouni & Rue Abdelhamid Ibn Badis', 'Résidence Robert « B » · RDC · Bureau 2 · 20250 Casablanca'],
  hours: [
    { days: 'Lundi – Vendredi', time: '09h00 – 19h00' },
    { days: 'Samedi', time: '09h00 – 13h00' },
  ],
} as const

export const navLinks = [
  { href: '#expertise', label: 'Expertise' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#cabinet', label: 'Le cabinet' },
  { href: '#temoignages', label: 'Témoignages' },
  { href: '#contact', label: 'Contact' },
] as const

export const hero = {
  titleLines: [
    { text: 'Retrouver le', accent: 'mouvement.' },
    { text: 'Retrouver la', accent: 'liberté.' },
  ],
  description:
    'Chirurgien orthopédiste et traumatologue à Casablanca, Pr Najeb Youssef accompagne ses patients dans la prise en charge des pathologies articulaires, traumatiques et sportives.',
  image: { src: '/cabinet/3.webp', alt: 'Hall d’entrée du cabinet', caption: 'Hall d’entrée' },
}

export const credentials = [
  { value: '28', suffix: '+', label: 'années d’expérience' },
  { value: '5 000', suffix: '+', label: 'patients suivis' },
  { value: '3 000', suffix: '+', label: 'interventions' },
  { value: '98', suffix: '%', label: 'satisfaction' },
] as const

export type Specialty = { name: string; summary: string; tags: string[]; zone: string }

export const specialties: Specialty[] = [
  { name: 'Prothèse du genou', zone: 'Genou', summary: 'Remplacement total ou partiel de l’articulation, planification et accompagnement de la récupération.', tags: ['Genou', 'Prothèse'] },
  { name: 'Prothèse de la hanche', zone: 'Hanche', summary: 'Prise en charge de l’arthrose, de la coxarthrose et des fractures du col du fémur.', tags: ['Hanche', 'Articulation'] },
  { name: 'Arthroscopie', zone: 'Épaule', summary: 'Chirurgie mini-invasive du genou, de l’épaule et de la cheville.', tags: ['Genou', 'Épaule', 'Cheville'] },
  { name: 'Chirurgie du sport', zone: 'Mouvement', summary: 'Ligament croisé, ménisque et coiffe des rotateurs : reconstruction et reprise sportive guidée.', tags: ['LCA', 'Ménisque', 'Coiffe'] },
  { name: 'Chirurgie de la main', zone: 'Main', summary: 'Canal carpien, Dupuytren, doigt à ressaut et microchirurgie des nerfs et des tendons.', tags: ['Main', 'Nerfs', 'Tendons'] },
  { name: 'Traumatologie', zone: 'Cheville', summary: 'Fractures, luxations et urgences osseuses, avec suivi rééducatif.', tags: ['Fracture', 'Ostéosynthèse'] },
]

export const journey = [
  { title: 'Consultation', body: 'Un échange clinique et un examen articulaire pour comprendre la douleur, son histoire et le mode de vie.' },
  { title: 'Diagnostic', body: 'Imagerie ciblée et analyse précise pour proposer la solution la plus juste.' },
  { title: 'Intervention', body: 'Une intervention réalisée en clinique partenaire, selon l’indication retenue.' },
  { title: 'Rééducation', body: 'Un protocole personnalisé, en lien avec le kinésithérapeute.' },
  { title: 'Récupération', body: 'Un retour progressif aux activités et un suivi au long cours.' },
]

export const profile = {
  intro:
    'Chirurgien orthopédiste-traumatologue exerçant à Casablanca, le Pr Najeb Youssef a construit son parcours entre Casablanca, Paris, Rabat et Marrakech.',
  since: 'Casablanca · depuis 1995',
  image: { src: '/cabinet/4.webp', alt: 'Salle de consultation du cabinet', caption: 'Salle de consultation' },
  highlights: [
    { label: 'Formation', value: 'Doctorat en Médecine · Casablanca' },
    { label: 'Spécialité', value: 'Traumatologie & Orthopédie' },
    { label: 'Recherche', value: 'Master de Recherche · Biomécanique' },
    { label: 'Exercice', value: 'Ancien Chef de service · CHU Mohammed VI' },
  ],
  timeline: [
    { year: '1995', title: 'Doctorat en Médecine', body: 'Faculté de Médecine et de Pharmacie · Université Hassan II Aïn Chock · Casablanca' },
    { year: '2001', title: 'Spécialité — Traumatologie & Orthopédie', body: 'FMP Casablanca · Université Hassan II Aïn Chock' },
    { year: '2000–2001', title: 'Formations spécialisées en France', body: 'AFS en Orthopédie (Bichat, Paris Diderot), DU de Techniques Microchirurgicales (Léonard de Vinci, Paris XIII) et DU de Pathologie de l’Épaule et du Coude (Paris XII Val-de-Marne).' },
    { year: '2002', title: 'Master de Recherche — Biomécanique', body: 'École Nationale Supérieure d’Arts et Métiers · Paris' },
    { year: '2007–2010', title: 'Chef du service Traumatologie-Orthopédie « A »', body: 'CHU Mohammed VI · Marrakech. Responsabilités de formation médicale et activité de recherche BIO2M à l’Université Cadi Ayyad.' },
    { year: '2008–2013', title: 'Diplômes universitaires complémentaires', body: 'Chirurgie du pied · Traumatologie du sport · Échographie musculo-squelettique' },
    { year: 'Aujourd’hui', title: 'Cabinet libéral · Aïn Sebaâ', body: 'Chirurgie orthopédique, traumatologie et médecine du sport à Casablanca.' },
  ],
  referencesLabel: 'Références professionnelles publiées',
  references: ['SMACOT', 'SMA', 'SFA', 'SMCM', 'SECOT', 'Société Marocaine de Chirurgie du Rachis'],
}

export const gallery = {
  lead: 'Le cabinet d’Aïn Sebaâ accueille les patients dans un cadre médical épuré, au cœur de Casablanca.',
  feature: { src: '/cabinet/5.webp', alt: 'Espace patients et vue sur le patio du cabinet', caption: 'Espace patients' },
  side: [
    { src: '/cabinet/1.webp', alt: 'Entrée et enseigne du cabinet Pr Najeb Youssef', caption: 'Réception & enseigne' },
    { src: '/cabinet/6.webp', alt: 'Espace d’examen et équipement du cabinet', caption: 'Espace d’examen' },
  ],
  panorama: { src: '/cabinet/2.webp', alt: 'Salle d’attente du cabinet', caption: 'Salle d’attente' },
}

export const testimonials = [
  { quote: 'Six mois après ma prothèse de genou, je remarche sans douleur. Suivi exceptionnel, du diagnostic à la rééducation.', initials: 'FM', name: 'Fatima M.', city: 'Casablanca', context: 'Prothèse PTG' },
  { quote: 'Une explication claire, une intervention nette, une équipe à l’écoute. J’ai retrouvé le tennis trois mois après mon LCA.', initials: 'YA', name: 'Youssef A.', city: 'Rabat', context: 'LCA arthroscopique' },
  { quote: 'Le Pr Najeb prend le temps qu’il faut. Diagnostic juste sur mon canal carpien, opération sous une heure, plus aucune gêne.', initials: 'SE', name: 'Saâdia E.', city: 'Mohammedia', context: 'Canal carpien' },
  { quote: 'Cabinet impeccable, accueil professionnel. Mon père a été opéré de la hanche, marche autonome au bout de trois semaines.', initials: 'KB', name: 'Karim B.', city: 'Casablanca', context: 'PTH familial' },
  { quote: 'Sportif amateur, fracture grave de la cheville. Prise en charge en urgence et plan de récupération précis. Reconnaissant.', initials: 'ME', name: 'Mehdi El A.', city: 'Bouskoura', context: 'Traumatologie' },
  { quote: 'Honnêteté rare chez un chirurgien : il m’a évité une opération inutile et proposé un protocole conservateur. Confiance totale.', initials: 'NL', name: 'Nadia L.', city: 'Casablanca', context: 'Consultation' },
]

export const appointmentReasons = [
  'Consultation initiale',
  'Genou — Prothèse / LCA',
  'Hanche — Prothèse',
  'Épaule — Arthroscopie',
  'Main & Nerfs',
  'Pied & Cheville',
  'Traumatologie',
  'Second avis',
]
