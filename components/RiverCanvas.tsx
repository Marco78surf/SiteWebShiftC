'use client'

import { useEffect, useRef } from 'react'

const NUM_RINGS = 8
const FLOW_SPEED = 0.117

export default function RiverCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const cvs = ref.current
    if (!cvs) return
    const ctx = cvs.getContext('2d')
    if (!ctx) return
    if (window.innerWidth < 768) return

    let animId = 0
    let vw = 0, vh = 0

    function resize() {
      const dpr = window.devicePixelRatio || 1
      vw = window.innerWidth
      vh = window.innerHeight
      cvs!.width  = vw * dpr
      cvs!.height = vh * dpr
      cvs!.style.width  = `${vw}px`
      cvs!.style.height = `${vh}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    // Convergence en coords VIEWPORT, recalcule chaque frame
    function getConv(): { x: number; y: number } {
      const el =
        document.getElementById('cta-center') ??
        document.querySelector('footer')
      if (el) {
        const r = el.getBoundingClientRect()
        return { x: r.left + r.width * 0.5, y: r.top + r.height * 0.5 }
      }
      return { x: vw * 0.5, y: vh * 0.85 }
    }

    function drawRing(
      progress: number,
      time: number,
      convX: number,
      convY: number,
      maxR: number
    ) {
      // arcScreenY : 0 (top viewport) → convY (convergence)
      const arcScreenY = progress * convY
      if (arcScreenY < -300 || arcScreenY > vh + 300) return

      const radius = maxR * (1 - progress)
      if (radius < 4) return

      const gapHalf   = Math.PI * 0.18
      const rot       = time * 0.05 * (progress < 0.5 ? 1 : -0.8)
      const startAngle = gapHalf + rot
      const endAngle   = Math.PI * 2 - gapHalf + rot

      const alpha = 0.02 + (1 - progress) * 0.13
      const lineW = 0.5  + (1 - progress) * 1.4

      ctx!.beginPath()
      ctx!.arc(convX, arcScreenY, radius, startAngle, endAngle)
      ctx!.strokeStyle = `rgba(110,222,160,${alpha.toFixed(3)})`
      ctx!.lineWidth = lineW
      ctx!.lineCap = 'round'

      if (progress < 0.2) {
        ctx!.shadowBlur  = 16
        ctx!.shadowColor = '#6edea0'
      }
      ctx!.stroke()
      ctx!.shadowBlur = 0
    }

    function drawConvergenceDot(
      time: number,
      convX: number,
      convY: number
    ) {
      if (convY < -60 || convY > vh + 60) return

      const pulse = 3.5 + Math.sin(time * 2.2) * 1.8

      const g = ctx!.createRadialGradient(convX, convY, 0, convX, convY, 80)
      g.addColorStop(0,   'rgba(110,222,160,0.28)')
      g.addColorStop(0.4, 'rgba(62,178,78,0.08)')
      g.addColorStop(1,   'rgba(62,178,78,0)')
      ctx!.beginPath()
      ctx!.arc(convX, convY, 80, 0, Math.PI * 2)
      ctx!.fillStyle = g
      ctx!.fill()

      ctx!.beginPath()
      ctx!.arc(convX, convY, pulse, 0, Math.PI * 2)
      ctx!.fillStyle = '#b8fad8'
      ctx!.shadowBlur  = 35
      ctx!.shadowColor = '#6edea0'
      ctx!.fill()
      ctx!.shadowBlur = 0

      ctx!.beginPath()
      ctx!.arc(convX, convY, pulse * 0.4, 0, Math.PI * 2)
      ctx!.fillStyle = 'rgba(255,255,255,0.92)'
      ctx!.fill()
    }

    const t0 = performance.now()

    function frame() {
      const time = (performance.now() - t0) / 1000
      const { x: convX, y: convY } = getConv()

      ctx!.clearRect(0, 0, vw, vh)

      // maxR : grand en haut de page, ≈ rayon de l'anneau ext. du logo C (34px) en bas
      const maxScroll  = document.documentElement.scrollHeight - vh
      const scrollRatio = maxScroll > 0 ? Math.min(1, window.scrollY / maxScroll) : 0
      const maxRStart  = Math.min(vw * 0.44, vh * 0.45)
      const maxREnd    = 34 // diamètre 67px = rayon ~34px (anneau ext. du logo)
      const maxR       = maxRStart + (maxREnd - maxRStart) * scrollRatio

      // Vitesse normalisée : compense la réduction de convY au scroll
      // pour garder une vitesse visuelle constante en pixels/s
      const dynamicSpeed = convY > 10
        ? FLOW_SPEED * vh / convY
        : FLOW_SPEED

      if (convY > -100) {
        for (let i = 0; i < NUM_RINGS; i++) {
          const base     = i / NUM_RINGS
          const progress = (base + time * dynamicSpeed) % 1
          drawRing(progress, time, convX, convY, maxR)
        }
      }

      animId = requestAnimationFrame(frame)
    }

    resize()
    animId = requestAnimationFrame(frame)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="hidden md:block"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 3,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  )
}
