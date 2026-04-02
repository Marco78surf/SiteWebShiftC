import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { prenom, nom, email, message } = body

    if (!prenom || !nom || !email || !message) {
      return NextResponse.json({ error: 'Champs manquants' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const toEmail = process.env.CONTACT_EMAIL || 'contact@shiftc.fr'

    if (!apiKey) {
      console.log('📧 [Candidature] Nouvelle candidature:', { prenom, nom, email })
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
        subject: `[ShiftC] Nouvelle candidature — ${prenom} ${nom}`,
        html: `
          <h2>Nouvelle candidature ShiftC</h2>
          <p><strong>Nom :</strong> ${prenom} ${nom}</p>
          <p><strong>Email :</strong> ${email}</p>
          <hr />
          <p><strong>Message :</strong></p>
          <p>${message.replace(/\n/g, '<br />')}</p>
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
