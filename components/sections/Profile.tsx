import Image from 'next/image'
import { profile } from '@/lib/content'
import { SectionLabel } from '../ui'

export default function Profile() {
  return (
    <section className="profile section" id="parcours" aria-labelledby="profile-title" data-motion="editorial-reveal">
      <div className="container profile-grid">
        <div className="profile-aside">
          <SectionLabel index="03">Parcours</SectionLabel>
          <figure className="profile-figure">
            <div className="profile-media" data-m="reveal-media">
              <Image src={profile.image.src} alt={profile.image.alt} fill sizes="(max-width: 1023px) 100vw, 36vw" className="photo" />
            </div>
            <figcaption>
              <span>{profile.image.caption}</span>
              <span>{profile.since}</span>
            </figcaption>
          </figure>
        </div>

        <div className="profile-main">
          <h2 id="profile-title" className="display-2" data-m="lines">
            Près de trente années <em>au service du mouvement.</em>
          </h2>
          <p className="profile-intro" data-m="rise">{profile.intro}</p>

          <dl className="profile-highlights">
            {profile.highlights.map(item => (
              <div key={item.label} data-m="rise">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="timeline-wrap">
            <p className="eyebrow" data-m="rise">Parcours détaillé</p>
            <div className="timeline">
              <span className="timeline-spine" data-m="spine" aria-hidden="true" />
              <ol>
              {profile.timeline.map(item => (
                <li key={item.year + item.title} className="timeline-entry" data-m="entry">
                  <span className="timeline-year">{item.year}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </li>
              ))}
              </ol>
            </div>
          </div>

          <div className="references" data-m="rise">
            <p className="eyebrow">{profile.referencesLabel}</p>
            <ul>
              {profile.references.map(ref => <li key={ref}>{ref}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
