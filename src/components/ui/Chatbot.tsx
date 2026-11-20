'use client'

import { FormEvent, useState } from 'react'

type Message = { from: 'bot' | 'user'; text: string }

const quick = ['How do you plan weddings?', 'What does planning cost?', 'Destination weddings', 'Talk to Yuga']

export function Chatbot(){
 const [open,setOpen]=useState(false)
 const [input,setInput]=useState('')
 const [loading,setLoading]=useState(false)
 const [messages,setMessages]=useState<Message[]>([{from:'bot',text:'Welcome to EverAfter. I’m your wedding concierge. Tell me what you’re planning.'}])

 async function send(text=input){
  if(!text.trim()||loading)return
  setMessages(m=>[...m,{from:'user',text}]);setInput('');setLoading(true)
  try{
   const r=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:text})})
   const data=await r.json()
   setMessages(m=>[...m,{from:'bot',text:data.reply||'Tell me your date, city and guest count and we’ll take it from there.'}])
  }catch{
   setMessages(m=>[...m,{from:'bot',text:'I couldn’t connect just now. You can reach Yuga directly on WhatsApp.'}])
  }finally{setLoading(false)}
 }
 function submit(e:FormEvent){e.preventDefault();send()}
 const wa='https://wa.me/919167411088?text='+encodeURIComponent('Hi Yuga, I found Ever After through the website and would love to discuss my wedding.')
 return <>
  <button className="concierge-trigger" onClick={()=>setOpen(v=>!v)} aria-label="Open EverAfter Concierge" aria-expanded={open}>
   <span className="concierge-symbol">E∞A</span><span>{open?'Close':'Concierge'}</span>
  </button>
  {open&&<section className="concierge-panel" aria-label="EverAfter Concierge">
   <div className="concierge-head"><div><div className="concierge-title">EverAfter Concierge</div><div className="concierge-kicker">A QUIET PLACE TO START</div></div><button onClick={()=>setOpen(false)} aria-label="Close concierge">×</button></div>
   <div className="concierge-messages" aria-live="polite">{messages.map((m,i)=><div key={i} className={'c-msg '+m.from}>{m.text}</div>)}{loading&&<div className="c-msg bot typing">Thinking…</div>}</div>
   <div className="concierge-quick">{quick.map(q=><button key={q} onClick={()=>send(q)} disabled={loading}>{q}</button>)}</div>
   <form onSubmit={submit} className="concierge-form"><input value={input} onChange={e=>setInput(e.target.value)} placeholder="Ask about your wedding…" aria-label="Ask EverAfter Concierge"/><button disabled={loading} aria-label="Send message">↗</button></form>
   <a className="concierge-wa" href={wa} target="_blank" rel="noopener">Prefer WhatsApp? Talk to Yuga ↗</a>
  </section>}
 </>
}
