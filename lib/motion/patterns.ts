'use client'

import { EASE, ScrollTrigger, SplitText, gsap } from './gsap'

/**
 * Scroll-pattern registry.
 *
 * Sections opt in declaratively with `data-motion="<pattern>"` and mark their
 * moving parts with `data-m="<role>"`. MotionProvider runs every pattern inside a
 * gsap.matchMedia() context, so all tweens are reverted automatically when the
 * user prefers reduced motion or the page unmounts.
 *
 * Patterns only ever animate *from* a hidden state to the natural CSS state, so
 * the page is complete and readable without JavaScript.
 */

export type MotionConditions = { desktop: boolean }
type Pattern = (root: HTMLElement, c: MotionConditions) => void

const q = (root: HTMLElement, role: string) => Array.from(root.querySelectorAll<HTMLElement>(`[data-m="${role}"]`))

/** Lines of large type rise out of a mask, one after another. */
function splitLines(targets: HTMLElement[], trigger: HTMLElement, start = 'top 82%') {
  targets.forEach(el => {
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'split-line',
      autoSplit: true,
      onSplit: self =>
        gsap.from(self.lines, {
          yPercent: 110,
          duration: 1.25,
          ease: EASE.out,
          stagger: 0.09,
          scrollTrigger: { trigger, start, once: true },
        }),
    })
  })
}

/** Soft rise for supporting copy, labels and controls. */
function riseIn(targets: HTMLElement[], trigger: HTMLElement, start = 'top 80%', delay = 0) {
  if (!targets.length) return
  gsap.from(targets, {
    y: 28,
    autoAlpha: 0,
    duration: 1.1,
    delay,
    ease: EASE.soft,
    stagger: 0.08,
    scrollTrigger: { trigger, start, once: true },
  })
}

const patterns: Record<string, Pattern> = {
  /** 01 — Hero: image drifts slower than the page; copy eases away on exit. */
  'hero-parallax': root => {
    const media = q(root, 'parallax')
    const copy = q(root, 'hero-copy')
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: root, start: 'top top', end: 'bottom top', scrub: true },
    })
    tl.to(media, { yPercent: 9, scale: 1.04 }, 0)
    tl.to(copy, { yPercent: -12, autoAlpha: 0.2 }, 0)
    q(root, 'meta').forEach(el => tl.to(el, { autoAlpha: 0 }, 0))
  },

  /** 02 — Intro: statement reveals line by line, figures follow. */
  'text-reveal': root => {
    splitLines(q(root, 'lines'), root)
    riseIn(q(root, 'rise'), root, 'top 70%', 0.2)
    const rule = q(root, 'rule')
    if (rule.length)
      gsap.from(rule, { scaleX: 0, transformOrigin: 'left center', duration: 1.6, ease: EASE.out, scrollTrigger: { trigger: rule[0], start: 'top 90%', once: true } })
  },

  /** 03 — Expertise: heading reveal, rows stack in; the sticky visual is CSS. */
  'sticky-stack': root => {
    splitLines(q(root, 'lines'), root)
    riseIn(q(root, 'rise'), root, 'top 75%', 0.15)
    ScrollTrigger.batch(q(root, 'row'), {
      start: 'top 88%',
      once: true,
      onEnter: batch => gsap.from(batch, { y: 40, autoAlpha: 0, duration: 1, stagger: 0.07, ease: EASE.soft }),
    })
    const visual = q(root, 'visual')
    if (visual.length)
      gsap.from(visual, { clipPath: 'inset(12% 0% 12% 0%)', duration: 1.4, ease: EASE.out, scrollTrigger: { trigger: visual[0], start: 'top 80%', once: true } })
  },

  /** 04 — Parcours: timeline spine draws with scroll, entries reveal in sequence. */
  'editorial-reveal': root => {
    splitLines(q(root, 'lines'), root)
    riseIn(q(root, 'rise'), root, 'top 72%', 0.15)
    q(root, 'spine').forEach(spine =>
      gsap.fromTo(spine, { scaleY: 0 }, { scaleY: 1, ease: 'none', transformOrigin: 'top center', scrollTrigger: { trigger: spine, start: 'top 75%', end: 'bottom 60%', scrub: true } }),
    )
    ScrollTrigger.batch(q(root, 'entry'), {
      start: 'top 85%',
      once: true,
      onEnter: batch => gsap.from(batch, { x: -18, autoAlpha: 0, duration: 1, stagger: 0.12, ease: EASE.soft }),
    })
    q(root, 'reveal-media').forEach(el =>
      gsap.from(el, { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.5, ease: EASE.out, scrollTrigger: { trigger: el, start: 'top 85%', once: true } }),
    )
  },

  /** 05 — Cabinet: frames unmask, photographs drift inside their frames. */
  'image-parallax': (root, c) => {
    splitLines(q(root, 'lines'), root)
    riseIn(q(root, 'rise'), root, 'top 75%', 0.15)
    q(root, 'frame').forEach(frame => {
      gsap.from(frame, { clipPath: 'inset(18% 0% 0% 0%)', autoAlpha: 0, duration: 1.4, ease: EASE.out, scrollTrigger: { trigger: frame, start: 'top 88%', once: true } })
      const img = frame.querySelector<HTMLElement>('[data-m="drift"]')
      if (!img) return
      const range = c.desktop ? 8 : 4
      gsap.fromTo(img, { yPercent: -range }, { yPercent: range, ease: 'none', scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true } })
    })
    riseIn(q(root, 'caption'), root, 'top 60%', 0.3)
  },

  /** 06 — Témoignages: restrained fade + slide. Quote changes are handled in CSS. */
  'fade-slide': root => {
    splitLines(q(root, 'lines'), root)
    riseIn(q(root, 'rise'), root, 'top 72%', 0.1)
  },

  /** 07 — Contact: the dark stage opens from an inset frame to full bleed. */
  'scale-through': (root, c) => {
    const stage = q(root, 'stage')[0]
    if (stage) {
      const inset = c.desktop ? '0% 3.5% 0% 3.5% round 18px' : '0% 3% 0% 3% round 14px'
      gsap.fromTo(stage, { clipPath: `inset(${inset})` }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none', scrollTrigger: { trigger: root, start: 'top 95%', end: 'top 25%', scrub: true } })
    }
    splitLines(q(root, 'lines'), root, 'top 60%')
    riseIn(q(root, 'rise'), root, 'top 55%', 0.2)
  },

  /** Footer: content slides up from beneath the contact scene. */
  'parallax-reveal': root => {
    const inner = q(root, 'inner')
    gsap.fromTo(inner, { yPercent: -18, autoAlpha: 0.4 }, { yPercent: 0, autoAlpha: 1, ease: 'none', scrollTrigger: { trigger: root, start: 'top bottom', end: 'bottom bottom', scrub: true } })
  },

  /** Generic helper for small bands (patient journey). */
  'stagger-in': root => {
    splitLines(q(root, 'lines'), root)
    riseIn(q(root, 'rise'), root, 'top 78%')
    ScrollTrigger.batch(q(root, 'step'), {
      start: 'top 88%',
      once: true,
      onEnter: batch => gsap.from(batch, { y: 36, autoAlpha: 0, duration: 1.1, stagger: 0.1, ease: EASE.soft }),
    })
    q(root, 'rule').forEach(rule =>
      gsap.from(rule, { scaleX: 0, transformOrigin: 'left center', duration: 1.8, ease: EASE.out, scrollTrigger: { trigger: rule, start: 'top 90%', once: true } }),
    )
  },
}

export function runPatterns(scope: ParentNode, c: MotionConditions) {
  scope.querySelectorAll<HTMLElement>('[data-motion]').forEach(root => {
    const name = root.dataset.motion
    if (name && patterns[name]) patterns[name](root, c)
  })
}
