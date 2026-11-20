import Link from 'next/link'
import Image from 'next/image'
import { Reveal } from '@/components/ui/Reveal'
import { PageIntro } from '@/components/PageIntro'

const services = [
  { no:'01', title:'Full planning', text:'From first brief to final guest departure. We hold the moving parts so you can hold the moment.', image:'/images/0006-2be554e6.webp' },
  { no:'02', title:'Creative direction', text:'A clear visual world for the venue, flowers, tables, rituals, stationery and every detail in between.', image:'/images/0005-92ee3c21.webp' },
  { no:'03', title:'Destination weddings', text:'India, Bahrain and wherever the celebration takes you. We plan the place as carefully as the day.', image:'/images/0007-227c860a.webp' },
  { no:'04', title:'On-day production', text:'Timelines, vendors, people, logistics and last-minute problems handled quietly behind the scenes.', image:'/images/0003-070e7f6e.jpg' },
]

const included = ['Venue + vendor curation','Design direction + styling','Guest experience','Production + timelines','Travel + destination logistics','On-day coordination']

export default function Services(){
  return <>
    <PageIntro eyebrow="02 — What we do" title={<>Beautifully planned.<br/><em>Quietly handled.</em></>} body="A small, considered set of services for celebrations that deserve more than a template." />
    <main className="services-page">
      <section className="services-intro">
        <Reveal>
          <p className="eyebrow">The work behind the feeling</p>
          <h2>Less to manage.<br/><em>More to remember.</em></h2>
        </Reveal>
      </section>

      <section className="services-list">
        {services.map((s,i)=>(
          <Reveal key={s.no} delay={i*.06}>
            <article className="service-row">
              <div className="service-number">{s.no}</div>
              <div className="service-copy">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <div className="service-image"><Image src={s.image} alt={s.title} fill sizes="(max-width:650px) 100vw, 38vw" /></div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="included-section">
        <Reveal>
          <div className="included-head">
            <div><p className="eyebrow">What sits inside</p><h2>The details<br/><em>matter.</em></h2></div>
            <p>Every celebration is scoped around the people, place and pace of your day. No fixed package pretending every wedding is the same.</p>
          </div>
          <div className="included-grid">
            {included.map((item,i)=><div key={item}><span>0{i+1}</span><strong>{item}</strong></div>)}
          </div>
        </Reveal>
      </section>

      <section className="services-cta">
        <Reveal>
          <p className="eyebrow light">05 — Start here</p>
          <h2>Have the date.<br/><em>Bring the feeling.</em></h2>
          <Link href="/plan" className="button button-gold">Plan with us ↗</Link>
        </Reveal>
      </section>
    </main>
  </>
}
