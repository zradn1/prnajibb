import Image from 'next/image'
import { gallery, site } from '@/lib/content'
import { Arrow, SectionLabel } from '../ui'

type Photo = { src: string; alt: string; caption: string }

function Frame({ photo, index, className, sizes }: { photo: Photo; index: number; className: string; sizes: string }) {
  return (
    <figure className={`frame ${className}`}>
      <div className="frame-media" data-m="frame">
        <div className="frame-drift" data-m="drift">
          <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="photo" />
        </div>
      </div>
      <figcaption>
        <span className="frame-index">0{index}</span>
        {photo.caption}
      </figcaption>
    </figure>
  )
}

export default function Cabinet() {
  const [first, second] = gallery.side
  return (
    <section className="cabinet section" id="cabinet" aria-labelledby="cabinet-title" data-motion="image-parallax">
      <div className="container">
        <header className="cabinet-head">
          <div>
            <SectionLabel index="04">Le cabinet</SectionLabel>
            <h2 id="cabinet-title" className="display-2" data-m="lines">
              Un environnement <em>pensé pour la sérénité.</em>
            </h2>
          </div>
          <p className="section-lead" data-m="rise">{gallery.lead}</p>
        </header>

        <div className="cabinet-grid">
          <Frame photo={gallery.feature} index={1} className="frame-feature" sizes="(max-width: 1023px) 100vw, 56vw" />
          <Frame photo={first} index={2} className="frame-tall" sizes="(max-width: 1023px) 100vw, 30vw" />
          <Frame photo={second} index={3} className="frame-small" sizes="(max-width: 1023px) 60vw, 22vw" />
          <div className="cabinet-note" data-m="caption">
            <p className="eyebrow">{site.clinicName}</p>
            <p className="cabinet-note-title">{site.district}<br />{site.city}</p>
            <a className="link-underline" href={site.mapsHref} target="_blank" rel="noreferrer">
              Voir l’itinéraire <Arrow diagonal />
            </a>
          </div>
        </div>
      </div>

      <figure className="panorama">
        <div className="frame-media panorama-media" data-m="frame">
          <div className="frame-drift" data-m="drift">
            <Image src={gallery.panorama.src} alt={gallery.panorama.alt} fill sizes="100vw" className="photo" />
          </div>
        </div>
        <figcaption className="container">
          <span className="frame-index">04</span>
          {gallery.panorama.caption}
        </figcaption>
      </figure>
    </section>
  )
}
