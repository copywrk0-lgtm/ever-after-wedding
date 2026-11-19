'use client'

import { useMemo, useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, MessageCircle, Send, Sparkles, X } from 'lucide-react'
import { CONTENT } from '@/config/content'

type Message = { id: number; from: 'bot' | 'user'; text: string }

const QUICK_REPLIES = [
  { label: 'Packages', key: 'packages' },
  { label: 'Budget', key: 'budget' },
  { label: 'What do you plan?', key: 'services' },
  { label: 'Talk to EverAfter', key: 'contact' },
]

function botReply(input: string) {
  const q = input.toLowerCase()

  if (q.includes('package') || q.includes('pricing') || q.includes('price') || q.includes('cost')) {
    return `We currently have Essential, Signature and Luxury planning experiences. Our indicative ranges are based on your guest count, events and city. ${CONTENT.budget.note}`
  }

  if (q.includes('budget') || q.includes('estimate') || q.includes('how much')) {
    return 'Absolutely. Use our Budget Estimator for a quick indicative range, or tell me your guest count, number of events and city and I can point you in the right direction.'
  }

  if (q.includes('service') || q.includes('plan') || q.includes('do you')) {
    return 'EverAfter handles the full journey: consultation, creative design, vendor curation, logistics, guest experience and wedding-day coordination.'
  }

  if (q.includes('destination') || q.includes('jaipur') || q.includes('goa') || q.includes('udaipur')) {
    return 'Yes — destination celebrations are part of the experience. We can help coordinate venues, vendors, guest logistics and the wedding weekend across locations.'
  }

  if (q.includes('contact') || q.includes('whatsapp') || q.includes('talk') || q.includes('book')) {
    return 'The easiest next step is WhatsApp. Tell us your wedding date, city and approximate guest count, and the EverAfter team can take it from there.'
  }

  if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
    return 'Hello! I’m the EverAfter Concierge ✨ I can help with packages, budgets, planning services and getting you in touch with the team.'
  }

  return 'I can help with packages, budget estimates, destination weddings and what EverAfter handles. Or, if you already know you want to talk, I can take you straight to WhatsApp.'
}

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, from: 'bot', text: 'Welcome to EverAfter. I’m your wedding concierge. How can I help?' },
  ])

  const whatsappUrl = useMemo(() => {
    const text = 'Hi EverAfter! I found you through your website and would love to discuss planning my wedding.'
    return `https://wa.me/${CONTENT.brand.phone.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`
  }, [])

  function sendMessage(text = input) {
    const clean = text.trim()
    if (!clean) return

    setMessages((previous) => [
      ...previous,
      { id: Date.now(), from: 'user', text: clean },
      { id: Date.now() + 1, from: 'bot', text: botReply(clean) },
    ])
    setInput('')
  }

  function submit(event: FormEvent) {
    event.preventDefault()
    sendMessage()
  }

  return (
    <>
      <motion.button
        type="button"
        aria-label={open ? 'Close EverAfter Concierge' : 'Open EverAfter Concierge'}
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-5 left-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-maroon text-ivory shadow-[0_16px_50px_rgba(43,43,43,.22)] focus-ring sm:left-auto sm:right-5"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.section
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            aria-label="EverAfter Concierge chat"
            className="fixed bottom-24 left-4 z-50 flex w-[calc(100vw-2rem)] max-w-[390px] flex-col overflow-hidden rounded-[28px] border border-gold/30 bg-ivory shadow-[0_25px_80px_rgba(43,43,43,.24)] sm:left-auto sm:right-5"
          >
            <header className="bg-maroon px-5 py-4 text-ivory">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/60 bg-ivory/10">
                  <Sparkles size={17} className="text-gold" />
                </div>
                <div>
                  <p className="serif text-xl leading-none">EverAfter Concierge</p>
                  <p className="mt-1 text-[11px] tracking-[.14em] text-ivory/65">WEDDING PLANNING, MADE SIMPLE</p>
                </div>
              </div>
            </header>

            <div className="max-h-[360px] min-h-[260px] space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[84%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${message.from === 'user' ? 'rounded-br-sm bg-maroon text-ivory' : 'rounded-bl-sm border border-gold/20 bg-white/70 text-charcoal'}`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gold/20 px-4 py-3">
              <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
                {QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply.key}
                    type="button"
                    onClick={() => sendMessage(reply.label)}
                    className="shrink-0 rounded-full border border-gold/35 bg-white/60 px-3 py-1.5 text-[11px] font-medium tracking-wide text-maroon transition hover:bg-maroon hover:text-ivory focus-ring"
                  >
                    {reply.label}
                  </button>
                ))}
              </div>

              <form onSubmit={submit} className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about your wedding…"
                  aria-label="Message EverAfter Concierge"
                  className="min-w-0 flex-1 rounded-full border border-gold/30 bg-white/70 px-4 py-2.5 text-sm outline-none placeholder:text-charcoal/40 focus:border-gold"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon text-ivory focus-ring"
                >
                  <Send size={16} />
                </button>
              </form>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-1 text-[11px] font-medium text-maroon hover:underline"
              >
                Prefer WhatsApp? Chat with the EverAfter team <ChevronRight size={13} />
              </a>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  )
}
