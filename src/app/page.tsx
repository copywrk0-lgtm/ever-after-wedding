import { MotionConfig } from 'framer-motion'
import { Hero } from '@/components/sections/Hero'
import { Quiz } from '@/components/sections/Quiz'
import { Budget } from '@/components/sections/Budget'
import { Portfolio } from '@/components/sections/Portfolio'
import { Process } from '@/components/sections/Process'
import { Packages } from '@/components/sections/Packages'
import { Testimonials } from '@/components/sections/Testimonials'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'
import { WhatsApp } from '@/components/ui/WhatsApp'
import { Chatbot } from '@/components/ui/Chatbot'

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden">
        <Hero />
        <Quiz />
        <Portfolio />
        <Process />
        <Budget />
        <Packages />
        <Testimonials />
        <Contact />
        <Footer />
        <WhatsApp />
        <Chatbot />
      </main>
    </MotionConfig>
  )
}
