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
const CV_MAX_SIZE = 5 * 1024 * 1024
const CV_ALLOWED_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]
const CV_ALLOWED_EXTS = ['.pdf', '.doc', '.docx']

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

    const formData = await req.formData()
    const prenom = formData.get('prenom')
    const nom = formData.get('nom')
    const email = formData.get('email')
    const message = formData.get('message')
    const cvFile = formData.get('cv')

    if (!prenom || !nom || !email || !message) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
    }

    if (!EMAIL_RE.test(String(email))) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }

    // Validate CV if provided
    let cvAttachment: { filename: string; content: string } | null = null
    if (cvFile && cvFile instanceof File && cvFile.size > 0) {
      const ext = cvFile.name.toLowerCase().slice(cvFile.name.lastIndexOf('.'))
      if (!CV_ALLOWED_TYPES.includes(cvFile.type) && !CV_ALLOWED_EXTS.includes(ext)) {
        return NextResponse.json({ error: 'Format de CV invalide' }, { status: 400 })
      }
      if (cvFile.size > CV_MAX_SIZE) {
        return NextResponse.json({ error: 'CV trop volumineux (5 Mo max)' }, { status: 400 })
      }
      const buffer = await cvFile.arrayBuffer()
      cvAttachment = {
        filename: cvFile.name,
        content: Buffer.from(buffer).toString('base64'),
      }
    }

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_EMAIL || 'contact@shiftc.fr'

    const safePrenom = escapeHtml(String(prenom))
    const safeNom = escapeHtml(String(nom))
    const safeEmail = escapeHtml(String(email))
    const safeMessage = escapeHtml(String(message)).replace(/\n/g, '<br />')

    if (!apiKey) {
      console.log('📧 [Candidature] Nouvelle candidature:', { prenom: safePrenom, nom: safeNom, email: safeEmail, cv: cvAttachment?.filename })
      return NextResponse.json({ ok: true })
    }

    const emailBody: Record<string, unknown> = {
      from: 'ShiftC Recrutement <noreply@shiftc.fr>',
      to: [toEmail],
      reply_to: email,
      subject: `[ShiftC] Nouvelle candidature — ${safePrenom} ${safeNom}`,
      html: `
        <h2>Nouvelle candidature ShiftC</h2>
        <p><strong>Nom :</strong> ${safePrenom} ${safeNom}</p>
        <p><strong>Email :</strong> ${safeEmail}</p>
        ${cvAttachment ? `<p><strong>CV :</strong> ${escapeHtml(cvAttachment.filename)} (joint en pièce jointe)</p>` : ''}
        <hr />
        <p><strong>Message :</strong></p>
        <p>${safeMessage}</p>
      `,
    }

    if (cvAttachment) {
      emailBody.attachments = [{ filename: cvAttachment.filename, content: cvAttachment.content }]
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(emailBody),
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
