import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const RECIPIENTS = [
  'rafaelgonzalezrosado@gmail.com',
]

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await req.json()
  const { fullName, phone, email, experience, profession, whyTrain, whatYouBring, developGoals, commitToTraining, acceptChallenge, willTravel, understandCommunity } = body

  const encodedName = encodeURIComponent(fullName)
  const encodedEmail = encodeURIComponent(email)
  const acceptUrl = `https://thekungfulegacy.com/api/accept?name=${encodedName}&email=${encodedEmail}`
  const rejectUrl = `https://thekungfulegacy.com/api/reject?name=${encodedName}&email=${encodedEmail}`

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
    <div style="margin-top:32px;display:flex;gap:16px">
      <a href="${acceptUrl}" style="background:#C6A962;color:#0B0B0B;padding:12px 28px;text-decoration:none;font-family:sans-serif;font-weight:bold;font-size:14px">Accept</a>
      <a href="${rejectUrl}" style="background:#444;color:#fff;padding:12px 28px;text-decoration:none;font-family:sans-serif;font-weight:bold;font-size:14px;margin-left:16px">Reject</a>
    </div>
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

  try {
    await fetch('https://services.leadconnectorhq.com/hooks/rIR3dkE4oVG2xej3Rs5T/webhook-trigger/72e483cd-55e9-444e-a76f-3f73d1a52613', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch (err) {
    console.error('GHL webhook error:', err)
  }

  return NextResponse.json({ ok: true })
}
