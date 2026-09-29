import Image from 'next/image'
import { site } from '@/lib/content'

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg className={`arrow ${diagonal ? 'arrow-diagonal' : ''}`} viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a className={`brand ${light ? 'brand-light' : ''}`} href="#top" aria-label={`${site.name}, accueil`}>
      <Image src="/logo-mark.webp" alt="" width={44} height={44} className="brand-symbol" priority />
      <span className="brand-copy">
        <strong>{site.name}</strong>
        <small>{site.brandLine}</small>
      </span>
    </a>
  )
}

/** Small numbered section label: "02 — Expertise". */
export function SectionLabel({ index, children, light = false }: { index: string; children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`section-label ${light ? 'section-label-light' : ''}`} data-m="rise">
      <span className="section-label-index">{index}</span>
      <span className="section-label-rule" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}
