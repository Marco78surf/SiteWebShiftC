'use client'

import { useEffect, useRef } from 'react'

/* ── config ────────────────────────────────────────────────── */
const BRANCH_X = [0.04, 0.11, 0.21, 0.33, 0.50, 0.67, 0.79, 0.89, 0.96]
const ANCHOR_T = [0, 0.22, 0.44, 0.68, 1.0] // 5 anchor points → 4 segments
const PARTICLES_PER_BRANCH = 5
const HARMONICS: readonly { freq: number; amp: number }[] = [
  { freq: 0.07, amp: 1.0 },
  { freq: 0.31, amp: 0.45 },
  { freq: 1.05, amp: 0.18 },
]
const DECAY = 0.58
const BASE_AMP = 45

interface Particle {
  t: number
  speed: number
}

export default function RiverCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId = 0
    let scrollY = 0
    let vw = 0
    let vh = 0
    let convergenceY = 0

    /* particles ------------------------------------------------- */
    const particles: Particle[][] = BRANCH_X.map(() =>
      Array.from({ length: PARTICLES_PER_BRANCH }, () => ({
        t: Math.random(),
        speed: 5e-4 + Math.random() * 8e-4,
      })),
    )

    /* helpers --------------------------------------------------- */
    function updateConvergence() {
      const el =
        document.getElementById('equipe') ??
        document.querySelector('footer')
      if (el) {
        const r = el.getBoundingClientRect()
        convergenceY = r.top + window.scrollY + r.height * 0.5
      } else {
        convergenceY = document.documentElement.scrollHeight
      }
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1
      vw = window.innerWidth
      vh = window.innerHeight
      canvas.width = vw * dpr
      canvas.height = vh * dpr
      canvas.style.width = `${vw}px`
      canvas.style.height = `${vh}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      updateConvergence()
    }

    function osc(time: number, seed: number, seg: number, extra: number) {
      const decay = Math.pow(DECAY, seg)
      let v = 0
      for (let h = 0; h < HARMONICS.length; h++) {
        v +=
          HARMONICS[h].amp *
          Math.sin(time * HARMONICS[h].freq * Math.PI * 2 + seed * (h + 1) + extra * 0.73)
      }
      return v * decay * BASE_AMP
    }

    function getAnchors(idx: number, time: number) {
      const seed = idx * 1.618 + 0.414
      const sx = BRANCH_X[idx] * vw
      const ex = vw * 0.5
      return ANCHOR_T.map((frac, i) => ({
        x: sx + (ex - sx) * frac + osc(time, seed, i, i),
        y: frac * convergenceY,
      }))
    }

    function cubicBez(a: number, b: number, c: number, d: number, t: number) {
      const u = 1 - t
      return u * u * u * a + 3 * u * u * t * b + 3 * u * t * t * c + t * t * t * d
    }

    /* draw a single branch ------------------------------------- */
    function drawBranch(idx: number, time: number) {
      const pts = getAnchors(idx, time)
      const seed = idx * 1.618 + 0.414
      const central = idx === 4

      const grad = ctx.createLinearGradient(0, 0, 0, convergenceY)
      grad.addColorStop(0, 'rgba(10,38,15,0.65)')
      grad.addColorStop(1, 'rgba(62,178,78,1)')

      ctx.beginPath()
      ctx.moveTo(pts[0].x, pts[0].y)

      for (let s = 0; s < pts.length - 1; s++) {
        const p0 = pts[s]
        const p1 = pts[s + 1]
        const dy = p1.y - p0.y
        const cp1x = p0.x + osc(time, seed + 0.33, s, s * 2 + 1) * 0.55
        const cp1y = p0.y + dy / 3
        const cp2x = p1.x + osc(time, seed + 0.77, s, s * 2 + 2) * 0.38
        const cp2y = p0.y + (dy * 2) / 3
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p1.x, p1.y)
      }

      const d = Math.abs(idx - 4) / 4
      ctx.strokeStyle = grad
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.lineWidth = central ? 1.4 : 0.7 + (1 - d) * 0.45
      ctx.globalAlpha = central ? 0.92 : 0.3 + (1 - d) * 0.38
      if (central) {
        ctx.shadowBlur = 9
        ctx.shadowColor = '#6edea0'
      }
      ctx.stroke()
      ctx.shadowBlur = 0
      ctx.globalAlpha = 1
    }

    /* position on branch at T ∈ [0,1] -------------------------- */
    function posOnBranch(idx: number, T: number, time: number) {
      const pts = getAnchors(idx, time)
      const seed = idx * 1.618 + 0.414
      const n = pts.length - 1
      const sf = T * n
      const s = Math.min(Math.floor(sf), n - 1)
      const lt = sf - s
      const p0 = pts[s]
      const p1 = pts[s + 1]
      const dy = p1.y - p0.y
      return {
        x: cubicBez(
          p0.x,
          p0.x + osc(time, seed + 0.33, s, s * 2 + 1) * 0.55,
          p1.x + osc(time, seed + 0.77, s, s * 2 + 2) * 0.38,
          p1.x,
          lt,
        ),
        y: cubicBez(p0.y, p0.y + dy / 3, p0.y + (dy * 2) / 3, p1.y, lt),
      }
    }

    /* particles ------------------------------------------------- */
    function drawParticles(idx: number, time: number) {
      for (const p of particles[idx]) {
        p.t += p.speed
        if (p.t > 1) p.t -= 1
        const pos = posOnBranch(idx, p.t, time)
        const a = Math.sin(p.t * Math.PI)
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(110,222,160,${(a * 0.7).toFixed(3)})`
        ctx.fill()
      }
    }

    /* convergence glow ------------------------------------------ */
    function drawConvergence(time: number) {
      const cx = vw * 0.5
      const cy = convergenceY
      const r = 3 + Math.sin(time * 1.4) * 2

      const hg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 22)
      hg.addColorStop(0, 'rgba(60,180,75,0.18)')
      hg.addColorStop(1, 'rgba(60,180,75,0)')
      ctx.beginPath()
      ctx.arc(cx, cy, 22, 0, Math.PI * 2)
      ctx.fillStyle = hg
      ctx.fill()

      ctx.beginPath()
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
      ctx.fillStyle = '#6edea0'
      ctx.globalAlpha = 0.85
      ctx.fill()
      ctx.globalAlpha = 1
    }

    /* main loop ------------------------------------------------- */
    const t0 = performance.now()

    function frame() {
      const time = (performance.now() - t0) / 1000
      scrollY = window.scrollY

      ctx.clearRect(0, 0, vw, vh)
      ctx.save()
      ctx.translate(0, -scrollY)

      for (let i = 0; i < BRANCH_X.length; i++) drawBranch(i, time)
      for (let i = 0; i < BRANCH_X.length; i++) drawParticles(i, time)
      drawConvergence(time)

      ctx.restore()
      animId = requestAnimationFrame(frame)
    }

    /* boot ------------------------------------------------------ */
    resize()
    animId = requestAnimationFrame(frame)

    const onResize = () => resize()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    />
  )
}
