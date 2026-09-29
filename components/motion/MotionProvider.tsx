'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'
import { MEDIA, ScrollTrigger, gsap, useGSAP } from '@/lib/motion/gsap'
import { runPatterns } from '@/lib/motion/patterns'

/**
 * Owns the page's motion runtime: Lenis smooth scrolling synced to the GSAP
 * ticker, and the declarative scroll patterns. Renders nothing.
 * Everything is skipped under prefers-reduced-motion.
 */
export default function MotionProvider() {
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add({ motion: MEDIA.motion, desktop: MEDIA.desktop }, ctx => {
      const { motion, desktop } = ctx.conditions as { motion: boolean; desktop: boolean }
      if (!motion) return
      document.documentElement.classList.add('motion-on')
      runPatterns(document, { desktop })
      return () => document.documentElement.classList.remove('motion-on')
    })
    return () => mm.revert()
  })

  useEffect(() => {
    const reduce = window.matchMedia(MEDIA.reduced)
    if (reduce.matches) return

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      anchors: { offset: -72 },
    })
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    // Late-loading fonts and images change layout: re-measure once everything is in.
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    document.fonts?.ready.then(refresh)

    return () => {
      window.removeEventListener('load', refresh)
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  return null
}
