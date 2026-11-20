'use client'

import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { useState } from 'react'

const qs = [
  { question: 'Where does it feel right?', options: ['Sea', 'Palace', 'City', 'Garden'] },
  { question: 'How should the days move?', options: ['Unhurried', 'Lively', 'A bit of both'] },
  { question: 'Who is in the room?', options: ['Intimate', 'Family, all of it', 'A big gathering'] },
] as const

export default function Feel() {
  const [i, setI] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const done = i === qs.length

  return (
    <main className="inner-page">
      <header className="site-header">
        <div className="wrap bar">
          <Link className="mark" href="/" aria-label="Ever After Weddings home">
            <b>E<i>∞</i>A</b><span>Ever After Weddings</span>
          </Link>
          <nav className="nav" aria-label="Main navigation">
            <Link href="/celebrations">Celebrations</Link>
            <Link href="/approach">Approach</Link>
            <Link href="/feel">Find your feeling</Link>
            <Link className="btn" href="/plan">Plan with us</Link>
          </nav>
        </div>
      </header>

      <section className="feel-page">
        <Reveal>
          <div className="wrap feel-grid">
            <div>
              <p className="eyebrow">Before we speak</p>
              <h1>What should your day <em>feel</em> like?</h1>
              <p className="lead">Three quick questions. No packages. No pricing. Just the first picture of the celebration you are imagining.</p>
            </div>

            <div className="feel-card">
              {!done ? (
                <>
                  <p className="eyebrow">Question {i + 1} of {qs.length}</p>
                  <h2>{qs[i].question}</h2>
                  <div className="feel-options">
                    {qs[i].options.map((v: string) => (
                      <button key={v} type="button" onClick={() => { setAnswers(prev => [...prev, v]); setI(prev => prev + 1) }}>
                        <b>{v}</b><span>That sounds like you.</span>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <p className="eyebrow">Your feeling</p>
                  <h2>{answers.join(' · ')}</h2>
                  <p className="lead">A celebration with a point of view. Tell us the date, the people and the feeling, and we’ll take it from there.</p>
                  <Link className="btn" href="/plan">Share it with us ↗</Link>
                  <button className="text-button" type="button" onClick={() => { setI(0); setAnswers([]) }}>Start again</button>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
