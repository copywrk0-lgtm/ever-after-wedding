'use client'
import Link from 'next/link'
import { useState } from 'react'

export function SiteHeader(){
 const [open,setOpen]=useState(false)
 return <header className="site-header">
  <Link href="/" className="brand" aria-label="Ever After Weddings home"><span className="brand-mark">E<span>∞</span>A</span><span className="brand-name">EVER AFTER<small>WEDDINGS</small></span></Link>
  <nav className="desktop-nav" aria-label="Main navigation"><Link href="/celebrations">Celebrations</Link><Link href="/services">Services</Link><Link href="/approach">Approach</Link><Link href="/feel">Your feeling</Link><Link className="nav-cta" href="/plan">Plan with us ↗</Link></nav>
  <button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open?'Close':'Menu'} <span>—</span></button>
  {open&&<div className="mobile-nav"><Link onClick={()=>setOpen(false)} href="/celebrations">Celebrations</Link><Link onClick={()=>setOpen(false)} href="/services">Services</Link><Link onClick={()=>setOpen(false)} href="/approach">Approach</Link><Link onClick={()=>setOpen(false)} href="/feel">Find your feeling</Link><Link onClick={()=>setOpen(false)} href="/plan">Plan with us ↗</Link></div>}
 </header>
}
