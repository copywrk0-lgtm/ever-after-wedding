import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
const cormorant=Cormorant_Garamond({subsets:['latin'],variable:'--font-cormorant',display:'swap'})
const inter=Inter({subsets:['latin'],variable:'--font-inter',display:'swap'})
export const metadata: Metadata={title:'[Planner Name] — Premium Indian Wedding Planning',description:'Bespoke Indian wedding planning, design and production.',openGraph:{title:'[Planner Name] — Premium Indian Wedding Planning',description:'We plan it. You live it.',type:'website'}}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${cormorant.variable} ${inter.variable}`}>{children}</body></html>}
