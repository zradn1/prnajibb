'use client'

import { useEffect, useRef, useState } from 'react'
import { navLinks } from '@/lib/content'
import { Arrow, BrandMark } from './ui'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showSticky, setShowSticky] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let contactVisible = false
    const update = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setShowSticky(y > window.innerHeight * 0.8 && !contactVisible)
    }
    const contact = document.getElementById('contact')
    const io = contact
      ? new IntersectionObserver(([entry]) => { contactVisible = entry.isIntersecting; update() }, { rootMargin: '0px 0px -20% 0px' })
      : null
    if (contact && io) io.observe(contact)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => { window.removeEventListener('scroll', update); io?.disconnect() }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open)
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`} id="top">
        <div className="header-inner">
          <BrandMark light={open} />
          <nav className="main-nav" aria-label="Navigation principale">
            <ul>
              {navLinks.map(link => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </nav>
          <a className="header-cta" href="#contact">
            <span>Prendre rendez-vous</span>
            <Arrow />
          </a>
          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            <span /><span />
          </button>
        </div>
      </header>

      <div id="mobile-navigation" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open} inert={!open}>
        <nav aria-label="Navigation mobile">
          <ol>
            {navLinks.map((link, i) => (
              <li key={link.href} style={{ '--i': i } as React.CSSProperties}>
                <a href={link.href} onClick={close}><span>0{i + 1}</span>{link.label}</a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mobile-menu-foot">
          <a className="btn btn-accent" href="#contact" onClick={close}>Prendre rendez-vous <Arrow /></a>
          <p>Aïn Sebaâ · Casablanca</p>
        </div>
      </div>

      <a className={`mobile-sticky-cta ${showSticky && !open ? 'is-visible' : ''}`} href="#contact" tabIndex={showSticky ? 0 : -1}>
        Prendre rendez-vous <Arrow />
      </a>
    </>
  )
}
