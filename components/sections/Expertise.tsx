'use client'

import { useEffect, useRef, useState } from 'react'
import { specialties } from '@/lib/content'
import { SectionLabel } from '../ui'
import AnatomyDiagram from './AnatomyDiagram'

const pad = (n: number) => String(n).padStart(2, '0')

export default function Expertise() {
  const [active, setActive] = useState(0)
  const [desktop, setDesktop] = useState(false)
  const rowRefs = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const sync = () => setDesktop(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  // Desktop sticky-stack: the row crossing the middle band of the viewport becomes active.
  useEffect(() => {
    if (!desktop) return
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index)) }),
      { rootMargin: '-46% 0px -46% 0px' },
    )
    rowRefs.current.forEach(el => el && io.observe(el))
    return () => io.disconnect()
  }, [desktop])

  const current = specialties[active]

  return (
    <section className="expertise section" id="expertise" aria-labelledby="expertise-title" data-motion="sticky-stack">
      <div className="container">
        <header className="section-head">
          <SectionLabel index="02">Expertise</SectionLabel>
          <h2 id="expertise-title" className="display-2" data-m="lines">
            Une expertise <em>dédiée au mouvement.</em>
          </h2>
          <p className="section-lead" data-m="rise">Six domaines, une même attention portée au geste juste et à la personne.</p>
        </header>

        <div className="expertise-layout">
          <ol className="expertise-list" aria-label="Spécialités">
            {specialties.map((item, i) => {
              const isActive = i === active
              const panelId = `expertise-panel-${i}`
              return (
                <li
                  key={item.name}
                  ref={el => { rowRefs.current[i] = el }}
                  data-index={i}
                  data-m="row"
                  className={`expertise-row ${isActive ? 'is-active' : ''}`}
                >
                  <button
                    type="button"
                    className="expertise-trigger"
                    {...(desktop ? { 'aria-pressed': isActive } : { 'aria-expanded': isActive, 'aria-controls': panelId })}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => desktop && setActive(i)}
                    onFocus={() => desktop && setActive(i)}
                  >
                    <span className="expertise-num">{pad(i + 1)}</span>
                    <span className="expertise-name">{item.name}</span>
                    <span className="expertise-plus" aria-hidden="true" />
                  </button>
                  <div className="expertise-panel" id={panelId}>
                    <div>
                      <p>{item.summary}</p>
                      <ul className="tags" aria-label="Zones et gestes">
                        {item.tags.map(tag => <li key={tag}>{tag}</li>)}
                      </ul>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>

          <aside className="expertise-visual" aria-label="Illustration de la spécialité sélectionnée" data-m="visual">
            <div className="expertise-visual-inner">
              <div className="expertise-visual-top">
                <span>Étude articulaire</span>
                <span className="expertise-counter">
                  <b key={active}>{pad(active + 1)}</b> / {pad(specialties.length)}
                </span>
              </div>
              <AnatomyDiagram active={active} zones={specialties.map(s => s.zone)} />
              <div className="expertise-visual-bottom" aria-live="polite">
                <strong key={current.name}>{current.name}</strong>
                <span>Schéma illustratif · non diagnostique</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
