'use client'

import { ReactNode, useRef } from 'react'
import { MEDIA, gsap, useGSAP } from '@/lib/motion/gsap'

/**
 * Magnetic hover, adapted from the 21st.dev "Magnetic" pattern (ibelick) and
 * rebuilt on GSAP quickTo so it shares the site's single motion engine.
 * Only active for fine pointers with motion allowed.
 */
export default function Magnetic({ children, strength = 0.28 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return
      const mm = gsap.matchMedia()
      mm.add(`${MEDIA.motion} and (pointer: fine)`, () => {
        const x = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.45)' })
        const y = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.45)' })
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect()
          x((e.clientX - (r.left + r.width / 2)) * strength)
          y((e.clientY - (r.top + r.height / 2)) * strength)
        }
        const leave = () => { x(0); y(0) }
        el.addEventListener('pointermove', move)
        el.addEventListener('pointerleave', leave)
        return () => {
          el.removeEventListener('pointermove', move)
          el.removeEventListener('pointerleave', leave)
        }
      })
      return () => mm.revert()
    },
    { scope: ref },
  )

  return <span ref={ref} className="magnetic">{children}</span>
}
