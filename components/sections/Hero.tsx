import Image from 'next/image'
import { hero, site } from '@/lib/content'
import Magnetic from '../motion/Magnetic'
import { Arrow } from '../ui'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title" data-motion="hero-parallax">
      <div className="hero-copy" data-m="hero-copy">
        <p className="hero-eyebrow reveal" style={{ '--d': '0.1s' } as React.CSSProperties}>
          <span className="dot" aria-hidden="true" />
          {site.name}
        </p>
        <h1 id="hero-title" className="hero-title">
          {hero.titleLines.map((line, i) => (
            <span key={line.accent} className="hero-title-group">
              {i > 0 && ' '}
              <span className="mask-line"><span style={{ '--d': `${0.18 + i * 0.16}s` } as React.CSSProperties}>{line.text}</span></span>
              {' '}
              <span className="mask-line"><span style={{ '--d': `${0.26 + i * 0.16}s` } as React.CSSProperties}><em>{line.accent}</em></span></span>
            </span>
          ))}
        </h1>
        <p className="hero-lead reveal" style={{ '--d': '0.62s' } as React.CSSProperties}>{hero.description}</p>
        <div className="hero-actions reveal" style={{ '--d': '0.74s' } as React.CSSProperties}>
          <Magnetic>
            <a className="btn btn-primary" href="#contact">
              Prendre rendez-vous
              <span className="btn-icon"><Arrow /></span>
            </a>
          </Magnetic>
          <a className="link-underline" href="#expertise">Découvrir l’expertise</a>
        </div>
      </div>

      <div className="hero-visual">
        <figure className="hero-frame">
          <div className="hero-media" data-m="parallax">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 1023px) 100vw, 48vw"
              className="photo"
            />
          </div>
          <figcaption className="hero-caption">
            <span>Le cabinet</span>
            {hero.image.caption}
          </figcaption>
        </figure>
        <p className="hero-meta hero-meta-top reveal" style={{ '--d': '0.9s' } as React.CSSProperties} data-m="meta">
          <span>{site.city.toUpperCase()}</span>
          <span>{site.district.toUpperCase()}</span>
        </p>
      </div>

      <div className="hero-rail reveal" style={{ '--d': '1s' } as React.CSSProperties} data-m="meta">
        <span>Orthopédie · Traumatologie</span>
        <a href="#intro" className="hero-scroll" aria-label="Défiler vers la présentation">
          <i aria-hidden="true" />Défiler
        </a>
        <span>33.6076° N — 7.5366° O</span>
      </div>
    </section>
  )
}
