'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

// Registered once for the whole app — components import from here, never from 'gsap' directly.
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)
  gsap.defaults({ ease: 'power3.out', duration: 1 })
}

/** Shared motion tokens, mirrored in globals.css (--ease-out, --dur-*). */
export const EASE = {
  out: 'expo.out',
  soft: 'power3.out',
  inOut: 'power2.inOut',
} as const

/** Breakpoint conditions used by every pattern through gsap.matchMedia(). */
export const MEDIA = {
  motion: '(prefers-reduced-motion: no-preference)',
  reduced: '(prefers-reduced-motion: reduce)',
  desktop: '(min-width: 1024px)',
} as const

export { gsap, ScrollTrigger, SplitText, useGSAP }
