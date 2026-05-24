import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function GET(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { searchParams } = new URL(req.url)
  const name = searchParams.get('name') || ''
  const email = searchParams.get('email') || ''

  if (!email) {
    return new NextResponse('Missing email', { status: 400 })
  }

  await resend.emails.send({
    from: 'Rafael Gonzalez <notificaciones@kungfu.house>',
    to: email,
    subject: 'Your application — Kung Fu Legacy',
    text: `Your application was reviewed carefully.

At this time, we will not be moving forward.

This is not a reflection of your character or your potential. The brotherhood is small by design, and selection is based on fit — for the group as much as for the individual.

The door is not permanently closed. But we do not maintain waitlists or invite reapplication on a set timeline.

We respect the fact that you applied.

Rafael Gonzalez
Kung Fu Legacy
thekungfulegacy.com`,
  })

  return new NextResponse(
    `<!DOCTYPE html><html><body style="font-family:sans-serif;max-width:480px;margin:80px auto;text-align:center;color:#1a1a1a">
      <h2 style="color:#C6A962">Rejection sent</h2>
      <p>A rejection email has been sent to <strong>${name}</strong> (${email}).</p>
    </body></html>`,
    { headers: { 'Content-Type': 'text/html' } }
  )
}
