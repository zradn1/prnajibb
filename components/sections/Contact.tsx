import { site } from '@/lib/content'
import { Arrow, SectionLabel } from '../ui'
import AppointmentForm from './AppointmentForm'

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title" data-motion="scale-through">
      <div className="contact-stage" data-m="stage">
        <div className="container contact-grid">
          <div className="contact-intro">
            <SectionLabel index="06" light>Prendre rendez-vous</SectionLabel>
            <h2 id="contact-title" className="display-2" data-m="lines">
              Votre mobilité commence <em>par une consultation.</em>
            </h2>
            <p className="contact-lead" data-m="rise">Le secrétariat médical vous accompagne pour organiser votre consultation.</p>

            <dl className="contact-details">
              <div data-m="rise">
                <dt>Téléphone</dt>
                <dd><a href={site.phoneHref}>{site.phoneDisplay}</a></dd>
              </div>
              <div data-m="rise">
                <dt>Email</dt>
                <dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
              </div>
              <div data-m="rise">
                <dt>Horaires du cabinet</dt>
                <dd>
                  {site.hours.map(h => (
                    <span key={h.days} className="hours-row"><span>{h.days}</span><span>{h.time}</span></span>
                  ))}
                </dd>
              </div>
              <div data-m="rise">
                <dt>Nous trouver</dt>
                <dd>
                  <strong className="clinic-name">{site.clinicName}</strong>
                  {site.addressLines[0]}<br />{site.addressLines[1]}
                </dd>
              </div>
            </dl>

            <div className="contact-actions" data-m="rise">
              <a href={site.phoneHref}>Appeler <Arrow diagonal /></a>
              <a href={site.whatsappHref} target="_blank" rel="noreferrer">WhatsApp <Arrow diagonal /></a>
              <a href={`mailto:${site.email}`}>Email <Arrow diagonal /></a>
              <a href={site.mapsHref} target="_blank" rel="noreferrer">Voir l’itinéraire <Arrow diagonal /></a>
            </div>
          </div>

          <AppointmentForm />
        </div>
      </div>
    </section>
  )
}
