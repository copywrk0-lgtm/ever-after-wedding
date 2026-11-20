'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { CONTENT } from '@/config/content'
import { useEffect, useState } from 'react'

export function Hero() {
  const [intro, setIntro] = useState(true)

  useEffect(() => {
    const seen = sessionStorage.getItem('everafter-intro')
    if (seen) setIntro(false)
    else sessionStorage.setItem('everafter-intro', '1')
  }, [])

  return (
    <section className="relative min-h-[100svh] bg-[#21191a] text-ivory">
      <div className="absolute inset-0 opacity-10 grain" />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col px-5 py-5 md:px-8 md:py-7">
        <nav className="flex items-center justify-between border-b border-ivory/20 pb-5">
          <a href="#" className="serif text-3xl tracking-tight">EverAfter<span className="text-gold">.</span></a>
          <div className="hidden items-center gap-8 text-[10px] font-semibold uppercase tracking-[.25em] md:flex">
            <a className="hover:text-gold transition" href="#portfolio">Stories</a>
            <a className="hover:text-gold transition" href="#process">How we work</a>
            <a className="hover:text-gold transition" href="#contact">Inquire</a>
          </div>
          <a href="#contact" className="focus-ring rounded-full border border-ivory/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[.2em]">Let's talk</a>
        </nav>

        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:py-14">
          <div className="relative z-20">
            <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.25}} className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.34em] text-gold">
              <span className="h-px w-10 bg-gold" /> Indian wedding planning, design & production
            </motion.p>

            <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.35,duration:.8}} className="serif text-balance text-[clamp(4.6rem,12vw,10.5rem)] leading-[.72] tracking-[-.055em]">
              Your story.<br /><em className="text-gold">Beautifully</em><br />orchestrated.
            </motion.h1>

            <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{delay:.55}} className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a href="#quiz" className="focus-ring inline-flex w-fit items-center gap-8 bg-gold px-6 py-4 text-[10px] font-bold uppercase tracking-[.2em] text-[#21191a] transition hover:bg-ivory">
                Begin your story <ArrowUpRight size={16} />
              </a>
              <p className="max-w-xs text-xs leading-6 text-ivory/55">From the first idea to the final farewell, we make the moving parts feel effortless.</p>
            </motion.div>
          </div>

          <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:1,delay:.2}} className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-full border border-gold/50 lg:-left-10 lg:-top-10" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[180px] border border-gold/30 bg-maroon shadow-[0_30px_100px_rgba(0,0,0,.35)]">
              <Image src={CONTENT.hero.image} alt="Wedding celebration" fill priority sizes="(max-width:1024px) 90vw, 48vw" className="object-cover scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#21191a]/65 via-transparent to-[#21191a]/10" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <p className="serif text-3xl">Made for<br />the in-between moments.</p>
                <span className="mb-1 text-[9px] font-bold uppercase tracking-[.25em] text-gold">01 / 01</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-3 bg-[#f4efe7] px-5 py-4 text-[#21191a] shadow-xl">
              <p className="text-[9px] font-bold uppercase tracking-[.22em]">New Delhi · India</p>
              <p className="serif mt-1 text-2xl">Let's make it yours.</p>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-between border-t border-ivory/15 pt-4 text-[9px] uppercase tracking-[.25em] text-ivory/40">
          <span>Scroll to explore</span>
          <span className="hidden md:block">Planning · Design · Production · Experience</span>
          <ArrowDown size={14} />
        </div>
      </div>

      {intro && (
        <motion.button
          aria-label="Skip opening animation"
          initial={{ clipPath:'inset(0 0 0 0)' }}
          animate={{ clipPath:'inset(0 50% 0 50%)' }}
          transition={{ duration:1.2, ease:[.76,0,.24,1] }}
          onClick={() => setIntro(false)}
          onAnimationComplete={() => setIntro(false)}
          className="absolute inset-0 z-50 grid place-items-center bg-[#f4efe7] text-[#21191a]"
        >
          <div className="text-center">
            <p className="serif text-7xl md:text-9xl">EverAfter<span className="text-gold">.</span></p>
            <p className="mt-3 text-[9px] font-bold uppercase tracking-[.45em]">Weddings, thoughtfully made</p>
          </div>
        </motion.button>
      )}
    </section>
  )
}
