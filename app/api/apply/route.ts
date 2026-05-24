import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const RECIPIENTS = [
  'rafaelgonzalezrosado@gmail.com',
  'kungfuhousepr@gmail.com',
]

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await req.json()
  const { fullName, phone, email, experience, profession, whyTrain, whatYouBring, developGoals, commitToTraining, acceptChallenge, willTravel, understandCommunity } = body

  const html = `
    <h2 style="color:#C6A962;margin:0 0 16px">🥋 Nueva Aplicación — Kung Fu Legacy</h2>
    <table style="font-family:sans-serif;font-size:15px;color:#1a1a1a;border-collapse:collapse">
      <tr><td style="padding:6px 16px 6px 0;color:#666">Nombre</td><td style="padding:6px 0"><strong>${fullName}</strong></td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Teléfono</td><td style="padding:6px 0">${phone}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Email</td><td style="padding:6px 0">${email}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Experiencia</td><td style="padding:6px 0">${experience}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Profesión / Lo que construye</td><td style="padding:6px 0">${profession}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Por qué quiere entrenar</td><td style="padding:6px 0">${whyTrain}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Lo que aporta</td><td style="padding:6px 0">${whatYouBring}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Metas</td><td style="padding:6px 0">${Array.isArray(developGoals) ? developGoals.join(', ') : developGoals}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Puede comprometerse</td><td style="padding:6px 0">${commitToTraining}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Dispuesto a ser guiado</td><td style="padding:6px 0">${acceptChallenge}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Puede viajar</td><td style="padding:6px 0">${willTravel}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Entiende comunidad</td><td style="padding:6px 0">${understandCommunity}</td></tr>
    </table>
  `

  try {
    await Promise.all(
      RECIPIENTS.map((to) =>
        resend.emails.send({
          from: 'Kung Fu Legacy <notificaciones@kungfu.house>',
          to,
          subject: `Nueva aplicación — ${fullName}`,
          html,
        })
      )
    )
  } catch (err) {
    console.error('Resend error:', err)
  }

  return NextResponse.json({ ok: true })
}
