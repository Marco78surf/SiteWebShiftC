'use client'

import { useEffect } from 'react'

/**
 * Observes every <h1> and <h2> on the page.
 * When one enters the viewport (threshold 0.3), its text is split
 * into individual letter <span>s that animate in with a staggered
 * wave effect (translateY + opacity + micro-blur).
 */
export default function TitleAnimator() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    /* inject keyframes + base class ----------------------------- */
    const style = document.createElement('style')
    style.textContent = `
      @keyframes river-letter-in {
        0%   { transform: translateY(-6px); opacity: 0; filter: blur(4px); }
        60%  { transform: translateY(0);    opacity: 1; filter: blur(0);   }
        80%  { transform: translateY(-2px); opacity: 1; filter: blur(0);   }
        100% { transform: translateY(0);    opacity: 1; filter: blur(0);   }
      }
      .river-letter {
        display: inline-block;
        opacity: 0;
        will-change: transform;
      }
    `
    document.head.appendChild(style)

    /* letter-splitting helper ----------------------------------- */
    const done = new WeakSet<Element>()

    function splitLetters(el: HTMLElement) {
      if (done.has(el)) return
      done.add(el)

      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
      const nodes: Text[] = []
      let n: Node | null
      while ((n = walker.nextNode())) nodes.push(n as Text)

      let idx = 0
      for (const textNode of nodes) {
        const text = textNode.textContent ?? ''
        if (!text) continue

        const frag = document.createDocumentFragment()
        for (const ch of text) {
          if (/\s/.test(ch)) {
            frag.appendChild(document.createTextNode(ch))
            continue
          }
          const span = document.createElement('span')
          span.className = 'river-letter'
          span.textContent = ch
          span.style.animation = `river-letter-in 600ms cubic-bezier(0.22,0.8,0.4,1.1) ${idx * 40}ms both`
          frag.appendChild(span)
          idx++
        }
        textNode.replaceWith(frag)
      }
    }

    /* observer -------------------------------------------------- */
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            splitLetters(entry.target as HTMLElement)
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.3 },
    )

    const titles = document.querySelectorAll('h1, h2')
    titles.forEach((t) => observer.observe(t))

    return () => {
      observer.disconnect()
      style.remove()
    }
  }, [])

  return null
}
