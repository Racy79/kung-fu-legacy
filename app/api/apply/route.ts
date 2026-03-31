import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.WEBHOOK_URL

  if (!webhookUrl) {
    return NextResponse.json({ error: 'ENV_MISSING' }, { status: 503 })
  }

  const body = await req.json()

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...body, source: 'kung-fu-legacy' }),
    })

    if (!res.ok) {
      return NextResponse.json({ error: `WEBHOOK_STATUS_${res.status}` }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: `FETCH_ERROR: ${err}` }, { status: 500 })
  }
}
