import { navLinks, site } from '@/lib/content'
import { Arrow, BrandMark } from './ui'

export default function SiteFooter() {
  return (
    <footer className="site-footer" data-motion="parallax-reveal">
      <div className="container footer-inner" data-m="inner">
        <div className="footer-top">
          <div className="footer-brand">
            <BrandMark light />
            <p>Chirurgien orthopédiste<br />& traumatologue · Casablanca</p>
          </div>
          <nav className="footer-col" aria-label="Plan du site">
            <p className="eyebrow">Navigation</p>
            <ul>{navLinks.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}</ul>
          </nav>
          <div className="footer-col">
            <p className="eyebrow">Contact</p>
            <ul>
              <li><a href={site.phoneHref}>{site.phoneDisplay}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={site.whatsappHref} target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href={site.instagramHref} target="_blank" rel="noreferrer">Instagram <Arrow diagonal /></a></li>
            </ul>
          </div>
        </div>

        <p className="footer-wordmark" aria-hidden="true">Najeb Youssef</p>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>{site.district} · {site.city}</span>
          <a href="#top">Retour en haut ↑</a>
        </div>
      </div>
    </footer>
  )
}
