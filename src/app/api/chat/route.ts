import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { message } = await req.json()
    if (!message || typeof message !== 'string') return NextResponse.json({ error: 'Message is required.' }, { status: 400 })
    const key = process.env.GEMINI_API_KEY
    if (!key) return NextResponse.json({ reply: 'The EverAfter Concierge is being connected right now. You can still reach Yuga directly on WhatsApp and we’ll help you from there.' })
    const prompt = 'You are EverAfter Concierge for Ever After Weddings, a premium wedding planning and design company serving Mumbai, Bahrain and destination celebrations worldwide.\n\nTone: warm, calm, concise, human. Never sound like a generic AI assistant. Help with wedding planning, design, guest experience, destinations, process and getting in touch. Do not invent prices, availability, venues, testimonials or guarantees. If asked for pricing, explain that scope is bespoke and offer to collect date, city, guest count and number of events. For booking/contact, suggest WhatsApp: +91 91674 11088 or email: yuga@everafter.ind.in. Keep replies under 90 words.\n\nUser message: ' + message
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=' + encodeURIComponent(key), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    })
    if (!response.ok) return NextResponse.json({ reply: 'I’m having a little trouble connecting. Please try WhatsApp and Yuga can help you directly.' })
    const data = await response.json()
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text
    return NextResponse.json({ reply: reply || 'Tell me your wedding date, city and approximate guest count, and we’ll take it from there.' })
  } catch {
    return NextResponse.json({ reply: 'Something went wrong on my side. You can reach Yuga directly on WhatsApp: +91 91674 11088.' })
  }
}