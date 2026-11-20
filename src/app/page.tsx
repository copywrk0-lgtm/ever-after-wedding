'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Reveal } from '@/components/ui/Reveal'
import { SiteHeader } from '@/components/SiteHeader'
import { Chatbot } from '@/components/ui/Chatbot'

const celebrations = [
  { slug:'nikki-ravi', names:'Nikki & Ravi', place:'Bahrain', image:'/images/0006-2be554e6.webp', alt:'Nikki and Ravi wedding celebration in Bahrain' },
  { slug:'yugandhara-ninad', names:'Yugandhara & Ninad', place:'Mumbai', image:'/images/0009-bb209eeb.jpg', alt:'Yugandhara and Ninad wedding celebration in Mumbai, India' },
  { slug:'gitika-anish', names:'Gitika & Anish', place:'Udaipur', image:'/images/0007-227c860a.webp', alt:'Sangeet stage at Gitika and Anish’s wedding in Udaipur' },
]
const gallery = [
  ['/images/0003-0d9743ea.jpg','Wedding ceremony details'],
  ['/images/0005-92ee3c21.webp','Floral wedding celebration'],
  ['/images/0004-2f85ac08.webp','Indian wedding couple'],
  ['/images/0001-56583b34.webp','Elegant wedding setting'],
]

export default function Home(){
 return <div className="home">
  <SiteHeader/>
  <main>
   <section className="campaign-hero">
    <div className="hero-topline"><span>MUMBAI · BAHRAIN · WORLDWIDE</span><span>WEDDING PLANNING + DESIGN</span></div>
    <div className="hero-title-wrap"><Reveal y={45}><p className="eyebrow light">THE BEAUTIFUL PART ISN'T THE PLAN.</p><h1>EVER<br/><i>AFTER</i></h1></Reveal></div>
    <motion.div className="hero-photo" initial={{opacity:0,y:80,scale:1.06}} animate={{opacity:1,y:0,scale:1}} transition={{duration:1.2,ease:[.16,1,.3,1]}}>
      <Image src="/images/0002-d2a5b732.webp" alt="Ever After wedding celebration" fill priority sizes="(max-width: 650px) 92vw, 48vw" className="object-cover object-center"  quality={100} unoptimized />
      <div className="hero-photo-caption"><span>01 / CELEBRATION</span><span>FEELING FIRST</span></div>
    </motion.div>
    <Reveal delay={.3} y={24} className="hero-copy"><p>Thoughtful wedding planning and design for people who care about the details — and want to be fully present for the day.</p><div className="hero-actions"><Link href="/plan" className="button button-gold">Start your story ↗</Link><Link href="/celebrations" className="button button-outline">See the work ↓</Link></div></Reveal>
    <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/></div>
   </section>

   <section className="intro section-light"><Reveal>
    <div className="intro-label"><span>01 — THE IDEA</span><span>FOR PEOPLE WHO NOTICE EVERYTHING</span></div>
    <div className="intro-grid"><h2>Not just a wedding.<br/><i>A day that feels like yours.</i></h2><div className="intro-text"><p>There is a difference between a beautiful wedding and a wedding that could only belong to you.</p><p>We build the second kind — with thoughtful planning, strong creative direction and a calm team behind the scenes.</p><Link href="/approach" className="under-link">Our approach ↗</Link></div></div>
   </Reveal></section>

   <section className="image-break"><motion.div className="break-image" initial={{clipPath:'inset(12% 0 12% 0)'}} whileInView={{clipPath:'inset(0% 0 0% 0)'}} viewport={{once:true,amount:.2}} transition={{duration:1.1,ease:[.16,1,.3,1]}}><Image src="/images/0005-c1516baf.webp" alt="Floral details from an Ever After wedding" fill sizes="100vw" loading="lazy" quality={100} unoptimized /></motion.div><div className="break-word">FEEL<br/><i>MORE.</i></div></section>

   <section className="marquee" aria-hidden="true"><div className="marquee-track">EVER AFTER · WEDDING PLANNING · DESIGN · DESTINATION CELEBRATIONS · MUMBAI · BAHRAIN · WORLDWIDE · EVER AFTER · WEDDING PLANNING · DESIGN · DESTINATION CELEBRATIONS · MUMBAI · BAHRAIN · WORLDWIDE ·</div></section>

   <section className="celebrations section-light"><Reveal>
    <div className="section-heading"><div><p className="eyebrow">02 — CELEBRATIONS</p><h2>Beautiful days.<br/><i>Real stories.</i></h2></div><Link href="/celebrations" className="under-link">View all celebrations ↗</Link></div>
   </Reveal>
   <div className="celebration-grid">{celebrations.map((item,index)=><Reveal key={item.slug} delay={index*.08} y={45}><Link href={'/celebrations/'+item.slug} className={'celebration-card card-'+(index+1)}><div className="celebration-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width:900px) 92vw,32vw" loading="lazy"/></div><div className="celebration-meta"><span>0{index+1}</span><div><strong>{item.names}</strong><small>{item.place}</small></div><span>↗</span></div></Link></Reveal>)}</div>
   </section>

   <section className="process section-dark"><Reveal><div className="process-head"><div><p className="eyebrow light">03 — THE WAY WE WORK</p><h2>Calm in the<br/><i>chaos.</i></h2></div><p>Good planning should make the day feel lighter, not heavier.</p></div></Reveal>
    <div className="process-list">{[['01','Listen closely','We begin with your people, priorities, traditions and the feeling you want the celebration to hold.'],['02','Shape the vision','Creative direction, venues, vendors, styling and guest experience come together as one point of view.'],['03','Build the machine','Timelines, production, logistics and every moving part are handled quietly behind the scenes.'],['04','Let you live it','On the day, you get to be present. We are already three steps ahead.']].map(([number,title,body])=><motion.article key={number} className="process-row" whileHover={{x:12}}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div><span className="process-arrow">↗</span></motion.article>)}</div>
   </section>

   <section className="gallery section-light"><Reveal><div className="section-heading"><div><p className="eyebrow">04 — THE DETAILS</p><h2>Because the little things<br/><i>are never little.</i></h2></div></div></Reveal><div className="gallery-grid">{gallery.map(([src,alt],i)=><Reveal key={src} delay={i*.05} y={35}><div className={'gallery-item gallery-'+(i+1)}><Image src={src} alt={alt} fill sizes="(max-width:900px) 92vw,45vw" loading="lazy"/></div></Reveal>)}</div></section>

   <section className="final-cta"><Reveal><p className="eyebrow light">06 — YOUR TURN</p><h2>Let's make it<br/><i>feel like yours.</i></h2><p>Tell us the date, the people, the place — or just the feeling.</p><Link href="/plan" className="button button-gold">Plan with us ↗</Link></Reveal></section>
  </main>

  <footer className="site-foot"><div><span className="brand-mark">E<span>∞</span>A</span><p>Ever After Weddings<br/>Mumbai · Bahrain · Worldwide</p></div><div><p className="eyebrow light">Explore</p><Link href="/celebrations">Celebrations</Link><Link href="/approach">Approach</Link><Link href="/feel">Your feeling</Link></div><div><p className="eyebrow light">Start a conversation</p><a href="mailto:yuga@everafter.ind.in">yuga@everafter.ind.in</a><a href="tel:+919167411088">+91 91674 11088</a><a href="https://wa.me/919167411088" target="_blank" rel="noopener">WhatsApp ↗</a></div><small>© 2026 Ever After Weddings · Mumbai / Bahrain</small></footer>
  <a className="floating-wa" href="https://wa.me/919167411088?text=Hi%20Yuga%2C%20I%E2%80%99d%20like%20to%20discuss%20our%20wedding." target="_blank" rel="noopener" aria-label="Chat with Ever After Weddings on WhatsApp">WhatsApp ↗</a>
  <Chatbot/>
 </div>
}

