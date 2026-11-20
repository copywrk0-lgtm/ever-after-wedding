'use client'
import {AnimatePresence,motion} from 'framer-motion'
import {ArrowRight,Check} from 'lucide-react'
import {useMemo,useState} from 'react'
import {CONTENT,type QuizAnswers} from '@/config/content'

export function Quiz(){
 const [step,setStep]=useState(0),[answers,setAnswers]=useState<QuizAnswers>({})
 const done=step>=CONTENT.quiz.questions.length
 const q=CONTENT.quiz.questions[step]
 const style=useMemo(()=>answers.mood==='Regal'?'The Grand Edit':answers.mood==='Romantic'?'The Soft Romance':answers.mood==='Contemporary'?'The Modern Muse':answers.venue==='Resort'?'The Destination Escape':'The Signature Celebration',[answers])
 function choose(v:string){setAnswers(a=>({...a,[q.id]:v}));setTimeout(()=>setStep(s=>s+1),220)}
 function whatsapp(){const text=`Hi EverAfter! My wedding style is ${style}. My answers: ${Object.entries(answers).map(([k,v])=>`${k}: ${v}`).join(' · ')}`;window.open(`https://wa.me/${CONTENT.brand.phone.replace(/\D/g,'')}?text=${encodeURIComponent(text)}`,'_blank')}
 return <section id="quiz" className="bg-[#f4efe7] px-5 py-24 md:px-8 md:py-36"><div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[.7fr_1.3fr]">
  <div><p className="eyebrow">01 / Your wedding</p><h2 className="serif display text-maroon">Before the<br/><em>flowers,</em><br/>there's a feeling.</h2><p className="mt-7 max-w-sm text-sm leading-7 text-charcoal/60">Five instinctive choices. One starting point for a celebration that feels unmistakably yours.</p></div>
  <div className="border-y border-maroon/15 py-8"><div className="mb-8 flex justify-between text-[10px] font-bold uppercase tracking-[.25em]"><span>Style study</span><span className="text-gold">{done?100:Math.round(step/CONTENT.quiz.questions.length*100)}%</span></div><div className="mb-10 h-1 bg-maroon/10"><motion.div className="h-full bg-gold" animate={{width:`${done?100:step/CONTENT.quiz.questions.length*100}%`}}/></div>
   {!done?<AnimatePresence mode="wait"><motion.div key={q.id} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-16}}><p className="serif text-4xl leading-none text-maroon md:text-6xl">{q.question}</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{q.options.map(([title,desc],i)=><button key={title} onClick={()=>choose(title)} className="focus-ring group min-h-32 border border-maroon/15 bg-white/40 p-5 text-left transition hover:-translate-y-1 hover:border-gold hover:bg-white"><span className="text-[9px] font-bold text-gold">0{i+1}</span><span className="serif mt-6 block text-3xl text-maroon">{title}</span><span className="mt-1 block text-xs text-charcoal/50">{desc}</span><ArrowRight size={15} className="mt-5 text-maroon/25 group-hover:text-gold"/></button>)}</div></motion.div></AnimatePresence>
   :<motion.div initial={{opacity:0,y:15}} animate={{opacity:1,y:0}}><div className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon text-ivory"><Check size={20}/></div><p className="eyebrow mt-7">Your starting point</p><h3 className="serif text-6xl text-maroon md:text-8xl">{style}</h3><p className="mt-5 max-w-xl text-sm leading-7 text-charcoal/60">A point of view with room for personality — thoughtful hospitality, beautiful spaces and a celebration that doesn't feel like anyone else's.</p><button onClick={whatsapp} className="focus-ring mt-8 inline-flex items-center gap-7 bg-maroon px-6 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-ivory">Take this to EverAfter <ArrowRight size={15}/></button></motion.div>}
  </div>
 </div></section>
}