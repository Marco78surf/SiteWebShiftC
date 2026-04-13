import { NextRequest, NextResponse } from 'next/server'

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60_000
const RATE_LIMIT_MAX = 3

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = rateLimitMap.get(ip)?.filter(t => now - t < RATE_LIMIT_WINDOW) || []
  if (timestamps.length >= RATE_LIMIT_MAX) return true
  timestamps.push(now)
  rateLimitMap.set(ip, timestamps)
  return false
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Trop de requêtes' }, { status: 429 })
    }

    const body = await req.json()
    const { prenom, nom, email, message } = body

    if (!prenom || !nom || !email || !message) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_EMAIL || 'contact@shiftc.fr'

    const safePrenom = escapeHtml(String(prenom))
    const safeNom = escapeHtml(String(nom))
    const safeEmail = escapeHtml(String(email))
    const safeMessage = escapeHtml(String(message)).replace(/\n/g, '<br />')

    if (!apiKey) {
      console.log('📧 [Candidature] Nouvelle candidature:', { prenom: safePrenom, nom: safeNom, email: safeEmail })
      return NextResponse.json({ ok: true })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'ShiftC Recrutement <noreply@shiftc.fr>',
        to: [toEmail],
        reply_to: email,
        subject: `[ShiftC] Nouvelle candidature — ${safePrenom} ${safeNom}`,
        html: `
          <h2>Nouvelle candidature ShiftC</h2>
          <p><strong>Nom :</strong> ${safePrenom} ${safeNom}</p>
          <p><strong>Email :</strong> ${safeEmail}</p>
          <hr />
          <p><strong>Message :</strong></p>
          <p>${safeMessage}</p>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Erreur envoi email' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
