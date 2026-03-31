import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.WEBHOOK_URL

  if (!webhookUrl) {
    return NextResponse.json({ error: 'ENV_MISSING' }, { status: 503 })
  }

  const body = await req.json()

  const emailBody = `
NEW TRAINING APPLICATION — KUNG FU LEGACY

Name: ${body.fullName}
Phone: ${body.phone}
Email: ${body.email}
Experience: ${body.experience}

Why they want to train:
${body.whyTrain}

Goals: ${Array.isArray(body.developGoals) ? body.developGoals.join(', ') : body.developGoals}

Commits to training: ${body.commitToTraining}
Accepts challenge: ${body.acceptChallenge}
Will travel: ${body.willTravel}
Community mindset: ${body.understandCommunity}
  `.trim()

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subject: 'New Training Application — Kung Fu Legacy',
        emailBody,
        source: 'kung-fu-legacy',
        ...body,
      }),
    })

    if (!res.ok) {
      return NextResponse.json({ error: `WEBHOOK_STATUS_${res.status}` }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: `FETCH_ERROR: ${err}` }, { status: 500 })
  }
}
