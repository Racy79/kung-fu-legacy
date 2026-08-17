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
    subject: 'You have been accepted.',
    text: `Your application has been reviewed.

You are being invited to move forward.

This is not an offer extended lightly. Private transmission requires the right fit — presence, receptivity, and a real commitment to the practice, not simply a desire to receive it.

The next step is a direct conversation. Use the link below to schedule a time.

https://calendly.com/rafaelgonzalezrosado/30min

Come prepared. We will discuss what this commitment looks like, what you bring, and whether this is the right moment for you to begin.

Rafael Gonzalez
Kung Fu Legacy
thekungfulegacy.com`,
  })

  return new NextResponse(
    `<!DOCTYPE html><html><body style="font-family:sans-serif;max-width:480px;margin:80px auto;text-align:center;color:#1a1a1a">
      <h2 style="color:#C6A962">Acceptance sent</h2>
      <p>An acceptance email has been sent to <strong>${name}</strong> (${email}).</p>
    </body></html>`,
    { headers: { 'Content-Type': 'text/html' } }
  )
}
