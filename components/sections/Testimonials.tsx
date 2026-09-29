'use client'

import { useState } from 'react'
import { testimonials } from '@/lib/content'
import { SectionLabel } from '../ui'

const pad = (n: number) => String(n).padStart(2, '0')

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const review = testimonials[index]
  const go = (dir: number) => setIndex((index + dir + testimonials.length) % testimonials.length)

  return (
    <section className="testimonials section" id="temoignages" aria-labelledby="testimonials-title" data-motion="fade-slide">
      <div className="container testimonials-grid">
        <div className="testimonials-aside">
          <SectionLabel index="05">Témoignages</SectionLabel>
          <h2 id="testimonials-title" className="display-3" data-m="lines">
            La confiance, <em>au-delà des mots.</em>
          </h2>
          <ul className="testimonial-index" aria-label="Choisir un témoignage" data-m="rise">
            {testimonials.map((t, i) => (
              <li key={t.name}>
                <button type="button" aria-pressed={i === index} onClick={() => setIndex(i)} className={i === index ? 'is-active' : ''}>
                  <span aria-hidden="true">{pad(i + 1)}</span>
                  {t.name}{' '}
                  <small>{t.context}</small>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <figure className="testimonial" data-m="rise">
          <span className="quote-glyph" aria-hidden="true">“</span>
          <div aria-live="polite" aria-atomic="true">
            <blockquote key={index} className="testimonial-quote">
              <p>{review.quote}</p>
            </blockquote>
            <figcaption key={`c${index}`} className="testimonial-byline">
              <span className="initials" aria-hidden="true">{review.initials}</span>
              <span>
                <strong>{review.name}</strong>
                {review.city} · {review.context}
              </span>
            </figcaption>
          </div>
          <div className="testimonial-controls">
            <span className="counter">{pad(index + 1)} <i>/</i> {pad(testimonials.length)}</span>
            <span className="progress" aria-hidden="true"><i style={{ transform: `scaleX(${(index + 1) / testimonials.length})` }} /></span>
            <div className="arrows">
              <button type="button" aria-label="Témoignage précédent" onClick={() => go(-1)}>
                <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M14 8H3M7 4 3 8l4 4" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <button type="button" aria-label="Témoignage suivant" onClick={() => go(1)}>
                <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          </div>
        </figure>
      </div>
    </section>
  )
}
