'use client'

import { useEffect, useRef, useState } from 'react'

type DynamicSectionStageProps = {
  section: string
  index: string
  mark: string
  toneClass: string
  children: React.ReactNode
}

export default function DynamicSectionStage({
  section,
  index,
  mark,
  toneClass,
  children,
}: DynamicSectionStageProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let mutationObserver: MutationObserver | null = null

    const splitTitleWords = () => {
      const title = node.querySelector('section h2')
      if (!(title instanceof HTMLElement) || title.dataset.wordsReady === 'true') return false

      let wordIndex = 0

      const walkAndSplit = (target: Node) => {
        const childrenNodes = Array.from(target.childNodes)

        childrenNodes.forEach((child) => {
          if (child.nodeType === Node.TEXT_NODE) {
            const text = child.textContent ?? ''
            if (!text.trim()) return

            const fragment = document.createDocumentFragment()
            const parts = text.split(/(\s+)/)

            parts.forEach((part) => {
              if (!part) return

              if (/^\s+$/.test(part)) {
                fragment.appendChild(document.createTextNode(part))
                return
              }

              const span = document.createElement('span')
              span.className = 'split-word'
              span.style.setProperty('--word-index', String(wordIndex))
              span.textContent = part
              fragment.appendChild(span)
              wordIndex += 1
            })

            child.replaceWith(fragment)
            return
          }

          if (child.nodeType === Node.ELEMENT_NODE) {
            walkAndSplit(child)
          }
        })
      }

      walkAndSplit(title)
      title.classList.add('dynamic-title')
      title.dataset.wordsReady = 'true'
      return true
    }

    const ready = splitTitleWords()
    if (ready) return

    mutationObserver = new MutationObserver(() => {
      const done = splitTitleWords()
      if (done && mutationObserver) {
        mutationObserver.disconnect()
      }
    })

    mutationObserver.observe(node, {
      childList: true,
      subtree: true,
    })

    return () => {
      if (mutationObserver) {
        mutationObserver.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    const node = ref.current
    if (!node || !visible) return

    const title = node.querySelector('section h2.dynamic-title')
    if (!(title instanceof HTMLElement)) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      title.classList.add('words-in')
      return
    }

    const raf = window.requestAnimationFrame(() => {
      title.classList.add('words-in')
    })

    return () => window.cancelAnimationFrame(raf)
  }, [visible])

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      node.style.setProperty('--stage-mark-x', '0px')
      node.style.setProperty('--stage-mark-y', '0px')
      return
    }

    let frame = 0
    let pointerX = 0
    let pointerY = 0

    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

    const applyParallax = () => {
      frame = 0
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const centerDelta = (rect.top + rect.height * 0.5 - vh * 0.5) / vh
      const scrollY = clamp(-centerDelta * 22, -20, 20)
      const moveX = pointerX * 9
      const moveY = pointerY * 6 + scrollY

      node.style.setProperty('--stage-mark-x', `${moveX.toFixed(2)}px`)
      node.style.setProperty('--stage-mark-y', `${moveY.toFixed(2)}px`)
    }

    const schedule = () => {
      if (frame) return
      frame = window.requestAnimationFrame(applyParallax)
    }

    const onPointerMove = (event: PointerEvent) => {
      const x = event.clientX / (window.innerWidth || 1)
      const y = event.clientY / (window.innerHeight || 1)
      pointerX = clamp((x - 0.5) * 2, -1, 1)
      pointerY = clamp((y - 0.5) * 2, -1, 1)
      schedule()
    }

    const onScroll = () => schedule()
    const onResize = () => schedule()

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    schedule()

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
    }
  }, [])

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '-8% 0px -10% 0px',
      }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`section-stage section-stage--premium dynamic-stage ${toneClass} ${visible ? 'is-visible' : ''}`}
      data-section={section}
      data-index={index}
    >
      <span className="dynamic-stage-mark" aria-hidden="true">
        {mark}
      </span>
      <span className="dynamic-stage-beam" aria-hidden="true" />
      {children}
    </div>
  )
}
