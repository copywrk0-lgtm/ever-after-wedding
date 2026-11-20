import type { ReactNode } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { SiteHeader } from '@/components/SiteHeader'
export function PageIntro({eyebrow,title,body}:{eyebrow:string,title:ReactNode,body?:string}){
 return <><SiteHeader/><section className="page-intro"><div className="page-watermark" aria-hidden="true">EA</div><Reveal><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{body&&<p className="intro-body">{body}</p>}</Reveal></section></>
}
