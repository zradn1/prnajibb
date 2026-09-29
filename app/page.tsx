'use client'

import Image from 'next/image'
import { FormEvent, useState } from 'react'

type Specialty = { name: string; summary: string; tags: string[] }

const specialties: Specialty[] = [
  { name: 'Prothèse du genou', summary: 'Remplacement total ou partiel de l’articulation, planification et accompagnement de la récupération.', tags: ['Genou', 'Prothèse'] },
  { name: 'Prothèse de la hanche', summary: 'Prise en charge de l’arthrose, de la coxarthrose et des fractures du col du fémur.', tags: ['Hanche', 'Articulation'] },
  { name: 'Arthroscopie', summary: 'Chirurgie mini-invasive du genou, de l’épaule et de la cheville.', tags: ['Genou', 'Épaule', 'Cheville'] },
  { name: 'Chirurgie du sport', summary: 'Ligament croisé, ménisque et coiffe des rotateurs : reconstruction et reprise sportive guidée.', tags: ['LCA', 'Ménisque', 'Coiffe'] },
  { name: 'Chirurgie de la main', summary: 'Canal carpien, Dupuytren, doigt à ressaut et microchirurgie des nerfs et des tendons.', tags: ['Main', 'Nerfs', 'Tendons'] },
  { name: 'Traumatologie', summary: 'Fractures, luxations et urgences osseuses, avec suivi rééducatif.', tags: ['Fracture', 'Ostéosynthèse'] },
]

const journey = [
  { title: 'Consultation', body: 'Un échange clinique et un examen articulaire pour comprendre la douleur, son histoire et le mode de vie.' },
  { title: 'Diagnostic', body: 'Imagerie ciblée et analyse précise pour proposer la solution la plus juste.' },
  { title: 'Intervention', body: 'Une intervention réalisée en clinique partenaire, selon l’indication retenue.' },
  { title: 'Rééducation', body: 'Un protocole personnalisé, en lien avec le kinésithérapeute.' },
  { title: 'Récupération', body: 'Un retour progressif aux activités et un suivi au long cours.' },
]

const testimonials = [
  { quote: 'Six mois après ma prothèse de genou, je remarche sans douleur. Suivi exceptionnel, du diagnostic à la rééducation.', initials: 'FM', name: 'Fatima M.', city: 'Casablanca', context: 'Prothèse PTG' },
  { quote: 'Une explication claire, une intervention nette, une équipe à l’écoute. J’ai retrouvé le tennis trois mois après mon LCA.', initials: 'YA', name: 'Youssef A.', city: 'Rabat', context: 'LCA arthroscopique' },
  { quote: 'Le Pr Najeb prend le temps qu’il faut. Diagnostic juste sur mon canal carpien, opération sous une heure, plus aucune gêne.', initials: 'SE', name: 'Saâdia E.', city: 'Mohammedia', context: 'Canal carpien' },
  { quote: 'Cabinet impeccable, accueil professionnel. Mon père a été opéré de la hanche, marche autonome au bout de trois semaines.', initials: 'KB', name: 'Karim B.', city: 'Casablanca', context: 'PTH familial' },
  { quote: 'Sportif amateur, fracture grave de la cheville. Prise en charge en urgence et plan de récupération précis. Reconnaissant.', initials: 'ME', name: 'Mehdi El A.', city: 'Bouskoura', context: 'Traumatologie' },
  { quote: 'Honnêteté rare chez un chirurgien : il m’a évité une opération inutile et proposé un protocole conservateur. Confiance totale.', initials: 'NL', name: 'Nadia L.', city: 'Casablanca', context: 'Consultation' },
]

const gallery = [
  { src: '/cabinet/1.webp', alt: 'Entrée et enseigne du cabinet Pr Najeb Youssef', caption: 'Réception & enseigne', number: '01' },
  { src: '/cabinet/5.webp', alt: 'Espace patients et vue sur le patio du cabinet', caption: 'Espace patients', number: '02' },
  { src: '/cabinet/4.webp', alt: 'Salle de consultation du cabinet', caption: 'Salle de consultation', number: '03' },
  { src: '/cabinet/3.webp', alt: 'Hall d’entrée du cabinet', caption: 'Hall d’entrée', number: '04' },
  { src: '/cabinet/6.webp', alt: 'Espace d’examen et équipement du cabinet', caption: 'Espace d’examen', number: '05' },
]

const navLinks = [
  { href: '#expertise', label: 'Expertise' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#cabinet', label: 'Cabinet' },
  { href: '#temoignages', label: 'Témoignages' },
  { href: '#contact', label: 'Contact' },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow-mark">{diagonal ? '↗' : '→'}</span>
}

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? 'brand-light' : ''}`} href="#top" aria-label="Pr Najeb Youssef, accueil">
      <Image src="/brand-symbol.svg" alt="" width={42} height={42} className="brand-symbol" />
      <span className="brand-copy"><strong>Pr Najeb Youssef</strong><small>CHIRURGIE ORTHOPÉDIQUE</small></span>
    </a>
  )
}

function AnatomyDiagram({ active }: { active: number }) {
  const titles = ['Genou', 'Hanche', 'Épaule', 'Mouvement', 'Main', 'Cheville']
  return (
    <div className="anatomy-panel" aria-live="polite" aria-label={`Illustration schématique : ${titles[active]}`}>
      <div className="diagram-index"><span>ÉTUDE ARTICULAIRE</span><span>0{active + 1} / 06</span></div>
      <svg className={`anatomy-svg anatomy-${active}`} viewBox="0 0 360 320" role="img" aria-labelledby="diagram-title">
        <title id="diagram-title">{`Schéma illustratif de la zone concernée : ${titles[active]}`}</title>
        <defs><radialGradient id="anatomyGlow"><stop stopColor="#137F7A" stopOpacity=".17"/><stop offset="1" stopColor="#137F7A" stopOpacity="0"/></radialGradient></defs>
        <circle cx="180" cy="154" r="128" fill="url(#anatomyGlow)" />
        <circle cx="180" cy="154" r="104" fill="none" stroke="#DCE5E2" strokeDasharray="2 8" />
        <circle cx="180" cy="154" r="74" fill="none" stroke="#DCE5E2" strokeDasharray="2 8" />
        <g fill="none" stroke="#17383D" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
          {active === 0 && <><path d="M147 50c-2 26 10 46 27 65l5 22c-5 18-11 31-11 48 0 16 8 27 13 42"/><path d="M214 50c4 23-2 43-18 65l-8 22c4 17 12 31 14 48 2 16-4 29-10 42"/><path d="M158 145c12-10 29-14 47-10m-50 24c14 7 32 8 49 0" stroke="#137F7A" strokeWidth="4"/><circle cx="180" cy="154" r="7" fill="#137F7A" stroke="none"/></>}
          {active === 1 && <><path d="M115 63c13 22 31 35 65 38 34 3 53-13 65-34"/><path d="M180 100c-6 23-13 42-15 61-2 23 4 50 18 76"/><path d="M178 101c14 14 21 29 20 45-1 10-8 17-18 17-10 0-17-8-17-18" stroke="#137F7A"/><circle cx="180" cy="151" r="16" stroke="#137F7A" strokeWidth="4"/></>}
          {active === 2 && <><path d="M136 62c-10 25-16 45-11 65 4 17 21 25 39 18 15-6 22-21 21-40-2-17 4-32 15-44"/><path d="M179 103c15-6 31-1 42 10 13 13 17 31 14 48-4 19 4 43 17 65"/><path d="M146 126c12 10 28 14 45 12m-37 15c13 8 28 9 44 4" stroke="#137F7A" strokeWidth="4"/><circle cx="187" cy="138" r="7" fill="#137F7A" stroke="none"/></>}
          {active === 3 && <><path d="M121 63c6 39 19 65 47 88 18 15 37 26 70 53"/><path d="M238 66c-5 34-18 57-43 80-20 18-42 34-72 58"/><path d="M149 121c18 4 38 4 57-1m-42 22c16 8 31 10 47 7" stroke="#137F7A" strokeWidth="4"/><circle cx="180" cy="145" r="9" fill="#137F7A" stroke="none"/></>}
          {active === 4 && <><path d="M129 211c14-10 31-13 47-10l3-69c0-9 14-9 14 0l1 44 2-66c0-10 15-9 15 1l-1 69 6-48c1-10 15-9 15 2l-4 55 10-30c4-10 18-4 14 6l-13 51c-7 28-29 44-59 43-25-1-42-16-50-48z"/><path d="M126 219c11 14 20 26 30 35m52-121v39" stroke="#137F7A" strokeWidth="4"/></>}
          {active === 5 && <><path d="M153 50c-3 34 3 63 19 87 12 19 19 43 14 68l-7 28"/><path d="M211 50c1 31-4 61-20 87-11 18-19 43-14 68l7 28"/><path d="M149 159c10-9 22-13 34-11 14 2 25 9 31 20m-61-3c13 4 26 7 40 6" stroke="#137F7A" strokeWidth="4"/><path d="M169 233c-12 8-27 13-43 15m74-15c14 9 29 13 45 15"/></>}
        </g>
        <circle cx="180" cy="154" r="3" fill="#137F7A" />
      </svg>
      <p className="diagram-caption">Schéma illustratif · non diagnostique</p>
    </div>
  )
}

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSpecialty, setActiveSpecialty] = useState(0)
  const [reviewIndex, setReviewIndex] = useState(0)

  function sendAppointment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') || '').trim()
    const phone = String(form.get('phone') || '').trim()
    const reason = String(form.get('reason') || 'Consultation')
    const date = String(form.get('date') || 'À convenir')
    const note = String(form.get('note') || '').trim()
    const message = `Bonjour, je souhaite prendre rendez-vous au cabinet du Pr Najeb Youssef.%0A%0ANom : ${encodeURIComponent(name)}%0ATéléphone : ${encodeURIComponent(phone)}%0AMotif : ${encodeURIComponent(reason)}%0APréférence de date : ${encodeURIComponent(date)}${note ? `%0ANote : ${encodeURIComponent(note)}` : ''}`
    window.location.href = `https://wa.me/212665247995?text=${message}`
  }

  const review = testimonials[reviewIndex]

  return (
    <>
      <a className="skip-link" href="#main">Aller au contenu</a>
      <header className="site-header" id="top">
        <div className="header-inner">
          <BrandMark />
          <nav id="mobile-navigation" className={`main-nav ${mobileOpen ? 'nav-open' : ''}`} aria-label="Navigation principale">
            {navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>)}
            <a className="nav-mobile-cta" href="#contact" onClick={() => setMobileOpen(false)}>Prendre rendez-vous <Arrow /></a>
          </nav>
          <a className="header-cta" href="#contact">Prendre rendez-vous <Arrow /></a>
          <button className="menu-toggle" type="button" aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(!mobileOpen)}>
            <span /><span />
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> CHIRURGIE ORTHOPÉDIQUE & TRAUMATOLOGIE</div>
            <h1 id="hero-title">Retrouver le<br /><em>mouvement.</em><br />Retrouver la<br /><em>liberté.</em></h1>
            <p className="hero-description">Chirurgien orthopédiste et traumatologue à Casablanca, Pr Najeb Youssef accompagne ses patients dans la prise en charge des pathologies articulaires, traumatiques et sportives.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">Prendre rendez-vous <Arrow /></a>
              <a className="text-link" href="https://wa.me/212665247995" target="_blank" rel="noreferrer">WhatsApp <Arrow diagonal /></a>
            </div>
            <div className="hero-location"><span className="location-dot" /> AÏN SEBAÂ <i /> CASABLANCA</div>
          </div>
          <div className="hero-visual">
            <Image src="/cabinet/5.webp" alt="Espace patients lumineux du cabinet à Aïn Sebaâ" fill priority sizes="(max-width: 820px) 100vw, 54vw" className="hero-image" />
            <div className="hero-image-shade" />
            <div className="hero-image-caption"><span>LE CABINET</span><strong>Aïn Sebaâ · Casablanca</strong></div>
            <div className="hero-image-index">01 <span>/</span> 08</div>
          </div>
          <a className="scroll-cue" href="#expertise"><span>Défiler</span><i /></a>
        </section>

        <section className="credentials" aria-label="Repères d’expérience">
          <div className="section-rail"><span>REPÈRES</span><span>01 — 08</span></div>
          <div className="credential-grid">
            <div className="credential"><strong>28<span>+</span></strong><span>années d’expérience</span></div>
            <div className="credential"><strong>5 000<span>+</span></strong><span>patients suivis</span></div>
            <div className="credential"><strong>3 000<span>+</span></strong><span>interventions</span></div>
            <div className="credential"><strong>98<span>%</span></strong><span>satisfaction</span></div>
          </div>
        </section>

        <section className="expertise-section section-pad" id="expertise" aria-labelledby="expertise-title">
          <div className="section-heading">
            <div className="eyebrow"><span className="eyebrow-line" /> L’ART DU MOUVEMENT</div>
            <h2 id="expertise-title">Une expertise<br /><em>dédiée au mouvement.</em></h2>
            <p>Six domaines, une même attention portée au geste juste et à la personne.</p>
          </div>
          <div className="expertise-layout">
            <div className="expertise-list" aria-label="Spécialités">
              {specialties.map((item, index) => (
                <button key={item.name} className={`expertise-row ${activeSpecialty === index ? 'expertise-active' : ''}`} type="button" aria-pressed={activeSpecialty === index} onMouseEnter={() => setActiveSpecialty(index)} onFocus={() => setActiveSpecialty(index)} onClick={() => setActiveSpecialty(index)}>
                  <span className="expertise-number">0{index + 1}</span>
                  <span className="expertise-name">{item.name}</span>
                  <span className="expertise-arrow" aria-hidden="true">↗</span>
                </button>
              ))}
            </div>
            <div className="expertise-detail" aria-live="polite">
              <AnatomyDiagram active={activeSpecialty} />
              <div className="expertise-description">
                <span className="micro-label">0{activeSpecialty + 1} / SPÉCIALITÉ</span>
                <h3>{specialties[activeSpecialty].name}</h3>
                <p>{specialties[activeSpecialty].summary}</p>
                <div className="expertise-tags">{specialties[activeSpecialty].tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="profile-section section-pad" id="parcours" aria-labelledby="profile-title">
          <div className="profile-aside">
            <div className="eyebrow"><span className="eyebrow-line" /> LE PARCOURS</div>
            <div className="profile-mark" aria-hidden="true"><span>NY</span><i /></div>
            <p className="profile-aside-caption">CASABLANCA<br />DEPUIS 1995</p>
          </div>
          <div className="profile-main">
            <h2 id="profile-title">Près de trente années<br /><em>au service du mouvement.</em></h2>
            <p className="profile-intro">Chirurgien orthopédiste-traumatologue exerçant à Casablanca, le Pr Najeb Youssef a construit son parcours entre Casablanca, Paris, Rabat et Marrakech.</p>
            <div className="profile-highlights">
              <div><span>FORMATION</span><strong>Doctorat en Médecine · Casablanca</strong></div>
              <div><span>SPÉCIALITÉ</span><strong>Traumatologie & Orthopédie</strong></div>
              <div><span>RECHERCHE</span><strong>Master de Recherche · Biomécanique</strong></div>
              <div><span>EXERCICE</span><strong>Ancien Chef de service · CHU Mohammed VI</strong></div>
            </div>
            <details className="profile-details">
              <summary>Découvrir le parcours détaillé <Arrow /></summary>
              <div className="timeline">
                <div className="timeline-item"><span>1995</span><div><strong>Doctorat en Médecine</strong><p>Faculté de Médecine et de Pharmacie · Université Hassan II Aïn Chock · Casablanca</p></div></div>
                <div className="timeline-item"><span>2001</span><div><strong>Spécialité — Traumatologie & Orthopédie</strong><p>FMP Casablanca · Université Hassan II Aïn Chock</p></div></div>
                <div className="timeline-item"><span>2000–2001</span><div><strong>Formations spécialisées en France</strong><p>AFS en Orthopédie (Bichat, Paris Diderot), DU de Techniques Microchirurgicales (Léonard de Vinci, Paris XIII) et DU de Pathologie de l’Épaule et du Coude (Paris XII Val-de-Marne).</p></div></div>
                <div className="timeline-item"><span>2002</span><div><strong>Master de Recherche — Biomécanique</strong><p>École Nationale Supérieure d’Arts et Métiers · Paris</p></div></div>
                <div className="timeline-item"><span>2007–2010</span><div><strong>Chef du service Traumatologie-Orthopédie « A »</strong><p>CHU Mohammed VI · Marrakech. Responsabilités de formation médicale et activité de recherche BIO2M à l’Université Cadi Ayyad.</p></div></div>
                <div className="timeline-item"><span>2008–2013</span><div><strong>Diplômes universitaires complémentaires</strong><p>Chirurgie du pied · Traumatologie du sport · Échographie musculo-squelettique</p></div></div>
                <div className="timeline-item"><span>Aujourd’hui</span><div><strong>Cabinet libéral · Aïn Sebaâ</strong><p>Chirurgie orthopédique, traumatologie et médecine du sport à Casablanca.</p></div></div>
              </div>
              <div className="professional-references"><span>RÉFÉRENCES PROFESSIONNELLES PUBLIÉES</span><p>SMACOT · SMA · SFA · SMCM · SECOT · Société Marocaine de Chirurgie du Rachis</p></div>
            </details>
          </div>
        </section>

        <section className="journey-section" aria-labelledby="journey-title">
          <div className="journey-top section-pad">
            <div className="eyebrow"><span className="eyebrow-line" /> VOTRE PARCOURS PATIENT</div>
            <h2 id="journey-title">De la consultation<br /><em>à la récupération.</em></h2>
            <p>Un parcours pensé étape par étape — pour que chacun puisse comprendre, anticiper et avancer en confiance.</p>
          </div>
          <div className="journey-track">
            {journey.map((step, index) => (
              <article className="journey-step" key={step.title}>
                <span className="journey-number">0{index + 1}</span>
                <div className="journey-line" />
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cabinet-section section-pad" id="cabinet" aria-labelledby="cabinet-title">
          <div className="cabinet-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> LE CABINET</div>
              <h2 id="cabinet-title">Un environnement<br /><em>pensé pour la sérénité.</em></h2>
            </div>
            <p>Le cabinet d’Aïn Sebaâ accueille les patients dans un cadre médical épuré, au cœur de Casablanca.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <figure className={`gallery-item gallery-item-${index + 1}`} key={item.src}>
                <div className="gallery-image-wrap"><Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw" loading="lazy" /></div>
                <figcaption><span>{item.number} · {item.caption}</span><Arrow diagonal /></figcaption>
              </figure>
            ))}
            <div className="gallery-note"><span>CABINET PR NAJEB YOUSSEF</span><strong>Aïn Sebaâ<br />Casablanca</strong><a href="https://maps.app.goo.gl/kspc5B2zU7YjAfBHA" target="_blank" rel="noreferrer">Voir l’itinéraire <Arrow diagonal /></a></div>
          </div>
        </section>

        <section className="testimonials-section section-pad" id="temoignages" aria-labelledby="testimonials-title">
          <div className="testimonials-heading">
            <div className="eyebrow"><span className="eyebrow-line" /> TÉMOIGNAGES</div>
            <h2 id="testimonials-title">La confiance,<br /><em>au-delà des mots.</em></h2>
          </div>
          <div className="testimonial-content" aria-live="polite" aria-atomic="true">
            <span className="quote-mark" aria-hidden="true">“</span>
            <blockquote>{review.quote}</blockquote>
            <div className="testimonial-byline">
              <div className="testimonial-initials" aria-hidden="true">{review.initials}</div>
              <div><strong>{review.name}</strong><span>{review.city} · {review.context}</span></div>
            </div>
            <div className="testimonial-controls">
              <span className="review-counter">0{reviewIndex + 1} <i>/</i> 0{testimonials.length}</span>
              <div className="review-buttons">
                <button type="button" aria-label="Témoignage précédent" onClick={() => setReviewIndex((reviewIndex + testimonials.length - 1) % testimonials.length)}>←</button>
                <button type="button" aria-label="Témoignage suivant" onClick={() => setReviewIndex((reviewIndex + 1) % testimonials.length)}>→</button>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-intro">
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> PRENDRE RENDEZ-VOUS</div>
            <h2 id="contact-title">Votre mobilité commence<br /><em>par une consultation.</em></h2>
            <p>Le secrétariat médical vous accompagne pour organiser votre consultation.</p>
            <div className="contact-hours"><span>HORAIRES DU CABINET</span><p>Lundi – Vendredi · 09h00 – 19h00<br />Samedi · 09h00 – 13h00</p></div>
            <div className="contact-actions">
              <a href="tel:+212665247995">Appeler <Arrow diagonal /></a>
              <a href="https://wa.me/212665247995" target="_blank" rel="noreferrer">WhatsApp <Arrow diagonal /></a>
              <a href="mailto:youssefnajeb@gmail.com">Email <Arrow diagonal /></a>
            </div>
          </div>
          <div className="appointment-form-wrap">
            <div className="form-heading"><span>DEMANDE DE CONSULTATION</span><span>01 — 03</span></div>
            <p className="form-note">Votre demande est préparée pour le secrétariat via WhatsApp.</p>
            <form onSubmit={sendAppointment}>
              <label htmlFor="name">Nom complet <span>*</span></label>
              <input id="name" name="name" type="text" autoComplete="name" placeholder="Votre nom" required />
              <label htmlFor="phone">Téléphone <span>*</span></label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Votre numéro" required />
              <label htmlFor="reason">Motif de consultation</label>
              <select id="reason" name="reason" defaultValue="Consultation initiale">
                <option>Consultation initiale</option><option>Genou — Prothèse / LCA</option><option>Hanche — Prothèse</option><option>Épaule — Arthroscopie</option><option>Main & Nerfs</option><option>Pied & Cheville</option><option>Traumatologie</option><option>Second avis</option>
              </select>
              <div className="form-pair">
                <div><label htmlFor="date">Préférence de date</label><input id="date" name="date" type="date" /></div>
                <div><label htmlFor="note">Note (optionnel)</label><input id="note" name="note" type="text" placeholder="Quelques mots" /></div>
              </div>
              <button className="button button-light form-submit" type="submit">Préparer sur WhatsApp <Arrow diagonal /></button>
              <p className="form-privacy">Aucune information n’est envoyée à un serveur par ce formulaire.</p>
            </form>
          </div>
        </section>

        <section className="address-strip" aria-label="Adresse du cabinet">
          <div><span>NOUS TROUVER</span><strong>Cabinet Pr Najeb Youssef</strong></div>
          <p>Angle Bd Chefchaouni & Rue Abdelhamid Ibn Badis<br />Résidence Robert « B » · RDC · Bureau 2 · 20250 Casablanca</p>
          <a href="https://maps.app.goo.gl/kspc5B2zU7YjAfBHA" target="_blank" rel="noreferrer">Voir l’itinéraire <Arrow diagonal /></a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main"><BrandMark light /><p>Chirurgien orthopédiste<br />& traumatologue · Casablanca</p>
          <div className="footer-contact"><a href="tel:+212665247995">+212 6 65 24 79 95</a><a href="mailto:youssefnajeb@gmail.com">youssefnajeb@gmail.com</a><a href="https://wa.me/212665247995" target="_blank" rel="noreferrer">WhatsApp</a></div>
          <a className="footer-instagram" href="https://instagram.com/cabinet_pr_najeb_youssef" target="_blank" rel="noreferrer">Instagram <Arrow diagonal /></a>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Pr Najeb Youssef</span><span>Aïn Sebaâ · Casablanca</span><a href="#top">Retour en haut ↑</a></div>
      </footer>
      <a className="mobile-sticky-cta" href="#contact">Prendre rendez-vous <Arrow /></a>
    </>
  )
}
