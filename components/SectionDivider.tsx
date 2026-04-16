'use client'

import { useEffect, useRef, useState } from 'react'

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setRevealed(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.45,
      }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`section-stage-divider ${revealed ? 'is-revealed' : ''}`}
      aria-hidden="true"
    />
  )
}
