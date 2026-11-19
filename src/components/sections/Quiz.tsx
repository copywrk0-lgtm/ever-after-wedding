'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { CONTENT } from '@/config/content'
import type { QuizAnswers } from '@/config/content'

export function Quiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswers>({})
  const question = CONTENT.quiz.questions[step]
  const done = step >= CONTENT.quiz.questions.length

  const style = useMemo(
    () =>
      answers.mood === 'Regal'
        ? 'Royal Palace Wedding'
        : answers.venue === 'Resort'
          ? 'Modern Destination Escape'
          : answers.mood === 'Romantic'
            ? 'Ivory Garden Romance'
            : 'Signature Indian Celebration',
    [answers],
  )

  function choose(value: string) {
    setAnswers((current) => ({ ...current, [question.id]: value }))
    setTimeout(() => setStep((current) => current + 1), 180)
  }

  function openWhatsApp() {
    const text = `Hi EverAfter, I took your wedding style quiz. My answers: ${Object.entries(answers)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ')}. My result: ${style}. I'd love to discuss my wedding.`
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section id="quiz" className="bg-ivory px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.25em] text-gold">Find your wedding language</p>
        <h2 className="serif text-5xl text-maroon md:text-7xl">A little taste of what could be.</h2>

        <div className="mt-10 h-1 bg-maroon/10">
          <motion.div
            className="h-full bg-gold"
            animate={{ width: `${done ? 100 : (step / CONTENT.quiz.questions.length) * 100}%` }}
          />
        </div>

        <div className="mt-8 min-h-[480px]">
          {!done ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={question.id}
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -35 }}
                className="grid gap-8 md:grid-cols-[.7fr_1.3fr]"
              >
                <div>
                  <span className="serif text-2xl text-maroon">0{step + 1}</span>
                  <p className="mt-8 text-2xl leading-tight md:text-4xl">{question.question}</p>
                  <p className="mt-4 text-sm text-charcoal/55">Choose the closest fit. There are no wrong answers.</p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {question.options.map(([title, description]) => (
                    <button
                      key={title}
                      onClick={() => choose(title)}
                      className="focus-ring group min-h-44 border border-maroon/10 bg-white/60 p-5 text-left transition hover:-translate-y-1 hover:border-gold hover:shadow-xl"
                    >
                      <span className="serif text-2xl text-maroon">{title}</span>
                      <span className="mt-2 block text-xs leading-5 text-charcoal/55">{description}</span>
                      <span className="mt-8 block text-gold opacity-0 transition group-hover:opacity-100">↗</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-gold/40 bg-white p-8 md:p-14"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[.25em] text-gold">Your wedding style</p>
              <h3 className="serif mt-3 text-5xl text-maroon md:text-7xl">{style}</h3>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-charcoal/65">
                A celebration with a strong point of view, generous hospitality and details that feel personal rather than prescribed. Let’s turn the mood into a plan.
              </p>
              <button
                onClick={openWhatsApp}
                className="focus-ring mt-8 bg-maroon px-6 py-4 text-xs font-bold uppercase tracking-[.18em] text-ivory"
              >
                Discuss my wedding ↗
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
