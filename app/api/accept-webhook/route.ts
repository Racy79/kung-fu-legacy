import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const name = searchParams.get('name') || ''
  const email = searchParams.get('email') || ''

  if (!email) {
    return new NextResponse('Missing email', { status: 400 })
  }

  try {
    await fetch('https://services.leadconnectorhq.com/hooks/rIR3dkE4oVG2xej3Rs5T/webhook-trigger/06520890-7e4a-4168-8de5-78af25a988cc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name }),
    })
  } catch (err) {
    console.error('GHL accept webhook error:', err)
  }

  return new NextResponse(
    `<!DOCTYPE html><html><body style="font-family:sans-serif;max-width:480px;margin:80px auto;text-align:center;color:#1a1a1a">
      <h2 style="color:#C6A962">Acceptance sent</h2>
      <p>${name} (${email}) has been accepted and notified.</p>
    </body></html>`,
    { headers: { 'Content-Type': 'text/html' } }
  )
}
