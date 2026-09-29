/** Original schematic joint drawings, redrawn in the new palette. Illustrative only. */
const INK = 'var(--ink)'
const ACCENT = 'var(--accent)'

const shapes = [
  <>
    <path d="M147 50c-2 26 10 46 27 65l5 22c-5 18-11 31-11 48 0 16 8 27 13 42" />
    <path d="M214 50c4 23-2 43-18 65l-8 22c4 17 12 31 14 48 2 16-4 29-10 42" />
    <path d="M158 145c12-10 29-14 47-10m-50 24c14 7 32 8 49 0" stroke={ACCENT} strokeWidth="3" />
    <circle cx="180" cy="154" r="6" fill={ACCENT} stroke="none" />
  </>,
  <>
    <path d="M115 63c13 22 31 35 65 38 34 3 53-13 65-34" />
    <path d="M180 100c-6 23-13 42-15 61-2 23 4 50 18 76" />
    <path d="M178 101c14 14 21 29 20 45-1 10-8 17-18 17-10 0-17-8-17-18" stroke={ACCENT} />
    <circle cx="180" cy="151" r="16" stroke={ACCENT} strokeWidth="3" />
  </>,
  <>
    <path d="M136 62c-10 25-16 45-11 65 4 17 21 25 39 18 15-6 22-21 21-40-2-17 4-32 15-44" />
    <path d="M179 103c15-6 31-1 42 10 13 13 17 31 14 48-4 19 4 43 17 65" />
    <path d="M146 126c12 10 28 14 45 12m-37 15c13 8 28 9 44 4" stroke={ACCENT} strokeWidth="3" />
    <circle cx="187" cy="138" r="6" fill={ACCENT} stroke="none" />
  </>,
  <>
    <path d="M121 63c6 39 19 65 47 88 18 15 37 26 70 53" />
    <path d="M238 66c-5 34-18 57-43 80-20 18-42 34-72 58" />
    <path d="M149 121c18 4 38 4 57-1m-42 22c16 8 31 10 47 7" stroke={ACCENT} strokeWidth="3" />
    <circle cx="180" cy="145" r="8" fill={ACCENT} stroke="none" />
  </>,
  <>
    <path d="M129 211c14-10 31-13 47-10l3-69c0-9 14-9 14 0l1 44 2-66c0-10 15-9 15 1l-1 69 6-48c1-10 15-9 15 2l-4 55 10-30c4-10 18-4 14 6l-13 51c-7 28-29 44-59 43-25-1-42-16-50-48z" />
    <path d="M126 219c11 14 20 26 30 35m52-121v39" stroke={ACCENT} strokeWidth="3" />
  </>,
  <>
    <path d="M153 50c-3 34 3 63 19 87 12 19 19 43 14 68l-7 28" />
    <path d="M211 50c1 31-4 61-20 87-11 18-19 43-14 68l7 28" />
    <path d="M149 159c10-9 22-13 34-11 14 2 25 9 31 20m-61-3c13 4 26 7 40 6" stroke={ACCENT} strokeWidth="3" />
    <path d="M169 233c-12 8-27 13-43 15m74-15c14 9 29 13 45 15" />
  </>,
]

export default function AnatomyDiagram({ active, zones }: { active: number; zones: string[] }) {
  return (
    <div className="anatomy">
      <svg viewBox="0 0 360 300" className="anatomy-svg" role="img" aria-label={`Schéma illustratif de la zone concernée : ${zones[active]}`}>
        <circle cx="180" cy="154" r="118" fill="none" stroke="var(--line)" strokeDasharray="1 7" />
        <circle cx="180" cy="154" r="78" fill="none" stroke="var(--line)" strokeDasharray="1 7" />
        <line x1="180" y1="20" x2="180" y2="288" stroke="var(--line)" />
        <line x1="46" y1="154" x2="314" y2="154" stroke="var(--line)" />
        {shapes.map((shape, i) => (
          <g
            key={i}
            className={`anatomy-shape ${i === active ? 'is-active' : ''}`}
            fill="none"
            stroke={INK}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {shape}
          </g>
        ))}
      </svg>
    </div>
  )
}
