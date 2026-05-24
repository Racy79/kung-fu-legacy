import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const RECIPIENTS = [
  'rafaelgonzalezrosado@gmail.com',
]

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await req.json()
  const { fullName, phone, email, experience, profession, whyTrain, whatYouBring, developGoals, commitToTraining, acceptChallenge, willTravel, understandCommunity } = body

  const html = `
    <h2 style="color:#C6A962;margin:0 0 16px">🥋 New Application — Kung Fu Legacy</h2>
    <table style="font-family:sans-serif;font-size:15px;color:#1a1a1a;border-collapse:collapse">
      <tr><td style="padding:6px 16px 6px 0;color:#666">Name</td><td style="padding:6px 0"><strong>${fullName}</strong></td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Phone</td><td style="padding:6px 0">${phone}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Email</td><td style="padding:6px 0">${email}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Experience</td><td style="padding:6px 0">${experience}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Profession / What they're building</td><td style="padding:6px 0">${profession}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Why they want to train</td><td style="padding:6px 0">${whyTrain}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">What they bring</td><td style="padding:6px 0">${whatYouBring}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Goals</td><td style="padding:6px 0">${Array.isArray(developGoals) ? developGoals.join(', ') : developGoals}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Can commit</td><td style="padding:6px 0">${commitToTraining}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Ready to be led</td><td style="padding:6px 0">${acceptChallenge}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Will travel</td><td style="padding:6px 0">${willTravel}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666">Understands community</td><td style="padding:6px 0">${understandCommunity}</td></tr>
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
