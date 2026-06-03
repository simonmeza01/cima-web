import { NextRequest, NextResponse } from 'next/server'

const CLOUDFLARE_AGENT = 'https://cima-soporte.simonmcode01.workers.dev/chat'

export async function POST(req: NextRequest) {
  const { message, history } = await req.json()

  if (!message?.trim()) {
    return NextResponse.json({ reply: 'Por favor escribe un mensaje.' }, { status: 400 })
  }

  // Construye historial: mensajes previos + el nuevo
  const fullHistory = [
    ...(Array.isArray(history) ? history : []),
    { role: 'user', content: message },
  ]

  try {
    const res = await fetch(CLOUDFLARE_AGENT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ history: fullHistory }),
    })
    const data = await res.json()
    return NextResponse.json({ reply: data.reply ?? 'Sin respuesta del agente.' })
  } catch {
    return NextResponse.json(
      { reply: 'Error al contactar el servicio. Intenta de nuevo más tarde.' },
      { status: 500 }
    )
  }
}
